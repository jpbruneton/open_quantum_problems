// Plain-text guides for language models (llmstxt.org convention), built from the catalogue data.
// /llms.txt is the index; /llms-full.txt carries the full text of every active entry.
import { ARCHIVED_PROBLEMS, CATEGORIES, HORIZONS, LITERATURE_UPDATE, PROBLEMS, STATUSES, getCategory } from "./data/problems";
import { PROPOSALS } from "./data/proposals";
import { NEW_RESEARCH_NOTES } from "./data/research-notes";
import { SITE_URL, plainText } from "./seo";
import { entryLastModified } from "./sitemap";

const REPO = "https://github.com/jpbruneton/open_quantum_problems";
const url = (path) => `${SITE_URL}${path}`;
const count = (status) => PROBLEMS.filter((p) => p.status === status).length;

function header() {
  return [
    "# Open Quantum Problems",
    "",
    "> A literature-reviewed catalogue of open problems in quantum mechanics for human researchers and AI agents. Each entry gives a precise question, its standard reference, the progress made so far, any claimed solution, and what remains open.",
    "",
    `Last literature update: ${LITERATURE_UPDATE.date}. The catalogue has ${PROBLEMS.length} active entries (${count("open")} open, ${count("improved")} improved, ${count("claimed-solved")} claimed solved) in ${CATEGORIES.length} areas, plus ${ARCHIVED_PROBLEMS.length} archived pages kept for old links.`,
    "",
    "Statuses: " + Object.values(STATUSES).map((s) => `${s.label}: ${s.desc}`).join(" "),
    "A claimed solution is an announced full resolution that has not been independently assessed; it is not an established result.",
    "",
    "Horizons: " + Object.values(HORIZONS).map((h) => `${h.label}: ${h.desc}`).join(" "),
    "",
    "Entry pages, statements and references use Markdown with inline LaTeX ($...$).",
  ];
}

const entryLine = (p) => `- [${p.id} · ${plainText(p.title, 160)}](${url(`/p/${p.id}`)}): ${STATUSES[p.status]?.label || p.status}. ${plainText(p.statement, 220)}`;

export function llmsTxt() {
  const lines = [
    ...header(),
    "",
    "## Main pages",
    "",
    `- [Catalogue home](${url("/")}): all areas and entries, with filters.`,
    `- [Claimed solved](${url("/claimed-solved")}): entries with an announced full resolution awaiting independent assessment.`,
    `- [Improved](${url("/improved")}): entries with significant partial progress, as judged case by case by the maintainer.`,
    `- [Sharp problems](${url("/sharp")}): entries a single proof or counterexample would settle.`,
    `- [Lean verified](${url("/lean-verified")}): claimed solved entries whose full claimed solution is formalized in Lean.`,
    `- [New problems suggested by AI](${url("/new-problems")}): candidate questions, not catalogue entries.`,
    `- [New Research](${url("/new-research")}): research notes with manuscripts, exact certificates and reproducible checks.`,
    `- [Similar projects](${url("/similar")}): other catalogues of open problems.`,
    `- [Full text for language models](${url("/llms-full.txt")}): every active entry with its statement, progress, claim and references.`,
    `- [Source repository](${REPO}): catalogue data, dated review reports and research bundles.`,
    "",
    "## Areas",
    "",
    ...CATEGORIES.map((c) => `- [${c.name}](${url(`/c/${c.slug}`)}): ${c.blurb}`),
  ];
  for (const c of CATEGORIES) {
    const entries = PROBLEMS.filter((p) => p.cat === c.slug);
    if (entries.length) lines.push("", `## ${c.name}`, "", ...entries.map(entryLine));
  }
  lines.push(
    "",
    "## New Research",
    "",
    ...NEW_RESEARCH_NOTES.map((n) => `- [${n.title}](${url(n.pdf.split("?")[0])}): ${n.summary} Source, certificate and checks: ${n.dossier}`),
    "",
    "## Optional",
    "",
    ...ARCHIVED_PROBLEMS.map((p) => `- [${p.id} · ${plainText(p.title, 160)}](${url(`/p/${p.id}`)}): archived (${p.archive.kind}) into ${p.archive.targets.join(", ")}.`),
    ...PROPOSALS.flatMap((g) => g.items.map((it) => `- [${it.key} · ${plainText(it.title, 160)}](${url(`/np/${it.key}`)}): AI-suggested candidate question (${g.name}), not a catalogue entry.`)),
  );
  return lines.join("\n") + "\n";
}

function section(title, text) {
  return text ? ["", `### ${title}`, "", String(text).trim()] : [];
}

function entryText(p) {
  const lines = [
    "",
    `## ${p.id} · ${p.title}`,
    "",
    `URL: ${url(`/p/${p.id}`)}`,
    `Area: ${getCategory(p.cat)?.name}. Status: ${STATUSES[p.status]?.label || p.status}. Horizon: ${HORIZONS[p.horizon]?.label || p.horizon}. Last updated: ${entryLastModified(p)}.`,
    ...section("Statement", p.statement),
    ...section("Definition", p.definition),
    ...section("Progress", p.progress),
    ...section("Claimed solution", p.claim),
    ...section("What remains open", p.residual),
  ];
  if (p.evidence?.length) lines.push(...section("Evidence", p.evidence.map((e) => `- ${e.kind}${e.role ? ` (${e.role})` : ""}: ${e.summary}`).join("\n")));
  if (p.provenance?.length) lines.push(...section("Author-reported AI use", p.provenance.map((e) => `- ${e.summary}`).join("\n")));
  if (p.refs?.length) lines.push(...section("References", p.refs.map((r) => `- ${r.label}${r.url ? `: ${r.url}` : ""}`).join("\n")));
  return lines;
}

export function llmsFullTxt() {
  const lines = [...header(), "", `Index: ${url("/llms.txt")}. Source: ${REPO}.`];
  for (const c of CATEGORIES) {
    const entries = PROBLEMS.filter((p) => p.cat === c.slug);
    if (!entries.length) continue;
    lines.push("", `# ${c.name}`, "", c.blurb, ...entries.flatMap(entryText));
  }
  lines.push("", "# New Research", "");
  for (const n of NEW_RESEARCH_NOTES) {
    lines.push(`## ${n.title}`, "", `PDF: ${url(n.pdf.split("?")[0])}`, `Source, certificate and checks: ${n.dossier}`, n.meta, "", n.summary, "", n.result, "");
  }
  return lines.join("\n") + "\n";
}

export function textResponse(body) {
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}

