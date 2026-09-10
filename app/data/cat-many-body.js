const r = String.raw;

export const MANYBODY = [
  { id: "B1", cat: "many-body", horizon: "sharp",
    title: "Area law in two spatial dimensions",
    statement: r`For a family of finite-range 2D lattice Hamiltonians with fixed on-site dimension, uniformly bounded interaction strength, a unique ground state and a uniform spectral gap, prove $S(\rho_A)\le C|\partial A|$ for square regions $A$, with $C$ independent of system and region size.`,
    context: r`The area law says entanglement entropy of a region $A$ scales with the size of its boundary $|\partial A|$ rather than its volume. It underlies why gapped ground states are efficiently describable by tensor networks and is a cornerstone of Hamiltonian complexity.

What is known: The one-dimensional unique-gapped-ground-state area law is established, with subsequently improved quantitative gap and local-dimension dependence. In 2D there are important structured cases. The Anshu–Arad–Gosset frustration-free theorem assumes a local gap and a specified cut geometry; it is not a theorem for every frustration-free Hamiltonian. Suitable stabilizer constructions and controlled deformations give other positive examples.

Ground-space assumptions are essential: on-site projectors pinning one sublattice and leaving the other spins free produce a gap of one but allow volume-entangled ground states. Thus a gap alone cannot imply the claimed law for every vector of an unrestricted degenerate ground space. Topologically degenerate models require their own explicit local-ground-space hypotheses.

The unique-ground-state formulation above remains a central open target. A theorem about entanglement is not itself a total algorithm for deciding whether the gap promise holds; U1 does not automatically preclude such a conditional theorem. Representation and efficient computation are distinct further questions (B2/B3).`,
    refs: [
      { label: "Hastings, 'An area law for one-dimensional quantum systems', J. Stat. Mech. (2007) P08024", url: "https://arxiv.org/abs/0705.2024" },
      { label: "Arad, Kitaev, Landau, Vazirani, 'An area law and sub-exponential algorithm for 1D systems' (2013)", url: "https://arxiv.org/abs/1301.1162" },
      { label: "Eisert, Cramer, Plenio, 'Colloquium: Area laws for the entanglement entropy', Rev. Mod. Phys. 82, 277 (2010)", url: "https://arxiv.org/abs/0808.3773" },
      { label: "Anshu, Arad & Gosset, 2D frustration-free area law with local-gap hypotheses", url: "https://arxiv.org/abs/2103.02492" },
    ] },

  { id: "B2", cat: "many-body", horizon: "sharp",
    title: "Efficient tensor-network approximation in 2D",
    statement: r`For every fixed-range, bounded-strength 2D Hamiltonian family with fixed on-site dimension, a unique ground state and a uniform gap, does there exist a normalized pure PEPS approximating the ground-state vector to norm error $\epsilon$ with bond dimension polynomial in the number of sites $N$ and $1/\epsilon$?`,
    context: r`This is an existence question about a pure-state representation, not an algorithm for discovering it or contracting it. The polynomial may depend on the fixed local dimension, range, interaction bound and gap lower bound, but not on system size. Global vector-norm error is deliberately stronger than reproducing bounded-region reduced states.

What is known: In 1D, an area law plus a spectral gap yields an efficient MPS approximation, and the ground state can be found in polynomial time (Landau–Vazirani–Vidick). In 2D the chain of implications breaks: bounded entropy across cuts does not obviously bound the bond dimension needed for a global PEPS, and contracting a general 2D PEPS is itself #P-hard (see B3), so even having a PEPS description need not make it useful.

A distinct weaker target asks for trace-distance error at most $\epsilon$ on every region of a fixed size. Its scaling must be stated separately; allowing mixed or purified tensor networks can also change the task. Gibbs-state PEPS approximations and local-observable approximation theorems do not automatically establish the global pure-state statement. An area-law bound on von Neumann entropy alone is not a universal efficient-representation theorem.`,
    refs: [
      { label: "Cirac, Pérez-García, Schuch & Verstraete, 'Matrix product states and projected entangled pair states: Concepts, symmetries, and theorems', Rev. Mod. Phys. 93, 045003 (2021)", url: "https://arxiv.org/abs/2011.12127" },
      { label: "Landau, Vazirani, Vidick, 'A polynomial-time algorithm for the ground state of 1D gapped Hamiltonians', Nat. Phys. 11 (2015)", url: "https://arxiv.org/abs/1307.5143" },
      { label: "Molnár et al., tensor-network approximation guarantees for Gibbs and ground states", url: "https://arxiv.org/abs/1406.2973" },
    ] },

  { id: "B3", cat: "many-body", horizon: "incremental",
    title: "Efficient contraction of physically restricted PEPS",
    statement: r`For injective 2D PEPS specified by finite-precision tensors, establish checkable boundary-mixing and conditioning promises that allow normalized bounded-support expectation values to be computed to additive error $\epsilon$ in time polynomial in input length and $1/\epsilon$. State whether a uniform parent gap suffices within the chosen class.`,
    context: r`Even when a state has a compact PEPS description, extracting expectation values requires contraction. Worst-case hardness results obstruct a general polynomial algorithm under the corresponding complexity assumptions. Exact contraction, relative approximation of a norm, and additive approximation of a normalized observable are different computational tasks; a hardness result must specify which one and its precision promises.

What is known: Numerical boundary-MPS and corner-transfer methods often perform well, but injectivity or finite correlation length alone is not an unconditional polynomial-time certificate. Schwarz, Buerschaper and Eisert give a quasi-polynomial local-observable algorithm under explicit injectivity, gap and conditioning assumptions. This is not a general polynomial contraction theorem.

The residual is to close the algorithmic gap in a named promise family, or exhibit an obstruction preserving those promises. Specify accessible boundary data, tensor conditioning and bond-dimension scaling; the phrase 'largest natural class' has no mathematical success criterion. Keep this task separate from existence of a representation (B2), certifying the parent gap (M7) and finding tensors from a Hamiltonian.`,
    refs: [
      { label: "Schuch, Wolf, Verstraete, Cirac, 'Computational complexity of PEPS', PRL 98, 140506 (2007)", url: "https://arxiv.org/abs/quant-ph/0611050" },
      { label: "Cirac, Pérez-García, Schuch & Verstraete, 'Matrix product states and projected entangled pair states: Concepts, symmetries, and theorems', Rev. Mod. Phys. 93, 045003 (2021)", url: "https://arxiv.org/abs/2011.12127" },
      { label: "Schwarz, Buerschaper & Eisert, local observables in PEPS and quasi-polynomial algorithms", url: "https://arxiv.org/abs/1606.06301" },
    ] },

  { id: "B4", cat: "many-body", horizon: "incremental",
    title: "Eigenstate thermalization hypothesis",
    statement: r`For a specified deterministic nonintegrable local Hamiltonian, prove quantitative ETH estimates in a fixed symmetry sector and finite-energy-density window for a stated class of local observables. Distinguish all-eigenstate (strong) ETH, vanishing-fraction exceptions (weak ETH), and statistical off-diagonal estimates.`,
    context: r`ETH explains how isolated quantum systems thermalize: it posits that matrix elements of local observables in the energy eigenbasis take the Srednicki form, with smooth diagonal parts (equal to the microcanonical average) and pseudo-random, exponentially-small-in-entropy off-diagonal parts. If ETH holds, individual eigenstates already look thermal and expectation values relax to Gibbs values.

What is known: Numerical evidence supports ETH in many nonintegrable chains, and controlled random-matrix/circuit or specially structured models admit rigorous results. Canonical typicality concerns typical vectors in a subspace, not automatically the actual eigenbasis of a deterministic Hamiltonian. Weak ETH theorems under specific assumptions do not imply strong ETH; some integrable models can satisfy weak local statements while failing the stronger thermalization picture. Rare scars can violate strong ETH without disproving weak ETH.

Deriving ETH from the structure of a concrete, non-random local Hamiltonian — checkable sufficient conditions guaranteeing the diagonal and off-diagonal ansatz for its actual eigenstates — is open. This is the incremental, rigorous heart of quantum thermalization. Related: B5, B7, M4, U3.`,
    refs: [
      { label: "Deutsch, 'Quantum statistical mechanics in a closed system', PRA 43, 2046 (1991)", url: "https://doi.org/10.1103/PhysRevA.43.2046" },
      { label: "Srednicki, 'Chaos and quantum thermalization', PRE 50, 888 (1994)", url: "https://doi.org/10.1103/PhysRevE.50.888" },
      { label: "D'Alessio, Kafri, Polkovnikov & Rigol, 'From quantum chaos and eigenstate thermalization to statistical mechanics and thermodynamics', Adv. Phys. 65 (2016)", url: "https://arxiv.org/abs/1509.06411" },
    ] },

  { id: "B5", cat: "many-body", horizon: "programme",
    title: "Unitary derivation of thermalization",
    statement: r`For a specified translation-invariant nonintegrable local Hamiltonian and a stated low-correlation initial-state family with narrow energy density, prove local-observable convergence or time-fraction closeness to the appropriate thermal ensemble, with explicit relaxation times, finite-size errors and ordering of limits.`,
    context: r`Beyond ETH as an ansatz (B4), the goal is to prove from the microscopic unitary dynamics that a nonintegrable many-body system relaxes to thermal equilibrium, with explicit relaxation time scales, bounds on residual fluctuations, and control of finite-size effects.

What is known: Equilibration-on-average theorems use effective-dimension and energy-gap nonresonance or bounded-degeneracy assumptions to bound fluctuations around a time-averaged state; these are not assumptions of a positive ground-state spectral gap. They do not alone identify that state with a Gibbs ensemble or give physically useful relaxation times. Controlled free and selected integrable quenches have generalized-ensemble results; this is not a universal relaxation theorem for every integrable model. Finite closed systems recur, so persistent global trace-norm convergence cannot be the unrestricted target.

The residual programme combines ensemble identification, local relaxation and quantitative rates for concrete interacting models. Conserved charges and symmetry sectors must be fixed; arbitrary initial states include deliberately stationary or atypical ones.

Non-Abelian subtarget: for a model with conserved noncommuting charges, derive the appropriate local equilibrium predictions and finite-size/rate bounds under a stated charge-preparation convention. Noncommuting charges cannot simply be assigned simultaneous sharp values. This is an operational extension of thermalization, not a claim that no non-Abelian thermodynamic formalism exists. Related: B4, B6, O10.`,
    refs: [
      { label: "Linden, Popescu, Short, Winter, 'Quantum mechanical evolution towards thermal equilibrium', PRE 79, 061103 (2009)", url: "https://arxiv.org/abs/0812.2385" },
      { label: "Gogolin & Eisert, 'Equilibration, thermalisation, and the emergence of statistical mechanics in closed quantum systems', Rep. Prog. Phys. 79 (2016)", url: "https://arxiv.org/abs/1503.07538" },
      { label: "Quantum thermodynamics roadmap, non-Abelian conservation-law questions (2025)", url: "https://arxiv.org/abs/2504.20145" },
    ] },

  { id: "B6", cat: "many-body", horizon: "programme",
    title: "Derivation of quantum hydrodynamics",
    statement: r`For a concrete deterministic nonintegrable quantum lattice model with a specified conserved density, derive a diffusive scaling limit with finite positive diffusion coefficient and controlled errors for smooth initial profiles. Treat ballistic Euler limits and nonlinear fluctuations as separate subtargets.`,
    context: r`Hydrodynamics — the effective large-scale description of conserved densities via diffusion or ballistic transport — is expected to emerge from microscopic quantum dynamics, but deriving it rigorously is a longstanding challenge, the quantum analogue of Hilbert's sixth problem for classical mechanics.

What is known: Generalized hydrodynamics provides a powerful Euler-scale theory for integrable systems, with rigorous results in controlled settings and extensive physical support. Its derivation and validity assumptions are model dependent; it is not a universal error-controlled diffusion theorem for nonintegrable lattices. KPZ-type behavior and ballistic transport require different scaling questions. Rigorous classical interacting-particle hydrodynamic limits supply methodology rather than an automatic quantum proof.

Deriving normal diffusion — a finite diffusion constant — from a genuinely interacting, non-integrable quantum lattice model, with quantitative error bounds in a diffusive scaling limit, remains open and is a central programme in mathematical statistical mechanics. Related: B5, B12.`,
    refs: [
      { label: "Castro-Alvaredo, Doyon, Yoshimura, 'Emergent hydrodynamics in integrable quantum systems out of equilibrium', PRX 6, 041065 (2016)", url: "https://arxiv.org/abs/1605.07331" },
      { label: "Bertini et al., 'Finite-temperature transport in one-dimensional quantum lattice models', Rev. Mod. Phys. 93, 025003 (2021)", url: "https://arxiv.org/abs/2003.03334" },
    ] },

  { id: "B7", cat: "many-body", horizon: "incremental",
    title: "Stability of fragmentation and many-body scars",
    statement: r`For a specified constrained spin model, determine which fragmentation or scar diagnostics survive bounded local perturbations preserving its stated exact symmetries, and bound the system-size and perturbation dependence of memory or revival lifetimes.`,
    context: r`Several distinct mechanisms let quantum systems evade the ETH paradigm: integrability (extensively many local conserved charges), many-body localization (emergent l-bits under disorder), Hilbert-space fragmentation (dynamical shattering of the state space into exponentially many disconnected sectors), quantum many-body scars (rare non-thermal eigenstates, as in the PXP/Rydberg model), and pseudolocal or non-Abelian conserved quantities.

What is known: Each mechanism has its own well-developed theory and diagnostic (level statistics, entanglement scaling, revivals, commutant algebras for fragmentation). Recent work (Moudgalya–Motrunich) organizes scars and fragmentation via commutant algebras, a promising unifying language. Integrability is understood via Bethe ansatz / Yang–Baxter structure.

The useful frontier is a stability theorem or counterexample for a fixed mechanism and perturbation class, not the existence of one language for every failure of ETH. Exact fragmentation, long-lived approximate conservation and rare eigenstate scars are distinct. A finite-time revival is not by itself a stable phase; the order of infinite-volume, long-time and vanishing-perturbation limits matters. MBL is treated separately in M4.`,
    refs: [
      { label: "Serbyn, Abanin, Papić, 'Quantum many-body scars and weak breaking of ergodicity', Nat. Phys. 17, 675 (2021)", url: "https://arxiv.org/abs/2011.09486" },
      { label: "Moudgalya & Motrunich, 'Hilbert space fragmentation and commutant algebras', PRX 12, 011050 (2022)", url: "https://arxiv.org/abs/2108.10324" },
    ] },

  { id: "B8", cat: "many-body", horizon: "programme", status: "improved",
    reviewedAt: "2026-09-10",
    evidence: [
      { kind: "preprint", summary: "Decomposition theorem for locally finite-dimensional fermionic QCA; QCA triviality does not mean all 2D gapped phases are trivial.", url: "https://arxiv.org/abs/2609.09317v1", date: "2026-09-08", version: "v1" },
    ],
    provenance: [
      { summary: "Kwan, Long and Haah report Claude and ChatGPT use for figure-generation scripts and literature searches. This declaration does not attribute the mathematical proof to those tools.", url: "https://arxiv.org/html/2609.09317v1", version: "v1" },
    ],
    title: "Classification of gapped phases in d≥2",
    statement: r`Organize classification of uniformly gapped local Hamiltonian families in $d\ge2$ under gapped-path equivalence, fixing bosonic or fermionic degrees of freedom, symmetries, ground-space structure and stabilization conventions. Use explicit subproblems for intrinsic order, symmetry enrichment and boundaries.`,
    context: r`A uniformly gapped local path induces quasi-local spectral flow under the applicable hypotheses. This is not an unrestricted assertion of exact finite-depth-circuit equality: approximation accuracy, circuit range, ancillary product states and thermodynamic conventions matter. These choices form part of the equivalence relation, not an afterthought.

What is known: The 1D bosonic unique-ground-state setting has a controlled classification: without symmetry it is trivial under the stated phase conventions, and on-site symmetry yields the familiar projective-representation/SPT classification. Symmetry breaking, degenerate ground spaces and fermionic parity introduce additional cases. The phrase 'all 1D gapped phases are trivial' would erase them. In 2D, anyon categories, symmetry-fractionalization data and invertible phases provide substantial but not universally complete classifications.

But 2D and 3D are a major, still-incomplete programme mixing physics with higher category theory and cobordism. Chiral phases (nonzero chiral central charge, no gapped boundary), the precise role of invertible/anomalous phases, fermionic and crystalline cases, and a fully rigorous equivalence relation are not settled. Related: B9.

Related structural progress (8 September 2026, v1): Kwan, Long and Haah claim that every two-dimensional fermionic quantum cellular automaton on a locally finite-dimensional algebra decomposes into local automorphisms and a fermionic shift. Their “triviality” concerns bounded-spread automorphisms and the stated stabilization conventions. It is not a theorem that every two-dimensional fermionic gapped Hamiltonian phase is trivial, or a complete classification with symmetry and intrinsic topological order.`,
    refs: [
      { label: "Kwan, Long & Haah, 'Fermionic quantum cellular automata in 2d are trivial' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.09317v1" },
      { label: "Chen, Gu, Liu & Wen, 'Symmetry protected topological orders and the group cohomology of their symmetry group', PRB 87, 155114 (2013)", url: "https://arxiv.org/abs/1106.4772" },
      { label: "Kitaev, 'Anyons in an exactly solved model and beyond', Ann. Phys. 321 (2006)", url: "https://arxiv.org/abs/cond-mat/0506438" },
      { label: "Senthil, 'Symmetry-protected topological phases of quantum matter', Annu. Rev. Condens. Matter Phys. 6 (2015)", url: "https://arxiv.org/abs/1405.4015" },
      { label: "Schuch, Pérez-García & Cirac, classification with symmetry and ground-space distinctions", url: "https://arxiv.org/abs/1010.3732" },
    ] },

  { id: "B9", cat: "many-body", horizon: "programme",
    title: "Completeness and realizability of 2D anyon data",
    statement: r`For two-dimensional bosonic gapped phases without imposed symmetry, determine whether a unitary modular tensor category together with the full chiral central charge completely determines the gapped-path phase. Separately, determine which compatible pairs are realizable by local Hamiltonians.`,
    context: r`A cluster of invariants is used to label topologically ordered phases. The question is whether they form a complete invariant: do two systems with identical data necessarily lie in the same phase, and does every consistent set of data arise from a physical Hamiltonian (realizability)?

What is known: For 2D bosonic topological order the working conjecture is that a unitary modular tensor category (UMTC) together with the chiral central charge $c_-$ completely classifies the phase; much structure (fusion, braiding, modular data) is understood, and the relation to conformal field theory boundaries is well developed. Rank-finiteness (Bruillard–Ng–Rowell–Wang) shows only finitely many UMTCs exist at each rank. Symmetry-enriched theories need additional symmetry action, fractionalization, defect and obstruction data; fractionalization alone is not a general classification.

Completeness and realizability are not proved in this generality. Modular $S,T$ matrices alone do not determine a UMTC (Mignard–Schauenburg); equality of those matrices is not equality of the full categorical input. The full chiral central charge matters, not only its value modulo eight, because invertible bosonic layers can change it without adding anyons. Symmetry enrichment, fermionic systems and 3D loop excitations are separate branches of B8 rather than hidden assumptions of this target.`,
    relations: [{ id: "B8", type: "parent" }, { id: "B14", type: "benchmark" }, { id: "B15", type: "benchmark" }],
    refs: [
      { label: "Rowell, Stong, Wang, 'On classification of modular tensor categories', Comm. Math. Phys. 292 (2009)", url: "https://arxiv.org/abs/0712.1377" },
      { label: "Mignard & Schauenburg, 'Modular categories are not determined by their modular data', Lett. Math. Phys. 111 (2021)", url: "https://arxiv.org/abs/1708.02796" },
    ] },

  { id: "B10", cat: "many-body", horizon: "programme",
    title: "Two-dimensional Hubbard model",
    statement: r`For the nearest-neighbor repulsive square-lattice Hubbard model, determine thermodynamic ground-state order as a function of $U/t$ and hole doping. A concrete benchmark is whether long-range d-wave pair correlations survive at $U/t=8$ and doping $1/8$, allowing competition with stripes. Treat the finite-temperature pseudogap separately.`,
    context: r`The single-band Hubbard model $H=-t\sum_{\langle ij\rangle\sigma}c^\dagger_{i\sigma}c_{j\sigma}+U\sum_i n_{i\uparrow}n_{i\downarrow}$ on the square lattice is the minimal model of strongly correlated electrons and the prime candidate for capturing cuprate high-Tc superconductivity. Its zero-temperature phase diagram as a function of filling and $U/t$ is the target.

What is known: Half-filled antiferromagnetic/Mott behavior has strong support, with rigorous results under particular lattice, coupling and limiting assumptions. Lieb's total-spin theorem is not a proof of long-range antiferromagnetic order at every coupling, and Nagaoka's one-hole infinite-repulsion theorem is a different limit. At finite doping, sign problems and finite-size/geometry effects complicate numerical extrapolation. Multi-method studies find closely competing stripe and pairing states in specific parameter regimes; these are not a rigorous full phase diagram.

The full doped phase diagram — whether and where the model superconducts, the nature of the pseudogap, and the competition with stripe/charge order — is contested even numerically, and there is no rigorous determination. This is a grand programme, not a single conjecture. Related: B11.`,
    refs: [
      { label: "Qin, Schäfer, Andergassen, Corboz, Gull, 'The Hubbard model: a computational perspective', Annu. Rev. Condens. Matter Phys. 13 (2022)", url: "https://arxiv.org/abs/2104.00064" },
      { label: "Zheng et al. (Simons Collaboration), 'Stripe order in the underdoped region of the two-dimensional Hubbard model', Science 358 (2017)", url: "https://arxiv.org/abs/1701.00054" },
      { label: "Lieb, 'Two theorems on the Hubbard model', PRL 62, 1201 (1989)", url: "https://doi.org/10.1103/PhysRevLett.62.1201" },
    ] },

  { id: "B11", cat: "many-body", horizon: "incremental", status: "improved",
    title: "Intrinsic sign problem",
    statement: r`For a specified class of local Hamiltonians and allowed local or quasilocal basis changes, characterize obstructions to stoquasticity. Separate finite-input basis-curing complexity from a phase-invariant obstruction under uniformly local transformations.`,
    context: r`The sign problem is the exponential obstruction that blocks quantum Monte Carlo for many fermionic and frustrated systems. A Hamiltonian is 'stoquastic' (sign-problem-free in a given basis) if its off-diagonal matrix elements are nonpositive. The question is which systems are only 'basis-dependently' cursed — curable by a local basis change — versus intrinsically sign-problematic.

What is known: Checking the signs of an explicitly listed matrix is easy; a succinct local-Hamiltonian representation and allowed transformations require separate complexity analysis. Hastings, Ringel–Kovrizhin, Smith–Golan–Ringel and Golan–Smith–Ringel establish topological sign-problem obstructions under particular locality, phase and spectral assumptions. Their criteria do not say that every nonzero chiral central charge forbids every conceivable sign-free representation. The result is not supplied by the unrelated digital-simulation paper previously attributed here.

New progress (2026): Karakashian and Hen separated stoquastizability from vanishing geometric phase (VGP). They exhibit VGP 3-local Hamiltonians which are formally hard to stoquastize yet retain StoqMA-type complexity, give polynomial-time recognition in several natural settings, and prove general VGP recognition PSPACE-complete for geometrically local Hamiltonians. The result suggests that the tractable/sign-free boundary is not captured by the existence of a stoquastizing basis alone; it does not provide the sought necessary-and-sufficient quasilocal basis-change criterion.

A general characterization — necessary and sufficient conditions for a local Hamiltonian to be curable by a quasilocal basis change — is open and being extended phase by phase. Related: A9, B10.`,
    evidence: [{ kind: "preprint", summary: "VGP/stoquastizability and recognition-complexity results concern specified representations, not a complete phase-level sign criterion.", url: "https://arxiv.org/abs/2607.18596" }],
    refs: [
      { label: "Hastings, 'How quantum are non-negative wavefunctions?', J. Math. Phys. 57, 015210 (2016)", url: "https://arxiv.org/abs/1506.08883" },
      { label: "Smith, Golan & Ringel, intrinsic sign problems in topological quantum matter", url: "https://arxiv.org/abs/2005.05343" },
      { label: "Golan, Smith & Ringel, intrinsic sign problems in chiral topological matter", url: "https://arxiv.org/abs/2005.05566" },
      { label: "Karakashian & Hen, 'Dismantling the Stoquastic Dichotomy' (2026 preprint)", url: "https://arxiv.org/abs/2607.18596" },
    ] },

  { id: "B12", cat: "many-body", horizon: "incremental",
    title: "Optimal Lieb–Robinson bounds for long-range systems",
    statement: r`Close remaining upper/lower-bound gaps for information propagation under power-law interactions, after fixing dimension $d$, decay exponent $\alpha$, per-site strength normalization and the task/error norm. Focus on endpoints, logarithmic corrections or a specified regime not settled by the known $\alpha>2d$ exponents.`,
    context: r`Lieb–Robinson bounds give an emergent 'light cone' limiting how fast information and correlations spread under local Hamiltonian dynamics. For short-range interactions the cone is linear with a finite group velocity. For long-range interactions decaying as $1/r^\alpha$, the cone can broaden into a polynomial or logarithmic shape, and the sharp form depends intricately on $\alpha$ and dimension $d$.

What is known: In the standard worst-case operator-norm setting, strictly linear cones are established for $\alpha>2d+1$, not merely $\alpha>2d$. Tran et al. determine the principal optimal exponents above $2d$; the interval $2d<\alpha<2d+1$ has a different, polynomial propagation scale. Matching protocols and commutator estimates must be compared with the same allowed controls and accuracy criterion.

For $\alpha\le d$, whether interactions are Kac-normalized changes the question. Operator norm, state-dependent norms, entanglement generation and state transfer also need not share the same bound. Select a residual exponent/endpoint and specify time-dependent controls, finite-size scaling and error tolerance; do not relabel the known core exponent regime as open.`,
    refs: [
      { label: "Chen, Lucas, Yin, 'Speed limits and locality in many-body quantum dynamics', Rep. Prog. Phys. 86 (2023)", url: "https://arxiv.org/abs/2303.07386" },
      { label: "Tran et al., 'Hierarchy of linear light cones with long-range interactions', PRX 10, 031009 (2020)", url: "https://arxiv.org/abs/2001.11509" },
      { label: "Kuwahara & Saito, 'Strictly linear light cones in long-range interacting systems of arbitrary dimensions', PRX 10, 031010 (2020)", url: "https://arxiv.org/abs/1910.14477" },
      { label: "Tran et al., optimal long-range propagation exponents, PRL 127, 160401 (2021)", url: "https://arxiv.org/abs/2103.15828" },
    ] },

  { id: "B13", cat: "many-body", horizon: "sharp",
    title: "Bose–Einstein condensation at fixed density",
    statement: r`For a homogeneous three-dimensional Bose gas with a fixed nonnegative finite-range two-body potential, prove at zero temperature that the largest eigenvalue of the one-body density matrix is at least $cN$ in the thermodynamic limit $N/L^3=\rho$, for sufficiently small fixed gas parameter $\rho a^3>0$ and some $c>0$.`,
    context: r`Use periodic boxes, fixed kinetic-energy normalization and a potential with positive scattering length $a$. The density and potential stay fixed as the box grows: this is not a mean-field or Gross–Pitaevskii scaling limit.

Established baseline: rigorous energy asymptotics and condensation theorems in other scaling regimes provide substantial progress but do not imply a macroscopic one-body eigenvalue in this homogeneous fixed-density limit. Solovej's 2025 account explicitly separates the energy expansion from this condensation question.

Positive-temperature condensation and quantitative depletion are further targets, not required for the zero-temperature existence benchmark.`,
    refs: [{ label: "Solovej, original open questions on the dilute Bose gas (2025), sections 5 and 8", url: "https://comptes-rendus.academie-sciences.fr/physique/item/10.5802/crphys.247.pdf" }],
  },

  { id: "B14", cat: "many-body", horizon: "sharp",
    title: "Laughlin bulk spectral gap",
    statement: r`For the full fermionic $\nu=1/3$ Haldane $V_1$ pseudopotential projected to the lowest Landau level on tori with fixed magnetic length and bounded aspect ratio, prove a system-size-independent positive energy gap above its ground space at $N_\phi=3N$.`,
    context: r`The energy normalization is fixed as particle number grows. The target is the untruncated parent Hamiltonian in the two-dimensional thermodynamic limit, not a thin-cylinder approximation and not uniqueness of a topologically degenerate ground space.

Established baseline: Warzel and Young prove a gap for a thin-torus truncated model. That important theorem does not establish the full pseudopotential gap on bounded-aspect-ratio tori.

Preprint progress (2026): Schraven and Warzel study thin-cylinder Laughlin correlations and an entanglement-spectrum gap. An entanglement-spectrum gap is not the Hamiltonian excitation gap sought here. Rigorous finite-size criteria or controlled approximation errors connecting a solved model to the full parent would be meaningful partial progress.`,
    relations: [{ id: "M6", type: "related" }, { id: "B9", type: "parent" }],
    evidence: [{ kind: "preprint", summary: "Thin-cylinder correlation decay and an entanglement-spectrum gap; not a proof of the full bulk energy gap.", url: "https://arxiv.org/abs/2601.12165" }],
    refs: [
      { label: "Warzel & Young, spectral gap for a thin-torus truncated model", url: "https://arxiv.org/abs/2112.13764" },
      { label: "Young, bulk-gap methods and open questions", url: "https://arxiv.org/abs/2308.01405" },
      { label: "Schraven & Warzel, thin-cylinder Laughlin correlations and entanglement spectrum (2026 preprint)", url: "https://arxiv.org/abs/2601.12165" },
    ] },

  { id: "B15", cat: "many-body", horizon: "incremental",
    title: "Ground-state phase of the kagome Heisenberg model",
    statement: r`Determine the thermodynamic ground-state phase and excitation gap of $H=\sum_{\langle ij\rangle}\vec S_i\cdot\vec S_j$ for spin $1/2$ on the uniform kagome lattice, with nearest-neighbor antiferromagnetic coupling one and no additional interactions.`,
    context: r`This concrete frustrated quantum magnet is a canonical spin-liquid benchmark. Competing interpretations include a gapped $\mathbb Z_2$ spin liquid and a gapless Dirac spin liquid; the 2026 primary numerical study cited below describes the continuing dispute.

The target requires controlled thermodynamic extrapolation, certified numerical bounds or a proof. Finite-cylinder spectra, variational energies and finite bond dimensions are evidence with limitations, not an exact phase determination. Magnetic materials with further-neighbor or anisotropic interactions, square-kagome models and breathing-kagome variants are different Hamiltonians.`,
    relations: [{ id: "B8", type: "parent" }, { id: "B9", type: "related" }],
    evidence: [{ kind: "numerical", summary: "A published 2026 study examines competing kagome spin-liquid descriptions; the full thermodynamic phase remains unresolved.", url: "https://www.nature.com/articles/s41524-026-01959-5" }],
    refs: [{ label: "Jiang et al., kagome spin-liquid study, npj Computational Materials (2026)", url: "https://www.nature.com/articles/s41524-026-01959-5" }],
  },
];
