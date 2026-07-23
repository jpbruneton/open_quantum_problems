const r = String.raw;

export const NONLOCALITY = [
  { id: "N1", cat: "nonlocality", horizon: "sharp",
    title: "Existence of SIC-POVMs",
    statement: r`Prove or disprove that for every $d\ge2$ there exist $d^2$ unit vectors $\{|\psi_j\rangle\}\subset\mathbb{C}^d$ with $|\langle\psi_j|\psi_k\rangle|^2=\tfrac{1}{d+1}$ for $j\neq k$.`,
    context: r`A symmetric informationally complete POVM (SIC-POVM) is a set of $d^2$ equiangular unit vectors in $\mathbb{C}^d$ — the maximal possible number of equiangular lines in complex space. SICs are optimal measurements for quantum state tomography, minimal informationally complete, and central to QBist reconstructions of quantum theory. Zauner's conjecture asserts they exist in every dimension.

What is known: This is a remarkably data-rich open problem. Exact algebraic solutions have been constructed in many dimensions (including $d=2$–$28$ and scattered higher values up to well over 100), and high-precision numerical solutions exist in every dimension tested (into the hundreds). Almost all known SICs are covariant under the Weyl–Heisenberg group and possess an order-3 'Zauner' symmetry, drastically reducing the search. Scott–Grassl compiled extensive numerical and exact solutions.

Most strikingly, Appleby, Flammia, Kopp, Yard and others uncovered a deep link to algebraic number theory: the entries of SIC vectors generate specific abelian extensions of real quadratic fields, tying Zauner's conjecture to Hilbert's 12th problem and the Stark conjectures on units. A general existence proof (or a single dimension with no SIC) is the sharp open problem. Related: N2, N3, E14.`,
    refs: [
      { label: "Renes, Blume-Kohout, Scott, Caves, 'Symmetric informationally complete quantum measurements', J. Math. Phys. 45, 2171 (2004)" },
      { label: "Appleby, Flammia, McConnell, Yard, 'SICs and algebraic number theory', Found. Phys. 47 (2017)" },
      { label: "Scott & Grassl, 'SIC-POVMs: A new computer study', J. Math. Phys. 51 (2010)" },
    ] },

  { id: "N2", cat: "nonlocality", horizon: "sharp",
    title: "Mutually unbiased bases in dimension six",
    statement: r`Determine the maximal number $M(6)$ of mutually unbiased bases in $\mathbb{C}^6$; in particular decide whether $M(6)=3$ or whether four or more exist.`,
    context: r`Two orthonormal bases are mutually unbiased (MU) if $|\langle e_i|f_j\rangle|^2=1/d$ for all $i,j$ — measuring in one gives no information about the other. The maximal number of pairwise MU bases $M(d)$ is $d+1$ when $d$ is a prime power. Dimension six is the smallest non-prime-power case, and $M(6)$ is a notorious open problem.

What is known: One can always construct 3 MU bases in $\mathbb{C}^6$ (from a prime-power factor), so $M(6)\ge3$, and the upper bound is $M(6)\le7$. Extensive numerical optimization, computer-algebra, and Gröbner-basis searches (Butterley–Hall; Brierley–Weigert; Raynal–Lü–Englert; Jaming et al.) have never found a fourth MU basis, and strong evidence — including studies of the Fourier family of complex Hadamard matrices and the 'Zauner conjecture for MUBs' — points to $M(6)=3$. The problem is connected to the classification of $6\times6$ complex Hadamard matrices, which is itself incomplete.

Despite overwhelming numerical evidence for $M(6)=3$, there is no proof even that a fourth basis does not exist. A rigorous determination of $M(6)$ is the sharp target. Related: N3.`,
    refs: [
      { label: "Durt, Englert, Bengtsson, Życzkowski, 'On mutually unbiased bases', Int. J. Quantum Inf. 8 (2010)" },
      { label: "Brierley & Weigert, 'Maximal sets of mutually unbiased quantum states in dimension six', PRA 78 (2008)" },
    ] },

  { id: "N3", cat: "nonlocality", horizon: "sharp",
    title: "MUBs in non-prime-power dimensions",
    statement: r`Determine the maximal number $M(d)$ of mutually unbiased bases when $d$ is not a prime power, and decide whether a complete set of $d+1$ bases can exist in any such dimension.`,
    context: r`For prime-power $d$, complete sets of $d+1$ MU bases exist (built from finite fields / the Heisenberg–Weyl group). For general composite $d$ the maximal number $M(d)$ is unknown, and even the existence of a complete set of $d+1$ MU bases in any non-prime-power dimension is open — this generalizes N2 beyond $d=6$.

What is known: General bounds are weak. Lower bounds come from the prime-power factorization: writing $d=\prod p_i^{k_i}$, one has $M(d)\ge \min_i(p_i^{k_i})+1$, which for $d=6$ gives only 3. It is known that $M(d)\ge3$ for all $d$, and the upper bound is $d+1$. The MUB problem is tightly linked to combinatorial designs: complete sets of MU bases are equivalent to certain finite affine planes / complete sets of mutually orthogonal Latin squares, and the existence of $d-1$ MOLS (hence of a projective plane of order $d$) is a famous open combinatorial question for many composite $d$ (e.g. $d=10,12$).

Determining $M(d)$ for composite $d$, and whether complete sets ever exist outside prime powers, is a sharp problem sitting at the crossroads of quantum information and combinatorics. Related: N1, N2.`,
    refs: [
      { label: "Boykin, Sitharam, Tarifi, Wocjan, 'Mutually unbiased bases and orthogonal decompositions of Lie algebras', QIC 7 (2007)" },
      { label: "Bengtsson & Życzkowski, 'Geometry of Quantum States' (CUP, 2nd ed. 2017)" },
    ] },

  { id: "N4", cat: "nonlocality", horizon: "incremental",
    title: "Minimal separation of quantum correlation models",
    statement: r`Find the smallest Bell scenario in which finite-dimensional, approximately finite-dimensional and commuting-operator quantum correlation sets differ.`,
    context: r`There are several inequivalent ways to define 'quantum' correlations in a Bell experiment: the finite-dimensional tensor-product set $C_q$, its closure $C_{qa}$ (approximately finite-dimensional), and the commuting-operator set $C_{qc}$. Tsirelson's problem asked whether these coincide.

What is known: The landmark result MIP*=RE (Ji–Natarajan–Vidick–Wright–Yuen, 2020) proved $C_{qa}\ne C_{qc}$, refuting Tsirelson's problem and, via a chain of equivalences, disproving Connes' embedding conjecture in operator algebras. Earlier, Slofstra had shown $C_q$ is not closed ($C_q\ne C_{qa}$) using group-theoretic (representation) methods, and Coladangelo–Stark gave a five-input separation. These are among the deepest recent results connecting complexity theory, operator algebras, and quantum foundations.

But the proofs are highly nonconstructive: the minimal Bell scenario (number of inputs/outputs) in which these sets provably differ is unknown, and explicit small separating correlations are scarce. Pinning down the smallest scenario, and giving explicit witnesses, is an incremental follow-up. Related: N5, N6.`,
    refs: [
      { label: "Ji, Natarajan, Vidick, Wright, Yuen, 'MIP* = RE', Comm. ACM 64 (2021)" },
      { label: "Slofstra, 'The set of quantum correlations is not closed', Forum Math. Pi 7 (2019)" },
    ] },

  { id: "N5", cat: "nonlocality", horizon: "incremental",
    title: "Dimension required for nonlocal correlations",
    statement: r`Given a Bell correlation and accuracy $\varepsilon$, bound or determine the minimal local Hilbert-space dimension needed to realize it within $\varepsilon$.`,
    context: r`Some quantum correlations require high-dimensional entanglement to reproduce. The dimension-witness problem asks, for a target correlation and tolerance $\varepsilon$, for the minimal local Hilbert-space dimension realizing it — a device-independent measure of the quantum resources at play.

What is known: Dimension witnesses give certified lower bounds on local dimension from observed statistics (Brunner et al.; Gallego et al.). Some correlations are known to need unbounded dimension: there exist Bell inequalities whose near-optimal violation forces the dimension to grow, and certain nonlocal games ('quantum-coin' / low-degree games) require dimension exponential in the number of questions. The MIP*=RE machinery shows, in effect, that approximating quantum values can require unbounded dimension. Self-testing (N7) gives the opposite, tight side: some correlations pin down the state and dimension exactly.

Sharp, general bounds relating a correlation and $\varepsilon$ to the necessary dimension — beyond specific families — are open, and the dependence on $\varepsilon$ is subtle. This is an incremental, quantitative program. Related: N4, N7.`,
    refs: [
      { label: "Brunner, Cavalcanti, Pironio, Scarani, Wehner, 'Bell nonlocality', Rev. Mod. Phys. 86, 419 (2014)" },
      { label: "Brunner, Pironio, Acín, Gisin, Méthot, Scarani, 'Testing the dimension of Hilbert spaces', PRL 100, 210503 (2008)" },
    ] },

  { id: "N6", cat: "nonlocality", horizon: "incremental",
    title: "Restricted decidability of nonlocal games",
    statement: r`Although the general problem is undecidable, classify the natural families of nonlocal games whose quantum value is computable, semidecidable or efficiently approximable.`,
    context: r`A nonlocal game has a quantum value — the supremum winning probability over all quantum strategies. MIP*=RE shows that approximating this value is undecidable in general (as hard as the halting problem), and there is no algorithm computing it for arbitrary games.

What is known: On the tractable side, XOR games are fully understood — Tsirelson's theorem gives their quantum value via a semidefinite program, so it is efficiently computable. The Navascués–Pironio–Acín (NPA) hierarchy provides a converging sequence of SDP upper bounds on the commuting-operator value of any game, and lower bounds come from explicit strategies; for many structured games these meet. Unique games, synchronous games (linked to the existence of tracial states on a game algebra), and certain group-theoretic games have partial characterizations of computability.

The open, incremental task is to map the decidable/approximable islands: which natural families (by symmetry, number of questions, answer structure) have computable or semidecidable quantum values, and when the NPA hierarchy terminates or gives efficient bounds. Related: N4, N9, U-category.`,
    refs: [
      { label: "Cleve, Høyer, Toner, Watrous, 'Consequences and limits of nonlocal strategies', CCC 2004" },
      { label: "Ji et al., 'MIP* = RE', Comm. ACM 64 (2021)" },
    ] },

  { id: "N7", cat: "nonlocality", horizon: "incremental",
    title: "Classification of self-testing correlations",
    statement: r`Characterize which states and measurements can be uniquely certified, up to local isometries, from their correlations alone.`,
    context: r`Self-testing is the strongest form of device-independent certification: certain observed correlations force the underlying state and measurements to be, up to a local isometry and irrelevant ancillas, a unique reference — with no assumption about the devices. The maximal violation of the CHSH inequality self-tests the singlet, the paradigm example.

What is known: A large catalogue of self-tests is now established — all pure bipartite entangled states are self-testable (Coladangelo–Goh–Scarani), many multipartite states (GHZ, graph states, Dicke states) have self-tests, and there are self-tests for high-dimensional maximally entangled states and for certain measurements (mutually unbiased bases, tilted Bell inequalities). The Šupić–Bowles review organizes the methods (SOS decompositions, operator-algebraic and NPA-based certification).

A general characterization — necessary and sufficient conditions for a state (especially mixed or multipartite) and a measurement set to be self-testable, and by which correlations — is open. Related: N5, N8, N9.`,
    refs: [
      { label: "Šupić & Bowles, 'Self-testing of quantum systems: a review', Quantum 4, 337 (2020)" },
      { label: "Coladangelo, Goh, Scarani, 'All pure bipartite entangled states can be self-tested', Nat. Commun. 8, 15485 (2017)" },
    ] },

  { id: "N8", cat: "nonlocality", horizon: "incremental",
    title: "Optimal robustness of self-testing",
    statement: r`For standard self-tests, determine the sharp relation between the deviation of a Bell value from its optimum and the distance from the ideal state and measurements.`,
    context: r`Real experiments never reach the exact optimal Bell violation, so self-testing must be robust: a small deviation $\varepsilon$ from the ideal value should certify a state within some distance $\delta(\varepsilon)$ of the reference. The robustness function $\delta(\varepsilon)$ controls how demanding a device-independent protocol is experimentally.

What is known: Robust self-testing bounds exist for CHSH and many other tests, obtained via operator (sum-of-squares) methods, the 'swap' isometry technique, and numerical SDP relaxations (Yang–Vértesi–Bancal–Scarani–Navascués; Bancal et al.). Typical proven bounds scale like $\delta\sim\sqrt{\varepsilon}$ or worse and are usually far from tight; for CHSH the optimal robustness has been progressively improved but the sharp constant/scaling is generally not known.

Determining the optimal (tight) robustness for standard self-tests, and general methods that achieve it, is a quantitative, leaderboard-style open problem directly affecting the feasibility of device-independent cryptography and certified randomness. Related: N7.`,
    refs: [
      { label: "Yang, Vértesi, Bancal, Scarani, Navascués, 'Robust and versatile black-box certification of quantum devices', PRL 113, 040401 (2014)" },
      { label: "Šupić & Bowles, Quantum 4, 337 (2020)" },
    ] },

  { id: "N9", cat: "nonlocality", horizon: "incremental",
    title: "Quantum maxima of Bell and contextuality inequalities",
    statement: r`Develop exact methods for the quantum maximum and the minimal realizing dimension of a general inequality, beyond convergent but potentially nonterminating semidefinite hierarchies.`,
    context: r`Computing the maximal quantum violation (Tsirelson bound) of a general Bell or noncontextuality inequality, and the minimal Hilbert-space dimension achieving it, is a basic task with no general closed-form solution.

What is known: The NPA hierarchy (Navascués–Pironio–Acín) gives a converging sequence of semidefinite-programming outer bounds on the commuting-operator quantum value, and it is complete (converges to the true value) — but it need not terminate at any finite level, and there is no general certificate of when it has converged. For XOR / two-outcome correlation inequalities, Tsirelson's theorem gives the exact value via a single SDP. Contextuality has an analogous graph-theoretic bound: the Lovász theta function of the exclusivity graph (Cabello–Severini–Winter) upper-bounds the quantum value, exactly for a class of inequalities.

Exact or finitely-terminating methods for the quantum maximum, together with the minimal realizing dimension, for general inequalities are open, and connect to N4/N6 undecidability limits: no algorithm can compute all quantum values. Related: N4, N6, N8.`,
    refs: [
      { label: "Navascués, Pironio, Acín, 'A convergent hierarchy of semidefinite programs characterizing the set of quantum correlations', New J. Phys. 10, 073013 (2008)" },
      { label: "Cabello, Severini, Winter, 'Graph-theoretic approach to quantum correlations', PRL 112, 040401 (2014)" },
    ] },

  { id: "N10", cat: "nonlocality", horizon: "incremental",
    title: "Contextuality as a computational resource",
    statement: r`Find necessary and sufficient conditions under which contextuality provides a genuine quantum computational advantage, rather than merely being present in a computation.`,
    context: r`Quantum contextuality — the impossibility of assigning outcomes to measurements independent of the compatible context — is widely believed to be a resource fueling quantum computational speedups, but exactly when it confers an advantage (rather than being incidentally present) is not fully characterized.

What is known: There are strong results in specific models. Howard–Wallman–Veitch–Emerson showed that contextuality is necessary for magic-state distillation to give universal fault-tolerant quantum computation with stabilizer operations (in odd prime dimensions). Raussendorf and Bermejo-Vega–Hangleiter–Raussendorf et al. linked contextuality to the power of measurement-based quantum computation and to Wigner-function negativity. Anders–Browne showed that in certain settings contextuality can even promote a classical (linear) computer to universal. Sheaf-theoretic (Abramsky–Brandenburger) and cohomological frameworks quantify contextuality precisely.

A general necessary-and-sufficient criterion — for which computational tasks and models contextuality yields a genuine speedup — remains open, especially for even dimensions/qubits and for general (non-Clifford) settings. Related: A16.`,
    refs: [
      { label: "Howard, Wallman, Veitch, Emerson, 'Contextuality supplies the magic for quantum computation', Nature 510, 351 (2014)" },
      { label: "Abramsky & Brandenburger, 'The sheaf-theoretic structure of non-locality and contextuality', New J. Phys. 13, 113036 (2011)" },
    ] },
];
