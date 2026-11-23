// Trackbacks to arXiv for the claimed solutions of "Claimed solved" entries.
// See https://info.arxiv.org/help/trackback.html (moderated; arXiv may reject any trackback).
//
// Usage:
//   node scripts/arxiv-trackbacks.cjs                      dry run: list what would be sent (no network)
//   node scripts/arxiv-trackbacks.cjs --send --only=2611.03241,M1
//                                                          send only these arXiv ids or entry ids
//   node scripts/arxiv-trackbacks.cjs --send --all         send every pending trackback
//
// Before sending, each entry page is fetched from the live site and must contain a link to
// https://arxiv.org/abs/<id> (otherwise the trackback is skipped: page not deployed yet).
// Sent trackbacks are recorded in scripts/arxiv-trackbacks.sent.json and never resent.
// Behind an HTTPS proxy, Node's fetch needs NODE_USE_ENV_PROXY=1 (Node >= 22.21).
const path = require("node:path");
const fs = require("node:fs");
const vm = require("node:vm");
const { transformSync } = require("next/dist/build/swc");

const SITE_URL = "https://openquantumproblems.com";
const BLOG_NAME = "Open Quantum Problems";
const DELAY_MS = 15000;

const root = path.resolve(__dirname, "..");
const sentFile = path.join(__dirname, "arxiv-trackbacks.sent.json");
const cache = new Map();

// Load the app's ESM data modules with the project's compiler (as in the tests).
function loadApp(relative) {
  const filename = path.resolve(root, relative);
  if (cache.has(filename)) return cache.get(filename).exports;
  const { code } = transformSync(fs.readFileSync(filename, "utf8"), {
    filename,
    jsc: { parser: { syntax: "ecmascript", jsx: true }, target: "es2020" },
    module: { type: "commonjs" },
  });
  const module = { exports: {} };
  cache.set(filename, module);
  const localRequire = (id) => {
    if (!id.startsWith(".")) return require(id);
    const target = path.resolve(path.dirname(filename), id.endsWith(".js") ? id : `${id}.js`);
    return loadApp(path.relative(root, target).split(path.sep).join("/"));
  };
  vm.runInThisContext(`(function(module, exports, require) { ${code}\n})`, { filename })(module, module.exports, localRequire);
  return module.exports;
}

const { PROBLEMS } = loadApp("app/data/problems.js");
const { plainText } = loadApp("app/seo.js");

const ARXIV_ABS = /^https:\/\/arxiv\.org\/abs\/((?:\d{4}\.\d{4,5}|[a-z-]+\/\d{7}))(?:v\d+)?$/;

// One trackback per (entry, arXiv paper) for evidence marked as the claimed solution.
function plannedTrackbacks() {
  const out = [];
  for (const p of PROBLEMS.filter((x) => x.status === "claimed-solved")) {
    const ids = new Set();
    for (const e of p.evidence.filter((x) => x.role === "claimed-solution")) {
      const m = String(e.url || "").match(ARXIV_ABS);
      if (m) ids.add(m[1]);
    }
    for (const arxivId of ids) {
      out.push({
        entry: p.id,
        arxivId,
        trackbackUrl: `https://arxiv.org/trackback/${arxivId}`,
        url: `${SITE_URL}/p/${p.id}`,
        title: `${p.id} · ${p.title}`,
        excerpt: plainText(`Catalogue entry, status Claimed solved (pending independent assessment). ${p.statement}`, 250),
      });
    }
  }
  return out;
}

function readSent() {
  try {
    return JSON.parse(fs.readFileSync(sentFile, "utf8"));
  } catch {
    return [];
  }
}

const key = (t) => `${t.entry}|${t.arxivId}`;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function pageLinksPaper(t) {
  const res = await fetch(t.url);
  if (!res.ok) return false;
  const html = await res.text();
  return html.includes(`arxiv.org/abs/${t.arxivId}`);
}

async function sendTrackback(t) {
  const body = new URLSearchParams({ title: t.title, url: t.url, excerpt: t.excerpt, blog_name: BLOG_NAME });
  const res = await fetch(t.trackbackUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded; charset=utf-8", "User-Agent": "trackback-client/1.0" },
    body,
  });
  const text = await res.text();
  // Trackback protocol: <error>0</error> on success, <error>1</error><message>…</message> otherwise.
  const ok = res.ok && /<error>\s*0\s*<\/error>/.test(text);
  const message = (text.match(/<message>([\s\S]*?)<\/message>/) || [])[1];
  return { ok, status: res.status, message: message || (ok ? "" : text.slice(0, 200)) };
}

async function main() {
  const args = process.argv.slice(2);
  const send = args.includes("--send");
  const all = args.includes("--all");
  const only = (args.find((a) => a.startsWith("--only=")) || "").slice(7).split(",").map((s) => s.trim()).filter(Boolean);

  const sent = readSent();
  const sentKeys = new Set(sent.map(key));
  const planned = plannedTrackbacks();
  const pending = planned.filter((t) => !sentKeys.has(key(t)));

  console.log(`${planned.length} trackbacks planned for claimed solved entries, ${planned.length - pending.length} already sent, ${pending.length} pending.\n`);
  for (const t of pending) {
    console.log(`${t.entry} -> arXiv:${t.arxivId}`);
    console.log(`  POST ${t.trackbackUrl}`);
    console.log(`  url:     ${t.url}`);
    console.log(`  title:   ${t.title}`);
    console.log(`  excerpt: ${t.excerpt}\n`);
  }

  if (!send) {
    console.log("Dry run: nothing sent. Use --send with --only=<ids> or --all.");
    return;
  }
  if (!all && only.length === 0) {
    console.error("--send requires --only=<arXiv ids or entry ids> or --all.");
    process.exit(1);
  }

  const targets = all ? pending : pending.filter((t) => only.includes(t.arxivId) || only.includes(t.entry));
  for (const [i, t] of targets.entries()) {
    if (i > 0) await sleep(DELAY_MS);
    if (!(await pageLinksPaper(t))) {
      console.log(`SKIP ${key(t)}: ${t.url} is not live or does not link arxiv.org/abs/${t.arxivId}`);
      continue;
    }
    const r = await sendTrackback(t);
    console.log(`${r.ok ? "SENT" : "FAIL"} ${key(t)} (HTTP ${r.status})${r.message ? `: ${r.message}` : ""}`);
    if (r.ok) {
      sent.push({ entry: t.entry, arxivId: t.arxivId, url: t.url, date: new Date().toISOString().slice(0, 10) });
      fs.writeFileSync(sentFile, `${JSON.stringify(sent, null, 2)}\n`);
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
