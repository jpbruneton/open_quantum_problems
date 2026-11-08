# Literature update — 8 November 2026

Baseline: `d5cec3e`. This targeted review follows the [26 October literature update](2026-10-26-literature-update.md). This review was prepared in parallel with that update, from the 17 October baseline, and was then merged with it. Material already recorded on 26 October is not repeated: Go–Jeong (A12), Barber–Pirandola (C3), Li–Li (C6), Chen–Ding–Lu (O10), Hsu (QF5) and OpenAI's MUB verification package (N2). It covers arXiv announcements up to 5 November, the 29 October update to the OpenAI Math Release, and related announcements. A second pass the same day compared the catalogue with similar catalogues (QIQCOP Zoo, IQOQI Vienna); see the section “Comparison with similar catalogues” below. Together the two passes change 21 existing entries, including C11 from external pull request #1, and add 12 new ones. Two entries become **Claimed solved**: N1 (SIC existence) and the new A20 (PARITY ∉ QAC0). Totals: 125 active entries, 46 Improved, 14 Claimed solved, 65 Open and zero Solved.

## Scope and method

**arXiv.** On 8 November 2026, metadata were retrieved from the arXiv export API for quant-ph, math-ph, cond-mat.str-el, hep-th and cs.CC, for submissions from 14 October to 5 November 2026. The queries returned 1,533, 754, 432, 845 and 233 records, 3,281 after merging cross-lists. The window fully overlaps the 26 October review (14–23 October), whose recommended restart date was 22 October. Manuscripts already cited in the catalogue, including those added on 26 October, are not re-recorded. Titles were screened with catalogue keywords, and abstracts were screened for catalogue terms and for references to the OpenAI release. About 60 abstracts were then read. For every incorporated arXiv source, the PDF was read for scope and searched for AI-use disclosures.

