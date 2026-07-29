const r = String.raw;

export const MANYBODY = [
  { id: "B1", cat: "many-body", horizon: "sharp",
    title: "Area law in two spatial dimensions",
    statement: r`Prove that the ground state of every sufficiently local, finite-dimensional, gapped 2D Hamiltonian satisfies $S(\rho_A)\le C\,|\partial A|$ up to a controlled correction, without assuming frustration freeness or adiabatic triviality.`,
    context: r`The area law says entanglement entropy of a region $A$ scales with the size of its boundary $|\partial A|$ rather than its volume. It underlies why gapped ground states are efficiently describable by tensor networks and is a cornerstone of Hamiltonian complexity.

What is known: In 1D the area law is a theorem. Hastings proved that gapped 1D ground states obey $S\le c/\Delta$ (later improved by Arad–Kitaev–Landau–Vazirani and Arad–Landau–Vazirani–Vidick to bounds nearly linear in $1/\Delta$ and polylogarithmic in dimension), which implies efficient MPS approximation. Special 2D cases are also settled: frustration-free / stabilizer models, systems with a good adiabatic path to a product state, and models with specific structure.

The general 2D case is one of the central open conjectures of the field. Even a sub-volume-law bound for arbitrary gapped 2D Hamiltonians would be significant. The 1D proof techniques (detectability lemma, approximate ground-state projectors, Chebyshev filtering) do not straightforwardly extend because 2D lacks the linear structure that controls entanglement growth. Related: B2, and the undecidability results U1 constrain what a fully general statement can look like.`,
    refs: [
      { label: "Hastings, 'An area law for one-dimensional quantum systems', J. Stat. Mech. (2007) P08024" },
      { label: "Arad, Kitaev, Landau, Vazirani, 'An area law and sub-exponential algorithm for 1D systems' (2013)" },
      { label: "Eisert, Cramer, Plenio, 'Colloquium: Area laws for the entanglement entropy', Rev. Mod. Phys. 82, 277 (2010)" },
    ] },

  { id: "B2", cat: "many-body", horizon: "sharp",
    title: "Efficient tensor-network approximation in 2D",
    statement: r`Determine whether every gapped 2D ground state admits a PEPS (or other efficiently describable tensor network) with polynomial bond dimension approximating local observables.`,
    context: r`This is the constructive twin of the 2D area law (B1): even granting bounded boundary entanglement, does it follow that a polynomial-bond-dimension PEPS reproduces all local expectation values? The practical success of PEPS/DMRG-in-2D suggests yes, but the implication 'area law ⇒ efficient tensor network' is proven only in 1D.

What is known: In 1D, an area law plus a spectral gap yields an efficient MPS approximation, and the ground state can be found in polynomial time (Landau–Vazirani–Vidick). In 2D the chain of implications breaks: bounded entropy across cuts does not obviously bound the bond dimension needed for a global PEPS, and contracting a general 2D PEPS is itself #P-hard (see B3), so even having a PEPS description need not make it useful.

A positive answer would justify a huge body of numerical practice and connect to B1; a negative answer — a gapped 2D ground state with no efficient tensor-network description — would be equally striking and would sharpen the boundary of Hamiltonian complexity.`,
    refs: [
      { label: "Cirac, Pérez-García, Schuch, Verstraete, Rev. Mod. Phys. 93, 045003 (2021)" },
      { label: "Landau, Vazirani, Vidick, 'A polynomial-time algorithm for the ground state of 1D gapped Hamiltonians', Nat. Phys. 11 (2015)" },
    ] },

  { id: "B3", cat: "many-body", horizon: "incremental",
    title: "Efficient contraction of physically restricted PEPS",
    statement: r`Identify the largest natural class of gapped or injective PEPS for which norms and local expectation values can be approximated in polynomial time.`,
    context: r`Even when a state has a compact PEPS description, extracting expectation values requires contracting the network. Schuch, Wolf, Verstraete and Cirac showed exact PEPS contraction is #P-hard and even approximate contraction is PP-hard in the worst case, so no efficient algorithm exists for arbitrary PEPS.

What is known: The obstruction is worst-case. For physically relevant PEPS the picture is better: contraction is efficient when the transfer operator / boundary state has a spectral gap and finite correlation length, which holds for injective PEPS deep in a gapped phase; renormalization schemes (boundary MPS, corner transfer matrix, tensor renormalization group) work well empirically in exactly these regimes. Rigorous polynomial-time guarantees exist for restricted families with decaying correlations and bounded boundary entanglement.

The open, incremental problem is to pin down the largest natural class — e.g. injective/gapped PEPS with a uniformly gapped boundary transfer operator — for which approximate contraction is provably polynomial, and to give checkable certificates. This directly limits which 2D ground states are computationally accessible. Related: B2, U-category.`,
    refs: [
      { label: "Schuch, Wolf, Verstraete, Cirac, 'Computational complexity of PEPS', PRL 98, 140506 (2007)" },
      { label: "Cirac, Pérez-García, Schuch, Verstraete, Rev. Mod. Phys. 93 (2021)" },
    ] },

  { id: "B4", cat: "many-body", horizon: "incremental",
    title: "Eigenstate thermalization hypothesis",
    statement: r`Give checkable hypotheses on a nonintegrable local Hamiltonian implying the diagonal and off-diagonal ETH estimates for individual finite-energy-density eigenstates.`,
    context: r`ETH explains how isolated quantum systems thermalize: it posits that matrix elements of local observables in the energy eigenbasis take the Srednicki form, with smooth diagonal parts (equal to the microcanonical average) and pseudo-random, exponentially-small-in-entropy off-diagonal parts. If ETH holds, individual eigenstates already look thermal and expectation values relax to Gibbs values.

What is known: ETH is overwhelmingly supported numerically for nonintegrable spin chains and is provable for specific structured systems — random-matrix models, systems close to GUE/GOE, and certain dual-unitary or Floquet-random circuits where the eigenvector statistics are tractable. Weak/subsystem versions (canonical typicality, 'weak ETH' where only most eigenstates are thermal) are theorems. Integrable and MBL systems violate ETH, and quantum many-body scars (see B7) are ETH-violating eigenstates embedded in an otherwise thermal spectrum.

Deriving ETH from the structure of a concrete, non-random local Hamiltonian — checkable sufficient conditions guaranteeing the diagonal and off-diagonal ansatz for its actual eigenstates — is open. This is the incremental, rigorous heart of quantum thermalization. Related: B5, B7, M4, U3.`,
    refs: [
      { label: "Deutsch, PRA 43 (1991); Srednicki, PRE 50 (1994)" },
      { label: "D'Alessio, Kafri, Polkovnikov, Rigol, 'From quantum chaos and ETH to statistical mechanics and thermodynamics', Adv. Phys. 65 (2016)" },
    ] },

  { id: "B5", cat: "many-body", horizon: "programme",
    title: "Unitary derivation of thermalization",
    statement: r`Prove thermalization, with quantitative time scales and finite-size errors, for a nonintegrable translation-invariant many-body Hamiltonian and a broad class of nonequilibrium initial states.`,
    context: r`Beyond ETH as an ansatz (B4), the goal is to prove from the microscopic unitary dynamics that a nonintegrable many-body system relaxes to thermal equilibrium, with explicit relaxation time scales, bounds on residual fluctuations, and control of finite-size effects.

What is known: General 'equilibration on average' results (Linden–Popescu–Short–Winter; Reimann; Short–Farrelly) show that under mild nondegeneracy of energy gaps, expectation values of local observables spend most of the time close to their time-averaged values — but these give equilibration to the diagonal ensemble, not necessarily to the Gibbs state, and yield no useful time scales. For free/quadratic and integrable models, relaxation to a generalized Gibbs ensemble is rigorously understood, and generalized hydrodynamics describes the late-time transport. Certain quenches in specific models have controlled results.

Proving genuine thermalization with quantitative rates for a truly interacting, non-integrable Hamiltonian and generic initial states is a long-horizon programme touching ETH, typicality, and dynamical chaos simultaneously. Related: B4, B6.`,
    refs: [
      { label: "Linden, Popescu, Short, Winter, 'Quantum mechanical evolution towards thermal equilibrium', PRE 79, 061103 (2009)" },
      { label: "Gogolin & Eisert, 'Equilibration, thermalisation, and the emergence of statistical mechanics in closed quantum systems', Rep. Prog. Phys. 79 (2016)" },
    ] },

  { id: "B6", cat: "many-body", horizon: "programme",
    title: "Derivation of quantum hydrodynamics",
    statement: r`From local unitary many-body dynamics, derive diffusion, ballistic transport, or nonlinear fluctuating hydrodynamics with explicit error bounds in an appropriate scaling limit.`,
    context: r`Hydrodynamics — the effective large-scale description of conserved densities via diffusion or ballistic transport — is expected to emerge from microscopic quantum dynamics, but deriving it rigorously is a longstanding challenge, the quantum analogue of Hilbert's sixth problem for classical mechanics.

What is known: For integrable systems there has been a breakthrough: generalized hydrodynamics (GHD), developed by Castro-Alvaredo–Doyon–Yoshimura and Bertini–Collura–De Nardis–Fagotti, gives the exact Euler-scale transport of the infinitely many conserved charges, and has been confirmed experimentally in cold-atom gases. Anomalous (Kardar–Parisi–Zhang) transport in the Heisenberg chain has been identified and partly explained. For classical interacting particle systems, hydrodynamic limits are rigorously established (Guo–Papanicolaou–Varadhan and successors).

Deriving normal diffusion — a finite diffusion constant — from a genuinely interacting, non-integrable quantum lattice model, with quantitative error bounds in a diffusive scaling limit, remains open and is a central programme in mathematical statistical mechanics. Related: B5, B12.`,
    refs: [
      { label: "Castro-Alvaredo, Doyon, Yoshimura, 'Emergent hydrodynamics in integrable quantum systems out of equilibrium', PRX 6, 041065 (2016)" },
      { label: "Bertini et al., 'Finite-temperature transport in one-dimensional quantum lattice models', Rev. Mod. Phys. 93, 025003 (2021)" },
    ] },

  { id: "B7", cat: "many-body", horizon: "programme",
    title: "Classification of failures of thermalization",
    statement: r`Build a common framework encompassing integrability, MBL, Hilbert-space fragmentation, quantum many-body scars and pseudolocal charges, and determine which are stable phases rather than fine-tuned exceptions.`,
    context: r`Several distinct mechanisms let quantum systems evade the ETH paradigm: integrability (extensively many local conserved charges), many-body localization (emergent l-bits under disorder), Hilbert-space fragmentation (dynamical shattering of the state space into exponentially many disconnected sectors), quantum many-body scars (rare non-thermal eigenstates, as in the PXP/Rydberg model), and pseudolocal or non-Abelian conserved quantities.

What is known: Each mechanism has its own well-developed theory and diagnostic (level statistics, entanglement scaling, revivals, commutant algebras for fragmentation). Recent work (Moudgalya–Motrunich) organizes scars and fragmentation via commutant algebras, a promising unifying language. Integrability is understood via Bethe ansatz / Yang–Baxter structure.

What is missing is a single framework that classifies these mechanisms together and — crucially — decides which are stable phases robust to generic perturbations versus fine-tuned exceptions. MBL's stability is itself contested (M4); scars are typically non-generic; fragmentation can be fragile. Determining the stability landscape of ergodicity-breaking is a broad programme. Related: B4, M4.`,
    refs: [
      { label: "Serbyn, Abanin, Papić, 'Quantum many-body scars and weak breaking of ergodicity', Nat. Phys. 17, 675 (2021)" },
      { label: "Moudgalya & Motrunich, 'Hilbert space fragmentation and commutant algebras', PRX 12, 011050 (2022)" },
    ] },

  { id: "B8", cat: "many-body", horizon: "programme",
    title: "Classification of gapped phases in d≥2",
    statement: r`Classify gapped local Hamiltonians up to gap-preserving local deformations, including intrinsic topological order, symmetry-enriched phases, chiral phases and anomalous boundaries.`,
    context: r`Two gapped Hamiltonians are in the same phase if connected by a path that keeps the gap open (equivalently, by a finite-depth local unitary, up to stacking with trivial states). Classifying phases means enumerating these equivalence classes, with and without symmetry.

What is known: In 1D the classification is complete: without symmetry all gapped phases are trivial; with an on-site symmetry group $G$, bosonic SPT phases are classified by the group cohomology $H^2(G,U(1))$ (Chen–Gu–Liu–Wen; Schuch–Pérez-García–Cirac; Fidkowski–Kitaev for fermions). In 2D, intrinsic topological order is described by anyon content / modular tensor categories, symmetry-protected phases by higher group cohomology and cobordism, and there is a rich theory of symmetry-enriched topological order.

But 2D and 3D are a major, still-incomplete programme mixing physics with higher category theory and cobordism. Chiral phases (nonzero chiral central charge, no gapped boundary), the precise role of invertible/anomalous phases, fermionic and crystalline cases, and a fully rigorous equivalence relation are not settled. Related: B9.`,
    refs: [
      { label: "Chen, Gu, Liu, Wen, 'Symmetry protected topological orders and group cohomology', PRB 87, 155114 (2013)" },
      { label: "Kitaev, 'Anyons in an exactly solved model and beyond', Ann. Phys. 321 (2006)" },
      { label: "Senthil, 'Symmetry-protected topological phases of quantum matter', Annu. Rev. Condens. Matter Phys. 6 (2015)" },
    ] },

  { id: "B9", cat: "many-body", horizon: "programme",
    title: "Completeness of topological invariants",
    statement: r`Determine whether known invariants — anyon data, fusion/braiding categories, chiral central charge, symmetry fractionalization, higher-form data — completely classify the corresponding gapped phases.`,
    context: r`A cluster of invariants is used to label topologically ordered phases. The question is whether they form a complete invariant: do two systems with identical data necessarily lie in the same phase, and does every consistent set of data arise from a physical Hamiltonian (realizability)?

What is known: For 2D bosonic topological order the working conjecture is that a unitary modular tensor category (UMTC) together with the chiral central charge $c_-$ completely classifies the phase; much structure (fusion, braiding, modular data) is understood, and the relation to conformal field theory boundaries is well developed. Rank-finiteness (Bruillard–Ng–Rowell–Wang) shows only finitely many UMTCs exist at each rank. Symmetry-enriched cases are classified by additional fractionalization data.

Completeness is not proven in general, and there are known subtleties: modular data alone is not a complete invariant of a UMTC (Mignard–Schauenburg counterexamples), so extra data is genuinely needed; the 3D+ situation (with loop excitations, higher-form symmetries) is far less settled. Establishing completeness and realizability is a deep, category-theoretic programme. Related: B8.`,
    refs: [
      { label: "Rowell, Stong, Wang, 'On classification of modular tensor categories', Comm. Math. Phys. 292 (2009)" },
      { label: "Mignard & Schauenburg, 'Modular categories are not determined by their modular data', Lett. Math. Phys. 111 (2021)" },
    ] },

  { id: "B10", cat: "many-body", horizon: "programme",
    title: "Two-dimensional Hubbard model",
    statement: r`Determine rigorously the zero-temperature phase diagram of the repulsive Hubbard model on the square lattice — antiferromagnetism, pseudogap, and superconducting order away from half filling.`,
    context: r`The single-band Hubbard model $H=-t\sum_{\langle ij\rangle\sigma}c^\dagger_{i\sigma}c_{j\sigma}+U\sum_i n_{i\uparrow}n_{i\downarrow}$ on the square lattice is the minimal model of strongly correlated electrons and the prime candidate for capturing cuprate high-Tc superconductivity. Its zero-temperature phase diagram as a function of filling and $U/t$ is the target.

What is known: At half filling the ground state is a Mott/antiferromagnetic insulator, and rigorous results exist in limiting cases (Lieb's theorems on the attractive/half-filled model and ferrimagnetism; Nagaoka ferromagnetism at $U=\infty$ with one hole). Away from half filling the sign problem blocks unbiased quantum Monte Carlo. A landmark multi-method study (Simons Collaboration: Zheng et al.) found, at specific doping and coupling, a striped ground state nearly degenerate with uniform d-wave superconductivity, showing the energetics are extraordinarily close.

The full doped phase diagram — whether and where the model superconducts, the nature of the pseudogap, and the competition with stripe/charge order — is contested even numerically, and there is no rigorous determination. This is a grand programme, not a single conjecture. Related: B11.`,
    refs: [
      { label: "Qin, Schäfer, Andergassen, Corboz, Gull, 'The Hubbard model: a computational perspective', Annu. Rev. Condens. Matter Phys. 13 (2022)" },
      { label: "Zheng et al. (Simons Collaboration), 'Stripe order in the underdoped region of the two-dimensional Hubbard model', Science 358 (2017)" },
      { label: "Lieb, 'Two theorems on the Hubbard model', PRL 62, 1201 (1989)" },
    ] },

  { id: "B11", cat: "many-body", horizon: "incremental", status: "improved",
    title: "Intrinsic sign problem",
    statement: r`Characterize which local Hamiltonians can be transformed, by an efficiently describable local or quasilocal change of basis, into a stoquastic Hamiltonian.`,
    context: r`The sign problem is the exponential obstruction that blocks quantum Monte Carlo for many fermionic and frustrated systems. A Hamiltonian is 'stoquastic' (sign-problem-free in a given basis) if its off-diagonal matrix elements are nonpositive. The question is which systems are only 'basis-dependently' cursed — curable by a local basis change — versus intrinsically sign-problematic.

What is known: Deciding stoquasticity in a fixed basis is easy, but allowing local basis changes makes it subtle. Recent breakthroughs prove that certain phases have an intrinsic sign problem: Hastings, and Ringel–Kovrizhin, and then Smith–Kim–Pollmann–Knolle, showed that specific topological phases (e.g. those with nonzero chiral central charge, and certain time-reversal-invariant topological matter) admit no local sign-free basis — the sign problem is a robust property of the phase. This links the sign problem to topology and to complexity class StoqMA (A9).

New progress (2026): Karakashian and Hen separated stoquastizability from vanishing geometric phase (VGP). They exhibit VGP 3-local Hamiltonians which are formally hard to stoquastize yet retain StoqMA-type complexity, give polynomial-time recognition in several natural settings, and prove general VGP recognition PSPACE-complete for geometrically local Hamiltonians. The result suggests that the tractable/sign-free boundary is not captured by the existence of a stoquastizing basis alone; it does not provide the sought necessary-and-sufficient quasilocal basis-change criterion.

**Authors' statement (unverified):** The manuscript contains no disclosure of generative-AI use and thanks Milad Marvian and Michael Jarret for discussions. In the absence of a declaration, the work would appear human-authored, but this catalogue cannot independently establish that no AI tools were used.

A general characterization — necessary and sufficient conditions for a local Hamiltonian to be curable by a quasilocal basis change — is open and being extended phase by phase. Related: A9, B10.`,
    refs: [
      { label: "Hastings, 'How quantum are non-negative wavefunctions?', J. Math. Phys. 57, 015210 (2016)" },
      { label: "Smith, Kim, Pollmann, Knolle, 'Simulating quantum many-body dynamics on a current digital quantum computer' / Hangleiter et al., 'Easing the sign problem'; Ringel & Kovrizhin, Sci. Adv. 3 (2017)" },
      { label: "Karakashian & Hen, 'Dismantling the Stoquastic Dichotomy' (2026)", url: "https://arxiv.org/abs/2607.18596" },
    ] },

  { id: "B12", cat: "many-body", horizon: "incremental",
    title: "Optimal Lieb–Robinson bounds for long-range systems",
    statement: r`Determine the sharp effective causal region and information-propagation speed for interactions decaying as $r^{-\alpha}$, in all regimes of $\alpha$ and spatial dimension.`,
    context: r`Lieb–Robinson bounds give an emergent 'light cone' limiting how fast information and correlations spread under local Hamiltonian dynamics. For short-range interactions the cone is linear with a finite group velocity. For long-range interactions decaying as $1/r^\alpha$, the cone can broaden into a polynomial or logarithmic shape, and the sharp form depends intricately on $\alpha$ and dimension $d$.

What is known: A sequence of works progressively tightened the picture. Hastings–Koma and Nachtergaele–Ogata–Sims gave early long-range bounds; Foss-Feig et al., Tran et al., and Chen–Lucas, Kuwahara–Saito, Else et al. established regime boundaries. It is now known that for $\alpha>2d$ a linear light cone holds (Kuwahara–Saito; Tran et al.), for smaller $\alpha$ there are provable polynomial cones, and matching state-transfer protocols show many of these are essentially optimal. The full $\alpha$–$d$ 'phase diagram' of information propagation is nearly, but not completely, pinned down, especially in the strongly long-range regime $\alpha<d$.

Closing the remaining gaps between upper bounds and achievable protocols across all $\alpha$ and $d$, and for interacting (not just free) dynamics, is the incremental target. This controls entanglement growth, simulation cost, and hydrodynamics (B6). `,
    refs: [
      { label: "Chen, Lucas, Yin, 'Speed limits and locality in many-body quantum dynamics', Rep. Prog. Phys. 86 (2023)" },
      { label: "Tran et al., 'Hierarchy of linear light cones with long-range interactions', PRX 10, 031009 (2020)" },
      { label: "Kuwahara & Saito, 'Strictly linear light cones in long-range interacting systems...', PRX 10, 031010 (2020)" },
    ] },
];
