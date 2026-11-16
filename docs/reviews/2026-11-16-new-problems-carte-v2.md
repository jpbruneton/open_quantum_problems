# New problems from the quant-ph map — 16 November 2026

This report follows the [16 November literature update](2026-11-16-literature-update.md),
which checked the citations of existing entries. It covers the other half of the same
review: open questions from nine active theoretical themes of the 2024–2026 quant-ph
literature that had no entry on the site.

Before starting, `origin/main` was fetched; it had no new commits. There were no
open pull requests or issues.

## Summary

| | Count |
|---|---|
| Candidate questions from the map | 48 |
| New catalogue entries from these questions | 32 |
| New “Claimed solved” or “Improved” entries from announced resolutions | 4 |
| New proposals (third batch) | 11 |
| Discarded at recheck | 1 |
| Level C, not drafted | 4 |

Counts after this update: 108 open, 81 improved, 29 claimed solved (218 active
entries). None is marked solved. The proposals page lists 55 priority candidates.

## Source and method

- **Map.** The 36,350 quant-ph abstracts submitted between 10 November 2024 and
  10 November 2026 were embedded (Qwen3-Embedding-0.6B and bge-large, concatenated)
  and clustered with Leiden on a 15-nearest-neighbour graph into 155 groups. 94 groups,
  about 20,000 papers, had neither an entry nor a cited paper. Nine sets of mostly
  theoretical groups were read in a targeted way. This produced 48 candidate questions
  with the authors' own formulations, rated A (posed as open by the authors, status
  checked), B (solid, with one reservation) or C (mostly inferred). The map and the
  theme files are in the maintainer's private research notes
  (`oqmresearch/docs/research/bilans/2026-11-16-carte-v2/`).
- **Recheck.** Each A and B question was rechecked on 16 November 2026 by one AI agent
  per theme, under a common brief:
  - targeted searches for resolutions posted after the theme file was written, or
    outside quant-ph;
  - every cited arXiv identifier confirmed on its abstract page (title, authors,
    versions, dates, journal reference). The arXiv API was rate-limited (HTTP 429) for
    most of the session, so abstract pages and arXiv's web search were used instead;
  - the sections the theme files cite (open problems, conjectures, outlooks) opened
    and read before any quotation was reused;
  - duplicates checked against the catalogue and the existing proposals.
- **Logs.** Each theme's verification log lists its search queries, the passages read,
  the identifiers confirmed and the discrepancies found. The logs are kept with the
  map, in `reverification/` next to the theme files. No proof was audited.

## Maintainer's decisions

1. **Entries or proposals.** Questions posed as open in the literature, with a source
   that says so, become catalogue entries, as on 9 November. Reformulated or partly
   inferred questions become proposals, with a caveat saying what is inferred.
2. **Categories.** No new category. Graph states and magic go to entanglement (E)
   or complexity (A); quantum walks and simulation to complexity (A); non-Hermitian
   spectra and the Rabi model to spectral theory (M); steering and measurements to
   nonlocality (N); quasiprobabilities to foundations (F) or nonlocality (N); monitored
   phases and time crystals to many-body theory (B); thermodynamics to open systems (O).
3. **Levels.** A and B questions are integrated; C questions are not.
4. **Announced resolutions.** Four candidates become entries; after review, O13 is
   “Improved” rather than “Claimed solved” (see below). The QAOA–Parisi claim,
   whose only source is the `openai/math` GitHub repository, does not; it is mentioned
   in the context of A45 only, as `CLAUDE.md` requires.

Applying decision 1 question by question moved some questions across levels:

- Five level B questions became entries because a source poses them explicitly:
  F18 (Kam calls it a conjecture), B20 (Fisher–Khemani–Nahum–Vijay, Outlook),
  A37 (Jennings et al.), C14 (Conjecture 9 of Bunth–Pitrik–Titkos–Virosztek) and
  O12 (Avitan et al.). O11 (A/B) is an entry for the same reason.
- One level A question became a proposal: the quadratic-ODE window $1\le R<\sqrt2$
  (now PA8). Lewis, Eidenbenz, Nadiga and Subaşı (Quantum 8, 1509 (2024)) closed the
  gap as Liu et al. posed it, with a non-normal linear part. Only the normal case
  remains, and no author poses it.

## New entries

