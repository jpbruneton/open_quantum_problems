const r = String.raw;

// Added 9 November 2026 (promoted from the new-problems page). Sources of the
// dated evidence items were rechecked on their arXiv pages that day.
export const HOLOGRAPHY = [
  { id: "H1", cat: "holography", horizon: "sharp",
    reviewedAt: "2026-11-09",
    title: "Extremal CFTs, pure AdS₃ gravity and the optimal modular gap",
    statement: r`(a) Witten's chiral question: for integer $k\ge2$, is there a unitary, compact, holomorphically factorized CFT$_2$ of central charge $c=24k$ whose nontrivial Virasoro primaries all have weight $h\ge k+1$? (b) Is there a family of unitary compact CFT$_2$ with Virasoro symmetry only and $c\to\infty$ whose non-identity primaries all have $\Delta>(c-1)/12$, the BTZ threshold? Quantitative form of (b): let $\Delta_1(c)$ be the supremum of the first non-identity primary dimension over such theories: prove $\Delta_1(c)\le(c-1)/12+O(1)$, or exhibit families with $\Delta_1(c)\ge c/12+\epsilon c$.`,
    definition: r`**Pure three-dimensional gravity** with negative cosmological constant has no local degrees of freedom; its quantum theory, if it exists, should be dual to a CFT$_2$ whose only light states are Virasoro descendants of the vacuum, with black-hole (BTZ) states starting at $\Delta=(c-1)/12$. Witten conjectured that the duals are extremal CFTs: “Three-dimensional gravity revisited” (2007), [arXiv:0706.3359](https://arxiv.org/abs/0706.3359). The modular bootstrap bounds the gap of any such theory: Hellerman, “A universal inequality for CFT and quantum gravity”, JHEP 08 (2011) 130, [arXiv:0902.2790](https://arxiv.org/abs/0902.2790).`,
    progress: r`- $k=1$: the Monster module of Frenkel–Lepowsky–Meurman realizes the extremal partition function.
- Maloney–Witten (2007): the sum over geometries gives a non-positive density of states. Gaberdiel (2007) gives a conditional argument against existence for $k\ge42$; Gaiotto (2008) disproves that argument and shows that a $c=48$ extremal CFT cannot have Monster symmetry; Bae–Lee–Lee (2016) give numerical bootstrap evidence against existence for $k\ge20$ under holomorphic factorization.
- Gap bounds: Hellerman $\Delta_1\le c/6+O(1)$; numerical improvements to about $c/9.1$ (Afkhami-Jeddi–Hartman–Tajdini 2019), regarded as the practical limit of the spinless bootstrap (the bootstrap that does not resolve spins); analytic bound $\Delta_1\lesssim c/8.503$ at large $c$ from functionals related to sphere packing (Hartman–Mazáč–Rastelli 2019).
- Benjamin–Ooguri–Shao–Wang (2019): the vacuum contribution to the density of large-spin states becomes negative in a lightcone limit (confirmed in the Maloney–Witten–Keller partition function); curing it requires a primary of twist at most $(c-1)/16$, which suggests a twist-gap bound incompatible with pure gravity. Maxfield (2019) computes the corrections to the BTZ extremality bound at large spin; Maxfield–Turiaci (2020) propose new topologies that remove the negativity by a non-perturbative shift of the extremality bound.
- Tierz (November 2025, v1) claims (1) an analytic bound $\Delta\le(c-1)/12+0.228\ldots$ on the lightest scalar (spin-0) primary of any compact unitary Virasoro CFT with $c>1$ (his Theorem 3.5; a bound on scalars only, not on $\Delta_1$ as defined above), and (2) a no-go theorem for (b) (Theorem 3.6) through a positive “Mordell surplus” in the odd-spin modular kernel, which forces an odd-spin primary below the BTZ threshold. If correct, (1) alone would give the first alternative of the quantitative form of (b). Two points of comparison with the literature: Collier–Lin–Yin (2016) find no modular-bootstrap bound on the scalar gap for $c\ge25$ and exhibit a modular-invariant spectrum (of non-compact type) without scalar primaries, a result the preprint does not cite; and the preprint quotes Hellerman's bound as $(c-1)/12+0.47$, whereas Hellerman proves $(c_L+c_R)/12+0.4737$, that is $c/6+0.4737$ for $c_L=c_R=c$. No independent assessment or published response was found as of 9 November 2026.`,
    residual: r`For (b): check the Tierz claim (positivity of the surplus for all $c$, not only asymptotically; validity of the rational-width kernels; coverage of even spins; compatibility of the scalar bound for all $c>1$ with the absence of a scalar-gap bound for $c\ge25$ in Collier–Lin–Yin; treatment of the primaries of non-zero spin in the scalar-gap argument), or find constructions above $c/12$. For (a), which the claim does not cover: a construction at $k=2$ ($c=48$) or an obstruction for all $k\ge2$. The status stays Open because the claim, even if correct, would not settle (a).`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Claims an analytic no-go for pure AdS3 gravity: no compact unitary Virasoro-only CFT2 has all primaries above the BTZ threshold, and an analytic bound on the lightest scalar primary for all c > 1. Unassessed; covers part (b) only.", url: "https://arxiv.org/abs/2512.00361v1", date: "2025-11-29", version: "v1" },
    ],
    refs: [
      { label: "Witten, 'Three-dimensional gravity revisited' (2007)", url: "https://arxiv.org/abs/0706.3359" },
      { label: "Maloney, Witten (2007)", url: "https://arxiv.org/abs/0712.0155" },
      { label: "Gaberdiel (2007)", url: "https://arxiv.org/abs/0707.4073" },
      { label: "Gaiotto (2008)", url: "https://arxiv.org/abs/0801.0988" },
      { label: "Bae, Lee, Lee (2016)", url: "https://arxiv.org/abs/1610.05814" },
      { label: "Hellerman, 'A universal inequality for CFT and quantum gravity', JHEP 08 (2011) 130", url: "https://arxiv.org/abs/0902.2790" },
      { label: "Collier, Lin, Yin (2016)", url: "https://arxiv.org/abs/1608.06241" },
      { label: "Afkhami-Jeddi, Hartman, Tajdini (2019)", url: "https://arxiv.org/abs/1903.06272" },
      { label: "Hartman, Mazáč, Rastelli (2019)", url: "https://arxiv.org/abs/1905.01319" },
      { label: "Benjamin, Ooguri, Shao, Wang, 'Lightcone modular bootstrap and pure gravity', PRD 100, 066029 (2019)", url: "https://arxiv.org/abs/1906.04184" },
      { label: "Maxfield, 'Quantum corrections to the BTZ black hole extremality bound from the conformal bootstrap', JHEP 12 (2019) 003", url: "https://arxiv.org/abs/1906.04416" },
      { label: "Maxfield, Turiaci (2020)", url: "https://arxiv.org/abs/2006.11317" },
      { label: "Tierz, 'Finite Gauss-sum modular kernels: scalar gap and a pure AdS3 gravity no-go theorem' (2025), unassessed claim", url: "https://arxiv.org/abs/2512.00361" },
    ] },

  { id: "H2", cat: "holography", horizon: "sharp",
    reviewedAt: "2026-11-09",
    title: "Nonlinear instability of anti-de Sitter space",
    statement: r`(a) Prove the AdS instability conjecture for the vacuum Einstein equations in $D\ge4$ with reflecting boundary conditions at conformal infinity (Dafermos–Holzegel: there exist arbitrarily small perturbations of AdS that form black holes), and its strong form suggested by Bizoń–Rostworowski: generic small data of size $\epsilon$ form an apparent horizon in time $t\sim\epsilon^{-2}$. (b) Formulate and prove the dual statement in a large-$N$ holographic CFT on $S^{d-1}\times\mathbb R$: states with energy $E=\epsilon^2N^2$ above the vacuum thermalize to a black-hole state in time $\sim\epsilon^{-2}$, with the resonant cascade identified in CFT data.`,
    definition: r`**The AdS instability conjecture** (Dafermos–Holzegel 2006) states that anti-de Sitter space, unlike Minkowski and de Sitter space, is nonlinearly unstable: arbitrarily small perturbations, reflected at the boundary, cascade to short scales and collapse. Bizoń, Rostworowski, “On weakly turbulent instability of anti-de Sitter space”, PRL 107 (2011), [arXiv:1104.3702](https://arxiv.org/abs/1104.3702).`,
    progress: r`- Numerical and perturbative evidence: Einstein–scalar in spherical symmetry (Bizoń–Rostworowski 2011), the purely gravitational sector in perturbation theory (Dias–Horowitz–Santos 2011), vacuum AdS$_5$ under a cohomogeneity-two ansatz (Bizoń–Rostworowski 2017).
- Moschidis (arXiv 2018; Invent. Math. 2023) proves instability for the Einstein–massless Vlasov system in spherical symmetry, and earlier (arXiv 2017; Analysis & PDE 2020) for Einstein–null dust with an inner mirror: the first theorems. Both are existence statements for families of small data, not genericity statements.
- Time-periodic solutions (geons) exist, so instability cannot hold for all data, hence “generic”.
- On the CFT side, the link between the cascade and anomalous dimensions of double-trace operators is heuristic.`,
    residual: r`(a) a theorem for the vacuum equations, or a proof of generic stability; (b) a CFT statement proved at large $N$.`,
    evidence: [
      { kind: "published", role: "progress", summary: "Proof of the instability of AdS for the Einstein–massless Vlasov system in spherical symmetry; the vacuum case remains numerical. Invent. Math. 231, 467 (2023); arXiv v1 11 December 2018.", url: "https://arxiv.org/abs/1812.04268v1", date: "2018-12-11", version: "v1" },
    ],
    refs: [
      { label: "Bizoń, Rostworowski, 'On weakly turbulent instability of anti-de Sitter space', PRL 107 (2011)", url: "https://arxiv.org/abs/1104.3702" },
      { label: "Dias, Horowitz, Santos (2011)", url: "https://arxiv.org/abs/1109.1825" },
      { label: "Bizoń, Rostworowski (2017)", url: "https://arxiv.org/abs/1710.03438" },
      { label: "Moschidis, 'A proof of the instability of AdS for the Einstein–null dust system with an inner mirror', Analysis & PDE 13 (2020) 1671", url: "https://arxiv.org/abs/1704.08681" },
      { label: "Moschidis, 'A proof of the instability of AdS for the Einstein–massless Vlasov system', Invent. Math. 231, 467 (2023)", url: "https://arxiv.org/abs/1812.04268" },
    ] },

  { id: "H3", cat: "holography", horizon: "sharp", status: "improved",
    reviewedAt: "2026-11-09",
    relations: [{ id: "A27", type: "related" }, { id: "H6", type: "related" }],
    title: "Linear growth of complexity for a fixed Hamiltonian",
    statement: r`For a fixed local (or SYK-type) chaotic Hamiltonian $H$ on $n$ qubits and a typical product state, prove a linear lower bound $\mathcal C\big(e^{-iHt}|\psi_0\rangle\big)\ge ct$ on circuit complexity up to $t\sim e^{\Omega(n)}$, unconditionally or under an explicitly stated complexity-theoretic assumption. Any superpolynomial bound for a fixed Hamiltonian is known to imply a separation of the type $\mathrm{PSPACE}\not\subseteq\mathrm{BQP}$.`,
    definition: r`**The second law of complexity** (Brown–Susskind) asserts that the circuit complexity of a chaotic system grows linearly for an exponentially long time before saturating. It underlies the “complexity equals volume” and “complexity equals action” proposals for the growth of black-hole interiors. Susskind, “Computational complexity and black hole horizons” (2014), [arXiv:1402.5674](https://arxiv.org/abs/1402.5674); Brown, Susskind (2017), [arXiv:1701.01107](https://arxiv.org/abs/1701.01107).`,
    progress: r`- Haferkamp, Faist, Kothakonda, Eisert and Yunger Halpern (2022) prove linear growth of the exact circuit complexity for random circuits with Haar-random gates; this does not cover a fixed Hamiltonian. Li (September 2026) proves an almost linear $\Omega(T/\log T)$ lower bound for random circuits with no other dependence on $n$, again not for a fixed Hamiltonian.
- Lee, Pilatowsky-Cameo and Choi (September 2026) prove, for generic time-independent local Hamiltonians and typical high-temperature product states, exponential late-time subsystem complexity and sustained growth over exponentially many times, with no generic polynomial fast-forwarding. They do not prove linearity, and recall the known complexity-theoretic barrier: exponential-time Hamiltonian evolution lies in PSPACE, so a superpolynomial circuit lower bound for a fixed Hamiltonian would imply $\mathrm{PSPACE}\not\subseteq\mathrm{BQP}$.
- On the gravity side, many bulk quantities grow linearly (Belin et al. 2021), so the holographic dual of complexity is not unique.`,
    residual: r`A linear lower bound up to exponential time for an explicit Hamiltonian, conditional on a standard conjecture, or an unconditional linear bound for generic Hamiltonians (which the barrier does not forbid). The holographic question (which boundary quantity matches the bulk volume) remains conceptual. Related: A27 (random circuits as pseudorandom unitaries), H6.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Sustained (not linear) growth of circuit complexity for generic local Hamiltonians over exponentially many times; exponential late-time complexity; linearity is not proved, and the known complexity-theoretic barrier for a fixed Hamiltonian is recalled.", url: "https://arxiv.org/abs/2609.26885v2", date: "2026-09-28", version: "v2" },
    ],
    refs: [
      { label: "Susskind, 'Computational complexity and black hole horizons' (2014)", url: "https://arxiv.org/abs/1402.5674" },
      { label: "Brown, Roberts, Susskind, Swingle, Zhao, 'Complexity, action, and black holes', PRD 93 (2016)", url: "https://arxiv.org/abs/1512.04993" },
      { label: "Brown, Susskind (2017)", url: "https://arxiv.org/abs/1701.01107" },
      { label: "Haferkamp, Faist, Kothakonda, Eisert, Yunger Halpern, Nat. Phys. (2022)", url: "https://arxiv.org/abs/2106.05305" },
      { label: "Belin, Myers, Ruan, Sárosi, Speranza (2021)", url: "https://arxiv.org/abs/2111.02429" },
      { label: "Lee, Pilatowsky-Cameo, Choi, 'Sustained growth of quantum circuit complexity in many-body Hamiltonian dynamics' (2026)", url: "https://arxiv.org/abs/2609.26885" },
      { label: "Li, 'One gate at a time: complexity growth in random quantum circuits' (2026)", url: "https://arxiv.org/abs/2609.17457" },
    ] },

  { id: "H4", cat: "holography", horizon: "sharp",
    reviewedAt: "2026-11-09",
    relations: [{ id: "H5", type: "related" }],
    title: "Python's lunch conjecture",
    statement: r`In AdS/CFT, for a bulk operator located between the outermost quantum extremal surface $\gamma_{\rm app}$ (a locally but not globally minimal constriction, the “appetizer”) and the minimal one, is the complexity of its boundary reconstruction $\mathcal C\sim\exp\big[\tfrac12(S_{\rm gen}^{\rm bulge}-S_{\rm gen}^{\rm app})\big]$, where “bulge” is the non-minimal extremal (maximinimax) surface between the two constrictions? Converse (shown in the classical limit by Engelhardt–Penington–Shahbazi-Moghaddam 2021): every operator between the outermost extremal surface and the boundary has a simple reconstruction. Prove either in a concrete holographic model with a fixed complexity model and code subspace, or give a counterexample.`,
    definition: r`**The python's lunch conjecture** relates the difficulty of decoding information behind a black-hole horizon to the geometry of the entanglement wedge: a “lunch” between two quantum extremal surfaces makes reconstruction exponentially hard. Brown, Gharibyan, Penington, Susskind, “The python's lunch: geometric obstructions to decoding Hawking radiation” (2019), [arXiv:1912.00228](https://arxiv.org/abs/1912.00228).`,
    progress: r`- Harlow–Hayden (2013) and Aaronson (2016): decoding Hawking radiation is hard under cryptographic assumptions, the origin of the approach.
- Brown, Gharibyan, Penington and Susskind (2019) motivate the conjecture by tensor networks with post-selection: undoing the projections between the bulge and the larger constriction by a Grover search costs the exponential above (their Eq. (4.9)).
- Engelhardt, Penington and Shahbazi-Moghaddam (2021) show the converse in the classical limit (simple reconstruction outside the outermost extremal surface) and give evidence for a strong form: non-minimal quantum extremal surfaces are the only source of exponential complexity.
- May, Pasterski, Waddell and Xu (2024) derive from the projective tensor-network model, using conditional disclosure of secrets, a lower bound on boundary mutual information in terms of the lunch geometry; they prove weakened versions in asymptotically AdS$_{2+1}$ spacetimes and confirm it in examples, which supports the model and indirectly the conjecture. A stronger speculative bound, linear in the full area difference between bulge and appetizer, is violated in a pure AdS$_{2+1}$ example, in a regime the authors argue is consistent with the conjecture.
- Bhattacharya, Narde, Parrikar and Paul (August 2026) relate the lunch to stabilizer complexity (magic): under pseudorandomness assumptions on the CFT spectrum and on the heavy operator insertion, the Wigner negativity of one side of a partially entangled thermal state, relative to the microcanonical state, is $\exp[(A_{\rm out}-A_{\rm min})/8G_N]$. This is a different complexity measure from reconstruction complexity, with a different area difference (outer minus minimal) in the exponent.
- There is no gravitational proof.`,
    residual: r`A theorem in a concrete holographic model, or a counterexample. Related: H5.`,
    evidence: [
      { kind: "published", role: "progress", summary: "Cryptographic (CDS) tests of the tensor-network model behind the conjecture: weakened versions proved in AdS2+1 and examples checked, supporting the conjecture; a stronger speculative bound is ruled out. SciPost Phys. 19, 084 (2025).", url: "https://arxiv.org/abs/2411.10527v4", date: "2025-04-01", version: "v4" },
    ],
    refs: [
      { label: "Brown, Gharibyan, Penington, Susskind (2019)", url: "https://arxiv.org/abs/1912.00228" },
      { label: "Harlow, Hayden, 'Quantum computation vs. firewalls', JHEP 06 (2013) 085", url: "https://arxiv.org/abs/1301.4504" },
      { label: "Aaronson (2016)", url: "https://arxiv.org/abs/1607.05256" },
      { label: "Engelhardt, Penington, Shahbazi-Moghaddam, 'A world without pythons would be so simple', Class. Quantum Grav. 38, 234001 (2021)", url: "https://arxiv.org/abs/2102.07774" },
      { label: "Engelhardt, Penington, Shahbazi-Moghaddam, 'Finding pythons in unexpected places', Class. Quantum Grav. 39, 094002 (2022)", url: "https://arxiv.org/abs/2105.09316" },
      { label: "May, Pasterski, Waddell, Xu, 'Cryptographic tests of the python's lunch conjecture', SciPost Phys. 19, 084 (2025)", url: "https://arxiv.org/abs/2411.10527" },
      { label: "Bhattacharya, Narde, Parrikar, Paul, 'Stabilizer complexity and the Python's lunch' (2026)", url: "https://arxiv.org/abs/2608.12472" },
    ] },

  { id: "H5", cat: "holography", horizon: "sharp",
    reviewedAt: "2026-11-09",
    relations: [{ id: "H4", type: "related" }, { id: "G1", type: "related" }],
    title: "Harlow–Hayden decoding hardness without cryptographic assumptions",
    statement: r`For an old black hole of $n$ qubits formed and evaporated by a polynomial-size dynamics $U$ from a simple initial state, every operation that distills from the early radiation $R$ a qubit maximally entangled with a late Hawking mode $B$ has circuit complexity $\exp(\Omega(n))$. Prove this unconditionally for an explicit class of efficiently implementable scrambling unitaries (random circuits, SYK, or a holographic dynamics), or reduce it to an identified standard cryptographic assumption, and state whether it resolves or displaces the firewall argument.`,
    definition: r`**The firewall paradox** (Almheiri–Marolf–Polchinski–Sully 2012) argues that smoothness of the horizon, unitarity and monogamy of entanglement are incompatible for an old black hole. Harlow and Hayden proposed that the observer cannot check the paradox in time because decoding the radiation is exponentially hard: “Quantum computation vs. firewalls”, JHEP 06 (2013) 085, [arXiv:1301.4504](https://arxiv.org/abs/1301.4504).`,
    progress: r`- Harlow–Hayden: decoding is hard if $\mathrm{SZK}\not\subseteq\mathrm{BQP}$. Aaronson (2016): hardness from quantum-secure injective one-way functions.
- Harlow–Hayden (§3.4, added in the revised arXiv version) prove by a counting argument that decoding is exponentially hard for generic initial states; this does not cover simple initial states, such as those prepared by polynomial-size circuits.
- Yoshida–Kitaev (2017): Hayden–Preskill decoding is efficient when the dynamics is known, so the difficulty lies in typicality or ignorance of the dynamics.
- Bouland, Fefferman and Vazirani (2019): computational pseudorandomness makes the AdS/CFT dictionary hard to compute.
- Corbeel, Tu, van den Heuvel, van der Heijden and Verlinde (September 2026) generalize Yoshida–Kitaev recovery to von Neumann algebras and measure algebraic complexity by the Jones–Kosaki index.`,
    residual: r`An unconditional theorem for an explicit class. Back-reaction of the decoding operation on the horizon is a further, incremental question. Related: H4, G1.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Generalizes the Yoshida–Kitaev recovery protocol to von Neumann algebras of arbitrary type; algebraic complexity measured by the Jones–Kosaki index. A framework, not an unconditional hardness proof.", url: "https://arxiv.org/abs/2609.19267v1", date: "2026-09-16", version: "v1" },
    ],
    refs: [
      { label: "Almheiri, Marolf, Polchinski, Sully (2012)", url: "https://arxiv.org/abs/1207.3123" },
      { label: "Harlow, Hayden, JHEP 06 (2013) 085", url: "https://arxiv.org/abs/1301.4504" },
      { label: "Aaronson (2016)", url: "https://arxiv.org/abs/1607.05256" },
      { label: "Yoshida, Kitaev (2017)", url: "https://arxiv.org/abs/1710.03363" },
      { label: "Bouland, Fefferman, Vazirani (2019)", url: "https://arxiv.org/abs/1910.14646" },
      { label: "Corbeel, Tu, van den Heuvel, van der Heijden, Verlinde, 'Algebraic complexity and black hole complementarity' (2026)", url: "https://arxiv.org/abs/2609.19267" },
    ] },

  { id: "H6", cat: "holography", horizon: "sharp",
    reviewedAt: "2026-11-09",
    relations: [{ id: "B4", type: "related" }, { id: "H3", type: "related" }],
    title: "Universal operator growth hypothesis",
    statement: r`In a generic chaotic many-body system, the Lanczos coefficients of the Krylov recursion grow asymptotically linearly, $b_n\sim\alpha n$ (with a logarithmic correction in 1D), and $\lambda_L\le2\alpha$ bounds the Lyapunov exponent. (i) Prove linear growth for an explicit class of non-integrable local Hamiltonians in $d\ge2$; (ii) prove $\lambda_L\le2\alpha(\beta)$ at finite temperature for a specified thermal inner product (for instance the symmetric Wightman one) and a specified class of lattice systems; (iii) characterize the exceptions, such as integrable systems dominated by an unstable saddle.`,
    definition: r`**Krylov complexity** measures how a Heisenberg operator spreads in the Krylov basis generated by repeated commutators with the Hamiltonian; the growth rate of the Lanczos coefficients $b_n$ sets its speed. Parker, Cao, Avdoshkin, Scaffidi, Altman, “A universal operator growth hypothesis”, PRX 9, 041017 (2019), [arXiv:1812.08657](https://arxiv.org/abs/1812.08657).`,
    progress: r`- Strong numerical and analytical evidence for linear growth in chaotic systems.
- The bound $\lambda_L\le2\alpha$ is proved at infinite temperature and described as a plausible conjecture at finite temperature in the 2025 review (Rabinovici, Sánchez-Garrido, Shir, Sonner), which attributes the gap to the ambiguity in the choice of thermal operator inner product needed to define both the OTOC and the Krylov complexity.
- Exceptions: an integrable system with saddle-dominated scrambling shows linear growth of the Lanczos coefficients (Bhattacharjee, Cao, Nandy, Pathak 2022), and in conformal field theories, including free and rational ones, Krylov complexity grows exponentially (Dymarsky–Smolkin 2021); growth alone does not characterize chaos.`,
    residual: r`(ii) is sharp; (i) is sharp for a fixed class. Related: B4 (eigenstate thermalization), H3.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Review of Krylov complexity: evidence for linear growth of Lanczos coefficients; the Lyapunov bound proved only at infinite temperature.", url: "https://arxiv.org/abs/2507.06286v1", date: "2025-07-08", version: "v1" },
    ],
    refs: [
      { label: "Parker, Cao, Avdoshkin, Scaffidi, Altman, PRX 9, 041017 (2019)", url: "https://arxiv.org/abs/1812.08657" },
      { label: "Dymarsky, Smolkin, 'Krylov complexity in conformal field theory', PRD 104, L081702 (2021)", url: "https://arxiv.org/abs/2104.09514" },
      { label: "Bhattacharjee, Cao, Nandy, Pathak, 'Krylov complexity in saddle-dominated scrambling', JHEP 05 (2022) 174", url: "https://arxiv.org/abs/2203.03534" },
      { label: "Rabinovici, Sánchez-Garrido, Shir, Sonner, 'Krylov complexity' (2025)", url: "https://arxiv.org/abs/2507.06286" },
    ] },
];
