# Literature update, 23 November 2026: arXiv announcements of 20 and 23 November

This update checks catalogue entries against the arXiv announcements that followed the [20 November update](2026-11-20-literature-update.md), whose latest listing was dated Thursday 19 November. It covers the announcements of Friday 20 November and Monday 23 November; arXiv makes no announcement on Saturday or Sunday. Its scope is claimed solutions and substantive progress on existing entries. No new problems were looked for and no entries were added.

Before starting, `origin/main` was fetched; it had no unseen commits. There were no open pull requests or issues.

## Status change

| ID | Before | After | Reason |
| --- | --- | --- | --- |
| E26 · Krenn–Gu conjecture on GHZ graphs | Improved | **Claimed solved** | A full proof, with a Lean 4 formalization, has been public on GitHub since 26 September 2026. It was found through Krenn et al., arXiv:2611.26300, announced 20 November. |

**E26.** Krenn, Firsching, Tsoukalas, Gajjala, Gu and Chaudhuri, [*A Tensor-Algebraic No-Go Theorem for High-Dimensional Photonic Greenberger–Horne–Zeilinger States Discovered with AlphaProof Nexus*](https://arxiv.org/abs/2611.26300v1) (v1, 19 November 2026, 13 pp., read in full), prove that no complex-weighted monochromatic quantum graph exists for even $N\ge4$ when $D\ge N$. Multigraphs and bichromatic edges are allowed. The proof was found as a Lean proof by AlphaProof Nexus. Their Table I and outlook attribute a later proof of the *whole* conjecture to Rishi Rajasekaran, formally verified in Lean, which "no human has digested" yet. The catalogue did not mention that proof.

The proof is [*A two-replica proof of the Krenn–Gu conjecture*](https://github.com/rrajasek95/krenn-conjecture/blob/1db2e5a23d97e3b2d03c30c6d9af773111ec682b/proofs/krenn-gu-all-orders-paper.pdf) (22 pp., dated 26 September 2026, revised 27 September), in the repository `rrajasek95/krenn-conjecture`. It was read in full, including Appendices A and B. The PDF names no author. Its Theorem 1.2 is exactly the E26 statement: arbitrary complex weights and nonzero pure amplitudes, parallel and bichromatic edges, at least three colours and more than four vertices. The argument has three steps. Two formal copies of the matching polynomial and their complex orthogonal symmetries force every aggregate bichromatic weight to vanish (Lemma 4.2). The same method makes every supported edge carry the whole amplitude of its colour (Theorem 5.1). Each colour is then a perfect matching, and Bogdanov's three-matching obstruction (Lemma 7.1) yields a mixed matching whose amplitude cannot cancel.

The Lean development was inspected, not rebuilt. `formal/upstream-adapter/FullProof.lean` at commit `7f78a17` proves `eqSystem_no_solution_ge6_ge3` for the `WeightsN`/`EqSystemN` definitions of the Formal Conjectures file `FormalConjectures/Paper/MonochromaticQuantumGraph.lean`. It does so through an adapter and the palette-restriction lemma `no_solution_ge3_of_no_solution_d3`. The repository's axiom report (`formal/upstream-adapter/axioms.txt`) lists only `propext`, `Classical.choice` and `Quot.sound`. Formal Conjectures pull request #6627 marks the statement solved with this link. The PR branch was fetched and diffed. On `main`, as checked on 23 November, the statement is still marked `research open`, so the pull request has not been merged. Restricting colours along an injection preserves the equation system, so the normalized system with $D=3$ covers every GHZ graph of dimension at least 3. Odd vertex counts have no perfect matchings.

The entry is therefore **Claimed solved**, with the GitHub paper as `claimed-solution` evidence and Krenn et al. as progress. It also receives the Lean badge, because the full claimed statement is formalized. Krenn et al. describe the full proof as AI-assisted with Codex and Claude. The GitHub paper mentions only internal "agent audits", and both points are recorded in `provenance`. **The maintainer may prefer to wait for a human-digested account or a merged upstream proof before showing the Lean badge.** Doing so means removing the entry-level `lean` field, a one-line change.

## Progress without status change

| ID | Source, version and pages read | Decision |
| --- | --- | --- |
| **A3** · QMA versus QCMA | Alper Cakan, [*Classical Oracle Separation of QMA from the QCMA Hierarchy and Quantum Cryptography Even When P = QCMA*](https://arxiv.org/abs/2611.26574v1), v1 (19 November 2026), 145/145 pp. Posted on the STOC 2027 submission site since 3 November. | Progress, still relativized. Theorem 11 gives a standard classical oracle with fully adaptive unitary access relative to which $\mathsf P=\mathsf{BQP}=\mathsf{QCMA}=\mathsf{QCMAH}\subsetneq\mathsf{QMA}$, for the constant-depth QCMA hierarchy. The paper argues that the QMA languages of the earlier QMA/QCMA oracle separations lie in $\mathsf{AM}\subseteq\mathsf{QCMA}^{\mathsf{QCMA}}$. Theorem 19 builds quantum cryptographic primitives relative to a further random oracle under which $\mathsf P=\mathsf{QCMA}$. Its bibliography gives no arXiv number for the earlier QMA/QCIP paper; the catalogue's identifier for it, arXiv:2610.03648, is unchanged. The AI-use statement (Section 2.9, ChatGPT-6 Astra Ultra) is recorded in `provenance`. |
| **C2** · Quantum capacity of the thermal attenuator | Mele, Catalano, Fanizza, Giovannetti and Lami, [*Bosonic quantum communication beyond the thermal threshold*](https://arxiv.org/abs/2607.27449v2), v2 (replaced 19 November 2026, announced 20 November; 45/45 pp., Supplemental Material included). The catalogue cited v1. | Progress, still Improved. Two uses attain the multimode Gaussian optimum. That optimum equals the Holevo–Werner bound for $N_{\rm th}\ge\nu_c\approx0.296$ but exceeds it below $\nu_c$ (Theorem 1). Capacity is positive for every $N_{\rm th}>0$ when $\eta>(8N_{\rm th}^2+9N_{\rm th}+2)/[4(2N_{\rm th}+1)(N_{\rm th}+1)]$ (Theorem 2). For one photon, $0.75\le\eta_c\le0.7841$ is unchanged and $Q(\Phi_{0.8,1})\ge5\times10^{-4}$ (Theorem 3). A degradable-extension bound gives $Q=\log_2(1/\varepsilon)-g(N_{\rm th})-\varepsilon/\ln2+O(\varepsilon^2\log(1/\varepsilon))$ at weak loss, without an energy constraint (Theorem 4). The broader v2 AI statement replaces the v1 one in `provenance`, and in the proposal PC2's `ai` field. |
| **O10** · Gibbs preparation beyond high temperature | Gamarnik, Kiani and Zlokapa, [*Slow Mixing of Quantum Gibbs Samplers*](https://arxiv.org/abs/2411.04300v3), v3 (replaced 19 November 2026; 67/67 pp.). The catalogue cited v2. | Correction of the cited result. The transverse-field Ising bounds are unchanged: $\exp[\Omega(\sqrt n)]$, and $\exp[n^{1/2-o(1)}]$ for the Chen–Kastoryano–Gilyén sampler. The field window must now shrink as $\beta$ grows; a sufficient window is $\beta\ge1$, $h\le e^{-5\beta}$. The locality hypothesis is now placed on the jump operators and coherent terms, through squares of side at most $c_0\sqrt n/8$. v2's extension to all $h<1+o(1)$ is no longer stated. v3's AI acknowledgement is recorded. |

## Method

New submissions and cross-lists were taken from the `recent` listings of quant-ph, hep-th, gr-qc, math-ph, cond-mat (str-el, stat-mech, quant-gas, dis-nn), cs.CC, cs.IT, cs.DS, math.OA, math.SP, math.PR and math.FA. Only the sections dated 20 and 23 November were used. This gave **596 distinct identifiers** (339 on 20 November, 257 on 23 November; quant-ph alone had 96 and 69). The Monday `new` pages also listed 190 replacements. Titles, abstracts, comments and categories came from the arXiv API.

Every title was screened against the 227 active entries. The abstracts of 38 candidates were then read. The three papers that could change an entry were read in full, together with the GitHub paper above. The Cakan paper and the two revised sources were read in full by delegated readers, who kept incremental page-referenced notes. These notes are kept in the session workspace and summarized above. Full reading supports a scope assessment, not an independent verification of every proof.

New versions of cited sources were checked by querying the latest version of the **1,158 arXiv identifiers linked in `app/data/`**. Four had a version dated 19–20 November. C2 and O10 were updated as above. Two others were not substituted:

- arXiv:2609.04016v2 is cited only in a proposal, without a version, and its comment says "results unchanged".
- arXiv:2609.12527v2 (Laux–Cavalcanti, cited in F4 at v1 since 21 November) has no comment on its changes. It is left at v1 pending a reread.

The Friday `new` page with its replacement list was no longer online, so replacements of sources not cited in the catalogue may be missed.

## Candidates screened and not used

These papers were judged on their abstracts and, where noted, their main text. They are not cited in the catalogue.

- **B12**: Li and Lemm, arXiv:2611.27650 (main text read). They bound macroscopic particle transport for power-law hopping, with exponential suppression in the number of transported particles. The optimal light-cone exponent for macroscopic transport was already known (Van Vu, Kuwahara and Saito, Quantum 8, 1483), and B12 concerns information propagation.
- **R3**: Jack and Jones, arXiv:2611.27464. A perturbative $a$-function in non-integer critical dimensions, whereas R3 asks for a non-perturbative strict gradient flow in $d=2$ or $4$.
- **O10**: Kim, Yang and Lee, arXiv:2611.26626. Uniform Markov property and triviality of high-temperature Gibbs states; O10 asks about lower temperatures.
- **O10**: Becker, Singh and Teufel, arXiv:2611.27873. Uniqueness and locality of fermionic KMS states.
- **QG6**: Miki, Li and Chen, arXiv:2611.26755. An experimental protocol.
- **F9**: Marconi, arXiv:2611.27548. Capacity activation by the quantum switch.
- **E13**: Gharahi, arXiv:2611.25019. Graph inequalities derived from strong subadditivity.
- **N13**: Wu, Sicheng and Ramanathan, arXiv:2611.27413. Normal cones in $\mathcal Q_{2222}$.
- **A27**: Brakerski, Ozer and Silberstein, arXiv:2611.25038. Strong pseudorandom unitaries from Clifford–phase–permutation circuits, not random circuits.
- **U2, U3**: Kuo et al., arXiv:2611.25519. Complexity of bosonic Lindbladian fixed points.
- **M2**: Sabot, arXiv:2611.27863. A conjecture on the Cauchy-potential Anderson model.
- **QF3**: Zin and Veitia, arXiv:2611.27975. Lattice QED within a Gaussian photon approximation.
- **QF5**: Misumi, arXiv:2611.27307, and Yonekura, arXiv:2611.25749. Lattice chiral-fermion formulations.
- **B16**: Lieu, arXiv:2611.25030, and Sur and Mondaini, arXiv:2611.25286. Passive and emergent memories.
- **Outside the catalogue's questions:** Sun and Wang, arXiv:2611.26446 (degree of symmetric Boolean functions); Shao, arXiv:2611.26231 (DQC1 query complexity); Projansky et al., arXiv:2611.26315 (non-contextual Pauli Hamiltonians).

## Not read and not cited

- Kitamura's Formal Conjectures pull requests #4659 and #4661, listed in Krenn et al.'s Table I.
- The Chandran–Gajjala FSTTCS 2026 paper.

None of these is needed for the E26 decision.

## Validation

All 15 catalogue, rendering and KaTeX tests pass and `npm run build` succeeds. The active catalogue now has 97 Improved and 31 Claimed solved entries; the total of 227 active entries is unchanged.
