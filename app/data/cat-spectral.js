const r = String.raw;

export const SPECTRAL = [
  { id: "M1", cat: "spectral", horizon: "sharp", status: "improved",
    title: "Ionization conjecture for atoms",
    statement: r`For the nonrelativistic Coulomb Hamiltonian of fermionic spin-1/2 electrons and a fixed point nucleus of charge $Z$, prove that the maximal number of bound electrons satisfies $N_c(Z)\le Z+C$, with $C$ independent of $Z$.`,
    context: r`The question is how many electrons a nucleus of charge $Z$ can bind. Physically atoms bind at most one or two extra electrons, so one expects $N_c(Z)-Z$ to stay bounded. Proving this from the many-body Schrödinger operator $H=\sum_i(-\Delta_i-Z/|x_i|)+\sum_{i<j}1/|x_i-x_j|$ is the ionization conjecture.

What is known: Zhislin proved that a neutral or positive net charge always binds ($N_c(Z)\ge Z$). On the upper side, Ruskai and Sigal showed $N_c(Z)$ is finite; Lieb's elegant argument gives $N_c(Z)<2Z+1$, and asymptotic results (Lieb–Sigal–Simon–Thirring, Fefferman–Seco) show $N_c(Z)/Z\to1$ as $Z\to\infty$. Nam later improved the bound to roughly $N_c(Z)\le 1.22\,Z + 3Z^{1/3}$.

The conjectured sharp form $N_c(Z)\le Z+C$ has been proved in mean-field surrogates: Solovej established it for Hartree–Fock theory, and analogous statements hold in Thomas–Fermi–type and reduced density-matrix models. For the full many-electron Schrödinger operator it remains open; the obstruction is controlling electron–electron screening rigorously without a self-consistent mean field.

Preprint progress (2025): Hundertmark, Pattakos and Schulz report $N_c(Z)<1.1185Z+O(Z^{1/3})$. This improves an explicit finite-$Z$ estimate, not the already known asymptotic coefficient one and not the uniform excess-charge conjecture. Uniform ionization-energy and radius bounds are related but separate targets.`,
    evidence: [{ kind: "preprint", summary: "An improved explicit ionization bound, not a proof of uniformly bounded excess charge.", url: "https://arxiv.org/abs/2504.18487" }],
    refs: [
      { label: "Lieb, 'Bound on the maximum negative ionization of atoms and molecules', PRA 29, 3018 (1984)", url: "https://doi.org/10.1103/PhysRevA.29.3018" },
      { label: "Solovej, 'The ionization conjecture in Hartree–Fock theory', Ann. of Math. 158 (2003)", url: "https://arxiv.org/abs/math-ph/0012026" },
      { label: "Nam, 'New bounds on the maximum ionization of atoms', Comm. Math. Phys. 312 (2012)", url: "https://arxiv.org/abs/1009.2367" },
      { label: "Lieb & Seiringer, 'The Stability of Matter in Quantum Mechanics' (CUP, 2010)", url: "https://www.cambridge.org/core/books/the-stability-of-matter-in-quantum-mechanics/BC90EBAF135B745979EA749076A2F931" },
      { label: "Hundertmark, Pattakos & Schulz, improved ionization bound (2025 preprint)", url: "https://arxiv.org/abs/2504.18487" },
      { label: "Solovej, Quantissima lectures on the ionization conjecture (2025)", url: "https://bruneau.perso.math.cnrs.fr/quantissima2025/slidesweek2/Solovej_Quantissima2025_Lectures.pdf" },
    ] },

  { id: "M2", cat: "spectral", horizon: "sharp",
    title: "Delocalization in the 3D Anderson model",
    statement: r`For $H_\lambda=-\Delta+\lambda V_\omega$ on $\ell^2(\mathbb Z^3)$, with independent potentials uniform on $[-1,1]$, prove that all sufficiently small $\lambda>0$ admit a nonempty interval in the free band with almost-sure nonzero absolutely continuous spectrum.`,
    context: r`The Anderson Hamiltonian $H=-\Delta+\lambda V_\omega$ on $\ell^2(\mathbb{Z}^d)$, with i.i.d. random potential $V_\omega$, models a quantum particle in a disordered medium. Physics (the scaling theory of localization) predicts that for $d\ge3$ and weak disorder $\lambda$ there is a mobility edge separating a low-energy/strong-disorder localized regime from a delocalized regime with absolutely continuous (a.c.) spectrum and diffusive transport.

What is known: Multiscale analysis and fractional-moment methods establish localization in one dimension and, under appropriate distribution hypotheses, at strong disorder or spectral edges in higher dimensions. They do not prove full-spectrum localization for arbitrarily weak disorder in the standard scalar two-dimensional model; that separate question is M12. Nonzero a.c. spectrum at weak disorder for the standard scalar i.i.d. cubic-lattice model remains open. This statement does not exclude results for other random operators, internal degrees of freedom or non-Euclidean graphs.

An important solved comparison is the Bethe lattice (regular tree), where Klein proved persistence of a.c. spectrum at weak disorder, followed by further results of Aizenman, Warzel, Sims and others. A tree is not the cubic lattice. Diffusive transport is a stronger, separate dynamical target; a.c. spectrum alone does not supply it.

Mobility-edge subproblem (formerly M3): for this same fixed model, establish a boundary between localized and a.c. energy regions, then bound its location or regularity. Do not assume there is exactly one such boundary or identify spectral localization with every possible transport criterion.`,
    relations: [{ id: "M3", type: "benchmark" }, { id: "M12", type: "related" }],
    refs: [
      { label: "Aizenman & Warzel, 'Random Operators: Disorder Effects on Quantum Spectra and Dynamics' (AMS, 2015)", url: "https://doi.org/10.1090/gsm/168" },
      { label: "Klein, 'Extended states in the Anderson model on the Bethe lattice', Adv. Math. 133 (1998)", url: "https://www.sciencedirect.com/science/article/pii/S0001870897916881" },
      { label: "Fröhlich & Spencer, 'Absence of diffusion in the Anderson tight binding model for large disorder or low energy', Comm. Math. Phys. 88 (1983)", url: "https://doi.org/10.1007/BF01209475" },
      { label: "Aizenman & Molchanov, 'Localization at large disorder and at extreme energies: An elementary derivation', Comm. Math. Phys. 157 (1993)", url: "https://doi.org/10.1007/BF02099760" },
      { label: "Bucaj et al., localization and the unresolved higher-dimensional regimes", url: "https://arxiv.org/abs/1706.06135" },
    ] },

  { id: "M3", cat: "spectral", horizon: "incremental",
    archive: { kind: "merged", targets: ["M2"], reason: "Mobility edges are retained as a model-specific subproblem of the 3D Anderson problem, not counted twice." },
    title: "Mobility edges",
    statement: r`For the scalar i.i.d. cubic-lattice Anderson model specified in M2, establish and locate a boundary between localized and absolutely continuous spectral regions.`,
    context: r`A mobility edge is a critical energy $E_c$ at which the nature of the spectrum changes from pure-point (localized) to absolutely continuous (delocalized). It is the sharp fingerprint of the Anderson transition and is tightly linked to M2: a full solution would prove both the delocalized phase and the existence of the boundary.

What is known: The missing a.c. regime obstructs this programme for the standard scalar i.i.d. cubic-lattice model. This is not a no-progress assertion about every random operator. Trees and structured quasiperiodic models have different solved transition phenomena. In the almost-Mathieu family, spectral type depends on coupling and arithmetic/phase hypotheses; a coupling transition is not automatically an energy-dependent mobility edge.

Even for the random case, a proof that some mobility edge exists — without pinning its location — would be major progress, as would rigorous control of its regularity or of critical exponents. This is an incremental, quantitative target sitting inside the M2 programme.`,
    refs: [
      { label: "Avila, 'Global theory of one-frequency Schrödinger operators', Acta Math. 215 (2015)", url: "https://arxiv.org/abs/0905.3902" },
      { label: "Aizenman & Warzel, 'Random Operators: Disorder Effects on Quantum Spectra and Dynamics' (AMS, 2015); background for M2", url: "https://doi.org/10.1090/gsm/168" },
    ] },

  { id: "M4", cat: "spectral", horizon: "programme",
    title: "Many-body localization",
    statement: r`For a specified ensemble of interacting disordered spin chains, establish or exclude thermodynamic many-body localization with a stated energy window, probability bound and quasilocal-integral-of-motion criterion. Determine stability under a bounded local perturbation class; treat higher-dimensional avalanche instability separately.`,
    context: r`Many-body localization (MBL) is the conjectured survival of Anderson localization once interactions are switched on: an isolated, strongly disordered interacting system fails to thermalize, retains memory of initial conditions, and exhibits an emergent set of quasilocal integrals of motion (l-bits) with only logarithmic entanglement growth.

What is known: The strongest rigorous result is Imbrie's proof of MBL for a specific disordered 1D quantum spin chain, conditional on a physically reasonable but unproven level-statistics (limited level attraction) assumption. Perturbative and numerical studies broadly support an MBL phase in strongly disordered 1D systems.

The status is genuinely contested. De Roeck and Huveneers develop an ETH-based avalanche theory: rare thermal regions may destabilize localization, with particularly severe higher-dimensional predictions. This is not an unconditional theorem excluding every $d\ge2$ MBL model. Finite-size drifts make numerical extrapolation difficult. A rigorous result must state its disorder law, interaction strengths, energy window, localization diagnostic and perturbation norm; absence of fast transport at accessible sizes does not itself prove a stable thermodynamic phase. Related: B4, B7, U3.`,
    refs: [
      { label: "Imbrie, 'On many-body localization for quantum spin chains', J. Stat. Phys. 163 (2016)", url: "https://arxiv.org/abs/1403.7837" },
      { label: "De Roeck & Huveneers, 'Stability and instability towards delocalization in MBL systems', PRB 95, 155129 (2017)", url: "https://arxiv.org/abs/1608.01815" },
      { label: "Abanin, Altman, Bloch, Serbyn, 'Many-body localization, thermalization, and entanglement', Rev. Mod. Phys. 91, 021001 (2019)", url: "https://arxiv.org/abs/1804.11065" },
    ] },

  { id: "M5", cat: "spectral", horizon: "sharp",
    title: "Haldane gap for the spin-1 Heisenberg chain",
    statement: r`For the spin-1 antiferromagnetic Heisenberg chain $H_L=\sum_{j=1}^L\vec S_j\cdot\vec S_{j+1}$ with periodic boundary conditions and coupling one, prove $\liminf_{L\to\infty}(E_1(L)-E_0(L))>0$, where $E_1$ is the first energy strictly above the ground space.`,
    context: r`Haldane predicted in 1983 that antiferromagnetic Heisenberg chains behave qualitatively differently for integer and half-integer spin: integer-spin chains have a unique ground state separated by a spectral gap (the Haldane gap) with exponentially decaying correlations, while half-integer chains are gapless. For $S=1$ the gap is measured numerically at $\Delta\approx0.4105\,J$ and confirmed experimentally in quasi-1D magnets.

What is known: For half-integer spin the Lieb–Schultz–Mattis theorem (extended by Affleck–Lieb, and in higher dimensions by Hastings) rigorously forbids a unique gapped ground state, consistent with gaplessness. On the integer side, the AKLT model — a nearby, specially tuned Hamiltonian — was proved by Affleck, Kennedy, Lieb and Tasaki to have a unique gapped ground state with a valence-bond-solid structure and hidden (string) order; this is the paradigm of a symmetry-protected topological phase. Den Nijs–Rommelse and Kennedy–Tasaki clarified the hidden $\mathbb{Z}_2\times\mathbb{Z}_2$ order and its detection.

The gap of the pure Heisenberg $S=1$ chain remains the target: the AKLT theorem concerns a different Hamiltonian and does not by itself establish a uniformly gapped interpolation. Periodic or bulk-gap conventions avoid confusing the question with low-energy boundary spins of open chains. Higher integer spin is a related extension, not an additional condition for solving this spin-1 benchmark. The LSM theorem allows degeneracy as an alternative to gaplessness in its general setting.`,
    refs: [
      { label: "Haldane, 'Nonlinear field theory of large-spin Heisenberg antiferromagnets: Semiclassically quantized solitons of the one-dimensional easy-axis Néel state', PRL 50, 1153 (1983)", url: "https://doi.org/10.1103/PhysRevLett.50.1153" },
      { label: "Affleck, Kennedy, Lieb & Tasaki, 'Valence bond ground states in isotropic quantum antiferromagnets', Comm. Math. Phys. 115, 477 (1988)", url: "https://doi.org/10.1007/BF01218021" },
      { label: "Lieb, Schultz & Mattis, 'Two soluble models of an antiferromagnetic chain', Ann. Phys. 16 (1961)", url: "https://doi.org/10.1016/0003-4916(61)90115-4" },
      { label: "Hastings, 'Lieb–Schultz–Mattis in higher dimensions', PRB 69, 104431 (2004)", url: "https://doi.org/10.1103/PhysRevB.69.104431" },
      { label: "Tasaki, open lectures on quantum spin systems and the Haldane problem", url: "https://haltasaki.github.io/OL/" },
    ] },

  { id: "M6", cat: "spectral", horizon: "incremental",
    title: "Gap stability beyond controlled classes",
    statement: r`Extend verifiable bulk-gap stability criteria to a specified interacting lattice family outside current theorems. Fix the unperturbed gap, ground-space assumptions and interaction-decay norm, and prove a system-size-independent perturbation radius preserving a positive bulk gap.`,
    context: r`Whether a spectral gap survives adding small local perturbations underpins the very notion of a gapped quantum phase of matter. If the gap can close under arbitrarily small perturbations, 'gapped phase' is not well defined.

What is known: The original Bravyi–Hastings–Michalakis theorem treats geometrically local commuting-projector Hamiltonians satisfying its topological-order conditions, including toric-code-type examples. Michalakis–Zwolak extend stability to frustration-free systems with local topological order and local-gap assumptions. Later work of Nachtergaele–Sims–Young develops further bulk and quasi-local stability tools. These are different sets of sufficient hypotheses, not a theorem for every frustration-free gapped model.

Residual targets include quantitatively weaker decay assumptions or a chosen frustrated family not covered by an existing criterion. They must be checked against later stability theorems: neither degeneracy nor frustration alone puts a model outside all known results. Specify, for example, a weighted interaction norm with an explicit power-law exponent, and distinguish an infinite-volume bulk gap from gaps of finite regions with physical edges. Stability of a low-energy band is not the same as keeping every finite-volume ground-state splitting zero.`,
    refs: [
      { label: "Bravyi, Hastings, Michalakis, 'Topological quantum order: stability under local perturbations', J. Math. Phys. 51, 093512 (2010)", url: "https://arxiv.org/abs/1001.0344" },
      { label: "Michalakis & Zwolak, 'Stability of frustration-free Hamiltonians', Comm. Math. Phys. 322 (2013)", url: "https://arxiv.org/abs/1109.1588" },
      { label: "Nachtergaele, Sims & Young, 'Quasi-locality bounds for quantum lattice systems. Part I. Lieb–Robinson bounds, quasi-local maps, and spectral flow automorphisms', J. Math. Phys. 60 (2019)", url: "https://arxiv.org/abs/1810.02428" },
    ] },

  { id: "M7", cat: "spectral", horizon: "incremental",
    title: "Spectral gaps of PEPS parent Hamiltonians",
    statement: r`For a stated two-dimensional PEPS tensor class, give verifiable sufficient tensor or boundary-state conditions implying a system-size-independent bulk gap of its parent Hamiltonian, with an explicit lower bound.`,
    context: r`Projected entangled-pair states (PEPS) are the 2D generalization of matrix product states (MPS); each family comes with a 'parent Hamiltonian' having the PEPS as ground state. Deciding whether that parent Hamiltonian is gapped in the thermodynamic limit controls whether the state represents a stable gapped phase.

What is known: Injective MPS have gapped parent Hamiltonians with the appropriate boundary/interaction-length conventions. In 2D, ordinary injectivity gives parent-state uniqueness under its hypotheses, whereas G-injective PEPS deliberately accommodate topological ground-state degeneracy, including on a torus. Neither property by itself supplies a uniform 2D gap. Additional boundary-factorization or finite-size conditions yield positive results in controlled classes.

Undecidability of the unrestricted Hamiltonian gap problem (U1) is important background, not automatically a theorem for each promised PEPS class: a reduction must preserve that class's assumptions. A successful sufficient certificate may leave other instances undecided. Specify tensor conditioning, boundary locality and the meaning of any transfer-operator gap rather than treating correlation length alone as a complete criterion.`,
    refs: [
      { label: "Cirac, Pérez-García, Schuch & Verstraete, 'Matrix product states and projected entangled pair states: Concepts, symmetries, and theorems', Rev. Mod. Phys. 93, 045003 (2021)", url: "https://arxiv.org/abs/2011.12127" },
      { label: "Pérez-García, Verstraete, Wolf, Cirac, 'PEPS as unique ground states of local Hamiltonians', QIC 8 (2008)", url: "https://arxiv.org/abs/0707.2260" },
      { label: "Schuch, Cirac & Pérez-García, 'PEPS as ground states: Degeneracy and topology' (2010)", url: "https://www.sciencedirect.com/science/article/pii/S0003491610000990" },
    ] },

  { id: "M8", cat: "spectral", horizon: "sharp",
    title: "Quantum unique ergodicity on negatively curved surfaces",
    statement: r`For every compact connected smooth surface without boundary and with strictly negative curvature, does every sequence of normalized Laplace eigenfunctions with eigenvalues tending to infinity have Liouville semiclassical measure, including arbitrary choices within degenerate eigenspaces?`,
    context: r`Quantum ergodicity asks how eigenfunctions of a system with chaotic classical limit distribute in phase space at high energy. The Shnirelman–Zelditch–Colin de Verdière theorem says that for an ergodic classical flow, a density-one subsequence of eigenfunctions equidistributes. Quantum Unique Ergodicity (QUE), conjectured by Rudnick–Sarnak, is the stronger statement that the full sequence equidistributes — no exceptional sparse subsequences, and in particular no strong scarring.

What is known: QUE is a theorem in the arithmetic setting. Lindenstrauss proved arithmetic QUE for Hecke–Maass forms on congruence surfaces using measure rigidity for the diagonal action; Soundararajan removed a remaining escape-of-mass issue, and Holowinsky–Soundararajan proved the holomorphic (mass-form) analogue. These rely crucially on the extra Hecke symmetries.

Ergodicity alone is insufficient: Hassell constructed ergodic billiard counterexamples. Such billiards are not compact boundaryless negatively curved surfaces. The restricted geometric question stated here remains open; arithmetic QUE for specially chosen Hecke eigenbases does not settle every eigenfunction sequence on every such surface. Entropy bounds constrain possible exceptional measures but do not force Liouville measure. Related: M9, M10.`,
    refs: [
      { label: "Rudnick & Sarnak, 'The behaviour of eigenstates of arithmetic hyperbolic manifolds', Comm. Math. Phys. 161 (1994)", url: "https://doi.org/10.1007/BF02099418" },
      { label: "Lindenstrauss, 'Invariant measures and arithmetic quantum unique ergodicity', Ann. of Math. 163 (2006)", url: "https://doi.org/10.4007/annals.2006.163.165" },
      { label: "Anantharaman, 'Entropy and the localization of eigenfunctions', Ann. of Math. 168 (2008)", url: "https://doi.org/10.4007/annals.2008.168.435" },
      { label: "Hassell, 'Ergodic billiards that are not quantum unique ergodic'", url: "https://arxiv.org/abs/0807.0666" },
      { label: "Dyatlov, mathematical account of quantum chaos (2023)", url: "https://www.ams.org/journals/notices/202310/noti2801/noti2801.html" },
    ] },

  { id: "M9", cat: "spectral", horizon: "programme",
    title: "Bohigas–Giannoni–Schmit conjecture",
    statement: r`Establish random-matrix local spectral statistics for an explicitly specified class of quantized chaotic Hamiltonians. A first target is unfolded two-point GOE statistics for a stated class of time-reversal-invariant, non-arithmetic negatively curved surfaces, with symmetry sectors, averaging and the high-energy limit fixed.`,
    context: r`The BGS conjecture (1984) states that the local energy-level statistics of a quantum system whose classical dynamics is chaotic follow the universal random-matrix ensembles (GOE, GUE or GSE depending on time-reversal and spin symmetry). It is the central conjecture of quantum chaos, complementing the Berry–Tabor conjecture for integrable systems (Poisson statistics).

What is known: The semiclassical periodic-orbit approach gives a physicist's derivation of the RMT form factor as a power series in time. Sieber and Richter identified pairs of self-crossing orbits producing the leading correction; Müller, Heusler, Braun, Haake and Altland extended the orbit-pair analysis to all orders. This semiclassical argument uses orbit sum rules and long-orbit statistics; it does not by itself provide uniform error control for the spectral-statistics limit specified here.

Random-matrix and certain graph/model results do not prove the general geometric BGS prediction. Conversely, a blanket assertion that no deterministic quantum-chaotic model has any rigorous statistic is too broad. This is a programme until a concrete class, genericity hypothesis, unfolding, averaging window and statistic are chosen; arithmetic and symmetry-induced exceptions must be excluded explicitly. Two-point correlation, nearest-neighbor spacing and the full point process are different milestones.`,
    refs: [
      { label: "Bohigas, Giannoni & Schmit, 'Characterization of chaotic quantum spectra and universality of level fluctuation laws', PRL 52, 1 (1984)", url: "https://doi.org/10.1103/PhysRevLett.52.1" },
      { label: "Müller, Heusler, Braun, Haake, Altland, 'Semiclassical foundation of universality in quantum chaos', PRL 93, 014103 (2004)", url: "https://doi.org/10.1103/PhysRevLett.93.014103" },
      { label: "Sieber & Richter, 'Correlations between periodic orbits and their rôle in spectral statistics', Phys. Scr. T90, 128–133 (2001)", url: "https://doi.org/10.1238/Physica.Topical.090a00128" },
    ] },

  { id: "M10", cat: "spectral", horizon: "incremental",
    title: "Scars in the semiclassical limit",
    statement: r`For a specified Anosov quantum system, bound the mass that a semiclassical measure of exact eigenstates can assign to an unstable periodic orbit, and determine whether the bounds are attainable by exceptional subsequences.`,
    context: r`A quantum scar is an enhancement of eigenfunction density along an unstable classical periodic orbit, first observed by Heller. In the semiclassical limit, the question is which invariant measures can arise as weak limits ('semiclassical measures') of eigenfunction mass, and how much of that mass can sit on periodic orbits despite classical ergodicity.

What is known: Entropy bounds constrain semiclassical concentration for Anosov flows, with constants and hypotheses depending on the geometry; a universal unqualified one-half rule would overstate them. Explicit partially scarred eigenstates exist for certain quantum cat maps. A quantum map is not a Laplace operator on a negatively curved surface, so those constructions do not settle M8.

Quantum ergodicity already excludes a positive-density family converging to a fixed non-Liouville measure under its usual hypotheses. Meaningful residuals are exceptional zero-density sequences, sharp quantitative concentration bounds, or quasimodes with an explicitly specified spectral width. Finite-energy visual enhancement need not persist as a scarred limiting measure. This is distinct from many-body scars (B7).`,
    refs: [
      { label: "Heller, 'Bound-state eigenfunctions of classically chaotic Hamiltonian systems: Scars of periodic orbits', PRL 53, 1515 (1984)", url: "https://doi.org/10.1103/PhysRevLett.53.1515" },
      { label: "Anantharaman & Nonnenmacher, 'Half-delocalization of eigenfunctions for the Laplacian on an Anosov manifold', Ann. Inst. Fourier 57 (2007)", url: "https://arxiv.org/abs/math-ph/0610019" },
      { label: "Faure, Nonnenmacher & De Bièvre, 'Scarred eigenstates for quantum cat maps of minimal periods', Comm. Math. Phys. 239 (2003)", url: "https://arxiv.org/abs/nlin/0207060" },
      { label: "Dyatlov, quantum chaos and semiclassical measures (2023)", url: "https://www.ams.org/journals/notices/202310/noti2801/noti2801.html" },
    ] },

  { id: "M11", cat: "spectral", horizon: "programme",
    archive: { kind: "merged", targets: ["C10"], reason: "Infinite-dimensional information is a shared programme, now collected under C10 with explicit resource constraints." },
    title: "Infinite-dimensional quantum information",
    statement: r`Background programme: formulate energy-constrained continuity, channel coding and resource-conversion tasks on infinite-dimensional systems with explicit domains, topologies and error guarantees. See C10 for the retained programme and its residual questions.`,
    context: r`Most quantum information theory is proved in finite dimensions, then applied to continuous-variable / bosonic systems by truncation. This is unsatisfactory: von Neumann entropy is not continuous on infinite-dimensional state space, capacities can be infinite without energy constraints, and unbounded observables raise domain questions that truncation hides.

What is known: Holevo's framework and energy-constrained norm/continuity results of Winter, Shirokov and others provide substantial infinite-dimensional information theory. Continuity and compactness require hypotheses on the constraint Hamiltonian. Coding and converse statements depend on the exact energy constraint: a mean-energy condition alone can fail to support a strong converse, even for pure-loss classical communication.

The retained work is to establish quantitative statements under named energy, locality and preparation constraints, not to claim that infinite-dimensional information theory has no coherent framework. C10 collects these residuals, with specific channel tasks in C2/C3 and domain questions in O1.`,
    refs: [
      { label: "Holevo, 'Quantum Systems, Channels, Information' (De Gruyter, 2nd ed. 2019)", url: "https://doi.org/10.1515/9783110642490" },
      { label: "Shirokov, 'Tight uniform continuity bounds for the quantum conditional mutual information, for the Holevo quantity, and for capacities of quantum channels', J. Math. Phys. 58, 102202 (2017)", url: "https://arxiv.org/abs/1512.09047" },
      { label: "Wilde & Winter, energy constraints and failure of the pure-loss strong converse", url: "https://arxiv.org/abs/1308.6732" },
    ] },

  { id: "M12", cat: "spectral", horizon: "sharp",
    title: "Two-dimensional Anderson localization at arbitrary disorder",
    statement: r`For $H_\lambda=-\Delta+\lambda V_\omega$ on $\ell^2(\mathbb Z^2)$ with independent potentials uniform on $[-1,1]$, prove that for every $\lambda>0$ the almost-sure spectrum is pure point with exponentially localized eigenfunctions throughout the spectrum.`,
    context: r`This is the full-spectrum two-dimensional localization question, not the three-dimensional delocalization problem M2. The fixed scalar, real i.i.d. model excludes magnetic, correlated and multi-orbital variants with different physics.

Established baseline: localization is proved in one dimension and at strong disorder or suitable spectral edges in higher dimensions. These results do not settle all energies at arbitrarily weak disorder on the square lattice. Hurtado's 2026 nonstationary-potential advance concerns the bottom of the spectrum, not this universal energy range.

The stated target is spectral localization. Uniform-in-time dynamical localization with quantified moment or eigenfunction-correlator bounds is a stronger related target and should be recorded separately.`,
    relations: [{ id: "M2", type: "related" }],
    refs: [
      { label: "Bucaj et al., primary account of localization and the open 2D problem", url: "https://arxiv.org/abs/1706.06135" },
      { label: "Hurtado, bottom-of-spectrum localization for nonstationary potentials, CMP (2026)", url: "https://doi.org/10.1007/s00220-026-05559-8" },
    ] },

  { id: "M13", cat: "spectral", horizon: "sharp",
    title: "Sharp three-dimensional Lieb–Thirring constant",
    statement: r`For scalar Schrödinger operators $-\Delta+V$ on $L^2(\mathbb R^3)$, is the optimal constant in $\operatorname{Tr}(-\Delta+V)_-\le L_{1,3}\int_{\mathbb R^3}V_-(x)^{5/2}\,dx$ equal to its semiclassical value $L_{1,3}^{\mathrm{cl}}$?`,
    context: r`Here $V_-=\max\{-V,0\}$, and the trace is the sum of absolute values of negative eigenvalues. Fixing the kinetic-energy normalization and the first spectral moment makes this a concrete constant problem. It controls quantitative fermionic kinetic-energy inequalities and stability estimates.

Established baseline: general Lieb–Thirring inequalities and progressively improved bounds are available. The older conjecture giving a two-candidate formula for every dimension and exponent is partly disproved by Frank, Gontier and Lewin; it must not be advertised wholesale as open. The specified first-moment three-dimensional semiclassical equality is the retained target. Better certified upper bounds are useful partial progress, not a resolution.`,
    refs: [
      { label: "Frank, Gontier & Lewin, counterexamples to portions of the general Lieb–Thirring conjecture", url: "https://arxiv.org/abs/2002.04964" },
      { label: "Frank, Hundertmark, Jex & Nam, improved Lieb–Thirring bounds", url: "https://arxiv.org/abs/1808.09017" },
      { label: "Schimmer, review of Lieb–Thirring inequalities and surviving conjectures", url: "https://arxiv.org/abs/2203.06051" },
    ] },
];
