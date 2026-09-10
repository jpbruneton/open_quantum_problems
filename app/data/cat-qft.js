const r = String.raw;

export const QFT = [
  { id: "QF1", cat: "qft", horizon: "sharp",
    title: "Yang–Mills existence and mass gap",
    statement: r`For every compact simple gauge group $G$, construct a nontrivial quantum Yang–Mills theory on $\mathbb{R}^4$ satisfying suitable axioms and prove its Hamiltonian has a mass gap $\Delta>0$.`,
    context: r`This is a Clay Millennium Problem. One must construct four-dimensional quantum Yang–Mills theory as a well-defined quantum field theory (satisfying, e.g., the Wightman or Osterwalder–Schrader axioms) and prove a positive excitation threshold above the vacuum despite the massless classical gauge fields. This spectral gap must not be conflated with screening of external colour charges or the confinement criterion in QF2.

What is known: Two-dimensional Yang–Mills has rigorous constructions. Strong-coupling lattice results and lower-dimensional constructions provide important benchmarks, but a lattice mass gap at fixed spacing is not a positive gap in the four-dimensional continuum limit. Asymptotic freedom (Gross–Wilczek–Politzer) controls short-distance perturbation theory; it does not construct the theory or prove its nonperturbative gap.

The Clay problem remains open: control both continuum and infinite-volume limits, preserve suitable axioms, and obtain a strictly positive physical mass scale. The cited Chandra–Chevyrev–Hairer–Shen work concerns the 2D Yang–Mills measure, not a 3D or 4D continuum construction. Confinement (QF2) is a separate property and does not follow from a mass gap alone. Related: QF2, QF6.`,
    relations: [{ id: "QF2", type: "related" }, { id: "QF6", type: "related" }],
    refs: [
      { label: "Clay Mathematics Institute — Yang–Mills & Mass Gap", url: "https://www.claymath.org/millennium/yang-mills-the-maths-gap/" },
      { label: "Jaffe & Witten, 'Quantum Yang–Mills theory' (official problem description)", url: "https://www.claymath.org/wp-content/uploads/2022/02/MPPc.pdf" },
      { label: "Chandra, Chevyrev, Hairer, Shen, 'Langevin dynamic for the 2D Yang–Mills measure', Publ. IHÉS (2022)", url: "https://arxiv.org/abs/2006.04987" },
    ] },

  { id: "QF2", cat: "qft", horizon: "programme",
    title: "Confinement in 4D Yang–Mills theory",
    statement: r`In zero-temperature continuum pure $SU(N)$ Yang–Mills theory, prove a positive asymptotic string tension for external sources with nonzero $N$-ality, using a renormalized Wilson-loop or static-potential criterion.`,
    context: r`The target is confinement of unscreened external colour sources in pure gauge theory: for large separation $R$, the static potential should have a positive linear coefficient. A corresponding large-loop area law is $\langle W(C)\rangle\sim e^{-\sigma\,\mathrm{Area}(C)}$, after specifying renormalization and the loop limit. Nonzero $N$-ality matters: adjoint charges can be screened by gluons, and dynamical fundamental matter permits string breaking. An unqualified area law is therefore not a universal definition for every gauge theory with matter.

What is known: Strong-coupling lattice expansions establish area laws in their convergence regimes. Lattice Monte Carlo supports positive string tension in four-dimensional pure non-Abelian theories; this is numerical evidence, not a continuum proof. Rigorous Wilson-loop results in particular lattice gauge theories and large-$N$ settings provide additional benchmarks, whose gauge groups and coupling regimes must be retained.

Proving confinement in the continuum 4D theory presupposes (or must be done jointly with) the construction in QF1, and then requires showing the area law survives the weak-coupling continuum limit — precisely the regime where strong-coupling expansions fail. This is a long-horizon programme intertwined with QF1.`,
    refs: [
      { label: "Wilson, 'Confinement of quarks', PRD 10, 2445 (1974)", url: "https://journals.aps.org/prd/abstract/10.1103/PhysRevD.10.2445" },
      { label: "Chatterjee, 'Yang–Mills for probabilists' (2018)", url: "https://arxiv.org/abs/1803.01950" },
      { label: "Chatterjee, 'Wilson loops in Ising lattice gauge theory'", url: "https://arxiv.org/abs/1811.09770" },
      { label: "Seiler, 'Gauge Theories as a Problem of Constructive Quantum Field Theory and Statistical Mechanics', Lect. Notes Phys. 159 (1982)", url: "https://link.springer.com/book/10.1007/3-540-11559-5" },
    ] },

  { id: "QF3", cat: "qft", horizon: "programme",
    title: "Existence or triviality of continuum QED₄",
    statement: r`Either construct nontrivial four-dimensional continuum QED satisfying specified relativistic QFT axioms, or prove that removing the ultraviolet cutoff forces its renormalized interaction to vanish; control the charge and infrared sectors in either formulation.`,
    context: r`QED is the most experimentally precise theory in physics, yet it has no nonperturbative mathematical construction. The central worry is 'triviality': the Landau pole suggests the renormalized charge is driven to zero as the ultraviolet cutoff is removed, so a nontrivial continuum interacting QED may not exist.

What is known: Scalar triviality theorems are important comparisons, not QED theorems. Aizenman and Fröhlich established results above four dimensions; Aizenman–Duminil-Copin proved Gaussianity of scaling limits for specified critical four-dimensional Ising and $\phi^4$ models. These do not establish triviality for a gauge–fermion theory or for the Higgs sector coupled to gauge fields. The perturbative Landau-pole argument motivates the question but is not a nonperturbative exclusion proof.

So the open problem has two faces: either construct a nontrivial 4D continuum QED (controlling the Landau pole, infrared/soft-photon sectors, and charge renormalization), or rigorously establish its triviality and characterize QED only as an effective theory with a cutoff. Either resolution is a major programme. Related: QF7 (infrared).`,
    refs: [
      { label: "Aizenman & Duminil-Copin, 'Marginal triviality of the scaling limits of critical 4D Ising and φ⁴ models', Ann. of Math. 194 (2021)", url: "https://arxiv.org/abs/1912.07973" },
      { label: "Aizenman, 'Proof of the Triviality of φ⁴ Field Theory and Some Mean-Field Features of Ising Models for d > 4', Phys. Rev. Lett. 47, 1 (1981)", url: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.47.1" },
    ] },

  { id: "QF4", cat: "qft", horizon: "programme",
    archive: { kind: "merged", targets: ["QF1", "QF3", "QF5"], reason: "Construction umbrella retained for history; its gauge, ultraviolet-consistency and chiral-regularization tasks are tracked separately instead of counted again." },
    title: "Nonperturbative construction of the Standard Model",
    statement: r`Give a mathematically complete continuum definition of the chiral gauge theory underlying the Standard Model and establish its consistency beyond formal perturbation theory.`,
    context: r`The Standard Model is a chiral, non-abelian gauge theory with Higgs and Yukawa couplings. Defining it as a rigorous quantum field theory requires nonperturbative constructions of its gauge sector (QF1), a nonperturbative regularization of its chiral fermions (QF5), and control of the Higgs sector — which, like $\phi^4$, may be trivial and thus only an effective description.

What is known: Perturbative renormalizability and anomaly cancellation are established. Vector-like lattice gauge theories, nonperturbative Abelian chiral constructions and more recent chiral regulator proposals are available. A finite-cutoff proposal is not a proof of the full interacting continuum Standard Model. Its scalar and Abelian sectors may instead require a cutoff effective description; a general scalar triviality theorem cannot simply be transferred to the coupled theory.

This historical umbrella is merged into QF1, QF3 and QF5. Their results must ultimately be compatible with the Higgs/Yukawa interactions and full particle content; the merge does not claim the Standard Model has been constructed or must possess a nontrivial continuum limit. Related: QF1, QF3, QF5.`,
    refs: [
      { label: "Montvay & Münster, 'Quantum Fields on a Lattice' (CUP, 1994; publisher preview)", url: "https://assets.cambridge.org/97805215/99177/frontmatter/9780521599177_frontmatter.pdf" },
    ] },

  { id: "QF5", cat: "qft", horizon: "programme",
    title: "Chiral gauge theories on the lattice",
    statement: r`Construct nonperturbative regulators for non-Abelian chiral gauge theories with all local and global anomalies cancelled, proving locality, global gauge consistency, removal of unwanted mirror modes and the required continuum fermion content.`,
    context: r`Putting chiral fermions on a lattice is obstructed by the Nielsen–Ninomiya theorem: a local, translation-invariant, hermitian lattice fermion action with the right symmetries necessarily produces species doublers, spoiling chirality. This is why nonperturbatively defining the electroweak (chiral) sector is hard, whereas vector-like QCD is fine.

What is known: The Ginsparg–Wilson relation and overlap/domain-wall constructions avoid the naive doubling obstruction by modifying its assumptions. Lüscher's anomaly-free Abelian construction is nonperturbative, with exact gauge invariance including finite-volume topological sectors; it is not merely an all-orders perturbative result. Symmetric mass generation and interacting mirror-fermion approaches provide further proposals, whose locality and mirror decoupling must be checked for the intended representation.

Published progress (July 2026): Thorngren, Preskill and Fidkowski propose symmetry disentanglers that convert suitable non-on-site symmetries into on-site ones. Their explicit Abelian examples and low-dimensional constructions do not establish a general non-Abelian regulator with the desired interacting continuum limit.

A general, nonperturbative construction of an arbitrary anomaly-free non-abelian chiral gauge theory with the correct continuum limit is still open. Related: QF4.`,
    refs: [
      { label: "Nielsen & Ninomiya, 'Absence of neutrinos on a lattice: (I). Proof by homotopy theory', Nucl. Phys. B185, 20–40 (1981)", url: "https://doi.org/10.1016/0550-3213(81)90361-8" },
      { label: "Lüscher, 'Abelian chiral gauge theories on the lattice with exact gauge invariance', Nucl. Phys. B549 (1999)", url: "https://arxiv.org/abs/hep-lat/9811032" },
      { label: "Kaplan, 'Chiral gauge theory at the boundary between topological phases', PRL 132, 141603 (2024; preprint 2023)", url: "https://arxiv.org/abs/2312.01494" },
      { label: "Thorngren, Preskill & Fidkowski, 'Chiral lattice gauge theories from symmetry disentanglers', JHEP 07 (2026) 271", url: "https://link.springer.com/article/10.1007/JHEP07(2026)271" },
    ] },

  { id: "QF6", cat: "qft", horizon: "programme",
    title: "Asymptotic completeness in interacting relativistic QFT",
    statement: r`For a specified massive, local, interacting relativistic QFT in $3+1$ dimensions, prove that the vacuum and scattering states of stable particles span the chosen physical sector; formulate separate completeness criteria when massless particles or charges invalidate this particle description.`,
    context: r`In a massive particle-scattering setting, asymptotic completeness says that scattering states built from the specified stable particles exhaust the physical sector under consideration. It is stronger than existence of an S-matrix on a scattering subspace. Different superselection sectors or theories without a complete particle interpretation require an explicitly different target.

What is known: Haag–Ruelle theory constructs scattering states in massive theories under spectral assumptions; existence of these states does not prove completeness. Complete results exist for particular factorizing $1+1$-dimensional models. Duell–Dybalski establish results for massive wedge-local theories in higher dimensions, which are not the same target as strictly local theories. Earlier constructive results in restricted energy sectors or space-cutoff models must not be read as a general completeness theorem for $P(\phi)_2$ or interacting 2D/3D QFT. Many-body Schrödinger completeness theorems likewise concern a different setting.

The four-dimensional local target can be pursued by conditional axiomatic theorems as well as explicit constructions (QF1/QF3). With massless quanta, especially charged infraparticle sectors, ordinary finite-particle Fock completeness is not the right unrestricted statement; QF7 tracks alternative asymptotic observables and sectors.`,
    refs: [
      { label: "Haag, 'Local Quantum Physics: Fields, Particles, Algebras' (Springer, 2nd ed., 1996)", url: "https://link.springer.com/book/10.1007/978-3-642-61458-3" },
      { label: "Buchholz, 'Collision theory for massless bosons', Comm. Math. Phys. 52 (1977)", url: "https://doi.org/10.1007/BF01625781" },
      { label: "Duell & Dybalski, 'Asymptotic Completeness in a Class of Massive Wedge-Local Quantum Field Theories in Any Dimension', CMP (2023)", url: "https://link.springer.com/article/10.1007/s00220-023-04690-0" },
    ] },

  { id: "QF7", cat: "qft", horizon: "incremental", status: "improved",
    reviewedAt: "2026-09-10",
    evidence: [
      { kind: "preprint", summary: "Perturbative Wilson-line-dressed scalar-QED sector and infraparticle scaling with explicit infrared regulation; not general nonperturbative scattering completeness.", url: "https://arxiv.org/abs/2609.06224v1", date: "2026-09-05", version: "v1" },
    ],
    title: "Infrared sectors and infraparticles",
    statement: r`For a specified charged model, construct infrared-finite scattering predictions for stated inclusive observables and asymptotic charge sectors, prove the applicable completeness statement, and control collinear singularities where massless charged particles are included.`,
    context: r`In QED a charged particle is inevitably accompanied by a cloud of soft photons; it is an 'infraparticle' with no sharp mass and does not sit in a standard Wigner irreducible representation of the Poincaré group. Naive scattering amplitudes are infrared-divergent, and the usual Fock-space asymptotic states do not exist for charged particles.

What is known: Several partial frameworks address this. Bloch–Nordsieck and the Faddeev–Kulish construction dress charged states with coherent clouds of soft photons to yield IR-finite S-matrix elements. Algebraically, Buchholz and collaborators developed the theory of superselection sectors, the Gauss-law charge, and the breaking of Lorentz symmetry in charged sectors, characterizing infraparticles rigorously. More recently the connection to asymptotic symmetries and soft theorems (Strominger et al.) and to the memory effect has reorganized the subject, linking soft photons to large gauge transformations.

Published progress: Prabhu–Satishchandran (2024) develop an algebraic infrared-finite scattering construction using generalized asymptotic states and superscattering, with soft theorems. This advances the formalism without providing a nonperturbative construction of four-dimensional QED or removing every collinear difficulty.

The frontier is model-specific control: relate the algebraic asymptotic data to finite-resolution detector probabilities, state the sectors on which completeness holds, and prove existence/error bounds under the chosen infrared and collinear assumptions. A uniquely preferred notation or universal agreement between formalisms is not the success criterion. Related: QF3, QF6.

Preprint progress (5 September 2026, v1): Semenoff and Waterfield develop a gauge- and Lorentz-invariant perturbative calculus for Wilson-line-dressed scalar QED with a Stueckelberg photon-mass infrared regulator. They obtain dressing-dependent cloud orthogonality, superselection sectors and infraparticle branch-cut scaling, with one-loop-exact exponents under their mass-gapped-matter assumptions. These are regulated perturbative results for scalar QED, not a nonperturbative construction of QED or an asymptotic-completeness proof for general charged scattering.`,
    refs: [
      { label: "Semenoff & Waterfield, 'The Wilson-line-dressed charged sector of scalar QED: superselection and the infraparticle' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.06224v1" },
      { label: "Buchholz, 'Gauss' law and the infraparticle problem', Phys. Lett. B174 (1986)", url: "https://doi.org/10.1016/0370-2693(86)91110-X" },
      { label: "Strominger, 'Lectures on the Infrared Structure of Gravity and Gauge Theory' (Princeton, 2018)", url: "https://arxiv.org/abs/1703.05448" },
      { label: "Prabhu & Satishchandran, 'Infrared finite scattering theory: Amplitudes and soft theorems', PRD 110, 085022 (2024)", url: "https://journals.aps.org/prd/abstract/10.1103/PhysRevD.110.085022" },
    ] },

  { id: "QF8", cat: "qft", horizon: "incremental",
    title: "Finite-resource entanglement in continuum QFT",
    statement: r`For specified local algebras, spacetime separation and energy/work budgets, bound entanglement distillation and catalytic embezzlement yields and errors under physically implementable local operations, including mixed states.`,
    context: r`Local algebras in standard relativistic continuum QFT are typically type III. They have no intrinsic regional trace and density-matrix entropy of the finite-dimensional tensor-product kind. Cutoff entropies can diverge from short-distance correlations across the boundary; this does not prevent algebraic states or operational entanglement from being defined.

What is known: Modular theory and Araki relative entropy give regulator-independent tools. Relative entropy is an extended-valued quantity, not always finite; mutual information is finite only under appropriate state/region hypotheses. Longo–Xu rigorously calculate examples and their singular limits, including divergence as interval boundaries meet. Neither quantity should be described as unconditionally UV finite.

Published progress (2025): van Luijk, Stottmeister, Werner and Wilming formulate LOCC for commuting von Neumann algebras and extend Nielsen's pure-state conversion theorem to arbitrary factors. Under the stated Haag-duality assumptions, type III pure states can be converted into one another to arbitrary accuracy by LOCC; for type III_1 local operations without classical communication suffice. Universal entanglement embezzlement further shows how unconstrained algebraic operations can trivialize conversion costs.

The missing step is therefore not an unrestricted pure-state formalism. Fix an admissible finite-energy operation model and ask for matching bounds on work, localization, separation, output entanglement and approximation error. Determine which mixed-state and gauge-constrained resources remain accessible, and whether predictions have regulator-independent limits. Related: QF9, QF11, F7.`,
    evidence: [{ kind: "published", summary: "LOCC and a generalized Nielsen theorem exist for arbitrary factors; unrestricted type-III pure-state conversion is characterized under Haag duality, without imposing finite-energy operation costs.", url: "https://doi.org/10.1007/s00220-025-05465-5", date: "2025-10-30" }],
    relations: [{ id: "QF9", type: "related" }, { id: "QF11", type: "related" }],
    refs: [
      { label: "Witten, 'Notes on some entanglement properties of quantum field theory', Rev. Mod. Phys. 90, 045003 (2018)", url: "https://arxiv.org/abs/1803.04993" },
      { label: "Faulkner, Leigh, Parrikar & Wang, 'Modular Hamiltonians for Deformed Half-Spaces and the Averaged Null Energy Condition' (2016)", url: "https://arxiv.org/abs/1605.08072" },
      { label: "Ceyhan & Faulkner, 'Recovering the QNEC from the ANEC', Comm. Math. Phys. (2020)", url: "https://arxiv.org/abs/1812.04683" },
      { label: "van Luijk, Stottmeister, Werner & Wilming, 'Pure State Entanglement and von Neumann Algebras', CMP (2025)", url: "https://doi.org/10.1007/s00220-025-05465-5" },
      { label: "van Luijk et al., 'Embezzlement of entanglement, quantum fields, and the classification of von Neumann algebras'", url: "https://arxiv.org/abs/2401.07299" },
      { label: "Longo & Xu, 'Relative Entropy in CFT', Advances in Mathematics 337 (2018)", url: "https://arxiv.org/abs/1712.07283" },
    ] },

  { id: "QF9", cat: "qft", horizon: "incremental",
    title: "Subsystems in gauge theories",
    statement: r`For specified gauge-invariant operations and boundary access, characterize distillable resources of spatial subsystems and prove when their continuum predictions are regulator independent; compare different access models without assuming a unique factorization.`,
    context: r`In a gauge theory the Gauss-law constraint entangles degrees of freedom across any spatial boundary, so a region's Hilbert space does not factorize as a simple tensor product. Defining 'the entanglement entropy of a region' requires a choice — an algebra with a nontrivial center, or the introduction of boundary 'edge modes' — and different choices give different answers.

What is known: Casini–Huerta–Rosabal formulated the algebraic center-choice approach; Donnelly and Donnelly–Freidel developed boundary edge-mode descriptions. Entropy decompositions depend on the algebra and access model and, in non-Abelian theories, can include representation-dependent terms as well as classical flux-sector uncertainty. Van Acoleyen et al. give an operational lattice distillation analysis including non-Abelian gauge groups: not every extended-Hilbert-space entropy contribution is distillable by gauge-invariant local operations.

What remains is controlled passage from a stated lattice access model to continuum gauge fields, with dynamical matter, boundary resources and finite-energy operations explicitly accounted for. Compare inequivalent definitions by the tasks they permit, rather than demanding that physically different access models share one canonical entropy. Related: QF8, QF11, F7.`,
    refs: [
      { label: "Casini, Huerta, Rosabal, 'Remarks on entanglement entropy for gauge fields', PRD 89, 085012 (2014)", url: "https://arxiv.org/abs/1312.1183" },
      { label: "Donnelly & Freidel, 'Local subsystems in gauge theory and gravity', JHEP 09 (2016) 102", url: "https://arxiv.org/abs/1601.04744" },
      { label: "Van Acoleyen et al., 'The entanglement of distillation for gauge theories'", url: "https://arxiv.org/abs/1511.04369" },
    ] },

  { id: "QF10", cat: "qft", horizon: "programme",
    title: "Interacting QFT on curved spacetime",
    statement: r`For a specified interacting field model and class of globally hyperbolic curved spacetimes, construct local observables and admissible states beyond formal perturbation theory; state any extra boundary, symmetry or preparation data used to select a state.`,
    context: r`On a generic curved spacetime there is no Poincaré symmetry and hence no preferred vacuum or particle notion. The framework of locally covariant / algebraic QFT (Brunetti–Fredenhagen–Verch) provides a mathematically clean formulation, using Hadamard states to fix the short-distance structure and define renormalized observables like the stress tensor.

What is known: The perturbative theory is in excellent shape. Interacting fields on curved backgrounds have been constructed to all orders in perturbation theory via causal (Epstein–Glaser) renormalization and the operator-product/microlocal-spectrum machinery (Hollands–Wald, Brunetti–Fredenhagen), with a consistent, background-independent renormalization scheme. The class of Hadamard states and their properties are well understood.

Fewster–Verch's natural-state no-go theorem obstructs a universally covariant preferred-state assignment under its dynamical-locality and other assumptions. It is not a proof that Hadamard states or physically useful states do not exist. Restricting backgrounds or supplying symmetry, boundary or preparation data avoids demanding a universally natural vacuum.

The target is a model- and dimension-specific nonperturbative construction with controlled renormalized observables and state dependence. In four dimensions this inherits flat-space construction difficulties (QF1/QF3); curvature introduces additional issues, but neither every lower-dimensional case nor perturbative curved-spacetime QFT is being declared unsolved.`,
    refs: [
      { label: "Brunetti, Fredenhagen, Verch, 'The generally covariant locality principle...', Comm. Math. Phys. 237 (2003)", url: "https://arxiv.org/abs/math-ph/0112041" },
      { label: "Hollands & Wald, 'Quantum fields in curved spacetime', Phys. Rep. 574 (2015)", url: "https://arxiv.org/abs/1401.2026" },
      { label: "Fewster & Verch, 'Dynamical locality and covariance: What makes a physical theory the same in all spacetimes?'", url: "https://arxiv.org/abs/1106.4785" },
    ] },

  { id: "QF11", cat: "qft", horizon: "incremental",
    title: "Physically implementable local QFT measurements",
    statement: r`Given a local algebraic instrument and a compact spacetime coupling region, characterize whether localized coupling to an admissibly prepared probe field can implement or approximate the instrument while respecting causality and preserving the chosen admissible state class.`,
    context: r`An abstract observable or completely positive instrument need not come with a causal laboratory implementation. In relativistic QFT, a measurement model must specify the probe, its preparation, the spacetime support of the coupling, and the final accessible readout; naive ideal measurements of extended observables can conflict with causal requirements.

Published baseline: Mandrysch–Navascués (2025) construct Gaussian-modulated measurements of smeared fields within the Fewster–Verch probe framework and establish a movable measurement cut for that class. Thus neither all local field measurements nor the basic probe formalism are missing.

The open reachability question is which more general instruments admit such a realization or controlled approximation. Fix the field model, state class, localization and error criterion; quantify the necessary probe energy and coupling cost, and identify impossibility criteria. Interacting and gauge-constrained models require their own assumptions. This operational task is distinct from outcome ontology (F1) and from computing continuum entanglement (QF8).`,
    relations: [{ id: "QF8", type: "related" }, { id: "QF9", type: "related" }, { id: "F1", type: "related" }],
    evidence: [{ kind: "published", summary: "Gaussian-modulated smeared-field measurements and a movable probe cut are constructed; arbitrary instrument reachability is not established.", url: "https://doi.org/10.1007/s11005-025-02001-3", date: "2025-10-24" }],
    refs: [
      { label: "Mandrysch & Navascués, 'Quantum Field Measurements in the Fewster-Verch Framework', Letters in Mathematical Physics 115, 115 (2025)", url: "https://doi.org/10.1007/s11005-025-02001-3" },
    ] },
];
