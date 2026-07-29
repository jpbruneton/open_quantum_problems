const r = String.raw;

export const COMPLEXITY = [
  { id: "A1", cat: "complexity", horizon: "programme",
    title: "BQP versus classical computation",
    statement: r`Prove an unrelativized separation such as $\mathsf{BPP}\neq\mathsf{BQP}$, or characterize exactly which classical complexity class captures efficient quantum computation.`,
    context: r`BQP is the class of problems efficiently solvable by a quantum computer. Whether it strictly exceeds classical efficient computation (BPP) is the foundational question of quantum complexity — but proving $\mathsf{BPP}\neq\mathsf{BQP}$ unconditionally would imply $\mathsf{P}\neq\mathsf{PSPACE}$ (since $\mathsf{BQP}\subseteq\mathsf{PSPACE}$), a separation far beyond current techniques.

What is known: We have oracle separations and strong evidence but no unconditional theorem. Relative to an oracle, BQP is separated from the classical polynomial hierarchy: Raz–Tal (2019) proved an oracle separation between BQP and PH, building on Aaronson's Forrelation. Bernstein–Vazirani gave the first oracle evidence (recursive Fourier sampling), and Simon's/Shor's algorithms give exponential black-box speedups. Conditional evidence (factoring is in BQP but believed not in BPP) underlies practical belief that BQP is larger.

An unrelativized separation, or a precise characterization of the classical class capturing BQP, is a long-horizon programme entangled with the hardest questions in complexity theory. Related: A2.`,
    refs: [
      { label: "Bernstein & Vazirani, 'Quantum complexity theory', SIAM J. Comput. 26 (1997)" },
      { label: "Raz & Tal, 'Oracle separation of BQP and PH', STOC 2019" },
    ] },

  { id: "A2", cat: "complexity", horizon: "sharp",
    title: "NP versus BQP",
    statement: r`Determine whether $\mathsf{NP}\subseteq\mathsf{BQP}$ — in particular whether quantum computers can solve NP-complete problems in polynomial time.`,
    context: r`Can quantum computers efficiently solve NP-complete problems? The widespread belief is no: quantum computers are not thought to give exponential speedups for generic search or NP-complete problems.

What is known: The main rigorous evidence is the BBBV theorem (Bennett–Bernstein–Brassard–Vazirani): relative to a random oracle, unstructured search requires $\Omega(\sqrt{2^n})$ quantum queries, matching Grover's quadratic speedup and ruling out a black-box exponential quantum algorithm for NP-type search. So any quantum algorithm beating this must exploit problem structure. There is no proof either way in the unrelativized setting — $\mathsf{NP}\subseteq\mathsf{BQP}$ is not excluded, but no NP-complete problem is known to be in BQP.

Because $\mathsf{NP}\subseteq\mathsf{BQP}$ is not known to imply an implausible collapse in the same clean way as some other separations, this is stated as a sharp open question, though a full resolution likely requires major complexity-theoretic advances. Related: A1, A15.`,
    refs: [
      { label: "Bennett, Bernstein, Brassard, Vazirani, 'Strengths and weaknesses of quantum computing', SIAM J. Comput. 26 (1997)" },
      { label: "Aaronson, 'Quantum Computing Since Democritus' (CUP, 2013)" },
    ] },

  { id: "A3", cat: "complexity", horizon: "sharp",
    title: "QMA versus QCMA",
    statement: r`Determine whether quantum witnesses are strictly more powerful than classical witnesses for polynomial-time quantum verification: $\mathsf{QMA}\stackrel{?}{=}\mathsf{QCMA}$.`,
    context: r`QMA is the quantum analogue of NP with a quantum proof and a quantum verifier; QCMA restricts the proof to be classical (a bit string) while keeping the quantum verifier. Whether a quantum witness is ever genuinely more useful than a classical one is the QMA-vs-QCMA question.

What is known: Only oracle separations. Aaronson–Kuperberg gave a quantum-oracle separation, and Fefferman–Kimmel a 'randomized-oracle'/in-place separation. A major recent advance: Natarajan–Nirkhe and, independently, Ben-David–Kothari–et al. lines of work produced classical-oracle separations between QMA and QCMA (2022–2024), long sought, showing quantum proofs help relative to a classical oracle. These strongly suggest $\mathsf{QMA}\neq\mathsf{QCMA}$.

The unrelativized question is open. Resolving it bears on whether ground-state 'certificates' fundamentally require quantum information. This is a sharp yes/no problem. Related: A4, A5.`,
    refs: [
      { label: "Aaronson & Kuperberg, 'Quantum versus classical proofs and advice', Theory of Computing 3 (2007)" },
      { label: "Natarajan & Nirkhe, 'A classical oracle separation between QMA and QCMA', (2022/2024)" },
    ] },

  { id: "A4", cat: "complexity", horizon: "sharp",
    title: "Perfect completeness for QMA",
    statement: r`Determine whether $\mathsf{QMA}_1=\mathsf{QMA}$.`,
    context: r`QMA allows two-sided error; $\mathsf{QMA}_1$ demands perfect completeness (accept valid proofs with probability exactly 1). Whether these are equal asks if the completeness error can always be removed — analogous to classical results where such errors are removable, but subtler quantumly because it interacts with the gate set.

What is known: The answer depends on the model. With a quantum oracle (or over exact/algebraically-closed gate sets), QMA = QMA₁ can be shown, and Kobayashi–Le Gall–Nishimura and others gave error-reduction and gate-set results. But Aaronson constructed a classical oracle relative to which $\mathsf{QMA}_1\neq\mathsf{QMA}$, showing perfect completeness is not achievable by relativizing techniques. The difficulty is genuinely tied to whether the finite gate set can implement projections exactly. Quantum-Merlin problems like the 'quantum k-SAT' problem (Bravyi) are naturally QMA₁-complete, giving the class independent significance.

The unrelativized question is open. This is a sharp problem. Related: A3, A8.`,
    refs: [
      { label: "Aaronson, 'On perfect completeness for QMA', Quantum Inf. Comput. 9 (2009)" },
      { label: "Kobayashi, Le Gall, Nishimura, 'Stronger methods of making quantum interactive proofs perfectly complete', SIAM J. Comput. 44 (2015)" },
    ] },

  { id: "A5", cat: "complexity", horizon: "sharp", status: "improved",
    title: "Multiple unentangled quantum proofs",
    statement: r`Determine whether $\mathsf{QMA}(2)=\mathsf{QMA}$, or whether two unentangled witnesses strictly increase verification power.`,
    context: r`QMA(2) is QMA with two proofs guaranteed to be unentangled with each other. Surprisingly, this promise of unentanglement can seemingly add power, because the verifier can rely on the product structure. Whether $\mathsf{QMA}(2)=\mathsf{QMA}$ is a central open problem.

What is known: QMA(k) collapses to QMA(2) for any $k\ge2$ (Harrow–Montanaro), so two provers capture the whole hierarchy. QMA(2) admits surprisingly short proofs for some problems — Blier–Tapp and Aaronson et al. showed NP-complete problems have QMA(2) proofs of only polylogarithmic-ish or $\tilde O(\sqrt n)$ size, hinting QMA(2) may be strictly stronger than QMA. The best known upper bound is $\mathsf{QMA}(2)\subseteq\mathsf{NEXP}$; even $\mathsf{QMA}(2)\subseteq\mathsf{EXP}$ is not known, a striking gap. The difficulty is the best separable-state optimization, tied to the hardness of detecting entanglement (E3).

New progress (2026): Beckey, Jeronimo and Wu determined the exact worst-case acceptance curve of the multipartite product test for every product overlap and arbitrary finite local dimensions. Besides resolving the previously open low-overlap regime, the result improves the one-shot soundness of the Harrow–Montanaro reduction from $\mathsf{QMA}(k)$ to $\mathsf{QMA}(2)$. It sharpens a central verification tool but does not settle whether unentangled witnesses add computational power.

**Authors' statement (unverified):** According to the disclosure, ChatGPT 5.5 Pro would have helped explore the analysis, ChatGPT and Claude would have assisted with writing, and Codex would have supported an exploratory Lean auto-formalization. The authors say they rewrote and revised the exposition and citations, performed human verification, and take responsibility for the final manuscript.

Whether QMA(2) equals QMA, or lies strictly between QMA and NEXP, is wide open. Sharp problem. Related: A3, E3.`,
    refs: [
      { label: "Harrow & Montanaro, 'Testing product states, quantum Merlin-Arthur games and tensor optimization', J. ACM 60 (2013)" },
      { label: "Aaronson, Beigi, Drucker, Fefferman, Shor, 'The power of unentanglement', Theory of Computing 5 (2009)" },
      { label: "Beckey, Jeronimo & Wu, 'An Optimal Analysis of the Product Test' (2026)", url: "https://arxiv.org/abs/2607.21477" },
    ] },

  { id: "A6", cat: "complexity", horizon: "sharp",
    title: "Quantum PCP conjecture",
    statement: r`Prove or disprove that approximating the ground-state energy of a local Hamiltonian to constant extensive precision is $\mathsf{QMA}$-hard.`,
    context: r`The classical PCP theorem — that approximating MAX-SAT to a constant factor is NP-hard — revolutionized complexity and approximation. The quantum PCP conjecture is its analogue: that estimating the ground-state energy density of a local Hamiltonian to within a constant (extensive) error is QMA-hard, implying no efficient classical description of approximate ground states in general.

What is known: The exact ground-state energy problem is QMA-complete (Kitaev's local Hamiltonian theorem, refined by Kempe–Kitaev–Regev, Oliveira–Terhal to 2D/qubits). Approximation hardness is the open part. A key necessary ingredient — the NLTS (No Low-Energy Trivial States) conjecture, that there exist local Hamiltonians all of whose low-energy states have nontrivial (long-range) entanglement — was proved by Anshu–Breuckmann–Nirkhe in 2022, using good quantum LDPC codes. This is regarded as major progress toward, though not a proof of, quantum PCP. Gap-amplification (the quantum analogue of Dinur's proof) faces genuine obstructions from entanglement.

The full quantum PCP conjecture remains open — a defining sharp problem of Hamiltonian complexity. Related: A7, A8.`,
    refs: [
      { label: "Aharonov, Arad, Vidick, 'Guest column: the quantum PCP conjecture', ACM SIGACT News 44 (2013)" },
      { label: "Anshu, Breuckmann, Nirkhe, 'NLTS Hamiltonians from good quantum codes', STOC 2023" },
    ] },

  { id: "A7", cat: "complexity", horizon: "sharp",
    title: "Good quantum locally testable codes",
    statement: r`Construct, or rule out, quantum locally testable codes with simultaneously constant rate, linear distance and constant soundness under bounded-weight checks.`,
    context: r`A locally testable code (LTC) admits a test reading few symbols that rejects far-from-codeword strings with probability proportional to their distance. Classically, good LTCs (constant rate, linear distance, constant soundness) were recently constructed. The quantum analogue (qLTC) is a natural stepping stone toward the quantum PCP conjecture, since a quantum PCP would essentially require qLTC-like soundness.

What is known: The related but distinct goal of good quantum LDPC codes — constant rate and linear distance — was achieved in a breakthrough by Panteleev–Kalachev (2022) and independently via the fiber-bundle/balanced-product constructions (Breuckmann–Eberhardt; Leverrier–Zémor), and these underpin the NLTS theorem (A6). But local testability is a stronger, different property: it demands robust soundness, not just good code parameters. Aharonov–Eldar and Eldar–Harrow studied qLTCs and the 'no low-energy sampleable states' angle; current qLTCs have vanishing soundness or rate.

Whether good quantum LTCs exist — with constant rate, linear distance, and constant soundness under bounded-weight checks — is open, and either a construction or an impossibility result would be significant. Related: A6.`,
    refs: [
      { label: "Panteleev & Kalachev, 'Asymptotically good quantum and locally testable classical LDPC codes', STOC 2022" },
      { label: "Eldar & Harrow, 'Local Hamiltonians whose ground states are hard to approximate', FOCS 2017" },
    ] },

  { id: "A8", cat: "complexity", horizon: "sharp",
    title: "Commuting local Hamiltonian problem",
    statement: r`Determine the complexity of the commuting local Hamiltonian problem for general fixed local dimension and interaction geometry, and whether all cases admit succinct classical witnesses.`,
    context: r`The commuting local Hamiltonian (CLH) problem restricts the local Hamiltonian problem to terms that pairwise commute. Commuting terms have a simultaneous eigenbasis, so intuitively the ground energy might be classically certifiable (in NP) — yet the frustration among overlapping commuting terms can encode topological order (toric code), making the complexity subtle.

What is known: Many cases are in NP. Bravyi–Vyalyi proved the 2-local CLH problem is in NP (any local dimension). Aharonov–Eldar, Schuch, and Aharonov–Kenneth–Vigdorovich extended NP membership to qubits with 3- and 4-local terms and to certain qudit and geometric cases, using structure theory of commuting projectors and the toric-code-like decompositions. Hastings and Irani–Jordan-adjacent work map the boundary.

Whether the general CLH problem (higher locality, higher local dimension, general geometry) is in NP, is QMA-complete, or something in between, is open. A proof that all CLH instances are in NP would be a clean structural result; a QMA-hardness proof would be surprising given the commuting structure. Sharp problem. Related: A4, A6.`,
    refs: [
      { label: "Bravyi & Vyalyi, 'Commutative version of the local Hamiltonian problem and common eigenspace problem', Quantum Inf. Comput. 5 (2005)" },
      { label: "Aharonov, Kenneth, Vigdorovich, 'On the complexity of two dimensional commuting local Hamiltonians', TQC 2018" },
    ] },

  { id: "A9", cat: "complexity", horizon: "incremental", status: "improved",
    title: "Stoquastic Hamiltonian complexity",
    statement: r`Determine the relation between $\mathsf{StoqMA}$, $\mathsf{MA}$ and related classical classes; in particular settle whether general error amplification is possible for $\mathsf{StoqMA}$.`,
    context: r`Stoquastic Hamiltonians (nonpositive off-diagonal elements) are sign-problem-free and physically ubiquitous (bosonic, ferromagnetic, transverse-field Ising). Their ground-state energy problem defines the class StoqMA, sitting between MA and QMA: $\mathsf{MA}\subseteq\mathsf{StoqMA}\subseteq\mathsf{QMA}$ (and within $\mathsf{SBP}\subseteq\mathsf{AM}$).

What is known: Bravyi–DiVincenzo–Oliveira–Terhal introduced StoqMA and showed the stoquastic local Hamiltonian problem is StoqMA-complete. StoqMA has unusual features: it is not known to be closed under error amplification (the completeness–soundness gap cannot obviously be boosted), unlike QMA and MA, which is a genuine structural obstruction. Aharonov–Grilo and others related StoqMA to approximate counting and to the polynomial hierarchy, and Aharonov–Grilo–Liu studied whether StoqMA = MA. Adiabatic quantum computation with stoquastic Hamiltonians and the sign problem (B11) are directly connected.

New progress (2026): Karakashian and Hen proposed vanishing geometric phase (VGP), a condition on the Hamiltonian transition graph, as a broader computational boundary than literal stoquasticity. They construct VGP 3-local Hamiltonians that are hard to stoquastize, prove VGP local Hamiltonian StoqMA-complete and its frustration-free variant in MA, identify natural polynomial-time recognizable VGP families, and show that recognizing VGP is PSPACE-complete in general for geometrically local Hamiltonians. This refines the structural landscape without resolving $\mathsf{MA}$ versus $\mathsf{StoqMA}$ or error amplification.

**Authors' statement (unverified):** The manuscript contains no disclosure of generative-AI use and thanks Milad Marvian and Michael Jarret for discussions. In the absence of a declaration, the work would appear human-authored, but this catalogue cannot independently establish that no AI tools were used.

Pinning down StoqMA's exact relationship to MA and the classical hierarchy, and whether error amplification is possible, are open incremental problems. Related: B11.`,
    refs: [
      { label: "Bravyi, DiVincenzo, Oliveira, Terhal, 'The complexity of stoquastic local Hamiltonian problems', Quantum Inf. Comput. 8 (2008)" },
      { label: "Aharonov & Grilo, 'Stoquastic PCP vs. randomness', FOCS 2019" },
      { label: "Karakashian & Hen, 'Dismantling the Stoquastic Dichotomy' (2026)", url: "https://arxiv.org/abs/2607.18596" },
    ] },

  { id: "A10", cat: "complexity", horizon: "sharp",
    title: "Quantum search-to-decision reductions",
    statement: r`Determine whether an accepting quantum witness can be prepared efficiently using only polynomially many queries to a decision oracle for the corresponding QMA problem.`,
    context: r`Classically, search reduces to decision for NP: given an oracle deciding SAT, one can efficiently construct a satisfying assignment bit by bit. The quantum analogue asks whether, given an oracle deciding a QMA problem, one can efficiently prepare an accepting quantum witness (a state). Quantum witnesses are states, not strings, so the classical bit-by-bit approach fails.

What is known: Irani–Natarajan–Nirkhe–Rao–Yuen (CCC 2022) studied this and showed that state synthesis / search-to-decision for QMA is subtle: they gave results on the complexity of preparing witness states and connected it to the broader 'state synthesis' problem (which states can be prepared with what resources), introducing the class stateQMA and related notions (Rosenthal–Yuen and follow-ups). Some conditional and oracle results are known, and the general problem is tied to whether quantum states with certain verifiable properties can be efficiently constructed.

Whether general QMA search reduces to QMA decision with polynomially many queries is open — a sharp structural question about the nature of quantum proofs. Related: A3.`,
    refs: [
      { label: "Irani, Natarajan, Nirkhe, Rao, Yuen, 'Quantum search-to-decision reductions and the state synthesis problem', CCC 2022" },
      { label: "Rosenthal & Yuen, 'Interactive proofs for synthesizing quantum states and unitaries', ITCS 2022" },
    ] },

  { id: "A11", cat: "complexity", horizon: "sharp",
    title: "Aaronson–Ambainis conjecture",
    statement: r`Prove that every bounded low-degree polynomial on the Boolean cube has an influential variable of polynomially bounded influence, with consequences for classical simulation of quantum query algorithms on most inputs.`,
    context: r`The Aaronson–Ambainis conjecture is a clean statement in the analysis of Boolean functions: every bounded polynomial $p:\{0,1\}^n\to[0,1]$ of degree $d$ has a variable with influence at least $\mathrm{poly}(\mathrm{Var}(p)/d)$. Its motivation is quantum: bounded quantum query algorithms compute (approximately) low-degree bounded polynomials of the input.

What is known: The conjecture would imply that any $T$-query quantum algorithm can be classically simulated using $\mathrm{poly}(T)$ queries on 'most' inputs — i.e. no super-polynomial quantum speedup for total functions in the average/typical-input sense. It generalizes and is implied by structural results on decision trees and polynomials; partial cases and weaker bounds are known (e.g. via the work of Dinur–Friedgut–Kindler–O'Donnell on low-degree functions, and connections to the KKL theorem). Montanaro and others reformulated it and gave evidence.

The full conjecture is open, and it is one of the cleanest concrete analytic problems whose resolution would clarify the limits of quantum speedups for total functions. Sharp problem. Related: A16.`,
    refs: [
      { label: "Aaronson & Ambainis, 'The need for structure in quantum speedups', Theory of Computing 10 (2014)" },
      { label: "O'Donnell, 'Analysis of Boolean Functions' (CUP, 2014)" },
    ] },

  { id: "A12", cat: "complexity", horizon: "sharp",
    title: "Average-case hardness of BosonSampling",
    statement: r`Complete the worst-to-average-case reduction and anticoncentration arguments needed to establish approximate classical sampling hardness under standard complexity assumptions.`,
    context: r`BosonSampling (Aaronson–Arkhipov) samples from the output distribution of non-interacting photons through a linear-optical network. Its output probabilities are permanents of Gaussian random matrices. Approximate classical simulation would collapse the polynomial hierarchy IF two conjectures hold: the permanent-of-Gaussians is #P-hard to approximate on average, and the output distribution anticoncentrates.

What is known: Exact-sampling hardness (collapse of PH) is proved unconditionally-modulo-standard-assumptions. Anticoncentration of the permanent for Gaussian matrices has been established in the relevant regime. The missing piece is the average-case hardness of approximating the permanent of a Gaussian random matrix: worst-case #P-hardness of the permanent is classical (Valiant), but a worst-to-average-case reduction robust enough for approximate sampling is not known — the polynomial-interpolation reductions that work for exact evaluation degrade under approximation. Bouland et al. and others have made partial progress and given evidence.

Completing the average-case hardness and tying it to approximate sampling hardness under standard assumptions is the open sharp problem. Related: A13.`,
    refs: [
      { label: "Aaronson & Arkhipov, 'The computational complexity of linear optics', Theory of Computing 9 (2013)" },
      { label: "Bouland, Fefferman, Landau, Liu, 'Noise and the frontier of quantum supremacy', FOCS 2021" },
    ] },

  { id: "A13", cat: "complexity", horizon: "sharp",
    title: "Average-case hardness of random-circuit sampling",
    statement: r`Prove approximate sampling hardness for natural random-circuit ensembles using assumptions no stronger than standard worst-case complexity conjectures.`,
    context: r`Random circuit sampling (RCS) — running a random quantum circuit and sampling its output — is the basis of the 'quantum supremacy' experiments (Google, USTC). Its classical hardness rests on the difficulty of approximating output probabilities of random circuits, combined with anticoncentration.

What is known: Bouland–Fefferman–Nirkhe–Vazirani gave a worst-to-average-case reduction for computing output probabilities of random circuits exactly (via polynomial interpolation), showing average-case #P-hardness of exact probabilities; anticoncentration holds for sufficiently deep random circuits. Movassagh strengthened the average-case hardness ('Cayley path' making the reduction more robust). But, as with BosonSampling, the reductions are for exact or high-precision probabilities and degrade for the additive-error / approximate-sampling regime relevant to real noisy experiments. Aharonov et al. and others further showed that at constant noise rate, RCS can become classically simulable, sharpening what regime hardness must target.

Establishing approximate-sampling hardness for natural random-circuit ensembles from only standard worst-case assumptions is the open sharp problem. Related: A12.`,
    refs: [
      { label: "Bouland, Fefferman, Nirkhe, Vazirani, 'On the complexity and verification of quantum random circuit sampling', Nat. Phys. 15 (2019)" },
      { label: "Movassagh, 'The hardness of random quantum circuits', Nat. Phys. 19 (2023)" },
    ] },

  { id: "A14", cat: "complexity", horizon: "sharp",
    title: "Graph isomorphism and quantum algorithms",
    statement: r`Determine whether graph isomorphism is in $\mathsf{BQP}$, or prove meaningful quantum lower bounds ruling out broad classes of quantum algorithms.`,
    context: r`Graph isomorphism (GI) is a rare problem in NP believed to be neither in P nor NP-complete. The natural quantum approach reduces GI to the hidden subgroup problem (HSP) over the symmetric group $S_n$ — the same framework that solves factoring (abelian HSP) and would solve GI if the non-abelian case were tractable.

What is known: Classically, Babai (2016) gave a quasipolynomial-time algorithm for GI, a landmark result, so GI is 'almost' in P and the pressure for a quantum algorithm has lessened. Quantumly, the HSP-over-$S_n$ route faces strong obstructions: Moore–Russell–Schulman and Hallgren–Moore–Rötteler–Russell–Sen proved that the natural strategies (in particular, measurements of single or few coset states, and even certain highly-entangled 'joint' measurements) cannot efficiently solve the $S_n$ HSP — the required measurements are prohibitively complex. So the obvious quantum path is essentially blocked.

Whether GI is in BQP by some other route, or whether stronger quantum lower bounds hold, is open. Sharp problem. Related: A15.`,
    refs: [
      { label: "Hallgren, Moore, Rötteler, Russell, Sen, 'Limitations of quantum coset states for graph isomorphism', J. ACM 57 (2010)" },
      { label: "Babai, 'Graph isomorphism in quasipolynomial time', STOC 2016" },
    ] },

  { id: "A15", cat: "complexity", horizon: "incremental",
    title: "Lattice problems and quantum computation",
    statement: r`Determine the exact quantum complexity of standard lattice problems such as approximate shortest vector and closest vector problems in the parameter regimes relevant to classical and post-quantum cryptography.`,
    context: r`Lattice problems — the (approximate) shortest and closest vector problems (SVP, CVP) and Learning With Errors (LWE) — are the security foundation of post-quantum cryptography (the NIST-standardized schemes). Their exact quantum complexity, especially for the polynomial approximation factors used in cryptography, determines whether these schemes are safe against quantum attack.

What is known: For the approximation regimes relevant to crypto, the best quantum algorithms are essentially no better than the best classical ones; Regev's quantum reduction from worst-case lattice problems to LWE is a celebrated use of quantum computation, but it is a reduction, not an attack. The problems are believed hard even for quantum computers, which is why they were chosen. The area is volatile: in 2024 Chen announced a quantum polynomial-time algorithm for certain LWE parameters, but the paper was quickly retracted after a bug was found — vividly illustrating that the quantum hardness is not settled and is under active assault.

Pinning down the true quantum complexity of these lattice problems, in the cryptographically relevant regimes, is an incremental but high-stakes open problem. Related: A2, A14.`,
    refs: [
      { label: "Regev, 'On lattices, learning with errors, random linear codes, and cryptography', J. ACM 56 (2009)" },
      { label: "Micciancio & Regev, 'Lattice-based cryptography', in Post-Quantum Cryptography (Springer, 2009)" },
    ] },

  { id: "A16", cat: "complexity", horizon: "incremental",
    title: "A criterion for genuine quantum speedup",
    statement: r`Develop structural conditions on a problem that predict whether it admits more than polynomial quantum advantage, excluding speedups caused only by input, output or data-access models.`,
    context: r`Many claimed exponential quantum speedups turn out to depend on unfair comparisons — a favorable quantum input model, an amplitude-encoded output that cannot be read out, or a data-access assumption not granted to the classical competitor. A predictive criterion for when a genuine super-polynomial speedup exists is missing.

What is known: The cautionary evidence is strong. Aaronson's 'read the fine print' analysis showed the HHL linear-systems and quantum-recommendation speedups hinge on state-preparation and readout assumptions. Then Tang's 'dequantization' (2019), using classical sampling analogues of quantum state preparation (Kerenidis–Prakash-style access), collapsed the exponential advantage of quantum recommendation systems and a cascade of QML algorithms (PCA, clustering, low-rank regression) to polynomial. The Aaronson–Ambainis conjecture (A11) provides one rigorous handle for total functions in the query model. Structural results distinguish speedups that survive fair comparison (factoring, simulation) from those that do not.

A general, predictive structural criterion — telling in advance whether a problem admits genuine super-polynomial quantum advantage, model-independently — is open. Related: A11, N10.`,
    refs: [
      { label: "Tang, 'A quantum-inspired classical algorithm for recommendation systems', STOC 2019" },
      { label: "Aaronson, 'Read the fine print', Nat. Phys. 11 (2015)" },
    ] },
];
