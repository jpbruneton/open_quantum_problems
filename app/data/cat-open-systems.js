const r = String.raw;

export const OPENSYSTEMS = [
  { id: "O1", cat: "open-systems", horizon: "incremental",
    title: "Unbounded Lindblad generators",
    statement: r`Give necessary and sufficient conditions characterizing the generators of completely positive, trace-preserving semigroups on infinite-dimensional systems when the Hamiltonian and jump operators are unbounded.`,
    context: r`Markovian open-system dynamics is described by a quantum dynamical semigroup, whose generator has the Gorini–Kossakowski–Sudarshan–Lindblad (GKLS) form. In finite dimensions the characterization is complete and clean. In infinite dimensions, when the Hamiltonian $H$ and jump operators $L_k$ are unbounded, deciding when a formal GKLS expression actually generates a well-defined, conservative (trace-preserving) CP semigroup is a hard operator-theoretic problem.

What is known: The bounded-generator case is fully solved (Lindblad; GKS, 1976). For unbounded generators, the theory of quantum dynamical semigroups (Davies; Chebotarev–Fagnola) gives sufficient conditions for the minimal semigroup to be conservative (no probability leak), often via quantum analogues of non-explosion criteria for Markov processes and Lyapunov-function methods. Form-generator approaches and results on when the minimal solution is unique are available in important cases (quantum Ornstein–Uhlenbeck, quadratic bosonic generators).

Necessary and sufficient conditions covering general unbounded $H$ and $L_k$ — a full characterization of admissible generators with conservativity and uniqueness — remain open. This is the infinite-dimensional foundation of Markovian open-system theory. Related: O2, O3, M11.`,
    refs: [
      { label: "Gorini, Kossakowski, Sudarshan, J. Math. Phys. 17 (1976); Lindblad, Comm. Math. Phys. 48 (1976)" },
      { label: "Chebotarev & Fagnola, 'Sufficient conditions for conservativity of minimal quantum dynamical semigroups', J. Funct. Anal. 153 (1998)" },
    ] },

  { id: "O2", cat: "open-systems", horizon: "incremental",
    title: "Controlled derivation of master equations",
    statement: r`Derive Markovian or non-Markovian reduced dynamics from a microscopic system–environment Hamiltonian with explicit error bounds valid on specified time scales.`,
    context: r`Master equations (Lindblad/Redfield and non-Markovian generalizations) are usually derived heuristically via Born–Markov and secular approximations. Making these derivations rigorous — with quantitative error bounds relating the true reduced dynamics to the master-equation prediction on a given time scale — is a longstanding goal.

What is known: Davies' weak-coupling limit gives a rigorous derivation of the Lindblad equation in the van Hove ($\lambda^2 t$ fixed, $\lambda\to0$) scaling, and the singular-coupling and low-density limits are likewise rigorous. More recently, finite-time and finite-coupling error bounds have been obtained: works by Rivas, by Merkli, and by Mozgunov–Lidar give explicit non-asymptotic bounds for coarse-grained/Redfield and Lindblad approximations, quantifying the error in terms of bath correlation times and coupling strength. Complete-positivity-preserving 'universal Lindblad' forms have been derived with error control.

Uniform, physically realistic error bounds valid across relevant time scales for general system–bath models — beyond the asymptotic limits and specific setups — remain an open, incremental target. Related: O1, O3.`,
    refs: [
      { label: "Davies, 'Markovian master equations', Comm. Math. Phys. 39 (1974)" },
      { label: "Mozgunov & Lidar, 'Completely positive master equation for arbitrary driving and small level spacing', Quantum 4, 227 (2020)" },
    ] },

  { id: "O3", cat: "open-systems", horizon: "incremental",
    title: "Strong-coupling open-system dynamics",
    statement: r`Construct a general reduced-dynamics formalism valid beyond weak coupling, secular approximations and factorized initial states, while preserving positivity and thermodynamic consistency.`,
    context: r`When the system–environment coupling is strong, the standard weak-coupling master equations fail: the reduced dynamics need not be Markovian or even completely positive, the equilibrium state is not the bare Gibbs state, and system and bath are correlated even at equilibrium (the 'Hamiltonian of mean force' governs the true equilibrium).

What is known: Several nonperturbative tools exist. The reaction-coordinate mapping absorbs a collective bath mode into the system, restoring weak-coupling treatability; the hierarchical equations of motion (HEOM) give numerically exact non-Markovian dynamics for Gaussian baths; polaron and variational-polaron transforms handle strong coupling in specific models; path-integral / influence-functional methods (Feynman–Vernon) are exact but rarely closed-form. Rivas and others have developed strong-coupling frameworks with thermodynamic consistency, and the Hamiltonian-of-mean-force approach fixes the correct equilibrium.

A single, general reduced-dynamics formalism valid at strong coupling, for non-factorized initial states, that manifestly preserves complete positivity and thermodynamic consistency, is still missing — the methods above are model-specific or numerical. Related: O2, O4, O8.`,
    refs: [
      { label: "de Vega & Alonso, 'Dynamics of non-Markovian open quantum systems', Rev. Mod. Phys. 89, 015001 (2017)" },
      { label: "Rivas, 'Strong coupling thermodynamics of open quantum systems', PRL 124, 160601 (2020)" },
    ] },

  { id: "O4", cat: "open-systems", horizon: "incremental",
    title: "Initial system–environment correlations",
    statement: r`Characterize exactly which reduced dynamical maps are physically admissible for specified families of initially correlated system–environment states.`,
    context: r`The derivation of a completely positive reduced dynamical map assumes the system and environment start in a product state. If they are initially correlated (as is generic after prior interaction), the reduced map need not be completely positive, or even positive on all states — leading to the long 'Pechukas–Alicki' debate about the domain and meaning of such maps.

What is known: Pechukas showed that demanding complete positivity for arbitrary initial correlations forces the coupling to be trivial; Alicki clarified the domain issues. Subsequent work established frameworks in which the reduced dynamics is well defined on a restricted set of admissible initial states: Rodríguez-Rosario et al. and Shabani–Lidar characterized when a CP map exists (e.g. under vanishing quantum discord of the initial state), and the assignment-map / dynamical-map formalisms specify the allowed domains. The process-tensor framework (see O5) provides an operationally clean way to handle initial correlations by conditioning on interventions.

A complete characterization — for a given family of initially correlated states, exactly which reduced dynamical maps are physically admissible (positive/CP on the relevant domain) — is open and subtle. Related: O5, O3.`,
    refs: [
      { label: "Pechukas, 'Reduced dynamics need not be completely positive', PRL 73, 1060 (1994)" },
      { label: "Shabani & Lidar, 'Vanishing quantum discord is necessary and sufficient for completely positive maps', PRL 102, 100402 (2009)" },
    ] },

  { id: "O5", cat: "open-systems", horizon: "incremental",
    title: "Quantum non-Markovianity",
    statement: r`Find an operational definition of memory that unifies or clearly relates divisibility, information backflow, process tensors, multi-time correlations and simulation cost.`,
    context: r`Classical Markovianity has a clean definition, but the quantum notion of a 'memoryless' process is contested: several inequivalent definitions of non-Markovianity coexist, each capturing a different intuition.

What is known: The main proposals include CP-divisibility of the dynamical map (Rivas–Huelga–Plenio measure), information backflow measured by non-monotonicity of trace distance / distinguishability (Breuer–Laine–Piilo measure), negativity of decay rates in the canonical master equation, and growth of system–environment correlations. These measures disagree — a process can be non-Markovian by one and Markovian by another. A more complete, operationally grounded framework is the process tensor / quantum stochastic process formalism (Pollock–Rodríguez-Rosario–Frauenheim–Paternostro–Modi; Costa–Shrapnel), which treats multi-time statistics under interventions and gives a genuine quantum generalization of the Kolmogorov extension theorem and a clear Markov condition.

Whether the process-tensor framework (or another) can be adopted as the definition — unifying or clearly ordering divisibility, information backflow, multi-time correlations, and memory/simulation cost — is an open, active consolidation. Related: O4, C9.`,
    refs: [
      { label: "Breuer, Laine, Piilo, Vacchini, 'Colloquium: Non-Markovian dynamics in open quantum systems', Rev. Mod. Phys. 88, 021002 (2016)" },
      { label: "Pollock, Rodríguez-Rosario, Frauenheim, Paternostro, Modi, 'Non-Markovian quantum processes: complete framework...', PRA 97, 012127 (2018)" },
    ] },

  { id: "O6", cat: "open-systems", horizon: "incremental",
    title: "Thermal operations with coherence",
    statement: r`Give necessary and sufficient conditions for state conversion under thermal operations when the states contain coherence between energy eigenspaces, with and without correlated catalysts.`,
    context: r`The resource theory of thermodynamics studies which state transformations are possible using 'thermal operations' (energy-conserving unitaries with a thermal bath) for free. For states diagonal in the energy basis, the theory is complete; coherence between energy eigenspaces is a second, independent resource that the diagonal theory does not capture.

What is known: For energy-incoherent (diagonal) states, thermomajorization gives necessary and sufficient conditions for conversion (Horodecki–Oppenheim), and in the many-copy limit the free energy governs transitions, with a family of 'second laws' (Brandão–Horodecki–Ng–Oppenheim–Wehner) constraining single-shot transformations. Coherence obeys separate constraints: work-locking, and asymmetry/speakable-coherence monotones derived from the time-translation symmetry of thermal operations (Lostaglio–Jennings–Rudolph; Marvian–Spekkens). No single set of conditions yet governs simultaneous population and coherence conversion. Catalysts — especially correlated catalysts — can unlock otherwise-forbidden transformations and change the achievable coherence.

Necessary and sufficient conditions for state conversion with coherence, with and without (correlated) catalysts, are open — an active incremental problem in quantum thermodynamics. Related: E11, O8.`,
    refs: [
      { label: "Lostaglio, Jennings, Rudolph, 'Description of quantum coherence in thermodynamic processes requires constraints beyond free energy', Nat. Commun. 6, 6383 (2015)" },
      { label: "Brandão, Horodecki, Ng, Oppenheim, Wehner, 'The second laws of quantum thermodynamics', PNAS 112, 3275 (2015)" },
    ] },

  { id: "O7", cat: "open-systems", horizon: "incremental",
    title: "Autonomous quantum machines",
    statement: r`Determine the exact performance limits of clocks, batteries, refrigerators and engines built from time-independent finite Hamiltonians, including the cost of control and degradation of the auxiliary systems.`,
    context: r`An autonomous quantum machine runs on a time-independent Hamiltonian, without external time-dependent control — so the 'clock' or driving that a controlled protocol assumes must itself be part of the quantum system. This sharpens thermodynamic limits by charging for control.

What is known: There are important partial bounds. For autonomous clocks, Erker et al. and Woods–Silva–Oppenheim established trade-offs between clock accuracy, resolution, and entropy production (an autonomous clock's tick accuracy is bounded by the entropy it dissipates), and Woods et al. found near-optimal quantum clock scalings. For quantum batteries, bounds on charging power and extractable work (Alicki–Fannes; Campaioli et al.) and the role of collective/entangling operations are known. Autonomous refrigerators and engines (three-level/absorption machines) have Carnot-bounded efficiencies, with quantum corrections studied.

Exact performance limits — tight bounds simultaneously accounting for control cost, the finite size and degradation of auxiliary systems (clock/battery), and quantum coherence — are open across these machine types. Related: O6, O8, F11.`,
    refs: [
      { label: "Erker, Mitchison, Silva, Woods, Brunner, Huber, 'Autonomous quantum clocks: does thermodynamics limit our ability to measure time?', PRX 7, 031022 (2017)" },
      { label: "Woods, Silva, Oppenheim, 'Autonomous quantum machines and finite-sized clocks', Ann. Henri Poincaré 20 (2019)" },
    ] },

  { id: "O8", cat: "open-systems", horizon: "incremental",
    title: "Work and heat at strong coupling",
    statement: r`Construct an operational decomposition of energy changes into work and heat that is consistent for strongly coupled, correlated and non-Markovian quantum systems.`,
    context: r`In classical and weak-coupling thermodynamics, the split of an energy change into work and heat is unambiguous. At strong system–bath coupling, the interaction energy is non-negligible and shared, so how to attribute energy to 'the system' — and how to define work and heat — becomes ambiguous, with several competing prescriptions.

What is known: A leading approach uses the Hamiltonian of mean force to define a system 'effective' internal energy and entropy such that equilibrium thermodynamic relations are preserved (Seifert; Talkner–Hänggi); this yields a consistent equilibrium thermodynamics at strong coupling. For nonequilibrium processes, various definitions of work and heat (based on the two-point measurement scheme, on the bath energy change, or on the system+interaction) disagree, and fluctuation theorems can be formulated but depend on the chosen split. Reaction-coordinate and HEOM methods (O3) give numerically consistent accounts in specific models.

A single operational decomposition of energy into work and heat, valid and consistent for strongly coupled, correlated, and non-Markovian systems — with agreed first and second laws and fluctuation theorems — is open. Related: O3, O6, O7.`,
    refs: [
      { label: "Talkner & Hänggi, 'Colloquium: Statistical mechanics and thermodynamics at strong coupling', Rev. Mod. Phys. 92, 041002 (2020)" },
      { label: "Seifert, 'First and second law of thermodynamics at strong coupling', PRL 116, 020601 (2016)" },
    ] },
];
