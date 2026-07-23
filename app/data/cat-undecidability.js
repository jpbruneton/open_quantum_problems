const r = String.raw;

export const UNDECIDABILITY = [
  { id: "U1", cat: "undecidability", horizon: "incremental",
    title: "Boundary between decidable and undecidable gap problems",
    statement: r`Classify the restrictions on dimension, translation invariance, local dimension, interaction range and frustration under which the thermodynamic spectral-gap problem becomes decidable.`,
    context: r`The spectral gap problem asks whether a given translationally-invariant local Hamiltonian is gapped or gapless in the thermodynamic limit. Astonishingly, this is undecidable in general: there is no algorithm that always answers correctly.

What is known: Cubitt–Pérez-García–Wolf (Nature, 2015) proved undecidability of the spectral gap for 2D translation-invariant nearest-neighbor Hamiltonians, by encoding a universal Turing machine's halting into the low-energy physics via quasiperiodic (Robinson) tilings and history-state constructions; the ground state exhibits a size-dependent phase transition tied to the halting problem. Bausch–Cubitt–Lucia–Pérez-García (PRX, 2020) extended undecidability to 1D chains (with larger local dimension). These constructions use large but fixed local Hilbert-space dimension.

The complementary, incremental question is where decidability is restored: for small local dimension, specific geometries, frustration-free systems, commuting Hamiltonians, or gapped classes with extra structure, the gap can be decidable. Charting exactly which restrictions on dimension, local dimension, interaction range, translation invariance, and frustration make the problem decidable is open — the constructive flip side of the undecidability theorems. Related: M7, U2, B1.`,
    refs: [
      { label: "Cubitt, Pérez-García, Wolf, 'Undecidability of the spectral gap', Nature 528, 207 (2015)" },
      { label: "Bausch, Cubitt, Lucia, Pérez-García, 'Undecidability of the spectral gap in one dimension', PRX 10, 031038 (2020)" },
    ] },

  { id: "U2", cat: "undecidability", horizon: "incremental",
    title: "Computability of phase diagrams",
    statement: r`Determine which families of local Hamiltonians have computable phase boundaries and order parameters, given that unrestricted phase questions can encode undecidable problems.`,
    context: r`Building on the undecidability of the spectral gap, one can ask whether the phase diagram of a parametrized family of Hamiltonians — the location of its phase boundaries and the behavior of order parameters — is computable.

What is known: In general it is not. Bausch–Cubitt–Watson (Nat. Commun., 2021) constructed families of Hamiltonians with an uncomputable phase diagram: the number and location of quantum phase transitions as a function of an external parameter cannot be determined by any algorithm, and the phase diagram can contain uncomputably many transitions. Related constructions show order parameters and even the presence/absence of a transition at a given parameter value can be undecidable. These extend the CPW machinery (U1) to the parameter-dependence of ground-state physics.

The incremental problem is to delineate the computable cases: which structured families (e.g. with symmetry, frustration-freeness, or restricted local dimension) have computable phase boundaries and order parameters. Mapping this decidable/undecidable frontier for phase diagrams is open. Related: U1, U3, B10.`,
    refs: [
      { label: "Bausch, Cubitt, Watson, 'Uncomputability of phase diagrams', Nat. Commun. 12, 452 (2021)" },
      { label: "Cubitt, Pérez-García, Wolf, Nature 528 (2015)" },
    ] },

  { id: "U3", cat: "undecidability", horizon: "incremental",
    title: "Computability of thermalization",
    statement: r`Classify the local Hamiltonian families for which long-time averages, thermalization and equilibration are decidable or effectively approximable.`,
    context: r`Beyond static (ground-state) properties, one can ask whether dynamical questions — does the system thermalize? what is the long-time average of an observable? — are computable from the Hamiltonian's description.

What is known: Several dynamical properties have been shown undecidable. There are results (e.g. by Shiraishi–Matsumoto, and in the measurement-occurrence / reachability settings) that whether a given local observable's long-time behavior thermalizes, or whether certain events ever occur under the dynamics, can be undecidable, by encoding computation into the time evolution. Bausch–Cubitt–adjacent techniques and quantum-Turing-machine embeddings drive these results. On the positive side, for integrable and free systems the long-time (generalized Gibbs) behavior is computable, and equilibration-on-average theorems (B5) give effective statements under nondegeneracy assumptions.

Classifying precisely which Hamiltonian families have decidable or effectively approximable thermalization, equilibration, and long-time averages is open. It connects the undecidability program to the physics of thermalization. Related: B4, B5, M4, U2.`,
    refs: [
      { label: "Shiraishi & Matsumoto, 'Undecidability in quantum thermalization', Nat. Commun. 12, 5084 (2021)" },
      { label: "Cubitt, Pérez-García, Wolf, Nature 528 (2015)" },
    ] },

  { id: "U4", cat: "undecidability", horizon: "incremental",
    title: "Computability of channel capacities",
    statement: r`Classify quantum channels according to whether their classical, private, quantum and zero-error capacities are computable, semicomputable or noncomputable.`,
    context: r`Quantum channel capacities are given by regularized (many-copy) formulas that resist evaluation (C1). A sharper question is whether they are computable at all, in the sense of computable analysis: can one algorithmically approximate the capacity to any desired precision from a description of the channel?

What is known: Several capacities are provably not computable. Boche–Schaefer–Poor and collaborators proved that the quantum capacity is not a computable function of the channel — it is not even Banach–Mazur computable, and in fact it is not semi-decidable to lower- and upper-bound it simultaneously; similar non-computability results were shown for the private capacity, for certain classical capacities of specific channel models, and for the zero-error capacities (whose classical roots are already combinatorially hard, C6). These results use the undecidability of associated integer problems embedded into channel families.

A complete classification — for each capacity (classical, private, quantum, zero-error, two-way) which channels have computable, semicomputable, or non-computable capacities — is open, and would delimit what quantum Shannon theory can ever hope to evaluate algorithmically. Related: C1, C6, C9.`,
    refs: [
      { label: "Boche, Schaefer, Poor, 'Communication under channel uncertainty: an algorithmic perspective and effective construction', IEEE Trans. Signal Process. (2020)" },
      { label: "Elkouss & Pérez-García, 'Memory effects can make the transmission capability of a communication channel uncomputable', Nat. Commun. 9, 1149 (2018)" },
    ] },

  { id: "U5", cat: "undecidability", horizon: "incremental",
    title: "Computable analysis for quantum mechanics",
    statement: r`Develop a physically appropriate computability framework for unbounded operators, continuous spectra, generalized eigenstates and infinite tensor products, with a clear account of finite-information input.`,
    context: r`The undecidability and non-computability results above (U1–U4) rely on notions of computability applied to quantum objects. But a foundational question underlies them: what is the right computability framework for genuinely infinite-dimensional quantum mechanics — unbounded Hamiltonians, continuous spectra, generalized (non-normalizable) eigenstates, and infinite tensor products?

What is known: The general theory of computable analysis (Weihrauch's Type-2 theory of effectivity) and the earlier Pour-El–Richards theory of computable operators provide the tools. Pour-El–Richards famously showed that the solution operator of the wave equation can map computable initial data to non-computable solutions, and studied computability of unbounded operators and eigenvalues. Computable spectral theory, computable C*-algebras, and effective versions of the spectral theorem have been developed in parts. In quantum information, computability is usually handled via finite-dimensional approximations.

Assembling these into a single, physically appropriate framework — handling unbounded observables, continuous spectra, generalized eigenstates, and infinite tensor products, with a clean account of how a physical Hamiltonian is specified with finite information — is an open foundational task underpinning all of the U-category. Related: U1–U4, M11.`,
    refs: [
      { label: "Weihrauch, 'Computable Analysis: An Introduction' (Springer, 2000)" },
      { label: "Pour-El & Richards, 'Computability in Analysis and Physics' (Springer, 1989)" },
    ] },
];