**OpenAI Math Release.** The repository was compared between the reviewed commit [`1581d4c`](https://github.com/openai/math/tree/1581d4cbdd69a0faf34b2089614fe2a814316a6a) and [`4eaee87`](https://github.com/openai/math/tree/4eaee87548250b2682affda7d05d947c05554bae) (29 October). The [history](https://github.com/openai/math/blob/4eaee87548250b2682affda7d05d947c05554bae/history.md) records two new manuscripts: local smoothing/Kakeya and a refutation of the Exponential Time Hypothesis. Neither is quantum. It also records Lean changes to non-quantum families and the restoration of the MUB verification records, which were already recorded on 26 October at `7ef5c0c`. The 29 October commit only fixes a Hodge-conjecture formalization. None of the manuscripts cited in the catalogue was modified or withdrawn, and no evidence link is re-pinned.

**Announcements.** OpenAI's [26 October post](https://openai.com/index/building-scientific-understanding-with-academic-communities/) returned HTTP 403 to automated access. Its content is taken from search excerpts, corroborated by the primary [statement of the shepherding committee](https://www.kitp.ucsb.edu/sites/default/files/YM_working_group.pdf) hosted by KITP. The [QIP 2027 site](https://qipconference.org/2027/) still gives 30 November as the talk-decision date. Nothing from QIP 2027 is incorporated.

**Limits.** No proof was independently audited. No certificate, Lean project or verification script was rerun. This includes OpenAI's restored MUB records, the Cárdenes Wuttig–Tindall interval-arithmetic certificates and the imported Haldane-gap numerics. AI use is recorded as provenance and does not determine status.

## Claimed-solved entries: independent engagement

| Entry | Source | What it adds | Why status is unchanged |
| --- | --- | --- | --- |
| N2 | Cárdenes Wuttig, Tindall, [Using topology to reveal all mutually unbiased bases in dimension six](https://arxiv.org/abs/2611.06917v1) (4 Nov, v1) | A second proof of $M(6)=3$ by a different route. It proves that the non-Tao order-six Hadamard space is connected, uses a cover by 2,775 phase balls plus a Fourier chart, and classifies all mutually unbiased triples. Two independent interval-arithmetic checkers (Arb, Julia) verify the cover and quartet exclusion. Lean proves the reconstruction, connectedness and the step from certificates to the theorem. The authors state that they reuse OpenAI's graph-search tests with reproved inequalities and rely on none of OpenAI's certificates. | Two agreeing computer-assisted preprints, neither peer reviewed and neither rerun here. |
| M5 | Tasaki, [expository notes](https://haltasaki.github.io/writings/AI/OpenAI_Haldane.html) (18–19 Oct) | An expert reports careful study of the analytic argument and concludes that it proves the standard periodic formulation. | The notes state that the computer-assisted estimates were not checked. |
| M5 | Tasaki, [uniqueness of translation-invariant ground states](https://arxiv.org/abs/2610.34330v2) (25 Oct; v2 reviewed) | Extends the machinery to uniqueness of the infinite-chain translation-invariant ground state and convergence of finite-chain ground states. | Imports OpenAI's numerical certificates without recomputing them. |
| M5 | Grover, [Extensions of the Haldane gap proof](https://arxiv.org/abs/2611.07400v1) (5 Nov, v1) | Generalizes the "purity bootstrap" to higher dimensions, near-degenerate sectors, fermions, and correlation decay in the Jian–Zaletel PEPS. | Engages with the method; the spin-1 certificates are not re-checked. |

## Announced, unpublished: 4D Yang–Mills existence (QF1)

OpenAI announced on 26 October that an internal model produced a rigorous existence proof for four-dimensional quantum Yang–Mills theory, including coupling to fermions. Secondary reports also mention QCD and a "Standard Model completion". A committee chaired by David Gross, with Douglas, Jaffe, Klebanov and Nekrasov, has custody of the roughly 1,147-page proof. It states that confinement and the mass gap "remain very important open challenges". It will release the proof and a Lean formalization only after checking that the definitions match the standard problem.

QF1 asks for both existence and a mass gap. On 8 November no manuscript was public, and the announcement excludes the gap. QF1 therefore stays **Open**. The claim is described in the entry's context and references but is not recorded as evidence, and no status change follows from it. The two-dimensional Yang–Mills–Higgs construction of Bringmann, Cao, Hairer and Zhao is recorded as a lower-dimensional benchmark. Its footnote confirms that the OpenAI proof was not public when it was written.

## arXiv manuscripts incorporated

All are preprints, reviewed at the stated version; dates are v1 submission dates.

| Entry | Submitted | Source | Scope and residual |
| --- | --- | --- | --- |
| A9 | 5 Nov | Hamoudi, Le Borgne, Teganahally Sridhara, [An Oracle Separation between StoqMA and MA](https://arxiv.org/abs/2611.08180v1) | MA ⊊ StoqMA relative to a classical oracle; rules out relativizing proofs of equality. Unrelativized question open. |
| A12 | 1 Nov | Lim, [Boson sampling is fragile to loss](https://arxiv.org/abs/2611.01434v1) | Any fixed nonzero uniform loss, Fock and Gaussian; noisy regime. |
| A12 | 5 Nov | Angrisani, Mhiri, [Simulation of boson and fermion sampling under thermal loss](https://arxiv.org/abs/2611.08444v1) | Thermal and pure loss; noisy regime. |
| A19 | 27 Oct | Mantri, [Classical Verification of Quantum Computation Beyond the Polynomial Hierarchy](https://arxiv.org/abs/2610.37635v1) | Oracle-relative classical verification for one BQP language outside PH; not all of BQP. |
| B15 | 3 Nov | Sun, Roth, Chen, Heyl, [Evidence for a Dirac Spin Liquid … from Neural-Network Quantum States](https://arxiv.org/abs/2611.05174v1) | Numerical, tori up to 300 spins; not a thermodynamic determination. |
| E9 | 26 Oct | Schmitt, Sutter, [Distillable entanglement is continuous](https://arxiv.org/abs/2610.35722v1) | Continuity ingredient; no certified algorithm. |
| E11 | 4 Nov | Ao, Philip, Streltsov, [Equivalence of Correlated Catalytic and Marginal Asymptotic Transformations](https://arxiv.org/abs/2611.06573v1) | Full LOCC characterization of correlated-catalytic conversion to pure targets via $E_D$. |
| E11 | 2 Nov | Masajada, Philip, Streltsov, [Correlated Catalysis Removes the Strong Converse for Entanglement Distillation](https://arxiv.org/abs/2611.03148v1) | Optimal fidelity $E_D/R$ above $E_D$. |
| M6 | 29 Oct | Teufel, [Bulk gap stability and spectral flow for fermions with weak long-range interactions](https://arxiv.org/abs/2610.40299v1) | Infinite-volume formulation with linear gap loss. The weakly interacting fermion class was already covered, including polynomial decay by De Roeck–Salmhofer, so M6 stays open. |
| N1 | 1 Nov | Khodaiemehr, [From Ghost SICs to SIC-POVMs: A Galois Reduction of Zauner's Conjecture](https://arxiv.org/abs/2611.01524v1) | Conditional on the algebraic Stark conjecture and a multiplet hypothesis; N1 stays open. |
| O10 | 29 Oct | Bertoni, De Palma, [Rapid mixing … with all-to-all interactions](https://arxiv.org/abs/2610.40361v1) | High-temperature Dobrushin regime on arbitrary graphs. |
| QF1 | 2 Nov | Bringmann, Cao, Hairer, Zhao, [Construction of the 2D non-Abelian Yang–Mills–Higgs measure](https://arxiv.org/abs/2611.03640v1) | Two-dimensional benchmark. |
| QF5 | 3 Nov | Witten, [A Note On Lattice Definition of Gauge Theories With Chiral Fermions](https://arxiv.org/abs/2611.05051v1) | Variant of Craig's algorithm, also proposed by Hsu (recorded on 26 October); in-principle computable, but not suited to Monte Carlo. |
| QF5 | 4 Nov | Lootens, Singh, [Simulating a chiral gauge theory](https://arxiv.org/abs/2611.06880v1) | 1+1D Abelian Hamiltonian regularization with iMPS simulation of the 34-50 model. |

## Watchlist and exclusions

The quantum-computation watchlist item now notes that He, Ou and Zhao ([unitaryQIP = unitaryPSPACE](https://arxiv.org/abs/2611.02819v1)) build on OpenAI's unitary-synthesis claim. This is downstream use, not an assessment of that claim.

Screened but not incorporated:

- [Limits and Constants of OpenAI's Claimed ETH Refutation](https://arxiv.org/abs/2611.00517v1) and [ETH is Dead, Long Live SH](https://arxiv.org/abs/2611.02650v1) concern classical complexity, outside the catalogue.
- [Rényi-2 entanglement of purification of the symmetric Werner state](https://arxiv.org/abs/2611.00144v1) is a Rényi-2 result and does not bear on the von Neumann E10 question.
- Lieb–Robinson papers ([2611.00776](https://arxiv.org/abs/2611.00776v1), [2611.02263](https://arxiv.org/abs/2611.02263v1)) treat unbounded bosons or give new proofs of known bounds, not the bounded-spin residual regimes in B12.
- [All-Disorder Localization for the 1D Anderson Model with Power-Law Hopping](https://arxiv.org/abs/2611.02724v1) and the [block Anderson model](https://arxiv.org/abs/2611.00598v1) concern different models from M2 and M12.
- [An Unbounded Separation of Almost-Quantum and Commuting-Operator Correlations](https://arxiv.org/abs/2610.41448v1) and [All Bell inequalities with a quantum advantage in the minimal scenario are self-testing](https://arxiv.org/abs/2611.06997v1) are strong results without a matching active entry (N9 is archived).
- [What Can Be Computed with Indefinite Causal Structure?](https://arxiv.org/abs/2610.40573v1) concerns the computational power of process matrices, not physical realizability (F9).
- [The Mass Gap Approach to QCD. III](https://arxiv.org/abs/2611.07897v1) does not give a rigorous construction and is not incorporated in QF1 or QF2.

This selection does not prove that no other relevant literature exists.

## Comparison with similar catalogues (second pass, 8 November)

The catalogue was compared with the [QIQCOP Zoo](https://qiqc-op.com/) (217 problems, public JSON API, updated 6 November) and the [IQOQI Vienna list](https://oqp.iqoqi.oeaw.ac.at/open-quantum-problems) (29 problems). The working note is [docs/comparisons/2026-11-08-qiqcop-zoo-and-iqoqi.md](../comparisons/2026-11-08-qiqcop-zoo-and-iqoqi.md).

- **Cross-references.** 34 entries now carry an “In other catalogues” section: 75 links to the matching QIQCOP and IQOQI pages, with the QIQCOP status as of 6 November. The links are stored in `app/data/crossrefs.js`. A new About page lists these and other similar projects.
- **N1 → Claimed solved.** Radchenko and Wheeler, [*Stark units for real quadratic fields and reciprocity laws*](https://www.danrad.net/papers/stark-reciprocity.pdf) (manuscript dated 4 October 2026, author website). The manuscript claims Stark reciprocity for real quadratic fields. Its §9.2 combines this with Appleby–Flammia–Kopp, Theorem 1.46, to claim $d^2$ equiangular lines in $\mathbb C^d$ for every $d$. Its disclaimer states that it was LLM-generated and then edited by the authors. It is not peer reviewed. §9.2 and the introduction were read; the proof was not checked.
- **New A20 (Claimed solved): PARITY ∉ QAC0.** Previously on the watchlist. The claim rests on the OpenAI manuscript and on Gao, Ji and Liu's self-contained simplification (ECCC TR26-258, 18 October). QIQCOP marks it Solved.
- **Ten new open entries** taken from questions both lists treat as central and that this catalogue lacked: A21 dihedral HSP, A22 polynomial-time quantum lattice algorithms, A23 triangle-finding query complexity, A24 stabilizer rank of $|T\rangle^{\otimes n}$, A25 shadow-tomography copy complexity, C13 two-way capacity of amplitude damping, E17 distillable entanglement of the antisymmetric state, E18 bipartite bound information (IQOQI #47), N12 many-copy nonlocality of entangled states, N13 semialgebraicity of the closed quantum correlation set. N14 (CGLMP inequalities, IQOQI problem 27) was added after GitHub issue #2 pointed out that this IQOQI problem was missing.
- **External contribution:** C11 records the Zenodo deposit 10.5281/zenodo.23484691 (Harish Santhanalakshmi Ganesan, 19 October 2026) from pull request #1: exact certificates of positive coherent information at per-Pauli $p=32483/500000$. The certificate was not rerun here. Statements were rewritten for this catalogue, and every arXiv reference was checked against the arXiv API.
- **Sources added to existing entries:** F3 (Das Bhowmik–Banik, arXiv:2610.41444), E9 (Fang, arXiv:2610.00187), E1 (Lei et al., arXiv:2608.03710), E14 (Cha, arXiv:2603.13442; Wójcik et al., arXiv:2603.18193), A7 (Li–Li–Liu, arXiv:2604.01874), A12 (Zhao, arXiv:2609.01008, 2610.00112), A13 (Go–Oh–Jeong, arXiv:2607.20804), O10 (Gao–Guo, arXiv:2609.15902). Context notes were added to C4 (the two strong-converse proofs share an author), F9 (extensible causality and purification) and E13 (Zhang–Yeung benchmark). AI-use disclosures were recorded where found.
- **Recent sources taken from QIQCOP records (second check).** For each entry linked to the QIQCOP Zoo, the Zoo's references were compared with ours (282 missing references in total, mostly background). Only recent papers that report a claimed resolution, a withdrawal or the latest improvement for our exact question were added, each labelled "found via the QIQCOP Zoo". The additions:
  - A11: Escudero Gutiérrez–Saucedo–Palazuelos.
  - A12: Zhang's Zenodo hafnian anticoncentration.
  - A20: Joshi–Tal–Vasconcelos–Wright.
  - A21: Gupte–Ragavan–Zhandry's refutation of a 2026 dihedral coset problem (DCP) algorithm.
  - C1: four 2026 nonadditivity papers.
  - C2: Mele et al., non-Gaussian beats the thermal threshold.
  - C11: Kondra et al., strong converses.
  - E6 and E17: Kondra et al.; Sen–Lami.
  - E9: Fang–Fawzi–Fawzi.
  - E19: Ahiable–Kothakonda–Winter.
  - N1: Joka's withdrawn SIC claim.
  - O10: Bergamaschi–Chen.
- **Correction.** The cross-reference from A18 to "Tough error models" (QIQCOP; IQOQI 14) was removed: that problem concerns guaranteed code dimension for a given error space, not fault tolerance under correlated noise.
- **Status differences that come from policy only.** QIQCOP marks complete preprint resolutions “Solved” (C4, C12, E16); they stay “Claimed solved” here. QIQCOP still lists E10 and A7 as unsolved; their audits predate the preprints cited here.

## Classic quant-ph questions (third pass, 8 November)

Well-known open problems from the 2000–2020 quant-ph literature were listed from memory and checked against the catalogue, watchlist and proposals page. Each candidate's current status was then checked by web search, and its key references against the arXiv API. Ten entries were added:

| Entry | Status | Basis |
| --- | --- | --- |
| A26 Approximating Quantum Max-Cut | Open | Best classical ratio 0.603 (Gribling–Sinjorgo–Sotirov, arXiv:2504.11120); UGC hardness about 0.956; bipartite case in BQP (July 2026, arXiv:2607.14401, 2607.10765), BPP open (QIQCOP). |
| A27 Random circuits as pseudorandom unitaries | Open | Designs known, PRUs from one-way functions (Ma–Huang); the random-circuit PRU conjecture is still open (Raza–Eisert–Fefferman, arXiv:2609.03065). |
| A28 Hamiltonian structure learning at any temperature | Open | Solved only at high temperature (Lewis–Tang–Wright, arXiv:2606.30358); known-structure learning at any temperature (Bakshi et al.). |
| A29 Public-key quantum money from standard assumptions | Open | One-shot signatures from iO plus LWE (Shmueli–Zhandry 2025); nothing from LWE alone. |
| A30 Degenerate codes and the quantum Hamming bound | Claimed solved | Zhang–Chen, arXiv:2606.15558, for exact binary subspace codes. |
| A31 Unitary synthesis problem | Claimed solved | OpenAI manuscript, 5 October 2026; previously on the watchlist. |
| B16 3D self-correcting quantum memory | Improved | Balasubramanian–Davydova–Lin (arXiv:2605.10943), proved with a thermal encoding; ground-space initialization is open. Haah's cubic code is ruled out (arXiv:2609.39959). Replaces two watchlist items. |
| B17 Néel order, 2D spin-1/2 antiferromagnet | Claimed solved | Chadha–Wang–Nosov–Scheer–Khalaf, arXiv:2611.03241 (2 November 2026), a bootstrap proof with exact rational certificates. |
| B18 3D quantum Heisenberg ferromagnet | Claimed solved | OpenAI manuscript, 24 September 2026; previously on the watchlist. |
| E19 Absolutely separable vs absolutely PPT | Open | Solved for qubit–qudit; symmetric-subspace counterexample; equal maximal purity for 3⊗n (November 2026). Also IQOQI problem 15. |

Not added: the robust Brown–Susskind conjecture, already proved (Chen, Haah, Haferkamp, Liu, Metger, Tan, arXiv:2406.07478). Tight k-distinctness lower bound, claimed (Belovs, arXiv:2604.05133) for large alphabets. Entropic uncertainty for d+1 MUBs, known since Sánchez-Ruiz; only intermediate numbers of bases remain open. Lockability of distillable entanglement (IQOQI 25), considered too narrow. No proof or certificate was rerun.

Totals after this pass: 135 active entries, 47 Improved, 18 Claimed solved, 70 Open and zero Solved.

## Status, provenance and implementation

- **Status changes:** none.
- **Updated within their existing status:** A9, A12, A19, B15, E9, E11, M5, M6, N1, N2, O10, QF1 and QF5.
- **Totals:** 125 active entries, 46 Improved, 14 Claimed solved, 65 Open and zero Solved, plus ten archive/background pages (after the comparison pass below).

Author AI disclosures are recorded per entry. Most incorporated manuscripts disclose substantial assistance, chiefly from GPT-6 Astra and other ChatGPT versions, and from Claude Opus 5.5. Examples include Witten's note, Cárdenes Wuttig–Tindall and Lootens–Singh's simulation code. Bringmann–Cao–Hairer–Zhao state that the main ideas were produced without AI and that seven listed lemmas were proved with GPT models. No disclosure was found by text search in Bertoni–De Palma or Sun–Roth–Chen–Heyl. Absence of a disclosure is not evidence of no AI use.

Only the changed and new entries receive `reviewedAt: 2026-11-08`. No existing statement, ID, title or archive target changes. The homepage, review page and README summarize this update.

## Findings from the review of the AI-suggested problems

The referee-style review of the 46 AI-suggested problems surfaced four catalogue findings. Each was checked against its source before the change.

| Entry | Change | Source |
|---|---|---|
| E18 Bipartite bound information | Open → **Claimed solved** | Pauwels, Gisin & Renner, [arXiv:2607.25838v2](https://arxiv.org/abs/2607.25838v2) (8 September 2026): an explicit two-bit-and-trit source with zero secret-key rate and positive intrinsic information (Theorem 1). The authors credit ChatGPT (GPT-5.6 Sol) with a decisive pointer. |
| A11 Aaronson–Ambainis conjecture | Improved → **Claimed solved** | Turturean (PSI), [paper and Lean 4 formalization](https://github.com/physical-superintelligence/aaronson-ambainis), announced 6 November 2026: influence at least $(8\sqrt{15}/(125\pi^4))\,\varepsilon^{5/2}/d^6\ge(\varepsilon/d)^7$. PSI states that the proof was found by an internal system running a non-public Anthropic model. The Lean build was not rerun. |
| N4 Minimal separation of quantum correlation models | Updated (Improved) | Beigi, Quantum 5, 389 (2021), [arXiv:2004.11103](https://arxiv.org/abs/2004.11103): non-closure of $C_q$ already at four binary inputs. Douglas, [arXiv:2609.05555v2](https://arxiv.org/abs/2609.05555v2), and Krohn-Grimberghe, [arXiv:2609.29693](https://arxiv.org/abs/2609.29693): claimed non-closure at three binary inputs, via the I3322 value. |
| A31 Unitary synthesis | Updated (Claimed solved) | He, Ou & Zhao, [arXiv:2611.02819](https://arxiv.org/abs/2611.02819v1), Theorem 4.6: error below $2^{-\beta-1}$ at size polynomial in $n$ and $\beta$, building on the claimed solution. |

Totals after these changes: 135 active entries, 46 Improved, 20 Claimed solved, 69 Open and zero Solved.

The same review removed 7 of the 46 suggested problems from the New problems page: P8, P26 and P31 as already answered, and P18, P39, P40 and P43 as ill-posed. Their keys are not reused.

## IQOQI Vienna problems not yet covered

Each of the 14 IQOQI open problems without an OQM entry was checked against the literature up to November 2026. DeepMind's Formal Conjectures project (milestone 11) mirrors the same list.

| IQOQI | Decision | Entry | Horizon / status |
|---|---|---|---|
| #1 All the Bell inequalities | Added | N15 | programme / Improved |
| #12 Bell inequalities for long-range vacuum correlations | Added | N16 | sharp / Open |
| #26 Bell inequalities holding for all quantum states | Added (bipartite part; the other parts are answered) | N17 | sharp / Improved |
| #32 Bell inequalities: many questions, a few answers | Added (item J, one-bit simulation of partially entangled qubit pairs) | N18 | sharp / Improved |
| #25 Lockable entanglement measures | Added | E20 | sharp / Open |
| #29 Entanglement of formation for Gaussian states | Added | E21 | sharp / Improved |
| #48 The entanglement cost of f-routing | Added | E22 | sharp / Improved |
| #14 Tough error models | Added (distinct from A18) | A32 | incremental / Open |
| #16 Complexity of product preparations | Added, in Kretschmer's precise model | A33 | sharp / Open |
| #40 Refinement of the Bessis–Moussa–Villani conjecture | Added: upper bound refuted, lower bound partly proved | M14 | sharp / Improved |
| #42 Reversible dynamics on composite systems | Added | F12 | sharp / Improved |
| #8 Qubit formula for relative entropy of entanglement | Not added: no precise success criterion; inverse problem solved, value computable | — | — |
| #31 Individual measurement strategies on geometrically uniform states | Not added: settled at the error-exponent level | — | — |
| #36 Composition of decoherence functionals | Not added: answered negatively via Dowker–Wilkes (2022), final step to be checked | — | — |

Totals after these additions: 146 active entries, 53 Improved, 20 Claimed solved and zero Solved.

## PSI results on IQOQI problems, Lewin's Coulomb problems, and multiparameter metrology

**PSI batch of 23 October 2026.** Five papers with Lean formalizations ([announcement](https://psi.inc/research/oqp-batch-2026/), [repository](https://github.com/physical-superintelligence/oqp-batch-2026), pinned at commit 7049357). The models used are listed per entry in `provenance`.

| Entry | Change |
|---|---|
| N16 Bell violation by the vacuum at large separations | Open → **Claimed solved** (Turturean). Negative answer for every radius; Lean verified according to PSI. |
| N14 The power of CGLMP inequalities | Open → Improved. Part B is claimed for projective measurements by PSI (Turturean and Bao) and by Mishra and Senthilkumar; general POVMs remain open. Part A was already answered in 2010: Bancal, Gisin and Pironio found non-CGLMP facets for d = 4. |
| C12 PPT-squared | Updated: any composition of 2(d−1) PPT maps is entanglement breaking. |
| F9 | Updated: claimed four-qubit counterexample to IQOQI #43 (purifiability of extensibly causal processes). |
| E1 | Updated: three-copy Werner results. Lean covers the qutrit case only, so the source carries no Lean badge. |

**Lewin, C. R. Physique 26, 369–380 (2025), [doi:10.5802/crphys.249](https://doi.org/10.5802/crphys.249).**

| Problem | Change |
|---|---|
| 1 Maximal ionization | M1 extended to molecules (statement, definition, residual); still Claimed solved on the OpenAI molecular theorem. |
| 2 Convexity of N ↦ E(V,N) | New entry M15 (open). |
| 3 Isomerization without dissociation | New entry M16 (open). |
| 4–5 Jellium symmetry breaking and the BCC lattice | New entry B19 (open); replaces the corresponding watchlist item. The BCC target requires a complete periodic/diffraction characterization up to Euclidean motions, not merely a subset of compatible peaks. |
| 6 Tools for the phase diagram | Context in B19, not a separate entry. |

**Five open problems in quantum information (PRX Quantum 3, 010101 (2022)).** Four were already covered (N1, N2, E1). The fifth, single-copy saturability of the multiparameter quantum Cramér–Rao bound, becomes N19 (sharp, Claimed solved).
- Nurdin's 2024 conditions were withdrawn for general POVMs by the published corrections.
- Yang, Imai and Pezzè, arXiv:2601.21801v1, claim a general necessary-and-sufficient geometric criterion and numerical algorithms that construct a saturating POVM. This is recorded as a pending resolution of the original measurement-level question, not merely as progress.
- Equality of the classical and quantum Fisher matrices does not by itself prove that one observed outcome admits an exactly locally unbiased estimator attaining covariance $F_Q^{-1}$. The entry now keeps that estimator-level question separate.
- Independent assessment, scalable certified algorithms and a simpler closed-form commutator criterion remain useful successor questions; the last is not substituted for the original PRX problem.

Totals after these changes: 150 active entries, 54 Improved, 22 Claimed solved and zero Solved.

## Validation

- `npm test`: catalogue tests pass, including new checks that N2 and M5 remain Claimed solved with their independent sources, and that QF1 remains Open with the mass gap still required.
- `npm run build`: production compilation and static-page generation succeed.

These checks validate the site and catalogue consistency, not the correctness of the research proofs. This report does not certify a production deployment.
