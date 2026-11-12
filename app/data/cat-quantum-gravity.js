const r = String.raw;

// Added 9 November 2026 (promoted from the new-problems page). Sources of the
// dated evidence items were rechecked on their arXiv pages that day.
export const QUANTUM_GRAVITY = [
  { id: "QG1", cat: "quantum-gravity", horizon: "sharp",
    reviewedAt: "2026-11-09",
    title: "Seven-loop ultraviolet finiteness of N = 8 supergravity",
    statement: r`Is the four-graviton amplitude of $\mathcal N=8$ supergravity in $D=4$ ultraviolet finite at seven loops? Precisely: is the coefficient of the logarithmic divergence associated with the $D^8R^4$ counterterm at $L=7$, computed from the double-copy integrand and generalized unitarity, equal to zero?`,
    definition: r`**Maximal supergravity** in four dimensions is the most symmetric field theory of gravity. Whether it is ultraviolet finite, contrary to power counting, would show whether a pointlike theory of gravity can be perturbatively consistent. Beisert et al., “E7(7) constraints on counterterms in N=8 supergravity” (2010), [arXiv:1009.1643](https://arxiv.org/abs/1009.1643), exclude candidate counterterms below seven loops and identify the four-graviton amplitude as the decisive seven-loop test. Green–Russo–Vanhove (2007) is an earlier ultraviolet analysis, not the source of this seven-loop target.`,
    progress: r`- Four-graviton ultraviolet finiteness in $D=4$ is established by explicit calculations through five loops. The five-loop divergence in $D=24/5$ (Bern et al. 2018) leaves the seven-loop $D=4$ question undecided.
- $E_{7(7)}$ symmetry, supersymmetry and superspace arguments exclude counterterms up to six loops (Beisert et al. 2010; Bossard–Howe–Stelle–Vanhove 2011); $D^8R^4$ at seven loops is the first compatible one.
- Kallosh (2014) argues for finiteness to all orders; not accepted as established.
- Bern, Carrasco, Chiodaroli, Johansson and Roiban (2023 review) note cancellations in cuts that may signal an enhanced cancellation at seven loops; a direct test requires technical advances. No seven-loop computation was found as of 9 November 2026.`,
    residual: r`The seven-loop integrand and its UV behaviour in $D=4$, or a non-renormalization argument covering $D^8R^4$ accepted as rigorous.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Review of supergravity amplitudes, the double copy and ultraviolet behaviour; the seven-loop question in D = 4 remains open.", url: "https://arxiv.org/abs/2304.07392v1", date: "2023-04-14", version: "v1" },
    ],
    refs: [
      { label: "Green, Russo, Vanhove, 'Ultraviolet properties of maximal supergravity', PRL 98 (2007)", url: "https://arxiv.org/abs/hep-th/0611273" },
      { label: "Bern et al., five-loop ultraviolet properties of N = 8 supergravity (2018)", url: "https://arxiv.org/abs/1804.09311" },
      { label: "Beisert et al. (2010)", url: "https://arxiv.org/abs/1009.1643" },
      { label: "Bossard, Howe, Stelle, Vanhove (2011)", url: "https://arxiv.org/abs/1105.6087" },
      { label: "Kallosh (2014)", url: "https://arxiv.org/abs/1412.7117" },
      { label: "Bern, Carrasco, Chiodaroli, Johansson, Roiban, 'Supergravity amplitudes, the double copy and ultraviolet behavior' (2023)", url: "https://arxiv.org/abs/2304.07392" },
    ] },

  { id: "QG2", cat: "quantum-gravity", horizon: "sharp",
    reviewedAt: "2026-11-09",
    title: "Does string theory sit at the boundary of the graviton S-matrix bootstrap?",
    statement: r`In $D=10$ with maximal supersymmetry, consider the full, non-perturbative four-graviton amplitude satisfying unitarity, analyticity, crossing and the high-energy assumptions of Guerrieri–Penedones–Vieira. Does its dimensionless $R^4$ coefficient obey $\alpha\ge\alpha_{\rm string}\approx0.1389$, in their Planck-unit normalization, or is a consistent amplitude below this value possible? The comparison value is the minimum attained by type IIB string theory over its coupling, not a weak-coupling value.`,
    definition: r`**The S-matrix bootstrap** maps the space of consistent scattering amplitudes using only unitarity, analyticity and high-energy bounds. Applied to gravitons, it asks whether string theory is the unique ultraviolet completion of gravity. Guerrieri, Penedones, Vieira, “Where is string theory?”, PRL 127, 081601 (2021), [arXiv:2102.02847](https://arxiv.org/abs/2102.02847).`,
    progress: r`- Camanho, Edelstein, Maldacena and Zhiboedov (2014): causality requires an infinite tower of higher-spin states once the three-graviton coupling is corrected.
- Guerrieri, Penedones and Vieira (2021) study the non-perturbative bootstrap. Guerrieri, Murali, Penedones and Vieira (2022; JHEP 2023) extrapolate a ten-dimensional minimum $0.124\pm0.003$, below the string minimum $0.138949$; this is a numerical estimate, not a certified consistent theory below the string value. They discuss missing inelasticity as a possible explanation.
- Caron-Huot, Mazáč, Rastelli and Simmons-Duffin (2021): two-sided bounds on higher Wilson coefficients. Häring and Zhiboedov: gravitational Regge bounds (2022) and the black-disk limit (2023).
- Albert, Knop and Rastelli (2024): an extremal solution with a single Regge trajectory; string theory lies strictly inside the allowed region for other observables.`,
    residual: r`Certified bounds converging to $\alpha_{\rm string}$, or a consistent amplitude below it.`,
    evidence: [
      { kind: "published", role: "progress", summary: "JHEP 02 (2025) 157: extremal single-Regge-trajectory solutions of the bootstrap; tree-level string theory is not at the boundary for other observables.", url: "https://arxiv.org/abs/2406.12959v2", date: "2025-03-05", version: "v2" },
    ],
    refs: [
      { label: "Camanho, Edelstein, Maldacena, Zhiboedov (2014)", url: "https://arxiv.org/abs/1407.5597" },
      { label: "Guerrieri, Penedones, Vieira, 'Where is string theory?' (2021)", url: "https://arxiv.org/abs/2102.02847" },
      { label: "Guerrieri, Murali, Penedones, Vieira, 'Where is M-theory in the space of scattering amplitudes?', JHEP 06 (2023) 064", url: "https://arxiv.org/abs/2212.00151" },
      { label: "Caron-Huot, Mazáč, Rastelli, Simmons-Duffin, 'Sharp boundaries for the swampland' (2021)", url: "https://arxiv.org/abs/2102.08951" },
      { label: "Häring, Zhiboedov (2022)", url: "https://arxiv.org/abs/2202.08280" },
      { label: "Häring, Zhiboedov (2023)", url: "https://arxiv.org/abs/2311.13631" },
      { label: "Albert, Knop, Rastelli, 'Where is tree-level string theory?' (2024)", url: "https://arxiv.org/abs/2406.12959" },
    ] },

  { id: "QG3", cat: "quantum-gravity", horizon: "conceptual",
    reviewedAt: "2026-11-09",
    relations: [{ id: "QF7", type: "related" }],
    title: "No global symmetries in asymptotically flat quantum gravity",
    statement: r`Give a framework in which asymptotically flat quantum gravity in $D\ge4$ has an operational meaning (an infrared-finite S-matrix, an algebra of observables at $\mathscr I$, or a uniform flat limit of AdS families), and prove there: (i) no global symmetry (continuous, discrete, $p$-form) acts faithfully on states; (ii) every compact gauge symmetry has all charge sectors populated. Weak version: show that the $\ell_{\rm AdS}\to\infty$ limit of the Harlow–Ooguri statements is uniform for observables of fixed size.`,
    definition: r`**The no-global-symmetries conjecture** holds that quantum gravity admits only gauge symmetries; it is supported by black-hole evaporation and remnant arguments. Banks, Seiberg, “Symmetries and strings in field theory and gravity” (2010), [arXiv:1011.5120](https://arxiv.org/abs/1011.5120). Harlow and Ooguri proved it in AdS via holography: [arXiv:1810.05337](https://arxiv.org/abs/1810.05337), [arXiv:1810.05338](https://arxiv.org/abs/1810.05338).`,
    progress: r`- Black-hole evaporation and remnant arguments, reviewed by Banks–Seiberg (2010), motivate the conjecture rather than establish a theorem.
- Harlow–Ooguri (2018): theorem in AdS: no global symmetries, compact gauge groups, completeness of the charge spectrum.
- Reece (TASI lectures published in 2023) describes the Harlow–Ooguri proof in asymptotically AdS space and the expectation that its conclusions extend beyond AdS. Harlow–Shaghoulian give a Page-curve-based argument beyond AdS/CFT ([arXiv:2010.10539](https://arxiv.org/abs/2010.10539)); this relies on the quantum-gravity entropy calculation, rather than a general rigorous flat-space construction.`,
    residual: r`Sharp once a framework is fixed; fixing it is part of the problem, hence the conceptual horizon. The weak version (uniform flat limit) is the most closable target. Infrared subtleties of the definition relate to QF7.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "TASI lectures published in 2023: review of the holographic AdS theorem and the expectation of a wider extension, without a proof beyond AdS.", url: "https://arxiv.org/abs/2304.08512v1", date: "2023-04-17", version: "v1" },
    ],
    refs: [
      { label: "Banks, Seiberg, 'Symmetries and strings in field theory and gravity' (2010)", url: "https://arxiv.org/abs/1011.5120" },
      { label: "Harlow, Ooguri (2018)", url: "https://arxiv.org/abs/1810.05337" },
      { label: "Harlow, Ooguri (2018), long version", url: "https://arxiv.org/abs/1810.05338" },
      { label: "Reece, 'TASI lectures: (no) global symmetries to axion physics' (2023)", url: "https://arxiv.org/abs/2304.08512" },
    ] },

  { id: "QG4", cat: "quantum-gravity", horizon: "sharp",
    reviewedAt: "2026-11-09",
    title: "Instability of non-supersymmetric AdS vacua",
    statement: r`Every non-supersymmetric AdS vacuum supported by fluxes in a consistent theory of quantum gravity is unstable, at least non-perturbatively by brane nucleation. Prove this in a defined class (for instance flux compactifications of 10D/11D supergravity with the corresponding BPS branes), or exhibit a counterexample: a non-supersymmetric flux AdS vacuum whose perturbative and non-perturbative stability is established. Corresponding CFT target: exclude a unitary non-supersymmetric large-$N$ CFT with a parametrically large single-trace gap above spin two and an Einstein-like bulk supported by flux.`,
    definition: r`**The Ooguri–Vafa conjecture** is a swampland conjecture derived from the weak gravity conjecture: branes charged under the supporting flux can always nucleate and destabilize a non-supersymmetric AdS vacuum. Ooguri, Vafa, “Non-supersymmetric AdS and the swampland”, Adv. Theor. Math. Phys. 21 (2017), [arXiv:1610.01533](https://arxiv.org/abs/1610.01533).`,
    progress: r`- Many non-supersymmetric candidates have been shown perturbatively unstable or unstable to brane nucleation; a few resist perturbatively without a proof of non-perturbative stability.
- No explicit non-supersymmetric large-$N$, large-gap CFT is known; constructing one is a central question of the holographic CFT bootstrap.`,
    residual: r`A single stable counterexample closes the question; a proof in a class is a programme. `,
    evidence: [
      { kind: "conjecture", role: "progress", summary: "Statement of the conjecture and its link with the weak gravity conjecture; v3 is the revised version.", url: "https://arxiv.org/abs/1610.01533v3", date: "2017-08-25", version: "v3" },
    ],
    refs: [
      { label: "Ooguri, Vafa, 'Non-supersymmetric AdS and the swampland', Adv. Theor. Math. Phys. 21 (2017)", url: "https://arxiv.org/abs/1610.01533" },
    ] },

  { id: "QG5", cat: "quantum-gravity", horizon: "programme",
    reviewedAt: "2026-11-09",
    relations: [{ id: "R3", type: "related" }],
    title: "Unitarity of the asymptotic-safety fixed point",
    statement: r`For quantum gravity defined by the functional renormalization group, prove that the continuum theory at the non-Gaussian (Reuter) fixed point, if it exists, is unitary: positivity of the graviton spectral function and absence of ghosts, independently of the truncation. Sharp sub-target: a spectral-positivity criterion at fixed derivative order that is stable under refinement of the truncation, or a convergent truncation that violates positivity.`,
    definition: r`**Asymptotic safety** (Weinberg 1979) proposes that gravity is non-perturbatively renormalizable because its couplings flow to an interacting ultraviolet fixed point. Reuter introduced the functional RG equation for gravity, “Nonperturbative evolution equation for quantum gravity” (arXiv 1996; PRD 57, 971 (1998)), [arXiv:hep-th/9605030](https://arxiv.org/abs/hep-th/9605030). Later truncation studies find interacting fixed points (review: Bonanno et al., arXiv:2004.06810); higher-derivative terms threaten unitarity.`,
    progress: r`- Existence of the fixed point in truncations is well studied (critical review: Bonanno et al. 2020); unitarity is the decisive open question.
- Fehre, Litim, Pawlowski and Reichert (2021) compute the graviton spectral function in Lorentzian signature, compatible with unitarity in the approximation used.
- Causal dynamical triangulations are reflection positive after Wick rotation; nothing analogous is proved for the continuum theory at the fixed point. Recent overview: Schiffer (2025).`,
    residual: r`A programme with the sharp sub-target above. Existence of the fixed point itself is a separate question. Related: R3 (gradient flows).`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Four-page proceedings overview (2025), noting recent work on unitarity and Lorentzian signature; no new unitarity theorem.", url: "https://arxiv.org/abs/2509.26352v1", date: "2025-09-30", version: "v1" },
    ],
    refs: [
      { label: "Reuter (1996)", url: "https://arxiv.org/abs/hep-th/9605030" },
      { label: "Bonanno et al., critical reflections on asymptotically safe gravity (2020)", url: "https://arxiv.org/abs/2004.06810" },
      { label: "Fehre, Litim, Pawlowski, Reichert, Lorentzian graviton spectral function, PRL 130, 081501 (2023; arXiv 2021)", url: "https://arxiv.org/abs/2111.13232" },
      { label: "Schiffer, 'Asymptotically safe quantum gravity: functional and lattice perspectives' (2025)", url: "https://arxiv.org/abs/2509.26352" },
    ] },

  { id: "QG6", cat: "quantum-gravity", horizon: "sharp",
    reviewedAt: "2026-11-12",
    title: "Gravitationally mediated entanglement as a witness of quantum gravity",
    statement: r`In the Bose–Marletto–Vedral setting (two masses in spatial superposition, Newtonian interaction only), specify a class $\mathcal C$ of theories in which the gravitational field is a classical degree of freedom (phase-space variable, not superposable, relativistically non-signalling, Newtonian limit, stochastic back-reaction allowed). Prove that every theory in $\mathcal C$ produces strictly less entanglement than linearized quantum gravity for fixed experimental parameters, or exhibit a member of $\mathcal C$ that reproduces it; state whether the locality assumption is information-theoretic or spatio-temporal.`,
    definition: r`**The gravitational entanglement witness** proposes to test whether gravity is quantum by checking whether it can entangle two masses: local operations and classical communication cannot create entanglement, so a classical mediator could not either. Bose et al., “Spin entanglement witness for quantum gravity”, PRL 119 (2017), [arXiv:1707.06050](https://arxiv.org/abs/1707.06050); Marletto, Vedral, PRL 119 (2017), [arXiv:1707.06036](https://arxiv.org/abs/1707.06036).`,
    progress: r`- Theorems with information-theoretic locality: Marletto–Vedral (2020) beyond quantum theory; Galley–Giacomini–Selby (2022) in generalized probabilistic theories.
- Oppenheim, Sparaciari, Šoda and Weller-Davies (2023): classical-quantum gravity implies a decoherence–diffusion trade-off.
- Aziz and Howl (Nature, 2025) claim that classical gravity produces entanglement through QFT on a classical background. Several groups contest this, reducing the effect to free QFT on a fixed background or to a material channel. Di Biagio (arXiv 2025; PRD 2026) argues that detection alone is insufficient without quantitative predictions.
- Feng and Vedral (9 November 2026, v1; v2 of 10 November) study the dephased Bose–Marletto–Vedral setup, in which the final state may hold no entanglement at all ([arXiv:2611.12229](https://arxiv.org/abs/2611.12229v2)). With independently characterized which-path dephasing held fixed, they prove an exact finite-time distinction between the gravitational conditional-phase evolution and every passive stochastic local-phase model induced by a classical mediator, even for inputs that stay separable. Through a diagonal PPT relaxation, the distinction extends to population-preserving classical measurement and feedback. This is a dynamical witness for a specified class of classical-mediator models, not an entanglement bound for the full class $\mathcal C$ of the statement.`,
    residual: r`A theorem with purely spatio-temporal locality assumptions and a quantitative bound on classically mediated entanglement, or an explicit classical model reaching the quantum prediction. Experimental feasibility is outside the question.`,
    evidence: [
      { kind: "published", role: "progress", summary: "Claims that classical theories of gravity produce entanglement through QFT on a classical background; contested by several groups. Nature (2025).", url: "https://arxiv.org/abs/2510.19714v3", date: "2026-07-01", version: "v3" },
      { kind: "preprint", role: "progress", summary: "Exact finite-time distinction between gravitational conditional-phase dynamics and every passive stochastic local-phase classical-mediator model under fixed dephasing, also for separable inputs; a restricted model class and a dynamical rather than entanglement witness.", url: "https://arxiv.org/abs/2611.12229v2", date: "2026-11-10", version: "v2" },
    ],
    provenance: [
      { summary: "Feng and Vedral report that AI tools assisted with grammar, wording, coding, algebraic checks and proof exploration, and that GPT-assisted tools were used for exploratory derivations and consistency checks in parts of the diagonal-PPT analysis behind Theorem 2 and Appendix G. They take full responsibility.", url: "https://arxiv.org/abs/2611.12229v2", version: "v2" },
    ],
    refs: [
      { label: "Bose et al., 'Spin entanglement witness for quantum gravity', PRL 119 (2017)", url: "https://arxiv.org/abs/1707.06050" },
      { label: "Marletto, Vedral, PRL 119 (2017)", url: "https://arxiv.org/abs/1707.06036" },
      { label: "Marletto, Vedral, 'Witnessing non-classicality beyond quantum theory', PRD 102 (2020)", url: "https://arxiv.org/abs/2003.07974" },
      { label: "Galley, Giacomini, Selby (arXiv 2020; published 2022)", url: "https://arxiv.org/abs/2012.01441" },
      { label: "Christodoulou, Rovelli (2018)", url: "https://arxiv.org/abs/1808.05842" },
      { label: "Oppenheim, Sparaciari, Šoda, Weller-Davies (2022)", url: "https://arxiv.org/abs/2203.01982" },
      { label: "Aziz, Howl, 'Classical theories of gravity produce entanglement', Nature (2025)", url: "https://arxiv.org/abs/2510.19714" },
      { label: "Feng & Vedral, 'Testing non-classical gravitational phase dynamics under strong dephasing' (2026 preprint, v2)", url: "https://arxiv.org/abs/2611.12229v2" },
      { label: "Diósi, 'No, classical gravity does not entangle quantized matter fields' (2025; revised 2026)", url: "https://arxiv.org/abs/2511.00852" },
      { label: "Gundhi, Infantino, Bassi, 'Can classical theories of gravity produce entanglement?' (2026)", url: "https://arxiv.org/abs/2604.19696" },
      { label: "Di Biagio, Gravity-induced entanglement is not a theory-independent witness of nonclassicality of the gravitational field, PRD 114, 084050 (2026)", url: "https://arxiv.org/abs/2511.02683" },
    ] },

  { id: "QG7", cat: "quantum-gravity", horizon: "sharp",
    reviewedAt: "2026-11-09",
    title: "Contour of the no-boundary wavefunction",
    statement: r`In the Bianchi IX minisuperspace (or closed FLRW with one perturbation mode), with fixed measure and Einstein–Hilbert action at $\Lambda>0$: is there an integration contour for the lapse $N$ such that the integral (i) converges, (ii) solves the Wheeler–DeWitt equation rather than giving a Green function, (iii) suppresses large anisotropies and perturbations, and (iv) remains so when matter fields are added? Decide whether the complex contour realizing the Hartle–Hawking proposal is a legitimate choice for the Lorentzian integral, and whether the Kontsevich–Segal criterion selects it.`,
    definition: r`**The no-boundary proposal** defines the wavefunction of the universe by a gravitational path integral over compact geometries with no initial boundary. Hartle, Hawking, “Wave function of the universe”, PRD 28 (1983) 2960. Its competitor is Vilenkin's tunnelling proposal. The two differ by the choice of integration contour, which is the disputed point: Feldbrugge, Lehners, Turok, “Lorentzian quantum cosmology”, PRD 95 (2017), [arXiv:1703.02076](https://arxiv.org/abs/1703.02076).`,
    progress: r`- Feldbrugge, Lehners and Turok (2017) find that the Lorentzian integral over $N>0$ gives the tunnelling wavefunction with enhanced perturbations. Diaz Dorronsoro et al. (2017) recover the no-boundary state with a contour over the whole real line; Feldbrugge–Lehners–Turok (arXiv 2017; published 2018, [arXiv:1708.05104](https://arxiv.org/abs/1708.05104)) argue that no lapse contour avoids unsuppressed perturbations in their specified semiclassical model; this is a model-dependent obstruction, not a theorem covering every measure and matter extension.
- Kontsevich and Segal propose a criterion for admissible complex metrics, and Witten (2021) studies it in gravity; Hertog, Janssen and Karlsson (2023) apply it to the no-boundary state.
- Honda, Matsui, Okabayashi and Terada (2024) use resurgence: complex deformations favour the tunnelling wavefunction, while Borel ambiguities around tunnelling saddles cancel against no-boundary saddles in a minisuperspace model.`,
    residual: r`A non-existence theorem for a contour satisfying (i)–(iv), a construction with (iv) verified for a scalar field, or an accepted contour-independent definition of the no-boundary state.`,
    evidence: [
      { kind: "published", role: "progress", summary: "Resurgence analysis of Lorentzian minisuperspace cosmology: tunnelling favoured by complex deformations, with cancellation of Borel ambiguities against no-boundary saddles; PRD 110, 083508.", url: "https://arxiv.org/abs/2402.09981v3", date: "2025-04-15", version: "v3" },
    ],
    refs: [
      { label: "Feldbrugge, Lehners, Turok, 'Lorentzian quantum cosmology', PRD 95 (2017)", url: "https://arxiv.org/abs/1703.02076" },
      { label: "Feldbrugge, Lehners, Turok (2017)", url: "https://arxiv.org/abs/1705.00192" },
      { label: "Feldbrugge, Lehners, Turok, 'No Rescue for the No Boundary Proposal' (2017; published 2018)", url: "https://arxiv.org/abs/1708.05104" },
      { label: "Diaz Dorronsoro, Halliwell, Hartle, Hertog, Janssen (2017)", url: "https://arxiv.org/abs/1705.05340" },
      { label: "Halliwell, Hartle, Hertog (2018)", url: "https://arxiv.org/abs/1812.01760" },
      { label: "Witten, Kontsevich–Segal criterion for complex metrics (2021)", url: "https://arxiv.org/abs/2111.06514" },
      { label: "Hertog, Janssen, Karlsson (2023)", url: "https://arxiv.org/abs/2305.15440" },
      { label: "Lehners, Review of the No-Boundary Wave Function, Phys. Rept. 1022, 1–82 (2023)", url: "https://arxiv.org/abs/2303.08802" },
      { label: "Honda, Matsui, Okabayashi, Terada, 'Resurgence in Lorentzian quantum cosmology', PRD 110, 083508 (2024)", url: "https://arxiv.org/abs/2402.09981" },
    ] },

  { id: "QG8", cat: "quantum-gravity", horizon: "sharp",
    reviewedAt: "2026-11-09",
    relations: [{ id: "QF10", type: "related" }],
    title: "Light interacting scalar in de Sitter: invariant state and late-time equilibrium",
    statement: r`For $\lambda\phi^4$ with $m^2\ll H^2$ (including $m=0$) on global dS$_4$: (i) is there an $SO(4,1)$-invariant Hadamard state for the interacting theory, defined non-perturbatively or to all orders with controlled resummation of secular infrared divergences? (ii) Do late-time correlators of every reasonable Hadamard state converge to it, with relaxation rate $\Gamma\sim\sqrt\lambda\,H$? (iii) Is Starobinsky–Yokoyama stochastic inflation a rigorous scaling limit of the QFT with controlled corrections?`,
    definition: r`**Light fields in de Sitter space** suffer infrared secular growth: perturbation theory breaks down at late times because long-wavelength modes accumulate. Stochastic inflation resums them into a Fokker–Planck equation with an equilibrium state. Starobinsky, Yokoyama, “Equilibrium state of a self-interacting scalar field in the de Sitter background”, PRD 50 (1994) 6357, [arXiv:astro-ph/9407016](https://arxiv.org/abs/astro-ph/9407016).`,
    progress: r`- Massive case: perturbative infrared stability and an invariant state to all orders (Marolf–Morrison 2010–2011; Hollands 2010).
- Massless case: Hollands (2011) treats interacting massless fields by a modified perturbative expansion. Dynamical mass generation has the scaling $m_{\rm dyn}^2\propto\sqrt\lambda H^2$, hence $m_{\rm dyn}\propto\lambda^{1/4}H$; the zero mode is treated non-perturbatively in Euclidean methods (Rajaraman 2010; Beneke–Moch 2012). Further work treats infrared dynamics and soft de Sitter effective theory (Gorbenko–Senatore 2019; Mirbabayi 2019; Cohen–Green 2020), and stochastic inflation at NNLO (Cohen–Green–Premkumar–Ridgway 2021).
- No non-perturbative existence and uniqueness theorem for $m=0$.`,
    residual: r`(i) a construction (for example a Euclidean cluster expansion on $S^4$ with control of the zero mode, then continuation) or a no-go; (iii) a scaling-limit theorem with error bounds. Here the difficulty is infrared rather than ultraviolet, unlike QF10.`,
    evidence: [
      { kind: "published", role: "progress", summary: "Stochastic inflation derived as an effective theory to next-to-next-to-leading order; JHEP 09 (2021) 159. Systematic, not a non-perturbative theorem.", url: "https://arxiv.org/abs/2106.09728v2", date: "2021-09-22", version: "v2" },
    ],
    refs: [
      { label: "Starobinsky, Yokoyama, PRD 50 (1994) 6357", url: "https://arxiv.org/abs/astro-ph/9407016" },
      { label: "Marolf, Morrison (2010)", url: "https://arxiv.org/abs/1006.0035" },
      { label: "Marolf, Morrison (2010)", url: "https://arxiv.org/abs/1010.5327" },
      { label: "Hollands (2010)", url: "https://arxiv.org/abs/1010.5367" },
      { label: "Hollands (2011)", url: "https://arxiv.org/abs/1105.1996" },
      { label: "Rajaraman (2010)", url: "https://arxiv.org/abs/1008.1271" },
      { label: "Beneke, Moch (2012)", url: "https://arxiv.org/abs/1212.3058" },
      { label: "Gorbenko, Senatore (2019)", url: "https://arxiv.org/abs/1911.00022" },
      { label: "Mirbabayi (2019)", url: "https://arxiv.org/abs/1911.00564" },
      { label: "Cohen, Green (2020)", url: "https://arxiv.org/abs/2007.03693" },
      { label: "Cohen, Green, Premkumar, Ridgway, 'Stochastic inflation at NNLO', JHEP 09 (2021) 159", url: "https://arxiv.org/abs/2106.09728" },
    ] },
];
