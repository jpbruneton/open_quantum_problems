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
const { ALL_PROBLEMS, PROBLEMS, ARCHIVED_PROBLEMS, CATEGORIES, HORIZONS, STATUSES, EVIDENCE_KINDS, REVIEW, LITERATURE_UPDATE, LITERATURE_UPDATES, CORRECTION_LOG, CORRECTION_LOGS, getProblem, problemsByCat } = data;
const views = loadApp("app/views.js");
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
  assert.equal(ALL_PROBLEMS.length, 237);
  assert.equal(PROBLEMS.length, 227);
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
    for (const key of ["id", "title", "statement", "cat"]) assert.ok(typeof p[key] === "string" && p[key].trim(), `${p.id}.${key}`);
    assert.ok(typeof (p.definition || p.context) === "string" && (p.definition || p.context).trim(), `${p.id}: definition or context`);
    assert.ok(CATEGORIES.some((c) => c.slug === p.cat), p.id);
    assert.ok(HORIZONS[p.horizon] && STATUSES[p.status], p.id);
    assert.equal(new Date(p.reviewedAt).toISOString().slice(0, 10), p.reviewedAt, `${p.id}: review date`);
    assert.ok(p.reviewedAt >= REVIEW.date && p.reviewedAt <= LITERATURE_UPDATE.date, `${p.id}: review date outside recorded review window`);
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
        const correction = CORRECTION_LOGS.find((log) => log.ids.includes(p.id));
        const sourceReviewDate = correction && correction.date > p.reviewedAt
          ? correction.date : p.reviewedAt;
        assert.ok(item.date <= sourceReviewDate, `${p.id}: future evidence presented as already reviewed`);
      }
      if (item.version) assert.match(item.version, /^v[1-9]\d*$/, `${p.id}: version`);
    }
    for (const item of p.provenance) {
      assert.ok(item.summary, `${p.id}: provenance summary`);
      validUrl(item.url, p.id);
    }
  }
});

