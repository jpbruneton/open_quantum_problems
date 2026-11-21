const r = String.raw;
// PSI Open Quantum Problems batch, pinned to the 23 October 2026 snapshot cited in its CITATIONS.bib.
const PSI = "https://github.com/physical-superintelligence/oqp-batch-2026/blob/7049357c42a8fe85262da08fdc10d57b4d9e67a0/";

export const FOUNDATIONS = [
  { id: "F1", cat: "foundations", horizon: "conceptual",
    title: "Measurement problem",
    statement: r`For a specified ontology and dynamics, give a precise account of measurement records and their probabilities without an undefined system–observer cut; identify experimentally distinguishable predictions or explain why competing accounts are operationally equivalent.`,
    definition: r`**The measurement problem** is the tension between the linear, deterministic unitary evolution of the Schrödinger equation and the apparent occurrence of single, definite measurement outcomes with Born-rule probabilities. Unitary dynamics applied to system and apparatus produces an entangled superposition of pointer states, not one outcome; the standard “collapse” postulate patches this by hand, without specifying when or why it applies (the Heisenberg cut).

Classic statement: Bell, “Against measurement”, Physics World 3(8), 33–40 (1990), [CERN record](https://cds.cern.ch/record/203706).`,
    progress: r`- The problem is sharply framed and there are several mature research programmes, but they disagree even on what would count as a solution.
- Objective-collapse theories (GRW, CSL, Diósi–Penrose) modify the dynamics with stochastic nonlinear terms. They are experimentally testable and increasingly constrained by experiment (review: Bassi et al., [arXiv:1204.4325](https://arxiv.org/abs/1204.4325)).
- Everettian (many-worlds) interpretations keep unitarity and deny unique outcomes, relocating the problem to deriving probabilities (see below; formerly F2) and the preferred basis (F5).
- Bohmian mechanics adds definite particle positions with a guiding equation. Relational and QBist views reinterpret the state as information.
- Decoherence (F5) explains the suppression of interference and the preferred basis but not, by itself, the selection of a single outcome.`,
    residual: r`This remains a conceptual programme, not a single theorem awaiting a consensus proof. Unitarity and unique absolute outcomes cannot both be imposed as neutral requirements while also including Everett and objective-collapse models. For a chosen framework, specify its dynamics, ontology and record statistics; assess empirical tests of modified dynamics separately from interpretational comparisons of operationally equivalent theories.

The Everettian probability question from archived F2 belongs here: make branch ontology and rationality or probability assumptions explicit and determine what they establish, rather than asking for a derivation that wins universal assent. Axiomatic uniqueness of the Born rule is tracked under F3. Related: F3, F4, F5.`,
    refs: [
      { label: "Bassi, Lochan, Satin, Singh, Ulbricht, 'Models of wave-function collapse, underlying theories, and experimental tests', Rev. Mod. Phys. 85, 471 (2013)", url: "https://arxiv.org/abs/1204.4325" },
      { label: "Bell, 'Against measurement', Physics World 3(8), 33–40 (1990)", url: "https://cds.cern.ch/record/203706" },
    ] },

  { id: "F2", cat: "foundations", horizon: "conceptual",
    archive: { kind: "merged", targets: ["F3", "F1"], reason: "Axiomatic probability-rule uniqueness is part of reconstruction (F3); Everettian probability is part of the measurement programme (F1), not a separate consensus criterion." },
    title: "Born rule from explicit assumptions",
    statement: r`Derive the Born probability rule from a minimal set of clearly stated physical or decision-theoretic assumptions, without presupposing probabilistic or branch-weight structure equivalent to the conclusion.`,
    definition: r`**The Born rule**, that probabilities equal $|\langle\psi|\phi\rangle|^2$, is an independent postulate of standard quantum mechanics.

Whether it can be derived from more basic assumptions, especially within unitary-only (Everettian) quantum mechanics where probability is not obviously meaningful, is a long-debated question. Gleason, “Measures on the closed subspaces of a Hilbert space”, J. Math. Mech. 6, 885–893 (1957), [doi:10.1512/iumj.1957.6.56050](https://doi.org/10.1512/iumj.1957.6.56050).`,
    progress: r`- Gleason's theorem establishes Born probabilities for noncontextual probability measures on projections in dimension $\ge3$.
- Deutsch and Wallace derive branch weights within a stated Everettian decision-theoretic framework; envariance approaches use environment-assisted symmetries.
- Masanes, Galley and Müller derive measurement postulates from operational assumptions about outcome probabilities ([arXiv:1811.11060](https://arxiv.org/abs/1811.11060)).
- These are results under assumptions, not automatically circular because assumptions are present; their physical justification and logical independence are distinct questions.
- Ustun (August 2026) claims local uniqueness of the squared-modulus rule for complex-weighted morphisms under nonnegativity, polynomial restrictions, phase invariance, additivity and normalization ([arXiv:2608.05197](https://arxiv.org/abs/2608.05197v2)). This supplies another explicit assumption set, not an assumption-free derivation. The full text was read but the proof has not been independently audited; the paper itself leaves open whether these local rules are coherent under composition.`,
    residual: r`The question is merged: axiom independence and composition are compared under F3, and Everettian decision and probability questions under F1. Neither an undefined minimum number of assumptions nor community consensus supplies a sharp solved/open criterion.`,
    evidence: [{ kind: "preprint", role: "progress", summary: "Local squared-modulus uniqueness under explicit complex-weight, polynomiality and additivity assumptions; full text read, not an independent proof audit; coherence under composition is left open.", url: "https://arxiv.org/abs/2608.05197v2", date: "2026-08-23", version: "v2" }],
    refs: [
      { label: "Gleason, 'Measures on the closed subspaces of a Hilbert space', J. Math. Mech. 6, 885–893 (1957)", url: "https://doi.org/10.1512/iumj.1957.6.56050" },
      { label: "Masanes, Galley & Müller, 'The measurement postulates of quantum mechanics are operationally redundant', Nat. Commun. 10, 1361 (2019)", url: "https://arxiv.org/abs/1811.11060" },
      { label: "Ustun, 'Local Uniqueness of the Born Rule on Categories with Complex-Weighted Morphisms' (2026)", url: "https://arxiv.org/abs/2608.05197" },
    ] },

  { id: "F3", cat: "foundations", horizon: "conceptual", status: "improved",
    provenance: [
      { summary: "Das Bhowmik and Banik state that the problem was conceived and the principal results obtained by the authors, and that Claude (Anthropic) assisted with editing the prose, checking numerical thresholds and preparing the figure.", url: "https://arxiv.org/abs/2610.41444v1", version: "v1" },

      { summary: "Pompili and Budroni state that the results on deterministic reduction, convexity, single-copy sufficiency and polynomial approximations were obtained solely by the authors, that Claude Opus 5.5 assisted with the expansion around zero-capacity channels, exposed a mistake in an earlier version and highlighted the role of support-changing perturbations, and that LLMs were used for grammar; they report verifying all arguments and take responsibility for the final manuscript.", url: "https://arxiv.org/html/2610.32783v1", version: "v1" },
      { summary: "Pompili and Weilenmann state that the main ghostworld and finite-length results (Result 1) were developed by the authors, and report GPT-5.6 Sol assistance in the later study of closure under wirings: suggesting an initial version of Theorem 2, pointing to literature, providing an alternative proof that the ghostworld point is not quantum, checking calculations and correcting grammar. They report verifying all arguments.", url: "https://arxiv.org/abs/2610.06604v1", version: "v1" },
      { summary: "Hoffreumon and Woods report Grammarly for editing and ChatGPT 5.6 Sol for identifying and expanding overly terse passages.", url: "https://arxiv.org/html/2610.03644v1", version: "v1" },
      { summary: "Dmello et al. state that artificial intelligence was not used in any meaningful capacity in this work. This is their declaration, not an independent provenance audit.", url: "https://arxiv.org/html/2610.03694v1", version: "v1" },
      { summary: "Ramanathan's acknowledgments state that language-model tools were used during the preparation of the manuscript, to discuss the arguments, check algebra and edit the text; no tool is named.", url: "https://arxiv.org/abs/2610.08749v1", version: "v1" },
    ],
    reviewedAt: "2026-11-08",
    title: "Operational reconstruction of quantum theory",
    statement: r`For specified operational axioms and composite-system rules, establish their independence and reconstruction power, and determine which alternative theories are experimentally distinguishable; extend controlled reconstructions beyond their finite-dimensional assumptions.`,
    definition: r`**Operational reconstruction** asks which operational or information-theoretic axioms select the usual quantum predictions, and which assumptions rule out physically different alternatives rather than equivalent representations. Quantum theory's mathematical apparatus (Hilbert spaces, composition, completely positive maps and outcome probabilities) is usually postulated.

Reconstruction programmes derive finite-dimensional quantum theory under explicit operational axioms, starting with Hardy, “Quantum theory from five reasonable axioms” (2001), [arXiv:quant-ph/0101012](https://arxiv.org/abs/quant-ph/0101012). These are successful conditional reconstructions; there is no mathematically defined requirement that one axiom list be uniquely compelling.`,
    progress: r`- Hardy, Chiribella–D'Ariano–Perinotti ([arXiv:1011.6451](https://arxiv.org/abs/1011.6451)), Masanes–Müller and other programmes derive finite-dimensional quantum theory under explicit operational axioms. Generalized probabilistic theories organize alternatives and the role of composition.
- Renou et al. (2021) propose a network test distinguishing a particular real-Hilbert-space theory with specified composition and independent product-source assumptions ([Nature 600 (2021)](https://www.nature.com/articles/s41586-021-04160-4)). That paper is a theoretical proposal, not the experimental realization itself, and does not exclude every formulation using real numbers.
- Hoffreumon and Woods (19 March 2026 preprint) distinguish operational independence from product-state independence and prove that real quantum theory reproduces the statistics of quantum networks and sequential protocols whose sources are only operationally independent ([arXiv:2603.19208](https://arxiv.org/abs/2603.19208)). Barrios Hita et al. (PRL, 18 June 2026) reproduce multipartite quantum predictions using a modified real composite-system postulate ([PRL 136, 240202](https://journals.aps.org/prl/abstract/10.1103/4k13-sdjh)). Neither changes the conclusion of Renou's theorem under its original assumptions.
- Gachechiladze and Miklin (9 September 2026, v1) derive the Tsirelson–Landau–Masanes correlator criterion from generalized information causality using correlated inputs and optimized noisy communication, and exhibit macroscopically local correlations excluded by generalized information causality ([arXiv:2609.10508](https://arxiv.org/abs/2609.10508v1)). The four-correlator projection must be distinguished from the full behavior set with biased marginals: the paper explicitly leaves the full power of the principle, including its relation to almost-quantum correlations, unresolved. This advances a specified operational principle; it is not a reconstruction of all quantum states, transformations and composition rules.
- Dmello, Xu, Renou and Gross (2 October 2026, v1) characterize finite-dimensional quantum theory using specified two-body correlations plus stability under arbitrarily iterated teleportation ([arXiv:2610.03694](https://arxiv.org/abs/2610.03694v1)). The latter is a hierarchy with one condition per teleportation length; the result is not a finite experimental certification of all operational axioms.
- Hoffreumon and Woods' same-day clarification (2 October 2026, v1) argues that operational source independence does not entail product-state independence ([arXiv:2610.03644](https://arxiv.org/abs/2610.03644v1)). This is an attributed interpretation of the real-versus-complex debate; Renou et al.'s network separation retains its force under its stated product-source postulate.
- Pompili and Weilenmann (5 October 2026, v1) show that information causality, in all known formulations, admits post-quantum correlations already with three inputs and two outcomes per party ([arXiv:2610.06604](https://arxiv.org/abs/2610.06604v1)).
- Ramanathan (6 October 2026, v1) shows that the convex hull of no-signalling behaviors obeying a common-overlap no-disturbance-without-uncertainty condition equals the finite-dimensional quantum set when one party has two binary measurements, including the full simplest Bell scenario ([arXiv:2610.08749](https://arxiv.org/abs/2610.08749v1)). This characterizes quantum correlations in restricted scenarios, while the previous result shows a candidate principle failing to do so. Neither reconstructs states, transformations or composition rules.
- Cavendish (16 October 2026, v1) formalizes a no-signaling hypothesis between isolated systems and shows that, given the standard composite-experiment representation, the composability of textbook qubit spin measurements with experiments on an isolated second system, and two textbook marginal-probability claims, it is equivalent to the universality of the POVM framework, deriving most but not all of the probability-generating fragment of nonrelativistic quantum mechanics ([arXiv:2610.22823](https://arxiv.org/abs/2610.22823v1)).
- Pompili and Budroni (23 October 2026, v1) reduce the single-copy information-causality problem to an optimization with a deterministic reduction, show that adaptive multi-copy protocols are single-copy protocols applied to a wired effective behavior, so that excluding single-copy violations suffices for families closed under wirings, and show that second-order constraints around full-support zero-capacity channels characterize exactly macroscopic locality in the CHSH scenario ([arXiv:2610.32783](https://arxiv.org/abs/2610.32783v1)). With Cavendish's result, this sharpens which principles fix which fragment; neither is a full operational reconstruction.
- Das Bhowmik and Banik (30 October 2026, v1) show that almost-quantum correlations, the $1+AB$ level of the NPA hierarchy, violate information causality, and do so without bound ([arXiv:2610.41444](https://arxiv.org/abs/2610.41444v1)). Their violation uses rare zero-error certificates rather than biased guesses. Almost-quantum correlations satisfy several other proposed principles (nontrivial communication complexity, macroscopic locality, local orthogonality), so the result shows that information causality is not implied by these principles: it excludes correlations that all of them admit. It does not identify the quantum set.`,
    residual: r`Concrete remaining targets include independence within a fixed axiom vocabulary, compositional consistency of probability rules (the mathematical part of archived F2), infinite-dimensional reconstruction with explicit continuity assumptions, and tests separating operationally inequivalent alternatives. Distinguish alternative physics from merely changing scalar representation. Related: F1, F7, C10.`,
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
      { kind: "preprint", role: "progress", summary: "Operational source independence and product-state independence are distinguished; real quantum theory reproduces quantum network and sequential-protocol statistics under operational independence.", url: "https://arxiv.org/abs/2603.19208v1", date: "2026-03-19", version: "v1" },
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

The two assign different, seemingly incompatible descriptions, raising the question of whether measurement outcomes are absolute or observer-relative.

Reference: Frauchiger and Renner, “Quantum theory cannot consistently describe the use of itself”, Nat. Commun. 9, 3711 (2018), [arXiv:1604.07422](https://arxiv.org/abs/1604.07422).`,
    progress: r`**The Frauchiger–Renner argument.**

- Frauchiger and Renner extend Wigner's scenario to two friends in sealed laboratories and two superobservers, using Hardy's construction. The agents reason with three assumptions: (Q) an agent may apply quantum theory, and conclude with certainty from a Born probability equal to 1, even for systems that contain other agents; (C) an agent may adopt a certain conclusion of another agent who reasons with the same theory; (S) an agent certain of one outcome cannot also be certain of a different one. In the rounds where both superobservers find “ok”, which occur with probability $1/12$, the chain of inferences predicts the opposite result. The theorem states that any theory satisfying (Q), (C) and (S) yields contradictory statements in this experiment; it does not say which assumption fails ([Nat. Commun. 9, 3711 (2018)](https://doi.org/10.1038/s41467-018-05739-8); [arXiv:1604.07422v2](https://arxiv.org/abs/1604.07422v2)).
- The assignment of interpretations to the rejected assumption depends on the source. The authors' table places Copenhagen variants, consistent histories, QBism and relational quantum mechanics with (C), collapse theories with (Q), and many-worlds with (S). A later review co-authored by Renner places conventional Copenhagen and collapse theories with (Q), many-worlds with (C), and finds that no major interpretation rejects (S) ([Nurgalieva and Renner, Contemp. Phys. 61, 193 (2020)](https://doi.org/10.1080/00107514.2021.1880075)).

**Critiques of the argument.**

- The analyses read for this entry find no formal error in the deduction itself. They argue that it uses a premise that is unstated or unjustified, and two of them conclude that the theorem as stated is false. Several converge on one step: the friend who observed “tails” predicts the second superobserver's result by treating her own observation as a collapse, while the superobservers describe her laboratory unitarily.
- Sudbery ([Found. Phys. 47, 658 (2017)](https://doi.org/10.1007/s10701-017-0082-7), on the 2016 preprint) and Lazarovici and Hubert ([Sci. Rep. 9, 470 (2019)](https://doi.org/10.1038/s41598-018-37535-1)) give Bohmian single-world models that reproduce the quantum statistics and in which this step fails; Lazarovici and Hubert call the no-go theorem incorrect and note a tension of their account with a strong relativity principle. Baumann and Wolf attribute the contradiction to mixing the measurement-update rule, applied to one's own measurement, with the unitary relative-state description applied to others ([Quantum 2, 99 (2018)](https://doi.org/10.22331/q-2018-10-15-99)).
- Other analyses name the missing premise. Nurgalieva and del Rio add the assumption that every agent models the other agents' measurements as reversible unitary evolutions, so that the theorem excludes (Q), (C), (S) and this assumption together, and show that standard epistemic modal logic is unsound in this setting ([EPTCS 287, 267 (2019)](https://doi.org/10.4204/EPTCS.287.16)). Healey identifies an implicit insensitivity of counterfactuals to an isolated intervening measurement and shows that it conflicts with unitary universality ([Found. Phys. 48, 1568 (2018)](https://doi.org/10.1007/s10701-018-0216-6)). In consistent histories, Losada, Laura and Lombardi show that the four-time family of histories needed to chain the agents' statements violates the consistency condition ([Phys. Rev. A 100, 052114 (2019)](https://doi.org/10.1103/PhysRevA.100.052114)). Schmid, Yīng and Leifer argue that the argument also requires Born-rule constraints on correlations that no observer can access, even in principle, that its timing details are inessential, and that among six extended Wigner's-friend arguments Local Friendliness has the best-motivated assumptions ([arXiv:2308.16220](https://arxiv.org/abs/2308.16220), preprint).

**Responses from interpretations.**

- QBism ([DeBrota, Fuchs and Schack, Found. Phys. 50, 1859 (2020)](https://doi.org/10.1007/s10701-020-00369-x)) and relational quantum mechanics ([Di Biagio and Rovelli, Found. Phys. 51, 30 (2021)](https://doi.org/10.1007/s10701-021-00429-w)) accept that they reject (C). The relational account states that the friend's facts become usable by Wigner only once they are stable for him through decoherence, and that its treatment of an agent reasoning about a measurement performed on himself remains to be done.
- Bub argues that the contradiction requires a representational reading of the quantum state ([Stud. Hist. Phil. Mod. Phys. 72, 251 (2020)](https://doi.org/10.1016/j.shpsb.2018.03.002)). Kastner reads the argument as a reductio of unitary-only quantum theory and argues for physical collapse ([Found. Phys. 50, 441 (2020)](https://doi.org/10.1007/s10701-020-00336-6)). Żukowski and Markiewicz derive a Greenberger–Horne–Zeilinger-type contradiction against assigning outcomes to a friend's reversible premeasurement, a deflationary reading that others contest ([Phys. Rev. Lett. 126, 130402 (2021)](https://doi.org/10.1103/PhysRevLett.126.130402)).

**No-go theorems with weaker or different assumptions.**

- Brukner combines the scenario with a Bell test: universal quantum theory, locality and freedom of choice are incompatible with observer-independent facts ([Entropy 20, 350 (2018)](https://doi.org/10.3390/e20050350)).
- The Local Friendliness (LF) theorem of Bong et al. derives inequalities from absoluteness of observed events, no superdeterminism and locality, the last two together called local agency. Quantum mechanics violates them whenever a superobserver can perform arbitrary quantum operations on an observer and its environment. Because these assumptions are strictly weaker than Bell's, the theorem is stronger, and the inequalities are harder to violate: in their two-friend scenario the LF and Bell polytopes coincide when each superobserver has two settings, while with three binary settings the LF polytope has 932 facets and is strictly larger than the Bell polytope ([Nat. Phys. 16, 1199 (2020)](https://doi.org/10.1038/s41567-020-0990-x)). Cavalcanti and Wiseman argue that the quantum-causal-model response to Bell violations does not extend to LF violations ([Entropy 23, 925 (2021)](https://doi.org/10.3390/e23080925)).
- Variants remove further ingredients. Haddara and Cavalcanti give a probability-free version with a weaker possibilistic local agency ([New J. Phys. 25, 093028 (2023)](https://doi.org/10.1088/1367-2630/aceea3)); Ormrod and Barrett a Hardy-type version without measurement choices, inequalities or modal logic, at the cost of a frame-independence assumption ([arXiv:2209.03940](https://arxiv.org/abs/2209.03940), preprint); Allard Guérin et al. a single-friend, two-time theorem with no locality assumption ([Commun. Phys. 4, 93 (2021)](https://doi.org/10.1038/s42005-021-00589-1)); Walleghem et al. a single-system paradox from contextuality, without Bell-nonlocal correlations ([Phys. Rev. A 112, 022212 (2025)](https://doi.org/10.1103/n4hv-rlgj)); and Mukherjee and Hance a timelike analogue in which a time-symmetry assumption replaces locality ([Phys. Rev. Research 8, 023066 (2026)](https://doi.org/10.1103/1c6t-45g8)).
- The structure of LF correlations is now mapped. They always form a convex polytope, and Haddara and Cavalcanti classify exactly the multipartite scenarios in which it equals the Bell polytope ([Phys. Rev. A 111, 012206 (2025)](https://doi.org/10.1103/PhysRevA.111.012206)). Yīng et al. recast LF inequalities as monogamy relations and prove that no causal model, even with quantum, generalized-probabilistic or cyclic causes, explains their violation without fine-tuning or giving up relativistic causal assumptions ([Quantum 8, 1485 (2024)](https://doi.org/10.22331/q-2024-09-26-1485)).

**Experiments.**

- Proietti et al. violated Brukner's inequality with six photons, $S = 2.416 \pm 0.075$ against the bound 2, under fair sampling ([Sci. Adv. 5, eaaw9832 (2019)](https://doi.org/10.1126/sciadv.aaw9832)); Bong et al. note that this inequality tests an assumption stronger than absoluteness of observed events. The experiment of Bong et al. violated genuine LF inequalities with the path of a photon as each friend, as a proof of principle with randomized settings, space-like separation and detection efficiency left open.
- Larger friends have followed. Zeng, Labib and Russo report LF violations on a trapped-ion processor with a friend made of a 17-qubit Greenberger–Horne–Zeilinger register, without space-like separation and with the friend's preparation fidelity inferred from gate-error models ([Quantum 9, 1851 (2025)](https://doi.org/10.22331/q-2025-09-05-1851)). Laux and Cavalcanti replace the friend by small reversible agent circuits on a superconducting processor, in a one-friend scenario where LF and Bell inequalities coincide ([arXiv:2609.12527](https://arxiv.org/abs/2609.12527), preprint). Polino et al. extend the argument to an instrumental network with one-way communication and report $2.266 \pm 0.002$ against the bound 2, robust to the friend misreporting up to 13.1% of the time, with the detection loophole open ([arXiv:2611.17431](https://arxiv.org/abs/2611.17431), preprint).
- The authors of these experiments acknowledge that a photon or a few qubits may not count as an observer. Wiseman, Cavalcanti and Rieffel replace the notion of observer by assumptions about communicable thoughts and propose a friend that is a human-level artificial intelligence running reversibly on a quantum computer. They estimate that current fault-tolerance methods would need about $10^{19}$ logical qubits and roughly 600 years per one-second thought ([Quantum 7, 1112 (2023)](https://doi.org/10.22331/q-2023-09-14-1112)).

**Constructive frameworks.**

- Positive frameworks also exist. Vilasini and Woods formulate extended Wigner's-friend scenarios as quantum circuits, with explicit conditioning on channels and rules for logically and causally consistent agent predictions without absolute measurement events ([Phys. Rev. X 16, 031062 (2026)](https://doi.org/10.1103/nqbv-6qgr), published 9 September 2026; [arXiv:2209.09281](https://arxiv.org/abs/2209.09281), v1 September 2022, v3 October 2026). This framework is not a consensus interpretation or an unrestricted resolution of F1, but it shows that more than no-go theorems are available.`,
    residual: r`The frontier is experimental and assumption-specific. Experimentally: determine which coherently controllable systems can serve as friends whose observations are plausibly absolute events, beyond the photon paths, qubit registers and small agent circuits used so far; perform an LF test with space-like separation, independent settings and the detection loophole closed; and quantify how imperfect reversal and unreliable reports by the friend shrink the region of LF violation. Theoretically: state as explicit, comparable assumptions the premises left implicit in Frauchiger–Renner-type arguments (unitary modelling of other agents' measurements, Born-rule constraints on inaccessible correlations, timing or commutation irrelevance), determine which interpretations violate each, and give consistent rules for agents reasoning about measurements that will be performed on themselves. Distinguish actual observation protocols from counterfactual inferences about erased records. Related: F1, F5.`,
    evidence: [{ kind: "published", role: "progress", summary: "A constructive circuit framework permits logically and causally consistent agent reasoning without absolute events; Phys. Rev. X 16, 031062 (2026). Interpretation-independent experimental discrimination is a separate task.", url: "https://doi.org/10.1103/nqbv-6qgr", date: "2026-09-09" }],
    refs: [
      { label: "Frauchiger & Renner, 'Quantum theory cannot consistently describe the use of itself', Nat. Commun. 9, 3711 (2018)", url: "https://arxiv.org/abs/1604.07422" },
      { label: "Bong, Utreras-Alarcón, Ghafari, Liang, Tischler, Cavalcanti, Pryde, Wiseman, 'A strong no-go theorem on the Wigner's friend paradox', Nat. Phys. 16 (2020)", url: "https://arxiv.org/abs/1907.05607" },
      { label: "Vilasini & Woods, 'General Quantum Circuit Framework for Extended Wigner's Friend Scenarios: Logically and Causally Consistent Reasoning without Absolute Measurement Events', Phys. Rev. X 16, 031062 (2026)", url: "https://doi.org/10.1103/nqbv-6qgr" },
      { label: "Sudbery, 'Single-World Theory of the Extended Wigner's Friend Experiment', Found. Phys. 47, 658 (2017)", url: "https://arxiv.org/abs/1608.05873" },
      { label: "Healey, 'Quantum Theory and the Limits of Objectivity', Found. Phys. 48, 1568 (2018)", url: "https://arxiv.org/abs/1807.00421" },
      { label: "Baumann & Wolf, 'On Formalisms and Interpretations', Quantum 2, 99 (2018)", url: "https://doi.org/10.22331/q-2018-10-15-99" },
      { label: "Brukner, 'A no-go theorem for observer-independent facts', Entropy 20, 350 (2018)", url: "https://arxiv.org/abs/1804.00749" },
      { label: "Lazarovici & Hubert, 'How Quantum Mechanics can consistently describe the use of itself', Sci. Rep. 9, 470 (2019)", url: "https://doi.org/10.1038/s41598-018-37535-1" },
      { label: "Nurgalieva & del Rio, 'Inadequacy of Modal Logic in Quantum Settings', EPTCS 287, 267 (2019)", url: "https://arxiv.org/abs/1804.01106" },
      { label: "Losada, Laura & Lombardi, 'Frauchiger-Renner argument and quantum histories', Phys. Rev. A 100, 052114 (2019)", url: "https://arxiv.org/abs/1907.10095" },
      { label: "Proietti, Pickston, Graffitti, Barrow, Kundys, Branciard, Ringbauer, Fedrizzi, 'Experimental test of local observer-independence', Sci. Adv. 5, eaaw9832 (2019)", url: "https://arxiv.org/abs/1902.05080" },
      { label: "Bub, 'In defense of a \"single-world\" interpretation of quantum mechanics', Stud. Hist. Phil. Mod. Phys. 72, 251 (2020)", url: "https://arxiv.org/abs/1804.03267" },
      { label: "DeBrota, Fuchs & Schack, 'Respecting One's Fellow: QBism's Analysis of Wigner's Friend', Found. Phys. 50, 1859 (2020)", url: "https://arxiv.org/abs/2008.03572" },
      { label: "Kastner, 'Unitary-Only Quantum Theory Cannot Consistently Describe the Use of Itself: On the Frauchiger–Renner Paradox', Found. Phys. 50, 441 (2020)", url: "https://arxiv.org/abs/2002.01456" },
      { label: "Nurgalieva & Renner, 'Testing quantum theory with thought experiments', Contemp. Phys. 61, 193 (2020)", url: "https://arxiv.org/abs/2106.05314" },
      { label: "Di Biagio & Rovelli, 'Stable Facts, Relative Facts', Found. Phys. 51, 30 (2021)", url: "https://doi.org/10.1007/s10701-021-00429-w" },
      { label: "Żukowski & Markiewicz, 'Physics and Metaphysics of Wigner's Friends: Even Performed Premeasurements Have No Results', Phys. Rev. Lett. 126, 130402 (2021)", url: "https://arxiv.org/abs/2003.07464" },
      { label: "Allard Guérin, Baumann, Del Santo & Brukner, 'A no-go theorem for the persistent reality of Wigner's friend's perception', Commun. Phys. 4, 93 (2021)", url: "https://doi.org/10.1038/s42005-021-00589-1" },
      { label: "Cavalcanti & Wiseman, 'Implications of Local Friendliness violation for quantum causality', Entropy 23, 925 (2021)", url: "https://doi.org/10.3390/e23080925" },
      { label: "Ormrod & Barrett, 'A no-go theorem for absolute observed events without inequalities or modal logic' (2022), preprint", url: "https://arxiv.org/abs/2209.03940" },
      { label: "Haddara & Cavalcanti, 'A possibilistic no-go theorem on the Wigner's friend paradox', New J. Phys. 25, 093028 (2023)", url: "https://doi.org/10.1088/1367-2630/aceea3" },
      { label: "Wiseman, Cavalcanti & Rieffel, 'A \"thoughtful\" Local Friendliness no-go theorem: a prospective experiment with new assumptions to suit', Quantum 7, 1112 (2023)", url: "https://doi.org/10.22331/q-2023-09-14-1112" },
      { label: "Schmid, Yīng & Leifer, 'A review and analysis of six extended Wigner's friend arguments' (2023, v3 2024), preprint", url: "https://arxiv.org/abs/2308.16220" },
      { label: "Yīng, Ansanelli, Di Biagio, Wolfe, Schmid & Cavalcanti, 'Relating Wigner's Friend Scenarios to Nonclassical Causal Compatibility, Monogamy Relations, and Fine Tuning', Quantum 8, 1485 (2024)", url: "https://doi.org/10.22331/q-2024-09-26-1485" },
      { label: "Haddara & Cavalcanti, 'Local Friendliness Polytopes In Multipartite Scenarios', Phys. Rev. A 111, 012206 (2025)", url: "https://arxiv.org/abs/2407.20346" },
      { label: "Walleghem, Wagner, Yīng & Schmid, 'Extended Wigner's friend paradoxes do not require nonlocal correlations', Phys. Rev. A 112, 022212 (2025)", url: "https://arxiv.org/abs/2310.06976" },
      { label: "Zeng, Labib & Russo, 'Towards violations of Local Friendliness with quantum computers', Quantum 9, 1851 (2025)", url: "https://doi.org/10.22331/q-2025-09-05-1851" },
      { label: "Mukherjee & Hance, 'Limits of Absoluteness of Observed Events in Timelike Scenarios: A No-Go Theorem', Phys. Rev. Research 8, 023066 (2026)", url: "https://arxiv.org/abs/2510.26562" },
      { label: "Laux & Cavalcanti, 'Extended Wigner's Friend Scenarios with Agent-like Observers on Quantum Computers' (2026), preprint", url: "https://arxiv.org/abs/2609.12527v1" },
      { label: "Polino, Lelli, Datar, Haddara, Poderini, Milani, Slussarenko, Wiseman, Tischler, Cavalcanti & Sciarrino, 'Quantum violation of Causal Friendliness in the instrumental scenario' (2026), preprint", url: "https://arxiv.org/abs/2611.17431v1" },
    ],
    provenance: [
      { summary: "Polino et al. report that one author used Claude (Sonnet 5) to help with algebra and to suggest the solution of their Eq. (H21), which that author verified.", url: "https://arxiv.org/abs/2611.17431v1", version: "v1" },
    ],
    reviewedAt: "2026-11-21" },

  { id: "F5", cat: "foundations", horizon: "conceptual",
    title: "Formation and lifetime of objective classical records",
    statement: r`For a specified system–environment dynamics and fragment-access model, bound the formation time, redundancy, disturbance and lifetime of independently accessible classical records, using an explicit objectivity criterion.`,
    definition: r`**Objective classical records** are stable records that multiple observers can access independently and agree on, according to a specified operational criterion. The dynamical question is how a preferred (pointer) basis and redundant, stable records emerge under system–environment interactions. This does not by itself select a unique outcome in the measurement problem (F1).

Standard reference: Zurek, “Decoherence, einselection, and the quantum origins of the classical”, Rev. Mod. Phys. 75, 715 (2003), [arXiv:quant-ph/0105127](https://arxiv.org/abs/quant-ph/0105127).`,
    progress: r`- Decoherence theory (Zurek, Joos–Zeh) explains how environmental monitoring suppresses interference between pointer states and selects robust states via the predictability sieve. The basis and timescales depend on the dynamics and coupling.
- Quantum Darwinism (Zurek, [arXiv:0903.5082](https://arxiv.org/abs/0903.5082)) adds that classical objectivity arises because information about pointer states is redundantly imprinted on many environment fragments, so many observers independently access the same facts. This redundancy is quantified by mutual-information plateaus and exhibited in spin-environment and quantum Brownian motion models.
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
    definition: r`**The classical limit** asks how and when Newtonian or Hamiltonian mechanics emerges from quantum dynamics as $\hbar\to0$ or for macroscopic systems. The limit is singular; in chaotic systems, the time over which correspondence can be controlled depends on the initial states, observables and error criterion.

Reference: Zurek and Paz, “Decoherence, chaos, and the second law”, Phys. Rev. Lett. 72, 2508 (1994), [arXiv:gr-qc/9402006](https://arxiv.org/abs/gr-qc/9402006), which identifies a logarithmic breakdown time of quantum–classical correspondence in chaotic systems and the role of environmental diffusion in restoring it.`,
    progress: r`- Egorov-type results control semiclassical observable evolution under stated smoothness and time assumptions; coherent-state and mean-field limits also have rigorous regimes.
- In chaotic dynamics, derivative growth often limits naive wave-packet or operator estimates to logarithmic Ehrenfest times. This is not a universal prohibition on every coarse observable having longer correspondence, nor a theorem that decoherence is always necessary.`,
    residual: r`Selected child questions ask for errors beyond established Ehrenfest windows for specified coarse observables; for joint noise and semiclassical limits with quantified decoherence; and for macroscopic mean-field or hydrodynamic limits with size-dependent times. State the metric, initial-state class and order of limits. These distinct tasks cannot be certified by a blanket claim of a universal classical-limit theorem. Related: F5, M8 (quantum unique ergodicity), M9 (spectral statistics), B5 (thermalization).`,
    relations: [{ id: "F5", type: "related" }, { id: "M8", type: "related" }, { id: "M9", type: "related" }, { id: "B5", type: "related" }],
    refs: [
      { label: "Zurek & Paz, 'Decoherence, chaos, and the second law', PRL 72, 2508 (1994)", url: "https://arxiv.org/abs/gr-qc/9402006" },
    ] },

  { id: "F7", cat: "foundations", horizon: "conceptual",
    title: "Inferring subsystem structure from accessible dynamics",
    statement: r`Given limited Hamiltonian and observable data, characterize existence, uniqueness and stability of an approximately local tensor-product structure, modulo stated local-unitary and subsystem-permutation equivalences.`,
    definition: r`**Subsystem structure** in finite-dimensional many-body quantum mechanics is a chosen tensor-product structure, on which entanglement and locality depend; observable algebras provide a more general formulation. The same Hilbert space can admit inequivalent subsystem choices.

The inverse question is which choices are identifiable from accessible observables and dynamics, rather than from an assumed preferred factorization. Reference: Zanardi, Lidar and Lloyd, “Quantum tensor product structures are observable-induced”, Phys. Rev. Lett. 92, 060402 (2004), [arXiv:quant-ph/0308043](https://arxiv.org/abs/quant-ph/0308043).`,
    progress: r`- A tensor-product structure is not determined by the Hilbert space alone. Zanardi–Lidar–Lloyd construct subsystem structures from suitable accessible observable algebras. Entanglement is relative to that structure: a state can be entangled with respect to one factorization and product with respect to another.
- Locality of the Hamiltonian can constrain candidate factorizations, and there are proposals to infer subsystem structure from it (Cotler, Penington and Ranard, [arXiv:1702.06142](https://arxiv.org/abs/1702.06142); Carroll and Singh, “Mad-dog Everettianism”). This does not guarantee a unique factorization for an arbitrary Hamiltonian.
- In algebraic QFT the analogue is the choice of local von Neumann algebras (QF8, QF9).
- Once accessible commuting observable algebras are specified, observable-induced subsystems already give a principled construction. A uniquely selected factorization need not exist for arbitrary Hamiltonians, and an observer-independent canonical split is not assumed here.`,
    residual: r`The remaining inverse problem is to state what partial operational data suffice to recover an approximately local structure, identify ambiguities, and bound sensitivity to experimental or model error. In field and gauge theories, local algebras need not correspond to finite-dimensional tensor factors; QF8 and QF9 track that separate setting. Related: QF8, QF9 (archived E15, entanglement of identical particles, is merged here).`,
    refs: [
      { label: "Zanardi, Lidar, Lloyd, 'Quantum tensor product structures are observable-induced', PRL 92, 060402 (2004)", url: "https://arxiv.org/abs/quant-ph/0308043" },
      { label: "Cotler, Penington, Ranard, 'Locality from the spectrum', Comm. Math. Phys. 368 (2019)", url: "https://arxiv.org/abs/1702.06142" },
    ] },

  { id: "F8", cat: "foundations", horizon: "conceptual", status: "improved",
    reviewedAt: "2026-11-20",
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
- Valente, Ferradini, Giacomini and Kabel (22 October 2026, v1) define a mutual information across frame perspectives for overlapping subsystem algebras, correcting an overcount in the chain law and proving subadditivity ([arXiv:2610.31729](https://arxiv.org/abs/2610.31729v1)). Valente et al. treat ideal frames; Chataignier and Smith allow general coherent-state (possibly overcomplete) frames described by covariant POVMs. Both give exact relational structure; neither bounds errors for finite-resource frames or repeated use.
- Fewster and Loveridge (16 November 2026) give quantitative locality and recovery results for nonideal Minkowski-translation frames obeying the spectrum condition ([arXiv:2611.21768v1](https://arxiv.org/abs/2611.21768v1)). For Schwartz localization densities, finite almost-local Kraus operations have disturbance $O(L^{-N})$ for every $N$ at causal separation $L$. Proposition IV.8 bounds observable-recovery error using frame-translation distinguishability. The energy–resolution obstruction excludes ideal sharply localized frames; repeated use and general operational causality remain open.`,
    residual: r`The frontier is quantitative: fix a group (for example time translations or spatial rotations), reference-state energy or size, admissible couplings and operational error; derive composition and repeated-use bounds. For relativistic constraints, state the constraint algebra and clock–system interaction before seeking extensions. Existing compositional constructions are the baseline, not an absent formalism. Related: F7, O7.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Fewster–Loveridge quantify nonideal Minkowski-translation frames under the spectrum condition: for Schwartz localization densities, almost-local observables and finite almost-local Kraus operations have disturbance O(L^-N) for every N at causal separation L. Proposition IV.8 bounds observable-recovery error by frame-translation distinguishability. Repeated-use and general operational causality remain open.", url: "https://arxiv.org/abs/2611.21768v1", date: "2026-11-16", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Unitary change of frame under interactions, within group-averaged Dirac quantization for unimodular groups, with an interacting-clock Schrödinger equation; exact construction, no finite-resource error bounds.", url: "https://arxiv.org/abs/2610.28732v1", date: "2026-10-20", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Mutual information across quantum-reference-frame perspectives for overlapping subsystem algebras, with a modified chain law and subadditivity; structural, not a resource bound.", url: "https://arxiv.org/abs/2610.31729v1", date: "2026-10-22", version: "v1" },
      { kind: "published", role: "progress", summary: "Equivalence of perspective-neutral, algebraic and effective frame descriptions in the paper's ideal-frame and constraint setting.", url: "https://doi.org/10.22331/q-2026-08-20-2196", date: "2026-08-20" },
      { kind: "preprint", role: "progress", summary: "A compositional framework specifies which subsystems and states can consistently be appended; not a universal finite-resource error theorem.", url: "https://arxiv.org/abs/2608.23698v1", date: "2026-08-24", version: "v1" },
      { kind: "preprint", role: "progress", summary: "A Hilbert-module formalism for classical and quantum reference frames supplies additional algebraic structure.", url: "https://arxiv.org/abs/2609.01894v1", date: "2026-09-01", version: "v1" },
    ],
    provenance: [{ summary: "De Vuyst, Höhn and Tsobanjan's contribution statement, in the arXiv version published in Quantum (v4), states that no AI tools were used in the paper's creation. This is an author statement and does not determine the mathematical status.", url: "https://arxiv.org/abs/2507.14131v4", version: "v4" },
      { summary: "Valente, Ferradini, Giacomini and Kabel acknowledge Claude Sonnet 5.5 and Opus 5–5.5 assistance in developing and streamlining some proofs for arbitrary finite-dimensional symmetry groups.", url: "https://arxiv.org/html/2610.31729v1", version: "v1" }],
    refs: [
      { label: "Fewster & Loveridge, 'Quantum Reference Frames, Locality, and Microcausality in Quantum Field Theory' (2026 preprint, v1)", url: "https://arxiv.org/abs/2611.21768v1" },
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
    reviewedAt: "2026-11-12",
    title: "Physical boundary of indefinite causal order",
    statement: r`Determine how the physically realizable process class changes when specified closed-laboratory, spacetime-localization or background-causality assumptions are relaxed, and give operational implementations or obstructions for the resulting models.`,
    definition: r`**Indefinite causal order** refers to processes in which operations have no fixed causal order between them. The process-matrix framework generalizes quantum theory to allow such processes; some are causally nonseparable, meaning that they cannot be explained by any definite (even probabilistic) ordering of events. The question is which of them are physically realizable.

Reference: Oreshkov, Costa and Brukner, “Quantum correlations with no causal order”, Nat. Commun. 3, 1092 (2012), [arXiv:1105.4464](https://arxiv.org/abs/1105.4464).`,
    progress: r`- Causal witnesses detect nonseparability ([arXiv:1506.03776](https://arxiv.org/abs/1506.03776)), and implementations of the quantum switch realize coherent control of order. Nonseparability and violation of a causal inequality are different properties.
- Vilasini and Renner's published spacetime constraints distinguish sharply localized laboratories from delocalized implementations; the physical boundary depends on the laboratory and spacetime model ([arXiv:2408.13387](https://arxiv.org/abs/2408.13387)).
- Salzger and Vilasini (May 2026 preprint) show that, in a classical acyclic background spacetime and the causal-box framework, processes satisfying fine-grained Acting Once and Local Order closed-laboratory conditions are behaviorally equivalent to quantum-controlled-order circuits (QC-QCs) ([arXiv:2605.08351](https://arxiv.org/abs/2605.08351)). This is a characterization under explicit assumptions, not a no-go theorem for all indefinite causal order or a characterization of quantum gravity.
- Mothe, Abbott and Branciard separate dynamical from influenceable causal order, introduce non-influenceable causal orders (equivalent to mixtures of fixed orders for at most three parties, strictly larger from four parties on) and classify the corresponding circuits with classical or quantum control of order (preprint July 2025, v3 August 2026) ([arXiv:2507.07992](https://arxiv.org/abs/2507.07992)).
- Wei and Pang (16 September 2026, v1) and Wechs, Abbott and Branciard (17 September 2026, v1) give two teleportation-based constructions identifying extensibly causally separable multipartite processes with circuits whose order is classically controlled (QC-CC) ([arXiv:2609.18559](https://arxiv.org/abs/2609.18559v1), [arXiv:2609.20774](https://arxiv.org/abs/2609.20774v1)). The ancillary-extension convention is essential; the latter paper uses the corresponding strengthened notion of causal separability. This characterizes the causally separable class, not the realizability of every causally nonseparable process. It is separate from the QC-QC closed-laboratory theorem above.
- Cheng (10 November 2026, v1) proves that no circuit with classically controlled causal order (QC-CC) can exactly and deterministically simulate the quantum switch on arbitrary input channels, with any finite number of calls to them; this holds already for qubit channels and extends to the complete $r$-switch ([arXiv:2611.10615](https://arxiv.org/abs/2611.10615v1)). For exact deterministic simulation, it strengthens the exponential query separation of Bavaresco et al. (one input called once) and Goldin's extension to repeated calls to both inputs, which also covers approximate simulation, to an impossibility with any finite number of calls. It is a sharper separation between indefinite and classically controlled order, not a statement about physical realizability.`,
    residual: r`Remaining questions require a specified change of model: relax a closed-lab condition, allow different localization or continuous relativistic implementations, or specify a nonclassical background. Characterize the new achievable processes and observable signatures; the characterized closed-lab regime does not stay open merely by omitting its assumptions. Related: F10.

A concrete subproblem from the IQOQI Vienna list, motivated by the purification postulate of Araújo, Feix, Navascués and Brukner: is every finite-dimensional extensibly causal process matrix purifiable ([IQOQI problem 43](https://oqp.iqoqi.oeaw.ac.at/are-all-extensibly-causal-processes-purifiable))? In the bipartite four-port setting with trivial global past and future, every purifiable process is causally separable (Yokojima, Quintino, Soeda and Murao, [arXiv:2003.05682](https://arxiv.org/abs/2003.05682); Barrett, Lorenz and Oreshkov, [arXiv:2002.12157](https://arxiv.org/abs/2002.12157)), hence extensibly causal; Araújo, Feix, Navascués and Brukner proposed a noisy test process ([arXiv:1611.08535](https://arxiv.org/abs/1611.08535)). Turturean and Bao (PSI, October 2026; GitHub, not peer reviewed) claim a negative answer: an explicit four-qubit bipartite process that is extensibly causal but not causally separable, hence not purifiable. According to the authors, this also confirms a conjecture of Feix, Araújo and Brukner ([arXiv:1604.03391](https://arxiv.org/abs/1604.03391)) that causally nonseparable bipartite processes can remain causal under all entangled extensions. In this same four-port setting they also claim that every extensibly causal process is purifiable exactly when one of the four port dimensions is one. Both statements are formalized in Lean 4 according to PSI ([paper](${PSI}oqp43-extensible-causality/paper/oqp43-extensible-causality.pdf)). If the claim holds, purifiability is strictly stronger than extensible causality in this setting; the broader realizability question and the multipartite case are not settled.`,
    evidence: [
      { kind: "preprint", role: "progress", lean: true, summary: "Claimed negative answer to the purifiability residual: an explicit four-qubit process that is extensibly causal but not purifiable, with a two-party dimension dichotomy. PSI GitHub paper with a Lean 4 formalization of the counterexample; not peer reviewed. The broader realizability question of F9 is not settled.", url: `${PSI}oqp43-extensible-causality/paper/oqp43-extensible-causality.pdf`, date: "2026-10-23", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Claimed operational equivalence of extensible causal separability and QC-CC, including global past/future systems.", url: "https://arxiv.org/abs/2609.18559v1", date: "2026-09-16", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Concurrent characterization using coherent teleportation and the ancilla-stable multipartite causal-separability definition; not a theorem for all nonseparable processes.", url: "https://arxiv.org/abs/2609.20774v1", date: "2026-09-17", version: "v1" },
      { kind: "preprint", role: "progress", summary: "QC-QC characterization in classical acyclic spacetime with causal boxes and fine-grained Acting Once/Local Order closed-lab conditions; not an unrestricted quantum-gravity or ICO no-go result.", url: "https://arxiv.org/abs/2605.08351v1", date: "2026-05-08", version: "v1" },
      { kind: "preprint", role: "progress", summary: "No QC-CC circuit exactly and deterministically simulates the quantum switch (or the complete r-switch) on arbitrary channels with finitely many calls, already for qubits.", url: "https://arxiv.org/abs/2611.10615v1", date: "2026-11-10", version: "v1" }],
    provenance: [
      { summary: "PSI states that the mathematics of the four-qubit counterexample was developed by PSI researchers working with OpenAI's GPT-6-Astra and Anthropic's Claude Fable 5.1, Claude Opus 5 and Claude Opus 5.5 in automated research workflows, and that the Lean formalization was written by AI agents (Claude Fable 5.1 and Claude Opus 5.5 in Claude Code, and GPT-6-Astra in Codex) under PSI's direction. David Turturean and Ning Bao are named as responsible for the correctness of the paper. This is PSI's account.", url: `${PSI}oqp43-extensible-causality/README.md` },
      { summary: "Wechs, Abbott and Branciard state that AI models were used to obtain an initial proof of Theorem 4: OpenAI's GPT-5.6 Sol (written 'GTP-5.6-sol' in the paper) produced a proof that identified the coherent teleportation technique and helped simplify it; the authors further simplified and clarified the argument, wrote the manuscript themselves and take full responsibility for it.", url: "https://arxiv.org/html/2609.20774v1", version: "v1" },
      { summary: "Cheng states that the research was carried out by the human author and thanks ChatGPT 6 Astra for help checking the proof derivations, searching the literature and polishing the writing of the results section.", url: "https://arxiv.org/abs/2611.10615v1", version: "v1" },
    ],
    refs: [
      { label: "Turturean & Bao, 'An extensibly causal quantum process with no purification' (PSI paper, repository snapshot of 23 October 2026; GitHub, not peer reviewed)", url: `${PSI}oqp43-extensible-causality/paper/oqp43-extensible-causality.pdf` },
      { label: "PSI, Lean 4 formalization of the four-qubit counterexample (statement map in docs/FIDELITY.md)", url: `${PSI}oqp43-extensible-causality/lean/docs/FIDELITY.md` },
      { label: "Wei & Pang, 'Extensibly Causally Separable Processes Admit Realizations as Quantum Circuits with Classical Control of Causal Order' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.18559v1" },
      { label: "Wechs, Abbott & Branciard, 'All causally separable quantum processes are quantum circuits with classical control of causal order' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.20774v1" },
      { label: "Oreshkov, Costa, Brukner, 'Quantum correlations with no causal order', Nat. Commun. 3, 1092 (2012)", url: "https://arxiv.org/abs/1105.4464" },
      { label: "Cheng, 'Simulating the quantum switch with quantum circuits is impossible' (2026 preprint, v1)", url: "https://arxiv.org/abs/2611.10615v1" },
      { label: "Araújo, Branciard, Costa, Feix, Giarmatzi & Brukner, 'Witnessing causal nonseparability', New J. Phys. 17, 102001 (2015)", url: "https://arxiv.org/abs/1506.03776" },
      { label: "Araújo, Feix, Navascués & Brukner, 'A purification postulate for quantum mechanics with indefinite causal order', Quantum 1, 10 (2017)", url: "https://arxiv.org/abs/1611.08535" },
      { label: "Vilasini & Renner, 'Fundamental Limits for Realizing Quantum Processes in Spacetime', Phys. Rev. Lett. 133, 080201 (2024)", url: "https://arxiv.org/abs/2408.13387" },
      { label: "Yokojima, Quintino, Soeda & Murao, 'Consequences of preserving reversibility in quantum superchannels', Quantum 5, 441 (2021)", url: "https://arxiv.org/abs/2003.05682" },
      { label: "Barrett, Lorenz & Oreshkov, 'Cyclic quantum causal models', Nat. Commun. 12, 885 (2021)", url: "https://arxiv.org/abs/2002.12157" },
      { label: "Feix, Araújo & Brukner, 'Causally nonseparable processes admitting a causal model', New J. Phys. 18, 083040 (2016)", url: "https://arxiv.org/abs/1604.03391" },
      { label: "Salzger & Vilasini, 'Higher-order quantum processes respecting closed labs in a spacetime have quantum controlled causal order' (2026), preprint", url: "https://arxiv.org/abs/2605.08351" },
      { label: "Mothe, Abbott & Branciard, 'Correlations and quantum circuits with dynamical causal order' (2025 preprint, v3 2026)", url: "https://arxiv.org/abs/2507.07992" },
    ] },

  { id: "F10", cat: "foundations", horizon: "conceptual",
    title: "Identifiability and learning with quantum latent causes",
    statement: r`For a specified quantum causal graph with hidden systems and restricted interventions, characterize which causal effects are identifiable and derive complete inference procedures and sample-complexity bounds, or prove observational indistinguishability.`,
    definition: r`**Quantum causal inference** extends classical causal-inference theory (Pearl; Spirtes–Glymour–Scheines), which uses directed acyclic graphs, interventions and the do-calculus to extract cause–effect relations from correlations. A quantum version must handle noncommuting observables, latent quantum common causes and possibly indefinite causal order, while still licensing identifiable causal conclusions.

Reference: Allen, Barrett, Horsman, Lee and Spekkens, “Quantum common causes and quantum causal models”, Phys. Rev. X 7, 031021 (2017), [arXiv:1609.09487](https://arxiv.org/abs/1609.09487).`,
    progress: r`- Quantum causal models on DAGs have been formulated (Costa–Shrapnel; Allen–Barrett–Horsman–Lee–Spekkens), with a quantum Markov condition. They describe quantum common causes; they do not restore a local classical common-cause explanation of Bell-violating correlations or invalidate Bell's theorem.
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
- The Page–Wootters mechanism treats time relationally: a static, constraint-satisfying global state yields Schrödinger evolution of a subsystem relative to a “clock” subsystem, reconciling timelessness (as in the Wheeler–DeWitt equation of quantum gravity) with dynamics. Giovannetti, Lloyd and Maccone revised the mechanism with explicit measurement models, recovering propagators and the statistics of sequential measurements ([Phys. Rev. D 92, 045033 (2015)](https://arxiv.org/abs/1504.04215)); Moreva et al. gave an experimental illustration.
- Finite clock energy imposes fundamental accuracy limits and backreaction, connecting to autonomous clocks (O7) and quantum reference frames (F8).
- Published baseline: Höhn, Smith and Lock's trinity (2021) unifies relational Dirac observables, Page–Wootters dynamics and reduced Heisenberg descriptions with covariant clock POVMs, including nonideal clocks within its assumptions ([Phys. Rev. D 104, 066001](https://journals.aps.org/prd/abstract/10.1103/PhysRevD.104.066001)). The basic relational unification is therefore not absent.`,
    residual: r`This historical umbrella is merged. F8 tracks extensions with specified interactions or constraints and quantitative frame-change error; O7 tracks finite-energy accuracy, control cost and repeated-use degradation. Neither merge claims that arbitrary clock backreaction is solved.`,
    refs: [
      { label: "Giovannetti, Lloyd, Maccone, 'Quantum time', PRD 92, 045033 (2015)", url: "https://arxiv.org/abs/1504.04215" },
      { label: "Höhn, Smith & Lock, 'Trinity of relational quantum dynamics', PRD 104, 066001 (2021)", url: "https://journals.aps.org/prd/abstract/10.1103/PhysRevD.104.066001" },
    ] },

  { id: "F12", cat: "foundations", horizon: "sharp", status: "improved",
    statusNote: "Scope caveat: Al-Safi–Richens construct non-trivial reversible transformations for reducible local spaces. Whether these furnish a counterexample to the broad embeddability statement, with the exact state-and-effect embedding required here, needs separate assessment; no negative resolution is asserted.",
    reviewedAt: "2026-11-08",
    relations: [{ id: "F3", type: "parent" }, { id: "F7", type: "related" }],
    evidence: [
      { kind: "published", role: "progress", summary: "For any number of $d$-dimensional Bloch-ball systems with $d\\ne3$, tomographic locality and a closed connected group of reversible gates leave only single-system gates, so no correlating reversible transformation exists. Settles the conjecture for Bloch-ball local systems with continuous reversible dynamics.", url: "https://doi.org/10.1038/s41534-018-0123-x", date: "2019-01-22" },
      { kind: "published", role: "progress", summary: "Bipartite composites of two $d$-dimensional Bloch balls with continuous reversible dynamics and tomographic locality: only the two-qubit quantum state space ($d=3$) contains entangled states or admits interacting dynamics.", url: "https://doi.org/10.1063/1.4903510", date: "2014-12-16" },
      { kind: "published", role: "progress", summary: "In boxworld (all non-signalling correlations), reversible dynamics of non-classical systems (at least two inputs each) are generated by local operations and permutations of systems only, for any number of parties, inputs and outputs.", url: "https://doi.org/10.1088/1751-8113/47/32/325303", date: "2014-07-29" },
      { kind: "preprint", role: "progress", summary: "In the simplest bipartite boxworld, relaxing reversibility to pure-state preservation permits maps sending every product pure state to a PR box, with a complete classification of such entangling maps. Does not bear on the conjecture as stated, which requires reversible transformations.", url: "https://arxiv.org/abs/2608.02403v1", date: "2026-08-03", version: "v1" },
    ],
    title: "Reversible correlating dynamics beyond quantum theory",
    statement: r`Let $\Omega_A\subset A$ and $\Omega_B\subset B$ be finite-dimensional compact convex state spaces of generalized probabilistic theories whose reversible groups $\mathcal G_A,\mathcal G_B$ act transitively on pure states, and let $\Omega_{AB}\subset A\otimes B$ be any tomographically local composite (containing all product states and admitting product effects). Suppose some linear bijection $T$ with $T\Omega_{AB}=\Omega_{AB}$ is not of the form $T_A\otimes T_B$ (nor this composed with a swap when $A\cong B$). Prove that $(\Omega_A,\Omega_B,\Omega_{AB})$, with its effects, then embeds linearly into finite-dimensional complex quantum theory, with $\Omega_{AB}$ mapped into density operators on a tensor-product Hilbert space and all probabilities preserved, or give a non-embeddable counterexample.`,
    definition: r`**Reversible correlating dynamics** are reversible transformations of a composite system that can turn product states into correlated ones. Entanglement is one possible form of such correlation: a unitary can map $|0\rangle|0\rangle$ to a Bell state. In the space of generalized probabilistic theories, theories with richer correlations than quantum theory (such as boxworld, which contains all non-signalling correlations) turn out to have only trivial reversible dynamics. This suggests that reversible interaction combined with tomographic locality could single out quantum theory. Framework: Barrett, “Information processing in generalized probabilistic theories”, Phys. Rev. A 75, 032304 (2007), [arXiv:quant-ph/0508211](https://arxiv.org/abs/quant-ph/0508211).

The conjecture was spelled out by Tony Short, among others, in 2012. It is [IQOQI problem 42](https://oqp.iqoqi.oeaw.ac.at/reversible-dynamics-on-composite-systems/). Classical probability theory (with CNOT gates) and the qubit stabilizer theory (with the Clifford group) show that the conclusion has to be embeddability rather than equality with full quantum theory.`,
    progress: r`- Gross, Müller, Colbeck and Dahlsten proved that all reversible dynamics in boxworld with identical subsystems are generated by local operations and permutations of systems ([arXiv:0910.1840](https://arxiv.org/abs/0910.1840), PRL 104, 080402 (2010)). Al-Safi and Short extended this to all multipartite boxworld systems ([arXiv:1312.3931](https://arxiv.org/abs/1312.3931)).
- Al-Safi and Richens showed that maximally nonlocal composites of hyperballs and of almost all regular polytopes have only trivial reversible dynamics, and that classical systems are the only regular-polytope state spaces whose maximally nonlocal composites admit non-trivial reversible dynamics ([arXiv:1508.03491](https://arxiv.org/abs/1508.03491), NJP 17, 123001 (2015)). These results concern maximally nonlocal composites, not every tomographically local composite.
- With qubit local systems, any locally tomographic theory with one continuous reversible interaction is quantum theory (de la Torre, Masanes, Short and Müller, [arXiv:1110.5482](https://arxiv.org/abs/1110.5482), PRL 109, 090403 (2012)). For two $d$-dimensional Bloch balls with continuous reversible dynamics, Masanes, Müller, Pérez-García and Augusiak showed that only $d=3$ allows entanglement or interaction ([arXiv:1111.4060](https://arxiv.org/abs/1111.4060), J. Math. Phys. 55, 122203 (2014)). Krumm and Müller extended this to any number of Bloch balls: for $d\ne3$, every gate in the connected reversible group is a product of single-system gates ([arXiv:1804.05736](https://arxiv.org/abs/1804.05736), npj Quantum Inf. 5, 7 (2019)).
- Richens, Selby and Al-Safi showed that, under local transitivity or no-broadcasting, non-classical systems can interact reversibly only if the theory has entangled states ([arXiv:1610.00682](https://arxiv.org/abs/1610.00682), PRL 119, 080503 (2017)). This is a necessary condition for a counterexample, not a classification.
- Real and quaternionic quantum theory admit reversible interactions but violate tomographic locality, and both embed in complex quantum theory; they do not test the conjecture.
- Umekawa, Hokkyo, Arai and Takasan (3 August 2026, v1) build pure-state-preserving but non-reversible maps that turn every product pure state of the simplest bipartite boxworld into a PR box, and classify all such maps ([arXiv:2608.02403](https://arxiv.org/abs/2608.02403v1)). This shows that the boxworld no-go depends on reversibility. It is not a counterexample.`,
    residual: r`The conjecture is settled only for special local state spaces: Bloch balls with a continuous reversible group (any number of systems), and maximally nonlocal composites of hyperballs and regular polytopes. No counterexample meeting the stated state-and-effect embeddability test is established by the results recorded here. Open cases include transitive local state spaces other than balls with continuous groups (for example, Jordan-algebraic or other homogeneous cones), any transitive local systems with a discrete reversible group (where classical and stabilizer theories show that non-trivial gates exist), and composites strictly between the minimal and maximal tensor products. Related: F3 (operational reconstruction, of which this is a sharp special case).`,
    refs: [
      { label: "Barrett, 'Information processing in generalized probabilistic theories', PRA 75, 032304 (2007)", url: "https://arxiv.org/abs/quant-ph/0508211" },
      { label: "Gross, Müller, Colbeck & Dahlsten, 'All reversible dynamics in maximally nonlocal theories are trivial', PRL 104, 080402 (2010)", url: "https://arxiv.org/abs/0910.1840" },
      { label: "de la Torre, Masanes, Short & Müller, 'Deriving quantum theory from its local structure and reversibility', PRL 109, 090403 (2012)", url: "https://arxiv.org/abs/1110.5482" },
      { label: "Masanes, Müller, Pérez-García & Augusiak, 'Entanglement and the three-dimensionality of the Bloch ball', J. Math. Phys. 55, 122203 (2014)", url: "https://arxiv.org/abs/1111.4060" },
      { label: "Al-Safi & Short, 'Reversible dynamics in strongly non-local Boxworld systems', J. Phys. A 47, 325303 (2014)", url: "https://arxiv.org/abs/1312.3931" },
      { label: "Al-Safi & Richens, 'Reversibility and the structure of the local state space', New J. Phys. 17, 123001 (2015)", url: "https://arxiv.org/abs/1508.03491" },
      { label: "Richens, Selby & Al-Safi, 'Entanglement is an inevitable feature of any non-classical theory' (arXiv v1, 2016); published as PRL 119, 080503 (2017)", url: "https://arxiv.org/abs/1610.00682" },
      { label: "Krumm & Müller, 'Quantum computation is the unique reversible circuit model for which bits are balls', npj Quantum Inf. 5, 7 (2019)", url: "https://arxiv.org/abs/1804.05736" },
      { label: "Umekawa, Hokkyo, Arai & Takasan, 'Entanglement Generation Beyond Quantum Theory: From Product States to Popescu-Rohrlich Boxes' (2026 preprint, v1)", url: "https://arxiv.org/abs/2608.02403v1" },
      { label: "IQOQI Vienna Open Quantum Problems, problem 42: 'Reversible dynamics on composite systems'", url: "https://oqp.iqoqi.oeaw.ac.at/reversible-dynamics-on-composite-systems/" },
    ] },
  // Added 9 November 2026 (promoted from the new-problems page).
  { id: "F13", cat: "foundations", horizon: "programme",
    provenance: [{ summary: "Piccione reports ChatGPT assistance with language, LaTeX, literature and calculations, particularly Section VIII; he reports critical review and responsibility for the manuscript.", url: "https://arxiv.org/html/2610.10980v1", version: "v1" }],
    reviewedAt: "2026-11-09",
    relations: [{ id: "F1", type: "parent" }, { id: "QF11", type: "related" }, { id: "F14", type: "related" }],
    title: "Relativistic collapse model for interacting fields",
    statement: r`Is there a collapse dynamics that is (i) Lorentz covariant, (ii) non-signalling, (iii) with finite energy production per unit volume and time, (iv) defined for an interacting quantum field theory using only standard degrees of freedom, without an auxiliary mediating field, and (v) reducing in the non-relativistic limit to a translation-covariant GRW/CSL-type model? Alternatively, extend the known no-go theorem beyond its assumptions of Minkowski spacetime, vacuum stability, standard degrees of freedom and state-independent linear density-matrix evolution, in particular to curved backgrounds or state-dependent collapse operators.`,
    definition: r`**Spontaneous collapse models** (GRW, CSL, Diósi–Penrose) add a stochastic, nonlinear term to the Schrödinger equation that localizes macroscopic superpositions, one precise answer to the measurement problem (F1). They are formulated non-relativistically; a relativistic version for interacting fields has long been sought, and early relativistic CSL models were covariant but produced an infinite energy increase. Review: Bassi et al., Rev. Mod. Phys. 85, 471 (2013), [arXiv:1204.4325](https://arxiv.org/abs/1204.4325).`,
    progress: r`- Tumulka's relativistic GRW flash model for non-interacting distinguishable particles (2004) extends to interacting distinguishable particles at fixed particle number (2020, [arXiv:2002.00482](https://arxiv.org/abs/2002.00482)); variable particle number and indistinguishable particles are not covered. Bedingham's models use a non-standard mediating field, outside requirement (iv); Pearle's satisfy only some requirements.
- No-go results: Myrvold (2017), a Markovian relativistic collapse theory needs non-standard degrees of freedom; Jones, Guaita and Bassi (arXiv 2019; PRA 2021), an obstruction under their specific covariance condition on collapse probabilities; single particles and distinguishable non-interacting, non-entangled particles are exceptions.
- Muciño, Okon, Sudarsky and Wiedemann (August 2026) argue that the conceptual objections are surmountable and list the remaining technical obstacles: energy divergence, covariant smearing, non-signalling.
- Piccione (October 2026) proposes a flash-based framework, foliation independent and non-signalling (by microscopic parameter independence), with a "dynamical vacuum subtraction" for vacuum stability; the resulting map is not positive on all standard density operators, and the new space of physical states is left uncharacterized. Finite particle-number and energy-increase rates are obtained only for a free massive scalar, at leading order in the long-time regime, so (iv) remains open.
- Experiments constrain the non-relativistic limit: XENONnT (arXiv 2025; revised 2026) excludes the original Markovian CSL parameter values for the first time, so (v) should target a still-viable variant (coloured or dissipative CSL, large $r_C$).`,
    residual: r`This is a model-building programme: the interacting field theory, admissible stochastic dynamics, physical state space and sense of the non-relativistic limit still need to be fixed. A construction meeting (i)–(v) would answer the existence question, but extending a no-go theorem to another restricted class would exclude only that class. A sharp child question must give one class and matching construction or non-existence criteria. Related: F1 (measurement problem), F14 (nonlinear dynamics), QF11 (causal local operations).`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Argues that relativistic objective collapse is viable, rebuts the conceptual objections and lists the remaining technical challenges.", url: "https://arxiv.org/abs/2608.26474v1", date: "2026-08-27", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Flash-based relativistic collapse framework: foliation independent, non-signalling, with dynamical vacuum subtraction; finite particle-number and energy-increase rates for a free massive scalar at leading order in the long-time regime.", url: "https://arxiv.org/abs/2610.10980v1", date: "2026-10-07", version: "v1" },
    ],
    refs: [
      { label: "Bassi, Lochan, Satin, Singh, Ulbricht, Rev. Mod. Phys. 85, 471 (2013)", url: "https://arxiv.org/abs/1204.4325" },
      { label: "Tumulka, relativistic GRW model (2004)", url: "https://arxiv.org/abs/quant-ph/0406094" },
      { label: "Tumulka, 'A Relativistic GRW Flash Process With Interaction' (2020; revised 2022)", url: "https://arxiv.org/abs/2002.00482" },
      { label: "Bedingham, 'Relativistic state reduction dynamics', Found. Phys. 41 (2011) 686–704", url: "https://arxiv.org/abs/1003.2774" },
      { label: "Myrvold, no-go for relativistic collapse (2017)", url: "https://arxiv.org/abs/1709.03219" },
      { label: "Jones, Guaita, Bassi, 'On the (im)possibility of extending the GRW model to relativistic particles' (arXiv v5); published as PRA 103, 042216 (2021)", url: "https://arxiv.org/abs/1907.02370" },
      { label: "Muciño, Okon, Sudarsky, Wiedemann, 'Demystifying relativistic quantum collapse' (2026)", url: "https://arxiv.org/abs/2608.26474" },
      { label: "XENONnT collaboration, bounds on collapse models (2025)", url: "https://arxiv.org/abs/2506.05507" },
      { label: "Piccione, 'A flash-based relativistic collapse model for quantum fields' (2026)", url: "https://arxiv.org/abs/2610.10980" },
    ] },

  { id: "F14", cat: "foundations", horizon: "programme", status: "improved",
    reviewedAt: "2026-11-20",
    relations: [{ id: "F13", type: "related" }, { id: "F12", type: "related" }],
    title: "Causal nonlinear quantum mechanics",
    statement: r`For a specified class of nonlinear dynamics on composite systems and mixed states, including its composition and measurement rules, characterize when non-signalling forces a linear, completely positive ensemble dynamics. Determine whether a causal state-dependent QFT extension such as Kaplan–Rajendran lies outside those hypotheses, and whether its operational predictions can be reproduced by linear quantum mechanics with an environment.`,
    definition: r`**Nonlinear quantum mechanics** replaces the linear Schrödinger equation by a nonlinear one. Weinberg proposed a precise framework (1989); Gisin and Polchinski showed that such theories generically allow superluminal signalling once combined with entanglement and measurement. Kaplan and Rajendran revived the question with a causal framework: “A causal framework for non-linear quantum mechanics”, PRD 105, 055002 (2022), [arXiv:2106.10576](https://arxiv.org/abs/2106.10576).`,
    progress: r`- Weinberg (1989): the proposal. Gisin (1990) and Polchinski (1991): signalling, unless the theory is restricted.
- Simon, Bužek and Gisin (2001) derive linear completely positive density-matrix dynamics from Hilbert-space rays, the trace rule for probabilities and no superluminal signalling. This constrains ensemble dynamics, rather than identifying individual stochastic trajectories with their mean.
  - Kaplan and Rajendran (2021; PRD 2022) construct state-dependent QFT interactions using field expectation values in the full quantum state. The resulting background propagates through retarded Green functions; the authors give a causal account of measurement with unavoidable noise.
  - Fedida and Kent (18 November 2026, v1; [arXiv:2611.24227v1](https://arxiv.org/abs/2611.24227v1)) propose local semiclassical gravity: a classical metric sourced by local quantum states, with state updates confined to future collapse light cones and an additional singular null-shell source. They construct causal, locally Lipschitz solutions in the linearized weak-field regime for specified collapse examples and recover Schrödinger–Newton dynamics in the nonrelativistic limit. Proper and improper mixtures with the same density matrix have different gravitational statistics, so ensemble equivalence is explicitly abandoned. The resulting gravitational readout operations permit approximate cloning without superluminal signalling in the analyzed regime; the paper distinguishes this from its operational quantum no-signalling principle, which the model violates. General nonlinear consistency, arbitrary configurations of measurements, and a full quantum-field-theoretic construction remain open.`,
    residual: r`The precise class of composite and mixed-state extensions must be fixed before the question is a single statement. The local-state semiclassical proposal supplies a restricted construction, with finite smooth conserved stress-energy away from measurements assumed; its full QFT extension, Hadamard regularity and nonlinear backreaction remain unresolved. It does not classify all causal nonlinear theories, settle Kaplan–Rajendran's complete consistency, or establish a universal criterion for reproduction by a linear theory with an environment. Related: F12 (reversible dynamics beyond quantum theory), F13.`,
    evidence: [
      { kind: "published", role: "progress", summary: "State-dependent nonlinear QFT framework with expectation-value background fields propagated by retarded Green functions and a proposed consistent measurement account; PRD 105, 055002 (2022).", url: "https://arxiv.org/abs/2106.10576v2", date: "2022-03-09", version: "v2" },
      { kind: "preprint", role: "progress", summary: "Local-state semiclassical gravity with future-light-cone measurement updates and singular shell sources; causal linearized weak-field collapse examples and a Schrödinger–Newton limit. Violates ensemble equivalence; full nonlinear consistency and QFT construction remain open.", url: "https://arxiv.org/abs/2611.24227v1", date: "2026-11-18", version: "v1" },
    ],
    provenance: [
      { summary: "Fedida and Kent report suggestions from Claude and ChatGPT for portions of Sections VIII A–D and IX A and Appendices A, D, E and F, plus pre-submission review and typo correction. They state that all statements were independently drafted and verified by the authors.", url: "https://arxiv.org/abs/2611.24227v1", version: "v1" },
    ],
    refs: [
      { label: "Kaplan, Rajendran, 'A causal framework for non-linear quantum mechanics', PRD 105, 055002 (2022)", url: "https://arxiv.org/abs/2106.10576" },
      { label: "Simon, Bužek, Gisin, 'The no-signaling condition and quantum dynamics', PRL 87, 170405 (2001)", url: "https://arxiv.org/abs/quant-ph/0102125" },
      { label: "Fedida & Kent, 'A relativistic gravitisation of quantum theory?' (2026 preprint, v1)", url: "https://arxiv.org/abs/2611.24227v1" },
      { label: "Bassi, Lochan, Satin, Singh, Ulbricht, Rev. Mod. Phys. 85, 471 (2013)", url: "https://arxiv.org/abs/1204.4325" },
    ] },

  { id: "F15", cat: "foundations", horizon: "sharp",
    reviewedAt: "2026-11-09",
    relations: [{ id: "F3", type: "related" }, { id: "F12", type: "related" }],
    title: "A reasonable theory with higher-order interference",
    statement: r`Construct a generalized probabilistic theory with third-order interference $I_3\ne0$ satisfying Causality and Purification and admitting consistent tomographically local composites, or prove that these requirements forbid it. Causality, Purity Preservation, Pure Sharpness and Purification together already imply $I_3=0$; a construction must therefore abandon at least one of the two additional purity principles.`,
    definition: r`**Higher-order interference**: in quantum theory, the interference pattern of three or more paths is determined by the one- and two-path patterns, because probabilities are quadratic in amplitudes. Sorkin (1994) defined the hierarchy of interference terms $I_n$; a non-zero $I_3$ would signal a departure from the Born rule. Three-slit experiments bound it (Sinha et al., Science 329, 418–421 (2010), [arXiv:1007.4193](https://arxiv.org/abs/1007.4193)).`,
    progress: r`- Barnum, Lee, Scandolo and Selby (2017) exclude higher-order interference under Causality, Purity Preservation, Pure Sharpness and Purification. Lee and Selby (2017) instead analyse density cubes and quartic quantum theory; their paper does not establish that exclusion theorem.
- Barnum, Müller and Ududec (2014) characterize quantum theory by the absence of third-order interference together with other postulates; Dakić, Paterek and Brukner (2014) propose “density cubes” as a candidate theory with $I_3\neq0$.
- Experimental bounds must account for non-classical paths (Sawant et al. 2014).`,
    residual: r`A construction or no-go theorem for the stated Causality, Purification and composition requirements. Finding minimal axiom sets is a broader classification question. Related: F3 (operational reconstruction), F12.`,
    evidence: [
      { kind: "published", role: "progress", summary: "Causality, Purity Preservation, Pure Sharpness and Purification jointly exclude higher-order interference; Entropy 19, 253 (2017).", url: "https://arxiv.org/abs/1704.05106v3", date: "2017-07-13", version: "v3" },
    ],
    refs: [
      { label: "Lee, Selby, 'Higher-order interference in extensions of quantum theory', Found. Phys. (2017)", url: "https://arxiv.org/abs/1510.03860" },
      { label: "Barnum, Lee, Scandolo, Selby, 'Ruling out higher-order interference from purity principles', Entropy 19, 253 (2017)", url: "https://arxiv.org/abs/1704.05106" },
      { label: "Sinha, Couteau, Jennewein, Laflamme, Weihs, 'Ruling Out Multi-Order Interference in Quantum Mechanics', Science 329, 418–421 (2010)", url: "https://arxiv.org/abs/1007.4193" },
    ] },

  // 16 November 2026: questions from the carte v2 map of the quant-ph corpus.
  { id: "F16",
    cat: "foundations",
    horizon: "incremental",
    reviewedAt: "2026-11-16",
    title: "Optimal lower bound on the Wigner entropy of Wigner-positive states",
    statement: r`For one bosonic mode ($\hbar=1$, vacuum Wigner function $W_0=e^{-x^2-p^2}/\pi$), let $\mathcal D_+$ be the set of density operators whose Wigner function $W_\rho$ is non-negative, and let $h(W_\rho)=-\int W_\rho\ln W_\rho\,dx\,dp$ be the Wigner entropy. Determine $c^\ast=\inf_{\rho\in\mathcal D_+}h(W_\rho)$, and decide whether the infimum is attained. Known: $\ln(2\pi)\le c^\ast<1+\ln\pi$. The upper value $1+\ln\pi$ is the vacuum entropy; the conjecture $c^\ast=1+\ln\pi$ was disproved in September 2026. Van Herstraeten, Cerf and Chabaud (2026, “Discussion and outlook”) pose the question: “A natural follow-up question is to determine the best possible lower bound and whether this lower bound is attained or is an infimum.”`,
    definition: r`**Wigner entropy.** For a Wigner-positive state, $W_\rho$ is a probability density on phase space, and its Shannon differential entropy measures phase-space uncertainty; it is invariant under symplectic (Gaussian unitary) transformations. Van Herstraeten and Cerf introduced it and conjectured $h(W_\rho)\ge1+\ln\pi$ on $\mathcal D_+$, with equality for pure Gaussian states (“Quantum Wigner entropy”, PRA 104, 042211 (2021), [arXiv:2105.12843](https://arxiv.org/abs/2105.12843)). The question is the Wigner analogue of the Wehrl entropy conjecture for the Husimi function, which has been proved; Van Herstraeten and Cerf show that the Wigner conjecture is strictly stronger ([arXiv:2105.12843](https://arxiv.org/abs/2105.12843)). By Hudson's theorem the only pure Wigner-positive states are Gaussian (Rep. Math. Phys. 6, 249 (1974)), so all candidate minimizers below the vacuum value are mixed.

The question of the optimal constant is posed in the “Discussion and outlook” of Van Herstraeten, Cerf and Chabaud, [arXiv:2609.24670](https://arxiv.org/abs/2609.24670), who note “the significant gap of $\ln(e/2)$ with the known lower bound”.`,
    progress: r`- Van Herstraeten and Cerf (2021) prove the conjectured bound for passive states and state the Wigner–Rényi extension ([arXiv:2105.12843](https://arxiv.org/abs/2105.12843)).
- Van Herstraeten, Jabbour and Cerf (Quantum 7, 1021 (2023)) conjecture that the vacuum Wigner function majorizes every Wigner-positive one, which implies the entropy conjecture, and prove it for mixtures of the three lowest Fock states ([arXiv:2108.09167](https://arxiv.org/abs/2108.09167)).
- Dias and Prata (Ann. Henri Poincaré 24, 2341 (2023)) prove the analytical bound $h(W_\rho)\ge d\ln(2\pi)$ in $d$ modes, and the conjectured Wigner–Rényi bound for $\alpha\ge2$ ([arXiv:2303.10531](https://arxiv.org/abs/2303.10531)).
- The conjecture was further proved for beam-splitter states (Van Herstraeten and Cerf, PRA 112, 062207 (2025), [arXiv:2411.05562](https://arxiv.org/abs/2411.05562)), for the convex hull of Gaussian states via majorization (de Boer, Di Giulio, Keski-Vakkuri and Tonni, PRA 112, 032405 (2025), [arXiv:2412.19698](https://arxiv.org/abs/2412.19698)), and for sufficiently mixed states: the bound $h\ge\ln(2\pi)-\ln\mathrm{tr}\rho^2$ gives it for purity below $2/e$, and Qian and Gagatsos derive purity conditions from non-negativity and $\pi W\le1$ alone (PRA 114, 022408 (2026), [arXiv:2601.16898](https://arxiv.org/abs/2601.16898)).
- September 2026, three independent refutations. He constructs certified Wigner-positive states with sub-vacuum entropy and shows that the maximal one-mode entropy deficit at mean photon number $E\to0$ scales as $E^{\gamma}/[\ln(1/E)]^{\beta}$ with $\gamma\approx0.741$, $\beta\approx0.586$ ([arXiv:2609.13312](https://arxiv.org/abs/2609.13312)). Liu and Qiao refute vacuum majorization and restore it after radial coarse graining ([arXiv:2609.23277](https://arxiv.org/abs/2609.23277)). Van Herstraeten, Cerf and Chabaud give explicit states in $\mathrm{span}\{|0\rangle,|1\rangle,|2\rangle\}$ with $h=1+\ln\pi-\tfrac23\epsilon^3+O(\epsilon^4)$, find numerically only violations of order at most $10^{-3}$, and disprove the Wigner–Rényi conjecture for $0<\alpha<2$ ([arXiv:2609.24670](https://arxiv.org/abs/2609.24670)).
- Thio, De Bièvre, Barnes and Arvidsson-Shukur (November 2026) prove the discrete analogues: for Kirkwood–Dirac distributions of mutually unbiased bases and for the Gross–Wigner function, entropy minimizers are pure states with positive quasiprobability ([arXiv:2611.04009](https://arxiv.org/abs/2611.04009)). The continuous case has no such statement.`,
    residual: r`The value of $c^\ast$ is unknown; the gap between $\ln(2\pi)\approx1.838$ and $1+\ln\pi\approx2.145$ is $\ln(e/2)\approx0.307$, while known violations are below $10^{-3}$. Attainment is open. Minimal targets: improve $\ln(2\pi)$ by an explicit constant on all of $\mathcal D_+$; or determine the minimum, with a rigorous certificate, in a truncated Fock sector such as $\mathrm{span}\{|0\rangle,|1\rangle,|2\rangle\}$, where counterexamples already exist. A multimode question, not posed by the authors: with $c^\ast_m$ the infimum over $m$-mode Wigner-positive states, one has $m\ln(2\pi)\le c^\ast_m\le m\,c^\ast$, and whether $c^\ast_m=m\,c^\ast$ is not settled (differential entropy can fall below the sum of marginal entropies).`,
    evidence: [
      { kind: "preprint",
        role: "progress",
        summary: "Wigner-positive states with Wigner entropy strictly below the vacuum value 1 + ln π, e.g. h = 1 + ln π − (2/3)ε³ + O(ε⁴) in span{|0⟩,|1⟩,|2⟩}; numerical violations at most of order 10⁻³; Wigner–Rényi conjecture false for 0 < α < 2. Poses the optimal-constant question.",
        url: "https://arxiv.org/abs/2609.24670v1",
        date: "2026-09-21",
        version: "v1" },
      { kind: "preprint",
        role: "progress",
        summary: "Certified sub-vacuum counterexamples; one-mode maximal entropy deficit at mean photon number E → 0 scales as E^γ/[ln(1/E)]^β with γ ≈ 0.741, β ≈ 0.586.",
        url: "https://arxiv.org/abs/2609.13312v2",
        date: "2026-09-24",
        version: "v2" },
      { kind: "preprint",
        role: "progress",
        summary: "Vacuum majorization of Wigner-positive Wigner functions fails; it holds after radial coarse graining into energy shells.",
        url: "https://arxiv.org/abs/2609.23277v1",
        date: "2026-09-20",
        version: "v1" },
      { kind: "published",
        role: "progress",
        summary: "Analytical lower bound h(W) ≥ d ln(2π) for Wigner-positive states in d modes; Wigner–Rényi bound for α ≥ 2 (Ann. Henri Poincaré 24, 2023).",
        url: "https://arxiv.org/abs/2303.10531v1",
        date: "2023-03-19",
        version: "v1" },
      { kind: "published",
        role: "progress",
        summary: "Purity conditions guaranteeing h ≥ 1 + ln π, using only non-negativity, normalization and πW ≤ 1; the purity-only relaxation has the sharp threshold 2/e (PRA 114, 022408, 2026).",
        url: "https://arxiv.org/abs/2601.16898v2",
        date: "2026-08-07",
        version: "v2" },
    ],
    provenance: [
      { summary: "Van Herstraeten, Cerf and Chabaud state in the abstract that the key idea of the paper was developed with the help of AI tools, and acknowledge the use of a generative AI tool, taking full responsibility for the content.",
        url: "https://arxiv.org/abs/2609.24670v1",
        version: "v1" },
    ],
    relations: [
      { id: "F17", type: "related" },
      { id: "E21", type: "related" },
    ],
    refs: [
      { label: "Van Herstraeten, Cerf & Chabaud, 'Wigner-positive quantum states can have lower entropy than the vacuum' (2026 preprint)",
        url: "https://arxiv.org/abs/2609.24670" },
      { label: "Van Herstraeten & Cerf, 'Quantum Wigner entropy', PRA 104, 042211 (2021)", url: "https://arxiv.org/abs/2105.12843" },
      { label: "Dias & Prata, 'On a recent conjecture by Z. Van Herstraeten and N.J. Cerf for the quantum Wigner entropy', Ann. Henri Poincaré 24, 2341 (2023)",
        url: "https://arxiv.org/abs/2303.10531" },
      { label: "He, 'Wigner entropy below vacuum: physical counterexamples and stability limits' (2026 preprint)", url: "https://arxiv.org/abs/2609.13312" },
      { label: "Liu & Qiao, 'Radial Coarse Graining Restores Vacuum Majorization in Wigner Phase Space' (2026 preprint)", url: "https://arxiv.org/abs/2609.23277" },
      { label: "Van Herstraeten, Jabbour & Cerf, 'Continuous majorization in quantum phase space', Quantum 7, 1021 (2023)", url: "https://arxiv.org/abs/2108.09167" },
      { label: "Lieb, 'Proof of an entropy conjecture of Wehrl', Commun. Math. Phys. 62, 35 (1978)", url: "https://doi.org/10.1007/BF01940328" },
    ] },

  { id: "F17",
    cat: "foundations",
    horizon: "sharp",
    reviewedAt: "2026-11-16",
    title: "Extremality of Fock-bounded beam-splitter states among Wigner-positive states",
    statement: r`Let $\mathcal D_+$ be the convex set of single-mode states with non-negative Wigner function. For pure states $|\psi\rangle,|\varphi\rangle$ with finite Fock support (Fock-bounded), let $\hat\sigma(\psi,\varphi)$ be the beam-splitter state: the reduced state of one output mode after $|\psi\rangle\otimes|\varphi\rangle$ passes through a balanced beam splitter. Is every such $\hat\sigma(\psi,\varphi)$ an extreme point of $\mathcal D_+$? (Van Herstraeten, Davis, Dias, Prata, Cerf and Chabaud, 2025, Section 6 “Conclusion and open problems”.) Without the Fock-bounded hypothesis the answer is negative: two squeezed vacua of orthogonal quadratures give a non-extreme beam-splitter state.`,
    definition: r`**Wigner-positive states and Hudson's theorem.** Hudson's theorem says that a pure state has a non-negative Wigner function if and only if it is Gaussian, as recalled by Mandilara, Karpov and Cerf. Mixed Wigner-positive states form a convex set $\mathcal D_+$ whose structure is not understood; an operational characterization of it is the “mixed-state Hudson problem” (Mandilara, Karpov and Cerf, PRA 79, 062302 (2009), [arXiv:0808.2501](https://arxiv.org/abs/0808.2501)). By a Krein–Milman argument, describing $\mathcal D_+$ reduces to describing its extreme points.

**Beam-splitter states.** Interfering two states on a balanced beam splitter and discarding one output gives a state whose Wigner function is a convolution of the two input Wigner functions (rescaled), hence non-negative for any pure inputs; Van Herstraeten and Cerf introduced this construction ([arXiv:2105.12843](https://arxiv.org/abs/2105.12843)). The open problem is stated in [arXiv:2512.14831](https://arxiv.org/abs/2512.14831), Section 6.`,
    progress: r`- Mandilara, Karpov and Cerf (2009) bound the non-Gaussianity of Wigner-positive mixed states from above and below; the bounds are not tight ([arXiv:0808.2501](https://arxiv.org/abs/0808.2501)).
- Cerf, Chabaud, Davis, Dias, Prata and Van Herstraeten (December 2025) study the topology and convex geometry of the sets of Wigner-positive states, prove a Krein–Milman-type theorem in infinite dimension, and show that the Fock-bounded sets form a hierarchy of proper closed faces ([arXiv:2512.14820](https://arxiv.org/abs/2512.14820)).
- The companion paper (December 2025, revised January 2026) characterizes the phase-invariant extreme points of the larger set of Wigner-positive quasi-states, introduces the “Vertigo map” and extremality-preserving maps, and generates all extreme Wigner-positive states of low Fock dimension from beam-splitter states. Its Theorem 4 proves that $\hat\sigma(m,n)$, built from two Fock states, is extreme for all $m,n\ge0$ ([arXiv:2512.14831](https://arxiv.org/abs/2512.14831)).`,
    residual: r`The general Fock-bounded case is open. Natural first cases: $\psi,\varphi\in\mathrm{span}\{|0\rangle,|1\rangle\}$, the first case without phase invariance, and $\psi$ arbitrary with $\varphi=|n\rangle$ a Fock state. The authors also call for “more general parametrizations of extreme WPS valid in higher dimensions, for instance based on the set of zeros their Wigner function”.`,
    evidence: [
      { kind: "preprint",
        role: "progress",
        summary: "Beam-splitter states of two Fock states are extreme Wigner-positive states (Theorem 4); construction of all extreme Wigner-positive states of low Fock dimension; poses the Fock-bounded extremality problem in Section 6.",
        url: "https://arxiv.org/abs/2512.14831v3",
        date: "2026-01-21",
        version: "v3" },
      { kind: "preprint",
        role: "progress",
        summary: "Topology and convex geometry of the sets of Wigner-positive states; Krein–Milman-type theorem in infinite dimension; Fock-bounded sets are proper closed faces.",
        url: "https://arxiv.org/abs/2512.14820v2",
        date: "2025-12-18",
        version: "v2" },
      { kind: "published",
        role: "progress",
        summary: "Upper and lower bounds on the non-Gaussianity of mixed states with positive Wigner function; not tight (PRA 79, 062302).",
        url: "https://doi.org/10.1103/PhysRevA.79.062302",
        date: "2009-06-03" },
    ],
    provenance: [],
    relations: [
      { id: "F16", type: "related" },
    ],
    refs: [
      { label: "Van Herstraeten, Davis, Dias, Prata, Cerf & Chabaud, 'Extreme non-negative Wigner functions' (2025 preprint), Section 6", url: "https://arxiv.org/abs/2512.14831" },
      { label: "Cerf, Chabaud, Davis, Dias, Prata & Van Herstraeten, 'Characterising the sets of quantum states with non-negative Wigner function' (2025 preprint)",
        url: "https://arxiv.org/abs/2512.14820" },
      { label: "Mandilara, Karpov & Cerf, 'Extending Hudson's theorem to mixed quantum states', PRA 79, 062302 (2009)", url: "https://arxiv.org/abs/0808.2501" },
      { label: "Van Herstraeten & Cerf, 'Quantum Wigner entropy', PRA 104, 042211 (2021)", url: "https://arxiv.org/abs/2105.12843" },
    ] },

  { id: "F18",
    cat: "foundations",
    horizon: "sharp",
    reviewedAt: "2026-11-16",
    title: "No pure spin state has a non-negative SU(2) Wigner function",
    statement: r`For spin $j\in\tfrac12\mathbb N$, let $W_\rho(\mathbf n)=\mathrm{tr}[\rho\,\Delta_j(\mathbf n)]$ be the SU(2)-covariant Stratonovich Wigner function on the sphere (self-dual kernel, $s=0$), with $\Delta_j(\mathbf n)=\sum_m\Delta_{j,m}|j,m;\mathbf n\rangle\langle j,m;\mathbf n|$ and $\Delta_{j,m}=\sum_{l=0}^{2j}\frac{2l+1}{2j+1}\langle j,m;l,0|j,m\rangle$. Prove that for every $j$ and every pure state $|\psi\rangle\in\mathbb C^{2j+1}$, $\min_{\mathbf n\in S^2}W_{\psi}(\mathbf n)<0$; or exhibit a pure spin state with everywhere non-negative Wigner function. Kam (2026, Sections I and VI) states this as a conjecture attributed to Davis, Kumari, Mann and Ghose (2021) and Davis, Hennigar, Mann and Ghose (2023): “a proof of the conjecture that no pure spin state has a non-negative SU(2) Wigner function would complete the picture for constant curvature.”`,
    definition: r`**Spherical phase space.** A spin-$j$ system has the sphere $S^2=SU(2)/U(1)$ as classical phase space. The Stratonovich–Weyl correspondence builds SU(2)-covariant quasiprobabilities on it, as reviewed by Davis, Kumari, Mann and Ghose ([arXiv:2008.10167](https://arxiv.org/abs/2008.10167)); the Wigner kernel is the self-dual member, with traciality $\mathrm{tr}[AB]=\int W_AW_B\,d\mu$, $d\mu=\frac{2j+1}{4\pi}\sin\theta\,d\theta\,d\varphi$. In flat phase space, Hudson's theorem says that only Gaussian pure states have non-negative Wigner functions; for odd-dimensional discrete Weyl–Heisenberg phase spaces only stabilizer states do (Gross, J. Math. Phys. 47, 122107 (2006), [arXiv:quant-ph/0602001](https://arxiv.org/abs/quant-ph/0602001)). The conjecture is that on the sphere no pure state at all is Wigner-positive, not even spin coherent states. For $j=\tfrac12$ the Wigner function of $|\!\uparrow\rangle$ is $\tfrac12+\tfrac{\sqrt3}2\cos\theta$, which is negative near the south pole.

Davis, Hennigar, Mann and Ghose state that their coherent-state result “offers evidence that all pure spin states also have non-zero Wigner negativity” ([arXiv:2206.00195](https://arxiv.org/abs/2206.00195)); Kam calls it a conjecture ([arXiv:2609.07242](https://arxiv.org/abs/2609.07242)).`,
    progress: r`- Davis, Kumari, Mann and Ghose (PRR 3, 033134 (2021)) compute the Wigner negativity of spin coherent, cat and Dicke states and find numerically that coherent-state negativity decreases quickly with $j$ while staying non-zero ([arXiv:2008.10167](https://arxiv.org/abs/2008.10167)).
- Davis, Hennigar, Mann and Ghose (J. Phys. A 56, 265302 (2023)) prove that every spin coherent state, in every dimension, has non-zero Wigner negativity, using the Dicke-state Wigner function as a polynomial in $\cos\theta$, traciality and rotation invariance. They also study maximally Wigner-negative states via the Majorana representation ([arXiv:2206.00195](https://arxiv.org/abs/2206.00195)).
- Denis, Davis, Mann and Martin (Quantum 8, 1550 (2024)) characterize mixed spin states whose Wigner function stays above a given bound under every unitary by eigenvalue polytopes ([arXiv:2304.09006](https://arxiv.org/abs/2304.09006)).
- Contrast with negative curvature: Klimov, Muñoz, Leuchs, Gazeau and Sánchez-Soto (July 2026) show that all Perelomov SU(1,1) coherent states have strictly positive Wigner functions ([arXiv:2607.22810](https://arxiv.org/abs/2607.22810)), and Kam (September 2026) shows that on the SU(1,1) discrete series the set of Wigner-positive pure states is strictly larger than the coherent orbit, so Hudson's theorem fails there ([arXiv:2609.07242](https://arxiv.org/abs/2609.07242)).`,
    residual: r`No proof beyond spin coherent states ($j=\tfrac12$ is immediate since every pure qubit state is coherent). Minimal targets: all pure states for $j=1$ and $j=\tfrac32$, using a Majorana parametrization by two or three stars; or all rotated Dicke states $R|j,m\rangle$. A quantitative version, a lower bound on the negativity of pure states that is uniform in the state for fixed $j$, is a further target; Davis et al. conjecture that spin coherent states minimize the negativity among pure states.`,
    evidence: [
      { kind: "published",
        role: "progress",
        summary: "Every spin coherent state, for every j, has a Wigner function taking negative values; presented as evidence that all pure spin states do (J. Phys. A 56, 265302).",
        url: "https://doi.org/10.1088/1751-8121/acd918",
        date: "2023-06-08" },
      { kind: "published",
        role: "progress",
        summary: "Wigner negativity of spin coherent, cat and Dicke states; coherent-state negativity numerically small but non-zero (PRR 3, 033134, 2021).",
        url: "https://arxiv.org/abs/2008.10167v1",
        date: "2020-08-24",
        version: "v1" },
      { kind: "preprint",
        role: "progress",
        summary: "On the SU(1,1) discrete series, Wigner-positive pure states form a strictly larger set than coherent states (Hudson's theorem fails); restates the SU(2) pure-state conjecture as open.",
        url: "https://arxiv.org/abs/2609.07242v1",
        date: "2026-09-07",
        version: "v1" },
    ],
    provenance: [],
    relations: [
      { id: "F17", type: "related" },
    ],
    refs: [
      { label: "Davis, Hennigar, Mann & Ghose, 'Stellar representation of extremal Wigner-negative spin states', J. Phys. A 56, 265302 (2023)",
        url: "https://arxiv.org/abs/2206.00195" },
      { label: "Davis, Kumari, Mann & Ghose, 'Wigner negativity in spin-j systems', Phys. Rev. Research 3, 033134 (2021)", url: "https://arxiv.org/abs/2008.10167" },
      { label: "Kam, 'Hudson's theorem fails for the SU(1,1) discrete series' (2026 preprint)", url: "https://arxiv.org/abs/2609.07242" },
      { label: "Gross, 'Hudson's theorem for finite-dimensional quantum systems', J. Math. Phys. 47, 122107 (2006)", url: "https://arxiv.org/abs/quant-ph/0602001" },
    ] },
];
