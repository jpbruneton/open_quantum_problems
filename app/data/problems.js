// Aggregator for "Open Problems in Quantum Mechanics for AI Agents".
//
// Each problem carries a single evaluability badge (horizon):
//   "sharp"       a proof or single counterexample closes it (solved / open).
//   "incremental" no binary finish; progress = better bound / larger class.
//   "programme"   a whole research field; not closable by one submission.
//   "conceptual"  no community-agreed success criterion (foundations).
//
// status    : "open" | "improved" | "claimed-solved" | "solved" (default: "open").
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
export const LITERATURE_UPDATES = [{
  date: "2026-10-26",
  label: "26 October 2026",
  ids: ["A5", "A6", "A11", "A12", "A18", "B5", "C1", "C3", "C6", "E8", "E12", "F3", "F8", "M10", "N2", "O4", "O10", "QF5", "QF9"],
  reportUrl: "https://github.com/jpbruneton/open_quantum_problems/blob/main/docs/reviews/2026-10-26-literature-update.md",
}, {
  date: "2026-10-17",
  label: "17 October 2026",
  ids: ["A3", "A5", "B1", "B2", "B13", "B14", "C1", "C3", "C10", "C12", "E16", "F3", "M1", "M2", "M5", "M12", "N2", "N4", "N6", "O10", "QF5"],
  reportUrl: "https://github.com/jpbruneton/open_quantum_problems/blob/main/docs/reviews/2026-10-17-literature-update.md",
}, {
  date: "2026-10-05",
  label: "5 October 2026",
  ids: ["A3", "A5", "A7", "A11", "A19", "B5", "C5", "E3", "E5", "E8", "E10", "F3", "M2", "N3", "N7", "O10"],
  reportUrl: "https://github.com/jpbruneton/open_quantum_problems/blob/main/docs/reviews/2026-10-05-literature-update.md",
}, {
  date: "2026-09-28",
  label: "28 September 2026",
  ids: ["A4", "A6", "A7", "A19", "C1", "C3", "C4", "C10", "E3", "E8", "E10", "F9", "M2", "N7", "O10", "QF8"],
  reportUrl: "https://github.com/jpbruneton/open_quantum_problems/blob/main/docs/reviews/2026-09-28-literature-update.md",
}, {
  date: "2026-09-10",
  label: "10 September 2026",
  ids: ["C4", "C5", "E3", "A17", "N6", "N7", "B8", "F3", "E12", "QF7", "O10"],
  reportUrl: "https://github.com/jpbruneton/open_quantum_problems/blob/main/docs/reviews/2026-09-10-literature-update.md",
}];

export const LITERATURE_UPDATE = LITERATURE_UPDATES[0];