test("targeted literature updates preserve untouched review dates and expose pending claims", () => {
  const ids = LITERATURE_UPDATE.ids;
  assert.equal(LITERATURE_UPDATE, LITERATURE_UPDATES[0]);
  for (const [index, update] of LITERATURE_UPDATES.entries()) {
    assert.equal(new Set(update.ids).size, update.ids.length);
    assert.ok(update.date > REVIEW.date);
    if (index) assert.ok(update.date < LITERATURE_UPDATES[index - 1].date, "updates must be newest first");
    for (const id of update.ids) assert.ok(PROBLEMS.some((p) => p.id === id), `updated entry ${id} must be active`);
    validUrl(update.reportUrl, update.date);
    assert.ok(fs.existsSync(path.join(root, "docs/reviews", `${update.date}-literature-update.md`)), "missing update report");
  }
  for (const p of ALL_PROBLEMS) {
    const latest = LITERATURE_UPDATES.find((update) => update.ids.includes(p.id));
    assert.equal(p.reviewedAt, latest?.date ?? REVIEW.date, p.id);
    if (ids.includes(p.id)) assert.ok(p.evidence.some((e) => e.date && (e.version || e.kind === "published")), `${p.id}: missing dated, versioned or published evidence`);
  }
  for (const [id, source] of [["C4", "2609.08998v1"], ["C5", "2609.10520v1"], ["A4", "2609.13032v1"], ["A7", "2609.20780v1"], ["E10", "2610.03630v1"]]) {
    assert.equal(getProblem(id).status, id === "C5" ? "improved" : "claimed-solved", `${id}: distinguish partial progress from a full pending claim`);
    assert.ok(getProblem(id).evidence.some((e) => e.kind === "preprint" && e.url.includes(source)), id);
  }
  assert.deepEqual(PROBLEMS.filter((p) => p.status === "claimed-solved").map((p) => p.id).sort(), ["A11", "A20", "A23", "A30", "A31", "A34", "A4", "A46", "A47", "A7", "B1", "B14", "B16", "B17", "B18", "C12", "C4", "E10", "E16", "E18", "E21", "E23", "E26", "M1", "M12", "M2", "M5", "N1", "N13", "N19", "N2"]);
  assert.equal(getProblem("C10").status, "improved", "a solved subcase must not close the broader programme");
  assert.equal(PROBLEMS.filter((p) => p.status === "solved").length, 0, "pending claims must not count as established solutions");
  const earlierE10 = getProblem("E10").evidence.find((e) => e.url.includes("2609.29539v1"));
  assert.match(earlierE10.summary, /counterexample.*Lemma 2/);
  assert.match(earlierE10.summary, /historical claim/);
  for (const id of ["A3", "B5", "E5", "N3"]) assert.equal(getProblem(id).status, "improved", id);
  // Partial OpenAI claims must not be promoted beyond their stated scope.
  for (const id of ["B2", "B13", "N4", "N16", "QF5"]) assert.equal(getProblem(id).status, "improved", id);
  assert.equal(getProblem("B14").status, "claimed-solved", "the restored spherical Laughlin problem has full pending claims");
  for (const [id, path] of [["M1", "Uniform-excess-charge"], ["M2", "Absolutely-Continuous-Spectrum"], ["M5", "The-periodic-spin-one-Haldane-gap"], ["B1", "A-two-dimensional-area-law"], ["B13", "A-density-uniform-condensate-bound"], ["E16", "Entanglement-with-zero-distillable-secret-key"], ["C12", "Entanglement-with-zero-distillable-secret-key"], ["N2", "The-maximum-number-of-mutually-unbiased-bases"]]) {
    const source = getProblem(id).evidence.find((e) => e.url.includes(path));
    assert.ok(source && source.kind === "preprint" && source.url.startsWith("https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/"), `${id}: pinned OpenAI source`);
    assert.match(source.summary, /OpenAI GitHub manuscript|OpenAI/, id);
  }
  assert.match(getProblem("M12").progress, /does not assert exponential eigenfunction decay|explicitly does not assert exponential/);
  assert.match(getProblem("M5").statement, /even length/);
  // 26 October 2026: the OpenAI verification package is recorded as numerical evidence pinned to its own commit, without a status change.
  const mubPackage = getProblem("N2").evidence.find((e) => e.url.includes("verification/saved-run/VERIFY.md"));
  assert.ok(mubPackage && mubPackage.kind === "numerical" && mubPackage.url.startsWith("https://github.com/openai/math/blob/7ef5c0cc5ca4b0e072b7a050fca09ab24bc6fa3a/"), "N2: pinned verification package");
  assert.match(mubPackage.summary, /does not rerun/);
  for (const id of ["O4", "QF9"]) assert.equal(getProblem(id).status, "improved", id);
  assert.equal(getProblem("A6").status, "open", "gap amplification is a tool, not a quantum PCP theorem");
  assert.ok(getProblem("A6").refs.some((r) => r.url.includes("2610.04952v1") && r.label.includes("FOCS 2026")));
  assert.ok(getProblem("A12").evidence.some((e) => e.url.includes("2610.27065v1") && /simulab/i.test(e.summary)));
  assert.ok(getProblem("C3").evidence.some((e) => e.url.includes("2610.26783v2") && /PPT/.test(e.summary)));
  // 8 November 2026 (QIQCOP comparison): eleven new entries; N1 and A20 become pending claims.
  for (const id of ["A20", "A21", "A22", "A23", "A24", "A25", "C13", "E17", "E18", "N12", "N13", "N14", "A26", "A27", "A28", "A29", "A30", "A31", "B16", "B17", "B18", "E19"]) assert.ok(PROBLEMS.some((p) => p.id === id), `new entry ${id}`);
  assert.ok(getProblem("N1").evidence.some((e) => e.url.includes("danrad.net")), "N1: Radchenko-Wheeler claim recorded");
  assert.ok(getProblem("N1").catalogues.some((x) => x.catalogue === "QIQCOP Zoo"), "N1: cross-referenced");
  // 8 November 2026: independent engagement does not by itself promote a pending claim.
  assert.ok(getProblem("N2").evidence.some((e) => e.url.includes("2611.06917v1")), "N2: independent second proof recorded");
  assert.ok(getProblem("M5").evidence.some((e) => e.url.includes("2610.34330v2")), "M5: follow-up recorded");
  assert.equal(getProblem("QF1").status, "open", "an unpublished existence announcement without a mass gap must not move QF1");
  assert.match(getProblem("QF1").statement, /mass gap/);
  assert.match(getProblem("QF1").progress, /No manuscript was public/);
  assert.equal(getProblem("N19").status, "claimed-solved", "the general geometric criterion is a pending resolution claim");
  assert.ok(getProblem("N19").evidence.some((e) => e.role === "claimed-solution" && e.url.includes("2601.21801v1")));
  assert.doesNotMatch(getProblem("N19").statement, /locally unbiased estimator then attains it/);
  assert.match(getProblem("N19").statement, /measurement level/);
  assert.match(getProblem("B19").statement, /BCC periodic order/);
  // 9 November 2026: four new areas and 31 promoted entries.
  for (const slug of ["semiclassical-gravity", "holography", "quantum-gravity", "renormalization"]) assert.ok(problemsByCat(slug).length >= 4, slug);
  assert.equal(LITERATURE_UPDATES.find((update) => update.date === "2026-11-09").ids.length, 31);
  // 12 November 2026: arXiv review of 9–11 November; claims and partial progress only, no new entries.
  assert.ok(LITERATURE_UPDATES.some((update) => update.date === "2026-11-12"));
  assert.equal(getProblem("O6").status, "improved", "O6: catalyst-free asymptotic pure-state rate determined");
  for (const id of ["A11", "M5"]) assert.equal(getProblem(id).status, "claimed-solved", `${id}: expert engagement is not peer review`);
  assert.ok(!getProblem("M5").lean, "M5: Lu's Lean formalization keeps finite trace totals as hypotheses");
  assert.ok(getProblem("A11").evidence.some((e) => e.role === "claimed-solution" && e.url.includes("2611.09773v1")));
  // 20 November full-text follow-up: partial advances retain the broader open targets.
  for (const id of ["QF11", "QG8", "QG3", "G1", "H1", "QG7", "F14", "QG6"]) assert.equal(getProblem(id).status, "improved", `${id}: restricted progress does not settle the full target`);
  // 14 November 2026: new entry A34 (Kimmel's n/2 query question), a pending claim whose lower bounds are formalized.
  assert.deepEqual(LITERATURE_UPDATES.find((update) => update.date === "2026-11-14").ids, ["A34"]);
  assert.equal(getProblem("A34").status, "claimed-solved", "A34: a single unrefereed preprint");
  assert.ok(getProblem("A34").lean, "A34: the lower bounds that answer the question are formalized");
  assert.ok(getProblem("A34").evidence.some((e) => e.role === "claimed-solution" && e.url.includes("2611.09809v1")));
  assert.match(getProblem("A34").residual, /non-symmetric/);
  // 16 November 2026: citation check of the 2024–2026 quant-ph corpus; two pending claims, seven entries improved.
  const november16 = LITERATURE_UPDATES.find((update) => update.date === "2026-11-16");
  for (const [id, source] of [["A23", "2611.06751v1"], ["N13", "2609.18865v1"]]) {
    assert.equal(getProblem(id).status, "claimed-solved", `${id}: a single unrefereed preprint`);
    assert.ok(!getProblem(id).lean, `${id}: no formalization of the claimed solution`);
    assert.ok(getProblem(id).evidence.some((e) => e.role === "claimed-solution" && e.url.includes(source)), id);
  }
  for (const id of ["A26", "A28", "B3", "M6", "M7", "N5", "O2"]) assert.equal(getProblem(id).status, "improved", id);
  assert.equal(getProblem("O3").status, "open", "O3: a Gaussian, factorized-state scheme is outside the stated scope");
  // 16 November 2026, carte v2 batch: 36 new entries from nine uncovered themes of the quant-ph corpus.
  const carteV2 = ["E23", "E24", "E25", "A35", "A36", "E26", "F16", "F17", "N20", "F18", "A37", "A38", "E27", "E28", "E29", "A39", "A40", "A41", "M17", "B20", "B21", "A42", "A43", "N21", "N22", "C14", "A44", "A45", "M18", "B22", "O11", "O12", "A46", "A47", "O13", "A48"];
  for (const id of carteV2) assert.ok(november16.ids.includes(id), `${id}: in the 16 November update`);
  // 21 November 2026: full-reading bibliography of F4 (Frauchiger–Renner critiques, Local Friendliness theorems and tests).
  const november21 = LITERATURE_UPDATES.find((update) => update.date === "2026-11-21");
  assert.deepEqual(november21.ids, ["F4"]);
  assert.ok(fs.existsSync(path.join(root, "docs/reviews/2026-11-21-literature-update.md")), "missing F4 report");
  assert.equal(getProblem("F4").status, "open", "F4: a conceptual programme, no status change");
  assert.ok(getProblem("F4").provenance.some((item) => item.url.includes("2611.17431")), "F4: Polino et al. AI-use disclosure");
  const november20 = LITERATURE_UPDATES.find((update) => update.date === "2026-11-20");
  assert.deepEqual([...november20.ids].sort(), ["A24", "A49", "A50", "A51", "A52", "A53", "B12", "B15", "B16", "B23", "C10", "C11", "E21", "E30", "F14", "F8", "G1", "G3", "H1", "H4", "M19", "M20", "N2", "N3", "O2", "QF11", "QF5", "QF7", "QG3", "QG4", "QG6", "QG7", "QG8", "R3"]);
  assert.ok(fs.existsSync(path.join(root, "docs/reviews/2026-11-16-new-problems-carte-v2.md")), "missing carte v2 report");
  for (const [id, source] of [["E23", "2610.00527v2"], ["A46", "2610.23560v1"], ["A47", "2609.31312v1"]]) {
    assert.equal(getProblem(id).status, "claimed-solved", `${id}: unassessed preprint claim`);
    assert.ok(!getProblem(id).lean, `${id}: no formalization`);
    assert.ok(getProblem(id).evidence.some((e) => e.role === "claimed-solution" && e.url.includes(source)), id);
  }
  assert.equal(getProblem("A48").status, "improved", "A48: the multivariate QSP preprints use broader query models");
  assert.equal(getProblem("O13").status, "improved", "O13: two proof steps rely on a supplement that is not on arXiv");
  assert.ok([...getProblem("F16").evidence, ...getProblem("F16").refs].some((e) => e.url.includes("2609.24670")), "F16: cite the refutation of the 1 + ln π conjecture");
  // 23 November 2026: arXiv announcements of 20 and 23 November and replacements of cited sources.
  assert.equal(LITERATURE_UPDATE.date, "2026-11-23");
  assert.deepEqual(LITERATURE_UPDATE.ids, ["E26", "A3", "C2", "O10"]);
  assert.equal(getProblem("E26").status, "claimed-solved", "E26: an unrefereed GitHub proof with an unrebuilt Lean formalization");
  assert.ok(getProblem("E26").lean, "E26: the full claim is formalized");
  assert.ok(getProblem("E26").evidence.some((e) => e.role === "claimed-solution" && e.url.includes("rrajasek95/krenn-conjecture")), "E26: claimed solution");
  assert.equal(getProblem("A3").status, "improved", "A3: a relativized separation");
  assert.equal(getProblem("C2").status, "improved", "C2: the capacity is still undetermined");
  assert.ok(getProblem("O10").evidence.some((e) => e.url.includes("2411.04300v3")), "O10: cite the corrected v3");
  const home = render(views.Home);
  assert.ok(home.includes(LITERATURE_UPDATE.label) && home.includes("Last update"));
});

