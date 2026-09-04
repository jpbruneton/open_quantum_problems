const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { test } = require("node:test");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const katex = require("katex");
const { transformSync } = require("next/dist/build/swc");

const root = path.resolve(__dirname, "..");
const cache = new Map();

// Compile the actual app modules with the project's existing compiler. No
// browser, network, generated files or extra dependencies are needed.
function loadApp(relative) {
  const filename = path.resolve(root, relative);
  if (cache.has(filename)) return cache.get(filename).exports;
  let source = fs.readFileSync(filename, "utf8");
  if (relative === "app/page.js") {
    source += "\nexport const testViews = { Home, CategoryView, SharpView, ProblemView, ReviewView, NotFound, truncate };";
  }
  const { code } = transformSync(source, {
    filename,
    jsc: {
      parser: { syntax: "ecmascript", jsx: true },
      target: "es2020",
      transform: { react: { runtime: "automatic" } },
    },
    module: { type: "commonjs" },
  });
  const module = { exports: {} };
  cache.set(filename, module);
  const localRequire = (id) => {
    if (!id.startsWith(".")) return require(id);
    const target = path.resolve(path.dirname(filename), id.endsWith(".js") ? id : `${id}.js`);
    return loadApp(path.relative(root, target).split(path.sep).join("/"));
  };
  const run = vm.runInThisContext(`(function(module, exports, require) { ${code}\n})`, { filename });
  run(module, module.exports, localRequire);
  return module.exports;
}

const data = loadApp("app/data/problems.js");
const { ALL_PROBLEMS, PROBLEMS, ARCHIVED_PROBLEMS, CATEGORIES, HORIZONS, STATUSES, EVIDENCE_KINDS, REVIEW, getProblem, problemsByCat } = data;
const views = loadApp("app/page.js").testViews;
const render = (view, props) => renderToStaticMarkup(React.createElement(view, props));
const originalSeries = { M: 11, B: 12, QF: 10, E: 15, N: 10, C: 10, A: 18, U: 5, O: 9, F: 11 };
const additions = ["M12", "M13", "B13", "B14", "B15", "E16", "N11", "C11", "C12", "A19", "QF11", "O10"];
const archiveTargets = { M3: ["M2"], M11: ["C10"], E2: ["E1"], E15: ["F7"], N9: ["N6", "N5"], A16: ["A11"], QF4: ["QF1", "QF3", "QF5"], F2: ["F3", "F1"], F11: ["F8", "O7"], U5: [] };

function validUrl(value, label) {
  const url = new URL(value);
  assert.equal(url.protocol, "https:", `${label}: source must use HTTPS`);
  assert.ok(!url.username && !url.password, `${label}: no credentials in URLs`);
}

test("all 111 original IDs remain addressable; 12 additions and 10 archives are counted correctly", () => {
  assert.equal(ALL_PROBLEMS.length, 123);
  assert.equal(PROBLEMS.length, 113);
  assert.equal(ARCHIVED_PROBLEMS.length, 10);
  assert.equal(new Set(ALL_PROBLEMS.map((p) => p.id)).size, ALL_PROBLEMS.length);
  for (const [prefix, n] of Object.entries(originalSeries)) {
    for (let i = 1; i <= n; i++) assert.ok(getProblem(`${prefix}${i}`), `lost original ${prefix}${i}`);
  }
  for (const id of additions) assert.ok(PROBLEMS.some((p) => p.id === id), `missing active addition ${id}`);
  assert.equal(REVIEW.added, additions.length);
});

test("archives point to active parents and never appear in active category lists", () => {
  assert.deepEqual(ARCHIVED_PROBLEMS.map((p) => p.id).sort(), Object.keys(archiveTargets).sort());
  for (const p of ARCHIVED_PROBLEMS) {
    assert.deepEqual([...p.archive.targets].sort(), [...archiveTargets[p.id]].sort(), p.id);
    assert.equal(p.archive.kind, p.id === "U5" ? "background" : "merged");
    assert.ok(p.archive.reason);
    assert.ok(!problemsByCat(p.cat).some((entry) => entry.id === p.id), p.id);
    for (const id of p.archive.targets) assert.ok(getProblem(id) && !getProblem(id).archive, `${p.id} -> ${id}`);
  }
});

test("every entry has valid metadata, references and internal relations", () => {
  for (const p of ALL_PROBLEMS) {
    for (const key of ["id", "title", "statement", "context", "cat"]) assert.ok(typeof p[key] === "string" && p[key].trim(), `${p.id}.${key}`);
    assert.ok(CATEGORIES.some((c) => c.slug === p.cat), p.id);
    assert.ok(HORIZONS[p.horizon] && STATUSES[p.status], p.id);
    assert.equal(p.reviewedAt, REVIEW.date);
    assert.ok(p.refs.length > 0, `${p.id}: references`);
    for (const ref of p.refs) {
      assert.ok(ref.label, `${p.id}: source label`);
      assert.ok(ref.url, `${p.id}: missing source URL for ${ref.label}`);
      validUrl(ref.url, p.id);
    }
    for (const rel of p.relations) {
      assert.ok(getProblem(rel.id), `${p.id}: unknown related ID ${rel.id}`);
      assert.notEqual(rel.id, p.id, `${p.id}: self-relation`);
      assert.ok(["parent", "benchmark", "reduction", "related"].includes(rel.type), `${p.id}: relation type`);
    }
    for (const item of p.evidence) {
      assert.ok(EVIDENCE_KINDS[item.kind], `${p.id}: unknown evidence kind ${item.kind}`);
      assert.ok(item.summary, `${p.id}: evidence scope`);
      validUrl(item.url, p.id);
      if (item.date) {
        assert.equal(new Date(item.date).toISOString().slice(0, 10), item.date, `${p.id}: evidence date`);
        assert.ok(item.date <= REVIEW.date, `${p.id}: future evidence presented as already reviewed`);
      }
      if (item.version) assert.match(item.version, /^v[1-9]\d*$/, `${p.id}: version`);
    }
    for (const item of p.provenance) {
      assert.ok(item.summary, `${p.id}: provenance summary`);
      validUrl(item.url, p.id);
    }
  }
});

