# Review of the complete Open Quantum Problems catalogue

Review date: 4 September 2026. Baseline: `e32e461`, the current 111-entry catalogue and [live website](https://openquantumproblems.com/). This report investigates relevance, mathematical correctness, current status, duplication and missing questions. It does not modify or publish the website.

Implementation follow-up: the recommendations were subsequently applied at the user's request. See the [implementation record](2026-09-04-implementation.md) for additions, preserved legacy IDs and verification. The assessments below describe the pre-implementation baseline, not defects claimed to remain in the revised catalogue.

## Verdict

The catalogue covers many important problems, but **correctness and problem formulation need attention before further expansion**. The main issue is not that quantum foundations or broad research programmes have become irrelevant. It is that the site sometimes treats a programme as one conjecture, asks for something already excluded by a theorem, misses a solution to a substantial subcase, or misstates the result it cites.

My editorial recommendations across all 111 entries are:

| Treatment | Entries | Meaning |
| --- | ---: | --- |
| Keep | 27 | Retain the main question; some still need bibliography or hypothesis updates. |
| Reframe | 74 | Retain the topic, but correct its baseline, specify a meaningful residual question, or label it as a programme. This is not a claim that 74 questions are false. |
| Merge | 9 | Preserve useful content and stable links as a child problem or overview rather than count it independently. |
| Retire as a standalone problem | 1 | Move U5's general computable-analysis aspiration to background/methods; the discipline itself remains relevant. |

These are editorial judgments, not community votes. The catalogue already distinguishes some horizons, which is useful; that distinction needs to govern the actual question and its success criterion too.

## Complete coverage and detailed evidence

Every current entry has exactly one disposition row in the four appendices. An automated comparison against the JavaScript data verified 111 matches, no missing IDs, no duplicates and no extraneous IDs.

| Appendix | Entries | Keep | Reframe | Merge | Retire |
| --- | ---: | ---: | ---: | ---: | ---: |
| [Spectral theory and many-body physics](2026-09-04-spectral-manybody-audit.md) — M1–M11, B1–B12 | 23 | 7 | 14 | 2 | 0 |
| [Entanglement, nonlocality and channels](2026-09-04-information-audit.md) — E1–E15, N1–N10, C1–C10 | 35 | 9 | 23 | 3 | 0 |
| [Computation and undecidability](2026-09-04-computation-audit.md) — A1–A18, U1–U5 | 23 | 6 | 15 | 1 | 1 |
| [QFT, open systems and foundations](2026-09-04-foundations-audit.md) — QF1–QF10, O1–O9, F1–F11 | 30 | 5 | 22 | 3 | 0 |

The audit goes beyond papers since 18 August: several important omissions and incorrect statements concern earlier results. Restricting the search to the latest fortnight would not repair them.

## 1. Corrections to make first

The following are substantive examples, not a complete replacement for the entry-by-entry appendices. A correction to context does not automatically invalidate the headline problem.

| Entries | Finding | Required treatment and primary evidence |
| --- | --- | --- |
| A4 | The quantum-oracle statement about QMA versus QMA1 is reversed. | Aaronson constructs a quantum oracle separating the classes, not proving their equality relative to quantum oracles. Retain the unrelativized finite-register question. [Original theorem](https://arxiv.org/abs/0806.0450). |
| N3 | Complete MUBs are not proved equivalent to projective planes; order-10 plane existence is not open. | Label the proposed relationship conjectural. Nonexistence of a projective plane of order 10 was established in 1989. [Proposed connection](https://arxiv.org/abs/math-ph/0403057), [nonexistence theorem](https://doi.org/10.4153/CJM-1989-049-4). |
| M2 | The background treats full two-dimensional Anderson localization as settled. | Separate 1D, band-edge and strong-disorder theorems from the full-spectrum weak-disorder 2D question. [Primary account](https://arxiv.org/abs/1706.06135), [scope of the 2026 advance](https://doi.org/10.1007/s00220-026-05559-8). |
| B12 | The stated strict linear-light-cone threshold is wrong. | In the standard worst-case operator-norm setting use alpha > 2d+1, not alpha > 2d; principal exponents above 2d are already known. State the remaining regime and conventions. [Tran et al.](https://arxiv.org/abs/2103.15828). |
| C1, U4 | Specialized channel undecidability is promoted to ordinary quantum/private capacity uncomputability. | Nonadditivity, hardness and uncomputability are different. Ordinary finite-dimensional memoryless capacity computability remains a legitimate question with an explicit finite input and error convention. [2026 paper, corrected v3](https://arxiv.org/abs/2601.22471v3). |
| N5, N6, N9 | Some requested unrestricted algorithms or uniform dimension bounds are already ruled out. | Replace them by a stated restricted family, one-sided certificates, or sharp decidability boundaries. Do not confuse nontermination of a relaxation hierarchy with uncomputability of each small Bell scenario. [MIP*=RE](https://arxiv.org/abs/2001.04383). |
| B1, M7 | Ground-space assumptions are missing or incorrect. | A gap alone allows volume-entangled states in a freely degenerate ground space; the known 2D frustration-free area-law theorem has local-gap/cut hypotheses. G-injectivity allows topological degeneracy, unlike the claimed uniqueness. [Area-law theorem](https://arxiv.org/abs/2103.02492), [G-injective PEPS](https://www.sciencedirect.com/science/article/pii/S0003491610000990). |
| N7, E12 | Substantial existing results are missing from the open baseline. | Pure multipartite qubit self-testing is established; arbitrary local dimension and robustness need separate targets. A complete pure-state marginal SDP hierarchy already exists; efficiency is a different question. [Self-testing theorem](https://www.nature.com/articles/s41467-026-70829-x), [marginal hierarchy](https://www.nature.com/articles/s41467-020-20799-5). |
| O6 | A 2025 preprint directly addresses much of the broad coherent-conversion question. | Record the approximate-output, correlated-catalyst theorem and its coherent-mode condition. Preserve exact, catalyst-free and bounded-resource residuals; do not mark every thermal-conversion task solved. [Shiraishi–Takagi preprint](https://arxiv.org/abs/2510.05642). |
| F9 | A direct 2026 realizability characterization is missing; a cited journal venue is wrong. | The closed-lab/classical-spacetime assumptions characterize QC-QCs in a May preprint, not arbitrary processes in arbitrary spacetime. The Mothe et al. paper is PRX Quantum accepted, not PR Research published. [Characterization preprint](https://arxiv.org/abs/2605.08351), [APS record](https://journals.aps.org/prxquantum/accepted/10.1103/bt67-n8kx). |
| F3 | Real quantum theory is described as ruled out without its composition assumptions. | Renou's theorem concerns a specific composition/independent-source model; its cited Nature article proposes an experiment. A 2026 real formulation changes the composition postulate rather than contradicting that theorem. [Original theorem](https://www.nature.com/articles/s41586-021-04160-4), [2026 construction](https://journals.aps.org/prl/abstract/10.1103/4k13-sdjh). |
| QF8, F4, F11 | The absence of a formalism is asserted where positive frameworks already exist. | Ask what those frameworks fail to establish under finite resources or operational tests. Operational LOCC on factors, consistent multi-agent reasoning and relational-clock unification are already developed. [Algebraic LOCC](https://doi.org/10.1007/s00220-025-05465-5), [multi-agent framework](https://arxiv.org/abs/2209.09281), [clock trinity](https://journals.aps.org/prd/abstract/10.1103/PhysRevD.104.066001). |
| O3, O4 | Strong coupling, initial correlations and complete positivity are conflated. | Fixed product initialization yields CPTP reduced evolution even at strong coupling. Correlated assignments need a specified domain and positivity convention; cite the relevant erratum. [Buscemi](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.113.140502), [Shabani–Lidar erratum](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.116.049901). |
| E2, A17, B11 | There are verifiable attribution and provenance errors. | E2 misattributes two July papers; Fu et al. v2 and the A17 learning paper explicitly disclose AI use despite the site's claims. B11 cites an unrelated simulation paper for an intrinsic-sign-problem result. [Bharti et al.](https://arxiv.org/abs/2607.24479), [Fraser et al.](https://arxiv.org/abs/2607.24309), [Fu disclosure](https://arxiv.org/html/2607.21367v2), [A17 disclosure](https://arxiv.org/html/2608.20113v1), [sign-problem source](https://arxiv.org/abs/2005.05343). |

Other important baseline repairs include A3's full classical-oracle separation, A12's Gaussian-permanent anticoncentration preprint, A18's already constant-alphabet construction, QF5's nonperturbative abelian chiral-gauge result, and C3's already solved quantum-limited amplifier boundary. See the appendices for their exact scope and sources.

The scientific standard should be symmetrical: neither dismiss a result because it is AI-assisted nor label a new preprint as established merely because its abstract says “prove.”

## 2. What should stop being counted independently?

These nine consolidations would make the catalogue more navigable without discarding the research. Keep old IDs as redirects or addressable child sections.

| Existing entry | Recommended destination |
| --- | --- |
| M3, mobility edges | M2, with a specified Anderson model and a distinction between spectral and transport questions. |
| M11, infinite-dimensional QI framework | C10, retained as an explicitly labeled programme with concrete energy-constrained subproblems. |
| E2, Werner distillability | E1, as the central reduction/benchmark; preserve the July–August evidence and unresolved copy number. |
| E15, identical-particle entanglement | F7, with accessible algebras, modes and superselection as operational assumptions. |
| N9, general Bell-maximum algorithm | N6/N5; retain selected computable benchmarks, not an impossible universal solver. |
| A16, universal speedup criterion | Concrete query-complexity material under A11; the broad question in a methods overview. |
| QF4, full Standard Model construction | An umbrella linking QF1/QF3/QF5, not a fourth independently counted construction problem. |
| F2, Born-rule justification | Axiomatic uniqueness under F3; Everettian probability under F1. |
| F11, quantum clocks/framework unification | Relational structure under F8 and finite clock performance under O7. |

U5 should move to a computable-analysis methods page until it specifies a representation, operator class and output task. This is the one recommendation to retire a standalone entry rather than simply reframe or merge it.

Do not merge questions merely because they share a field: B2 representation, B3 contraction and algorithms for finding states are distinct; C1 tractable formulas and U4 computability are distinct; E1 distillable entanglement and the zero-secret-key question are distinct. N2 can remain a visible benchmark under N3.

## 3. Highest-value additions or promotions

I recommend the following twelve candidates after the repairs. “Add” means the question is not explicitly represented at an appropriate level; “promote” means relevant material is already buried in an umbrella. These are precise starting formulations, not a claim that every nearby paper has been checked.

| Priority | Candidate and concrete question | Why it earns a place; evidence/status |
| --- | --- | --- |
| 1 | **2D Anderson localization:** for a fixed nontrivial bounded scalar i.i.d. law on Z^2, prove localization throughout the spectrum at every nonzero disorder. | A major missing complement to M2, currently obscured by a false solved claim. Separate spectral and dynamical conclusions. [Primary account](https://arxiv.org/abs/1706.06135), [2026 band-edge result](https://doi.org/10.1007/s00220-026-05559-8). |
| 1 | **Homogeneous interacting Bose-gas condensation:** prove a macroscopic one-body-density-matrix eigenvalue at zero temperature in the fixed-density 3D thermodynamic limit for a specified repulsive potential and small fixed gas parameter. | Not the already studied Gross–Pitaevskii limit and not merely an energy expansion. Explicitly identified in [Solovej's 2025 open questions](https://comptes-rendus.academie-sciences.fr/physique/item/10.5802/crphys.247.pdf), sections 5 and 8. |
| 1 | **Laughlin bulk energy gap:** uniform gap for the untruncated fermionic nu=1/3 Haldane parent Hamiltonian on tori of bounded aspect ratio. | Important concrete gap problem missing between M5 and broad topological phases. [Thin-torus theorem](https://arxiv.org/abs/2112.13764) is restricted; [2026 thin-cylinder work](https://arxiv.org/abs/2601.12165) concerns correlations and an entanglement-spectrum gap, not this bulk energy gap. |
| 1 | **Complex PPT-squared:** is the composition of every compatible pair of finite-dimensional CPTP PPT maps entanglement breaking? | Sharp bridge between channels and bound entanglement. [Primary special-case results](https://arxiv.org/abs/1807.01266). An [August 2026 preprint](https://arxiv.org/abs/2608.13551) claims eventual entanglement breaking, not the universal index-two statement. Do not add the eventual-existence question unqualified. |
| 1 | **Faithfulness of distillable secret key:** does a finite-dimensional bipartite entangled state with K_D=0 exist under the standard LOCC/public-communication model? | Not NPT bound entanglement: PPT states can have key. [Cost of quantum secret key, published May 2026](https://doi.org/10.22331/q-2026-05-06-2098) explicitly retains this unresolved possibility. |
| 1 | **Depolarizing quantum capacity:** exact unassisted Q, or at least its positivity threshold, for a stated qubit depolarizing-noise convention. | Promote from C1. The [August positive coherent-information certificate](https://arxiv.org/abs/2608.15870) improves a lower benchmark, not the exact threshold. The appendix fixes the total-Pauli-error convention and avoids a factor-of-three ambiguity. |
| 1 | **Noncryptographic classical verification of BQP:** a polynomial-time classical verifier, one efficient quantum prover, completeness/soundness gap against an unrestricted cheater, no computational assumptions or trusted setup. | Distinct from multi-prover verification, quantum verifiers and Mahadev-style cryptographic assumptions. Explicitly identified as open in [April 2026 primary work](https://arxiv.org/abs/2604.11952). |
| 2 | **Sharp Lieb–Thirring constant:** does L_(1,3) equal its semiclassical value? | A central precise spectral problem; do not reintroduce the already partially disproved all-exponent conjecture. [Counterexamples to parts of the older conjecture](https://arxiv.org/abs/2002.04964), [bounds](https://arxiv.org/abs/1808.09017). |
| 2 | **Kagome Heisenberg ground-state phase:** determine the thermodynamic phase/gap of the uniform spin-1/2 nearest-neighbor model with controlled errors. | A recognizable unresolved spin-liquid benchmark, not a material-specific or square-kagome question. [2026 primary study](https://www.nature.com/articles/s41524-026-01959-5) describes the continuing gapped-Z2 versus gapless-Dirac dispute. |
| 2 | **Werner Bell-locality threshold:** exact critical visibility for two-qubit Werner states under all single-copy projective measurements; POVMs as a separate target. | Complements abstract correlation sets with a canonical noisy-state benchmark. The projective problem is tied to the order-three Grothendieck constant. [Designolle–Vértesi–Pokutta, published 2026](https://arxiv.org/abs/2409.03739). |
| 2 | **Efficient Gibbs preparation and dissipative mixing:** identify a concrete local noncommuting Hamiltonian/bath family and its polynomial-mixing temperature regime, with trace-error guarantees. | Not covered by validating master equations or learning their coefficients. [2026 high-temperature theorem](https://journals.aps.org/prxquantum/abstract/10.1103/m5zb-z4nn) is a solved baseline, not evidence that every temperature is easy. Choose the residual family before publication. |
| 2 | **Physically implementable local QFT measurements:** characterize which local algebraic instruments can be realized or approximated by causal localized probe couplings preserving admissible states. | An operational QFT problem distinct from interpretation and entropy definitions. [Mandrysch–Navascués, 2025](https://doi.org/10.1007/s11005-025-02001-3) treats a specific smeared-field/Gaussian class, not all instruments. |

### Watchlist, not automatic additions

- **Three-dimensional passive quantum memory:** the [May 2026 construction preprint](https://arxiv.org/abs/2605.10943) claims stretched-exponential lifetime under its thermal dynamics. Focus future questions on robustness of the lifetime and efficient passive initialization. Deferred TQO-2/deterministic-embedding arguments are proof-status items to monitor, not automatically established open problems. A Hamiltonian-gap stability theorem alone would not prove lifetime robustness.
- **Universal same-state-copy Bell activation** and **exact/noise-robust triangle-network benchmarks** are worthwhile gaps, but need a final narrowly targeted literature check before categorical publication. In particular, account for the [May binary-output triangle preprint](https://arxiv.org/abs/2605.00981), distinguishing an analytic nonclassical target from a quantum realization found to machine precision. The information appendix states the restricted activation question.
- **Homogeneous electron gas/Wigner crystallization** and **unitary Fermi gas** deserve a model-specific next pass. Researcher-authored 2025 starting points are [Lewin](https://comptes-rendus.academie-sciences.fr/physique/item/CRPHYS_2025__26_G1_369_0/) and [Castin](https://comptes-rendus.academie-sciences.fr/physique/item/CRPHYS_2025__26_G1_393_0/).
- Non-Abelian thermodynamics, finite-resource catalysts, energy-budget continuum entanglement, driven/monitored phases and mixed-state topology can first become concrete children of existing entries. A whole active field is not, by itself, one well-formed open problem.

SICs and MUBs remain excellent entries, but the category should say “nonlocality and measurement geometry” or provide a geometry/designs subdivision. Their relevance is not the issue; their placement is.

## 4. How to make future updates reliable

Each problem should explicitly separate:

1. **Target:** model, assumptions, quantifiers, operational resources and what would count as a solution.
2. **Established baseline:** precisely scoped published theorems, counterexamples and solved subcases.
3. **Open residual:** what is left after applying that baseline; distinct subtargets where needed.
4. **Evidence status:** published theorem, preprint claim, numerical evidence, conjecture, disputed/withdrawn claim, or editorial judgment.
5. **Versioned provenance:** stable URL/DOI, actual authors, arXiv version, submission/revision/publication dates, and the exact claim being updated.
6. **Relations:** parent, special case, reduction/equivalence, overlap or distinct operational variant; do not count one paper several times as independent discoveries.
7. **Review metadata:** last status check and verification level. Put AI-use disclosure in a separate sourced provenance field, not in the theorem-status field.

There are 293 reference records in the current data, of which 237 have no URL field. That does not make them invalid references, but it makes systematic verification unnecessarily difficult. Backfilling DOI/arXiv links and validating title/author/venue would address demonstrated errors, not just presentation.

Recommended implementation sequence: correct the false assertions and metadata; rewrite open residuals; consolidate the nine overlaps and move U5 to methods; then introduce the highest-value additions. Preserve IDs and existing evidence. Do not silently mark the whole O6, F9 or N7 topic solved because a substantial restricted version has an answer.

## Scope, confidence and repository state

All 111 catalogue entries were read. Primary literature, journal records, arXiv records/full text for selected claims, and researcher-authored open-problem accounts were consulted. Independent category reviews were reconciled, including the M11/C10 consolidation, and selected spectral/many-body findings received a second technical check.

This is a complete catalogue review, **not an exhaustive systematic review of every paper in quantum science and not an independent verification of the cited proofs**. Recent preprints remain attributed claims unless publication was confirmed. Not finding a resolution does not prove that no resolution exists. The watchlist deliberately has a lower publication-readiness threshold than the main candidates.

At the end of the investigation, only five review documents had been added locally; no website edits or new commit/push were part of that review-only step. Implementation was authorized separately and is recorded in the follow-up linked above.
