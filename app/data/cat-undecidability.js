const r = String.raw;

export const UNDECIDABILITY = [
  { id: "U1", cat: "undecidability", horizon: "incremental",
    title: "Decidability frontier for restricted spectral gaps",
    statement: r`Classify decidability for specified small-local-dimension and frustration-free one-dimensional chains. A concrete promise problem takes a finite rational/algebraic nearest-neighbour interaction $0\le h\le I$ and rational $\gamma>0$, with open-boundary $H_L=\sum_{j=1}^{L-1}h_{j,j+1}$ frustration-free for every $L$, and asks whether the gap above its ground space is eventually at least $\gamma$ or tends to zero. Identify which fixed on-site dimensions and structural restrictions admit a terminating algorithm.`,
    context: r`The finite input is the local interaction and promise data, not an infinite table of finite-size spectra. Ground-space degeneracy is allowed; the relevant gap is above the entire ground space. Classification across fixed on-site dimensions and interaction subclasses is an incremental frontier, not a claim that every listed restriction independently restores decidability.

What is known: Cubitt–Pérez-García–Wolf prove undecidability for translation-invariant nearest-neighbour interactions in two dimensions. Bausch–Cubitt–Lucia–Pérez-García extend it to one-dimensional chains. Their general constructions use a large but fixed local dimension; one-dimensional geometry alone is therefore insufficient. Those theorems should not automatically be transferred to every additional frustration-free or small-dimension restriction.

On the constructive side, finite-size criteria and the published 2026 hierarchy of spectral-gap certificates can certify gaps for frustration-free models under their hypotheses. A certificate search that terminates on a positive branch is not by itself a decision procedure that also terminates on every promised gapless input. Complete classifications require both the precise input class and termination guarantees. Related: B1, M7, U2.`,
    evidence: [{ kind: "published", summary: "A hierarchy of frustration-free spectral-gap certificates supplies constructive sufficient tests; a total gapped/gapless decision algorithm is a separate claim.", url: "https://doi.org/10.22331/q-2026-04-13-2065", date: "2026-04-13" }],
    relations: [{ id: "B1", type: "related" }, { id: "M7", type: "related" }, { id: "U2", type: "related" }],
    refs: [
      { label: "Cubitt, Pérez-García & Wolf, 'Undecidability of the spectral gap', Nature 528, 207 (2015)", url: "https://arxiv.org/abs/1502.04573" },
      { label: "Bausch, Cubitt, Lucia & Pérez-García, 'Undecidability of the spectral gap in one dimension', PRX 10, 031038 (2020)", url: "https://journals.aps.org/prx/abstract/10.1103/PhysRevX.10.031038" },
      { label: "'A Hierarchy of Spectral Gap Certificates for Frustration-Free Spin Systems', Quantum 10, 2065 (2026)", url: "https://doi.org/10.22331/q-2026-04-13-2065" },
    ] },

  { id: "U2", cat: "undecidability", horizon: "incremental",
    title: "Computable phase boundaries and equilibrium observables",
    statement: r`For finitely specified one-parameter local-Hamiltonian families, identify restrictions giving terminating algorithms for phase-boundary locations to rational accuracy $\varepsilon>0$, or for specified local order parameters. Fix the phase diagnostic, the parameter representation and the boundary/state-selection convention; these are distinct computational tasks.`,
    context: r`A phase diagram is not defined computationally until its phases and output representation are specified. Finite descriptions of computable coupling functions do not imply an effective convergence rate for the thermodynamic limit.

What is known: Bausch–Cubitt–Watson construct a continuous one-parameter translation-invariant two-dimensional family whose phase membership is undecidable. The conclusion is algorithmic, not that there are “uncomputably many” transitions. Purcell–Li–Cubitt's Chaitin-phase-transition preprint goes further in another direction: even a promised single transition can have an uncomputable location, Chaitin's constant. Simple topology of the diagram is therefore insufficient.

There is an important positive result with different quantifiers. Fawzi–Fawzi–Scalet's certified equilibrium-state hierarchy decides the promised threshold question when every translation-invariant equilibrium state has its observable expectation on the same side of the separated thresholds. This does not compute the expectation selected by arbitrary boundary conditions, nor supply every phase boundary or both exact endpoints of an equilibrium-expectation interval. The frontier must distinguish all equilibrium states from a selected thermodynamic-limit state. Related: U1, U3, B10.`,
    evidence: [
      { kind: "preprint", summary: "A single phase transition at an uncomputable location; a finite number of transitions does not ensure computability.", url: "https://arxiv.org/abs/2410.02600v1", date: "2024-10-03", version: "v1" },
      { kind: "published", summary: "Certified equilibrium-observable bounds and a terminating separated-threshold promise problem with quantification over all translation-invariant equilibrium states.", url: "https://www.nature.com/articles/s41467-024-51592-3" },
    ],
    relations: [{ id: "U1", type: "related" }, { id: "U3", type: "related" }, { id: "B10", type: "related" }],
    refs: [
      { label: "Bausch, Cubitt & Watson, 'Uncomputability of phase diagrams', Nat. Commun. 12, 452 (2021)", url: "https://www.nature.com/articles/s41467-020-20504-6" },
      { label: "Purcell, Li & Cubitt, 'Chaitin Phase Transition' (2024 preprint)", url: "https://arxiv.org/abs/2410.02600v1" },
      { label: "Fawzi, Fawzi & Scalet, 'Certified algorithms for equilibrium states of local quantum Hamiltonians', Nat. Commun. (2024)", url: "https://www.nature.com/articles/s41467-024-51592-3" },
    ] },

  { id: "U3", cat: "undecidability", horizon: "incremental",
    title: "Computability of long-time averages and thermalization",
    statement: r`For specified one-dimensional translation-invariant nearest-neighbour Hamiltonian families and product-state inputs, determine when a local-observable long-time-average threshold problem is decidable. Specify a finite input representation, a separated threshold promise, boundary conditions, and the order of the time and thermodynamic limits. Thermalization additionally requires an explicitly defined equilibrium reference.`,
    context: r`Equilibration on average, pointwise convergence and agreement with a thermal ensemble are different properties. A representative average is first the finite-chain Cesàro time average, then its infinite-chain limit when it exists; changing the limit order defines another problem. The observable may also be spatially averaged, which must be stated.

What is known: Shiraishi–Matsumoto prove an undecidability theorem in a one-dimensional shift-invariant nearest-neighbour setting with a fixed product initial state. The Hamiltonian family encodes computation; this does not mean that every particular physical model has an undecidable thermalization question.

Matsumoto's July 2025 preprint refines the long-time-average setting to product inputs that are identical except at one site. Its finite-lattice versions have PSPACE/EXPSPACE classifications depending on the input-size convention: these are complexity results, not undecidability of every finite matrix calculation.

Free models and other explicitly solvable families supply positive cases, but “integrable” alone is not a blanket effective algorithm. Equilibration bounds need their nondegeneracy and finite-size hypotheses and do not automatically provide computable thermalization times or thermodynamic-limit error bounds. Related: B4, B5, M4, U2.`,
    evidence: [
      { kind: "published", summary: "Undecidability in a specified 1D nearest-neighbour thermalization model with fixed product-state input.", url: "https://www.nature.com/articles/s41467-021-25053-0" },
      { kind: "preprint", summary: "Almost-i.i.d. input refinement and separate finite-lattice PSPACE/EXPSPACE formulations.", url: "https://arxiv.org/abs/2507.02601v1", date: "2025-07-03", version: "v1" },
    ],
    relations: [{ id: "B4", type: "related" }, { id: "B5", type: "related" }, { id: "M4", type: "related" }, { id: "U2", type: "related" }],
    refs: [
      { label: "Shiraishi & Matsumoto, 'Undecidability in quantum thermalization', Nat. Commun. 12, 5084 (2021)", url: "https://www.nature.com/articles/s41467-021-25053-0" },
      { label: "Matsumoto, 'More on Intractability of Thermalization: (almost) i.i.d. inputs and finite lattices' (2025 preprint)", url: "https://arxiv.org/abs/2507.02601v1" },
    ] },

  { id: "U4", cat: "undecidability", horizon: "sharp",
    title: "Computability of memoryless quantum capacity",
    statement: r`Given a finite-dimensional memoryless quantum channel $\mathcal N$ through an explicit rational/algebraic Choi matrix and a rational $\varepsilon>0$, does a single algorithm always terminate and output $q$ satisfying $|q-Q(\mathcal N)|\le\varepsilon$? Here $Q$ is the ordinary unassisted quantum capacity, in qubits per channel use.`,
    context: r`This question asks for computability, not an efficient formula or a polynomial-time algorithm. Finite-block coherent-information optimizations provide lower bounds through the regularized capacity formula. The absence of a known effective uniform convergence bound is an obstacle, not a proof of uncomputability.

What is known: Uncomputability results for channels with memory concern a different model. Likewise, zero-error capacity, assisted capacities and capacity-achieving optimizers are different tasks. Noncomputability of zero-error capacity on computable-real channel descriptions cannot simply be transferred to ordinary capacity on finite rational/algebraic input.

The March 2026 v3 preprint by Bhattacharyya–Mehta–Zhao proves QMA-hardness for computing quantum capacity and uncomputability of a restricted entanglement-assisted zero-error capacity. It explicitly leaves general capacity uncomputability unresolved. Version 3 corrects an error in the zero-error part of v2; neither its title nor an earlier abstract should be read as proving the headline problem settled.

C1 treats formulas and tractable channel families; C6 treats zero-error questions; C9 treats memory. Classical and private memoryless capacity computability are companion questions requiring their own precise representations and assistance conventions. Related: C1, C6, C9.`,
    evidence: [{ kind: "preprint", summary: "QMA-hardness of quantum capacity and a restricted assisted zero-error uncomputability theorem; ordinary memoryless quantum-capacity computability is not settled. v3 corrects v2.", url: "https://arxiv.org/abs/2601.22471v3", date: "2026-03-30", version: "v3" }],
    relations: [{ id: "C1", type: "related" }, { id: "C6", type: "related" }, { id: "C9", type: "related" }],
    refs: [
      { label: "Bhattacharyya, Mehta & Zhao, 'On the undecidability of quantum channel capacities' (2026 preprint, corrected v3)", url: "https://arxiv.org/abs/2601.22471v3" },
      { label: "Elkouss & Pérez-García, 'Memory effects can make the transmission capability of a communication channel uncomputable', Nat. Commun. 9, 1149 (2018)", url: "https://www.nature.com/articles/s41467-018-03428-0" },
      { label: "Boche & Deppe, 'Computability of the Zero-Error Capacity of Noisy Channels' (2020; revised 2024)", url: "https://arxiv.org/abs/2010.06873v3" },
    ] },

  { id: "U5", cat: "undecidability", horizon: "programme",
    archive: { kind: "background", targets: [], reason: "Computable analysis supplies methods and representation choices, not one independently specified unresolved theorem. This entry is retained as background for U1–U4 rather than counted as an open problem." },
    title: "Computable analysis: representations and guarantees",
    statement: r`Methods background: before asking whether a quantum quantity is computable, specify the representation of the input, the admissible operators and domains, the output norm or error criterion, and the information and termination guarantees available to an algorithm.`,
    context: r`Weihrauch's Type-2 computable analysis and Pour-El–Richards' computability structures already provide frameworks. An algorithm receiving a name for a computable real or operator can request finite approximations; that is not the same input model as a finite rational matrix, nor permission to access infinitely many digits at once.

Unbounded operators require domain and topology information. Infinite-volume limits require effective error control. Pour-El–Richards' wave-equation examples show how representation and regularity affect solution computability; they do not establish experimentally accessible quantum hypercomputation.

A concrete positive example is Hege–Moscolari–Teufel's spectral algorithm for normal discrete short-range infinite-volume operators with finite local complexity, using local patches and two-sided error control under the paper's input assumptions. This is not an algorithm for every many-body thermodynamic spectral gap.

The methodological checklist supports the distinct finite-input questions U1–U4. It is preserved here as background, not presented as a new universal framework still waiting to be invented. Related: U1, U2, U3, U4, M11.`,
    evidence: [{ kind: "preprint", summary: "Two-sided local-patch spectral approximation for specified short-range infinite-volume operators; computability requires the finite-local-complexity/input hypotheses.", url: "https://arxiv.org/abs/2403.19055v2", date: "2025-02-14", version: "v2" }],
    relations: [{ id: "U1", type: "related" }, { id: "U2", type: "related" }, { id: "U3", type: "related" }, { id: "U4", type: "related" }, { id: "M11", type: "related" }],
    refs: [
      { label: "Weihrauch, 'Computable Analysis: An Introduction' (Springer, 2000)", url: "https://doi.org/10.1007/978-3-642-56999-9" },
      { label: "Pour-El & Richards, 'Computability in Analysis and Physics' (Springer, 1989)", url: "https://doi.org/10.1007/978-3-662-21717-7" },
      { label: "Hege, Moscolari & Teufel, 'Computing the spectrum and pseudospectrum of infinite-volume operators from local patches' (2024 preprint; revised 2025)", url: "https://arxiv.org/abs/2403.19055v2" },
    ] },
];
