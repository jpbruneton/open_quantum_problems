# Literature update — 10 September 2026

Baseline: `28301a0`. This targeted update follows the [4 September full review](2026-09-04-catalogue-review.md). It updates eleven active entries, adds thirteen distinct preprints to their references and refreshes one existing watchlist item with a fourteenth source. The catalogue retains 113 active entries and ten archive/background pages. No entry is promoted to “Solved”.

## Search and verification scope

Retrieved the recent-submission lists for [quant-ph](https://arxiv.org/list/quant-ph/recent), [math-ph](https://arxiv.org/list/math-ph/recent), [cond-mat.str-el](https://arxiv.org/list/cond-mat.str-el/recent), [hep-th](https://arxiv.org/list/hep-th/recent) and [cs.CC](https://arxiv.org/list/cs.CC/recent) on 10 September. These listed 541, 218, 121, 201 and 40 records respectively, including cross-list duplicates and material already available at the previous review. A title-keyword shortlist was assessed against the catalogue's specific questions. These counts describe retrieval, not full-text review of every record.

For the thirteen incorporated papers and the watchlist update, checked the arXiv abstract, initial submission date, author metadata and v1 HTML, including the main statements, scope qualifications and relevant provenance declarations. Submission dates are used below; an announcement on the following working day is not a publication date. September 4 material is included where absent from the prior review, including the tomography manuscript submitted at 20:49 UTC that day.

Search-engine checks were supplementary; scientific additions rely on the primary manuscripts. No new journal publication or independent proof validation is asserted. Formal Lean projects were not rebuilt. This is neither a fresh entry-by-entry audit of all 113 active questions nor a comprehensive replacement/retraction check of every historical reference. Untouched entries retain their 4 September review date.

## Incorporated sources and remaining scope

All sources in this table were checked as **v1 preprints**.

| Entry | Submission | Source | What changes, and what does not follow |
| --- | --- | --- | --- |
| C4 | 8 September | Cheng & Tomamichel, [No information transmission through quantum channels above capacity](https://arxiv.org/abs/2609.08998v1) | Claims exponential strong converses for all finite-dimensional memoryless channels, for unassisted quantum and classical communication. Unlike the earlier restricted results, this claims the full C4 resolution. Entanglement generation bounds cover transmission codes. Independent assessment remains pending; no capacity formula or infinite-dimensional extension is inferred. |
| C5 | 9 September | Zhu & Wang, [Private communication via zero-private-capacity quantum channels](https://arxiv.org/abs/2609.10520v1) | Claims operational private-capacity superactivation with a four-level channel and a half-erasure qubit channel, giving more than 0.0001903 private bits per product use. Distinguish regularized capacity from single-letter private information. Fixed-dimension optimal gaps and structural criteria remain. |
| E3 | 8 September | Gharibian, Hecht & Rudolph, [Semidefinite extension complexity of the separable set, with applications to approximate disentanglers](https://arxiv.org/abs/2609.09033v1) | Quantitative lower bounds in the HNW shared-feasible-region SDP model. Superpolynomial size follows for vanishing error, not automatically for constant error. Does not lower-bound all separability algorithms. The paper acknowledges that concurrent oracle work supersedes its disentangler application, while its SDP result is separate. |
| A17 | 4 September | Keskin, Luo, Majid & Radzihovsky, [Tight Lower Bounds for State Tomography with Limited Entanglement](https://arxiv.org/abs/2609.05718v1) | Matching lower bound for measurements on bounded blocks of fresh copies with classical adaptivity and no quantum memory between blocks. This allows entangling measurements and concerns reconstruction, not the catalogue's local-Pauli reference-state test. |
| A17 | 9 September | Nayak & Zhou, [Optimal Low-Rank Quantum State Tomography with Bounded-Sample Joint Measurements](https://arxiv.org/abs/2609.10514v1) | Claimed optimal rank-dependent trade-off for sufficiently small trace-norm error and bounded-copy joint measurements. The local-Pauli restriction in A17 remains. |
| A17 | 9 September | Zhang et al., [Constant-depth global shadow estimation](https://arxiv.org/abs/2609.10408v1) | Stabilizer-fidelity estimation with sparse Clifford-IQP readout. Constant depth assumes all-to-all architecture, auxiliary resources, mid-circuit measurement and feedforward. It is not universal tomography with single-qubit measurements. |
| N6 | 4 September | Kundu & Lalonde, [Non-local games and communication complexity with noisy entanglement](https://arxiv.org/abs/2609.05122v1) | Bounds with specified noisy EPR resources and unrestricted measurements. General parallel repetition excludes biased-reset noise. Does not supply a universal decision algorithm for nonlocal games. |
| N7 | 9 September | Chen, [A Separation between Full-Rank PVM and Assumption-free Self-Testing](https://arxiv.org/abs/2609.10013v1) | A full-rank/projective restricted self-test can admit an inequivalent POVM optimum. Highlights simultaneous-assumption and robustness issues; does not disprove universal pure-state self-testability. |
| B8 | 8 September | Kwan, Long & Haah, [Fermionic quantum cellular automata in 2d are trivial](https://arxiv.org/abs/2609.09317v1) | Decomposition of 2D fermionic QCA into local automorphisms and a fermionic shift. QCA triviality is not triviality of all 2D gapped phases. |
| F3 | 9 September | Gachechiladze & Miklin, [Information Causality Characterizes the Set of Quantum Correlations in the Simplest Bell Scenario](https://arxiv.org/abs/2609.10508v1) | Derives the TLM correlator criterion and separates generalized information causality from macroscopic locality. The manuscript's discussion leaves its full power and the almost-quantum question unresolved. The four-correlator projection must not be confused with the full behavior set including biased marginals. |
| E12 | 6 September | Doğan, Sakabe & Walter, [Convex optimization on moment polytopes: Hadamard mirror descent and efficient algorithms for quantum functionals and other tensor parameters](https://arxiv.org/abs/2609.06633v1) | First-order optimization for suitable moment-polytope objectives and tensor parameters. Not a generic efficient algorithm for succinct overlapping marginal compatibility. |
| QF7 | 5 September | Semenoff & Waterfield, [The Wilson-line-dressed charged sector of scalar QED: superselection and the infraparticle](https://arxiv.org/abs/2609.06224v1) | Regulated perturbative scalar-QED results for dressed sectors and infraparticle scaling, with explicit mass-gap assumptions for one-loop exactness. Not nonperturbative QED construction or general scattering completeness. |
| O10 | 8 September | Li, [Spectral Core-Tail Architecture for Locally Certified Gibbs-State Preparation](https://arxiv.org/abs/2609.09291v1) | Local-observable error bounds under response-summability and uniformity hypotheses, plus controlled perturbative anchors. Does not establish global trace-distance accuracy or fast low-temperature mixing of a reversible sampler. |

The existing Bell-activation watchlist item now links to Ulu, Weilenmann & Brunner, [Multi-copy and Catalytic Superactivation of Genuine Multipartite Nonlocality](https://arxiv.org/abs/2609.07380v1), submitted 7 September. Its biseparable-nonsignaling definition and local wirings are explicit. It is not a solution of N11's single-copy Werner threshold or of binary-output triangle questions, and it is not counted as a new problem.

## Attributed provenance

Versioned declarations are linked on the affected entries, separately from mathematical evidence:

- C4: the authors credit Codex/ChatGPT 6 Astra for the derivative-bound continuity approach and an initial proof; they attribute the integral-representation exposition to themselves and take responsibility.
- C5: QudeLeap AI Quantum Scientist and language models are credited for an initial activation example, proof exploration and manuscript work. Lean formalization is reported, not independently reproduced here.
- E3: Lean proof support is reported. Formalization alone is not treated as an AI-use declaration.
- A17: Keskin et al. credit Codex/GPT-5.6 Sol for ideas and proof strategies. Nayak–Zhou credit GPT-5.5/5.6 Sol for crucial lemmas and reformulating earlier algorithms, separating their own rank-dependent analysis.
- N6: the authors report substantial assistance in specified proof sections from ChatGPT 5.6 Sol and Codex, followed by their own review and verification.
- N7: the author reports human-directed frontier language models for exploratory proofs and drafting, without naming a model.
- B8: Claude and ChatGPT are disclosed for figures and literature search, not credited for the theorem.
- O10: GPT-5.6 Sol is disclosed for manuscript work, code and completion of several proofs; the author attributes the scientific ideas to himself.

Where this update adds no provenance item, it makes no assertion that AI was absent.

## Other screened candidates

- [Convex-Gaussianity of fermionic Gibbs states in perturbation theory](https://arxiv.org/abs/2609.09608v1): interesting structured thermal-state result; no inference that it solves the ground-state Hubbard question, the intrinsic sign problem, or a rapid-mixing theorem.
- [A Sum-of-Squares Hierarchy with Quadratic Convergence for Quantum Channel Coding](https://arxiv.org/abs/2609.09629v1): abstract and metadata checked. Concerns single-use classical-message success probability; not an exact asymptotic capacity formula. Full text was not reviewed in this pass.
- [Quantum thermalization achieves optimal approximate quantum error correction](https://arxiv.org/abs/2609.04121v1): abstract and metadata checked. The abstract separates numerical thermalization behavior from an ensemble theorem. Not imported as a universal ETH or dynamical thermalization proof; full text was not reviewed in this pass.
- [Error Exponents of Probabilistic Quantum Resource Distillation](https://arxiv.org/abs/2609.06688v1): conditional errors, postselection and approximately resource-nongenerating instruments differ from the catalogue's deterministic LOCC/distillability targets.

## Implementation and validation

Changes preserve the existing site design, Next.js architecture, public IDs and GitHub/Vercel publishing path. A separate latest-update record drives the homepage and review page without falsely re-dating the entire catalogue. Existing evidence and historical references are preserved, with C4's obsolete unrestricted-open wording corrected.

Validation covers catalogue integrity, evidence dates relative to each entry's review, unchanged dates for untouched entries, versioned source anchors, pending-claim status, KaTeX parsing and server rendering of every catalogue view, followed by the production build.

Results: all ten automated tests passed and the production build completed successfully. All fourteen new version-pinned arXiv links returned HTTP 200, and their displayed submission dates matched the update records.
