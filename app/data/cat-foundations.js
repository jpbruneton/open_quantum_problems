const r = String.raw;

export const FOUNDATIONS = [
  { id: "F1", cat: "foundations", horizon: "conceptual",
    title: "Measurement problem",
    statement: r`For a specified ontology and dynamics, give a precise account of measurement records and their probabilities without an undefined system–observer cut; identify experimentally distinguishable predictions or explain why competing accounts are operationally equivalent.`,
    context: r`The measurement problem is the tension between the linear, deterministic unitary evolution of the Schrödinger equation and the apparent occurrence of single, definite measurement outcomes with Born-rule probabilities. Unitary dynamics applied to system + apparatus produces an entangled superposition of pointer states, not one outcome; the standard 'collapse' postulate patches this by hand, without specifying when or why it applies (the Heisenberg cut).

What is known: The problem is sharply framed and there are several mature research programmes, but they disagree even on what would count as a solution. Objective-collapse theories (GRW, CSL, Diósi–Penrose) modify the dynamics with stochastic nonlinear terms and are experimentally testable — and increasingly constrained by experiment. Everettian / many-worlds interpretations keep unitarity and deny unique outcomes, relocating the problem to deriving probabilities (F2) and the preferred basis (F5). Bohmian mechanics adds definite particle positions with a guiding equation. Relational and QBist views reinterpret the state as information. Decoherence (F5) explains the suppression of interference and the preferred basis but not, by itself, the selection of a single outcome.

This remains a conceptual programme, not a single theorem awaiting a consensus proof. Unitarity and unique absolute outcomes cannot both be imposed as neutral requirements while also including Everett and objective-collapse models. For a chosen framework, specify its dynamics, ontology and record statistics; assess empirical tests of modified dynamics separately from interpretational comparisons of operationally equivalent theories.

The Everettian probability question from archived F2 belongs here: make branch ontology and rationality/probability assumptions explicit and determine what they establish, rather than asking for a derivation that wins universal assent. Axiomatic uniqueness of the Born rule is tracked under F3. Related: F3, F4, F5.`,
    refs: [
      { label: "Bassi, Lochan, Satin, Singh, Ulbricht, 'Models of wave-function collapse, underlying theories, and experimental tests', Rev. Mod. Phys. 85, 471 (2013)", url: "https://arxiv.org/abs/1204.4325" },
      { label: "Bell, 'Against measurement', Physics World 3(8), 33–40 (1990)", url: "https://cds.cern.ch/record/203706" },
      { label: "Bell, 'Speakable and Unspeakable in Quantum Mechanics' (CUP, 2nd ed., 2004)", url: "https://doi.org/10.1017/CBO9780511815676" },
    ] },

  { id: "F2", cat: "foundations", horizon: "conceptual",
    archive: { kind: "merged", targets: ["F3", "F1"], reason: "Axiomatic probability-rule uniqueness is part of reconstruction (F3); Everettian probability is part of the measurement programme (F1), not a separate consensus criterion." },
    title: "Born rule from explicit assumptions",
    statement: r`Derive the Born probability rule from a minimal set of clearly stated physical or decision-theoretic assumptions, without presupposing probabilistic or branch-weight structure equivalent to the conclusion.`,
    context: r`The Born rule — probabilities equal $|\langle\psi|\phi\rangle|^2$ — is an independent postulate of standard quantum mechanics. Whether it can be derived from more basic assumptions, especially within unitary-only (Everettian) quantum mechanics where probability is not obviously meaningful, is a long-debated question.

What is known: Gleason's theorem establishes Born probabilities for noncontextual probability measures on projections in dimension $\ge3$. Deutsch–Wallace derive branch weights within a stated Everettian decision-theoretic framework; envariance approaches use environment-assisted symmetries. Masanes–Galley–Müller derive measurement postulates from operational assumptions about outcome probabilities. These are results under assumptions, not automatically circular because assumptions are present; their physical justification and logical independence are distinct questions.

Historical preprint update (August 2026): Ustun claims local uniqueness of the squared-modulus rule for complex-weighted morphisms under nonnegativity, polynomial restrictions, phase invariance, additivity and normalization. This supplies another explicit assumption set, not an assumption-free derivation; the audit verified the abstract and metadata, not the proof. Its broader compositional significance requires further assessment.

This entry is archived as merged. Compare axiom independence and composition under F3, and Everettian decision/probability questions under F1. Neither an undefined minimum number of assumptions nor community consensus supplies a sharp solved/open criterion.`,
    evidence: [{ kind: "preprint", summary: "Local squared-modulus uniqueness under explicit complex-weight, polynomiality and additivity assumptions; abstract/metadata verified, not an independent proof audit.", url: "https://arxiv.org/abs/2608.05197", date: "2026-08-23", version: "v2" }],
    refs: [
      { label: "Gleason, 'Measures on the closed subspaces of a Hilbert space', J. Math. Mech. 6 (1957)", url: "https://iumj.org/article/1128/cite/" },
      { label: "Wallace, 'The Emergent Multiverse' (OUP, 2012)", url: "https://academic.oup.com/book/25622" },
      { label: "Masanes, Galley & Müller, 'The measurement postulates of quantum mechanics are operationally redundant', Nat. Commun. 10, 1361 (2019)", url: "https://arxiv.org/abs/1811.11060" },
      { label: "Ustun, 'Local Uniqueness of the Born Rule on Categories with Complex-Weighted Morphisms' (2026)", url: "https://arxiv.org/abs/2608.05197" },
    ] },

  { id: "F3", cat: "foundations", horizon: "conceptual", status: "improved",
    reviewedAt: "2026-09-10",
    title: "Operational reconstruction of quantum theory",
    statement: r`For specified operational axioms and composite-system rules, establish their independence and reconstruction power, and determine which alternative theories are experimentally distinguishable; extend controlled reconstructions beyond their finite-dimensional assumptions.`,
    context: r`Quantum theory's mathematical apparatus — Hilbert spaces, composition, completely positive maps and outcome probabilities — is usually postulated. Reconstruction asks which operational or information-theoretic axioms select the usual quantum predictions, and which assumptions rule out physically different alternatives rather than equivalent representations.

What is known: Hardy, Chiribella–D'Ariano–Perinotti, Masanes–Müller and other reconstruction programmes derive finite-dimensional quantum theory under explicit operational axioms. Generalized probabilistic theories organize alternatives and the role of composition. These are successful conditional reconstructions; there is no mathematically defined requirement that one axiom list be uniquely compelling.

Renou et al. (2021) propose a network test distinguishing a particular real-Hilbert-space theory with specified composition and independent product-source assumptions. That paper is a theoretical proposal, not the experimental realization itself, and does not exclude every formulation using real numbers. Barrios Hita et al. (PRL, June 2026) reproduce multipartite quantum predictions using a modified real composite-system postulate. Hoffreumon–Woods (March 2026 preprint) distinguish operational independence from product-state independence and give simulation results. Neither changes the conclusion of Renou's theorem under its original assumptions.

Concrete remaining targets include independence within a fixed axiom vocabulary, compositional consistency of probability rules (the mathematical part of archived F2), infinite-dimensional reconstruction with explicit continuity assumptions, and tests separating operationally inequivalent alternatives. Distinguish alternative physics from merely changing scalar representation. Related: F1, F7, M11.

Preprint progress (9 September 2026, v1): Gachechiladze and Miklin derive the Tsirelson–Landau–Masanes correlator criterion from generalized information causality using correlated inputs and optimized noisy communication. They also exhibit macroscopically local correlations excluded by generalized information causality. The four-correlator projection must be distinguished from the full behavior set with biased marginals: the discussion explicitly leaves the full power of the principle, including its relation to almost-quantum correlations, unresolved. This advances a specified operational principle; it is not a reconstruction of all quantum states, transformations and composition rules.`,
    evidence: [
      { kind: "preprint", summary: "Derives the TLM correlator boundary and constraints beyond macroscopic locality; the full power for complete behaviors and almost-quantum correlations remains unresolved.", url: "https://arxiv.org/abs/2609.10508v1", date: "2026-09-09", version: "v1" },
      { kind: "published", summary: "A real-number formulation recovers multipartite predictions by modifying the composite-system postulate; this does not refute network no-go results with their original assumptions.", url: "https://journals.aps.org/prl/abstract/10.1103/4k13-sdjh", date: "2026-06-18" },
      { kind: "preprint", summary: "Operational source independence and product-state independence are distinguished in real simulations of quantum protocols.", url: "https://arxiv.org/abs/2603.19208", date: "2026-03-19", version: "v1" },
    ],
    refs: [
      { label: "Gachechiladze & Miklin, 'Information Causality Characterizes the Set of Quantum Correlations in the Simplest Bell Scenario' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.10508v1" },
      { label: "Hardy, 'Quantum theory from five reasonable axioms' (2001)", url: "https://arxiv.org/abs/quant-ph/0101012" },
      { label: "Chiribella, D'Ariano & Perinotti, 'Informational derivation of quantum theory', PRA 84, 012311 (2011)", url: "https://arxiv.org/abs/1011.6451" },
      { label: "Renou et al., 'Quantum theory based on real numbers can be experimentally falsified', Nature 600 (2021)", url: "https://www.nature.com/articles/s41586-021-04160-4" },
      { label: "Barrios Hita et al., 'Quantum Mechanics Based on Real Numbers: A Consistent Description', PRL 136, 240202 (2026)", url: "https://journals.aps.org/prl/abstract/10.1103/4k13-sdjh" },
      { label: "Hoffreumon & Woods, 'Quantum theory based on real numbers cannot be experimentally falsified' (2026), preprint", url: "https://arxiv.org/abs/2603.19208" },
    ] },

  { id: "F4", cat: "foundations", horizon: "conceptual",
    title: "Wigner's-friend scenarios",
    statement: r`For specified Wigner's-friend protocols, identify which assumptions about record persistence, laboratory coherence and agents' conditioning are operationally testable, and derive robust constraints separating the corresponding models.`,
    context: r`In Wigner's-friend scenarios an observer (the friend) performs a measurement inside a sealed lab, while a superobserver (Wigner) treats the whole lab — friend included — unitarily. The two assign different, seemingly incompatible descriptions, raising the question of whether measurement outcomes are absolute or observer-relative.

What is known: Recent no-go theorems have sharpened the puzzle dramatically. Frauchiger–Renner (2018) showed that a set of natural assumptions — that quantum theory applies to agents, that different agents' conclusions can be consistently combined, and that outcomes are single/absolute — are mutually inconsistent, so at least one must be dropped. The Local Friendliness theorem (Bong et al., 2020, with an experiment) derives inequalities from even weaker assumptions ('absoluteness of observed events' plus local agency) and shows quantum mechanics violates them, strictly strengthening Bell's theorem. Various interpretations respond by denying absoluteness (relational QM, QBism, Everett) or agent-independence.

Positive frameworks also exist. Vilasini–Woods formulate extended Wigner's-friend scenarios as quantum circuits, with explicit conditioning on channels and rules for logically and causally consistent agent predictions without absolute measurement events. This preprint framework is not a consensus interpretation or an unrestricted resolution of F1, but invalidates the claim that only no-go theorems are available.

The frontier is experimental and assumption-specific: characterize what records remain accessible when a laboratory is coherently controlled, which agent inferences can be jointly checked, and how noise or imperfect reversibility changes local-friendliness tests. Distinguish actual observation protocols from counterfactual inferences about erased records. Related: F1, F5.`,
    evidence: [{ kind: "preprint", summary: "A constructive circuit framework permits logically and causally consistent agent reasoning without absolute events; interpretation-independent experimental discrimination is a separate task.", url: "https://arxiv.org/abs/2209.09281", date: "2024-11-11", version: "v2" }],
    refs: [
      { label: "Frauchiger & Renner, 'Quantum theory cannot consistently describe the use of itself', Nat. Commun. 9, 3711 (2018)", url: "https://arxiv.org/abs/1604.07422" },
      { label: "Bong, Utreras-Alarcón, Ghafari, Liang, Tischler, Cavalcanti, Pryde, Wiseman, 'A strong no-go theorem on the Wigner's friend paradox', Nat. Phys. 16 (2020)", url: "https://arxiv.org/abs/1907.05607" },
      { label: "Vilasini & Woods, 'A general quantum circuit framework for Extended Wigner's Friend Scenarios: logically and causally consistent reasoning without absolute measurement events', preprint, revised 2024", url: "https://arxiv.org/abs/2209.09281" },
    ] },

  { id: "F5", cat: "foundations", horizon: "conceptual",
    title: "Formation and lifetime of objective classical records",
    statement: r`For a specified system–environment dynamics and fragment-access model, bound the formation time, redundancy, disturbance and lifetime of independently accessible classical records, using an explicit objectivity criterion.`,
    context: r`Why does the macroscopic world look classical — with definite, stable, publicly agreed facts — if the underlying dynamics is unitary and superposition-generating? The task is to derive, quantitatively, the emergence of a preferred (pointer) basis, the stability of records, and the effectively Boolean logic of everyday events.

What is known: Decoherence theory (Zurek, Joos–Zeh) explains a great deal: environmental monitoring rapidly suppresses interference between pointer states and selects a robust pointer basis via the predictability sieve, on extremely short timescales. Quantum Darwinism (Zurek) adds that classical objectivity arises because information about pointer states is redundantly imprinted on many environment fragments, so many observers independently access the same facts; this redundancy has been quantified (mutual-information plateaus) and observed in models and experiments. Consistent/decoherent histories (Griffiths, Gell-Mann–Hartle) formalize when families of coarse-grained histories obey classical probability.

A mutual-information plateau by itself need not establish that independent observers can read the same classical record without disturbance. Strong quantum Darwinism and spectrum-broadcast structure give more discriminating criteria; Le–Olaya-Castro establish an equivalence under the additional strong-independence condition.

The open dynamical task is quantitative formation, stability and degradation of such records in specified interacting environments and at finite fragment access, including approximate rather than exact objectivity. Outcome selection is the distinct interpretational task in F1 and is not part of this entry's success criterion. Related: F1, F4, F6.`,
    refs: [
      { label: "Zurek, 'Decoherence, einselection, and the quantum origins of the classical', Rev. Mod. Phys. 75, 715 (2003)", url: "https://arxiv.org/abs/quant-ph/0105127" },
      { label: "Zurek, 'Quantum Darwinism', Nat. Phys. 5, 181 (2009)", url: "https://arxiv.org/abs/0903.5082" },
      { label: "Le & Olaya-Castro, 'Strong Quantum Darwinism and Strong Independence are Equivalent to Spectrum Broadcast Structure', PRL 122, 010403 (2019)", url: "https://arxiv.org/abs/1803.08936" },
    ] },

  { id: "F6", cat: "foundations", horizon: "programme",
    title: "Controlled long-time classical limits",
    statement: r`For a specified Hamiltonian or dissipative dynamics, observable class and semiclassical or many-body scaling, prove quantitative quantum-to-classical error bounds on a stated growing time window; separate isolated chaos, decohering dynamics and macroscopic limits.`,
    context: r`The classical limit asks how and when Newtonian/Hamiltonian mechanics emerges from quantum dynamics as $\hbar\to0$ or for macroscopic systems. It is subtle because the limit is singular and, for chaotic systems, quantum and classical predictions diverge after a surprisingly short time.

What is known: Egorov-type results control semiclassical observable evolution under stated smoothness and time assumptions; coherent-state and mean-field limits also have rigorous regimes. In chaotic dynamics, derivative growth often limits naive wave-packet or operator estimates to logarithmic Ehrenfest times. This is not a universal prohibition on every coarse observable having longer correspondence, nor a theorem that decoherence is always necessary.

Selected child questions ask for errors beyond established Ehrenfest windows for specified coarse observables; for joint noise/semiclassical limits with quantified decoherence; and for macroscopic mean-field or hydrodynamic limits with size-dependent times. State the metric, initial-state class and order of limits. These distinct tasks cannot be certified by a blanket claim of a universal classical-limit theorem. Related: F5, M8 (quantum unique ergodicity), M9 (spectral statistics), B5 (thermalization).`,
    relations: [{ id: "F5", type: "related" }, { id: "M8", type: "related" }, { id: "M9", type: "related" }, { id: "B5", type: "related" }],
    refs: [
      { label: "Hepp, 'The classical limit for quantum mechanical correlation functions', Comm. Math. Phys. 35 (1974)", url: "https://doi.org/10.1007/BF01646348" },
      { label: "Zurek & Paz, 'Decoherence, chaos, and the second law', PRL 72, 2508 (1994)", url: "https://arxiv.org/abs/gr-qc/9402006" },
    ] },

  { id: "F7", cat: "foundations", horizon: "conceptual",
    title: "Inferring subsystem structure from accessible dynamics",
    statement: r`Given limited Hamiltonian and observable data, characterize existence, uniqueness and stability of an approximately local tensor-product structure, modulo stated local-unitary and subsystem-permutation equivalences.`,
    context: r`In finite-dimensional many-body quantum mechanics, entanglement and locality depend on the chosen tensor-product structure; observable algebras provide a more general formulation. The same Hilbert space can admit inequivalent subsystem choices. The inverse question is which choices are identifiable from accessible observables and dynamics, rather than from an assumed preferred factorization.

What is known: The key insight (Zanardi; Zanardi–Lidar–Lloyd) is that a tensor-product structure is not fundamental but is induced by a choice of physically accessible observables — an algebra of operators — and by the dynamics. Entanglement is thus observable-relative: a state can be entangled with respect to one factorization and product with respect to another. The dynamics (locality of the Hamiltonian) singles out preferred factorizations, and there are proposals that the correct subsystem decomposition is the one making the Hamiltonian local ('the Hamiltonian selects the tensor structure', Cotler–Penington–Ranard; Carroll–Singh 'Mad-dog Everettianism'). In algebraic QFT the analogue is the choice of local von Neumann algebras (QF8, QF9).

Once accessible commuting observable algebras are specified, observable-induced subsystems already give a principled construction. A uniquely selected factorization need not exist for arbitrary Hamiltonians, and an observer-independent canonical split is not assumed here.

The remaining inverse problem is to state what partial operational data suffice to recover an approximately local structure, identify ambiguities, and bound sensitivity to experimental or model error. In field and gauge theories, local algebras need not correspond to finite-dimensional tensor factors; QF8/QF9 track that separate setting. Related: QF8, QF9, E15.`,
    refs: [
      { label: "Zanardi, Lidar, Lloyd, 'Quantum tensor product structures are observable-induced', PRL 92, 060402 (2004)", url: "https://arxiv.org/abs/quant-ph/0308043" },
      { label: "Cotler, Penington, Ranard, 'Locality from the spectrum', Comm. Math. Phys. 368 (2019)", url: "https://arxiv.org/abs/1702.06142" },
    ] },

  { id: "F8", cat: "foundations", horizon: "conceptual", status: "improved",
    title: "Finite-resource quantum reference frames",
    statement: r`For a specified symmetry group and constrained dynamics, bound errors in changing and composing finite-resource quantum frames, including interacting clock backreaction and repeated-use degradation under an explicit operational task.`,
    context: r`Reference frames (for position, orientation, time, phase) are physical systems and hence ultimately quantum. A quantum reference frame (QRF) can be in superposition or entangled with the system, so 'changing frames' becomes a nontrivial quantum operation, and properties like superposition and entanglement become frame-dependent.

What is known: An active modern formalism has emerged. Giacomini–Castro-Ruiz–Brukner gave transformations between QRFs under which entanglement and superposition are relative to the frame, and defined frame-dependent notions of a system's state. The perspective-neutral / constraint-based approach (Vanrietvelde–Höhn–Giacomini–Castro-Ruiz; Höhn et al.) grounds QRF changes in gauge-theoretic reduction of a constrained system, connecting to the problem of time in quantum gravity and to the Page–Wootters mechanism (F11). Earlier resource-theoretic work (Bartlett–Rudolph–Spekkens) treated frames as consumable resources under superselection.

New progress (August–September 2026): The published De Vuyst–Höhn–Tsobanjan result relates perspective-neutral, algebraic and effective approaches for ideal sharply oriented frames, including its single-relativistic-constraint setting. Sahdo–Castro-Ruiz's preprint gives a compositional treatment specifying how subsystems can be added or removed and which appended states are compatible. Brady's separate preprint formulates classical and quantum frames for $C^*$-algebras through Hilbert modules and equivariant correspondences. These organize composition and algebraic structure; they do not assert uniform finite-resource error bounds for every interacting frame model.

A published earlier baseline, Höhn–Smith–Lock's trinity of relational quantum dynamics (2021), relates relational Dirac observables, Page–Wootters and reduced Heisenberg descriptions using covariant clock POVMs, including nonideal clocks under its assumptions. This absorbs the formal-unification part of archived F11; it is not evidence that all interactions and finite-resource costs are controlled.

The frontier is quantitative: fix a group (for example time translations or spatial rotations), reference-state energy/size, admissible couplings and operational error; derive composition and repeated-use bounds. For relativistic constraints, state the constraint algebra and clock–system interaction before seeking extensions. Existing compositional constructions are the baseline, not an absent formalism. Related: F7, O7.`,
    evidence: [
      { kind: "published", summary: "Equivalence of perspective-neutral, algebraic and effective frame descriptions in the paper's ideal-frame and constraint setting.", url: "https://doi.org/10.22331/q-2026-08-20-2196", date: "2026-08-20" },
      { kind: "preprint", summary: "A compositional framework specifies which subsystems and states can consistently be appended; not a universal finite-resource error theorem.", url: "https://arxiv.org/abs/2608.23698", date: "2026-08-24", version: "v1" },
      { kind: "preprint", summary: "A Hilbert-module formalism for classical and quantum reference frames supplies additional algebraic structure.", url: "https://arxiv.org/abs/2609.01894", date: "2026-09-01", version: "v1" },
    ],
    provenance: [{ summary: "The previous update recorded De Vuyst, Höhn and Tsobanjan's statement that no AI tools were used. This declaration was not independently rechecked in the audit and does not determine the mathematical status.", url: "https://doi.org/10.22331/q-2026-08-20-2196" }],
    refs: [
      { label: "Giacomini, Castro-Ruiz, Brukner, 'Quantum mechanics and the covariance of physical laws in quantum reference frames', Nat. Commun. 10, 494 (2019)", url: "https://arxiv.org/abs/1712.07207" },
      { label: "Vanrietvelde, Höhn, Giacomini, Castro-Ruiz, 'A change of perspective: switching quantum reference frames via a perspective-neutral framework', Quantum 4, 225 (2020)", url: "https://arxiv.org/abs/1809.00556" },
      { label: "De Vuyst, Höhn & Tsobanjan, 'On the relation between perspective-neutral, algebraic, and effective quantum reference frames', Quantum (2026)", url: "https://doi.org/10.22331/q-2026-08-20-2196" },
      { label: "Sahdo & Castro-Ruiz, 'Compositionality in quantum reference frame perspectives' (2026)", url: "https://arxiv.org/abs/2608.23698" },
      { label: "Brady, 'A Hilbert Module Approach to Classical and Quantum Reference Frames' (2026)", url: "https://arxiv.org/abs/2609.01894" },
      { label: "Höhn, Smith & Lock, 'Trinity of relational quantum dynamics', PRD 104, 066001 (2021)", url: "https://journals.aps.org/prd/abstract/10.1103/PhysRevD.104.066001" },
    ] },

  { id: "F9", cat: "foundations", horizon: "conceptual", status: "improved",
    title: "Physical boundary of indefinite causal order",
    statement: r`Determine how the physically realizable process class changes when specified closed-laboratory, spacetime-localization or background-causality assumptions are relaxed, and give operational implementations or obstructions for the resulting models.`,
    context: r`The process-matrix framework (Oreshkov–Costa–Brukner) generalizes quantum theory to allow operations without a fixed causal order between them. Some 'processes' are causally nonseparable — they cannot be explained by any definite (even probabilistic) ordering of events — raising the question of which are physically realizable.

What is known: Causal witnesses detect nonseparability, and implementations of the quantum switch realize coherent control of order. Nonseparability and violation of a causal inequality are different properties. Vilasini–Renner's published spacetime constraints distinguish sharply localized laboratories from delocalized implementations; the physical boundary depends on the laboratory and spacetime model.

Preprint theorem (May 2026): Salzger–Vilasini show that, in a classical acyclic background spacetime and the causal-box framework, processes satisfying fine-grained Acting Once and Local Order closed-laboratory conditions are behaviorally equivalent to quantum-controlled-order circuits (QC-QCs). This is a characterization under explicit assumptions, not a no-go theorem for all indefinite causal order or a characterization of quantum gravity.

Separate accepted-paper progress: Mothe–Abbott–Branciard classify non-influenceable causal order and corresponding controlled-order circuits. APS lists their paper as accepted in PRX Quantum on 20 August 2026 (preprint July 2025), not published in Physical Review Research.

Remaining questions require a specified change of model: relax a closed-lab condition, allow different localization or continuous relativistic implementations, or specify a nonclassical background. Characterize the new achievable processes and observable signatures; do not keep the characterized closed-lab regime open by omitting its assumptions. Related: F10.`,
    evidence: [{ kind: "preprint", summary: "QC-QC characterization in classical acyclic spacetime with causal boxes and fine-grained Acting Once/Local Order closed-lab conditions; not an unrestricted quantum-gravity or ICO no-go result.", url: "https://arxiv.org/abs/2605.08351", date: "2026-05-08", version: "v1" }],
    refs: [
      { label: "Oreshkov, Costa, Brukner, 'Quantum correlations with no causal order', Nat. Commun. 3, 1092 (2012)", url: "https://arxiv.org/abs/1105.4464" },
      { label: "Araújo, Branciard, Costa, Feix, Giarmatzi & Brukner, 'Witnessing causal nonseparability', New J. Phys. 17, 102001 (2015)", url: "https://arxiv.org/abs/1506.03776" },
      { label: "Araújo, Feix, Navascués & Brukner, 'A purification postulate for quantum mechanics with indefinite causal order', Quantum 1, 10 (2017)", url: "https://arxiv.org/abs/1611.08535" },
      { label: "Vilasini & Renner, 'Fundamental limits for realising quantum processes in spacetime' (2024)", url: "https://arxiv.org/abs/2408.13387" },
      { label: "Salzger & Vilasini, 'Higher-order quantum processes respecting closed labs in a spacetime have quantum controlled causal order' (2026), preprint", url: "https://arxiv.org/abs/2605.08351" },
      { label: "Mothe, Abbott & Branciard, 'Correlations and quantum circuits with dynamical causal order', PRX Quantum, accepted 20 August 2026", url: "https://journals.aps.org/prxquantum/accepted/10.1103/bt67-n8kx" },
    ] },

  { id: "F10", cat: "foundations", horizon: "conceptual",
    title: "Identifiability and learning with quantum latent causes",
    statement: r`For a specified quantum causal graph with hidden systems and restricted interventions, characterize which causal effects are identifiable and derive complete inference procedures and sample-complexity bounds, or prove observational indistinguishability.`,
    context: r`Classical causal-inference theory (Pearl; Spirtes–Glymour–Scheines) uses directed acyclic graphs, interventions, and the do-calculus to extract cause–effect relations from correlations. A quantum version must handle noncommuting observables, latent quantum common causes, and possibly indefinite causal order — while still licensing identifiable causal conclusions.

What is known: A solid foundation exists for the fixed-order case. Quantum causal models on DAGs have been formulated (Costa–Shrapnel; Allen–Barrett–Horsman–Lee–Spekkens), with a quantum Markov condition and a resolution of Bell's theorem as a failure of classical common-cause explanation that quantum common causes can restore in some framings. Henson–Lal–Pusey and Wood–Spekkens analyzed which correlations admit classical causal explanation. Barrett–Lorenz–Oreshkov developed quantum causal models with a proper interventionist semantics and cyclic/indefinite-order generalizations.

Barrett–Lorenz–Oreshkov's quantum causal-model framework already supplies quantum analogues of all three do-calculus rules, as well as sound and complete d-separation for its conditional-independence notion. Thus a basic interventionist quantum formalism and quantum do-calculus are not missing.

Remaining inference targets must specify hidden-system dimensions, known or unknown graph, and accessible instruments: decide when a desired interventional statistic is determined by available data, when a proposed inference calculus is complete for that access model, and how sample complexity and robustness scale. Sound/complete d-separation is not automatically complete latent-cause identification. Physical realizability of indefinite order is tracked separately in F9.`,
    refs: [
      { label: "Allen, Barrett, Horsman, Lee, Spekkens, 'Quantum common causes and quantum causal models', PRX 7, 031021 (2017)", url: "https://arxiv.org/abs/1609.09487" },
      { label: "Barrett, Lorenz, Oreshkov, 'Cyclic quantum causal models', Nat. Commun. 12, 885 (2021)", url: "https://arxiv.org/abs/2002.12157" },
      { label: "Barrett, Lorenz & Oreshkov, 'Quantum Causal Models', arXiv:1906.10726, revised 2020", url: "https://arxiv.org/abs/1906.10726" },
    ] },

  { id: "F11", cat: "foundations", horizon: "conceptual",
    archive: { kind: "merged", targets: ["F8", "O7"], reason: "Existing relational/POVM unification is incorporated into quantum reference frames (F8); bounded-resource clock performance and degradation are tracked under autonomous machines (O7)." },
    title: "Time observables and quantum clocks",
    statement: r`Give a unified treatment of time as an external parameter, a POVM, a dynamical clock and a relational observable, including the limitations caused by finite clock energy and backreaction.`,
    context: r`Time occupies an anomalous place in quantum theory: it is an external parameter in the Schrödinger equation, not an observable, and Pauli famously argued no self-adjoint time operator conjugate to a bounded-below Hamiltonian can exist. Yet clocks are physical quantum systems, and 'when' something happens should be measurable — so several notions of time coexist uneasily.

What is known: Multiple partial treatments exist. Pauli's objection is evaded by using POVMs (not self-adjoint operators) for time-of-arrival and phase, giving legitimate covariant time observables (Holevo; Busch–Grabowski–Lahti; Werner). The Page–Wootters mechanism treats time relationally: a static, constraint-satisfying global state yields Schrödinger evolution of a subsystem relative to a 'clock' subsystem, reconciling timelessness (as in the Wheeler–DeWitt equation of quantum gravity) with dynamics; this has been analyzed and experimentally illustrated (Giovannetti–Lloyd–Maccone; Moreva et al.). Finite clock energy imposes fundamental accuracy limits and backreaction, connecting to autonomous clocks (O7) and quantum reference frames (F8).

Published baseline: Höhn–Smith–Lock's trinity (2021) unifies relational Dirac observables, Page–Wootters dynamics and reduced Heisenberg descriptions with covariant clock POVMs, including nonideal clocks within its assumptions. It is therefore incorrect to describe the basic relational unification as absent.

This historical umbrella is archived as merged. F8 tracks extensions with specified interactions/constraints and quantitative frame-change error; O7 tracks finite-energy accuracy, control cost and repeated-use degradation. Neither merge claims that arbitrary clock backreaction is solved. Related: F8, O7.`,
    refs: [
      { label: "Page & Wootters, 'Evolution without evolution: dynamics described by stationary observables', PRD 27, 2885 (1983)", url: "https://journals.aps.org/prd/abstract/10.1103/PhysRevD.27.2885" },
      { label: "Giovannetti, Lloyd, Maccone, 'Quantum time', PRD 92, 045033 (2015)", url: "https://journals.aps.org/prd/abstract/10.1103/PhysRevD.92.045033" },
      { label: "Höhn, Smith & Lock, 'Trinity of relational quantum dynamics', PRD 104, 066001 (2021)", url: "https://journals.aps.org/prd/abstract/10.1103/PhysRevD.104.066001" },
    ] },
];
