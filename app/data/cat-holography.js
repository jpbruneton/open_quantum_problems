const r = String.raw;

// Added 9 November 2026 (promoted from the new-problems page). Sources of the
// dated evidence items were rechecked on their arXiv pages that day.
export const HOLOGRAPHY = [
  { id: "H1", cat: "holography", horizon: "sharp",
    reviewedAt: "2026-11-09",
    title: "Extremal CFTs, pure AdS₃ gravity and the optimal modular gap",
    statement: r`(a) Witten's chiral question: for integer $k\ge2$, is there a unitary, compact, holomorphically factorized CFT$_2$ of central charge $c=24k$ whose nontrivial Virasoro primaries all have weight $h\ge k+1$? (b) Is there a family of unitary compact CFT$_2$ with Virasoro symmetry only and $c\to\infty$ whose non-identity primaries all have $\Delta>(c-1)/12$, the BTZ threshold? Equivalently for (b), let $\Delta_1(c)$ be the supremum of the first non-identity primary dimension over such theories: prove $\Delta_1(c)\le(c-1)/12+O(1)$, or exhibit families with $\Delta_1(c)\ge c/12+\epsilon c$.`,
    definition: r`**Pure three-dimensional gravity** with negative cosmological constant has no local degrees of freedom; its quantum theory, if it exists, should be dual to a CFT$_2$ whose only light states are Virasoro descendants of the vacuum, with black-hole (BTZ) states starting at $\Delta=(c-1)/12$. Witten conjectured that the duals are extremal CFTs: “Three-dimensional gravity revisited” (2007), [arXiv:0706.3359](https://arxiv.org/abs/0706.3359). The modular bootstrap bounds the gap of any such theory: Hellerman, “A universal inequality for CFT and quantum gravity”, JHEP 08 (2011) 130, [arXiv:0902.2790](https://arxiv.org/abs/0902.2790).`,
    progress: r`- $k=1$: the Monster module of Frenkel–Lepowsky–Meurman realizes the extremal partition function.
- Maloney–Witten (2007): the sum over geometries gives a non-positive density of states. Gaberdiel (2007) and Gaiotto (2008) derive and test modular constraints; Bae–Lee–Lee (2016) give bootstrap evidence against existence at large $k$ under holomorphic factorization.
- Gap bounds: Hellerman $\Delta_1\le c/6+O(1)$; numerical improvements to about $c/9.1$ (Afkhami-Jeddi–Hartman–Tajdini 2019), regarded as the practical limit of the spinless bootstrap; analytic bounds in particular dimensions via sphere packing (Hartman–Mazáč–Rastelli 2019).
- Benjamin–Ooguri–Shao–Wang (2019): quantum corrections require states below the BTZ threshold; Maxfield–Turiaci (2020) model pure gravity near extremality.
- Tierz (November 2025, v1) claims a no-go theorem for (b) through a positive “Mordell surplus” in the odd-spin modular kernel, and an analytic bound $\Delta_1\le(c-1)/12+0.228\ldots$ on the spinless gap. No independent assessment or published response was found as of 9 November 2026.`,
    residual: r`For (b): check the Tierz claim (positivity of the surplus for all $c$, not only asymptotically; validity of the rational-width kernels; coverage of even spins), or find constructions above $c/12$. For (a), which the claim does not cover: a construction at $k=2$ ($c=48$) or an obstruction for all $k\ge2$. The status stays Open because the claim, even if correct, would not settle (a).`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Claims an analytic no-go for pure AdS3 gravity: no compact unitary Virasoro-only CFT2 has all primaries above the BTZ threshold, and an analytic scalar-gap bound. Unassessed; covers part (b) only.", url: "https://arxiv.org/abs/2512.00361v1", date: "2025-11-29", version: "v1" },
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
      { label: "Benjamin, Ooguri, Shao, Wang (2019)", url: "https://arxiv.org/abs/1906.04416" },
      { label: "Maxfield, Turiaci (2020)", url: "https://arxiv.org/abs/2006.11317" },
      { label: "Tierz, 'Finite Gauss-sum modular kernels: scalar gap and a pure AdS3 gravity no-go theorem' (2025), unassessed claim", url: "https://arxiv.org/abs/2512.00361" },
    ] },

  { id: "H2", cat: "holography", horizon: "sharp",
    reviewedAt: "2026-11-09",
    title: "Nonlinear instability of anti-de Sitter space",
    statement: r`(a) Prove the AdS instability conjecture for the vacuum Einstein equations in $D\ge4$ with reflecting boundary conditions at conformal infinity: generic initial data arbitrarily close to AdS form an apparent horizon in time $t\sim\epsilon^{-2}$. (b) Formulate and prove the dual statement in a large-$N$ holographic CFT on $S^{d-1}\times\mathbb R$: states with energy $E=\epsilon^2N^2$ above the vacuum thermalize to a black-hole state in time $\sim\epsilon^{-2}$, with the resonant cascade identified in CFT data.`,
    definition: r`**The AdS instability conjecture** (Dafermos–Holzegel 2006) states that anti-de Sitter space, unlike Minkowski and de Sitter space, is nonlinearly unstable: arbitrarily small perturbations, reflected at the boundary, cascade to short scales and collapse. Bizoń, Rostworowski, “On weakly turbulent instability of anti-de Sitter space”, PRL 107 (2011), [arXiv:1104.3702](https://arxiv.org/abs/1104.3702).`,
    progress: r`- Numerical evidence: Einstein–scalar in spherical symmetry (Bizoń–Rostworowski 2011), the gravitational sector (Dias–Horowitz–Santos 2011), vacuum AdS$_5$ under a cohomogeneity-two ansatz (Bizoń–Rostworowski 2017).
- Moschidis (2018) proves instability for the Einstein–massless Vlasov system in spherical symmetry, and earlier for Einstein–null dust with an inner mirror: the first theorems.
- Time-periodic solutions (geons) exist, so instability cannot hold for all data, hence “generic”.
- On the CFT side, the link between the cascade and anomalous dimensions of double-trace operators is heuristic.`,
    residual: r`(a) a theorem for the vacuum equations, or a proof of generic stability; (b) a CFT statement proved at large $N$.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Proof of the instability of AdS for the Einstein–massless Vlasov system in spherical symmetry; the vacuum case remains numerical.", url: "https://arxiv.org/abs/1812.04268v1", date: "2018-12-11", version: "v1" },
    ],
    refs: [
      { label: "Bizoń, Rostworowski, 'On weakly turbulent instability of anti-de Sitter space', PRL 107 (2011)", url: "https://arxiv.org/abs/1104.3702" },
      { label: "Dias, Horowitz, Santos (2011)", url: "https://arxiv.org/abs/1109.1825" },
      { label: "Bizoń, Rostworowski (2017)", url: "https://arxiv.org/abs/1710.03438" },
      { label: "Moschidis, 'A proof of the instability of AdS for the Einstein–massless Vlasov system' (2018)", url: "https://arxiv.org/abs/1812.04268" },
    ] },

  { id: "H3", cat: "holography", horizon: "sharp", status: "improved",
    reviewedAt: "2026-11-09",
    relations: [{ id: "A27", type: "related" }, { id: "H6", type: "related" }],
    title: "Linear growth of complexity for a fixed Hamiltonian",
    statement: r`For a fixed local (or SYK-type) chaotic Hamiltonian $H$ on $n$ qubits and a typical product state, prove a linear lower bound $\mathcal C\big(e^{-iHt}|\psi_0\rangle\big)\ge ct$ on circuit complexity up to $t\sim e^{\Omega(n)}$, or show that any proof must resolve a standard complexity-theoretic conjecture.`,
    definition: r`**The second law of complexity** (Brown–Susskind) asserts that the circuit complexity of a chaotic system grows linearly for an exponentially long time before saturating. It underlies the “complexity equals volume” and “complexity equals action” proposals for the growth of black-hole interiors. Susskind, “Computational complexity and black hole horizons” (2014), [arXiv:1402.5674](https://arxiv.org/abs/1402.5674); Brown, Susskind (2017), [arXiv:1701.01107](https://arxiv.org/abs/1701.01107).`,
    progress: r`- Haferkamp, Faist, Kothakonda, Eisert and Yunger Halpern (2022) prove linear growth for random circuits with Haar-random gates; this does not cover a fixed Hamiltonian.
- Lee, Pilatowsky-Cameo and Choi (September 2026) prove, for generic time-independent local Hamiltonians and typical high-temperature product states, exponential late-time subsystem complexity and sustained growth over exponentially many times, with no generic polynomial fast-forwarding. They do not prove linearity, and identify a complexity barrier to proving it for a fixed Hamiltonian.
- On the gravity side, many bulk quantities grow linearly (Belin et al. 2021), so the holographic dual of complexity is not unique.`,
    residual: r`A linear lower bound up to exponential time for an explicit Hamiltonian, or a reduction to a standard conjecture. The holographic question (which boundary quantity matches the bulk volume) remains conceptual. Related: A27 (random circuits as pseudorandom unitaries), H6.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Sustained (not linear) growth of circuit complexity for generic local Hamiltonians over exponentially many times; exponential late-time complexity; a complexity barrier to proving linearity.", url: "https://arxiv.org/abs/2609.26885v2", date: "2026-09-28", version: "v2" },
    ],
    refs: [
      { label: "Susskind, 'Computational complexity and black hole horizons' (2014)", url: "https://arxiv.org/abs/1402.5674" },
      { label: "Brown, Roberts, Susskind, Swingle, Zhao, 'Complexity, action, and black holes', PRD 93 (2016)", url: "https://arxiv.org/abs/1512.04993" },
      { label: "Brown, Susskind (2017)", url: "https://arxiv.org/abs/1701.01107" },
      { label: "Haferkamp, Faist, Kothakonda, Eisert, Yunger Halpern, Nat. Phys. (2022)", url: "https://arxiv.org/abs/2106.05305" },
      { label: "Belin, Myers, Ruan, Sárosi, Speranza (2021)", url: "https://arxiv.org/abs/2111.02429" },
      { label: "Lee, Pilatowsky-Cameo, Choi, 'Sustained growth of quantum circuit complexity in many-body Hamiltonian dynamics' (2026)", url: "https://arxiv.org/abs/2609.26885" },
    ] },

  { id: "H4", cat: "holography", horizon: "sharp",
    reviewedAt: "2026-11-09",
    relations: [{ id: "H5", type: "related" }],
    title: "Python's lunch conjecture",
    statement: r`In AdS/CFT, for a bulk operator behind a non-minimal quantum extremal surface, is the complexity of its boundary reconstruction $\mathcal C\sim\exp\big[\tfrac12(S_{\rm gen}^{\rm bulge}-S_{\rm gen}^{\rm min})\big]$, where “bulge” is the saddle surface? Converse: every operator between the outermost extremal surface and the boundary has a simple reconstruction. Prove either in a concrete holographic model with a fixed complexity model and code subspace, or give a counterexample that survives the proposed refinements.`,
    definition: r`**The python's lunch conjecture** relates the difficulty of decoding information behind a black-hole horizon to the geometry of the entanglement wedge: a “lunch” between two quantum extremal surfaces makes reconstruction exponentially hard. Brown, Gharibyan, Penington, Susskind, “The python's lunch: geometric obstructions to decoding Hawking radiation” (2019), [arXiv:1912.00228](https://arxiv.org/abs/1912.00228).`,
    progress: r`- Harlow–Hayden (2013) and Aaronson (2016): decoding Hawking radiation is hard under cryptographic assumptions, the origin of the approach.
- Engelhardt, Penington and Shahbazi-Moghaddam (2021) give supporting results in tensor networks with post-selection and argue for the converse.
- May, Pasterski, Waddell and Xu (2024) design cryptographic tests and find a tension with the naive statement in an AdS$_3$ example; refinements are proposed.
- There is no gravitational proof.`,
    residual: r`A theorem in a concrete holographic model, or a counterexample stable under the refinements. Related: H5.`,
    evidence: [
      { kind: "published", role: "progress", summary: "Cryptographic tests of the conjecture; tension with the naive form in an AdS3 example; SciPost Phys. 19, 084 (2025).", url: "https://arxiv.org/abs/2411.10527v4", date: "2025-04-01", version: "v4" },
    ],
    refs: [
      { label: "Brown, Gharibyan, Penington, Susskind (2019)", url: "https://arxiv.org/abs/1912.00228" },
      { label: "Harlow, Hayden, 'Quantum computation vs. firewalls', JHEP 06 (2013) 085", url: "https://arxiv.org/abs/1301.4504" },
      { label: "Aaronson (2016)", url: "https://arxiv.org/abs/1607.05256" },
      { label: "Engelhardt, Penington, Shahbazi-Moghaddam (2021)", url: "https://arxiv.org/abs/2102.07774" },
      { label: "Engelhardt, Penington, Shahbazi-Moghaddam (2021)", url: "https://arxiv.org/abs/2105.09316" },
      { label: "May, Pasterski, Waddell, Xu, 'Cryptographic tests of the python's lunch conjecture', SciPost Phys. 19, 084 (2025)", url: "https://arxiv.org/abs/2411.10527" },
    ] },

  { id: "H5", cat: "holography", horizon: "sharp",
    reviewedAt: "2026-11-09",
    relations: [{ id: "H4", type: "related" }, { id: "G1", type: "related" }],
    title: "Harlow–Hayden decoding hardness without cryptographic assumptions",
    statement: r`For an old black hole of $n$ qubits in a typical state, every operation that distills from the early radiation $R$ a qubit maximally entangled with a late Hawking mode $B$ has circuit complexity $\exp(\Omega(n))$. Prove this unconditionally for an explicit class of scrambling unitaries (random circuits, SYK, or a holographic dynamics), or reduce it to an identified standard cryptographic assumption, and state whether it resolves or displaces the firewall argument.`,
    definition: r`**The firewall paradox** (Almheiri–Marolf–Polchinski–Sully 2012) argues that smoothness of the horizon, unitarity and monogamy of entanglement are incompatible for an old black hole. Harlow and Hayden proposed that the observer cannot check the paradox in time because decoding the radiation is exponentially hard: “Quantum computation vs. firewalls”, JHEP 06 (2013) 085, [arXiv:1301.4504](https://arxiv.org/abs/1301.4504).`,
    progress: r`- Harlow–Hayden: decoding is hard if $\mathrm{SZK}\not\subseteq\mathrm{BQP}$. Aaronson (2016): hardness from quantum-secure injective one-way functions.
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
    statement: r`In a generic chaotic many-body system, the Lanczos coefficients of the Krylov recursion grow asymptotically linearly, $b_n\sim\alpha n$ (with a logarithmic correction in 1D), and $\lambda_L\le2\alpha$ bounds the Lyapunov exponent. (i) Prove linear growth for an explicit class of non-integrable local Hamiltonians in $d\ge2$; (ii) prove $\lambda_L\le2\alpha$ at finite temperature; (iii) characterize the exceptions, such as integrable systems dominated by an unstable saddle.`,
    definition: r`**Krylov complexity** measures how a Heisenberg operator spreads in the Krylov basis generated by repeated commutators with the Hamiltonian; the growth rate of the Lanczos coefficients $b_n$ sets its speed. Parker, Cao, Avdoshkin, Scaffidi, Altman, “A universal operator growth hypothesis”, PRX (2019), [arXiv:1812.08657](https://arxiv.org/abs/1812.08657).`,
    progress: r`- Strong numerical and analytical evidence for linear growth in chaotic systems.
- The bound $\lambda_L\le2\alpha$ is proved at infinite temperature and described as a plausible conjecture at finite temperature in the 2025 review (Rabinovici, Sánchez-Garrido, Shir, Sonner).
- Saddle-dominated integrable systems also show fast growth, so growth alone does not characterize chaos.`,
    residual: r`(ii) is sharp; (i) is sharp for a fixed class. Related: B4 (eigenstate thermalization), H3.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Review of Krylov complexity: evidence for linear growth of Lanczos coefficients; the Lyapunov bound proved only at infinite temperature.", url: "https://arxiv.org/abs/2507.06286v1", date: "2025-07-08", version: "v1" },
    ],
    refs: [
      { label: "Parker, Cao, Avdoshkin, Scaffidi, Altman, PRX (2019)", url: "https://arxiv.org/abs/1812.08657" },
      { label: "Rabinovici, Sánchez-Garrido, Shir, Sonner, 'Krylov complexity' (2025)", url: "https://arxiv.org/abs/2507.06286" },
    ] },
];
