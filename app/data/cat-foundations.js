const r = String.raw;

export const FOUNDATIONS = [
  { id: "F1", cat: "foundations", horizon: "conceptual",
    title: "Measurement problem",
    statement: r`Give a mathematically precise account of individual definite outcomes compatible with unitary dynamics, without an undefined boundary between system, apparatus and observer.`,
    context: r`The measurement problem is the tension between the linear, deterministic unitary evolution of the Schrödinger equation and the apparent occurrence of single, definite measurement outcomes with Born-rule probabilities. Unitary dynamics applied to system + apparatus produces an entangled superposition of pointer states, not one outcome; the standard 'collapse' postulate patches this by hand, without specifying when or why it applies (the Heisenberg cut).

What is known: The problem is sharply framed and there are several mature research programmes, but they disagree even on what would count as a solution. Objective-collapse theories (GRW, CSL, Diósi–Penrose) modify the dynamics with stochastic nonlinear terms and are experimentally testable — and increasingly constrained by experiment. Everettian / many-worlds interpretations keep unitarity and deny unique outcomes, relocating the problem to deriving probabilities (F2) and the preferred basis (F5). Bohmian mechanics adds definite particle positions with a guiding equation. Relational and QBist views reinterpret the state as information. Decoherence (F5) explains the suppression of interference and the preferred basis but not, by itself, the selection of a single outcome.

A mathematically precise, universally compelling account — no ad hoc cut, compatible with the empirical success of unitary theory — is the central open foundational problem, with no community-agreed success criterion. Related: F2, F4, F5.`,
    refs: [
      { label: "Bassi, Lochan, Satin, Singh, Ulbricht, 'Models of wave-function collapse, underlying theories, and experimental tests', Rev. Mod. Phys. 85, 471 (2013)" },
      { label: "Bell, 'Against measurement', Physics World (1990); 'Speakable and Unspeakable in Quantum Mechanics' (CUP)" },
    ] },

  { id: "F2", cat: "foundations", horizon: "conceptual",
    title: "Born rule from explicit assumptions",
    statement: r`Derive the Born probability rule from a minimal set of clearly stated physical or decision-theoretic assumptions, without presupposing probabilistic or branch-weight structure equivalent to the conclusion.`,
    context: r`The Born rule — probabilities equal $|\langle\psi|\phi\rangle|^2$ — is an independent postulate of standard quantum mechanics. Whether it can be derived from more basic assumptions, especially within unitary-only (Everettian) quantum mechanics where probability is not obviously meaningful, is a long-debated question.

What is known: Several derivations exist, each resting on assumptions critics find to smuggle in the conclusion. Gleason's theorem shows that any non-contextual probability measure on projections in dimension $\ge3$ must be Born — powerful, but it assumes non-contextuality and the full projection structure. Deutsch and Wallace gave a decision-theoretic derivation within Everettian QM (rational agents must weight branches by $|\psi|^2$), which relies on rationality axioms and a branching ontology that opponents dispute. Zurek's envariance derivation uses environment-assisted symmetry, but is argued to presuppose probabilistic structure. Masanes–Galley–Müller derived the Born rule and the measurement postulates from operational assumptions about the existence of an outcome-probability rule.

A derivation from minimal, clearly non-question-begging assumptions that commands consensus is still lacking. Related: F1, F3.`,
    refs: [
      { label: "Gleason, 'Measures on the closed subspaces of a Hilbert space', J. Math. Mech. 6 (1957)" },
      { label: "Wallace, 'The Emergent Multiverse' (OUP, 2012); Masanes, Galley, Müller, Nat. Commun. 10, 1361 (2019)" },
    ] },

  { id: "F3", cat: "foundations", horizon: "conceptual",
    title: "Operational reconstruction of quantum theory",
    statement: r`Find a minimal, conceptually compelling set of operational principles uniquely yielding complex Hilbert spaces, tensor products, CP maps and the Born rule, and explaining why real and quaternionic alternatives are excluded.`,
    context: r`Quantum theory's mathematical apparatus — complex Hilbert spaces, the tensor-product rule for composites, completely positive maps, the Born rule — is usually postulated. The reconstruction programme seeks to derive all of it from a short list of physically transparent operational or information-theoretic axioms, explaining why the theory is the way it is and, in particular, why complex (not real or quaternionic) amplitudes.

What is known: Several reconstructions succeed technically. Hardy's five 'reasonable axioms' (2001) derive finite-dimensional quantum theory from operational assumptions plus a continuity/simplicity postulate. Chiribella–D'Ariano–Perinotti derive it from informational principles (including 'purification'). Masanes–Müller, and Dakić–Brukner, give further axiom sets. Barnum, Wilce and others (via generalized probabilistic theories, GPTs) map the landscape of alternatives and isolate what forces the quantum case. Notably, a recent experimental line (Renou et al., 2021) rules out real-amplitude quantum theory in a Bell-like network test, giving empirical support that complex numbers are necessary.

Whether any of these axiom sets is 'the' minimal and conceptually compelling reconstruction — cleanly explaining the exclusion of real/quaternionic theories and the tensor-product rule — remains a matter of debate without consensus. Related: F2.`,
    refs: [
      { label: "Hardy, 'Quantum theory from five reasonable axioms', arXiv:quant-ph/0101012 (2001)" },
      { label: "Chiribella, D'Ariano, Perinotti, 'Informational derivation of quantum theory', PRA 84, 012311 (2011); Renou et al., Nature 600 (2021)" },
    ] },

  { id: "F4", cat: "foundations", horizon: "conceptual",
    title: "Wigner's-friend scenarios",
    statement: r`Provide a consistent multi-agent probability calculus specifying when different agents may combine statements about outcomes, including cases where laboratories and observers are treated quantum mechanically.`,
    context: r`In Wigner's-friend scenarios an observer (the friend) performs a measurement inside a sealed lab, while a superobserver (Wigner) treats the whole lab — friend included — unitarily. The two assign different, seemingly incompatible descriptions, raising the question of whether measurement outcomes are absolute or observer-relative.

What is known: Recent no-go theorems have sharpened the puzzle dramatically. Frauchiger–Renner (2018) showed that a set of natural assumptions — that quantum theory applies to agents, that different agents' conclusions can be consistently combined, and that outcomes are single/absolute — are mutually inconsistent, so at least one must be dropped. The Local Friendliness theorem (Bong et al., 2020, with an experiment) derives inequalities from even weaker assumptions ('absoluteness of observed events' plus local agency) and shows quantum mechanics violates them, strictly strengthening Bell's theorem. Various interpretations respond by denying absoluteness (relational QM, QBism, Everett) or agent-independence.

A positive framework — a consistent multi-agent probability calculus telling exactly when agents' statements can be combined, with quantum labs and observers — is missing; only the no-go constraints are firm. Related: F1.`,
    refs: [
      { label: "Frauchiger & Renner, 'Quantum theory cannot consistently describe the use of itself', Nat. Commun. 9, 3711 (2018)" },
      { label: "Bong, Utreras-Alarcón, Ghafari, Liang, Tischler, Cavalcanti, Pryde, Wiseman, 'A strong no-go theorem on the Wigner's friend paradox', Nat. Phys. 16 (2020)" },
    ] },

  { id: "F5", cat: "foundations", horizon: "conceptual",
    title: "Emergence of classical outcomes",
    statement: r`Explain quantitatively how a preferred set of stable classical records and effectively Boolean events emerges from unitary dynamics — the roles of decoherence, redundancy and coarse graining.`,
    context: r`Why does the macroscopic world look classical — with definite, stable, publicly agreed facts — if the underlying dynamics is unitary and superposition-generating? The task is to derive, quantitatively, the emergence of a preferred (pointer) basis, the stability of records, and the effectively Boolean logic of everyday events.

What is known: Decoherence theory (Zurek, Joos–Zeh) explains a great deal: environmental monitoring rapidly suppresses interference between pointer states and selects a robust pointer basis via the predictability sieve, on extremely short timescales. Quantum Darwinism (Zurek) adds that classical objectivity arises because information about pointer states is redundantly imprinted on many environment fragments, so many observers independently access the same facts; this redundancy has been quantified (mutual-information plateaus) and observed in models and experiments. Consistent/decoherent histories (Griffiths, Gell-Mann–Hartle) formalize when families of coarse-grained histories obey classical probability.

What decoherence and Darwinism do not do is single out one actual outcome from the superposition — the 'and-to-or' transition — so this problem overlaps and is bounded by the measurement problem (F1). A complete quantitative account of classical emergence, including outcome selection, is open. Related: F1, F6.`,
    refs: [
      { label: "Zurek, 'Decoherence, einselection, and the quantum origins of the classical', Rev. Mod. Phys. 75, 715 (2003)" },
      { label: "Zurek, 'Quantum Darwinism', Nat. Phys. 5, 181 (2009)" },
    ] },

  { id: "F6", cat: "foundations", horizon: "conceptual",
    title: "Classical limit",
    statement: r`State and prove sufficiently general conditions under which quantum dynamics, probabilities and histories converge to an appropriate classical theory, including chaotic and macroscopic systems.`,
    context: r`The classical limit asks how and when Newtonian/Hamiltonian mechanics emerges from quantum dynamics as $\hbar\to0$ or for macroscopic systems. It is subtle because the limit is singular and, for chaotic systems, quantum and classical predictions diverge after a surprisingly short time.

What is known: For fixed times, rigorous results are strong. Egorov's theorem and semiclassical / microlocal analysis show that quantized observables evolve, to leading order in $\hbar$, along the classical flow; Hepp proved convergence of quantum to classical dynamics for coherent states in the mean-field/semiclassical limit; Ehrenfest's theorem gives short-time agreement. Mean-field limits (Hartree/Vlasov) are rigorously derived for many-body systems. The obstruction is the Ehrenfest time: for classically chaotic systems, wave packets spread on a timescale only logarithmic in $1/\hbar$, after which the naive correspondence breaks and decoherence (F5) is needed to restore effective classicality.

General theorems covering long times, chaotic dynamics, macroscopic superpositions, and the decoherent-histories route to classical probability are largely missing — the classical limit remains only partially controlled. Related: F5, M8, M9.`,
    refs: [
      { label: "Hepp, 'The classical limit for quantum mechanical correlation functions', Comm. Math. Phys. 35 (1974)" },
      { label: "Zurek & Paz, 'Decoherence, chaos, and the second law', PRL 72, 2508 (1994)" },
    ] },

  { id: "F7", cat: "foundations", horizon: "conceptual",
    title: "Definition of a quantum subsystem",
    statement: r`Characterize when a factorization $\mathcal{H}\simeq\mathcal{H}_A\otimes\mathcal{H}_B$ is physically significant, how observable algebras and interactions select it, and when inequivalent factorizations describe different notions of locality and entanglement.`,
    context: r`Entanglement, locality, and 'subsystems' are all defined relative to a tensor-product factorization of the Hilbert space — but the same Hilbert space admits infinitely many inequivalent factorizations. Which factorization is physically meaningful, and what selects it, is a foundational question with growing relevance in quantum gravity and many-body physics.

What is known: The key insight (Zanardi; Zanardi–Lidar–Lloyd) is that a tensor-product structure is not fundamental but is induced by a choice of physically accessible observables — an algebra of operators — and by the dynamics. Entanglement is thus observable-relative: a state can be entangled with respect to one factorization and product with respect to another. The dynamics (locality of the Hamiltonian) singles out preferred factorizations, and there are proposals that the correct subsystem decomposition is the one making the Hamiltonian local ('the Hamiltonian selects the tensor structure', Cotler–Penington–Ranard; Carroll–Singh 'Mad-dog Everettianism'). In algebraic QFT the analogue is the choice of local von Neumann algebras (QF8, QF9).

A general, principled characterization of when a factorization is physical and how interactions and observables uniquely select it is open. Related: QF8, QF9, E15.`,
    refs: [
      { label: "Zanardi, Lidar, Lloyd, 'Quantum tensor product structures are observable-induced', PRL 92, 060402 (2004)" },
      { label: "Cotler, Penington, Ranard, 'Locality from the spectrum', Comm. Math. Phys. 368 (2019)" },
    ] },

  { id: "F8", cat: "foundations", horizon: "conceptual",
    title: "Quantum reference frames",
    statement: r`Develop a fully compositional formalism for changing between quantum reference frames — imperfect, finite, entangled and relativistic frames, and systems under gauge constraints.`,
    context: r`Reference frames (for position, orientation, time, phase) are physical systems and hence ultimately quantum. A quantum reference frame (QRF) can be in superposition or entangled with the system, so 'changing frames' becomes a nontrivial quantum operation, and properties like superposition and entanglement become frame-dependent.

What is known: A active modern formalism has emerged. Giacomini–Castro-Ruiz–Brukner gave transformations between QRFs under which entanglement and superposition are relative to the frame, and defined frame-dependent notions of a system's state. The perspective-neutral / constraint-based approach (Vanrietvelde–Höhn–Giacomini–Castro-Ruiz; Höhn et al.) grounds QRF changes in gauge-theoretic reduction of a constrained system, connecting to the problem of time in quantum gravity and to the Page–Wootters mechanism (F11). Earlier resource-theoretic work (Bartlett–Rudolph–Spekkens) treated frames as consumable resources under superselection.

A fully compositional theory covering imperfect and finite-size frames, entangled frames, relativistic (Poincaré/Lorentz) frames, and systems with gauge constraints — with consistent composition and a clear operational meaning — is still under construction. Related: F7, F11, O7.`,
    refs: [
      { label: "Giacomini, Castro-Ruiz, Brukner, 'Quantum mechanics and the covariance of physical laws in quantum reference frames', Nat. Commun. 10, 494 (2019)" },
      { label: "Vanrietvelde, Höhn, Giacomini, Castro-Ruiz, 'A change of perspective: switching quantum reference frames...', Quantum 4, 225 (2020)" },
    ] },

  { id: "F9", cat: "foundations", horizon: "conceptual",
    title: "Physical boundary of indefinite causal order",
    statement: r`Characterize which mathematically valid process matrices can arise from ordinary quantum systems embedded in spacetime and which require a genuine extension of standard quantum theory.`,
    context: r`The process-matrix framework (Oreshkov–Costa–Brukner) generalizes quantum theory to allow operations without a fixed causal order between them. Some 'processes' are causally nonseparable — they cannot be explained by any definite (even probabilistic) ordering of events — raising the question of which are physically realizable.

What is known: The mathematical framework classifies process matrices, and causal nonseparability is well characterized (via causal witnesses; Araújo et al.). The quantum switch — where a control qubit coherently orders two operations — is causally nonseparable yet demonstrably realizable in the lab (many photonic and other experiments) and gives genuine advantages in query and communication tasks. But other valid process matrices violate causal inequalities (device-independent signatures of indefinite order) and it is unknown whether any of these can be physically realized in ordinary spacetime, or whether they require exotic scenarios (closed timelike curves, quantum gravity) or are unphysical.

Drawing the line — which process matrices come from ordinary quantum systems in spacetime versus require an extension of quantum theory — is open. Related: F10.`,
    refs: [
      { label: "Oreshkov, Costa, Brukner, 'Quantum correlations with no causal order', Nat. Commun. 3, 1092 (2012)" },
      { label: "Araújo, Feix, Costa, Brukner et al., 'Witnessing causal nonseparability', New J. Phys. 17 (2015); Quantum 1, 10 (2017)" },
    ] },

  { id: "F10", cat: "foundations", horizon: "conceptual",
    title: "Quantum causal models",
    statement: r`Find a general quantum analogue of classical causal inference combining interventions, latent quantum systems, indefinite order and noncommuting observables while retaining identifiable causal statements.`,
    context: r`Classical causal-inference theory (Pearl; Spirtes–Glymour–Scheines) uses directed acyclic graphs, interventions, and the do-calculus to extract cause–effect relations from correlations. A quantum version must handle noncommuting observables, latent quantum common causes, and possibly indefinite causal order — while still licensing identifiable causal conclusions.

What is known: A solid foundation exists for the fixed-order case. Quantum causal models on DAGs have been formulated (Costa–Shrapnel; Allen–Barrett–Horsman–Lee–Spekkens), with a quantum Markov condition and a resolution of Bell's theorem as a failure of classical common-cause explanation that quantum common causes can restore in some framings. Henson–Lal–Pusey and Wood–Spekkens analyzed which correlations admit classical causal explanation. Barrett–Lorenz–Oreshkov developed quantum causal models with a proper interventionist semantics and cyclic/indefinite-order generalizations.

A general theory — with latent quantum causes, causal discovery (learning the structure from data), indefinite order (F9), and identifiability results paralleling the classical do-calculus — is still incomplete. Related: F9.`,
    refs: [
      { label: "Allen, Barrett, Horsman, Lee, Spekkens, 'Quantum common causes and quantum causal models', PRX 7, 031021 (2017)" },
      { label: "Barrett, Lorenz, Oreshkov, 'Cyclic quantum causal models', Nat. Commun. 12, 885 (2021)" },
    ] },

  { id: "F11", cat: "foundations", horizon: "conceptual",
    title: "Time observables and quantum clocks",
    statement: r`Give a unified treatment of time as an external parameter, a POVM, a dynamical clock and a relational observable, including the limitations caused by finite clock energy and backreaction.`,
    context: r`Time occupies an anomalous place in quantum theory: it is an external parameter in the Schrödinger equation, not an observable, and Pauli famously argued no self-adjoint time operator conjugate to a bounded-below Hamiltonian can exist. Yet clocks are physical quantum systems, and 'when' something happens should be measurable — so several notions of time coexist uneasily.

What is known: Multiple partial treatments exist. Pauli's objection is evaded by using POVMs (not self-adjoint operators) for time-of-arrival and phase, giving legitimate covariant time observables (Holevo; Busch–Grabowski–Lahti; Werner). The Page–Wootters mechanism treats time relationally: a static, constraint-satisfying global state yields Schrödinger evolution of a subsystem relative to a 'clock' subsystem, reconciling timelessness (as in the Wheeler–DeWitt equation of quantum gravity) with dynamics; this has been analyzed and experimentally illustrated (Giovannetti–Lloyd–Maccone; Moreva et al.). Finite clock energy imposes fundamental accuracy limits and backreaction, connecting to autonomous clocks (O7) and quantum reference frames (F8).

A single framework unifying these views — parameter time, POVM time observables, dynamical/relational clocks — with the constraints from finite energy and backreaction, is missing. Related: F8, O7.`,
    refs: [
      { label: "Page & Wootters, 'Evolution without evolution: dynamics described by stationary observables', PRD 27, 2885 (1983)" },
      { label: "Giovannetti, Lloyd, Maccone, 'Quantum time', PRD 92, 045033 (2015)" },
    ] },
];
