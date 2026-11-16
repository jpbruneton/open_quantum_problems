# Literature update — 16 November 2026: citation check of the 2024–2026 quant-ph corpus

This update follows the [14 November update](2026-11-14-literature-update.md).
Earlier updates screened new arXiv announcements. This one looks backwards: it checks
which papers of the last two years the catalogue should already cite. Its scope is
limited to existing entries and proposals. No entries were added.
The same review also produced 36 new entries and 11 proposals, reported separately in
[2026-11-16-new-problems-carte-v2.md](2026-11-16-new-problems-carte-v2.md).

Before starting, `origin/main` was fetched; it had no new commits. There were no
open pull requests or issues.

## Method

- Corpus: the 36,350 quant-ph abstracts submitted between 10 November 2024 and
  10 November 2026. Papers outside quant-ph (math-ph, hep-th or cs.CC only) were not
  covered.
- Retrieval: for each of the 226 active entries and proposals, the 60 nearest
  abstracts by semantic embedding (Qwen3-Embedding-0.6B, query mode) were re-scored
  by a cross-encoder (Qwen3-Reranker-0.6B), which judged whether a paper directly
  addresses the entry's precise question.
- Threshold: candidates scoring at least 0.9 that the entry did not cite were kept,
  at most six per entry, giving 554 candidates on 152 entries. At this threshold the
  method recovers 72% of the corpus papers that entries already cite, so about a
  quarter of relevant papers are expected to be missed.
- Screening: each candidate was compared with the full entry and with earlier
  reports in `docs/reviews/`. Its abstract was read, and its full text when the
  result could change a status. Candidates were classed as progress (61), claim (7),
  reference (49), related (332), irrelevant (71) or already cited (34).
- Every status change below was checked again against the entry's statement, and
  the arXiv metadata (authors, versions, dates, journal references) of every added
  source were retrieved from the arXiv API.

This report covers only the status changes approved by the maintainer. Smaller
additions of evidence and references, and corrections to other entries, are listed
at the end and were not applied.

## Status changes

