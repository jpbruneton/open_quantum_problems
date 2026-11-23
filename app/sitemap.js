import { ALL_PROBLEMS, CATEGORIES, CORRECTION_LOGS, LITERATURE_UPDATE, LITERATURE_UPDATES } from "./data/problems";
import { PRIORITY_RECORDS, PROPOSALS_FORMULATION_REVIEW, SELECTION_REPORT, proposalBatch } from "./data/proposals";
import { NEW_RESEARCH_NOTES } from "./data/research-notes";
import { SITE_URL } from "./seo";

const latest = (dates) => dates.filter(Boolean).sort().at(-1);

// An entry page changes when it is reviewed, updated from the literature or corrected.
export function entryLastModified(p) {
  const logs = [...LITERATURE_UPDATES, ...CORRECTION_LOGS].filter((u) => u.ids.includes(p.id)).map((u) => u.date);
  return latest([p.reviewedAt, ...logs]);
}

// Proposal pages last changed with their batch, the formulation review or the selection review.
const SELECTION_DATE = SELECTION_REPORT.match(/\d{4}-\d{2}-\d{2}/)?.[0];
function proposalLastModified(it) {
  return latest([proposalBatch(it)?.date, PROPOSALS_FORMULATION_REVIEW.date, SELECTION_DATE]);
}

// One URL per page; former proposal identifiers are left out (their canonical is the current key).
// The draft /trends page is unlisted and marked noindex until it is published.
export default function sitemap() {
  const site = LITERATURE_UPDATE.date;
  const entries = [
    ...["/", "/new-problems", "/sharp", "/improved", "/claimed-solved", "/lean-verified", "/similar"].map((path) => [path, site]),
    ["/new-research", latest(NEW_RESEARCH_NOTES.map((n) => n.updated))],
    ...CATEGORIES.map((c) => [`/c/${c.slug}`, latest(ALL_PROBLEMS.filter((p) => p.cat === c.slug).map(entryLastModified))]),
    ...ALL_PROBLEMS.map((p) => [`/p/${p.id}`, entryLastModified(p)]),
    ...PRIORITY_RECORDS.map((it) => [`/np/${it.key}`, proposalLastModified(it)]),
    ...NEW_RESEARCH_NOTES.map((n) => [n.pdf.split("?")[0], n.updated]),
  ];
  return entries.map(([path, lastModified]) => ({ url: `${SITE_URL}${path}`, lastModified: lastModified || site }));
}