// Source and consistency corrections. They do not change entry review dates.
export const CORRECTION_LOG = {
  date: "2026-09-28",
  label: "28 September 2026",
  reportUrl: "https://github.com/jpbruneton/open_quantum_problems/blob/main/docs/reviews/2026-09-28-correction-log.md",
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
  open: { label: "Open", desc: "The stated problem remains open." },
  improved: { label: "Improved", desc: "Partial progress is recorded; the full stated problem remains open." },
  "claimed-solved": { label: "Claimed solved", desc: "A full resolution of the stated problem has been claimed; independent assessment is pending." },
  solved: { label: "Solved", desc: "An established resolution of the stated problem." },
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
  { title: "OpenAI quantum-computation manuscripts without a catalogue entry", summary: "The 6 October 2026 OpenAI Math Release claims, among others, that parity is not in measured-output QAC0, exponential threshold parallel repetition for finite-dimensional entangled games, QMA-hardness of continuum Coulomb ground energies, constant-error Aaronson–Kuperberg unitary synthesis with a target-dependent Boolean oracle, total functions ruling out every exponent below four in the randomized-versus-quantum query bound, disproving the cubic conjecture, and exact factoring over a fixed finite gate set. OpenAI reports Lean formalizations for some, not all. Decide on precise entries only after independent assessment. Comparison points (October 2026): Jain (15 October, v1) reproves Song's cubic parallel-repetition rate for finite two-player entangled games and adds a threshold bound via quantum conditional relative entropy; Gretta, Gupta and Joshi (FOCS 2026) show that Parity ∉ QAC0 is equivalent to Fourier concentration of QAC0, and Grier, Morris and Wu (FOCS 2026) show QAC0 contains TC0 given many input copies. These frame, but do not assess, the OpenAI QAC0 and parallel-repetition claims.", url: "https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/CONTENTS.md" },
  { title: "OpenAI mathematical-physics manuscripts without a catalogue entry", summary: "The same release claims a non-Gaussian massive continuum limit of the 2D O(3) model and exact 2D O(4) mass asymptotics, Bloch's law and spontaneous magnetization for quantum Heisenberg ferromagnets in d≥3, a unique threshold bound state of the SU(N) BFSS model, failure of Kohn–Sham ensemble representability for a Coulomb molecule, scale-to-conformal symmetry in 4D QFT under stated hypotheses, and sharp 1D matrix Lieb–Thirring constants for 1/2<γ<3/2. The last is related to M13 but is not a three-dimensional result. These are pending assessment.", url: "https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/overview.pdf" },
  { title: "Thermal lifetime of Haah's 3D cubic code", summary: "Stengele, Caha, Capel and Warzel (30 September 2026, v1) claim rapid mixing for the specified Davies dynamics of Haah's cubic code at every fixed positive temperature, ruling out self-correction in that setting. This model-specific obstruction does not rule out every 3D passive memory. Track independent assessment and the bath and rate assumptions.", url: "https://arxiv.org/abs/2609.39959v1" },
  { title: "Robust, initializable 3D passive quantum memories", summary: "A May 2026 preprint claims a local construction with stretched-exponential thermal lifetime. Monitor lifetime robustness and passive initialization; deferred proofs are evidence-status items, not automatically new open conjectures. Follow-up (15 October 2026, v1): Balasubramanian, Davydova, Lin and Thorngren prove, by a recursive cluster expansion, that the two-dimensional classical spin model of that preprint has many metastable states at nonzero temperature that are stable to arbitrary Hamiltonian perturbations, described as the first such example. This is a classical-model stability theorem, not a quantum memory lifetime.", url: "https://arxiv.org/abs/2605.10943" },
  { title: "Multipartite Bell activation and triangle networks", summary: "A 7 September 2026 preprint by Ulu, Weilenmann and Brunner claims multi-copy and catalytic activation of genuine multipartite nonlocality defined using biseparable nonsignaling models, including quantum-realizable examples. This highlights a composition issue for that definition; it does not settle the single-copy Werner threshold or binary-output triangle questions. Select a precise residual before promotion.", url: "https://arxiv.org/abs/2609.07380v1" },
  { title: "Homogeneous electron gas and Wigner crystallization", summary: "A further model-specific review is needed before adding a sharp low-density quantum-jellium question. October 2026 inputs: Csirik (14 October, v1) proves that the quantum Jellium energy per volume of Lieb–Narnhofer equals the uniform-electron-gas energy of Lewin–Lieb–Seiringer, extending the classical equality, with parts checked in Lean relative to stated hypotheses; Muratov and Novaga (21 October, v1) give a computer-assisted proof that the body-centred cubic lattice uniquely minimizes the renormalized three-dimensional Coulomb lattice energy among Bravais lattices of fixed covolume; Benedikter, Lill, Porta and Schlein (18 October, v1) prove that the random-phase approximation bounds the correlation energy of the dense mean-field Fermi gas from above in the thermodynamic limit. None is a low-density quantum crystallization theorem.", url: "https://comptes-rendus.academie-sciences.fr/physique/item/CRPHYS_2025__26_G1_369_0/" },
  { title: "Unitary Fermi gas", summary: "Choose a quantitative target, such as certified Bertsch-parameter bounds, rather than listing the entire field as a single problem.", url: "https://comptes-rendus.academie-sciences.fr/physique/item/CRPHYS_2025__26_G1_393_0/" },
];
