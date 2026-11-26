const r = String.raw;

export const COMPLEXITY = [
  { id: "A1", cat: "complexity", horizon: "sharp",
    title: "BPP versus BQP",
    statement: r`Determine whether $\mathsf{BPP}=\mathsf{BQP}$, or prove that efficient bounded-error quantum computation is strictly more powerful than efficient randomized classical computation.`,
    definition: r`**BPP versus BQP** asks whether efficient bounded-error quantum computation is strictly more powerful than efficient randomized classical computation. Since $\mathsf{P}\subseteq\mathsf{BPP}\subseteq\mathsf{BQP}\subseteq\mathsf{PSPACE}$, proving $\mathsf{BPP}\ne\mathsf{BQP}$ would also prove $\mathsf{P}\ne\mathsf{PSPACE}$.

This is a sharp equality question, even though an unconditional separation is a long-horizon challenge. It compares the same finite-input, bounded-error computation model; alternative data-access or output conventions belong in the methods discussion A16. Standard reference: Bernstein and Vazirani, “Quantum complexity theory”, SIAM J. Comput. 26 (1997), [doi:10.1137/S0097539796300921](https://doi.org/10.1137/S0097539796300921).`,
    progress: r`- Bernstein–Vazirani's recursive Fourier sampling and Simon's problem give oracle/query-model evidence.
- Shor's polynomial-time factoring algorithm is further evidence of quantum advantage ([arXiv:quant-ph/9508027](https://arxiv.org/abs/quant-ph/9508027)), but an exponential advantage for factoring is not proved: no superpolynomial classical lower bound is known.`,
    relations: [{ id: "A2", type: "related" }, { id: "A11", type: "related" }],
    refs: [
      { label: "Bernstein & Vazirani, 'Quantum complexity theory', SIAM J. Comput. 26 (1997)", url: "https://doi.org/10.1137/S0097539796300921" },
    ] },

  { id: "A2", cat: "complexity", horizon: "sharp",
    title: "NP versus BQP",
    statement: r`Determine whether $\mathsf{NP}\subseteq\mathsf{BQP}$; equivalently, whether an NP-complete decision problem has a polynomial-time bounded-error quantum algorithm.`,
    definition: r`**NP versus BQP** asks whether every NP problem, equivalently some NP-complete problem, has a polynomial-time bounded-error quantum algorithm. No NP-complete problem is known to be in BQP, and none is proved to lie outside it. The conjectural answer is that quantum computers cannot efficiently solve every NP problem, but this is an unrelativized containment question, not a theorem about generic search alone.

A resolution would distinguish quantum speedups for structured problems from efficient solution of all efficiently checkable search problems. Standard reference: Bennett, Bernstein, Brassard and Vazirani, SIAM J. Comput. 26 (1997), [arXiv:quant-ph/9701001](https://arxiv.org/abs/quant-ph/9701001).`,
    progress: r`- Bennett–Bernstein–Brassard–Vazirani establish black-box lower bounds, including the $\Omega(\sqrt{M})$ quantum-query cost of searching $M$ unstructured possibilities, matching Grover's algorithm. Their oracle results give evidence against the containment.`,
    residual: r`The oracle lower bounds do not rule out algorithms exploiting the structure of SAT or other NP-complete problems; an oracle-query lower bound is not an ordinary running-time lower bound.`,
    relations: [{ id: "A1", type: "related" }, { id: "A15", type: "related" }],
    refs: [
      { label: "Bennett, Bernstein, Brassard & Vazirani, 'Strengths and weaknesses of quantum computing', SIAM J. Comput. 26 (1997)", url: "https://arxiv.org/abs/quant-ph/9701001" },
    ] },

  { id: "A3", cat: "complexity", horizon: "sharp", status: "improved",
    provenance: [
      { summary: "Cakan attributes the results to himself and reports ChatGPT-6 Astra assistance with preliminary drafts, transcription, parameter choices and checking. He takes responsibility for the paper.", url: "https://arxiv.org/html/2610.03648v1", version: "v1" },
      { summary: "Cakan states that ChatGPT-6 Astra Ultra was used interactively for the classical-oracle state-preparation construction and its statistical analysis (Section 11), and afterwards for some parameter choices, correctness checks, and drafting and editing outside the abstract and Sections 1–2. He states that he verified everything and takes full responsibility.", url: "https://arxiv.org/abs/2611.26574v1", version: "v1" },
    ],
    reviewedAt: "2026-11-23",
    title: "QMA versus QCMA",
    statement: r`Determine whether quantum witnesses increase the power of polynomial-time quantum verification: $\mathsf{QMA}\stackrel{?}{=}\mathsf{QCMA}$, without an oracle.`,
    definition: r`**QMA versus QCMA**: QMA allows a polynomial-size quantum witness; QCMA restricts the witness to a classical string while retaining a quantum verifier. The question is whether some efficiently verifiable evidence fundamentally requires quantum information, without an oracle.

Aaronson and Kuperberg gave a quantum-oracle separation of the two classes, Theory of Computing 3 (2007), [theoryofcomputing.org/articles/v003a007](https://theoryofcomputing.org/articles/v003a007/).`,
    progress: r`- Bostanci, Huang and Vaikuntanathan give a simpler classical-oracle QMA/QCMA separation and extend it to quantum versus classical advice ([arXiv:2602.09385](https://arxiv.org/abs/2602.09385), February 2026, revised April 2026).
- Natarajan–Nirkhe's distribution-testing separation uses a randomized classical oracle ([Quantum 8, 1377 (2024)](https://quantum-journal.org/papers/q-2024-06-17-1377/)); Ben-David–Kundu's 2024 classical-oracle result restricts adaptivity ([arXiv:2402.00298](https://arxiv.org/abs/2402.00298)). These are important intermediate models, not the unrestricted classical-oracle theorem.
- The first standard classical-oracle separation is due to Bostanci, Haferkamp, Nirkhe and Zhandry: first posted in November 2025, revised in January 2026 and published at STOC 2026 ([arXiv:2511.09551](https://arxiv.org/abs/2511.09551v2)). It strengthens relativized evidence but does not settle the unrelativized question.
- On 2 October 2026 (v1), Cakan constructed a classical oracle relative to which QMA is not contained in QCIP, where a quantum verifier exchanges polynomially many classical messages with an unbounded prover ([arXiv:2610.03648](https://arxiv.org/abs/2610.03648v1)). This strengthens the earlier oracle separation from QCMA to classical interaction.
- On 5 October 2026 (v1), Cakan, Chung, Hung and Yang constructed a classical oracle relative to which $\mathsf{QCMA}\ne\mathsf{ClonableQMA}$ ([arXiv:2610.06740](https://arxiv.org/abs/2610.06740v1)). Even clonable quantum witnesses can therefore beat classical ones relative to a classical oracle, answering a question of Nehoran and Zhandry. The result concerns the mechanism behind relativized separations.
- On 19 November 2026 (v1; posted on the STOC 2027 submission site since 3 November), Cakan constructed a standard classical oracle, with fully adaptive unitary query access, relative to which $\mathsf{P}=\mathsf{BQP}=\mathsf{QCMA}=\mathsf{QCMAH}\subsetneq\mathsf{QMA}$, where $\mathsf{QCMAH}$ is the constant-depth hierarchy of QCMA oracles ([arXiv:2611.26574](https://arxiv.org/abs/2611.26574v1), Theorem 11). The query problem adds noise to codeword–hash pairs; the paper notes that the QMA languages of the earlier QMA/QCMA oracle separations lie in $\mathsf{AM}\subseteq\mathsf{QCMA}^{\mathsf{QCMA}}$. Relative to a further random oracle, several quantum cryptographic primitives exist although $\mathsf{P}=\mathsf{QCMA}$. Quantum proofs can thus help relative to a classical oracle even when classically verifiable quantum computation collapses to $\mathsf{P}$.`,
    residual: r`All these separations are relativized. The unrelativized QMA versus QCMA question remains open.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Classical oracle relative to which P = BQP = QCMA = QCMAH while QMA is not in the constant-depth QCMA hierarchy; relativized, not an unrelativized class separation.", url: "https://arxiv.org/abs/2611.26574v1", date: "2026-11-19", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Classical-oracle separation of ClonableQMA from QCMA; relativized, not an unrelativized class separation.", url: "https://arxiv.org/abs/2610.06740v1", date: "2026-10-05", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Classical-oracle separation of QMA from polynomial-round QCIP; does not separate the unrelativized classes.", url: "https://arxiv.org/abs/2610.03648v1", date: "2026-10-02", version: "v1" },
      { kind: "published", role: "progress", summary: "A standard classical oracle separates QMA from QCMA; the unrelativized equality remains open.", url: "https://arxiv.org/abs/2511.09551v2", version: "v2" }],
    relations: [{ id: "A4", type: "related" }, { id: "A5", type: "related" }, { id: "A10", type: "related" }],
    refs: [
      { label: "Alper Cakan, 'Classical Oracle Separation of QMA from the QCMA Hierarchy and Quantum Cryptography Even When P = QCMA' (2026 preprint, v1)", url: "https://arxiv.org/abs/2611.26574v1" },
      { label: "Bostanci, Huang & Vaikuntanathan, 'Separating Quantum and Classical Advice with Good Codes' (2026 preprint)", url: "https://arxiv.org/abs/2602.09385" },
      { label: "Cakan, Chung, Hung & Yang, 'Separating ClonableQMA and QCMA Relative to a Classical Oracle' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.06740v1" },
      { label: "Alper Cakan, 'Separating QMA from QCIP with a Classical Oracle, or, the Power of Quantum Proofs over Classical Interaction for Quantum Verifiers' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.03648v1" },
      { label: "Aaronson & Kuperberg, 'Quantum versus classical proofs and advice', Theory of Computing 3 (2007)", url: "https://theoryofcomputing.org/articles/v003a007/" },
      { label: "Natarajan & Nirkhe, 'A distribution testing oracle separation between QMA and QCMA', Quantum 8, 1377 (2024)", url: "https://quantum-journal.org/papers/q-2024-06-17-1377/" },
      { label: "Ben-David & Kundu, 'Oracle separation of QMA and QCMA with bounded adaptivity' (2024)", url: "https://arxiv.org/abs/2402.00298" },
      { label: "Bostanci, Haferkamp, Nirkhe & Zhandry, 'Separating QMA from QCMA with a classical oracle', STOC 2026", url: "https://arxiv.org/abs/2511.09551v2" },
    ] },

  { id: "A4", cat: "complexity", horizon: "sharp", status: "claimed-solved",
    reviewedAt: "2026-09-28",
    provenance: [
      { summary: "The authors credit generative AI with the core proof idea and extensive proof and drafting assistance; no model is named. They report subsequent verification, simplification and responsibility.", url: "https://arxiv.org/html/2609.13032v1", version: "v1" },
    ],
    title: "Perfect completeness for finite-register QMA",
    statement: r`In the finite-register circuit model with Hadamard, $T$ and CNOT gates and computational-basis initialization/measurement, determine whether $\mathsf{QMA}_1=\mathsf{QMA}$. Here $\mathsf{QMA}_1$ requires acceptance probability exactly one for some witness on every yes-instance.`,
    definition: r`**Perfect completeness** for QMA asks whether every QMA verifier can be replaced by one that accepts some witness with probability exactly one on yes-instances ($\mathsf{QMA}_1$). Ordinary QMA permits completeness error; $\mathsf{QMA}_1$ does not. Exact acceptance is sensitive to the gate convention, so approximate universality alone cannot be used to transfer a perfect-completeness theorem between models.

Aaronson constructed a quantum oracle relative to which $\mathsf{QMA}_1\ne\mathsf{QMA}$, Quantum Inf. Comput. 9 (2009), [arXiv:0806.0450](https://arxiv.org/abs/0806.0450). This is a quantum-oracle obstruction, not a classical-oracle separation and not an equality theorem.`,
    progress: r`- Jeffery and Witteveen prove $\mathsf{QMA}=\mathsf{QMA}^{\infty}=\mathsf{QMA}_1^{\infty}$ when the verifier has their specified infinite-dimensional counter with an efficient shift operation ([arXiv:2506.15551](https://arxiv.org/abs/2506.15551)). The result, posted in June 2025, removes completeness error using an additional infinite register. Truncation also gives stronger finite-dimensional completeness amplification, but not exactly perfect completeness in ordinary finite-register QMA, so this theorem does not answer the finite-register question.`,
    claim: r`**Grewal and Rudolph, [“QMA has perfect completeness”](https://arxiv.org/abs/2609.13032v1)** (arXiv:2609.13032, v1, 11 September 2026).

What it claims:
- $\mathsf{QMA}=\mathsf{QMA}_1$ using finite registers and Hadamard, Toffoli and $X$ gates; no infinite counter is needed.
- An exact-gate corollary covers Clifford+$T$, hence the convention in the statement.
- Quantum 3-SAT consequently becomes QMA-complete.
- The construction relativizes to classical oracles, not arbitrary quantum oracles, so it does not contradict Aaronson's quantum-oracle obstruction.

Caveats:
- A single preprint, not peer reviewed, and no independent assessment was found. Hence “Claimed solved” rather than “Solved”.
- The authors credit generative AI with the core proof idea and extensive proof and drafting assistance, without naming a model; they report subsequent verification and simplification.`,
    evidence: [
      { kind: "preprint", role: "claimed-solution", summary: "Claimed finite-register QMA perfect completeness with exact gates, including Clifford+T; addresses A4 directly, pending assessment.", url: "https://arxiv.org/abs/2609.13032v1", date: "2026-09-11", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Perfect completeness is achievable with a specified infinite counter; this does not settle the ordinary finite-register problem.", url: "https://arxiv.org/abs/2506.15551", date: "2025-06-18", version: "v1" }],
    relations: [{ id: "A3", type: "related" }, { id: "A8", type: "related" }],
    refs: [
      { label: "Grewal & Rudolph, 'QMA has perfect completeness' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.13032v1" },
      { label: "Aaronson, 'On perfect completeness for QMA', Quantum Inf. Comput. 9 (2009)", url: "https://arxiv.org/abs/0806.0450" },
      { label: "Jeffery & Witteveen, 'QMA = QMA1 with an infinite counter' (2025 preprint)", url: "https://arxiv.org/abs/2506.15551" },
    ] },

  { id: "A5", cat: "complexity", horizon: "sharp", status: "improved",
    reviewedAt: "2026-11-26",
    title: "Multiple unentangled quantum proofs",
    statement: r`Determine whether $\mathsf{QMA}(2)=\mathsf{QMA}$, or whether two polynomial-size witnesses promised to be unentangled increase verification power.`,
    definition: r`**QMA(2)** is the class of problems verifiable with two polynomial-size quantum witnesses promised to be unentangled. The verifier may jointly process the two witnesses, but the honest and cheating witnesses must be product across the two prover registers. The product-state optimization underlying this model connects it to separability and tensor optimization.

Harrow and Montanaro showed that polynomially many unentangled witnesses collapse to two, with the usual constant completeness–soundness gap, J. ACM 60 (2013), [arXiv:1001.0017](https://arxiv.org/abs/1001.0017).`,
    progress: r`- Very short proofs require attention to the gap: logarithmic-size protocols with inverse-polynomial gap are not the same claim as the $\widetilde O(\sqrt n)$-size, constant-gap two-witness protocols for NP problems.
- In July 2026, Beckey, Jeronimo and Wu determined the exact worst-case product-test acceptance curve over all product overlaps and finite local dimensions ([arXiv:2607.21477](https://arxiv.org/abs/2607.21477v1)). This settles the low-overlap analysis and strengthens one-shot soundness of a key reduction, without settling the class comparison.
- In September 2026, Bostanci et al. constructed a quantum oracle separating QMA(2) from QMA ([arXiv:2609.02865](https://arxiv.org/abs/2609.02865v1)). They also prove Watrous's geometric no-disentanglers conjecture (the stronger quantitative Aaronson-et-al. version was refuted) at constant errors $\varepsilon+\delta<1$: an approximate disentangler needs exponentially many input qubits in the number of output qubits. The class separation is relativized; the geometric theorem is not. Neither proves an unrelativized separation.
- On 30 September 2026 (v1), Della Schiava and Mataraarachchi claimed $\mathsf{QMA}(2;h)=\mathsf{QMA}(2)$ for $h=O(\log n)$ shared EPR pairs ([arXiv:2609.39668](https://arxiv.org/abs/2609.39668v3)). The resource is a bounded shared-entanglement budget during witness preparation, not arbitrary entangled witnesses. Larger budgets and the comparison with ordinary QMA remain unresolved.
- On 5 October 2026 (revised 4 November 2026), Grewal, Mutreja and Tomer constructed a classical oracle relative to which $\mathsf{QMA}\ne\mathsf{QMA(2)}$ ([arXiv:2610.06760](https://arxiv.org/abs/2610.06760v2)). Their separable-Hamiltonian problem uses signed edge constraints on a graph. YES instances have zero-energy product states, while NO instances have entangled zero-energy states built from the antisymmetric subspace but no low-energy product states. Compressed-oracle techniques bound QMA verifiers. This answers the classical-oracle version of the question.`,
    residual: r`The unrelativized comparison of QMA(2) with QMA remains open. The general upper bound is $\mathsf{QMA}(2)\subseteq\mathsf{NEXP}$; the intermediate target $\mathsf{QMA(2)}\subseteq\mathsf{EXP}$ is also open.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Classical-oracle separation of QMA from QMA(2) via a signed-edge separable-Hamiltonian problem; relativized, not an unrelativized class separation.", url: "https://arxiv.org/abs/2610.06760v2", date: "2026-11-04", version: "v2" },
      { kind: "preprint", role: "progress", summary: "Logarithmically many shared EPR pairs do not increase QMA(2) in the specified model; not QMA(2)=QMA. Current version v3, 14 October 2026.", url: "https://arxiv.org/abs/2609.39668v3", date: "2026-10-14", version: "v3" },
      { kind: "preprint", role: "progress", summary: "Exact product-test acceptance curve, including the previously open low-overlap regime.", url: "https://arxiv.org/abs/2607.21477v1", date: "2026-07-23", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Quantum-oracle QMA(2)/QMA separation and an unrelativized no-disentanglers theorem at constant errors with epsilon + delta < 1.", url: "https://arxiv.org/abs/2609.02865v1", date: "2026-09-02", version: "v1" },
    ],
    provenance: [
      { summary: "Grewal, Mutreja and Tomer report that the original proof was obtained in about ten rounds of interaction with ChatGPT 6 Astra; they verified the arguments independently, revised the proofs and link the original AI-generated manuscript.", url: "https://arxiv.org/abs/2610.06760v1", version: "v1" },
      { summary: "Della Schiava and Mataraarachchi's v3 states that GPT-5.6 Sol, GPT-6 Astra and Claude 5.0 Opus contributed substantially to the research and the manuscript, comparably to a primary human contributor: GPT-5.6 Sol generated the four-witness simulation behind Result 3 from the authors' notes, GPT-6 Astra later found a direct two-witness simulation, interactions with the models led to Results 1 and 2, and GPT-6 Astra's treatment of logarithmic-size witnesses led to Result 4. The authors revised the manuscript in full and take responsibility for the claims. (The v1 statement was shorter.)", url: "https://arxiv.org/abs/2609.39668v3", version: "v3" },
      { summary: "Product-test authors report ChatGPT 5.5 Pro assistance with analysis, ChatGPT/Claude assistance with writing and exploratory Codex-supported Lean work; they report human verification and responsibility for the manuscript.", url: "https://arxiv.org/abs/2607.21477v1", version: "v1" },
      { summary: "The September authors report that ChatGPT 5.6 Sol suggested the central proof idea after prompts about She–Yuen, and that they verified, simplified and developed it. This records their disclosure, not an independent provenance audit.", url: "https://arxiv.org/abs/2609.02865v1", version: "v1" },
    ],
    relations: [{ id: "A3", type: "related" }, { id: "E3", type: "related" }],
    refs: [
      { label: "Grewal, Mutreja & Tomer, 'A classical oracle separation between QMA and QMA(2)' (2026 preprint, v2)", url: "https://arxiv.org/abs/2610.06760v2" },
      { label: "Alex Della Schiava, Ranitha Mataraarachchi, 'QMA(2) with Limited Shared Entanglement' (2026 preprint, v3)", url: "https://arxiv.org/abs/2609.39668v3" },
      { label: "Harrow & Montanaro, 'Testing product states, quantum Merlin-Arthur games and tensor optimization', J. ACM 60 (2013)", url: "https://arxiv.org/abs/1001.0017" },
      { label: "Aaronson, Beigi, Drucker, Fefferman & Shor, 'The power of unentanglement', Theory of Computing 5 (2009)", url: "https://theoryofcomputing.org/articles/v005a001/" },
      { label: "Beckey, Jeronimo & Wu, 'An Optimal Analysis of the Product Test' (2026 preprint)", url: "https://arxiv.org/abs/2607.21477v1" },
      { label: "Bostanci et al., 'A quantum oracle separation between QMA(2) and QMA' (2026 preprint)", url: "https://arxiv.org/abs/2609.02865v1" },
    ] },

  { id: "A6", cat: "complexity", horizon: "sharp",
    reviewedAt: "2026-10-26",
    provenance: [
      { summary: "Bafna, Nguyen and Zhang state that none of the ideas were generated by AI and that ChatGPT 5.4 and Claude Opus 4.6 assisted with elementary calculations and parameter choices in several lemmas.", url: "https://arxiv.org/html/2610.04952v1", version: "v1" },
    ],
    title: "Quantum PCP conjecture",
    statement: r`For $H=m^{-1}\sum_{i=1}^{m}h_i$, with fixed locality and local dimension and $0\le h_i\le I$, prove or disprove that distinguishing $\lambda_{\min}(H)\le a$ from $\lambda_{\min}(H)\ge b$ is $\mathsf{QMA}$-hard for some constant promise gap $b-a>0$.`,
    definition: r`**The quantum PCP conjecture**, in its Hamiltonian form, asserts that approximating the ground energy of local Hamiltonians to a constant promise gap in energy density is QMA-hard. The normalization in the statement makes this a constant energy-density approximation problem, or equivalently a constant extensive error for the unnormalized sum. The local terms have finite efficiently specified descriptions. Variants of probabilistically checkable quantum proofs require care about the verifier and reduction model.

The ordinary local-Hamiltonian promise problem is QMA-complete at inverse-polynomial precision, not for exact real-valued energy output. Survey: Aharonov, Arad and Vidick, “The quantum PCP conjecture”, SIGACT News (2013), [arXiv:1309.7495](https://arxiv.org/abs/1309.7495).`,
    progress: r`- Anshu, Breuckmann and Nirkhe proved NLTS: there are bounded-locality Hamiltonian families whose sufficiently low-energy states cannot be prepared by constant-depth local circuits ([arXiv:2206.13228](https://arxiv.org/abs/2206.13228)). Good quantum codes enable that result, but NLTS is weaker than quantum PCP and does not exclude every succinct classical description of a low-energy state.
- Published 2025 work clarifies quantum-PCP definitions (Buhrman, Helsen and Weggemans, [Quantum 9, 1791 (2025)](https://quantum-journal.org/papers/q-2025-07-11-1791/)).
- In October 2025, Bergamaschi, Metger, Vidick and Zhang developed derandomized tensor-product gap amplification under their stated hypotheses ([arXiv:2510.01333](https://arxiv.org/abs/2510.01333)). Neither this nor the 2025 definitional work supplies the complete constant-gap QMA-hardness reduction.
- In September 2026, Gay and Jeronimo proposed a good qLTC construction, recorded in A7 ([arXiv:2609.20780](https://arxiv.org/abs/2609.20780v1)). Constant local-test soundness for a code Hamiltonian is not a reduction proving QMA-hardness of constant-gap ground-energy approximation, so the claimed A7 resolution is not a proof of quantum PCP.
- On 4 October 2026 (v1; accepted to FOCS 2026), Bafna, Nguyen and Zhang gave a template for locality-preserving gap amplification of local Hamiltonians ([arXiv:2610.04952](https://arxiv.org/abs/2610.04952v1)), modelled on fault-tolerant distributed computation, the high-dimensional-expander classical PCP of Bafna–Minzer–Vyas and the Anshu–Breuckmann–Nguyen circuit-to-Hamiltonian construction. They prove amplification of the combinatorial gap at fixed locality with a moderate increase in local dimension. This is a tool rather than a reduction.`,
    residual: r`The complete constant-gap QMA-hardness reduction is still missing. In particular, amplifying the energy gap of the statement above, and alphabet reduction, are not established.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Locality-preserving amplification of the combinatorial gap of local Hamiltonians at fixed locality; energy-gap amplification and alphabet reduction are not established, so quantum PCP remains open.", url: "https://arxiv.org/abs/2610.04952v1", date: "2026-10-04", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Related good-qLTC claim supplies no constant-gap QMA-hardness reduction; quantum PCP remains open.", url: "https://arxiv.org/abs/2609.20780v1", date: "2026-09-17", version: "v1" },
      { kind: "published", role: "progress", summary: "NLTS is proved; excluding constant-depth circuit preparation is not the full quantum PCP conjecture.", url: "https://arxiv.org/abs/2206.13228" },
      { kind: "preprint", role: "progress", summary: "Derandomized tensor-product gap amplification advances the amplification toolkit without resolving quantum PCP.", url: "https://arxiv.org/abs/2510.01333" },
    ],
    relations: [{ id: "A7", type: "related" }, { id: "A8", type: "related" }],
    refs: [
      { label: "Bafna, Nguyen & Zhang, 'Gap Amplification for Local Hamiltonians with Combinatorial Soundness' (2026 preprint, v1; accepted to FOCS 2026)", url: "https://arxiv.org/abs/2610.04952v1" },
      { label: "Gay & Jeronimo, 'Asymptotically Good Quantum Locally Testable Codes' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.20780v1" },
      { label: "Anshu, Breuckmann & Nirkhe, 'NLTS Hamiltonians from good quantum codes', STOC 2023", url: "https://arxiv.org/abs/2206.13228" },
      { label: "Buhrman, Helsen & Weggemans, 'Quantum PCPs: on Adaptivity, Multiple Provers and Reductions to Local Hamiltonians', Quantum 9, 1791 (2025)", url: "https://quantum-journal.org/papers/q-2025-07-11-1791/" },
      { label: "Bergamaschi, Metger, Vidick & Zhang, 'Derandomised tensor product gap amplification for quantum Hamiltonians' (2025 preprint)", url: "https://arxiv.org/abs/2510.01333" },
    ] },

  { id: "A7", cat: "complexity", horizon: "sharp", status: "claimed-solved",
    reviewedAt: "2026-11-08",
    evidence: [
      { kind: "preprint", role: "progress", summary: "Almost-good qLDPC and quantum locally testable codes with transversal multi-controlled-Z gates; polylogarithmic losses in distance and soundness.", url: "https://arxiv.org/abs/2604.01874v2", date: "2026-07-02", version: "v2" },

      { kind: "preprint", role: "progress", summary: "Good qLTCs conditional on the required lossless cubical complexes; their existence is not established in this manuscript.", url: "https://arxiv.org/abs/2610.00525v2", date: "2026-10-05", version: "v2" },
      { kind: "preprint", role: "claimed-solution", summary: "Claimed explicit good binary CSS qLTCs with all required parameters constant; full resolution claim awaiting assessment.", url: "https://arxiv.org/abs/2609.20780v1", date: "2026-09-17", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Separate good-qLTC construction conditional on a Reed–Solomon product-expansion conjecture.", url: "https://arxiv.org/abs/2609.26735v1", date: "2026-09-22", version: "v1" },
    ],
    provenance: [
      { summary: "The authors report ChatGPT and Codex assistance with exposition and calculations, including a preliminary Lemma 4.3 developed in a guided GPT-5.5 conversation. They attribute the main ideas to humans and report reviewing the assisted material.", url: "https://arxiv.org/html/2610.00525v1", version: "v1" },
      { summary: "Gay and Jeronimo report that the general direction was human; ChatGPT Pro versions 5 to 6 were used, with only 5.6 and 6 Pro materially helping to orchestrate some expander–code interactions, and ChatGPT 6 Pro serving as an editorial assistant. They take responsibility for the results. They also state that they released the paper at an earlier point in light of rumours that OpenAI had solved several major TCS problems, a reason for additional caution before assessment.", url: "https://arxiv.org/html/2609.20780v1", version: "v1" },
      { summary: "Bafna, Li and Nguyen state that they prompted GPT 6 to construct quantum LTCs in the Dinur–Lin–Vidick framework assuming the Reed–Solomon product-expansion conjecture; the model's construction uses a variant of that conjecture, which they then studied and traced to the literature. GPT 6 also offered a proof of the conjecture, which the authors did not verify and did not include.", url: "https://arxiv.org/abs/2609.26735v1", version: "v1" },
    ],
    title: "Good quantum locally testable codes",
    statement: r`Construct stabilizer quantum locally testable codes with constant rate, linear distance, constant check weight and degree, and constant soundness $s>0$. For $m$ checks on $n$ qubits, require $|\operatorname{syn}(E)|/m\ge s\,\min_{F:\operatorname{syn}(F)=0}\operatorname{wt}(EF)/n$ for every Pauli error $E$.`,
    definition: r`**A good quantum locally testable code** (qLTC) is a stabilizer code with constant rate, linear distance, constant check weight and degree, whose checks detect every error in proportion to its distance from the code space (constant soundness). The syndrome counts violated checks. Distance in the soundness inequality is distance to the code space: errors are considered modulo zero-syndrome operators, including logical operators, not just modulo stabilizers. This distinguishes local testability from ordinary error-correction distance.

Panteleev and Kalachev constructed asymptotically good quantum LDPC codes, with constant rate and linear distance, STOC 2022, [doi:10.1145/3519935.3520017](https://doi.org/10.1145/3519935.3520017). Good qLDPC codes and NLTS do not by themselves establish constant local-test soundness, and quantum PCP should not be identified with this particular stabilizer-code construction problem.`,
    progress: r`- Later quantum Tanner constructions provide another route to good qLDPC codes. Earlier fibre-bundle and balanced-product breakthroughs had different parameters and should not all be credited with the full good-code theorem.
- Dinur, Lin and Vidick construct almost-good qLTCs with constant rate, bounded-size checks and inverse-polylogarithmic relative distance and soundness ([arXiv:2402.07476](https://arxiv.org/abs/2402.07476)). This does not reach the simultaneous constant-parameter target.
- Li, Li and Liu (v1 of April 2026; v2 of 2 July 2026) constructed qLDPC and quantum locally testable codes with parameters $[[N,\Theta(N),\tilde\Theta(N)]]$ and soundness $\tilde\Theta(1)$, supporting transversal logical multi-controlled-$Z$ gates ([arXiv:2604.01874](https://arxiv.org/abs/2604.01874v2)). The v2 replaces a cap-product argument the authors found invalid in v1. These are almost good: distance and soundness are polylogarithmically below optimal.
- On 22 September 2026, Bafna, Li and Nguyen obtained good qLTCs conditional on a variant of the Reed–Solomon product-expansion conjecture ([arXiv:2609.26735](https://arxiv.org/abs/2609.26735v1)). This conditional construction is distinct from Gay–Jeronimo's unconditional claim.
- On 30 September 2026 (v2 of 5 October 2026), Cohen, Leigh, Reiner, Ta-Shma and Tzalik derived good qLTCs from sufficiently imbalanced, two-sided lossless four-dimensional cubical complexes ([arXiv:2610.00525](https://arxiv.org/abs/2610.00525v2)). They explicitly do not construct the required complexes. Their local-to-global expansion theorem supplies another conditional route; it is not an independent verification of Gay–Jeronimo's claim or a proof of quantum PCP.`,
    claim: r`**Gay and Jeronimo, [“Asymptotically Good Quantum Locally Testable Codes”](https://arxiv.org/abs/2609.20780v1)** (arXiv:2609.20780, v1, 17 September 2026).

What it claims:
- Explicit binary CSS families with constant rate, linear distance, bounded check weight and qubit incidence, and constant soundness (Theorem 2.4.3).
- The product-expansion argument is supplied within the manuscript, so the construction is unconditional.

Caveats:
- Not peer reviewed, and no independent assessment was found. Hence “Claimed solved” rather than “Solved”.
- The later conditional constructions of Bafna–Li–Nguyen and Cohen et al. are separate routes, not verifications.
- The authors report that the general direction was human; ChatGPT Pro versions 5 to 6 were used, with 5.6 and 6 Pro materially helping to orchestrate some expander–code interactions. They also state that they released the paper earlier in light of rumours that OpenAI had solved several major TCS problems, a reason for additional caution before assessment.
- Neither this nor any other code construction alone supplies the constant-gap QMA-hardness reduction required by A6.`,
    relations: [{ id: "A6", type: "related" }, { id: "A18", type: "related" }],
    refs: [
      { label: "Li, Li & Liu, 'Transversal non-Clifford gates on almost-good quantum LDPC and quantum locally testable codes' (2026 preprint, v2)", url: "https://arxiv.org/abs/2604.01874v2" },
      { label: "Itay Cohen, Itai Leigh, Assaf Reiner, Amnon Ta-Shma, Elad Tzalik, 'Good Quantum Locally Testable Codes from Lossless Cubical Complexes' (2026 preprint, v2)", url: "https://arxiv.org/abs/2610.00525v2" },
      { label: "Gay & Jeronimo, 'Asymptotically Good Quantum Locally Testable Codes' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.20780v1" },
      { label: "Bafna, Li & Nguyen, 'Good Quantum Locally Testable Codes from Product Expansion' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.26735v1" },
      { label: "Panteleev & Kalachev, 'Asymptotically good quantum and locally testable classical LDPC codes', STOC 2022", url: "https://doi.org/10.1145/3519935.3520017" },
      { label: "Dinur, Lin & Vidick, 'Expansion of higher-dimensional cubical complexes with application to quantum locally testable codes', FOCS 2024 (almost-good qLTCs)", url: "https://arxiv.org/abs/2402.07476" },
    ] },

  { id: "A8", cat: "complexity", horizon: "sharp",
    title: "Classical witnesses for commuting local Hamiltonians",
    statement: r`For every fixed locality $k$ and local dimension $d$, is the commuting-projector local-Hamiltonian promise problem in $\mathsf{NP}$? The input has polynomially many commuting $k$-local projectors with finite rational/algebraic descriptions and inverse-polynomially separated ground-energy thresholds; no interaction geometry is assumed.`,
    definition: r`**The commuting local Hamiltonian problem** is the local-Hamiltonian ground-energy problem restricted to pairwise commuting terms. Commuting terms have a common eigenbasis, but a useful eigenstate need not have an obvious efficiently verifiable classical description. Topological order can occur even in frustration-free commuting models, such as the toric code; it does not require frustration.

Bravyi and Vyalyi proved that two-local commuting Hamiltonians are in NP at every fixed local dimension, Quantum Inf. Comput. 5 (2005), [arXiv:quant-ph/0308021](https://arxiv.org/abs/quant-ph/0308021).`,
    progress: r`- Three-local qubit instances are also in NP. Results for four-local qubits, including Schuch's square-lattice case, have geometric hypotheses; they are not blanket theorems for arbitrary four-local interactions.
- Irani and Jiang treat the two-dimensional qutrit setting and factorized two-dimensional interactions ([doi:10.1007/s00220-025-05462-8](https://doi.org/10.1007/s00220-025-05462-8)).
- Bostanci and Hwang (ITCS 2026) prove NP membership for the rank-one two-dimensional case without a local-dimension restriction, and for a specified rank-one three-dimensional family with qudits on edges ([arXiv:2410.10495](https://arxiv.org/abs/2410.10495)).`,
    residual: r`Rank, geometry and local dimension are essential parts of these theorems. General fixed-locality NP membership remains open.`,
    evidence: [{ kind: "published", role: "progress", summary: "ITCS 2026 proves NP membership for specified rank-one 2D and 3D commuting Hamiltonians, not arbitrary commuting local Hamiltonians.", url: "https://drops.dagstuhl.de/storage/00lipics/lipics-vol362-itcs2026/html/LIPIcs.ITCS.2026.25/LIPIcs.ITCS.2026.25.html" }],
    relations: [{ id: "A4", type: "related" }, { id: "A6", type: "related" }],
    refs: [
      { label: "Bravyi & Vyalyi, 'Commutative version of the local Hamiltonian problem and common eigenspace problem', Quantum Inf. Comput. 5 (2005)", url: "https://arxiv.org/abs/quant-ph/0308021" },
      { label: "Irani & Jiang, 'Commuting local Hamiltonian problem on 2D beyond qubits', Commun. Math. Phys. (2025)", url: "https://doi.org/10.1007/s00220-025-05462-8" },
      { label: "Bostanci & Hwang, 'Commuting Local Hamiltonians Beyond 2D', ITCS 2026", url: "https://arxiv.org/abs/2410.10495" },
    ] },

  { id: "A9", cat: "complexity", horizon: "sharp", status: "improved",
    title: "StoqMA versus MA and error amplification",
    statement: r`Determine whether $\mathsf{StoqMA}=\mathsf{MA}$. A central route is to establish general completeness-and-soundness error amplification for StoqMA while preserving the verifier model.`,
    definition: r`**StoqMA** is the Merlin–Arthur class associated with stoquastic Hamiltonians, which have nonpositive off-diagonal matrix elements in a specified basis. Their ground-energy complexity motivates StoqMA, introduced by Bravyi, Bessen and Terhal following the earlier stoquastic-Hamiltonian work of Bravyi, DiVincenzo, Oliveira and Terhal. The known containments include $\mathsf{MA}\subseteq\mathsf{StoqMA}\subseteq\mathsf{QMA}\cap\mathsf{SBP}$ and $\mathsf{SBP}\subseteq\mathsf{AM}$. Absence of a sign problem is not a general efficient-simulation theorem.

This is a sharp class-comparison question. Standard reference: Bravyi, Bessen and Terhal, “Merlin-Arthur games and stoquastic complexity” (2006), [arXiv:quant-ph/0611021](https://arxiv.org/abs/quant-ph/0611021).`,
    progress: r`- Aharonov, Grilo and Liu show that suitable general StoqMA error reduction would imply equality with MA ([Quantum 9, 1853 (2025)](https://quantum-journal.org/papers/q-2025-09-11-1853/)).
- Liu proves soundness-reduction and other restricted results ([arXiv:2011.05733](https://arxiv.org/abs/2011.05733v3)), but the general completeness-amplification obstacle remains.
- In July 2026, Karakashian and Hen proposed vanishing geometric phase (VGP) as a wider Hamiltonian class ([arXiv:2607.18596](https://arxiv.org/abs/2607.18596v1)). They establish StoqMA-completeness of the VGP local-Hamiltonian problem, MA membership of its frustration-free variant, hard-to-stoquastize examples, and PSPACE-completeness of recognizing VGP in their general geometrically local setting. These results refine the landscape without settling StoqMA = MA or general error amplification.
- On 6 November 2026 (v1), Hamoudi, Le Borgne and Teganahally Sridhara proved $\mathsf{MA}\subsetneq\mathsf{StoqMA}$ relative to a classical oracle ([arXiv:2611.08180](https://arxiv.org/abs/2611.08180v1)). The separating problem asks whether a sparse high-girth graph, given by an adjacency-list oracle, has a large or small Perron–Frobenius eigenvalue, a stoquastic ground-energy task. As with any oracle separation, it follows that relativizing techniques cannot prove StoqMA = MA; an error-amplification route to equality would therefore need a non-relativizing step.`,
    residual: r`The unrelativized StoqMA versus MA question, and general error amplification for StoqMA, remain open.`,
    reviewedAt: "2026-11-08",
    evidence: [
      { kind: "preprint", role: "progress", summary: "Classical-oracle separation $\\mathsf{MA}\\subsetneq\\mathsf{StoqMA}$ via a Perron–Frobenius eigenvalue problem on oracle-given sparse high-girth graphs. Relativized; it does not decide the unrelativized equality.", url: "https://arxiv.org/abs/2611.08180v1", date: "2026-11-06", version: "v1" },
      { kind: "preprint", role: "progress", summary: "VGP Hamiltonian complexity and recognition results; no resolution of StoqMA versus MA.", url: "https://arxiv.org/abs/2607.18596v1", date: "2026-07-21", version: "v1" }],
    provenance: [
      { summary: "Hamoudi, Le Borgne and Teganahally Sridhara report using ChatGPT 5.6 while searching for a suitable NO-instance construction; it helped identify an NP protocol for an earlier construction.", url: "https://arxiv.org/abs/2611.08180v1", version: "v1" },
    ],
    relations: [{ id: "B11", type: "related" }],
    refs: [
      { label: "Hamoudi, Le Borgne & Teganahally Sridhara, 'Quantum Advantage with Sign-Free Proofs: An Oracle Separation between StoqMA and MA' (2026 preprint, v1)", url: "https://arxiv.org/abs/2611.08180v1" },
      { label: "Bravyi, Bessen & Terhal, 'Merlin-Arthur Games and Stoquastic Complexity' (2006)", url: "https://arxiv.org/abs/quant-ph/0611021" },
      { label: "Bravyi, DiVincenzo, Oliveira & Terhal, 'The complexity of stoquastic local Hamiltonian problems', Quantum Inf. Comput. 8 (2008)", url: "https://arxiv.org/abs/quant-ph/0606140" },
      { label: "Aharonov, Grilo & Liu, 'StoqMA vs. MA: the power of error reduction', Quantum 9, 1853 (2025)", url: "https://quantum-journal.org/papers/q-2025-09-11-1853/" },
      { label: "Liu, 'StoqMA meets distribution testing', TQC 2021", url: "https://arxiv.org/abs/2011.05733v3" },
      { label: "Karakashian & Hen, 'Dismantling the Stoquastic Dichotomy' (2026 preprint)", url: "https://arxiv.org/abs/2607.18596v1" },
    ] },

  { id: "A10", cat: "complexity", horizon: "sharp",
    title: "Quantum search-to-decision reductions",
    statement: r`Can a polynomial-time quantum algorithm, with polynomially many coherent queries to a QMA-complete decision oracle, prepare an accepting witness for every yes-instance of a given QMA verifier? Require bounded overall failure probability and inverse-polynomial accuracy, under the standard promise-oracle convention.`,
    definition: r`**A search-to-decision reduction** for QMA would prepare an accepting quantum witness using only an oracle for the corresponding decision problem. Search reduces to decision for SAT by fixing bits of a satisfying assignment. A quantum witness is a state; learning or fixing its amplitudes is not an analogous polynomial-length self-reduction. Oracle access, output accuracy and the underlying verification promise must therefore be stated.

Standard reference: Irani, Natarajan, Nirkhe, Rao and Yuen, “Quantum search-to-decision reductions and the state synthesis problem”, CCC 2022, [arXiv:2111.02999](https://arxiv.org/abs/2111.02999).`,
    progress: r`- Irani, Natarajan, Nirkhe, Rao and Yuen prove that one coherent query to a suitable PP oracle suffices for witness synthesis to inverse-polynomial accuracy, with efficient quantum post-processing.
- They also exhibit a quantum oracle relative to which QMA search does not reduce to QMA decision. The stronger PP upper bound and the relativized QMA obstruction are compatible.`,
    residual: r`The unrelativized QMA-decision-oracle question remains open. It concerns producing a usable accepting state, not returning a classical description of all its amplitudes, and is one precise part of the broader state-synthesis programme.`,
    relations: [{ id: "A3", type: "related" }, { id: "A5", type: "related" }],
    refs: [
      { label: "Irani, Natarajan, Nirkhe, Rao & Yuen, 'Quantum search-to-decision reductions and the state synthesis problem', CCC 2022", url: "https://arxiv.org/abs/2111.02999" },
    ] },

  { id: "A11", cat: "complexity", horizon: "sharp", status: "claimed-solved",
    lean: { url: "https://github.com/physical-superintelligence/aaronson-ambainis", note: "The full conjecture, in Aaronson and Ambainis's normalisation, is formalized in Lean 4 according to PSI; the build was not rerun here." },
    reviewedAt: "2026-11-12",
    title: "Aaronson–Ambainis influential-variable conjecture",
    statement: r`Do universal constants $c,C>0$ exist such that every multilinear $p:\{-1,1\}^{n}\to[0,1]$ of degree $d\ge1$ and positive variance has some variable $i$ with $\operatorname{Inf}_i(p)\ge c(\operatorname{Var}(p)/d)^C$? Use the uniform measure and $\operatorname{Inf}_i(p)=\mathbb E[(p(x)-p(x^{\oplus i}))^2]/4$.`,
    definition: r`**The Aaronson–Ambainis conjecture** states that every bounded low-degree polynomial on the Boolean cube has a variable whose influence is polynomially related to its variance. Here $x^{\oplus i}$ flips the $i$th sign. The conjecture is an exact analytic statement, independent of implementation costs.

Aaronson and Ambainis show it would imply that a $T$-query quantum algorithm's acceptance probability can be approximated within additive $\varepsilon$ on a $1-\delta$ fraction of uniformly random Boolean inputs using $\operatorname{poly}(T,1/\varepsilon,1/\delta)$ classical queries, Theory of Computing 10 (2014), [theoryofcomputing.org/articles/v010a006](https://theoryofcomputing.org/articles/v010a006/). This simulation consequence concerns acceptance probabilities on most inputs; it is not a worst-case simulation theorem for every promise problem, nor a theorem that a classical algorithm samples the full quantum output distribution.`,
    progress: r`- In August 2026, Blanc, Docter, Strassle and Tan proved an analogous acceptance-probability simulation for $t$ queries in $d$ parallel query rounds, with $t^{O(d^2)}$ classical queries at fixed approximation and failure parameters ([arXiv:2608.19158](https://arxiv.org/abs/2608.19158v1)). The result is accepted at FOCS 2026 (8–11 November 2026).
- Liu and Mutreja independently established parallel-query simulations with bounded-prefix and constant-round extensions, with different quantitative bounds, already in v1 of 20 August 2026 ([arXiv:2608.20297](https://arxiv.org/abs/2608.20297v2), revised 20 October 2026). Their proof couples uniform oracles and dense oracle distributions; these extensions are not new to v2.
- Constantly many oracle-query rounds are thus a positive restricted case; physical gate depth, unrestricted adaptive queries and sampling advantage are separate notions. These bounded-round results were moved here from A16.
- On 4 September 2026 (v1), Escudero Gutiérrez, Saucedo and Palazuelos proved optimal inequalities for completely bounded polynomials, including an optimal root-influence bound for block-multilinear forms, with improved limitations on quantum query algorithms ([arXiv:2609.05201](https://arxiv.org/abs/2609.05201v1)). The added completely bounded structure does not cover every bounded low-degree polynomial, and the paper restates the general conjecture as open.
- On 28 September 2026 (v1), Girish, Mittal, Nehoran and Raz proved equivalence of the influential-variable conjecture under the uniform measure, fixed-bias product measures and fixed-density Hamming slices ([arXiv:2609.35327](https://arxiv.org/abs/2609.35327v1)). They separately establish analogous equivalences for the weaker average-input query-simulation conjecture. These reductions transfer the open questions between distributions; they prove neither conjecture.`,
    claim: r`**David Turturean (PSI), [“A proof of the Aaronson–Ambainis conjecture”](https://github.com/physical-superintelligence/aaronson-ambainis/blob/main/paper/aaronson_ambainis_paper.pdf)** (paper and Lean 4 formalization on [GitHub](https://github.com/physical-superintelligence/aaronson-ambainis), announced by Physical Superintelligence on [6 November 2026](https://psi.inc/research/aaronson-ambainis/); posted on arXiv the same day as [arXiv:2611.09773](https://arxiv.org/abs/2611.09773v1), v1 announced 9 November 2026).

What it claims:
- For every real polynomial $p$ of degree at most $d$ with $0\le p\le1$ on $\{0,1\}^N$ and variance at least $\varepsilon>0$, some variable has influence at least $\tfrac{8\sqrt{15}}{125\pi^4}\,\varepsilon^{5/2}/d^6\ge(\varepsilon/d)^7$ in the original Aaronson–Ambainis normalization, $\mathbb E[(p(X)-p(X^{\oplus i}))^2]$. In the statement's normalization with a factor $1/4$, both lower bounds are divided by four. This still gives the conjecture's universal polynomial bound with explicit exponents.
- A Lean 4 formalization (Mathlib) whose top-level statement, defined in a file that imports only Mathlib, is the conjecture in Aaronson and Ambainis's normalisation.
- By Aaronson and Ambainis's reduction, the claim implies that quantum query algorithms can be classically simulated, up to polynomial overhead, on most uniformly random inputs.

Caveats:
- Not peer reviewed, and the Lean build was not rerun here. Hence “Claimed solved” rather than “Solved”.
- PSI states that the proof was found by an internal research system running a non-public Anthropic model; the arXiv version carries the same disclosure.
- Independent engagement (November 2026). Blanc, Docter, Strassle and Tan posted an exposition of the proof, organized in four steps, with weaker exponents than the original (10 November 2026, v1) ([arXiv:2611.11626](https://arxiv.org/abs/2611.11626v1)). Huffstutler, Miloschewsky and Podder give a short proof through their completion framework. Its only input from Turturean's paper is a special case of Turturean's certificate inequality, which they reprove; they also derive the bounded-polynomial influence form (10 November 2026, v1) ([arXiv:2611.12795](https://arxiv.org/abs/2611.12795v1)). Both are preprints by experts outside PSI, not refereed assessments.`,
    residual: r`If the claim holds, both the influential-variable conjecture and its average-case query-simulation consequence are settled. The optimal exponents remain open: averaging dictator functions shows that an exponent of at least 2 on the variance is necessary, and the PSI paper asks whether 2 is achievable. A16 retains the input/output/data-access comparison methods and the historical record; it is not counted as a second conjecture.`,
    evidence: [
      { kind: "preprint", role: "claimed-solution", summary: "Claimed proof of the Aaronson–Ambainis conjecture with influence at least (8√15/(125π⁴))·ε^(5/2)/d⁶, formalized in Lean 4; first released as a GitHub paper with code, then on arXiv; not peer reviewed.", lean: true, url: "https://arxiv.org/abs/2611.09773v1", date: "2026-11-06", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Short independent proof via the completion framework, reproving the special case of Turturean's certificate inequality it uses; also derives the bounded-polynomial influence form.", url: "https://arxiv.org/abs/2611.12795v1", date: "2026-11-10", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Exposition of Turturean's proof by Blanc, Docter, Strassle and Tan, with weaker exponents; an expert reading, not a refereed assessment.", url: "https://arxiv.org/abs/2611.11626v1", date: "2026-11-10", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Optimal completely bounded polynomial inequalities and resulting limits on quantum query algorithms; the general Aaronson–Ambainis conjecture is restated as open.", url: "https://arxiv.org/abs/2609.05201v1", date: "2026-09-04", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Equivalence of uniform, fixed-bias and fixed-density-slice variants, separately for influence and query simulation; the original conjectures remain open.", url: "https://arxiv.org/abs/2609.35327v1", date: "2026-09-28", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Bounded-round acceptance-probability simulation on most uniform inputs, with t^{O(d^2)} classical queries at fixed error parameters; accepted to FOCS 2026.", url: "https://arxiv.org/abs/2608.19158v1", date: "2026-08-19", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Parallel-query simulations with constant-round and bounded-prefix extensions already in v1 (20 August 2026); v2 revised 20 October. Sampling and unrestricted adaptivity are different targets.", url: "https://arxiv.org/abs/2608.20297v2", date: "2026-10-20", version: "v2" },
    ],
    provenance: [
      { summary: "PSI states that a research system developed internally, running instances of a non-public Anthropic model, found the proof and its Lean formalization; the paper is credited to David Turturean (PSI). This is PSI's account.", url: "https://psi.inc/research/aaronson-ambainis/" },
      { summary: "The arXiv version states that its mathematical statements were produced by AI models, instances of a non-public Anthropic model running in a harness that Turturean built at PSI, and that the author prompted such a model to draft the paper, then reviewed and edited it and takes responsibility for its correctness.", url: "https://arxiv.org/abs/2611.09773v1", version: "v1" },
      { summary: "Blanc, Docter, Strassle and Tan state that the proof was shared with them by its discoverer, that Anthropic's public models were used while preparing the exposition, and that they received no compensation from Anthropic or PSI.", url: "https://arxiv.org/abs/2611.11626v1", version: "v1" },
      { summary: "Huffstutler, Miloschewsky and Podder report exploring the completion-framework route with ChatGPT 5.6 and 6 in the preceding months; Turturean's certificate inequality supplied the ingredient they had been missing.", url: "https://arxiv.org/abs/2611.12795v1", version: "v1" },
      { summary: "Escudero Gutiérrez, Saucedo and Palazuelos acknowledge ChatGPT Pro in the proof of Theorem 1.4, obtained in conversations about deriving a junta theorem.", url: "https://arxiv.org/abs/2609.05201v1", version: "v1" },
      { summary: "The authors credit Gemini with the inner-gadget idea in Lemma 3.7 and ChatGPT with other proofs and exposition, reporting material assistance across the technical results and author verification of the content.", url: "https://arxiv.org/html/2609.35327v1", version: "v1" },
      { summary: "Blanc et al. report ChatGPT 5.4 use for literature search, note transcription, proof checking and copyediting; this is an author disclosure, not independent verification of the workflow.", url: "https://arxiv.org/abs/2608.19158v1", version: "v1" },
      { summary: "Liu–Mutreja report that ChatGPT 5.5 Pro, prompted on their Theorem 1.6, suggested key ideas for the proof of their adaptivity extension (Theorem 1.8); they describe the prompting and take responsibility for the proofs.", url: "https://arxiv.org/html/2608.20297v2", version: "v2" },
    ],
    relations: [{ id: "A1", type: "related" }, { id: "A16", type: "related" }],
    refs: [
      { label: "Escudero Gutiérrez, Saucedo & Palazuelos, 'Optimal inequalities for completely bounded polynomials and the limitations of quantum query algorithms' (2026 preprint, v1) (found via the QIQCOP Zoo)", url: "https://arxiv.org/abs/2609.05201v1" },
      { label: "Uma Girish, Kunal Mittal, Barak Nehoran, Ran Raz, 'Distributional Variants of the Aaronson-Ambainis Conjecture' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.35327v1" },
      { label: "Aaronson & Ambainis, 'The need for structure in quantum speedups', Theory of Computing 10 (2014)", url: "https://theoryofcomputing.org/articles/v010a006/" },
      { label: "Turturean (PSI), 'A proof of the Aaronson–Ambainis conjecture' (GitHub paper and Lean 4 formalization, November 2026)", url: "https://github.com/physical-superintelligence/aaronson-ambainis" },
      { label: "Physical Superintelligence, 'A proof of the Aaronson-Ambainis conjecture' (announcement, 6 November 2026)", url: "https://psi.inc/research/aaronson-ambainis/" },
      { label: "Turturean, 'A proof of the Aaronson-Ambainis conjecture' (2026 preprint, v1)", url: "https://arxiv.org/abs/2611.09773v1" },
      { label: "Blanc, Docter, Strassle & Tan, 'Proof of the Aaronson-Ambainis Conjecture: An Exposition' (2026 preprint, v1)", url: "https://arxiv.org/abs/2611.11626v1" },
      { label: "Huffstutler, Miloschewsky & Podder, 'A short proof of the Aaronson-Ambainis Conjecture via the completion framework' (2026 preprint, v1)", url: "https://arxiv.org/abs/2611.12795v1" },
      { label: "Blanc, Docter, Strassle & Tan, 'Quantum Speedups Require Structure or Depth' (2026 preprint; FOCS 2026)", url: "https://arxiv.org/abs/2608.19158v1" },
      { label: "Liu & Mutreja, 'Parallel Quantum Advantage with Limited Adaptivity Requires Structure' (2026 preprint, v2)", url: "https://arxiv.org/abs/2608.20297v2" },
    ] },

  { id: "A12", cat: "complexity", horizon: "sharp", status: "improved",
    title: "Approximate average-case hardness for BosonSampling",
    statement: r`Prove average-case approximate hardness for complex-Gaussian permanents, together with a robust reduction strong enough to rule out polynomial-time classical sampling within inverse-polynomial total-variation error for standard BosonSampling under standard worst-case complexity assumptions.`,
    definition: r`**BosonSampling** asks to sample the photon-detection pattern of identical photons sent through a random linear-optical interferometer. Its output probabilities involve squared permanents of interferometer submatrices, and appropriate submatrices approach Gaussian matrices in the relevant hiding regime.

The Aaronson–Arkhipov route to approximate-sampling hardness needs average-case approximate permanent hardness and anticoncentration, not merely worst-case hardness or exact probability evaluation. Standard reference: Aaronson and Arkhipov, “The computational complexity of linear optics”, Theory of Computing 9 (2013), [arXiv:1011.3245](https://arxiv.org/abs/1011.3245).`,
    progress: r`- In July 2026, Koehler and Leung claimed the full permanent anticoncentration conjecture via a complex-Gaussian small-ball estimate ([arXiv:2607.20329](https://arxiv.org/abs/2607.20329v1)). This closes that ingredient at preprint level. Exact-sampling consequences under noncollapse assumptions should not be substituted for the approximate target.
- In August 2026, Shou, Gorshkov, Galitski and Miller proved the Gaussian-BosonSampling hiding conjecture with $K$ equally squeezed inputs in the regime $N=o(\sqrt K)$, where $N$ is the detected-photon number ([arXiv:2608.19314](https://arxiv.org/abs/2608.19314v1)). Go, Jeong and Oh established average-case hardness of probability estimation for threshold and parity BosonSampling in a linear-mode regime ([arXiv:2608.24008](https://arxiv.org/abs/2608.24008v1)). Neither proves the stated approximate-sampling theorem for standard BosonSampling.
- In September 2026, Zhao proved quantitative hiding bounds and anticoncentration for hafnians of Gaussian transpose-Gram and independent complex symmetric Gaussian matrices, the Gaussian-BosonSampling counterpart of the permanent anticoncentration step, with parts formalized in Lean ([arXiv:2609.01008](https://arxiv.org/abs/2609.01008v2), [arXiv:2610.00112](https://arxiv.org/abs/2610.00112v1)).
- On 21 October 2026 (v1), Go and Jeong gave a polynomial-time classical sampler for lossy BosonSampling whenever a constant fraction of the $N$ input photons survives, in the fixed-loss model with uniformly random loss and in the uniform-transmission model at any fixed transmission rate, within total-variation error $\varepsilon$ with high probability over Haar-random interferometers ([arXiv:2610.27065](https://arxiv.org/abs/2610.27065v1)). This extends the provably simulable regime from $O(\sqrt{\varepsilon N})$ surviving photons to linear survival.
- Between 3 and 6 November 2026 (v1), two further preprints extended this picture. Lim covers any fixed nonzero uniform loss rate, for Fock-state and equally squeezed Gaussian inputs ([arXiv:2611.01434](https://arxiv.org/abs/2611.01434v1)). Angrisani and Mhiri cover fixed thermal or pure loss, and also fermion sampling with magic inputs ([arXiv:2611.08444](https://arxiv.org/abs/2611.08444v1)).`,
    residual: r`Approximate average-case permanent hardness, with a reduction robust enough for the sampling statement, remains open for ideal, noiseless BosonSampling. Additive average-case hardness of squared hafnians, the Gaussian-BosonSampling analogue, also remains open.

The loss results concern lossy experiments, not the ideal problem. They bound where noisy experiments can claim hardness and narrow the robustness that any hardness reduction for noisy BosonSampling could offer.`,
    reviewedAt: "2026-11-08",
    evidence: [
      { kind: "preprint", role: "progress", summary: "Explicit total-variation hiding bound for Gaussian BosonSampling uniformly over the number of squeezed inputs, and relative-accuracy routes via local hafnian bounds.", url: "https://arxiv.org/abs/2609.01008v2", date: "2026-09-11", version: "v2" },
      { kind: "preprint", role: "progress", summary: "Center-uniform small-ball bounds for Gaussian hafnians, giving anticoncentration for the independent complex symmetric Gaussian ensemble; an ingredient, not a hardness theorem.", url: "https://arxiv.org/abs/2610.00112v1", date: "2026-09-09", version: "v1" },

      { kind: "preprint", role: "progress", summary: "Polynomial-time classical simulation of lossy BosonSampling at any constant surviving fraction over Haar-random interferometers; a simulability result for lossy experiments, not a hardness theorem for the ideal problem.", url: "https://arxiv.org/abs/2610.27065v1", date: "2026-10-21", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Efficient average-case classical sampling for Fock and equally squeezed Gaussian BosonSampling at any fixed nonzero uniform loss rate. A noisy regime.", url: "https://arxiv.org/abs/2611.01434v1", date: "2026-11-03", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Unified polynomial-time simulation of boson and fermion sampling under fixed thermal or pure loss, at inverse-polynomial total-variation error over Haar-random interferometers. A noisy regime.", url: "https://arxiv.org/abs/2611.08444v1", date: "2026-11-06", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Claims the complex-Gaussian permanent anticoncentration conjecture; approximate average-case hardness is still missing.", url: "https://arxiv.org/abs/2607.20329v1", date: "2026-07-22", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Hiding theorem for Gaussian BosonSampling with equally squeezed inputs in the stated N = o(sqrt K) regime.", url: "https://arxiv.org/abs/2608.19314v1", date: "2026-08-19", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Average-case probability-estimation hardness for threshold/parity variants, not a general approximate-sampling theorem.", url: "https://arxiv.org/abs/2608.24008v1", date: "2026-08-25", version: "v1" },
    ],
    provenance: [
      { summary: "Zhao states responsibility for the mathematical content and reports GPT-5.6 Sol and GPT-6 Astra Ultra assistance with literature search, restructuring, algebraic checks, figures and LaTeX and Lean preparation.", url: "https://arxiv.org/abs/2610.00112v1", version: "v1" },
{ summary: "Shou et al. report GPT-5.5 Thinking/Pro and GPT-5.6 Sol use for proof ideas, methods, checking and proofreading, and say they wrote the paper and checked every result and proof.", url: "https://arxiv.org/abs/2608.19314v1", version: "v1" },
      { summary: "Go and Jeong state that generative AI assisted with analytical cross-checks and editing, and that they reviewed all outputs and take responsibility.", url: "https://arxiv.org/html/2610.27065v1", version: "v1" },
      { summary: "Lim reports obtaining the main results personally, with GPT-6 and Fable 5.1 used under the author's direction to explore and sharpen arguments, check calculations and edit text.", url: "https://arxiv.org/abs/2611.01434v1", version: "v1" },
      { summary: "Angrisani and Mhiri report using ChatGPT (GPT-5.2 through 6 Astra) to identify the polynomial basis and literature, prove technical results and draft parts of the manuscript.", url: "https://arxiv.org/abs/2611.08444v1", version: "v1" }],
    relations: [{ id: "A13", type: "related" }],
    refs: [
      { label: "Zhao, 'Uniform Hiding and Two Routes to Relative Accuracy in Gaussian Boson Sampling' (2026 preprint, v2)", url: "https://arxiv.org/abs/2609.01008v2" },
      { label: "Zhao, 'Local Anticoncentration for Gaussian Boson Sampling via Conditional Wishart Geometry' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.00112v1" },
      { label: "Lim, 'Boson sampling is fragile to loss' (2026 preprint, v1)", url: "https://arxiv.org/abs/2611.01434v1" },
      { label: "Angrisani & Mhiri, 'Polynomial-time classical simulation of boson and fermion sampling under thermal loss' (2026 preprint, v1)", url: "https://arxiv.org/abs/2611.08444v1" },
      { label: "Aaronson & Arkhipov, 'The computational complexity of linear optics', Theory of Computing 9 (2013)", url: "https://arxiv.org/abs/1011.3245" },
      { label: "Koehler & Leung, 'Anticoncentration of the Permanent in Ginibre Ensembles' (2026 preprint)", url: "https://arxiv.org/abs/2607.20329v1" },
      { label: "Shou et al., 'Proof of the hiding conjecture for Gaussian boson sampling with an arbitrary number of squeezed input modes' (2026 preprint)", url: "https://arxiv.org/abs/2608.19314v1" },
      { label: "Go, Jeong & Oh, 'Threshold and Parity BosonSampling in the Linear-Mode Regime' (2026 preprint)", url: "https://arxiv.org/abs/2608.24008v1" },
      { label: "Go & Jeong, 'Polynomial-Time Classical Simulation of BosonSampling under Any Constant-Fraction Photon Loss' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.27065v1" },
    ] },

  { id: "A13", cat: "complexity", horizon: "sharp",
    evidence: [
      { kind: "preprint", role: "progress", summary: "Hardness transition for noisy random circuit sampling, conditional on the ideal average-case hardness conjecture.", url: "https://arxiv.org/abs/2607.20804v1", date: "2026-07-23", version: "v1" },
    ],
    reviewedAt: "2026-11-08",
    title: "Approximate hardness of random-circuit sampling",
    statement: r`Consider $n$ qubits on a square grid, with $n^3$ layers cycling through the four horizontal/vertical even/odd matchings and independent Haar-random two-qubit gates. Prove that a polynomial-time classical sampler within total-variation distance $1/n$ of the ideal output on at least a $1-1/n$ fraction of these circuits would collapse the polynomial hierarchy, using only standard worst-case complexity assumptions.`,
    definition: r`**Random-circuit sampling** asks to sample the computational-basis output of a random quantum circuit applied to the all-zero state. For finite input, each sampled gate in the statement is specified to operator-norm precision $2^{-n^3}$ using polynomially many bits. This deliberately deep benchmark fixes the ensemble, precision, error and success fraction; a shallower depth or a constant-error theorem is a distinct stronger target.

Standard reference: Bouland, Fefferman, Nirkhe and Vazirani, “On the complexity and verification of quantum random circuit sampling”, Nat. Phys. 15 (2019), [arXiv:1803.04402](https://arxiv.org/abs/1803.04402).`,
    progress: r`- Bouland, Fefferman, Nirkhe and Vazirani give worst-to-average reductions for exact output probabilities.
- Movassagh's Cayley-path approach strengthens robustness at high precision ([arXiv:1909.06210](https://arxiv.org/abs/1909.06210)).
- Anticoncentration is available for suitable sufficiently deep ensembles.
- On 23 July 2026 (v1), Go, Oh and Jeong showed, assuming average-case $\#\mathsf P$-hardness for ideal output probabilities, an architecture-general hardness bound on noisy random-circuit sampling ([arXiv:2607.20804](https://arxiv.org/abs/2607.20804v1)). That conjecture is a missing ingredient for the sampling-hardness statement here, rather than the statement itself.`,
    residual: r`The missing ingredient is hardness at an approximation scale strong enough for the total-variation sampling reduction, not exact arithmetic alone.

Noisy experimental output distributions are separate targets. Classical simulation results at constant noise strength have assumptions on the noise, depth, circuit ensemble and approximation criterion; they are not a universal theorem for every noisy quantum circuit. The question above is for ideal circuits.`,
    relations: [{ id: "A12", type: "related" }, { id: "A11", type: "related" }],
    refs: [
      { label: "Go, Oh & Jeong, 'Hardness and Complexity Transition of Noisy Random Circuit Sampling' (2026 preprint, v1)", url: "https://arxiv.org/abs/2607.20804v1" },
      { label: "Bouland, Fefferman, Nirkhe & Vazirani, 'On the complexity and verification of quantum random circuit sampling', Nat. Phys. 15 (2019)", url: "https://arxiv.org/abs/1803.04402" },
      { label: "Movassagh, 'Quantum supremacy and random circuits' (2019 preprint, v4 2020)", url: "https://arxiv.org/abs/1909.06210" },
    ] },

  { id: "A14", cat: "complexity", horizon: "sharp",
    title: "Graph isomorphism in BQP",
    statement: r`Does graph isomorphism on $n$-vertex graphs admit a uniform polynomial-time bounded-error quantum algorithm?`,
    definition: r`**Graph isomorphism** asks whether two graphs are related by a vertex relabelling. It is in NP, with neither a polynomial-time classical algorithm nor NP-completeness known.

Babai's quasipolynomial-time classical algorithm is the comparison baseline, not a proof that a polynomial-time quantum algorithm is unnecessary or impossible: Babai, “Graph isomorphism in quasipolynomial time”, STOC 2016, [arXiv:1512.03547](https://arxiv.org/abs/1512.03547).`,
    progress: r`- The hidden-subgroup route uses permutation groups. Hallgren, Moore, Rötteler, Russell and Sen show that extracting useful information from the relevant coset states requires joint measurements on $\Omega(n\log n)$ states, matching an information-theoretic upper bound ([J. ACM 57 (2010)](https://www.cse.psu.edu/~sjh26/multireg.pdf)). This excludes single- and few-register approaches in that model. It does not prove that every sufficiently joint measurement has superpolynomial implementation complexity, or that all quantum approaches fail.`,
    relations: [{ id: "A15", type: "related" }],
    refs: [
      { label: "Hallgren, Moore, Rötteler, Russell & Sen, 'Limitations of quantum coset states for graph isomorphism', J. ACM 57 (2010)", url: "https://www.cse.psu.edu/~sjh26/multireg.pdf" },
      { label: "Babai, 'Graph isomorphism in quasipolynomial time', STOC 2016", url: "https://arxiv.org/abs/1512.03547" },
    ] },

  { id: "A15", cat: "complexity", horizon: "programme",
    title: "Quantum complexity of specified lattice regimes",
    statement: r`Determine the quantum running-time frontier for search and decision LWE with explicitly specified dimension $n$, modulus $q$, error distribution and sample access, and for SVP/CVP with stated approximation factor. A focal LWE regime has polynomial modulus and inverse-polynomial relative Gaussian error; hardness must be assessed for each concrete parameter family.`,
    definition: r`**Learning With Errors** (LWE) samples have the form $(a,\langle a,s\rangle+e\bmod q)$; decision LWE distinguishes these from uniform, while search LWE recovers the secret. The noise width, modulus, number of samples and algebraic structure are part of the problem. Plain LWE, module/ring variants, and worst-case approximate lattice problems should not be treated as interchangeable.

Regev's reduction relates suitable LWE regimes to worst-case approximate lattice problems using quantum computation, J. ACM 56 (2009), [arXiv:2401.03703](https://arxiv.org/abs/2401.03703). It is a conditional hardness reduction, not a quantum algorithm breaking LWE.`,
    progress: r`- Known quantum techniques can improve exponential running-time constants, so “no quantum improvement” would be too strong; such improvements are different from a polynomial-time algorithm.`,
    residual: r`The running-time frontier must be determined for each concrete parameter family. Security conclusions require the exact parameter family and reduction; the safety or failure of deployed cryptographic schemes does not follow from the unresolved broad programme.`,
    relations: [{ id: "A2", type: "related" }, { id: "A14", type: "related" }],
    refs: [
      { label: "Regev, 'On lattices, learning with errors, random linear codes, and cryptography', J. ACM 56 (2009; arXiv deposit 2024)", url: "https://arxiv.org/abs/2401.03703" },
    ] },

  { id: "A16", cat: "complexity", horizon: "programme", status: "improved",
    archive: { kind: "merged", targets: ["A11"], reason: "The precise query-simulation conjecture and bounded-round advances are consolidated in A11. The remaining model-comparison discussion is retained as methods background, not a second independently counted problem." },
    title: "Comparing quantum speedups: models and query structure",
    statement: r`Methods background: compare algorithms only after fixing input preparation, data access, allowed oracle queries, output format, accuracy, success probability and computational resources. The concrete open influential-variable question is A11.`,
    definition: r`**Comparing quantum speedups** requires fixing input preparation, data access, allowed oracle queries, output format, accuracy, success probability and computational resources before comparing algorithms.

Aaronson's “Read the fine print” explains the role of state preparation, condition numbers and readout in proposed linear-algebra speedups, Nat. Phys. 11 (2015), [doi:10.1038/nphys3272](https://doi.org/10.1038/nphys3272). Such examples motivate explicit resource accounting, not a universal test for all future quantum algorithms.`,
    progress: r`- Tang's classical recommendation algorithm shows how granting analogous classical sampling access can remove a claimed exponential advantage in that specific model ([arXiv:1807.04271](https://arxiv.org/abs/1807.04271)).
- In August 2026, Blanc, Docter, Strassle and Tan simulated acceptance probabilities of $t$-query, $d$-round quantum algorithms on most uniformly random inputs using $t^{O(d^2)}$ classical queries at fixed errors ([arXiv:2608.19158](https://arxiv.org/abs/2608.19158v1)). Liu and Mutreja independently established constant-round and limited-adaptivity results ([arXiv:2608.20297](https://arxiv.org/abs/2608.20297v2)). Here “round” means parallel oracle-query round, not arbitrary physical gate depth. The results do not simulate every output distribution or every worst-case input.`,
    residual: r`The full statements, the open influential-variable conjecture and the author-reported disclosures are recorded under A11.`,
    relations: [{ id: "A11", type: "parent" }, { id: "A1", type: "related" }, { id: "N10", type: "related" }],
    refs: [
      { label: "Tang, 'A quantum-inspired classical algorithm for recommendation systems', STOC 2019", url: "https://arxiv.org/abs/1807.04271" },
      { label: "Aaronson, 'Read the fine print', Nat. Phys. 11 (2015)", url: "https://doi.org/10.1038/nphys3272" },
      { label: "Blanc, Docter, Strassle & Tan, 'Quantum Speedups Require Structure or Depth' (2026 preprint, v1)", url: "https://arxiv.org/abs/2608.19158v1" },
      { label: "Liu & Mutreja, 'Parallel Quantum Advantage with Limited Adaptivity Requires Structure' (2026 preprint, v2)", url: "https://arxiv.org/abs/2608.20297v2" },
    ] },

  { id: "A17", cat: "complexity", horizon: "incremental", status: "improved",
    reviewedAt: "2026-09-10",
    title: "Quantum state certification with local measurements",
    statement: r`Given a full classical description of an arbitrary reference state $\sigma$ and copies of an unknown $N$-qubit state $\rho$, determine the optimal copy complexity of testing $\rho=\sigma$ versus $\|\rho-\sigma\|_1\ge\varepsilon$, with success at least $2/3$, using adaptive single-qubit Pauli measurements and no entangling measurements within or across copies. Seek matching instance-dependent bounds and the accompanying classical running time.`,
    definition: r`**Quantum state certification** asks to test whether copies of an unknown state equal a known reference state or are far from it in trace distance. A full reference-state description can itself be exponentially long in $N$; computational costs must count its input length. Rank, spectrum and the reference eigenbasis relative to the allowed local measurements can matter. This concrete certification target is distinct from estimating an unknown state's spectral functional or learning many observable expectations.

Haah, Harrow, Ji, Wu and Yu establish sample-optimal tomography bounds in their collective-measurement model, IEEE Trans. Inf. Theory 63 (2017), [arXiv:1508.01797](https://arxiv.org/abs/1508.01797).`,
    progress: r`- In August 2026, Wang gave a framework with nearly tight lower bounds for entropy, closeness and spectrum estimation and for rank testing ([arXiv:2608.02600](https://arxiv.org/abs/2608.02600v3)); its 8 September 2026 v3 adds Schmidt-rank and MPS testing and is retitled as a unified complexity framework for quantum property testing; v4 appeared on 29 October 2026.
- In August 2026, Acharya, Dharmavarapu, Liu and Yu nearly determined mixedness testing under single-qubit Pauli measurements, with $\widetilde\Theta((\sqrt{10})^N/\varepsilon^2)$ copies ([arXiv:2608.18839](https://arxiv.org/abs/2608.18839v1)); their 21 September 2026 v2 adds fixed-Pauli-protocol bounds; v4 (4 November 2026) adds deterministic-protocol results. The maximally mixed reference is a benchmark, not a solution for every reference state or measurement trade-off.
- In August 2026, Stempin, Llorens and Huber disproved the fractional-colouring conjecture proposed as a route to universal triply efficient Pauli shadow tomography ([arXiv:2608.20113](https://arxiv.org/abs/2608.20113v1)). This rules out that route, not every possible algorithm.
- Between 4 and 9 September 2026 (v1), two adjacent tomography benchmarks appeared. Keskin, Luo, Majid and Radzihovsky claim a lower bound which, with the earlier upper bound, gives tight arbitrary-state copy complexity $\Theta(\max\{d^3/(\sqrt{k}\varepsilon^2),d^2/\varepsilon^2\})$ for every $k$ and sufficiently small $\varepsilon$, when measurements act on at most $k$ fresh copies, with classical adaptivity but no quantum memory between blocks ([arXiv:2609.05718](https://arxiv.org/abs/2609.05718v1)). Nayak and Zhou claim the rank-$r$ refinement $\Theta((dr/\varepsilon^2)\max\{1,r/\sqrt{t}\})$ with at most $t$ jointly measured copies, for sufficiently small error and constant success probability ([arXiv:2609.10514](https://arxiv.org/abs/2609.10514v1)). These permit entangling measurements and reconstruct an unknown state; neither settles arbitrary-reference certification with single-qubit Pauli measurements.
- On 9 September 2026, Zhang et al. gave shallow phase shadows for stabilizer-state fidelity estimation ([arXiv:2609.10408](https://arxiv.org/abs/2609.10408v1)). The constant-depth implementation assumes all-to-all connectivity, mid-circuit measurements and classical feedforward; without auxiliary systems the stated depth is logarithmic. Its entangling readout and restricted observables do not remove the measurement restrictions of the statement or the earlier obstruction to a universal Pauli-shadow route.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Matching tomography lower bound for adaptive fresh-copy blocks with no quantum memory between blocks; entangling block measurements are allowed.", url: "https://arxiv.org/abs/2609.05718v1", date: "2026-09-04", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Claimed optimal rank-dependent tomography rate with bounded-copy joint measurements; not single-qubit Pauli certification.", url: "https://arxiv.org/abs/2609.10514v1", date: "2026-09-09", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Stabilizer-fidelity estimation with entangling readout; constant depth uses all-to-all connectivity, auxiliary resources, mid-circuit measurements and feedforward.", url: "https://arxiv.org/abs/2609.10408v1", date: "2026-09-09", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Unified lower-bound framework for spectral-functional estimation and rank/Schmidt-rank/MPS testing (v3); task-specific hypotheses still apply.", url: "https://arxiv.org/abs/2608.02600v3", date: "2026-09-08", version: "v3" },
      { kind: "preprint", role: "progress", summary: "Nearly tight single-qubit Pauli mixedness-testing copy complexity; arbitrary-reference certification remains a separate target.", url: "https://arxiv.org/abs/2608.18839v1", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Counterexamples close the proposed universal fractional-colouring route to triply efficient Pauli shadow tomography.", url: "https://arxiv.org/abs/2608.20113v1", version: "v1" },
    ],
    provenance: [
      { summary: "Keskin and coauthors report GPT-5.6 Sol through OpenAI Codex assistance with the main ideas and proof strategies. They state that they refined and verified the material and take responsibility for claims, proofs and citations.", url: "https://arxiv.org/html/2609.05718v1", version: "v1" },
      { summary: "Nayak and Zhou report GPT-5.5 and GPT-5.6 Sol assistance with crucial Fisher-information lemmas and a Gaussian reformulation of earlier upper-bound algorithms. They attribute the rank-dependent analysis to themselves and state that they independently verified all arguments and references.", url: "https://arxiv.org/html/2609.10514v1", version: "v1" },
      { summary: "Wang's v3 reports large language models used throughout as research and writing tools, to brainstorm ideas and explore proof strategies, with portions of the text redrafted with AI assistance in all sections; the author reviewed and validated all claims, proofs and citations and takes responsibility. (v2 named ChatGPT 5.5/5.6 for proof strategies and calculations.)", url: "https://arxiv.org/html/2608.02600v3", version: "v3" },
      { summary: "Stempin, Llorens and Huber state that GPT Sol 5.6 was used to derive their main results, Theorems A and B, and that they verified and contextualized all results.", url: "https://arxiv.org/html/2608.20113v1", version: "v1" },
    ],
    relations: [{ id: "E3", type: "related" }, { id: "A11", type: "related" }],
    refs: [
      { label: "Keskin, Luo, Majid & Radzihovsky, 'Tight Lower Bounds for State Tomography with Limited Entanglement' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.05718v1" },
      { label: "Nayak & Zhou, 'Optimal Low-Rank Quantum State Tomography with Bounded-Sample Joint Measurements' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.10514v1" },
      { label: "Zhang, You, Qin, Li, Eisert & Zhou, 'Constant-depth global shadow estimation' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.10408v1" },
      { label: "Haah, Harrow, Ji, Wu & Yu, 'Sample-optimal tomography of quantum states', IEEE Trans. Inf. Theory 63 (2017)", url: "https://arxiv.org/abs/1508.01797" },
      { label: "Wang, 'A Unified Complexity Framework for Quantum Property Testing' (2026 preprint, v3; v2 titled 'A Lower Bound Framework for Quantum Functional Estimation')", url: "https://arxiv.org/abs/2608.02600v3" },
      { label: "Acharya, Dharmavarapu, Liu & Yu, 'Near-Optimal Mixedness Testing with Pauli Measurements' (2026 preprint, v1 reviewed; v2 of 21 September 2026 adds fixed-Pauli-protocol bounds; v4 of 4 November 2026 adds deterministic protocols)", url: "https://arxiv.org/abs/2608.18839v1" },
      { label: "Stempin, Llorens & Huber, 'Counterexamples to the fractional coloring conjecture for triply efficient shadow tomography' (2026 preprint)", url: "https://arxiv.org/abs/2608.20113v1" },
    ] },

  { id: "A18", cat: "complexity", horizon: "programme", status: "improved",
    reviewedAt: "2026-10-26",
    title: "Fault tolerance with budgeted correlated noise",
    statement: r`For explicitly budgeted spatially/temporally correlated or adversarial noise, establish fault-tolerance thresholds and space-time overhead bounds for two- or three-dimensional local architectures. Specify local dimension, strength/correlation or per-step corruption budget, logical width and depth, total failure probability $\varepsilon$, and classical decoding time; aim for qubit implementations with useful constants.`,
    definition: r`**Fault-tolerance threshold theorems** show that quantum computation can be made reliable when physical noise is weak enough. They cover local stochastic noise and several non-Markovian models with quantitative locality or norm bounds; unrestricted adversarial noise is not correctable. The open programme is to identify which bounded correlations remain tolerable while keeping geometry, decoding and total overhead implementable.

Standard reference for correlated noise: Aharonov, Kitaev and Preskill, “Fault-tolerant quantum computation with long-range correlated noise”, PRL 96 (2006), [arXiv:quant-ph/0510231](https://arxiv.org/abs/quant-ph/0510231).`,
    progress: r`- In August 2026, Breuckmann, Golowich and Vazirani allowed a globally correlated adversary to corrupt up to $N^{1-o(1)}$ physical qudits per time step ([arXiv:2608.16857](https://arxiv.org/abs/2608.16857v2)). Their construction uses polynomial space, subpolynomial multiplicative depth overhead and, after recursive composition, constant local dimension. Reducing an unbounded alphabet is therefore not the remaining generic problem. The theorem (v2 of 30 September 2026, with minor expository edits) is accepted at FOCS 2026 (8–11 November 2026), together with its classical companion by Anshu, Breuckmann, Golowich, Nguyen and Vazirani, which tolerates almost-linearly many adversarially corrupted bits per time step and yields PCPs for NP from a detect-only variant ([arXiv:2608.16860](https://arxiv.org/abs/2608.16860v1)). Acceptance records peer review of the stated theorems.
- Bharti, Haug and Tanggara give a logarithmic reliability contribution to memory space-time cost ([arXiv:2608.26272](https://arxiv.org/abs/2608.26272v1)): fixed small logical registers and sufficiently wide amortized computations have different relative-overhead conclusions.
- Gong and Hu's self-calibration theorem applies to their structured control-error and local-convexity setting, not all correlated noise ([arXiv:2608.05686](https://arxiv.org/abs/2608.05686v2)).
- Decoding milestones also need model labels. Bazzi and Khater prove, assuming $\mathsf P\ne\mathsf{NP}$, polynomial additive inapproximability gaps for minimum-weight Pauli decoding of surface/toric codes under depolarizing noise, and separate X/Z decoding for their colour-code setting ([arXiv:2608.17109](https://arxiv.org/abs/2608.17109v3)); this does not make the usual independent-error surface-code matching problem NP-hard. Krishnamoorthy et al. express CSS degenerate maximum-likelihood decoding through partition functions and give statistical certificates, or exact certificates when suitable estimators are available ([arXiv:2608.25545](https://arxiv.org/abs/2608.25545v1)). Neither supplies an unconditional efficient optimal decoder for every CSS code.`,
    residual: r`Small-qubit architectures, quantitative constants and space overhead remain the open part of the programme.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Adversarial fault tolerance with per-step corruption budget, polynomial space and constant alphabet after recursion; v2 (30 September 2026) makes minor expository edits; accepted to FOCS 2026.", url: "https://arxiv.org/abs/2608.16857v2", date: "2026-09-30", version: "v2" },
      { kind: "preprint", role: "progress", summary: "Classical compiler tolerating almost-linearly many adversarially corrupted bits per time step, with PCPs for NP from a detect-only variant; a classical result accepted to FOCS 2026.", url: "https://arxiv.org/abs/2608.16860v1", date: "2026-08-17", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Memory reliability lower bound; fixed-width overhead and wide-register amortization must be distinguished.", url: "https://arxiv.org/abs/2608.26272v1", date: "2026-08-26", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Efficient syndrome-based calibration in the stated control-error model and local-convexity regime.", url: "https://arxiv.org/abs/2608.05686v2", date: "2026-08-20", version: "v2" },
      { kind: "preprint", role: "progress", summary: "Minimum-weight decoding inapproximability for specific code/noise models; not a hardness result for independent-X/Z surface-code matching.", url: "https://arxiv.org/abs/2608.17109v3", date: "2026-08-25", version: "v3" },
      { kind: "preprint", role: "progress", summary: "Statistical decoding certification and estimator-dependent exact certificates; no universal fast optimal-decoding theorem.", url: "https://arxiv.org/abs/2608.25545v1", date: "2026-08-26", version: "v1" },
    ],
    provenance: [
      { summary: "Breuckmann et al. report that proofs and writing are their own, with ChatGPT used for final-draft typographical and presentation checks.", url: "https://arxiv.org/html/2608.16857v2", version: "v2" },
      { summary: "Bharti et al. disclose generative-AI assistance with ideation, editing, organization and preparation of parts of the manuscript.", url: "https://arxiv.org/abs/2608.26272v1", version: "v1" },
      { summary: "Gong–Hu acknowledge ChatGPT/Claude for proof-idea discussions and presentation, retaining responsibility for the proofs and results.", url: "https://arxiv.org/abs/2608.05686v2", version: "v2" },
      { summary: "Bazzi–Khater report reviewed ChatGPT assistance with editing, notation and literature search.", url: "https://arxiv.org/abs/2608.17109v3", version: "v3" },
      { summary: "Krishnamoorthy et al. disclose large-language-model use for text optimization.", url: "https://arxiv.org/abs/2608.25545v1", version: "v1" },
    ],
    relations: [{ id: "A6", type: "related" }, { id: "A7", type: "related" }, { id: "O5", type: "related" }],
    refs: [
      { label: "Aharonov & Ben-Or, 'Fault-tolerant quantum computation with constant error', STOC 1997", url: "https://arxiv.org/abs/quant-ph/9611025" },
      { label: "Aharonov, Kitaev & Preskill, 'Fault-tolerant quantum computation with long-range correlated noise', PRL 96 (2006)", url: "https://arxiv.org/abs/quant-ph/0510231" },
      { label: "Terhal, 'Quantum error correction for quantum memories', Rev. Mod. Phys. 87 (2015)", url: "https://arxiv.org/abs/1302.3428" },
      { label: "Breuckmann, Golowich & Vazirani, 'Fault-Tolerant Quantum Computation with Adversarial Errors' (2026 preprint, v2; accepted to FOCS 2026)", url: "https://arxiv.org/abs/2608.16857v2" },
      { label: "Anshu, Breuckmann, Golowich, Nguyen & Vazirani, 'Classical Adversarial Fault-Tolerance and PCPs' (2026 preprint, v1; accepted to FOCS 2026)", url: "https://arxiv.org/abs/2608.16860v1" },
      { label: "Bharti, Haug & Tanggara, 'Fault-tolerant quantum computation cannot be achieved with constant spacetime overhead' (2026 preprint)", url: "https://arxiv.org/abs/2608.26272v1" },
      { label: "Gong & Hu, 'Provably Efficient Self-Calibrating Quantum Fault Tolerance' (2026 preprint)", url: "https://arxiv.org/abs/2608.05686v2" },
      { label: "Bazzi & Khater, 'Hardness of approximation for minimum-weight decoding of two-dimensional topological quantum codes' (2026 preprint)", url: "https://arxiv.org/abs/2608.17109v3" },
      { label: "Krishnamoorthy et al., 'Certified decoding of quantum LDPC codes' (2026 preprint)", url: "https://arxiv.org/abs/2608.25545v1" },
    ] },

  { id: "A19", cat: "complexity", horizon: "sharp", status: "improved",
    reviewedAt: "2026-11-08",
    provenance: [
      { summary: "Mantri reports that discussions with GPT-6.1 Sol and GPT-6 Astra contributed substantially to developing the proof of Theorem 1.7 and assisted with the Appendix B argument, and that Claude Opus helped draft and revise the exposition.", url: "https://arxiv.org/abs/2610.37635v1", version: "v1" },
      { summary: "Holler and Natarajan report ChatGPT assistance with representation analysis and Claude assistance with circuits, several proof ideas, review and writing; they take responsibility for all content.", url: "https://arxiv.org/html/2609.38060v1", version: "v1" },
      { summary: "Bouland, Huang, Natarajan, Shalit and Tal credit ChatGPT 6 Astra with an initial one-sided proof idea; interactions and their own discussions led to the two-sided Forrelation argument. They report verification, simplification and responsibility.", url: "https://arxiv.org/html/2609.25680v1", version: "v1" },
      { summary: "Aaronson, Natarajan, Tal and Villanyi report using Claude (Opus 4.6 Extended) and ChatGPT (Extended Thinking) to assist with preparing figures and understanding prior work.", url: "https://arxiv.org/abs/2604.11952v1", version: "v1" },
    ],
    title: "Noncryptographic classical verification of BQP",
    statement: r`Does every BQP decision problem admit an interactive proof with one polynomial-time honest quantum prover and a probabilistic polynomial-time classical verifier, using polynomially many rounds of classical messages, completeness at least $2/3$ and soundness at most $1/3$ against an unrestricted cheating prover? Require no computational hardness assumption, trusted quantum setup or additional noncommunicating prover.`,
    definition: r`**Classical verification of quantum computation** asks whether a classical verifier can check, through classical interaction, the BQP computation of an efficient quantum prover. The verifier must be genuinely classical and the honest prover efficient. The inclusion $\mathsf{BQP}\subseteq\mathsf{IP}=\mathsf{PSPACE}$ alone does not provide an efficient honest prover. Conversely, a protocol sound only against efficient quantum cheats does not meet the information-theoretic soundness target stated here.

Mahadev's classical-verification protocol is a landmark positive result with computational soundness under a quantum-hard lattice assumption, FOCS 2018, [arXiv:1804.01082](https://arxiv.org/abs/1804.01082). Protocols with a small trusted quantum verifier or multiple separated provers solve different resource models.`,
    progress: r`- In April 2026, Aaronson, Natarajan, Tal and Villanyi proved $\mathsf{BQP}^{O}\subseteq\mathsf{MIP}^{O}$ for every classical oracle $O$ ([arXiv:2604.11952](https://arxiv.org/abs/2604.11952v1)). This is progress in a relativized multi-prover model and explicitly motivates noncryptographic verification, but does not construct the single efficient prover protocol sought here.
- On 22 September 2026 (v1), Bouland, Huang, Natarajan, Shalit and Tal constructed an oracle relative to which $\mathsf{BQP}\not\subseteq\mathsf{IP}$, using Forrelation ([arXiv:2609.25680](https://arxiv.org/abs/2609.25680v1)). In that oracle model, polynomial-query classical verification with polynomial communication fails even with an unbounded prover. This rules out fully relativizing approaches, not unrelativized classical verification.
- On 29 September 2026 (v1), Holler and Natarajan obtained single-prover classical verification with total resources quasilinear in the delegated circuit size, up to security-parameter and logarithmic factors ([arXiv:2609.38060](https://arxiv.org/abs/2609.38060v1)). Their main theorem assumes subexponential LWE hardness against nonuniform quantum adversaries and gives computational soundness. It improves the cryptographic benchmark without meeting the unrestricted-cheater, assumption-free target.
- On 27 October 2026 (v1), Mantri gave a public-coin interactive proof with a classical polynomial-time verifier, an efficient quantum honest prover, perfect completeness and soundness error at most $1/4$ ([arXiv:2610.37635](https://arxiv.org/abs/2610.37635v1)). It applies, relative to a classical oracle, to a recursive Fourier-sampling variant that is decided exactly in quantum polynomial time and lies outside the polynomial hierarchy. This shows that oracle barriers like the one above do not block every hard quantum language. It is still relativized and covers one language rather than all of BQP.`,
    residual: r`The unrelativized question remains open; a non-relativizing construction remains possible.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Relative to a classical oracle, classical verification with an efficient quantum prover and unconditional soundness for one BQP language outside the polynomial hierarchy. Not all of BQP; relativized.", url: "https://arxiv.org/abs/2610.37635v1", date: "2026-10-27", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Quasilinear-resource classical verification under subexponential quantum LWE hardness, with computational soundness.", url: "https://arxiv.org/abs/2609.38060v1", date: "2026-09-29", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Oracle separation BQP not contained in IP gives a barrier to relativizing verification protocols, not an unrelativized impossibility theorem.", url: "https://arxiv.org/abs/2609.25680v1", date: "2026-09-22", version: "v1" },
      { kind: "published", role: "progress", summary: "Mahadev achieves classical verification with computational soundness under a lattice hardness assumption; the assumption-free target is stronger.", url: "https://arxiv.org/abs/1804.01082" },
      { kind: "preprint", role: "progress", summary: "Relativizing multi-prover containment for BQP with classical oracles, not efficient single-prover noncryptographic verification.", url: "https://arxiv.org/abs/2604.11952v1", date: "2026-04-13", version: "v1" },
    ],
    relations: [{ id: "A1", type: "related" }, { id: "A3", type: "related" }, { id: "A10", type: "related" }],
    refs: [
      { label: "Mantri, 'Classical Verification of Quantum Computation Beyond the Polynomial Hierarchy' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.37635v1" },
      { label: "Finn Holler, Anand Natarajan, 'Classical Verification of Quantum Computation with Quasilinear Resources, from Compiled Nonlocal Games' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.38060v1" },
      { label: "Bouland, Huang, Natarajan, Shalit & Tal, 'BQP ⊆ IP Does Not Relativize' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.25680v1" },
      { label: "Mahadev, 'Classical Verification of Quantum Computations', FOCS 2018", url: "https://arxiv.org/abs/1804.01082" },
      { label: "Aaronson, Natarajan, Tal & Villanyi, 'A Relativizing MIP for BQP' (2026 preprint, v1; v2 of 5 October 2026)", url: "https://arxiv.org/abs/2604.11952v1" },
    ] },

  { id: "A20", cat: "complexity", horizon: "sharp", status: "claimed-solved",
    lean: { url: "https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/lean/docs/274.md", note: "OpenAI reports a Lean formalization of the main bounded-error parity lower bound with zero-initialized ancillary qubits. The build was not rerun here." },
    reviewedAt: "2026-11-26",
    title: "Parity is not in QAC0",
    statement: r`Prove that no family of polynomial-size, constant-depth $\mathsf{QAC}^0$ circuits (arbitrary single-qubit gates and generalized Toffoli gates, with polynomially many ancillas initialized to $|0\rangle$) outputs $\mathrm{PARITY}_n(x)=x_1\oplus\cdots\oplus x_n$ with certainty on every input $x\in\{0,1\}^n$.`,
    definition: r`**The class** $\mathsf{QAC}^0$ is the class of polynomial-size, constant-depth quantum circuits built from arbitrary single-qubit gates and generalized Toffoli gates, the quantum analogue of $\mathsf{AC}^0$. Classically, parity is famously outside $\mathsf{AC}^0$.

Moore showed that parity and fanout are equivalent up to constant-depth reductions, so the question is equally whether constant-depth quantum circuits can implement fanout: Moore, “Quantum circuits: fanout, parity, and counting” (1999), [arXiv:quant-ph/9903046](https://arxiv.org/abs/quant-ph/9903046).`,
    progress: r`- Circuits with two layers of multi-qubit gates cannot even approximate parity, while depth-three circuits cannot compute it exactly, regardless of size (Rosenthal, [arXiv:2008.07470](https://arxiv.org/abs/2008.07470); Joshi, Tal, Vasconcelos and Wright, STOC 2026, [arXiv:2512.14643](https://arxiv.org/abs/2512.14643)).
- Strong lower bounds hold when ancillas are restricted (Nadimpalli, Parham, Vasconcelos and Yuen, [arXiv:2311.09631](https://arxiv.org/abs/2311.09631); Anshu, Dong, Ou and Yao, [arXiv:2410.06499](https://arxiv.org/abs/2410.06499)).
- Gretta, Gupta and Joshi (FOCS 2026) proved that parity $\notin\mathsf{QAC}^0$ is equivalent to a Fourier-concentration property of $\mathsf{QAC}^0$, and that inverse-polynomial correlation with parity can be amplified to exact computation ([arXiv:2604.02793](https://arxiv.org/abs/2604.02793v2)).
- Sun and Wang (25 November 2026, v1) use the localization theorem of the claimed proof as a black box ([arXiv:2611.34803](https://arxiv.org/abs/2611.34803v1)). With Pauli twirling and backward layer peeling they approximate the acceptance operator of any polynomial-width $\mathsf{QAC}^0$ circuit, in operator norm, by an advice-independent operator of sublinear Pauli degree on a designated register. Combined with Sherstov's approximate-degree lower bound, this gives explicit linear-size monotone depth-2 CNFs on which every $\mathsf{QAC}^0$ circuit with arbitrary quantum advice has only inverse-polynomial advantage, so $\mathsf{AC}^0\not\subseteq\mathsf{BQAC}^0/\mathsf{qpoly}$ in the single-copy, single-output model. They also note that the localization bound extends the parity lower bound to arbitrary quantum advice. These results depend on the claimed proof and do not assess it.`,
    claim: r`**OpenAI, [“Product-projection localization and the QAC0 parity lower bound”](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Product-projection-localization-and-the-QAC0-parity-lower-bound-September-24-2026/paper.pdf)** (OpenAI Math Release on GitHub, public 6 October 2026, not on arXiv).

**Gao, Ji and Liu, [“A simplified proof of PARITY ∉ QAC0”](https://eccc.weizmann.ac.il/report/2026/258/)** (ECCC TR26-258, 18 October 2026).

**Kintali, [“PARITY ∉ QAC0 (via Polarization and Direct Induction)”](https://github.com/shivakintali/shivakintali.github.io/blob/55042dd8e6b118d5bbd390ededb8a0d4ebc832ee/papers/Parity.pdf)** (note dated 17 October 2026, posted on the author's web page; version of 20 October 2026).

What it claims:
- For every fixed depth and polynomially many qubits, no $\mathsf{QAC}^0$ circuit achieves success probability $1/2+\varepsilon$ on every input, for any fixed $\varepsilon>0$ and all large $n$. This implies the exact statement above.
- Gao, Ji and Liu give a self-contained simplified proof of the same theorem, a self-contained simplification of OpenAI's proof by independent authors.
- Kintali gives a second self-contained simplification (13 pages): polarization writes each conjugated product projection as a combination of product projections with total weight at most $18^k$, so the lower-depth localization bound applies term by term and OpenAI's low-count propagation step is not needed. OpenAI's localization statement, Chebyshev filter and inverse-circuit bootstrap are retained.

Caveats:
- The original proof and two simplified self-contained versions by independent authors; none is peer reviewed. Hence “Claimed solved” rather than “Solved”. Kintali's version was read in full and checked step by step for the 26 November 2026 review without finding a gap; this is an internal check, not peer review.
- OpenAI lists itself as author and states that an internal OpenAI model produced the manuscript collection. Its scope note reports the main positive-advantage parity lower bound formalized in Lean; the build was not rerun here.`,
    evidence: [
      { kind: "preprint", role: "claimed-solution", lean: true, summary: "Claimed proof that PARITY is not in QAC0, in the strong form that no constant-depth polynomial-size circuit beats random guessing by a fixed margin on all inputs; OpenAI GitHub manuscript, pending assessment.", url: "https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Product-projection-localization-and-the-QAC0-parity-lower-bound-September-24-2026/paper.pdf", date: "2026-10-06", version: "v1" },
      { kind: "preprint", role: "claimed-solution", summary: "Self-contained simplified proof of the OpenAI theorem; independent engagement, not peer reviewed.", url: "https://eccc.weizmann.ac.il/report/2026/258/", date: "2026-10-18" },
      { kind: "preprint", role: "claimed-solution", summary: "Second self-contained simplification of the OpenAI proof, replacing the low-count propagation step by a polarization expansion of the one-layer conjugation; note on the author's web page, not peer reviewed.", url: "https://github.com/shivakintali/shivakintali.github.io/blob/55042dd8e6b118d5bbd390ededb8a0d4ebc832ee/papers/Parity.pdf", date: "2026-10-17" },
      { kind: "preprint", role: "progress", summary: "Downstream use of the claimed localization theorem: advice-independent sublinear-degree operator approximation of QAC0 acceptance operators, giving AC0 ⊄ BQAC0/qpoly (single copy, single output); depends on the claimed proof.", url: "https://arxiv.org/abs/2611.34803v1", date: "2026-11-25", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Equivalence of PARITY not in QAC0 with Fourier concentration of QAC0, and amplification of weak correlation to exact computation (FOCS 2026).", url: "https://arxiv.org/abs/2604.02793v2", date: "2026-08-25", version: "v2" },
    ],
    provenance: [
      { summary: "OpenAI lists itself as author and states that an internal OpenAI model produced the manuscript collection. Its Lean scope note reports a formalization of the main parity lower bound; this is the author's account, not an independently rerun build.", url: "https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/README.md" },
      { summary: "Kintali states that his contribution is the use of polarization in the reflection expansion, and that he prompted Claude and ChatGPT to apply this idea to simplify OpenAI's proof, worked out details interactively and verified them manually.", url: "https://github.com/shivakintali/shivakintali.github.io/blob/55042dd8e6b118d5bbd390ededb8a0d4ebc832ee/papers/Parity.pdf" },
      { summary: "Sun and Wang state that their proofs took shape through discussions with ChatGPT, in which they explored and refined approaches, and that ChatGPT and Gemini helped draft and revise the manuscript; they take responsibility for the claims, proofs and text.", url: "https://arxiv.org/abs/2611.34803v1", version: "v1" },
    ],
    relations: [{ id: "A16", type: "related" }],
    refs: [
      { label: "Joshi, Tal, Vasconcelos & Wright, 'Improved Lower Bounds for QAC0', STOC 2026 (found via the QIQCOP Zoo)", url: "https://arxiv.org/abs/2512.14643" },
      { label: "Moore, 'Quantum Circuits: Fanout, Parity, and Counting' (1999)", url: "https://arxiv.org/abs/quant-ph/9903046" },
      { label: "Rosenthal, 'Bounds on the QAC0 Complexity of Approximating Parity', ITCS 2021", url: "https://arxiv.org/abs/2008.07470" },
      { label: "Nadimpalli, Parham, Vasconcelos & Yuen, 'On the Pauli Spectrum of QAC0', STOC 2024", url: "https://arxiv.org/abs/2311.09631" },
      { label: "Gretta, Gupta & Joshi, 'Parity ∉ QAC0 ⟺ QAC0 is Fourier-Concentrated' (FOCS 2026; preprint v2)", url: "https://arxiv.org/abs/2604.02793v2" },
      { label: "OpenAI, 'Product-projection localization and the QAC0 parity lower bound' (OpenAI Math Release manuscript, dated 24 September 2026; public 6 October 2026)", url: "https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Product-projection-localization-and-the-QAC0-parity-lower-bound-September-24-2026/paper.pdf" },
      { label: "Gao, Ji & Liu, 'A simplified proof of PARITY ∉ QAC0', ECCC TR26-258 (18 October 2026)", url: "https://eccc.weizmann.ac.il/report/2026/258/" },
      { label: "Kintali, 'PARITY ∉ QAC0 (via Polarization and Direct Induction)' (note dated 17 October 2026, author's web page; version of 20 October 2026)", url: "https://github.com/shivakintali/shivakintali.github.io/blob/55042dd8e6b118d5bbd390ededb8a0d4ebc832ee/papers/Parity.pdf" },
      { label: "Sun & Wang, 'AC0 ⊄ BQAC0/qpoly via Sublinear-Degree Pauli Approximation' (2026 preprint, v1)", url: "https://arxiv.org/abs/2611.34803v1" },
    ] },

  { id: "A21", cat: "complexity", horizon: "sharp",
    reviewedAt: "2026-11-08",
    title: "Dihedral hidden subgroup problem in polynomial time",
    statement: r`For the dihedral group $D_N=\langle r,s\mid r^N=s^2=1,\ srs=r^{-1}\rangle$ and an oracle $f$ hiding a reflection subgroup $\{1,sr^a\}$, is there a bounded-error quantum algorithm that recovers $a$ using $\mathrm{poly}(\log N)$ elementary operations and oracle queries?`,
    definition: r`**The dihedral hidden subgroup problem** asks to recover a hidden reflection subgroup $\{1,sr^a\}$ of $D_N$ from an oracle constant on its cosets. The abelian hidden subgroup problem underlies Shor's algorithms; the non-abelian cases are where quantum speedups become uncertain.

The dihedral case is central because Regev reduced unique-SVP-type lattice problems to a dihedral coset problem, so an efficient algorithm would bear on lattice cryptography (see A22): Regev, “Quantum computation and lattice problems”, SIAM J. Comput. 33 (2004), [arXiv:cs/0304005](https://arxiv.org/abs/cs/0304005).`,
    progress: r`- Kuperberg's sieve solves the problem in time $2^{O(\sqrt{\log N})}$ ([arXiv:quant-ph/0302112](https://arxiv.org/abs/quant-ph/0302112)), and Regev gave a polynomial-space variant ([arXiv:quant-ph/0406151](https://arxiv.org/abs/quant-ph/0406151)). Kuperberg's later collimation sieve improves the subexponential algorithm ([arXiv:1112.3333](https://arxiv.org/abs/1112.3333)).
- A polynomial-time algorithm for the dihedral coset problem was claimed by Simon in August 2026 ([IACR ePrint 2026/1591](https://eprint.iacr.org/2026/1591)). Gupte, Ragavan and Zhandry argue that it cannot recover the least-significant secret bit with non-negligible advantage, with a broader no-go for related templates ([IACR ePrint 2026/1693](https://eprint.iacr.org/2026/1693)). Simon maintains the paper with a response note. The dispute is unresolved here; neither preprint is peer reviewed.`,
    residual: r`The sharp target is whether a polynomial-time algorithm exists in the standard oracle model. A lower bound excluding a natural class of algorithms would count as progress, but would not exclude algorithms outside that class.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Argues that Simon's algorithm does not solve DCP, with a no-go for related templates; Simon has posted a response. The dispute is not assessed here.", url: "https://eprint.iacr.org/2026/1693", date: "2026-08-15" },
      { kind: "challenged", summary: "Claimed polynomial-time DCP algorithm, challenged by ePrint 2026/1693 and maintained by its author with a response.", url: "https://eprint.iacr.org/2026/1591", date: "2026-08-03" },
      { kind: "preprint", role: "progress", summary: "Kuperberg's collimation sieve: an improved subexponential-time algorithm; the general regime remains subexponential.", url: "https://arxiv.org/abs/1112.3333v1", date: "2011-12-14", version: "v1" },
    ],
    relations: [{ id: "A22", type: "related" }, { id: "A14", type: "related" }],
    refs: [
      { label: "Gupte, Ragavan & Zhandry, 'The ePrint:2026/1591 Quantum Algorithm Does Not Solve DCP' (IACR ePrint 2026/1693) (found via the QIQCOP Zoo)", url: "https://eprint.iacr.org/2026/1693" },
      { label: "Simon, 'A Polynomial-Time Quantum Algorithm for the Dihedral Coset Problem' (IACR ePrint 2026/1591; challenged, with author response)", url: "https://eprint.iacr.org/2026/1591" },
      { label: "Kuperberg, 'A subexponential-time quantum algorithm for the dihedral hidden subgroup problem', SIAM J. Comput. 35 (2005)", url: "https://arxiv.org/abs/quant-ph/0302112" },
      { label: "Regev, 'A Subexponential Time Algorithm for the Dihedral Hidden Subgroup Problem with Polynomial Space' (2004)", url: "https://arxiv.org/abs/quant-ph/0406151" },
      { label: "Kuperberg, 'Another subexponential-time quantum algorithm for the dihedral hidden subgroup problem', TQC 2013", url: "https://arxiv.org/abs/1112.3333" },
      { label: "Regev, 'Quantum Computation and Lattice Problems', SIAM J. Comput. 33 (2004)", url: "https://arxiv.org/abs/cs/0304005" },
    ] },

  { id: "A22", cat: "complexity", horizon: "sharp",
    reviewedAt: "2026-11-08",
    title: "Polynomial-time quantum algorithms for lattice problems",
    statement: r`Does search-LWE, in a standard parameter regime with worst-case lattice-hardness guarantees (polynomial modulus-to-noise ratio), admit a bounded-error quantum algorithm running in time $\mathrm{poly}(n,\log q)$? Separately: does $\gamma$-approximate SVP with $\gamma(n)=n^c$ admit a polynomial-time quantum algorithm on arbitrary lattices?`,
    definition: r`**Learning With Errors and approximate SVP** underlie most post-quantum cryptography. Regev's reduction is quantum: an efficient LWE algorithm would give efficient quantum algorithms for worst-case approximate GapSVP and SIVP. Hence the question of whether quantum computers can solve these problems is a direct test of post-quantum security. Approximate SVP, unique SVP and LWE are related but logically distinct.

Standard reference: Regev, “On lattices, learning with errors, random linear codes, and cryptography”, J. ACM 56 (2009), [doi:10.1145/1568318.1568324](https://doi.org/10.1145/1568318.1568324).`,
    progress: r`- Quantum sieving and enumeration give only exponential-time improvements for SVP.
- Chen, Liu and Zhandry solve LWE-like variants when samples are supplied as quantum states, outside the hard regime ([arXiv:2108.11015](https://arxiv.org/abs/2108.11015)).
- Reductions to extrapolated dihedral coset problems connect LWE with A21. The Chen–Liu–Zhandry algorithms apply only in their specified EDCP parameter regimes; no general standard-LWE algorithm follows.
- Simon's DCP announcement also claims lattice consequences, including SVP and LWE, and is challenged by Gupte–Ragavan–Zhandry; see A21 for the dispute and the author's response.`,
    residual: r`The target is whether a polynomial-time quantum algorithm exists in the stated regime. A barrier for natural algorithm classes would be evidence and partial progress, not a negative answer for all quantum algorithms.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Polynomial-time quantum algorithms for average-case lattice variants with quantum-state inputs; the standard hard regime is not reached.", url: "https://arxiv.org/abs/2108.11015v2", date: "2021-10-06", version: "v2" },
    ],
    relations: [{ id: "A21", type: "related" }, { id: "A2", type: "related" }],
    refs: [
      { label: "Regev, 'On lattices, learning with errors, random linear codes, and cryptography', J. ACM 56 (2009)", url: "https://doi.org/10.1145/1568318.1568324" },
      { label: "Regev, 'Quantum Computation and Lattice Problems', SIAM J. Comput. 33 (2004)", url: "https://arxiv.org/abs/cs/0304005" },
      { label: "Chen, Liu & Zhandry, 'Quantum Algorithms for Variants of Average-Case Lattice Problems via Filtering', EUROCRYPT 2022", url: "https://arxiv.org/abs/2108.11015" },
    ] },

  { id: "A23", cat: "complexity", horizon: "incremental", status: "claimed-solved",
    reviewedAt: "2026-11-16",
    title: "Quantum query complexity of triangle finding",
    statement: r`Determine the bounded-error quantum query complexity $Q_\triangle(n)$ of deciding whether an $n$-vertex graph, given by its adjacency-matrix oracle, contains a triangle (and finding one). The known bounds are $\Omega(n)\le Q_\triangle(n)\le O(n^{5/4})$; give an $O(n^{5/4-\varepsilon})$ algorithm or an $\Omega(n^{1+\varepsilon})$ lower bound.`,
    definition: r`**Triangle finding** asks whether a graph given by its adjacency-matrix oracle contains a triangle. It is a benchmark for quantum-walk and learning-graph methods.

Standard reference: Magniez, Santha and Szegedy, “Quantum algorithms for the triangle problem”, SIAM J. Comput. 37 (2007), [arXiv:quant-ph/0310134](https://arxiv.org/abs/quant-ph/0310134).`,
    progress: r`- Magniez, Santha and Szegedy obtained $\tilde O(n^{13/10})$.
- Belovs's learning graphs gave $O(n^{35/27})$.
- Le Gall reached $\tilde O(n^{5/4})$ ([arXiv:1407.0085](https://arxiv.org/abs/1407.0085)), and Carette, Laurière and Magniez removed the logarithmic factors ([arXiv:1609.07786](https://arxiv.org/abs/1609.07786)).
- Until November 2026, the only general lower bound was the trivial $\Omega(n)$ from unstructured search.
- For the edge-weighted triangle-sum variant, Belovs and Rosmanis proved $\Omega(n^{9/7}/\sqrt{\log n})$, which also limits non-adaptive learning-graph algorithms for unweighted triangle finding to $\Omega(n^{9/7}/\sqrt{\log n})$ queries ([arXiv:1210.3279](https://arxiv.org/abs/1210.3279)).`,
    claim: r`**Cornelissen, Gilani and Zhou, [“A Quantum Lower Bound for Triangle Finding”](https://arxiv.org/abs/2611.06751v1)** (arXiv:2611.06751, v1, 4 November 2026).

What it claims:
- The first superlinear lower bound: triangle finding needs $\Omega(n^{13/12})$ bounded-error quantum queries in the adjacency-matrix model (Theorem 1.1). This meets the statement's second target, an $\Omega(n^{1+\varepsilon})$ lower bound, with $\varepsilon=1/12$.
- The same bound holds for triangle detection, and for detecting every fixed connected non-bipartite graph (Corollary 1.2).
- The proof combines Zhandry's compressed oracle with Belovs's transfer approach. It compares graphs with a planted triangle to random graphs conditioned to be triangle-free, using conditional resampling.

Caveats:
- A single preprint, not peer reviewed and not yet independently assessed. Hence “Claimed solved” rather than “Solved”.`,
    residual: r`The exact exponent of $Q_\triangle(n)$ remains open between $13/12$ and $5/4$; any polynomial improvement of either bound counts. Time complexity, sparse-graph regimes and the weighted variant are distinct benchmarks.`,
    evidence: [
      { kind: "preprint", role: "claimed-solution", summary: "First superlinear quantum query lower bound, Ω(n^{13/12}), for triangle finding and detection in the adjacency-matrix model, also for every fixed connected non-bipartite subgraph; meets the Ω(n^{1+ε}) target. The exponent gap to 5/4 remains. Pending assessment.", url: "https://arxiv.org/abs/2611.06751v1", date: "2026-11-04", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Extended learning graphs remove the logarithmic overhead, giving the best general upper bound O(n^{5/4}).", url: "https://arxiv.org/abs/1609.07786v2", date: "2016-10-11", version: "v2" },
    ],
    provenance: [
      { summary: "The authors report that, starting from their own Ω(n√log n) proof, GPT 6 Astra developed the entire argument yielding the Ω(n^{13/12}) bound; GPT 6 Astra and Anthropic Opus 5.5 also helped with literature search, writing, and developing and checking proofs. The authors take responsibility for the content.", url: "https://arxiv.org/abs/2611.06751v1", version: "v1" },
    ],
    relations: [{ id: "A16", type: "related" }],
    refs: [
      { label: "Magniez, Santha & Szegedy, 'Quantum Algorithms for the Triangle Problem', SIAM J. Comput. 37 (2007)", url: "https://arxiv.org/abs/quant-ph/0310134" },
      { label: "Le Gall, 'Improved Quantum Algorithm for Triangle Finding via Combinatorial Arguments', FOCS 2014", url: "https://arxiv.org/abs/1407.0085" },
      { label: "Carette, Laurière & Magniez, 'Extended Learning Graphs for Triangle Finding', STACS 2017", url: "https://arxiv.org/abs/1609.07786" },
      { label: "Belovs & Rosmanis, 'On the Power of Non-Adaptive Learning Graphs', Comput. Complexity 23 (2014)", url: "https://arxiv.org/abs/1210.3279" },
      { label: "Cornelissen, Gilani & Zhou, 'A Quantum Lower Bound for Triangle Finding' (2026 preprint, v1)", url: "https://arxiv.org/abs/2611.06751v1" },
    ] },

  { id: "A24", cat: "complexity", horizon: "incremental",
    reviewedAt: "2026-11-20",
    title: "Stabilizer rank of magic-state tensor powers",
    statement: r`For $|T\rangle=(|0\rangle+e^{i\pi/4}|1\rangle)/\sqrt2$, determine the growth of the exact stabilizer rank $\chi(|T\rangle^{\otimes n})$, the least number of stabilizer states whose linear span contains $|T\rangle^{\otimes n}$. Prove a super-polynomial lower bound, or a sub-exponential upper bound; separately, decide whether the $\delta$-approximate rank is $2^{\Omega(n)}$ for fixed $\delta$.`,
    definition: r`**The stabilizer rank** of a state is the least number of stabilizer states whose linear span contains it. Stabilizer-rank simulators run in time roughly linear in the rank, so exponential growth for magic-state tensor powers is expected if universal quantum computation is not classically simulable. That conditional argument is not an unconditional bound.

Standard reference: Bravyi, Smith and Smolin, “Trading classical and quantum computational resources”, PRX 6 (2016), [arXiv:1506.01396](https://arxiv.org/abs/1506.01396).`,
    progress: r`- The best upper bound is $O(2^{\alpha n})$ with $\alpha\approx0.396$ (Qassim, Pashayan and Gosset, [arXiv:2106.07740](https://arxiv.org/abs/2106.07740)), improving the exponent $\log_2(7)/6\approx0.468$ of Bravyi, Smith and Smolin and later numerical bounds; Bravyi et al. give small-block decompositions and simulators whose cost is linear in the number of stabilizer terms ([arXiv:1808.00128](https://arxiv.org/abs/1808.00128)).
- For seven copies, the partial decomposition of Kissinger, van de Wetering and Vilmart reduces five copies to three terms with one magic state each. Applying it to five of the seven copies and using the three-term decomposition for the three remaining magic states gives $\chi(|T\rangle^{\otimes7})\leq 9$ ([Section 4.2](https://arxiv.org/abs/2202.09202)). Ganesan gives a separate, explicit ten-term identity whose coefficients reproduce all 128 amplitudes in exact arithmetic ([Appendix A.5](https://arxiv.org/pdf/2610.35579v1#page=32), [certificate](https://doi.org/10.5281/zenodo.23525753)). The exact seven-copy rank remains open.
- Earlier unconditional exact-rank lower bounds reached $\Omega(n)$ (Peleg, Shpilka and Volk, [arXiv:2106.03214](https://arxiv.org/abs/2106.03214); also Labib, and Lovitz–Steffan).
- For approximate rank, Mehraban and Tahmasbi prove a quadratic lower bound up to polylogarithmic factors in their stated approximation regimes ([arXiv:2305.10277](https://arxiv.org/abs/2305.10277)). This also lower-bounds the exact rank, since every exact decomposition is an admissible approximate one.`,
    residual: r`Any super-polynomial unconditional bound would be a major advance in circuit-complexity terms.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Quadratic lower bound, up to polylogarithmic factors, on approximate stabilizer rank of magic-state tensor powers (STOC 2024).", url: "https://arxiv.org/abs/2305.10277v4", date: "2024-03-29", version: "v4" },
    ],
    provenance: [{ summary: "Ganesan reports that Infinity Machine found the ten-term decomposition and that the author checked the amplitude identity in exact arithmetic.", url: "https://doi.org/10.5281/zenodo.23525753" }],
    relations: [{ id: "A1", type: "related" }],
    refs: [
      { label: "Bravyi, Smith & Smolin, 'Trading classical and quantum computational resources', PRX 6 (2016)", url: "https://arxiv.org/abs/1506.01396" },
      { label: "Kissinger, van de Wetering & Vilmart, 'Classical Simulation of Quantum Circuits with Partial and Graphical Stabiliser Decompositions', TQC (2022), Section 4.2", url: "https://arxiv.org/abs/2202.09202" },
      { label: "Ganesan, 'Infinity Machine: a self-improving AI agent for research' (2026), Appendix A.5", url: "https://arxiv.org/abs/2610.35579v1" },
      { label: "Bravyi, Browne, Calpin, Campbell, Gosset & Howard, 'Simulation of quantum circuits by low-rank stabilizer decompositions', Quantum 3 (2019)", url: "https://arxiv.org/abs/1808.00128" },
      { label: "Qassim, Pashayan & Gosset, 'Improved upper bounds on the stabilizer rank of magic states', Quantum 5 (2021)", url: "https://arxiv.org/abs/2106.07740" },
      { label: "Peleg, Shpilka & Volk, 'Lower Bounds on Stabilizer Rank', Quantum 6 (2022)", url: "https://arxiv.org/abs/2106.03214" },
      { label: "Mehraban & Tahmasbi, 'Quadratic Lower bounds on the Approximate Stabilizer Rank: A Probabilistic Approach', STOC 2024", url: "https://arxiv.org/abs/2305.10277" },
    ] },

  { id: "A25", cat: "complexity", horizon: "incremental",
    reviewedAt: "2026-11-08",
    title: "Optimal copy complexity of shadow tomography",
    statement: r`Given a known list of $M$ effects $0\le E_j\le I$ on $\mathbb C^d$ and copies of an unknown state $\rho$, can every $\mathrm{Tr}(\rho E_j)$ be estimated to additive error $\varepsilon$ with probability $2/3$ using $O(\log M/\varepsilon^2)$ copies, independently of $d$? Close the gap between the known lower bound and the best upper bound.`,
    definition: r`**Shadow tomography** asks for many expectation values of an unknown state with far fewer copies than full tomography. Aaronson's lower bound is $\Omega(\min\{d^2,\log M\}/\varepsilon^2)$; classical estimation of commuting effects achieves $O(\log M/\varepsilon^2)$.

Standard reference: Aaronson, “Shadow tomography of quantum states”, STOC 2018, [arXiv:1711.01053](https://arxiv.org/abs/1711.01053).`,
    progress: r`- Bădescu and O'Donnell gave $\tilde O(\log^2 M\log d/\varepsilon^4)$ ([arXiv:2011.10908](https://arxiv.org/abs/2011.10908)).
- Chen, Li and Liu attained the optimal logarithmic rate in a high-precision regime ([arXiv:2407.13874](https://arxiv.org/abs/2407.13874)).
- Jeronimo, Huang and Liu (August 2026, revised) report dimension-free polylogarithmic copy complexity, $O(\log M\log(M/\delta)/\varepsilon^2)$, settling whether a dimension-free bound polylogarithmic in $M$ exists ([arXiv:2608.06345](https://arxiv.org/abs/2608.06345v3)).`,
    residual: r`At constant failure probability the worst-case gap is between $\log M$ and $\log^2 M$. Computational efficiency is a separate target.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Dimension-free polylogarithmic shadow tomography from repeated pretty-good and recovery-label measurements; a log M factor separates it from the lower bound.", url: "https://arxiv.org/abs/2608.06345v3", date: "2026-09-30", version: "v3" },
    ],
    relations: [{ id: "A17", type: "related" }],
    refs: [
      { label: "Aaronson, 'Shadow Tomography of Quantum States', STOC 2018", url: "https://arxiv.org/abs/1711.01053" },
      { label: "Bădescu & O'Donnell, 'Improved quantum data analysis', STOC 2021", url: "https://arxiv.org/abs/2011.10908" },
      { label: "Chen, Li & Liu, 'Optimal high-precision shadow estimation' (2024)", url: "https://arxiv.org/abs/2407.13874" },
      { label: "Jeronimo, Huang & Liu, 'Dimension-Free Polylogarithmic Quantum Shadow Tomography' (2026 preprint, v3)", url: "https://arxiv.org/abs/2608.06345v3" },
    ] },

  { id: "A26", cat: "complexity", horizon: "incremental", status: "improved",
    reviewedAt: "2026-11-16",
    title: "Approximating Quantum Max-Cut",
    statement: r`For Quantum Max-Cut on a graph with nonnegative, finitely encoded weights, $H_G=\sum_{\{i,j\}\in E}w_{ij}\,\frac{1}{4}(I-X_iX_j-Y_iY_j-Z_iZ_j)$, determine the best ratio $\alpha^*$ such that a classical polynomial-time algorithm outputs a value within factor $\alpha^*$ of $\lambda_{\max}(H_G)$ on every graph. Separately: is estimation of $\lambda_{\max}(H_G)$ for bipartite graphs to inverse-polynomial additive precision in $\mathsf{BPP}$?`,
    definition: r`**Quantum Max-Cut** is the quantum analogue of Max-Cut and a main testbed for approximation algorithms for local Hamiltonians. Maximizing the positive singlet-projector sum $H_G$ is equivalent to finding the ground energy of the antiferromagnetic Hamiltonian $H_{\mathrm{AF}}=-H_G$, up to an optional additive constant. The associated energy-threshold promise problem with an inverse-polynomial gap is QMA-complete on general graphs; this is not a claim about outputting an exact real-valued energy.

Standard reference: Gharibian and Parekh, “Almost optimal classical approximation algorithms for a quantum generalization of Max-Cut”, APPROX 2019, [arXiv:1909.08846](https://arxiv.org/abs/1909.08846).`,
    progress: r`- Product-state rounding of an SDP gives $0.498$ (Gharibian and Parekh).
- Entangled-state algorithms beat the product-state limit (Anshu, Gosset and Morenz, [arXiv:2003.14394](https://arxiv.org/abs/2003.14394)), followed by $0.582$ on triangle-free graphs (King, [arXiv:2209.02589](https://arxiv.org/abs/2209.02589)), $0.595$ on general graphs via matchings (Lee and Parekh, [arXiv:2401.03616](https://arxiv.org/abs/2401.03616)) and $0.603$ on general graphs, $0.614$ on triangle-free and $0.816$ on bipartite graphs (Gribling, Sinjorgo and Sotirov, [arXiv:2504.11120](https://arxiv.org/abs/2504.11120v1)).
- On the hardness side, Hwang, Neeman, Parekh, Thompson and Wright show that beating about $0.956$ is Unique-Games-hard, assuming a vector-valued Borell conjecture ([arXiv:2111.01254](https://arxiv.org/abs/2111.01254)). Heilman (July 2026) proves the needed $k=3$ case of that inequality, with a computer-assisted spectral certificate, so the $0.956$ barrier now rests on the Unique Games Conjecture alone ([arXiv:2608.00333](https://arxiv.org/abs/2608.00333v1)).
- Without the Unique Games Conjecture, Piddock proves that approximating Quantum Max-Cut within some constant factor $\alpha<1$ is NP-hard, even on unweighted bounded-degree graphs, so there is no PTAS unless P = NP; the constant is not explicit ([arXiv:2510.07995](https://arxiv.org/abs/2510.07995v1)).
- A June 2026 hybrid algorithm with a Rydberg annealer reports a conditional $0.651$ ([arXiv:2606.27224](https://arxiv.org/abs/2606.27224v1)).
- For bipartite graphs, the antiferromagnetic Hamiltonian $H_{\mathrm{AF}}$ is stoquastic after a local basis change. In July 2026, Rayudu and Takahashi ([arXiv:2607.10765](https://arxiv.org/abs/2607.10765v1)) and Bravyi, Gosset, Liu and Wong ([arXiv:2607.14401](https://arxiv.org/abs/2607.14401v1)) independently gave efficient quantum (BQP) algorithms for its ground energy via Lee–Yang spectral-gap bounds, equivalently for $\lambda_{\max}(H_G)$.
- Classically, Wayland, Jorquera and Kolla (October 2026) estimate the bipartite ground energy in randomized polynomial time on dense balanced bipartite expanders, a class that contains $G(n,n,p)$ with high probability ([arXiv:2610.03670](https://arxiv.org/abs/2610.03670v1)). They state that the general bipartite case remains open.`,
    residual: r`For general bipartite graphs, whether a classical randomized algorithm suffices is open. The exact $\alpha^*$ lies between $0.603$ and about $0.956$ (the upper end under the Unique Games Conjecture); any improved ratio with proof, or tighter hardness, counts as progress.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Proves the k = 3 vector-valued Borell inequality in the needed correlation range, so approximating Quantum Max-Cut beyond about 0.956 is Unique-Games-hard without the Borell conjecture; computer-assisted spectral certificate.", url: "https://arxiv.org/abs/2608.00333v1", date: "2026-07-31", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Unconditional NP-hardness of approximating Quantum Max-Cut within some non-explicit constant factor, even on unweighted bounded-degree graphs; no PTAS unless P = NP.", url: "https://arxiv.org/abs/2510.07995v1", date: "2025-10-09", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Classical randomized polynomial-time estimation of the bipartite ground energy on dense balanced bipartite expanders, including G(n,n,p) with high probability; the general bipartite case remains open.", url: "https://arxiv.org/abs/2610.03670v1", date: "2026-10-02", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Best proven classical ratios: 0.603 on general graphs, 0.614 on triangle-free and 0.816 on bipartite graphs.", url: "https://arxiv.org/abs/2504.11120v1", date: "2025-04-15", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Lee–Yang spectral-gap bound giving an efficient quantum adiabatic algorithm for the ground energy of bipartite Heisenberg antiferromagnets; classical complexity open.", url: "https://arxiv.org/abs/2607.14401v1", date: "2026-07-15", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Independent Lee–Yang spectral-gap result for the same family, establishing BQP membership of bipartite ground-energy estimation.", url: "https://arxiv.org/abs/2607.10765v1", date: "2026-07-12", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Hybrid Rydberg-annealer plus SDP rounding with a conditional ratio 0.651; conditional on the quantum subroutine.", url: "https://arxiv.org/abs/2606.27224v1", date: "2026-06-25", version: "v1" },
    ],
    provenance: [
      { summary: "Bravyi, Gosset, Liu and Wong acknowledge the use of AI tools to develop proof strategies.", url: "https://arxiv.org/abs/2607.14401v1", version: "v1" },
      { summary: "Rayudu and Takahashi report using Claude Opus 4.8, Fable 5 and ChatGPT 5.5 to suggest proof ideas, obtain technical inequalities and improve presentation, with all proofs independently checked.", url: "https://arxiv.org/abs/2607.10765v1", version: "v1" },
      { summary: "Heilman reports that ChatGPT 5.6 assisted in preparing the manuscript, including producing the spectral certificates in Propositions 4.1 and 4.4 and Lemmas 9.3 and A.4.", url: "https://arxiv.org/abs/2608.00333v1", version: "v1" },
      { summary: "Wayland, Jorquera and Kolla report using AI tools to find the original proof strategy; the connection to the Bogoliubov transformation was made by Claude. All authors verified the results.", url: "https://arxiv.org/abs/2610.03670v1", version: "v1" },
    ],
    relations: [{ id: "A9", type: "related" }, { id: "B11", type: "related" }],
    refs: [
      { label: "Gharibian & Parekh, 'Almost optimal classical approximation algorithms for a quantum generalization of Max-Cut', APPROX 2019", url: "https://arxiv.org/abs/1909.08846" },
      { label: "Anshu, Gosset & Morenz, 'Beyond product state approximations for a quantum analogue of Max Cut', TQC 2020", url: "https://arxiv.org/abs/2003.14394" },
      { label: "King, 'An Improved Approximation Algorithm for Quantum Max-Cut', Quantum 7 (2023)", url: "https://arxiv.org/abs/2209.02589" },
      { label: "Lee & Parekh, 'An improved Quantum Max Cut approximation via matching' (2024)", url: "https://arxiv.org/abs/2401.03616" },
      { label: "Gribling, Sinjorgo & Sotirov, 'Improved approximation ratios for the Quantum Max-Cut problem on general, triangle-free and bipartite graphs' (2025 preprint, v1)", url: "https://arxiv.org/abs/2504.11120v1" },
      { label: "Hwang, Neeman, Parekh, Thompson & Wright, 'Unique Games hardness of Quantum Max-Cut, and a conjectured vector-valued Borell's inequality', SODA 2023", url: "https://arxiv.org/abs/2111.01254" },
      { label: "Bravyi, Gosset, Liu & Wong, 'Efficient quantum algorithm for Heisenberg spin systems' (2026 preprint, v1)", url: "https://arxiv.org/abs/2607.14401v1" },
      { label: "Rayudu & Takahashi, 'Spectral gap of Lee-Yang Hamiltonians' (2026 preprint, v1)", url: "https://arxiv.org/abs/2607.10765v1" },
      { label: "Piddock, 'Quantum Max-Cut is NP hard to approximate' (2025 preprint, v1)", url: "https://arxiv.org/abs/2510.07995v1" },
      { label: "Heilman, 'Sharp Hardness for MAX-3-CUT and Quantum MAX-CUT' (2026 preprint, v1)", url: "https://arxiv.org/abs/2608.00333v1" },
      { label: "Wayland, Jorquera & Kolla, 'Classical Algorithms for Bipartite Quantum Max-Cut on Dense Expanders' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.03670v1" },
    ] },

  { id: "A27", cat: "complexity", horizon: "sharp",
    reviewedAt: "2026-11-08",
    title: "Random circuits as pseudorandom unitaries",
    statement: r`Fix a finite universal two-qubit gate set. Does a random circuit of some fixed polynomial size $m(n)=\lceil Cn^c\rceil$, built by applying independently and uniformly chosen gates to uniformly chosen qubit pairs, form a pseudorandom unitary ensemble: indistinguishable from Haar-random unitaries by every polynomial-time quantum algorithm with forward oracle access?`,
    definition: r`**A pseudorandom unitary ensemble** (PRU) is an efficiently implementable family of unitaries that no polynomial-time quantum algorithm can distinguish from Haar-random unitaries. Random circuits are the physicists' model of scrambling and the cryptographers' natural candidate for PRUs.

Pseudorandom states and unitaries were introduced by Ji, Liu and Song, CRYPTO 2018, [arXiv:1711.00385](https://arxiv.org/abs/1711.00385).`,
    progress: r`- Approximate $t$-designs are known: random circuits of depth $O(nt^{5+o(1)})$ (Haferkamp, [arXiv:2203.16571](https://arxiv.org/abs/2203.16571); Brandão, Harrow and Horodecki, [arXiv:1208.0692](https://arxiv.org/abs/1208.0692)) and multiplicative-error designs with $\tilde O(n^2t)$ gates (Chen, Haah, Haferkamp, Liu, Metger and Tan, [arXiv:2406.07478](https://arxiv.org/abs/2406.07478)).
- PRUs exist assuming quantum-secure one-way functions (Ma and Huang, [arXiv:2410.10116](https://arxiv.org/abs/2410.10116)), and specially assembled constructions reach very low depth (Schuster, Haferkamp and Huang, [arXiv:2407.07754](https://arxiv.org/abs/2407.07754)).
- Dujmovic, Haferkamp and Poremba (October 2026) show that approximate designs are not enough: for every fixed $t$, an efficiently samplable ensemble of one- and two-qubit gates is an approximate unitary $t$-design with negligible error after $O_t(n^2\log^2 n)$ steps, yet an efficient algorithm distinguishes it from Haar with $O_t(\log^2 n)$ forward queries. This refutes a quantum analogue of the Hoory–Magen–Myers–Rackoff conjecture; they conjecture instead that local random gates forming approximate $t$-designs for $t=\Theta(n)$ are pseudorandom ([arXiv:2610.02100](https://arxiv.org/abs/2610.02100v1), also IACR ePrint 2026/2303).
- Raza, Eisert and Fefferman (September 2026) study a distinctness threshold for dedicated PRU constructions, rather than proving a result about the plain random-circuit ensemble in this entry ([arXiv:2609.03065](https://arxiv.org/abs/2609.03065v1)).`,
    residual: r`The gap is the order of quantifiers. A design for every fixed $t$ does not imply that one fixed polynomial-size ensemble defeats every polynomial-time adversary.

A proof would make the simplest physical model of chaos a cryptographic object; an efficient distinguisher for a natural random-circuit family would be equally decisive.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Pseudorandom unitaries exist assuming quantum-secure one-way functions, by a dedicated construction rather than plain random circuits.", url: "https://arxiv.org/abs/2410.10116v3", date: "2025-05-21", version: "v3" },
    ],
    provenance: [
      { summary: "Raza, Eisert and Fefferman report that ChatGPT 5.5 and 5.6 Pro were used to devise proof strategies for all main results and that one counterexample (Theorem III.5) was proposed by ChatGPT 5.6 Sol.", url: "https://arxiv.org/abs/2609.03065v1", version: "v1" },
      { summary: "Dujmovic, Haferkamp and Poremba state that preliminary versions of Theorems 1.3 and 1.4 predate their use of ChatGPT Astra, which they then used to improve and simplify the constructions and bounds, assist the technical write-up, figures and literature review, and credit for its contribution to the formulation and proof of Lemma 4.3; the authors checked the results.", url: "https://arxiv.org/abs/2610.02100v1", version: "v1" },
    ],
    relations: [{ id: "A13", type: "related" }, { id: "A31", type: "related" }],
    refs: [
      { label: "Brandão, Harrow & Horodecki, 'Local random quantum circuits are approximate polynomial-designs', Comm. Math. Phys. 346 (2016)", url: "https://arxiv.org/abs/1208.0692" },
      { label: "Haferkamp, 'Random quantum circuits are approximate unitary t-designs in depth O(nt^{5+o(1)})', Quantum 6 (2022)", url: "https://arxiv.org/abs/2203.16571" },
      { label: "Chen, Haah, Haferkamp, Liu, Metger & Tan, 'Incompressibility and spectral gaps of random circuits', FOCS 2025, 1304–1312", url: "https://arxiv.org/abs/2406.07478" },
      { label: "Ji, Liu & Song, 'Pseudorandom States, Non-Cloning Theorems and Quantum Money', CRYPTO 2018", url: "https://arxiv.org/abs/1711.00385" },
      { label: "Ma & Huang, 'How to Construct Random Unitaries', STOC 2025", url: "https://arxiv.org/abs/2410.10116" },
      { label: "Schuster, Haferkamp & Huang, 'Random unitaries in extremely low depth', Science 389 (2025)", url: "https://arxiv.org/abs/2407.07754" },
      { label: "Dujmovic, Haferkamp & Poremba, 'On the pseudorandomness of simple quantum processes' (2026 preprint, v1; also IACR ePrint 2026/2303)", url: "https://arxiv.org/abs/2610.02100v1" },
      { label: "Raza, Eisert & Fefferman, 'Distinctness threshold for pseudorandom unitaries' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.03065v1" },
    ] },

  { id: "A28", cat: "complexity", horizon: "sharp", status: "improved",
    reviewedAt: "2026-11-16",
    title: "Learning Hamiltonian structure from Gibbs states at any temperature",
    statement: r`Fix locality $k$, degree $g$ and inverse temperature $\beta>0$. For an $n$-qubit Hamiltonian $H=\sum_{P\ne I}a_PP$ with real coefficients $|a_P|\le1$, nonidentity Pauli terms of weight at most $k$, each qubit in at most $g$ terms, and unknown support, can the coefficients be learned to accuracy $\varepsilon$ from $\mathrm{poly}(n,1/\varepsilon)$ copies of $e^{-\beta H}/\mathrm{Tr}\,e^{-\beta H}$ in polynomial classical time, for every fixed $\beta$? The identity coefficient is excluded because a constant energy shift leaves the Gibbs state unchanged.`,
    definition: r`**Hamiltonian learning from Gibbs states** asks to recover the coefficients of a local Hamiltonian from copies of its thermal state; in structure learning the set of interaction terms is unknown. This is the basic inverse problem of quantum many-body physics and a benchmark for quantum learning theory.

Anshu, Arunachalam, Kuwahara and Soleimanifar gave sample-efficient learning, Nat. Phys. 17 (2021), [arXiv:2004.07266](https://arxiv.org/abs/2004.07266).`,
    progress: r`- Haah, Kothari and Tang gave optimal high-temperature algorithms ([arXiv:2108.04842](https://arxiv.org/abs/2108.04842)).
- Bakshi, Liu, Moitra and Tang learn the coefficients at any constant temperature in polynomial time, when the interaction structure is known ([arXiv:2310.02243](https://arxiv.org/abs/2310.02243)).
- For general bounded-degree interaction graphs, structure learning is solved only at high temperature: Lewis, Tang and Wright (June 2026; v2 of 2 October 2026) give an efficient algorithm below an explicit inverse-temperature threshold, and explicitly leave the all-temperature case open ([arXiv:2606.30358](https://arxiv.org/abs/2606.30358v2)).
- For lattice-like Hamiltonians, Bergamaschi (1 October 2026, v1) gives the first structure-learning algorithm at every fixed $\beta$ ([arXiv:2610.01074](https://arxiv.org/abs/2610.01074v1)). The unknown interaction graph must have bounded degree and polynomial volume growth, but no embedding is given to the learner. The algorithm uses $e^{\mathrm{poly}(\beta)}\log n$ copies, up to accuracy factors, and $n^{\mathrm{poly}(\beta)}$ time. Its "stationarity test" measures the rate of change of local observables under the detailed-balanced Gibbs-sampler Lindbladian of a guessed Hamiltonian.`,
    residual: r`Supplying all candidate Pauli terms to the known-structure algorithms breaks their bounded-degree assumption. The lattice case is now covered at every fixed $\beta$; what remains is bounded-degree interaction graphs without polynomial volume growth, such as expanders. A positive answer for every fixed $\beta$ in that generality, or a hardness result at low temperature, would settle the question.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Structure learning at every fixed inverse temperature for k-local Hamiltonians whose unknown interaction graph has bounded degree and polynomial volume growth, with e^{poly(β)} log n samples and n^{poly(β)} time; general bounded-degree interaction graphs remain open.", url: "https://arxiv.org/abs/2610.01074v1", date: "2026-10-01", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Efficient structure learning from high-temperature Gibbs states; the all-temperature case is explicitly left open.", url: "https://arxiv.org/abs/2606.30358v2", date: "2026-10-02", version: "v2" },
      { kind: "preprint", role: "progress", summary: "Polynomial-time learning of Hamiltonian coefficients from Gibbs states at any constant temperature, with known interaction structure (STOC 2024).", url: "https://arxiv.org/abs/2310.02243v2", date: "2026-05-08", version: "v2" },
    ],
    provenance: [
      { summary: "Lewis, Tang and Wright state that the main technical proofs, except the lower bound, were written without AI, checked with ChatGPT 5.6 Sol (which found issues they repaired), and that the lower-bound proof was generated with ChatGPT 6 Astra; the final proofs were written and verified by the authors.", url: "https://arxiv.org/abs/2606.30358v2", version: "v2" },
      { summary: "Bergamaschi thanks ChatGPT 5.5–6 and Gemini Argon for help with writing proofs, checking them and producing figures, and reports that ChatGPT 5.6 helped remove a log n factor in a shadow-tomography argument and simplify Lipschitz-estimate proofs.", url: "https://arxiv.org/abs/2610.01074v1", version: "v1" },
    ],
    relations: [{ id: "O9", type: "related" }, { id: "A17", type: "related" }],
    refs: [
      { label: "Anshu, Arunachalam, Kuwahara & Soleimanifar, 'Sample-efficient learning of interacting quantum systems', Nat. Phys. 17 (2021)", url: "https://arxiv.org/abs/2004.07266" },
      { label: "Haah, Kothari & Tang, 'Optimal learning of quantum Hamiltonians from high-temperature Gibbs states', FOCS 2022", url: "https://arxiv.org/abs/2108.04842" },
      { label: "Bakshi, Liu, Moitra & Tang, 'Learning quantum Hamiltonians at any temperature in polynomial time', STOC 2024", url: "https://arxiv.org/abs/2310.02243" },
      { label: "Narayanan, 'Improved algorithms for learning quantum Hamiltonians, via flat polynomials', COLT 2025", url: "https://arxiv.org/abs/2407.04540" },
      { label: "Lewis, Tang & Wright, 'Learning the structure of open quantum systems' (2026 preprint, v2)", url: "https://arxiv.org/abs/2606.30358v2" },
      { label: "Bergamaschi, 'The stationarity test: a framework for learning quantum many-body systems from their thermal states' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.01074v1" },
    ] },

  { id: "A29", cat: "complexity", horizon: "sharp",
    reviewedAt: "2026-11-08",
    title: "Public-key quantum money from standard assumptions",
    statement: r`Construct a public-key quantum money scheme (efficiently verifiable by anyone, unforgeable by any polynomial-time quantum adversary) whose security reduces to a standard, well-studied post-quantum assumption such as Learning With Errors, without indistinguishability obfuscation or idealized oracles; or show that such a reduction is impossible for natural classes of constructions.`,
    definition: r`**Public-key quantum money** uses no-cloning to make unforgeable banknotes that anyone can verify. Quantum money goes back to Wiesner; private-key schemes are well understood, and public verification is the hard part.

Standard reference: Aaronson and Christiano, “Quantum money from hidden subspaces”, STOC 2012, [arXiv:1203.4740](https://arxiv.org/abs/1203.4740).`,
    progress: r`- Aaronson and Christiano gave a scheme relative to an oracle and a hidden-subspace candidate; some concrete candidates, including a lattice-based scheme, were later broken; knots and group-action constructions require their own security assessments.
- Zhandry introduced quantum lightning, which implies public-key money, and showed that any collision-resistant hash function that is not collapsing yields it, with infinitely-often security; the same paper builds public-key money from post-quantum indistinguishability obfuscation (iO) ([arXiv:1711.02276](https://arxiv.org/abs/1711.02276)).
- In 2025, Shmueli and Zhandry built one-shot signatures, which imply public-key quantum money, from sub-exponentially secure post-quantum iO plus LWE, or unconditionally relative to a classical oracle ([arXiv:2507.12456](https://arxiv.org/abs/2507.12456)); Huang and Vaikuntanathan simplified the scheme ([arXiv:2510.10899](https://arxiv.org/abs/2510.10899v2)). These rely on iO, whose post-quantum security is itself not based on a standard assumption.`,
    residual: r`A scheme from LWE alone, or another standard assumption, would resolve the construction question. A black-box separation would establish a barrier for the specified class of reductions, without excluding non-black-box constructions.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "One-shot signatures, implying public-key quantum money, from sub-exponentially secure post-quantum iO plus LWE, or relative to a classical oracle (CRYPTO 2025); not from LWE alone.", url: "https://arxiv.org/abs/2507.12456v1", date: "2025-07-16", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Simpler one-shot signature scheme with perfect correctness; plain-model security still uses obfuscation.", url: "https://arxiv.org/abs/2510.10899v2", date: "2026-07-27", version: "v2" },
    ],
    relations: [{ id: "A22", type: "related" }],
    refs: [
      { label: "Aaronson & Christiano, 'Quantum Money from Hidden Subspaces', STOC 2012", url: "https://arxiv.org/abs/1203.4740" },
      { label: "Zhandry, 'Quantum Lightning Never Strikes the Same State Twice', EUROCRYPT 2019", url: "https://arxiv.org/abs/1711.02276" },
      { label: "Shmueli & Zhandry, 'On One-Shot Signatures, Quantum vs Classical Binding, and Obfuscating Permutations', CRYPTO 2025", url: "https://arxiv.org/abs/2507.12456" },
      { label: "Huang & Vaikuntanathan, 'A Simple and Efficient One-Shot Signature Scheme' (2025 preprint, v2)", url: "https://arxiv.org/abs/2510.10899v2" },
    ] },

  { id: "A30", cat: "complexity", horizon: "sharp", status: "claimed-solved",
    reviewedAt: "2026-11-08",
    title: "Degenerate quantum codes and the quantum Hamming bound",
    statement: r`Can an exact qubit quantum code $((n,K,d))$ with $K>1$ violate the quantum Hamming bound $K\sum_{j=0}^{t}\binom{n}{j}3^j\le 2^n$, $t=\lfloor(d-1)/2\rfloor$? The bound is proved for nondegenerate codes; the question is whether degeneracy can beat it.`,
    definition: r`**The quantum Hamming bound** (sphere-packing bound) follows from a counting argument when distinct correctable errors map the code to orthogonal subspaces. Degenerate codes, where different errors act identically on the code space, escape the argument.

Whether degenerate codes can beat the bound has been open since Gottesman's thesis, “Stabilizer codes and quantum error correction” (1997), [arXiv:quant-ph/9705052](https://arxiv.org/abs/quant-ph/9705052).`,
    progress: r`- CSS codes over large alphabets obey the bound (Sarvepalli and Klappenecker, [arXiv:0812.2674](https://arxiv.org/abs/0812.2674)).
- No code with $d<127$ violates it (Dallas, Andreadakis and Lidar, [arXiv:2208.11800](https://arxiv.org/abs/2208.11800)), assuming their numerically checked conjecture on the Li–Xing threshold length $N(d)$.
- Some subsystem codes (Bacon–Shor) do violate the subsystem analogue, which is a different question.`,
    claim: r`**Zhang and Chen, [“Degeneracy Cannot Violate the Quantum Hamming Bound”](https://arxiv.org/abs/2606.15558v1)** (arXiv:2606.15558, v1, June 2026).

What it claims:
- Every exact binary quantum subspace code with $K>1$ obeys the quantum Hamming bound, degenerate or not and additive or not.
- The proof turns the Li–Xing linear-programming polynomial into an exact intersection count for quaternary Hamming balls.

Caveats:
- A single preprint, not peer reviewed and not yet independently assessed. Hence “Claimed solved” rather than “Solved”, for the qubit statement above.`,
    residual: r`Qudit codes are outside the scope of the claimed proof.`,
    evidence: [
      { kind: "preprint", role: "claimed-solution", summary: "Claimed proof that every exact binary subspace code with K>1 obeys the quantum Hamming bound, including degenerate codes; pending assessment.", url: "https://arxiv.org/abs/2606.15558v1", date: "2026-06-14", version: "v1" },
      { kind: "preprint", role: "progress", summary: "No ((n,K,d)) code with d<127 can violate the quantum Hamming bound, assuming a numerically checked conjecture on the Li–Xing threshold length N(d).", url: "https://arxiv.org/abs/2208.11800v2", date: "2022-12-13", version: "v2" },
    ],
    relations: [{ id: "A7", type: "related" }],
    refs: [
      { label: "Gottesman, 'Stabilizer Codes and Quantum Error Correction' (PhD thesis, 1997)", url: "https://arxiv.org/abs/quant-ph/9705052" },
      { label: "Sarvepalli & Klappenecker, 'Degenerate quantum codes and the quantum Hamming bound', PRA 81 (2010)", url: "https://arxiv.org/abs/0812.2674" },
      { label: "Dallas, Andreadakis & Lidar, 'No ((n,K,d<127)) code can violate the quantum Hamming bound', IEEE BITS 2, 33–38 (2022)", url: "https://arxiv.org/abs/2208.11800" },
      { label: "Zhang & Chen, 'Degeneracy Cannot Violate the Quantum Hamming Bound' (2026 preprint, v1)", url: "https://arxiv.org/abs/2606.15558v1" },
    ] },

  { id: "A31", cat: "complexity", horizon: "sharp", status: "claimed-solved",
    reviewedAt: "2026-11-08",
    title: "The unitary synthesis problem",
    statement: r`(Aaronson–Kuperberg.) Is there a polynomial-size quantum oracle circuit family $\{A_n\}$, depending only on $n$, such that for every $n$-qubit unitary $U$ some Boolean oracle $f$ makes $A_n^f$ implement $U$ to constant error in diamond norm?`,
    definition: r`**The unitary synthesis problem** asks whether every unitary can be implemented efficiently given a suitable classical oracle, the unitary analogue of the fact that any Boolean function is computable with an oracle for it. A positive answer means classical oracles suffice for quantum transformations; a negative one would separate quantum from classical advice in a strong sense.

The question is due to Aaronson and Kuperberg, “Quantum versus classical proofs and advice”, Theory of Computing 3 (2007), [arXiv:quant-ph/0604056](https://arxiv.org/abs/quant-ph/0604056).`,
    progress: r`- Lombardi, Ma and Wright proved that one oracle query does not suffice in general ([IACR ePrint 2023/1602](https://eprint.iacr.org/2023/1602)), and Dong, Lombardi and Ma gave explicit unitaries needing two queries ([arXiv:2607.26478](https://arxiv.org/abs/2607.26478v1)).
- Rosenthal gave the best algorithm known before the claim, with about $2^{n/2}$ oracle queries, as recalled by Brakerski and Yuen ([arXiv:2605.09957](https://arxiv.org/abs/2605.09957)).
- Brakerski and Yuen connected the problem to scalable pseudorandom unitaries ([arXiv:2605.09957](https://arxiv.org/abs/2605.09957)).`,
    claim: r`**OpenAI, [“Polynomial-Time Unitary Synthesis from a Boolean Oracle”](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Polynomial-Time-Unitary-Synthesis-from-a-Boolean-Oracle-October-5-2026/paper.pdf)** (OpenAI Math Release on GitHub, public 6 October 2026, not on arXiv).

What it claims:
- A positive answer with diamond-norm error at most $1/2$ (without dividing the norm by two). No efficient classical procedure to construct the Boolean oracle from a description of $U$ is asserted.
- A polynomial-time classical algorithm outputs, for each $n$, a circuit with polynomially many gates and Boolean-oracle calls that implements any $n$-qubit unitary for a suitable oracle.

Caveats:
- Not peer reviewed, and no independent assessment was found. Hence “Claimed solved” rather than “Solved”.
- He, Ou and Zhao (3 November 2026) use this claim to prove unitaryQIP = unitaryPSPACE ([arXiv:2611.02819](https://arxiv.org/abs/2611.02819v1)). Their Theorem 4.6 restates the synthesis result with error below $2^{-\beta-1}$ and polynomial size, attributed to OpenAI. Appendix B gives a self-contained exposition of the construction. This is independent engagement and downstream use, not a refereed assessment.
- OpenAI lists itself as author and states that an internal OpenAI model produced the manuscript collection. No Lean formalization is listed for this family at the cited commit.`,
    evidence: [
      { kind: "preprint", role: "claimed-solution", summary: "Claimed positive answer to the constant-error unitary synthesis problem with a polynomial-size circuit and one Boolean oracle; OpenAI GitHub manuscript, pending assessment.", url: "https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Polynomial-Time-Unitary-Synthesis-from-a-Boolean-Oracle-October-5-2026/paper.pdf", date: "2026-10-06", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Re-exposes the synthesis construction in Appendix B and uses it for unitaryQIP = unitaryPSPACE; its exponentially precise Theorem 4.6 is attributed to OpenAI. Not a refereed assessment.", url: "https://arxiv.org/abs/2611.02819v1", date: "2026-11-03", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Explicit unitaries requiring two oracle queries, sharpening the one-query lower bound.", url: "https://arxiv.org/abs/2607.26478v1", date: "2026-07-29", version: "v1" },
    ],
    provenance: [
      { summary: "OpenAI lists itself as author and states that an internal OpenAI model produced the manuscript collection. No Lean formalization is listed for this family at the cited commit.", url: "https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/README.md" },
      { summary: "He, Ou and Zhao report extensive GPT-6 assistance with formulation, proof checks, typesetting and language; they state that they reviewed the manuscript and take responsibility for it.", url: "https://arxiv.org/abs/2611.02819v1", version: "v1" },
    ],
    relations: [{ id: "A10", type: "related" }, { id: "A27", type: "related" }],
    refs: [
      { label: "Aaronson & Kuperberg, 'Quantum Versus Classical Proofs and Advice', Theory of Computing 3 (2007)", url: "https://arxiv.org/abs/quant-ph/0604056" },
      { label: "Lombardi, Ma & Wright, 'A one-query lower bound for unitary synthesis and breaking quantum cryptography', STOC 2024", url: "https://eprint.iacr.org/2023/1602" },
      { label: "Brakerski & Yuen, 'On Scalable Pseudorandom Unitaries and the Unitary Synthesis Problem' (2026 preprint)", url: "https://arxiv.org/abs/2605.09957" },
      { label: "Dong, Lombardi & Ma, 'Explicit Separations for One-Query Unitary Synthesis' (FOCS 2026; preprint v1)", url: "https://arxiv.org/abs/2607.26478v1" },
      { label: "OpenAI, 'Polynomial-Time Unitary Synthesis from a Boolean Oracle' (OpenAI Math Release manuscript, dated 5 October 2026)", url: "https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Polynomial-Time-Unitary-Synthesis-from-a-Boolean-Oracle-October-5-2026/paper.pdf" },
      { label: "He, Ou & Zhao, 'unitaryQIP = unitaryPSPACE' (2026 preprint, v1)", url: "https://arxiv.org/abs/2611.02819v1" },
    ] },

  { id: "A32", cat: "complexity", horizon: "incremental",
    reviewedAt: "2026-11-08",
    title: "Tough error models: guaranteed code dimension for an arbitrary error space",
    statement: r`An error model is an $e$-dimensional space $E$ of operators on $\mathbb C^n$; a subspace $C$ with projector $P_C$ corrects $E$ if $P_CA^\dagger BP_C=\lambda(A,B)P_C$ for all $A,B\in E$. Let $c(e,n)$ be the largest $c$ such that every $e$-dimensional $E$ on $\mathbb C^n$ has a correcting code of dimension $c$. Known bounds give $n/e^4\lesssim c(e,n)\le\lceil n/e\rceil$. Determine the growth of $c(e,n)$ in $e$ for $n\gg e$: prove $c(e,n)\ge\kappa\,n/e^{a}$ with a universal $\kappa>0$ and some $a<4$, or construct "tough" error models whose largest correcting code has dimension $o(n/e)$, ideally matching the lower bound.`,
    definition: r`**A tough error model** is an error space whose correctable codes are as small as possible given only its dimension. Knill, Laflamme and Viola showed that large codes exist for any noise, depending solely on the dimension of the error space and not on its structure, “Theory of Quantum Error Correction for General Noise”, PRL 84, 2525 (2000), [arXiv:quant-ph/9908066](https://arxiv.org/abs/quant-ph/9908066). The question asks how large a code can be guaranteed without further information about $E$, and is [IQOQI problem 14](https://oqp.iqoqi.oeaw.ac.at/tough-error-models/).

The upper bound comes from taking $E$ spanned by $e$ orthogonal projections of dimension about $n/e$: the corresponding Lüders measurement channel carries at most $n/e$ dimensions, so $c(e,n)\le\lceil n/e\rceil$. Equivalently, a correcting code of dimension $k$ is a rank-$k$ projection compressing every operator in the Hermitian span of $\{A^\dagger B\}$, of real dimension at most $e^2$, to a multiple of itself: the joint rank-$k$ numerical range of those operators must be nonempty.`,
    progress: r`- Knill, Laflamme and Viola (2000) greedily build a code detecting a $D$-dimensional operator space for classical information, of dimension at least $\lceil n/D\rceil$, and extract a quantum code of dimension at least $\lceil\lceil n/D\rceil/(D+1)\rceil$ by a Tverberg-type partition argument; with $D\le e^2$ this gives $c(e,n)\gtrsim n/(e^2(e^2+1))$ ([arXiv:quant-ph/9908066](https://arxiv.org/abs/quant-ph/9908066)).
- Choi, Kribs and Życzkowski recast code existence as a compression problem and introduced the higher-rank numerical range (Lin. Alg. Appl. 418 (2006), [arXiv:math/0511278](https://arxiv.org/abs/math/0511278)).
- Li and Poon (J. Operator Theory 66 (2011)) showed that the joint rank-$k$ numerical range of any $m$ Hermitian operators is nonempty once $n\ge(k-1)(m+1)^2$, a slight sharpening of the Knill–Laflamme–Viola argument; with $m\le e^2$ it still gives order $n/e^4$ ([arXiv:0812.4772](https://arxiv.org/abs/0812.4772)).
- Lau, Li, Poon and Sze (J. Funct. Anal. 275 (2018)) extended non-emptiness and star-shapedness to joint $(p,q)$-matricial ranges, which they motivate by quantum error correction. They note that for $m=1,2$ the dimension condition improves to $n\ge(m+1)k-m$, linear in $m$ ([arXiv:1710.09555](https://arxiv.org/abs/1710.09555)). For a single Hermitian operator, $n\ge2k-1$ is also necessary.`,
    residual: r`The gap between order $n/e^4$ and $\lceil n/e\rceil$ remains open. A dimension condition linear in the number $m$ of Hermitian operators, as known for $m=1,2$, would raise the lower bound to order $n/e^2$; no such bound was found for $m\ge3$. No error model with largest code dimension asymptotically below $n/e$ was found either, so it is unknown which end of the gap is correct. Approximate codes and codes for specific physical noise, such as independent qubit errors, are different questions.`,
    evidence: [
      { kind: "published", role: "progress", summary: "Codes of dimension at least ⌈⌈n/D⌉/(D+1)⌉ correct any error space whose detectable span has dimension D ≤ e², whatever its structure; about n/e⁴.", url: "https://doi.org/10.1103/PhysRevLett.84.2525", date: "2000-03-13" },
      { kind: "published", role: "progress", summary: "The joint rank-k numerical range of m Hermitian operators is nonempty if n ≥ (k−1)(m+1)², giving the same n/e⁴ order for code dimension (J. Operator Theory 66, 2011).", url: "https://arxiv.org/abs/0812.4772v1", date: "2008-12-27", version: "v1" },
      { kind: "published", role: "progress", summary: "Non-emptiness and star-shapedness of joint matricial ranges for large n; a linear dimension condition (m+1)k−m only for m = 1, 2 (J. Funct. Anal. 275, 2018).", url: "https://arxiv.org/abs/1710.09555v3", date: "2018-04-04", version: "v3" },
    ],
    relations: [{ id: "A30", type: "related" }, { id: "A18", type: "related" }],
    refs: [
      { label: "Knill, Laflamme & Viola, 'Theory of Quantum Error Correction for General Noise', PRL 84, 2525 (2000)", url: "https://arxiv.org/abs/quant-ph/9908066" },
      { label: "Knill, Laflamme, Ashikhmin, Barnum, Viola & Zurek, 'Introduction to Quantum Error Correction' (2002)", url: "https://arxiv.org/abs/quant-ph/0207170" },
      { label: "Choi, Kribs & Życzkowski, 'Higher-rank numerical ranges and compression problems', Lin. Alg. Appl. 418 (2006)", url: "https://arxiv.org/abs/math/0511278" },
      { label: "Li & Poon, 'Quantum error correction and generalized numerical ranges', J. Operator Theory 66 (2011)", url: "https://arxiv.org/abs/0812.4772" },
      { label: "Lau, Li, Poon & Sze, 'Convexity and star-shapedness of matricial range', J. Funct. Anal. 275 (2018)", url: "https://arxiv.org/abs/1710.09555" },
      { label: "IQOQI Vienna Open Quantum Problems, problem 14: 'Tough error models'", url: "https://oqp.iqoqi.oeaw.ac.at/tough-error-models/" },
    ] },

  { id: "A33", cat: "complexity", horizon: "sharp",
    reviewedAt: "2026-11-08",
    title: "Quantum mass production: the cost of many copies of a state",
    statement: r`For an $m$-qubit pure state $|\psi\rangle$, let $C(\psi)$ be the least number of CNOT gates in an exact circuit of CNOTs and arbitrary single-qubit gates that prepares $|\psi\rangle$ from $|0\cdots0\rangle$, with ancillas starting and ending in $|0\rangle$. Is there a polynomial $p$ such that $\limsup_{r\to\infty}C(\psi^{\otimes r})/r\le p(m)$ for every $m$ and every $m$-qubit $|\psi\rangle$? Equivalently, can the amortized per-copy cost be made polynomial in $m$ when the number of copies is unrestricted, even though a single worst-case copy costs order $2^m$?`,
    definition: r`**Quantum mass production** asks how much cheaper it is to prepare $r$ copies of a state than $r$ times one copy. Trivially $C(\psi^{\otimes r})\le r\,C(\psi)$. For Boolean circuits, Uhlig's theorem shows that many copies of any function cost asymptotically no more than one worst-case copy. Kretschmer proved the quantum analogue for not too many copies, “Quantum Mass Production Theorems”, TQC 2023, LIPIcs 266, [arXiv:2212.14399](https://arxiv.org/abs/2212.14399).

The question of how the complexity of $|\psi\rangle^{\otimes n}$ depends on $n$ and on the complexity of $|\psi\rangle$ is [IQOQI problem 16](https://oqp.iqoqi.oeaw.ac.at/complexity-of-product-preparations/). That page proposes another cost model, rotations $\exp(i\phi\sigma_u)$ with $\sigma_u$ a product of Pauli matrices, each costing $|\phi|$, and an approximate variant. It also remarks that knowing $|\psi\rangle$ might allow it to be copied more cheaply than it is prepared.`,
    progress: r`- Kretschmer (TQC 2023) proved that for every $m$-qubit state and every $r=2^{o(m/\log m)}$, $C(\psi^{\otimes r})\le(1+o(1))2^m$, which asymptotically matches the order-$2^m$ CNOT cost of one worst-case copy (Shende, Bullock and Markov, [arXiv:quant-ph/0406176](https://arxiv.org/abs/quant-ph/0406176)). The analogue for unitaries is $(5/2+o(1))4^m$ CNOTs for $U^{\otimes r}$. He leaves the regime of larger $r$ open and recalls that for Boolean functions the amortized complexity $\lim_r C(f^{\otimes r})/r$ is polynomial in the input length; he also asks whether ancillas are necessary ([arXiv:2212.14399](https://arxiv.org/abs/2212.14399v2)).
- For the approximate version over Clifford+T, Gosset, Kothari and Wu (Quantum, 2026) implement $r$ copies of an arbitrary single-qubit unitary to error $\varepsilon$ with $O(r+\log(1/\varepsilon))$ T gates, and show this is optimal. Synthesizing each copy separately to error $\varepsilon/r$ needs order $r\log(r/\varepsilon)$ T gates ([arXiv:2411.04790](https://arxiv.org/abs/2411.04790v3)).
- Huggins, Khattar and Wiebe (30 May 2025, v1) apply mass production to parallel classical-data loading (QROM). They obtain polynomial reductions in total gate count but no advantage when only non-Clifford gates are counted ([arXiv:2506.00132](https://arxiv.org/abs/2506.00132v1)).`,
    residual: r`The amortized cost for unrestricted $r$, in particular whether it is polynomial in $m$ for every state, remains open, as does whether clean ancillas are needed. Also open: how $C(\psi^{\otimes r})$ depends on $C(\psi)$ for states of polynomial complexity, and the same questions in the IQOQI rotation-angle cost model and with an approximation parameter.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "r = 2^{o(m/log m)} copies of any m-qubit state with (1+o(1))2^m CNOTs, the cost of one worst-case copy; unitaries analogously. Published at TQC 2023; the large-r regime is left open.", url: "https://arxiv.org/abs/2212.14399v2", date: "2023-05-02", version: "v2" },
      { kind: "published", role: "progress", summary: "Optimal T-count O(r + log(1/ε)) for r copies of a single-qubit unitary to error ε, within optimal T-count state preparation and diagonal-unitary synthesis.", url: "https://doi.org/10.22331/q-2026-07-22-2168", date: "2026-07-22" },
      { kind: "preprint", role: "progress", summary: "Mass production applied to QROM data loading: polynomial reductions in total gate count, none for non-Clifford-only cost.", url: "https://arxiv.org/abs/2506.00132v1", date: "2025-05-30", version: "v1" },
    ],
    provenance: [
      { summary: "Gosset, Kothari and Wu state that large language model tools were used only for typesetting and package conflicts when switching to the journal template, after which the authors proofread.", url: "https://arxiv.org/abs/2411.04790v3", version: "v3" },
    ],
    relations: [{ id: "A24", type: "related" }],
    refs: [
      { label: "Kretschmer, 'Quantum Mass Production Theorems', TQC 2023, LIPIcs 266", url: "https://arxiv.org/abs/2212.14399" },
      { label: "Shende, Bullock & Markov, 'Synthesis of Quantum Logic Circuits', IEEE Trans. CAD 25 (2006)", url: "https://arxiv.org/abs/quant-ph/0406176" },
      { label: "Gosset, Kothari & Wu, 'Quantum state preparation with optimal T-count', Quantum 10, 2168 (2026)", url: "https://arxiv.org/abs/2411.04790v3" },
      { label: "Huggins, Khattar & Wiebe, 'Productionizing Quantum Mass Production' (2025 preprint, v1)", url: "https://arxiv.org/abs/2506.00132v1" },
      { label: "IQOQI Vienna Open Quantum Problems, problem 16: 'Complexity of product preparations'", url: "https://oqp.iqoqi.oeaw.ac.at/complexity-of-product-preparations/" },
    ] },

  { id: "A34", cat: "complexity", horizon: "sharp", status: "claimed-solved",
    reviewedAt: "2026-11-14",
    title: "Quantum query complexity beyond n/2",
    statement: r`(Kimmel; Aaronson 2014, question 5.) Is there a Boolean function $f:\{0,1\}^n\to\{0,1\}$ whose bounded-error quantum query complexity $Q_\varepsilon(f)$ is strictly greater than $n/2$?`,
    definition: r`**The $n/2$ threshold.** Parity needs exactly $\lceil n/2\rceil$ quantum queries, even with bounded error (Beals, Buhrman, Cleve, Mosca and de Wolf, [arXiv:quant-ph/9802049](https://arxiv.org/abs/quant-ph/9802049)). Van Dam's oracle interrogation recovers the whole input with $n/2+O(\sqrt n)$ queries, so every Boolean function costs at most that ([arXiv:quant-ph/9805006](https://arxiv.org/abs/quant-ph/9805006)). The polynomial method cannot prove more than $n/2$, since the degree of any Boolean function is at most $n$.

The question was posed by Shelby Kimmel and listed as question 5 of Aaronson's [“The NEW ten most annoying questions in quantum computing”](https://scottaaronson.blog/?p=1792) (May 2014).`,
    progress: r`- Farhi, Goldstone, Gutmann and Sipser showed that the $\sqrt n$ overhead is optimal for recovering the whole input ([arXiv:quant-ph/9901012](https://arxiv.org/abs/quant-ph/9901012)), but that task has many output bits.
- Ambainis, Backurs, Smotrovs and de Wolf (STACS 2013) proved that almost all Boolean functions need $n/2-o(n)$ queries, using the sum-of-squares structure of acceptance probabilities ([arXiv:1208.1122](https://arxiv.org/abs/1208.1122)).`,
    claim: r`**Deng, Hao, Lin, Liu, Mirrokni, Shao and Woodruff, [“Beyond the $n/2$ Threshold: Quantum Query Complexity for Computing Hamming Weight and Symmetric Functions”](https://arxiv.org/abs/2611.09809v1)** (arXiv:2611.09809, v1, 9 November 2026).

What it claims:
- A positive answer: the symmetric function $H_{2m}(x)=\mathrm{PARITY}(x)\oplus\mathbf 1[|x|>m]$ needs at least $m+1$ queries at every fixed error below $1/2$, for large $m$ (Theorem 1.3).
- An explicit symmetric family $F_n$ needs $n/2+\Omega(n^{1/3})$ queries at a fixed constant error (Theorem 1.2).
- Every symmetric function, and the exact Hamming weight, can be computed with $n/2+O(n^{1/3})$ queries (Theorem 1.1). The additive order $n^{1/3}$ is therefore tight for symmetric functions at small constant error.

Caveats:
- A single preprint, not peer reviewed and not yet independently assessed. Hence “Claimed solved” rather than “Solved”.
- The Lean formalization covers all the lower bounds (Theorems 1.2–1.4 and Section 5), which answer the question. It does not cover the upper bound of Theorem 1.1. The build was not rerun here.`,
    residual: r`For non-symmetric functions, it is open whether some single-bit function needs $n/2+\Omega(\sqrt n)$ queries, matching the overhead for recovering the whole input, or whether van Dam's bound can be improved to $n/2+o(\sqrt n)$ for single-bit outputs. The authors note that their lower-bound argument relies on symmetry.`,
    lean: { url: "https://drive.google.com/file/d/1YByxN8GeiwrGXNzsDj_wpVjKhYLUqT8q/view?usp=sharing", note: "The authors link a Lean 4 package (qgap_cuberoot) that formalizes all the lower bounds, including Theorem 1.3 (one query beyond n/2) and Theorem 1.2 (n/2 + Ω(n^{1/3})), in two operational query models. The algorithmic upper bound is outside its scope. The build was not rerun here." },
    evidence: [
      { kind: "preprint", role: "claimed-solution", lean: true, summary: "Explicit symmetric functions needing m+1 queries on 2m bits, and n/2 + Ω(n^{1/3}) queries, at constant error; matching n/2 + O(n^{1/3}) algorithm for Hamming weight. Lower bounds formalized in Lean according to the authors; pending assessment.", url: "https://arxiv.org/abs/2611.09809v1", date: "2026-11-09", version: "v1" },
      { kind: "published", role: "progress", summary: "Almost all n-bit Boolean functions need n/2 − o(n) bounded-error quantum queries (STACS 2013).", url: "https://doi.org/10.4230/LIPIcs.STACS.2013.446", date: "2013-02-26" },
    ],
    provenance: [
      { summary: "The authors' AI-methodology statement reports AI use for the approach, proof development, writing and bug checking. OpenAI's GPT 6 Astra Ultra found the upper bound. Google's Stellar Colosseum produced the matching lower bound, its Lean formalization and a simpler hard function. The authors state that they rewrote the analysis themselves.", url: "https://arxiv.org/abs/2611.09809v1", version: "v1" },
      { summary: "Google Research's 13 November 2026 blog post on Antigravity's /teamwork feature presents this result among its multi-agent research outcomes.", url: "https://research.google/blog/advancing-science-engineering-with-antigravitys-teamwork-feature/" },
    ],
    relations: [{ id: "A11", type: "related" }, { id: "A23", type: "related" }],
    refs: [
      { label: "Aaronson, 'The NEW ten most annoying questions in quantum computing', Shtetl-Optimized (May 2014), question 5", url: "https://scottaaronson.blog/?p=1792" },
      { label: "van Dam, 'Quantum oracle interrogation: getting all information for almost half the price', FOCS 1998", url: "https://arxiv.org/abs/quant-ph/9805006" },
      { label: "Beals, Buhrman, Cleve, Mosca & de Wolf, 'Quantum lower bounds by polynomials', J. ACM 48 (2001)", url: "https://arxiv.org/abs/quant-ph/9802049" },
      { label: "Farhi, Goldstone, Gutmann & Sipser, 'How many functions can be distinguished with k quantum queries?', PRA 60 (1999)", url: "https://arxiv.org/abs/quant-ph/9901012" },
      { label: "Ambainis, Backurs, Smotrovs & de Wolf, 'Optimal quantum query bounds for almost all Boolean functions', STACS 2013", url: "https://arxiv.org/abs/1208.1122" },
      { label: "Deng, Hao, Lin, Liu, Mirrokni, Shao & Woodruff, 'Beyond the n/2 Threshold' (2026 preprint, v1)", url: "https://arxiv.org/abs/2611.09809v1" },
    ] },

  // 16 November 2026: questions from the carte v2 map of the quant-ph corpus.
  { id: "A35",
    cat: "complexity",
    horizon: "sharp",
    status: "improved",
    reviewedAt: "2026-11-16",
    title: "Perfect state transfer at long distance in polynomial-size unweighted graphs",
    statement: r`For a simple unweighted graph $G$ with adjacency matrix $A$, perfect state transfer (PST) from $u$ to $v$ occurs if $|(e^{itA})_{vu}|=1$ for some $t>0$. (Coutinho–Guo 2024, Open Problem 2.2.) Is there an infinite family of connected simple graphs with PST between vertices at distance $d\to\infty$ whose number of vertices is bounded by a polynomial in $d$? Quantitative form (Open Problem 2.1): if PST occurs in a graph with $m$ edges and diameter $D$, the best bound is $D^3\le80m$; show $m=\Omega(D^k)$ for some $k>3$.`,
    definition: r`**Perfect state transfer** moves a qubit excitation exactly from $u$ to $v$ under the continuous-time quantum walk $e^{itA}$, as in a spin network with uniform couplings. With engineered couplings the problem is easy: Christandl, Datta, Ekert and Landahl's weighted paths transfer perfectly over any distance with $D+1$ vertices, “Perfect state transfer in quantum spin networks”, PRL 92, 187902 (2004), [arXiv:quant-ph/0309131](https://arxiv.org/abs/quant-ph/0309131). With unit weights, the standard examples, such as hypercubes and Cartesian powers of the path on three vertices, have exponentially many vertices in the transfer distance. Godsil's survey “State transfer on graphs”, [arXiv:1102.4898](https://arxiv.org/abs/1102.4898) (Discrete Math., 2012), develops the spectral theory of PST on graphs, including Cartesian products, cubelike graphs and the fact that among paths only $P_2$ and $P_3$ admit PST.

Coutinho and Guo restate the question as Open Problems 2.1 and 2.2 of “Selected open problems in continuous-time quantum walks”, Special Matrices 12 (2024), [arXiv:2404.02236](https://arxiv.org/abs/2404.02236): the earlier compression procedure “did not lead to an infinite family” of size polynomial in the diameter.`,
    progress: r`- Godsil (2012) surveyed state transfer on graphs: periodicity, Cartesian products such as hypercubes and powers of $P_3$, cubelike graphs, and PST on paths only for $P_2$ and $P_3$ ([arXiv:1102.4898](https://arxiv.org/abs/1102.4898)).
- Coutinho (Discrete Math., 2018) proved that the number of edges is bounded below by a cubic function of the eccentricity of a periodic vertex, which constrains PST graphs ([arXiv:1802.08734](https://arxiv.org/abs/1802.08734)).
- Kay (2018) built uniformly coupled graphs with PST using fewer vertices than earlier constructions for a given distance. The scaling remains exponential; Coutinho, Guo and Schmeits describe the gain as being “only […] in the base of the exponent” ([arXiv:1808.00696](https://arxiv.org/abs/1808.00696v2)).
- Coutinho, Juliano and Spier (2023) proved that $P_2$ and $P_3$ are the only trees with adjacency PST, which rules out trees as a route ([arXiv:2305.10199](https://arxiv.org/abs/2305.10199v1)).
- Coutinho and Guo (2024) combined earlier arguments with an eigenvalue-separation result to obtain $D^3\le80m$, and posed Open Problems 2.1 and 2.2 ([arXiv:2404.02236](https://arxiv.org/abs/2404.02236v1)).
- Coutinho, Guo and Schmeits (2025; v4 September 2026) introduced the weaker notion of peak state transfer, realised over arbitrary distances by weighted paths with transfer probability tending to $\pi/4$. They ask for the analogous edge lower bound (Open Problem 7.2) ([arXiv:2505.11986](https://arxiv.org/abs/2505.11986v4)).`,
    residual: r`No unweighted family of size $2^{o(d)}$ is known, and no lower bound beyond cubic. Intermediate targets: a family with a subexponential number of vertices in the transfer distance; $m=\Omega(D^{3+\delta})$ for PST between strongly cospectral vertices; the analogous bound for peak state transfer. Related open problems from the same survey are a polynomial-time test for pretty good state transfer (Open Problem 2.4) and a combinatorial characterisation of strong cospectrality (Open Problem 2.3).`,
    evidence: [
      { kind: "published",
        role: "progress",
        summary: "The number of edges is at least cubic in the eccentricity of a periodic vertex, which constrains the size of PST graphs (Discrete Math., 2018).",
        url: "https://arxiv.org/abs/1802.08734v1",
        date: "2018-02-23",
        version: "v1" },
      { kind: "preprint", role: "progress", summary: "Smaller uniformly coupled PST graphs for a given distance; the size is still exponential in the distance.", url: "https://arxiv.org/abs/1808.00696v2", date: "2018-11-24", version: "v2" },
      { kind: "preprint", role: "progress", summary: "No tree on more than three vertices admits adjacency perfect state transfer.", url: "https://arxiv.org/abs/2305.10199v1", date: "2023-05-17", version: "v1" },
      { kind: "preprint",
        role: "progress",
        summary: "Bound D³ ≤ 80m for PST graphs with m edges and diameter D; Open Problems 2.1–2.2 ask for a better exponent and a polynomial-size family. Published in Special Matrices 12 (2024).",
        url: "https://arxiv.org/abs/2404.02236v1",
        date: "2024-04-02",
        version: "v1" },
    ],
    provenance: [],
    relations: [
      { id: "A36", type: "related" },
    ],
    refs: [
      { label: "Coutinho & Guo, 'Selected open problems in continuous-time quantum walks', Special Matrices 12 (2024), §2", url: "https://arxiv.org/abs/2404.02236" },
      { label: "Godsil, 'State transfer on graphs', Discrete Math. (2012)", url: "https://arxiv.org/abs/1102.4898" },
      { label: "Coutinho, 'Quantum walks and the size of the graph', Discrete Math. (2018)", url: "https://arxiv.org/abs/1802.08734" },
      { label: "Kay, 'The Perfect State Transfer Graph Limbo' (2018 preprint)", url: "https://arxiv.org/abs/1808.00696" },
      { label: "Christandl, Datta, Ekert & Landahl, 'Perfect state transfer in quantum spin networks', PRL 92, 187902 (2004)", url: "https://arxiv.org/abs/quant-ph/0309131" },
      { label: "Coutinho, Juliano & Spier, 'No perfect state transfer in trees with more than 3 vertices' (2023)", url: "https://arxiv.org/abs/2305.10199" },
      { label: "Coutinho, Guo & Schmeits, 'Peak state transfer in continuous quantum walks' (2025 preprint, v4)", url: "https://arxiv.org/abs/2505.11986" },
    ] },

  { id: "A36",
    cat: "complexity",
    horizon: "sharp",
    status: "improved",
    reviewedAt: "2026-11-16",
    title: "Uniform mixing of continuous-time quantum walks on cycles",
    statement: r`The continuous-time quantum walk on a graph $G$ with $n$ vertices mixes uniformly at time $\tau$ if $|(e^{i\tau A})_{uv}|^2=1/n$ for all vertices $u,v$. Conjecture (Ahmadi, Belk, Tamon and Wendler, 2003): no cycle $C_n$ with $n\ge5$ admits uniform mixing. Even cycles and prime cycles are settled, as are $C_9$ and $C_{15}$; the smallest open case is $C_{21}$ (Gray, Patel and Young, 2026). Related conjecture (Mullin; Coutinho–Guo 2024, Open Problem 3.1): if any graph mixes uniformly at time $\tau$, the eigenvalues of $e^{i\tau A}$ are roots of unity.`,
    definition: r`**Instantaneous uniform mixing** means that the walk started at any vertex is, at time $\tau$, equally likely to be found at every vertex. For cycles the question reduces to the existence of certain cyclic $n$-roots, which is why Haagerup's results on cyclic $p$-roots and Gröbner-basis computations enter. The question goes back to Ahmadi, Belk, Tamon and Wendler, “Mixing in continuous quantum walks on graphs”, QIC 3, 611 (2003), [arXiv:quant-ph/0209106](https://arxiv.org/abs/quant-ph/0209106). Godsil, Mullin and Roy settled even and prime cycles, “Uniform mixing and association schemes”, Electron. J. Combin. 24(3), P3.22 (2017), [arXiv:1301.5889](https://arxiv.org/abs/1301.5889).

The cycle conjecture is recalled as open by Cao and Zhu ([arXiv:2607.04207](https://arxiv.org/abs/2607.04207), §1 and conclusion, where Mullin's root-of-unity conjecture also appears). Gray, Patel and Young name $C_{21}$ as the next open case ([arXiv:2607.28345](https://arxiv.org/abs/2607.28345), conclusion). The general root-of-unity question is Open Problem 3.1 of Coutinho and Guo ([arXiv:2404.02236](https://arxiv.org/abs/2404.02236)).`,
    progress: r`- Ahmadi, Belk, Tamon and Wendler (2003) studied mixing of continuous-time walks on cycles and conjectured that uniform mixing fails on $C_n$ for $n\ge5$, as recalled by Cao and Zhu; $C_3$ and $C_4$ do mix uniformly ([arXiv:quant-ph/0209106](https://arxiv.org/abs/quant-ph/0209106)).
- Godsil, Mullin and Roy (2013; EJC 2017) proved that uniform mixing does not occur on $C_{2m}$ for $m\ge3$, nor, using a result of Haagerup on cyclic $p$-roots, on $C_p$ for primes $p\ge5$. They showed that $\varepsilon$-uniform mixing does occur on every prime cycle ([arXiv:1301.5889](https://arxiv.org/abs/1301.5889v2)). Mullin's 2013 Waterloo thesis contains the same cycle results.
- Cao and Zhu (5 July 2026) excluded $C_9$, and $C_{15}$ using Dickson polynomials, and proved $\varepsilon$-uniform mixing on $C_{p^2}$ for every prime $p$ ([arXiv:2607.04207](https://arxiv.org/abs/2607.04207v1)).
- Gray, Patel and Young (30 July 2026) independently excluded $C_9$ by Gröbner-basis computations ruling out all cyclic 9-roots. They identify $C_{21}$ as the next open case and report that their method is too heavy for larger $n$ ([arXiv:2607.28345](https://arxiv.org/abs/2607.28345v1)).`,
    residual: r`Open for every odd composite $n$ other than $9$ and $15$, starting with $21$, $25$ and $27$. Sub-targets: exclude $C_{21}$; exclude $C_{3p}$ for all primes $p\ge5$, extending the Dickson-polynomial argument for $C_{15}$; exclude $C_{p^k}$ for $k\ge2$. The root-of-unity conjecture is open for general graphs; Coutinho and Guo note that it holds in every known example but has no combinatorial explanation.`,
    evidence: [
      { kind: "published",
        role: "progress",
        summary: "No uniform mixing on even cycles C_{2m} (m ≥ 3) or prime cycles C_p (p ≥ 5); ε-uniform mixing on all prime cycles. Electron. J. Combin. 24(3), P3.22 (2017).",
        url: "https://arxiv.org/abs/1301.5889v2",
        date: "2014-03-11",
        version: "v2" },
      { kind: "preprint", role: "progress", summary: "No uniform mixing on C_9 or C_15 (the latter via Dickson polynomials); ε-uniform mixing on C_{p²} for every prime p.", url: "https://arxiv.org/abs/2607.04207v1", date: "2026-07-05", version: "v1" },
      { kind: "preprint",
        role: "progress",
        summary: "Independent proof that C_9 admits no uniform mixing, by Gröbner bases over cyclic 9-roots; C_21 named as the next open case.",
        url: "https://arxiv.org/abs/2607.28345v1",
        date: "2026-07-30",
        version: "v1" },
    ],
    provenance: [],
    relations: [
      { id: "A35", type: "related" },
    ],
    refs: [
      { label: "Ahmadi, Belk, Tamon & Wendler, 'Mixing in Continuous Quantum Walks on Graphs', QIC 3, 611 (2003)", url: "https://arxiv.org/abs/quant-ph/0209106" },
      { label: "Godsil, Mullin & Roy, 'Uniform Mixing and Association Schemes', Electron. J. Combin. 24(3), P3.22 (2017)", url: "https://arxiv.org/abs/1301.5889" },
      { label: "Mullin, 'Uniform Mixing of Quantum Walks and Association Schemes', PhD thesis, University of Waterloo (2013)", url: "https://uwspace.uwaterloo.ca/handle/10012/7918" },
      { label: "Cao & Zhu, 'Uniform mixing and ε-uniform mixing on cycles' (2026 preprint)", url: "https://arxiv.org/abs/2607.04207" },
      { label: "Gray, Patel & Young, 'The cycle C9 does not admit uniform mixing' (2026 preprint)", url: "https://arxiv.org/abs/2607.28345" },
      { label: "Coutinho & Guo, 'Selected open problems in continuous-time quantum walks', Special Matrices 12 (2024), §3", url: "https://arxiv.org/abs/2404.02236" },
    ] },

  { id: "A37",
    cat: "complexity",
    horizon: "sharp",
    reviewedAt: "2026-11-16",
    title: "Carleman convergence for nonresonant spectra in the Siegel domain",
    statement: r`(Jennings, Korzekwa, Lostaglio, Sornborger, Subasi and Wang, 2025–2026, §1.3.1, §5 and §8.) Let $\dot x=F_1x+F_2x^{\otimes2}$ on $\mathbb C^N$, with $F_1=Q\,\mathrm{diag}(\lambda_1,\dots,\lambda_N)Q^{-1}$ and $\mathrm{Re}\,\lambda_i\le0$. Assume the spectrum is nonresonant, $\lambda_i\neq\sum_j\alpha_j\lambda_j$ for all $\alpha\in\mathbb N_0^N$ with $|\alpha|\ge2$, and lies in the Siegel domain: $0$ belongs to the convex hull of $\{\lambda_i\}$. Assume moreover that it is of Diophantine type $(\Delta,\nu)$ with $\nu>0$: $|\lambda_i-\sum_j\alpha_j\lambda_j|\ge\Delta\,(|\alpha|-1)^{-\nu}$. Let $y^{[1]}_k(t)$ be the first block of the order-$k$ truncated Carleman embedding. Is there a smallness condition on $s\,\|Q^{-1}F_2Q^{\otimes2}\|\,\sup_t\|Q^{-1}x(t)\|/\Delta$, depending only on $\nu$ ($s$ the column sparsity of $Q^{-1}F_2Q^{\otimes2}$), under which $\sup_{t\le T}\|x(t)-y^{[1]}_k(t)\|\to0$ as $k\to\infty$, ideally with $k=\mathrm{polylog}(T/\varepsilon)$ sufficing? Or is there a Diophantine Siegel-domain system for which the truncation error does not converge at arbitrarily small nonlinearity?`,
    definition: r`**Carleman linearization** embeds a polynomial ODE into an infinite linear system for the monomials $x,x^{\otimes2},x^{\otimes3},\dots$, truncated at order $k$. It underlies the quantum algorithms for nonlinear ODEs of Liu et al., “Efficient quantum algorithm for dissipative nonlinear differential equations”, PNAS 118, e2026805118 (2021), [arXiv:2011.03185](https://arxiv.org/abs/2011.03185). Explicit finite-time truncation bounds are due to Forets and Pouly ([arXiv:1711.02552](https://arxiv.org/abs/1711.02552)).

**Poincaré and Siegel domains.** A spectrum lies in the Poincaré domain if $0$ is outside the convex hull of the eigenvalues, and in the Siegel domain otherwise. In the Poincaré domain the no-resonance denominators $|\lambda_i-\sum_j\alpha_j\lambda_j|$ grow linearly with $|\alpha|$. In the Siegel domain they can approach zero: this is the small-denominator problem of normal-form theory, treated by Siegel's linearization theorem under a Diophantine condition. Purely imaginary spectra, such as nonlinear oscillators, lie in the Siegel domain.

The question is posed by Jennings et al. ([arXiv:2509.07155](https://arxiv.org/abs/2509.07155)), who write that “a complete resolution of the convergence behavior of the Carleman scheme for nonresonant systems in the Siegel domain remains an open problem” (§1.3.1).`,
    progress: r`- Forets and Pouly (2017) gave explicit truncation-error bounds for Carleman linearization, which grow with time ([arXiv:1711.02552](https://arxiv.org/abs/1711.02552v1)).
- Liu et al. (PNAS 2021) proved arbitrary-time convergence for dissipative systems with $R<1$ ([arXiv:2011.03185](https://arxiv.org/abs/2011.03185)). Jennings et al. later showed that the proof implicitly assumes $F_1$ normal, and corrected it.
- Jennings et al. (Quantum 10, 2233, 2026) explicitly diagonalize the Carleman matrix of nonresonant systems. In the Poincaré domain they prove convergence when $F_0=0$ and $R_\Delta<1$, with $R_\Delta$ built from the sparsity, $\|Q^{-1}F_2Q^{\otimes2}\|$, the norm bound on $Q^{-1}x(t)$ and the normalized no-resonance gap (Theorem 5.9). In the Siegel domain, under the type-$(\Delta,\nu)$ assumption, their error bound (Theorem I.5) contains a factor $k!\,\Xi_\nu(k-1)$ that grows faster than $C^k$. It therefore does not imply convergence, even for arbitrarily small nonlinearity. They prove convergence in two special cases: $F_2$ does not couple two invariant sub-blocks that each lie in the Poincaré domain (Assumption 5.10, Theorem 5.12), and $F_2$ oscillates in time (Theorem 5.13). They state that this “does not show that Carleman convergence necessarily fails in the Siegel domain” (§5.4.2) ([arXiv:2509.07155](https://arxiv.org/abs/2509.07155v3)).
- Boreale and Collodi (23 June 2026) give degree-aware Carleman error bounds with geometric convergence over certified finite horizons. They do not address the Siegel domain ([arXiv:2606.24473](https://arxiv.org/abs/2606.24473v1)).`,
    residual: r`The general Siegel case is open in both directions: there is neither a convergence theorem nor a counterexample. Minimal targets: (i) a purely imaginary, nonresonant spectrum satisfying the stated Diophantine condition, without the decoupling assumption of Theorem 5.12; (ii) an explicit Diophantine example whose truncation error stays bounded away from zero as $k\to\infty$ at arbitrarily small $\|F_2\|$. The pair $-\gamma\pm i\omega$ is not a nonresonant Siegel example: for $\gamma>0$ it is in the Poincaré domain, and at $\gamma=0$ it has the cubic resonance $\lambda_1=2\lambda_1+\lambda_2$. A positive answer would extend the authors' efficient quantum algorithms, which also require $\kappa(Q)=O(1)$. Whether that dependence on $\kappa(Q)$ is intrinsic is a separate question the authors leave open (§1.3.2).`,
    evidence: [
      { kind: "published",
        role: "progress",
        summary: "Carleman convergence for nonresonant systems in the Poincaré domain when R_Δ < 1. In the Siegel domain, under a Diophantine type-(Δ, ν) assumption, an error bound with a k!·Ξ_ν(k−1) factor that does not imply convergence; convergence only for F₂ decoupling two Poincaré-domain blocks, or for oscillating F₂ (Quantum 10, 2233, 2026).",
        url: "https://doi.org/10.22331/q-2026-10-08-2233",
        date: "2026-10-08" },
      { kind: "preprint",
        role: "progress",
        summary: "Degree-aware Carleman truncation bounds with geometric convergence over certified finite time horizons; the Siegel domain is not addressed.",
        url: "https://arxiv.org/abs/2606.24473v1",
        date: "2026-06-23",
        version: "v1" },
    ],
    provenance: [],
    relations: [],
    refs: [
      { label: "Jennings, Korzekwa, Lostaglio, Sornborger, Subasi & Wang, 'Quantum algorithms for general nonlinear dynamics based on the Carleman embedding', Quantum 10, 2233 (2026)",
        url: "https://arxiv.org/abs/2509.07155" },
      { label: "Liu, Kolden, Krovi, Loureiro, Trivisa & Childs, 'Efficient quantum algorithm for dissipative nonlinear differential equations', PNAS 118, e2026805118 (2021)",
        url: "https://arxiv.org/abs/2011.03185" },
      { label: "Forets & Pouly, 'Explicit Error Bounds for Carleman Linearization' (2017 preprint)", url: "https://arxiv.org/abs/1711.02552" },
      { label: "Boreale & Collodi, 'New convergence results for Carleman linearization' (2026 preprint, v1)", url: "https://arxiv.org/abs/2606.24473" },
    ] },

  { id: "A38",
    cat: "complexity",
    horizon: "incremental",
    reviewedAt: "2026-11-16",
    title: "Global convergence of iterative QSP phase-factor solvers",
    statement: r`(L. Lin, ICM 2026, §9; Dong, Lin, Ni and Wang, 2023.) Let $f$ be a real polynomial of degree $d$ and parity $d\bmod2$ with $\|f\|_{\infty,[-1,1]}\le1-\eta$, let $\mathbf c\in\mathbb R^{\tilde d}$, $\tilde d=\lceil(d+1)/2\rceil$, be its Chebyshev coefficients, and let $F$ map reduced symmetric phase factors $\Phi\in\mathbb R^{\tilde d}$ to the Chebyshev coefficients of the corresponding symmetric-QSP polynomial. Prove that the Newton iteration of Dong–Lin–Ni–Wang for $F(\Phi)=\mathbf c$, started at $\Phi_0=\mathbf 0$, converges (to the maximal solution) for every such $f$, with an explicit bound on the number of iterations in terms of $d$, $\eta$ and the target accuracy; or construct admissible $f$ on which it fails. The same question applies to the fixed-point iteration $\Phi_{t+1}=\Phi_t-\tfrac12(F(\Phi_t)-\mathbf c)$ beyond the proven regime $\|\mathbf c\|_1\le0.861$.`,
    definition: r`**Quantum signal processing (QSP)** interleaves a signal rotation $e^{i\arccos(x)X}$ with phase rotations $e^{i\phi_jZ}$; a matrix element of the product is a polynomial in $x$. Finding the phase factors $\phi_j$ that realize a target polynomial is a classical preprocessing step for QSVT-based algorithms. In **symmetric QSP**, the phase factors are palindromic and the problem reduces to a square nonlinear system $F(\Phi)=\mathbf c$. Wang, Dong and Lin studied its optimization landscape, Quantum 6, 850 (2022), [arXiv:2110.04993](https://arxiv.org/abs/2110.04993).

Iterative solvers started at $\Phi_0=\mathbf 0$ need no complementary polynomial and use only matrix products, which makes them simple and stable in practice; they are used in QSPPACK. The question is posed in Lin Lin's ICM 2026 survey ([arXiv:2510.00443](https://arxiv.org/abs/2510.00443)): “It remains an open question to establish the theoretical guarantees to justify the superior performance of the Newton-type algorithm” (§9).`,
    progress: r`- Wang, Dong and Lin (Quantum 2022) showed that optimization from $\Phi_0=\mathbf 0$ converges locally when $\|f\|_\infty=O(1/d)$, at cost $O(d^2\log(1/\epsilon))$ ([arXiv:2110.04993](https://arxiv.org/abs/2110.04993v2)).
- Dong, Lin, Ni and Wang (Quantum 2024) introduced the fixed-point iteration (FPI) and proved by a contraction argument that it converges linearly to the maximal solution when $\|\mathbf c\|_1\le0.861$ ([arXiv:2209.10162](https://arxiv.org/abs/2209.10162v3)).
- Dong, Lin, Ni and Wang (SIAM J. Sci. Comput. 46, 2024) proposed the Newton method and observed fast convergence in all regimes tested, including the fully coherent regime $\eta\to0$. They note that convergence in an $\ell^1$ neighbourhood of $\mathbf 0$ follows from the same contraction argument as for FPI, give no further proof, and call its behaviour in the fully coherent regime “a mystery” ([arXiv:2307.12468](https://arxiv.org/abs/2307.12468v1)).
- Ni and Ying (2024) reduced the cost per FPI iteration to $O(d\log^2d)$. Their convergence guarantee is the FPI regime $\|\hat f\|_1<0.861$, and they report that FPI fails to converge in the fully coherent regime ([arXiv:2410.06409](https://arxiv.org/abs/2410.06409v2)).
- Non-iterative algorithms with stability proofs now exist for $\eta>0$: the Riemann–Hilbert–Weiss algorithm (Alexis, Lin, Mnatsakanyan, Thiele and Wang, CPAM 2026, [arXiv:2407.05634](https://arxiv.org/abs/2407.05634v3)) and the inverse nonlinear FFT with near-linear cost (Ni, Sarkar, Ying and Lin, [arXiv:2505.12615](https://arxiv.org/abs/2505.12615v1)). They settle the existence of a stable phase-factor algorithm, but not the behaviour of the iterative methods.`,
    residual: r`No global convergence guarantee is known for the Newton method or for FPI beyond $\|\mathbf c\|_1\le0.861$. The metric is the class of targets covered. Intermediate targets: FPI or Newton convergence for $\|\mathbf c\|_1\le1-\eta$, or for $\|f\|_\infty\le c$ with a constant $c$ independent of $d$. A further target is an iteration bound polylogarithmic in $d/(\eta\epsilon)$ for Newton. Also open: whether the extensively observed convergence to the maximal solution reflects a unique solution of $F$ in a neighbourhood of $\mathbf 0$ (Dong–Lin–Ni–Wang). The neighbouring infinite-QSP question, whether the $L^1$ theory extends to all admissible functions, is also stated as open in the ICM survey (§5.1).`,
    evidence: [
      { kind: "published",
        role: "progress",
        summary: "Fixed-point iteration from Φ₀ = 0 converges linearly to the maximal solution when the Chebyshev coefficients satisfy ‖c‖₁ ≤ 0.861 (Quantum 8, 1558, 2024).",
        url: "https://arxiv.org/abs/2209.10162v3",
        date: "2024-12-07",
        version: "v3" },
      { kind: "published",
        role: "progress",
        summary: "Newton method for symmetric QSP: empirically robust in all regimes; provable convergence only in an ℓ¹ neighbourhood of 0, the fully coherent regime is unexplained (SIAM J. Sci. Comput. 46, 2024).",
        url: "https://arxiv.org/abs/2307.12468v1",
        date: "2023-07-24",
        version: "v1" },
      { kind: "published", role: "progress", summary: "Local convergence of optimization from Φ₀ = 0 when ‖f‖∞ = O(1/d) (Quantum 6, 850, 2022).", url: "https://arxiv.org/abs/2110.04993v2", date: "2022-10-27", version: "v2" },
      { kind: "preprint",
        role: "progress",
        summary: "Fast fixed-point iteration with O(d log² d) cost per iteration, guaranteed only for ‖f̂‖₁ < 0.861; FPI fails numerically in the fully coherent regime.",
        url: "https://arxiv.org/abs/2410.06409v2",
        date: "2024-10-28",
        version: "v2" },
    ],
    provenance: [],
    relations: [],
    refs: [
      { label: "Lin, 'Mathematical and numerical analysis of quantum signal processing', Proceedings ICM 2026", url: "https://arxiv.org/abs/2510.00443" },
      { label: "Dong, Lin, Ni & Wang, 'Robust iterative method for symmetric quantum signal processing in all parameter regimes', SIAM J. Sci. Comput. 46 (2024)",
        url: "https://arxiv.org/abs/2307.12468" },
      { label: "Dong, Lin, Ni & Wang, 'Infinite quantum signal processing', Quantum 8, 1558 (2024)", url: "https://arxiv.org/abs/2209.10162" },
      { label: "Wang, Dong & Lin, 'On the energy landscape of symmetric quantum signal processing', Quantum 6, 850 (2022)", url: "https://arxiv.org/abs/2110.04993" },
      { label: "Ni & Ying, 'Fast Phase Factor Finding for Quantum Signal Processing' (2024 preprint)", url: "https://arxiv.org/abs/2410.06409" },
      { label: "Alexis, Lin, Mnatsakanyan, Thiele & Wang, 'Infinite quantum signal processing for arbitrary Szegő functions', Comm. Pure Appl. Math. 79 (2026)",
        url: "https://arxiv.org/abs/2407.05634" },
      { label: "Ni, Sarkar, Ying & Lin, 'Inverse nonlinear fast Fourier transform on SU(2) with applications to quantum signal processing' (2025 preprint)",
        url: "https://arxiv.org/abs/2505.12615" },
    ] },

  { id: "A39",
    cat: "complexity",
    horizon: "sharp",
    status: "improved",
    reviewedAt: "2026-11-26",
    title: "Bound magic states for qubits",
    statement: r`Let $\rho$ be a single-qubit state whose Bloch vector lies outside the stabilizer octahedron, $|r_x|+|r_y|+|r_z|>1$. Stabilizer protocols may use stabilizer-state ancillas, Clifford unitaries, Pauli measurements with classical feed-forward, postselection with nonzero success probability, and partial trace. Prove or disprove that for every such $\rho$ and every $\varepsilon>0$ there are $n$ and a stabilizer protocol mapping $\rho^{\otimes n}$ to a qubit state $\varepsilon$-close to a Clifford image of $|T\rangle$ or $|H\rangle$; that is, whether qubit bound magic states exist when the number of copies is unbounded. (Bravyi–Kitaev 2005; Campbell–Browne 2010.)`,
    definition: r`**Magic state distillation** turns many noisy copies of a non-stabilizer state into fewer, purer ones using only operations that are classically simulable on their own, which makes Clifford circuits universal. States inside the stabilizer octahedron are useless by the Gottesman–Knill theorem. Bravyi and Kitaev called the computational power of the model in the region between the octahedron and their distillation threshold “the most exciting open problem”, “Universal quantum computation with ideal Clifford gates and noisy ancillas”, PRA 71, 022316 (2005), [arXiv:quant-ph/0403025](https://arxiv.org/abs/quant-ph/0403025). By analogy with bound entanglement, Campbell and Browne called non-distillable states outside the octahedron *bound states* for magic state distillation, PRL 104, 030503 (2010), [arXiv:0908.0836](https://arxiv.org/abs/0908.0836).

The question is recalled as open in 2026 by Liu, Haug, Ye, Liu and Roth ([arXiv:2512.16777](https://arxiv.org/abs/2512.16777v2), Sec. III), by Zurel, Jana and de Silva, who state that a positive answer would require protocols of increasing size whose thresholds converge to the octahedron boundary ([arXiv:2603.18560](https://arxiv.org/abs/2603.18560v2)), and Sethi, who extends the Campbell–Browne bound, writes that even “what single qubit states have magic” remains open ([arXiv:2610.37807](https://arxiv.org/abs/2610.37807v1)).`,
    progress: r`- Bravyi and Kitaev (2004) distill $|T\rangle$-type states with the five-qubit code up to $\epsilon\approx0.173$ and $|H\rangle$-type states up to $\epsilon\approx0.141$, leaving a gap to the octahedron in both directions ([arXiv:quant-ph/0403025](https://arxiv.org/abs/quant-ph/0403025v2)).
- Reichardt (2005) improves the $H$-direction protocols to a sharp threshold, at the octahedron boundary, in that direction; the $T$ direction remains open ([arXiv:quant-ph/0411036](https://arxiv.org/abs/quant-ph/0411036)).
- Campbell and Browne (2009–2010) prove that for every fixed number $n$ of copies, $n$-to-one protocols cannot improve states in a region just above the octahedron faces. They state that this does not rule out protocols with growing $n$ reaching a tight threshold ([arXiv:0908.0836](https://arxiv.org/abs/0908.0836v3); structure theorem in [arXiv:0908.0838](https://arxiv.org/abs/0908.0838)).
- For qudits of odd prime dimension, states with non-negative Wigner function are efficiently simulable, so non-stabilizer Wigner-positive states are bound magic (Veitch, Ferrie, Gross and Emerson, NJP 14, 113011 (2012), [arXiv:1201.1256](https://arxiv.org/abs/1201.1256)). Frembs shows that the normalized projector onto the complement of an unextendible stabiliser set is magic and "bound magic in odd prime dimension, yet need not be for qubits" ([arXiv:2608.10202](https://arxiv.org/abs/2608.10202v1)).
- Sethi (29 October 2026, v1) gives an explicit lower bound, as a function of $n$, on the region of non-distillable states for $n$-to-one Clifford reductions. The certified region shrinks toward the octahedron as $n$ grows ([arXiv:2610.37807](https://arxiv.org/abs/2610.37807v1)).
- Kitzinger, Eisert and Kunjwal (25 November 2026, v1) prove that bound magic exists for every number $n\ge3$ of qubits in the full asymptotic sense of this question: some $n$-qubit non-stabilizer states yield no pure magic state, even approximately, from any number of copies under adaptive stabilizer operations with postselection ([arXiv:2611.34872](https://arxiv.org/abs/2611.34872v1), Theorem 2 and Corollary 3). Their analogue of the positive-partial-transpose criterion is the convex hull $B_n$ of outputs of Pauli channels whose Choi state has a positive partial transpose. This family is closed under tensor products and stabilizer operations and strictly contains the stabilizer polytope at $n=3$; an explicit example applies a Pauli channel built from 21 three-qubit Paulis to $|000\rangle+|{+}{+}{+}\rangle$ (normalized). A linear program over the 1080 three-qubit stabilizer states, run here, confirms that this example lies outside the stabilizer polytope. The single-qubit question asked here is untouched: $B_1$ is the octahedron, and since the family is closed under partial trace, no tensor power of a single-qubit state outside the octahedron lies in it. The authors find $B_2=\mathrm{STAB}_2$ numerically and state that bound magic for one and two qubits remains open.`,
    residual: r`Open in the $T$ direction, and for general single-qubit states. A positive answer needs a family of protocols whose thresholds converge to the octahedron faces. A negative answer needs a region of non-distillable states that is uniform in $n$, for all stabilizer protocols, including those with several outputs. Bound magic now exists for three or more qubits (Kitzinger, Eisert and Kunjwal, November 2026), but their tensor-stable criterion reduces to the octahedron for one qubit, so a single-qubit answer needs a different invariant. Beating the five-qubit $T$ threshold, a narrower target, is listed separately.`,
    evidence: [
      { kind: "published",
        role: "progress",
        summary: "Five-qubit T-type distillation up to ε ≈ 0.173 and H-type up to ε ≈ 0.141; the region between these thresholds and the stabilizer octahedron is left open (PRA 71, 022316).",
        url: "https://arxiv.org/abs/quant-ph/0403025v2",
        date: "2004-12-16",
        version: "v2" },
      { kind: "published", role: "progress", summary: "Sharp distillation threshold in the H (edge) direction; the T direction remains open (Quant. Inf. Proc. 4, 251).", url: "https://arxiv.org/abs/quant-ph/0411036v1", date: "2004-11-04", version: "v1" },
      { kind: "published",
        role: "progress",
        summary: "For every fixed number of copies, a region of non-distillable states exists just outside the stabilizer octahedron; protocols with unbounded copies are not excluded (PRL 104, 030503).",
        url: "https://arxiv.org/abs/0908.0836v3",
        date: "2010-02-01",
        version: "v3" },
      { kind: "preprint", role: "progress", summary: "Explicit n-dependent lower bound on the non-distillable region for n-to-one Clifford reductions of single-qubit states.", url: "https://arxiv.org/abs/2610.37807v1", date: "2026-10-29", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Bound magic exists for every n ≥ 3 qubits: a tensor-stable, stabilizer-closed set of outputs of PPT Pauli channels strictly contains the three-qubit stabilizer polytope. It reduces to the octahedron for one qubit (and numerically to the stabilizer polytope for two), so the single-qubit question is untouched.", url: "https://arxiv.org/abs/2611.34872v1", date: "2026-11-25", version: "v1" },
    ],
    provenance: [
      { summary: "Kitzinger, Eisert and Kunjwal report that Claude (Opus 5.5, Fable 5.2) and ChatGPT (5.6 Sol, 6.1 Sol) were used to automate coding, to prove and disprove mathematical conjectures and for literature searches, and that ChatGPT 6.1 Sol was used for language editing and for checking mathematical details of the manuscript.", url: "https://arxiv.org/abs/2611.34872v1", version: "v1" },
    ],
    relations: [
      { id: "A40", type: "benchmark" },
      { id: "E1", type: "related" },
      { id: "E29", type: "related" },
      { id: "N10", type: "related" },
    ],
    refs: [
      { label: "Bravyi & Kitaev, 'Universal quantum computation with ideal Clifford gates and noisy ancillas', PRA 71, 022316 (2005)", url: "https://arxiv.org/abs/quant-ph/0403025" },
      { label: "Campbell & Browne, 'Bound States for Magic State Distillation in Fault-Tolerant Quantum Computation', PRL 104, 030503 (2010)",
        url: "https://arxiv.org/abs/0908.0836" },
      { label: "Reichardt, 'Improved magic states distillation for quantum universality', Quant. Inf. Proc. 4, 251 (2005)", url: "https://arxiv.org/abs/quant-ph/0411036" },
      { label: "Veitch, Ferrie, Gross & Emerson, 'Negative quasi-probability as a resource for quantum computation', NJP 14, 113011 (2012)",
        url: "https://arxiv.org/abs/1201.1256" },
      { label: "Zurel, Jana & de Silva, 'High-threshold magic state distillation with quantum quadratic residue codes', Quantum Sci. Technol. 11, 045052 (2026)",
        url: "https://arxiv.org/abs/2603.18560" },
      { label: "Sethi, 'Lower Bound for Region of Non-Distillable Magic States' (2026 preprint)", url: "https://arxiv.org/abs/2610.37807" },
      { label: "Kitzinger, Eisert & Kunjwal, 'Bound magic in multi-qubit systems' (2026 preprint, v1)", url: "https://arxiv.org/abs/2611.34872v1" },
    ] },

  { id: "A40",
    cat: "complexity",
    horizon: "incremental",
    reviewedAt: "2026-11-16",
    title: "Beating the five-qubit threshold for T-type magic state distillation",
    statement: r`For the $T$-axis noise model $\rho_T(\epsilon)=(1-\epsilon)|T\rangle\langle T|+\epsilon|T^\perp\rangle\langle T^\perp|$, to which any single-qubit input can be twirled, the Bravyi–Kitaev five-qubit protocol distills for $\epsilon<\epsilon_5=(7-\sqrt{21})/14\approx0.1727$, and the stabilizer octahedron is reached at $\epsilon_{\max}=(1-1/\sqrt3)/2\approx0.2113$. Find a stabilizer distillation protocol for $T$-type states with threshold $\epsilon^\ast>\epsilon_5$, or prove that none exists within a stated class of protocols. (Kalra–Prakash 2025, Sec. 2 and Sec. 7.)`,
    definition: r`**Distillation threshold.** A protocol has threshold $\epsilon^\ast$ if, iterated, it drives every input with $\epsilon<\epsilon^\ast$ to a pure magic state. For $[[n,1]]$ codes with a transversal Clifford $M_3$ of order three, the threshold is determined by the code's signed weight enumerators (Rall, [arXiv:1702.06990](https://arxiv.org/abs/1702.06990)). The five-qubit protocol is from Bravyi and Kitaev, PRA 71, 022316 (2005), [arXiv:quant-ph/0403025](https://arxiv.org/abs/quant-ph/0403025).

Kalra and Prakash state that the five-qubit threshold is “the best known threshold of any qubit magic state distillation routine” and that a better one would reduce the non-simulable and possibly non-universal region of state space ([arXiv:2501.10163](https://arxiv.org/abs/2501.10163v3)). Protocols that use non-Clifford gates, such as the two-qubit permutation-invariant scheme of Leitch and Ouyang with threshold $0.5$ ([arXiv:2603.04310](https://arxiv.org/abs/2603.04310v1)), are a different resource model and do not count.`,
    progress: r`- Kalra and Prakash search all $[[n,1]]$ $M_3$-codes with $n<20$ and find none with a threshold above the five-qubit code. They construct integer weight enumerators for $23\le n\le35$ that satisfy all known consistency conditions and would give thresholds up to about $0.2113$ (a putative $[[29,1,7]]$ code), and call the existence of such codes “a fascinating open question” ([arXiv:2501.10163](https://arxiv.org/abs/2501.10163v3)).
- Zurel, Jana and de Silva build infinite families of quantum quadratic-residue codes with high thresholds; none surpasses the five-qubit code for $T$-type states ([arXiv:2603.18560](https://arxiv.org/abs/2603.18560v2)).`,
    residual: r`Decide whether a code realizing one of the putative Kalra–Prakash enumerators exists, for instance at $n=23$ or the $[[29,1,7]]$ candidate; extend exhaustive searches beyond $n=20$ and to protocols with several outputs. An optimality proof for the five-qubit threshold within a broad protocol class would also settle the question. A family of thresholds converging to $\epsilon_{\max}$ would answer the $T$-direction case of the bound-magic question.`,
    evidence: [
      { kind: "published", role: "progress", summary: "Five-qubit code distils T-type states for ε < (7 − √21)/14 ≈ 0.173 (PRA 71, 022316).", url: "https://arxiv.org/abs/quant-ph/0403025v2", date: "2004-12-16", version: "v2" },
      { kind: "preprint",
        role: "progress",
        summary: "No [[n,1]] M₃-code with n < 20 beats the five-qubit threshold; putative weight enumerators for 23 ≤ n ≤ 35 would reach thresholds up to about 0.2113 if realizable.",
        url: "https://arxiv.org/abs/2501.10163v3",
        date: "2026-03-23",
        version: "v3" },
      { kind: "published",
        role: "progress",
        summary: "Infinite families of quantum quadratic-residue distillation codes with high thresholds; none surpasses the five-qubit code for T-type states (Quantum Sci. Technol. 11, 045052).",
        url: "https://arxiv.org/abs/2603.18560v2",
        date: "2026-09-30",
        version: "v2" },
    ],
    provenance: [],
    relations: [
      { id: "A39", type: "parent" },
    ],
    refs: [
      { label: "Kalra & Prakash, 'Invariant Theory, Magic State Distillation, and Bounds on Classical Codes' (2025 preprint, v3)", url: "https://arxiv.org/abs/2501.10163" },
      { label: "Bravyi & Kitaev, 'Universal quantum computation with ideal Clifford gates and noisy ancillas', PRA 71, 022316 (2005)", url: "https://arxiv.org/abs/quant-ph/0403025" },
      { label: "Rall, 'Signed quantum weight enumerators characterize qubit magic state distillation' (2017 preprint)", url: "https://arxiv.org/abs/1702.06990" },
      { label: "Zurel, Jana & de Silva, 'High-threshold magic state distillation with quantum quadratic residue codes', Quantum Sci. Technol. 11, 045052 (2026)",
        url: "https://arxiv.org/abs/2603.18560" },
    ] },

  { id: "A41",
    cat: "complexity",
    horizon: "sharp",
    status: "improved",
    reviewedAt: "2026-11-26",
    title: "Minimal length of permutation-invariant qubit codes",
    statement: r`A permutation-invariant (PI) code encoding one qubit in $n$ qubits is equivalently a code in the fixed-photon-number space $\mathrm{span}\{|k\rangle|n-k\rangle\}_{k=0}^{n}$ of two bosonic modes, where distance $d$ means correcting $d-1$ deletions (photon losses). Let $n_{\min}(d)$ be the least $n$ admitting such a code of distance $d$. Prove or disprove that $n_{\min}(d)=\lceil(3d^2+1)/4\rceil$ for all $d\ge2$; for odd $d=2t+1$ this is $3t^2+3t+1$, equivalently $d\le\sqrt{12n-3}/3$ for every qubit PI code. (Bond–Minář–Ozols–Safavi-Naini–Visnevskyi 2026, Conjecture 3.1; Giannisis Manes–Subramanian–Jiang 2026, Conjecture 4 for existence at this length.)`,
    definition: r`**Permutation-invariant codes** live in the symmetric subspace of $n$ qubits, where errors on any $t$ qubits reduce to deletions. Pollatsek and Ruskai, “Permutationally invariant codes for quantum error correction”, Lin. Alg. Appl. 392, 255 (2004), [arXiv:quant-ph/0304153](https://arxiv.org/abs/quant-ph/0304153); Ouyang, “Permutation-invariant quantum codes”, PRA 90, 062317 (2014), [arXiv:1302.3247](https://arxiv.org/abs/1302.3247). Known analytic families need $n=d^2+O(d)$ qubits, while the quantum Singleton bound only forces $n\ge2d-1$, so even the growth rate of $n_{\min}$ is unproved. Bond et al. note that their conjecture would imply there are no good qLDPC qubit PI codes.

Bond et al. state the conjecture from numerical searches, [arXiv:2603.10981](https://arxiv.org/abs/2603.10981). Giannisis Manes, Subramanian and Jiang conjecture codes at length $\lceil(3d^2+1)/4\rceil$ for every $d$ and call stronger bounds “an important open problem” ([arXiv:2610.00561](https://arxiv.org/abs/2610.00561)).`,
    progress: r`- Ouyang (2014) and Aydin, Alekseyev and Barg (Quantum 8, 1321 (2024)) give analytic families of length $4t^2+4t+1$ and $4t^2+2t+1$ correcting $t$ errors, that is $2t$ deletions ([arXiv:1302.3247](https://arxiv.org/abs/1302.3247), [arXiv:2310.05358](https://arxiv.org/abs/2310.05358)).
- Hagiwara and Nakayama (January 2020) settled the qubit case $d=2$, $n_{\min}(2)=4$: the permutation-invariant code spanned by $(|0000\rangle+|1111\rangle)/\sqrt2$ and the weight-two Dicke state corrects one deletion, and no code encoding a qubit that corrects one deletion has fewer than four qubits ([arXiv:2001.08405](https://arxiv.org/abs/2001.08405v1)).
- Bond, Minář, Ozols, Safavi-Naini and Visnevskyi (March 2026) minimize the Knill–Laflamme violation numerically and find $n_{\min}=7,19,37$ for $t=1,2,3$, and $61,91$ for $t=4,5$ within a restricted family. They conjecture $n_{\min}(t)=3t^2+3t+1$ (Conjecture 3.1) ([arXiv:2603.10981](https://arxiv.org/abs/2603.10981v1)).
- Kubischta and Teixeira (May 2026; v2 of 24 November 2026, accepted in IEEE Transactions on Information Theory) extend the $d=2$ case to every local dimension $q$: they construct $((4,q,2))_q$ permutation-invariant codes from edge colourings of the complete graph $K_q$, and prove by a decoupling-and-rank argument, and independently by linear programming, that no permutation-invariant code of dimension $q$ and distance two exists on three or fewer qudits ([arXiv:2605.22439](https://arxiv.org/abs/2605.22439v2)). For $q=2$ their code is the Hagiwara–Nakayama code.
- Giannisis Manes, Subramanian and Jiang (30 September 2026) construct codes with binary-polyhedral symmetry at $n=\lceil(3d^2+1)/4\rceil$ for every $d\le10$, including $(n,d)=(28,6),(49,8),(76,10)$. Linear-programming certificates show their codes reach the maximal distance for 21 of the 22 photon numbers $4\le n\le25$; the exception is $n=18$, where the LP allows $d=5$. For $d=6$ and $8$ the LP first allows $n=26$ and $43$, below their codes at $28$ and $49$ ([arXiv:2610.00561](https://arxiv.org/abs/2610.00561v1)).`,
    residual: r`No lower bound of order $d^2$ is proved: the LP bound is not tight at the gaps above, and the minimality conjecture would imply that it is systematically non-tight. Sub-targets: show that no distance-5 code exists at $n=18$, so that $n_{\min}(5)=19$; prove $n_{\min}(d)\ge c\,d^2$ for some constant $c>0$; construct the conjectured binary-polyhedral family for all $d$.`,
    evidence: [
      { kind: "published", role: "progress", summary: "Analytic permutation-invariant codes correcting t deletions with 4t² + 2t + 1 qubits (Quantum 8, 1321).", url: "https://arxiv.org/abs/2310.05358v3", date: "2024-04-15", version: "v3" },
      { kind: "numerical",
        role: "progress",
        summary: "Numerical minimal lengths 7, 19, 37 for t = 1, 2, 3 (and 61, 91 in a restricted family); conjecture n_min(t) = 3t² + 3t + 1.",
        url: "https://arxiv.org/abs/2603.10981v1",
        date: "2026-03-11",
        version: "v1" },
      { kind: "preprint",
        role: "progress",
        summary: "Qubit case d = 2: a four-qubit permutation-invariant single-deletion code, and no single-deletion-correcting code encoding a qubit on fewer than four qubits.",
        url: "https://arxiv.org/abs/2001.08405v1",
        date: "2020-01-23",
        version: "v1" },
      { kind: "preprint",
        role: "progress",
        summary: "Distance-two permutation-invariant codes need exactly four qudits for every local dimension q (edge-colouring construction; decoupling-and-rank and linear-programming lower bounds). Extends the qubit case of Hagiwara and Nakayama. Accepted in IEEE Transactions on Information Theory.",
        url: "https://arxiv.org/abs/2605.22439v2",
        date: "2026-11-24",
        version: "v2" },
      { kind: "preprint",
        role: "progress",
        summary: "Codes at n = ⌈(3d²+1)/4⌉ for all d ≤ 10; LP certificates of maximal distance for 21 of 22 photon numbers 4 ≤ n ≤ 25, the exception being n = 18.",
        url: "https://arxiv.org/abs/2610.00561v1",
        date: "2026-09-30",
        version: "v1" },
    ],
    provenance: [
      { summary: "Giannisis Manes, Subramanian and Jiang state that OpenAI's Codex and ChatGPT models helped build an intertwiner, analyse numerical results, generate figures and code, workshop proofs and edit the manuscript; the authors state that they verified all outputs independently.",
        url: "https://arxiv.org/abs/2610.00561v1",
        version: "v1" },
    ],
    relations: [
      { id: "A32", type: "related" },
    ],
    refs: [
      { label: "Bond, Minář, Ozols, Safavi-Naini & Visnevskyi, 'Permutation-invariant codes: a numerical study and qudit constructions' (2026 preprint), Conjecture 3.1",
        url: "https://arxiv.org/abs/2603.10981" },
      { label: "Giannisis Manes, Subramanian & Jiang, 'Optimal two-mode bosonic loss codes from finite group symmetry' (2026 preprint), Conjecture 4",
        url: "https://arxiv.org/abs/2610.00561" },
      { label: "Pollatsek & Ruskai, 'Permutationally Invariant Codes for Quantum Error Correction', Lin. Alg. Appl. 392, 255 (2004)", url: "https://arxiv.org/abs/quant-ph/0304153" },
      { label: "Ouyang, 'Permutation-invariant quantum codes', PRA 90, 062317 (2014)", url: "https://arxiv.org/abs/1302.3247" },
      { label: "Aydin, Alekseyev & Barg, 'A family of permutationally invariant quantum codes', Quantum 8, 1321 (2024)", url: "https://arxiv.org/abs/2310.05358" },
      { label: "Hagiwara & Nakayama, 'A Four-Qubits Code that is a Quantum Deletion Error-Correcting Code with the Optimal Length' (2020 preprint)",
        url: "https://arxiv.org/abs/2001.08405v1" },
      { label: "Kubischta & Teixeira, 'Minimum-Length Permutation-Invariant Qudit Codes from Edge-Colorings of Complete Graphs' (2026 preprint, v2; accepted in IEEE Trans. Inf. Theory)",
        url: "https://arxiv.org/abs/2605.22439v2" },
    ] },

  { id: "A42",
    cat: "complexity",
    horizon: "sharp",
    status: "improved",
    reviewedAt: "2026-11-16",
    title: "Shallow relative-error designs from i.i.d. brickwork circuits",
    statement: r`(Schuster, Haferkamp and Huang 2024, Discussion.) Let $\nu_d$ be the depth-$d$ one-dimensional brickwork circuit on $n$ qubits with open boundaries, every two-qubit gate drawn independently from the Haar measure on $U(4)$. Write $\Phi^{(k)}_\nu(X)=\mathbb E_{U\sim\nu}U^{\otimes k}XU^{\dagger\otimes k}$. Is there, for each fixed $k$, a constant $C_k$ such that $\nu_d$ is an $\varepsilon$-relative-error $k$-design, $(1-\varepsilon)\Phi^{(k)}_{\rm Haar}\preceq\Phi^{(k)}_{\nu_d}\preceq(1+\varepsilon)\Phi^{(k)}_{\rm Haar}$ in the completely positive order, as soon as $d\ge C_k\log(n/\varepsilon)$? Or does i.i.d. brickwork need depth $\omega(\log n)$, although specially assembled circuits reach depth $O(\log(n/\varepsilon)\,k\,\mathrm{polylog}\,k)$?`,
    definition: r`**Approximate unitary designs.** An ensemble is an $\varepsilon$-approximate $k$-design if its $k$-th moment channel is close to that of the Haar measure. Relative (multiplicative) error, as above, is the strongest common notion; additive error in diamond norm is weaker. Brandão, Harrow and Horodecki proved that local random circuits form approximate $k$-designs in depth polynomial in $k$ and linear in $n$, Commun. Math. Phys. 346, 397 (2016), [arXiv:1208.0692](https://arxiv.org/abs/1208.0692).

Schuster, Haferkamp and Huang reached logarithmic depth by gluing small random unitaries on overlapping patches in two layers ([arXiv:2407.07754](https://arxiv.org/abs/2407.07754)). In their Discussion they write: “it would be interesting to determine whether the same design depth applies to brickwork local random circuits with independent and identically-distributed gates.” Their construction is a brickwork circuit “with a small subset of the gates set to the identity”, and drawing those gates from the Haar measure seems unlikely to slow convergence, “but we cannot rule this out.” Laracuente calls “whether unstructured random circuits yield shallow multiplicative-error designs” a lingering open question ([arXiv:2510.08537](https://arxiv.org/abs/2510.08537v3), Sec. 6). Hunter-Jones and Haferkamp note in February 2026 that “it is currently unknown if the standard brickwork random quantum circuits we consider here are relative-error t-designs at log depths” ([arXiv:2602.22692](https://arxiv.org/abs/2602.22692v1)).`,
    progress: r`- Dalzell, Hunter-Jones and Brandão (PRX Quantum 3, 010333 (2022)) prove that 1D random circuits anticoncentrate in depth $O(\log n)$ ([arXiv:2011.12277](https://arxiv.org/abs/2011.12277)).
- Schuster, Haferkamp and Huang (2024) obtain relative-error $k$-designs in 1D in depth $O(\log(n/\varepsilon)\,k\,\mathrm{polylog}\,k)$ for the glued two-layer construction (Corollary 1). They also prove that relative-error 2-designs need depth at least of order $\log n$ in 1D ([arXiv:2407.07754](https://arxiv.org/abs/2407.07754v2)).
- Heinrich, Haferkamp, Roth and Helsen (PRL 137, 050601 (2026)) show that anticoncentration of any local random circuit invariant under single-qubit unitaries implies a relative-error *state* 2-design, hence logarithmic depth for i.i.d. brickwork. They write that “a straightforward extension … to the unitary 2-design case is not possible” and that they “found no easy way to do so even for 1D brickwork circuits” ([arXiv:2510.23719](https://arxiv.org/abs/2510.23719v4)).
- Belkin, Allen and Clark compute the multiplicative 2-design error of brickwork circuits exactly up to about 50 qubits; the depth fits $\log((3/\pi^2)(n/\varepsilon))/\log(5/4)$, and they say one would like to prove this formula ([arXiv:2510.23726](https://arxiv.org/abs/2510.23726v2), numerical).
- Laracuente (v3, 18 August 2026) proves that i.i.d. 1D brickwork gives *additive*-error $k$-designs in $O(5^{\log^\ast n}\log(nk/\varepsilon)\,k\log k)$ layers, by relative-entropy decay (Corollary 3.1) ([arXiv:2510.08537](https://arxiv.org/abs/2510.08537v3)).
- Baer and Haah (v3, 1 November 2026) prove a spectral gap of the brickwork walk independent of $n$ and $t$, so i.i.d. brickwork reaches approximate $t$-designs in $O(nt)$ steps; relative error then follows in depth linear in $n$ ([arXiv:2607.20919](https://arxiv.org/abs/2607.20919v3)).
- Liu and Helsen (August 2026) give structured 1D relative-error designs in depth $O(\log(n/\varepsilon)+k\log k)$, a $\log k$ factor from the lower bound ([arXiv:2608.18650](https://arxiv.org/abs/2608.18650v1)).`,
    residual: r`For i.i.d. brickwork, logarithmic depth is known for anticoncentration, relative-error state 2-designs and (up to a $5^{\log^\ast n}$ factor) additive-error designs, but relative-error unitary designs are known only in linear depth. Minimal target: $k=2$ unitary designs in depth $O(\log(n/\varepsilon))$, a question about an explicit Markov chain on $\{I,S\}^n$ with $S$ the swap. Next: relative error for fixed $k$ in depth $O(\log n\,\mathrm{polyloglog}\,n)$, by converting the additive result.`,
    evidence: [
      { kind: "preprint",
        role: "progress",
        summary: "Glued two-layer random circuits form relative-error k-designs in 1D in depth O(log(n/ε)·k·polylog k); log n depth is necessary. The authors ask whether i.i.d. brickwork achieves the same depth.",
        url: "https://arxiv.org/abs/2407.07754v2",
        date: "2025-01-04",
        version: "v2" },
      { kind: "published",
        role: "progress",
        summary: "Anticoncentration of local random circuits implies relative-error state 2-designs, hence log depth for i.i.d. brickwork; the unitary 2-design case is left open (PRL 137, 050601).",
        url: "https://arxiv.org/abs/2510.23719v4",
        date: "2026-09-28",
        version: "v4" },
      { kind: "preprint",
        role: "progress",
        summary: "i.i.d. 1D brickwork forms additive-error k-designs in O(5^{log* n} log(nk/ε) k log k) layers via relative-entropy decay; multiplicative error left open.",
        url: "https://arxiv.org/abs/2510.08537v3",
        date: "2026-08-18",
        version: "v3" },
      { kind: "preprint",
        role: "progress",
        summary: "Constant spectral gap for brickwork random circuits in all representations; approximate t-designs in O(nt) steps, linear in n.",
        url: "https://arxiv.org/abs/2607.20919v3",
        date: "2026-11-01",
        version: "v3" },
      { kind: "numerical",
        role: "progress",
        summary: "Exact multiplicative 2-design error of brickwork circuits up to about 50 qubits; depth fits a logarithmic formula in n/ε.",
        url: "https://arxiv.org/abs/2510.23726v2",
        date: "2026-07-24",
        version: "v2" },
    ],
    provenance: [
      { summary: "Laracuente states that ChatGPT Pro versions were used to inspire some supplementary lemmas and to suggest corrections in editing, and that nothing was copied from AI tools without independent verification.",
        url: "https://arxiv.org/abs/2510.08537v3",
        version: "v3" },
      { summary: "Liu and Helsen state that GPT5.5 Pro derived an initial version of the estimates in Lemmas 6 and 19, later refined by the authors, and that GPT5.5 Pro and Claude Opus 4.8 helped them understand Nikolov's proof and translate it into quantum circuits; some edited output of these tools appears in the manuscript.",
        url: "https://arxiv.org/abs/2608.18650v1",
        version: "v1" },
      { summary: "Baer and Haah state that they used Claude for the implementation of a computer verification (Remark 2.35), with the authors revising the code, and Claude Chat to transcribe the hand-drawn Figure 1 into TikZ.",
        url: "https://arxiv.org/abs/2607.20919v3",
        version: "v3" },
    ],
    relations: [
      { id: "A27", type: "related" },
      { id: "A13", type: "related" },
    ],
    refs: [
      { label: "Schuster, Haferkamp & Huang, 'Random unitaries in extremely low depth', Science 389 (2025)", url: "https://arxiv.org/abs/2407.07754" },
      { label: "Brandão, Harrow & Horodecki, 'Local random quantum circuits are approximate polynomial-designs', Comm. Math. Phys. 346 (2016)",
        url: "https://arxiv.org/abs/1208.0692" },
      { label: "Laracuente, 'Shallow Approximate Unitary Designs from Relative Entropy Decay of Unstructured Random Circuits' (2026 preprint, v3)",
        url: "https://arxiv.org/abs/2510.08537" },
      { label: "Heinrich, Haferkamp, Roth & Helsen, 'Anticoncentration is (almost) all you need', PRL 137, 050601 (2026)", url: "https://arxiv.org/abs/2510.23719" },
      { label: "Baer & Haah, 'Random unitary circuits with constant spectral gap' (2026 preprint, v3)", url: "https://arxiv.org/abs/2607.20919" },
      { label: "Liu & Helsen, '(Almost) quadruply optimal unitary designs in 1D' (2026 preprint, v1)", url: "https://arxiv.org/abs/2608.18650" },
      { label: "Hunter-Jones & Haferkamp, 'Ideal random quantum circuits pass the LXEB test' (2026 preprint, v1)", url: "https://arxiv.org/abs/2602.22692" },
    ] },

  { id: "A43",
    cat: "complexity",
    horizon: "sharp",
    reviewedAt: "2026-11-16",
    title: "Scrooge hypothesis for shallow 2D random circuits",
    statement: r`(Liu, McGinley, Schuster and Gosset 2026.) Let $U$ be a depth-$d$ brickwork circuit of independent Haar-random two-qubit gates on a $\sqrt n\times\sqrt n$ grid, applied to $|0^n\rangle$. Partition the qubits as $ABC$, with $C$ containing an $l_C\times l_C$ square. Measure $B$ in the computational basis with outcome $x_B$; the projected ensemble on $A$ is the Born-weighted ensemble of pure states obtained by also measuring $C$, with average state $\rho_A$. Conjecture: there is $d^\ast=O(1)$ such that for every $d>d^\ast$, every fixed $k$ and every $k$-copy observable $O_A\ge0$, with probability at least $1-\epsilon$ over $(U,x_B)$, where $\epsilon=\mathrm{poly}(n)\,e^{-\Omega(\min(l_C,\mathrm{dist}(A,C)))}$, (i) the $k$-th moment of the projected ensemble on $O_A$ is $\epsilon$-close in relative error to that of the Scrooge ensemble $\mathcal S_{\rho_A}$, and (ii) $S_\infty(\rho_A)=\Omega(|\partial A|)$. Prove or refute it. The same conjecture is stated for random Clifford gates, with the stabilizer Scrooge ensemble.`,
    definition: r`**Scrooge ensemble and deep thermalization.** The Scrooge ensemble $\mathcal S_\rho$ is the ensemble of pure states with average $\rho$ that minimizes accessible information: draw a Haar-random $|\phi\rangle$ with density proportional to $\langle\phi|\rho|\phi\rangle$ and output $\rho^{1/2}|\phi\rangle$, normalized. It was introduced and named by Jozsa, Robb and Wootters in 1994 (see Box 2 of the review by Mark, Endres, Ippoliti, Ho and Choi, [arXiv:2609.30248](https://arxiv.org/abs/2609.30248v1)). Measuring part of a many-body state leaves a projected ensemble of pure states on the rest (Cotler et al., PRX Quantum 4, 010311 (2023), [arXiv:2103.03536](https://arxiv.org/abs/2103.03536)); when this ensemble approaches a maximum-entropy ensemble such as Haar or Scrooge, one speaks of deep thermalization (same review).

In constant-depth 2D circuits the global state is far from a design, yet measurements induce long-range entanglement. Liu, McGinley, Schuster and Gosset state the “Scrooge hypothesis” for this regime and write: “We conjecture that the projected ensembles of SRQCs are described by the Scrooge ensemble” ([arXiv:2608.12255](https://arxiv.org/abs/2608.12255v1)). The review of Mark, Endres, Ippoliti, Ho and Choi cites shallow two-dimensional circuits among the settings where Scrooge ensembles have been found ([arXiv:2609.30248](https://arxiv.org/abs/2609.30248v1)).`,
    progress: r`- Napp, La Placa, Dalzell, Brandão and Harrow prove efficient approximate classical simulation for a specific non-uniform constant-depth 2D architecture and conjecture, with numerical and statistical-mechanics evidence, that shallow 2D random circuits are efficiently simulable below a critical depth, with a computational transition above it (PRX 12, 021021 (2022), [arXiv:2001.00021](https://arxiv.org/abs/2001.00021)); the hypothesis concerns the regime above it.
- McGinley, Ho and Malz prove a lower bound on long-range measurement-induced entanglement in random holographic tensor networks and in constant-depth 2D circuits with large local dimension, for instance depth-4 brickwork circuits with local dimension $q\ge134$; they expect, but do not prove, the same at larger depth and for qubits (PRX 15, 021059 (2025), [arXiv:2410.23248](https://arxiv.org/abs/2410.23248)).
- Deep thermalization is proved in other regimes: to Scrooge ensembles from global Scrooge $2k$-designs and long-time chaotic dynamics (Mok, Haug, Ho and Preskill, PRX 16, 041003 (2026), [arXiv:2601.00266](https://arxiv.org/abs/2601.00266)), exactly to the Haar ensemble in the dual-unitary kicked Ising model (Ho and Choi, PRL 128, 060601 (2022), [arXiv:2109.07491](https://arxiv.org/abs/2109.07491)), and, for matchgate circuits, to the uniform ensemble over Gaussian states (Bejan, Béri and McGinley, PRL 135, 020401 (2025), [arXiv:2412.01884](https://arxiv.org/abs/2412.01884)). None covers constant-depth 2D circuits.
- Liu, McGinley, Schuster and Gosset (12 August 2026) state the hypothesis. Their support is Clifford numerics (depth 5–7 on grids up to $100\times100$, conditional mutual information and $k$-th diagonal frame potentials against the stabilizer Scrooge ensemble), a replica analysis that they call non-rigorous, and a rigorous bound (Proposition 1) for a coarse-grained architecture limited to $k=2$ moments of diagonal observables. Assuming the hypothesis, they prove (Theorem 1) that noisy 2D circuits of depth $d>d^\ast$ with depolarizing rate $\gamma=\Omega(\log(n/\epsilon)/n)$ can be sampled classically in polynomial time ([arXiv:2608.12255](https://arxiv.org/abs/2608.12255v1)).`,
    residual: r`Open in full. Sub-targets: point (i) for random Clifford circuits and $k=2$, a combinatorial statement about stabilizer groups; point (ii), the min-entropy bound $S_\infty(\rho_A)=\Omega(|\partial A|)$, alone; or the authors' Proposition 1 extended from the coarse-grained model to brickwork circuits, or to higher $k$. A refutation would identify structure in shallow projected ensembles beyond Scrooge and would leave open the classical simulability of weakly noisy shallow 2D circuits.`,
    evidence: [
      { kind: "conjecture",
        role: "progress",
        summary: "States the Scrooge hypothesis for projected ensembles of shallow 2D Haar and Clifford random circuits above a constant critical depth; Clifford numerics up to 100×100 grids, rigorous k = 2 bound for a coarse-grained model; under the hypothesis, weakly noisy shallow 2D circuits are classically simulable.",
        url: "https://arxiv.org/abs/2608.12255v1",
        date: "2026-08-12",
        version: "v1" },
      { kind: "published",
        role: "progress",
        summary: "Rigorous lower bound on long-range measurement-induced von Neumann entanglement in random holographic tensor networks and constant-depth 2D circuits with large local dimension (depth-4 brickwork, q ≥ 134); larger depths and qubits not proved (PRX 15, 021059).",
        url: "https://arxiv.org/abs/2410.23248v2",
        date: "2025-05-19",
        version: "v2" },
      { kind: "published",
        role: "progress",
        summary: "Scrooge k-designs: global Scrooge 2k-designs induce local Scrooge k-designs on measuring the complement; does not reach constant-depth circuits (PRX 16, 041003).",
        url: "https://arxiv.org/abs/2601.00266v3",
        date: "2026-07-22",
        version: "v3" },
    ],
    provenance: [
      { summary: "Liu, McGinley, Schuster and Gosset acknowledge the use of generative AI to suggest proof strategies and as an aid in proofreading.",
        url: "https://arxiv.org/abs/2608.12255v1",
        version: "v1" },
    ],
    relations: [
      { id: "A13", type: "related" },
      { id: "B20", type: "related" },
      { id: "B5", type: "related" },
    ],
    refs: [
      { label: "Liu, McGinley, Schuster & Gosset, 'Conditional dependence and Scrooge ensembles in shallow random quantum circuits' (2026 preprint, v1)",
        url: "https://arxiv.org/abs/2608.12255" },
      { label: "Cotler et al., 'Emergent quantum state designs from individual many-body wavefunctions', PRX Quantum 4, 010311 (2023)", url: "https://arxiv.org/abs/2103.03536" },
      { label: "McGinley, Ho & Malz, 'Measurement-induced entanglement and complexity in random constant-depth 2D quantum circuits', PRX 15, 021059 (2025)",
        url: "https://arxiv.org/abs/2410.23248" },
      { label: "Napp, La Placa, Dalzell, Brandão & Harrow, 'Efficient classical simulation of random shallow 2D quantum circuits', PRX 12, 021021 (2022)",
        url: "https://arxiv.org/abs/2001.00021" },
      { label: "Mok, Haug, Ho & Preskill, 'Nature is stingy: Universality of Scrooge ensembles in quantum many-body systems', PRX 16, 041003 (2026)",
        url: "https://arxiv.org/abs/2601.00266" },
      { label: "Mark, Endres, Ippoliti, Ho & Choi, 'Deep thermalization and Hilbert space ergodicity' (2026 review preprint, v1)", url: "https://arxiv.org/abs/2609.30248" },
    ] },

  { id: "A44",
    cat: "complexity",
    horizon: "sharp",
    reviewedAt: "2026-11-16",
    title: "Classical algorithms versus decoded quantum interferometry on Optimal Polynomial Intersection",
    statement: r`(Jordan et al. 2024, §5 and Remark 5.2.) *Optimal Polynomial Intersection* (OPI): for a prime $p$, $m=p-1$ and sets $F_y\subseteq\mathbb F_p$ with $|F_y|=\lfloor p/2\rfloor$ for each $y\in\mathbb F_p^{*}$, find a polynomial $Q\in\mathbb F_p[x]$ with $\deg Q<n$ that maximizes $s(Q)=\frac1m\,\#\{y\in\mathbb F_p^{*}:Q(y)\in F_y\}$. Decoded quantum interferometry (DQI) with Berlekamp–Massey decoding runs in quantum polynomial time and, on every instance, reaches the asymptotic expected fraction $\frac12+\sqrt{\frac{n}{2p}\big(1-\frac{n}{2p}\big)}$, about $0.7179$ at $n/p=1/10$. The best known classical polynomial-time algorithm (Prange-type: interpolate through $n$ chosen constraints) reaches $\frac12+\frac{n}{2p}$, that is $0.55$. At $n/p=1/10$, give a classical randomized polynomial-time algorithm reaching $s(Q)\ge0.55+\varepsilon$ for a fixed $\varepsilon>0$ with constant probability, on worst-case instances or on instances with independent uniformly random $F_y$; or prove that none exists under a standard cryptographic or complexity assumption.`,
    definition: r`**Optimal Polynomial Intersection** is a max-LINSAT problem over the Reed–Solomon code: each evaluation point $y$ contributes one constraint $Q(y)\in F_y$. **Decoded quantum interferometry** prepares a superposition weighted by a polynomial in the constraint indicators, uses the quantum Fourier transform, and turns approximate optimization into syndrome decoding of the dual code, here a Reed–Solomon code decodable by Berlekamp–Massey. The resulting guarantee is the “semicircle law” above (Jordan, Shutty, Wootters, Zalcman, Schmidhuber, King, Isakov, Khattar and Babbush, [arXiv:2408.08292](https://arxiv.org/abs/2408.08292), Nature 646, 831 (2025)).

OPI-type problems appeared earlier as candidates for verifiable quantum advantage: Yamakawa and Zhandry solve an exact-search version on *folded* Reed–Solomon codes with random-oracle constraints ([arXiv:2204.02063](https://arxiv.org/abs/2204.02063), J. ACM 71(3), 20 (2024)). Jordan et al. note that their algorithm does not apply at $n/p=1/10$, where solutions satisfying all constraints are statistically likely to exist (Remark 5.1); the open part is algorithmic. In Remark 5.2 they write that proving rigorous classical hardness for OPI seems challenging, and that showing classical hardness under standard cryptographic assumptions, in a regime where $|F_y|$ grows proportionally to $p$, would be very interesting. Kramer et al. (2026, §1) state that proving hardness for scalar OPI under standard assumptions “remains open”.`,
    progress: r`- Yamakawa and Zhandry (2022) prove a verifiable superpolynomial quantum advantage in the random-oracle model for exact search on folded Reed–Solomon instances ([arXiv:2204.02063](https://arxiv.org/abs/2204.02063)).
- Jordan et al. (August 2024; Nature 2025) introduce DQI, prove the semicircle law, and compare $0.7179$ with Prange's $0.55$ at $n/p=1/10$. They explain why lattice attacks on cryptographic OPI variants do not apply in this regime ([arXiv:2408.08292](https://arxiv.org/abs/2408.08292v5), v5).
- Khattar et al. (October 2025) optimize DQI circuits for OPI ([arXiv:2510.10967](https://arxiv.org/abs/2510.10967v1)); Rosmanis (January 2026) gives a nearly linear-time DQI algorithm for OPI ([arXiv:2601.15171](https://arxiv.org/abs/2601.15171v1)).
- Sun and Wootters (April 2026) show that, on worst case instances with $|F_y|\approx p/2$, solutions beating the semicircle law exist when $n/m\ge0.6225$, and asymptotically perfect ones when $n/m\ge0.7496$. The result is existential; it does not reach $n/m=1/10$ and gives no classical algorithm ([arXiv:2604.09533](https://arxiv.org/abs/2604.09533v1)).
- Horinaga and Yamakawa (July 2026, revised October 2026) give a worst-case quantum algorithm beyond DQI, which finds a solution satisfying all constraints when the rate exceeds $0.75$ and $|F_y|\approx p/2$, and improve the existence threshold to $0.7158$ ([arXiv:2607.14650](https://arxiv.org/abs/2607.14650v2)).
- Wu and Yang (October 2026) prove an unconditional quantum memory advantage in a streaming model, for a Hermite-interpolation generalization of OPI: DQI satisfies $93\%$ of constraints in polylogarithmic space, while any classical algorithm reaching $76\%$ needs polynomial space. For scalar OPI at rate about $1/2$ they obtain a polynomial space separation: one pass and $\tilde O(\sqrt N)$ quantum space suffice for $93.301\%$, while no $N^c$-pass classical algorithm with $N^{1/2+c}$ space reaches $75.001\%$ on random instances ([arXiv:2610.01902](https://arxiv.org/abs/2610.01902v2), Theorem 1.1). This bounds space, not time.
- Kramer, Gil-Fuster, Jones, Eisert and Schreiber (October 2026) prove an unconditional separation in a query (oracle) model, for *folded* OPI with random acceptance sets accessed through membership oracles. At rate $R$, DQI reaches $\frac12\big(1+\sqrt{R(2-R)}\big)$, while any classical algorithm making at most $\exp(\theta M/\log M)$ queries exceeds $\frac{1+R}{2}+\eta$ only with probability $\exp(-cM)$. They leave hardness of scalar OPI open and name instantiating the oracle under computational assumptions as the next step ([arXiv:2610.02145](https://arxiv.org/abs/2610.02145v2)).
- Mazumder and Niroula (October 2026) show that, under worst-case Hamming-error decoding, the DQI guarantee exceeds Prange completion by at most $(\sqrt2-1)/2$, a margin OPI attains asymptotically. Their classical heuristics (Prange restarts, line search, simulated annealing) on OPI at rate $0.1$ with half-density sets exceed a single Prange completion at finite length, reaching $0.67$ at $m=400$ and $0.585$–$0.59$ at $m=4000$, against DQI's finite-length values $0.6856$ and $0.7109$; the authors present these as achievable scores, not bounds on classical optimization ([arXiv:2610.06753](https://arxiv.org/abs/2610.06753v1)).`,
    residual: r`No classical polynomial-time algorithm is known to beat $\frac12+\frac{n}{2p}$ on scalar OPI at $n/p=1/10$, and no hardness result covers scalar OPI with explicit acceptance sets. Sub-targets: a classical algorithm beating $0.55+\varepsilon$ on random $F_y$; a lower bound against a restricted class (low-degree, statistical-query or stable algorithms); an instantiation of the folded-OPI oracle separation under a cryptographic assumption, which Kramer et al. name as the open direction. Classical attacks on sparse random max-$k$-XORSAT instances of DQI (spin-glass and decoder-threshold obstructions) do not concern the Reed–Solomon structure of OPI.`,
    evidence: [
      { kind: "published",
        role: "progress",
        summary: "DQI with Berlekamp–Massey decoding reaches 1/2 + √((n/2p)(1 − n/2p)) on every OPI instance, about 0.7179 at n/p = 1/10, versus 0.55 for the best known classical (Prange-type) algorithm; classical hardness left open (Nature 646, 831, 2025).",
        url: "https://arxiv.org/abs/2408.08292v5",
        date: "2025-10-22",
        version: "v5" },
      { kind: "preprint",
        role: "progress",
        summary: "Oracle separation for folded OPI with random acceptance sets behind membership oracles: DQI reaches (1 + √(R(2−R)))/2, while classical algorithms with exp(θM/log M) queries cannot beat (1+R)/2 + η; scalar OPI hardness stated as open.",
        url: "https://arxiv.org/abs/2610.02145v2",
        date: "2026-10-02",
        version: "v2" },
      { kind: "preprint",
        role: "progress",
        summary: "Unconditional quantum memory advantage in a streaming model for a Hermite generalization of OPI (93% with polylog space versus polynomial space for 76% classically).",
        url: "https://arxiv.org/abs/2610.01902v2",
        date: "2026-10-03",
        version: "v2" },
      { kind: "preprint",
        role: "progress",
        summary: "Worst-case OPI solutions beating the semicircle law exist for rate n/m ≥ 0.6225; existential only, not in the n/p = 1/10 regime.",
        url: "https://arxiv.org/abs/2604.09533v1",
        date: "2026-04-10",
        version: "v1" },
      { kind: "preprint",
        role: "progress",
        summary: "Worst-case quantum algorithm beyond DQI: perfect OPI solutions for rate above 0.75 with half-size acceptance sets; existence threshold improved to 0.7158.",
        url: "https://arxiv.org/abs/2607.14650v2",
        date: "2026-10-22",
        version: "v2" },
    ],
    provenance: [
      { summary: "Kramer et al.'s AI disclosure (v2): the authors gave the question and setting to OpenAI's GPT-5.6 Sol, which proposed candidate proof strategies and draft theorem statements; the central proof strategy used in the paper emerged through that exchange. GPT-5.6 Sol, GPT-6 Astra and Anthropic's Claude Opus 5.5 then helped check calculations, compare notation with cited work and restructure the manuscript. The authors state that they verified and substantially revised all model-generated material.",
        url: "https://arxiv.org/abs/2610.02145v2",
        version: "v2" },
      { summary: "Mazumder and Niroula state that AI tools were used extensively in generating and developing the core ideas of their work; AI agents proposed candidate problems and code constructions, evaluated them against the soundness rules, and built implementations and classical attacks, under human guidance and selection.",
        url: "https://arxiv.org/abs/2610.06753v1",
        version: "v1" },
    ],
    relations: [
      { id: "A13", type: "related" },
      { id: "A45", type: "related" },
    ],
    refs: [
      { label: "Jordan et al., 'Optimization by Decoded Quantum Interferometry', Nature 646, 831 (2025)", url: "https://arxiv.org/abs/2408.08292" },
      { label: "Yamakawa & Zhandry, 'Verifiable Quantum Advantage without Structure', J. ACM 71(3), 20 (2024)", url: "https://arxiv.org/abs/2204.02063" },
      { label: "Kramer, Gil-Fuster, Jones, Eisert & Schreiber, 'A provable quantum advantage for approximate optimization via decoded quantum interferometry' (2026 preprint)",
        url: "https://arxiv.org/abs/2610.02145" },
      { label: "Sun & Wootters, 'On Worst-Case Optimal Polynomial Intersection' (2026 preprint)", url: "https://arxiv.org/abs/2604.09533" },
      { label: "Horinaga & Yamakawa, 'Worst-Case Quantum Algorithm for Optimal Polynomial Intersection Beyond Decoded Quantum Interferometry' (2026 preprint)",
        url: "https://arxiv.org/abs/2607.14650" },
      { label: "Wu & Yang, 'Exponential quantum advantages for decoded quantum interferometry in the streaming setting' (2026 preprint)", url: "https://arxiv.org/abs/2610.01902" },
    ] },

  { id: "A45",
    cat: "complexity",
    horizon: "sharp",
    reviewedAt: "2026-11-16",
    title: "The QAOA fixed-angle conjecture on 3-regular graphs",
    statement: r`(Wurtz–Love 2021; Wurtz–Lykov 2021.) For MaxCut on a $d$-regular graph $G$, let $F_G(\boldsymbol\beta,\boldsymbol\gamma)$ be the expected cut of depth-$p$ QAOA and $C_G=F_G/F_{\max}(G)$ its approximation ratio. Let $f^{\rm tree}_{p,d}(\boldsymbol\beta,\boldsymbol\gamma)$ be the expected fraction of cut edges on a $d$-regular graph of girth larger than $2p+1$, which depends only on the depth-$p$ tree neighbourhood of an edge; let $(\boldsymbol\beta^{\rm tree}_{p,d},\boldsymbol\gamma^{\rm tree}_{p,d})$ maximize it, with maximum $f^{{\rm tree},*}_{p,d}$. *Fixed-angle conjecture for $d=3$:* for every $p$ and every $3$-regular graph $G$, $C_G(\boldsymbol\beta^{\rm tree}_{p,3},\boldsymbol\gamma^{\rm tree}_{p,3})\ge f^{{\rm tree},*}_{p,3}$. Prove it for $p=3$, which would give a worst-case ratio of at least $0.7924$, or for all $p$; or find a $3$-regular counterexample. The weaker *large-loop conjecture* replaces the tree angles by the optimal angles of $G$.`,
    definition: r`**QAOA** at depth $p$ alternates $p$ cost and mixer layers with angles $\boldsymbol\gamma,\boldsymbol\beta$ (Farhi, Goldstone and Gutmann, [arXiv:1411.4028](https://arxiv.org/abs/1411.4028)). Each edge term of $F_G$ depends only on the radius-$p$ neighbourhood of the edge, so on graphs without short cycles the performance equals the tree value $f^{\rm tree}_{p,d}$. The conjecture says that short cycles can only help, even with angles tuned for the tree. Wurtz and Love proved the $p=2$ case for $3$-regular graphs and conjectured the hierarchy for all $p$ ([arXiv:2010.11209](https://arxiv.org/abs/2010.11209), Phys. Rev. A 103, 042612 (2021)); Wurtz and Lykov named and tested the fixed-angle conjecture ([arXiv:2107.00677](https://arxiv.org/abs/2107.00677)). If it holds, they note that QAOA would have a larger performance guarantee than the Goemans–Williamson algorithm on $3$-regular graphs for $p\ge11$. This name should not be confused with Quantum Max-Cut, a different Hamiltonian problem.

A separate conjecture of Basso, Farhi, Marwaha, Villalonga and Zhou says that QAOA reaches the Parisi value as $p\to\infty$ on the Sherrington–Kirkpatrick model and, equivalently, on large-girth regular graphs in the large-degree limit ([arXiv:2110.14206](https://arxiv.org/abs/2110.14206)). A proof in the thermodynamic-first, fixed-angle formulation, with no bound on the depth, was announced on 25 September 2026 in an unpublished preprint in the GitHub repository [openai/math](https://github.com/openai/math) (item 281, with a Lean development). It is not on arXiv and has not been assessed here. It does not concern $3$-regular graphs at fixed degree.`,
    progress: r`- Farhi, Goldstone and Gutmann (2014) show that depth-$1$ QAOA has approximation ratio at least $0.6924$ on every $3$-regular graph ([arXiv:1411.4028](https://arxiv.org/abs/1411.4028)).
- Wurtz and Love (2020; Phys. Rev. A 2021) prove a worst-case ratio of $0.7559$ at $p=2$ on $3$-regular graphs, attained by graphs without cycles of length at most $5$. They conjecture that at depth $p$ the worst case is attained by graphs without cycles of length at most $2p+1$, which would give $0.7924$ at $p=3$ ([arXiv:2010.11209](https://arxiv.org/abs/2010.11209v2)).
- Wurtz and Lykov (2021) compute tree-optimal angles with tensor networks and give numerical evidence for the fixed-angle conjecture for $p<12$ ([arXiv:2107.00677](https://arxiv.org/abs/2107.00677v2)).
- Binkowski (September 2026) proves the fixed-angle conjecture for $p=1$ and every $d$, and for $d\le2$ and every $p$. He refutes its general form at $p=2$, $d=9$: on $K_{9,9}$ the tree-optimal angles give a ratio below $f^{{\rm tree},*}_{2,9}$ by about $0.0029$, certified with interval arithmetic. $K_{9,9}$ is not a counterexample to the large-loop conjecture. He writes that this has no direct consequence for the $3$-regular case and that hope remains for low $p$ and low $d$ ([arXiv:2609.27703](https://arxiv.org/abs/2609.27703v2)).
- Morone, Rawat and Sels (October 2026) show that a classical local algorithm (VIRAL) beats the QAOA values on large-girth $3$-regular graphs at every even depth $p\ge4$ for which QAOA values are known (up to $p=17$), and raise the lower bound on the limiting maximum cut fraction to $0.9127$, a sampling bound at $99.99999\%$ confidence; the known upper bound is $0.92386$ ([arXiv:2610.17236](https://arxiv.org/abs/2610.17236v1)). The conjecture is about a worst-case guarantee, not a quantum advantage.`,
    residual: r`For $d=3$ the conjecture is proved only for $p\le2$. Open: $p=3$ (Wurtz–Love's conditional $0.7924$), every $p$, and the large-loop variant. For $4\le d\le8$ the fixed-angle conjecture is open already at $p=2$. A natural route for $p=3$ is to enumerate the possible depth-$3$ neighbourhoods in $3$-regular graphs and certify the inequality on each with interval arithmetic, as in the $p=2$ and $K_{9,9}$ computations; a certified search for a $3$-regular counterexample among graphs dense in short even cycles is the other direction.`,
    evidence: [
      { kind: "published",
        role: "progress",
        summary: "Depth-2 QAOA has worst-case approximation ratio 0.7559 on 3-regular graphs; worst-case graphs have no cycles of length ≤ 5; conjectured hierarchy gives 0.7924 at p = 3 (Phys. Rev. A 103, 042612, 2021).",
        url: "https://arxiv.org/abs/2010.11209v2",
        date: "2021-02-02",
        version: "v2" },
      { kind: "numerical",
        role: "progress",
        summary: "Numerical evidence for the fixed-angle conjecture on regular graphs for p < 12, with tree-optimal angles computed by tensor networks.",
        url: "https://arxiv.org/abs/2107.00677v2",
        date: "2021-07-19",
        version: "v2" },
      { kind: "preprint",
        role: "progress",
        summary: "Fixed-angle conjecture proved for p = 1 (all d) and d ≤ 2 (all p); refuted at p = 2, d = 9 on K₉,₉ by a certified interval-arithmetic computation; large-loop conjecture and the 3-regular case untouched.",
        url: "https://arxiv.org/abs/2609.27703v2",
        date: "2026-09-25",
        version: "v2" },
      { kind: "preprint",
        role: "progress",
        summary: "Classical local algorithm VIRAL exceeds QAOA cut fractions on large-girth 3-regular graphs at every even depth p ≥ 4 for which QAOA values are known; lower bound 0.9127 (99.99999% confidence) on the limiting maximum cut fraction, against the known upper bound 0.92386.",
        url: "https://arxiv.org/abs/2610.17236v1",
        date: "2026-10-12",
        version: "v1" },
    ],
    provenance: [
      { summary: "Binkowski discloses use of Claude Opus 5 and Claude Sonnet 5: Opus 5 suggested examining K_{d,d} and found identities used in the p = 1 and d ≤ 2 proofs; Sonnet 5 wrote an initial numerical proof that was flawed and was replaced by an interval-arithmetic version. The author reviewed and refactored the code and wrote the paper.",
        url: "https://arxiv.org/abs/2609.27703v2",
        version: "v2" },
    ],
    relations: [
      { id: "A44", type: "related" },
    ],
    refs: [
      { label: "Farhi, Goldstone & Gutmann, 'A Quantum Approximate Optimization Algorithm' (2014)", url: "https://arxiv.org/abs/1411.4028" },
      { label: "Wurtz & Love, 'MAXCUT QAOA performance guarantees for p > 1', Phys. Rev. A 103, 042612 (2021)", url: "https://arxiv.org/abs/2010.11209" },
      { label: "Wurtz & Lykov, 'The fixed angle conjecture for QAOA on regular MaxCut graphs' (2021)", url: "https://arxiv.org/abs/2107.00677" },
      { label: "Binkowski, 'Refuting the QAOA fixed-angle conjecture' (2026 preprint)", url: "https://arxiv.org/abs/2609.27703" },
      { label: "Morone, Rawat & Sels, 'Whither quantum advantage? New classical lower bounds for Max-Cut on large-girth 3-regular graphs' (2026 preprint)",
        url: "https://arxiv.org/abs/2610.17236" },
      { label: "Basso, Farhi, Marwaha, Villalonga & Zhou, 'The QAOA at High Depth for MaxCut on Large-Girth Regular Graphs and the SK Model', TQC 2022",
        url: "https://arxiv.org/abs/2110.14206" },
    ] },

  { id: "A46",
    cat: "complexity",
    horizon: "sharp",
    status: "claimed-solved",
    reviewedAt: "2026-11-16",
    title: "Quantum spatial search on the two-dimensional grid",
    statement: r`(Aaronson and Ambainis 2003, Section 8.) A quantum robot moves on the $\sqrt n\times\sqrt n$ grid: each time step is a unitary that is local with respect to the grid, and the oracle is queried only at the vertex where amplitude sits. What is the time complexity of finding a unique marked vertex with bounded error? The known bounds were $\Omega(\sqrt n)$ and $O(\sqrt{n\log n})$. Either give an $O(\sqrt n)$ algorithm, or prove that the remaining $\sqrt{\log n}$ factor is necessary.`,
    definition: r`**Spatial search.** Aaronson and Ambainis define quantum query algorithms on a graph: the robot's state is a superposition over vertices, and moving amplitude between neighbouring vertices costs one step. They introduce C-local, Z-local and H-local unitaries as candidate meanings of “local”. They search the $d$-dimensional hypercube in time $O(\sqrt n)$ for $d\ge3$ and $O(\sqrt n\log^{3/2}n)$ for $d=2$ (“Quantum search of spatial regions”, Theory of Computing 1 (2005), [arXiv:quant-ph/0303041](https://arxiv.org/abs/quant-ph/0303041)). Section 8 of the first version (March 2003) asks: “can the $O(\sqrt n\operatorname{polylog}n)$ bound for search on a 2-D grid be improved, perhaps even to $O(\sqrt n)$?”. The published version asks “what is the complexity of finding a unique marked vertex on a 2-D square grid?” and, citing the $O(\sqrt n\log n)$ walk of Ambainis, Kempe and Rivosh, whether the remaining logarithmic factor can be removed. The Grover lower bound $\Omega(\sqrt n)$ applies on every graph.

This entry is distinct from A11. A11 is the Aaronson–Ambainis influential-variable conjecture on bounded low-degree polynomials, from a later paper (Theory of Computing 10 (2014)); the two share authors but not content.`,
    progress: r`- In 2003–2004, Childs and Goldstone gave continuous-time walk searches; with an added spin (Dirac) degree of freedom they reached time $O(\sqrt N\log N)$ in $d=2$ ([arXiv:quant-ph/0405120](https://arxiv.org/abs/quant-ph/0405120)).
- In 2004, Ambainis, Kempe and Rivosh searched the grid in $O(\sqrt N\log N)$ steps with a coined discrete-time walk and amplitude amplification ([arXiv:quant-ph/0402107](https://arxiv.org/abs/quant-ph/0402107), SODA 2005).
- In 2008, Tulsi reached $O(\sqrt{N\log N})$ steps with an ancilla-controlled walk, stating in the abstract that whether the $O(\sqrt N\log N)$ bound could be improved was an open question (PRA 78, 012310 (2008), [arXiv:0801.0497](https://arxiv.org/abs/0801.0497)). Ambainis, Bačkurs, Nahimovs, Ozols and Rivosh matched this bound without amplitude amplification ([arXiv:1112.3337](https://arxiv.org/abs/1112.3337)).
- Until October 2026, no lower bound beyond $\Omega(\sqrt N)$ was known for general local algorithms on the grid; stronger bounds existed only for specific walk families.`,
    claim: r`**Weikang Li, [“Electrostatic Limits on Quantum Spatial Search”](https://arxiv.org/abs/2610.23560v1)** (arXiv:2610.23560, v1, 16 October 2026).

What it claims:
- A negative answer: on the $L\times L$ torus, $N=L^2$, any algorithm in the spatial query model with average success probability $p$ needs at least $(1-\sqrt{1-p})\sqrt{N\ln N/(8\pi)}\,(1+o(1))$ local steps, so $\Omega(\sqrt{N\log N})$, and Tulsi's algorithm is asymptotically optimal.
- The model is generous to the algorithm: queries are free (only local steps are counted), each vertex carries a workspace of arbitrary finite dimension, and the steps may be any Z-local unitaries in Aaronson and Ambainis's terminology, which include C-local ones. H-local steps and continuous-time nearest-neighbour Hamiltonians are covered with the integrated hopping strength in place of the step count (Supplement, Sections S1.2 and S8).
- The proof weights the overlap between the runs with and without the mark by an electrostatic potential centred on the marked vertex; the bound is set by its self-potential (an effective resistance), which grows like $\ln N$ in the plane. The bound also holds on the open $L\times L$ lattice, whose edges are torus edges, and Tulsi's walk runs there with at most twice as many steps (Supplement, Section S5).
- For $k$ marked vertices the bound depends on their arrangement through a capacitance: $\Theta(\sqrt{(N/k)\log(N/k)})$ for periodic subgrids, and $\Theta(\sqrt{N\log(N/k)})$ in the worst case with known $k$ (Theorem S6.5).

Caveats:
- A single preprint, not peer reviewed and not yet independently assessed. Hence “Claimed solved” rather than “Solved”.
- The framework excludes several walker models: multiple walkers that couple to the oracle, long-range hops (which change the graph), nonlinear dynamics and oracle fields extending beyond the marked vertices.`,
    residual: r`If the claim holds, the unique-mark question is settled at $\Theta(\sqrt{N\log N})$. The optimal constant remains open: Tulsi's walk at $L=1024$ uses about 7.6 times the paper's sharpened bound. Matching bounds for an unknown number of marked vertices, for dense or freshly random marked sets, and for graphs that are not vertex-transitive (fractals, random networks) are listed as open by the author. Aaronson and Ambainis's other Section 8 questions, on the relations among C-, Z- and H-locality and the conjectured $\Theta(n^{3/4})$ bound for the “every row has a marked vertex” function on the grid, are not addressed.`,
    evidence: [
      { kind: "preprint",
        role: "claimed-solution",
        summary: "Lower bound of Ω(√(N log N)) local steps for finding a unique marked vertex on the two-dimensional lattice, for Z-local steps with free queries and unbounded local memory, and for continuous-time nearest-neighbour Hamiltonians; Tulsi's O(√(N log N)) walk is then optimal. Single-author preprint, pending assessment.",
        url: "https://arxiv.org/abs/2610.23560v1",
        date: "2026-10-16",
        version: "v1" },
      { kind: "published",
        role: "progress",
        summary: "Ancilla-controlled quantum walk finding a unique marked vertex on the √N×√N grid in O(√(N log N)) steps, improving the O(√N log N) coined-walk bound.",
        url: "https://doi.org/10.1103/PhysRevA.78.012310",
        date: "2008-07-09" },
    ],
    provenance: [
      { summary: "The acknowledgments state: “We acknowledge the use of GPT-6 Astra and Opus-5.5 to assist with theoretical calculations. We checked all derivations and numerical results and take full responsibility for the content.”",
        url: "https://arxiv.org/abs/2610.23560v1",
        version: "v1" },
    ],
    relations: [
      { id: "A34", type: "related" },
      { id: "A23", type: "related" },
    ],
    refs: [
      { label: "Aaronson & Ambainis, 'Quantum search of spatial regions', Theory of Computing 1 (2005), Section 8", url: "https://arxiv.org/abs/quant-ph/0303041" },
      { label: "Ambainis, Kempe & Rivosh, 'Coins make quantum walks faster', SODA 2005", url: "https://arxiv.org/abs/quant-ph/0402107" },
      { label: "Childs & Goldstone, 'Spatial search and the Dirac equation', PRA 70, 042312 (2004)", url: "https://arxiv.org/abs/quant-ph/0405120" },
      { label: "Tulsi, 'Faster quantum-walk algorithm for the two-dimensional spatial search', PRA 78, 012310 (2008)", url: "https://arxiv.org/abs/0801.0497" },
      { label: "Ambainis, Bačkurs, Nahimovs, Ozols & Rivosh, 'Search by quantum walks on two-dimensional grid without amplitude amplification' (2011 preprint)",
        url: "https://arxiv.org/abs/1112.3337" },
      { label: "Li, 'Electrostatic Limits on Quantum Spatial Search' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.23560v1" },
    ] },

  { id: "A47",
    cat: "complexity",
    horizon: "sharp",
    status: "claimed-solved",
    reviewedAt: "2026-11-16",
    title: "Near-linear gate count for lattice Lindbladian simulation",
    statement: r`(Mizuta 2026, Sections I, II.2 and VI.0.2.) Let $\mathcal L=\sum_e\mathcal L_e$ be a Lindbladian on $N$ sites of a lattice of fixed dimension, with finite-range Hamiltonian and jump terms of bounded norm; the jump operators need not commute or be Hermitian. Is there a circuit of $O(Nt\,\operatorname{polylog}(Nt/\varepsilon))$ one- and two-qubit gates that approximates $e^{t\mathcal L}$ within $\varepsilon$ in diamond norm? This would match the $\tilde\Omega(Nt)$ lower bound inherited from lattice Hamiltonians, as the Haah–Hastings–Kothari–Low (HHKL) algorithm does for Hamiltonians.`,
    definition: r`**Lattice Lindbladian simulation.** For finite-range lattice Hamiltonians, HHKL decompose $e^{-iHt}$ into local blocks using Lieb–Robinson bounds. This gives $O(Nt\,\operatorname{polylog}(Nt/\varepsilon))$ gates, and they prove a matching $\Omega(Nt)$ lower bound for piecewise-constant one-dimensional Hamiltonians, which they state extends to other fixed dimensions ([arXiv:1801.03922](https://arxiv.org/abs/1801.03922), FOCS 2018). The decomposition uses backward evolutions, which are not completely positive for dissipative dynamics. General Lindbladian algorithms based on linear combinations of unitaries (Cleve and Wang, [arXiv:1612.09512](https://arxiv.org/abs/1612.09512); Li and Wang, [arXiv:2212.02051](https://arxiv.org/abs/2212.02051)) have near-optimal query complexity but cost about $N^2t$ gates on a lattice.

Mizuta poses the question in “Lattice Lindbladian simulation by patching and merging” ([arXiv:2609.26372](https://arxiv.org/abs/2609.26372v1), 22 September 2026). He calls it “a long-standing open problem whether or how we can achieve the gate count close to the lower bound $\tilde\Omega(Nt)$ for simulating broad classes of Lindbladians” (Section II.2). Section VI.0.2 asks whether $\tilde O(Nt)$ “can be achieved only for some limited Lindbladians, or how we can construct the near-optimal algorithm for generic Lindbladians if one exists.”`,
    progress: r`- Before September 2026, the best size dependence for generic lattice Lindbladians was $(Nt)^{3/2}\operatorname{polylog}$, from second-order product formulas with extrapolation, and only for observables. Near-linear gate counts were known only for mutually commuting Hermitian jumps with QRAM access, as surveyed by Mizuta.
- In September 2026, Wang and Ye ([arXiv:2609.17490](https://arxiv.org/abs/2609.17490v2)) and Chen, Gao, Wang and Zhou ([arXiv:2609.18757](https://arxiv.org/abs/2609.18757v2)) reached optimal additive query complexity in the block-encoding model. Mizuta notes that this alone gives $\tilde O(N^2t)$ gates on a lattice, since the block-encoding normalization grows like $N$.
- On 22 September 2026 (v1), Mizuta proved $\tilde O(Nt)$ gates for sparsely dissipative systems, whose dissipative domains are small and far apart, including boundary-driven chains. For generic one-dimensional Lindbladians he gets $\tilde O((Nt)^{4/3})$ gates per sample for time-evolved observables, and $\tilde O((Nt)^{3/2-1/(4d+2)})$ in dimension $d$ ([arXiv:2609.26372](https://arxiv.org/abs/2609.26372v1)).`,
    claim: r`Three preprints, posted within ten days and apparently independently, claim the general case.

**Jacob Kitchen, [“Causal Query Compression for Lindblad Dynamics: Optimal Queries and Nearly Linear Local Simulation”](https://arxiv.org/abs/2609.31312v1)** (arXiv:2609.31312, v1, 25 September 2026; single author).
- Theorem 6.1: for finite-range, possibly time-dependent Lindbladians on $n$ sites in any fixed spatial dimension, with fixed local parameters, piecewise Hölder time dependence (variation bound $K_t$, at most $B$ breakpoints per term) and efficient coherent evaluation of the local matrices, the channel is approximated within $\varepsilon$ in diamond norm with $O(n(T+1)\operatorname{polylog}X)$ one- and two-qubit gates, where $X=\max\{e,n(T+1)(1+K_t+B)/\varepsilon\}$. The jumps need not commute. The depth is $(T+1)\operatorname{polylog}X$, with $n\operatorname{polylog}X$ working qubits.
- The gate count includes evaluation, arithmetic, selection, routing and bath storage. Section 1.2 states: “No matching local gate lower bound is claimed.”

**Rahul Trivedi, Xiehang Yu and Daniel Malz, [“Near-optimal quantum simulation of lattice Lindbladian dynamics”](https://arxiv.org/abs/2609.36203v1)** (arXiv:2609.36203, v1, 28 September 2026).
- Theorem 2.1: $O(Nt\,\operatorname{polylog}(Nt/\varepsilon))$ geometrically local gates and $O(\operatorname{polylog}(Nt/\varepsilon))$ ancillas per site, with diamond-norm error $\varepsilon$, using a dilation in which the environmental excitations are stored in compressed form. Section 3.7 extends this to any fixed dimension, and to piecewise differentiable time dependence, with depth $O(t\,\operatorname{polylog}(Nt/\varepsilon))$.

**Zheyu Shen, Yusen Wu, Xiao Yuan and Yukun Zhang, [“Shallow Quantum Circuits for Geometrically Local Lindblad Dynamics”](https://arxiv.org/abs/2610.05362v1)** (arXiv:2610.05362, v1, 4 October 2026).
- For time-independent finite-range Lindbladians with bounded local strength and noncommuting jumps on a constant-dimensional lattice: gate count $O(nT\operatorname{polylog}(nT/\varepsilon))$ and depth $O(T\operatorname{polylog}(nT/\varepsilon))$, for $T\ge1$.
- They also claim lower bounds of $\Omega(nT)$ expected gates and $\Omega(T)$ depth from purely dissipative transport processes, and a depth lower bound of $\Omega(\log n/\log\log n)$ at fixed time and small fixed error.
- Their note added says the work was independent of Mizuta's and of Trivedi, Yu and Malz's, and that the latter obtain the same leading scaling. This is a mention, not an assessment. None of the three papers cites Kitchen.

Caveats:
- All three are preprints, not peer reviewed and not independently assessed. Hence “Claimed solved” rather than “Solved”. Agreement among independent constructions is not a verification.
- The input models differ: efficient coherent evaluation of the local matrices (Kitchen), explicit local terms with bounded norms (Trivedi, Yu and Malz; Shen et al.). The polylogarithmic exponents are not optimized.`,
    residual: r`If the claims hold, the gate-count exponent is settled for finite-range lattice Lindbladians. Several questions remain. How many ancillas does near-optimal simulation need? Trivedi, Yu and Malz use $O(t\,\operatorname{polylog})$ per site in total without refreshing, while the channel admits a dilation with $O(1)$ ancillas per site. Mizuta asks how to simulate long-range Lindbladians with power-law decay. The polylogarithmic factors could be reduced. An $\Omega(Nt)$ gate lower bound specific to purely dissipative local dynamics is posed by Trivedi, Yu and Malz and claimed by Shen et al. Time-dependent generators are covered by Kitchen, and by Trivedi, Yu and Malz under piecewise smoothness assumptions, but not by Shen et al.`,
    evidence: [
      { kind: "preprint",
        role: "claimed-solution",
        summary: "O(n(T+1) polylog) one- and two-qubit gates for finite-range, piecewise Hölder time-dependent Lindbladians with noncommuting jumps on lattices of fixed dimension, diamond-norm error, given efficient coherent evaluation of local matrices; also optimal additive query complexity in the block-encoding model. Single-author preprint, pending assessment.",
        url: "https://arxiv.org/abs/2609.31312v1",
        date: "2026-09-25",
        version: "v1" },
      { kind: "preprint",
        role: "claimed-solution",
        summary: "O(Nt polylog(Nt/ε)) geometrically local gates and polylogarithmic ancillas per site for geometrically local lattice Lindbladians, diamond-norm error; extended to fixed dimension and piecewise-differentiable time dependence. Pending assessment.",
        url: "https://arxiv.org/abs/2609.36203v1",
        date: "2026-09-28",
        version: "v1" },
      { kind: "preprint",
        role: "claimed-solution",
        summary: "Gate count O(nT polylog(nT/ε)) and depth O(T polylog) for time-independent finite-range Lindbladians with noncommuting jumps on constant-dimensional lattices, with claimed Ω(nT) gate and Ω(T) depth lower bounds from purely dissipative dynamics. Pending assessment.",
        url: "https://arxiv.org/abs/2610.05362v1",
        date: "2026-10-04",
        version: "v1" },
      { kind: "preprint",
        role: "progress",
        summary: "Poses the question; near-optimal Õ(Nt) gates for sparsely dissipative lattice Lindbladians and Õ((Nt)^{4/3}) per sample for time-evolved observables under generic one-dimensional Lindbladians.",
        url: "https://arxiv.org/abs/2609.26372v1",
        date: "2026-09-22",
        version: "v1" },
      { kind: "preprint",
        role: "progress",
        summary: "Optimal additive query complexity for Lindbladian simulation in the block-encoding model, with gate overhead linear in the query count; on a lattice this gives about N²t gates.",
        url: "https://arxiv.org/abs/2609.18757v2",
        date: "2026-11-09",
        version: "v2" },
    ],
    provenance: [
      { summary: "Kitchen's acknowledgment states that AI-assisted tools were used for limited editorial support in refining the prose, and that the mathematical arguments, results and conclusions are the author's.",
        url: "https://arxiv.org/abs/2609.31312v1",
        version: "v1" },
      { summary: "Trivedi, Yu and Malz acknowledge OpenAI's GPT-5 (Sol) for the proofs in Section 3.5.2: it generated a possible compression scheme, which the authors checked, simplified and rewrote. LLMs otherwise assisted only with editing; the authors take responsibility for correctness.",
        url: "https://arxiv.org/abs/2609.36203v1",
        version: "v1" },
      { summary: "Shen, Wu, Yuan and Zhang state that the core ideas were theirs, and that proofs and manuscript were developed through multiple rounds of interaction with GPT-5.6 and GPT-6, which assisted with calculations, proof development and writing.",
        url: "https://arxiv.org/abs/2610.05362v1",
        version: "v1" },
      { summary: "Mizuta states that AI tools assisted with proofreading, checking references and identifying potential issues in definitions and proofs; ideas, proofs and the initial manuscript are the author's.",
        url: "https://arxiv.org/abs/2609.26372v1",
        version: "v1" },
    ],
    relations: [
      { id: "O10", type: "related" },
    ],
    refs: [
      { label: "Mizuta, 'Lattice Lindbladian simulation by patching and merging' (2026 preprint), Sections II.2 and VI.0.2", url: "https://arxiv.org/abs/2609.26372" },
      { label: "Haah, Hastings, Kothari & Low, 'Quantum algorithm for simulating real time evolution of lattice Hamiltonians', FOCS 2018; SIAM J. Comput. special section",
        url: "https://arxiv.org/abs/1801.03922" },
      { label: "Cleve & Wang, 'Efficient Quantum Algorithms for Simulating Lindblad Evolution' (2016 preprint)", url: "https://arxiv.org/abs/1612.09512" },
      { label: "Li & Wang, 'Simulating Markovian open quantum systems using higher-order series expansion' (2022 preprint)", url: "https://arxiv.org/abs/2212.02051" },
      { label: "Kitchen, 'Causal Query Compression for Lindblad Dynamics' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.31312v1" },
      { label: "Trivedi, Yu & Malz, 'Near-optimal quantum simulation of lattice Lindbladian dynamics' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.36203v1" },
      { label: "Shen, Wu, Yuan & Zhang, 'Shallow Quantum Circuits for Geometrically Local Lindblad Dynamics' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.05362v1" },
    ] },

  { id: "A48",
    cat: "complexity",
    horizon: "incremental",
    status: "improved",
    reviewedAt: "2026-11-16",
    title: "Polynomials achievable by multivariable QSP",
    statement: r`(Rossi and Chuang 2022; Ito, Mori, Sakamoto and Fujii 2026, Section 5.) In $m$-variable quantum signal processing (M-QSP), a pair $(P,Q)$ of $m$-variable Laurent polynomials is achievable in $n$ steps if $\begin{pmatrix}P&Q\\-Q^*&P^*\end{pmatrix}=e^{i\phi_0\sigma_z}\prod_{k=1}^nA(a_{s_k})e^{i\phi_k\sigma_z}$ for some phases $\phi_k\in\mathbb R$ and variable sequence $s_k\in\{1,\dots,m\}$. Here $A(a)$ is the $X$-rotation with entries $(a\pm a^{-1})/2$ and $a_j\in\mathbb T$. For $m\ge2$, give a concise algebraic necessary and sufficient condition for achievability, analogous to the parity and $|P|^2+|Q|^2=1$ conditions of univariate QSP. Characterize the polynomials $P$ alone that admit some complementary $Q$.`,
    definition: r`**Quantum signal processing.** Univariate QSP interleaves one signal rotation with fixed processing rotations. A polynomial pair is achievable if and only if it has definite parity, the right degree and $|P|^2+|Q|^2=1$ on the circle. This characterization underlies QSVT (Low and Chuang, PRL 118, 010501 (2017), [arXiv:1606.02685](https://arxiv.org/abs/1606.02685); Gilyén, Su, Low and Wiebe, STOC 2019, [arXiv:1806.01838](https://arxiv.org/abs/1806.01838)). Rossi and Chuang introduced M-QSP with several commuting signal rotations and stated a characterization that relied on a conjecture (Quantum 6, 811 (2022), [arXiv:2205.06261](https://arxiv.org/abs/2205.06261)). Multivariate Fejér–Riesz factorization fails in general, so the univariate proof does not carry over.

The question is restated as open by Ito, Mori, Sakamoto and Fujii (Quantum 10, 2102 (2026), [arXiv:2410.02332](https://arxiv.org/abs/2410.02332)). Their outlook asks for an algebraic characterization “not by an algorithmic condition”, and for complementary polynomials; they write that “it remains unknown which polynomials M-QSP can implement”. Laneve (Quantum 10, 2025 (2026), [arXiv:2506.20484](https://arxiv.org/abs/2506.20484)) writes that the achievable class “seems hard to characterize”. Jing, Wang, Yu and Zhang call the characterization open in October 2026 ([arXiv:2610.03393](https://arxiv.org/abs/2610.03393v1)).`,
    progress: r`- Mori, Mizuta and Fujii found inconsistencies in Rossi and Chuang's main theorem. They attribute a counterexample to Conjecture 2.1 to Németh et al. (below). Mori, Mizuta and Fujii proposed revised necessary conditions and showed that these cannot be sufficient (Quantum 8, 1512 (2024), [arXiv:2310.00918](https://arxiv.org/abs/2310.00918)).
- Németh, Kövér, Kulcsár, Miklósi and Gilyén extended Haah's univariate characterization to homogeneous bivariate commuting QSP, and to an inhomogeneous variant with degree at most 1 in one variable. They gave a counterexample with degree 2 in both variables that refutes the Rossi–Chuang characterization for a related class ([arXiv:2312.09072](https://arxiv.org/abs/2312.09072), December 2023).
- Laneve and Wolf gave simpler necessary conditions and what they describe as the first sufficient condition for full M-QSP decomposability, covering generally inhomogeneous bivariate polynomials (Theorem 11), in a slightly different formalism (Quantum 9, 1641 (2025), [arXiv:2407.20823](https://arxiv.org/abs/2407.20823)).
- Ito, Mori, Sakamoto and Fujii gave a classical algorithm, polynomial in $m$ and $n$, that decides whether a given pair $(P,Q)$ is achievable in $n$ steps and outputs the phases (Theorem 1). Its answer “True” is necessary and sufficient, so the question is settled algorithmically for given pairs. They note that no algebraic condition is known, and the algorithm needs $Q$ as input (Quantum 10, 2102 (2026), [arXiv:2410.02332](https://arxiv.org/abs/2410.02332)).
- Laneve recast QSP as state conversion. A feasible adversary-bound solution in “triangular form” yields an M-QSP protocol (Theorem 4.13), and the set of protocols for $P$ is described as a subset of a semidefinite cone (Corollary 4.14). He conjectures that every $d$-dimensional target achievable by M-QSP admits a protocol over $SU(d)$ (Conjecture 4.15) (Quantum 10, 2025 (2026), [arXiv:2506.20484](https://arxiv.org/abs/2506.20484)).
- In October 2026, three preprints implemented multivariate polynomial transformations in broader query models with extra workspace and arbitrary interleaved unitaries. Low characterizes the transfer functions of finite causally ordered query circuits ([arXiv:2610.01125](https://arxiv.org/abs/2610.01125v1)). Shen, Wu, Yuan, Zhang and Zhang synthesize every polynomial that is contractive on the matrix domain, under joint block access, with near-optimal normalization ([arXiv:2610.08714](https://arxiv.org/abs/2610.08714v1)). Jing, Wang, Yu and Zhang implement every multivariate trigonometric polynomial up to a coefficient normalization, with optimal per-variable query counts ([arXiv:2610.03393](https://arxiv.org/abs/2610.03393v1)). None of them characterizes the single-qubit M-QSP class. Low and Shen et al. treat Rossi–Chuang M-QSP as a distinct precedent, and Jing et al. state that its characterization is open.`,
    residual: r`Open: an algebraic (non-algorithmic) characterization of achievable pairs for $m\ge2$, and a characterization of the achievable $P$ alone, which requires deciding whether a complementary $Q$ exists. Laneve's Conjecture 4.15 on protocol dimension is also open. A minimal sub-target is the inhomogeneous bivariate case with degree 2 in each variable, where the Rossi–Chuang conditions fail. In the broader query models of October 2026, Jing et al. ask whether the supremum norm of $P$ alone suffices at the same query count.`,
    evidence: [
      { kind: "published",
        role: "progress",
        summary: "Polynomial-time classical decision algorithm (M-QSP-CDA) whose output True is necessary and sufficient for a given pair (P, Q) to be achievable by m-variable M-QSP in n steps, with constructive phases; no algebraic characterization, and Q must be supplied.",
        url: "https://doi.org/10.22331/q-2026-05-12-2102",
        date: "2026-05-12" },
      { kind: "published",
        role: "progress",
        summary: "Adversary-bound (state-conversion) formulation: feasible triangular catalysts yield M-QSP protocols, and the protocol set is a subset of a semidefinite cone; conjectures that SU(d) protocols suffice for d-dimensional targets.",
        url: "https://doi.org/10.22331/q-2026-03-13-2025",
        date: "2026-03-13" },
      { kind: "published",
        role: "progress",
        summary: "Simpler necessary conditions and a first sufficient condition for achievability of generally inhomogeneous bivariate polynomials, in a modified M-QSP formalism.",
        url: "https://doi.org/10.22331/q-2025-02-20-1641",
        date: "2025-02-20" },
      { kind: "preprint",
        role: "progress",
        summary: "Haah-type characterization for homogeneous bivariate commuting QSP and for an inhomogeneous variant of degree at most 1 in one variable; a degree-(2,2) counterexample refutes the Rossi–Chuang characterization for a related class.",
        url: "https://arxiv.org/abs/2312.09072v1",
        date: "2023-12-14",
        version: "v1" },
      { kind: "published",
        role: "progress",
        summary: "Identifies inconsistencies in the original M-QSP theorem, proposes revised necessary conditions and shows they cannot be sufficient.",
        url: "https://doi.org/10.22331/q-2024-10-29-1512",
        date: "2024-10-29" },
    ],
    provenance: [
      { summary: "Low (2610.01125, v1) states that he conceptualized the project and is responsible for synthesis, interpretation, verification and writing, while large language models performed technical derivations and computational checks, drafted and edited much of the manuscript, and generated formal Lean 4 proofs of parts of the MQSP formalism. Cited here as context, not as progress on this question.",
        url: "https://arxiv.org/abs/2610.01125v1",
        version: "v1" },
      { summary: "Shen, Wu, Yuan, Zhang and Zhang (2610.08714, v1) report multi-round discussions with OpenAI models from GPT-5.3 Pro to GPT-6 Astra, covering derivations, proof development and checking, searches for gaps and counterexamples, literature search, code and writing; the authors take responsibility. Cited here as context.",
        url: "https://arxiv.org/abs/2610.08714v1",
        version: "v1" },
    ],
    relations: [],
    refs: [
      { label: "Rossi & Chuang, 'Multivariable quantum signal processing (M-QSP): prophecies of the two-headed oracle', Quantum 6, 811 (2022)",
        url: "https://arxiv.org/abs/2205.06261" },
      { label: "Mori, Mizuta & Fujii, 'Comment on Multivariable quantum signal processing (M-QSP)', Quantum 8, 1512 (2024)", url: "https://arxiv.org/abs/2310.00918" },
      { label: "Németh, Kövér, Kulcsár, Miklósi & Gilyén, 'On variants of multivariate quantum signal processing and their characterizations' (2023 preprint)",
        url: "https://arxiv.org/abs/2312.09072" },
      { label: "Laneve & Wolf, 'On multivariate polynomials achievable with quantum signal processing', Quantum 9, 1641 (2025)", url: "https://arxiv.org/abs/2407.20823" },
      { label: "Ito, Mori, Sakamoto & Fujii, 'Polynomial time constructive decision algorithm for multivariable quantum signal processing', Quantum 10, 2102 (2026)",
        url: "https://arxiv.org/abs/2410.02332" },
      { label: "Laneve, 'An adversary bound for quantum signal processing', Quantum 10, 2025 (2026)", url: "https://arxiv.org/abs/2506.20484" },
      { label: "Low, 'Multivariate Quantum Signal Processing' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.01125v1" },
      { label: "Shen, Wu, Yuan, Zhang & Zhang, 'Quantum Algorithms for Multivariable Polynomial Transformations: From Efficient Synthesis to Quantum Channel Transformations' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.08714v1" },
    ] },
  { id: "A49", cat: "complexity", horizon: "sharp", status: "open", reviewedAt: "2026-11-20",
    title: "Maximum dimension of a seven-qubit distance-two code",
    statement: r`What is the largest dimension of a seven-qubit subspace that detects every error on one qubit: $24$, $25$ or $26$?`,
    definition: r`An error is detectable if its action within the code is a scalar. Write $P$ for the orthogonal projector onto the code in $(\mathbb C^2)^{\otimes 7}$. For each site $j$ and each single-qubit Pauli operator $E\in\{X_j,Y_j,Z_j\}$, require $PEP=c_E P$ for some scalar $c_E$. By linearity these 21 tests cover every single-qubit error. The code dimension is $K=\operatorname{rank}P$. The optimization includes degenerate and nonadditive codes. [Rains, Theorems 2 and 4](https://arxiv.org/abs/quant-ph/9704043).`,
    progress: r`Rains constructed a code of dimension $24$. His linear-programming bound gives $K\leq 80/3$ at length seven, hence $K\leq 26$. The 2026 table of rational semidefinite bounds still lists $24$–$26$ for this case. [Rains](https://arxiv.org/abs/quant-ph/9704043) and [Anglès Munné and Huber, Table 1](https://arxiv.org/html/2603.19901v1#S4.T1).

Ganesan reports a search for a larger code. Its candidate of dimension $25$ had a nonzero compression residual and failed the exact detection condition. Both dimensions remain possible. [Infinity Machine, Section 3.7 and Appendix E](https://arxiv.org/abs/2610.35579v1).`,
    residual: r`An exact rank-$26$ projector would settle the maximum. Ruling out rank $25$ would settle it at $24$, since every subspace of a detecting code also detects the same errors. The remaining possibility, $25$, requires a construction at rank $25$ and an exclusion at rank $26$.`,
    evidence: [{ kind: "preprint", role: "progress", summary: "Table 1 records the interval from 24 to 26 for unrestricted seven-qubit codes of distance at least two.", url: "https://arxiv.org/abs/2603.19901v1", date: "2026-03-20", version: "v1" }],
    provenance: [{ summary: "Ganesan used Infinity Machine to search for a higher-dimensional code and reports a null result.", url: "https://arxiv.org/abs/2610.35579v1" }],
    relations: [{ id: "A32", type: "related" }],
    refs: [
      { label: "Rains, 'Quantum codes of minimum distance two', IEEE Transactions on Information Theory (1999)", url: "https://arxiv.org/abs/quant-ph/9704043" },
      { label: "Anglès Munné & Huber, 'SDP bounds on quantum codes: rational certificates' (2026), Table 1", url: "https://arxiv.org/abs/2603.19901v1" },
      { label: "Ganesan, 'Infinity Machine: a self-improving AI agent for research' (2026), Section 3.7", url: "https://arxiv.org/abs/2610.35579v1" },
    ] },

  { id: "A50", cat: "complexity", horizon: "sharp", status: "improved", reviewedAt: "2026-11-20",
    title: "CNOT count and depth for preparing the Golay logical zero",
    statement: r`How many controlled-NOT (CNOT) gates are needed to prepare the logical zero of the $[[23,1,7]]$ quantum Golay code at each allowed two-qubit depth?`,
    definition: r`Fix the binary $[23,12,7]$ Golay code $C$ in cyclic coordinates. Its logical zero is the equal superposition $|0_L\rangle=2^{-11/2}\sum_{c\in C^\perp}|c\rangle$ over the dual code. Start from $|0\rangle^{\otimes23}$. A CNOT may act on any pair of qubits, and single-qubit Clifford gates are free. Use exactly these 23 qubits throughout, without measurements or postselection. A depth layer consists of CNOTs on disjoint pairs. Let $g(D)$ be the minimum CNOT count for exact preparation up to global phase in at most $D$ layers, with $g(D)=\infty$ if no circuit fits. [Paetznick and Reichardt, Sections 3 and 6](https://arxiv.org/abs/1106.2190).`,
    progress: r`Paetznick and Reichardt used 57 CNOTs in seven layers. Doherty et al. found circuits with 45 entangling gates in seven layers and 44 in eight. A controlled-$Z$ costs one CNOT under the free local Clifford convention. [Doherty et al., Table I](https://arxiv.org/abs/2603.17743).

Ganesan deposited a circuit with 44 CNOTs in six layers. It gives $g(D)\leq44$ for every $D\geq6$. The deposit includes the circuit in cyclic coordinates and a verifier for the prepared state. [Appendix A.4](https://arxiv.org/html/2610.35579v1#A1.SS4) and [circuit and verifier](https://doi.org/10.5281/zenodo.23509367).`,
    residual: r`Can any depth achieve 43 CNOTs or fewer? Can five layers suffice with at most 44 CNOTs? A lower bound must cover every allowed Clifford circuit. Together with matching constructions, such bounds would determine the attainable tradeoff.`,
    evidence: [{ kind: "preprint", role: "progress", summary: "Appendix A.4 gives the six two-qubit layers and reports a stabilizer-tableau check and a statevector comparison in cyclic coordinates.", url: "https://arxiv.org/abs/2610.35579v1", date: "2026-10-26", version: "v1" }],
    provenance: [{ summary: "Doherty et al. used reinforcement learning and tree search. Ganesan reports that Infinity Machine optimized their 44-gate circuit for depth.", url: "https://arxiv.org/abs/2610.35579v1" }],
    relations: [{ id: "A33", type: "related" }],
    refs: [
      { label: "Paetznick & Reichardt, 'Fault-tolerant ancilla preparation and noise threshold lower bounds for the 23-qubit Golay code', Quantum Information & Computation (2012)", url: "https://arxiv.org/abs/1106.2190" },
      { label: "Doherty et al., 'Fast stabilizer state preparation via AI-optimized graph decimation' (2026), Table I", url: "https://arxiv.org/abs/2603.17743" },
      { label: "Ganesan, 'Infinity Machine: a self-improving AI agent for research' (2026), Appendix A.4", url: "https://arxiv.org/abs/2610.35579v1" },
    ] },
  { id: "A51", cat: "complexity", horizon: "sharp", status: "improved", reviewedAt: "2026-11-20",
    title: "Learning a local parent Hamiltonian from a ground state",
    statement: r`Can a polynomial-time quantum learner, given copies of the unique ground state $|\psi\rangle$ of an unknown geometrically local Hamiltonian, output a local Hamiltonian with a unique ground state close to $|\psi\rangle$? Resolve the gapped version, with bounded interaction strengths and an inverse-polynomial lower bound on the input and output gaps.`,
    definition: r`Fix a finite-dimensional lattice of $n$ qubits, a constant interaction radius and a bounded number of terms per site. The unknown Hamiltonian is $H=\sum_a h_a$, with $\|h_a\|\leq1$, unique ground state $|\psi\rangle$ and promised gap at least $\Delta>0$. The learner receives independent copies of $|\psi\rangle$, but no evolution oracle for $H$. It must output a classical description of $\widehat H$ with bounded local terms and constant interaction radius, whose unique ground state $|\widehat\psi\rangle$ satisfies $\tfrac12\||\widehat\psi\rangle\langle\widehat\psi|-|\psi\rangle\langle\psi|\|_1\leq\varepsilon$. Require time and copies polynomial in $n,\Delta^{-1},\varepsilon^{-1}$, and an output gap at least inverse polynomial in these parameters.

This is a precise gapped benchmark for [Tang's first question](https://ewintang.com/blog/2025/04/22/open/). The output gap is an additional explicit benchmark requirement; uniqueness excludes the trivial zero Hamiltonian. Different Hamiltonians may have the same ground state, so recovering the original coefficients is unnecessary.`,
    progress: r`Yu and Wei show that sufficiently accurate local reduced density matrices determine a unique gapped ground state robustly. Their overlapping-tomography bounds give polynomial copy complexity for constant locality and an inverse-polynomial gap, without an efficient general reconstruction algorithm. [Lemma 4.2 and Corollary 4.3](https://arxiv.org/abs/2303.08938v2).

Kim, Kim and Ranard give polynomial-time circuit-learning algorithms for states obtained from product states with constant-depth local circuits, including an ancillary-state extension, and for specified locally extendible topological states on a disk. The latter include the toric code with uniform boundary conditions. Their hypotheses do not cover arbitrary unique gapped local ground states. A learned preparation circuit is also a different output from the local parent required here. [Theorems 1 and 5, discussion and appendices](https://arxiv.org/abs/2410.23544v3).`,
    residual: r`Find a learner for the stated class, or establish a computational obstruction under a specified complexity assumption and copy-access model. A polynomial-size description of the unknown Hamiltonian and polynomial statistical information do not by themselves make its reconstruction efficient.`,
    evidence: [{ kind: "published", role: "progress", summary: "Quantum 2270 (2026): efficient circuit learning for invertible states with a finite-depth promise and for specified locally extendible topological states; no general gapped-ground-state parent learner.", url: "https://arxiv.org/abs/2410.23544v3", date: "2026-11-05", version: "v3" }],
    provenance: [{ summary: "Kim, Kim and Ranard disclose using Claude Opus 5.5 for editing and correcting errors; they attribute the ideas to the authors and take responsibility for the content.", url: "https://arxiv.org/abs/2410.23544v3", version: "v3" }],
    relations: [{ id: "A28", type: "related" }, { id: "B2", type: "related" }, { id: "M7", type: "related" }],
    refs: [
      { label: "Tang, 'Some open problems', 22 April 2025, Question 1 and glossary", url: "https://ewintang.com/blog/2025/04/22/open/" },
      { label: "Yu & Wei, 'Learning marginals suffices!' (2023 preprint, v2)", url: "https://arxiv.org/abs/2303.08938v2" },
      { label: "Kim, Kim & Ranard, 'Learning State Preparation Circuits for Quantum Phases of Matter', Quantum 2270 (2026; arXiv v3)", url: "https://arxiv.org/abs/2410.23544v3" },
    ] },
  { id: "A52", cat: "complexity", horizon: "sharp", status: "improved", reviewedAt: "2026-11-20",
    title: "Hamiltonian learning with a fixed minimum evolution time",
    statement: r`Can an unknown geometrically local Hamiltonian on $n$ qubits be learned with polynomial total evolution time when every query to its dynamics must last at least a fixed constant $T>0$? Can the precision dependence be improved to $\mathrm{poly}(n)/\varepsilon$, up to logarithms, while keeping $T$ independent of both $n$ and $\varepsilon$?`,
    definition: r`On a fixed finite-dimensional lattice, write $H=\sum_a\lambda_a P_a$ in a known basis of nonidentity Pauli products of bounded support and diameter, with bounded degree and $\max_i\sum_{a:i\in\mathrm{supp}(P_a)}|\lambda_a|\leq1$. Fix the unobservable identity coefficient to zero. A query applies the channel $\rho\mapsto e^{-iHt}\rho e^{iHt}$ at any chosen real duration $t\geq T$; known controls, ancillas and measurements between queries are allowed. Estimate every coefficient to additive error $\varepsilon$ with probability at least $2/3$, in polynomial computation time. The dynamical resource is $t_{\mathrm{tot}}=\sum_j t_j$. [Tang, Question 4 and glossary](https://ewintang.com/blog/2025/04/22/open/).

The lower bound on each duration still allows fine control of its value. Restricting times to multiples of a fixed clock interval, or giving only one fixed evolution, imposes additional assumptions.`,
    progress: r`The FOCS 2024 workshop asks the question with all durations above 100 in fixed interaction units; Tang's 2025 account distinguishes polynomial total time from the stronger inverse-precision target. [Workshop, page 10](https://jerryzli.github.io/focs2024-slides/open_questions.pdf).

Shin, Lee and Oh report a learner with arbitrary fixed $T$ and inverse-precision scaling for logarithmically many nonzero Pauli terms. Their globally normalized model assumes $\|H\|\leq1$. For polynomial sparsity $m$, their theorem trades $T=\Theta(m^{-1/K})$ against a polynomial cost for fixed $K$; taking $K$ of order $\log m$ yields constant minimum duration with quasipolynomial cost. Section VII explicitly leaves the polynomial-cost, arbitrary-fixed-$T$ problem open. The norm normalization must be tracked when comparing these bounds with an extensive lattice Hamiltonian. [Theorems 1–2 and Section VII](https://arxiv.org/abs/2604.27838v1).`,
    residual: r`Obtain polynomial time for general bounded-degree local systems at fixed $T$ in the stated interaction units, or prove a lower bound excluding it. Then determine whether inverse-precision total evolution time is attainable. Time-dependent cancellation controls inserted inside a query would change the access model.`,
    evidence: [{ kind: "preprint", role: "progress", summary: "Arbitrary fixed minimum duration is compatible with Heisenberg scaling for logarithmic Pauli sparsity under global norm normalization; polynomial sparsity retains a duration-versus-cost tradeoff.", url: "https://arxiv.org/abs/2604.27838v1", date: "2026-04-30", version: "v1" }],
    relations: [{ id: "A28", type: "related" }, { id: "O9", type: "related" }],
    refs: [
      { label: "Tang, 'Some open problems', 22 April 2025, Question 4 and glossary", url: "https://ewintang.com/blog/2025/04/22/open/" },
      { label: "Chen, Cotler, Huang, Li & Tang, 'Some Open Problems in Quantum Learning', FOCS workshop, 27 October 2024, p. 10", url: "https://jerryzli.github.io/focs2024-slides/open_questions.pdf" },
      { label: "Shin, Lee & Oh, 'Heisenberg-limited Hamiltonian learning without short-time control' (2026 preprint, v1)", url: "https://arxiv.org/abs/2604.27838v1" },
    ] },
  { id: "A53", cat: "complexity", horizon: "incremental", status: "improved", reviewedAt: "2026-11-20",
    title: "Quantum query–space tradeoffs for collision and element distinctness",
    statement: r`Determine the optimal tradeoff between oracle queries and memory for general quantum algorithms that find a collision in a random function or solve element distinctness. In particular, do the tight collision-search tradeoffs proved for algorithms symmetric under relabelling of the output alphabet extend to unrestricted algorithms?`,
    definition: r`An evaluation query maps $|x,y\rangle$ to $|x,y+f(x)\bmod N\rangle$. For random collision search, $f:[N]\to[N]$ is uniform and the output is a pair $x\ne x'$ with $f(x)=f(x')$, with constant success probability. Count queries $Q$ and all retained workspace $S$ in qubits, including retained classical records. For element-distinctness search, require such a pair on every noninjective input $f:[n]\to[n^2]$. The corresponding decision problem asks only whether a pair exists. Aaronson's original question also includes distinguishing injective from two-to-one functions under that promise. [Problem 3](https://arxiv.org/abs/2109.06917v1).

Memory that stores classical data but can be queried in superposition is a distinct implementation resource from a fully coherent quantum table. Any comparison must specify which memory is counted and how it is accessed.`,
    progress: r`Without a memory restriction, collision and element-distinctness decision have optimal query exponents $1/3$ and $2/3$. Aaronson asks whether these advantages can be retained with small memory. [Section 3](https://arxiv.org/abs/2109.06917v1).

Magniez and Zur prove $Q=\Omega(N^{1/3})$ and $Q^2S=\Omega(N\log N)$ for random collision search under label symmetry. For element-distinctness search they obtain $Q=\Omega(n^{2/3})$ and $Q^2S=\Omega(n^2\log n)$. Suitable implementations of the standard algorithms match these bounds. Their extension to intermediate measurements requires a corresponding conditional symmetry property. [Theorem 4.19, Corollary 4.20 and Section 5](https://arxiv.org/abs/2609.10808v2).`,
    residual: r`Remove the symmetry restriction, or find an asymmetric algorithm that improves the tradeoff. Naively storing a random permutation to symmetrize an algorithm can consume the very memory being bounded. Establish decision tradeoffs in their own right: converting a decision algorithm to collision search need not preserve a small-space bound.`,
    evidence: [{ kind: "preprint", role: "progress", summary: "Tight random-collision and element-distinctness search tradeoffs under label symmetry; Section 1.4 explicitly leaves unrestricted algorithms open.", url: "https://arxiv.org/abs/2609.10808v2", date: "2026-10-02", version: "v2" }],
    provenance: [{ summary: "Magniez and Zur attribute the connection between collision-free compressed databases and arrangement graphs, via the deletion map, to ChatGPT 5.3; they also disclose AI use for supplementary checks, editing and discussing ideas.", url: "https://arxiv.org/abs/2609.10808v2", version: "v2" }],
    relations: [{ id: "A23", type: "related" }],
    refs: [
      { label: "Aaronson, 'Open Problems Related to Quantum Query Complexity', ACM Trans. Quantum Comput. 2(4), 14 (2021), Problem 3", url: "https://arxiv.org/abs/2109.06917v1" },
      { label: "Magniez & Zur, 'Tight Time-Space Lower Bounds for Collision Finding and Element Distinctness under Label Symmetry' (2026 preprint, v2)", url: "https://arxiv.org/abs/2609.10808v2" },
    ] },

  { id: "A54", cat: "complexity", horizon: "sharp", status: "claimed-solved", reviewedAt: "2026-11-26",
    title: "Two-message quantum interactive proofs: QIP(2) versus PSPACE",
    statement: r`Does every problem in $\mathsf{PSPACE}$ have a two-message quantum interactive proof system, that is, does $\mathsf{QIP}(2)=\mathsf{PSPACE}$? Since $\mathsf{QIP}=\mathsf{PSPACE}$, this asks whether every quantum interactive proof can be parallelized to two messages.`,
    definition: r`**Two-message quantum interactive proofs.** On input $x$, a polynomial-time quantum verifier prepares a state on a message register and a private register, sends the message register to a computationally unbounded prover, receives the prover's quantum reply, and measures the reply together with its private register. $\mathsf{QIP}(2)$ is the class of promise problems with such a protocol of completeness $2/3$ and soundness $1/3$ ([Jain, Upadhyay and Watrous, Section 3.1](https://arxiv.org/abs/0905.1300v1)). More generally, $\mathsf{QIP}(m)$ allows $m$ messages, the prover sending the last, so $\mathsf{QIP}(1)=\mathsf{QMA}$.

Three messages already give quantum interactive proofs their full power: every quantum interactive proof can be parallelized to three messages, and $\mathsf{QIP}(3)=\mathsf{QIP}=\mathsf{PSPACE}$ ([Jain, Ji, Upadhyay and Watrous, Section 1](https://arxiv.org/abs/0907.4737v2)). Classical interactive proofs with a constant number of messages, by contrast, only reach $\mathsf{AM}\subseteq\Pi_2^{\mathsf p}$. The open inclusion is therefore $\mathsf{PSPACE}\subseteq\mathsf{QIP}(2)$. A restricted model is qq-QAM, in which the verifier's only message consists of halves of EPR pairs, called quantum public coins ([Kobayashi, Le Gall and Nishimura](https://arxiv.org/abs/1312.4673v2)); a protocol of this type is in particular a two-message quantum interactive proof.`,
    progress: r`- Watrous (January 1999; journal version in Theor. Comput. Sci. 292 (2003)) gives every $\mathsf{PSPACE}$ language a three-message quantum interactive proof with one-sided, exponentially small error. The prover sends a superposition of sum-check transcripts, and the verifier tests that the random challenges were not used ahead of time ([arXiv:cs/9901015](https://arxiv.org/abs/cs/9901015v1), Theorem 1).
- Jain, Upadhyay and Watrous (May 2009; FOCS 2009) prove $\mathsf{QIP}(2)\subseteq\mathsf{PSPACE}$ with a parallel matrix multiplicative-weights algorithm for the semidefinite program of the optimal acceptance probability ([arXiv:0905.1300](https://arxiv.org/abs/0905.1300v1)). Among $\mathsf{QIP}(0)=\mathsf{BQP}$, $\mathsf{QIP}(1)=\mathsf{QMA}$, $\mathsf{QIP}(2)$ and $\mathsf{QIP}(3)=\mathsf{QIP}$, they describe $\mathsf{QIP}(2)$ as “the most mysterious”; its known lower bounds then included $\mathsf{QSZK}\subseteq\mathsf{QIP}(2)$.
- Jain, Ji, Upadhyay and Watrous (July 2009; J. ACM 58, 30 (2011)) extend the method to $\mathsf{QIP}=\mathsf{PSPACE}$ ([arXiv:0907.4737](https://arxiv.org/abs/0907.4737v2)).
- Kobayashi, Le Gall and Nishimura (December 2013; SIAM J. Comput. 48, 865 (2019)) introduce qq-QAM, prove that Close Image to Totally Mixed is complete for it, and classify constant-message quantum Arthur–Merlin games with classical or quantum public coins: a quantum message anywhere before the last two messages gives $\mathsf{PSPACE}$, and every other type collapses to qq-QAM, $\mathsf{QAM}$ or its classical-message variant ([arXiv:1312.4673](https://arxiv.org/abs/1312.4673v2), Theorems 2 and 7). They call the characterization of two-message quantum interactive proofs “one of the main open problems in this field” and ask whether qq-QAM has any upper bound better than $\mathsf{QIP}(2)$.
- Liu and Vidick (September 2026; v3 of 9 October 2026) prove that $\mathsf{QIP}(2)$ and qq-QAM achieve perfect completeness, through an exact-half calibration, an EPR-pair completion and a new endpoint-inward turn-halving transformation ([arXiv:2609.15926](https://arxiv.org/abs/2609.15926v3), Theorems 1.1 and 1.2).`,
    claim: r`**Yupan Liu, [“Two messages suffice for quantum interactive proof systems”](https://arxiv.org/abs/2611.31236v1)** (arXiv:2611.31236, v1, 23 November 2026), Theorem 1.1.

What it claims:
- $\mathsf{qq\text{-}StoqAM}_1=\mathsf{qq\text{-}QAM}=\mathsf{QIP}(2)=\mathsf{QIP}=\mathsf{PSPACE}$. Every quantum interactive proof can therefore be parallelized to two messages. The verifier sends only halves of EPR pairs, accepts honest provers with certainty, and then verifies stoquastically: $|0\rangle$ and $|+\rangle$ ancillas, Toffoli, CNOT and $X$ gates, and a single Hadamard-basis measurement.
- The new direction is $\mathsf{PSPACE}$-hardness of Close Image to Uniform, a classical special case of Close Image to Totally Mixed. Given a sampler $S(u,r)$ with a uniform seed $r$, decide whether some input distribution makes the output exactly uniform, or every input distribution leaves it at total-variation distance at least $\eta$. The reduction from true quantified Boolean formulas builds the sampler from single transitions of the sum-check protocol with degree reduction over $\mathbb F_q$, with $T+1=O(|\Phi|^2)$ rounds and $q=8(T+1)$. For a false formula, every input distribution stays at distance at least $\tfrac{1}{32(T+1)^2}$ (Lemma 3.8).
- In the protocol, the verifier undoes the sampler on the prover's reply and runs a SWAP test of the seed and output registers against $|+\rangle^{\otimes m_+}|0\rangle^{\otimes m_{\rm out}}$. Its soundness is $1-\eta^2/2$ (Theorem 4.4), and parallel repetition with a single final SWAP test brings it below $3/4$ (Lemma 4.2).
- Consequences stated in the paper: a trichotomy for constant-message quantum Arthur–Merlin games with classical or quantum public coins, in which a quantum message anywhere before the last one gives $\mathsf{PSPACE}$; and two-message proofs with quantum public coins are strictly stronger than with classical public coins unless the counting hierarchy collapses.

Caveats:
- A single-author preprint, not peer reviewed; no independent assessment was found. Hence “Claimed solved” rather than “Solved”.
- Lemmas 3.6–3.8, Theorem 4.4 and Appendix A were reread line by line for this catalogue, and no gap was found. Appendix A relies on the product rule of Molina and Watrous for the maximum probability of a prescribed outcome ([arXiv:1104.1140](https://arxiv.org/abs/1104.1140v2), Section 4), whose proof was also checked; the trichotomy follows from Theorem 1.1 and Theorem 7 of Kobayashi, Le Gall and Nishimura. This is not an independent expert assessment.
- The upper bound $\mathsf{QIP}(2)\subseteq\mathsf{PSPACE}$ is the known one. The perfect completeness of Liu and Vidick enters only as a convention for qq-QAM, since the new protocol is perfectly complete by construction.`,
    residual: r`If the claim holds, two messages suffice, with perfect completeness, quantum public coins and stoquastic verification, and the question is settled. What remains is independent assessment of the proof. Liu recalls that the two-message class with classical public coins, $\mathsf{QAM}$, lies in $\mathsf{BP}\cdot\mathsf{PP}$, so $\mathsf{QAM}=\mathsf{PSPACE}$ would collapse the counting hierarchy; the exact power of $\mathsf{QAM}$ is a separate question.`,
    evidence: [
      { kind: "preprint", role: "claimed-solution", summary: "Claimed proof of qq-StoqAM_1 = qq-QAM = QIP(2) = QIP = PSPACE: PSPACE-hardness of Close Image to Uniform via a sum-check sampler, and a perfectly complete two-message stoquastic protocol with quantum public coins. Single-author preprint, pending assessment.", url: "https://arxiv.org/abs/2611.31236v1", date: "2026-11-23", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Perfect completeness for QIP(2) and qq-QAM (and for QMA over the gate set H, X, Toffoli, S), via a new endpoint-inward turn-halving transformation; does not place PSPACE in QIP(2).", url: "https://arxiv.org/abs/2609.15926v3", date: "2026-10-09", version: "v3" },
      { kind: "published", role: "progress", summary: "SIAM J. Comput. 48, 865 (2019): qq-QAM defined, Close Image to Totally Mixed qq-QAM-complete, and constant-message quantum Arthur–Merlin games classified into PSPACE, qq-QAM, QAM and its classical-message variant; the power of qq-QAM and QIP(2) left open.", url: "https://arxiv.org/abs/1312.4673v2", date: "2014-09-16", version: "v2" },
    ],
    provenance: [
      { summary: "Liu discloses that large language model tools were used interactively at all stages, from exploratory research to the final exposition and writing, with access to OpenAI models through the ChatGPT for Academic Researchers program; the author takes sole responsibility for all claims and proofs.", url: "https://arxiv.org/abs/2611.31236v1", version: "v1" },
      { summary: "Liu and Vidick make the same disclosure for the perfect-completeness paper: large language model tools at all stages, with access to OpenAI models through the ChatGPT for Academic Researchers program.", url: "https://arxiv.org/abs/2609.15926v3", version: "v3" },
    ],
    relations: [{ id: "A4", type: "related" }, { id: "A9", type: "related" }, { id: "A31", type: "related" }],
    refs: [
      { label: "Liu, 'Two messages suffice for quantum interactive proof systems' (2026 preprint, v1)", url: "https://arxiv.org/abs/2611.31236v1" },
      { label: "Liu & Vidick, 'Achieving perfect completeness for one- and two-message quantum proof systems' (2026 preprint, v3)", url: "https://arxiv.org/abs/2609.15926v3" },
      { label: "Kobayashi, Le Gall & Nishimura, 'Generalized Quantum Arthur–Merlin Games', SIAM J. Comput. 48, 865–902 (2019)", url: "https://arxiv.org/abs/1312.4673v2" },
      { label: "Jain, Ji, Upadhyay & Watrous, 'QIP = PSPACE', J. ACM 58, 30 (2011)", url: "https://arxiv.org/abs/0907.4737v2" },
      { label: "Jain, Upadhyay & Watrous, 'Two-message quantum interactive proofs are in PSPACE', FOCS 2009, pp. 534–543", url: "https://arxiv.org/abs/0905.1300v1" },
      { label: "Watrous, 'PSPACE has 2-round quantum interactive proof systems' (1999 preprint; journal version 'PSPACE has constant-round quantum interactive proof systems', Theor. Comput. Sci. 292, 575–588 (2003))", url: "https://arxiv.org/abs/cs/9901015v1" },
      { label: "Molina & Watrous, 'Hedging bets with correlated quantum strategies', Proc. R. Soc. A 468, 2614–2629 (2012)", url: "https://arxiv.org/abs/1104.1140v2" },
    ] },
];