| ID | Before | After | Source |
|---|---|---|---|
| A23 Quantum triangle finding | Open | Claimed solved | Cornelissen–Gilani–Zhou, [arXiv:2611.06751](https://arxiv.org/abs/2611.06751v1) |
| N13 Semialgebraicity of $\mathcal C_{qa}$ | Open | Claimed solved | Gao–Ji–Liu, [arXiv:2609.18865](https://arxiv.org/abs/2609.18865v1) |
| A26 Quantum Max-Cut | Open | Improved | Piddock, [arXiv:2510.07995](https://arxiv.org/abs/2510.07995v1); Heilman, [arXiv:2608.00333](https://arxiv.org/abs/2608.00333v1) |
| A28 Structure learning from Gibbs states | Open | Improved | Bergamaschi, [arXiv:2610.01074](https://arxiv.org/abs/2610.01074v1) |
| B3 PEPS contraction | Open | Improved | Harley–Witteveen–Malz, [arXiv:2509.19963](https://arxiv.org/abs/2509.19963v2) |
| M6 Gap stability | Open | Improved | Li–Zou, [arXiv:2611.06528](https://arxiv.org/abs/2611.06528v1); Jackson–Nachtergaele–Young, [arXiv:2605.12184](https://arxiv.org/abs/2605.12184v3) |
| M7 PEPS parent gaps | Open | Improved | Kastoryano, [arXiv:2609.27993](https://arxiv.org/abs/2609.27993v1) |
| N5 Dimension of nonlocal correlations | Open | Improved | Douglas, [arXiv:2609.05555](https://arxiv.org/abs/2609.05555v2) |
| O2 Master-equation error bounds | Open | Improved | Ikeuchi–Mori, Scandi–Alhambra, Agerskov–Nathan |

Counts: 87 open, 69 improved, 26 claimed solved (182 active entries). None is marked solved.

## Updated entries

- **A23 (triangle finding, now Claimed solved).** Theorem 1.1 gives
  $\Omega(n^{13/12})$ bounded-error queries for finding a triangle in the
  adjacency-matrix model. The bound extends to detection and to every fixed connected
  non-bipartite subgraph. The statement asks for “an $O(n^{5/4-\varepsilon})$
  algorithm or an $\Omega(n^{1+\varepsilon})$ lower bound”, and $\varepsilon=1/12$
  meets the second target. The entry's horizon stays incremental. Its residual now
  records that the exponent lies between $13/12$ and $5/4$. Provenance: the authors
  report that GPT 6 Astra developed the whole argument for the $13/12$ bound,
  starting from their own $\Omega(n\sqrt{\log n})$ proof.
- **N13 (semialgebraicity, now Claimed solved).** The answer is negative: with four
  binary measurements per party, $\mathcal C_q$, $\mathcal C_{qa}$ and
  $\mathcal C_{qc}$ meet a quadratic curve of synchronous behaviours in the discrete
  set $\alpha=2-2/m$. The argument uses the Kruglyak–Rabanovich–Samoilenko
  classification of scalar sums of four projections, and it holds whatever real
  coefficients are allowed. This is exactly the non-effective case that the old
  residual left open. Provenance: OpenAI Codex assisted with literature search,
  proof development, checks and writing.
- **A26 (Quantum Max-Cut, now Improved).** Piddock proves the first unconditional
  NP-hardness of approximation, with a non-explicit constant. Heilman proves the
  $k=3$ vector-valued Borell inequality, with a computer-assisted certificate, so the
  0.956 Unique-Games bound no longer needs the Borell conjecture. Wayland, Jorquera
  and Kolla ([arXiv:2610.03670](https://arxiv.org/abs/2610.03670v1)) estimate the
  bipartite ground energy classically on dense balanced expanders. Their result is a
  special case of the BPP question, which they say remains open in general.
- **A28 (structure learning, now Improved).** Bergamaschi's stationarity test
  learns the unknown interaction graph at every fixed $\beta$ when the graph has
  bounded degree and polynomial volume growth. The progress sentence “solved only at
  high temperature” was restricted to general bounded-degree graphs, which remain open.
- **B3 (PEPS contraction, now Improved).** Above a constant injectivity threshold,
  2D PEPS have a uniform parent gap and local observables can be estimated in time
  $\mathrm{poly}(1/\epsilon)$, independent of system size. Below another threshold
  the task is postBQP-complete. The window between the thresholds and the
  translation-invariant case remain open.
- **M6 (gap stability, now Improved).** Li and Zou prove gap stability for every
  gapped, translation-invariant 1D Hamiltonian with a unique ground state. They give
  counterexamples without translation invariance, and fine-tuned ones in $d\ge2$.
  Jackson, Nachtergaele and Young prove local topological quantum order for the
  hexagonal and Lieb-lattice AKLT models. Provenance (Li–Zou): ChatGPT produced a
  large part of the results, which the authors verified.
- **M7 (PEPS parent gaps, now Improved).** Kastoryano's boundary-response condition
  gives an analytic uniform gap for the hexagonal AKLT model. The earlier
  computer-assisted proofs (Lemm–Sandvik–Wang; Pomata–Wei) were added as context.
  A Lean certificate covers the scalar Kotecký–Preiss and counting estimates only.
  This is partial, so the entry gets no Lean badge.
- **N5 (dimension, now Improved).** Douglas claims
  $D(\varepsilon)=\Theta(\log(1/\varepsilon))$ for the I3322 value, with a
  constructive upper constant. The paper was already cited in N4.
- **O2 (master equations, now Improved).** Three results cover the regimes named in
  the residual, each with a stated limitation:
  - many-body limits, under an unproved accelerated-dissipation assumption (Ikeuchi–Mori);
  - closing level spacings, with error growing linearly in time (Scandi–Alhambra);
  - generator-level bounds for Gaussian baths (Agerskov–Nathan).
- **O3 (strong-coupling dynamics, stays Open).** Chen and Cai
  ([arXiv:2610.29372](https://arxiv.org/abs/2610.29372v1)) give a certified
  simulation scheme for linear coupling to Gaussian baths from factorized states. The
  statement asks for non-Gaussian or initially correlated models. The paper is
  recorded as partial progress, and the status is unchanged.

## Proposals

- **PG2 (Rényi QNEC).** Faulkner's arXiv:2611.11760, flagged on 12 November, proves
  the diagonal Rényi QNEC for all Araki–Masuda indices $p>2$, non-integer values
  included. The statement now puts general off-diagonal shape deformations first.
  The assessment records that this result subsumes the integer case claimed by
  Kibe–Roy, and Hollands–Longo's new proof of the QNEC was added to the baseline.
  The verdict stays “under review”.
- **PO2 (critical Davies gap).** Raikovich, Mák, Czabán and Gilyén
  ([arXiv:2610.06818](https://arxiv.org/abs/2610.06818v1)) claim
  $\mathrm{gap}=\Theta(n^{-1/2})$ at $\beta=2$ for Davies generators with arbitrary
  KMS weights. The statement and assessment now say that the exponent is claimed and
  that the crossover window $\beta=2+cn^{-\gamma}$ is the remaining target.

## Found and not applied

These items await the maintainer's decision.

- **Text corrections:**
  - E14: a real AME(4,6) has been constructed (2610.17170).
  - PC3: the strong form is proved for every pure-output qubit channel (2609.28592).
  - PN2 and N4: proofs of the I3322 conjecture by Pauwels (2608.29734) and
    Coladangelo (2609.06038).
  - N19: NP-hardness of saturability (2609.35975).
  - A27: superseded by Baer–Haah (2607.20919).
  - Missing references in A4, F6, QG6 and B16.
- **C11:** a threshold $q_*\ge0.2029$ is announced (2609.39747). The sign is
  checked to $10^{-12}$ without interval arithmetic, so it is not applied.
- **Smaller evidence additions:** C5, O9, C9, A17, A18, A25, A30, E1, E2, E8, E11,
  E19, N6, N10, N15, H5, B10, B15, F3, F5, F10, F13 and QF11.
- **Not to be cited:** arXiv:2511.03537, surfaced for N2, N3 and PN1. Its announced
  implication rests on an invalid recurrence.

## Verification

Each changed status was rechecked against the entry's statement using the abstract
and the reading notes of the full text, which covered theorem statements, scope and
AI disclosures. No proof was audited and no Lean build was rerun. Coverage is limited
to the quant-ph corpus and the retrieval threshold described above.
