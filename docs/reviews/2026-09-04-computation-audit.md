# Computation and undecidability catalogue audit — 4 September 2026

Scope: all 18 entries A1–A18 in `app/data/cat-complexity.js` and all five entries U1–U5 in `app/data/cat-undecidability.js`, with cross-checks against C1, E3 and relevant many-body entries. This is a research/editorial audit; no website entries have been changed.

The strongest existing questions remain relevant. The main problem is inaccurate background and overly broad residual questions, rather than a discovery that quantum complexity has ceased to matter. Recommended disposition of the 23 entries: **6 keep, 15 reframe, 1 merge, 1 retire as an independently counted problem**. “Reframe” includes a material correction to the purported known results even when the headline can survive.

## Corrections that should precede expansion

### A4 reverses the oracle theorem and misses a genuine recent advance

Aaronson's perfect-completeness obstruction uses a **quantum oracle** separating QMA from QMA1. The catalogue instead attributes a classical-oracle separation to him and suggests that a quantum oracle gives equality. Those statements reverse the actual result. Its speculative exact/algebraically-closed-gate-set explanation should also be replaced by an explicit model and theorem. [Aaronson, *On Perfect Completeness for QMA*](https://arxiv.org/abs/0806.0450).

There is a relevant positive result, but with an additional resource: Jeffery and Witteveen prove QMA = QMA-infinity = QMA1-infinity when the verifier has a specified infinite-dimensional counter. This does **not** settle ordinary finite-register QMA = QMA1. It also gives stronger finite-dimensional completeness amplification. The preprint appeared in June 2025 and the paper was published in PRL in May 2026. [Preprint](https://arxiv.org/abs/2506.15551), [published paper](https://journals.aps.org/prl/abstract/10.1103/pwdd-htbf).

### A3 attributes the full classical-oracle separation to the wrong results

Natarajan–Nirkhe's final 2024 paper proves a **randomized/distribution-testing classical oracle** separation. Ben-David–Kundu's 2024 result restricts adaptivity. Neither should be described as the unrestricted standard classical-oracle separation. The full separation is Bostanci–Haferkamp–Nirkhe–Zhandry, first posted November 2025 and published at STOC 2026. The unrelativized question remains open. [Natarajan–Nirkhe](https://quantum-journal.org/papers/q-2024-06-17-1377/), [Ben-David–Kundu](https://arxiv.org/abs/2402.00298), [full separation, current v2 and proceedings reference](https://arxiv.org/abs/2511.09551).

### U4 asserts an uncomputability theorem that is not established for the intended model

The ordinary capacities of finite-dimensional **memoryless** quantum channels must not be conflated with capacities of channels with memory, zero-error capacities, or computing a capacity-achieving optimizer. The cited memory-channel result concerns a different model. Boche-style discontinuity arguments for zero-error capacity on computable-real inputs also do not establish uncomputability of ordinary quantum capacity.

The 2026 paper by Bhattacharyya–Mehta–Zhao still describes general capacity uncomputability as unresolved. It establishes QMA-hardness for quantum capacity and an uncomputability result for a restricted entanglement-assisted zero-error capacity. The latest version is v3, which corrects an error in the zero-error part of v2; use the current qualified statement rather than indexed v1 text. [Current primary paper](https://arxiv.org/abs/2601.22471v3), [memory-channel theorem](https://www.nature.com/articles/s41467-018-03428-0), [zero-error computability paper](https://arxiv.org/abs/2010.06873).

Replace U4 by a sharp question: given a finite-dimensional memoryless channel with an explicit finite rational/algebraic description and rational epsilon > 0, is there a terminating algorithm returning its ordinary quantum capacity within epsilon? State the exact representation and assistance model. Keep C1 for tractable formulas and channel families, with a cross-link. Failure of coherent-information additivity or the absence of a fixed blocklength bound does not alone prove that **every** possible single-letter characterization is impossible.

### A17 contains a directly contradicted provenance statement

The catalogue says the fractional-colouring manuscript contains no generative-AI declaration. Its front matter explicitly states that GPT Sol 5.6 was used for the principal results, Theorems A and B, and that the authors verified and contextualized them. Its arXiv comments also disclose the involvement. This is an author-reported contribution, not independent certification of how the work was produced. [Manuscript front matter](https://arxiv.org/html/2608.20113v1), [arXiv record](https://arxiv.org/abs/2608.20113).

The mathematics is correctly relevant but its scope matters: disproving the fractional-colouring conjecture rules out that proposed route to universal triply efficient Pauli shadow tomography, not every possible algorithm. Absence of a found disclosure elsewhere should be recorded as “not located in the inspected version”, without inferring human-only authorship.

### A12 needs the decisive anticoncentration reference and a precise remaining conjecture

The assertion that Gaussian-permanent anticoncentration is established has current support, but the catalogue omits it. Koehler–Leung's July 2026 preprint claims the full Aaronson–Arkhipov permanent anticoncentration conjecture; Theorem 1.1 supplies the complex-Gaussian small-ball bound. This should be recorded as a recent preprint theorem, not treated as something established by the older references. It leaves approximate average-case permanent hardness unresolved. [Paper and theorem](https://arxiv.org/html/2607.20329v1).

The August hiding theorem is for Gaussian BosonSampling, and the threshold/parity theorem concerns their specific output-probability estimation regime. They do not establish the missing standard approximate BosonSampling theorem. [GBS hiding](https://arxiv.org/abs/2608.19314), [threshold/parity](https://arxiv.org/abs/2608.24008).

### A14 overstates the limits of the hidden-subgroup route

The coset-state lower bound says useful information requires joint measurements on Omega(n log n) coset states; it matches an information-theoretic upper bound. That is an obstacle to small-register measurement strategies, **not** an unconditional proof that every efficient implementation of a sufficiently joint measurement is impossible. “The obvious quantum path is essentially blocked” should be softened accordingly. The September 2026 withdrawal of the Li–Chen claim is real and correctly does not resolve GI. [Coset-state theorem](https://www.cse.psu.edu/~sjh26/multireg.pdf), [withdrawal record](https://arxiv.org/abs/1901.06530v2).

### A7, A8 and A10 omit central results needed to understand the frontier

A7 should mention Dinur–Lin–Vidick's almost-good qLTCs: constant rate, inverse-polylogarithmic relative distance and soundness, bounded-size checks. The constant-parameter question survives. Do not attribute the full good-qLDPC breakthrough indiscriminately to earlier fibre-bundle/balanced-product constructions; cite exact parameters and the later good constructions. [Almost-good qLTCs](https://arxiv.org/abs/2402.07476), [Panteleev–Kalachev](https://doi.org/10.1145/3519935.3520017).

A8 omits the rank-1 higher-dimensional progress of Bostanci–Hwang: NP membership for 2D rank-1 commuting Hamiltonians without a local-dimension restriction, and a specified rank-1 3D family. Its wording about 3-/4-local qubits must retain the geometry and structural hypotheses of each theorem. [Primary paper](https://arxiv.org/abs/2410.10495), [ITCS 2026 version](https://drops.dagstuhl.de/storage/00lipics/lipics-vol362-itcs2026/html/LIPIcs.ITCS.2026.25/LIPIcs.ITCS.2026.25.html).

A10 currently paraphrases its main source as saying the problem is “subtle”. The source actually proves a one-query **PP-oracle** witness-synthesis upper bound and a **quantum-oracle** obstruction to reducing QMA-search to QMA-decision. These are the central facts to state. The unrelativized question survives. [Irani–Natarajan–Nirkhe–Rao–Yuen](https://arxiv.org/abs/2111.02999).

### A18 mixes several problems and misses a resource qualification

The adversarial-noise preprint already reduces its initially large alphabet to a **constant local dimension**, using recursive composition. A residual request merely to “reduce the alphabet” is therefore misleading; qubits or a small implementable alphabet with useful constants is a different target. The fault model restricts the number of corrupted qudits per time step, even though correlations are global and non-Markovian. [Breuckmann–Golowich–Vazirani](https://arxiv.org/abs/2608.16857).

The recent logarithmic memory-cost lower bound is compatible with amortized constant relative overhead for sufficiently wide computations; the existing explanation mostly preserves that distinction and should retain it. Decoding inapproximability must name the noise model and whether it is minimum-weight Pauli decoding or separate X/Z decoding; it does not make independent-error surface-code matching intractable. Statistical bootstrap certification is not a deterministic proof of global optimality. [Memory overhead](https://arxiv.org/abs/2608.26272), [decoding inapproximability, v3](https://arxiv.org/abs/2608.17109v3), [certified decoding](https://arxiv.org/abs/2608.25545).

## Every-entry disposition

“Keep” preserves the research target, not every sentence or citation. “Retire” means move the useful material to background; it does not mean the whole subject is solved. Confidence concerns the recommendation, not a proof that no future paper exists.

| ID | Action | Recommended framing and individualized reason | Evidence / confidence |
| --- | --- | --- | --- |
| A1 | Keep | BPP versus BQP is a central, mathematically sharp separation question. The alternative “characterize exactly which classical class captures BQP” dilutes it. Label the question sharp and difficulty/expected timescale separately as long-horizon; it is not a vague programme merely because it is hard. | Existing Bernstein–Vazirani/Raz–Tal sources; high. |
| A2 | Keep | NP subset BQP remains a clean and important containment question. Explain the random-oracle/black-box nature of the search lower bound; do not imply it rules out structure-exploiting algorithms for all NP problems. | Existing BBBV source; high. |
| A3 | Reframe | Preserve QMA versus QCMA; correct the randomized versus standard classical oracle history and add the STOC 2026 full separation. | [2511.09551](https://arxiv.org/abs/2511.09551); high. |
| A4 | Reframe | Preserve finite-register QMA = QMA1 under a stated gate convention; fix the reversed oracle claim and separate the infinite-counter theorem. | [0806.0450](https://arxiv.org/abs/0806.0450), [2506.15551](https://arxiv.org/abs/2506.15551); high. |
| A5 | Keep | QMA(2) versus QMA remains central. The September oracle and no-disentangler results are supported preprint claims, not unrelativized equality/separation. Clarify that polylog-size proofs with inverse-polynomial soundness gap are not the same resource statement as constant-gap short proofs. Include the intermediate target QMA(2) subset EXP rather than creating a duplicate entry. | [2609.02865](https://arxiv.org/abs/2609.02865), [product test](https://arxiv.org/abs/2607.21477); high. |
| A6 | Keep | Quantum PCP remains a central sharp conjecture. Specify a normalized sum of bounded-norm constant-locality terms and a constant energy-density promise gap. Replace “exact ground-state energy is QMA-complete” by the inverse-polynomial precision promise problem. NLTS is solved but is a prerequisite, not qPCP itself. | [2025 gap-amplification work](https://arxiv.org/abs/2510.01333), [2025 PCP definitions](https://quantum-journal.org/papers/q-2025-07-11-1791/); high. |
| A7 | Reframe | Keep good qLTC existence as a sharp conjecture with an explicit soundness definition, bounded check weight and preferably bounded degree. Add almost-good constructions and correct historical parameter claims. | [2402.07476](https://arxiv.org/abs/2402.07476); high. |
| A8 | Reframe | Ask whether every fixed-locality commuting-projector Hamiltonian has an NP witness; separately display geometry/dimension/rank cases already settled. This is sharper than a loose classification across unspecified geometry. | [2410.10495](https://arxiv.org/abs/2410.10495); high. |
| A9 | Reframe | StoqMA = MA / general error reduction is a sharp structural question, not just “incremental”. State the known implication from amplification to equality and distinguish soundness-only reductions. VGP is useful adjacent context, not a solution to the class comparison. | [2010.02835](https://arxiv.org/abs/2010.02835), [2011.05733](https://arxiv.org/abs/2011.05733), [2607.18596](https://arxiv.org/abs/2607.18596); high. |
| A10 | Reframe | State witness preparation with a QMA-complete decision oracle and specify coherent oracle access, success and accuracy. Add the one-query PP upper bound and quantum-oracle negative result rather than implying only vague partial understanding. | [2111.02999](https://arxiv.org/abs/2111.02999); high. |
| A11 | Keep | The Aaronson–Ambainis influential-variable conjecture remains a valuable exact analytic question. State the influence convention and polynomial dependence on variance/degree. Distinguish acceptance-probability simulation on most uniformly random inputs from worst-case decision and sampling tasks. Move the bounded-round advances here. | [Blanc et al.](https://arxiv.org/abs/2608.19158), [Liu–Mutreja](https://arxiv.org/abs/2608.20297); high. |
| A12 | Reframe | Narrow the residual statement to approximate average-case Gaussian-permanent hardness and its robust reduction. Add the July anticoncentration preprint; keep GBS and coarse-grained variants as explicitly separate milestones. | [2607.20329](https://arxiv.org/abs/2607.20329), [2608.19314](https://arxiv.org/abs/2608.19314); high on editorial scope, preprint-level on new theorem. |
| A13 | Keep | Approximate RCS hardness is still substantive. Fix the random-circuit ensemble, depth, approximation norm and error scale. Treat ideal sampling and noisy experimental distributions as separate regimes; “constant noise is simulable” requires its ensemble/depth assumptions. | Existing Bouland et al./Movassagh sources; high on retained question, medium on full 2026 frontier. |
| A14 | Reframe | GI in BQP is still legitimate, although a lower catalogue priority than verification/coding. Remove the implication that all sufficiently joint coset measurements are proved inefficient. Keep the authentic withdrawal as an archival correction rather than progress toward the conjecture. | [Coset lower bound](https://www.cse.psu.edu/~sjh26/multireg.pdf), [withdrawal](https://arxiv.org/abs/1901.06530v2); high. |
| A15 | Reframe | “Exact complexity of lattice problems” is a programme covering inequivalent approximation factors and input models. Specify decision/search LWE, dimension, modulus and noise, and separate lattice SVP/CVP. Quantum sieving can change exponential constants, so “essentially no better” needs a defined metric. A conditional hardness reduction is not an attack. | [Regev's original reduction](https://arxiv.org/abs/2401.03703); high on scope correction, medium on complete attack frontier. |
| A16 | Merge | Merge the concrete query-simulation conjecture and bounded-round progress into A11. Retain fair-input/output/data-access comparisons as a methods essay. “A model-independent predictive criterion for genuine speedup” has no agreed input/output specification or success criterion and duplicates A1/A11/A12/A13. | [2608.19158](https://arxiv.org/abs/2608.19158), [2608.20297](https://arxiv.org/abs/2608.20297); high editorial confidence. |
| A17 | Reframe | Retain learning/testing but choose unsolved resource trade-offs or a sharply stated arbitrary-reference certification problem. Several mentioned spectral tasks and mixedness regimes now have nearly tight bounds. Distinguish known-state certification, unknown-state functionals, and simultaneous observable learning. Correct the false no-AI-disclosure sentence. | [functional bounds](https://arxiv.org/abs/2608.02600v2), [mixedness](https://arxiv.org/abs/2608.18839), [front matter](https://arxiv.org/html/2608.20113v1); high. |
| A18 | Reframe | Retain as a programme or split into precisely budgeted correlated-noise fault tolerance and efficient decoding/overhead targets. Name strength/locality/correlation budgets, geometry, alphabet, decoding time and total failure criterion. Arbitrary unrestricted adversarial noise cannot be corrected. | [adversarial FT](https://arxiv.org/abs/2608.16857), [overhead](https://arxiv.org/abs/2608.26272); high. |
| U1 | Reframe | Keep the decidability boundary, but nominate a concrete restricted Hamiltonian class and a finite-input promise problem. “Some frustration-free/small-dimension cases are decidable” is not a classification theorem. A gap certificate or semidecision procedure is not necessarily a total gap/gaplessness algorithm. | [1D undecidability](https://journals.aps.org/prx/abstract/10.1103/PhysRevX.10.031038), [2026 certificates](https://doi.org/10.22331/q-2026-04-13-2065); high. |
| U2 | Reframe | State the phase property, boundary conditions and finite input. Replace “uncomputably many transitions” by the actual algorithmic claim. Even a single phase transition can have an uncomputable location; simple topology of the diagram is insufficient. Separate selected-boundary states from all algebraic equilibrium states. | [Chaitin transition](https://arxiv.org/abs/2410.02600), [certified observables](https://www.nature.com/articles/s41467-024-51592-3); high. |
| U3 | Reframe | Thermalization, equilibration and long-time averages are distinct computational tasks. State thermodynamic/time limits and the input state. Include finite-lattice complexity separately from infinite-system undecidability; do not imply a generic efficient algorithm for every interacting integrable model. | [2021 theorem](https://www.nature.com/articles/s41467-021-25053-0), [2025 refinement](https://arxiv.org/abs/2507.02601); high. |
| U4 | Reframe | Replace the false established-uncomputability premise by the sharp ordinary memoryless capacity-computability problem. Keep C1 about tractable formulas and C9 about memory. Distinguish zero-error, assistance, finite rational descriptions and computable-real representations. | [2601.22471v3](https://arxiv.org/abs/2601.22471v3), [zero-error distinction](https://arxiv.org/abs/2010.06873); high. |
| U5 | Retire | Move computable-analysis background to the U-category introduction or a methods page. “Develop a physically appropriate unified framework” is an editorial research aspiration, not a documented single unresolved theorem. A replacement needs a specified representation, operator class and output. | Existing Weihrauch/Pour-El–Richards literature plus [concrete spectral algorithms](https://arxiv.org/abs/2403.19055); high editorial confidence, not a claim that computable analysis is complete. |

## Prioritized missing targets

### 1. Classical verification with one efficient quantum prover — add

Precise target: Does every BQP decision problem admit a polynomial-round, classical probabilistic polynomial-time verifier communicating only classical messages with **one** polynomial-time honest quantum prover, with constant completeness/soundness gap and soundness against an arbitrarily powerful cheating prover, without computational hardness assumptions or trusted quantum setup?

Why it belongs: verifying a quantum computation is a central operational issue absent from A1–A18, and is distinct from receiving a QMA witness or device-independent multi-prover tests. Mahadev gives computational verification under a lattice assumption. The 2026 relativizing MIP theorem explicitly identifies the noncryptographic single-prover problem as unresolved; MIP's multiple provers do not solve this target. [Mahadev](https://arxiv.org/abs/1804.01082), [Aaronson–Natarajan–Tal–Villanyi](https://arxiv.org/abs/2604.11952).

Priority: high. Confidence: high that this is a recognized missing open question; no unconditional resolution was found.

### 2. Efficient public-key quantum money under a named standard assumption — candidate addition

Precise target: Construct reusable public-key quantum money in the standard computational model with quantum-polynomial-time minting/verification and a security reduction against polynomial-time counterfeiting to quantum hardness of LWE (or another individually named, established assumption), without relying on indistinguishability obfuscation or an idealized generic group-action oracle.

Why it belongs: unclonability and publicly checkable quantum states constitute a major quantum-cryptographic direction absent from the current catalogue. Avoid the vague headline “does quantum money exist?” and avoid claiming all existing schemes lack proofs. A seemingly resolving 2025 title is expressly qualified **“In The Generic Model”** in its current ePrint record, so it does not settle this proposed standard-model target. [Doliskani, current record](https://eprint.iacr.org/2025/092), [prior iO-based anonymous money and voting construction](https://eprint.iacr.org/2024/1822.pdf).

Priority: medium-high. Confidence: medium; the precise 2026 standard-assumption frontier warrants a specialist cryptography check before publication. This is a recommended investigation target, not a claim that every possible formulation remains open.

### 3. Finite-temperature robustness of undecidability — sharpen U1/U2 or add a separate U target

Precise candidate: Given finite rational nearest-neighbour interactions for a translation-invariant finite-dimensional lattice system and a specified positive inverse temperature, decide whether connected correlations in its infinite-volume Gibbs/KMS states decay exponentially with separation. State whether the quantifier is over all equilibrium states, a unique state, or a boundary-selected state, and state a promise distinguishing the two cases.

The important physical question is whether the zero-temperature undecidability mechanisms survive nonzero temperature or perturbations. The research review by authors of the original undecidability results singles out thermal correlation decay as an open question. This is more useful than U5's unspecified request for a framework. [Perales-Eceiza et al., section 5.1.4](https://doi.org/10.1016/j.physrep.2025.06.004).

One must not accidentally add a solved observable task: Fawzi–Fawzi–Scalet prove decidability of the promised threshold question when **all** translation-invariant equilibrium states lie on the same side of a threshold. Their algorithm's boundary-independent interval does not compute an arbitrarily selected boundary limit. [Theorem 2.3 and Box 1](https://www.nature.com/articles/s41467-024-51592-3).

Priority: medium-high. Confidence: medium pending a dedicated 2026 search for this exact finite-temperature formulation; the statement above makes explicit choices that the review's prose does not completely specify.

### 4. Concrete subtargets, without inflating the problem count

- Under A5: whether QMA(2) is contained in EXP. This is a valuable intermediate complexity bound, but not a separate reason to duplicate the unentangled-proofs entry. Constant Euclidean-norm separability testing is not automatically the operational-norm optimization result needed to close it.
- Under A17: optimal copy complexity for certification against an arbitrary specified mixed reference state using adaptive single-qubit measurements, with trace-distance separation epsilon and explicit dependence on rank/spectrum. The maximally mixed special case has nearly tight bounds; promote a remaining exact regime after checking the complete theorem statements. [Pauli mixedness paper](https://arxiv.org/abs/2608.18839).
- Under A18: fault-tolerant decoding and overhead for an explicitly budgeted spatial/temporal correlated-noise family on 2D/3D geometries. Require quantitative logical error and classical decoding-time bounds, rather than the unrestricted phrase “beyond stochastic noise”.

Do not add solved headline problems such as good qLDPC-code existence, NLTS, pseudorandom unitaries from quantum-secure one-way functions, or ordinary generic HSP query-complexity bounds. The former PRU existence question was resolved by Ma–Huang; remaining efficiency or assumption-strength questions would require their own precise statement. [Ma–Huang](https://arxiv.org/abs/2410.10116).

## Additional relevant updates outside the previous August window

The user's request is a full catalogue review, so important missed older work matters as much as new arXiv submissions. In addition to A3/A4/A7/A8 above:

- A6: the 2025 derandomized tensor-product gap-amplification preprint and the 2025 published work on quantum-PCP definitions sharpen its actual research frontier. Neither proves the full qPCP conjecture. [Gap amplification](https://arxiv.org/abs/2510.01333), [PCP models](https://quantum-journal.org/papers/q-2025-07-11-1791/).
- U2: the Chaitin phase-transition construction defeats the hope that assuming a single transition suffices for computability. [Primary paper](https://arxiv.org/abs/2410.02600).
- U3: Matsumoto's 2025 preprint distinguishes nearly identical product-state inputs and finite-lattice input-size conventions; its PSPACE/EXPSPACE statements should not be called undecidability. [Primary paper](https://arxiv.org/abs/2507.02601).
- U1: the 2026 hierarchy of frustration-free gap certificates belongs on the positive-results side of the frontier. Completeness and termination must be stated separately. [Published paper](https://doi.org/10.22331/q-2026-04-13-2065).

## Verification limits and editorial safeguards

All 23 assigned entries were read. The direct arXiv records and abstracts of the linked July–September A-category additions were checked, including current version/withdrawal information. Selected full-text passages were inspected where they determine scope or contradict catalogue wording: the A17 AI declaration, A12's permanent theorem, the QMA search-to-decision theorem, the coset lower bound, and the equilibrium-observable promise problem. This is not independent proof verification of the new mathematical results.

No claim of exhaustive reading of all recent quantum-information papers is made. A1/A2 and parts of A13/A15 received status/scope checks rather than a complete rederivation or comprehensive algorithmic literature review. The absence of a found resolution is not itself proof of open status. The public-money and finite-temperature additions carry explicit follow-up qualifications.

For the eventual site update, store the theorem's exact model, arXiv version, source URL, date checked, and evidence type. Suggested evidence types are published theorem, preprint theorem/claim, numerical evidence, author-reported provenance, and editorial recommendation. Do not use the same “improved” marker to imply that a neighbouring theorem quantitatively advances the exact listed conjecture. In particular, the A14 withdrawal is a correction, A17's fractional-colouring result closes a sub-conjecture negatively, and A5's quantum-oracle separation leaves the unrelativized headline open.

The classification axis should distinguish **question type** from expected difficulty: BPP versus BQP and StoqMA versus MA are sharp even if very hard; A15/A18 can legitimately be programmes only if the site deliberately includes programmes. Reducing duplicate entries and replacing vague aspirations with explicit tasks is preferable to expanding the count for its own sake.
