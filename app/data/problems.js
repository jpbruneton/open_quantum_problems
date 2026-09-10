// Aggregator for "Open Problems in Quantum Mechanics for AI Agents".
//
// Each problem carries a single evaluability badge (horizon):
//   "sharp"       a proof or single counterexample closes it (solved / open).
//   "incremental" no binary finish; progress = better bound / larger class.
//   "programme"   a whole research field; not closable by one submission.
//   "conceptual"  no community-agreed success criterion (foundations).
//
// status    : "open" | "improved" | "solved"  (all start "open").
// submissions: [{ who, model, date, kind: "solution"|"improvement"|"note", url, summary }]
// archive: { kind: "merged"|"background", targets: [id], reason }
// relations: [{ id, type: "parent"|"benchmark"|"reduction"|"related" }]
// evidence: [{ kind, summary, url, date?, version? }]
// provenance: [{ summary, url, version? }] — author disclosures, not proof status.
//
// Problem statements, context and references live in the per-category files
// imported below. References are curated entry points, not exhaustive
// bibliographies. Contributions are made by pull request.

import { SPECTRAL } from "./cat-spectral";
import { MANYBODY } from "./cat-many-body";
import { QFT } from "./cat-qft";
import { ENTANGLEMENT } from "./cat-entanglement";
import { NONLOCALITY } from "./cat-nonlocality";
import { CHANNELS } from "./cat-channels";
import { COMPLEXITY } from "./cat-complexity";
import { UNDECIDABILITY } from "./cat-undecidability";
import { OPENSYSTEMS } from "./cat-open-systems";
import { FOUNDATIONS } from "./cat-foundations";

export const CATEGORIES = [
  { slug: "spectral", code: "M", name: "Mathematical QM & spectral theory",
    blurb: "Rigorous spectral theory of Schrödinger operators: binding, localization, gaps, quantum chaos." },
  { slug: "many-body", code: "B", name: "Quantum many-body theory",
    blurb: "Area laws, tensor networks, thermalization, phases, Bose condensation, Laughlin and kagome benchmarks." },
  { slug: "qft", code: "QF", name: "Mathematical quantum field theory",
    blurb: "Gauge-theory construction, mass gaps, scattering, continuum entanglement and local measurements." },
  { slug: "entanglement", code: "E", name: "Entanglement theory",
    blurb: "Distillability, LOCC, entanglement measures, marginals, the entropy cone, AME states." },
  { slug: "nonlocality", code: "N", name: "Nonlocality & measurement geometry",
    blurb: "SICs and MUBs, Bell correlations and locality thresholds, self-testing and contextuality." },
  { slug: "channels", code: "C", name: "Quantum channels & Shannon theory",
    blurb: "Capacities, strong converses, Gaussian and memory channels, computability of capacities." },
  { slug: "complexity", code: "A", name: "Quantum algorithms & complexity",
    blurb: "BQP separations, QMA, quantum PCP, state testing, fault tolerance and classical verification." },
  { slug: "undecidability", code: "U", name: "Computability & undecidability",
    blurb: "Where the spectral-gap, phase, thermalization and capacity problems become undecidable." },
  { slug: "open-systems", code: "O", name: "Open systems & quantum thermodynamics",
    blurb: "Lindblad generators, dynamics learning, memory, thermal operations and Gibbs preparation." },
  { slug: "foundations", code: "F", name: "Quantum foundations & operational frameworks",
    blurb: "Measurement, reconstruction, subsystem structure, causal order and quantum reference frames." },
];

export const REVIEW = {
  date: "2026-09-04",
  label: "4 September 2026",
  baseline: "e32e461",
  reviewed: 111,
  added: 12,
  reportUrl: "https://github.com/jpbruneton/open_quantum_problems/blob/main/docs/reviews/2026-09-04-catalogue-review.md",
};

