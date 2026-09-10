const r = String.raw;

export const COMPLEXITY = [
  { id: "A1", cat: "complexity", horizon: "sharp",
    title: "BPP versus BQP",
    statement: r`Determine whether $\mathsf{BPP}=\mathsf{BQP}$, or prove that efficient bounded-error quantum computation is strictly more powerful than efficient randomized classical computation.`,
    context: r`This is a sharp equality question, even though an unconditional separation is a long-horizon challenge. Since $\mathsf{P}\subseteq\mathsf{BPP}\subseteq\mathsf{BQP}\subseteq\mathsf{PSPACE}$, proving $\mathsf{BPP}\ne\mathsf{BQP}$ would also prove $\mathsf{P}\ne\mathsf{PSPACE}$.

What is known: Bernstein–Vazirani's recursive Fourier sampling and Simon's problem give oracle/query-model evidence. Raz–Tal proved a classical-oracle separation of BQP from the entire polynomial hierarchy. These are relativized results, not unrelativized class separations. Shor's polynomial-time factoring algorithm is further evidence of quantum advantage, but an exponential advantage for factoring is not proved: no superpolynomial classical lower bound is known.

The question compares the same finite-input, bounded-error computation model; alternative data-access or output conventions belong in the methods discussion A16. Related: A2, A11.`,
    relations: [{ id: "A2", type: "related" }, { id: "A11", type: "related" }],
    refs: [
      { label: "Bernstein & Vazirani, 'Quantum complexity theory', SIAM J. Comput. 26 (1997)", url: "https://doi.org/10.1137/S0097539796300921" },
      { label: "Raz & Tal, 'Oracle separation of BQP and PH', STOC 2019", url: "https://doi.org/10.1145/3313276.3316315" },
    ] },

  { id: "A2", cat: "complexity", horizon: "sharp",
    title: "NP versus BQP",
    statement: r`Determine whether $\mathsf{NP}\subseteq\mathsf{BQP}$; equivalently, whether an NP-complete decision problem has a polynomial-time bounded-error quantum algorithm.`,
    context: r`No NP-complete problem is known to be in BQP, and none is proved to lie outside it. The conjectural answer is that quantum computers cannot efficiently solve every NP problem, but this is an unrelativized containment question, not a theorem about generic search alone.

What is known: Bennett–Bernstein–Brassard–Vazirani establish black-box lower bounds, including the $\Omega(\sqrt{M})$ quantum-query cost of searching $M$ unstructured possibilities, matching Grover's algorithm. Their oracle results give evidence against the containment. They do not rule out algorithms exploiting the structure of SAT or other NP-complete problems; an oracle-query lower bound is not an ordinary running-time lower bound.

A resolution would distinguish quantum speedups for structured problems from efficient solution of all efficiently checkable search problems. Related: A1, A15.`,
    relations: [{ id: "A1", type: "related" }, { id: "A15", type: "related" }],
    refs: [
      { label: "Bennett, Bernstein, Brassard & Vazirani, 'Strengths and weaknesses of quantum computing', SIAM J. Comput. 26 (1997)", url: "https://arxiv.org/abs/quant-ph/9701001" },
    ] },

  { id: "A3", cat: "complexity", horizon: "sharp",
    title: "QMA versus QCMA",
    statement: r`Determine whether quantum witnesses increase the power of polynomial-time quantum verification: $\mathsf{QMA}\stackrel{?}{=}\mathsf{QCMA}$, without an oracle.`,
    context: r`QMA allows a polynomial-size quantum witness; QCMA restricts the witness to a classical string while retaining a quantum verifier. The question is whether some efficiently verifiable evidence fundamentally requires quantum information.

What is known: Aaronson–Kuperberg gave a quantum-oracle separation. Natarajan–Nirkhe's distribution-testing separation uses a randomized classical oracle; Ben-David–Kundu's 2024 classical-oracle result restricts adaptivity. These are important intermediate models, not the unrestricted classical-oracle theorem.

The full standard classical-oracle separation is due to Bostanci, Haferkamp, Nirkhe and Zhandry: first posted in November 2025, revised in January 2026 and published at STOC 2026. It strengthens relativized evidence but does not settle the unrelativized QMA versus QCMA question. Related: A4, A5, A10.`,
    evidence: [{ kind: "published", summary: "A standard classical oracle separates QMA from QCMA; the unrelativized equality remains open.", url: "https://doi.org/10.1145/3798129.3800776" }],
    relations: [{ id: "A4", type: "related" }, { id: "A5", type: "related" }, { id: "A10", type: "related" }],
    refs: [
      { label: "Aaronson & Kuperberg, 'Quantum versus classical proofs and advice', Theory of Computing 3 (2007)", url: "https://theoryofcomputing.org/articles/v003a007/" },
      { label: "Natarajan & Nirkhe, 'A distribution testing oracle separation between QMA and QCMA', Quantum 8, 1377 (2024)", url: "https://quantum-journal.org/papers/q-2024-06-17-1377/" },
      { label: "Ben-David & Kundu, 'Oracle separation of QMA and QCMA with bounded adaptivity' (2024)", url: "https://arxiv.org/abs/2402.00298" },
      { label: "Bostanci, Haferkamp, Nirkhe & Zhandry, 'A classical oracle separation between QMA and QCMA', STOC 2026", url: "https://arxiv.org/abs/2511.09551v2" },
    ] },

  { id: "A4", cat: "complexity", horizon: "sharp",
    title: "Perfect completeness for finite-register QMA",
    statement: r`In the finite-register circuit model with Hadamard, $T$ and CNOT gates and computational-basis initialization/measurement, determine whether $\mathsf{QMA}_1=\mathsf{QMA}$. Here $\mathsf{QMA}_1$ requires acceptance probability exactly one for some witness on every yes-instance.`,
    context: r`Ordinary QMA permits completeness error; QMA1 does not. Exact acceptance is sensitive to the gate convention, so approximate universality alone cannot be used to transfer a perfect-completeness theorem between models.

What is known: Aaronson constructed a quantum oracle relative to which $\mathsf{QMA}_1\ne\mathsf{QMA}$. This is a quantum-oracle obstruction, not a classical-oracle separation and not an equality theorem.

Jeffery–Witteveen prove $\mathsf{QMA}=\mathsf{QMA}^{\infty}=\mathsf{QMA}_1^{\infty}$ when the verifier has their specified infinite-dimensional counter with an efficient shift operation. The result, posted in June 2025 and published in PRL in May 2026, removes completeness error using an additional infinite register. Truncation also gives stronger finite-dimensional completeness amplification, but not exactly perfect completeness in ordinary finite-register QMA. The standard equality remains open. Related: A3, A8.`,
    evidence: [{ kind: "published", summary: "Perfect completeness is achievable with a specified infinite counter; this does not settle the ordinary finite-register problem.", url: "https://journals.aps.org/prl/abstract/10.1103/pwdd-htbf", date: "2026-05-06" }],
    relations: [{ id: "A3", type: "related" }, { id: "A8", type: "related" }],
    refs: [
      { label: "Aaronson, 'On perfect completeness for QMA', Quantum Inf. Comput. 9 (2009)", url: "https://arxiv.org/abs/0806.0450" },
      { label: "Jeffery & Witteveen, 'QMA = QMA1 with an infinite counter', PRL (2026; preprint 2025)", url: "https://arxiv.org/abs/2506.15551" },
    ] },

  { id: "A5", cat: "complexity", horizon: "sharp", status: "improved",
    title: "Multiple unentangled quantum proofs",
    statement: r`Determine whether $\mathsf{QMA}(2)=\mathsf{QMA}$, or whether two polynomial-size witnesses promised to be unentangled increase verification power.`,
    context: r`The verifier may jointly process the two witnesses, but the honest and cheating witnesses in QMA(2) must be product across the two prover registers. The product-state optimization underlying this model connects it to separability and tensor optimization.

What is known: Harrow–Montanaro show that polynomially many unentangled witnesses collapse to two, with the usual constant completeness–soundness gap. Very short proofs require attention to that gap: logarithmic-size protocols with inverse-polynomial gap are not the same claim as the $\widetilde O(\sqrt n)$-size, constant-gap two-witness protocols for NP problems. The general upper bound is $\mathsf{QMA}(2)\subseteq\mathsf{NEXP}$; the intermediate target $\mathsf{QMA}(2)\subseteq\mathsf{EXP}$ is also open.

July 2026 preprint: Beckey, Jeronimo and Wu determine the exact worst-case product-test acceptance curve over all product overlaps and finite local dimensions. This settles the low-overlap analysis and strengthens one-shot soundness of a key reduction, without settling the class comparison.

September 2026 preprint: Bostanci et al. construct a quantum oracle separating QMA(2) from QMA. They also prove the geometric no-disentanglers conjecture at constant errors $\varepsilon+\delta<1$: an approximate disentangler needs exponentially many input qubits in the number of output qubits. The class separation is relativized; the geometric theorem is not. Neither proves an unrelativized separation, and a classical-oracle separation remains open. Related: A3, E3.`,
    evidence: [
      { kind: "preprint", summary: "Exact product-test acceptance curve, including the previously open low-overlap regime.", url: "https://arxiv.org/abs/2607.21477v1", date: "2026-07-23", version: "v1" },
      { kind: "preprint", summary: "Quantum-oracle QMA(2)/QMA separation and an unrelativized no-disentanglers theorem at constant errors with epsilon + delta < 1.", url: "https://arxiv.org/abs/2609.02865v1", date: "2026-09-02", version: "v1" },
    ],
    provenance: [
      { summary: "Product-test authors report ChatGPT 5.5 Pro assistance with analysis, ChatGPT/Claude assistance with writing and exploratory Codex-supported Lean work; they report human verification and responsibility for the manuscript.", url: "https://arxiv.org/abs/2607.21477v1", version: "v1" },
      { summary: "The September authors report that ChatGPT 5.6 Sol suggested the central proof idea after prompts about She–Yuen, and that they verified, simplified and developed it. This records their disclosure, not an independent provenance audit.", url: "https://arxiv.org/abs/2609.02865v1", version: "v1" },
    ],
    relations: [{ id: "A3", type: "related" }, { id: "E3", type: "related" }],
    refs: [
      { label: "Harrow & Montanaro, 'Testing product states, quantum Merlin-Arthur games and tensor optimization', J. ACM 60 (2013)", url: "https://arxiv.org/abs/1001.0017" },
      { label: "Aaronson, Beigi, Drucker, Fefferman & Shor, 'The power of unentanglement', Theory of Computing 5 (2009)", url: "https://theoryofcomputing.org/articles/v005a001/" },
      { label: "Beckey, Jeronimo & Wu, 'An Optimal Analysis of the Product Test' (2026 preprint)", url: "https://arxiv.org/abs/2607.21477v1" },
      { label: "Bostanci et al., 'A quantum oracle separation between QMA(2) and QMA' (2026 preprint)", url: "https://arxiv.org/abs/2609.02865v1" },
    ] },

  { id: "A6", cat: "complexity", horizon: "sharp",
    title: "Quantum PCP conjecture",
    statement: r`For $H=m^{-1}\sum_{i=1}^{m}h_i$, with fixed locality and local dimension and $0\le h_i\le I$, prove or disprove that distinguishing $\lambda_{\min}(H)\le a$ from $\lambda_{\min}(H)\ge b$ is $\mathsf{QMA}$-hard for some constant promise gap $b-a>0$.`,
    context: r`The normalization makes this a constant energy-density approximation problem, or equivalently a constant extensive error for the unnormalized sum. The local terms have finite efficiently specified descriptions. This is the Hamiltonian formulation of quantum PCP; variants of probabilistically checkable quantum proofs require care about the verifier and reduction model.

What is known: The ordinary local-Hamiltonian promise problem is QMA-complete at inverse-polynomial precision, not for exact real-valued energy output. Anshu–Breuckmann–Nirkhe proved NLTS: there are bounded-locality Hamiltonian families whose sufficiently low-energy states cannot be prepared by constant-depth local circuits. Good quantum codes enable that result, but NLTS is weaker than quantum PCP and does not exclude every succinct classical description of a low-energy state.

Published 2025 work clarifies quantum-PCP definitions. A separate October 2025 preprint develops derandomized tensor-product gap amplification under its stated hypotheses. Neither supplies the complete constant-gap QMA-hardness reduction. Related: A7, A8.`,
    evidence: [
      { kind: "published", summary: "NLTS is proved; excluding constant-depth circuit preparation is not the full quantum PCP conjecture.", url: "https://arxiv.org/abs/2206.13228" },
      { kind: "preprint", summary: "Derandomized tensor-product gap amplification advances the amplification toolkit without resolving quantum PCP.", url: "https://arxiv.org/abs/2510.01333" },
    ],
    relations: [{ id: "A7", type: "related" }, { id: "A8", type: "related" }],
    refs: [
      { label: "Anshu, Breuckmann & Nirkhe, 'NLTS Hamiltonians from good quantum codes', STOC 2023", url: "https://arxiv.org/abs/2206.13228" },
      { label: "Buhrman, Helsen & Weggemans, 'Quantum PCPs: on Adaptivity, Multiple Provers and Reductions to Local Hamiltonians', Quantum 9, 1791 (2025)", url: "https://quantum-journal.org/papers/q-2025-07-11-1791/" },
      { label: "'Derandomised tensor product gap amplification for quantum Hamiltonians' (2025 preprint)", url: "https://arxiv.org/abs/2510.01333" },
    ] },

  { id: "A7", cat: "complexity", horizon: "sharp",
    title: "Good quantum locally testable codes",
    statement: r`Construct stabilizer quantum locally testable codes with constant rate, linear distance, constant check weight and degree, and constant soundness $s>0$. For $m$ checks on $n$ qubits, require $|\operatorname{syn}(E)|/m\ge s\,\min_{F:\operatorname{syn}(F)=0}\operatorname{wt}(EF)/n$ for every Pauli error $E$.`,
    context: r`The syndrome counts violated checks. Distance in this soundness inequality is distance to the code space: errors are considered modulo zero-syndrome operators, including logical operators, not just modulo stabilizers. This distinguishes local testability from ordinary error-correction distance.

What is known: Panteleev–Kalachev constructed asymptotically good quantum LDPC codes, with constant rate and linear distance; later quantum Tanner constructions provide another route. Earlier fibre-bundle and balanced-product breakthroughs had different parameters and should not all be credited with the full good-code theorem.

Dinur–Lin–Vidick construct almost-good qLTCs with constant rate, bounded-size checks and inverse-polylogarithmic relative distance and soundness. Thus several parameters are close, but the simultaneous constant-parameter target above remains open. Good qLDPC codes and NLTS do not by themselves establish constant local-test soundness, and quantum PCP should not be identified with this particular stabilizer-code construction problem. Related: A6, A18.`,
    relations: [{ id: "A6", type: "related" }, { id: "A18", type: "related" }],
    refs: [
      { label: "Panteleev & Kalachev, 'Asymptotically good quantum and locally testable classical LDPC codes', STOC 2022", url: "https://doi.org/10.1145/3519935.3520017" },
      { label: "Dinur, Lin & Vidick, 'Almost good quantum locally testable codes' (2024)", url: "https://arxiv.org/abs/2402.07476" },
    ] },

  { id: "A8", cat: "complexity", horizon: "sharp",
    title: "Classical witnesses for commuting local Hamiltonians",
    statement: r`For every fixed locality $k$ and local dimension $d$, is the commuting-projector local-Hamiltonian promise problem in $\mathsf{NP}$? The input has polynomially many commuting $k$-local projectors with finite rational/algebraic descriptions and inverse-polynomially separated ground-energy thresholds; no interaction geometry is assumed.`,
    context: r`Commuting terms have a common eigenbasis, but a useful eigenstate need not have an obvious efficiently verifiable classical description. Topological order can occur even in frustration-free commuting models, such as the toric code; it does not require frustration.

What is known: Two-local commuting Hamiltonians are in NP at every fixed local dimension (Bravyi–Vyalyi), as are three-local qubit instances. Results for four-local qubits, including Schuch's square-lattice case, have geometric hypotheses; they are not blanket theorems for arbitrary four-local interactions.

More recent positive cases include Irani–Jiang's two-dimensional qutrit setting and factorized two-dimensional interactions, and Bostanci–Hwang's rank-one two-dimensional case without a local-dimension restriction and a specified rank-one three-dimensional family with qudits on edges. Rank, geometry and local dimension are essential parts of these theorems. General fixed-locality NP membership remains open. Related: A4, A6.`,
    evidence: [{ kind: "published", summary: "ITCS 2026 proves NP membership for specified rank-one 2D and 3D commuting Hamiltonians, not arbitrary commuting local Hamiltonians.", url: "https://drops.dagstuhl.de/storage/00lipics/lipics-vol362-itcs2026/html/LIPIcs.ITCS.2026.25/LIPIcs.ITCS.2026.25.html" }],
    relations: [{ id: "A4", type: "related" }, { id: "A6", type: "related" }],
    refs: [
      { label: "Bravyi & Vyalyi, 'Commutative version of the local Hamiltonian problem and common eigenspace problem', Quantum Inf. Comput. 5 (2005)", url: "https://arxiv.org/abs/quant-ph/0308021" },
      { label: "Irani & Jiang, 'Commuting local Hamiltonian problem on 2D beyond qubits', Commun. Math. Phys. (2025)", url: "https://doi.org/10.1007/s00220-025-05462-8" },
      { label: "Bostanci & Hwang, 'Commuting Local Hamiltonians Beyond 2D', ITCS 2026", url: "https://arxiv.org/abs/2410.10495" },
    ] },

  { id: "A9", cat: "complexity", horizon: "sharp", status: "improved",
    title: "StoqMA versus MA and error amplification",
    statement: r`Determine whether $\mathsf{StoqMA}=\mathsf{MA}$. A central route is to establish general completeness-and-soundness error amplification for StoqMA while preserving the verifier model.`,
    context: r`Stoquastic Hamiltonians have nonpositive off-diagonal matrix elements in a specified basis. Their ground-energy complexity motivates StoqMA, introduced by Bravyi–Bessen–Terhal following the earlier stoquastic-Hamiltonian work of Bravyi–DiVincenzo–Oliveira–Terhal. The known containments include $\mathsf{MA}\subseteq\mathsf{StoqMA}\subseteq\mathsf{QMA}\cap\mathsf{SBP}$ and $\mathsf{SBP}\subseteq\mathsf{AM}$. Absence of a sign problem is not a general efficient-simulation theorem.

What is known: Aharonov–Grilo–Liu show that suitable general StoqMA error reduction would imply equality with MA. Liu proves soundness-reduction and other restricted results, but the general completeness-amplification obstacle remains. This is a sharp class-comparison question.

July 2026 preprint: Karakashian–Hen propose vanishing geometric phase (VGP) as a wider Hamiltonian class. They establish StoqMA-completeness of the VGP local-Hamiltonian problem, MA membership of its frustration-free variant, hard-to-stoquastize examples, and PSPACE-completeness of recognizing VGP in their general geometrically local setting. These results refine the landscape without settling StoqMA = MA or general error amplification. Related: B11.`,
    evidence: [{ kind: "preprint", summary: "VGP Hamiltonian complexity and recognition results; no resolution of StoqMA versus MA.", url: "https://arxiv.org/abs/2607.18596v1", date: "2026-07-21", version: "v1" }],
    relations: [{ id: "B11", type: "related" }],
    refs: [
      { label: "Bravyi, Bessen & Terhal, 'Merlin-Arthur Games and Stoquastic Complexity' (2006)", url: "https://arxiv.org/abs/quant-ph/0611021" },
      { label: "Bravyi, DiVincenzo, Oliveira & Terhal, 'The complexity of stoquastic local Hamiltonian problems', Quantum Inf. Comput. 8 (2008)", url: "https://arxiv.org/abs/quant-ph/0606140" },
      { label: "Aharonov, Grilo & Liu, 'StoqMA vs. MA: the power of error reduction', Quantum 9, 1853 (2025)", url: "https://quantum-journal.org/papers/q-2025-09-11-1853/" },
      { label: "Liu, 'StoqMA meets distribution testing', TQC 2021", url: "https://arxiv.org/abs/2011.05733v3" },
      { label: "Karakashian & Hen, 'Dismantling the Stoquastic Dichotomy' (2026 preprint)", url: "https://arxiv.org/abs/2607.18596v1" },
    ] },

  { id: "A10", cat: "complexity", horizon: "sharp",
    title: "Quantum search-to-decision reductions",
    statement: r`Can a polynomial-time quantum algorithm, with polynomially many coherent queries to a QMA-complete decision oracle, prepare an accepting witness for every yes-instance of a given QMA verifier? Require bounded overall failure probability and inverse-polynomial accuracy, under the standard promise-oracle convention.`,
    context: r`Search reduces to decision for SAT by fixing bits of a satisfying assignment. A quantum witness is a state; learning or fixing its amplitudes is not an analogous polynomial-length self-reduction. Oracle access, output accuracy and the underlying verification promise must therefore be stated.

What is known: Irani–Natarajan–Nirkhe–Rao–Yuen prove that one coherent query to a suitable PP oracle suffices for witness synthesis to inverse-polynomial accuracy, with efficient quantum post-processing. They also exhibit a quantum oracle relative to which QMA search does not reduce to QMA decision. The stronger PP upper bound and the relativized QMA obstruction are compatible.

The unrelativized QMA-decision-oracle question remains open. It concerns producing a usable accepting state, not returning a classical description of all its amplitudes, and is one precise part of the broader state-synthesis programme. Related: A3, A5.`,
    relations: [{ id: "A3", type: "related" }, { id: "A5", type: "related" }],
    refs: [
      { label: "Irani, Natarajan, Nirkhe, Rao & Yuen, 'Quantum search-to-decision reductions and the state synthesis problem', CCC 2022", url: "https://arxiv.org/abs/2111.02999" },
    ] },

  { id: "A11", cat: "complexity", horizon: "sharp", status: "improved",
    title: "Aaronson–Ambainis influential-variable conjecture",
    statement: r`Do universal constants $c,C>0$ exist such that every multilinear $p:\{-1,1\}^{n}\to[0,1]$ of degree $d\ge1$ and positive variance has some variable $i$ with $\operatorname{Inf}_i(p)\ge c(\operatorname{Var}(p)/d)^C$? Use the uniform measure and $\operatorname{Inf}_i(p)=\mathbb E[(p(x)-p(x^{\oplus i}))^2]/4$.`,
    context: r`Here $x^{\oplus i}$ flips the $i$th sign. The conjecture is an exact analytic statement, independent of implementation costs. Aaronson–Ambainis show it would imply that a $T$-query quantum algorithm's acceptance probability can be approximated within additive $\varepsilon$ on a $1-\delta$ fraction of uniformly random Boolean inputs using $\operatorname{poly}(T,1/\varepsilon,1/\delta)$ classical queries.

The full influential-variable conjecture remains open. Its simulation consequence concerns acceptance probabilities on most inputs; it is not a worst-case simulation theorem for every promise problem, nor a theorem that a classical algorithm samples the full quantum output distribution.

August 2026 preprints, moved here from A16: Blanc–Docter–Strassle–Tan prove an analogous acceptance-probability simulation for $t$ queries in $d$ parallel query rounds, with $t^{O(d^2)}$ classical queries at fixed approximation and failure parameters. Liu–Mutreja independently establish constant-round and limited-adaptivity simulation results with different quantitative bounds. Constantly many oracle-query rounds are thus a positive restricted case; physical gate depth, unrestricted adaptive queries and sampling advantage are separate notions.

A16 retains the input/output/data-access comparison methods and the historical record; it is not counted as a second conjecture. Related: A1, A16.`,
    evidence: [
      { kind: "preprint", summary: "Bounded-round acceptance-probability simulation on most uniform inputs, with t^{O(d^2)} classical queries at fixed error parameters.", url: "https://arxiv.org/abs/2608.19158v1", date: "2026-08-19", version: "v1" },
      { kind: "preprint", summary: "Independent simulation results for constant-round and limited-adaptivity quantum query algorithms; sampling is a different target.", url: "https://arxiv.org/abs/2608.20297v1", date: "2026-08-20", version: "v1" },
    ],
    provenance: [
      { summary: "Blanc et al. report ChatGPT 5.4 use for literature search, note transcription, proof checking and copyediting; this is an author disclosure, not independent verification of the workflow.", url: "https://arxiv.org/abs/2608.19158v1", version: "v1" },
      { summary: "Liu–Mutreja report that conversations with ChatGPT 5.5 Pro helped prove their constant-depth version and assisted with a main theorem's proof.", url: "https://arxiv.org/abs/2608.20297v1", version: "v1" },
    ],
    relations: [{ id: "A1", type: "related" }, { id: "A16", type: "related" }],
    refs: [
      { label: "Aaronson & Ambainis, 'The need for structure in quantum speedups', Theory of Computing 10 (2014)", url: "https://theoryofcomputing.org/articles/v010a006/" },
      { label: "Blanc, Docter, Strassle & Tan, 'Quantum Speedups Require Structure or Depth' (2026 preprint; FOCS 2026)", url: "https://arxiv.org/abs/2608.19158v1" },
      { label: "Liu & Mutreja, 'Parallel Quantum Advantage with Limited Adaptivity Requires Structure' (2026 preprint)", url: "https://arxiv.org/abs/2608.20297v1" },
    ] },

  { id: "A12", cat: "complexity", horizon: "sharp", status: "improved",
    title: "Approximate average-case hardness for BosonSampling",
    statement: r`Prove average-case approximate hardness for complex-Gaussian permanents, together with a robust reduction strong enough to rule out polynomial-time classical sampling within inverse-polynomial total-variation error for standard BosonSampling under standard worst-case complexity assumptions.`,
    context: r`Standard BosonSampling output probabilities involve squared permanents of interferometer submatrices; appropriate submatrices approach Gaussian matrices in the relevant hiding regime. The Aaronson–Arkhipov route to approximate-sampling hardness needs average-case approximate permanent hardness and anticoncentration, not merely worst-case hardness or exact probability evaluation.

July 2026 preprint: Koehler–Leung claim the full permanent anticoncentration conjecture via a complex-Gaussian small-ball estimate. This closes that ingredient at preprint level, but the approximate average-case hardness and sufficiently robust reduction remain unresolved. Exact-sampling consequences under noncollapse assumptions should not be substituted for this approximate target.

August 2026 preprints concern separate variants. Shou–Gorshkov–Galitski–Miller prove the Gaussian-BosonSampling hiding conjecture with $K$ equally squeezed inputs in the regime $N=o(\sqrt K)$, where $N$ is the detected-photon number. Go–Jeong–Oh establish average-case hardness of probability estimation for threshold and parity BosonSampling in a linear-mode regime. Neither proves the stated approximate-sampling theorem for standard BosonSampling. Related: A13.`,
    evidence: [
      { kind: "preprint", summary: "Claims the complex-Gaussian permanent anticoncentration conjecture; approximate average-case hardness is still missing.", url: "https://arxiv.org/abs/2607.20329v1", date: "2026-07-22", version: "v1" },
      { kind: "preprint", summary: "Hiding theorem for Gaussian BosonSampling with equally squeezed inputs in the stated N = o(sqrt K) regime.", url: "https://arxiv.org/abs/2608.19314v1", date: "2026-08-19", version: "v1" },
      { kind: "preprint", summary: "Average-case probability-estimation hardness for threshold/parity variants, not a general approximate-sampling theorem.", url: "https://arxiv.org/abs/2608.24008v1", date: "2026-08-25", version: "v1" },
    ],
    provenance: [{ summary: "Shou et al. report GPT-5.5 Thinking/Pro and GPT-5.6 Sol use for proof ideas, methods, checking and proofreading, and say they wrote the paper and checked every result and proof.", url: "https://arxiv.org/abs/2608.19314v1", version: "v1" }],
    relations: [{ id: "A13", type: "related" }],
    refs: [
      { label: "Aaronson & Arkhipov, 'The computational complexity of linear optics', Theory of Computing 9 (2013)", url: "https://arxiv.org/abs/1011.3245" },
      { label: "Koehler & Leung, 'Anticoncentration of the Permanent in Ginibre Ensembles' (2026 preprint)", url: "https://arxiv.org/abs/2607.20329v1" },
      { label: "Shou et al., 'Proof of the hiding conjecture for Gaussian boson sampling with an arbitrary number of squeezed input modes' (2026 preprint)", url: "https://arxiv.org/abs/2608.19314v1" },
      { label: "Go, Jeong & Oh, 'Threshold and Parity BosonSampling in the Linear-Mode Regime' (2026 preprint)", url: "https://arxiv.org/abs/2608.24008v1" },
    ] },

  { id: "A13", cat: "complexity", horizon: "sharp",
    title: "Approximate hardness of random-circuit sampling",
    statement: r`Consider $n$ qubits on a square grid, with $n^3$ layers cycling through the four horizontal/vertical even/odd matchings and independent Haar-random two-qubit gates. Prove that a polynomial-time classical sampler within total-variation distance $1/n$ of the ideal output on at least a $1-1/n$ fraction of these circuits would collapse the polynomial hierarchy, using only standard worst-case complexity assumptions.`,
    context: r`The ideal experiment prepares the all-zero state and measures the output in the computational basis. For finite input, each sampled gate is specified to operator-norm precision $2^{-n^3}$ using polynomially many bits. This deliberately deep benchmark fixes the ensemble, precision, error and success fraction; a shallower depth or a constant-error theorem is a distinct stronger target.

What is known: Bouland–Fefferman–Nirkhe–Vazirani give worst-to-average reductions for exact output probabilities. Movassagh's Cayley-path approach strengthens robustness at high precision. Anticoncentration is available for suitable sufficiently deep ensembles. The missing ingredient is hardness at an approximation scale strong enough for the total-variation sampling reduction, not exact arithmetic alone.

Noisy experimental output distributions are separate targets. Classical simulation results at constant noise strength have assumptions on the noise, depth, circuit ensemble and approximation criterion; they are not a universal theorem for every noisy quantum circuit. The question above is for ideal circuits. Related: A12, A11.`,
    relations: [{ id: "A12", type: "related" }, { id: "A11", type: "related" }],
    refs: [
      { label: "Bouland, Fefferman, Nirkhe & Vazirani, 'On the complexity and verification of quantum random circuit sampling', Nat. Phys. 15 (2019)", url: "https://arxiv.org/abs/1803.04402" },
      { label: "Movassagh, 'The hardness of random quantum circuits', Nat. Phys. 19 (2023)", url: "https://arxiv.org/abs/1909.06210" },
    ] },

  { id: "A14", cat: "complexity", horizon: "sharp",
    title: "Graph isomorphism in BQP",
    statement: r`Does graph isomorphism on $n$-vertex graphs admit a uniform polynomial-time bounded-error quantum algorithm?`,
    context: r`Graph isomorphism is in NP, with neither a polynomial-time classical algorithm nor NP-completeness known. Babai's quasipolynomial-time classical algorithm is the comparison baseline, not a proof that a polynomial-time quantum algorithm is unnecessary or impossible.

The hidden-subgroup route uses permutation groups. Hallgren–Moore–Rötteler–Russell–Sen show that extracting useful information from the relevant coset states requires joint measurements on $\Omega(n\log n)$ states, matching an information-theoretic upper bound. This excludes single- and few-register approaches in that model. It does not prove that every sufficiently joint measurement has superpolynomial implementation complexity, or that all quantum approaches fail.

Archival correction (September 2026): Li–Chen withdrew their 2019 claimed polynomial-time quantum algorithm after substantial errors were found. The withdrawal supplies no positive evidence for GI in BQP and does not change the open status. Related: A15.`,
    relations: [{ id: "A15", type: "related" }],
    refs: [
      { label: "Hallgren, Moore, Rötteler, Russell & Sen, 'Limitations of quantum coset states for graph isomorphism', J. ACM 57 (2010)", url: "https://www.cse.psu.edu/~sjh26/multireg.pdf" },
      { label: "Babai, 'Graph isomorphism in quasipolynomial time', STOC 2016", url: "https://arxiv.org/abs/1512.03547" },
      { label: "Li & Chen, 'The quantum algorithm for graph isomorphism problem' (withdrawn; September 2026 notice)", url: "https://arxiv.org/abs/1901.06530v2" },
    ] },

  { id: "A15", cat: "complexity", horizon: "programme",
    title: "Quantum complexity of specified lattice regimes",
    statement: r`Determine the quantum running-time frontier for search and decision LWE with explicitly specified dimension $n$, modulus $q$, error distribution and sample access, and for SVP/CVP with stated approximation factor. A focal LWE regime has polynomial modulus and inverse-polynomial relative Gaussian error; hardness must be assessed for each concrete parameter family.`,
    context: r`LWE samples have the form $(a,\langle a,s\rangle+e\bmod q)$; decision distinguishes these from uniform, while search recovers the secret. The noise width, modulus, number of samples and algebraic structure are part of the problem. Plain LWE, module/ring variants, and worst-case approximate lattice problems should not be treated as interchangeable.

What is known: Regev's reduction relates suitable LWE regimes to worst-case approximate lattice problems using quantum computation. It is a conditional hardness reduction, not a quantum algorithm breaking LWE. Known quantum techniques can improve exponential running-time constants, so “no quantum improvement” would be too strong; such improvements are different from a polynomial-time algorithm.

Chen's 2024 claimed polynomial-time quantum LWE algorithm developed an acknowledged error and is not an established attack. Security conclusions require the exact parameter family and reduction; this catalogue does not infer the safety or failure of deployed cryptographic schemes from the unresolved broad programme. Related: A2, A14.`,
    relations: [{ id: "A2", type: "related" }, { id: "A14", type: "related" }],
    refs: [
      { label: "Regev, 'On lattices, learning with errors, random linear codes, and cryptography', J. ACM 56 (2009; arXiv deposit 2024)", url: "https://arxiv.org/abs/2401.03703" },
      { label: "Chen, 'Quantum Algorithms for Lattice Problems' (2024 claim; error notice)", url: "https://eprint.iacr.org/2024/583" },
    ] },

  { id: "A16", cat: "complexity", horizon: "programme", status: "improved",
    archive: { kind: "merged", targets: ["A11"], reason: "The precise query-simulation conjecture and bounded-round advances are consolidated in A11. The remaining model-comparison discussion is retained as methods background, not a second independently counted problem." },
    title: "Comparing quantum speedups: models and query structure",
    statement: r`Methods background: compare algorithms only after fixing input preparation, data access, allowed oracle queries, output format, accuracy, success probability and computational resources. The concrete open influential-variable question is A11.`,
    context: r`Aaronson's “Read the fine print” explains the role of state preparation, condition numbers and readout in proposed linear-algebra speedups. Tang's classical recommendation algorithm shows how granting analogous classical sampling access can remove a claimed exponential advantage in that specific model. These examples motivate explicit resource accounting, not a universal test for all future quantum algorithms.

Historical progress retained from August 2026: Blanc–Docter–Strassle–Tan simulate acceptance probabilities of $t$-query, $d$-round quantum algorithms on most uniformly random inputs using $t^{O(d^2)}$ classical queries at fixed errors. Liu–Mutreja independently establish constant-round and limited-adaptivity results. Here “round” means parallel oracle-query round, not arbitrary physical gate depth. The results do not simulate every output distribution or every worst-case input.

The full statements, current open conjecture and author-reported disclosures are recorded under A11. This entry remains addressable to preserve context and old links. Related: A1, A11, N10.`,
    relations: [{ id: "A11", type: "parent" }, { id: "A1", type: "related" }, { id: "N10", type: "related" }],
    refs: [
      { label: "Tang, 'A quantum-inspired classical algorithm for recommendation systems', STOC 2019", url: "https://arxiv.org/abs/1807.04271" },
      { label: "Aaronson, 'Read the fine print', Nat. Phys. 11 (2015)", url: "https://doi.org/10.1038/nphys3272" },
      { label: "Blanc, Docter, Strassle & Tan, 'Quantum Speedups Require Structure or Depth' (2026 preprint; FOCS 2026)", url: "https://arxiv.org/abs/2608.19158v1" },
      { label: "Liu & Mutreja, 'Parallel Quantum Advantage with Limited Adaptivity Requires Structure' (2026 preprint)", url: "https://arxiv.org/abs/2608.20297v1" },
    ] },

  { id: "A17", cat: "complexity", horizon: "incremental", status: "improved",
    reviewedAt: "2026-09-10",
    title: "Quantum state certification with local measurements",
    statement: r`Given a full classical description of an arbitrary reference state $\sigma$ and copies of an unknown $N$-qubit state $\rho$, determine the optimal copy complexity of testing $\rho=\sigma$ versus $\|\rho-\sigma\|_1\ge\varepsilon$, with success at least $2/3$, using adaptive single-qubit Pauli measurements and no entangling measurements within or across copies. Seek matching instance-dependent bounds and the accompanying classical running time.`,
    context: r`A full reference-state description can itself be exponentially long in $N$; computational costs must count its input length. Rank, spectrum and the reference eigenbasis relative to the allowed local measurements can matter. This concrete certification target is distinct from estimating an unknown state's spectral functional or learning many observable expectations.

What is known: Haah–Harrow–Ji–Wu–Yu establish sample-optimal tomography bounds in their collective-measurement model (IEEE TIT 63, 2017). August 2026 preprints refine restricted models: Wang's framework gives nearly tight lower bounds for a broad collection of spectral-functional tasks, while Acharya–Dharmavarapu–Liu–Yu nearly determine mixedness testing under single-qubit Pauli measurements, with $\widetilde\Theta((\sqrt{10})^N/\varepsilon^2)$ copies. The maximally mixed reference is a benchmark, not a solution for every reference state or measurement trade-off.

A neighbouring August preprint by Stempin–Llorens–Huber disproves the fractional-colouring conjecture proposed as a route to universal triply efficient Pauli shadow tomography. It rules out that route, not every possible algorithm. Its front matter explicitly credits GPT Sol 5.6 with contributions to Theorems A and B; the previous no-disclosure statement was incorrect. Related: E3, A11.

Adjacent tomography benchmarks (4–9 September 2026, v1): Keskin, Luo, Majid and Radzihovsky claim the tight arbitrary-state copy bound $\Theta(\max\{d^3/(\sqrt{k}\varepsilon^2),d^2/\varepsilon^2\})$ when measurements act on at most $k$ fresh copies, with classical adaptivity but no quantum memory between blocks. Nayak and Zhou claim the rank-$r$ refinement $\Theta((dr/\varepsilon^2)\max\{1,r/\sqrt{t}\})$ with at most $t$ jointly measured copies, for sufficiently small error and constant success probability. These permit entangling measurements and reconstruct an unknown state; neither settles arbitrary-reference certification with single-qubit Pauli measurements.

A separate 9 September preprint by Zhang et al. gives shallow phase shadows for stabilizer-state fidelity estimation. Its constant-depth implementation assumes all-to-all connectivity, mid-circuit measurements and classical feedforward; without auxiliary systems the stated depth is logarithmic. Its entangling readout and restricted observables do not remove A17's measurement restrictions or the earlier obstruction to a universal Pauli-shadow route.`,
    evidence: [
      { kind: "preprint", summary: "Matching tomography lower bound for adaptive fresh-copy blocks with no quantum memory between blocks; entangling block measurements are allowed.", url: "https://arxiv.org/abs/2609.05718v1", date: "2026-09-04", version: "v1" },
      { kind: "preprint", summary: "Claimed optimal rank-dependent tomography rate with bounded-copy joint measurements; not single-qubit Pauli certification.", url: "https://arxiv.org/abs/2609.10514v1", date: "2026-09-09", version: "v1" },
      { kind: "preprint", summary: "Stabilizer-fidelity estimation with entangling readout; constant depth uses all-to-all connectivity, auxiliary resources, mid-circuit measurements and feedforward.", url: "https://arxiv.org/abs/2609.10408v1", date: "2026-09-09", version: "v1" },
      { kind: "preprint", summary: "Lower-bound framework for multiple quantum spectral-functional estimation tasks; task-specific hypotheses still apply.", url: "https://arxiv.org/abs/2608.02600v2", version: "v2" },
      { kind: "preprint", summary: "Nearly tight single-qubit Pauli mixedness-testing copy complexity; arbitrary-reference certification remains a separate target.", url: "https://arxiv.org/abs/2608.18839v1", version: "v1" },
      { kind: "preprint", summary: "Counterexamples close the proposed universal fractional-colouring route to triply efficient Pauli shadow tomography.", url: "https://arxiv.org/abs/2608.20113v1", version: "v1" },
    ],
    provenance: [
      { summary: "Keskin and coauthors report GPT-5.6 Sol through OpenAI Codex assistance with the main ideas and proof strategies. They state that they refined and verified the material and take responsibility for claims, proofs and citations.", url: "https://arxiv.org/html/2609.05718v1", version: "v1" },
      { summary: "Nayak and Zhou report GPT-5.5 and GPT-5.6 Sol assistance with crucial Fisher-information lemmas and a Gaussian reformulation of earlier upper-bound algorithms. They attribute the rank-dependent analysis to themselves and state that they independently verified all arguments and references.", url: "https://arxiv.org/html/2609.10514v1", version: "v1" },
      { summary: "Wang reports ChatGPT 5.5/5.6 assistance with proof exploration and calculations, with substantial human input and author responsibility.", url: "https://arxiv.org/abs/2608.02600v2", version: "v2" },
      { summary: "Stempin, Llorens and Huber explicitly report GPT Sol 5.6 contributions to their principal results, Theorems A and B, and say they verified and contextualized them. This corrects the former assertion that no declaration was present.", url: "https://arxiv.org/html/2608.20113v1", version: "v1" },
    ],
    relations: [{ id: "E3", type: "related" }, { id: "A11", type: "related" }],
    refs: [
      { label: "Keskin, Luo, Majid & Radzihovsky, 'Tight Lower Bounds for State Tomography with Limited Entanglement' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.05718v1" },
      { label: "Nayak & Zhou, 'Optimal Low-Rank Quantum State Tomography with Bounded-Sample Joint Measurements' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.10514v1" },
      { label: "Zhang, You, Qin, Li, Eisert & Zhou, 'Constant-depth global shadow estimation' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.10408v1" },
      { label: "Haah, Harrow, Ji, Wu & Yu, 'Sample-optimal tomography of quantum states', IEEE Trans. Inf. Theory 63 (2017)", url: "https://arxiv.org/abs/1508.01797" },
      { label: "Wang, 'A Lower Bound Framework for Quantum Functional Estimation' (2026 preprint)", url: "https://arxiv.org/abs/2608.02600v2" },
      { label: "Acharya, Dharmavarapu, Liu & Yu, 'Quantum Mixedness Testing with Pauli Measurements' (2026 preprint)", url: "https://arxiv.org/abs/2608.18839v1" },
      { label: "Stempin, Llorens & Huber, 'Counterexamples to the fractional coloring conjecture for triply efficient shadow tomography' (2026 preprint)", url: "https://arxiv.org/abs/2608.20113v1" },
    ] },

  { id: "A18", cat: "complexity", horizon: "programme", status: "improved",
    title: "Fault tolerance with budgeted correlated noise",
    statement: r`For explicitly budgeted spatially/temporally correlated or adversarial noise, establish fault-tolerance thresholds and space-time overhead bounds for two- or three-dimensional local architectures. Specify local dimension, strength/correlation or per-step corruption budget, logical width and depth, total failure probability $\varepsilon$, and classical decoding time; aim for qubit implementations with useful constants.`,
    context: r`Threshold theorems cover local stochastic noise and several non-Markovian models with quantitative locality or norm bounds. Unrestricted adversarial noise is not correctable. The open programme is to identify which bounded correlations remain tolerable while keeping geometry, decoding and total overhead implementable.

August 2026 preprint: Breuckmann–Golowich–Vazirani allow a globally correlated adversary to corrupt up to $N^{1-o(1)}$ physical qudits per time step. Their construction uses polynomial space, subpolynomial multiplicative depth overhead and, after recursive composition, constant local dimension. Reducing an unbounded alphabet is therefore not the remaining generic problem; small-qubit architectures, quantitative constants and space overhead are.

Bharti–Haug–Tanggara's preprint gives a logarithmic reliability contribution to memory space-time cost: fixed small logical registers and sufficiently wide amortized computations have different relative-overhead conclusions. Gong–Hu's self-calibration theorem applies to their structured control-error and local-convexity setting, not all correlated noise.

Decoding milestones also need model labels. Bazzi–Khater prove additive inapproximability for minimum-weight Pauli decoding of surface/toric codes under depolarizing noise, and separate X/Z decoding for their colour-code setting; this does not make the usual independent-error surface-code matching problem NP-hard. Krishnamoorthy et al. express CSS degenerate maximum-likelihood decoding through partition functions and give statistical certificates, or exact certificates when suitable estimators are available. Neither supplies an unconditional efficient optimal decoder for every CSS code. Related: A6, A7, O5.`,
    evidence: [
      { kind: "preprint", summary: "Adversarial fault tolerance with per-step corruption budget, polynomial space and constant alphabet after recursion.", url: "https://arxiv.org/abs/2608.16857v1", date: "2026-08-17", version: "v1" },
      { kind: "preprint", summary: "Memory reliability lower bound; fixed-width overhead and wide-register amortization must be distinguished.", url: "https://arxiv.org/abs/2608.26272v1", date: "2026-08-26", version: "v1" },
      { kind: "preprint", summary: "Efficient syndrome-based calibration in the stated control-error model and local-convexity regime.", url: "https://arxiv.org/abs/2608.05686v2", date: "2026-08-20", version: "v2" },
      { kind: "preprint", summary: "Minimum-weight decoding inapproximability for specific code/noise models; not a hardness result for independent-X/Z surface-code matching.", url: "https://arxiv.org/abs/2608.17109v3", date: "2026-08-25", version: "v3" },
      { kind: "preprint", summary: "Statistical decoding certification and estimator-dependent exact certificates; no universal fast optimal-decoding theorem.", url: "https://arxiv.org/abs/2608.25545v1", date: "2026-08-26", version: "v1" },
    ],
    provenance: [
      { summary: "Breuckmann et al. report that proofs and writing are their own, with ChatGPT used for final-draft typographical and presentation checks.", url: "https://arxiv.org/abs/2608.16857v1", version: "v1" },
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
      { label: "Breuckmann, Golowich & Vazirani, 'Fault-Tolerant Quantum Computation with Adversarial Errors' (2026 preprint)", url: "https://arxiv.org/abs/2608.16857v1" },
      { label: "Bharti, Haug & Tanggara, 'Fault-tolerant quantum computation cannot be achieved with constant spacetime overhead' (2026 preprint)", url: "https://arxiv.org/abs/2608.26272v1" },
      { label: "Gong & Hu, 'Provably Efficient Self-Calibrating Quantum Fault Tolerance' (2026 preprint)", url: "https://arxiv.org/abs/2608.05686v2" },
      { label: "Bazzi & Khater, 'Hardness of approximation for minimum-weight decoding of two-dimensional topological quantum codes' (2026 preprint)", url: "https://arxiv.org/abs/2608.17109v3" },
      { label: "Krishnamoorthy et al., 'Certified decoding of quantum LDPC codes' (2026 preprint)", url: "https://arxiv.org/abs/2608.25545v1" },
    ] },

  { id: "A19", cat: "complexity", horizon: "sharp",
    title: "Noncryptographic classical verification of BQP",
    statement: r`Does every BQP decision problem admit an interactive proof with one polynomial-time honest quantum prover and a probabilistic polynomial-time classical verifier, using polynomially many rounds of classical messages, completeness at least $2/3$ and soundness at most $1/3$ against an unrestricted cheating prover? Require no computational hardness assumption, trusted quantum setup or additional noncommunicating prover.`,
    context: r`The verifier must be genuinely classical and the honest prover efficient. The inclusion $\mathsf{BQP}\subseteq\mathsf{IP}=\mathsf{PSPACE}$ alone does not provide an efficient honest prover. Conversely, a protocol sound only against efficient quantum cheats does not meet the information-theoretic soundness target stated here.

Mahadev's classical-verification protocol is a landmark positive result with computational soundness under a quantum-hard lattice assumption. Protocols with a small trusted quantum verifier or multiple separated provers solve different resource models.

An April 2026 preprint by Aaronson–Natarajan–Tal–Villanyi proves $\mathsf{BQP}^{O}\subseteq\mathsf{MIP}^{O}$ for every classical oracle $O$. It is progress in a relativized multi-prover model and explicitly motivates noncryptographic verification, but does not construct the single efficient prover protocol sought here. Related: A1, A3, A10.`,
    evidence: [
      { kind: "published", summary: "Mahadev achieves classical verification with computational soundness under a lattice hardness assumption; the assumption-free target is stronger.", url: "https://arxiv.org/abs/1804.01082" },
      { kind: "preprint", summary: "Relativizing multi-prover containment for BQP with classical oracles, not efficient single-prover noncryptographic verification.", url: "https://arxiv.org/abs/2604.11952v1", date: "2026-04-13", version: "v1" },
    ],
    relations: [{ id: "A1", type: "related" }, { id: "A3", type: "related" }, { id: "A10", type: "related" }],
    refs: [
      { label: "Mahadev, 'Classical Verification of Quantum Computations', FOCS 2018", url: "https://arxiv.org/abs/1804.01082" },
      { label: "Aaronson, Natarajan, Tal & Villanyi, 'A Relativizing MIP for BQP' (2026 preprint)", url: "https://arxiv.org/abs/2604.11952v1" },
    ] },
];
