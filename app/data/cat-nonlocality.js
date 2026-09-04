const r = String.raw;

export const NONLOCALITY = [
  { id: "N1", cat: "nonlocality", horizon: "sharp",
    relations: [{ id: "N3", type: "related" }, { id: "E14", type: "related" }],
    title: "Existence of SIC-POVMs",
    statement: r`Prove or disprove that for every $d\ge2$ there exist $d^2$ unit vectors $\{|\psi_j\rangle\}\subset\mathbb{C}^d$ with $|\langle\psi_j|\psi_k\rangle|^2=\tfrac{1}{d+1}$ for $j\neq k$.`,
    context: r`A symmetric informationally complete POVM (SIC) is obtained from $d^2$ equiangular unit vectors in $\mathbb C^d$, with effects $|\psi_j\rangle\langle\psi_j|/d$. SICs are minimal informationally complete measurements, useful in tomography and quantum foundations. This is a measurement-geometry problem, not intrinsically a Bell-nonlocality question.

Exact algebraic constructions and extensive high-precision numerical solutions provide strong evidence, but neither establishes all-dimensional existence. The unrestricted existence question is weaker than requiring Weyl–Heisenberg covariance or the additional order-three symmetry associated with Zauner's conjecture. These variants should not be conflated.

Appleby, Flammia, Kopp, Yard and others connected SICs with abelian extensions of real quadratic fields and Hilbert's twelfth problem. Appleby–Flammia–Kopp's constructive approach proves validity under two number-theoretic conjectures: an order-one abelian Stark conjecture and a special-value identity for the Shintani–Faddeev modular cocycle. This is conditional progress, not an unconditional existence theorem.

A general proof or one dimension admitting no SIC resolves the stated sharp question.`,
    refs: [
      {"label":"Appleby, Flammia & Kopp, 'A Constructive Approach to Zauner’s Conjecture via the Stark Conjectures' (conditional construction, 2025)","url":"https://arxiv.org/abs/2501.03970"},
      { label: "Renes, Blume-Kohout, Scott, Caves, 'Symmetric informationally complete quantum measurements', J. Math. Phys. 45, 2171 (2004)", url: "https://arxiv.org/abs/quant-ph/0310075" },
      { label: "Appleby, Flammia, McConnell, Yard, 'SICs and algebraic number theory', Found. Phys. 47 (2017)", url: "https://arxiv.org/abs/1701.05200" },
      { label: "Scott & Grassl, 'SIC-POVMs: A new computer study', J. Math. Phys. 51 (2010)", url: "https://arxiv.org/abs/0910.5784" },
    ] },

  { id: "N2", cat: "nonlocality", horizon: "sharp", status: "improved",
    relations: [{ id: "N3", type: "parent" }],
    evidence: [{ kind: "preprint", summary: "Claimed classification of order-six complex Hadamard matrices; simultaneous mutual-unbiasedness constraints remain additional and M(6) is not determined.", url: "https://arxiv.org/abs/2608.18053", date: "2026-08-18" }],
    provenance: [{ summary: "Cárdenes Wuttig and Tindall disclose interactive assistance from ChatGPT Sol 5.6 Pro, Codex 5.6 Sol and Claude Opus 5.0 in proofs, searches, algebra and verification code. They state that they repaired or rejected incorrect proposals and independently checked retained material.", url: "https://arxiv.org/abs/2608.18053" }],
    title: "Mutually unbiased bases in dimension six",
    statement: r`Determine the maximal number $M(6)$ of mutually unbiased bases in $\mathbb{C}^6$; in particular decide whether $M(6)=3$ or whether four or more exist.`,
    context: r`Two orthonormal bases are mutually unbiased if $|\langle e_i|f_j\rangle|^2=1/d$ for every pair of vectors. Complete sets of $d+1$ bases exist in prime-power dimensions. Dimension six is the smallest remaining case and is retained as the flagship benchmark of N3.

Tensor-product constructions give $M(6)\geq3$, while the general dimension bound gives $M(6)\leq7$. Extensive numerical, computer-algebra and Gröbner-basis investigations have not produced a fourth basis. Restrictions on particular complex Hadamard families provide rigorous partial exclusions; numerical search failure is not a proof of global nonexistence.

Preprint progress (August 2026): Cárdenes Wuttig and Tindall claim a complete exact finite-incidence classification of order-six complex Hadamard matrices, including Szöllősi's conjecture. This concerns individual matrices up to standard equivalence. A MUB set additionally requires simultaneous mutual unbiasedness between several matrices, so this claimed auxiliary classification does not determine $M(6)$.

The sharp target remains whether four or more MUBs exist, and ultimately the exact value of $M(6)$.`,
    refs: [
      { label: "Durt, Englert, Bengtsson, Życzkowski, 'On mutually unbiased bases', Int. J. Quantum Inf. 8 (2010)", url: "https://arxiv.org/abs/1004.3348" },
      { label: "Brierley & Weigert, 'Maximal sets of mutually unbiased quantum states in dimension six', PRA 78 (2008)", url: "https://arxiv.org/abs/0808.1614" },
      { label: "Cárdenes Wuttig & Tindall, 'A Complete Classification of Complex Hadamard Matrices of Order Six' (2026 preprint)", url: "https://arxiv.org/abs/2608.18053" },
    ] },

  { id: "N3", cat: "nonlocality", horizon: "sharp",
    relations: [{ id: "N2", type: "benchmark" }, { id: "N1", type: "related" }],
    evidence: [{ kind: "numerical", summary: "Extension searches for tensor-product MUB constructions found no extension; this is not a nonexistence proof.", url: "https://doi.org/10.3390/info17080796" }],
    title: "Complete MUB sets outside prime-power dimensions",
    statement: r`Can a dimension $d$ that is not a prime power admit $d+1$ mutually unbiased bases? As a separate quantitative programme, improve certified bounds on the maximal number $M(d)$ in specified dimensions.`,
    context: r`Complete sets of $d+1$ mutually unbiased bases are known in prime-power dimensions. Whether any non-prime-power dimension supports a complete set is the sharp existence question here; finding every value $M(d)$ is a broader programme. N2 records the dimension-six benchmark.

Writing $d=\prod_i p_i^{k_i}$ gives the tensor-product lower bound $M(d)\geq1+\min_i p_i^{k_i}$, while $M(d)\leq d+1$. Links with finite geometry motivate conjectures, but complete complex MUBs are not known to be equivalent to finite affine/projective planes. Classical complete mutually orthogonal Latin squares have their own established relation to planes. In particular, projective planes of order 10 were proved not to exist by Lam–Thiel–Swiercz in 1989; that result does not by itself exclude complete MUBs in dimension 10.

The 2026-published composite-dimension review provides a current baseline. Numerical evidence (August 2026): Wu–Liu–Wu report standard tensor-product constructions in 64 non-prime-power dimensions up to 100 and extensive extension searches in such dimensions up to 30. No extension was found. This tests chosen search procedures and starting families, not all possible MUBs, so it does not resolve any universal nonexistence claim.`,
    refs: [
      {"label":"'Mutually Unbiased Bases in Composite Dimensions — A Review' (published 2026)","url":"https://arxiv.org/abs/2410.23997"},
      {"label":"Saniga, Planat & Rosu, 'Mutually unbiased bases and finite projective planes' (proposed connection, 2004)","url":"https://arxiv.org/abs/math-ph/0403057"},
      {"label":"Lam, Thiel & Swiercz, 'The non-existence of finite projective planes of order 10', Canadian Journal of Mathematics (1989)","url":"https://doi.org/10.4153/CJM-1989-049-4"},
      { label: "Boykin, Sitharam, Tiep, Wocjan, 'Mutually unbiased bases and orthogonal decompositions of Lie algebras', QIC 7 (2007)", url: "https://arxiv.org/abs/quant-ph/0506089" },
      { label: "Bengtsson & Życzkowski, 'Geometry of Quantum States' (CUP, 2nd ed. 2017)", url: "https://doi.org/10.1017/9781139207010" },
      { label: "Wu, Liu & Wu, 'Numerical Search for Extensions of Tensor-Product Mutually Unbiased Bases in Non-Prime-Power Composite Dimensions up to 100' (2026)", url: "https://doi.org/10.3390/info17080796" },
    ] },

  { id: "N4", cat: "nonlocality", horizon: "incremental",
    relations: [{ id: "N5", type: "related" }, { id: "N6", type: "related" }],
    title: "Minimal separation of quantum correlation models",
    statement: r`For each separation $C_q\ne C_{qa}$ and $C_{qa}\ne C_{qc}$, determine minimal input/output tuples under a stated ordering, and construct explicit small witnesses.`,
    context: r`Finite-dimensional tensor-product correlations form $C_q$; their closure is $C_{qa}$; commuting-operator correlations form $C_{qc}$. Nonclosure of $C_q$ and separation of $C_{qa}$ from $C_{qc}$ are different established phenomena, not one undifferentiated separation.

Slofstra proved nonclosure of finite-dimensional quantum correlations. Dykema–Paulsen–Prakash give an explicit five-input, two-output nonclosure example. MIP*=RE establishes $C_{qa}\ne C_{qc}$ and refutes the corresponding Tsirelson/Connes conjectures. Its construction is effective: calling all these proofs nonconstructive is inaccurate, although the resulting examples can be complicated.

The residual benchmark must specify which two sets are compared and what “smallest” means. Setting counts and output counts form a partial order, so distinct Pareto-minimal scenarios may matter. Useful advances are smaller certified examples, lower bounds excluding separation in specified scenarios and transparent separating correlations.`,
    refs: [
      {"label":"Dykema, Paulsen & Prakash, 'Non-closure of the set of quantum correlations via graphs' (published 2019)","url":"https://arxiv.org/abs/1709.05032"},
      {"label":"Ji et al., 'MIP*=RE'","url":"https://arxiv.org/abs/2001.04383"},
      { label: "Slofstra, 'The set of quantum correlations is not closed', Forum Math. Pi 7 (2019)", url: "https://arxiv.org/abs/1703.08618" },
    ] },

  { id: "N5", cat: "nonlocality", horizon: "incremental",
    relations: [{ id: "N4", type: "related" }, { id: "N6", type: "related" }, { id: "N7", type: "related" }],
    title: "Dimension required for nonlocal correlations",
    statement: r`For specified finite-dimensional tensor-product correlation families and a fixed metric, determine tight lower and upper bounds on the minimal local dimension achieving accuracy $\varepsilon$, with explicit parameter dependence.`,
    context: r`Dimension witnesses certify lower bounds on resources needed to reproduce observed Bell statistics. For a target in $C_{qa}$, define approximation in a stated metric such as the maximum total-variation distance over input pairs. A commuting-operator target outside $C_{qa}$ need not have arbitrarily accurate finite-dimensional realizations at all.

Known examples force dimension to grow as the requested error decreases, sometimes extremely rapidly. There can be no uniform computable dimension cutoff sufficient to approximate every unrestricted finite Bell-game value: together with bounded-dimensional optimization this would contradict MIP*=RE. Thus a general computable dimension bound is not an open deliverable.

Self-testing certifies a reference subsystem up to local isometries and unused auxiliary systems, not the exact total dimension of an unknown physical device. Conversely, specified noisy-resource models can restore computable bounds; Qin–Yao supply one such result for fully quantum games using noisy maximally entangled resources.

The useful quantitative frontier is restricted families, optimal dimension witnesses and explicit dependence on accuracy, inputs and outputs.`,
    refs: [
      {"label":"Qin & Yao, 'Decidability of fully quantum nonlocal games with noisy maximally entangled states' (2023 revision)","url":"https://arxiv.org/abs/2211.10613"},
      {"label":"Ji et al., 'MIP*=RE'","url":"https://arxiv.org/abs/2001.04383"},
      { label: "Brunner, Cavalcanti, Pironio, Scarani, Wehner, 'Bell nonlocality', Rev. Mod. Phys. 86, 419 (2014)", url: "https://arxiv.org/abs/1303.2849" },
      { label: "Brunner, Pironio, Acín, Gisin, Méthot, Scarani, 'Testing the dimension of Hilbert spaces', PRL 100, 210503 (2008)", url: "https://arxiv.org/abs/0802.0760" },
    ] },

  { id: "N6", cat: "nonlocality", horizon: "incremental", status: "improved",
    relations: [{ id: "N4", type: "related" }, { id: "N5", type: "related" }],
    evidence: [{ kind: "preprint", summary: "Nonexactness of fixed NPA levels near a critical doubly-tilted CHSH point, not universal noncomputability in the smallest Bell scenario.", url: "https://arxiv.org/abs/2607.13762", date: "2026-07-15" }, { kind: "preprint", summary: "No finite standard NPA level describes the complete (2,2,2) behavior set; particular functionals can still have finite certificates.", url: "https://arxiv.org/abs/2607.14569", date: "2026-07-16" }],
    title: "Restricted decidability of nonlocal games",
    statement: r`Identify natural restricted families of finite nonlocal games whose finite-dimensional tensor-product value admits two-sided additive approximation with a certified stopping rule; separately determine efficient algorithms and finite-level NPA certificates.`,
    context: r`For a finitely specified game, the quantum value is a supremum over finite-dimensional tensor-product strategies. MIP*=RE rules out a general algorithm approximating this value to prescribed accuracy. Enumerating finite-dimensional strategies already supplies lower semicomputability; this is weaker than a two-sided computable value or a terminating threshold decision.

XOR games have an SDP characterization. The Navascués–Pironio–Acín hierarchy supplies decreasing upper bounds converging to the commuting-operator value, which need not equal the tensor-product value. Restricted symmetries, game algebras, input/output patterns and noisy-resource assumptions can yield tractable islands, including computable bounds in the Qin–Yao setting.

Preprint progress (July 2026): Pakhunov's two manuscripts claim nonexactness of any fixed NPA level throughout suitable neighborhoods of the doubly-tilted CHSH critical point, with a finite-certification phase boundary. Chaturvedi claims that no finite standard NPA level equals the entire quantum set in the two-input/two-output scenario. These are statements about fixed levels and sets or neighborhoods. They do not mean every individual inequality lacks a finite certificate, or that values in this small scenario are uncomputable.

N9's former generic solver request is archived here; dimensional aspects are treated in N5. The active target is a precisely described restricted family with a certified algorithm, not a universal solver.`,
    refs: [
      {"label":"Ji et al., 'MIP*=RE'","url":"https://arxiv.org/abs/2001.04383"},
      {"label":"Qin & Yao, 'Decidability of fully quantum nonlocal games with noisy maximally entangled states' (2023 revision)","url":"https://arxiv.org/abs/2211.10613"},
      { label: "Cleve, Høyer, Toner, Watrous, 'Consequences and limits of nonlocal strategies', CCC 2004", url: "https://arxiv.org/abs/quant-ph/0404076" },
      { label: "Pakhunov, 'No finite level of the NPA hierarchy is exact for the doubly-tilted CHSH functional near the critical tilt' (2026 preprint)", url: "https://arxiv.org/abs/2607.13762" },
      { label: "Pakhunov, 'A phase transition in the exactness of the NPA hierarchy at the critical doubly-tilted CHSH functional' (2026 preprint)", url: "https://arxiv.org/abs/2607.13774" },
      { label: "Chaturvedi, 'No Finite NPA Level Characterizes the Complete Quantum Set in the Simplest Bell Scenario' (2026 preprint)", url: "https://arxiv.org/abs/2607.14569" },
    ] },

  { id: "N7", cat: "nonlocality", horizon: "incremental",
    relations: [{ id: "N5", type: "related" }, { id: "N8", type: "related" }],
    evidence: [{ kind: "published", summary: "All pure multipartite entangled qubit states admit self-tests in the standard Bell setting; arbitrary higher local dimensions remain a separate frontier.", url: "https://www.nature.com/articles/s41467-026-70829-x", date: "2026-03-24" }],
    title: "Self-testing beyond multipartite qubits",
    statement: r`Can every finite-dimensional pure multipartite entangled state be self-tested in a standard single-source Bell experiment, up to local isometries, unused auxiliary systems and unavoidable conjugation equivalences? Separately classify measurement sets under an explicit certification convention.`,
    context: r`Self-testing extracts a reference state and, when specified, its measurements from correlations alone. CHSH self-tests a singlet. The equivalence convention is essential: unused auxiliary systems and complex conjugation cannot simply be excluded by observed probabilities.

Established results cover every pure bipartite entangled state. A published March 2026 theorem also covers every pure multipartite entangled qubit state, beyond earlier GHZ, graph and Dicke examples. The remaining universal state question concerns arbitrary higher local dimensions in the standard Bell setting. Network protocols using auxiliary parties or entanglement answer a different question.

Conventional exact self-testing does not uniquely identify a genuinely mixed bipartite target in the analogous pure-state sense; “classify all mixed states” is not an untouched extension without changing the definition. Measurement certification likewise has hypotheses: all real projective measurements can be self-tested, while arbitrary complex POVMs require careful treatment of equivalence and dilation freedoms.

The residual programme separates the sharp pure-state existence question from measurement-specific necessary-and-sufficient criteria and robustness.`,
    refs: [
      {"label":"'All pure multipartite entangled states of qubits can be self-tested', Nature Communications (24 March 2026)","url":"https://www.nature.com/articles/s41467-026-70829-x"},
      {"label":"Coladangelo, Goh & Scarani, all pure bipartite states and the mixed-state obstruction, Nature Communications (2017)","url":"https://pmc.ncbi.nlm.nih.gov/articles/PMC5458560/"},
      {"label":"Chen, Mančinska & Volčič, self-testing all real projective measurements, Nature Physics (2024)","url":"https://arxiv.org/abs/2302.00974"},
      { label: "Šupić & Bowles, 'Self-testing of quantum systems: a review', Quantum 4, 337 (2020)", url: "https://arxiv.org/abs/1904.10042" },
    ] },

  { id: "N8", cat: "nonlocality", horizon: "incremental", status: "improved",
    relations: [{ id: "N7", type: "related" }],
    evidence: [{ kind: "preprint", summary: "Size-independent analytic GHZ robustness within a factor of two; numerical tests up to 100 qubits support, but do not prove, the general optimum.", url: "https://arxiv.org/abs/2608.30851", date: "2026-08-31" }],
    title: "Optimal robustness of self-testing",
    statement: r`For a specified Bell functional, normalization and target, determine the tight extractability-fidelity bound as a function of the violation deficit; treat norm-distance bounds and measurement certification as separate metrics.`,
    context: r`Real experiments have a nonzero Bell-value deficit. Robust self-testing quantifies the worst-case reference-state fidelity obtainable by local extraction maps from statistics with that deficit. Bell normalization, fidelity convention and the allowed extraction maps must be fixed before comparing bounds.

Operator sum-of-squares techniques, swap isometries and SDPs provide many bounds. A square-root estimate in state-vector norm and a linear estimate in infidelity can describe compatible behavior, not different optimal exponents. Kaniewski established a tight three-qubit Mermin/GHZ benchmark and nearly optimal CHSH bounds; the catalogue should not present all standard tests as wholly unresolved.

Preprint progress (31 August 2026): Cao–Zhang–Shi–Zhao claim analytic $n$-qubit GHZ bounds with size-independent robustness, linear violation-error dependence and a factor-two comparison to an upper bound. Numerical checks through $n=100$ support a conjectured optimum but are not a general exact proof.

The incremental target is matching upper/lower robustness curves for named tests, with the same metric and normalization, and transferable methods for additional targets.`,
    refs: [
      {"label":"Kaniewski, 'Analytic and nearly optimal self-testing bounds for the Clauser-Horne-Shimony-Holt and Mermin inequalities', PRL 117, 070402 (2016)","url":"https://arxiv.org/abs/1604.08176"},
      { label: "Yang, Vértesi, Bancal, Scarani, Navascués, 'Robust and versatile black-box certification of quantum devices', PRL 113, 040401 (2014)", url: "https://arxiv.org/abs/1406.7127" },
      { label: "Šupić & Bowles, Quantum 4, 337 (2020)", url: "https://arxiv.org/abs/1904.10042" },
      { label: "Cao et al., 'Size-Independent Robustness in Multipartite Bell Self-Testing' (2026 preprint)", url: "https://arxiv.org/abs/2608.30851" },
    ] },

  { id: "N9", cat: "nonlocality", horizon: "incremental", status: "improved",
    archive: { kind: "merged", targets: ["N6", "N5"], reason: "The unrestricted Bell-value algorithm is impossible; restricted computability and dimension benchmarks are treated in N6 and N5." },
    relations: [{ id: "N6", type: "parent" }, { id: "N5", type: "parent" }],
    title: "Quantum maxima of Bell and contextuality inequalities",
    statement: r`Archived under N6 and N5: exact or certified Bell-maximum methods for specified restricted families, with a separate minimal-dimension task; no terminating algorithm exists for all finite Bell games.`,
    context: r`The earlier formulation asked for a general exact solver for Bell maxima and minimal realizing dimensions. In unrestricted finite-dimensional tensor-product models that algorithmic request is ruled out by MIP*=RE, not merely an unsolved technical challenge. The viable restricted-family problems now live in N6 and N5.

The NPA hierarchy converges to the commuting-operator value. It need not terminate at a finite level and its limit need not equal the tensor-product value. XOR correlation inequalities admit an SDP solution. Graph-theoretic contextuality methods, including the Cabello–Severini–Winter framework and Lovász theta bounds, concern explicitly specified exclusivity and compatibility assumptions; not every contextuality task inherits the identical Bell undecidability statement.

Historical preprint progress (July 2026): the two Pakhunov papers and Chaturvedi's paper give obstructions to finite standard NPA descriptions of whole neighborhoods or the complete smallest Bell behavior set. Individual inequalities can still have finite certificates. These sources are retained here for continuity, but the same progress is counted only under N6.

A selected finite benchmark list can retain exact-value and dimension questions without reviving the impossible universal solver.`,
    refs: [
      {"label":"Ji et al., 'MIP*=RE'","url":"https://arxiv.org/abs/2001.04383"},
      { label: "Navascués, Pironio, Acín, 'A convergent hierarchy of semidefinite programs characterizing the set of quantum correlations', New J. Phys. 10, 073013 (2008)", url: "https://arxiv.org/abs/0803.4290" },
      { label: "Cabello, Severini, Winter, 'Graph-theoretic approach to quantum correlations', PRL 112, 040401 (2014)", url: "https://arxiv.org/abs/1401.7081" },
      { label: "Pakhunov, 'No finite level of the NPA hierarchy is exact for the doubly-tilted CHSH functional near the critical tilt' (2026 preprint)", url: "https://arxiv.org/abs/2607.13762" },
      { label: "Pakhunov, 'A phase transition in the exactness of the NPA hierarchy at the critical doubly-tilted CHSH functional' (2026 preprint)", url: "https://arxiv.org/abs/2607.13774" },
      { label: "Chaturvedi, 'No Finite NPA Level Characterizes the Complete Quantum Set in the Simplest Bell Scenario' (2026 preprint)", url: "https://arxiv.org/abs/2607.14569" },
    ] },

  { id: "N10", cat: "nonlocality", horizon: "programme",
    relations: [{ id: "A16", type: "related" }],
    title: "Contextuality as a computational resource",
    statement: r`In specified measurement-based or stabilizer-resource computation models, relate a quantitative contextuality resource to classical simulation cost or distillation rates, fixing free operations, scalable input families and the required sampling or decision accuracy.`,
    context: r`Contextuality means that measurement outcomes cannot be modeled consistently by values independent of their compatible context. Whether it enables a computational advantage depends on the computational model and task, not its mere presence in a finite experiment.

Howard–Wallman–Veitch–Emerson establish contextuality requirements for magic-state-based computation in an odd-prime-dimensional stabilizer setting. Measurement-based computation has other model-specific results, including Raussendorf's contextuality links and Anders–Browne's promotion of restricted classical control. Sheaf-theoretic descriptions quantify contextuality but do not supply a universal speedup theorem.

For a concrete benchmark, fix the resource-state or measurement family, allowed stabilizer or measurement-based operations, circuit-size scaling, and whether classical simulation means exact sampling, approximate total-variation sampling or a decision task. Then seek simulation algorithms or resource-conversion lower bounds as the contextuality parameter changes.

Necessity in one model is not sufficiency in another, and contextuality of a constant-size gadget alone is not an asymptotic computational separation. This is a scoped programme related to A16, not one necessary-and-sufficient criterion for all quantum advantage.`,
    refs: [
      { label: "Howard, Wallman, Veitch, Emerson, 'Contextuality supplies the magic for quantum computation', Nature 510, 351 (2014)", url: "https://arxiv.org/abs/1401.4174" },
      { label: "Abramsky & Brandenburger, 'The sheaf-theoretic structure of non-locality and contextuality', New J. Phys. 13, 113036 (2011)", url: "https://arxiv.org/abs/1102.0264" },
    ] },

  { id: "N11", cat: "nonlocality", horizon: "sharp",
    title: "Bell-locality threshold of two-qubit Werner states",
    relations: [{ id: "N5", type: "related" }, { id: "E1", type: "related" }],
    statement: r`For $\rho_v=v|\psi^-\rangle\langle\psi^-|+(1-v)I/4$, determine the exact critical visibility for Bell locality under all single-copy local projective measurements; formulate arbitrary POVMs as a separate threshold.`,
    context: r`A two-qubit Werner state mixes a singlet with white noise. Entanglement and Bell nonlocality are different resources: the state is entangled for $v>1/3$, but some entangled states still admit local hidden-variable models.

Acín–Gisin–Toner proved that the projective-measurement locality threshold is $v_{\rm proj}=1/K_G(3)$, with $K_G(3)$ the order-three Grothendieck constant. Thus exact determination is a precise mathematical problem, not just a search for another Bell inequality. The threshold for all POVMs must be kept separate.

Published progress (February 2026): Designolle–Vértesi–Pokutta improve certified bounds for finite-order Grothendieck constants and clearly distinguish exact certificates from heuristic candidates. The exact order-three value remains unknown. No numerical interval is displayed here without a separately maintained certificate ledger.

The operational setting is one copy, ordinary classical-input Bell tests and no postselection or auxiliary entanglement. Filtering, collective measurements on several copies and network activation change the question; none should be silently included in this threshold.`,
    evidence: [{ kind: "published", summary: "New certified finite-order Grothendieck bounds; exact order-three value remains unknown, and heuristic candidates are distinguished from certificates.", url: "https://arxiv.org/abs/2409.03739", date: "2026-02-02", version: "v3" }],
    refs: [
      { label: "Acín, Gisin & Toner, 'Grothendieck's constant and local models for noisy entangled quantum states', PRA 73, 062105 (2006)", url: "https://arxiv.org/abs/quant-ph/0606138" },
      { label: "Designolle, Vértesi & Pokutta, 'Better bounds on finite-order Grothendieck constants', PRA 113, 022401 (2026)", url: "https://arxiv.org/abs/2409.03739" },
    ] },
];
