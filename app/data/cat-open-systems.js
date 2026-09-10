const r = String.raw;

export const OPENSYSTEMS = [
  { id: "O1", cat: "open-systems", horizon: "incremental",
    title: "Unbounded Lindblad generators",
    statement: r`On a specified infinite-dimensional operator space and topology, characterize when an unbounded generator or quadratic form defines a unique conservative completely positive semigroup, with explicit operator domains and boundary conditions.`,
    context: r`A time-homogeneous quantum Markov semigroup has a complete GKLS generator characterization in finite dimensions and in the appropriate bounded-generator setting. With unbounded Hamiltonians and noise operators, domains, closures and possible probability escape become essential: a formal expression need not define a conservative evolution.

What is known: The bounded-generator case is fully solved (Lindblad; GKS, 1976). For unbounded generators, the theory of quantum dynamical semigroups (Davies; Chebotarev–Fagnola) gives sufficient conditions for the minimal semigroup to be conservative (no probability leak), often via quantum analogues of non-explosion criteria for Markov processes and Lyapunov-function methods. Form-generator approaches and results on when the minimal solution is unique are available in important cases (quantum Ornstein–Uhlenbeck, quadratic bosonic generators).

Siemon–Holevo–Werner construct nonstandard unbounded generators and examples where first-order trace preservation does not imply finite-time conservativity. Thus classification of all generators cannot assume a naive unbounded GKLS representation from the outset.

Separate three targets: recognition of a proposed expression on a stated core, conservativity and uniqueness of the associated minimal evolution, and representation of more general generators. Seek necessary-and-sufficient, checkable conditions for specified operator classes beyond existing sufficient criteria. Related: O2, O3.`,
    refs: [
      { label: "Gorini, Kossakowski & Sudarshan, 'Completely positive dynamical semigroups of N-level systems', J. Math. Phys. 17, 821 (1976)", url: "https://doi.org/10.1063/1.522979" },
      { label: "Lindblad, 'On the generators of quantum dynamical semigroups', CMP 48 (1976)", url: "https://doi.org/10.1007/BF01608499" },
      { label: "Chebotarev & Fagnola, 'Sufficient conditions for conservativity of minimal quantum dynamical semigroups', J. Funct. Anal. 153 (1998)", url: "https://arxiv.org/abs/funct-an/9711006" },
      { label: "Siemon, Holevo & Werner, 'Unbounded generators of dynamical semigroups', Open Systems & Information Dynamics 24 (2017)", url: "https://arxiv.org/abs/1707.02266" },
    ] },

  { id: "O2", cat: "open-systems", horizon: "incremental",
    title: "Controlled derivation of master equations",
    statement: r`For specified microscopic bath correlations and coupling operators, bound the error of a reduced master equation in a stated state or observable norm, tracking coupling strength, system size and the time window, including closing level spacings or many-body limits.`,
    context: r`Master equations (Lindblad/Redfield and non-Markovian generalizations) are usually derived heuristically via Born–Markov and secular approximations. Making these derivations rigorous — with quantitative error bounds relating the true reduced dynamics to the master-equation prediction on a given time scale — is a longstanding goal.

What is known: Davies' weak-coupling limit gives a rigorous derivation of the Lindblad equation in the van Hove ($\lambda^2 t$ fixed, $\lambda\to0$) scaling, and the singular-coupling and low-density limits are likewise rigorous. More recently, finite-time and finite-coupling error bounds have been obtained: works by Rivas, by Merkli, and by Mozgunov–Lidar give explicit non-asymptotic bounds for coarse-grained/Redfield and Lindblad approximations, quantifying the error in terms of bath correlation times and coupling strength. Complete-positivity-preserving 'universal Lindblad' forms have been derived with error control.

The remaining target is not the first rigorous master equation. Establish uniform bounds in selected regimes not covered by the existing theorems: for example increasing system size with shrinking Bohr-frequency separations, nonintegrable correlation tails, or times growing with a relaxation scale. State the initial preparation, bath class and norm, and identify breakdown conditions as well as valid regimes. A bound for fixed system size or a weak-coupling scaling limit is not automatically uniform in all these parameters. Related: O1, O3, O10.`,
    refs: [
      { label: "Davies, 'Markovian master equations', Comm. Math. Phys. 39 (1974)", url: "https://doi.org/10.1007/BF01608389" },
      { label: "Mozgunov & Lidar, 'Completely positive master equation for arbitrary driving and small level spacing', Quantum 4, 227 (2020)", url: "https://doi.org/10.22331/q-2020-02-06-227" },
    ] },

  { id: "O3", cat: "open-systems", horizon: "incremental",
    title: "Certified strong-coupling reduced dynamics",
    statement: r`For a specified non-Gaussian or initially correlated system–bath model, construct computationally tractable reduced-process approximations with certified finite-time error, controlled memory truncation and positivity on the stated preparation or intervention domain.`,
    context: r`At strong coupling, weak-coupling master equations can be inaccurate and the reduced equilibrium state need not be the bare Gibbs state. Strong coupling alone does not destroy complete positivity: unitary joint evolution from a fixed factorized bath state induces a CPTP map on all system inputs at any coupling. With initial correlations, a single map on arbitrary system states may be inappropriate; specify the preparation family or an intervention-based process instead.

What is known: Exact influence functionals and process tensors already formulate reduced dynamics beyond weak coupling. Reaction-coordinate mappings can improve the residual-bath treatment but do not guarantee weak residual coupling. HEOM and related methods admit systematically converged calculations in suitable bath models; finite hierarchy and time discretizations need error control. Polaron methods and the Hamiltonian of mean force address further dynamical and equilibrium regimes.

The frontier is efficient approximation with certificates, not existence of a universal exact formalism. Specify a bath family, initial correlations, accessible interventions and energy bookkeeping; prove error and resource bounds for memory/compression truncations, or establish obstructions. Agreement with equilibrium thermodynamics does not by itself certify transient dynamics. Related: O2, O4, O5, O8.`,
    refs: [
      { label: "de Vega & Alonso, 'Dynamics of non-Markovian open quantum systems', Rev. Mod. Phys. 89, 015001 (2017)", url: "https://arxiv.org/abs/1511.06994" },
      { label: "Rivas, 'Strong coupling thermodynamics of open quantum systems', PRL 124, 160601 (2020)", url: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.124.160601" },
      { label: "Pollock et al., 'Operational Markov condition for quantum processes', PRL 120, 040405 (2018)", url: "https://arxiv.org/abs/1801.09811" },
    ] },

  { id: "O4", cat: "open-systems", horizon: "incremental",
    title: "Initial system–environment correlations",
    statement: r`For a specified correlated preparation family and class of joint unitaries, characterize the induced reduced maps on their compatibility domain and when they admit a CP extension, distinguishing domain positivity, extension positivity and intervention-based descriptions.`,
    context: r`A fixed product-state environment suffices for a CPTP reduced map on all system inputs; it is not necessary for every correlated preparation family. With initial correlations, different joint states may have the same system marginal, so even a single-valued reduced map requires an assignment or consistency condition. Positivity on the physical compatibility domain is different from a CP extension to the full operator space.

What is known: Pechukas's full-domain linear, positive and consistent assignment assumptions force a fixed-product assignment, not a trivial interaction Hamiltonian. Buscemi gives an information-theoretic CP characterization under specified preparation assumptions. Dominy–Shabani–Lidar distinguish inequivalent notions of CP on restricted domains and explain why discord or information-backflow criteria do not answer every assignment problem. The 2009 Shabani–Lidar claim must be read with its 2016 erratum, not cited as an unrestricted necessary-and-sufficient zero-discord criterion. Process tensors already treat correlations operationally via interventions.

Remaining tasks include checkable CP-extension criteria for physically structured preparation families and robust inference of the admissible domain from limited preparation data. Fix the assignment assumptions and allowed joint dynamics before formulating an iff statement; do not relabel the characterized special cases as open. Related: O5, O3.`,
    refs: [
      { label: "Pechukas, 'Reduced dynamics need not be completely positive', PRL 73, 1060 (1994)", url: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.73.1060" },
      { label: "Shabani & Lidar, 'Vanishing quantum discord is necessary and sufficient for completely positive maps', PRL 102, 100402 (2009; see 2016 erratum)", url: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.102.100402" },
      { label: "Shabani & Lidar, Erratum, PRL 116, 049901 (2016)", url: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.116.049901" },
      { label: "Buscemi, 'Complete positivity, Markovianity, and the quantum data-processing inequality, in the presence of initial system-environment correlations', PRL 113, 140502 (2014)", url: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.113.140502" },
      { label: "Dominy, Shabani & Lidar, 'A general framework for complete positivity', Quantum Information Processing 15 (2016)", url: "https://arxiv.org/abs/1312.0908" },
    ] },

  { id: "O5", cat: "open-systems", horizon: "incremental", status: "improved",
    title: "Operational memory detection and compression",
    statement: r`For a specified set of multi-time interventions, determine optimal tests for quantum memory and the minimal memory dimension or simulation cost needed to reproduce the accessible statistics within error $\varepsilon$.`,
    context: r`Different quantum memory criteria probe different data. CP-divisibility concerns a family of reduced maps; homogeneous semigroup embeddability concerns a time-independent generator; process-tensor Markovianity concerns statistics under interventions. Their inequivalence is not itself a missing definition.

What is known: The main proposals include CP-divisibility of the dynamical map (Rivas–Huelga–Plenio measure), information backflow measured by non-monotonicity of trace distance / distinguishability (Breuer–Laine–Piilo measure), negativity of decay rates in the canonical master equation, and growth of system–environment correlations. These measures disagree — a process can be non-Markovian by one and Markovian by another. A more complete, operationally grounded framework is the process tensor / quantum stochastic process formalism (Pollock–Rodríguez-Rosario–Frauenheim–Paternostro–Modi; Costa–Shrapnel), which treats multi-time statistics under interventions and gives a genuine quantum generalization of the Kolmogorov extension theorem and a clear Markov condition.

Published progress (August 2026; preprint February 2026): Kattemölle, Gulácsi and Burkard show that Pauli twirling can map divisible noise to a channel not embeddable in a Pauli semigroup. For positive nondegenerate Pauli eigenvalues, negative Pauli–Lindblad parameters diagnose failure of the specified semigroup criterion. This is not automatically a witness of multi-time memory in an implemented intervention process.

Pollock et al.'s operational Markov condition is already necessary and sufficient within its process framework. The open quantitative questions concern restricted experimental access, finite-sample witnesses, and matching upper/lower bounds on memory compression or simulation error. State whether the target norm controls all admissible interventions or only a restricted set. Related: O4, O9, C9.`,
    refs: [
      { label: "Breuer, Laine, Piilo, Vacchini, 'Colloquium: Non-Markovian dynamics in open quantum systems', Rev. Mod. Phys. 88, 021002 (2016)", url: "https://journals.aps.org/rmp/abstract/10.1103/RevModPhys.88.021002" },
      { label: "Pollock, Rodríguez-Rosario, Frauenheim, Paternostro, Modi, 'Non-Markovian quantum processes: complete framework and efficient characterisation', PRA 97, 012127 (2018)", url: "https://arxiv.org/abs/1512.00589" },
      { label: "Pollock et al., 'Operational Markov condition for quantum processes', PRL 120, 040405 (2018)", url: "https://arxiv.org/abs/1801.09811" },
      { label: "Kattemölle, Gulácsi & Burkard, 'Non-Markovianity induced by Pauli twirling', npj Quantum Information (2026)", url: "https://doi.org/10.1038/s41534-026-01345-5" },
    ] },

  { id: "O6", cat: "open-systems", horizon: "incremental",
    title: "Finite-resource coherent thermal conversion",
    statement: r`Characterize coherent state conversion under thermal operations without catalysts or with bounded catalyst dimension and energy; determine the cost of target error $\varepsilon$, exact catalyst restoration and permitted system–catalyst correlations.`,
    context: r`The resource theory of thermodynamics studies which state transformations are possible using 'thermal operations' (energy-conserving unitaries with a thermal bath) for free. For states diagonal in the energy basis, the theory is complete; coherence between energy eigenspaces is a second, independent resource that the diagonal theory does not capture.

What is known: Thermomajorization characterizes energy-diagonal conversion in the usual thermal-operation setting, while catalytic and many-copy settings have their own second laws. Time-translation asymmetry imposes additional restrictions on coherence. Operation class, catalyst return convention and exact versus approximate output must be distinguished.

Preprint theorem (October 2025): Shiraishi–Takagi characterize approximate correlated-catalytic conversion under thermal operations. If the target's resonant coherent modes are contained in the input's, conversion with an exactly restored catalyst and arbitrarily accurate target is possible iff free energy does not increase; the final correlation can be arbitrarily small. This does not bound catalyst dimension or energy. Shiraishi's separate published 2025 result concerns the larger class of covariant Gibbs-preserving operations, not thermal operations themselves.

Remaining targets are catalyst-free or exact-output conversion and quantitative resource bounds for a fixed input/target pair: minimum catalyst dimension, energy spread and generated correlation at error $\varepsilon$. Determine the boundary when the resonant-mode condition fails rather than assuming the theorem covers it. These are more precise questions than declaring all coherent conversion open. Related: E11, O8.`,
    evidence: [
      { kind: "preprint", summary: "Approximate correlated-catalytic thermal conversion is characterized by free energy when target resonant coherent modes are contained in input modes; bounded catalyst resources and exact target output are not covered.", url: "https://arxiv.org/abs/2510.05642", date: "2025-10-07", version: "v1" },
      { kind: "published", summary: "A related conversion theorem uses covariant Gibbs-preserving operations, a different operation class from thermal operations.", url: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.134.160402", date: "2025-04-22" },
    ],
    refs: [
      { label: "Lostaglio, Jennings, Rudolph, 'Description of quantum coherence in thermodynamic processes requires constraints beyond free energy', Nat. Commun. 6, 6383 (2015)", url: "https://arxiv.org/abs/1405.2188" },
      { label: "Brandão, Horodecki, Ng, Oppenheim, Wehner, 'The second laws of quantum thermodynamics', PNAS 112, 3275 (2015)", url: "https://arxiv.org/abs/1305.5278" },
      { label: "Shiraishi & Takagi, 'Recovery of the second law in fully quantum thermodynamics' (2025), preprint", url: "https://arxiv.org/abs/2510.05642" },
      { label: "Shiraishi, PRL 134, 160402 (2025), covariant Gibbs-preserving conversion", url: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.134.160402" },
    ] },

  { id: "O7", cat: "open-systems", horizon: "programme",
    title: "Autonomous quantum machines",
    statement: r`For a specified autonomous machine with bounded dimension, energy and interaction strength, derive tight trade-offs for its chosen clock, battery or heat-engine task, including auxiliary preparation, repeated-use degradation and control costs.`,
    context: r`An autonomous quantum machine runs on a time-independent Hamiltonian, without external time-dependent control — so the 'clock' or driving that a controlled protocol assumes must itself be part of the quantum system. This sharpens thermodynamic limits by charging for control.

What is known: Autonomous clock models exhibit accuracy–resolution–dissipation trade-offs and finite-dimensional quantum-clock scaling advantages; entropy–accuracy inequalities depend on the clock and readout assumptions and are not one universal law. Battery power and extractable-work bounds depend on the allowed interactions and their norm. Engine and refrigerator efficiencies must be compared at specified reservoirs, coupling and output-power conventions.

This programme has distinct child targets: for clocks, repeated-tick accuracy and timing-induced channel error at bounded energy and size; for batteries, charging power and retained work at fixed interaction norm/locality; for engines and refrigerators, efficiency–power–fluctuation frontiers at specified baths. Include the cost and degradation of the finite clock or controller rather than supplying an ideal external drive for free. Relational clock formalism from archived F11 is tracked in F8; its finite-resource performance questions belong here. Related: O6, O8, F8.`,
    relations: [{ id: "F8", type: "related" }, { id: "O6", type: "related" }, { id: "O8", type: "related" }],
    refs: [
      { label: "Erker, Mitchison, Silva, Woods, Brunner, Huber, 'Autonomous quantum clocks: does thermodynamics limit our ability to measure time?', PRX 7, 031022 (2017)", url: "https://arxiv.org/abs/1609.06704" },
      { label: "Woods, Silva & Oppenheim, 'Autonomous Quantum Machines and Finite-Sized Clocks', Ann. Henri Poincaré 20, 125–218 (2019)", url: "https://doi.org/10.1007/s00023-018-0736-9" },
    ] },

  { id: "O8", cat: "open-systems", horizon: "incremental",
    title: "Work and heat at strong coupling",
    statement: r`For a stated strong-coupling experiment, specify accessible energy measurements, work storage and interaction-energy accounting, then derive testable work/heat statistics and fluctuation relations with controlled effects of initial correlations and measurement disturbance.`,
    context: r`Even in ordinary thermodynamics work and heat depend on an operational partition and protocol. At strong system–bath coupling the interaction energy cannot be neglected, and initial correlations and quantum energy-measurement disturbance make those choices particularly important. Different valid bookkeeping schemes need not describe the same task.

What is known: A leading approach uses the Hamiltonian of mean force to define a system 'effective' internal energy and entropy such that equilibrium thermodynamic relations are preserved (Seifert; Talkner–Hänggi); this yields a consistent equilibrium thermodynamics at strong coupling. For nonequilibrium processes, various definitions of work and heat (based on the two-point measurement scheme, on the bath energy change, or on the system+interaction) disagree, and fluctuation theorems can be formulated but depend on the chosen split. Reaction-coordinate and HEOM methods (O3) give numerically consistent accounts in specific models.

A published no-go theorem of Perarnau-Llobet et al. shows that, for coherent closed-system protocols, a positive work-measurement scheme cannot in general both reproduce the average energy change and agree with the two-point measurement distribution on incoherent states. This already rules out some demands for a unique universal definition; it does not forbid model-specific operational thermodynamics.

The frontier is a stated experiment: compare battery work, calorimetric heat and interaction-energy accounting; prove which fluctuation relation survives the chosen preparation and measurement procedure, and bound corrections or inaccessible contributions. Agreement on one convention is not the success criterion. Related: O3, O6, O7.`,
    refs: [
      { label: "Talkner & Hänggi, 'Colloquium: Statistical mechanics and thermodynamics at strong coupling', Rev. Mod. Phys. 92, 041002 (2020)", url: "https://arxiv.org/abs/1911.11660" },
      { label: "Seifert, 'First and second law of thermodynamics at strong coupling', PRL 116, 020601 (2016)", url: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.116.020601" },
      { label: "Perarnau-Llobet et al., 'No-go theorem for the characterization of work fluctuations in coherent quantum systems', PRL 118, 070601 (2017)", url: "https://arxiv.org/abs/1606.08368" },
    ] },

  { id: "O9", cat: "open-systems", horizon: "incremental", status: "improved",
    title: "Learning open-system dynamics",
    statement: r`For a specified generator or finite-memory model, preparation/measurement access and estimation norm, determine matching experimental and computational bounds for identifying the dynamics, including robustness to state-preparation and measurement errors.`,
    context: r`Characterizing an unknown open-system evolution is essential for calibration, verification and control. Full process tomography scales exponentially and treats each time independently, whereas a physical model may be specified compactly by a Hamiltonian, a Lindblad generator, or a finite-memory process tensor. The learning problem is to exploit that structure without assuming it in a way that hides important noise.

What is known: Efficient algorithms exist for local or sparse Hamiltonians, Pauli channels and several structured Lindbladians, while process-tensor tomography can reconstruct non-Markovian multi-time statistics at a cost governed by memory and temporal complexity. General learnability depends on access assumptions — short-time evolution, ancillas, coherent control, adaptivity and the available state preparations and measurements — and robustness to state-preparation and measurement errors is often decisive.

Preprint progress (July 2026): Chen–Yu give nearly optimal experiment-count and evolution-time guarantees for learning bounded-dynamical-strength Pauli-expanded Lindbladians. Their error is coefficient-wise, with a thresholded support guarantee; it is not automatically a diamond-norm guarantee for an arbitrary evolved channel. The nonadaptive, ancilla-free protocol requires no control during evolution, but its coefficient-learning stage uses global stabilizer/Clifford preparation and measurement resources. These access assumptions are part of the theorem.

Further progress (August–September 2026): Ramos Ramos et al. combined stochastic tensor-network simulation with optimization to learn local Lindblad dissipation rates up to 16 sites and a seven-parameter homogeneous model up to 160 sites, with exact variance identities and finite-covariance error guarantees. Pancotti, Saravanan and Svore instead learned fault-event probabilities directly from error-correction syndrome and logical-observable data: an exact maximum-likelihood tensor-network decoder supplies differentiable gradients, recovers Sycamore noise parameters, and tracks synthetic drift by warm starts. These advances address scalable and experimentally realistic structured models, not the optimal-resource theory for arbitrary generators or multi-time non-Markovian processes.

These newest tensor-network results are preprints with structured-model and numerical evidence, not a universal optimal-resource theorem. The remaining targets include restricted local preparation/measurement, translating coefficient error into prediction error, SPAM-robust identification, time-dependent generators and finite-memory non-Markovian processes, each with explicit upper and lower bounds. Related: O1, O2, O5.`,
    evidence: [
      { kind: "preprint", summary: "Near-optimal bounded-strength coefficient learning with thresholded support, using specified product/stabilizer access; not a universal diamond-norm process-learning guarantee.", url: "https://arxiv.org/abs/2607.28610", date: "2026-07-30", version: "v1" },
      { kind: "numerical", summary: "Structured Lindblad-rate learning with stochastic tensor networks; simulation scaling does not certify arbitrary-process learnability.", url: "https://arxiv.org/abs/2608.24668" },
      { kind: "numerical", summary: "Tensor-network likelihood learning of fault-event probabilities from error-correction data, a restricted noise model.", url: "https://arxiv.org/abs/2609.00169" },
    ],
    provenance: [{ summary: "The previous update recorded an author statement about interactive ChatGPT use for checking, references and polishing, with responsibility attributed to the human authors. That declaration was not independently rechecked in this audit and is not evidence of theorem correctness.", url: "https://arxiv.org/abs/2607.28610" }],
    refs: [
      { label: "Pollock et al., 'Non-Markovian quantum processes: complete framework and efficient characterisation', PRA 97, 012127 (2018)", url: "https://arxiv.org/abs/1512.00589" },
      { label: "Chen & Yu, 'Learning Arbitrary Lindbladians from Time Evolution' (2026)", url: "https://arxiv.org/abs/2607.28610" },
      { label: "Ramos Ramos et al., 'Scalable Lindblad Noise Learning via Stochastic Tensor-Network Simulation' (2026)", url: "https://arxiv.org/abs/2608.24668" },
      { label: "Pancotti, Saravanan & Svore, 'Exact learning of quantum noise with tensor networks' (2026)", url: "https://arxiv.org/abs/2609.00169" },
    ] },
  { id: "O10", cat: "open-systems", horizon: "incremental", status: "improved",
    reviewedAt: "2026-09-10",
    provenance: [
      { summary: "Li reports GPT-5.6 Sol assistance with editing, organization, literature discovery, code and completion of several proofs, while attributing the scientific ideas to himself and stating that he reviewed and verified the assisted material.", url: "https://arxiv.org/html/2609.09291v1", version: "v1" },
    ],
    title: "Efficient Gibbs preparation beyond high temperature",
    statement: r`For two-dimensional finite-range noncommuting spin Hamiltonians of bounded local strength and a specified reversible local or quasilocal Gibbs sampler, identify verifiable temperature/interaction conditions beyond the established high-temperature regime giving polynomial mixing and preparation to trace-distance error $\varepsilon$, or prove slow-mixing obstructions.`,
    context: r`Preparing $\rho_\beta=e^{-\beta H}/\operatorname{tr}(e^{-\beta H})$ is different from proving a master equation valid (O2) or learning its generator (O9). A sampler must have the desired stationary state, mix rapidly from its allowed initial states, and be implementable at controlled circuit or system–bath cost. Fix the generator normalization so that increasing all rates is not counted as an algorithmic speedup.

Published baseline (April 2026): Hahn, Sweke, Deshpande and Shtanko show that spatial truncation and local-circuit implementation preserve rapid Gibbs mixing with bounded error at high temperature. A January 2026 preprint by Slezak et al. proves polynomial convergence for specified system–bath/repeated-interaction generators in high-temperature lattices, weakly interacting fermions and 1D chains. Those regimes are not being proposed as unsolved.

The selected frontier concerns genuinely interacting 2D spin families outside proven uniform high-temperature guarantees. State the generator, inverse-temperature range and any clustering or phase assumptions; derive quantitative spectral-gap or log-Sobolev bounds and implementation errors, or identify bottlenecks forcing slow mixing. No efficient algorithm for every Hamiltonian at every temperature is conjectured here. Noncommuting conserved charges introduce a related but distinct thermalization target under B4/B5.

Adjacent preparation progress (8 September 2026, v1): Li's spectral core–tail framework separates core preparation, unitary implementation and model-mismatch errors. Its volume-uniform local-observable bound assumes a summable Kubo–Mori response and uniform local data; perturbative residual control also assumes uniform locality and solvability. Exact anchor constructions and tests on deformed graph-stabilizer models do not establish a general low-temperature mixing theorem. In particular, local-observable accuracy is weaker than the global trace-distance target above, and a prepared ansatz is not by itself a rapidly mixing reversible sampler.`,
    relations: [{ id: "O2", type: "related" }, { id: "O9", type: "related" }, { id: "B5", type: "related" }],
    evidence: [
      { kind: "preprint", summary: "Local Gibbs-observable error certification under response-summability and perturbative assumptions; neither global trace-distance convergence nor general low-temperature rapid mixing follows.", url: "https://arxiv.org/abs/2609.09291v1", date: "2026-09-08", version: "v1" },
      { kind: "published", summary: "Local-circuit approximations preserve rapid Gibbs mixing at high temperature with bounded preparation error.", url: "https://journals.aps.org/prxquantum/abstract/10.1103/m5zb-z4nn", date: "2026-04-23" },
      { kind: "preprint", summary: "Polynomial-time thermalization is proved for particular generator families and high-temperature lattices, weakly interacting fermions and 1D chains, not all 2D low-temperature models.", url: "https://arxiv.org/abs/2601.16154", date: "2026-01-22", version: "v1" },
    ],
    refs: [
      { label: "Li, 'Spectral Core-Tail Architecture for Locally Certified Gibbs-State Preparation' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.09291v1" },
      { label: "Hahn, Sweke, Deshpande & Shtanko, 'Efficient Quantum Gibbs Sampling with Local Circuits', PRX Quantum 7, 020314 (2026)", url: "https://journals.aps.org/prxquantum/abstract/10.1103/m5zb-z4nn" },
      { label: "Slezak et al., 'Polynomial-time thermalization and Gibbs sampling from system-bath couplings' (2026), preprint", url: "https://arxiv.org/abs/2601.16154" },
    ] },
];
