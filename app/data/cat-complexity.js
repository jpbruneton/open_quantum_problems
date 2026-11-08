const r = String.raw;

export const COMPLEXITY = [
  { id: "A1", cat: "complexity", horizon: "sharp",
    title: "BPP versus BQP",
    statement: r`Determine whether $\mathsf{BPP}=\mathsf{BQP}$, or prove that efficient bounded-error quantum computation is strictly more powerful than efficient randomized classical computation.`,
    definition: r`**BPP versus BQP** asks whether efficient bounded-error quantum computation is strictly more powerful than efficient randomized classical computation. Since $\mathsf{P}\subseteq\mathsf{BPP}\subseteq\mathsf{BQP}\subseteq\mathsf{PSPACE}$, proving $\mathsf{BPP}\ne\mathsf{BQP}$ would also prove $\mathsf{P}\ne\mathsf{PSPACE}$.

This is a sharp equality question, even though an unconditional separation is a long-horizon challenge. It compares the same finite-input, bounded-error computation model; alternative data-access or output conventions belong in the methods discussion A16. Standard reference: Bernstein and Vazirani, “Quantum complexity theory”, SIAM J. Comput. 26 (1997), [doi:10.1137/S0097539796300921](https://doi.org/10.1137/S0097539796300921).`,
    progress: r`- Bernstein–Vazirani's recursive Fourier sampling and Simon's problem give oracle/query-model evidence.
- Raz and Tal proved a classical-oracle separation of BQP from the entire polynomial hierarchy ([doi:10.1145/3313276.3316315](https://doi.org/10.1145/3313276.3316315)). These are relativized results, not unrelativized class separations.
- Shor's polynomial-time factoring algorithm is further evidence of quantum advantage ([arXiv:quant-ph/9508027](https://arxiv.org/abs/quant-ph/9508027)), but an exponential advantage for factoring is not proved: no superpolynomial classical lower bound is known.`,
    relations: [{ id: "A2", type: "related" }, { id: "A11", type: "related" }],
    refs: [
      { label: "Bernstein & Vazirani, 'Quantum complexity theory', SIAM J. Comput. 26 (1997)", url: "https://doi.org/10.1137/S0097539796300921" },
      { label: "Raz & Tal, 'Oracle separation of BQP and PH', STOC 2019", url: "https://doi.org/10.1145/3313276.3316315" },
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
    ],
    reviewedAt: "2026-10-17",
    title: "QMA versus QCMA",
    statement: r`Determine whether quantum witnesses increase the power of polynomial-time quantum verification: $\mathsf{QMA}\stackrel{?}{=}\mathsf{QCMA}$, without an oracle.`,
    definition: r`**QMA versus QCMA**: QMA allows a polynomial-size quantum witness; QCMA restricts the witness to a classical string while retaining a quantum verifier. The question is whether some efficiently verifiable evidence fundamentally requires quantum information, without an oracle.

Aaronson and Kuperberg gave a quantum-oracle separation of the two classes, Theory of Computing 3 (2007), [theoryofcomputing.org/articles/v003a007](https://theoryofcomputing.org/articles/v003a007/).`,
    progress: r`- Natarajan–Nirkhe's distribution-testing separation uses a randomized classical oracle ([Quantum 8, 1377 (2024)](https://quantum-journal.org/papers/q-2024-06-17-1377/)); Ben-David–Kundu's 2024 classical-oracle result restricts adaptivity ([arXiv:2402.00298](https://arxiv.org/abs/2402.00298)). These are important intermediate models, not the unrestricted classical-oracle theorem.
- The full standard classical-oracle separation is due to Bostanci, Haferkamp, Nirkhe and Zhandry: first posted in November 2025, revised in January 2026 and published at STOC 2026 ([arXiv:2511.09551](https://arxiv.org/abs/2511.09551v2)). It strengthens relativized evidence but does not settle the unrelativized question.
- On 2 October 2026 (v1), Cakan constructed a classical oracle relative to which QMA is not contained in QCIP, where a quantum verifier exchanges polynomially many classical messages with an unbounded prover ([arXiv:2610.03648](https://arxiv.org/abs/2610.03648v1)). This strengthens the earlier oracle separation from QCMA to classical interaction.
- On 5 October 2026 (v1), Cakan, Chung, Hung and Yang constructed a classical oracle relative to which $\mathsf{QCMA}\ne\mathsf{ClonableQMA}$ ([arXiv:2610.06740](https://arxiv.org/abs/2610.06740v1)). Even clonable quantum witnesses can therefore beat classical ones relative to a classical oracle, answering a question of Nehoran and Zhandry. The result concerns the mechanism behind relativized separations.`,
    residual: r`All these separations are relativized. The unrelativized QMA versus QCMA question remains open.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Classical-oracle separation of ClonableQMA from QCMA; relativized, not an unrelativized class separation.", url: "https://arxiv.org/abs/2610.06740v1", date: "2026-10-05", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Classical-oracle separation of QMA from polynomial-round QCIP; does not separate the unrelativized classes.", url: "https://arxiv.org/abs/2610.03648v1", date: "2026-10-02", version: "v1" },
      { kind: "published", role: "progress", summary: "A standard classical oracle separates QMA from QCMA; the unrelativized equality remains open.", url: "https://doi.org/10.1145/3798129.3800776" }],
    relations: [{ id: "A4", type: "related" }, { id: "A5", type: "related" }, { id: "A10", type: "related" }],
    refs: [
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
    progress: r`- Jeffery and Witteveen prove $\mathsf{QMA}=\mathsf{QMA}^{\infty}=\mathsf{QMA}_1^{\infty}$ when the verifier has their specified infinite-dimensional counter with an efficient shift operation ([arXiv:2506.15551](https://arxiv.org/abs/2506.15551)). The result, posted in June 2025 and published in PRL in May 2026, removes completeness error using an additional infinite register. Truncation also gives stronger finite-dimensional completeness amplification, but not exactly perfect completeness in ordinary finite-register QMA, so this theorem does not answer the finite-register question.`,
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
      { kind: "published", role: "progress", summary: "Perfect completeness is achievable with a specified infinite counter; this does not settle the ordinary finite-register problem.", url: "https://journals.aps.org/prl/abstract/10.1103/pwdd-htbf", date: "2026-05-06" }],
    relations: [{ id: "A3", type: "related" }, { id: "A8", type: "related" }],
    refs: [
      { label: "Grewal & Rudolph, 'QMA has perfect completeness' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.13032v1" },
      { label: "Aaronson, 'On perfect completeness for QMA', Quantum Inf. Comput. 9 (2009)", url: "https://arxiv.org/abs/0806.0450" },
      { label: "Jeffery & Witteveen, 'Quantum-Merlin-Arthur Problems Have Perfect Completeness with an Infinite Counter', PRL 136, 180601 (2026); preprint 'QMA = QMA1 with an infinite counter' (2025)", url: "https://arxiv.org/abs/2506.15551" },
    ] },

  { id: "A5", cat: "complexity", horizon: "sharp", status: "improved",
    reviewedAt: "2026-10-26",
    title: "Multiple unentangled quantum proofs",
    statement: r`Determine whether $\mathsf{QMA}(2)=\mathsf{QMA}$, or whether two polynomial-size witnesses promised to be unentangled increase verification power.`,
    definition: r`**QMA(2)** is the class of problems verifiable with two polynomial-size quantum witnesses promised to be unentangled. The verifier may jointly process the two witnesses, but the honest and cheating witnesses must be product across the two prover registers. The product-state optimization underlying this model connects it to separability and tensor optimization.

Harrow and Montanaro showed that polynomially many unentangled witnesses collapse to two, with the usual constant completeness–soundness gap, J. ACM 60 (2013), [arXiv:1001.0017](https://arxiv.org/abs/1001.0017).`,
    progress: r`- Very short proofs require attention to the gap: logarithmic-size protocols with inverse-polynomial gap are not the same claim as the $\widetilde O(\sqrt n)$-size, constant-gap two-witness protocols for NP problems.
- In July 2026, Beckey, Jeronimo and Wu determined the exact worst-case product-test acceptance curve over all product overlaps and finite local dimensions ([arXiv:2607.21477](https://arxiv.org/abs/2607.21477v1)). This settles the low-overlap analysis and strengthens one-shot soundness of a key reduction, without settling the class comparison.
- In September 2026, Bostanci et al. constructed a quantum oracle separating QMA(2) from QMA ([arXiv:2609.02865](https://arxiv.org/abs/2609.02865v1)). They also prove the geometric no-disentanglers conjecture at constant errors $\varepsilon+\delta<1$: an approximate disentangler needs exponentially many input qubits in the number of output qubits. The class separation is relativized; the geometric theorem is not. Neither proves an unrelativized separation.
- On 30 September 2026 (v1), Della Schiava and Mataraarachchi claimed $\mathsf{QMA}(2;h)=\mathsf{QMA}(2)$ for $h=O(\log n)$ shared EPR pairs ([arXiv:2609.39668](https://arxiv.org/abs/2609.39668v3)). The resource is a bounded shared-entanglement budget during witness preparation, not arbitrary entangled witnesses. Larger budgets and the comparison with ordinary QMA remain unresolved.
- On 5 October 2026 (v1), Grewal, Mutreja and Tomer constructed a classical oracle relative to which $\mathsf{QMA}\ne\mathsf{QMA(2)}$ ([arXiv:2610.06760](https://arxiv.org/abs/2610.06760v1)). Their separable-Hamiltonian problem uses signed edge constraints on a graph. YES instances have zero-energy product states, while NO instances have entangled zero-energy states built from the antisymmetric subspace but no low-energy product states. Compressed-oracle techniques bound QMA verifiers. This answers the classical-oracle version of the question.`,
    residual: r`The unrelativized comparison of QMA(2) with QMA remains open. The general upper bound is $\mathsf{QMA}(2)\subseteq\mathsf{NEXP}$; the intermediate target $\mathsf{QMA(2)}\subseteq\mathsf{EXP}$ is also open.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Classical-oracle separation of QMA from QMA(2) via a signed-edge separable-Hamiltonian problem; relativized, not an unrelativized class separation.", url: "https://arxiv.org/abs/2610.06760v1", date: "2026-10-05", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Logarithmically many shared EPR pairs do not increase QMA(2) in the specified model; not QMA(2)=QMA. v3 (14 October 2026) changes only arXiv metadata.", url: "https://arxiv.org/abs/2609.39668v3", date: "2026-10-14", version: "v3" },
      { kind: "preprint", role: "progress", summary: "Exact product-test acceptance curve, including the previously open low-overlap regime.", url: "https://arxiv.org/abs/2607.21477v1", date: "2026-07-23", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Quantum-oracle QMA(2)/QMA separation and an unrelativized no-disentanglers theorem at constant errors with epsilon + delta < 1.", url: "https://arxiv.org/abs/2609.02865v1", date: "2026-09-02", version: "v1" },
    ],
    provenance: [
      { summary: "Grewal, Mutreja and Tomer report that the original proof was obtained in about ten rounds of interaction with ChatGPT 6 Astra; they verified the arguments independently, revised the proofs and link the original AI-generated manuscript.", url: "https://arxiv.org/abs/2610.06760v1", version: "v1" },
      { summary: "The authors report substantial proof-development and writing assistance from ChatGPT-5.6 Sol, ChatGPT-6 Astra and Claude 5.0 Opus, and take responsibility for the claims.", url: "https://arxiv.org/html/2609.39668v1", version: "v1" },
      { summary: "Product-test authors report ChatGPT 5.5 Pro assistance with analysis, ChatGPT/Claude assistance with writing and exploratory Codex-supported Lean work; they report human verification and responsibility for the manuscript.", url: "https://arxiv.org/abs/2607.21477v1", version: "v1" },
      { summary: "The September authors report that ChatGPT 5.6 Sol suggested the central proof idea after prompts about She–Yuen, and that they verified, simplified and developed it. This records their disclosure, not an independent provenance audit.", url: "https://arxiv.org/abs/2609.02865v1", version: "v1" },
    ],
    relations: [{ id: "A3", type: "related" }, { id: "E3", type: "related" }],
    refs: [
      { label: "Grewal, Mutreja & Tomer, 'A classical oracle separation between QMA and QMA(2)' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.06760v1" },
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
      { kind: "preprint", role: "progress", summary: "Almost-good qLDPC and quantum locally testable codes with transversal multi-controlled-Z gates; polylogarithmic losses in distance and soundness.", url: "https://arxiv.org/abs/2604.01874v2", date: "2026-04-02", version: "v2" },

      { kind: "preprint", role: "progress", summary: "Good qLTCs conditional on the required lossless cubical complexes; their existence is not established in this manuscript.", url: "https://arxiv.org/abs/2610.00525v1", date: "2026-09-30", version: "v1" },
      { kind: "preprint", role: "claimed-solution", summary: "Claimed explicit good binary CSS qLTCs with all required parameters constant; full resolution claim awaiting assessment.", url: "https://arxiv.org/abs/2609.20780v1", date: "2026-09-17", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Separate good-qLTC construction conditional on a Reed–Solomon product-expansion conjecture.", url: "https://arxiv.org/abs/2609.26735v1", date: "2026-09-22", version: "v1" },
    ],
    provenance: [
      { summary: "The authors report ChatGPT and Codex assistance with exposition and calculations, including a preliminary Lemma 4.3 developed in a guided GPT-5.5 conversation. They attribute the main ideas to humans and report reviewing the assisted material.", url: "https://arxiv.org/html/2610.00525v1", version: "v1" },
      { summary: "Gay and Jeronimo report that the general direction was human; ChatGPT Pro versions 5 to 6 were used, with only 5.6 and 6 Pro materially helping to orchestrate some expander–code interactions, and ChatGPT 6 Pro serving as an editorial assistant. They take responsibility for the results. They also state that they released the paper at an earlier point in light of rumours that OpenAI had solved several major TCS problems, a reason for additional caution before assessment.", url: "https://arxiv.org/html/2609.20780v1", version: "v1" },
    ],
    title: "Good quantum locally testable codes",
    statement: r`Construct stabilizer quantum locally testable codes with constant rate, linear distance, constant check weight and degree, and constant soundness $s>0$. For $m$ checks on $n$ qubits, require $|\operatorname{syn}(E)|/m\ge s\,\min_{F:\operatorname{syn}(F)=0}\operatorname{wt}(EF)/n$ for every Pauli error $E$.`,
    definition: r`**A good quantum locally testable code** (qLTC) is a stabilizer code with constant rate, linear distance, constant check weight and degree, whose checks detect every error in proportion to its distance from the code space (constant soundness). The syndrome counts violated checks. Distance in the soundness inequality is distance to the code space: errors are considered modulo zero-syndrome operators, including logical operators, not just modulo stabilizers. This distinguishes local testability from ordinary error-correction distance.

Panteleev and Kalachev constructed asymptotically good quantum LDPC codes, with constant rate and linear distance, STOC 2022, [doi:10.1145/3519935.3520017](https://doi.org/10.1145/3519935.3520017). Good qLDPC codes and NLTS do not by themselves establish constant local-test soundness, and quantum PCP should not be identified with this particular stabilizer-code construction problem.`,
    progress: r`- Later quantum Tanner constructions provide another route to good qLDPC codes. Earlier fibre-bundle and balanced-product breakthroughs had different parameters and should not all be credited with the full good-code theorem.
- Dinur, Lin and Vidick construct almost-good qLTCs with constant rate, bounded-size checks and inverse-polylogarithmic relative distance and soundness ([arXiv:2402.07476](https://arxiv.org/abs/2402.07476)). This does not reach the simultaneous constant-parameter target.
- In April 2026 (v2 reviewed), Li, Li and Liu constructed qLDPC and quantum locally testable codes with parameters $[[N,\Theta(N),\tilde\Theta(N)]]$ and soundness $\tilde\Theta(1)$, supporting transversal logical multi-controlled-$Z$ gates ([arXiv:2604.01874](https://arxiv.org/abs/2604.01874v2)). These are almost good: distance and soundness are polylogarithmically below optimal.
- On 22 September 2026, Bafna, Li and Nguyen obtained good qLTCs conditional on a variant of the Reed–Solomon product-expansion conjecture ([arXiv:2609.26735](https://arxiv.org/abs/2609.26735v1)). This conditional construction is distinct from Gay–Jeronimo's unconditional claim.
- On 30 September 2026 (v1), Cohen, Leigh, Reiner, Ta-Shma and Tzalik derived good qLTCs from sufficiently imbalanced, two-sided lossless four-dimensional cubical complexes ([arXiv:2610.00525](https://arxiv.org/abs/2610.00525v1)). They explicitly do not construct the required complexes. Their local-to-global expansion theorem supplies another conditional route; it is not an independent verification of Gay–Jeronimo's claim or a proof of quantum PCP.`,
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
      { label: "Itay Cohen, Itai Leigh, Assaf Reiner, Amnon Ta-Shma, Elad Tzalik, 'Good Quantum Locally Testable Codes from Lossless Cubical Complexes' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.00525v1" },
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
- On 5 November 2026 (v1), Hamoudi, Le Borgne and Teganahally Sridhara proved $\mathsf{MA}\subsetneq\mathsf{StoqMA}$ relative to a classical oracle ([arXiv:2611.08180](https://arxiv.org/abs/2611.08180v1)). The separating problem asks whether a sparse high-girth graph, given by an adjacency-list oracle, has a large or small Perron–Frobenius eigenvalue, a stoquastic ground-energy task. The result shows that relativizing techniques cannot prove StoqMA = MA, and so cannot prove it through error amplification.`,
    residual: r`The unrelativized StoqMA versus MA question, and general error amplification for StoqMA, remain open.`,
    reviewedAt: "2026-11-08",
    evidence: [
      { kind: "preprint", role: "progress", summary: "Classical-oracle separation $\\mathsf{MA}\\subsetneq\\mathsf{StoqMA}$ via a Perron–Frobenius eigenvalue problem on oracle-given sparse high-girth graphs. Relativized; it does not decide the unrelativized equality.", url: "https://arxiv.org/abs/2611.08180v1", date: "2026-11-05", version: "v1" },
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

  { id: "A11", cat: "complexity", horizon: "sharp", status: "improved",
    reviewedAt: "2026-11-08",
    title: "Aaronson–Ambainis influential-variable conjecture",
    statement: r`Do universal constants $c,C>0$ exist such that every multilinear $p:\{-1,1\}^{n}\to[0,1]$ of degree $d\ge1$ and positive variance has some variable $i$ with $\operatorname{Inf}_i(p)\ge c(\operatorname{Var}(p)/d)^C$? Use the uniform measure and $\operatorname{Inf}_i(p)=\mathbb E[(p(x)-p(x^{\oplus i}))^2]/4$.`,
    definition: r`**The Aaronson–Ambainis conjecture** states that every bounded low-degree polynomial on the Boolean cube has a variable whose influence is polynomially related to its variance. Here $x^{\oplus i}$ flips the $i$th sign. The conjecture is an exact analytic statement, independent of implementation costs.

Aaronson and Ambainis show it would imply that a $T$-query quantum algorithm's acceptance probability can be approximated within additive $\varepsilon$ on a $1-\delta$ fraction of uniformly random Boolean inputs using $\operatorname{poly}(T,1/\varepsilon,1/\delta)$ classical queries, Theory of Computing 10 (2014), [theoryofcomputing.org/articles/v010a006](https://theoryofcomputing.org/articles/v010a006/). This simulation consequence concerns acceptance probabilities on most inputs; it is not a worst-case simulation theorem for every promise problem, nor a theorem that a classical algorithm samples the full quantum output distribution.`,
    progress: r`- In August 2026, Blanc, Docter, Strassle and Tan proved an analogous acceptance-probability simulation for $t$ queries in $d$ parallel query rounds, with $t^{O(d^2)}$ classical queries at fixed approximation and failure parameters ([arXiv:2608.19158](https://arxiv.org/abs/2608.19158v1)). The result is accepted at FOCS 2026 (8–11 November 2026).
- Liu and Mutreja independently established constant-round and limited-adaptivity simulation results with different quantitative bounds in August 2026 ([arXiv:2608.20297](https://arxiv.org/abs/2608.20297v2)). Their revision of 20 October 2026 (v2) extends the theorem from massively parallel queries to constant rounds of adaptivity and to algorithms with a bounded quantum-query prefix followed by a parallel stage, via a coupling between uniform oracles and dense oracle distributions.
- Constantly many oracle-query rounds are thus a positive restricted case; physical gate depth, unrestricted adaptive queries and sampling advantage are separate notions. These bounded-round results were moved here from A16.
- On 4 September 2026 (v1), Escudero Gutiérrez, Saucedo and Palazuelos proved optimal inequalities for completely bounded polynomials, including an optimal root-influence bound for block-multilinear forms, with improved limitations on quantum query algorithms ([arXiv:2609.05201](https://arxiv.org/abs/2609.05201v1)). The added completely bounded structure does not cover every bounded low-degree polynomial, and the paper restates the general conjecture as open.
- On 28 September 2026 (v1), Girish, Mittal, Nehoran and Raz proved equivalence of the influential-variable conjecture under the uniform measure, fixed-bias product measures and fixed-density Hamming slices ([arXiv:2609.35327](https://arxiv.org/abs/2609.35327v1)). They separately establish analogous equivalences for the weaker average-input query-simulation conjecture. These reductions transfer the open questions between distributions; they prove neither conjecture.`,
    residual: r`The influential-variable conjecture and the unrestricted adaptive simulation conjecture remain open. A16 retains the input/output/data-access comparison methods and the historical record; it is not counted as a second conjecture.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Optimal completely bounded polynomial inequalities and resulting limits on quantum query algorithms; the general Aaronson–Ambainis conjecture is restated as open.", url: "https://arxiv.org/abs/2609.05201v1", date: "2026-09-04", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Equivalence of uniform, fixed-bias and fixed-density-slice variants, separately for influence and query simulation; the original conjectures remain open.", url: "https://arxiv.org/abs/2609.35327v1", date: "2026-09-28", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Bounded-round acceptance-probability simulation on most uniform inputs, with t^{O(d^2)} classical queries at fixed error parameters; accepted to FOCS 2026.", url: "https://arxiv.org/abs/2608.19158v1", date: "2026-08-19", version: "v1" },
      { kind: "preprint", role: "progress", summary: "v2 extends the parallel-query simulation theorem to constant rounds of adaptivity and bounded-prefix algorithms; sampling and unrestricted adaptivity are different targets.", url: "https://arxiv.org/abs/2608.20297v2", date: "2026-10-20", version: "v2" },
    ],
    provenance: [
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
- In September 2026, Yuxuan Zhang deposited on Zenodo a direct proof of anticoncentration for hafnians of independent complex Gaussian matrices ([doi:10.5281/zenodo.22969546](https://doi.org/10.5281/zenodo.22969546)). It is an ingredient for Gaussian BosonSampling, not the hardness theorem asked here.
- On 19 October 2026 (v1), Go and Jeong gave a polynomial-time classical sampler for lossy BosonSampling whenever a constant fraction of the $N$ input photons survives, in the fixed-loss model with uniformly random loss and in the uniform-transmission model at any fixed transmission rate, within total-variation error $\varepsilon$ with high probability over Haar-random interferometers ([arXiv:2610.27065](https://arxiv.org/abs/2610.27065v1)). This extends the provably simulable regime from $O(\sqrt{\varepsilon N})$ surviving photons to linear survival.
- Between 1 and 5 November 2026 (v1), two further preprints extended this picture. Lim covers any fixed nonzero uniform loss rate, for Fock-state and equally squeezed Gaussian inputs ([arXiv:2611.01434](https://arxiv.org/abs/2611.01434v1)). Angrisani and Mhiri cover fixed thermal or pure loss, and also fermion sampling with magic inputs ([arXiv:2611.08444](https://arxiv.org/abs/2611.08444v1)).`,
    residual: r`Approximate average-case permanent hardness, with a reduction robust enough for the sampling statement, remains open for ideal, noiseless BosonSampling. Additive average-case hardness of squared hafnians, the Gaussian-BosonSampling analogue, also remains open.

The loss results concern lossy experiments, not the ideal problem. They bound where noisy experiments can claim hardness and narrow the robustness that any hardness reduction for noisy BosonSampling could offer.`,
    reviewedAt: "2026-11-08",
    evidence: [
      { kind: "preprint", role: "progress", summary: "Direct proof of anticoncentration for independent complex Gaussian hafnians (Zenodo collection of AI-assisted manuscripts); an ingredient, not a hardness result.", url: "https://doi.org/10.5281/zenodo.22969546", date: "2026-09-26" },
      { kind: "preprint", role: "progress", summary: "Explicit total-variation hiding bound for Gaussian BosonSampling uniformly over the number of squeezed inputs, and relative-accuracy routes via local hafnian bounds.", url: "https://arxiv.org/abs/2609.01008v2", date: "2026-09-01", version: "v2" },
      { kind: "preprint", role: "progress", summary: "Center-uniform small-ball bounds for Gaussian hafnians, giving anticoncentration for the independent complex symmetric Gaussian ensemble; an ingredient, not a hardness theorem.", url: "https://arxiv.org/abs/2610.00112v1", date: "2026-09-09", version: "v1" },

      { kind: "preprint", role: "progress", summary: "Polynomial-time classical simulation of lossy BosonSampling at any constant surviving fraction over Haar-random interferometers; a simulability result for lossy experiments, not a hardness theorem for the ideal problem.", url: "https://arxiv.org/abs/2610.27065v1", date: "2026-10-19", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Efficient average-case classical sampling for Fock and equally squeezed Gaussian BosonSampling at any fixed nonzero uniform loss rate. A noisy regime.", url: "https://arxiv.org/abs/2611.01434v1", date: "2026-11-01", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Unified polynomial-time simulation of boson and fermion sampling under fixed thermal or pure loss, at inverse-polynomial total-variation error over Haar-random interferometers. A noisy regime.", url: "https://arxiv.org/abs/2611.08444v1", date: "2026-11-05", version: "v1" },
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
      { label: "Zhang, 'Agentic Proofs for QIQC: Collected Manuscripts', including 'Anticoncentration of Independent Complex Gaussian Hafnians' (Zenodo, September 2026) (found via the QIQCOP Zoo)", url: "https://doi.org/10.5281/zenodo.22969546" },
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
- On 23 July 2026 (v1), Go, Oh and Jeong showed, assuming the standard average-case hardness conjecture for ideal random-circuit sampling, an architecture-general hardness bound on the local-depolarizing noise strength separating hard from classically simulable regimes ([arXiv:2607.20804](https://arxiv.org/abs/2607.20804v1)). The underlying ideal hardness conjecture, the statement here, is assumed rather than proved.`,
    residual: r`The missing ingredient is hardness at an approximation scale strong enough for the total-variation sampling reduction, not exact arithmetic alone.

Noisy experimental output distributions are separate targets. Classical simulation results at constant noise strength have assumptions on the noise, depth, circuit ensemble and approximation criterion; they are not a universal theorem for every noisy quantum circuit. The question above is for ideal circuits.`,
    relations: [{ id: "A12", type: "related" }, { id: "A11", type: "related" }],
    refs: [
      { label: "Go, Oh & Jeong, 'Hardness and Complexity Transition of Noisy Random Circuit Sampling' (2026 preprint, v1)", url: "https://arxiv.org/abs/2607.20804v1" },
      { label: "Bouland, Fefferman, Nirkhe & Vazirani, 'On the complexity and verification of quantum random circuit sampling', Nat. Phys. 15 (2019)", url: "https://arxiv.org/abs/1803.04402" },
      { label: "Movassagh, 'The hardness of random quantum circuits', Nat. Phys. 19 (2023)", url: "https://arxiv.org/abs/1909.06210" },
    ] },

  { id: "A14", cat: "complexity", horizon: "sharp",
    title: "Graph isomorphism in BQP",
    statement: r`Does graph isomorphism on $n$-vertex graphs admit a uniform polynomial-time bounded-error quantum algorithm?`,
    definition: r`**Graph isomorphism** asks whether two graphs are related by a vertex relabelling. It is in NP, with neither a polynomial-time classical algorithm nor NP-completeness known.

Babai's quasipolynomial-time classical algorithm is the comparison baseline, not a proof that a polynomial-time quantum algorithm is unnecessary or impossible: Babai, “Graph isomorphism in quasipolynomial time”, STOC 2016, [arXiv:1512.03547](https://arxiv.org/abs/1512.03547).`,
    progress: r`- The hidden-subgroup route uses permutation groups. Hallgren, Moore, Rötteler, Russell and Sen show that extracting useful information from the relevant coset states requires joint measurements on $\Omega(n\log n)$ states, matching an information-theoretic upper bound ([J. ACM 57 (2010)](https://www.cse.psu.edu/~sjh26/multireg.pdf)). This excludes single- and few-register approaches in that model. It does not prove that every sufficiently joint measurement has superpolynomial implementation complexity, or that all quantum approaches fail.
- In September 2026, Li and Chen withdrew their 2019 claimed polynomial-time quantum algorithm after substantial errors were found ([arXiv:1901.06530](https://arxiv.org/abs/1901.06530v2)). The withdrawal supplies no positive evidence for graph isomorphism in BQP and leaves the question open.`,
    relations: [{ id: "A15", type: "related" }],
    refs: [
      { label: "Hallgren, Moore, Rötteler, Russell & Sen, 'Limitations of quantum coset states for graph isomorphism', J. ACM 57 (2010)", url: "https://www.cse.psu.edu/~sjh26/multireg.pdf" },
      { label: "Babai, 'Graph isomorphism in quasipolynomial time', STOC 2016", url: "https://arxiv.org/abs/1512.03547" },
      { label: "Li & Chen, 'The quantum algorithm for graph isomorphism problem' (withdrawn; September 2026 notice)", url: "https://arxiv.org/abs/1901.06530v2" },
    ] },

  { id: "A15", cat: "complexity", horizon: "programme",
    title: "Quantum complexity of specified lattice regimes",
    statement: r`Determine the quantum running-time frontier for search and decision LWE with explicitly specified dimension $n$, modulus $q$, error distribution and sample access, and for SVP/CVP with stated approximation factor. A focal LWE regime has polynomial modulus and inverse-polynomial relative Gaussian error; hardness must be assessed for each concrete parameter family.`,
    definition: r`**Learning With Errors** (LWE) samples have the form $(a,\langle a,s\rangle+e\bmod q)$; decision LWE distinguishes these from uniform, while search LWE recovers the secret. The noise width, modulus, number of samples and algebraic structure are part of the problem. Plain LWE, module/ring variants, and worst-case approximate lattice problems should not be treated as interchangeable.

Regev's reduction relates suitable LWE regimes to worst-case approximate lattice problems using quantum computation, J. ACM 56 (2009), [arXiv:2401.03703](https://arxiv.org/abs/2401.03703). It is a conditional hardness reduction, not a quantum algorithm breaking LWE.`,
    progress: r`- Known quantum techniques can improve exponential running-time constants, so “no quantum improvement” would be too strong; such improvements are different from a polynomial-time algorithm.
- Chen's 2024 claimed polynomial-time quantum LWE algorithm developed an acknowledged error and is not an established attack ([IACR ePrint 2024/583](https://eprint.iacr.org/2024/583)).`,
    residual: r`The running-time frontier must be determined for each concrete parameter family. Security conclusions require the exact parameter family and reduction; the safety or failure of deployed cryptographic schemes does not follow from the unresolved broad programme.`,
    relations: [{ id: "A2", type: "related" }, { id: "A14", type: "related" }],
    refs: [
      { label: "Regev, 'On lattices, learning with errors, random linear codes, and cryptography', J. ACM 56 (2009; arXiv deposit 2024)", url: "https://arxiv.org/abs/2401.03703" },
      { label: "Chen, 'Quantum Algorithms for Lattice Problems' (2024 claim; error notice)", url: "https://eprint.iacr.org/2024/583" },
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
      { label: "Blanc, Docter, Strassle & Tan, 'Quantum Speedups Require Structure or Depth' (2026 preprint; FOCS 2026)", url: "https://arxiv.org/abs/2608.19158v1" },
      { label: "Liu & Mutreja, 'Parallel Quantum Advantage with Limited Adaptivity Requires Structure' (2026 preprint, v2)", url: "https://arxiv.org/abs/2608.20297v2" },
    ] },

  { id: "A17", cat: "complexity", horizon: "incremental", status: "improved",
    reviewedAt: "2026-09-10",
    title: "Quantum state certification with local measurements",
    statement: r`Given a full classical description of an arbitrary reference state $\sigma$ and copies of an unknown $N$-qubit state $\rho$, determine the optimal copy complexity of testing $\rho=\sigma$ versus $\|\rho-\sigma\|_1\ge\varepsilon$, with success at least $2/3$, using adaptive single-qubit Pauli measurements and no entangling measurements within or across copies. Seek matching instance-dependent bounds and the accompanying classical running time.`,
    definition: r`**Quantum state certification** asks to test whether copies of an unknown state equal a known reference state or are far from it in trace distance. A full reference-state description can itself be exponentially long in $N$; computational costs must count its input length. Rank, spectrum and the reference eigenbasis relative to the allowed local measurements can matter. This concrete certification target is distinct from estimating an unknown state's spectral functional or learning many observable expectations.

Haah, Harrow, Ji, Wu and Yu establish sample-optimal tomography bounds in their collective-measurement model, IEEE Trans. Inf. Theory 63 (2017), [arXiv:1508.01797](https://arxiv.org/abs/1508.01797).`,
    progress: r`- In August 2026, Wang gave a framework with nearly tight lower bounds for entropy, closeness and spectrum estimation and for rank, Schmidt-rank and MPS testing ([arXiv:2608.02600](https://arxiv.org/abs/2608.02600v3)); its 8 September 2026 v3 is retitled as a unified complexity framework for quantum property testing.
- In August 2026, Acharya, Dharmavarapu, Liu and Yu nearly determined mixedness testing under single-qubit Pauli measurements, with $\widetilde\Theta((\sqrt{10})^N/\varepsilon^2)$ copies ([arXiv:2608.18839](https://arxiv.org/abs/2608.18839v1)); their 23 September 2026 v3 adds fixed-Pauli-protocol bounds. The maximally mixed reference is a benchmark, not a solution for every reference state or measurement trade-off.
- In August 2026, Stempin, Llorens and Huber disproved the fractional-colouring conjecture proposed as a route to universal triply efficient Pauli shadow tomography ([arXiv:2608.20113](https://arxiv.org/abs/2608.20113v1)). This rules out that route, not every possible algorithm.
- Between 4 and 9 September 2026 (v1), two adjacent tomography benchmarks appeared. Keskin, Luo, Majid and Radzihovsky claim the tight arbitrary-state copy bound $\Theta(\max\{d^3/(\sqrt{k}\varepsilon^2),d^2/\varepsilon^2\})$ when measurements act on at most $k$ fresh copies, with classical adaptivity but no quantum memory between blocks ([arXiv:2609.05718](https://arxiv.org/abs/2609.05718v1)). Nayak and Zhou claim the rank-$r$ refinement $\Theta((dr/\varepsilon^2)\max\{1,r/\sqrt{t}\})$ with at most $t$ jointly measured copies, for sufficiently small error and constant success probability ([arXiv:2609.10514](https://arxiv.org/abs/2609.10514v1)). These permit entangling measurements and reconstruct an unknown state; neither settles arbitrary-reference certification with single-qubit Pauli measurements.
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
      { label: "Acharya, Dharmavarapu, Liu & Yu, 'Quantum Mixedness Testing with Pauli Measurements' (2026 preprint, v1 reviewed; v3 of 23 September 2026 retitled 'Near-Optimal Mixedness Testing with Pauli Measurements')", url: "https://arxiv.org/abs/2608.18839v1" },
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
- Decoding milestones also need model labels. Bazzi and Khater prove additive inapproximability for minimum-weight Pauli decoding of surface/toric codes under depolarizing noise, and separate X/Z decoding for their colour-code setting ([arXiv:2608.17109](https://arxiv.org/abs/2608.17109v3)); this does not make the usual independent-error surface-code matching problem NP-hard. Krishnamoorthy et al. express CSS degenerate maximum-likelihood decoding through partition functions and give statistical certificates, or exact certificates when suitable estimators are available ([arXiv:2608.25545](https://arxiv.org/abs/2608.25545v1)). Neither supplies an unconditional efficient optimal decoder for every CSS code.`,
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
      { summary: "The authors report ChatGPT assistance with representation analysis and Claude assistance with circuits, several proof ideas, review and writing; they take responsibility for all content.", url: "https://arxiv.org/html/2609.38060v1", version: "v1" },
      { summary: "The authors credit ChatGPT 6 Astra with an initial one-sided proof idea; interactions and their own discussions led to the two-sided Forrelation argument. They report verification, simplification and responsibility.", url: "https://arxiv.org/html/2609.25680v1", version: "v1" },
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
      { label: "Aaronson, Natarajan, Tal & Villanyi, 'A Relativizing MIP for BQP' (2026 preprint)", url: "https://arxiv.org/abs/2604.11952v1" },
    ] },

  { id: "A20", cat: "complexity", horizon: "sharp", status: "claimed-solved",
    reviewedAt: "2026-11-08",
    title: "Parity is not in QAC0",
    statement: r`Prove that no family of polynomial-size, constant-depth $\mathsf{QAC}^0$ circuits (arbitrary single-qubit gates and generalized Toffoli gates, with polynomially many ancillas initialized to $|0\rangle$) outputs $\mathrm{PARITY}_n(x)=x_1\oplus\cdots\oplus x_n$ with certainty on every input $x\in\{0,1\}^n$.`,
    definition: r`**The class** $\mathsf{QAC}^0$ is the class of polynomial-size, constant-depth quantum circuits built from arbitrary single-qubit gates and generalized Toffoli gates, the quantum analogue of $\mathsf{AC}^0$. Classically, parity is famously outside $\mathsf{AC}^0$.

Moore showed that parity and fanout are equivalent up to constant-depth reductions, so the question is equally whether constant-depth quantum circuits can implement fanout: Moore, “Quantum circuits: fanout, parity, and counting” (1999), [arXiv:quant-ph/9903046](https://arxiv.org/abs/quant-ph/9903046).`,
    progress: r`- Depth-two and depth-three circuits cannot compute parity regardless of size (Rosenthal, [arXiv:2008.07470](https://arxiv.org/abs/2008.07470); Joshi, Tal, Vasconcelos and Wright, STOC 2026, [arXiv:2512.14643](https://arxiv.org/abs/2512.14643)).
- Strong lower bounds hold when ancillas are restricted (Nadimpalli, Parham, Vasconcelos and Yuen, [arXiv:2311.09631](https://arxiv.org/abs/2311.09631); Anshu, Dong, Ou and Yao).
- Gretta, Gupta and Joshi (FOCS 2026) proved that parity $\notin\mathsf{QAC}^0$ is equivalent to a Fourier-concentration property of $\mathsf{QAC}^0$, and that inverse-polynomial correlation with parity can be amplified to exact computation ([arXiv:2604.02793](https://arxiv.org/abs/2604.02793v2)).`,
    claim: r`**OpenAI, [“Product-projection localization and the QAC0 parity lower bound”](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Product-projection-localization-and-the-QAC0-parity-lower-bound-September-24-2026/paper.pdf)** (OpenAI Math Release on GitHub, public 6 October 2026, not on arXiv).

**Gao, Ji and Liu, [“A simplified proof of PARITY ∉ QAC0”](https://eccc.weizmann.ac.il/report/2026/258/)** (ECCC TR26-258, 18 October 2026).

What it claims:
- For every fixed depth and polynomially many qubits, no $\mathsf{QAC}^0$ circuit achieves success probability $1/2+\varepsilon$ on every input, for any fixed $\varepsilon>0$ and all large $n$. This implies the exact statement above.
- Gao, Ji and Liu give a self-contained simplified proof of the same theorem, an independent engagement with OpenAI's result.

Caveats:
- Two consistent proofs, neither peer reviewed. Hence “Claimed solved” rather than “Solved”.
- OpenAI lists itself as author and states that an unreleased internal model produced the manuscript collection. The scope of any Lean formalization was not checked here.`,
    evidence: [
      { kind: "preprint", role: "claimed-solution", summary: "Claimed proof that PARITY is not in QAC0, in the strong form that no constant-depth polynomial-size circuit beats random guessing by a fixed margin on all inputs; OpenAI GitHub manuscript, pending assessment.", url: "https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Product-projection-localization-and-the-QAC0-parity-lower-bound-September-24-2026/paper.pdf", date: "2026-10-06", version: "v1" },
      { kind: "preprint", role: "claimed-solution", summary: "Self-contained simplified proof of the OpenAI theorem; independent engagement, not peer reviewed.", url: "https://eccc.weizmann.ac.il/report/2026/258/", date: "2026-10-18" },
      { kind: "preprint", role: "progress", summary: "Equivalence of PARITY not in QAC0 with Fourier concentration of QAC0, and amplification of weak correlation to exact computation (FOCS 2026).", url: "https://arxiv.org/abs/2604.02793v2", date: "2026-04-03", version: "v2" },
    ],
    provenance: [
      { summary: "OpenAI lists itself as author and states that an unreleased internal model produced the manuscript collection. This is OpenAI's account; any Lean scope note was not checked here.", url: "https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Product-projection-localization-and-the-QAC0-parity-lower-bound-September-24-2026/README.md" },
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
    ] },

  { id: "A21", cat: "complexity", horizon: "sharp",
    reviewedAt: "2026-11-08",
    title: "Dihedral hidden subgroup problem in polynomial time",
    statement: r`For the dihedral group $D_N=\langle r,s\mid r^N=s^2=1,\ srs=r^{-1}\rangle$ and an oracle $f$ hiding a reflection subgroup $\{1,sr^a\}$, is there a bounded-error quantum algorithm that recovers $a$ using $\mathrm{poly}(\log N)$ elementary operations and oracle queries?`,
    definition: r`**The dihedral hidden subgroup problem** asks to recover a hidden reflection subgroup $\{1,sr^a\}$ of $D_N$ from an oracle constant on its cosets. The abelian hidden subgroup problem underlies Shor's algorithms; the non-abelian cases are where quantum speedups become uncertain.

The dihedral case is central because Regev reduced unique-SVP-type lattice problems to a dihedral coset problem, so an efficient algorithm would bear on lattice cryptography (see A22): Regev, “Quantum computation and lattice problems”, SIAM J. Comput. 33 (2004), [arXiv:cs/0304005](https://arxiv.org/abs/cs/0304005).`,
    progress: r`- Kuperberg's sieve solves the problem in time $2^{O(\sqrt{\log N})}$ ([arXiv:quant-ph/0302112](https://arxiv.org/abs/quant-ph/0302112)), and Regev gave a polynomial-space variant ([arXiv:quant-ph/0406151](https://arxiv.org/abs/quant-ph/0406151)). Kuperberg's later collimation sieve improves the subexponential algorithm ([arXiv:1112.3333](https://arxiv.org/abs/1112.3333)).
- Standard Fourier sampling with few coset states is insufficient, and no polynomial-time algorithm is known.
- A polynomial-time algorithm for the dihedral coset problem claimed in August 2026 ([IACR ePrint 2026/1591](https://eprint.iacr.org/2026/1591), Simon) was refuted by Gupte, Ragavan and Zhandry ([IACR ePrint 2026/1693](https://eprint.iacr.org/2026/1693)). They prove that the algorithm cannot extract even the least-significant bit of the secret, and that the no-go covers a broad class of Regev-type templates.`,
    residual: r`The sharp target is a polynomial-time algorithm in the standard oracle model, or a lower bound excluding it for a natural class of algorithms.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Shows that the August 2026 ePrint 2026/1591 algorithm does not solve the dihedral coset problem, with a no-go for a broad class of similar algorithms.", url: "https://eprint.iacr.org/2026/1693", date: "2026-08-15" },
      { kind: "preprint", role: "progress", summary: "Kuperberg's collimation sieve: an improved subexponential-time algorithm; the general regime remains subexponential.", url: "https://arxiv.org/abs/1112.3333v1", date: "2011-12-14", version: "v1" },
    ],
    relations: [{ id: "A22", type: "related" }, { id: "A14", type: "related" }],
    refs: [
      { label: "Gupte, Ragavan & Zhandry, 'The ePrint:2026/1591 Quantum Algorithm Does Not Solve DCP' (IACR ePrint 2026/1693) (found via the QIQCOP Zoo)", url: "https://eprint.iacr.org/2026/1693" },
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
- Chen's 2024 claimed polynomial-time algorithm for certain LWE parameters was withdrawn after a bug was found ([IACR ePrint 2024/555](https://eprint.iacr.org/2024/555)).
- Reductions to extrapolated dihedral coset problems connect LWE with A21, and a quasi-polynomial EDCP algorithm with many states does not transfer to standard LWE.`,
    residual: r`The target is a polynomial-time quantum algorithm in the stated regime, or evidence such as a barrier for natural algorithm classes.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Polynomial-time quantum algorithms for average-case lattice variants with quantum-state inputs; the standard hard regime is not reached.", url: "https://arxiv.org/abs/2108.11015v2", date: "2021-08-25", version: "v2" },
      { kind: "withdrawn", summary: "Claimed polynomial-time quantum algorithm for LWE with certain polynomial modulus-to-noise ratios; withdrawn by the author after a bug in Step 9.", url: "https://eprint.iacr.org/2024/555", date: "2024-04-10" },
    ],
    relations: [{ id: "A21", type: "related" }, { id: "A2", type: "related" }],
    refs: [
      { label: "Regev, 'On lattices, learning with errors, random linear codes, and cryptography', J. ACM 56 (2009)", url: "https://doi.org/10.1145/1568318.1568324" },
      { label: "Regev, 'Quantum Computation and Lattice Problems', SIAM J. Comput. 33 (2004)", url: "https://arxiv.org/abs/cs/0304005" },
      { label: "Chen, Liu & Zhandry, 'Quantum Algorithms for Variants of Average-Case Lattice Problems via Filtering', EUROCRYPT 2022", url: "https://arxiv.org/abs/2108.11015" },
      { label: "Chen, 'Quantum Algorithms for Lattice Problems' (IACR ePrint 2024/555; withdrawn)", url: "https://eprint.iacr.org/2024/555" },
    ] },

  { id: "A23", cat: "complexity", horizon: "incremental",
    reviewedAt: "2026-11-08",
    title: "Quantum query complexity of triangle finding",
    statement: r`Determine the bounded-error quantum query complexity $Q_\triangle(n)$ of deciding whether an $n$-vertex graph, given by its adjacency-matrix oracle, contains a triangle (and finding one). The known bounds are $\Omega(n)\le Q_\triangle(n)\le O(n^{5/4})$; give an $O(n^{5/4-\varepsilon})$ algorithm or an $\Omega(n^{1+\varepsilon})$ lower bound.`,
    definition: r`**Triangle finding** asks whether a graph given by its adjacency-matrix oracle contains a triangle. It is a benchmark for quantum-walk and learning-graph methods.

Standard reference: Magniez, Santha and Szegedy, “Quantum algorithms for the triangle problem”, SIAM J. Comput. 37 (2007), [arXiv:quant-ph/0310134](https://arxiv.org/abs/quant-ph/0310134).`,
    progress: r`- Magniez, Santha and Szegedy obtained $\tilde O(n^{13/10})$.
- Belovs's learning graphs gave $O(n^{35/27})$.
- Le Gall reached $\tilde O(n^{5/4})$ ([arXiv:1407.0085](https://arxiv.org/abs/1407.0085)), and Carette, Laurière and Magniez removed the logarithmic factors ([arXiv:1609.07786](https://arxiv.org/abs/1609.07786)).
- The only general lower bound is the trivial $\Omega(n)$.
- For the edge-weighted triangle-sum variant, Belovs and Rosmanis proved $\Omega(n^{9/7}/\sqrt{\log n})$, showing that non-adaptive learning graphs cannot go below $n^{9/7}$ for weighted problems ([arXiv:1210.3279](https://arxiv.org/abs/1210.3279)).`,
    residual: r`Any polynomial improvement of either bound counts. Time complexity, sparse-graph regimes and the weighted variant are distinct benchmarks.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Extended learning graphs remove the logarithmic overhead, giving the best general upper bound O(n^{5/4}).", url: "https://arxiv.org/abs/1609.07786v2", date: "2016-09-25", version: "v2" },
    ],
    relations: [{ id: "A16", type: "related" }],
    refs: [
      { label: "Magniez, Santha & Szegedy, 'Quantum Algorithms for the Triangle Problem', SIAM J. Comput. 37 (2007)", url: "https://arxiv.org/abs/quant-ph/0310134" },
      { label: "Le Gall, 'Improved Quantum Algorithm for Triangle Finding via Combinatorial Arguments', FOCS 2014", url: "https://arxiv.org/abs/1407.0085" },
      { label: "Carette, Laurière & Magniez, 'Extended Learning Graphs for Triangle Finding', STACS 2017", url: "https://arxiv.org/abs/1609.07786" },
      { label: "Belovs & Rosmanis, 'On the Power of Non-Adaptive Learning Graphs', Comput. Complexity 23 (2014)", url: "https://arxiv.org/abs/1210.3279" },
    ] },

  { id: "A24", cat: "complexity", horizon: "incremental",
    reviewedAt: "2026-11-08",
    title: "Stabilizer rank of magic-state tensor powers",
    statement: r`For $|T\rangle=(|0\rangle+e^{i\pi/4}|1\rangle)/\sqrt2$, determine the growth of the exact stabilizer rank $\chi(|T\rangle^{\otimes n})$, the least number of stabilizer states whose linear span contains $|T\rangle^{\otimes n}$. Prove a super-polynomial lower bound, or a sub-exponential upper bound; separately, decide whether the $\delta$-approximate rank is $2^{\Omega(n)}$ for fixed $\delta$.`,
    definition: r`**The stabilizer rank** of a state is the least number of stabilizer states whose linear span contains it. Stabilizer-rank simulators run in time roughly linear in the rank, so exponential growth for magic-state tensor powers is expected if universal quantum computation is not classically simulable. That conditional argument is not an unconditional bound.

Standard reference: Bravyi, Smith and Smolin, “Trading classical and quantum computational resources”, PRX 6 (2016), [arXiv:1506.01396](https://arxiv.org/abs/1506.01396).`,
    progress: r`- The best upper bound is $O(2^{\alpha n})$ with $\alpha\approx0.396$ (Qassim, Pashayan and Gosset, [arXiv:2106.07740](https://arxiv.org/abs/2106.07740)), improving earlier constructions of Bravyi et al. ([arXiv:1808.00128](https://arxiv.org/abs/1808.00128)).
- Unconditional exact-rank lower bounds are only linear, $\Omega(n)$ (Peleg, Shpilka and Volk, [arXiv:2106.03214](https://arxiv.org/abs/2106.03214); also Labib, and Lovitz–Steffan).
- For approximate rank, Mehraban and Tahmasbi prove a quadratic lower bound up to polylogarithmic factors ([arXiv:2305.10277](https://arxiv.org/abs/2305.10277)).`,
    residual: r`Any super-polynomial unconditional bound would be a major advance in circuit-complexity terms.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Quadratic lower bound, up to polylogarithmic factors, on approximate stabilizer rank of magic-state tensor powers (STOC 2024).", url: "https://arxiv.org/abs/2305.10277v4", date: "2023-05-17", version: "v4" },
    ],
    relations: [{ id: "A1", type: "related" }],
    refs: [
      { label: "Bravyi, Smith & Smolin, 'Trading classical and quantum computational resources', PRX 6 (2016)", url: "https://arxiv.org/abs/1506.01396" },
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
- Jeronimo, Huang and Liu (August 2026, revised) report dimension-free polylogarithmic copy complexity, $O(\log M\log(M/\delta)/\varepsilon^2)$, settling the existence of dimension-free shadow tomography ([arXiv:2608.06345](https://arxiv.org/abs/2608.06345v3)).`,
    residual: r`At constant failure probability the worst-case gap is between $\log M$ and $\log^2 M$. Computational efficiency is a separate target.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Dimension-free polylogarithmic shadow tomography from sequential pretty-good measurements; a log M factor separates it from the lower bound.", url: "https://arxiv.org/abs/2608.06345v3", date: "2026-08-06", version: "v3" },
    ],
    relations: [{ id: "A17", type: "related" }],
    refs: [
      { label: "Aaronson, 'Shadow Tomography of Quantum States', STOC 2018", url: "https://arxiv.org/abs/1711.01053" },
      { label: "Bădescu & O'Donnell, 'Improved quantum data analysis', STOC 2021", url: "https://arxiv.org/abs/2011.10908" },
      { label: "Chen, Li & Liu, 'Optimal high-precision shadow estimation' (2024)", url: "https://arxiv.org/abs/2407.13874" },
      { label: "Jeronimo, Huang & Liu, 'Dimension-Free Polylogarithmic Quantum Shadow Tomography' (2026 preprint, v3)", url: "https://arxiv.org/abs/2608.06345v3" },
    ] },

  { id: "A26", cat: "complexity", horizon: "incremental",
    reviewedAt: "2026-11-08",
    title: "Approximating Quantum Max-Cut",
    statement: r`For Quantum Max-Cut on a weighted graph, $H_G=\sum_{\{i,j\}\in E}w_{ij}\,\frac{1}{4}(I-X_iX_j-Y_iY_j-Z_iZ_j)$ (the antiferromagnetic Heisenberg model), determine the best ratio $\alpha^*$ such that a classical polynomial-time algorithm outputs a value within factor $\alpha^*$ of $\lambda_{\max}(H_G)$ on every graph. Separately: is ground-energy estimation for bipartite graphs to inverse-polynomial additive precision in $\mathsf{BPP}$?`,
    definition: r`**Quantum Max-Cut** is the quantum analogue of Max-Cut, the antiferromagnetic Heisenberg model on a weighted graph, and the main testbed for approximation algorithms for local Hamiltonians. Its exact energy is QMA-complete, so the question is how well efficient classical algorithms can approximate it.

Standard reference: Gharibian and Parekh, “Almost optimal classical approximation algorithms for a quantum generalization of Max-Cut”, APPROX 2019, [arXiv:1909.08846](https://arxiv.org/abs/1909.08846).`,
    progress: r`- Product-state rounding of an SDP gives $0.498$ (Gharibian and Parekh).
- Entangled-state algorithms beat the product-state limit (Anshu, Gosset and Morenz, [arXiv:2003.14394](https://arxiv.org/abs/2003.14394)), followed by $0.582$ (King, [arXiv:2209.02589](https://arxiv.org/abs/2209.02589)), $0.595$ via matchings (Lee and Parekh, [arXiv:2401.03616](https://arxiv.org/abs/2401.03616)) and $0.603$ on general graphs, $0.614$ on triangle-free and $0.816$ on bipartite graphs (Gribling, Sinjorgo and Sotirov, [arXiv:2504.11120](https://arxiv.org/abs/2504.11120v1)).
- On the hardness side, Hwang, Neeman, Parekh, Thompson and Wright show that beating about $0.956$ is Unique-Games-hard, assuming a vector-valued Borell conjecture ([arXiv:2111.01254](https://arxiv.org/abs/2111.01254)).
- A June 2026 hybrid algorithm with a Rydberg annealer reports a conditional $0.651$ ([arXiv:2606.27224](https://arxiv.org/abs/2606.27224v1)).
- For bipartite graphs the model is stoquastic. In July 2026, Rayudu and Takahashi ([arXiv:2607.10765](https://arxiv.org/abs/2607.10765v1)) and Bravyi, Gosset, Liu and Wong ([arXiv:2607.14401](https://arxiv.org/abs/2607.14401v1)) independently gave efficient quantum (BQP) algorithms for the ground energy via Lee–Yang spectral-gap bounds.`,
    residual: r`For bipartite graphs, whether a classical randomized algorithm suffices is open. Any improved ratio with proof, or tighter hardness, counts as progress; the full answer is the exact $\alpha^*$.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Best proven classical ratios: 0.603 on general graphs, 0.614 on triangle-free and 0.816 on bipartite graphs.", url: "https://arxiv.org/abs/2504.11120v1", date: "2025-04-15", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Lee–Yang spectral-gap bound giving an efficient quantum adiabatic algorithm for the ground energy of bipartite Heisenberg antiferromagnets; classical complexity open.", url: "https://arxiv.org/abs/2607.14401v1", date: "2026-07-15", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Independent Lee–Yang spectral-gap result for the same family, establishing BQP membership of bipartite ground-energy estimation.", url: "https://arxiv.org/abs/2607.10765v1", date: "2026-07-12", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Hybrid Rydberg-annealer plus SDP rounding with a conditional ratio 0.651; conditional on the quantum subroutine.", url: "https://arxiv.org/abs/2606.27224v1", date: "2026-06-25", version: "v1" },
    ],
    provenance: [
      { summary: "Bravyi, Gosset, Liu and Wong acknowledge the use of AI tools to develop proof strategies.", url: "https://arxiv.org/abs/2607.14401v1", version: "v1" },
      { summary: "Rayudu and Takahashi report using Claude Opus 4.8, Fable 5 and ChatGPT 5.5 to suggest proof ideas, obtain technical inequalities and improve presentation, with all proofs independently checked.", url: "https://arxiv.org/abs/2607.10765v1", version: "v1" },
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
    ] },

  { id: "A27", cat: "complexity", horizon: "sharp",
    reviewedAt: "2026-11-08",
    title: "Random circuits as pseudorandom unitaries",
    statement: r`Fix a finite universal two-qubit gate set. Does a random circuit of some fixed polynomial size $m(n)=\lceil Cn^c\rceil$, built by applying independently and uniformly chosen gates to uniformly chosen qubit pairs, form a pseudorandom unitary ensemble: indistinguishable from Haar-random unitaries by every polynomial-time quantum algorithm with forward oracle access?`,
    definition: r`**A pseudorandom unitary ensemble** (PRU) is an efficiently implementable family of unitaries that no polynomial-time quantum algorithm can distinguish from Haar-random unitaries. Random circuits are the physicists' model of scrambling and the cryptographers' natural candidate for PRUs.

Pseudorandom states and unitaries were introduced by Ji, Liu and Song, CRYPTO 2018, [arXiv:1711.00385](https://arxiv.org/abs/1711.00385).`,
    progress: r`- Approximate $t$-designs are known: random circuits of depth $O(nt^{5+o(1)})$ (Haferkamp, [arXiv:2203.16571](https://arxiv.org/abs/2203.16571); Brandão, Harrow and Horodecki, [arXiv:1208.0692](https://arxiv.org/abs/1208.0692)) and multiplicative-error designs with $\tilde O(n^2t)$ gates (Chen, Haah, Haferkamp, Liu, Metger and Tan, [arXiv:2406.07478](https://arxiv.org/abs/2406.07478)).
- PRUs exist assuming one-way functions (Ma and Huang, [arXiv:2410.10116](https://arxiv.org/abs/2410.10116)), and specially assembled constructions reach very low depth (Schuster, Haferkamp and Huang, [arXiv:2407.07754](https://arxiv.org/abs/2407.07754)).
- Dujmovic (2026) shows that moment matching does not generically imply pseudorandomness ([IACR ePrint 2026/2303](https://eprint.iacr.org/2026/2303)).
- Raza, Eisert and Fefferman (September 2026) study a distinctness threshold for PRUs and still describe the random-circuit conjecture as open ([arXiv:2609.03065](https://arxiv.org/abs/2609.03065v1)).`,
    residual: r`The gap is the order of quantifiers. A design for every fixed $t$ does not imply that one fixed polynomial-size ensemble defeats every polynomial-time adversary.

A proof would make the simplest physical model of chaos a cryptographic object; an efficient distinguisher for a natural random-circuit family would be equally decisive.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Distinctness threshold for pseudorandom unitaries; the random-circuit PRU question is left open.", url: "https://arxiv.org/abs/2609.03065v1", date: "2026-09-02", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Pseudorandom unitaries exist assuming quantum-secure one-way functions, by a dedicated construction rather than plain random circuits.", url: "https://arxiv.org/abs/2410.10116v3", date: "2024-10-14", version: "v3" },
    ],
    provenance: [
      { summary: "Raza, Eisert and Fefferman report that ChatGPT 5.5 and 5.6 Pro were used to devise proof strategies for all main results and that one counterexample (Theorem III.5) was proposed by ChatGPT 5.6 Sol.", url: "https://arxiv.org/abs/2609.03065v1", version: "v1" },
    ],
    relations: [{ id: "A13", type: "related" }, { id: "A31", type: "related" }],
    refs: [
      { label: "Brandão, Harrow & Horodecki, 'Local random quantum circuits are approximate polynomial-designs', Comm. Math. Phys. 346 (2016)", url: "https://arxiv.org/abs/1208.0692" },
      { label: "Haferkamp, 'Random quantum circuits are approximate unitary t-designs in depth O(nt^{5+o(1)})', Quantum 6 (2022)", url: "https://arxiv.org/abs/2203.16571" },
      { label: "Chen, Haah, Haferkamp, Liu, Metger & Tan, 'Incompressibility and spectral gaps of random circuits' (2024)", url: "https://arxiv.org/abs/2406.07478" },
      { label: "Ji, Liu & Song, 'Pseudorandom States, Non-Cloning Theorems and Quantum Money', CRYPTO 2018", url: "https://arxiv.org/abs/1711.00385" },
      { label: "Ma & Huang, 'How to Construct Random Unitaries', STOC 2025", url: "https://arxiv.org/abs/2410.10116" },
      { label: "Schuster, Haferkamp & Huang, 'Random unitaries in extremely low depth', Science 389 (2025)", url: "https://arxiv.org/abs/2407.07754" },
      { label: "Dujmovic, 'On the pseudorandomness of simple quantum processes' (IACR ePrint 2026/2303)", url: "https://eprint.iacr.org/2026/2303" },
      { label: "Raza, Eisert & Fefferman, 'Distinctness threshold for pseudorandom unitaries' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.03065v1" },
    ] },

  { id: "A28", cat: "complexity", horizon: "sharp",
    reviewedAt: "2026-11-08",
    title: "Learning Hamiltonian structure from Gibbs states at any temperature",
    statement: r`Fix locality $k$, degree $g$ and inverse temperature $\beta>0$. For an $n$-qubit Hamiltonian $H=\sum_P a_PP$ with $|a_P|\le1$, Pauli terms of weight at most $k$, each qubit in at most $g$ terms, and unknown support, can the coefficients be learned to accuracy $\varepsilon$ from $\mathrm{poly}(n,1/\varepsilon)$ copies of $e^{-\beta H}/\mathrm{Tr}\,e^{-\beta H}$ in polynomial classical time, for every fixed $\beta$?`,
    definition: r`**Hamiltonian learning from Gibbs states** asks to recover the coefficients of a local Hamiltonian from copies of its thermal state; in structure learning the set of interaction terms is unknown. This is the basic inverse problem of quantum many-body physics and a benchmark for quantum learning theory.

Anshu, Arunachalam, Kuwahara and Soleimanifar gave sample-efficient learning, Nat. Phys. 17 (2021), [arXiv:2004.07266](https://arxiv.org/abs/2004.07266).`,
    progress: r`- Haah, Kothari and Tang gave optimal high-temperature algorithms ([arXiv:2108.04842](https://arxiv.org/abs/2108.04842)).
- Bakshi, Liu, Moitra and Tang learn the coefficients at any constant temperature in polynomial time, when the interaction structure is known ([arXiv:2310.02243](https://arxiv.org/abs/2310.02243)).
- Structure learning is solved only at high temperature: Lewis, Tang and Wright (June 2026) give an efficient algorithm below an explicit inverse-temperature threshold, and explicitly leave the all-temperature case open ([arXiv:2606.30358](https://arxiv.org/abs/2606.30358v2)).`,
    residual: r`Supplying all candidate Pauli terms to the known-structure algorithms breaks their bounded-degree assumption. A positive answer for every fixed $\beta$, or a hardness result at low temperature, would settle the question.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Efficient structure learning from high-temperature Gibbs states; the all-temperature case is explicitly left open.", url: "https://arxiv.org/abs/2606.30358v2", date: "2026-06-29", version: "v2" },
      { kind: "preprint", role: "progress", summary: "Polynomial-time learning of Hamiltonian coefficients from Gibbs states at any constant temperature, with known interaction structure (STOC 2024).", url: "https://arxiv.org/abs/2310.02243v2", date: "2023-10-03", version: "v2" },
    ],
    provenance: [
      { summary: "Lewis, Tang and Wright state that the main technical proofs, except the lower bound, were written without AI, checked with ChatGPT 5.6 Sol (which found issues they repaired), and that the lower-bound proof was generated with ChatGPT 6 Astra; the final proofs were written and verified by the authors.", url: "https://arxiv.org/abs/2606.30358v2", version: "v2" },
    ],
    relations: [{ id: "O9", type: "related" }, { id: "A17", type: "related" }],
    refs: [
      { label: "Anshu, Arunachalam, Kuwahara & Soleimanifar, 'Sample-efficient learning of interacting quantum systems', Nat. Phys. 17 (2021)", url: "https://arxiv.org/abs/2004.07266" },
      { label: "Haah, Kothari & Tang, 'Optimal learning of quantum Hamiltonians from high-temperature Gibbs states', FOCS 2022", url: "https://arxiv.org/abs/2108.04842" },
      { label: "Bakshi, Liu, Moitra & Tang, 'Learning quantum Hamiltonians at any temperature in polynomial time', STOC 2024", url: "https://arxiv.org/abs/2310.02243" },
      { label: "Narayanan, 'Improved algorithms for learning quantum Hamiltonians, via flat polynomials', COLT 2025", url: "https://arxiv.org/abs/2407.04540" },
      { label: "Lewis, Tang & Wright, 'Learning the structure of open quantum systems' (2026 preprint, v2)", url: "https://arxiv.org/abs/2606.30358v2" },
    ] },

  { id: "A29", cat: "complexity", horizon: "sharp",
    reviewedAt: "2026-11-08",
    title: "Public-key quantum money from standard assumptions",
    statement: r`Construct a public-key quantum money scheme (efficiently verifiable by anyone, unforgeable by any polynomial-time quantum adversary) whose security reduces to a standard, well-studied post-quantum assumption such as Learning With Errors, without indistinguishability obfuscation or idealized oracles; or show that such a reduction is impossible for natural classes of constructions.`,
    definition: r`**Public-key quantum money** uses no-cloning to make unforgeable banknotes that anyone can verify. Quantum money goes back to Wiesner; private-key schemes are well understood, and public verification is the hard part.

Standard reference: Aaronson and Christiano, “Quantum money from hidden subspaces”, STOC 2012, [arXiv:1203.4740](https://arxiv.org/abs/1203.4740).`,
    progress: r`- Aaronson and Christiano gave a scheme relative to an oracle and a hidden-subspace candidate; many concrete candidates (knots, lattices, group actions) were later broken.
- Zhandry introduced quantum lightning, which implies public-key money, from non-collapsing hash functions ([arXiv:1711.02276](https://arxiv.org/abs/1711.02276)), and constructions from indistinguishability obfuscation followed.
- In 2025, Shmueli and Zhandry built one-shot signatures, which imply public-key quantum money, from post-quantum iO plus LWE, or unconditionally relative to a classical oracle ([arXiv:2507.12456](https://arxiv.org/abs/2507.12456)); Huang and Vaikuntanathan simplified the scheme ([arXiv:2510.10899](https://arxiv.org/abs/2510.10899v2)). These rely on iO, whose post-quantum security is itself not based on a standard assumption.`,
    residual: r`A scheme from LWE alone, or another standard assumption, would resolve the question; so would a black-box separation.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "One-shot signatures, implying public-key quantum money, from post-quantum iO plus LWE, or relative to a classical oracle (CRYPTO 2025); not from LWE alone.", url: "https://arxiv.org/abs/2507.12456v1", date: "2025-07-16", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Simpler one-shot signature scheme with perfect correctness; plain-model security still uses obfuscation.", url: "https://arxiv.org/abs/2510.10899v2", date: "2025-10-13", version: "v2" },
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
- No code with $d<127$ violates it (Dallas, Andreadakis and Lidar, [arXiv:2208.11800](https://arxiv.org/abs/2208.11800)).
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
      { kind: "preprint", role: "progress", summary: "No ((n,K,d)) code with d<127 can violate the quantum Hamming bound.", url: "https://arxiv.org/abs/2208.11800v2", date: "2022-08-25", version: "v2" },
    ],
    relations: [{ id: "A7", type: "related" }],
    refs: [
      { label: "Gottesman, 'Stabilizer Codes and Quantum Error Correction' (PhD thesis, 1997)", url: "https://arxiv.org/abs/quant-ph/9705052" },
      { label: "Sarvepalli & Klappenecker, 'Degenerate quantum codes and the quantum Hamming bound', PRA 81 (2010)", url: "https://arxiv.org/abs/0812.2674" },
      { label: "Dallas, Andreadakis & Lidar, 'No ((n,K,d<127)) code can violate the quantum Hamming bound' (2022)", url: "https://arxiv.org/abs/2208.11800" },
      { label: "Zhang & Chen, 'Degeneracy Cannot Violate the Quantum Hamming Bound' (2026 preprint, v1)", url: "https://arxiv.org/abs/2606.15558v1" },
    ] },

  { id: "A31", cat: "complexity", horizon: "sharp", status: "claimed-solved",
    reviewedAt: "2026-11-08",
    title: "The unitary synthesis problem",
    statement: r`(Aaronson–Kuperberg.) Is there a polynomial-size quantum oracle circuit family $\{A_n\}$, depending only on $n$, such that for every $n$-qubit unitary $U$ some Boolean oracle $f$ makes $A_n^f$ implement $U$ to constant error in diamond norm?`,
    definition: r`**The unitary synthesis problem** asks whether every unitary can be implemented efficiently given a suitable classical oracle, the unitary analogue of the fact that any Boolean function is computable with an oracle for it. A positive answer means classical oracles suffice for quantum transformations; a negative one would separate quantum from classical advice in a strong sense.

The question is due to Aaronson and Kuperberg, “Quantum versus classical proofs and advice”, Theory of Computing 3 (2007), [arXiv:quant-ph/0604056](https://arxiv.org/abs/quant-ph/0604056).`,
    progress: r`- Lombardi, Ma and Wright proved that one oracle query does not suffice in general ([IACR ePrint 2023/1602](https://eprint.iacr.org/2023/1602)), and Dong, Lombardi and Ma gave explicit unitaries needing two queries ([arXiv:2607.26478](https://arxiv.org/abs/2607.26478v1)).
- Rosenthal gave a $2^{n/2}$-scale upper bound.
- Brakerski and Yuen connected the problem to scalable pseudorandom unitaries ([arXiv:2605.09957](https://arxiv.org/abs/2605.09957)).`,
    claim: r`**OpenAI, [“Polynomial-Time Unitary Synthesis from a Boolean Oracle”](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Polynomial-Time-Unitary-Synthesis-from-a-Boolean-Oracle-October-5-2026/paper.pdf)** (OpenAI Math Release on GitHub, public 6 October 2026, not on arXiv).

What it claims:
- A positive answer to the constant-error formulation.
- A polynomial-time classical algorithm outputs, for each $n$, a circuit with polynomially many gates and Boolean-oracle calls that implements any $n$-qubit unitary for a suitable oracle.

Caveats:
- Not peer reviewed, and no independent assessment was found. Hence “Claimed solved” rather than “Solved”.
- He, Ou and Zhao (November 2026) already use this claim to prove unitaryQIP = unitaryPSPACE ([arXiv:2611.02819](https://arxiv.org/abs/2611.02819v1)); that is downstream use, not an assessment.
- OpenAI lists itself as author and states that an unreleased internal model produced the manuscript collection. The scope of any Lean formalization for this family was not checked here.`,
    evidence: [
      { kind: "preprint", role: "claimed-solution", summary: "Claimed positive answer to the constant-error unitary synthesis problem with a polynomial-size circuit and one Boolean oracle; OpenAI GitHub manuscript, pending assessment.", url: "https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Polynomial-Time-Unitary-Synthesis-from-a-Boolean-Oracle-October-5-2026/paper.pdf", date: "2026-10-06", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Uses the claimed unitary synthesis result to prove unitaryQIP = unitaryPSPACE; downstream use, not verification.", url: "https://arxiv.org/abs/2611.02819v1", date: "2026-11-02", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Explicit unitaries requiring two oracle queries, sharpening the one-query lower bound.", url: "https://arxiv.org/abs/2607.26478v1", date: "2026-07-29", version: "v1" },
    ],
    provenance: [
      { summary: "OpenAI lists itself as author and states that an unreleased internal model produced the manuscript collection. Lean scope for this family was not checked here.", url: "https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Polynomial-Time-Unitary-Synthesis-from-a-Boolean-Oracle-October-5-2026/README.md" },
    ],
    relations: [{ id: "A10", type: "related" }, { id: "A27", type: "related" }],
    refs: [
      { label: "Aaronson & Kuperberg, 'Quantum Versus Classical Proofs and Advice', Theory of Computing 3 (2007)", url: "https://arxiv.org/abs/quant-ph/0604056" },
      { label: "Lombardi, Ma & Wright, 'A one-query lower bound for unitary synthesis and breaking quantum cryptography', STOC 2024", url: "https://eprint.iacr.org/2023/1602" },
      { label: "Brakerski & Yuen, 'On Scalable Pseudorandom Unitaries and the Unitary Synthesis Problem' (2026 preprint)", url: "https://arxiv.org/abs/2605.09957" },
      { label: "Dong, Lombardi & Ma, 'Explicit Separations for One-Query Unitary Synthesis' (2026 preprint, v1)", url: "https://arxiv.org/abs/2607.26478v1" },
      { label: "OpenAI, 'Polynomial-Time Unitary Synthesis from a Boolean Oracle' (OpenAI Math Release manuscript, dated 5 October 2026)", url: "https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Polynomial-Time-Unitary-Synthesis-from-a-Boolean-Oracle-October-5-2026/paper.pdf" },
      { label: "He, Ou & Zhao, 'unitaryQIP = unitaryPSPACE' (2026 preprint, v1)", url: "https://arxiv.org/abs/2611.02819v1" },
    ] },
];
