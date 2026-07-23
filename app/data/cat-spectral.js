const r = String.raw;

export const SPECTRAL = [
  { id: "M1", cat: "spectral", horizon: "sharp",
    title: "Ionization conjecture for atoms",
    statement: r`For the nonrelativistic Coulomb Hamiltonian of a nucleus of charge $Z$, prove that the maximal number of bound electrons $N_c(Z)$ satisfies $N_c(Z)\le Z+C$ for a universal constant $C$ independent of $Z$.`,
    context: r`The question is how many electrons a nucleus of charge $Z$ can bind. Physically atoms bind at most one or two extra electrons, so one expects $N_c(Z)-Z$ to stay bounded. Proving this from the many-body Schrödinger operator $H=\sum_i(-\Delta_i-Z/|x_i|)+\sum_{i<j}1/|x_i-x_j|$ is the ionization conjecture.

What is known: Zhislin proved that a neutral or positive net charge always binds ($N_c(Z)\ge Z$). On the upper side, Ruskai and Sigal showed $N_c(Z)$ is finite; Lieb's elegant argument gives $N_c(Z)<2Z+1$, and asymptotic results (Lieb–Sigal–Simon–Thirring, Fefferman–Seco) show $N_c(Z)/Z\to1$ as $Z\to\infty$. Nam later improved the bound to roughly $N_c(Z)\le 1.22\,Z + 3Z^{1/3}$.

The conjectured sharp form $N_c(Z)\le Z+C$ has been proved in mean-field surrogates: Solovej established it for Hartree–Fock theory, and analogous statements hold in Thomas–Fermi–type and reduced density-matrix models. For the full many-electron Schrödinger operator it remains open; the obstruction is controlling electron–electron screening rigorously without a self-consistent mean field.`,
    refs: [
      { label: "Lieb, 'Bound on the maximum negative ionization of atoms and molecules', PRA 29, 3018 (1984)" },
      { label: "Solovej, 'The ionization conjecture in Hartree–Fock theory', Ann. of Math. 158 (2003)" },
      { label: "Nam, 'New bounds on the maximum ionization of atoms', Comm. Math. Phys. 312 (2012)" },
      { label: "Lieb & Seiringer, 'The Stability of Matter in Quantum Mechanics' (CUP, 2010)" },
    ] },

  { id: "M2", cat: "spectral", horizon: "sharp",
    title: "Delocalization in the 3D Anderson model",
    statement: r`For the standard random Schrödinger operator on $\mathbb{Z}^3$ at weak disorder, prove existence of an absolutely continuous spectral regime and extended states, and establish the localization–delocalization transition.`,
    context: r`The Anderson Hamiltonian $H=-\Delta+\lambda V_\omega$ on $\ell^2(\mathbb{Z}^d)$, with i.i.d. random potential $V_\omega$, models a quantum particle in a disordered medium. Physics (the scaling theory of localization) predicts that for $d\ge3$ and weak disorder $\lambda$ there is a mobility edge separating a low-energy/strong-disorder localized regime from a delocalized regime with absolutely continuous (a.c.) spectrum and diffusive transport.

What is known: Localization is well established. At strong disorder, band edges, or in $d=1,2$, the spectrum is pure point with exponentially localized eigenfunctions — proved via multiscale analysis (Fröhlich–Spencer) and the fractional-moment method (Aizenman–Molchanov). The delocalized phase in $d\ge3$ is essentially untouched: there is no proof of a.c. spectrum for any $\mathbb{Z}^d$ Anderson model.

The one rigorous delocalization result is on the Bethe lattice (regular tree), where Klein proved persistence of a.c. spectrum at weak disorder, with later work by Aizenman–Warzel and Anderson-transition results by Aizenman–Sims–Warzel. Random-matrix and supersymmetry heuristics support the $\mathbb{Z}^3$ picture but resist rigor. Establishing delocalization on $\mathbb{Z}^3$ is one of the outstanding problems of mathematical physics.`,
    refs: [
      { label: "Aizenman & Warzel, 'Random Operators: Disorder Effects on Quantum Spectra and Dynamics' (AMS, 2015)" },
      { label: "Klein, 'Extended states in the Anderson model on the Bethe lattice', Adv. Math. 133 (1998)" },
      { label: "Fröhlich & Spencer, Comm. Math. Phys. 88 (1983); Aizenman & Molchanov, Comm. Math. Phys. 157 (1993)" },
    ] },

  { id: "M3", cat: "spectral", horizon: "incremental",
    title: "Mobility edges",
    statement: r`For a natural random Schrödinger operator, prove existence of, and locate or bound the regularity of, an energy separating localized from delocalized states.`,
    context: r`A mobility edge is a critical energy $E_c$ at which the nature of the spectrum changes from pure-point (localized) to absolutely continuous (delocalized). It is the sharp fingerprint of the Anderson transition and is tightly linked to M2: a full solution would prove both the delocalized phase and the existence of the boundary.

What is known: In genuinely random $\mathbb{Z}^d$ models no mobility edge has been proven, because the delocalized side is missing. There is more progress in structured models. For quasiperiodic operators such as the almost-Mathieu operator, Avila's global theory of one-frequency cocycles gives a sharp arithmetic transition between a.c. and point spectrum as the coupling crosses the self-dual point, which is a rigorous 'metal–insulator' transition of a different (non-random) type. Sharp transitions are also known for some 1D models with specific structure.

Even for the random case, a proof that some mobility edge exists — without pinning its location — would be major progress, as would rigorous control of its regularity or of critical exponents. This is an incremental, quantitative target sitting inside the M2 programme.`,
    refs: [
      { label: "Avila, 'Global theory of one-frequency Schrödinger operators', Acta Math. 215 (2015)" },
      { label: "See M2 (Aizenman–Warzel) for the random-operator background" },
    ] },

  { id: "M4", cat: "spectral", horizon: "sharp",
    title: "Many-body localization",
    statement: r`Prove or disprove the existence of a stable many-body-localized phase for a physically natural interacting lattice Hamiltonian in the thermodynamic limit, stable under generic small local perturbations.`,
    context: r`Many-body localization (MBL) is the conjectured survival of Anderson localization once interactions are switched on: an isolated, strongly disordered interacting system fails to thermalize, retains memory of initial conditions, and exhibits an emergent set of quasilocal integrals of motion (l-bits) with only logarithmic entanglement growth.

What is known: The strongest rigorous result is Imbrie's proof of MBL for a specific disordered 1D quantum spin chain, conditional on a physically reasonable but unproven level-statistics (limited level attraction) assumption. Perturbative and numerical studies broadly support an MBL phase in strongly disordered 1D systems.

The status is genuinely contested. De Roeck and Huveneers proposed the 'avalanche' instability: rare thermal (low-disorder) regions can act as mobile baths that thermalize the rest, potentially destabilizing MBL in the thermodynamic limit, definitely so in $d\ge2$ and arguably even in $d=1$ at any finite disorder. Numerics are plagued by strong finite-size drifts, and the critical disorder keeps moving upward with system size. A rigorous verdict — a stable MBL phase, or a proof that avalanches always win — is open and would settle a live physics controversy. Related: B4, B7, U3.`,
    refs: [
      { label: "Imbrie, 'On many-body localization for quantum spin chains', J. Stat. Phys. 163 (2016)" },
      { label: "De Roeck & Huveneers, 'Stability and instability towards delocalization in MBL systems', PRB 95, 155129 (2017)" },
      { label: "Abanin, Altman, Bloch, Serbyn, 'Many-body localization, thermalization, and entanglement', Rev. Mod. Phys. 91, 021001 (2019)" },
    ] },

  { id: "M5", cat: "spectral", horizon: "sharp",
    title: "Haldane gap for the spin-1 Heisenberg chain",
    statement: r`Prove that $H=\sum_{j\in\mathbb{Z}}\vec S_j\cdot\vec S_{j+1}$ for spin $1$ has a nonzero spectral gap above its ground state in the thermodynamic limit; more generally settle the integer-spin Haldane conjecture.`,
    context: r`Haldane predicted in 1983 that antiferromagnetic Heisenberg chains behave qualitatively differently for integer and half-integer spin: integer-spin chains have a unique ground state separated by a spectral gap (the Haldane gap) with exponentially decaying correlations, while half-integer chains are gapless. For $S=1$ the gap is measured numerically at $\Delta\approx0.4105\,J$ and confirmed experimentally in quasi-1D magnets.

What is known: For half-integer spin the Lieb–Schultz–Mattis theorem (extended by Affleck–Lieb, and in higher dimensions by Hastings) rigorously forbids a unique gapped ground state, consistent with gaplessness. On the integer side, the AKLT model — a nearby, specially tuned Hamiltonian — was proved by Affleck, Kennedy, Lieb and Tasaki to have a unique gapped ground state with a valence-bond-solid structure and hidden (string) order; this is the paradigm of a symmetry-protected topological phase. Den Nijs–Rommelse and Kennedy–Tasaki clarified the hidden $\mathbb{Z}_2\times\mathbb{Z}_2$ order and its detection.

The gap of the pure Heisenberg $S=1$ chain itself has no proof: AKLT is not adiabatically connected to it by any controlled analytic argument, and the gap must be established for a specific, non-tunable Hamiltonian. Settling the integer-spin Haldane conjecture is a landmark target of rigorous many-body physics.`,
    refs: [
      { label: "Haldane, 'Nonlinear field theory of large-spin Heisenberg antiferromagnets', PRL 50, 1153 (1983)" },
      { label: "Affleck, Kennedy, Lieb, Tasaki, 'Valence bond ground states...', Comm. Math. Phys. 115, 477 (1988)" },
      { label: "Lieb, Schultz, Mattis, Ann. Phys. 16 (1961); Hastings, PRB 69, 104431 (2004)" },
    ] },

  { id: "M6", cat: "spectral", horizon: "incremental",
    title: "Gap stability beyond controlled classes",
    statement: r`Find general, checkable hypotheses under which the bulk spectral gap of an interacting infinite quantum system is stable under local perturbations — including long-range interactions, degenerate ground spaces, or gapless boundary modes.`,
    context: r`Whether a spectral gap survives adding small local perturbations underpins the very notion of a gapped quantum phase of matter. If the gap can close under arbitrarily small perturbations, 'gapped phase' is not well defined.

What is known: The Bravyi–Hastings–Michalakis (BHM) theorem proves gap stability for frustration-free, uniformly gapped Hamiltonians satisfying local topological quantum order (LTQO) conditions, covering toric-code-type models and many commuting projector Hamiltonians. Michalakis–Zwolak, and later Nachtergaele–Sims–Young, extended and streamlined the framework (quasi-adiabatic continuation / spectral flow, Lieb–Robinson bounds), and it now handles some lattice gauge and fermionic systems.

The frontier is everything BHM excludes: interactions with only algebraic (long-range) decay, Hamiltonians that are not frustration-free, systems with degenerate or nearly degenerate ground spaces without full LTQO, and phases with gapless edge modes where a bulk gap coexists with boundary gaplessness. General, checkable stability criteria in these regimes are open; progress is incremental, extending the class of provably stable systems.`,
    refs: [
      { label: "Bravyi, Hastings, Michalakis, 'Topological quantum order: stability under local perturbations', J. Math. Phys. 51, 093512 (2010)" },
      { label: "Michalakis & Zwolak, Comm. Math. Phys. 322 (2013)" },
      { label: "Nachtergaele, Sims, Young, 'Quasi-locality bounds for quantum lattice systems...', J. Math. Phys. 60 (2019)" },
    ] },

  { id: "M7", cat: "spectral", horizon: "incremental",
    title: "Spectral gaps of PEPS parent Hamiltonians",
    statement: r`Develop effective criteria deciding whether the parent Hamiltonian of a specified family of projected entangled-pair states is uniformly gapped in the thermodynamic limit.`,
    context: r`Projected entangled-pair states (PEPS) are the 2D generalization of matrix product states (MPS); each family comes with a 'parent Hamiltonian' having the PEPS as ground state. Deciding whether that parent Hamiltonian is gapped in the thermodynamic limit controls whether the state represents a stable gapped phase.

What is known: In 1D the theory is essentially complete. MPS parent Hamiltonians of injective MPS are gapped, the ground state is unique, and correlations decay exponentially; this feeds the 1D classification of gapped phases. In 2D, injectivity/ G-injectivity give uniqueness and frustration-freeness, and some gap results follow when martingale-type or LTQO conditions hold.

But 2D is fundamentally harder: the general problem of deciding the gap is entangled with undecidability (see U1 — the spectral-gap problem is undecidable in 2D), so no fully general algorithm can exist. The realistic goal is effective sufficient criteria — checkable conditions on the PEPS tensors (approximate factorization, boundary-state / transfer-operator gaps, injectivity plus locality) guaranteeing a bulk gap. Sharpening these is an active, incremental line.`,
    refs: [
      { label: "Cirac, Pérez-García, Schuch, Verstraete, 'Matrix product states and projected entangled pair states', Rev. Mod. Phys. 93, 045003 (2021)" },
      { label: "Pérez-García, Verstraete, Wolf, Cirac, 'PEPS as unique ground states of local Hamiltonians', QIC 8 (2008)" },
    ] },

  { id: "M8", cat: "spectral", horizon: "sharp",
    title: "Quantum unique ergodicity for chaotic systems",
    statement: r`Determine natural conditions under which every high-energy sequence of eigenfunctions of a classically ergodic Hamiltonian equidistributes, rather than merely a density-one subsequence.`,
    context: r`Quantum ergodicity asks how eigenfunctions of a system with chaotic classical limit distribute in phase space at high energy. The Shnirelman–Zelditch–Colin de Verdière theorem says that for an ergodic classical flow, a density-one subsequence of eigenfunctions equidistributes. Quantum Unique Ergodicity (QUE), conjectured by Rudnick–Sarnak, is the stronger statement that the full sequence equidistributes — no exceptional sparse subsequences, and in particular no strong scarring.

What is known: QUE is a theorem in the arithmetic setting. Lindenstrauss proved arithmetic QUE for Hecke–Maass forms on congruence surfaces using measure rigidity for the diagonal action; Soundararajan removed a remaining escape-of-mass issue, and Holowinsky–Soundararajan proved the holomorphic (mass-form) analogue. These rely crucially on the extra Hecke symmetries.

For general chaotic or negatively curved manifolds QUE is open and may even fail. Entropy bounds (Anantharaman; Anantharaman–Nonnenmacher) show semiclassical limit measures cannot concentrate too much on periodic orbits, and Hassell showed QUE can fail for certain non-arithmetic (Bunimovich stadium) billiards. Identifying the natural geometric conditions forcing full equidistribution is the sharp open problem. Related: M9, M10.`,
    refs: [
      { label: "Rudnick & Sarnak, 'The behaviour of eigenstates of arithmetic hyperbolic manifolds', Comm. Math. Phys. 161 (1994)" },
      { label: "Lindenstrauss, 'Invariant measures and arithmetic quantum unique ergodicity', Ann. of Math. 163 (2006)" },
      { label: "Anantharaman, 'Entropy and the localization of eigenfunctions', Ann. of Math. 168 (2008)" },
    ] },

  { id: "M9", cat: "spectral", horizon: "sharp",
    title: "Bohigas–Giannoni–Schmit conjecture",
    statement: r`Prove that the local spectral statistics of a generic quantum system whose classical limit is chaotic converge to the appropriate random-matrix ensemble.`,
    context: r`The BGS conjecture (1984) states that the local energy-level statistics of a quantum system whose classical dynamics is chaotic follow the universal random-matrix ensembles (GOE, GUE or GSE depending on time-reversal and spin symmetry). It is the central conjecture of quantum chaos, complementing the Berry–Tabor conjecture for integrable systems (Poisson statistics).

What is known: The semiclassical periodic-orbit approach gives a physicist's derivation of the RMT form factor as a power series in time. Sieber and Richter identified the pairs of self-crossing orbits producing the leading (tau^2) correction; Müller, Heusler, Braun, Haake and Altland extended this to all orders, reproducing the full RMT form factor of the corresponding symmetry class. These arguments rest on the (unproven) Hannay–Ozorio de Almeida sum rule and on assumptions about the statistics of long orbits.

A mathematically rigorous proof for a genuine chaotic Hamiltonian is missing. Rigorous RMT-type universality has been achieved for random-matrix and random-graph models (e.g. quantum graphs, and Wigner-matrix universality by Erdős–Schlein–Yau, Tao–Vu), but not for a deterministic quantized chaotic system. Closing that gap is the sharp target.`,
    refs: [
      { label: "Bohigas, Giannoni, Schmit, 'Characterization of chaotic quantum spectra...', PRL 52, 1 (1984)" },
      { label: "Müller, Heusler, Braun, Haake, Altland, 'Semiclassical foundation of universality in quantum chaos', PRL 93, 014103 (2004)" },
      { label: "Sieber & Richter, Phys. Scr. T90 (2001)" },
    ] },

  { id: "M10", cat: "spectral", horizon: "incremental",
    title: "Scars in the semiclassical limit",
    statement: r`Characterize the possible semiclassical measures supported partly on unstable periodic orbits, and determine when positive-density or exceptional scarred subsequences can exist.`,
    context: r`A quantum scar is an enhancement of eigenfunction density along an unstable classical periodic orbit, first observed by Heller. In the semiclassical limit, the question is which invariant measures can arise as weak limits ('semiclassical measures') of eigenfunction mass, and how much of that mass can sit on periodic orbits despite classical ergodicity.

What is known: The Anantharaman–Nonnenmacher entropy bounds put a lower bound on the Kolmogorov–Sinai entropy of any semiclassical measure, forbidding total concentration on a single periodic orbit for Anosov flows; a semiclassical measure cannot be more than 'half' supported on a set of small entropy. Explicit partial scarring was constructed for arithmetic/quantum-cat maps by Faure–Nonnenmacher–De Bièvre and by Kelmer, showing exceptional subsequences with positive mass on invariant sub-tori — so QUE can genuinely fail for these systems while the entropy bounds are respected.

A complete characterization of the achievable semiclassical measures — the exact trade-off between periodic-orbit concentration and entropy, and when positive-density scarred subsequences can occur for physical Hamiltonians — is open. This is distinct from many-body 'quantum scars' (see B7). Related: M8.`,
    refs: [
      { label: "Heller, 'Bound-state eigenfunctions of classically chaotic Hamiltonian systems: scars', PRL 53, 1515 (1984)" },
      { label: "Anantharaman & Nonnenmacher, 'Half-delocalization of eigenfunctions...', Ann. Inst. Fourier 57 (2007)" },
      { label: "Faure, Nonnenmacher, De Bièvre, 'Scarred eigenstates for quantum cat maps', Comm. Math. Phys. 239 (2003)" },
    ] },

  { id: "M11", cat: "spectral", horizon: "incremental",
    title: "Infinite-dimensional quantum information",
    statement: r`Develop a unified theory of states, channels, entropies and resource conversion on infinite-dimensional Hilbert spaces handling domains, unbounded observables and energy constraints, without ad hoc finite-dimensional truncation.`,
    context: r`Most quantum information theory is proved in finite dimensions, then applied to continuous-variable / bosonic systems by truncation. This is unsatisfactory: von Neumann entropy is not continuous on infinite-dimensional state space, capacities can be infinite without energy constraints, and unbounded observables raise domain questions that truncation hides.

What is known: A robust replacement is emerging around energy constraints. Winter's energy-constrained diamond norm and continuity bounds, the Alicki–Fannes / Audenaert continuity inequalities extended to constrained settings (Shirokov), and Holevo's systematic treatment give continuity of entropic quantities on energy-bounded sets. Coding theorems and strong converses have been established for many Gaussian and bosonic channels under mean-energy constraints.

A single coherent framework — states, channels, entropies, and resource interconversion on infinite-dimensional Hilbert spaces with uniform continuity and compactness control, and a clean account of unbounded observables — is still assembled piecemeal. This overlaps quantum Shannon theory in infinite dimensions (C10) and is an incremental, foundational consolidation.`,
    refs: [
      { label: "Winter, 'Energy-constrained diamond norm with applications...', Comm. Math. Phys. 347 (2016)" },
      { label: "Holevo, 'Quantum Systems, Channels, Information' (De Gruyter, 2nd ed. 2019)" },
      { label: "Shirokov, 'Tight uniform continuity bounds for the quantum conditional mutual information...', J. Math. Phys. 62 (2021)" },
    ] },
];