test("priority scientific corrections retain the supporting sources", () => {
  const anchors = {
    A4: "0806.0450", N3: "CJM-1989-049-4", N7: "s41467-026-70829-x",
    M2: "1706.06135", B12: "2103.15828", U4: "2601.22471v3",
    O6: "2510.05642", F9: "2605.08351", QF8: "s00220-025-05465-5",
  };
  for (const [id, source] of Object.entries(anchors)) {
    assert.ok(getProblem(id).refs.some((ref) => ref.url?.includes(source)), `${id}: missing corrective source ${source}`);
  }
  const werner = getProblem("E2");
  assert.ok(werner.refs.some((r) => r.url.includes("2607.24479") && r.label.includes("Bharti")));
  assert.ok(werner.refs.some((r) => r.url.includes("2607.24309") && r.label.includes("Fraser")));
  assert.ok(werner.provenance.some((p) => p.url.includes("2607.21367v2")));
  assert.ok(getProblem("A17").provenance.some((p) => p.url.includes("2608.20113v1")));
});

test("all mathematical expressions parse with KaTeX and have balanced delimiters", () => {
  for (const p of ALL_PROBLEMS) {
    const texts = [p.statement, p.context, ...p.evidence.map((e) => e.summary), ...p.provenance.map((e) => e.summary)];
    for (const text of texts) {
      let at = 0;
      while ((at = text.indexOf("$", at)) !== -1) {
        const delimiter = text.startsWith("$$", at) ? "$$" : "$";
        const end = text.indexOf(delimiter, at + delimiter.length);
        assert.notEqual(end, -1, `${p.id}: unclosed math delimiter`);
        const math = text.slice(at + delimiter.length, end);
        assert.doesNotThrow(() => katex.renderToString(math, { throwOnError: true, strict: false, displayMode: delimiter === "$$" }), `${p.id}: ${math}`);
        at = end + delimiter.length;
      }
    }
  }
});

test("every active and archived detail view renders with valid links and Astra credit", () => {
  for (const p of ALL_PROBLEMS) {
    const html = render(views.ProblemView, { id: p.id });
    assert.ok(html.includes("powered by Astra"), p.id);
    assert.ok(!html.includes("katex-error"), `${p.id}: math rendering error`);
    assert.ok(!html.includes('href="undefined"'), `${p.id}: broken href`);
    for (const match of html.matchAll(/href="#p\/([^"<>]+)"/g)) assert.ok(getProblem(match[1]), `${p.id}: broken rendered link ${match[1]}`);
    if (p.archive) {
      assert.ok(html.includes("Catalogue disposition"), p.id);
      assert.ok(!html.includes("st-open") && !html.includes("st-improved"), `${p.id}: archive presented as active`);
    }
  }
});

test("home, all categories, sharp list, policy and missing-page views render", () => {
  const home = render(views.Home);
  assert.ok(home.includes("113") && home.includes("Active entries"));
  assert.ok(home.includes("#review") && home.includes("powered by Astra"));
  assert.ok(!home.includes("IDs M1–"), "category count must not fabricate contiguous IDs");
  for (const c of CATEGORIES) {
    const html = render(views.CategoryView, { slug: c.slug });
    for (const p of problemsByCat(c.slug)) assert.ok(html.includes(`#p/${p.id}`), `${c.slug}: missing ${p.id}`);
  }
  const sharp = render(views.SharpView);
  for (const p of ARCHIVED_PROBLEMS) assert.ok(!sharp.includes(`href="#p/${p.id}"`), `archived ${p.id} in sharp list`);
  const policy = render(views.ReviewView);
  for (const p of ARCHIVED_PROBLEMS) assert.ok(policy.includes(`#p/${p.id}`), p.id);
  assert.ok(policy.includes("Research watchlist"));
  assert.ok(render(views.ProblemView, { id: "missing" }).includes("Not found"));
  assert.ok(render(views.CategoryView, { slug: "missing" }).includes("Not found"));
});

test("statement previews never cut an inline formula", () => {
  for (const p of PROBLEMS) {
    const preview = views.truncate(p.statement, 150);
    assert.equal((preview.match(/\$/g) || []).length % 2, 0, p.id);
  }
});

test("audit appendices cover the 111 original IDs and all relative report links resolve", () => {
  const directory = path.join(root, "docs/reviews");
  const rows = [];
  for (const filename of fs.readdirSync(directory).filter((f) => f.endsWith(".md"))) {
    const text = fs.readFileSync(path.join(directory, filename), "utf8");
    assert.ok(!text.includes("\uFFFD"), filename);
    if (filename.endsWith("-audit.md")) {
      rows.push(...[...text.matchAll(/^\| ([A-Z]+\d+) \| (?:Keep|Reframe|Merge|Retire)[^|]*\|/gm)].map((m) => m[1]));
    }
    for (const match of text.matchAll(/\]\(([^)]+\.md)(?:#[^)]*)?\)/g)) {
      if (!match[1].includes("://")) assert.ok(fs.existsSync(path.resolve(directory, match[1])), `${filename}: ${match[1]}`);
    }
  }
  assert.equal(rows.length, 111);
  assert.equal(new Set(rows).size, 111);
  for (const id of rows) assert.ok(getProblem(id), id);
});