| ID | Title | Status | Main source |
|---|---|---|---|
| E23 | Polynomial-time decision of local-unitary equivalence of graph states | Claimed solved | Zhang, [arXiv:2610.00527](https://arxiv.org/abs/2610.00527v2) |
| E24 | Smallest graph states separating levels of local equivalence | Open | [arXiv:2603.25219](https://arxiv.org/abs/2603.25219) |
| E25 | Geelen's conjecture: MBQC on proper vertex-minor-closed classes | Improved | McCarty, [thesis](https://uwspace.uwaterloo.ca/handle/10012/17633); [arXiv:2603.08847](https://arxiv.org/abs/2603.08847) |
| A35 | Perfect state transfer at long distance in polynomial-size unweighted graphs | Improved | Coutinho–Guo, [arXiv:2404.02236](https://arxiv.org/abs/2404.02236) |
| A36 | Uniform mixing of continuous-time quantum walks on cycles | Improved | [arXiv:quant-ph/0209106](https://arxiv.org/abs/quant-ph/0209106) |
| E26 | Krenn–Gu conjecture on GHZ graphs | Improved | [arXiv:1705.06646](https://arxiv.org/abs/1705.06646) |
| F16 | Optimal lower bound on the Wigner entropy of Wigner-positive states | Open | [arXiv:2105.12843](https://arxiv.org/abs/2105.12843); refutation of $1+\ln\pi$, [arXiv:2609.24670](https://arxiv.org/abs/2609.24670) |
| F17 | Extremality of Fock-bounded beam-splitter states | Open | [arXiv:2512.14831](https://arxiv.org/abs/2512.14831) |
| N20 | Fourier Kirkwood–Dirac representations whose positive states form a polytope | Improved | [arXiv:2501.12252](https://arxiv.org/abs/2501.12252) |
| F18 | No pure spin state has a non-negative SU(2) Wigner function | Open | [arXiv:2206.00195](https://arxiv.org/abs/2206.00195) |
| A37 | Carleman convergence for nonresonant spectra in the Siegel domain | Open | Jennings et al., [arXiv:2509.07155](https://arxiv.org/abs/2509.07155) |
| A38 | Global convergence of iterative QSP phase-factor solvers | Open | [arXiv:2510.00443](https://arxiv.org/abs/2510.00443) |
| E27 | Computational-basis optimality of nonlocal stabilizer entropy | Improved | Sierant, [arXiv:2609.13106](https://arxiv.org/abs/2609.13106) |
| E28 | Maximal stabilizer Rényi entropy without a Weyl–Heisenberg SIC | Open | [arXiv:2502.17550](https://arxiv.org/abs/2502.17550) |
| E29 | Purity threshold for multiqubit magic | Improved | [arXiv:2512.16777](https://arxiv.org/abs/2512.16777) |
| A39 | Bound magic states for qubits | Improved | Bravyi–Kitaev, [arXiv:quant-ph/0403025](https://arxiv.org/abs/quant-ph/0403025) |
| A40 | Beating the five-qubit threshold for T-type magic state distillation | Open | [arXiv:2501.10163](https://arxiv.org/abs/2501.10163) |
| A41 | Minimal length of permutation-invariant qubit codes | Improved | [arXiv:2603.10981](https://arxiv.org/abs/2603.10981) |
| M17 | Amoeba formula for two-dimensional open-boundary spectra | Open | Wang–Song–Wang, [arXiv:2212.11743](https://arxiv.org/abs/2212.11743) |
| B20 | Rigorous stability of the volume-law phase in monitored random circuits | Open | [arXiv:2207.14280](https://arxiv.org/abs/2207.14280) |
| B21 | Area law for monitored free fermions at every measurement rate | Open | [arXiv:2407.08045](https://arxiv.org/abs/2407.08045) |
| A42 | Shallow relative-error designs from i.i.d. brickwork circuits | Improved | Schuster–Haferkamp–Huang, [arXiv:2407.07754](https://arxiv.org/abs/2407.07754) |
| A43 | Scrooge hypothesis for shallow 2D random circuits | Open | [arXiv:2608.12255](https://arxiv.org/abs/2608.12255) |
| N21 | POVM steering threshold of two-qutrit isotropic and Werner states | Open | Uola et al., RMP, [arXiv:1903.06663](https://arxiv.org/abs/1903.06663) |
| N22 | The most non-projective qutrit and ququart measurements | Open | Cobucci et al., [arXiv:2508.03652](https://arxiv.org/abs/2508.03652) |
| C14 | Nestedness of quantum p-Wasserstein cost operators | Open | [arXiv:2501.08066](https://arxiv.org/abs/2501.08066) |
| A44 | Classical algorithms versus DQI on Optimal Polynomial Intersection | Open | Jordan et al., [arXiv:2408.08292](https://arxiv.org/abs/2408.08292) |
| A45 | The QAOA fixed-angle conjecture on 3-regular graphs | Open | [arXiv:2010.11209](https://arxiv.org/abs/2010.11209) |
| M18 | Spectral inequalities for the quantum Rabi model | Open | Braak, [arXiv:1103.2461](https://arxiv.org/abs/1103.2461); [arXiv:2503.15572](https://arxiv.org/abs/2503.15572) |
| B22 | Exponential-in-N lifetime of the many-body-localized time crystal | Open | Huang, [arXiv:2309.05641](https://arxiv.org/abs/2309.05641) |
| O11 | Rigorous absolutely stable time crystal in continuous-time open dynamics | Open | Machado et al., [arXiv:2110.00585](https://arxiv.org/abs/2110.00585) |
| O12 | Triplet reduction for the Markovian Mpemba effect | Open | Avitan et al., [arXiv:2603.04567](https://arxiv.org/abs/2603.04567) |
| A46 | Quantum spatial search on the two-dimensional grid | Claimed solved | Li, [arXiv:2610.23560](https://arxiv.org/abs/2610.23560v1) |
| A47 | Near-linear gate count for lattice Lindbladian simulation | Claimed solved | Kitchen, [arXiv:2609.31312](https://arxiv.org/abs/2609.31312v1) |
| O13 | Entanglement depth forced by fast complete battery charging | Improved | Sun–Lu–Jin, [arXiv:2605.16935](https://arxiv.org/abs/2605.16935v1) |
| A48 | Polynomials achievable by multivariable QSP | Improved | Rossi–Chuang, [arXiv:2205.06261](https://arxiv.org/abs/2205.06261) |

Notes on the announced resolutions:

- **E23.** The theme file rated this question open. Zhang's single-author preprint
  (v1 30 September, v2 4 October 2026) claims a deterministic $\tilde O(n^{6.38})$
  algorithm, building on Claudet and Perdrix. Its acknowledgements say OpenAI models
  developed the arguments under the author's supervision; this is in `provenance`.
- **A46.** Aaronson and Ambainis asked in 2003 whether the $\sqrt{\log N}$ factor of
  2D grid search can be removed. Li claims an $\Omega(\sqrt{N\log N})$ lower bound, so
  Tulsi's walk would be optimal. This is a different question from A11.
- **A47.** Three apparently independent preprints claim Mizuta's near-linear gate count:
  Kitchen (2609.31312), Trivedi–Yu–Malz (2609.36203) and Shen–Wu–Yuan–Zhang
  (2610.05362, with matching lower bounds). All three disclose AI use.
- **O13.** Sun, Lu and Jin announce a proof of the Shi et al. conjecture in its stated
  setting (time-independent charging Hamiltonians, pure states). The main text gives a
  proof sketch, and two steps rely on a Supplemental Material that is not on arXiv. The
  maintainer decided to record it as “Improved”, with the preprint as progress, until
  the full argument is public.
- **A48.** Neither multivariate QSP preprint (2610.01125, 2610.08714) claims the
  Rossi–Chuang characterization: both work in broader query models with extra
  workspace. The entry is “Improved” on the strength of Ito–Mori–Sakamoto–Fujii's
  decision procedure (Quantum 10, 2102 (2026)), with the algebraic characterization as
  the residual.

## New proposals (third batch)

These items are in `app/data/proposals-carte-v2.js`. They carry `batch: "2026-11-16"`
and no `formerly` key, since the P1–P81 numbering ended on 9 November.

| Key | Title | Extends |
|---|---|---|
| PA8 | Dissipative quadratic ODEs with a normal linear part: the window $1\le R<\sqrt2$ | — |
| PA9 | Low-energy Trotter error measured from the true ground energy | — |
| PA10 | Average-case hardness of the peak of random peaked circuits | A13 |
| PA11 | Optimal query complexity of quantum partial search | — |
| PB5 | Hardness of recognizing phases of ground states of constant-local Hamiltonians | — |
| PM7 | Spectral-area criterion for the two-dimensional skin effect | M17 |
| PM8 | Thouless relation for random non-Hermitian band matrices beyond nearest neighbours | — |
| PN4 | Tight Shannon entropic uncertainty for the five MUBs of a ququart | N3 |
| PN5 | Complementary quantum correlations for qubit–qutrit states | — |
| PO4 | Battery locality in noncommuting charging-power bounds: $\sqrt{k_B}$ or $k_B$? | O7, O13 |
| PO5 | Trap-free single-control landscapes for $N\ge3$ levels | — |

## Discarded questions

- **Berta–Lemm–Wilde conjecture, fidelity version with the non-rotated Petz map (level B).**
  Refuted. Bhattacharya, [arXiv:2309.02074](https://arxiv.org/abs/2309.02074)
  (Rev. Math. Phys. 2026), gives a qubit counterexample with a pinching channel; the
  agent recomputed it (the inequality fails by about 0.016 nats). The theme file had
  missed it.
- **Level C, not drafted:** obstruction to ideal Chern bands with finite-range hopping;
  depth-limited ground-state energy estimation with a guiding state; long-time edge
  Green's function of a semi-infinite non-Hermitian chain; exponential failure of
  constant-depth QAOA on linear objectives.
- **Not created:** the QAOA–Parisi claim (GitHub only).

## Corrections to the theme files

- **Wrong identifiers or attributions.** Mori 2023 is
  [arXiv:2310.00918](https://arxiv.org/abs/2310.00918), not 2309.16801. The
  Seshadreesan–Berta–Wilde conjecture is in 1410.1443, not 1403.6102. 1705.06343 is
  Guerini et al.; Oszmaniec et al.'s PRL is 1609.06139. 2102.07787 is Friedland et al.;
  De Palma–Trevisan is 1911.00803. Zurel's 2602.22336 is with Davis. The
  fixed-point-iteration QSP paper (2209.10162) is by Dong, Lin, Ni and Wang. Laneve–Wolf
  is 2407.20823; 2506.20484 is Laneve alone.
- **Misattributed bounds.** The tight H-direction distillation threshold is Reichardt
  (quant-ph/0411036). Bravyi–Kitaev's H threshold is about 0.141, not 0.146. The bound
  $D^3\le80m$ is Coutinho–Guo 2024, not Coutinho 2018. Grover–Radhakrishnan's partial
  search bound is $c_K\ge0.42/\sqrt K$, for error $O(N^{-1/4})$.
- **Statuses missed.** Lewis et al. 2024 (quadratic ODEs, above). Zhang 2026 (E23).
  Two further claims for A47.
- **Confirmed.** Machado et al. is arXiv:2110.00585 (PRL 131, 180402 (2023)). Liu et
  al. 2021 assume a diagonalizable, not normal, linear part; the normality condition
  comes from Jennings et al. The $1+\ln\pi$ Wigner-entropy conjecture was refuted in
  September 2026 (2609.24670, 2609.13312, 2609.23277); F16 states the optimal constant
  as $c^\ast\in[\ln 2\pi,1+\ln\pi)$.

## AI-use disclosures

Recorded in `provenance`, or in `ai` for proposals:

- E23 (Zhang, 2610.00527), E25 (2608.21526), F16 (2609.24670), E27 (Sierant, 2609.13106)
  and A41 (Giannisis Manes–Subramanian–Jiang, 2610.00561);
- A42 (2510.08537, 2608.18650), A43 (2608.12255), A44 (Kramer et al., 2610.02145,
  checked in the text of v2) and A45 (Binkowski, 2609.27703);
- A46 (Li, 2610.23560), A47 (the three claims and Mizuta's editorial use) and A48
  (2610.01125, 2610.08714);
- PN5 (Wang–Wang–Chen) and PO4 (Mathew, 2609.06104, language editing).

Their absence elsewhere is not evidence of no AI use.

## Found and not applied

These items await the maintainer's decision.

- **A27** should cite Conjecture 6.1 of 2610.02100 and Baer–Haah (2607.20919). This
  was already listed in the 16 November literature update.
- **E8** could cite Zhang's claim (2610.00527).
- **O11** concerns a classical Floquet–Langevin model, which is the step Machado et al.
  state explicitly. The quantum Lindblad version is inferred and stays in the residual.
- **Status choices** that could go either way: E28 (open or improved), A44 and A45
  (open or improved), M17 (open or improved).
- **Unverified items:** the venue labels marked “preprint” in A46, and the Kotowski–Oszmaniec
  constant and Beatty's review in N21–N22, which the agents could not open.

## Verification

The entries were drafted by AI agents and integrated without line-by-line human
review. `npm test` (catalogue integrity, KaTeX, rendered views) and `npm run build`
pass. Each new “Claimed solved” status was checked against the claim paper's abstract
and main theorem as reported in the logs; E23's abstract and submission history were
reread for this report. No proof was audited.
