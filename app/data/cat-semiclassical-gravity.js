const r = String.raw;

// Added 9 November 2026 (promoted from the new-problems page). Sources of the
// dated evidence items were rechecked on their arXiv pages that day.
// Documentary corrections of 10 November 2026 (review of G1–G10): statements,
// attributions and publication data were rechecked against the primary sources.
export const SEMICLASSICAL_GRAVITY = [
  { id: "G1", cat: "semiclassical-gravity", horizon: "conceptual",
    reviewedAt: "2026-11-09",
    relations: [{ id: "H5", type: "related" }, { id: "G8", type: "related" }],
    title: "Page curve in asymptotically flat gravity with a massless graviton",
    statement: r`For Einstein gravity in $D=4$, asymptotically flat, coupled to a free quantum field and treated semiclassically with replica-wormhole contributions, let a Schwarzschild black hole of mass $M_0\gg M_{\rm Pl}$ form from a pure state. With an explicit UV regulator and an explicit gravitational dressing of the radiation region $R$ at $\mathscr I^+$, decide whether the fine-grained entropy $S_{\rm rad}(u)$ of the radiation collected up to retarded time $u$ follows the Page curve, and whether it is given by the island formula $S_{\rm rad}=\min\operatorname{ext}_I\big[A(\partial I)/4G+S_{\rm semi}(R\cup I)\big]$ with a non-empty island after the Page time; or prove that, under the gravitational Gauss law, no subsystem of the asymptotic algebra has an entropy following the Page curve.`,
    definition: r`**The Page curve** is the entropy of Hawking radiation expected from unitary evaporation: it first grows like the thermal entropy of the emitted radiation, then decreases like the black-hole area $A/4G$ after the Page time. Page, “Information in black hole radiation”, PRL 71 (1993), [arXiv:hep-th/9306083](https://arxiv.org/abs/hep-th/9306083).

The **island formula** reproduces it in models where the radiation is collected in a non-gravitating bath. Whether the same holds when the radiation itself gravitates, with a massless graviton and the Gauss-law constraint, is the open case.`,
    progress: r`- Penington and Almheiri–Engelhardt–Marolf–Maxfield (2019) obtained the Page curve from quantum extremal surfaces for AdS black holes evaporating into an external bath (general AdS/CFT with absorbing boundary conditions; JT gravity in AdS$_2$ coupled to a bath); replica wormholes derive the island formula ([arXiv:1911.11977](https://arxiv.org/abs/1911.11977), [arXiv:1911.12333](https://arxiv.org/abs/1911.12333)).
- Geng and Karch (2020) observe that reliable derivations in $D>3$ use a massive graviton and that islands disappear as the mass goes to zero; Geng et al. (2021) argue that islands are inconsistent with long-range gravity.
- Laddha, Prabhu, Raju and Shrivastava (2020) argue that in four-dimensional asymptotically flat gravity the fine-grained entropy of the segment $(-\infty,u)$ of $\mathscr I^+$ is independent of $u$, so that it does not follow a Page curve ([arXiv:2002.02448](https://arxiv.org/abs/2002.02448)); Raju (2021) traces this to the failure of the split property in gravity ([arXiv:2110.05470](https://arxiv.org/abs/2110.05470)).
- Island computations with a massless graviton exist for eternal Schwarzschild black holes in $D\ge4$ (Hashimoto–Iizuka–Matsuo 2020) and in cosmology (Hartman–Jiang–Shaghoulian 2020); their consistency with the Gauss law is disputed.
- Geng (September 2025) maintains that a graviton mass is needed ([arXiv:2509.22775](https://arxiv.org/abs/2509.22775)).`,
    residual: r`Defining $S_{\rm rad}$ (regulator, dressing, which algebra) is itself part of the problem, so the horizon is conceptual until that definition is fixed. A computation in JT gravity, a Karch–Randall braneworld or with a massive graviton is progress, not a solution. Related: G8 (algebraic generalized entropy), H5 (decoding complexity).`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Argues that a graviton mass is necessary for consistent entanglement islands in general, with an explicit demonstration in JT gravity coupled to a bath (the higher-dimensional case being taken as already understood); one side of the controversy over the massless, asymptotically flat case.", url: "https://arxiv.org/abs/2509.22775v1", date: "2025-09-26", version: "v1" },
    ],
    refs: [
      { label: "Page, 'Information in black hole radiation', PRL 71 (1993)", url: "https://arxiv.org/abs/hep-th/9306083" },
      { label: "Penington, 'Entanglement wedge reconstruction and the information paradox' (2019)", url: "https://arxiv.org/abs/1905.08255" },
      { label: "Almheiri, Engelhardt, Marolf, Maxfield, 'The entropy of bulk quantum fields and the entanglement wedge of an evaporating black hole' (2019)", url: "https://arxiv.org/abs/1905.08762" },
      { label: "Penington, Shenker, Stanford, Yang, 'Replica wormholes and the black hole interior' (2019)", url: "https://arxiv.org/abs/1911.11977" },
      { label: "Almheiri, Hartman, Maldacena, Shaghoulian, Tajdini, 'Replica wormholes and the entropy of Hawking radiation' (2019)", url: "https://arxiv.org/abs/1911.12333" },
      { label: "Geng, Karch, 'Massive islands', JHEP 09 (2020) 121", url: "https://arxiv.org/abs/2006.02438" },
      { label: "Geng et al., 'Inconsistency of islands in theories with long-range gravity' (2021)", url: "https://arxiv.org/abs/2107.03390" },
      { label: "Geng, 'Making the case for massive islands' (2025)", url: "https://arxiv.org/abs/2509.22775" },
      { label: "Hartman, Jiang, Shaghoulian, 'Islands in cosmology' (2020)", url: "https://arxiv.org/abs/2008.01022" },
      { label: "Hashimoto, Iizuka, Matsuo, 'Islands in Schwarzschild black holes', JHEP 06 (2020) 085", url: "https://arxiv.org/abs/2004.05863" },
      { label: "Laddha, Prabhu, Raju, Shrivastava, 'The holographic nature of null infinity', SciPost Phys. 10, 041 (2021)", url: "https://arxiv.org/abs/2002.02448" },
      { label: "Raju, 'Failure of the split property in gravity and the information paradox', Class. Quantum Grav. 39 (2022) 064002", url: "https://arxiv.org/abs/2110.05470" },
    ] },

  { id: "G2", cat: "semiclassical-gravity", horizon: "sharp",
    reviewedAt: "2026-11-09",
    relations: [{ id: "QF10", type: "parent" }],
    title: "Hawking effect for an interacting field",
    statement: r`On a spherical collapse spacetime settling to Schwarzschild in $D=4$, construct $\lambda\phi^4$ (or a Yukawa model) perturbatively in locally covariant QFT. Starting from a Hadamard state that is the vacuum in the far past, does the state restricted to observables near $\mathscr I^+$ converge, as retarded time $u\to\infty$ and order by order in $\lambda$, to a stationary state whose zeroth order is the Unruh state (outgoing modes thermal at the Hawking temperature $T_H$ up to grey-body factors, no incoming radiation)? Compute the first non-trivial correction in $\lambda$ and decide whether it amounts to interacting grey-body factors with the same temperature $T_H$ or to genuine non-thermality.`,
    definition: r`**The Hawking effect** is the thermal emission, at temperature $T_H=\kappa/2\pi$, of a black hole formed by collapse. Hawking, “Particle creation by black holes”, Comm. Math. Phys. 43 (1975) 199. Fredenhagen and Haag gave a rigorous derivation for the free field and remarked that for a realistic interacting theory no evaluation from general principles seemed possible: Comm. Math. Phys. 127 (1990) 273, [Project Euclid](https://projecteuclid.org/journals/communications-in-mathematical-physics/volume-127/issue-2/On-the-derivation-of-Hawking-radiation-associated-with-the-formation/cmp/1104180137.pdf).`,
    progress: r`- Free fields: Fredenhagen–Haag (1990); Häfner (2006; Mém. Soc. Math. France 2009) treats the free Dirac field for collapse to a Kerr–Newman black hole, a non-spherical case.
- Dappiaggi, Moretti and Pinamonti (2009) construct the Unruh state on Schwarzschild and prove it Hadamard, the natural target of convergence in the free case. It is a non-equilibrium steady state, not a KMS state: the outgoing flux is thermal at $T_H$ up to grey-body factors and there is no incoming radiation.
- The only interacting result is a $1+1$-dimensional toy model of interacting fermions (Bouvier–Gérard 2013; Ann. Henri Poincaré 2015), where the limit is a thermal state at $T_H$.`,
    residual: r`A convergence theorem order by order towards the interacting analogue of the Unruh state, or an explicit deviation at the first non-trivial order with its interpretation. Back-reaction is excluded (G5). This is a precise physical prediction inside the general construction problem of QF10.`,
    evidence: [
      { kind: "published", role: "progress", summary: "Hawking effect for a toy model of interacting fermions in 1+1 dimensions; the only interacting result, far from the four-dimensional question; Ann. Henri Poincaré 16 (2015) 1191–1230.", url: "https://arxiv.org/abs/1310.1279v1", date: "2013-10-04", version: "v1" },
    ],
    refs: [
      { label: "Fredenhagen, Haag, 'On the derivation of Hawking radiation associated with the formation of a black hole', Comm. Math. Phys. 127 (1990) 273", url: "https://projecteuclid.org/journals/communications-in-mathematical-physics/volume-127/issue-2/On-the-derivation-of-Hawking-radiation-associated-with-the-formation/cmp/1104180137.pdf" },
      { label: "Bouvier, Gérard, 'Hawking effect for a toy model of interacting fermions', Ann. Henri Poincaré 16 (2015) 1191", url: "https://arxiv.org/abs/1310.1279" },
      { label: "Häfner, 'Creation of fermions by rotating charged black holes', Mém. Soc. Math. France 117 (2009)", url: "https://arxiv.org/abs/math/0612501" },
      { label: "Dappiaggi, Moretti, Pinamonti, 'Rigorous construction and Hadamard property of the Unruh state in Schwarzschild spacetime' (2009)", url: "https://arxiv.org/abs/0907.1034" },
    ] },

  { id: "G3", cat: "semiclassical-gravity", horizon: "sharp", status: "improved",
    reviewedAt: "2026-11-09",
    relations: [{ id: "G4", type: "related" }, { id: "QF10", type: "parent" }],
    title: "Quantum strong cosmic censorship for Kerr–de Sitter and Kerr",
    statement: r`(a) For a free scalar field on subextremal Kerr–de Sitter, prove that in every Hadamard state the renormalized stress tensor diverges at the Cauchy horizon as $\langle T_{VV}\rangle\sim C\,V^{-2}$ with a state-independent coefficient $C(M,a,\Lambda;\mu,\xi)$ (depending on the black-hole parameters and on the mass and curvature coupling of the field), and prove that $C\neq0$ for generic parameters over the full subextremal range, determining its zero set. (b) For Kerr ($\Lambda=0$), decide as a theorem whether the quantum divergence at the Cauchy horizon dominates classical mass inflation and rules out any $C^0$ extension of the metric.`,
    definition: r`**Strong cosmic censorship** asserts that generic solutions of the Einstein equations cannot be extended beyond a Cauchy horizon (Penrose 1974). Classically, its $C^0$ form fails for Kerr provided the Kerr exterior is dynamically stable (Dafermos–Luk, Ann. of Math. 202 (2025)). Quasinormal-mode analyses indicate that the weaker formulation in terms of weak solutions fails for near-extremal Reissner–Nordström–de Sitter black holes (Cardoso–Costa–Destounis–Hintz–Jansen 2018; Dias–Reall–Santos 2018), whereas the same kind of analysis finds it respected for all non-extremal Kerr–de Sitter black holes (Dias–Eperon–Reall–Santos 2018). **Quantum** censorship asks whether quantum fields restore it through a divergent stress tensor. Hollands, Wald, Zahn, “Quantum instability of the Cauchy horizon in Reissner–Nordström–deSitter spacetime”, CQG 37 (2020), [arXiv:1912.06047](https://arxiv.org/abs/1912.06047).`,
    progress: r`- Reissner–Nordström–de Sitter: in every Hadamard state $\langle T_{VV}\rangle\sim C/V^2$, with $C$ independent of the state when the spectral gap is large enough ($\beta>1/2$) and $C\neq0$ for generic parameters, on numerical evidence (Hollands–Wald–Zahn 2020); a parameter scan shows that the sign of $C$ changes with the field mass and the spacetime parameters, so that $C$ vanishes for special values (Hollands–Klein–Zahn 2020).
- Hintz and Klein (2023; Class. Quantum Grav. 2024) prove for RN–dS and Kerr–dS that the leading divergence is state-independent, assuming a spectral gap and mode stability; mode stability is proved for Kerr–dS only at slow rotation or small mass, and non-vanishing of the coefficient is not proved.
- Numerics: quantum fluxes at the inner horizon of Kerr (Zilberman–Casals–Ori–Ottewill 2022) and of Kerr–dS in the Unruh state (Klein–Soltani–Casals–Hollands 2024).`,
    residual: r`(a) a proof of $C\neq0$ and mode stability over the stated range; (b) a theorem for Kerr comparing divergence rates for generic initial data. Easson (arXiv v1–v2, November 2025, “Quantum enforcement of strong cosmic censorship”) claimed that the trace anomaly alone enforces censorship for any stationary inner horizon, including Kerr. From v3 (28 May 2026) the paper is retitled “Cauchy-horizon flux coefficients in the reduced Polyakov model” and no longer makes that claim; the published version (v4, 20 October 2026, Class. Quantum Grav., [doi:10.1088/1361-6382/aeb78e](https://doi.org/10.1088/1361-6382/aeb78e)) computes the leading $V^{-2}$ coefficient only in the reduced two-dimensional Polyakov model of spherically symmetric charged black holes, gives the condition under which it vanishes, and states that the four-dimensional coefficient depends on global scattering and on the quantum state. It contains no result for Kerr. Related: G4.`,
    evidence: [
      { kind: "published", role: "progress", summary: "State independence of the leading quantum energy-flux divergence at the inner horizon of RN–dS and Kerr–dS, under a spectral gap and mode stability; non-vanishing of the coefficient not proved.", url: "https://arxiv.org/abs/2310.19655v2", date: "2024-03-08", version: "v2" },
    ],
    refs: [
      { label: "Hollands, Wald, Zahn, 'Quantum instability of the Cauchy horizon in Reissner–Nordström–deSitter spacetime', CQG 37 (2020)", url: "https://arxiv.org/abs/1912.06047" },
      { label: "Hollands, Klein, Zahn, 'Quantum stress tensor at the Cauchy horizon of Reissner–Nordström–deSitter spacetime', PRD 102, 085004 (2020)", url: "https://arxiv.org/abs/2006.10991" },
      { label: "Hintz, Klein, 'Universality of the quantum energy flux at the inner horizon of asymptotically de Sitter black holes', Class. Quantum Grav. (2024)", url: "https://arxiv.org/abs/2310.19655" },
      { label: "Zilberman, Casals, Ori, Ottewill, 'Quantum fluxes at the inner horizon of a spinning black hole', PRL 129, 261102 (2022)", url: "https://arxiv.org/abs/2203.08502" },
      { label: "Klein, Soltani, Casals, Hollands, 'Infinite quantum twisting at the Cauchy horizon of rotating black holes' (2024)", url: "https://arxiv.org/abs/2402.14171" },
      { label: "Dafermos, Luk, 'The interior of dynamical vacuum black holes I: The C^0-stability of the Kerr Cauchy horizon', Ann. of Math. 202 (2025) 309", url: "https://arxiv.org/abs/1710.01722" },
      { label: "Cardoso, Costa, Destounis, Hintz, Jansen, 'Quasinormal modes and strong cosmic censorship', PRL 120, 031103 (2018)", url: "https://arxiv.org/abs/1711.10502" },
      { label: "Dias, Reall, Santos, 'Strong cosmic censorship: taking the rough with the smooth', JHEP 10 (2018) 001", url: "https://arxiv.org/abs/1808.02895" },
      { label: "Dias, Eperon, Reall, Santos, 'Strong cosmic censorship in de Sitter space', PRD 97, 104060 (2018): Kerr–de Sitter, censorship respected", url: "https://arxiv.org/abs/1801.09694" },
      { label: "Easson, 'Cauchy-horizon flux coefficients in the reduced Polyakov model', Class. Quantum Grav. (2026); v1–v2 titled 'Quantum enforcement of strong cosmic censorship'", url: "https://arxiv.org/abs/2511.05656" },
    ] },

  { id: "G4", cat: "semiclassical-gravity", horizon: "sharp", status: "improved",
    statusNote: "Part (a) is settled for the massless Dirac field in a published paper (Häfner–Klein 2024) and is claimed for the massless scalar in a February 2026 preprint that has not been independently assessed; the massive Dirac field and part (b), the Kay–Lupo conjecture, remain open.",
    reviewedAt: "2026-11-09",
    relations: [{ id: "G3", type: "related" }, { id: "QF10", type: "parent" }],
    title: "Distinguished Hadamard states on Kerr and on Kruskal in a box",
    statement: r`(a) For the massless scalar and the Dirac field on subextremal Kerr with any $0<|a|<M$, construct the Unruh state and prove it is Hadamard on the exterior and the interior up to (excluding) the Cauchy horizon. (b) Kay–Lupo conjecture: there is no isometry-invariant Hadamard state (in the Hadamard sense adapted to timelike boundaries) for the massive or massless Klein–Gordon field on the region of the Kruskal (maximally extended Schwarzschild) spacetime to the left of a surface of constant Schwarzschild radius in the right wedge, with Dirichlet conditions on that surface.`,
    definition: r`**Hadamard states** are the physically admissible states of a free field on a curved spacetime. On Schwarzschild the Unruh and Hartle–Hawking states are distinguished Hadamard states. On Kerr there is no Hartle–Hawking state: Kay and Wald proved that no stationary Hadamard state exists on the extended Kerr spacetime (Kay and Lupo point out, and partially fill, a gap in those proofs). The Unruh state is not excluded, since it is not defined on the whole Kruskal-type extension, but superradiance and the lack of a global timelike Killing field in the exterior make its construction delicate. Kay, Wald, Phys. Rep. 207 (1991) 49; Kay, Lupo, Class. Quantum Grav. 33 (2016) 215001, [arXiv:1502.06582](https://arxiv.org/abs/1502.06582).`,
    progress: r`- Sanders (2013) constructs the Hartle–Hawking–Israel state for a linear scalar field on spacetimes with a static bifurcate Killing horizon and a wedge reflection, which excludes Kerr.
- Gérard, Häfner and Wrochna (2020; Ann. Sci. Éc. Norm. Supér. 2023) construct the Unruh state for massless fermions on Kerr and prove, at slow rotation, that it is pure and Hadamard on the union of the exterior and interior regions: the first distinguished Hadamard state on a rotating black hole.
- Klein (2022) constructs the Unruh state for the scalar on Kerr–de Sitter with sufficiently small angular momentum and cosmological constant.
- Häfner and Klein (2024) extend the Hadamard property of the Unruh state for massless fermions to all $|a|<M$ ([arXiv:2403.09261](https://arxiv.org/abs/2403.09261)).
- Häfner and Klein (February 2026, preprint) quantize Teukolsky fields of spin $0,\pm1,\pm2$ on every subextremal Kerr spacetime, define an Unruh state on a physical subalgebra and prove it Hadamard on the exterior and the interior up to the inner horizon ([arXiv:2602.09796](https://arxiv.org/abs/2602.09796)). For spin $0$ the physical subalgebra is isomorphic to the usual algebra of the free massless scalar field (their Remark 8.5), so this covers the scalar case of (a); the claim is not independently assessed.`,
    residual: r`(a) independent assessment of the 2026 construction for the massless scalar; the massive Dirac field, which none of the cited results covers; (b) a proof or counterexample. Related: G3, which needs such states near the Cauchy horizon.`,
    evidence: [
      { kind: "published", role: "progress", summary: "Unruh state for massless fermions on Kerr, pure and Hadamard at slow rotation; Ann. Sci. Éc. Norm. Supér. 56 (2023) 127–196.", url: "https://arxiv.org/abs/2008.10995v2", date: "2021-03-22", version: "v2" },
      { kind: "published", role: "progress", summary: "Hadamard property of the Unruh state for massless fermions on Kerr extended to the full subextremal range |a| < M; Lett. Math. Phys. 114, 119 (2024). Settles part (a) for the massless Dirac field.", url: "https://arxiv.org/abs/2403.09261v1", date: "2024-03-14", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Unruh state for Teukolsky fields of spin 0, ±1, ±2 on every subextremal Kerr spacetime, Hadamard on the exterior and the interior up to the inner horizon; for spin 0 this is the massless scalar of part (a). Not independently assessed.", url: "https://arxiv.org/abs/2602.09796v1", date: "2026-02-10", version: "v1" },
    ],
    refs: [
      { label: "Kay, Lupo, 'Non-existence of isometry-invariant Hadamard states for a Kruskal black hole in a box and for massless fields on 1+1 Minkowski spacetime with a uniformly accelerating mirror', Class. Quantum Grav. 33 (2016) 215001", url: "https://arxiv.org/abs/1502.06582" },
      { label: "Sanders, 'On the construction of Hartle–Hawking–Israel states across a static bifurcate Killing horizon', Lett. Math. Phys. 105 (2015) 575", url: "https://arxiv.org/abs/1310.5537" },
      { label: "Gérard, Häfner, Wrochna, 'The Unruh state for massless fermions on Kerr spacetime and its Hadamard property', Ann. Sci. Éc. Norm. Supér. 56 (2023) 127", url: "https://arxiv.org/abs/2008.10995" },
      { label: "Klein, 'Construction of the Unruh state for a real scalar field on the Kerr–de Sitter spacetime', Ann. Henri Poincaré (2023)", url: "https://arxiv.org/abs/2206.05073" },
      { label: "Häfner, Klein, 'Hadamard property of the Unruh state for massless fermions on Kerr spacetime: the large a case', Lett. Math. Phys. 114, 119 (2024)", url: "https://arxiv.org/abs/2403.09261" },
      { label: "Häfner, Klein, 'The Unruh state for bosonic Teukolsky fields on subextreme Kerr spacetimes' (2026, preprint)", url: "https://arxiv.org/abs/2602.09796" },
    ] },

  { id: "G5", cat: "semiclassical-gravity", horizon: "sharp",
    reviewedAt: "2026-11-09",
    relations: [{ id: "QF10", type: "related" }],
    title: "Cauchy problem for the semiclassical Einstein equations",
    statement: r`For $G_{ab}+\Lambda g_{ab}=8\pi G\,\langle T_{ab}\rangle_\omega$ with a free massive scalar (any curvature coupling $\xi$) in a Hadamard state $\omega$ evolving with the metric: (i) prove global existence or finite-time blow-up of solutions in the flat FLRW class as a function of the renormalization freedom (the constants $(\alpha,\beta)$ of the quadratic curvature terms, which enter in flat FLRW only through one combination, the coefficient of the $\Box R$ term in the trace, together with the renormalized cosmological and Newton constants); (ii) prove local existence and uniqueness outside cosmological symmetry (for instance for perturbations of a static spacetime), with a reduced-order formulation or a condition on initial data that excludes runaway solutions.`,
    definition: r`**Semiclassical gravity** sources the Einstein equations with the renormalized expectation value of the quantum stress tensor. The resulting equations are of fourth order and admit runaway solutions; whether they define a well-posed initial-value problem is open. Flanagan, Wald, “Does back reaction enforce the averaged null energy condition in semiclassical gravity?” (1996), [arXiv:gr-qc/9602052](https://arxiv.org/abs/gr-qc/9602052).`,
    progress: r`- Parker–Simon and Flanagan–Wald proposed order reduction; heuristic.
- Pinamonti and Siemssen (2013) prove local existence and uniqueness, and extension of solutions up to a curvature singularity, for a massive conformally coupled scalar in flat FLRW.
- Gottschalk and Siemssen (2018; Ann. Henri Poincaré 2021) treat arbitrary coupling with the full renormalization freedom in flat FLRW and prove existence of maximal or global solutions for vacuum-like states and of local solutions for thermal-like states.
- Meda, Pinamonti and Siemssen (2020) prove local existence and uniqueness for the massive scalar with arbitrary coupling in flat FLRW.
- Juárez-Aubry, Kay, Miramontes and Sudarsky (2022) study the initial-value problem with and without state collapse.
- Outside cosmological symmetry there is no nonlinear existence theorem. The static and ultrastatic cases are formulated as constrained problems (Juárez-Aubry 2020). For the system linearised about Minkowski, Galanda, Meda, Murro, Pinamonti and Schmid (April 2026, preprint, [arXiv:2604.01047](https://arxiv.org/abs/2604.01047)) announce well-posedness of a forcing problem and a late-time exponential instability of the metric perturbations; the claim is not assessed here.`,
    residual: r`Part (i) is sharp; part (ii) is closer to incremental. A theorem in a fourth-order framework with a stability condition, or a proof that the problem is ill posed for every choice of the renormalization constants, would close the question. QF10 does not address back-reaction.`,
    evidence: [
      { kind: "published", role: "progress", summary: "Local existence and uniqueness for the semiclassical Einstein equation with a massive scalar of arbitrary coupling in flat FLRW; Ann. Henri Poincaré (2021).", url: "https://arxiv.org/abs/2007.14665v1", date: "2020-07-29", version: "v1" },
    ],
    refs: [
      { label: "Flanagan, Wald (1996)", url: "https://arxiv.org/abs/gr-qc/9602052" },
      { label: "Parker, Simon, order reduction of the semiclassical equations (1993)", url: "https://arxiv.org/abs/gr-qc/9211002" },
      { label: "Pinamonti, Siemssen, 'Global existence of solutions of the semiclassical Einstein equation for cosmological spacetimes', Commun. Math. Phys. 334 (2015) 171", url: "https://arxiv.org/abs/1309.6303" },
      { label: "Gottschalk, Siemssen, 'The cosmological semiclassical Einstein equation as an infinite-dimensional dynamical system', Ann. Henri Poincaré 22 (2021) 3915", url: "https://arxiv.org/abs/1809.03812" },
      { label: "Juárez-Aubry, 'Semiclassical gravity in static spacetimes as a constrained initial value problem', Ann. Henri Poincaré 23 (2022) 1451", url: "https://arxiv.org/abs/2011.05947" },
      { label: "Galanda, Meda, Murro, Pinamonti, Schmid, 'The semiclassical Einstein–Klein–Gordon system: asymptotic analysis of Minkowski spacetime' (2026, preprint)", url: "https://arxiv.org/abs/2604.01047" },
      { label: "Meda, Pinamonti, Siemssen, 'Existence and uniqueness of solutions of the semiclassical Einstein equation in cosmological models', Ann. Henri Poincaré (2021)", url: "https://arxiv.org/abs/2007.14665" },
      { label: "Juárez-Aubry, Kay, Miramontes, Sudarsky (2022)", url: "https://arxiv.org/abs/2205.11671" },
    ] },

  { id: "G6", cat: "semiclassical-gravity", horizon: "sharp",
    reviewedAt: "2026-11-12",
    relations: [{ id: "G7", type: "related" }, { id: "G8", type: "related" }, { id: "G10", type: "related" }],
    title: "Quantum focusing conjecture in four dimensions",
    statement: r`For a codimension-2 surface $\sigma$ and a null congruence from it, define the quantum expansion $\Theta[\sigma;y]=\frac{4G\hbar}{\sqrt h}\frac{\delta S_{\rm gen}}{\delta V(y)}$. The quantum focusing conjecture (QFC) states $\delta\Theta[\sigma;y]/\delta V(y')\le0$ for all $y,y'$. For Einstein gravity in $D=4$ coupled to free fields or a CFT, in the regime where quantum effects are small compared with the area, decide whether (i) the QFC holds, (ii) only the restricted QFC holds (derivatives at quantum-marginal surfaces, $\Theta=0$), or (iii) counterexamples already exist.`,
    definition: r`**The quantum focusing conjecture** is the quantum analogue of the classical focusing theorem, stated for the generalized entropy $S_{\rm gen}=A/4G\hbar+S_{\rm out}$. Most quantum entropy bounds and energy conditions (QNEC, quantum Bousso bound, generalized second law) follow from it. Bousso, Fisher, Leichenauer, Wall, “Quantum focusing conjecture”, PRD 93 (2016), [arXiv:1506.02669](https://arxiv.org/abs/1506.02669).`,
    progress: r`- Its diagonal consequence, the quantum null energy condition, is proved for free and superrenormalizable bosonic fields (Bousso et al., 2016) and then for general QFTs in flat space (Balakrishnan–Faulkner–Khandker–Wang, JHEP 2019; Ceyhan–Faulkner, Commun. Math. Phys. 2020).
- Fu, Koeller and Marolf (2017) find pointwise violations of the QFC in Einstein–Gauss–Bonnet gravity in $D\ge5$ and argue that they persist for gravity coupled to generic massive fields there, leaving $D\le4$ open; Leichenauer (2017) argues that the violation disappears once the geometric terms are smeared over the cutoff scale ([arXiv:1705.05469](https://arxiv.org/abs/1705.05469)).
- Shahbazi-Moghaddam (2022) proposes the restricted QFC and proves it for braneworlds dual to Einstein gravity under a technical assumption.
- Franken, Kaya, Rondeau, Shahbazi-Moghaddam and Tran (2025) construct counterexamples to the original QFC in JT gravity with 2D matter, in regimes without higher-dimensional uplift, and prove the restricted QFC there; they do not regard this as strong evidence against the QFC in higher dimensions.
- Bousso and Tabor (2024) reformulate the QFC as discrete max-focusing, from which the QNEC and the Bousso bound follow.
- Faulkner posted two preprints on 9 November 2026 (v1), both in the algebraic framework of half-sided modular inclusions. The first removes the finite-null-energy purification assumption of earlier algebraic QNEC proofs. In physical terms, the relative entropy to the Hartle–Hawking state is convex in the horizon cut. It also gives a weight-based version argued to be relevant to evaporating black holes in flat space ([arXiv:2611.11920](https://arxiv.org/abs/2611.11920v1)). The second proves convexity of the sandwiched (Araki–Masuda) Rényi relative entropy along the inclusion for every $p\ge2$, i.e. Rényi index $\alpha=p/2\ge1$, for diagonal shape variations ([arXiv:2611.11760](https://arxiv.org/abs/2611.11760v1)). Both concern QFT without gravitational back-reaction, so neither bears directly on the QFC itself.`,
    residual: r`In $D=4$: a proof for free fields beyond the QNEC, or a counterexample in the weakly coupled semiclassical regime. Weaker consequences that are separately open: the quantum Bousso bound beyond weak gravity and the Rényi QNEC for interacting theories (both on the new-problems page). Related: G7, G8, G10.`,
    evidence: [
      { kind: "published", role: "progress", summary: "Counterexamples to the original QFC in two-dimensional JT gravity with matter, outside the regime that uplifts to higher dimension; proof of the restricted QFC in the same model; JHEP 05 (2026) 111.", url: "https://arxiv.org/abs/2510.13961v3", date: "2026-06-29", version: "v3" },
      { kind: "preprint", role: "progress", summary: "Algebraic QNEC (half-sided modular inclusions) without the finite-null-energy purification assumption, plus a weight-based version; flat-space QFT, not the QFC.", url: "https://arxiv.org/abs/2611.11920v1", date: "2026-11-09", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Diagonal Rényi QNEC for every p ≥ 2 (α = p/2 ≥ 1) via Araki–Masuda weighted L_p norms, for half-sided modular inclusions; a QFT statement, not the QFC.", url: "https://arxiv.org/abs/2611.11760v1", date: "2026-11-09", version: "v1" },
    ],
    provenance: [
      { summary: "Faulkner reports that Claude Opus 5.5 and GPT-6 Astra helped with editing and proof checking, found a gap in the original formulation of Theorem 5, and contributed substantially to the ideas of Appendix B.4, which removes an assumption in the weight QNEC. Faulkner states that the main proof ideas predate AI assistance and takes full responsibility.", url: "https://arxiv.org/abs/2611.11920v1", version: "v1" },
      { summary: "Faulkner reports that Claude Opus 5.5 and GPT-6 Astra helped with editing, checking and streamlining some proofs and clarifying edge cases; the main proof ideas predate AI assistance.", url: "https://arxiv.org/abs/2611.11760v1", version: "v1" },
    ],
    refs: [
      { label: "Bousso, Fisher, Leichenauer, Wall, 'Quantum focusing conjecture', PRD 93 (2016)", url: "https://arxiv.org/abs/1506.02669" },
      { label: "Bousso, Fisher, Koeller, Leichenauer, Wall, 'Proof of the quantum null energy condition' (2015)", url: "https://arxiv.org/abs/1509.02542" },
      { label: "Balakrishnan, Faulkner, Khandker, Wang, 'A general proof of the quantum null energy condition', JHEP 09 (2019) 020", url: "https://arxiv.org/abs/1706.09432" },
      { label: "Ceyhan, Faulkner, 'Recovering the QNEC from the ANEC', Commun. Math. Phys. 377 (2020) 999", url: "https://arxiv.org/abs/1812.04683" },
      { label: "Fu, Koeller, Marolf, 'Violating the quantum focusing conjecture and quantum covariant entropy bound in d ≥ 5 dimensions', Class. Quantum Grav. 34 (2017) 175006", url: "https://arxiv.org/abs/1705.03161" },
      { label: "Leichenauer, 'The quantum focusing conjecture has not been violated' (2017, preprint)", url: "https://arxiv.org/abs/1705.05469" },
      { label: "Shahbazi-Moghaddam, 'Restricted quantum focusing', PRD 109, 066023 (2024)", url: "https://arxiv.org/abs/2212.03881" },
      { label: "Franken, Kaya, Rondeau, Shahbazi-Moghaddam, Tran, 'Tests of restricted quantum focusing and a new CFT bound', JHEP 05 (2026) 111", url: "https://arxiv.org/abs/2510.13961" },
      { label: "Bousso, Tabor, 'Discrete max-focusing', JHEP 06 (2025) 240", url: "https://arxiv.org/abs/2410.18192" },
      { label: "Faulkner, 'Proof of the QNEC, without assumptions and under a weight' (2026 preprint, v1)", url: "https://arxiv.org/abs/2611.11920v1" },
      { label: "Faulkner, 'Proof of the Rényi QNEC' (2026 preprint, v1)", url: "https://arxiv.org/abs/2611.11760v1" },
    ] },

  { id: "G7", cat: "semiclassical-gravity", horizon: "sharp",
    reviewedAt: "2026-11-09",
    relations: [{ id: "G6", type: "related" }, { id: "G8", type: "related" }, { id: "QF10", type: "related" }],
    title: "Self-consistent achronal averaged null energy condition",
    statement: r`For a QFT coupled to gravity through the semiclassical Einstein equation, prove that every self-consistent solution $(M,g,\omega)$ in the semiclassical regime, with $M$ globally hyperbolic and $\omega$ Hadamard, obeys $\int_\gamma\langle T_{kk}\rangle_\omega\,d\lambda\ge0$ along every complete achronal null geodesic $\gamma$, or exhibit a self-consistent counterexample. Here $T_{ab}$ includes all matter sourcing the geometry. The test-field assertion on an arbitrary fixed background is false.`,
    definition: r`**The averaged null energy condition** (ANEC) bounds the integrated null energy along a complete null geodesic. It underlies topological censorship and restrictions on traversable wormholes and time machines. Achronicity alone does not suffice on curved backgrounds: the conjecture concerns **self-consistent** semiclassical solutions. Graham, Olum, “Achronal averaged null energy condition”, PRD 76 (2007), [arXiv:0705.3193](https://arxiv.org/abs/0705.3193).`,
    progress: r`- Minkowski space: ANEC results for unitary Lorentz-invariant QFTs (Faulkner–Leigh–Parrikar–Wang 2016; Hartman–Kundu–Tajdini 2017, for interacting theories in $d>2$).
- Urban–Olum (2010) exhibit achronal ANEC violations for a conformally coupled scalar on fixed conformally flat four-dimensional backgrounds; these are test-field counterexamples, without imposing the semiclassical Einstein equation.
- Curved spacetime: the massless scalar in two dimensions along complete achronal null geodesics (Wald–Yurtsever 1991); the massless minimally coupled scalar to first order in curvature and its derivatives on a classical background satisfying null convergence (Kontou–Olum 2015).
- Wall (2010) derives the achronal ANEC from the generalized second law for minimally coupled fields, conditionally.
- Review: Kontou–Sanders (2020). A 2024 thesis proves a conformal variant in conformally flat cases.`,
    residual: r`A proof without assuming the GSL, or a counterexample satisfying the semiclassical Einstein equation. Identifying fixed backgrounds on which the condition holds is a weaker subproblem. Related: G6, G8.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Thesis surveying energy conditions; proves a conformal variant of the ANEC in conformally flat cases and states that it is unknown which energy condition a realistic theory coupled to gravity obeys.", url: "https://arxiv.org/abs/2411.11050v1", date: "2024-11-17", version: "v1" },
    ],
    refs: [
      { label: "Graham, Olum, 'Achronal averaged null energy condition', PRD 76 (2007)", url: "https://arxiv.org/abs/0705.3193" },
      { label: "Faulkner, Leigh, Parrikar, Wang, 'Modular Hamiltonians for deformed half-spaces and the averaged null energy condition' (2016)", url: "https://arxiv.org/abs/1605.08072" },
      { label: "Hartman, Kundu, Tajdini, 'Averaged null energy condition from causality' (2016)", url: "https://arxiv.org/abs/1610.05308" },
      { label: "Wall, achronal ANEC from the generalized second law (2009)", url: "https://arxiv.org/abs/0910.5751" },
      { label: "Kontou, Olum, 'Proof of the averaged null energy condition in a classical curved spacetime using a null-projected quantum inequality', PRD 92, 124009 (2015)", url: "https://arxiv.org/abs/1507.00297" },
      { label: "Urban, Olum, 'Averaged null energy condition violation in a conformally flat spacetime', PRD 81, 024039 (2010)", url: "https://arxiv.org/abs/0910.5925" },
      { label: "Kontou, Sanders, review of energy conditions (2020)", url: "https://arxiv.org/abs/2003.01815" },
      { label: "Stoffels, 'Positive thinking: A search for energy conditions' (2024)", url: "https://arxiv.org/abs/2411.11050" },
    ] },

  { id: "G8", cat: "semiclassical-gravity", horizon: "sharp",
    reviewedAt: "2026-11-09",
    relations: [{ id: "G6", type: "related" }, { id: "G7", type: "related" }, { id: "F8", type: "related" }],
    title: "Generalized second law beyond leading semiclassical order",
    statement: r`For a Killing horizon (or an asymptotically flat future causal horizon) and an interacting QFT coupled perturbatively to gravity, with $S_{\rm gen}$ defined as the von Neumann entropy of a crossed-product (type II) algebra, prove that $S_{\rm gen}$ is non-decreasing along the horizon including the subleading corrections in $G$, or determine the sign of those corrections in an explicit example.`,
    definition: r`**The generalized second law** (GSL) states that the generalized entropy, horizon area over $4G\hbar$ plus the entropy outside, never decreases (Bekenstein 1974). Wall proved it for free fields and arbitrary horizon slices at leading order: “A proof of the generalized second law for rapidly changing fields and arbitrary horizon slices”, PRD 85 (2012), [arXiv:1105.3445](https://arxiv.org/abs/1105.3445).`,
    progress: r`- Witten, Chandrasekaran–Penington–Witten (2022) and Kudler-Flam–Leutheusser–Satishchandran (2023) identify the generalized entropy with a von Neumann entropy of a crossed-product algebra.
- Faulkner and Speranza (2024) prove the GSL for arbitrary cuts of Killing horizons using crossed products and propose a version for interacting theories in asymptotically flat space; they leave open whether the GSL holds once subleading corrections are included.
- Kirklin (2024; JHEP 2025) proves a modified GSL to all orders in perturbative gravity, using idealised dynamical cuts located by quantum reference frames. The entropy difference is bounded below by the free energy of the later cut; recovering the usual GSL requires a semiclassical limit, a UV cutoff and energy conditions on the cuts.`,
    residual: r`The sign of subleading corrections to the usual $S_{\rm gen}$, or a general monotonicity proof. Kirklin's bound for idealised dynamical cuts does not by itself give a non-negative lower bound for realistic cuts. Quantum reference frames (F8) are a tool. Related: G6, G7.`,
    evidence: [
      { kind: "published", role: "progress", summary: "GSL for arbitrary cuts of Killing horizons via crossed-product algebras; the authors leave open the status of subleading corrections. JHEP 11 (2024) 099.", url: "https://arxiv.org/abs/2405.00847v2", date: "2024-08-12", version: "v2" },
      { kind: "published", role: "progress", summary: "All-orders modified GSL for idealised dynamical cuts in perturbative gravity; the lower bound includes the later cut's free energy. JHEP 07 (2025) 192.", url: "https://arxiv.org/abs/2412.01903v3", date: "2025-07-28", version: "v3" },
    ],
    refs: [
      { label: "Wall, PRD 85 (2012)", url: "https://arxiv.org/abs/1105.3445" },
      { label: "Chandrasekaran, Penington, Witten, 'Large N algebras and generalized entropy' (2022)", url: "https://arxiv.org/abs/2209.10454" },
      { label: "Kudler-Flam, Leutheusser, Satishchandran, 'Generalized black hole entropy is von Neumann entropy' (2023)", url: "https://arxiv.org/abs/2309.15897" },
      { label: "Faulkner, Speranza, 'Gravitational algebras and the generalized second law' (2024)", url: "https://arxiv.org/abs/2405.00847" },
      { label: "Kirklin, 'Generalised second law beyond the semiclassical regime', JHEP 07 (2025) 192", url: "https://arxiv.org/abs/2412.01903" },
    ] },

  { id: "G9", cat: "semiclassical-gravity", horizon: "sharp",
    reviewedAt: "2026-11-09",
    relations: [{ id: "QF1", type: "related" }],
    title: "Quantum energy inequalities for an interacting theory in d ≥ 3",
    statement: r`For the constructive $\phi^4_3$ theory, is there a state-independent quantum energy inequality: for every test function $f$ along a timelike curve, $\int f(t)^2\langle T_{00}(t)\rangle_\omega\,dt\ge-Q(f)$ with $Q(f)<\infty$ independent of the state $\omega$? The same question order by order for perturbative $\lambda\phi^4_4$.`,
    definition: r`**Quantum energy inequalities** (QEIs) bound from below the time-averaged energy density, which quantum fields allow to be locally negative. They limit exotic phenomena such as macroscopic negative energy. Ford, “Quantum coherence effects and the second law of thermodynamics”, Proc. R. Soc. A 364 (1978); Fewster, Eveson (1998), [arXiv:gr-qc/9805024](https://arxiv.org/abs/gr-qc/9805024). Review: Fewster, [arXiv:1208.5399](https://arxiv.org/abs/1208.5399).`,
    progress: r`- QEIs are proved for free fields, in flat and curved spacetimes (Fewster–Smith 2007), and for every unitary CFT in two dimensions (Fewster–Hollands 2005).
- For non-minimally coupled fields, even locally averaged energy densities can be unbounded below on Hadamard states. Fewster–Osterbrink (2007; published 2008) establish state-dependent bounds for $0<\xi\le1/4$.
- Two-dimensional integrable models admit QEIs: Bostelmann–Cadamuro–Fewster treat the massive Ising model (2013). Bostelmann–Cadamuro–Mandrysch (2023; published 2024) prove state-independent bounds for constant scattering functions; their bounds for generic models hold at one-particle level only.
- Bostelmann–Fewster (2009) derive quantum inequalities from operator product expansions in general, possibly interacting Minkowski-space QFTs. This framework does not establish the state-independent energy-density bound requested here for $\phi^4_3$ or perturbative $\phi^4_4$.`,
    residual: r`A QEI for $\phi^4_3$, or an unboundedness argument that uses the interaction. The constructed models of QF1 and related entries are the natural setting.`,
    evidence: [
      { kind: "published", role: "progress", summary: "Two-dimensional integrable models: state-independent QEI for constant scattering functions; one-particle bounds for generic models with several particle species and bound states.", url: "https://arxiv.org/abs/2302.00063v2", date: "2024-02-06", version: "v2" },
    ],
    refs: [
      { label: "Fewster, Eveson (1998)", url: "https://arxiv.org/abs/gr-qc/9805024" },
      { label: "Bostelmann, Fewster, 'Quantum inequalities from operator product expansions', Commun. Math. Phys. 292 (2009) 761–795", url: "https://arxiv.org/abs/0812.4760" },
      { label: "Fewster, 'Lectures on quantum energy inequalities' (2012)", url: "https://arxiv.org/abs/1208.5399" },
      { label: "Fewster, Smith, absolute QEIs in curved spacetime (2007)", url: "https://arxiv.org/abs/gr-qc/0702056" },
      { label: "Fewster, Hollands, quantum energy inequalities in two-dimensional CFT (2005)", url: "https://arxiv.org/abs/math-ph/0412028" },
      { label: "Fewster, Osterbrink (2007)", url: "https://arxiv.org/abs/0708.2450" },
      { label: "Bostelmann, Cadamuro, Fewster, QEI for the massive Ising model (2013)", url: "https://arxiv.org/abs/1304.7682" },
      { label: "Bostelmann, Cadamuro, Mandrysch, 'Quantum energy inequalities in integrable models with several particle species and bound states' (2023)", url: "https://arxiv.org/abs/2302.00063" },
    ] },

  { id: "G10", cat: "semiclassical-gravity", horizon: "sharp",
    reviewedAt: "2026-11-09",
    relations: [{ id: "G6", type: "related" }],
    title: "Quantum Penrose inequality",
    statement: r`For four-dimensional asymptotically flat semiclassical initial data containing a quantum marginally trapped surface $\mu_Q$ ($\Theta_+=0$, $\Theta_-\le0$), subject to the appropriate generalized minimality condition, prove $M\ge\sqrt{\hbar\,S_{\rm gen}[L(\mu_Q)]/(4\pi G)}$, or exhibit a counterexample. Here $M$ is the mass at spatial infinity and $L(\mu_Q)$ is the future outgoing light sheet (Bousso–Shahbazi-Moghaddam–Tomašević 2019). A proof in spherical symmetry would already be significant.`,
    definition: r`**The Penrose inequality** bounds the mass of a spacetime from below by the area of its trapped surfaces (Penrose, Ann. N.Y. Acad. Sci. 224 (1973) 125). It is violated semiclassically by Boulware-like states, which motivated a quantum version with the generalized entropy in place of the area. Bousso, Shahbazi-Moghaddam, Tomašević, “Quantum Penrose inequality”, PRL 123, 241301 (2019), [arXiv:1908.02755](https://arxiv.org/abs/1908.02755).`,
    progress: r`- The classical inequality is proved in the Riemannian case (Huisken–Ilmanen; Bray, 2001); the general case is open (review: Mars 2009).
- The quantum version has been checked in examples (Bousso–Shahbazi-Moghaddam–Tomašević 2019).
- Frassino, Hennigar, Pedraza and Svesko (2024) find that the 2019 form fails for quantum black holes in AdS$_3$ beyond the perturbative regime and propose a refined inequality valid there to all orders in back-reaction.`,
    residual: r`A proof in semiclassical spherical symmetry, or a counterexample in $D=4$. The 3D refinement shows that the correct form of the inequality is itself part of the question. Xu (December 2025) announces a classical spacetime Penrose inequality under extra assumptions; that claim concerns the classical problem and is unassessed here. Related: G6.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Refined quantum Penrose inequality valid for all known quantum black holes in AdS3 to all orders in back-reaction, where the 2019 form fails.", url: "https://arxiv.org/abs/2406.17860v1", date: "2024-06-25", version: "v1" },
    ],
    refs: [
      { label: "Bousso, Shahbazi-Moghaddam, Tomašević, 'Quantum Penrose inequality', PRL 123, 241301 (2019)", url: "https://arxiv.org/abs/1908.02755" },
      { label: "Bousso, Shahbazi-Moghaddam, Tomašević, 'Quantum information bound on the energy' (2019)", url: "https://arxiv.org/abs/1909.02001" },
      { label: "Mars, 'Present status of the Penrose inequality' (2009)", url: "https://arxiv.org/abs/0906.5566" },
      { label: "Frassino, Hennigar, Pedraza, Svesko, 'Quantum inequalities for quantum black holes' (2024)", url: "https://arxiv.org/abs/2406.17860" },
      { label: "Xu (2025), unassessed classical claim", url: "https://arxiv.org/abs/2512.04137" },
    ] },
];
