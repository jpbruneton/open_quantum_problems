const r = String.raw;

// Added 9 November 2026 (promoted from the new-problems page). Sources of the
// dated evidence items were rechecked on their arXiv pages that day.
// Settled cases deliberately not listed: c-theorem (d=2), a-theorem (d=4),
// F-theorem (d=3), g-theorem for 2D boundaries, scale => conformal in d=2,
// marginal triviality of phi^4_4.
export const RENORMALIZATION = [
  { id: "R1", cat: "renormalization", horizon: "sharp",
    reviewedAt: "2026-11-09",
    relations: [{ id: "R2", type: "related" }, { id: "R3", type: "related" }],
    title: "The a-theorem in six dimensions",
    statement: r`For every unitary renormalization-group flow between two conformal field theories in $d=6$, prove $a_{\rm UV}>a_{\rm IR}$, where $a$ is the Euler-anomaly coefficient, or give a counterexample. General variant: is there a quantity monotone along RG flows in every dimension $d\ge5$?`,
    definition: r`**Irreversibility of the renormalization group** says that flows lose degrees of freedom: some measure of them decreases from the ultraviolet to the infrared fixed point. It is a theorem in $d=2$ ($c$-theorem, Zamolodchikov 1986), $d=3$ ($F$-theorem, Casini–Huerta 2012) and $d=4$ ($a$-theorem, Komargodski–Schwimmer 2011). Cardy, “Is there a c-theorem in four dimensions?”, Phys. Lett. B 215 (1988) 749, proposed the Euler anomaly $a$ in even dimensions.`,
    progress: r`- Elvang, Freedman, Hung, Kiermaier, Myers and Theisen (2012): the dilaton argument of Komargodski–Schwimmer does not give positivity in $d=6$.
- Cordova, Dumitrescu and Intriligator (2015–2016): proof for supersymmetric flows on the tensor branch.
- Fazzi, Giri and Levy (2023, revised 2025): Higgs-branch flows between type-A orbi-instanton theories only, despite the general title.
- Casini, Testé and Torroba (2017) re-derive the theorems in $d\le4$ from the Markov property of the vacuum; the argument does not extend directly to $d\ge5$.`,
    residual: r`A proof for generic unitary flows in $d=6$, or a counterexample. Related: R2, R3.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "a-theorem for Higgs-branch flows between type-A orbi-instanton theories in 6D; a supersymmetric class, not general unitary flows.", url: "https://arxiv.org/abs/2312.17178v2", date: "2025-04-30", version: "v2" },
    ],
    refs: [
      { label: "Komargodski, Schwimmer, 'On renormalization group flows in four dimensions' (2011)", url: "https://arxiv.org/abs/1107.3987" },
      { label: "Casini, Huerta, F-theorem from entanglement (2012)", url: "https://arxiv.org/abs/1202.5650" },
      { label: "Elvang, Freedman, Hung, Kiermaier, Myers, Theisen, 'On renormalization group flows and the a-theorem in 6d' (2012)", url: "https://arxiv.org/abs/1205.3994" },
      { label: "Fazzi, Giri, Levy, 'Proving the 6d a-theorem with the double affine Grassmannian' (2023)", url: "https://arxiv.org/abs/2312.17178" },
    ] },

  { id: "R2", cat: "renormalization", horizon: "sharp",
    reviewedAt: "2026-11-09",
    relations: [{ id: "R1", type: "related" }, { id: "R3", type: "related" }],
    title: "Scale invariance implies conformal invariance in d ≥ 3",
    statement: r`Is every unitary, Lorentz-invariant QFT with a conserved dilatation current conformally invariant? Prove it in $d=3$, $5$ and $6$, or exhibit a unitary interacting counterexample; in $d=4$, give a proof without the additional assumptions of the 2013 arguments.`,
    definition: r`**Scale versus conformal invariance**: scale invariance follows from a vanishing trace of the stress tensor up to a total derivative (a virial current); conformal invariance requires the virial current to be itself a derivative. Whether unitarity forces this is proved in two dimensions. Polchinski, “Scale and conformal invariance in quantum field theory”, Nucl. Phys. B 303 (1988) 226. Review: Nakayama (2013), [arXiv:1302.0884](https://arxiv.org/abs/1302.0884).`,
    progress: r`- $d=2$: proved (Zamolodchikov 1986; Polchinski 1988).
- $d=4$: proved perturbatively (Luty–Polchinski–Rattazzi 2012; Fortin–Grinstein–Stergiou). Non-perturbative arguments (Dymarsky–Komargodski–Schwimmer–Theisen 2013; Farnsworth–Luty–Prelipina 2013) assume convergence of the OPE and the absence of a dimension-2 scalar coupled to the dilaton.
- $d=3$: an argument for the 3D Ising model from the non-perturbative RG (Delamotte–Tissier–Wschebor 2015); no general theorem. $d=5,6$: open.
- Known counterexamples are non-unitary (free elasticity theory, Riva–Cardy) and do not contradict the statement.`,
    residual: r`Proofs in $d=3,5,6$, or a unitary interacting counterexample; an assumption-free proof in $d=4$. Related: R1, R3.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Non-perturbative argument that scale invariance plus unitarity implies conformal invariance in four dimensions, under assumptions on the OPE.", url: "https://arxiv.org/abs/1309.4095v1", date: "2013-09-16", version: "v1" },
    ],
    refs: [
      { label: "Nakayama, review of scale and conformal invariance (2013)", url: "https://arxiv.org/abs/1302.0884" },
      { label: "Luty, Polchinski, Rattazzi (2012)", url: "https://arxiv.org/abs/1204.5221" },
      { label: "Dymarsky, Komargodski, Schwimmer, Theisen (2013)", url: "https://arxiv.org/abs/1309.2921" },
      { label: "Farnsworth, Luty, Prelipina, 'Scale invariance plus unitarity implies conformal invariance in four dimensions' (2013)", url: "https://arxiv.org/abs/1309.4095" },
      { label: "Delamotte, Tissier, Wschebor (2015)", url: "https://arxiv.org/abs/1501.01776" },
    ] },

  { id: "R3", cat: "renormalization", horizon: "sharp",
    reviewedAt: "2026-11-09",
    relations: [{ id: "R1", type: "related" }, { id: "R2", type: "related" }],
    title: "Are renormalization-group flows gradient flows?",
    statement: r`Prove non-perturbatively, in $d=2$ or $d=4$, that the beta functions are the gradient of a function $\tilde a$ for a positive-definite metric on coupling space, $\partial_I\tilde a=\chi_{IJ}\beta^J$, or exhibit a unitary flow that violates it (a limit cycle or a non-gradient flow).`,
    definition: r`**The gradient-flow conjecture** (Wallace and Zia, 1974) is the strong form of RG irreversibility: if flows are gradient flows of a function for a positive metric, that function decreases monotonically, and limit cycles and chaotic flows are excluded. The $a$-theorem and scale-equals-conformal statements are weaker consequences.`,
    progress: r`- Jack–Osborn (1990): the perturbative gradient form in $d=4$, with a positive metric at low orders. Jack, Jones and Poole (2015): gradient flows in three dimensions, perturbatively.
- Friedan–Konechny (2004): a gradient formula for boundary flows in $d=2$.
- Proposed limit cycles in $d=4$ turned out to be conformal (Fortin–Grinstein–Stergiou; Luty–Polchinski–Rattazzi).
- No non-perturbative proof.`,
    residual: r`A non-perturbative proof, or a unitary non-gradient flow. Related: R1, R2.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Perturbative gradient-flow structure of RG flows in three dimensions.", url: "https://arxiv.org/abs/1505.05400v3", date: "2015-08-11", version: "v3" },
    ],
    refs: [
      { label: "Jack, Jones, Poole, 'Gradient flows in three dimensions' (2015)", url: "https://arxiv.org/abs/1505.05400" },
      { label: "Friedan, Konechny, boundary entropy and gradient formula (2003)", url: "https://arxiv.org/abs/hep-th/0312197" },
      { label: "Luty, Polchinski, Rattazzi (2012)", url: "https://arxiv.org/abs/1204.5221" },
    ] },

  { id: "R4", cat: "renormalization", horizon: "sharp",
    reviewedAt: "2026-11-09",
    relations: [{ id: "QF1", type: "related" }, { id: "R2", type: "related" }],
    title: "Existence and conformal invariance of the 3D Ising scaling limit",
    statement: r`Prove that the scaling limit of the critical nearest-neighbour Ising model on $\mathbb Z^3$ (renormalized spin field) exists, is non-Gaussian, is invariant under rotations and conformal transformations, and defines a Euclidean field theory satisfying the Osterwalder–Schrader axioms. Partial targets: non-Gaussian subsequential limits, or rotation invariance.`,
    definition: r`**The critical Ising model** in three dimensions is the simplest interacting critical point: its continuum limit is expected to be a non-Gaussian conformal field theory (the Wilson–Fisher fixed point), whose exponents the conformal bootstrap computes to high precision. Constructing it is the three-dimensional analogue of Smirnov's two-dimensional results and of the four-dimensional triviality theorem.`,
    progress: r`- $d=2$: conformal invariance of the scaling limit (Smirnov; Chelkak–Smirnov). $d\ge4$: Gaussian limits (Aizenman 1982; Aizenman–Duminil-Copin 2021 in the marginal case $d=4$).
- $d=3$: the transition is continuous (Aizenman–Duminil-Copin–Sidoravicius 2015).
- Conformal bootstrap: rigorous numerical islands for $(\Delta_\sigma,\Delta_\epsilon)$ assuming that the limit is a unitary CFT (El-Showk et al. 2012; Kos–Poland–Simmons-Duffin–Vichi 2016).
- The Wilson–Fisher fixed point has been constructed rigorously only for long-range variants with small $\epsilon$ (Brydges–Mitter–Scoppola 2003; Abdesselam 2007).`,
    residual: r`Any of the stated properties for the short-range model in $d=3$. It is the simplest non-Gaussian interacting theory in $d=3$, distinct from the gauge theories of QF1–QF3.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Geometric perspective on scaling limits of critical Ising and phi^4 models, including the Gaussianity of the marginal four-dimensional case; frames what remains open in three dimensions.", url: "https://arxiv.org/abs/2112.04248v3", date: "2022-10-03", version: "v3" },
    ],
    refs: [
      { label: "Aizenman, Duminil-Copin, 'Marginal triviality of the scaling limits of critical 4D Ising and φ⁴₄ models', Ann. Math. (2021)", url: "https://arxiv.org/abs/1912.07973" },
      { label: "Aizenman, 'A geometric perspective on the scaling limits of critical Ising and φ⁴_d models' (2021)", url: "https://arxiv.org/abs/2112.04248" },
      { label: "El-Showk et al., conformal bootstrap for the 3D Ising model (2012)", url: "https://arxiv.org/abs/1203.6064" },
      { label: "Kos, Poland, Simmons-Duffin, Vichi, precision islands for the 3D Ising CFT (2016)", url: "https://arxiv.org/abs/1603.04436" },
    ] },
];