test("correction log is published", () => {
  assert.equal(CORRECTION_LOG, CORRECTION_LOGS[0]);
  for (const [i, log] of CORRECTION_LOGS.entries()) {
    validUrl(log.reportUrl, "correction log");
    assert.ok(log.reportUrl.endsWith(`${log.date}-correction-log.md`));
    assert.ok(fs.existsSync(path.join(root, "docs/reviews", `${log.date}-correction-log.md`)), "missing correction log");
    if (i) assert.ok(log.date < CORRECTION_LOGS[i - 1].date, "corrections must be newest first");
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
  const { PROPOSALS, SECONDARY_PROPOSALS } = loadApp("app/data/proposals.js");
  const entries = [
    ...ALL_PROBLEMS.map((p) => ({ id: p.id, texts: [p.statement, p.context, p.definition, p.progress, p.claim, p.residual, p.statusNote, ...p.evidence.map((e) => e.summary), ...p.provenance.map((e) => e.summary)] })),
    ...PROPOSALS.flatMap((g) => g.items).map((p) => ({ id: p.key, texts: [p.statement, p.why, p.baseline, p.caveat, p.assessment?.summary] })),
    ...SECONDARY_PROPOSALS.map((p) => ({ id: p.key, texts: [p.note] })),
  ];
  for (const { id, texts } of entries) {
    for (const text of texts.filter(Boolean)) {
      let at = 0;
      while ((at = text.indexOf("$", at)) !== -1) {
        const delimiter = text.startsWith("$$", at) ? "$$" : "$";
        const end = text.indexOf(delimiter, at + delimiter.length);
        assert.notEqual(end, -1, `${id}: unclosed math delimiter`);
        const math = text.slice(at + delimiter.length, end);
        assert.doesNotThrow(() => katex.renderToString(math, { throwOnError: true, strict: false, displayMode: delimiter === "$$" }), `${id}: ${math}`);
        at = end + delimiter.length;
      }
    }
  }
});

test("every active and archived detail view renders with valid links and Astra & Opus 5.5 credit", () => {
  for (const p of ALL_PROBLEMS) {
    const html = render(views.ProblemView, { id: p.id });
    assert.ok(html.includes("Powered by Astra &amp; Opus 5.5"), p.id);
    const leanHeading = "<h4>Lean formulation</h4>";
    const leanStart = html.indexOf(leanHeading);
    assert.equal(leanStart >= 0, p.leanFormulations.length > 0, p.id);
    if (p.leanFormulations.length) {
      const definition = html.indexOf("<h4>Definition</h4>");
      const nextHeading = html.indexOf("<h4>", leanStart + leanHeading.length);
      assert.ok(definition >= 0 && definition < leanStart, p.id);
      if (p.progress) assert.equal(nextHeading, html.indexOf("<h4>Progress</h4>"), p.id);
      const section = html.slice(leanStart, nextHeading);
      for (const { url } of p.leanFormulations) {
        assert.equal(new URL(url).protocol, "https:", p.id);
        assert.ok(section.includes(`href="${url.replaceAll("&", "&amp;")}"`), p.id);
      }
    }
    assert.ok(!html.includes("katex-error"), `${p.id}: math rendering error`);
    assert.ok(!html.includes('href="undefined"'), `${p.id}: broken href`);
    for (const match of html.matchAll(/href="\/p\/([^"<>]+)"/g)) assert.ok(getProblem(match[1]), `${p.id}: broken rendered link ${match[1]}`);
    if (p.archive) {
      assert.ok(html.includes("Catalogue disposition"), p.id);
      for (const status of Object.keys(STATUSES)) assert.ok(!html.includes(`st-${status}`), `${p.id}: archive presented as active`);
    } else {
      assert.ok(html.includes(`class="badge st-${p.status}"`), `${p.id}: missing status badge`);
      assert.ok(html.includes(STATUSES[p.status].label), `${p.id}: missing status label`);
    }
  }
});

test("home, all categories, filtered lists and missing-page views render", () => {
  const home = render(views.Home);
  assert.ok(home.includes("227") && home.includes("Active entries"));
  assert.ok(!home.includes("#review") && home.includes("Powered by Astra &amp; Opus 5.5"));
  assert.ok(home.includes('href="/improved"'));
  assert.ok(home.includes('href="/claimed-solved"'));
  assert.ok(home.includes('href="/lean-verified"'));
  assert.ok(home.includes('See open sharp problems'));
  assert.ok(home.includes('aria-label="See all 97 improved problems"'));
  assert.ok(home.includes('aria-label="See all 31 claimed solved problems"'));
  assert.ok(home.includes('href="https://quantumlectures.org/en"'));
  assert.ok(home.includes('href="https://learnthermo.org/"'));
  assert.ok(!home.includes("IDs M1–"), "category count must not fabricate contiguous IDs");
  for (const c of CATEGORIES) {
    const html = render(views.CategoryView, { slug: c.slug });
    for (const p of problemsByCat(c.slug)) assert.ok(html.includes(`/p/${p.id}`), `${c.slug}: missing ${p.id}`);
  }
  const sharp = render(views.SharpView);
  const leanVerified = render(views.FilteredProblemsView, { leanOnly: true });
  for (const p of PROBLEMS) {
    assert.equal(sharp.includes(`href="/p/${p.id}"`), p.horizon === "sharp" && p.status !== "claimed-solved" && !p.lean, `${p.id}: open sharp list membership`);
    assert.equal(leanVerified.includes(`href="/p/${p.id}"`), p.status === "claimed-solved" && Boolean(p.lean), `${p.id}: Lean verified list membership`);
  }
  for (const p of ARCHIVED_PROBLEMS) assert.ok(!sharp.includes(`href="/p/${p.id}"`), `archived ${p.id} in sharp list`);
  const improved = render(views.ImprovedView);
  const claimedSolved = render(views.ClaimedSolvedView);
  assert.ok(claimedSolved.includes("independent assessment is pending"));
  assert.ok(claimedSolved.includes('aria-label="Filter claimed solved problems"'));
  for (const p of ALL_PROBLEMS) {
    assert.equal(improved.includes(`href="/p/${p.id}"`), !p.archive && p.status === "improved", `${p.id}: improved list membership`);
    assert.equal(claimedSolved.includes(`href="/p/${p.id}"`), !p.archive && p.status === "claimed-solved", `${p.id}: claimed-solved list membership`);
  }
  assert.ok(render(views.ProblemView, { id: "missing" }).includes("Not found"));
  // Home: two entry boxes and the compact legend.
  assert.ok(home.includes("Known open problems") && home.includes('href="/new-problems"'));
  assert.doesNotMatch(home, /says how far it has gone|Zero entries are Solved/);
  assert.ok(!home.includes("Evidence matters"));
  // New-problems page: proposals render, link only to existing entries, are not counted.
  const { PROPOSALS, SECONDARY_PROPOSALS, WITHDRAWN_PROPOSALS, PRIORITY_RECORDS, PROPOSAL_COUNT, PROPOSALS_META_NEW_AREAS, PROPOSALS_META_CARTE_V2, proposalBatch } = loadApp("app/data/proposals.js");
  const newProblems = render(views.NewProblemsView);
  assert.ok(newProblems.includes("New problems suggested by AI") && newProblems.includes("not counted"));
  assert.ok(!newProblems.includes("katex-error"), "proposals: math rendering error");
  assert.equal(PROPOSAL_COUNT, PROPOSALS.reduce((n, g) => n + g.items.length, 0));
  const keys = new Set();
  for (const group of PROPOSALS) {
    assert.ok(CATEGORIES.some((c) => c.slug === group.cat), `proposals: unknown category ${group.cat}`);
    for (const it of group.items) {
      assert.ok(!keys.has(it.key), `duplicate proposal key ${it.key}`); keys.add(it.key);
      assert.ok(HORIZONS[it.horizon], `${it.key}: horizon`);
      assert.ok(it.statement.length > 40 && it.why.length > 40, `${it.key}: incomplete`);
      const detail = render(views.ProposalView, { pkey: it.key });
      assert.ok(!detail.includes("katex-error"), `${it.key}: detail math rendering error`);
      const statementHtml = detail.split('<div class="statement">')[1].split("<h4>")[0];
      assert.equal((statementHtml.match(/<p>/g) || []).length, it.statement.split(/\n\n+/).length, `${it.key}: statement paragraphs must stay separate`);
      for (const id of it.extends) assert.ok(getProblem(id), `${it.key}: extends unknown ${id}`);
      assert.ok(newProblems.includes(it.title.replace(/&/g, "&amp;")) || newProblems.includes(it.key), `${it.key}: not rendered`);
    }
  }
  assert.equal(PROPOSAL_COUNT, 49);
  assert.equal(SECONDARY_PROPOSALS.length, 21);
  assert.deepEqual(WITHDRAWN_PROPOSALS.map(it => it.key).sort(), ["PA9", "PB2", "PG2", "PH3", "PM5", "PM7", "SF2", "SO1", "SQF1"]);
  const report = fs.readFileSync(path.join(root, "docs/reviews/2026-11-19-proposal-selection.md"), "utf8");
  const decisions = [...report.matchAll(/<a name="([a-z0-9]+)"><\/a>\*\*([A-Z0-9]+)\*\* \| (Keep|Withdraw)/g)];
  const withdrawn = new Set(WITHDRAWN_PROPOSALS.map(it => it.key));
  const reviewed = [...PRIORITY_RECORDS, ...SECONDARY_PROPOSALS, ...WITHDRAWN_PROPOSALS.filter(it => !it.statement)];
  assert.deepEqual(decisions.map(m => m[2]).sort(), reviewed.map(it => it.key).sort());
  for (const [, anchor, id, decision] of decisions) {
    assert.equal(anchor, id.toLowerCase());
    assert.equal(decision, withdrawn.has(id) ? "Withdraw" : "Keep");
  }
  for (const it of WITHDRAWN_PROPOSALS) {
    assert.ok(!keys.has(it.key) && !SECONDARY_PROPOSALS.some(s => s.key === it.key));
    if (!it.statement) continue;
    const page = render(views.ProposalView, { pkey: it.key });
    assert.ok(page.includes("Reason for withdrawal") && !page.includes("Open, substantive") && !page.includes("katex-error"));
    if (it.formerly) assert.equal(render(views.ProposalView, { pkey: it.formerly }), page);
  }
  const secondBatch = PROPOSALS.flatMap((g) => g.items).filter((it) => proposalBatch(it) === PROPOSALS_META_NEW_AREAS).map((it) => it.key);
  assert.deepEqual(secondBatch.sort(), ["PG1", "PH1", "PH2", "PQG1"]);
  const thirdBatch = PROPOSALS.flatMap((g) => g.items).filter((it) => proposalBatch(it) === PROPOSALS_META_CARTE_V2).map((it) => it.key);
  assert.deepEqual(thirdBatch.sort(), ["PA10", "PA11", "PA8", "PB5", "PM8", "PN4", "PN5", "PO4", "PO5"]);
  for (const it of PROPOSALS.flatMap((g) => g.items)) if (proposalBatch(it) === PROPOSALS_META_CARTE_V2) assert.ok(it.caveat, `${it.key}: inferred formulations carry a caveat`);
  const formerly = new Set(PROPOSALS.flatMap((g) => g.items).map((it) => it.formerly));
  for (const key of ["P47", "P57", "P75", "P84"]) assert.ok(!formerly.has(key), `${key} was promoted and must not remain a proposal`);
  for (const it of SECONDARY_PROPOSALS) {
    assert.ok(!keys.has(it.key), `duplicate proposal key ${it.key}`); keys.add(it.key);
    for (const id of it.extends) assert.ok(getProblem(id), `${it.key}: extends unknown ${id}`);
  }
  // Identifiers: tier letter (P priority, S secondary) + area code + number; the area of a
  // secondary lead is that of the first entry it extends. Old keys stay unique in `formerly`.
  const codeOf = Object.fromEntries(CATEGORIES.map((c) => [c.slug, c.code]));
  const codes = CATEGORIES.map((c) => c.code).sort((a, b) => b.length - a.length).join("|");
  const idPattern = new RegExp(`^([PS])(${codes})([1-9]\\d*)$`);
  for (const group of PROPOSALS) for (const it of group.items) {
    const m = it.key.match(idPattern);
    assert.ok(m && m[1] === "P" && m[2] === codeOf[group.cat], `${it.key}: identifier must be P + ${codeOf[group.cat]} + number`);
    // Batches before 16 November 2026 keep their old P-number; the carte v2 batch never had one.
    if (proposalBatch(it) === PROPOSALS_META_CARTE_V2) assert.equal(it.formerly, undefined, `${it.key}: carte v2 items have no former key`);
    else assert.match(it.formerly, /^P\d+$/, `${it.key}: formerly`);
  }
  for (const it of SECONDARY_PROPOSALS) {
    const m = it.key.match(idPattern);
    const area = it.extends[0].match(/^[A-Z]+/)[0];
    assert.ok(m && m[1] === "S" && m[2] === area, `${it.key}: identifier must be S + ${area} + number`);
    assert.match(it.formerly, /^S\d+$/, `${it.key}: formerly`);
  }
  const allFormerly = [...PROPOSALS.flatMap((g) => g.items), ...SECONDARY_PROPOSALS].map((it) => it.formerly).filter(Boolean);
  assert.equal(new Set(allFormerly).size, allFormerly.length, "formerly keys must be unique");
  // Old links keep working: /np/P20 and /np/PU2 open the same page.
  const byNew = render(views.ProposalView, { pkey: "PU2" });
  assert.ok(byNew.includes("Explicit frustration-freeness cutoffs") && byNew.includes("Formerly P20"));
  assert.equal(render(views.ProposalView, { pkey: "P20" }), byNew);
  for (const match of newProblems.matchAll(/href="\/p\/([^"<>]+)"/g)) assert.ok(getProblem(match[1]), `proposals: broken link ${match[1]}`);
  assert.ok(newProblems.includes(`${PROBLEMS.length} active entries`), "proposals page keeps the catalogue count unchanged");
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

test("Lean verified is reserved for claimed solved entries", () => {
  for (const p of ALL_PROBLEMS) {
    if (p.lean) assert.equal(p.status, "claimed-solved", `${p.id}: entry Lean badge requires a full claim`);
    if (p.status !== "claimed-solved") {
      const html = renderToStaticMarkup(React.createElement(views.ProblemView, { id: p.id }));
      assert.ok(!html.includes(">Lean verified</span>"), `${p.id}: partial progress must not display Lean verified`);
    }
  }
  assert.equal(getProblem("N16").status, "improved");
  assert.ok(getProblem("N16").evidence.some((e) => e.lean));
});

test("static page metadata keeps the shared social images and canonical URLs", () => {
  for (const [relative, params, canonical] of [
    ["app/p/[id]/page.js", { id: "O13" }, "/p/O13"],
    ["app/np/[key]/page.js", { key: "P20" }, "/np/PU2"],
    ["app/c/[slug]/page.js", { slug: "spectral" }, "/c/spectral"],
  ]) {
    const metadata = loadApp(relative).generateMetadata({ params });
    assert.equal(metadata.alternates.canonical, canonical);
    assert.equal(metadata.openGraph.images[0].url, "https://openquantumproblems.com/opengraph-image");
    assert.equal(metadata.twitter.images[0], "https://openquantumproblems.com/twitter-image");
    assert.equal(metadata.twitter.card, "summary_large_image");
  }
});

test("legacy fragments redirect after mount while ordinary page anchors stay local", () => {
  const filename = path.join(root, "app/components/ClientEffects.js");
  const { code } = transformSync(fs.readFileSync(filename, "utf8"), {
    filename,
    jsc: { parser: { syntax: "ecmascript", jsx: true }, target: "es2020" },
    module: { type: "commonjs" },
  });
  const module = { exports: {} };
  const listeners = new Map();
  const effects = [];
  const redirected = [];
  const eventTarget = (prefix) => ({
    addEventListener: (name, handler) => listeners.set(`${prefix}:${name}`, handler),
    removeEventListener: (name, handler) => {
      assert.equal(listeners.get(`${prefix}:${name}`), handler);
      listeners.delete(`${prefix}:${name}`);
    },
  });
  const location = { hash: "", replace: (url) => redirected.push(url) };
  vm.runInNewContext(code, {
    module, exports: module.exports,
    require: (id) => {
      assert.equal(id, "react");
      return { useEffect: (effect) => effects.push(effect) };
    },
    window: { ...eventTarget("window"), location },
    document: eventTarget("document"),
    sessionStorage: { getItem: () => "1" },
  }, { filename });
  module.exports.default();
  const cleanup = effects[0]();
  const onHashChange = listeners.get("window:hashchange");
  assert.equal(typeof onHashChange, "function");
  for (const [hash, expected] of [
    ["#p/N1", "/p/N1"], ["#/c/spectral", "/c/spectral"],
    ["#np/P20", "/np/P20"], ["#about", "/similar"],
  ]) {
    location.hash = hash;
    onHashChange();
    assert.equal(redirected.at(-1), expected);
  }
  const n = redirected.length;
  for (const hash of ["#np-secondary", "#np-complexity", "#tr-gaps", ""]) {
    location.hash = hash;
    onHashChange();
  }
  assert.equal(redirected.length, n);
  cleanup();
  assert.equal(listeners.size, 0, "all event listeners must be removed on unmount");
});

test("draft trends page renders, is not linked from home, and its entry links resolve", () => {
  const { TRENDS } = loadApp("app/data/trends-data.js");
  // This historical map links to /np/ pages, including proposals since withdrawn.
  const { PRIORITY_RECORDS } = loadApp("app/data/proposals.js");
  const proposalKeys = new Set(PRIORITY_RECORDS.map(it => it.key));
  const html = render(views.TrendsView);
  assert.ok(html.includes("Quantum trends") && html.includes("Draft."));
  assert.ok(html.includes("words, not meaning"), "method caveat must stay on the page");
  assert.ok(!render(views.Home).includes('href="/trends"'), "draft page must not be linked from home");
  const flaggedIds = new Set(TRENDS.flagged.map((f) => f.cluster));
  for (const list of [TRENDS.rising, TRENDS.declining, TRENDS.gaps]) {
    for (const t of list) {
      assert.ok(!flaggedIds.has(t.cluster), `${t.label}: flagged group must not be ranked`);
      assert.equal(t.monthly.length, TRENDS.meta.months.length, t.label);
      for (const e of t.entries) {
        if (e.kind === "catalogue") assert.ok(getProblem(e.id), `${t.label}: unknown entry ${e.id}`);
        else assert.ok(proposalKeys.has(e.id), `${t.label}: unknown proposal ${e.id}`);
      }
    }
  }
  for (const t of TRENDS.gaps) assert.equal(t.entries.length, 0, `${t.label}: gap with entries`);
});
