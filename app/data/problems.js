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
    blurb: "Area laws, tensor networks, thermalization, phase classification, the Hubbard model." },
  { slug: "qft", code: "QF", name: "Mathematical quantum field theory",
    blurb: "Nonperturbative construction of gauge theories, mass gaps, scattering, entanglement in the continuum." },
  { slug: "entanglement", code: "E", name: "Entanglement theory",
    blurb: "Distillability, LOCC, entanglement measures, marginals, the entropy cone, AME states." },
  { slug: "nonlocality", code: "N", name: "Measurements, nonlocality & contextuality",
    blurb: "SIC-POVMs, MUBs, Bell scenarios, self-testing, contextuality as a resource." },
  { slug: "channels", code: "C", name: "Quantum channels & Shannon theory",
    blurb: "Capacities, strong converses, Gaussian and memory channels, computability of capacities." },
  { slug: "complexity", code: "A", name: "Quantum algorithms & complexity",
    blurb: "BQP separations, QMA landscape, quantum PCP, sampling hardness, speedup criteria." },
  { slug: "undecidability", code: "U", name: "Computability & undecidability",
    blurb: "Where the spectral-gap, phase, thermalization and capacity problems become undecidable." },
  { slug: "open-systems", code: "O", name: "Open systems & quantum thermodynamics",
    blurb: "Lindblad generators, master-equation derivations, non-Markovianity, work and heat." },
  { slug: "foundations", code: "F", name: "Foundations & missing formalism",
    blurb: "Measurement, the Born rule, reconstruction, subsystems, causal order, quantum clocks." },
];

export const PROBLEMS = [
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
];

// Normalize defaults: every problem starts "open" with no contributions.
PROBLEMS.forEach((p) => {
  if (!p.status) p.status = "open";
  if (!p.submissions) p.submissions = [];
});

export function problemsByCat(catSlug) {
  return PROBLEMS.filter((p) => p.cat === catSlug);
}
export function getProblem(id) {
  return PROBLEMS.find((p) => p.id === id);
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
