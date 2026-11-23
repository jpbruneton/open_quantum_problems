// Submit site URLs to IndexNow (Bing, Yandex, Seznam, Naver…). See https://www.indexnow.org/documentation.
// The key file public/<KEY>.txt is served at the site root; the key is public by design.
//
// Usage:
//   node scripts/indexnow.cjs                                  dry run: list the sitemap URLs (no network)
//   node scripts/indexnow.cjs --since=2026-11-23               dry run: only URLs whose lastModified >= that date
//   node scripts/indexnow.cjs --only=/p/QG2,/new-research      dry run: only these paths (or full URLs)
//   node scripts/indexnow.cjs --send --all                     submit every sitemap URL
//   node scripts/indexnow.cjs --send --since=2026-11-23        submit URLs modified since that date
//   node scripts/indexnow.cjs --send --only=/p/QG2             submit these paths
//
// URLs come from app/sitemap.js as it stands in the working tree, so run the script after the
// corresponding deployment. Before sending, the live key file is checked. Each submission (date,
// HTTP status, URLs) is appended to scripts/indexnow.sent.json.
// Behind an HTTPS proxy, Node's fetch needs NODE_USE_ENV_PROXY=1 (Node >= 22.21).
const path = require("node:path");
const fs = require("node:fs");
const vm = require("node:vm");
const { transformSync } = require("next/dist/build/swc");

const KEY = "01515a7efa454252ae0b7a3600e9f757";
const ENDPOINT = "https://api.indexnow.org/IndexNow";
const BATCH = 10000; // protocol limit per POST
const DELAY_MS = 5000;

const root = path.resolve(__dirname, "..");
const logFile = path.join(__dirname, "indexnow.sent.json");
const cache = new Map();

// Load the app's ESM modules with the project's compiler (as in the tests).
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

const { SITE_URL } = loadApp("app/seo.js");
const sitemap = loadApp("app/sitemap.js").default;
const HOST = new URL(SITE_URL).host;
const KEY_LOCATION = `${SITE_URL}/${KEY}.txt`;

const day = (d) => (d instanceof Date ? d.toISOString() : String(d || "")).slice(0, 10);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function readLog() {
  try {
    return JSON.parse(fs.readFileSync(logFile, "utf8"));
  } catch {
    return [];
  }
}

async function liveKeyOk() {
  const res = await fetch(KEY_LOCATION);
  return res.ok && (await res.text()).trim() === KEY;
}

async function submit(urlList) {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });
  const text = await res.text();
  return { status: res.status, ok: res.status === 200 || res.status === 202, message: text.slice(0, 300) };
}

async function main() {
  const args = process.argv.slice(2);
  const opt = (name) => (args.find((a) => a.startsWith(`--${name}=`)) || "").slice(name.length + 3);
  const send = args.includes("--send");
  const all = args.includes("--all");
  const since = opt("since");
  const only = opt("only").split(",").map((s) => s.trim()).filter(Boolean).map((s) => (s.startsWith("http") ? s : `${SITE_URL}${s.startsWith("/") ? s : `/${s}`}`));

  if (since && !/^\d{4}-\d{2}-\d{2}$/.test(since)) {
    console.error("--since expects a date YYYY-MM-DD.");
    process.exit(1);
  }
  const entries = sitemap();
  let urls = entries.map((e) => e.url);
  if (since) urls = entries.filter((e) => day(e.lastModified) >= since).map((e) => e.url);
  if (only.length) {
    const known = new Set(entries.map((e) => e.url));
    for (const u of only.filter((u) => !known.has(u))) console.warn(`warning: ${u} is not in the sitemap`);
    urls = only;
  }
  urls = [...new Set(urls)].filter((u) => new URL(u).host === HOST);

  console.log(`${entries.length} sitemap URLs; ${urls.length} selected${since ? ` (lastModified >= ${since})` : ""}.`);
  for (const u of urls) console.log(`  ${u}`);

  if (!send) {
    console.log("\nDry run: nothing sent. Use --send with --all, --since=<date> or --only=<paths>.");
    return;
  }
  if (!all && !since && only.length === 0) {
    console.error("--send requires --all, --since=<date> or --only=<paths>.");
    process.exit(1);
  }
  if (urls.length === 0) return;
  if (!(await liveKeyOk())) {
    console.error(`The key file ${KEY_LOCATION} is not live or does not contain the key; nothing sent.`);
    process.exit(1);
  }

  const log = readLog();
  let failed = false;
  for (let i = 0; i < urls.length; i += BATCH) {
    if (i > 0) await sleep(DELAY_MS);
    const batch = urls.slice(i, i + BATCH);
    const r = await submit(batch);
    console.log(`${r.ok ? "SENT" : "FAIL"} ${batch.length} URLs (HTTP ${r.status})${r.message ? `: ${r.message}` : ""}`);
    log.push({ date: new Date().toISOString(), status: r.status, count: batch.length, ...(since ? { since } : {}), urls: batch });
    fs.writeFileSync(logFile, `${JSON.stringify(log, null, 2)}\n`);
    if (!r.ok) failed = true;
  }
  if (failed) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
