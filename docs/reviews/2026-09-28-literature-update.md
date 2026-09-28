# Literature update — 28 September 2026

Baseline: `386cec6`. This targeted update follows the [10 September update](2026-09-10-literature-update.md) and the [4 September full review](2026-09-04-catalogue-review.md). It updates 16 active entries with 18 distinct versioned arXiv manuscripts and one newly published journal article. The catalogue retains 113 active entries and ten archive/background pages. No entry is promoted to “Solved”.

## Search and verification scope

Retrieved the September lists for [quant-ph](https://arxiv.org/list/quant-ph/2026-09?skip=0&show=2000), [math-ph](https://arxiv.org/list/math-ph/2026-09?skip=0&show=2000), [cond-mat.str-el](https://arxiv.org/list/cond-mat.str-el/2026-09?skip=0&show=2000), [hep-th](https://arxiv.org/list/hep-th/2026-09?skip=0&show=2000) and [cs.CC](https://arxiv.org/list/cs.CC/2026-09?skip=0&show=2000) on 28 September. They contained 1,787, 728, 432, 779 and 181 records respectively, with cross-list duplicates. The recent quant-ph list contained 497 records. These are retrieval counts, not counts of papers reviewed in full. Title-keyword screening and targeted searches identified candidates relevant to the catalogue. The monthly lists supplement the recent lists, which cover only the last few announcement days.

For incorporated manuscripts, checked abstract metadata, version/submission history, HTML main statements and selected scope/proof passages, including available author disclosures. Also checked Quantum's publication page and its linked arXiv v5 for the commuting-Hamiltonian article. Search results and the [author's listing of the QMA paper](https://sabeegrewal.com/) were supplementary discovery/announcement checks, not independent validation of proofs.

This is a literature and scope review, not a new audit of all 113 questions. No full proof verification, Lean rebuild or execution of the entanglement-of-purification verification artifact was performed. In particular, a claimed full resolution is recorded as such, with “Improved” retained pending assessment. The quantum-PCP problem remains “Open”.

Dates below are submission dates unless marked as a revision or journal publication. Two September-indexed manuscripts display August submission dates on arXiv: Barber–Pirandola (17 August) and Krohn-Grimberghe (25 August). Those dates are preserved rather than inferred from their identifiers. Sources submitted on 10 September but absent from the previous update are included. Untouched entries keep their earlier review dates.

## Incorporated sources and scope

| Entries | Date and version | Primary source | Assessment |
| --- | --- | --- | --- |
| A4 | 11 September, v1 | Grewal & Rudolph, [QMA has perfect completeness](https://arxiv.org/abs/2609.13032v1) | Claims the finite-register equality, including exact Clifford+T gates. Classical-oracle relativization does not contradict the earlier quantum-oracle obstruction. |
| A7; A6 scope note | 17 September, v1 | Gay & Jeronimo, [Asymptotically Good Quantum Locally Testable Codes](https://arxiv.org/abs/2609.20780v1) | Claims all A7 parameters simultaneously. This does not supply quantum PCP's hardness reduction. |
| A7 | 22 September, v1 | Bafna, Li & Nguyen, [Good Quantum Locally Testable Codes from Product Expansion](https://arxiv.org/abs/2609.26735v1) | Conditional construction; the Reed–Solomon product-expansion conjecture must remain explicit. |
| A19 | 22 September, v1 | Bouland et al., [BQP ⊆ IP Does Not Relativize](https://arxiv.org/abs/2609.25680v1) | Oracle barrier to relativizing classical verification, not an unrelativized impossibility theorem. |
| C1 | 23 September, v1 | Tang et al., [Classical Capacity and Entanglement Cost of the Amplitude Damping Channel](https://arxiv.org/abs/2609.28592v1) | Claimed additivity for qubit channels admitting a pure output. Classical capacity and simulation cost are distinct from unassisted quantum capacity. |
| C1 | 25 September, v1 | Pirandola, [Exact series formulas for the capacities of the amplitude damping channel](https://arxiv.org/abs/2609.31609v1) | Convergent capacity series; the classical case depends on the preceding additivity claim. |
| C1 | 20 September; v2 revised 24 September | Shou & Gorshkov, [A constructive violation of additivity of minimum output von Neumann entropy](https://arxiv.org/abs/2609.23946v2) | Explicit non-random counterexample, with stronger Rényi-gap scope in v2. Not a universal quantum-capacity formula. |
| C3 | 17 August, v1; September listing | Barber & Pirandola, [Improved lower bound for the two-way-assisted quantum capacity of the bosonic thermal-loss channel](https://arxiv.org/abs/2609.27792v1) | Better achievable two-way rates, without matching converse or exact secret-key capacity. |
| C4 | 10 September, v1 | Beigi & Tomamichel, [Strong Converse for Quantum Capacity via a Fully Quantum Blowing-Up Lemma](https://arxiv.org/abs/2609.11771v1) | Another claimed general exponential quantum strong converse. Shared authorship with the earlier paper prevents treating this as independent validation. |
| C10 | 15 September, v1 | Wilde, [Strong converse for the quantum capacity of the pure-loss bosonic channel](https://arxiv.org/abs/2609.16608v1) | Unconstrained pure-loss quantum threshold with inverse-blocklength fidelity bound. Does not settle energy-constrained classical or noisy thermal-channel cases. |
| E3; O10 | 24 September, v1 | Kiani, [Sharp universal death of entanglement threshold for Pauli Hamiltonians](https://arxiv.org/abs/2609.30149v1) | Separability for a specified high-temperature Hamiltonian family; sampling strictly below threshold. Neither generic separability testing nor a general dynamics-mixing theorem. |
| E8 | 10 September, v1 | Yang et al., [Full Inseparability and Genuine Multipartite Entanglement Coincide for Finite-Mode Gaussian States](https://arxiv.org/abs/2609.10984v1) | Structured Gaussian classification, allowing non-Gaussian decompositions. No universal multipartite mixed-state classification follows. |
| E10 | 25 August, v1; September listing | Krohn-Grimberghe, [The entanglement of purification is not additive](https://arxiv.org/abs/2609.29539v1) | Claims ordinary von Neumann nonadditivity using analytic reductions and exact arithmetic. The result concerns some finite tensor power, not specifically two copies. |
| F9 | 16 September, v1 | Wei & Pang, [Extensibly Causally Separable Processes Admit Realizations as Quantum Circuits with Classical Control of Causal Order](https://arxiv.org/abs/2609.18559v1) | Characterizes the ancilla-stable separable class as QC-CC. |
| F9 | 17 September, v1 | Wechs, Abbott & Branciard, [All causally separable quantum processes are quantum circuits with classical control of causal order](https://arxiv.org/abs/2609.20774v1) | Concurrent coherent-teleportation construction. Preserve the strengthened separability definition and distinguish QC-CC from QC-QC. |
| M2 | 17 September, v1 | Becker & Oltman, [Disorder on the hyperbolic square lattice I: Anderson delocalization and absolutely continuous spectrum](https://arxiv.org/abs/2609.20798v1) | Non-Euclidean comparison result; the cubic-lattice question remains open. |
| N7 | 20 September, v1 | Chen & Zhao, [A non-robust quantum correlation self-test](https://arxiv.org/abs/2609.25117v1) | Exact self-testing need not imply robustness for that correlation; alternative robust tests of its target are not excluded. |
| QF8 | 23 September, v1 | Perche & Ribes-Metidieri, [Local Vacuum Entanglement through Most Entangled Modes](https://arxiv.org/abs/2609.28621v1) | Free-field harvesting construction with numerical mode profiles; general resource-constrained optimality remains open. |
| O10 | Published 18 September; linked preprint v5 | Hwang & Jiang, [Gibbs state preparation for commuting Hamiltonian: Mapping to classical Gibbs sampling](https://doi.org/10.22331/q-2026-09-18-2209), Quantum 10, 2209 | Commuting-family reductions to classical sampling; efficiency is conditional on the associated classical sampler. A journal publication of earlier work, not a new September submission. |

## Attributed provenance

New disclosure records are linked to versioned manuscript HTML on the relevant entries. They describe what authors report; they are not independent provenance audits or evidence of mathematical correctness.

- A4: core proof idea and extensive assistance attributed to unnamed generative AI.
- A7: material expander–code assistance attributed to ChatGPT Pro 5.6 and 6.
- A19: initial proof idea attributed to ChatGPT 6 Astra, followed by author development and verification.
- C1: Tang et al. disclose language-model proof assistance and Astra writing support, plus a reported Lean formalization; Pirandola names Sol and Astra; Shou–Gorshkov credit Astra for the proof method.
- C4 and C10: attributed Astra assistance in proof development and manuscript preparation.
- E3: Kiani credits ChatGPT 6 with the strategy and central arguments. O10 links the same paper and E3.
- E8: Sol assistance with literature, proof auditing and drafting.
- E10: unnamed AI assistance with code, calculation, mechanical proof steps and drafting; the [author-supplied artifact](https://doi.org/10.5281/zenodo.22097511) was not executed.
- M2: author ideas combined with Sol assistance; suggested ChatGPT 6 extensions are not results of the paper.
- N7: initial solution attributed to ChatGPT 5.6 Sol ultra, followed by author simplification and exposition.

No new disclosure record means no assertion about the presence or absence of AI use.

## Other candidates and prior claims

- Li, Li & Liu, [Transversal non-Clifford gates on good quantum locally testable codes](https://arxiv.org/abs/2609.26691v2): abstract, history and HTML inspected. A follow-on to the new qLTC claim, not independent validation of its construction or a threshold theorem for A18's correlated-noise model.
- Wang, [Unbounded Holevo additivity gaps in finite dimensions](https://arxiv.org/abs/2609.18222v1): abstract, history and selected HTML inspected. A classical-information gap with growing dimension, not a solution of the fixed depolarizing quantum-capacity benchmark C11.
- The previously prominent [Cheng–Tomamichel](https://arxiv.org/abs/2609.08998v1) and [Zhu–Wang](https://arxiv.org/abs/2609.10520v1) claims still displayed v1 on their arXiv records when checked. No withdrawal or journal publication was displayed there. C5's content and review date are unchanged; this metadata check is not a fresh review of all its sources.
- No status change is inferred from general press, discussion threads or titles alone. In particular, conditional lattice-gauge arguments are not imported as a solution of the continuum Yang–Mills problem.

## Implementation and validation

Added an ordered `LITERATURE_UPDATES` history while retaining `LITERATURE_UPDATE` as the latest-record alias. The homepage highlights the new claims; the review page links both dated updates. Per-entry dates retain the most recent update that actually touched them, instead of resetting earlier targeted dates to the full-review baseline.

Existing statements, IDs, archives and historical references are retained. Obsolete unrestricted-open wording in A4, A7 and E10 is replaced by a distinction between the earlier baseline and the new claimed resolution. The original English presentation and existing site design are preserved.

Validation: all ten catalogue tests passed, including KaTeX parsing, metadata, review-history dates and server rendering of every active/archive detail view and category. `npm run build` completed successfully. A source diff confirmed that exactly the sixteen listed entries changed; all other entry records are identical to the baseline. All twenty new reference URLs (eighteen versioned arXiv links, one journal DOI and one supplementary-artifact DOI) returned HTTP 200. These checks validate the site and source links, not the mathematical proofs.
