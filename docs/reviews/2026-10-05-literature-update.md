# Literature update — 5 October 2026

Baseline: `4f26bc9`. This targeted review follows the [28 September literature update](2026-09-28-literature-update.md) and [source corrections](2026-09-28-correction-log.md). Sixteen active entries gain twenty distinct versioned arXiv manuscripts. One additional manuscript is recorded in the research watchlist.

## Scope and method

Retrieved the complete recent lists for [quant-ph](https://arxiv.org/list/quant-ph/recent?skip=0&show=2000), [math-ph](https://arxiv.org/list/math-ph/recent?skip=0&show=2000), [cond-mat.str-el](https://arxiv.org/list/cond-mat.str-el/recent?skip=0&show=2000), [hep-th](https://arxiv.org/list/hep-th/recent?skip=0&show=2000) and [cs.CC](https://arxiv.org/list/cs.CC/recent?skip=0&show=2000) on 5 October 2026. These covered announcements dated 29 September–5 October and returned 865, 237, 128, 276 and 103 records respectively, including cross-list duplicates. These are retrieval counts, not numbers of papers read in full. Title screening used catalogue-related keywords, followed by abstract and selected manuscript reading. The recent-list URLs change over time; the versioned source table below records the incorporated evidence.

For incorporated sources, checked titles, authors, submission histories, main statements and selected scope passages. Searched manuscript text for author AI disclosures. Rouzé–Stilck França's HTML was truncated, so the PDF was used to check the chain theorem, perturbative conditions and the disclosure on page 55. No disclosure found in a text search is not evidence of no AI use. Dates below are v1 submission dates, not announcement dates inferred from identifiers.

Also rechecked the arXiv records for the four existing full-resolution claims (A4, A7, C4, E10), including targeted searches for corrections. The checked records still displayed v1 and did not themselves indicate withdrawal. The new E10 paper contains a substantive challenge absent from the older abstract record. No independent proof audit, Lean rebuild, certificate execution or exhaustive re-review of all 113 entries was performed.

## E10: replace the evidential basis of the pending claim

[Baghali Khanian–Negari, v1](https://arxiv.org/html/2610.03630v1), Appendix D, gives a counterexample to Lemma 2 of Krohn-Grimberghe's v1 at its stated Werner parameter, invalidating that proof's lower-bound argument. The older reference and artifact remain visible as challenged historical material, not support for the current resolution. This is not labeled an arXiv withdrawal.

The new manuscript claims ordinary von Neumann nonadditivity on a nonempty Werner-state interval using a new canonical-optimality argument. **Claimed solved** is retained on that new basis. The authors report Lean formalization; it was not rebuilt here. A two-copy violation and the exact regularized value are still separate open questions. The review does not upgrade E10 to **Solved**.

## Incorporated manuscripts

All sources below are preprints, reviewed at v1. A result on a different model is labeled as a comparison or restricted advance.

| Entry | Submitted | Source | Scope and residual |
| --- | --- | --- | --- |
| A3 | 2 October | Cakan, [Separating QMA from QCIP with a Classical Oracle, or, the Power of Quantum Proofs over Classical Interaction for Quantum Verifiers](https://arxiv.org/abs/2610.03648v1) | Strengthens a classical-oracle separation to polynomial-round classical interaction with a quantum verifier; the unrelativized comparison remains open. |
| A5 | 30 September | Della Schiava–Mataraarachchi, [QMA(2) with Limited Shared Entanglement](https://arxiv.org/abs/2609.39668v1) | Logarithmic EPR budgets preserve QMA(2); does not equate QMA(2) with QMA. |
| A7 | 30 September | Cohen et al., [Good Quantum Locally Testable Codes from Lossless Cubical Complexes](https://arxiv.org/abs/2610.00525v1) | Required lossless complexes are assumed, not constructed. Does not validate the existing unconditional claim. |
| A11 | 28 September | Girish et al., [Distributional Variants of the Aaronson-Ambainis Conjecture](https://arxiv.org/abs/2609.35327v1) | Equivalence reductions for influence and, separately, average-input simulation; no proof of either original conjecture. |
| A19 | 29 September | Holler–Natarajan, [Classical Verification of Quantum Computation with Quasilinear Resources, from Compiled Nonlocal Games](https://arxiv.org/abs/2609.38060v1) | Main theorem assumes subexponential LWE hardness against nonuniform quantum adversaries; computational soundness. |
| B5, O10 | 28 September | Pilatowsky-Cameo et al., [One-dimensional quantum Gibbs states in constant circuit depth](https://arxiv.org/abs/2609.35973v1) | Fixed-temperature 1D preparation with classical preprocessing. Conditional local thermalization has an ensemble/time-average guarantee, not a general relaxation time. |
| C5 | 29 September | Cheng–Hirche–Tomamichel, [The exact strong converse exponent for private communication over quantum channels](https://arxiv.org/abs/2609.38144v1) | Joint squared-fidelity reliability/secrecy criterion and a regularized exponent formula. |
| C5 | 2 October | Hirche, [Quantum estimation, channel orders, and private capacity](https://arxiv.org/abs/2610.03706v1) | Structured capacity thresholds, comparison orders and activation; no universal P/Q classification. |
| E3 | 2 October | Bernasconi–Malavolta, [Polynomial-Time Algorithms for Nuclear Tensor Norms and Multipartite Separability](https://arxiv.org/abs/2610.03637v1) | Fixed Frobenius-norm accuracy; explicit-input and copy-access algorithms must be distinguished. |
| E5 | 30 September | Takagi et al., [Universal distillation of quantum entanglement](https://arxiv.org/abs/2609.40215v1) | Unknown-state universality at the distillable rate; no general formula or NPT-positivity theorem. |
| E5 | 30 September | Tirone et al., [Universal Entanglement Distillation](https://arxiv.org/abs/2609.40080v1) | Independent fixed-finite-dimension LOCC construction via tomography and robustness. |
| E8 | 28 September | Shchukin–van Loock, [Separability rigidity of Gaussian states under positive domination](https://arxiv.org/abs/2609.36336v1) | Finite-mode Gaussian rigidity, including non-Gaussian decompositions; not arbitrary mixed states. |
| E10 | 2 October | Baghali Khanian–Negari, [Entanglement of purification for Werner states: canonical purification and nonadditivity](https://arxiv.org/abs/2610.03630v1) | New full-resolution claim plus a counterexample to the earlier proof's lemma; see assessment above. |
| F3 | 2 October | Dmello et al., [An operational characterization of finite-dimensional quantum theory](https://arxiv.org/abs/2610.03694v1) | Requires stability under arbitrarily iterated teleportation; not a finite experimental test of all axioms. |
| F3 | 2 October | Hoffreumon–Woods, [Clarifications on the Experimental Status of Real Quantum Theory](https://arxiv.org/abs/2610.03644v1) | Attributed interpretation of source-independence assumptions, not a refutation of the conditional network theorem. |
| M2 | 29 September | Becker–Oltman, [Quantum percolation conjecture on regular trees](https://arxiv.org/abs/2609.38017v1) | Separates geometric and a.c. thresholds on trees; does not solve cubic-lattice Anderson delocalization. |
| N3 | 30 September | Cárdenes Wuttig–Tindall, [More mutually unbiased bases](https://arxiv.org/abs/2609.40311v1) | Improved composite-dimension lower bounds; no complete non-prime-power set or fourth dimension-six basis. |
| N7 | 2 October | Saha–Xu–Cabello, [Self-testing ideal quantum measurements](https://arxiv.org/abs/2610.03168v1) | Sequential Lüders-instrument certification with a specified extraction convention. |
| O10 | 2 October | Capel–Pérez-García–Scandi, [Modified logarithmic Sobolev inequality for 1D non-commuting Hamiltonians](https://arxiv.org/abs/2610.03683v1) | Fixed-temperature 1D heat-bath generators; not unrestricted 2D mixing. |
| O10 | 2 October | Rouzé–Stilck França, [Rapid mixing of Gibbs samplers via quantum Dobrushin–Shlosman conditions](https://arxiv.org/abs/2610.03578v1) | Chain mixing and perturbative stability near references satisfying a strict block condition; PDF Theorems 5.1 and 6.1. |

## Watchlist and exclusions

- Added [Stengele et al., Haah's 3D cubic code thermalizes rapidly](https://arxiv.org/abs/2609.39959v1), submitted 30 September. Theorem 1.1 and the Davies-generator setup concern one code and bath/rate model. This negative result does not exclude every 3D passive memory or settle active fault tolerance in A18. The authors report LLM assistance with Lemma 4.1 and supporting proof and manuscript work; no model is named.
- [Two-qutrit Werner state is always local](https://arxiv.org/abs/2610.02997v1) concerns two projective measurements per site with three outcomes. It does not settle arbitrary-measurement locality or the qubit Werner threshold in N11.
- [Sequential Capacity of Quantum Processes with Finite Memory](https://arxiv.org/abs/2610.02068v1) measures adaptive response complexity, not a Shannon communication rate; it was not added to C9.
- [Exact High-Temperature Quantum Area Law](https://arxiv.org/abs/2609.32329v1) concerns thermal mutual information, not the gapped ground-state area law in B1.
- [Poisson eigenvalue statistics and dynamical delocalization for fractional and long-range Anderson models](https://arxiv.org/abs/2609.33084v1) concerns long-range hopping and absence of dynamical localization at strong disorder. It does not prove absolutely continuous spectrum for the nearest-neighbor cubic-lattice model.
- The screened hep-th and cond-mat.str-el lists did not supply an incorporated resolution of the fixed Yang–Mills, pure Hubbard or kagome benchmarks. This is a statement about this review's selection, not proof that no relevant literature exists.

## Status, provenance and implementation

A3, B5, E5 and N3 move from **Open** to **Improved**. A4, A7, C4 and E10 remain **Claimed solved**, with the E10 evidential change explained above. Totals: 113 active entries, 43 Improved, four Claimed solved, 66 Open, zero Solved, and ten archive/background pages. The watchlist is not included in these counts.

Author-attributed AI disclosures are recorded in the affected entries, separately from evidence. They do not determine correctness or status. Shared authorship in the new private-converse work does not independently validate C4's older quantum-converse proofs.

The homepage and review page highlight the new update. The ordered literature history retains earlier reports and the 4 September full-review date. Only the sixteen changed entries receive `reviewedAt: 2026-10-05`. Problem statements, IDs and archive targets are unchanged. `main.tex` remains a historical manuscript, as specified in the README.

## Validation

- `npm test`: all 11 catalogue tests pass, including mathematical syntax, metadata, review-history dates, exact status-list membership and server rendering of every active/archive detail and category view.
- `npm run build`: production compilation and static-page generation succeed.
- `git diff --check`: no whitespace errors.
- A comparison with the baseline confirms exactly sixteen changed category records, with all problem statements, titles and IDs preserved. Untouched review dates are covered by the catalogue tests.
- The pending-claim regression check now requires the new E10 source and explicit challenged-proof wording for the historical one. The homepage count check reflects 43 Improved entries.

These checks validate the site and catalogue consistency, not the correctness of the research proofs. Changes are prepared in the local repository; this report does not certify a production deployment.