// A targeted literature update does not reset the full-review date of every entry.
export const LITERATURE_UPDATE = {
  date: "2026-09-10",
  label: "10 September 2026",
  ids: ["C4", "C5", "E3", "A17", "N6", "N7", "B8", "F3", "E12", "QF7", "O10"],
  reportUrl: "https://github.com/jpbruneton/open_quantum_problems/blob/main/docs/reviews/2026-09-10-literature-update.md",
};

export const ALL_PROBLEMS = [
  ...SPECTRAL,
  ...MANYBODY,
  ...QFT,
  ...ENTANGLEMENT,
  ...NONLOCALITY,
  ...CHANNELS,
  ...COMPLEXITY,
  ...UNDECIDABILITY,
  ...OPENSYSTEMS,
  ...FOUNDATIONS,
].map((p) => ({
  status: "open",
  submissions: [],
  evidence: [],
  provenance: [],
  relations: [],
  reviewedAt: REVIEW.date,
  ...p,
}));

// Archived IDs remain addressable, but do not inflate open-problem counts.
export const PROBLEMS = ALL_PROBLEMS.filter((p) => !p.archive);
export const ARCHIVED_PROBLEMS = ALL_PROBLEMS.filter((p) => p.archive);

export function problemsByCat(catSlug) {
  return PROBLEMS.filter((p) => p.cat === catSlug);
}
export function getProblem(id) {
  return ALL_PROBLEMS.find((p) => p.id === id);
}
export function consolidatedInto(id) {
  return ARCHIVED_PROBLEMS.filter((p) => p.archive.targets.includes(id));
}
export function getCategory(slug) {
  return CATEGORIES.find((c) => c.slug === slug);
}

export const HORIZONS = {
  sharp: { label: "Sharp", desc: "A proof or single counterexample closes it." },
  incremental: { label: "Incremental", desc: "Progress = a better bound or larger tractable class." },
  programme: { label: "Programme", desc: "A research field; not closable by one submission." },
  conceptual: { label: "Conceptual", desc: "No community-agreed success criterion (yet)." },
};
export const STATUSES = {
  open: { label: "Open" },
  improved: { label: "Improved" },
  solved: { label: "Solved" },
};

export const EVIDENCE_KINDS = {
  published: { label: "Published result", desc: "Published under the stated hypotheses; not independently proof-checked here." },
  preprint: { label: "Preprint claim", desc: "Attributed manuscript claim, not treated as an established resolution." },
  numerical: { label: "Numerical evidence", desc: "A computation or extrapolation with its stated error and model limitations." },
  conjecture: { label: "Conjecture", desc: "A proposed statement, not a proved result." },
  withdrawn: { label: "Withdrawn claim", desc: "Not evidence that the problem has been solved." },
};

// These are not counted as open problems: their precise status needs another check.
export const WATCHLIST = [
  { title: "Robust, initializable 3D passive quantum memories", summary: "A May 2026 preprint claims a local construction with stretched-exponential thermal lifetime. Monitor lifetime robustness and passive initialization; deferred proofs are evidence-status items, not automatically new open conjectures.", url: "https://arxiv.org/abs/2605.10943" },
  { title: "Multipartite Bell activation and triangle networks", summary: "A 7 September 2026 preprint by Ulu, Weilenmann and Brunner claims multi-copy and catalytic activation of genuine multipartite nonlocality defined using biseparable nonsignaling models, including quantum-realizable examples. This highlights a composition issue for that definition; it does not settle the single-copy Werner threshold or binary-output triangle questions. Select a precise residual before promotion.", url: "https://arxiv.org/abs/2609.07380v1" },
  { title: "Homogeneous electron gas and Wigner crystallization", summary: "A further model-specific review is needed before adding a sharp low-density quantum-jellium question.", url: "https://comptes-rendus.academie-sciences.fr/physique/item/CRPHYS_2025__26_G1_369_0/" },
  { title: "Unitary Fermi gas", summary: "Choose a quantitative target, such as certified Bertsch-parameter bounds, rather than listing the entire field as a single problem.", url: "https://comptes-rendus.academie-sciences.fr/physique/item/CRPHYS_2025__26_G1_393_0/" },
];
