# Literature update — 17 October 2026

Baseline: `8b52522`. This targeted review follows the [5 October literature update](2026-10-05-literature-update.md). It covers two sources: arXiv announcements since that update, and the OpenAI Math Release, a GitHub collection of mathematical manuscripts published on 6 October 2026. Twenty-one active entries change; eight are now **Claimed solved**. One problem statement (M5) is corrected. Two non-counted watchlist items are added.

## Scope and method

**arXiv.** Retrieved the October monthly listings for quant-ph, math-ph, cond-mat.str-el, hep-th and cs.CC on 17 October 2026: 1,303, 448, 299, 531 and 166 entries respectively, including cross-lists. Metadata for the union came from the arXiv export API, giving 2,382 records, mostly submitted from 30 September to 15 October. The window overlaps the previous review so that no announcement day is skipped; manuscripts already cited in the catalogue were excluded. These are retrieval counts, not numbers of papers read. Title screening used catalogue keywords and was followed by abstract reading. For every incorporated source the manuscript PDF was read for scope and searched for AI-use disclosures.

**OpenAI Math Release.** Reviewed [`openai/math`](https://github.com/openai/math/tree/1581d4cbdd69a0faf34b2089614fe2a814316a6a) at commit `1581d4c` (12 October 2026). The repository describes 719 manuscripts in 372 result families, produced by an unreleased internal OpenAI model at an average of about three hours of ChatGPT Pro thinking compute per result. It reports that about 42% of top-line results are Lean-formalized. Its manuscripts are GitHub releases, not arXiv submissions; none of the arXiv records screened here is a version of them. All 372 family descriptions were screened. For the 24 quantum or mathematical-physics families retained, the principal manuscripts, per-paper READMEs and per-family Lean scope notes (`lean/docs/NNN.md`) were read. Evidence links are pinned to the reviewed commit. "v1" denotes the 6 October public edition; manuscript dates are the dates printed on the papers.

On 7 October OpenAI withdrew three algebraic-geometry manuscripts after a sign error and revised fourteen others ([repository history](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/history.md); [Retraction Watch report](https://retractionwatch.com/2026/10/08/openai-withdraws-preprints-722-manuscripts-unsolved-math-problems/)). None of the withdrawn or revised manuscripts is in a family used here, and none of the cited manuscripts' READMEs records a revision. Press coverage gives 722 manuscripts; the repository catalogue lists 719.

**Conferences.** The [QIP 2027 site](https://qipconference.org/2027/) (Singapore, 20–26 February 2027) gives 30 November 2026 as the talk-decision date and lists no accepted talks or invited speakers. Nothing from QIP 2027 is incorporated.

**Limits.** No proof was independently audited. No Lean project was rebuilt and no verification script was run. This includes the MUB binary64 pipeline, the Haldane-gap finite verifier and the zero-key exact-arithmetic checks. Where OpenAI reports a Lean formalization, its scope note was read: several cover only supporting statements, as recorded below. AI use is recorded as provenance and does not determine status.

## OpenAI Math Release: claimed full resolutions

These eight entries move to **Claimed solved**. Each OpenAI claim matches the catalogue statement; any residual scope point is noted. None is promoted to **Solved**.

| Entry | Manuscript (date printed) | Claim and scope | Lean scope reported by OpenAI |
| --- | --- | --- | --- |
| M1 | [Uniform excess charge for Coulomb molecules and the outer radius of neutral atoms](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Uniform-excess-charge-for-Coulomb-molecules-and-the-outer-radius-of-neutral-atoms-September-24-2026/paper.pdf) (24 Sep) | Full two-spin Coulomb molecule with $M$ nuclei of charge at least one binds at most $Z+CM$ electrons; $M=1$ gives the atomic statement. | Ionization-energy and radius asymptotics only; not $Z+CM$. |
| M2 | [Absolutely Continuous Spectrum for Weak-Disorder Anderson Models in Dimensions at Least Three](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Absolutely-Continuous-Spectrum-for-Weak-Disorder-Anderson-Models-in-Dimensions-at-Least-Three-September-23-2026/paper.pdf) (23 Sep) | Purely a.c. spectrum with nonzero weight on a disorder-independent open interval, for each $d\ge3$ and sufficiently small uniform disorder. | None for this paper. |
| M5 | [The periodic spin-one Haldane gap](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/The-periodic-spin-one-Haldane-gap-September-24-2026/paper.pdf) (24 Sep) | Uniform gap for the pure spin-1 chain on even periodic rings, with explicit bounds; uses a supplied finite numerical verifier. | None listed. |
| B1 | [A two-dimensional area law from a global spectral gap](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/A-two-dimensional-area-law-from-a-global-spectral-gap-September-24-2026/paper.pdf) (24 Sep) | Unique ground state, full-system gap, finite range, any finite induced square-lattice subgraph: entropy of every set is bounded by a constant times its boundary edges. | None listed. |
| B13 | [A density-uniform condensate bound for dilute Bose gases](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/A-density-uniform-condensate-bound-for-dilute-Bose-gases-September-27-2026/paper.pdf) (27 Sep); [hard-sphere ground-state condensation](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Ground-state-condensation-in-the-dilute-hard-sphere-gas-September-24-2026/paper.pdf) (24 Sep) | Uniform condensate fraction at small fixed density, $0\le T\le\rho^2$, on periodic boxes, for bounded nonnegative **radial** finite-range potentials; separately for hard spheres. A non-radial potential is outside the theorems; this is recorded in the entry. | Hard-sphere ground-state condensation only. |
| E16 | [Entanglement with zero distillable secret key in local dimension ten](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Entanglement-with-zero-distillable-secret-key-in-local-dimension-ten-September-27-2026/paper.pdf) (27 Sep) | Explicit entangled state on $\mathbb C^{10}\otimes\mathbb C^{10}$ with $K_D=0$, against admitted protocols that include all finite two-way LOCC protocols with a purifying eavesdropper. | Not the zero-key theorem. |
| C12 | Same manuscript, Theorems 1.2–1.3 | A dimension-ten PPT pair whose composition is not entanglement breaking, and a trace-preserving PPT channel on $M_{21}(\mathbb C)$ whose square is not entanglement breaking: a claimed disproof. | Both counterexamples. |
| N2 | [The maximum number of mutually unbiased bases in dimension six](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/The-maximum-number-of-mutually-unbiased-bases-in-dimension-six-September-24-2026/The-maximum-number-of-mutually-unbiased-bases-in-dimension-six-September-24-2026.pdf) (24 Sep) | $M(6)=3$. The exclusion of four bases is computer-assisted under stated binary64 and compiler conditions. | Only a five-basis bound and Fourier lemmas. |

Independent engagement so far is limited. Jakšić and Last's [8 October note](https://arxiv.org/abs/2610.11611v1) gives a shorter route for the final purity step of the M2 manuscript; this is not a verification of its multiscale argument. Three arXiv papers build on the spherical Laughlin result (see B14). No published expert assessment of the physics manuscripts was found.

## OpenAI Math Release: partial or comparison results

| Entry | Manuscript | Why the entry is not closed |
| --- | --- | --- |
| M12 → Improved | [Pure-Point Spectrum for the Two-Dimensional Anderson Model at Every Positive Disorder](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Pure-Point-Spectrum-for-the-Two-Dimensional-Anderson-Model-at-Every-Positive-Disorder-September-23-2026/paper.pdf) (23 Sep) | Pure-point type on the whole spectrum is claimed, but the paper explicitly does not assert exponential eigenfunction decay, which the statement requires. The Lean note covers only the spectrum as a set. |
| B2 → Improved | [Polynomial PEPS approximation of gapped square-grid ground states](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Polynomial-PEPS-approximation-of-gapped-square-grid-ground-states-September-24-2026/paper.pdf) (24 Sep) | Polynomial bond dimension at error $L^{-1}$ for nearest-neighbor open squares; the statement asks for every accuracy $\epsilon$ and general fixed range. |
| B14 → Improved | [A Fock-space inequality and the Laughlin spectral gap](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/A-Fock-space-inequality-and-the-Laughlin-spectral-gap-September-24-2026/A-Fock-space-inequality-and-the-Laughlin-spectral-gap-September-24-2026.pdf) (24 Sep); [stability companion](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Uniform-Stability-of-the-Spherical-Laughlin-Gap-October-5-2026/uniform-stability-spherical-laughlin-gap.pdf) (5 Oct) | Gap of at least $1/25$ on the round sphere; the statement concerns bounded-aspect-ratio tori. |
| C1 | [Classical capacity and entropy inequalities for generalized amplitude damping](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Classical-capacity-and-entropy-inequalities-for-generalized-amplitude-damping-September-24-2026/paper.pdf) (24 Sep) | Classical capacity of the generalized amplitude-damping family (reported Lean-formalized); the entry targets quantum-capacity formulas. |
| C10 | [The entropy photon-number inequality](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/The-entropy-photon-number-inequality-September-24-2026/paper.pdf) (24 Sep) | A long-standing finite-energy inequality, with its consequences for thermal-attenuator minimum output entropy and degraded pure-loss broadcast; one advance within a programme. Only the inequality is reported as Lean-formalized. |

Considered but not incorporated into an entry. The sharp one-dimensional matrix Lieb–Thirring constants for $1/2<\gamma<3/2$ are related to M13 but are not a three-dimensional result. Further families without a matching entry are on the watchlist (see below).

## Statement correction: M5

The M5 statement took $\liminf_{L\to\infty}$ over all periodic lengths. Odd periodic rings are geometrically frustrated for an antiferromagnet and are not part of the standard periodic formulation; the OpenAI manuscript states its result as the even-periodic formulation. The statement now specifies even $L$. The ID, title and intent are unchanged. The correction is explained in the entry, and the **Claimed solved** status applies to the corrected statement.

## arXiv manuscripts incorporated

All are preprints, reviewed at the stated version; dates are v1 submission dates.

| Entry | Submitted | Source | Scope and residual |
| --- | --- | --- | --- |
| A3 | 5 October | Cakan, Chung, Hung, Yang, [Separating ClonableQMA and QCMA Relative to a Classical Oracle](https://arxiv.org/abs/2610.06740v1) | Clonable witnesses beat classical ones relative to a classical oracle; relativized. |
| A5 | 5 October | Grewal, Mutreja, Tomer, [A classical oracle separation between QMA and QMA(2)](https://arxiv.org/abs/2610.06760v1) | Settles the classical-oracle version; the unrelativized comparison and QMA(2) ⊆ EXP remain open. |
| B1 | 10 October | Kuwahara, [The Rényi area law conjecture is false below α=1 in high dimensions](https://arxiv.org/abs/2610.15199v1) | Volume-law Rényi entropies with a von Neumann area law; a comparison compatible with B1. |
| B14 | 8 October | Gao, [Improving the lower bound on the Laughlin gap: An SDP search](https://arxiv.org/abs/2610.12700v1) | Raises the certified spherical constant to give a gap of at least $1/5$, plus a planar bound; builds on the OpenAI proof. |
| B14 | 13 October | Scheer, Khalaf, [A hierarchy of exact lower bounds on the Laughlin spectral gap](https://arxiv.org/abs/2610.18854v1) | Exact-rational SDP hierarchy certified in the spherical thermodynamic limit; torus left to future work. |
| C3 | 5 October (v3 reviewed) | Pirandola, [Energy-constrained two-way capacities of pure-loss and quantum-limited amplifier channels](https://arxiv.org/abs/2610.06832v3) | Pure-loss two-way capacities under a transmitted-photon constraint; pure loss is a boundary case. |
| C3 | 8 October | Falco, Mele, Lami, Giovannetti, [Energy-constrained two-way capacities of the pure-loss channel](https://arxiv.org/abs/2610.12365v1) | Independent claim of the same pure-loss formula under an input-photon constraint. |
| C3 | 6 October (v2 reviewed) | Pirandola, [Energy-constrained two-way capacity bounds for noisy Gaussian channels](https://arxiv.org/abs/2610.08786v2) | Improved weak converses for noisy families; gap to achievability remains. |
| C3 | 13 October | Pirandola, Spedalieri, [Finite-energy two-way assisted capacities: Exact formulas for multimode loss and fading](https://arxiv.org/abs/2610.18731v1) | Multimode pure loss and publicly revealed fading; noiseless loss only. |
| C10 | 15 October | Adesso, Lami, Giovannetti, [Classical Capacity of Single-Mode Bosonic Gaussian Channels](https://arxiv.org/abs/2610.22308v1) | Energy-constrained classical capacity of every single-mode Gaussian channel; multimode channels remain. |
| C10 | 9 October | Arqand, Smith, [No advantage from classical assistance for energy-constrained bosonic dephasing channels](https://arxiv.org/abs/2610.13854v1) | Four capacities coincide for a non-Gaussian family. |
| F3 | 6 October | Ramanathan, [No-Disturbance-without-Uncertainty generates the Quantum set in the simplest Bell scenario](https://arxiv.org/abs/2610.08749v1) | Restricted Bell-scenario characterization, not a full reconstruction. |
| F3 | 5 October | Pompili, Weilenmann, [Information causality does not single out the set of quantum correlations](https://arxiv.org/abs/2610.06604v1) | A candidate principle fails to single out the quantum set. |
| M2 | 8 October | Jakšić, Last, [Extended States on the Bethe Lattice Revisited](https://arxiv.org/abs/2610.11611v1) | Tree result; appendix engages one step of the OpenAI cubic-lattice proof. |
| N4 | 7 October (v2 reviewed) | Gao, Yu, Zhi, [An Explicit Counterexample to Tsirelson's Problem via a Linear System Game](https://arxiv.org/abs/2610.10248v2) | Explicit Lean-formalized $C_{qa}\ne C_{qc}$ witness; very large, so not minimal. |
| N6 | 4 October | Kidmose-Frederiksen, Nielsen, [Quantum n-coloring is undecidable for every n ≥ 3](https://arxiv.org/abs/2610.05280v1) | Rules out coloring games as a decidable island for perfect strategies. |
| O10 | 1 October | Kim, [Rapid mixing of quantum spin chains at any finite temperature](https://arxiv.org/abs/2610.01190v1) | One-dimensional. |
| O10 | 5 October | Chen, Ding, [Spectral Analysis Beyond the Spectral Gap: Rapid Mixing of Quantum Gibbs Samplers in One Dimension](https://arxiv.org/abs/2610.05848v1) | One-dimensional; the two-dimensional target remains. |
| QF5 | 6 October | Craig, [A gauge-invariant measure for lattice chiral fermions](https://arxiv.org/abs/2610.09093v1) | Candidate lattice measure for a class including the Standard Model on admissible fields; continuum theory, reflection positivity and admissibility remain open. |

## Watchlist and exclusions

Two watchlist items record OpenAI families without a matching entry, pending assessment. The first covers quantum computation: QAC0 parity, threshold parallel repetition for entangled games, QMA-hardness of continuum Coulomb energies, unitary synthesis, the optimal randomized-versus-quantum query exponent and exact factoring. The second covers mathematical physics: the 2D O(3) continuum limit and O(4) mass asymptotics, Heisenberg-ferromagnet magnetization, BFSS bound states, Kohn–Sham representability, scale-to-conformal symmetry in 4D QFT and the matrix Lieb–Thirring constants.

Screened but not incorporated:

- [On PPT entanglement distillation](https://arxiv.org/abs/2610.12454v1) separates PPT-distillable entanglement from the regularized Rains bound. It does not address NPT distillability (E1).
- [Stabilizer entropy cones](https://arxiv.org/abs/2610.18905v1) concerns stabilizer states, not the general quantum entropy cone of E13.
- [Entanglement Catalysis Beyond the Asymptotic Rate](https://arxiv.org/abs/2610.13602v1) treats pure bipartite concentration, outside E11's mixed or multipartite scope.
- [Two-center Thomas–Fermi–Dirac–von Weizsäcker ionization](https://arxiv.org/abs/2610.09997v2) is a density-functional model, not the Schrödinger statement in M1.
- [Mutually unbiased bases: common states, completion, and extension obstructions](https://arxiv.org/abs/2610.12180v1) gives restricted dimension-six unextendibility results. These are superseded in relevance by the N2 claim but remain independent evidence.
- [From Permutation Symmetry to Communication Bounds and Additivity](https://arxiv.org/abs/2610.02176v1) restricts to permutation-invariant inputs and does not give a capacity formula for C1.
- [Thermodynamic-limit bootstrap for fractional quantum Hall states](https://arxiv.org/abs/2610.21317v1) gives energy bounds and ground-state diagnostics, not the torus gap of B14.

This selection does not prove that no other relevant literature exists.

## Status, provenance and implementation

- **Claimed solved:** M1, M2, M5, B1, B13, E16, C12 and N2 join A4, A7, C4 and E10.
- **Moved from Open to Improved:** M12, B2, B14, N4 and QF5.
- **Updated within their existing status:** A3, A5, C1, C3, C10, F3, N6 and O10.
- **Totals:** 113 active entries, 44 Improved, 12 Claimed solved, 57 Open and zero Solved, plus ten archive/background pages. The watchlist is not counted.

Author-attributed AI disclosures are recorded per entry, separately from evidence. OpenAI attributes its manuscripts to an internal model under the author "OpenAI". Most incorporated arXiv manuscripts also disclose substantial AI assistance, mainly ChatGPT/GPT-6 Astra, with some Claude Opus 5.5 and Fable 5.1 use. No disclosure was found by text search in Cakan–Chung–Hung–Yang, Kidmose-Frederiksen–Nielsen, Ramanathan or Jakšić–Last. Absence of a disclosure is not evidence of no AI use.

The homepage and review page summarize this update. Only the twenty-one changed entries receive `reviewedAt: 2026-10-17`. IDs, titles and archive targets are unchanged; the only statement change is M5's even-length correction. `main.tex` remains a historical manuscript.

## Validation

- `npm test`: all 11 catalogue tests pass. New checks pin each OpenAI full-resolution claim to the reviewed commit, require the partial entries (M12, B2, B14, N4, QF5) to remain Improved, and check the M12 exponential-decay caveat and the M5 even-length statement.
- `npm run build`: production compilation and static-page generation succeed.
- A scan for control characters in the data files found none.

These checks validate the site and catalogue consistency, not the correctness of the research proofs. The changes are prepared in the local repository; this report does not certify a production deployment.
