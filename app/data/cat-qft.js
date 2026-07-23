const r = String.raw;

export const QFT = [
  { id: "QF1", cat: "qft", horizon: "sharp",
    title: "Yang–Mills existence and mass gap",
    statement: r`For every compact simple gauge group $G$, construct a nontrivial quantum Yang–Mills theory on $\mathbb{R}^4$ satisfying suitable axioms and prove its Hamiltonian has a mass gap $\Delta>0$.`,
    context: r`This is a Clay Millennium Problem. One must construct four-dimensional quantum Yang–Mills theory as a well-defined quantum field theory (satisfying, e.g., the Wightman or Osterwalder–Schrader axioms) and prove it has a positive mass gap, explaining why the force mediated by non-Abelian gauge fields is short-ranged even though the classical theory is massless.

What is known: In two dimensions Yang–Mills is essentially solvable and rigorously constructed. In three dimensions constructive results and rigorous mass-gap estimates exist for the lattice theory. The renormalization-group / cluster-expansion machinery of constructive QFT has built other nontrivial 4D-adjacent models. Asymptotic freedom (Gross–Wilczek–Politzer) makes the ultraviolet tractable in perturbation theory and gives strong reason to expect a good continuum limit, but perturbation theory cannot see a mass gap.

The 4D construction is wide open. The core difficulties are taking a controlled continuum (and infinite-volume) limit of the lattice gauge theory while retaining gauge invariance and reflection positivity, and proving exponential clustering (the mass gap) nonperturbatively. Recent probabilistic and stochastic-quantization work (Chatterjee; Chandra–Chevyrev–Hairer–Shen on the 3D Yang–Mills measure) has made partial progress on the measure-theoretic side. Related: QF2, QF6.`,
    refs: [
      { label: "Clay Mathematics Institute — Yang–Mills & Mass Gap", url: "https://www.claymath.org/millennium/yang-mills-the-maths-gap/" },
      { label: "Jaffe & Witten, 'Quantum Yang–Mills theory' (official problem description)" },
      { label: "Chandra, Chevyrev, Hairer, Shen, 'Langevin dynamic for the 2D Yang–Mills measure', Publ. IHÉS (2022)" },
    ] },

  { id: "QF2", cat: "qft", horizon: "programme",
    title: "Confinement in 4D Yang–Mills theory",
    statement: r`Prove an appropriate confinement criterion (e.g. an area law for large Wilson loops) and connect it rigorously with the physical spectrum and colour-singlet structure.`,
    context: r`Quark confinement is the statement that colour-charged particles cannot be isolated: the energy to separate them grows without bound, and only colour-singlet states appear in the spectrum. The standard order parameter is an area law for large Wilson loops, $\langle W(C)\rangle\sim e^{-\sigma\,\mathrm{Area}(C)}$, with positive string tension $\sigma$.

What is known: In the strong-coupling lattice regime, Wilson's original argument proves an area law, and it persists in the abelian Higgs / large-mass regimes. Lattice Monte Carlo gives compelling numerical evidence for confinement and a linear static quark potential in 4D non-abelian gauge theory. In 3D, rigorous confinement and mass-gap results exist for certain lattice gauge theories. Chatterjee has rigorous results on Wilson-loop expectations in the lattice theory and their string/large-N structure.

Proving confinement in the continuum 4D theory presupposes (or must be done jointly with) the construction in QF1, and then requires showing the area law survives the weak-coupling continuum limit — precisely the regime where strong-coupling expansions fail. This is a long-horizon programme intertwined with QF1.`,
    refs: [
      { label: "Wilson, 'Confinement of quarks', PRD 10, 2445 (1974)" },
      { label: "Chatterjee, 'Yang–Mills for probabilists' and 'Wilson loops in Ising lattice gauge theory', Comm. Math. Phys. (2019)" },
      { label: "Seiler, 'Gauge Theories as a Problem of Constructive Quantum Field Theory and Statistical Mechanics', Lect. Notes Phys. 159 (1982)" },
    ] },

  { id: "QF3", cat: "qft", horizon: "programme",
    title: "Construction of four-dimensional QED",
    statement: r`Construct continuum quantum electrodynamics nonperturbatively and prove it satisfies a precise set of relativistic QFT axioms, controlling charge renormalization, infrared sectors and the possible Landau pole.`,
    context: r`QED is the most experimentally precise theory in physics, yet it has no nonperturbative mathematical construction. The central worry is 'triviality': the Landau pole suggests the renormalized charge is driven to zero as the ultraviolet cutoff is removed, so a nontrivial continuum interacting QED may not exist.

What is known: Triviality is a theorem for the closely related scalar $\phi^4$ theory. Aizenman (1981) and Fröhlich proved $\phi^4$ is trivial in $d>4$; the marginal and hardest case $d=4$ was settled by Aizenman and Duminil-Copin (2021), who proved $\phi^4_4$ is Gaussian in the continuum limit. This strongly suggests pure QED is likewise trivial, meaning a nontrivial construction on $\mathbb{R}^4$ may be impossible without embedding QED in an asymptotically free larger theory.

So the open problem has two faces: either construct a nontrivial 4D continuum QED (controlling the Landau pole, infrared/soft-photon sectors, and charge renormalization), or rigorously establish its triviality and characterize QED only as an effective theory with a cutoff. Either resolution is a major programme. Related: QF7 (infrared).`,
    refs: [
      { label: "Aizenman & Duminil-Copin, 'Marginal triviality of the scaling limits of critical 4D Ising and φ⁴ models', Ann. of Math. 194 (2021)" },
      { label: "Aizenman, 'Proof of the triviality of φ⁴_d field theory...', Comm. Math. Phys. 86 (1982)" },
    ] },

  { id: "QF4", cat: "qft", horizon: "programme",
    title: "Nonperturbative construction of the Standard Model",
    statement: r`Give a mathematically complete continuum definition of the chiral gauge theory underlying the Standard Model and establish its consistency beyond formal perturbation theory.`,
    context: r`The Standard Model is a chiral, non-abelian gauge theory with Higgs and Yukawa couplings. Defining it as a rigorous quantum field theory requires nonperturbative constructions of its gauge sector (QF1), a nonperturbative regularization of its chiral fermions (QF5), and control of the Higgs sector — which, like $\phi^4$, may be trivial and thus only an effective description.

What is known: Each ingredient is separately open or only partially understood. Perturbative renormalizability and anomaly cancellation are established, and the electroweak vacuum structure is well understood perturbatively. Lattice constructions exist for the vector-like (QCD) sector, but not for the full chiral electroweak theory.

This is the most ambitious construction target in mathematical physics: it inherits every difficulty of QF1, QF3 and QF5 at once, plus the interplay of a possibly-trivial scalar sector with asymptotically free gauge fields. It is firmly a long-horizon programme. Related: QF1, QF3, QF5.`,
    refs: [
      { label: "See QF1 (Yang–Mills), QF3 (QED triviality), QF5 (chiral lattice fermions)" },
      { label: "Montvay & Münster, 'Quantum Fields on a Lattice' (CUP, 1994)" },
    ] },

  { id: "QF5", cat: "qft", horizon: "programme",
    title: "Chiral gauge theories on the lattice",
    statement: r`Construct a general nonperturbative lattice regularization of anomaly-free chiral gauge theories whose continuum limit has the required locality, gauge symmetry and fermion content.`,
    context: r`Putting chiral fermions on a lattice is obstructed by the Nielsen–Ninomiya theorem: a local, translation-invariant, hermitian lattice fermion action with the right symmetries necessarily produces species doublers, spoiling chirality. This is why nonperturbatively defining the electroweak (chiral) sector is hard, whereas vector-like QCD is fine.

What is known: The Ginsparg–Wilson relation and its realization by overlap and domain-wall fermions (Neuberger; Kaplan) solve the doubling problem for vector-like theories and give a lattice-exact chiral symmetry. Lüscher provided a construction of abelian chiral gauge theories on the lattice to all orders. More recently, approaches via symmetric mass generation and interacting (gapped) mirror fermions — using the fact that certain anomaly-free chiral fermion content can be gapped without breaking symmetry — have been proposed (Wang–Wen; Kaplan's boundary approach).

A general, nonperturbative construction of an arbitrary anomaly-free non-abelian chiral gauge theory with the correct continuum limit is still open. Related: QF4.`,
    refs: [
      { label: "Nielsen & Ninomiya, Nucl. Phys. B185 (1981)" },
      { label: "Lüscher, 'Abelian chiral gauge theories on the lattice with exact gauge invariance', Nucl. Phys. B549 (1999)" },
      { label: "Kaplan, 'Chiral gauge theory at the boundary of the world', arXiv review (2023)" },
    ] },

  { id: "QF6", cat: "qft", horizon: "programme",
    title: "Asymptotic completeness in interacting relativistic QFT",
    statement: r`For a nontrivial $3+1$-dimensional interacting QFT, prove that its physical Hilbert space is exhausted by the vacuum, stable particles and their scattering states, with proper treatment of massless particles and infraparticles.`,
    context: r`Asymptotic completeness says the theory has no 'hidden' states beyond multiparticle scattering states built from stable particles — the S-matrix is unitary on the full Hilbert space. It is a basic consistency requirement and a prerequisite for interpreting a QFT in terms of particles.

What is known: Haag–Ruelle scattering theory rigorously constructs in/out states for massive theories with a mass gap, and Buchholz extended much of it to theories with massless particles. Asymptotic completeness has been proved for several constructive models in lower dimensions — e.g. $P(\phi)_2$ and related weakly coupled 2D/3D models (work of Spencer–Zirilli, and the constructive QFT school). In quantum mechanics (N-body Schrödinger operators) asymptotic completeness is a theorem (Sigal–Soffer, Dereziński).

For a genuine 4D interacting relativistic QFT, asymptotic completeness is out of reach because no such theory is yet constructed (QF1/QF3). The massless/infraparticle case is additionally subtle (QF7): charged particles in QED are not sharp-mass Wigner particles at all. This is a programme contingent on the construction problems.`,
    refs: [
      { label: "Haag, 'Local Quantum Physics: Fields, Particles, Algebras' (Springer, 1996)" },
      { label: "Buchholz, 'Collision theory for massless bosons', Comm. Math. Phys. 52 (1977)" },
    ] },

  { id: "QF7", cat: "qft", horizon: "incremental",
    title: "Infrared sectors and infraparticles",
    statement: r`Develop a complete scattering formalism for theories such as QED where charged states carry infinitely many soft quanta and do not belong to ordinary sharp-mass Wigner particle sectors.`,
    context: r`In QED a charged particle is inevitably accompanied by a cloud of soft photons; it is an 'infraparticle' with no sharp mass and does not sit in a standard Wigner irreducible representation of the Poincaré group. Naive scattering amplitudes are infrared-divergent, and the usual Fock-space asymptotic states do not exist for charged particles.

What is known: Several partial frameworks address this. Bloch–Nordsieck and the Faddeev–Kulish construction dress charged states with coherent clouds of soft photons to yield IR-finite S-matrix elements. Algebraically, Buchholz and collaborators developed the theory of superselection sectors, the Gauss-law charge, and the breaking of Lorentz symmetry in charged sectors, characterizing infraparticles rigorously. More recently the connection to asymptotic symmetries and soft theorems (Strominger et al.) and to the memory effect has reorganized the subject, linking soft photons to large gauge transformations.

A single, complete and canonical scattering formalism — reconciling the dressing approaches, the algebraic superselection picture, and the asymptotic-symmetry viewpoint into one operationally clear theory — is still missing. This is an incremental, unifying goal. Related: QF3, QF6.`,
    refs: [
      { label: "Buchholz, 'Gauss' law and the infraparticle problem', Phys. Lett. B174 (1986)" },
      { label: "Strominger, 'Lectures on the Infrared Structure of Gravity and Gauge Theory' (Princeton, 2018)" },
    ] },

  { id: "QF8", cat: "qft", horizon: "incremental",
    title: "Entanglement in continuum QFT",
    statement: r`Give a regulator-independent, operationally meaningful formalism for entanglement and resource conversion where local observable algebras are type III and sharp-region density matrices do not exist.`,
    context: r`In quantum field theory the algebra of observables localized in a region is a type III von Neumann algebra. Consequently there is no density matrix for a sharp spatial region and no well-defined entanglement entropy — the naive entropy is ultraviolet-divergent, dominated by short-distance modes across the entangling surface (the 'area law' divergence).

What is known: Regulator-free quantities do exist. Tomita–Takesaki modular theory provides the modular Hamiltonian and modular flow intrinsically; the relative entropy between states restricted to a region is finite and well defined (Araki), giving a rigorous, monotone entanglement-like measure with proven positivity and monotonicity (used in energy inequalities and the proof of the averaged null energy condition by Faulkner et al. and Ceyhan–Faulkner). Mutual information provides another UV-finite quantity. Witten's review systematized these tools for physicists.

Turning this into a full operational resource theory of entanglement in the continuum — well-defined distillation/dilution notions, entanglement measures with operational meaning, and treatment of gauge constraints — is only partly built. Related: QF9, F7.`,
    refs: [
      { label: "Witten, 'Notes on some entanglement properties of quantum field theory', Rev. Mod. Phys. 90, 045003 (2018)" },
      { label: "Faulkner, Leigh, Parrikar, Wang; Ceyhan & Faulkner, 'Recovering the QNEC from the ANEC', Comm. Math. Phys. (2020)" },
    ] },

  { id: "QF9", cat: "qft", horizon: "incremental",
    title: "Subsystems in gauge theories",
    statement: r`Find a canonical treatment of spatial subsystems, edge modes, centres of local algebras and gauge constraints, clarifying which entanglement definitions correspond to distinct operational tasks.`,
    context: r`In a gauge theory the Gauss-law constraint entangles degrees of freedom across any spatial boundary, so a region's Hilbert space does not factorize as a simple tensor product. Defining 'the entanglement entropy of a region' requires a choice — an algebra with a nontrivial center, or the introduction of boundary 'edge modes' — and different choices give different answers.

What is known: Casini–Huerta–Rosabal formulated the algebraic (center-choice) approach, and Donnelly and Donnelly–Freidel developed the edge-mode picture, showing the entropy splits into a distillable part plus a classical Shannon term over the boundary electric flux (the source of the famous 'topological' and 'contact' terms). On the lattice, these ambiguities are fully explicit and the different definitions are understood as different choices of algebra. The extended-Hilbert-space and center definitions have been reconciled in several settings.

What remains is a canonical, operationally grounded theory: which definition corresponds to which physical task (what an observer with given operational access can actually measure or extract), and how this extends cleanly to the continuum and to non-abelian and dynamical gauge fields. Related: QF8, F7.`,
    refs: [
      { label: "Casini, Huerta, Rosabal, 'Remarks on entanglement entropy for gauge fields', PRD 89, 085012 (2014)" },
      { label: "Donnelly & Freidel, 'Local subsystems in gauge theory and gravity', JHEP 09 (2016) 102" },
    ] },

  { id: "QF10", cat: "qft", horizon: "programme",
    title: "Interacting QFT on curved spacetime",
    statement: r`Construct nonperturbative interacting quantum fields on broad classes of curved globally hyperbolic spacetimes and characterize physically distinguished states without relying on a preferred vacuum.`,
    context: r`On a generic curved spacetime there is no Poincaré symmetry and hence no preferred vacuum or particle notion. The framework of locally covariant / algebraic QFT (Brunetti–Fredenhagen–Verch) provides a mathematically clean formulation, using Hadamard states to fix the short-distance structure and define renormalized observables like the stress tensor.

What is known: The perturbative theory is in excellent shape. Interacting fields on curved backgrounds have been constructed to all orders in perturbation theory via causal (Epstein–Glaser) renormalization and the operator-product/microlocal-spectrum machinery (Hollands–Wald, Brunetti–Fredenhagen), with a consistent, background-independent renormalization scheme. The class of Hadamard states and their properties are well understood.

The nonperturbative construction — building genuine interacting quantum fields on curved globally hyperbolic spacetimes beyond formal power series, and identifying physically distinguished states intrinsically — remains open, inheriting the flat-space construction difficulties (QF1/QF3) and adding curvature. It is a programme, important for a rigorous account of particle creation, Hawking radiation, and cosmological QFT.`,
    refs: [
      { label: "Brunetti, Fredenhagen, Verch, 'The generally covariant locality principle...', Comm. Math. Phys. 237 (2003)" },
      { label: "Hollands & Wald, 'Quantum fields in curved spacetime', Phys. Rep. 574 (2015)" },
    ] },
];
