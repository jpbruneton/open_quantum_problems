const r = String.raw;

export const OPENSYSTEMS = [
  { id: "O1", cat: "open-systems", horizon: "incremental",
    title: "Unbounded Lindblad generators",
    statement: r`On a specified infinite-dimensional operator space and topology, characterize when an unbounded generator or quadratic form defines a unique conservative completely positive semigroup, with explicit operator domains and boundary conditions.`,
    definition: r`**A quantum Markov semigroup** is a continuous one-parameter semigroup of completely positive, trace-preserving maps (conservative: identity-preserving in the Heisenberg picture); without that last requirement one speaks of a quantum dynamical semigroup, which may lose trace. In finite dimensions and in the appropriate bounded-generator setting its generators have the complete GKLS characterization. With unbounded Hamiltonians and noise operators, domains, closures and possible probability escape become essential: a formal expression need not define a conservative evolution.

The bounded-generator case was settled in 1976 by Lindblad and by Gorini, Kossakowski and Sudarshan (Lindblad, 'On the generators of quantum dynamical semigroups', Comm. Math. Phys. 48 (1976), [doi:10.1007/BF01608499](https://doi.org/10.1007/BF01608499)).`,
    progress: r`- For unbounded generators, the theory of quantum dynamical semigroups (Davies; Chebotarev and Fagnola, [arXiv:funct-an/9711006](https://arxiv.org/abs/funct-an/9711006)) gives sufficient conditions for the minimal semigroup to be conservative (no probability leak), often via quantum analogues of non-explosion criteria for Markov processes and Lyapunov-function methods.
- Form-generator approaches and results on when the minimal solution is unique are available in important cases (quantum Ornstein–Uhlenbeck, quadratic bosonic generators).
- Siemon, Holevo and Werner construct nonstandard unbounded generators and examples where first-order trace preservation does not imply finite-time conservativity ([arXiv:1707.02266](https://arxiv.org/abs/1707.02266)). Thus classification of all generators cannot assume a naive unbounded GKLS representation from the outset.`,
    residual: r`Three targets are separate: recognition of a proposed expression on a stated core, conservativity and uniqueness of the associated minimal evolution, and representation of more general generators. The aim is necessary-and-sufficient, checkable conditions for specified operator classes beyond existing sufficient criteria. Related: O2, O3.`,
    refs: [
      { label: "Gorini, Kossakowski & Sudarshan, 'Completely positive dynamical semigroups of N-level systems', J. Math. Phys. 17, 821 (1976)", url: "https://doi.org/10.1063/1.522979" },
      { label: "Lindblad, 'On the generators of quantum dynamical semigroups', CMP 48 (1976)", url: "https://doi.org/10.1007/BF01608499" },
      { label: "Chebotarev & Fagnola, 'Sufficient conditions for conservativity of minimal quantum dynamical semigroups', J. Funct. Anal. 153 (1998)", url: "https://arxiv.org/abs/funct-an/9711006" },
      { label: "Siemon, Holevo & Werner, 'Unbounded generators of dynamical semigroups', Open Systems & Information Dynamics 24 (2017)", url: "https://arxiv.org/abs/1707.02266" },
    ] },

  { id: "O2", cat: "open-systems", horizon: "incremental", status: "improved",
    reviewedAt: "2026-11-16",
    title: "Controlled derivation of master equations",
    statement: r`For specified microscopic bath correlations and coupling operators, bound the error of a reduced master equation in a stated state or observable norm, tracking coupling strength, system size and the time window, including closing level spacings or many-body limits.`,
    definition: r`**Master equations** (Lindblad/Redfield and non-Markovian generalizations) describe the reduced dynamics of an open system and are usually derived heuristically via Born–Markov and secular approximations. Making these derivations rigorous — with quantitative error bounds relating the true reduced dynamics to the master-equation prediction on a given time scale — is a longstanding goal.

Davies' weak-coupling limit gives a rigorous derivation of the Lindblad equation in the van Hove scaling (Davies, 'Markovian master equations', Comm. Math. Phys. 39 (1974), [doi:10.1007/BF01608389](https://doi.org/10.1007/BF01608389)).`,
    progress: r`- Davies' weak-coupling limit holds in the van Hove scaling ($\lambda^2 t$ fixed, $\lambda\to0$), and the singular-coupling and low-density limits are likewise rigorous.
- Finite-time and finite-coupling error bounds have been obtained: works by Rivas, by Merkli, and by Mozgunov and Lidar ([doi:10.22331/q-2020-02-06-227](https://doi.org/10.22331/q-2020-02-06-227)) give explicit non-asymptotic bounds for coarse-grained/Redfield and Lindblad approximations, quantifying the error in terms of bath correlation times and coupling strength.
- Complete-positivity-preserving 'universal Lindblad' forms have been derived with error control.
- Many-body limits: Ikeuchi and Mori bound the error on local observables under the universal Lindblad equation in bulk-dissipated many-body systems ([arXiv:2503.14916](https://arxiv.org/abs/2503.14916v4), PRB 112, 094309 (2025)). Assuming "accelerated dissipation", which is not proved in general, the error vanishes uniformly in time in the weak- or singular-coupling limit taken after the thermodynamic limit.
- Closing level spacings: Scandi and Alhambra derive a master equation without the secular approximation that satisfies KMS detailed balance with respect to a renormalized Hamiltonian, has quasi-local jumps and applies to spectra with exponentially small spacings; its trace-norm error grows at most linearly in time ([arXiv:2505.20064](https://arxiv.org/abs/2505.20064v2), PRX 16, 011040 (2026)).
- Agerskov and Nathan (March 2026) give, for systems coupled to Gaussian baths, an explicit time-local Markovian master equation whose generator correction is exponentially small in the inverse coupling, of order $\Gamma e^{-2/\sqrt{\Gamma\tau}}$ up to constants ([arXiv:2603.04504](https://arxiv.org/abs/2603.04504v1)). This is a bound on the generator, not a uniform-in-time bound on the state, and the dependence on system size is not discussed.`,
    residual: r`The remaining target is not the first rigorous master equation. It is uniform bounds in selected regimes not covered by the existing theorems: for example increasing system size with shrinking Bohr-frequency separations, nonintegrable correlation tails, or times growing with a relaxation scale. The initial preparation, bath class and norm must be stated, and breakdown conditions identified as well as valid regimes. A bound for fixed system size or a weak-coupling scaling limit is not automatically uniform in all these parameters. The 2025–2026 results above cover many-body limits under an unproved dissipation assumption, closing spacings on a time window with linear error growth, and generator-level bounds for Gaussian baths; uniform-in-time state bounds without such assumptions remain open. Related: O1, O3, O10.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Rigorous error bounds for local observables under the universal Lindblad equation in bulk-dissipated many-body systems; uniform-in-time vanishing in the weak- or singular-coupling limit after the thermodynamic limit, assuming accelerated dissipation (PRB 112, 094309).", url: "https://arxiv.org/abs/2503.14916v4", date: "2025-09-29", version: "v4" },
      { kind: "preprint", role: "progress", summary: "A first-principles KMS-detailed-balanced master equation without the rotating-wave approximation, valid for many-body spectra with vanishing level spacings, whose trace-norm error grows at most linearly in time (PRX 16, 011040).", url: "https://arxiv.org/abs/2505.20064v2", date: "2025-11-13", version: "v2" },
      { kind: "preprint", role: "progress", summary: "For systems coupled to Gaussian baths, an explicit time-local Markovian master equation whose generator correction is exponentially small in the inverse coupling; a generator-level bound, not a uniform-in-time state bound.", url: "https://arxiv.org/abs/2603.04504v1", date: "2026-03-04", version: "v1" },
    ],
    refs: [
      { label: "Davies, 'Markovian master equations', Comm. Math. Phys. 39 (1974)", url: "https://doi.org/10.1007/BF01608389" },
      { label: "Mozgunov & Lidar, 'Completely positive master equation for arbitrary driving and small level spacing', Quantum 4, 227 (2020)", url: "https://doi.org/10.22331/q-2020-02-06-227" },
      { label: "Ikeuchi & Mori, 'Error bounds on the universal Lindblad equation in the thermodynamic limit', PRB 112, 094309 (2025)", url: "https://arxiv.org/abs/2503.14916" },
      { label: "Scandi & Alhambra, 'Thermalization in open many-body systems and KMS detailed balance', PRX 16, 011040 (2026)", url: "https://arxiv.org/abs/2505.20064" },
      { label: "Agerskov & Nathan, 'Markovian quantum master equations are exponentially accurate in the weak coupling regime' (2026 preprint, v1)", url: "https://arxiv.org/abs/2603.04504v1" },
    ] },

  { id: "O3", cat: "open-systems", horizon: "incremental",
    reviewedAt: "2026-11-16",
    title: "Certified strong-coupling reduced dynamics",
    statement: r`For a specified non-Gaussian or initially correlated system–bath model, construct computationally tractable reduced-process approximations with certified finite-time error, controlled memory truncation and positivity on the stated preparation or intervention domain.`,
    definition: r`**Strong-coupling reduced dynamics** is the evolution of an open system whose coupling to its bath is not weak. Weak-coupling master equations can then be inaccurate, and the reduced equilibrium state need not be the bare Gibbs state. Strong coupling alone does not destroy complete positivity: unitary joint evolution from a fixed factorized bath state induces a CPTP map on all system inputs at any coupling. With initial correlations, a single map on arbitrary system states may be inappropriate; one specifies the preparation family or an intervention-based process instead.

Standard review: de Vega and Alonso, 'Dynamics of non-Markovian open quantum systems', Rev. Mod. Phys. 89, 015001 (2017), [arXiv:1511.06994](https://arxiv.org/abs/1511.06994).`,
    progress: r`- Exact influence functionals and process tensors already formulate reduced dynamics beyond weak coupling.
- Reaction-coordinate mappings can improve the residual-bath treatment but do not guarantee weak residual coupling.
- HEOM and related methods admit systematically converged calculations in suitable bath models; finite hierarchy and time discretizations need error control.
- Polaron methods and the Hamiltonian of mean force address further dynamical and equilibrium regimes.
- Chen and Cai (21 October 2026, v1) give a certified quantum-simulation scheme for an arbitrary system linearly coupled to a zero-mean Gaussian environment, from a factorized initial state ([arXiv:2610.29372](https://arxiv.org/abs/2610.29372v1)). A rank-$N$ approximation of the bath correlation kernel, truncation to $d$ levels and "coupling dilution" for strong coupling give explicit error bounds on the reduced state and a circuit cost polynomial in time and inverse precision, under spectral-decay and coupling-regularity assumptions. Positivity follows from the unitary dilation. This covers a Gaussian bath without initial correlations, not the non-Gaussian or initially correlated models of the statement.`,
    residual: r`The frontier is efficient approximation with certificates, not existence of a universal exact formalism. Specify a bath family, initial correlations, accessible interventions and energy bookkeeping; prove error and resource bounds for memory/compression truncations, or establish obstructions. Agreement with equilibrium thermodynamics does not by itself certify transient dynamics. Related: O2, O4, O5, O8.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Certified quantum-simulation scheme for systems linearly coupled to zero-mean Gaussian baths: low-rank kernel compression and coupling dilution give explicit reduced-state error bounds and polynomial circuit cost under spectral-decay assumptions; factorized initial states only, so outside the non-Gaussian or initially correlated scope of the statement.", url: "https://arxiv.org/abs/2610.29372v1", date: "2026-10-21", version: "v1" },
    ],
    refs: [
      { label: "de Vega & Alonso, 'Dynamics of non-Markovian open quantum systems', Rev. Mod. Phys. 89, 015001 (2017)", url: "https://arxiv.org/abs/1511.06994" },
      { label: "Rivas, 'Strong coupling thermodynamics of open quantum systems', PRL 124, 160601 (2020)", url: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.124.160601" },
      { label: "Pollock et al., 'Operational Markov condition for quantum processes', PRL 120, 040405 (2018)", url: "https://arxiv.org/abs/1801.09811" },
      { label: "Chen & Cai, 'Quantum Simulation of Non-Markovian Open Quantum Systems via Low-Rank Kernel Compression and Coupling Dilution' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.29372v1" },
    ] },

  { id: "O4", cat: "open-systems", horizon: "incremental", status: "improved",
    reviewedAt: "2026-10-26",
    evidence: [
      { kind: "preprint", role: "progress", summary: "One-to-one correspondence between CPTP maps from system to environment and Hermiticity- and trace-preserving assignment maps realizing every joint state, with a necessary and sufficient condition for a system state to lie in the validity domain; a characterization of assignments, not a CP-extension criterion for a given preparation family.", url: "https://arxiv.org/abs/2610.27338v1", date: "2026-10-19", version: "v1" },
    ],
    provenance: [
      { summary: "Fullwood and Ye report using Google Gemini for language refinement and as an interactive tool for exploring analytical methods and derivations, with the authors reviewing the content.", url: "https://arxiv.org/html/2610.27338v1", version: "v1" },
    ],
    title: "Initial system–environment correlations",
    statement: r`For a specified correlated preparation family and class of joint unitaries, characterize the induced reduced maps on their compatibility domain and when they admit a CP extension, distinguishing domain positivity, extension positivity and intervention-based descriptions.`,
    definition: r`**Initial system–environment correlations** complicate the description of reduced dynamics. A fixed product-state environment suffices for a CPTP reduced map on all system inputs; it is not necessary for every correlated preparation family. With initial correlations, different joint states may have the same system marginal, so even a single-valued reduced map requires an assignment or consistency condition. Positivity on the physical compatibility domain is different from a CP extension to the full operator space.

Pechukas first showed that with such correlations the reduced dynamics need not be completely positive (Pechukas, PRL 73, 1060 (1994), [doi:10.1103/PhysRevLett.73.1060](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.73.1060)).`,
    progress: r`- Pechukas's full-domain linear, positive and consistent assignment assumptions force a fixed-product assignment, not a trivial interaction Hamiltonian.
- Buscemi gives an information-theoretic CP characterization under specified preparation assumptions ([PRL 113, 140502 (2014)](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.113.140502)).
- Dominy, Shabani and Lidar distinguish inequivalent notions of CP on restricted domains and explain why discord or information-backflow criteria do not answer every assignment problem ([arXiv:1312.0908](https://arxiv.org/abs/1312.0908)).
- The 2009 Shabani–Lidar claim ([PRL 102, 100402](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.102.100402)) is to be read with its 2016 erratum ([PRL 116, 049901](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.116.049901)); it is not an unrestricted necessary-and-sufficient zero-discord criterion.
- Process tensors already treat correlations operationally via interventions.
- Fullwood and Ye (19 October 2026) establish a one-to-one correspondence between completely positive trace-preserving maps from the system to the environment and assignment maps that initialize the joint system in a possibly correlated state before the unitary ([arXiv:2610.27338](https://arxiv.org/abs/2610.27338v1)). Every joint state is realized by such an assignment; the maps are Hermiticity- and trace-preserving but need not be globally positive, and the authors give a necessary and sufficient condition for a system state to lie in the domain of validity, whose geometry is fixed by the joint state assigned to the maximally mixed input. This characterizes the domain-positivity side of the statement for a broad assignment class and supplies an operational witness of its limits. It does not decide, for a given structured preparation family, when the induced reduced map admits a completely positive extension.`,
    residual: r`Remaining tasks include checkable CP-extension criteria for physically structured preparation families and robust inference of the admissible domain from limited preparation data. The assignment assumptions and allowed joint dynamics must be fixed before an iff statement is formulated; the characterized special cases above are not part of the open residual. Related: O5, O3.`,
    refs: [
      { label: "Fullwood & Ye, 'Assignment maps for arbitrary reduced quantum dynamics' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.27338v1" },
      { label: "Pechukas, 'Reduced dynamics need not be completely positive', PRL 73, 1060 (1994)", url: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.73.1060" },
      { label: "Shabani & Lidar, 'Vanishing quantum discord is necessary and sufficient for completely positive maps', PRL 102, 100402 (2009; see 2016 erratum)", url: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.102.100402" },
      { label: "Shabani & Lidar, Erratum, PRL 116, 049901 (2016)", url: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.116.049901" },
      { label: "Buscemi, 'Complete positivity, Markovianity, and the quantum data-processing inequality, in the presence of initial system-environment correlations', PRL 113, 140502 (2014)", url: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.113.140502" },
      { label: "Dominy, Shabani & Lidar, 'A general framework for complete positivity', Quantum Information Processing 15 (2016)", url: "https://arxiv.org/abs/1312.0908" },
    ] },

  { id: "O5", cat: "open-systems", horizon: "incremental", status: "improved",
    evidence: [{ kind: "published", role: "progress", summary: "Pauli twirling can map divisible noise to a channel not embeddable in a Pauli semigroup; negative Pauli–Lindblad parameters diagnose failure of that semigroup criterion, not multi-time memory under interventions.", url: "https://doi.org/10.1038/s41534-026-01345-5", date: "2026-08-20" }],
    title: "Operational memory detection and compression",
    statement: r`For a specified set of multi-time interventions, determine optimal tests for quantum memory and the minimal memory dimension or simulation cost needed to reproduce the accessible statistics within error $\varepsilon$.`,
    definition: r`**Quantum memory criteria** (non-Markovianity measures) probe different data. CP-divisibility concerns a family of reduced maps; homogeneous semigroup embeddability concerns a time-independent generator; process-tensor Markovianity concerns statistics under interventions. Their inequivalence is not itself a missing definition.

Standard review: Breuer, Laine, Piilo and Vacchini, 'Colloquium: Non-Markovian dynamics in open quantum systems', Rev. Mod. Phys. 88, 021002 (2016), [doi:10.1103/RevModPhys.88.021002](https://journals.aps.org/rmp/abstract/10.1103/RevModPhys.88.021002).`,
    progress: r`- The main proposals include CP-divisibility of the dynamical map (Rivas–Huelga–Plenio measure), information backflow measured by non-monotonicity of trace distance / distinguishability (Breuer–Laine–Piilo measure), negativity of decay rates in the canonical master equation, and growth of system–environment correlations. These measures disagree: a process can be non-Markovian by one and Markovian by another.
- A more complete, operationally grounded framework is the process tensor / quantum stochastic process formalism (Pollock, Rodríguez-Rosario, Frauenheim, Paternostro and Modi, [arXiv:1512.00589](https://arxiv.org/abs/1512.00589); Costa and Shrapnel), which treats multi-time statistics under interventions and gives a genuine quantum generalization of the Kolmogorov extension theorem (Milz, Sakuldee, Pollock and Modi, [Quantum 4, 255 (2020)](https://doi.org/10.22331/q-2020-04-20-255)) and a clear Markov condition. Pollock et al.'s operational Markov condition is necessary and sufficient within its process framework ([arXiv:1801.09811](https://arxiv.org/abs/1801.09811)).
- Kattemölle, Gulácsi and Burkard (published August 2026; preprint February 2026) show that Pauli twirling can map divisible noise to a channel not embeddable in a Pauli semigroup ([doi:10.1038/s41534-026-01345-5](https://doi.org/10.1038/s41534-026-01345-5)). For positive nondegenerate Pauli eigenvalues, negative Pauli–Lindblad parameters diagnose failure of the specified semigroup criterion. This is not automatically a witness of multi-time memory in an implemented intervention process.`,
    residual: r`The open quantitative questions concern restricted experimental access, finite-sample witnesses, and matching upper/lower bounds on memory compression or simulation error. A target must state whether its norm controls all admissible interventions or only a restricted set. Related: O4, O9, C9.`,
    refs: [
      { label: "Breuer, Laine, Piilo, Vacchini, 'Colloquium: Non-Markovian dynamics in open quantum systems', Rev. Mod. Phys. 88, 021002 (2016)", url: "https://journals.aps.org/rmp/abstract/10.1103/RevModPhys.88.021002" },
      { label: "Pollock, Rodríguez-Rosario, Frauenheim, Paternostro, Modi, 'Non-Markovian quantum processes: complete framework and efficient characterisation', PRA 97, 012127 (2018)", url: "https://arxiv.org/abs/1512.00589" },
      { label: "Pollock et al., 'Operational Markov condition for quantum processes', PRL 120, 040405 (2018)", url: "https://arxiv.org/abs/1801.09811" },
      { label: "Milz, Sakuldee, Pollock & Modi, 'Kolmogorov extension theorem for (quantum) causal modelling and general probabilistic theories', Quantum 4, 255 (2020)", url: "https://doi.org/10.22331/q-2020-04-20-255" },
      { label: "Kattemölle, Gulácsi & Burkard, 'Non-Markovianity induced by Pauli twirling', npj Quantum Information 12, 138 (2026)", url: "https://doi.org/10.1038/s41534-026-01345-5" },
    ] },

  { id: "O6", cat: "open-systems", horizon: "incremental", status: "improved",
    reviewedAt: "2026-11-12",
    title: "Finite-resource coherent thermal conversion",
    statement: r`Characterize coherent state conversion under thermal operations without catalysts or with bounded catalyst dimension and energy; determine the cost of target error $\varepsilon$, exact catalyst restoration and permitted system–catalyst correlations.`,
    definition: r`**Thermal operations** — energy-conserving unitaries with a thermal bath — are the free operations of the resource theory of thermodynamics, which asks which state transformations they allow. Thermomajorization characterizes conversion between energy-diagonal states in the usual thermal-operation setting; this does not characterize every finite-bath or bounded-catalyst resource cost. Coherence between energy eigenspaces is an additional resource that the diagonal theory does not capture.

Reference: Brandão, Horodecki, Ng, Oppenheim and Wehner, 'The second laws of quantum thermodynamics', PNAS 112, 3275 (2015), [arXiv:1305.5278](https://arxiv.org/abs/1305.5278).`,
    progress: r`- Thermomajorization characterizes energy-diagonal conversion in the usual thermal-operation setting, while catalytic and many-copy settings have their own second laws.
- Time-translation asymmetry imposes additional restrictions on coherence (Lostaglio, Jennings and Rudolph, [arXiv:1405.2188](https://arxiv.org/abs/1405.2188)). Operation class, catalyst return convention and exact versus approximate output must be distinguished.
- Shiraishi and Takagi (October 2025) characterize approximate correlated-catalytic conversion under thermal operations ([arXiv:2510.05642](https://arxiv.org/abs/2510.05642)). If the target's resonant coherent modes are contained in the input's, conversion with an exactly restored catalyst and arbitrarily accurate target is possible iff free energy does not increase; the final correlation can be arbitrarily small. This does not bound catalyst dimension or energy.
- Shiraishi's separate published 2025 result concerns the larger class of covariant Gibbs-preserving operations, not thermal operations themselves ([PRL 134, 160402](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.134.160402)).
- Yamanouchi and Shiraishi (6 November 2026, v1) determine the optimal catalyst-free asymptotic rate of pure-to-pure conversion under thermal operations, with vanishing trace-distance error, for systems whose energy gaps are integer multiples of a common constant ([arXiv:2611.08974](https://arxiv.org/abs/2611.08974v1)). If the time-translation symmetry group of the input is contained in that of the target, the rate is $\min\{D(\psi\|\gamma)/D(\phi\|\gamma),\,V_H(\psi)/V_H(\phi)\}$, the free-energy ratio or the energy-variance ratio, whichever is smaller; otherwise it is zero. Both ratios were known upper bounds, and the result shows they are attained by thermal operations themselves. The same rate holds for covariant Gibbs-preserving operations. This settles the asymptotic catalyst-free pure-state case, not single-shot, mixed-state or bounded-catalyst conversion.`,
    residual: r`Remaining targets are catalyst-free conversion beyond the asymptotic pure-state rates, or exact-output conversion, and quantitative resource bounds for a fixed input/target pair: minimum catalyst dimension, energy spread and generated correlation at error $\varepsilon$. The boundary when the resonant-mode condition fails is also open; the theorem above does not cover it. These are more precise questions than declaring all coherent conversion open. Related: E11, O8.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Approximate correlated-catalytic thermal conversion is characterized by free energy when target resonant coherent modes are contained in input modes; bounded catalyst resources and exact target output are not covered.", url: "https://arxiv.org/abs/2510.05642v1", date: "2025-10-07", version: "v1" },
      { kind: "published", role: "progress", summary: "A related conversion theorem uses covariant Gibbs-preserving operations, a different operation class from thermal operations.", url: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.134.160402", date: "2025-04-22" },
      { kind: "preprint", role: "progress", summary: "Optimal catalyst-free asymptotic pure-state conversion rate under thermal operations: the minimum of the free-energy and energy-variance ratios, given the symmetry condition, for commensurate energy gaps.", url: "https://arxiv.org/abs/2611.08974v1", date: "2026-11-06", version: "v1" },
    ],
    refs: [
      { label: "Lostaglio, Jennings, Rudolph, 'Description of quantum coherence in thermodynamic processes requires constraints beyond free energy', Nat. Commun. 6, 6383 (2015)", url: "https://arxiv.org/abs/1405.2188" },
      { label: "Brandão, Horodecki, Ng, Oppenheim, Wehner, 'The second laws of quantum thermodynamics', PNAS 112, 3275 (2015)", url: "https://arxiv.org/abs/1305.5278" },
      { label: "Shiraishi & Takagi, 'Recovery of the second law in fully quantum thermodynamics' (2025), preprint", url: "https://arxiv.org/abs/2510.05642" },
      { label: "Yamanouchi & Shiraishi, 'Optimal asymptotic pure-state conversion under thermal operations' (2026 preprint, v1)", url: "https://arxiv.org/abs/2611.08974v1" },
      { label: "Shiraishi, 'Quantum Thermodynamics with Coherence: Covariant Gibbs-Preserving Operation Is Characterized by the Free Energy', PRL 134, 160402 (2025)", url: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.134.160402" },
    ] },

  { id: "O7", cat: "open-systems", horizon: "programme",
    title: "Autonomous quantum machines",
    statement: r`For a specified autonomous machine with bounded dimension, energy and interaction strength, derive tight trade-offs for its chosen clock, battery or heat-engine task, including auxiliary preparation, repeated-use degradation and control costs.`,
    definition: r`**An autonomous quantum machine** runs on a time-independent Hamiltonian, without external time-dependent control, so the clock or driving that a controlled protocol assumes must itself be part of the quantum system. This sharpens thermodynamic limits by charging for control.

Reference: Woods, Silva and Oppenheim, 'Autonomous Quantum Machines and Finite-Sized Clocks', Ann. Henri Poincaré 20, 125–218 (2019), [doi:10.1007/s00023-018-0736-9](https://doi.org/10.1007/s00023-018-0736-9).`,
    progress: r`- Autonomous clock models exhibit accuracy–resolution–dissipation trade-offs (Erker, Mitchison, Silva, Woods, Brunner and Huber, [arXiv:1609.06704](https://arxiv.org/abs/1609.06704)) and finite-dimensional quantum-clock scaling advantages; entropy–accuracy inequalities depend on the clock and readout assumptions and are not one universal law.
- Battery power and extractable-work bounds depend on the allowed interactions and their norm.
- Engine and refrigerator efficiencies must be compared at specified reservoirs, coupling and output-power conventions.`,
    residual: r`This programme has distinct child targets: for clocks, repeated-tick accuracy and timing-induced channel error at bounded energy and size; for batteries, charging power and retained work at fixed interaction norm/locality; for engines and refrigerators, efficiency–power–fluctuation frontiers at specified baths. The cost and degradation of the finite clock or controller are included rather than supplying an ideal external drive for free. Relational clock formalism from archived F11 is tracked in F8; its finite-resource performance questions belong here. Related: O6, O8, F8.`,
    relations: [{ id: "F8", type: "related" }, { id: "O6", type: "related" }, { id: "O8", type: "related" }],
    refs: [
      { label: "Erker, Mitchison, Silva, Woods, Brunner, Huber, 'Autonomous quantum clocks: does thermodynamics limit our ability to measure time?', PRX 7, 031022 (2017)", url: "https://arxiv.org/abs/1609.06704" },
      { label: "Woods, Silva & Oppenheim, 'Autonomous Quantum Machines and Finite-Sized Clocks', Ann. Henri Poincaré 20, 125–218 (2019)", url: "https://doi.org/10.1007/s00023-018-0736-9" },
    ] },

  { id: "O8", cat: "open-systems", horizon: "incremental",
    title: "Work and heat at strong coupling",
    statement: r`For a stated strong-coupling experiment, specify accessible energy measurements, work storage and interaction-energy accounting, then derive testable work/heat statistics and fluctuation relations with controlled effects of initial correlations and measurement disturbance.`,
    definition: r`**Work and heat** depend, even in ordinary thermodynamics, on an operational partition and protocol. At strong system–bath coupling the interaction energy cannot be neglected, and initial correlations and quantum energy-measurement disturbance make those choices particularly important. Different valid bookkeeping schemes need not describe the same task.

Standard review: Talkner and Hänggi, 'Colloquium: Statistical mechanics and thermodynamics at strong coupling: Quantum and classical', Rev. Mod. Phys. 92, 041002 (2020), [arXiv:1911.11660](https://arxiv.org/abs/1911.11660).`,
    progress: r`- A leading approach uses the Hamiltonian of mean force to define a system 'effective' internal energy and entropy such that equilibrium thermodynamic relations are preserved (Seifert, [PRL 116, 020601](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.116.020601), for driven classical systems, where it also gives a first law and an integral fluctuation theorem; Talkner and Hänggi for the quantum and classical equilibrium theory); this yields a consistent equilibrium thermodynamics at strong coupling.
- For nonequilibrium processes, various definitions of work and heat (based on the two-point measurement scheme, on the bath energy change, or on the system+interaction) disagree, and fluctuation theorems can be formulated but depend on the chosen split. Reaction-coordinate and HEOM methods (O3) give numerically consistent accounts in specific models.
- A published no-go theorem of Perarnau-Llobet et al. shows that, for coherent closed-system protocols, a positive work-measurement scheme cannot in general both reproduce the average energy change and agree with the two-point measurement distribution on incoherent states ([arXiv:1606.08368](https://arxiv.org/abs/1606.08368)). This already rules out some demands for a unique universal definition; it does not forbid model-specific operational thermodynamics.`,
    residual: r`The frontier is a stated experiment: compare battery work, calorimetric heat and interaction-energy accounting; prove which fluctuation relation survives the chosen preparation and measurement procedure, and bound corrections or inaccessible contributions. Agreement on one convention is not the success criterion. Related: O3, O6, O7.`,
    refs: [
      { label: "Talkner & Hänggi, 'Colloquium: Statistical mechanics and thermodynamics at strong coupling: Quantum and classical', Rev. Mod. Phys. 92, 041002 (2020)", url: "https://arxiv.org/abs/1911.11660" },
      { label: "Seifert, 'First and second law of thermodynamics at strong coupling', PRL 116, 020601 (2016)", url: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.116.020601" },
      { label: "Perarnau-Llobet et al., 'No-go theorem for the characterization of work fluctuations in coherent quantum systems', PRL 118, 070601 (2017)", url: "https://arxiv.org/abs/1606.08368" },
    ] },

  { id: "O9", cat: "open-systems", horizon: "incremental", status: "improved",
    title: "Learning open-system dynamics",
    statement: r`For a specified generator or finite-memory model, preparation/measurement access and estimation norm, determine matching experimental and computational bounds for identifying the dynamics, including robustness to state-preparation and measurement errors.`,
    definition: r`**Learning open-system dynamics** means identifying an unknown open-system evolution from experiments, which is essential for calibration, verification and control. Full process tomography scales exponentially and treats each time independently, whereas a physical model may be specified compactly by a Hamiltonian, a Lindblad generator, or a finite-memory process tensor. The learning problem is to exploit that structure without assuming it in a way that hides important noise.

Framework for finite-memory processes: Pollock et al., 'Non-Markovian quantum processes: complete framework and efficient characterisation', PRA 97, 012127 (2018), [arXiv:1512.00589](https://arxiv.org/abs/1512.00589).`,
    progress: r`- Efficient algorithms exist for local or sparse Hamiltonians, Pauli channels and several structured Lindbladians, while process-tensor tomography can reconstruct non-Markovian multi-time statistics at a cost governed by memory and temporal complexity. General learnability depends on access assumptions — short-time evolution, ancillas, coherent control, adaptivity and the available state preparations and measurements — and robustness to state-preparation and measurement errors is often decisive.
- Chen and Yu (30 July 2026) give nearly optimal experiment-count and evolution-time guarantees for learning bounded-dynamical-strength Pauli-expanded Lindbladians ([arXiv:2607.28610](https://arxiv.org/abs/2607.28610v2)). Version 2 (3 November 2026) adds lower bounds from a family of 3-local Lindbladians, showing that the algorithm's experiment count and total evolution time for $k$-local Lindbladians are optimal up to polylogarithmic factors for every fixed $k\ge3$. Their error is coefficient-wise, with a thresholded support guarantee; it is not automatically a diamond-norm guarantee for an arbitrary evolved channel. The nonadaptive, ancilla-free protocol requires no control during evolution, but its coefficient-learning stage uses global stabilizer/Clifford preparation and measurement resources. These access assumptions are part of the theorem.
- Ramos Ramos et al. (25 August 2026) combined stochastic tensor-network simulation with optimization to learn local Lindblad dissipation rates up to 16 sites and a seven-parameter homogeneous model up to 160 sites, with exact variance identities and finite-covariance error guarantees ([arXiv:2608.24668](https://arxiv.org/abs/2608.24668v1)).
- Pancotti, Saravanan and Svore (31 August 2026) instead learned fault-event probabilities directly from error-correction syndrome and logical-observable data: an exact maximum-likelihood tensor-network decoder supplies differentiable gradients, on Sycamore data recovers noise models whose logical error rates agree within 2% with Google's reference detector error model, and tracks synthetic drift by warm starts ([arXiv:2609.00169](https://arxiv.org/abs/2609.00169v1)).`,
    residual: r`The tensor-network results address scalable and experimentally realistic structured models, not the optimal-resource theory for arbitrary generators or multi-time non-Markovian processes; they are preprints with structured-model and numerical evidence, not a universal optimal-resource theorem. The remaining targets include restricted local preparation/measurement, translating coefficient error into prediction error, SPAM-robust identification, time-dependent generators and finite-memory non-Markovian processes, each with explicit upper and lower bounds. Related: O1, O2, O5.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Near-optimal bounded-strength coefficient learning with thresholded support, using specified product/stabilizer access; v2 adds lower bounds showing optimal experiment count and evolution time up to polylogarithms for fixed locality k>=3. Not a universal diamond-norm process-learning guarantee.", url: "https://arxiv.org/abs/2607.28610v2", date: "2026-11-03", version: "v2" },
      { kind: "numerical", role: "progress", summary: "Structured Lindblad-rate learning with stochastic tensor networks; simulation scaling does not certify arbitrary-process learnability.", url: "https://arxiv.org/abs/2608.24668v1", date: "2026-08-25", version: "v1" },
      { kind: "numerical", role: "progress", summary: "Tensor-network likelihood learning of fault-event probabilities from error-correction data, a restricted noise model.", url: "https://arxiv.org/abs/2609.00169v1", date: "2026-08-31", version: "v1" },
    ],
    provenance: [
      { summary: "In v1, Chen and Yu state that ChatGPT was used interactively to check the correctness of proofs, identify relevant references and polish the manuscript, and that all writing, including mathematical statements and reasoning, was completed by the authors. This is an author disclosure, not evidence of theorem correctness.", url: "https://arxiv.org/abs/2607.28610v1", version: "v1" },
      { summary: "In v2, Chen and Yu report that GPT-6 Astra was used interactively to assist in refining the hard-instance construction of Section 5.1 and in developing and checking the proof of Lemma 5.2, and that GPT-5.6 Sol was used to check the correctness of proofs, identify relevant references and polish the manuscript; the authors take full responsibility for the final text and all mathematical statements, arguments and results.", url: "https://arxiv.org/abs/2607.28610v2", version: "v2" },
    ],
    refs: [
      { label: "Pollock et al., 'Non-Markovian quantum processes: complete framework and efficient characterisation', PRA 97, 012127 (2018)", url: "https://arxiv.org/abs/1512.00589" },
      { label: "Chen & Yu, 'Learning Arbitrary Lindbladians from Time Evolution' (2026 preprint, v2 of 3 November 2026)", url: "https://arxiv.org/abs/2607.28610v2" },
      { label: "Ramos Ramos et al., 'Scalable Lindblad Noise Learning via Stochastic Tensor-Network Simulation' (2026 preprint, v1; latest v3 of 22 September 2026)", url: "https://arxiv.org/abs/2608.24668v1" },
      { label: "Pancotti, Saravanan & Svore, 'Exact learning of quantum noise with tensor networks' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.00169v1" },
    ] },
  { id: "O10", cat: "open-systems", horizon: "incremental", status: "improved",
    reviewedAt: "2026-11-08",
    provenance: [
      { summary: "Kim acknowledges ChatGPT 5.5, 5.6 Sol and 6 Astra assistance in developing several proof strategies, including the unitalization argument, Assumption 4.3 and the algorithm analysis.", url: "https://arxiv.org/abs/2610.01190v1", version: "v1" },
      { summary: "Chen and Ding report that the work grew from a GPT-6-aided investigation, with GPT-6 used to brainstorm initial proof ideas and draft preliminary calculations; the authors report constructing the proof framework and verifying all arguments.", url: "https://arxiv.org/abs/2610.05848v1", version: "v1" },
      { summary: "Pilatowsky-Cameo, Styliaris, Bakshi and Malz acknowledge GPT 5.5–6 and Claude Fable 5–5.1 for technical assistance in their proofs.", url: "https://arxiv.org/html/2609.35973v1", version: "v1" },
      { summary: "Capel, Pérez-García and Scandi attribute the main concepts to themselves and acknowledge LLM assistance upgrading weak MLSI to MLSI, refining proofs, proofreading and figures. They take responsibility for the manuscript and do not name a model.", url: "https://arxiv.org/html/2610.03683v1", version: "v1" },
      { summary: "Rouzé and Stilck França report Codex with ChatGPT 6 Astra assistance exploring and checking proof strategies and preparing the manuscript. They retain responsibility for the mathematics and exposition; disclosure checked in the PDF, page 55.", url: "https://arxiv.org/pdf/2610.03578v1", version: "v1" },
      { summary: "Li reports GPT-5.6 Sol assistance with editing, organization, literature discovery, code and completion of several proofs, while attributing the scientific ideas to himself and stating that he reviewed and verified the assisted material.", url: "https://arxiv.org/html/2609.09291v1", version: "v1" },
      { summary: "Kiani reports that the paper developed out of interactions with ChatGPT 6, which proposed the proof strategy and drafted the central arguments, refined through his feedback, and generated a manuscript draft that he heavily revised; he reports checking all proofs and takes full responsibility for the paper.", url: "https://arxiv.org/html/2609.30149v1", version: "v1" },
      { summary: "Gao, Guo and Wang acknowledge ChatGPT (GPT-6.1 Sol) assistance during exploratory discussions and manuscript preparation, and state that they verified and reformulated all mathematical arguments and proofs and take full responsibility for the content.", url: "https://arxiv.org/html/2610.28600v1", version: "v1" },
      { summary: "Bertoni and De Palma report that an unnamed AI-assisted language model was used during manuscript preparation for literature discovery, editorial restructuring and consistency checks, and retain responsibility for the final text and every mathematical claim.", url: "https://arxiv.org/html/2610.40361v1", version: "v1" },
    ],
    title: "Efficient Gibbs preparation beyond high temperature",
    statement: r`For two-dimensional finite-range noncommuting spin Hamiltonians of bounded local strength and a specified reversible local or quasilocal Gibbs sampler, identify verifiable temperature/interaction conditions beyond the established high-temperature regime giving polynomial mixing and preparation to trace-distance error $\varepsilon$, or prove slow-mixing obstructions.`,
    definition: r`**Gibbs-state preparation** asks for an efficient procedure, typically a reversible local or quasilocal sampler, that prepares $\rho_\beta=e^{-\beta H}/\operatorname{tr}(e^{-\beta H})$. This is different from proving a master equation valid (O2) or learning its generator (O9). A sampler must have the desired stationary state, mix rapidly from its allowed initial states, and be implementable at controlled circuit or system–bath cost. The generator normalization is fixed, so that increasing all rates is not counted as an algorithmic speedup.

Standard baseline: Chen, Kastoryano and Gilyén construct an efficiently implementable, exactly detailed-balanced Lindbladian for Gibbs states of arbitrary noncommuting Hamiltonians, whose cost scales with its mixing time ([arXiv:2311.09207](https://arxiv.org/abs/2311.09207)).`,
    progress: r`- Rouzé, Stilck França and Alhambra prove that such a dissipative evolution thermalizes in polynomial time at high enough temperature for Hamiltonians satisfying a Lieb–Robinson bound (published in Nature Physics, 2026; [arXiv:2403.12691](https://arxiv.org/abs/2403.12691)).
- Bakshi, Liu, Moitra and Tang show that Gibbs states of local Hamiltonians on bounded-degree graphs are separable above a constant temperature and can be prepared efficiently (FOCS 2024; [arXiv:2403.16850](https://arxiv.org/abs/2403.16850)).
- Bergamaschi and Chen (9 October 2025; v2 of 23 January 2026, retitled) prove that every short-range 1D Hamiltonian admits a KMS-detailed-balance Gibbs sampler with a size-independent spectral gap at every finite temperature, giving polylogarithmic-depth preparation and exponential clustering ([arXiv:2510.08533](https://arxiv.org/abs/2510.08533v2)).
- Slezak et al. (January 2026) prove polynomial convergence for specified system–bath/repeated-interaction generators in high-temperature lattices, weakly interacting fermions and 1D chains ([arXiv:2601.16154](https://arxiv.org/abs/2601.16154)).
- Hahn, Sweke, Deshpande and Shtanko (published April 2026) show that spatial truncation and local-circuit implementation preserve rapid Gibbs mixing with bounded error at high temperature ([PRX Quantum 7, 020314](https://journals.aps.org/prxquantum/abstract/10.1103/m5zb-z4nn)).
- Li (8 September 2026) gives a spectral core–tail framework separating core preparation, unitary implementation and model-mismatch errors ([arXiv:2609.09291](https://arxiv.org/abs/2609.09291v1)). Its volume-uniform local-observable bound assumes a summable Kubo–Mori response and uniform local data; perturbative residual control also assumes uniform locality and solvability. Exact anchor constructions and tests on deformed graph-stabilizer models do not establish a general low-temperature mixing theorem. Local-observable accuracy is weaker than the global trace-distance target, and a prepared ansatz is not by itself a rapidly mixing reversible sampler.
- Gao and Guo (14 September 2026) show that the modified log-Sobolev constant of a quantum Markov semigroup is equivalent to a BKM coercivity constant up to a factor depending on the asymptotic conditional expectation (its Pimsner–Popa index, not a universal constant), and that the complete BKM constant is attained with a qubit auxiliary system and equals the GNS spectral gap, so that complete MLSI holds exactly when that gap is positive ([arXiv:2609.15902](https://arxiv.org/abs/2609.15902v1)). This is a tool for the size-independent inequalities below, not a 2D mixing theorem.
- Hwang and Jiang (published 18 September 2026) reduce Gibbs preparation for specified commuting Hamiltonians to classical Gibbs sampling, including 2-local qudit systems and restricted 2D 4-local qubit systems ([doi:10.22331/q-2026-09-18-2209](https://doi.org/10.22331/q-2026-09-18-2209)). Efficiency depends on efficient sampling of the associated classical model; this is not a rapid-mixing theorem for every Davies generator.
- Kiani (24 September 2026) sharpens the separability threshold for bounded-overlap Pauli Hamiltonians (E3) ([arXiv:2609.30149](https://arxiv.org/abs/2609.30149v1)). Product-state sampling is polynomial-time for fixed overlap degree and a fixed relative margin below the inverse-temperature threshold, thus above the corresponding physical temperature. This does not establish rapid mixing for arbitrary reversible dynamics.
- Pilatowsky-Cameo et al. (28 September 2026) give a block-product mixture for 1D Gibbs states at fixed positive temperature, enabling constant-depth quantum preparation with polynomial classical preprocessing ([arXiv:2609.35973](https://arxiv.org/abs/2609.35973v1)). The constants can grow doubly exponentially with inverse temperature; this is not constant total computational cost.
- Capel, Pérez-García and Scandi (2 October 2026) prove a modified log-Sobolev inequality with constant $\Omega(1/\log n)$ for the heat-bath and regularised heat-bath dynamics of finite-range noncommuting 1D chains, giving $O(\log n\,\log(n/\varepsilon))$ mixing ([arXiv:2610.03683](https://arxiv.org/abs/2610.03683v1)). Rouzé and Stilck França (2 October 2026) obtain logarithmic trace-norm mixing for smoothed block dynamics on chains and stability near reference Hamiltonians satisfying a strict quantum Dobrushin–Shlosman condition, including controlled noncommuting perturbations of suitable classical models in higher dimensions ([arXiv:2610.03578](https://arxiv.org/abs/2610.03578v1)). Generator normalization, fixed temperature and the reference mixing condition remain essential.
- Kim (1 October 2026) proves $O(\log(n/\varepsilon))$ mixing of a quasi-local Petz-recovery block-update Gibbs sampler for every 1D finite-range Hamiltonian at every finite temperature, with polylogarithmic-depth preparation circuits ([arXiv:2610.01190](https://arxiv.org/abs/2610.01190v1)). Chen and Ding (5 October 2026) prove $O(\log^4 n+\log(1/\varepsilon))$ trace-norm mixing for the Chen–Kastoryano–Gilyén sampler on general 1D noncommuting chains at every fixed positive temperature; their v2 (21 October 2026) adds a modified log-Sobolev rate of order $\log^{-4}n$ ([arXiv:2610.05848](https://arxiv.org/abs/2610.05848v2)).
- Gao, Guo and Wang (20 October 2026) prove a complete modified logarithmic Sobolev inequality with a size-independent constant for the Chen–Kastoryano–Gilyén sampler on 1D chains with bounded finite-range, possibly noncommuting and nonuniform, interactions at every fixed positive temperature, giving $O(\log N+\log(1/\varepsilon))$ mixing ([arXiv:2610.28600](https://arxiv.org/abs/2610.28600v1)).
- Chen, Ding and Lu (22 October 2026) give a general route to size-independent $L^2$ and modified log-Sobolev inequalities for KMS-detailed-balanced samplers by transporting along a temperature path from infinite temperature, applied to 1D chains at every finite temperature and to finite-range systems at sufficiently high temperature in any dimension ([arXiv:2610.31571](https://arxiv.org/abs/2610.31571v1)).
- Bertoni and De Palma (29 October 2026) prove logarithmic mixing for KMS Gibbs samplers of two-local Hamiltonians on arbitrary interaction graphs, including all-to-all couplings, under a quantum Dobrushin condition in a high-temperature regime ([arXiv:2610.40361](https://arxiv.org/abs/2610.40361v1)).
- On the obstruction side, Gamarnik, Kiani and Zlokapa (6 November 2024; v2 of 12 December 2024, which fixes an error in the noncommuting results of v1) prove a quantum bottleneck lemma and low-temperature mixing-time lower bounds. For the ferromagnetic transverse-field Ising model on a $\sqrt n\times\sqrt n$ lattice, at sufficiently low constant temperature and small constant field, they obtain $T_{\rm mix}=\exp[\Omega(\sqrt n)]$ for Lindbladian samplers with geometrically local jump operators and $T_{\rm mix}\ge\exp[n^{1/2-o(1)}]$ for the quasi-local Chen–Kastoryano–Gilyén sampler ([arXiv:2411.04300](https://arxiv.org/abs/2411.04300v2)). Rakovszky, Placke, Breuckmann and Khemani prove a bottleneck theorem for Markovian quantum channels that bounds any quasi-local Gibbs sampler, with exponentially large mixing times for weakly perturbed commuting-projector models with extensive energy barriers ([PRL 137, 050402 (2026)](https://doi.org/10.1103/y9z2-52rl); [arXiv:2412.09598](https://arxiv.org/abs/2412.09598)). These are obstructions for specific models and parameter ranges, not a classification of the 2D low-temperature regime.`,
    residual: r`All of the rapid-mixing and preparation results above are one-dimensional, high-temperature or restricted to special families; those regimes are not the open target. The slow-mixing lower bounds above cover particular low-temperature models and sampler classes only. The selected frontier concerns genuinely interacting 2D spin families outside proven uniform high-temperature guarantees: state the generator, inverse-temperature range and any clustering or phase assumptions; derive quantitative spectral-gap or log-Sobolev bounds and implementation errors, or identify bottlenecks forcing slow mixing.

No efficient algorithm for every Hamiltonian at every temperature is conjectured here. Noncommuting conserved charges introduce a related but distinct thermalization target under B4/B5.`,
    relations: [{ id: "O2", type: "related" }, { id: "O9", type: "related" }, { id: "B5", type: "related" }],
    evidence: [
      { kind: "preprint", role: "progress", summary: "Size-independent spectral gap of a Gibbs sampler for every short-range 1D Hamiltonian at every finite temperature; one-dimensional.", url: "https://arxiv.org/abs/2510.08533v2", date: "2026-01-23", version: "v2" },
      { kind: "preprint", role: "progress", summary: "Quantum bottleneck lemma and low-temperature mixing-time lower bounds, including $\\exp[n^{1/2-o(1)}]$ for the Chen–Kastoryano–Gilyén sampler on the ferromagnetic 2D transverse-field Ising model at low temperature and small constant field; an obstruction for specific models, not a 2D classification.", url: "https://arxiv.org/abs/2411.04300v2", date: "2024-12-12", version: "v2" },
      { kind: "published", role: "progress", summary: "Bottleneck theorem for Markovian quantum channels bounding any quasi-local Gibbs sampler; exponentially large mixing times for weakly perturbed commuting-projector models with extensive energy barriers.", url: "https://doi.org/10.1103/y9z2-52rl", date: "2026-07-28" },
      { kind: "preprint", role: "progress", summary: "MLSI characterized by a BKM coercivity constant; complete MLSI criterion via qubit amplification. A tool, not a 2D result.", url: "https://arxiv.org/abs/2609.15902v1", date: "2026-09-14", version: "v1" },

      { kind: "preprint", role: "progress", summary: "Logarithmic mixing for KMS Gibbs samplers of two-local Hamiltonians on arbitrary interaction graphs, including all-to-all, under a quantum Dobrushin condition; a high-temperature regime.", url: "https://arxiv.org/abs/2610.40361v1", date: "2026-10-29", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Logarithmic-time mixing of a quasi-local Petz-recovery Gibbs sampler for every 1D finite-range Hamiltonian at every finite temperature; one-dimensional.", url: "https://arxiv.org/abs/2610.01190v1", date: "2026-10-01", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Polylogarithmic mixing of the KMS-detailed-balance Gibbs sampler for general 1D noncommuting chains at every fixed positive temperature; v2 adds a modified log-Sobolev rate of order $\\log^{-4}n$; one-dimensional.", url: "https://arxiv.org/abs/2610.05848v2", date: "2026-10-21", version: "v2" },
      { kind: "preprint", role: "progress", summary: "Size-independent complete modified log-Sobolev inequality for the Chen–Kastoryano–Gilyén sampler on 1D finite-range chains at every fixed positive temperature; one-dimensional.", url: "https://arxiv.org/abs/2610.28600v1", date: "2026-10-20", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Temperature-path method for size-independent log-Sobolev inequalities of KMS-detailed-balanced samplers; applied to 1D chains at every temperature and to high temperature in any dimension.", url: "https://arxiv.org/abs/2610.31571v1", date: "2026-10-22", version: "v1" },
      { kind: "preprint", role: "progress", summary: "1D constant-depth quantum preparation at fixed temperature, with polynomial classical preprocessing and temperature-dependent constants.", url: "https://arxiv.org/abs/2609.35973v1", date: "2026-09-28", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Modified log-Sobolev inequality and rapid mixing for specified 1D noncommuting heat-bath samplers at fixed positive temperature.", url: "https://arxiv.org/abs/2610.03683v1", date: "2026-10-02", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Block-sampler rapid mixing on chains and near references satisfying a strict quantum Dobrushin–Shlosman condition; not arbitrary low-temperature 2D mixing.", url: "https://arxiv.org/abs/2610.03578v1", date: "2026-10-02", version: "v1" },
      { kind: "published", role: "progress", summary: "Gibbs preparation via classical reductions for specified commuting families; efficiency requires an efficient sampler for the associated classical model.", url: "https://doi.org/10.22331/q-2026-09-18-2209", date: "2026-09-18" },
      { kind: "preprint", role: "progress", summary: "High-temperature product-state sampling in global trace distance; not a general reversible-generator mixing theorem.", url: "https://arxiv.org/abs/2609.30149v1", date: "2026-09-24", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Local Gibbs-observable error certification under response-summability and perturbative assumptions; neither global trace-distance convergence nor general low-temperature rapid mixing follows.", url: "https://arxiv.org/abs/2609.09291v1", date: "2026-09-08", version: "v1" },
      { kind: "published", role: "progress", summary: "Local-circuit approximations preserve rapid Gibbs mixing at high temperature with bounded preparation error.", url: "https://journals.aps.org/prxquantum/abstract/10.1103/m5zb-z4nn", date: "2026-04-23" },
      { kind: "preprint", role: "progress", summary: "Polynomial-time thermalization is proved for particular generator families and high-temperature lattices, weakly interacting fermions and 1D chains, not all 2D low-temperature models.", url: "https://arxiv.org/abs/2601.16154v1", date: "2026-01-22", version: "v1" },
    ],
    refs: [
      { label: "Bergamaschi & Chen, 'Fast Mixing of Quantum Spin Chains at All Temperatures' (preprint, v1 of 9 October 2025 titled 'Quantum Spin Chains Thermalize at All Temperatures'; v2 of 23 January 2026) (found via the QIQCOP Zoo)", url: "https://arxiv.org/abs/2510.08533v2" },
      { label: "Gamarnik, Kiani & Zlokapa, 'Slow Mixing of Quantum Gibbs Samplers' (2024 preprint, v2)", url: "https://arxiv.org/abs/2411.04300v2" },
      { label: "Rakovszky, Placke, Breuckmann & Khemani, 'Bottlenecks in Quantum Channels and Finite Temperature Phases of Matter', PRL 137, 050402 (2026)", url: "https://doi.org/10.1103/y9z2-52rl" },
      { label: "Gao & Guo, 'Relative Entropy Decay via BKM coercivity for Quantum Markov Semigroups' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.15902v1" },
      { label: "Bertoni & De Palma, 'Rapid mixing for Gibbs samplers for quantum spin systems with all-to-all interactions' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.40361v1" },
      { label: "Leeseok Kim, 'Rapid mixing of quantum spin chains at any finite temperature' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.01190v1" },
      { label: "Chen & Ding, 'Spectral Analysis Beyond the Spectral Gap: Rapid Mixing of Quantum Gibbs Samplers in One Dimension' (2026 preprint, v2)", url: "https://arxiv.org/abs/2610.05848v2" },
      { label: "Gao, Guo & Wang, 'Complete Modified Logarithmic Sobolev Inequalities for one-dimensional quantum Spin Chain' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.28600v1" },
      { label: "Chen, Ding & Lu, 'Size-independent Logarithmic Sobolev Inequalities for Quantum Gibbs Samplers' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.31571v1" },
      { label: "Saúl Pilatowsky-Cameo, Georgios Styliaris, Ainesh Bakshi, Daniel Malz, 'One-dimensional quantum Gibbs states in constant circuit depth' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.35973v1" },
      { label: "Ángela Capel, David Pérez-García, Matteo Scandi, 'Modified logarithmic Sobolev inequality for 1D non-commuting Hamiltonians' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.03683v1" },
      { label: "Cambyse Rouzé, Daniel Stilck França, 'Rapid mixing of Gibbs samplers via quantum Dobrushin--Shlosman conditions' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.03578v1" },
      { label: "Chen, Kastoryano & Gilyén, 'An efficient and exact noncommutative quantum Gibbs sampler' (2023 preprint)", url: "https://arxiv.org/abs/2311.09207" },
      { label: "Rouzé, Stilck França & Alhambra, 'Efficient thermalization and universal quantum computing with quantum Gibbs samplers', Nature Physics (2026)", url: "https://arxiv.org/abs/2403.12691" },
      { label: "Bakshi, Liu, Moitra & Tang, 'High-Temperature Gibbs States are Unentangled and Efficiently Preparable', FOCS 2024", url: "https://arxiv.org/abs/2403.16850" },
      { label: "Hwang & Jiang, 'Gibbs state preparation for commuting Hamiltonian: Mapping to classical Gibbs sampling', Quantum 10, 2209 (18 September 2026)", url: "https://doi.org/10.22331/q-2026-09-18-2209" },
      { label: "Kiani, 'Sharp universal death of entanglement threshold for Pauli Hamiltonians' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.30149v1" },
      { label: "Li, 'Spectral Core-Tail Architecture for Locally Certified Gibbs-State Preparation' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.09291v1" },
      { label: "Hahn, Sweke, Deshpande & Shtanko, 'Efficient Quantum Gibbs Sampling with Local Circuits', PRX Quantum 7, 020314 (2026)", url: "https://journals.aps.org/prxquantum/abstract/10.1103/m5zb-z4nn" },
      { label: "Slezak et al., 'Polynomial-time thermalization and Gibbs sampling from system-bath couplings' (2026), preprint", url: "https://arxiv.org/abs/2601.16154" },
    ] },

  // 16 November 2026: questions from the carte v2 map of the quant-ph corpus.
  { id: "O11",
    cat: "open-systems",
    horizon: "sharp",
    reviewedAt: "2026-11-16",
    title: "Rigorous absolutely stable time crystal in continuous-time open dynamics",
    statement: r`(Machado, Zhuang, Yao and Zaletel 2021–2023.) In the Floquet–Langevin $\pi$-Toom model, classical local degrees of freedom on the two-dimensional square lattice evolve under a Hamiltonian made of a kinetic term and a time-periodic local potential, so that each drive period implements one update of the $\pi$-Toom probabilistic cellular automaton (the anti-majority north-east-centre rule). The system is coupled to a Langevin bath at temperature $T>0$. Prove that for $T$ small enough the space-time error events satisfy Toom's sparsity condition: the probability that all points of any given finite set $S$ of space-time cells carry an error is at most $\epsilon^{|S|}$, with $\epsilon$ small. Conclude that the period-doubled autocorrelation of the Ising variable stays bounded away from zero at all times in the thermodynamic limit, and that this persists under every sufficiently small local perturbation of the one-period dynamics, including perturbations that break the time-translation symmetry of the drive.`,
    definition: r`**Absolute stability.** A time crystal is absolutely stable if its subharmonic order survives every small local perturbation, with no symmetry or fine tuning required. For discrete-time probabilistic cellular automata, Toom proved that eroder rules such as the north-east-centre majority rule keep their two phases distinct under noise satisfying a sparsity condition (Toom, 1980). Classical driven systems with noise were analyzed by Yao, Nayak, Balents and Zaletel, “Classical discrete time crystals”, Nat. Phys. 16, 438 (2020), [arXiv:1801.02628](https://arxiv.org/abs/1801.02628).

Machado et al. map probabilistic cellular automata to continuous-time Langevin dynamics with a periodic Hamiltonian ([arXiv:2110.00585](https://arxiv.org/abs/2110.00585v2), PRL 131, 180402 (2023)). They find “compelling evidence that the Floquet-Langevin DTC satisfies the requisite error condition for absolute stability”, but “cannot rule out” a change of behaviour at anomalously large volume, cumulant order or inverse temperature, and conclude: “Obtaining a rigorous proof of this bound thus remains an important open question.”`,
    progress: r`- Machado, Zhuang, Yao and Zaletel (v1 October 2021, PRL 2023, v2 December 2024) observe numerically a finite-temperature transition between a discrete time crystal and a disordered phase in the two-dimensional Floquet–Langevin $\pi$-Toom model, and test the error condition through cumulants of error indicators ([arXiv:2110.00585](https://arxiv.org/abs/2110.00585v2)).
- McGinley, Roy and Parameswaran (PRL 129, 090404 (2022)) give a quantum analogue with partial measurements and Toom-like feedback, supported by two-dimensional Clifford-circuit simulations and smaller general simulations, not by a proof ([arXiv:2111.02499](https://arxiv.org/abs/2111.02499v2)).
- Drechsler, Oreg and Aharonov (4 October 2026, v1) relate quantum memories of CSS codes under Pauli noise to classical stochastic processes. They prove that the 4D toric code with Toom's rule is a quantum memory under local Pauli noise below a constant threshold, for synchronous dynamics and for a Floquet Lindbladian; the time-independent case “remains open”. They do not discuss time crystals ([arXiv:2610.05589](https://arxiv.org/abs/2610.05589v1)).
- Ogami and Tajima (6 November 2026, v1) prove go and no-go theorems for open time crystals without external thermodynamic resources (time-independent generators, covariance, detailed balance). The driven Floquet–Langevin model consumes work and lies outside these conditions ([arXiv:2611.09540](https://arxiv.org/abs/2611.09540v1)).`,
    residual: r`The rigorous error bound for the Floquet–Langevin model is open. An intermediate target is Toom's condition for a periodically forced continuous-time Glauber dynamics without inertia. A quantum version, not posed by Machado et al., asks for a local, translation-invariant, time-periodic Lindbladian on qubits of $\mathbb Z^2$ whose period-doubled order survives every small local CPTP perturbation of the one-period channel. The case of local Pauli noise may be reachable through the reduction of Drechsler, Oreg and Aharonov; coherent and general CPTP perturbations are not covered by it. Related: passive memories (B16).`,
    evidence: [
      { kind: "numerical",
        role: "progress",
        summary: "Mapping of probabilistic cellular automata to continuous-time Floquet–Langevin dynamics; numerical evidence that the 2D π-Toom model satisfies Toom's error condition at low temperature; rigorous proof stated as open (PRL 131, 180402).",
        url: "https://arxiv.org/abs/2110.00585v2",
        date: "2024-12-03",
        version: "v2" },
      { kind: "numerical",
        role: "progress",
        summary: "Quantum measurement-and-feedback dynamics with Toom-like rules keeps spatiotemporal order for very long times in 2D Clifford-circuit simulations (PRL 129, 090404); no proof.",
        url: "https://arxiv.org/abs/2111.02499v2",
        date: "2022-08-30",
        version: "v2" },
      { kind: "preprint",
        role: "progress",
        summary: "Rigorous correspondence between CSS-code memories under local Pauli noise and classical stochastic processes; 4D toric code with Toom's rule is a memory below threshold for a Floquet Lindbladian. Not about time crystals.",
        url: "https://arxiv.org/abs/2610.05589v1",
        date: "2026-10-04",
        version: "v1" },
    ],
    provenance: [],
    relations: [
      { id: "B22", type: "related" },
      { id: "B16", type: "related" },
    ],
    refs: [
      { label: "Machado, Zhuang, Yao & Zaletel, 'Absolutely stable time crystals at finite temperature', PRL 131, 180402 (2023)", url: "https://arxiv.org/abs/2110.00585" },
      { label: "Yao, Nayak, Balents & Zaletel, 'Classical discrete time crystals', Nat. Phys. 16, 438 (2020)", url: "https://arxiv.org/abs/1801.02628" },
      { label: "McGinley, Roy & Parameswaran, 'Absolutely Stable Spatiotemporal Order in Noisy Quantum Systems', PRL 129, 090404 (2022)", url: "https://arxiv.org/abs/2111.02499" },
      { label: "Drechsler, Oreg & Aharonov, 'Autonomous Quantum Memories from Classical Stochastic Processes' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.05589" },
      { label: "Ogami & Tajima, 'Open Quantum Time Crystals without External Thermodynamic Resources: Go and No-Go Theorems' (2026 preprint, v1)",
        url: "https://arxiv.org/abs/2611.09540" },
    ] },

  { id: "O12",
    cat: "open-systems",
    horizon: "sharp",
    reviewedAt: "2026-11-16",
    title: "Triplet reduction for the Markovian Mpemba effect",
    statement: r`(Avitan, Factor and Gelbwaser-Klimovsky 2026.) An $N$-level system with energies $E_1<\dots<E_N$ relaxes under a Pauli master equation $\dot{\mathbf p}=M\mathbf p$ whose rates obey detailed balance at bath inverse temperature $0<\beta_b<\infty$. From a thermal initial state at $\beta_{\rm in}$, write $\mathbf p(t)-\pi(\beta_b)=\sum_{k\ge2}b_k(\beta_{\rm in})e^{\lambda_kt}\mathbf v_k$ with $0>\lambda_2>\lambda_3\ge\cdots$. Following Lu and Raz, a Markovian Mpemba effect occurs if and only if $|b_2|$, as a function of $\beta_{\rm in}$, has a maximum at some $\beta_{\rm in}\neq\beta_b$. For each triplet $i<j<k$, let $\mathcal C_{ijk}$ be the three-level necessary conditions of Avitan et al. (their Eq. (3)) applied to the rates among $\{i,j,k\}$. Prove or refute: if every triplet violates $\mathcal C_{ijk}$, the $N$-level system shows no Markovian Mpemba effect.`,
    definition: r`**The Markovian Mpemba effect** is the faster relaxation of a system prepared farther from equilibrium. For Markov jump processes, Lu and Raz reduced it to the non-monotonicity of the slowest-mode coefficient $b_2$, “Nonequilibrium thermodynamics of the Markovian Mpemba effect and its inverse”, PNAS 114, 5083 (2017), [arXiv:1609.05271](https://arxiv.org/abs/1609.05271). Klich, Raz, Hirschberg and Vucelja introduced the strong effect and the Mpemba index, PRX 9, 021060 (2019), [arXiv:1711.05829](https://arxiv.org/abs/1711.05829).

The conjecture is stated by Avitan, Factor and Gelbwaser-Klimovsky in the section “Numerics for non-zero temperature baths” of [arXiv:2603.04567](https://arxiv.org/abs/2603.04567v1), with the caveat that “these results are limited to 7-level systems and may not reflect trends in larger systems”. Their abstract calls the question of which systems show the effect open.`,
    progress: r`- Avitan, Factor and Gelbwaser-Klimovsky (4 March 2026, v1) derive necessary conditions on the rates of a three-level system. At zero bath temperature ($M$ triangular, non-degenerate eigenvalues) they prove by induction that no $N$-level system shows the effect when every triplet strongly violates the conditions. At finite temperature, random sampling of 4- to 7-level systems supports the conjecture ([arXiv:2603.04567](https://arxiv.org/abs/2603.04567v1)).
- Gelbwaser-Klimovsky (9 September 2026, v1) gives necessary and sufficient conditions for three-level systems and an algorithm to find Mpemba parameters in $N$-level systems. He writes that “we cannot use the 3LS mechanisms to rule out or ensure the Markovian Mpemba effect in an N-level system”; four-level sampling ($5\times10^5$ realizations) is consistent with the conjecture ([arXiv:2609.09988](https://arxiv.org/abs/2609.09988v1)). That paper describes the triplet implication as shown in the earlier work, whereas the earlier work proves it only at zero bath temperature.
- The review of Ares, Calabrese and Murciano (Nat. Rev. Phys. 7, 451 (2025)) gives no general necessary and sufficient condition for open systems ([arXiv:2502.08087](https://arxiv.org/abs/2502.08087)).`,
    residual: r`The finite-temperature conjecture is open, as is a characterization of which $N$-level systems show the effect. Sub-targets: $N=4$ at finite $\beta_b$, using the exact three-level conditions of 2609.09988; or a four-level counterexample found by targeted optimization rather than uniform sampling. Weak versus strong violation of the triplet conditions should be kept apart: the zero-temperature proof needs strong violation.`,
    evidence: [
      { kind: "preprint",
        role: "progress",
        summary: "Three-level necessary conditions on rates; proof at zero bath temperature that strong violation by every triplet excludes the Mpemba effect in N-level systems; finite-temperature conjecture supported by sampling up to 7 levels.",
        url: "https://arxiv.org/abs/2603.04567v1",
        date: "2026-03-04",
        version: "v1" },
      { kind: "preprint",
        role: "progress",
        summary: "Necessary and sufficient conditions for the three-level Markovian Mpemba effect; four-level sampling consistent with the triplet conjecture; no N-level proof.",
        url: "https://arxiv.org/abs/2609.09988v1",
        date: "2026-09-09",
        version: "v1" },
    ],
    provenance: [],
    relations: [],
    refs: [
      { label: "Avitan, Factor & Gelbwaser-Klimovsky, 'Necessary conditions for the Markovian Mpemba effect' (2026 preprint, v1)", url: "https://arxiv.org/abs/2603.04567" },
      { label: "Gelbwaser-Klimovsky, 'Efficient protocol for the Markovian Mpemba effect in N-level systems' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.09988" },
      { label: "Lu & Raz, 'Nonequilibrium thermodynamics of the Markovian Mpemba effect and its inverse', PNAS 114, 5083 (2017)", url: "https://arxiv.org/abs/1609.05271" },
      { label: "Klich, Raz, Hirschberg & Vucelja, 'Mpemba Index and Anomalous Relaxation', PRX 9, 021060 (2019)", url: "https://arxiv.org/abs/1711.05829" },
      { label: "Ares, Calabrese & Murciano, 'The quantum Mpemba effects', Nat. Rev. Phys. 7, 451 (2025)", url: "https://arxiv.org/abs/2502.08087" },
    ] },

  { id: "O13",
    cat: "open-systems",
    horizon: "sharp",
    status: "improved",
    reviewedAt: "2026-11-16",
    title: "Entanglement depth forced by fast complete battery charging",
    statement: r`(Shi, Gan, Zhang, Wang and Yang 2025, Eq. (6).) An $N$-qubit battery with $H_b=\sum_j\sigma^z_j$ starts in $|\downarrow\rangle^{\otimes N}$ and is fully charged to $|\uparrow\rangle^{\otimes N}$ (up to a phase) at time $T$ by a time-independent charging Hamiltonian, $|\psi(t)\rangle=e^{-iH_ct}|\psi(0)\rangle$. Fix $E_0=\min\operatorname{spec}(H_c)$ and the initial energy above it, $E_c=\langle\psi(0)|(H_c-E_0I)|\psi(0)\rangle$. Let $\eta=\tau_{\rm QSL}/T\le1$ be the rate normalized by the quantum speed limit $\tau_{\rm QSL}=\max\{\pi/(2\Delta H_c),\pi/(2E_c)\}$, and $\operatorname{Ent}[U]=\max_{0\le t\le T}\operatorname{Ent}(|\psi(t)\rangle)$ the largest entanglement depth along the trajectory. Conjecture: $\operatorname{Ent}[U]\ge\lceil N\eta^2\rceil$ for every such fully charging evolution.`,
    definition: r`**Entanglement depth.** A pure $N$-partite state has entanglement depth at most $k$ if it is a product across some partition into blocks of at most $k$ parties; the depth is the smallest such $k$ (Sørensen and Mølmer, PRL 86, 4431 (2001), [arXiv:quant-ph/0011035](https://arxiv.org/abs/quant-ph/0011035)). **Charging advantage.** Collective charging of $N$ cells can be faster than parallel charging, and the role of entanglement in that speed-up has been debated since Alicki and Fannes ([arXiv:1211.1209](https://arxiv.org/abs/1211.1209)), Binder et al. (NJP 17, 075015 (2015), [arXiv:1503.07005](https://arxiv.org/abs/1503.07005)) and Campaioli et al. (PRL 118, 150601 (2017), [arXiv:1612.04991](https://arxiv.org/abs/1612.04991)).

Shi, Gan, Zhang, Wang and Yang state the conjecture in “Quantum Charging Advantage from Multipartite Entanglement” ([arXiv:2503.02667](https://arxiv.org/abs/2503.02667v1), March 2025, Eq. (6) and Conclusion), “based on numerical and analytical evidence”. It would make the normalized rate a witness of multipartite entanglement: $\eta>1/\sqrt N$ excludes fully separable trajectories, and $\eta=1$ forces depth $N$.`,
    progress: r`- In the same paper, Shi et al. prove the conjecture in three cases: charging that saturates the speed limit ($\eta=1$ forces depth $N$), fully parallel charging, and SU(2) charging schemes. In the SU(2) case the bound $\lceil N/d\rceil$ at $\eta=1/\sqrt d$ is tight (Theorem 2). They also give a new lower bound on entanglement depth from “locally orthonormal pairs” (Theorem 1), used for numerical checks.
- Sun, Lu and Jin ([arXiv:2605.16935](https://arxiv.org/abs/2605.16935v1), v1, 16 May 2026) announce the exact frontier $\eta_{\mathcal K,\max}(k)=\lceil N/k\rceil^{-1/2}$ for pure-state complete charging under a time-independent Hamiltonian. Their Eq. (3) subtracts the minimum energy on the cyclic subspace $\mathcal K=\operatorname{span}\{e^{-iH_ct}|\psi(0)\rangle:t\in\mathbb R\}$ before evaluating the Margolus–Levitin energy. This gives a rate $\eta_{\mathcal K}\ge\eta$; the rates coincide when the cyclic subspace contains a ground state of $H_c$. Their claim is $\operatorname{Ent}[U]\ge\lceil N/\lfloor\eta_{\mathcal K}^{-2}\rfloor\rceil\ge\lceil N\eta_{\mathcal K}^2\rceil$, which would imply the conjecture above. Balanced “cluster-flip” evolutions attain their frontier. The upper bound uses a Baire-category and analyticity argument to reduce a trajectory to a single product partition, then Minkowski's inequality on Fubini–Study speeds.
- The main text of that preprint gives only a “proof sketch”. The fixed-partition lemma and the Margolus–Levitin branch bound $\tau_{\rm ML}/T\le1/m$ are said to be proved in a Supplemental Material that is not part of the arXiv posting: the five-page v1 and its source contain only the main text and one figure. The resolution is therefore not recorded as a claimed solution here.`,
    residual: r`The conjecture remains open as a publicly checkable result. Its resolution needs the two steps that Sun, Lu and Jin defer to their unpublished Supplemental Material: the reduction to a fixed partition and the Margolus–Levitin branch bound. Outside the stated setting (closed, pure, exact complete charging under a time-independent Hamiltonian), the authors list approximate charging, mixed states, open dynamics, time-dependent controls and work extraction. Analogous speed–depth frontiers there are open, as is a version for partial charging (stored work below $2N$).`,
    evidence: [
      { kind: "preprint",
        role: "progress",
        summary: "Announces the exact frontier η_max(k) = ⌈N/k⌉^{-1/2} for pure-state complete charging under time-independent Hamiltonians, which would give Ent[U] ≥ ⌈Nη²⌉. The main text gives a proof sketch; two steps rely on a Supplemental Material that is not on arXiv, so the claim is not recorded as a full resolution.",
        url: "https://arxiv.org/abs/2605.16935v1",
        date: "2026-05-16",
        version: "v1" },
      { kind: "conjecture",
        role: "progress",
        summary: "Poses the conjecture Ent[U] ≥ ⌈Nη²⌉ for fully charging N-qubit batteries; proves it for QSL-saturating, fully parallel and SU(2) charging schemes, with a tight SU(2) construction.",
        url: "https://arxiv.org/abs/2503.02667v1",
        date: "2025-03-04",
        version: "v1" },
    ],
    provenance: [],
    relations: [
      { id: "O7", type: "related" },
    ],
    refs: [
      { label: "Shi, Gan, Zhang, Wang & Yang, 'Quantum Charging Advantage from Multipartite Entanglement' (2025 preprint), Eq. (6)", url: "https://arxiv.org/abs/2503.02667" },
      { label: "Sørensen & Mølmer, 'Entanglement and Extreme Spin Squeezing', PRL 86, 4431 (2001)", url: "https://arxiv.org/abs/quant-ph/0011035" },
      { label: "Campaioli et al., 'Enhancing the charging power of quantum batteries', PRL 118, 150601 (2017)", url: "https://arxiv.org/abs/1612.04991" },
      { label: "Binder, Vinjanampathy, Modi & Goold, 'Quantacell: Powerful charging of quantum batteries', NJP 17, 075015 (2015)", url: "https://arxiv.org/abs/1503.07005" },
      { label: "Sun, Lu & Jin, 'Exact Entanglement-Depth Speed Frontier for Complete Quantum Charging' (2026 preprint, v1)", url: "https://arxiv.org/abs/2605.16935v1" },
    ] },
];
