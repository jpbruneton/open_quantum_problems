const r = String.raw;

export const QFT = [
  { id: "QF1", cat: "qft", horizon: "sharp",
    reviewedAt: "2026-11-08",
    evidence: [
      { kind: "preprint", role: "progress", summary: "First construction of the non-Abelian Yang–Mills–Higgs measure on the two-dimensional torus, by stochastic quantisation, for any fixed couplings. A two-dimensional benchmark, not a four-dimensional construction.", url: "https://arxiv.org/abs/2611.03640v1", date: "2026-11-02", version: "v1" },
    ],
    provenance: [
      { summary: "Bringmann, Cao, Hairer and Zhao state that the main ideas and nearly all of the write-up were produced without AI, and that GPT-6 Astra and GPT-5.6 Sol proved seven listed technical lemmas and propositions, each reviewed before inclusion; ChatGPT Pro and Claude helped with exposition, literature search and proofreading.", url: "https://arxiv.org/abs/2611.03640v1", version: "v1" },
    ],
    title: "Yang–Mills existence and mass gap",
    statement: r`For every compact simple gauge group $G$, construct a nontrivial quantum Yang–Mills theory on $\mathbb{R}^4$ satisfying suitable axioms and prove its Hamiltonian has a mass gap $\Delta>0$.`,
    definition: r`**Yang–Mills existence and mass gap** is a Clay Millennium Problem. One must construct four-dimensional quantum Yang–Mills theory as a well-defined quantum field theory (satisfying, e.g., the Wightman or Osterwalder–Schrader axioms) and prove a positive excitation threshold above the vacuum despite the massless classical gauge fields.

This spectral gap is distinct from screening of external colour charges and from the confinement criterion of QF2. Confinement is a separate property and does not follow from a mass gap alone. Official problem description: Jaffe and Witten, [“Quantum Yang–Mills theory”](https://www.claymath.org/wp-content/uploads/2022/02/MPPc.pdf).`,
    progress: r`- Two-dimensional Yang–Mills has rigorous constructions. The Chandra–Chevyrev–Hairer–Shen work ([arXiv:2006.04987](https://arxiv.org/abs/2006.04987)) concerns the 2D Yang–Mills measure, not a 3D or 4D continuum construction.
- Strong-coupling lattice results and lower-dimensional constructions provide important benchmarks, but a lattice mass gap at fixed spacing is not a positive gap in the four-dimensional continuum limit.
- Asymptotic freedom (Gross–Wilczek–Politzer) controls short-distance perturbation theory; it does not construct the theory or prove its nonperturbative gap.
- Two-dimensional benchmark (2 November 2026, v1): Bringmann, Cao, Hairer and Zhao construct the non-Abelian Yang–Mills–Higgs measure on the two-dimensional torus by stochastic quantisation ([arXiv:2611.03640](https://arxiv.org/abs/2611.03640v1)). The construction is nonperturbative and works for any fixed couplings. Like the 2D Yang–Mills measure above, it does not address four dimensions.
- Announced, unpublished claim (late October 2026): OpenAI [announced](https://openai.com/index/building-scientific-understanding-with-academic-communities/) that an internal model had produced a rigorous existence proof for four-dimensional quantum Yang–Mills theory, including coupling to fermions (QCD). Secondary reports also mention a Standard Model completion. A [shepherding committee](https://www.kitp.ucsb.edu/sites/default/files/YM_working_group.pdf) chaired by David Gross (with Douglas, Jaffe, Klebanov and Nekrasov) has custody of the roughly 1,147-page proof. According to the committee, Balaban's constructive renormalization-group ideas were among the important elements that let the proof reach the continuum limit at infinite distances. It also states that the mass gap and confinement remain open. It plans to release the proof, with a Lean formalization, only after checking that the definitions match the standard problem. No manuscript was public on 8 November 2026.`,
    residual: r`The Clay problem remains open: control both continuum and infinite-volume limits, preserve suitable axioms, and obtain a strictly positive physical mass scale. Even if correct, the announced OpenAI result concerns the existence half of the statement and not the mass gap. Related: QF2, QF6.`,
    relations: [{ id: "QF2", type: "related" }, { id: "QF6", type: "related" }],
    refs: [
      { label: "Douglas, Gross (chair), Jaffe, Klebanov & Nekrasov, 'Proof by OpenAI of the Existence of Quantum Yang–Mills theory: statement by the shepherding committee' (KITP, October 2026)", url: "https://www.kitp.ucsb.edu/sites/default/files/YM_working_group.pdf" },
      { label: "OpenAI, 'Working with academic communities to build scientific understanding' (announcement, 26 October 2026)", url: "https://openai.com/index/building-scientific-understanding-with-academic-communities/" },
      { label: "Bringmann, Cao, Hairer & Zhao, 'Construction of the 2D non-Abelian Yang–Mills–Higgs measure via stochastic quantisation' (2026 preprint, v1)", url: "https://arxiv.org/abs/2611.03640v1" },
      { label: "Clay Mathematics Institute — Yang–Mills & Mass Gap", url: "https://www.claymath.org/millennium/yang-mills-the-maths-gap/" },
      { label: "Jaffe & Witten, 'Quantum Yang–Mills theory' (official problem description)", url: "https://www.claymath.org/wp-content/uploads/2022/02/MPPc.pdf" },
      { label: "Chandra, Chevyrev, Hairer, Shen, 'Langevin dynamic for the 2D Yang–Mills measure', Publ. IHÉS (2022)", url: "https://arxiv.org/abs/2006.04987" },
    ] },

  { id: "QF2", cat: "qft", horizon: "programme",
    title: "Confinement in 4D Yang–Mills theory",
    statement: r`In zero-temperature continuum pure $SU(N)$ Yang–Mills theory, prove a positive asymptotic string tension for external sources with nonzero $N$-ality, using a renormalized Wilson-loop or static-potential criterion.`,
    definition: r`**Confinement** here means confinement of unscreened external colour sources in pure gauge theory: for large separation $R$, the static potential should have a positive linear coefficient, the string tension. A corresponding large-loop area law is $\langle W(C)\rangle\sim e^{-\sigma\,\mathrm{Area}(C)}$, after specifying renormalization and the loop limit.

Nonzero $N$-ality matters: adjoint charges can be screened by gluons, and dynamical fundamental matter permits string breaking. An unqualified area law is therefore not a universal definition for every gauge theory with matter. The Wilson-loop criterion goes back to Wilson, “Confinement of quarks”, [Phys. Rev. D 10, 2445 (1974)](https://journals.aps.org/prd/abstract/10.1103/PhysRevD.10.2445).`,
    progress: r`- Strong-coupling lattice expansions establish area laws in their convergence regimes.
- Lattice Monte Carlo supports positive string tension in four-dimensional pure non-Abelian theories. This is numerical evidence, not a continuum proof.
- Rigorous Wilson-loop results in particular lattice gauge theories and large-$N$ settings provide additional benchmarks, whose gauge groups and coupling regimes must be retained.`,
    residual: r`Proving confinement in the continuum 4D theory presupposes (or must be done jointly with) the construction in QF1, and then requires showing that the area law survives the weak-coupling continuum limit, precisely the regime where strong-coupling expansions fail. This is a long-horizon programme intertwined with QF1.`,
    refs: [
      { label: "Wilson, 'Confinement of quarks', PRD 10, 2445 (1974)", url: "https://journals.aps.org/prd/abstract/10.1103/PhysRevD.10.2445" },
      { label: "Chatterjee, 'Yang–Mills for probabilists' (2018)", url: "https://arxiv.org/abs/1803.01950" },
      { label: "Chatterjee, 'Wilson loops in Ising lattice gauge theory'", url: "https://arxiv.org/abs/1811.09770" },
      { label: "Seiler, 'Gauge Theories as a Problem of Constructive Quantum Field Theory and Statistical Mechanics', Lect. Notes Phys. 159 (1982)", url: "https://link.springer.com/book/10.1007/3-540-11559-5" },
    ] },

  { id: "QF3", cat: "qft", horizon: "programme",
    title: "Existence or triviality of continuum QED₄",
    statement: r`Either construct nontrivial four-dimensional continuum QED satisfying specified relativistic QFT axioms, or prove that removing the ultraviolet cutoff forces its renormalized interaction to vanish; control the charge and infrared sectors in either formulation.`,
    definition: r`**Continuum QED₄** would be four-dimensional quantum electrodynamics constructed nonperturbatively as a relativistic QFT. QED is the most experimentally precise theory in physics, yet it has no nonperturbative mathematical construction.

The central worry is “triviality”: the Landau pole suggests that the renormalized charge is driven to zero as the ultraviolet cutoff is removed, so a nontrivial continuum interacting QED may not exist.`,
    progress: r`- Aizenman and Fröhlich established scalar triviality results above four dimensions (Aizenman, [Phys. Rev. Lett. 47, 1 (1981)](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.47.1)).
- Aizenman and Duminil-Copin proved Gaussianity of scaling limits for specified critical four-dimensional Ising and $\phi^4$ models ([arXiv:1912.07973](https://arxiv.org/abs/1912.07973)).
- These scalar theorems are important comparisons, not QED theorems. They do not establish triviality for a gauge–fermion theory or for the Higgs sector coupled to gauge fields.
- The perturbative Landau-pole argument motivates the question but is not a nonperturbative exclusion proof.`,
    residual: r`The open problem has two faces: either construct a nontrivial 4D continuum QED (controlling the Landau pole, the infrared and soft-photon sectors, and charge renormalization), or rigorously establish its triviality and characterize QED only as an effective theory with a cutoff. Either resolution is a major programme. Related: QF7 (infrared).`,
    refs: [
      { label: "Aizenman & Duminil-Copin, 'Marginal triviality of the scaling limits of critical 4D Ising and φ⁴ models', Ann. of Math. 194 (2021)", url: "https://arxiv.org/abs/1912.07973" },
      { label: "Aizenman, 'Proof of the Triviality of φ⁴ Field Theory and Some Mean-Field Features of Ising Models for d > 4', Phys. Rev. Lett. 47, 1 (1981)", url: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.47.1" },
    ] },

  { id: "QF4", cat: "qft", horizon: "programme",
    archive: { kind: "merged", targets: ["QF1", "QF3", "QF5"], reason: "Construction umbrella retained for history; its gauge, ultraviolet-consistency and chiral-regularization tasks are tracked separately instead of counted again." },
    title: "Nonperturbative construction of the Standard Model",
    statement: r`Give a mathematically complete continuum definition of the chiral gauge theory underlying the Standard Model and establish its consistency beyond formal perturbation theory.`,
    definition: r`**A nonperturbative construction of the Standard Model** would define this chiral, non-Abelian gauge theory with Higgs and Yukawa couplings as a rigorous quantum field theory. This requires nonperturbative constructions of its gauge sector (QF1), a nonperturbative regularization of its chiral fermions (QF5), and control of the Higgs sector, which, like $\phi^4$, may be trivial and thus only an effective description.

Standard reference for the lattice approach: Montvay and Münster, *Quantum Fields on a Lattice* (Cambridge University Press, 1994), [doi:10.1017/CBO9780511470783](https://doi.org/10.1017/CBO9780511470783).`,
    progress: r`- Perturbative renormalizability and anomaly cancellation are established.
- Vector-like lattice gauge theories, nonperturbative Abelian chiral constructions and more recent chiral regulator proposals are available. A finite-cutoff proposal is not a proof of the full interacting continuum Standard Model.
- The scalar and Abelian sectors may instead require a cutoff effective description; a general scalar triviality theorem cannot simply be transferred to the coupled theory.`,
    residual: r`This historical umbrella is merged into QF1, QF3 and QF5. Their results must ultimately be compatible with the Higgs and Yukawa interactions and the full particle content. The merge does not claim that the Standard Model has been constructed or that it must possess a nontrivial continuum limit.`,
    refs: [
      { label: "Montvay & Münster, 'Quantum Fields on a Lattice' (Cambridge University Press, 1994)", url: "https://doi.org/10.1017/CBO9780511470783" },
    ] },

  { id: "QF5", cat: "qft", horizon: "programme", status: "improved",
    reviewedAt: "2026-11-08",
    evidence: [
      { kind: "preprint", role: "progress", summary: "Standard Model with gauge and Higgs fields on a finite lattice and continuum Weyl fermions: a gauge-invariant chiral determinant via anomaly cancellation, a finite gauge-invariant bosonic integral at fixed spacing and volume, and reflection positivity for a variant at zero Yukawa coupling and theta; the bosonic continuum limit is stated to remain open.", url: "https://arxiv.org/abs/2610.29019v1", date: "2026-10-21", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Claimed nonperturbative gauge-invariant overlap-fermion measure on 4D lattices for a class of non-Abelian chiral gauge theories including the Standard Model, on admissible gauge fields; the interacting continuum theory is not constructed.", url: "https://arxiv.org/abs/2610.09093v1", date: "2026-10-06", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Witten describes a variant of Craig's algorithm that couples a continuum interpolation of the lattice gauge field to continuum chiral fermions. It is implementable in principle in any dimension for anomaly-free representations, but not by Monte Carlo because the chiral fermion path integral is not positive.", url: "https://arxiv.org/abs/2611.05051v1", date: "2026-11-03", version: "v1" },
      { kind: "numerical", role: "progress", summary: "Gauge-invariant Hamiltonian lattice regularization of 1+1D Abelian chiral gauge theories with finite-dimensional qudits and exact mod-$N$ anomaly; iMPS simulation of the 34-50 model matches continuum predictions. Abelian and two-dimensional only.", url: "https://arxiv.org/abs/2611.06880v1", date: "2026-11-04", version: "v1" },
    ],
    provenance: [
      { summary: "Hsu states that GPT and Claude were used extensively, that the technical appendix is entirely AI-led (mostly GPT Astra with verification by Claude and other models), and that the author takes responsibility for the results.", url: "https://arxiv.org/html/2610.29019v1", version: "v1" },
      { summary: "Witten thanks Claude Opus 5.5 for assistance on many details and credits it with suggesting the variant that gives a smooth interpolation.", url: "https://arxiv.org/abs/2611.05051v1", version: "v1" },
      { summary: "Lootens and Singh report that, after they conceived the idea and did initial analytic work, Claude (Anthropic) wrote almost all of the simulation and figure code, which they spot-checked against their own code.", url: "https://arxiv.org/abs/2611.06880v1", version: "v1" },
      { summary: "Craig, who lists affiliations including OpenAI, states that GPT-6 Astra was essential: after iterations with Astra and outside experts, the proof is Astra-led, the manuscript combines author-written sections with rewrites of Astra's proof, and Astra carried out Lean and other checks.", url: "https://arxiv.org/abs/2610.09093v1", version: "v1" },
    ],
    title: "Chiral gauge theories on the lattice",
    statement: r`Construct nonperturbative regulators for non-Abelian chiral gauge theories with all local and global anomalies cancelled, proving locality, global gauge consistency, removal of unwanted mirror modes and the required continuum fermion content.`,
    definition: r`**Lattice chiral gauge theory** asks for a nonperturbative regulator of gauge theories whose fermions couple chirally, as in the electroweak sector. Putting chiral fermions on a lattice is obstructed by the Nielsen–Ninomiya theorem: a local, translation-invariant, hermitian lattice fermion action with the right symmetries necessarily produces species doublers, spoiling chirality.

This is why nonperturbatively defining the electroweak (chiral) sector is hard, whereas vector-like QCD is fine. Reference: Nielsen and Ninomiya, Nucl. Phys. B185, 20 (1981), [doi:10.1016/0550-3213(81)90361-8](https://doi.org/10.1016/0550-3213(81)90361-8).`,
    progress: r`- The Ginsparg–Wilson relation and overlap/domain-wall constructions avoid the naive doubling obstruction by modifying its assumptions.
- Lüscher's anomaly-free Abelian construction is nonperturbative, with exact gauge invariance including finite-volume topological sectors; it is not merely an all-orders perturbative result ([arXiv:hep-lat/9811032](https://arxiv.org/abs/hep-lat/9811032)).
- Symmetric mass generation and interacting mirror-fermion approaches provide further proposals, whose locality and mirror decoupling must be checked for the intended representation.
- Published progress (July 2026): Thorngren, Preskill and Fidkowski propose symmetry disentanglers that convert suitable non-on-site symmetries into on-site ones ([JHEP 07 (2026) 271](https://link.springer.com/article/10.1007/JHEP07(2026)271)). Their explicit Abelian examples and low-dimensional constructions do not establish a general non-Abelian regulator with the desired interacting continuum limit.
- Craig (6 October 2026, v1) claims a nonperturbative gauge-invariant fermion measure for overlap fermions on four-dimensional Euclidean lattices, for a class of non-Abelian chiral gauge theories that includes the Standard Model ([arXiv:2610.09093](https://arxiv.org/abs/2610.09093v1)). On admissible gauge fields, comparing chiral projectors at successive lattice spacings yields an exponentially local current with the global properties required by Lüscher's reconstruction theorem. The author presents this as a candidate lattice definition. Admissibility restrictions, reflection positivity and the interacting continuum limit remain open, as the paper states.
- Hsu (21 October 2026, v1) proposes a hybrid regularization in which gauge and Higgs fields live on a finite lattice while quarks and leptons remain continuum Weyl fermions, so that anomalies, spectral flow and zero modes keep their continuum description ([arXiv:2610.29019](https://arxiv.org/abs/2610.29019v1)). Anomaly cancellation in the Standard Model is used to define a gauge-invariant chiral determinant. Yukawa couplings enter through a gauge-covariant vertex cutoff removable with one-loop local subtractions, and the resulting bosonic integral is claimed finite and exactly gauge invariant at fixed spacing and volume under stated smoothness conditions. Reflection positivity is established only for a variant at zero Yukawa coupling and zero theta, and the bosonic continuum limit is stated to remain open. This is a different regularization strategy from Craig's purely lattice measure; neither constructs the interacting continuum theory.
- Witten (3 November 2026, v1) describes a variant of Craig's algorithm, also proposed by Hsu, that couples a continuum interpolation of the lattice gauge field to continuum chiral fermions ([arXiv:2611.05051](https://arxiv.org/abs/2611.05051v1)). For any anomaly-free representation it can in principle be run on a computer, but not by Monte Carlo, because the chiral fermion path integral is not positive.
- Lootens and Singh (4 November 2026, v1) give a gauge-invariant Hamiltonian lattice regularization of 1+1-dimensional Abelian chiral gauge theories with finite-dimensional local Hilbert spaces, in which the 't Hooft anomaly survives exactly mod $N$ ([arXiv:2611.06880](https://arxiv.org/abs/2611.06880v1)). Their infinite-MPS simulation of the 34-50 model agrees with continuum predictions. With Witten's note, this clarifies the regulator landscape; neither proves the four-dimensional non-Abelian continuum statement.`,
    residual: r`A general, nonperturbative construction of an arbitrary anomaly-free non-Abelian chiral gauge theory with the correct continuum limit is still open. Related: QF4.`,
    refs: [
      { label: "Craig, 'A gauge-invariant measure for lattice chiral fermions' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.09093v1" },
      { label: "Hsu, 'The Standard Model on a finite bosonic lattice with continuum Weyl fermions' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.29019v1" },
      { label: "Witten, 'A Note On Lattice Definition of Gauge Theories With Chiral Fermions' (2026 preprint, v1)", url: "https://arxiv.org/abs/2611.05051v1" },
      { label: "Lootens & Singh, 'Simulating a chiral gauge theory' (2026 preprint, v1)", url: "https://arxiv.org/abs/2611.06880v1" },
      { label: "Nielsen & Ninomiya, 'Absence of neutrinos on a lattice: (I). Proof by homotopy theory', Nucl. Phys. B185, 20–40 (1981)", url: "https://doi.org/10.1016/0550-3213(81)90361-8" },
      { label: "Lüscher, 'Abelian chiral gauge theories on the lattice with exact gauge invariance', Nucl. Phys. B549 (1999)", url: "https://arxiv.org/abs/hep-lat/9811032" },
      { label: "Kaplan, 'Chiral gauge theory at the boundary between topological phases', PRL 132, 141603 (2024; preprint 2023)", url: "https://arxiv.org/abs/2312.01494" },
      { label: "Thorngren, Preskill & Fidkowski, 'Chiral lattice gauge theories from symmetry disentanglers', JHEP 07 (2026) 271", url: "https://link.springer.com/article/10.1007/JHEP07(2026)271" },
    ] },

  { id: "QF6", cat: "qft", horizon: "programme",
    title: "Asymptotic completeness in interacting relativistic QFT",
    statement: r`For a specified massive, local, interacting relativistic QFT in $3+1$ dimensions, prove that the vacuum and scattering states of stable particles span the chosen physical sector; formulate separate completeness criteria when massless particles or charges invalidate this particle description.`,
    definition: r`**Asymptotic completeness**, in a massive particle-scattering setting, says that scattering states built from the specified stable particles exhaust the physical sector under consideration. It is stronger than existence of an S-matrix on a scattering subspace.

Different superselection sectors or theories without a complete particle interpretation require an explicitly different target. Standard reference: Haag, *Local Quantum Physics* (Springer, 2nd ed., 1996), [doi:10.1007/978-3-642-61458-3](https://link.springer.com/book/10.1007/978-3-642-61458-3).`,
    progress: r`- Haag–Ruelle theory constructs scattering states in massive theories under spectral assumptions; existence of these states does not prove completeness.
- Complete results exist for particular factorizing $1+1$-dimensional models.
- Duell and Dybalski establish results for massive wedge-local theories in higher dimensions ([Comm. Math. Phys. 2023](https://link.springer.com/article/10.1007/s00220-023-04690-0)), which are not the same target as strictly local theories.
- Earlier constructive results in restricted energy sectors or space-cutoff models are not a general completeness theorem for $P(\phi)_2$ or interacting 2D/3D QFT. Many-body Schrödinger completeness theorems likewise concern a different setting.`,
    residual: r`The four-dimensional local target can be pursued by conditional axiomatic theorems as well as explicit constructions (QF1, QF3). With massless quanta, especially charged infraparticle sectors, ordinary finite-particle Fock completeness is not the right unrestricted statement; QF7 tracks alternative asymptotic observables and sectors.`,
    refs: [
      { label: "Haag, 'Local Quantum Physics: Fields, Particles, Algebras' (Springer, 2nd ed., 1996)", url: "https://link.springer.com/book/10.1007/978-3-642-61458-3" },
      { label: "Buchholz, 'Collision theory for massless bosons', Comm. Math. Phys. 52 (1977)", url: "https://doi.org/10.1007/BF01625781" },
      { label: "Duell & Dybalski, 'Asymptotic Completeness in a Class of Massive Wedge-Local Quantum Field Theories in Any Dimension', CMP (2023)", url: "https://link.springer.com/article/10.1007/s00220-023-04690-0" },
    ] },

  { id: "QF7", cat: "qft", horizon: "incremental", status: "improved",
    reviewedAt: "2026-09-10",
    evidence: [
      { kind: "preprint", role: "progress", summary: "Perturbative Wilson-line-dressed scalar-QED sector and infraparticle scaling with explicit infrared regulation; not general nonperturbative scattering completeness.", url: "https://arxiv.org/abs/2609.06224v1", date: "2026-09-05", version: "v1" },
    ],
    title: "Infrared sectors and infraparticles",
    statement: r`For a specified charged model, construct infrared-finite scattering predictions for stated inclusive observables and asymptotic charge sectors, prove the applicable completeness statement, and control collinear singularities where massless charged particles are included.`,
    definition: r`**An infraparticle** is a charged particle, as in QED, that is inevitably accompanied by a cloud of soft photons. It has no sharp mass and does not sit in a standard Wigner irreducible representation of the Poincaré group.

Naive scattering amplitudes are infrared-divergent, and the usual Fock-space asymptotic states do not exist for charged particles. Reference: Buchholz, “Gauss' law and the infraparticle problem”, Phys. Lett. B174 (1986), [doi:10.1016/0370-2693(86)91110-X](https://doi.org/10.1016/0370-2693(86)91110-X).`,
    progress: r`- Bloch–Nordsieck cancellation concerns inclusive probabilities, summed over unresolved soft radiation. Faddeev–Kulish-type constructions instead use charged states dressed with soft-photon clouds to define infrared-finite amplitudes under suitable assumptions on the charged particles and dressing; neither statement is a general nonperturbative completeness theorem.
- Algebraically, Buchholz and collaborators developed the theory of superselection sectors, the Gauss-law charge, and the breaking of Lorentz symmetry in charged sectors, characterizing infraparticles rigorously.
- The connection to asymptotic symmetries and soft theorems (Strominger et al., [arXiv:1703.05448](https://arxiv.org/abs/1703.05448)) and to the memory effect has reorganized the subject, linking soft photons to large gauge transformations.
- Published progress: Prabhu and Satishchandran (2024) develop an algebraic infrared-finite scattering construction using generalized asymptotic states and superscattering, with soft theorems ([Phys. Rev. D 110, 085022](https://journals.aps.org/prd/abstract/10.1103/PhysRevD.110.085022)). This advances the formalism without providing a nonperturbative construction of four-dimensional QED or removing every collinear difficulty.
- Semenoff and Waterfield (5 September 2026, v1) develop a gauge- and Lorentz-invariant perturbative calculus for Wilson-line-dressed scalar QED with a Stueckelberg photon-mass infrared regulator ([arXiv:2609.06224](https://arxiv.org/abs/2609.06224v1)). They obtain dressing-dependent cloud orthogonality, superselection sectors and infraparticle branch-cut scaling, with one-loop-exact exponents under their mass-gapped-matter assumptions. These are regulated perturbative results for scalar QED, not a nonperturbative construction of QED or an asymptotic-completeness proof for general charged scattering.`,
    residual: r`The frontier is model-specific control: relate the algebraic asymptotic data to finite-resolution detector probabilities, state the sectors on which completeness holds, and prove existence and error bounds under the chosen infrared and collinear assumptions. A uniquely preferred notation or universal agreement between formalisms is not the success criterion. Related: QF3, QF6.`,
    refs: [
      { label: "Semenoff & Waterfield, 'The Wilson-line-dressed charged sector of scalar QED: superselection and the infraparticle' (2026 preprint, v1 reviewed; v2 of 12 September 2026 reports typo fixes and clarifying remarks)", url: "https://arxiv.org/abs/2609.06224v1" },
      { label: "Buchholz, 'Gauss' law and the infraparticle problem', Phys. Lett. B174 (1986)", url: "https://doi.org/10.1016/0370-2693(86)91110-X" },
      { label: "Strominger, 'Lectures on the Infrared Structure of Gravity and Gauge Theory' (Princeton, 2018)", url: "https://arxiv.org/abs/1703.05448" },
      { label: "Prabhu & Satishchandran, 'Infrared finite scattering theory: Amplitudes and soft theorems', PRD 110, 085022 (2024)", url: "https://journals.aps.org/prd/abstract/10.1103/PhysRevD.110.085022" },
    ] },

  { id: "QF8", cat: "qft", horizon: "incremental", status: "improved",
    reviewedAt: "2026-09-28",
    title: "Finite-resource entanglement in continuum QFT",
    statement: r`For specified local algebras, spacetime separation and energy/work budgets, bound entanglement distillation and catalytic embezzlement yields and errors under physically implementable local operations, including mixed states.`,
    definition: r`**Entanglement in continuum QFT** is carried by local algebras that, in standard relativistic theories, are typically of type III. They have no intrinsic regional trace and no density-matrix entropy of the finite-dimensional tensor-product kind.

Cutoff entropies can diverge from short-distance correlations across the boundary; this does not prevent algebraic states or operational entanglement from being defined. Review: Witten, “Notes on some entanglement properties of quantum field theory”, Rev. Mod. Phys. 90, 045003 (2018), [arXiv:1803.04993](https://arxiv.org/abs/1803.04993).`,
    progress: r`- Modular theory and Araki relative entropy give regulator-independent tools. Relative entropy is an extended-valued quantity, not always finite; mutual information is finite only under appropriate state and region hypotheses. Neither quantity should be described as unconditionally UV finite.
- Longo and Xu rigorously calculate examples and their singular limits, including divergence as interval boundaries meet ([arXiv:1712.07283](https://arxiv.org/abs/1712.07283)).
- Published progress (2025): van Luijk, Stottmeister, Werner and Wilming formulate LOCC for commuting von Neumann algebras and extend Nielsen's pure-state conversion theorem to arbitrary factors ([doi:10.1007/s00220-025-05465-5](https://doi.org/10.1007/s00220-025-05465-5)). Under the stated Haag-duality assumptions, type III pure states can be converted into one another to arbitrary accuracy by LOCC; for type III$_1$ local operations without classical communication suffice.
- Universal entanglement embezzlement further shows how unconstrained algebraic operations can trivialize conversion costs ([arXiv:2401.07299](https://arxiv.org/abs/2401.07299)).
- Model-specific progress (23 September 2026, v1): Perche and Ribes-Metidieri compute approximate most-entangled mode profiles for two disjoint spheres in the vacuum of a free massless scalar field in $3+1$ dimensions, and propose a nonperturbative mode-swap harvesting protocol ([arXiv:2609.28621](https://arxiv.org/abs/2609.28621v1)). The profiles and convergence study provide numerical evidence within this free-field setup. They do not establish optimal yields under arbitrary finite work budgets, interacting-field extensions or a general regulator-independent resource theorem.`,
    residual: r`The missing step is not an unrestricted pure-state formalism. Fix an admissible finite-energy operation model and ask for matching bounds on work, localization, separation, output entanglement and approximation error. Determine which mixed-state and gauge-constrained resources remain accessible, and whether predictions have regulator-independent limits. Related: QF9, QF11, F7.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Free-scalar-field mode-swap harvesting construction; does not solve general finite-resource continuum entanglement.", url: "https://arxiv.org/abs/2609.28621v1", date: "2026-09-23", version: "v1" },
      { kind: "numerical", role: "progress", summary: "Approximate entangled-mode profiles and convergence studied for two spheres in the free massless scalar vacuum.", url: "https://arxiv.org/abs/2609.28621v1", date: "2026-09-23", version: "v1" },
      { kind: "published", role: "progress", summary: "LOCC and a generalized Nielsen theorem exist for arbitrary factors; unrestricted type-III pure-state conversion is characterized under Haag duality, without imposing finite-energy operation costs.", url: "https://doi.org/10.1007/s00220-025-05465-5", date: "2025-10-30" }],
    relations: [{ id: "QF9", type: "related" }, { id: "QF11", type: "related" }],
    refs: [
      { label: "Perche & Ribes-Metidieri, 'Local Vacuum Entanglement through Most Entangled Modes' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.28621v1" },
      { label: "Witten, 'Notes on some entanglement properties of quantum field theory', Rev. Mod. Phys. 90, 045003 (2018)", url: "https://arxiv.org/abs/1803.04993" },
      { label: "Faulkner, Leigh, Parrikar & Wang, 'Modular Hamiltonians for Deformed Half-Spaces and the Averaged Null Energy Condition' (2016)", url: "https://arxiv.org/abs/1605.08072" },
      { label: "Ceyhan & Faulkner, 'Recovering the QNEC from the ANEC', Comm. Math. Phys. (2020)", url: "https://arxiv.org/abs/1812.04683" },
      { label: "van Luijk, Stottmeister, Werner & Wilming, 'Pure State Entanglement and von Neumann Algebras', CMP (2025)", url: "https://doi.org/10.1007/s00220-025-05465-5" },
      { label: "van Luijk et al., 'Embezzlement of entanglement, quantum fields, and the classification of von Neumann algebras'", url: "https://arxiv.org/abs/2401.07299" },
      { label: "Longo & Xu, 'Relative Entropy in CFT', Advances in Mathematics 337 (2018)", url: "https://arxiv.org/abs/1712.07283" },
    ] },

  { id: "QF9", cat: "qft", horizon: "incremental", status: "improved",
    reviewedAt: "2026-10-26",
    evidence: [
      { kind: "preprint", role: "progress", summary: "Explicit lattice counterexamples, for every finite non-Abelian gauge group on square tori under local magnetic Gauss constraints, in which vertex-disjoint regions have commuting physical observable algebras that do not generate all observables on their union. For the specified support family around an eight-edge loop, uncovering a face restores additivity; for the same loop, additivity also holds with any region at vertex-set graph distance at least two. A lattice access-model result; continuum regulator independence is not addressed.", url: "https://arxiv.org/abs/2610.25329v1", date: "2026-10-18", version: "v1" },
    ],
    title: "Subsystems in gauge theories",
    statement: r`For specified gauge-invariant operations and boundary access, characterize distillable resources of spatial subsystems and prove when their continuum predictions are regulator independent; compare different access models without assuming a unique factorization.`,
    definition: r`**Subsystems in gauge theories** generally do not inherit the naive spatial tensor factorization of the unconstrained degrees of freedom: Gauss-law constraints tie the physical degrees of freedom on opposite sides of a boundary.

Defining “the entanglement entropy of a region” requires specifying its observable algebra and boundary access. Choices can include algebras with nontrivial or trivial center, or an extended Hilbert space with boundary “edge modes”; different choices can give different answers. Reference: Casini, Huerta and Rosabal, Phys. Rev. D 89, 085012 (2014), [arXiv:1312.1183](https://arxiv.org/abs/1312.1183).`,
    progress: r`- Casini, Huerta and Rosabal formulated the algebraic center-choice approach; Donnelly and Donnelly–Freidel developed boundary edge-mode descriptions ([arXiv:1601.04744](https://arxiv.org/abs/1601.04744)).
- Entropy decompositions depend on the algebra and access model and, in non-Abelian theories, can include representation-dependent terms as well as classical flux-sector uncertainty.
- Van Acoleyen et al. give an operational lattice distillation analysis including non-Abelian gauge groups: not every extended-Hilbert-space entropy contribution is distillable by gauge-invariant local operations ([arXiv:1511.04369](https://arxiv.org/abs/1511.04369)).
- Liang (18 October 2026, v1) constructs, for every finite non-Abelian group on regular square tori with local magnetic Gauss constraints, pairs of vertex-disjoint regions whose physical observable algebras commute yet fail to generate all observables on their union, with the full magnetic physical space retained and the supports inside a fixed contractible disk ([arXiv:2610.25329](https://arxiv.org/abs/2610.25329v1)). For a specified support family around an eight-edge loop, additivity fails exactly when the group is non-Abelian and each inner face is covered by a prescribed peripheral edge; uncovering a face, or separating the regions by graph distance at least two, restores additivity. The paper states that this refutes a recent group-double additivity proposition. It is a lattice statement about which access models define subsystems, directly relevant to comparing access models; passage to the continuum and distillable resources are not treated.`,
    residual: r`What remains is controlled passage from a stated lattice access model to continuum gauge fields, with dynamical matter, boundary resources and finite-energy operations explicitly accounted for. Compare inequivalent definitions by the tasks they permit, rather than demanding that physically different access models share one canonical entropy. Related: QF8, QF11, F7.`,
    refs: [
      { label: "Liang, 'Failure of disjoint additivity under magnetic Gauss constraints' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.25329v1" },
      { label: "Casini, Huerta, Rosabal, 'Remarks on entanglement entropy for gauge fields', PRD 89, 085012 (2014)", url: "https://arxiv.org/abs/1312.1183" },
      { label: "Donnelly & Freidel, 'Local subsystems in gauge theory and gravity', JHEP 09 (2016) 102", url: "https://arxiv.org/abs/1601.04744" },
      { label: "Van Acoleyen et al., 'The entanglement of distillation for gauge theories'", url: "https://arxiv.org/abs/1511.04369" },
    ] },

  { id: "QF10", cat: "qft", horizon: "programme",
    title: "Interacting QFT on curved spacetime",
    statement: r`For a specified interacting field model and class of globally hyperbolic curved spacetimes, construct local observables and admissible states beyond formal perturbation theory; state any extra boundary, symmetry or preparation data used to select a state.`,
    definition: r`**Interacting QFT on curved spacetime** must be formulated without Poincaré symmetry, hence without a preferred vacuum or particle notion on a generic background.

The framework of locally covariant, algebraic QFT (Brunetti, Fredenhagen and Verch, Comm. Math. Phys. 237 (2003), [arXiv:math-ph/0112041](https://arxiv.org/abs/math-ph/0112041)) provides a mathematically clean formulation, using Hadamard states to fix the short-distance structure and define renormalized observables such as the stress tensor.`,
    progress: r`- The perturbative theory is in excellent shape. Interacting fields on curved backgrounds have been constructed to all orders in perturbation theory via causal (Epstein–Glaser) renormalization and the operator-product and microlocal-spectrum machinery (Hollands–Wald, [arXiv:1401.2026](https://arxiv.org/abs/1401.2026); Brunetti–Fredenhagen), with a consistent, background-independent renormalization scheme.
- The class of Hadamard states and their properties are well understood.
- Fewster and Verch's natural-state no-go theorem obstructs a universally covariant preferred-state assignment under its dynamical-locality and other assumptions ([arXiv:1106.4785](https://arxiv.org/abs/1106.4785)). It is not a proof that Hadamard states or physically useful states do not exist. Restricting backgrounds or supplying symmetry, boundary or preparation data avoids demanding a universally natural vacuum.`,
    residual: r`The target is a model- and dimension-specific nonperturbative construction with controlled renormalized observables and state dependence. In four dimensions this inherits flat-space construction difficulties (QF1, QF3); curvature introduces additional issues, but neither every lower-dimensional case nor perturbative curved-spacetime QFT is open in this sense.`,
    refs: [
      { label: "Brunetti, Fredenhagen, Verch, 'The generally covariant locality principle...', Comm. Math. Phys. 237 (2003)", url: "https://arxiv.org/abs/math-ph/0112041" },
      { label: "Hollands & Wald, 'Quantum fields in curved spacetime', Phys. Rep. 574 (2015)", url: "https://arxiv.org/abs/1401.2026" },
      { label: "Fewster & Verch, 'Dynamical locality and covariance: What makes a physical theory the same in all spacetimes?'", url: "https://arxiv.org/abs/1106.4785" },
    ] },

  { id: "QF11", cat: "qft", horizon: "incremental",
    title: "Physically implementable local QFT measurements",
    statement: r`Given a local algebraic instrument and a compact spacetime coupling region, characterize whether localized coupling to an admissibly prepared probe field can implement or approximate the instrument while respecting causality and preserving the chosen admissible state class.`,
    definition: r`**A physically implementable local measurement** in relativistic QFT is a measurement model that specifies the probe, its preparation, the spacetime support of the coupling and the final accessible readout.

An abstract observable or completely positive instrument need not come with such a causal laboratory implementation, and naive ideal measurements of extended observables can conflict with causal requirements.`,
    progress: r`- Published baseline: Mandrysch and Navascués (2025) construct Gaussian-modulated measurements of smeared fields within the Fewster–Verch probe framework and establish a movable measurement cut for that class ([Lett. Math. Phys. 115, 115 (2025)](https://doi.org/10.1007/s11005-025-02001-3)). Thus neither all local field measurements nor the basic probe formalism are missing.`,
    residual: r`The open reachability question is which more general instruments admit such a realization or controlled approximation. Fix the field model, state class, localization and error criterion; quantify the necessary probe energy and coupling cost, and identify impossibility criteria. Interacting and gauge-constrained models require their own assumptions. This operational task is distinct from outcome ontology (F1) and from computing continuum entanglement (QF8).`,
    relations: [{ id: "QF8", type: "related" }, { id: "QF9", type: "related" }, { id: "F1", type: "related" }],
    evidence: [{ kind: "published", role: "progress", summary: "Gaussian-modulated smeared-field measurements and a movable probe cut are constructed; arbitrary instrument reachability is not established.", url: "https://doi.org/10.1007/s11005-025-02001-3", date: "2025-10-24" }],
    refs: [
      { label: "Mandrysch & Navascués, 'Quantum Field Measurements in the Fewster-Verch Framework', Letters in Mathematical Physics 115, 115 (2025)", url: "https://doi.org/10.1007/s11005-025-02001-3" },
    ] },
];
