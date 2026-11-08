const r = String.raw;

export const FOUNDATIONS = [
  { id: "F1", cat: "foundations", horizon: "conceptual",
    title: "Measurement problem",
    statement: r`For a specified ontology and dynamics, give a precise account of measurement records and their probabilities without an undefined system–observer cut; identify experimentally distinguishable predictions or explain why competing accounts are operationally equivalent.`,
    definition: r`**The measurement problem** is the tension between the linear, deterministic unitary evolution of the Schrödinger equation and the apparent occurrence of single, definite measurement outcomes with Born-rule probabilities. Unitary dynamics applied to system and apparatus produces an entangled superposition of pointer states, not one outcome; the standard “collapse” postulate patches this by hand, without specifying when or why it applies (the Heisenberg cut).

Classic statement: Bell, “Against measurement”, Physics World 3(8), 33–40 (1990), [CERN record](https://cds.cern.ch/record/203706).`,
    progress: r`- The problem is sharply framed and there are several mature research programmes, but they disagree even on what would count as a solution.
- Objective-collapse theories (GRW, CSL, Diósi–Penrose) modify the dynamics with stochastic nonlinear terms. They are experimentally testable and increasingly constrained by experiment (review: Bassi et al., [arXiv:1204.4325](https://arxiv.org/abs/1204.4325)).
- Everettian (many-worlds) interpretations keep unitarity and deny unique outcomes, relocating the problem to deriving probabilities (F2) and the preferred basis (F5).
- Bohmian mechanics adds definite particle positions with a guiding equation. Relational and QBist views reinterpret the state as information.
- Decoherence (F5) explains the suppression of interference and the preferred basis but not, by itself, the selection of a single outcome.`,
    residual: r`This remains a conceptual programme, not a single theorem awaiting a consensus proof. Unitarity and unique absolute outcomes cannot both be imposed as neutral requirements while also including Everett and objective-collapse models. For a chosen framework, specify its dynamics, ontology and record statistics; assess empirical tests of modified dynamics separately from interpretational comparisons of operationally equivalent theories.

The Everettian probability question from archived F2 belongs here: make branch ontology and rationality or probability assumptions explicit and determine what they establish, rather than asking for a derivation that wins universal assent. Axiomatic uniqueness of the Born rule is tracked under F3. Related: F3, F4, F5.`,
    refs: [
      { label: "Bassi, Lochan, Satin, Singh, Ulbricht, 'Models of wave-function collapse, underlying theories, and experimental tests', Rev. Mod. Phys. 85, 471 (2013)", url: "https://arxiv.org/abs/1204.4325" },
      { label: "Bell, 'Against measurement', Physics World 3(8), 33–40 (1990)", url: "https://cds.cern.ch/record/203706" },
      { label: "Bell, 'Speakable and Unspeakable in Quantum Mechanics' (CUP, 2nd ed., 2004)", url: "https://doi.org/10.1017/CBO9780511815676" },
    ] },

  { id: "F2", cat: "foundations", horizon: "conceptual",
    archive: { kind: "merged", targets: ["F3", "F1"], reason: "Axiomatic probability-rule uniqueness is part of reconstruction (F3); Everettian probability is part of the measurement programme (F1), not a separate consensus criterion." },
    title: "Born rule from explicit assumptions",
    statement: r`Derive the Born probability rule from a minimal set of clearly stated physical or decision-theoretic assumptions, without presupposing probabilistic or branch-weight structure equivalent to the conclusion.`,
    definition: r`**The Born rule**, that probabilities equal $|\langle\psi|\phi\rangle|^2$, is an independent postulate of standard quantum mechanics.

Whether it can be derived from more basic assumptions, especially within unitary-only (Everettian) quantum mechanics where probability is not obviously meaningful, is a long-debated question. Gleason, “Measures on the closed subspaces of a Hilbert space”, J. Math. Mech. 6, 885–893 (1957), [doi:10.1512/iumj.1957.6.56050](https://doi.org/10.1512/iumj.1957.6.56050).`,
    progress: r`- Gleason's theorem establishes Born probabilities for noncontextual probability measures on projections in dimension $\ge3$.
- Deutsch and Wallace derive branch weights within a stated Everettian decision-theoretic framework ([Wallace, *The Emergent Multiverse*, 2012](https://academic.oup.com/book/25622)); envariance approaches use environment-assisted symmetries.
- Masanes, Galley and Müller derive measurement postulates from operational assumptions about outcome probabilities ([arXiv:1811.11060](https://arxiv.org/abs/1811.11060)).
- These are results under assumptions, not automatically circular because assumptions are present; their physical justification and logical independence are distinct questions.
- Ustun (August 2026) claims local uniqueness of the squared-modulus rule for complex-weighted morphisms under nonnegativity, polynomial restrictions, phase invariance, additivity and normalization ([arXiv:2608.05197](https://arxiv.org/abs/2608.05197v2)). This supplies another explicit assumption set, not an assumption-free derivation. Only the abstract and metadata were verified here, not the proof, and its broader compositional significance requires further assessment.`,
    residual: r`The question is merged: axiom independence and composition are compared under F3, and Everettian decision and probability questions under F1. Neither an undefined minimum number of assumptions nor community consensus supplies a sharp solved/open criterion.`,
    evidence: [{ kind: "preprint", role: "progress", summary: "Local squared-modulus uniqueness under explicit complex-weight, polynomiality and additivity assumptions; abstract/metadata verified, not an independent proof audit.", url: "https://arxiv.org/abs/2608.05197v2", date: "2026-08-23", version: "v2" }],
    refs: [
      { label: "Gleason, 'Measures on the closed subspaces of a Hilbert space', J. Math. Mech. 6, 885–893 (1957)", url: "https://doi.org/10.1512/iumj.1957.6.56050" },
      { label: "Wallace, 'The Emergent Multiverse' (OUP, 2012)", url: "https://academic.oup.com/book/25622" },
      { label: "Masanes, Galley & Müller, 'The measurement postulates of quantum mechanics are operationally redundant', Nat. Commun. 10, 1361 (2019)", url: "https://arxiv.org/abs/1811.11060" },
      { label: "Ustun, 'Local Uniqueness of the Born Rule on Categories with Complex-Weighted Morphisms' (2026)", url: "https://arxiv.org/abs/2608.05197" },
    ] },

  { id: "F3", cat: "foundations", horizon: "conceptual", status: "improved",
    provenance: [
      { summary: "Das Bhowmik and Banik state that the problem was conceived and the principal results obtained by the authors, and that Claude (Anthropic) assisted with editing the prose, checking numerical thresholds and preparing the figure.", url: "https://arxiv.org/abs/2610.41444v1", version: "v1" },

      { summary: "Pompili and Budroni state that the main results were obtained solely by the authors, that Claude Opus 5.5 assisted with the expansion around zero-capacity channels and exposed a mistake in an earlier version, and that LLMs were used for grammar; they take responsibility for the final manuscript.", url: "https://arxiv.org/html/2610.32783v1", version: "v1" },
      { summary: "Pompili and Weilenmann report GPT-5.6 Sol assistance: suggesting an initial version of Theorem 2, pointing to literature, checking calculations and correcting grammar. They report verifying all arguments.", url: "https://arxiv.org/abs/2610.06604v1", version: "v1" },
      { summary: "Hoffreumon and Woods report Grammarly for editing and ChatGPT 5.6 Sol for identifying and expanding overly terse passages.", url: "https://arxiv.org/html/2610.03644v1", version: "v1" },
      { summary: "Dmello et al. state that artificial intelligence was not used in any meaningful capacity in this work. This is their declaration, not an independent provenance audit.", url: "https://arxiv.org/html/2610.03694v1", version: "v1" },
    ],
    reviewedAt: "2026-11-08",
    title: "Operational reconstruction of quantum theory",
    statement: r`For specified operational axioms and composite-system rules, establish their independence and reconstruction power, and determine which alternative theories are experimentally distinguishable; extend controlled reconstructions beyond their finite-dimensional assumptions.`,
    definition: r`**Operational reconstruction** asks which operational or information-theoretic axioms select the usual quantum predictions, and which assumptions rule out physically different alternatives rather than equivalent representations. Quantum theory's mathematical apparatus (Hilbert spaces, composition, completely positive maps and outcome probabilities) is usually postulated.

Reconstruction programmes derive finite-dimensional quantum theory under explicit operational axioms, starting with Hardy, “Quantum theory from five reasonable axioms” (2001), [arXiv:quant-ph/0101012](https://arxiv.org/abs/quant-ph/0101012). These are successful conditional reconstructions; there is no mathematically defined requirement that one axiom list be uniquely compelling.`,
    progress: r`- Hardy, Chiribella–D'Ariano–Perinotti ([arXiv:1011.6451](https://arxiv.org/abs/1011.6451)), Masanes–Müller and other programmes derive finite-dimensional quantum theory under explicit operational axioms. Generalized probabilistic theories organize alternatives and the role of composition.
- Renou et al. (2021) propose a network test distinguishing a particular real-Hilbert-space theory with specified composition and independent product-source assumptions ([Nature 600 (2021)](https://www.nature.com/articles/s41586-021-04160-4)). That paper is a theoretical proposal, not the experimental realization itself, and does not exclude every formulation using real numbers.
- Hoffreumon and Woods (19 March 2026 preprint) distinguish operational independence from product-state independence and give simulation results ([arXiv:2603.19208](https://arxiv.org/abs/2603.19208)). Barrios Hita et al. (PRL, 18 June 2026) reproduce multipartite quantum predictions using a modified real composite-system postulate ([PRL 136, 240202](https://journals.aps.org/prl/abstract/10.1103/4k13-sdjh)). Neither changes the conclusion of Renou's theorem under its original assumptions.
- Gachechiladze and Miklin (9 September 2026, v1) derive the Tsirelson–Landau–Masanes correlator criterion from generalized information causality using correlated inputs and optimized noisy communication, and exhibit macroscopically local correlations excluded by generalized information causality ([arXiv:2609.10508](https://arxiv.org/abs/2609.10508v1)). The four-correlator projection must be distinguished from the full behavior set with biased marginals: the paper explicitly leaves the full power of the principle, including its relation to almost-quantum correlations, unresolved. This advances a specified operational principle; it is not a reconstruction of all quantum states, transformations and composition rules.
- Dmello, Xu, Renou and Gross (2 October 2026, v1) characterize finite-dimensional quantum theory using specified two-body correlations plus stability under arbitrarily iterated teleportation ([arXiv:2610.03694](https://arxiv.org/abs/2610.03694v1)). The latter is a hierarchy with one condition per teleportation length; the result is not a finite experimental certification of all operational axioms.
- Hoffreumon and Woods' same-day clarification (2 October 2026, v1) argues that operational source independence does not entail product-state independence ([arXiv:2610.03644](https://arxiv.org/abs/2610.03644v1)). This is an attributed interpretation of the real-versus-complex debate; Renou et al.'s network separation retains its force under its stated product-source postulate.
- Pompili and Weilenmann (5 October 2026, v1) show that information causality, in all known formulations, admits post-quantum correlations already with three inputs and two outcomes per party ([arXiv:2610.06604](https://arxiv.org/abs/2610.06604v1)).
- Ramanathan (6 October 2026, v1) shows that the convex hull of no-signalling behaviors obeying a common-overlap no-disturbance-without-uncertainty condition equals the finite-dimensional quantum set when one party has two binary measurements, including the full simplest Bell scenario ([arXiv:2610.08749](https://arxiv.org/abs/2610.08749v1)). This characterizes quantum correlations in restricted scenarios, while the previous result shows a candidate principle failing to do so. Neither reconstructs states, transformations or composition rules.
- Cavendish (16 October 2026, v1) formalizes a no-signaling hypothesis between isolated systems and shows that, given the standard composite-experiment representation and two textbook marginal-probability claims, it is equivalent to the universality of the POVM framework, deriving most but not all of the probability-generating fragment of nonrelativistic quantum mechanics ([arXiv:2610.22823](https://arxiv.org/abs/2610.22823v1)).
- Pompili and Budroni (23 October 2026, v1) reduce the single-copy information-causality problem to an optimization with a deterministic reduction, show that adaptive multi-copy protocols are single-copy protocols applied to a wired effective behavior, so that excluding single-copy violations suffices for families closed under wirings, and show that second-order constraints around full-support zero-capacity channels characterize exactly macroscopic locality in the CHSH scenario ([arXiv:2610.32783](https://arxiv.org/abs/2610.32783v1)). With Cavendish's result, this sharpens which principles fix which fragment; neither is a full operational reconstruction.
- Das Bhowmik and Banik (30 October 2026, v1) show that almost-quantum correlations, the $1+AB$ level of the NPA hierarchy, violate information causality, and do so without bound ([arXiv:2610.41444](https://arxiv.org/abs/2610.41444v1)). Their violation uses rare zero-error certificates rather than biased guesses. Almost-quantum correlations satisfy several other proposed principles (nontrivial communication complexity, macroscopic locality, local orthogonality), so the result shows that information causality is strictly stronger than these principles on that set. It does not identify the quantum set.`,
    residual: r`Concrete remaining targets include independence within a fixed axiom vocabulary, compositional consistency of probability rules (the mathematical part of archived F2), infinite-dimensional reconstruction with explicit continuity assumptions, and tests separating operationally inequivalent alternatives. Distinguish alternative physics from merely changing scalar representation. Related: F1, F7, M11.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Almost-quantum correlations violate information causality, without bound, through zero-error certificates; a candidate principle separates the almost-quantum set from the quantum set but does not characterize the latter.", url: "https://arxiv.org/abs/2610.41444v1", date: "2026-10-30", version: "v1" },

      { kind: "preprint", role: "progress", summary: "Single-copy reduction of information causality, closure under wirings, and exact recovery of macroscopic locality in the CHSH scenario from second-order constraints; a characterization of a principle's reach, not a reconstruction.", url: "https://arxiv.org/abs/2610.32783v1", date: "2026-10-23", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Under stated composite-experiment and marginal-probability assumptions, a no-signaling hypothesis is equivalent to the universality of POVMs; derives most but not all of the probability-generating fragment of nonrelativistic quantum mechanics.", url: "https://arxiv.org/abs/2610.22823v1", date: "2026-10-16", version: "v1" },
      { kind: "preprint", role: "progress", summary: "A no-disturbance-without-uncertainty condition yields exactly the quantum behavior set when one party has two binary measurements; a restricted Bell-scenario characterization.", url: "https://arxiv.org/abs/2610.08749v1", date: "2026-10-06", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Information causality, in all known formulations, admits post-quantum correlations with three inputs and two outcomes per party.", url: "https://arxiv.org/abs/2610.06604v1", date: "2026-10-05", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Operational characterization conditional on correlations and an unbounded teleportation hierarchy.", url: "https://arxiv.org/abs/2610.03694v1", date: "2026-10-02", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Clarifies the role of product-source versus operational independence in real-theory tests; does not refute the original conditional network theorem.", url: "https://arxiv.org/abs/2610.03644v1", date: "2026-10-02", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Derives the TLM correlator boundary and constraints beyond macroscopic locality; the full power for complete behaviors and almost-quantum correlations remains unresolved.", url: "https://arxiv.org/abs/2609.10508v1", date: "2026-09-09", version: "v1" },
      { kind: "published", role: "progress", summary: "A real-number formulation recovers multipartite predictions by modifying the composite-system postulate; this does not refute network no-go results with their original assumptions.", url: "https://journals.aps.org/prl/abstract/10.1103/4k13-sdjh", date: "2026-06-18" },
      { kind: "preprint", role: "progress", summary: "Operational source independence and product-state independence are distinguished in real simulations of quantum protocols.", url: "https://arxiv.org/abs/2603.19208v1", date: "2026-03-19", version: "v1" },
    ],
    refs: [
      { label: "Das Bhowmik & Banik, 'Almost-Quantum Correlations Violate Information Causality' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.41444v1" },
      { label: "Pompili & Budroni, 'Bounding single-copy information causality violations' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.32783v1" },
      { label: "Cavendish, 'On the relationship between the POVM framework and the no-signaling hypothesis' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.22823v1" },
      { label: "Ramanathan, 'No-Disturbance-without-Uncertainty generates the Quantum set in the simplest Bell scenario' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.08749v1" },
      { label: "Pompili & Weilenmann, 'Information causality does not single out the set of quantum correlations' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.06604v1" },
      { label: "Lionel J. Dmello, Xiangling Xu, Marc-Olivier Renou, David Gross, 'An operational characterization of finite-dimensional quantum theory' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.03694v1" },
      { label: "Timothée Hoffreumon, Mischa P. Woods, 'Clarifications on the Experimental Status of Real Quantum Theory' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.03644v1" },
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
    definition: r`**A Wigner's-friend scenario** has an observer (the friend) perform a measurement inside a sealed lab, while a superobserver (Wigner) treats the whole lab, friend included, unitarily.

The two assign different, seemingly incompatible descriptions, raising the question of whether measurement outcomes are absolute or observer-relative.`,
    progress: r`- Frauchiger and Renner (2018) showed that a set of natural assumptions (that quantum theory applies to agents, that different agents' conclusions can be consistently combined, and that outcomes are single and absolute) are mutually inconsistent, so at least one must be dropped ([arXiv:1604.07422](https://arxiv.org/abs/1604.07422)).
- The Local Friendliness theorem (Bong et al., 2020, with an experiment) derives inequalities from even weaker assumptions (“absoluteness of observed events” plus local agency) and shows that quantum mechanics violates them, strictly strengthening Bell's theorem ([arXiv:1907.05607](https://arxiv.org/abs/1907.05607)).
- Various interpretations respond by denying absoluteness (relational QM, QBism, Everett) or agent-independence.
- Positive frameworks also exist. Vilasini and Woods formulate extended Wigner's-friend scenarios as quantum circuits, with explicit conditioning on channels and rules for logically and causally consistent agent predictions without absolute measurement events ([arXiv:2209.09281](https://arxiv.org/abs/2209.09281v2), revised 11 November 2024). This preprint framework is not a consensus interpretation or an unrestricted resolution of F1, but it shows that more than no-go theorems are available.`,
    residual: r`The frontier is experimental and assumption-specific: characterize what records remain accessible when a laboratory is coherently controlled, which agent inferences can be jointly checked, and how noise or imperfect reversibility changes local-friendliness tests. Distinguish actual observation protocols from counterfactual inferences about erased records. Related: F1, F5.`,
    evidence: [{ kind: "preprint", role: "progress", summary: "A constructive circuit framework permits logically and causally consistent agent reasoning without absolute events; interpretation-independent experimental discrimination is a separate task.", url: "https://arxiv.org/abs/2209.09281v2", date: "2024-11-11", version: "v2" }],
    refs: [
      { label: "Frauchiger & Renner, 'Quantum theory cannot consistently describe the use of itself', Nat. Commun. 9, 3711 (2018)", url: "https://arxiv.org/abs/1604.07422" },
      { label: "Bong, Utreras-Alarcón, Ghafari, Liang, Tischler, Cavalcanti, Pryde, Wiseman, 'A strong no-go theorem on the Wigner's friend paradox', Nat. Phys. 16 (2020)", url: "https://arxiv.org/abs/1907.05607" },
      { label: "Vilasini & Woods, 'A general quantum circuit framework for Extended Wigner's Friend Scenarios: logically and causally consistent reasoning without absolute measurement events', preprint, revised 2024", url: "https://arxiv.org/abs/2209.09281" },
    ] },

  { id: "F5", cat: "foundations", horizon: "conceptual",
    title: "Formation and lifetime of objective classical records",
    statement: r`For a specified system–environment dynamics and fragment-access model, bound the formation time, redundancy, disturbance and lifetime of independently accessible classical records, using an explicit objectivity criterion.`,
    definition: r`**Objective classical records** are definite, stable, publicly agreed facts. The question is why the macroscopic world shows them if the underlying dynamics is unitary and superposition-generating: one must derive, quantitatively, the emergence of a preferred (pointer) basis, the stability of records, and the effectively Boolean logic of everyday events.

Standard reference: Zurek, “Decoherence, einselection, and the quantum origins of the classical”, Rev. Mod. Phys. 75, 715 (2003), [arXiv:quant-ph/0105127](https://arxiv.org/abs/quant-ph/0105127).`,
    progress: r`- Decoherence theory (Zurek, Joos–Zeh) explains a great deal: environmental monitoring rapidly suppresses interference between pointer states and selects a robust pointer basis via the predictability sieve, on extremely short timescales.
- Quantum Darwinism (Zurek, [arXiv:0903.5082](https://arxiv.org/abs/0903.5082)) adds that classical objectivity arises because information about pointer states is redundantly imprinted on many environment fragments, so many observers independently access the same facts. This redundancy has been quantified (mutual-information plateaus) and observed in models and experiments.
- Consistent or decoherent histories (Griffiths, Gell-Mann–Hartle) formalize when families of coarse-grained histories obey classical probability.
- A mutual-information plateau by itself need not establish that independent observers can read the same classical record without disturbance. Strong quantum Darwinism and spectrum-broadcast structure give more discriminating criteria; Le and Olaya-Castro establish an equivalence under the additional strong-independence condition ([arXiv:1803.08936](https://arxiv.org/abs/1803.08936)).`,
    residual: r`The open dynamical task is quantitative formation, stability and degradation of such records in specified interacting environments and at finite fragment access, including approximate rather than exact objectivity. Outcome selection is the distinct interpretational task in F1 and is not part of this entry's success criterion. Related: F1, F4, F6.`,
    refs: [
      { label: "Zurek, 'Decoherence, einselection, and the quantum origins of the classical', Rev. Mod. Phys. 75, 715 (2003)", url: "https://arxiv.org/abs/quant-ph/0105127" },
      { label: "Zurek, 'Quantum Darwinism', Nat. Phys. 5, 181 (2009)", url: "https://arxiv.org/abs/0903.5082" },
      { label: "Le & Olaya-Castro, 'Strong Quantum Darwinism and Strong Independence are Equivalent to Spectrum Broadcast Structure', PRL 122, 010403 (2019)", url: "https://arxiv.org/abs/1803.08936" },
    ] },

  { id: "F6", cat: "foundations", horizon: "programme",
    title: "Controlled long-time classical limits",
    statement: r`For a specified Hamiltonian or dissipative dynamics, observable class and semiclassical or many-body scaling, prove quantitative quantum-to-classical error bounds on a stated growing time window; separate isolated chaos, decohering dynamics and macroscopic limits.`,
    definition: r`**The classical limit** asks how and when Newtonian or Hamiltonian mechanics emerges from quantum dynamics as $\hbar\to0$ or for macroscopic systems. It is subtle because the limit is singular and, for chaotic systems, quantum and classical predictions diverge after a surprisingly short time.

Early reference: Hepp, “The classical limit for quantum mechanical correlation functions”, Comm. Math. Phys. 35 (1974), [doi:10.1007/BF01646348](https://doi.org/10.1007/BF01646348).`,
    progress: r`- Egorov-type results control semiclassical observable evolution under stated smoothness and time assumptions; coherent-state and mean-field limits also have rigorous regimes.
- In chaotic dynamics, derivative growth often limits naive wave-packet or operator estimates to logarithmic Ehrenfest times. This is not a universal prohibition on every coarse observable having longer correspondence, nor a theorem that decoherence is always necessary.`,
    residual: r`Selected child questions ask for errors beyond established Ehrenfest windows for specified coarse observables; for joint noise and semiclassical limits with quantified decoherence; and for macroscopic mean-field or hydrodynamic limits with size-dependent times. State the metric, initial-state class and order of limits. These distinct tasks cannot be certified by a blanket claim of a universal classical-limit theorem. Related: F5, M8 (quantum unique ergodicity), M9 (spectral statistics), B5 (thermalization).`,
    relations: [{ id: "F5", type: "related" }, { id: "M8", type: "related" }, { id: "M9", type: "related" }, { id: "B5", type: "related" }],
    refs: [
      { label: "Hepp, 'The classical limit for quantum mechanical correlation functions', Comm. Math. Phys. 35 (1974)", url: "https://doi.org/10.1007/BF01646348" },
      { label: "Zurek & Paz, 'Decoherence, chaos, and the second law', PRL 72, 2508 (1994)", url: "https://arxiv.org/abs/gr-qc/9402006" },
    ] },

  { id: "F7", cat: "foundations", horizon: "conceptual",
    title: "Inferring subsystem structure from accessible dynamics",
    statement: r`Given limited Hamiltonian and observable data, characterize existence, uniqueness and stability of an approximately local tensor-product structure, modulo stated local-unitary and subsystem-permutation equivalences.`,
    definition: r`**Subsystem structure** in finite-dimensional many-body quantum mechanics is a chosen tensor-product structure, on which entanglement and locality depend; observable algebras provide a more general formulation. The same Hilbert space can admit inequivalent subsystem choices.

The inverse question is which choices are identifiable from accessible observables and dynamics, rather than from an assumed preferred factorization. Reference: Zanardi, Lidar and Lloyd, “Quantum tensor product structures are observable-induced”, Phys. Rev. Lett. 92, 060402 (2004), [arXiv:quant-ph/0308043](https://arxiv.org/abs/quant-ph/0308043).`,
    progress: r`- The key insight (Zanardi; Zanardi–Lidar–Lloyd) is that a tensor-product structure is not fundamental but is induced by a choice of physically accessible observables, an algebra of operators, and by the dynamics. Entanglement is thus observable-relative: a state can be entangled with respect to one factorization and product with respect to another.
- The dynamics (locality of the Hamiltonian) singles out preferred factorizations, and there are proposals that the correct subsystem decomposition is the one making the Hamiltonian local (“the Hamiltonian selects the tensor structure”: Cotler, Penington and Ranard, [arXiv:1702.06142](https://arxiv.org/abs/1702.06142); Carroll and Singh, “Mad-dog Everettianism”).
- In algebraic QFT the analogue is the choice of local von Neumann algebras (QF8, QF9).
- Once accessible commuting observable algebras are specified, observable-induced subsystems already give a principled construction. A uniquely selected factorization need not exist for arbitrary Hamiltonians, and an observer-independent canonical split is not assumed here.`,
    residual: r`The remaining inverse problem is to state what partial operational data suffice to recover an approximately local structure, identify ambiguities, and bound sensitivity to experimental or model error. In field and gauge theories, local algebras need not correspond to finite-dimensional tensor factors; QF8 and QF9 track that separate setting. Related: QF8, QF9, E15.`,
    refs: [
      { label: "Zanardi, Lidar, Lloyd, 'Quantum tensor product structures are observable-induced', PRL 92, 060402 (2004)", url: "https://arxiv.org/abs/quant-ph/0308043" },
      { label: "Cotler, Penington, Ranard, 'Locality from the spectrum', Comm. Math. Phys. 368 (2019)", url: "https://arxiv.org/abs/1702.06142" },
    ] },

  { id: "F8", cat: "foundations", horizon: "conceptual", status: "improved",
    reviewedAt: "2026-10-26",
    title: "Finite-resource quantum reference frames",
    statement: r`For a specified symmetry group and constrained dynamics, bound errors in changing and composing finite-resource quantum frames, including interacting clock backreaction and repeated-use degradation under an explicit operational task.`,
    definition: r`**A quantum reference frame** (QRF) is a reference frame, for position, orientation, time or phase, treated as the physical and ultimately quantum system it is. A QRF can be in superposition or entangled with the system, so “changing frames” becomes a nontrivial quantum operation, and properties like superposition and entanglement become frame-dependent.

Reference: Giacomini, Castro-Ruiz and Brukner, Nat. Commun. 10, 494 (2019), [arXiv:1712.07207](https://arxiv.org/abs/1712.07207).`,
    progress: r`- Giacomini, Castro-Ruiz and Brukner gave transformations between QRFs under which entanglement and superposition are relative to the frame, and defined frame-dependent notions of a system's state.
- The perspective-neutral, constraint-based approach (Vanrietvelde, Höhn, Giacomini and Castro-Ruiz, [arXiv:1809.00556](https://arxiv.org/abs/1809.00556); Höhn et al.) grounds QRF changes in gauge-theoretic reduction of a constrained system, connecting to the problem of time in quantum gravity and to the Page–Wootters mechanism (F11).
- Earlier resource-theoretic work (Bartlett, Rudolph and Spekkens) treated frames as consumable resources under superselection.
- Höhn, Smith and Lock's trinity of relational quantum dynamics (2021) relates relational Dirac observables, Page–Wootters and reduced Heisenberg descriptions using covariant clock POVMs, including nonideal clocks under its assumptions ([Phys. Rev. D 104, 066001](https://journals.aps.org/prd/abstract/10.1103/PhysRevD.104.066001)). This absorbs the formal-unification part of archived F11; it is not evidence that all interactions and finite-resource costs are controlled.
- De Vuyst, Höhn and Tsobanjan (published 20 August 2026) relate perspective-neutral, algebraic and effective approaches for ideal sharply oriented frames, including a single-relativistic-constraint setting ([doi:10.22331/q-2026-08-20-2196](https://doi.org/10.22331/q-2026-08-20-2196)).
- Sahdo and Castro-Ruiz (24 August 2026 preprint) give a compositional treatment specifying how subsystems can be added or removed and which appended states are compatible ([arXiv:2608.23698](https://arxiv.org/abs/2608.23698)).
- Brady (1 September 2026 preprint) formulates classical and quantum frames for $C^*$-algebras through Hilbert modules and equivariant correspondences ([arXiv:2609.01894](https://arxiv.org/abs/2609.01894)). These three works organize composition and algebraic structure; they do not assert uniform finite-resource error bounds for every interacting frame model.
- Chataignier and Smith (20 October 2026, v1) formulate quantum reference frames within Dirac quantization with group averaging for unimodular gauge groups and show that the change-of-frame map is unitary even when the gauge group does not act as a tensor-product representation, so that frames may interact with the systems they describe ([arXiv:2610.28732](https://arxiv.org/abs/2610.28732v1)). For temporal frames a unitary Schrödinger equation emerges for an interacting clock and system, with an earlier time-nonlocal equation recovered as a limit.
- Valente, Ferradini, Giacomini and Kabel (22 October 2026, v1) define a mutual information across frame perspectives for overlapping subsystem algebras, correcting an overcount in the chain law and proving subadditivity ([arXiv:2610.31729](https://arxiv.org/abs/2610.31729v1)). Both October 2026 works concern ideal frames and exact relational structure; neither bounds errors for finite-resource frames or repeated use.`,
    residual: r`The frontier is quantitative: fix a group (for example time translations or spatial rotations), reference-state energy or size, admissible couplings and operational error; derive composition and repeated-use bounds. For relativistic constraints, state the constraint algebra and clock–system interaction before seeking extensions. Existing compositional constructions are the baseline, not an absent formalism. Related: F7, O7.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Unitary change of frame under interactions, within group-averaged Dirac quantization for unimodular groups, with an interacting-clock Schrödinger equation; ideal frames, no finite-resource error bounds.", url: "https://arxiv.org/abs/2610.28732v1", date: "2026-10-20", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Mutual information across quantum-reference-frame perspectives for overlapping subsystem algebras, with a modified chain law and subadditivity; structural, not a resource bound.", url: "https://arxiv.org/abs/2610.31729v1", date: "2026-10-22", version: "v1" },
      { kind: "published", role: "progress", summary: "Equivalence of perspective-neutral, algebraic and effective frame descriptions in the paper's ideal-frame and constraint setting.", url: "https://doi.org/10.22331/q-2026-08-20-2196", date: "2026-08-20" },
      { kind: "preprint", role: "progress", summary: "A compositional framework specifies which subsystems and states can consistently be appended; not a universal finite-resource error theorem.", url: "https://arxiv.org/abs/2608.23698v1", date: "2026-08-24", version: "v1" },
      { kind: "preprint", role: "progress", summary: "A Hilbert-module formalism for classical and quantum reference frames supplies additional algebraic structure.", url: "https://arxiv.org/abs/2609.01894v1", date: "2026-09-01", version: "v1" },
    ],
    provenance: [{ summary: "De Vuyst, Höhn and Tsobanjan's contribution statement, in the arXiv version published in Quantum (v4), states that no AI tools were used in the paper's creation. This is an author statement and does not determine the mathematical status.", url: "https://arxiv.org/abs/2507.14131v4", version: "v4" },
      { summary: "Valente, Ferradini, Giacomini and Kabel acknowledge Claude Sonnet 5.5 and Opus 5–5.5 assistance in developing and streamlining some proofs for arbitrary finite-dimensional symmetry groups.", url: "https://arxiv.org/html/2610.31729v1", version: "v1" }],
    refs: [
      { label: "Chataignier & Smith, 'Interacting quantum reference frames' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.28732v1" },
      { label: "Valente, Ferradini, Giacomini & Kabel, 'Mutual Information Across Quantum Reference Frame Perspectives' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.31729v1" },
      { label: "Giacomini, Castro-Ruiz, Brukner, 'Quantum mechanics and the covariance of physical laws in quantum reference frames', Nat. Commun. 10, 494 (2019)", url: "https://arxiv.org/abs/1712.07207" },
      { label: "Vanrietvelde, Höhn, Giacomini, Castro-Ruiz, 'A change of perspective: switching quantum reference frames via a perspective-neutral framework', Quantum 4, 225 (2020)", url: "https://arxiv.org/abs/1809.00556" },
      { label: "De Vuyst, Höhn & Tsobanjan, 'On the relation between perspective-neutral, algebraic, and effective quantum reference frames', Quantum (2026)", url: "https://doi.org/10.22331/q-2026-08-20-2196" },
      { label: "Sahdo & Castro-Ruiz, 'Compositionality in quantum reference frame perspectives' (2026)", url: "https://arxiv.org/abs/2608.23698" },
      { label: "Brady, 'A Hilbert Module Approach to Classical and Quantum Reference Frames' (2026)", url: "https://arxiv.org/abs/2609.01894" },
      { label: "Höhn, Smith & Lock, 'Trinity of relational quantum dynamics', PRD 104, 066001 (2021)", url: "https://journals.aps.org/prd/abstract/10.1103/PhysRevD.104.066001" },
    ] },

  { id: "F9", cat: "foundations", horizon: "conceptual", status: "improved",
    reviewedAt: "2026-11-08",
    title: "Physical boundary of indefinite causal order",
    statement: r`Determine how the physically realizable process class changes when specified closed-laboratory, spacetime-localization or background-causality assumptions are relaxed, and give operational implementations or obstructions for the resulting models.`,
    definition: r`**Indefinite causal order** refers to processes in which operations have no fixed causal order between them. The process-matrix framework generalizes quantum theory to allow such processes; some are causally nonseparable, meaning that they cannot be explained by any definite (even probabilistic) ordering of events. The question is which of them are physically realizable.

Reference: Oreshkov, Costa and Brukner, “Quantum correlations with no causal order”, Nat. Commun. 3, 1092 (2012), [arXiv:1105.4464](https://arxiv.org/abs/1105.4464).`,
    progress: r`- Causal witnesses detect nonseparability ([arXiv:1506.03776](https://arxiv.org/abs/1506.03776)), and implementations of the quantum switch realize coherent control of order. Nonseparability and violation of a causal inequality are different properties.
- Vilasini and Renner's published spacetime constraints distinguish sharply localized laboratories from delocalized implementations; the physical boundary depends on the laboratory and spacetime model ([arXiv:2408.13387](https://arxiv.org/abs/2408.13387)).
- Salzger and Vilasini (May 2026 preprint) show that, in a classical acyclic background spacetime and the causal-box framework, processes satisfying fine-grained Acting Once and Local Order closed-laboratory conditions are behaviorally equivalent to quantum-controlled-order circuits (QC-QCs) ([arXiv:2605.08351](https://arxiv.org/abs/2605.08351)). This is a characterization under explicit assumptions, not a no-go theorem for all indefinite causal order or a characterization of quantum gravity.
- Mothe, Abbott and Branciard classify non-influenceable causal order and corresponding controlled-order circuits; APS lists their paper as accepted in PRX Quantum on 20 August 2026 (preprint July 2025) ([accepted paper](https://journals.aps.org/prxquantum/accepted/10.1103/bt67-n8kx)).
- Wei and Pang (16 September 2026, v1) and Wechs, Abbott and Branciard (17 September 2026, v1) give two teleportation-based constructions identifying extensibly causally separable multipartite processes with circuits whose order is classically controlled (QC-CC) ([arXiv:2609.18559](https://arxiv.org/abs/2609.18559v1), [arXiv:2609.20774](https://arxiv.org/abs/2609.20774v1)). The ancillary-extension convention is essential; the latter paper uses the corresponding strengthened notion of causal separability. This characterizes the causally separable class, not the realizability of every causally nonseparable process. It is separate from the QC-QC closed-laboratory theorem above.`,
    residual: r`Remaining questions require a specified change of model: relax a closed-lab condition, allow different localization or continuous relativistic implementations, or specify a nonclassical background. Characterize the new achievable processes and observable signatures; the characterized closed-lab regime does not stay open merely by omitting its assumptions. Related: F10.

A concrete residual, posed by Araújo and Brukner: is every finite-dimensional extensibly causal process matrix purifiable? For two laboratories every purifiable process is extensibly causal; the converse implication is open, and Araújo, Feix, Navascués and Brukner give a noisy test process ([arXiv:1611.08535](https://arxiv.org/abs/1611.08535)).`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Claimed operational equivalence of extensible causal separability and QC-CC, including global past/future systems.", url: "https://arxiv.org/abs/2609.18559v1", date: "2026-09-16", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Concurrent characterization using coherent teleportation and the ancilla-stable multipartite causal-separability definition; not a theorem for all nonseparable processes.", url: "https://arxiv.org/abs/2609.20774v1", date: "2026-09-17", version: "v1" },
      { kind: "preprint", role: "progress", summary: "QC-QC characterization in classical acyclic spacetime with causal boxes and fine-grained Acting Once/Local Order closed-lab conditions; not an unrestricted quantum-gravity or ICO no-go result.", url: "https://arxiv.org/abs/2605.08351v1", date: "2026-05-08", version: "v1" }],
    refs: [
      { label: "Wei & Pang, 'Extensibly Causally Separable Processes Admit Realizations as Quantum Circuits with Classical Control of Causal Order' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.18559v1" },
      { label: "Wechs, Abbott & Branciard, 'All causally separable quantum processes are quantum circuits with classical control of causal order' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.20774v1" },
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
    definition: r`**Quantum causal inference** extends classical causal-inference theory (Pearl; Spirtes–Glymour–Scheines), which uses directed acyclic graphs, interventions and the do-calculus to extract cause–effect relations from correlations. A quantum version must handle noncommuting observables, latent quantum common causes and possibly indefinite causal order, while still licensing identifiable causal conclusions.

Reference: Allen, Barrett, Horsman, Lee and Spekkens, “Quantum common causes and quantum causal models”, Phys. Rev. X 7, 031021 (2017), [arXiv:1609.09487](https://arxiv.org/abs/1609.09487).`,
    progress: r`- A solid foundation exists for the fixed-order case. Quantum causal models on DAGs have been formulated (Costa–Shrapnel; Allen–Barrett–Horsman–Lee–Spekkens), with a quantum Markov condition and a resolution of Bell's theorem as a failure of classical common-cause explanation that quantum common causes can restore in some framings.
- Henson–Lal–Pusey and Wood–Spekkens analyzed which correlations admit classical causal explanation.
- Barrett, Lorenz and Oreshkov developed quantum causal models with a proper interventionist semantics ([arXiv:1906.10726](https://arxiv.org/abs/1906.10726)) and cyclic and indefinite-order generalizations ([arXiv:2002.12157](https://arxiv.org/abs/2002.12157)). Their framework supplies quantum analogues of all three do-calculus rules, as well as sound and complete d-separation for its conditional-independence notion. A basic interventionist quantum formalism and quantum do-calculus are therefore not missing.`,
    residual: r`Remaining inference targets must specify hidden-system dimensions, known or unknown graph, and accessible instruments: decide when a desired interventional statistic is determined by available data, when a proposed inference calculus is complete for that access model, and how sample complexity and robustness scale. Sound and complete d-separation is not automatically complete latent-cause identification. Physical realizability of indefinite order is tracked separately in F9.`,
    refs: [
      { label: "Allen, Barrett, Horsman, Lee, Spekkens, 'Quantum common causes and quantum causal models', PRX 7, 031021 (2017)", url: "https://arxiv.org/abs/1609.09487" },
      { label: "Barrett, Lorenz, Oreshkov, 'Cyclic quantum causal models', Nat. Commun. 12, 885 (2021)", url: "https://arxiv.org/abs/2002.12157" },
      { label: "Barrett, Lorenz & Oreshkov, 'Quantum Causal Models', arXiv:1906.10726, revised 2020", url: "https://arxiv.org/abs/1906.10726" },
    ] },

  { id: "F11", cat: "foundations", horizon: "conceptual",
    archive: { kind: "merged", targets: ["F8", "O7"], reason: "Existing relational/POVM unification is incorporated into quantum reference frames (F8); bounded-resource clock performance and degradation are tracked under autonomous machines (O7)." },
    title: "Time observables and quantum clocks",
    statement: r`Give a unified treatment of time as an external parameter, a POVM, a dynamical clock and a relational observable, including the limitations caused by finite clock energy and backreaction.`,
    definition: r`**Time in quantum theory** occupies an anomalous place: it is an external parameter in the Schrödinger equation, not an observable, and Pauli famously argued that no self-adjoint time operator conjugate to a bounded-below Hamiltonian can exist.

Yet clocks are physical quantum systems, and “when” something happens should be measurable, so several notions of time coexist uneasily.`,
    progress: r`- Pauli's objection is evaded by using POVMs, not self-adjoint operators, for time of arrival and phase, giving legitimate covariant time observables (Holevo; Busch–Grabowski–Lahti; Werner).
- The Page–Wootters mechanism treats time relationally: a static, constraint-satisfying global state yields Schrödinger evolution of a subsystem relative to a “clock” subsystem, reconciling timelessness (as in the Wheeler–DeWitt equation of quantum gravity) with dynamics ([Phys. Rev. D 27, 2885 (1983)](https://journals.aps.org/prd/abstract/10.1103/PhysRevD.27.2885)). This has been analyzed and experimentally illustrated (Giovannetti–Lloyd–Maccone, [Phys. Rev. D 92, 045033 (2015)](https://journals.aps.org/prd/abstract/10.1103/PhysRevD.92.045033); Moreva et al.).
- Finite clock energy imposes fundamental accuracy limits and backreaction, connecting to autonomous clocks (O7) and quantum reference frames (F8).
- Published baseline: Höhn, Smith and Lock's trinity (2021) unifies relational Dirac observables, Page–Wootters dynamics and reduced Heisenberg descriptions with covariant clock POVMs, including nonideal clocks within its assumptions ([Phys. Rev. D 104, 066001](https://journals.aps.org/prd/abstract/10.1103/PhysRevD.104.066001)). The basic relational unification is therefore not absent.`,
    residual: r`This historical umbrella is merged. F8 tracks extensions with specified interactions or constraints and quantitative frame-change error; O7 tracks finite-energy accuracy, control cost and repeated-use degradation. Neither merge claims that arbitrary clock backreaction is solved.`,
    refs: [
      { label: "Page & Wootters, 'Evolution without evolution: dynamics described by stationary observables', PRD 27, 2885 (1983)", url: "https://journals.aps.org/prd/abstract/10.1103/PhysRevD.27.2885" },
      { label: "Giovannetti, Lloyd, Maccone, 'Quantum time', PRD 92, 045033 (2015)", url: "https://journals.aps.org/prd/abstract/10.1103/PhysRevD.92.045033" },
      { label: "Höhn, Smith & Lock, 'Trinity of relational quantum dynamics', PRD 104, 066001 (2021)", url: "https://journals.aps.org/prd/abstract/10.1103/PhysRevD.104.066001" },
    ] },
];
