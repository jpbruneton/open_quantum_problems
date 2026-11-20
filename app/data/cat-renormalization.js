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
    statement: r`For every nontrivial unitary renormalization-group flow between ultraviolet and infrared conformal fixed points in $d=6$, prove $a_{\rm UV}>a_{\rm IR}$, where $a$ is the Euler-anomaly coefficient, or give a counterexample. A stationary theory is excluded from the strict inequality. The search for monotones in every dimension $d\ge5$ is a broader extension.`,
    definition: r`**Irreversibility of the renormalization group** says that flows lose degrees of freedom: some measure of them decreases from the ultraviolet to the infrared fixed point. It is a theorem in $d=2$ ($c$-theorem, Zamolodchikov 1986), $d=3$ ($F$-theorem, Casini–Huerta 2012, whose entropic argument assumes an intrinsic definition of the constant term of the entanglement entropy) and $d=4$ ($a$-theorem, Komargodski–Schwimmer 2011).`,
    progress: r`- Elvang, Freedman, Hung, Kiermaier, Myers and Theisen (2012): the dilaton argument of Komargodski–Schwimmer does not give positivity in $d=6$.
- Cordova, Dumitrescu and Intriligator (2015 preprint, published 2016): proof for flows of six-dimensional $(1,0)$ superconformal theories onto the tensor branch ([arXiv:1506.03807](https://arxiv.org/abs/1506.03807)).
- Fazzi, Giri and Levy (2023, revised 2025): Higgs-branch flows between type-A orbi-instanton theories only, despite the general title.
- Casini, Testé and Torroba (2017) re-derive the theorems in $d\le4$ from strong subadditivity and the Markov property of the vacuum ([arXiv:1704.01870](https://arxiv.org/abs/1704.01870)). For $d>4$ the same inequalities constrain the area term and the next subleading term of the entanglement entropy, not the Euler coefficient in $d=6$.
- For the general variant, Giombi and Klebanov (2014) propose $\tilde F=\sin(\pi d/2)\log Z_{S^d}$, which interpolates between $a$ in even dimensions and the sphere free energy $F$ in odd dimensions; it decreases along the flows in the examples they compute, without a general proof ([arXiv:1409.1937](https://arxiv.org/abs/1409.1937)).`,
    residual: r`A proof for all nontrivial unitary flows in the stated six-dimensional domain, or a counterexample within it. “Generic” flows or additional supersymmetric subclasses do not exhaust this universal claim. The higher-dimensional monotone programme is outside this entry's sharp completion criterion. Related: R2, R3.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "a-theorem for Higgs-branch flows between type-A orbi-instanton theories in 6D; a supersymmetric class, not general unitary flows.", url: "https://arxiv.org/abs/2312.17178v2", date: "2025-04-30", version: "v2" },
    ],
    refs: [
      { label: "Komargodski, Schwimmer, 'On renormalization group flows in four dimensions' (2011)", url: "https://arxiv.org/abs/1107.3987" },
      { label: "Casini, Huerta, 'On the RG running of the entanglement entropy of a circle', Phys. Rev. D 85, 125016 (2012)", url: "https://arxiv.org/abs/1202.5650" },
      { label: "Elvang, Freedman, Hung, Kiermaier, Myers, Theisen, 'On renormalization group flows and the a-theorem in 6d' (2012)", url: "https://arxiv.org/abs/1205.3994" },
      { label: "Fazzi, Giri, Levy, 'Proving the 6d a-theorem with the double affine Grassmannian' (2023)", url: "https://arxiv.org/abs/2312.17178" },
      { label: "Cordova, Dumitrescu, Intriligator, 'Anomalies, renormalization group flows, and the a-theorem in six-dimensional (1,0) theories', JHEP 10 (2016) 080", url: "https://arxiv.org/abs/1506.03807" },
      { label: "Casini, Testé, Torroba, 'Markov property of the CFT vacuum and the a-theorem', Phys. Rev. Lett. 118, 261602 (2017)", url: "https://arxiv.org/abs/1704.01870" },
      { label: "Giombi, Klebanov, 'Interpolating between a and F' (2014)", url: "https://arxiv.org/abs/1409.1937" },
    ] },

  { id: "R2", cat: "renormalization", horizon: "sharp", status: "improved",
    reviewedAt: "2026-11-09",
    relations: [{ id: "R1", type: "related" }, { id: "R3", type: "related" }],
    title: "Scale invariance implies conformal invariance in four dimensions",
    statement: r`Is every unitary, local, Lorentz-invariant four-dimensional QFT with a local stress tensor and a conserved dilatation current conformally invariant? Prove the implication under these hypotheses, with no additional restrictions on the scaling spectrum or reconstruction of the local theory, or give a counterexample satisfying the same hypotheses. The unrestricted extension to other dimensions is false: free Maxwell theory is scale invariant but not conformally invariant for $d\ne4$.`,
    definition: r`**Scale versus conformal invariance**: scale invariance follows from a vanishing trace of the stress tensor up to a total derivative (a virial current); conformal invariance requires a local stress-tensor improvement that removes its trace; a scalar virial potential is a sufficient route, while the general improvement problem also allows tensor potentials. Whether unitarity forces this is proved in two dimensions. Polchinski, “Scale and conformal invariance in quantum field theory”, Nucl. Phys. B 303 (1988) 226. Review: Nakayama (2013), [arXiv:1302.0884](https://arxiv.org/abs/1302.0884).`,
    progress: r`- $d=2$: proved (Zamolodchikov 1986; Polchinski 1988).
- $d=4$: perturbative results (Luty–Polchinski–Rattazzi 2012; Fortin–Grinstein–Stergiou) and non-perturbative arguments with additional hypotheses (Dymarsky–Komargodski–Schwimmer–Theisen 2013).
- Farnsworth–Luty–Prelipina withdrew their 2013 proof in March 2014: the momentum-space OPE step was invalid. It is not evidence for the implication.
- OpenAI claims a local traceless stress-tensor improvement and conformal Ward action in a four-dimensional vacuum theory under discrete scaling spectrum, finite scaling support, physical-current and bounded-local-net reconstruction hypotheses ([manuscript](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Scale-and-conformal-symmetry-in-four-dimensional-operational-quantum-field-theory-September-26-2026/paper.pdf), dated 26 September 2026; public 6 October 2026). The theorem does not integrate the Ward action to global conformal symmetry of the bounded net and does not cover arbitrary theories without its additional hypotheses; independent assessment is pending.
- $d=3$: an argument for the 3D Ising model from the non-perturbative RG (Delamotte–Tissier–Wschebor 2015), without a general theorem.
- Free Maxwell theory supplies a unitary scale-invariant counterexample in $d\ne4$ (El-Showk–Nakayama–Rychkov 2011). In $d=3$ conformal invariance can be restored by extending the local operator algebra; in $d\ge5$ the conformal extension considered there sacrifices unitarity.`,
    residual: r`A proof under the stated four-dimensional locality, unitarity, stress-tensor and dilatation-current hypotheses, or a counterexample obeying them. Additional spectral or reconstruction assumptions produce a restricted theorem and must remain explicit. Classification in other dimensions is a separate extension, not part of this sharp completion criterion. Related: R1, R3.`,
    evidence: [
      { kind: "withdrawn", role: "progress", summary: "The claimed four-dimensional proof was withdrawn because its momentum-space OPE argument is invalid.", url: "https://arxiv.org/abs/1309.4095v2", date: "2014-03-17", version: "v2" },
    ],
    refs: [
      { label: "Nakayama, review of scale and conformal invariance (2013)", url: "https://arxiv.org/abs/1302.0884" },
      { label: "El-Showk, Nakayama, Rychkov, 'What Maxwell theory in d ≠ 4 teaches us about scale and conformal invariance' (2011)", url: "https://arxiv.org/abs/1101.5385" },
      { label: "Luty, Polchinski, Rattazzi (2012)", url: "https://arxiv.org/abs/1204.5221" },
      { label: "Dymarsky, Komargodski, Schwimmer, Theisen (2013)", url: "https://arxiv.org/abs/1309.2921" },
      { label: "Farnsworth, Luty, Prelipina, 'Scale invariance plus unitarity implies conformal invariance in four dimensions' (2013; withdrawn March 2014)", url: "https://arxiv.org/abs/1309.4095v2" },
      { label: "Delamotte, Tissier, Wschebor (2015)", url: "https://arxiv.org/abs/1501.01776" },
    ] },

  { id: "R3", cat: "renormalization", horizon: "conceptual", status: "improved",
    reviewedAt: "2026-11-20",
    relations: [{ id: "R1", type: "related" }, { id: "R2", type: "related" }],
    title: "Are renormalization-group flows gradient flows?",
    statement: r`On the space of physical couplings modulo redundant field or flavour rotations, prove non-perturbatively in $d=2$ or $d=4$ that the physical RG vector field $B$ admits a gradient representation $\partial_I\tilde a=\chi_{IJ}B^J$ with a symmetric positive-definite metric $\chi$, or exhibit an obstruction. In the absence of redundant directions $B=\beta$. This asks for a strict gradient representation, stronger than a monotonicity identity or a gradient-like formula containing an antisymmetric tensor.`,
    definition: r`**The gradient-flow conjecture** (Wallace and Zia, 1974) is the strong form of RG irreversibility: if flows are gradient flows of a function for a positive metric, that function decreases monotonically, and limit cycles and chaotic flows are excluded. The $a$-theorem and scale-equals-conformal statements are weaker consequences.`,
    progress: r`- Jack–Osborn: perturbative gradient-like consistency relations in $d=4$, allowing antisymmetric terms and with positivity of the symmetric metric established at low orders. Jack, Jones and Poole (2015) study perturbative gradient flows in three dimensions.
- Friedan–Konechny (2004): a gradient formula for boundary flows in $d=2$.
- Proposed limit cycles in $d=4$ turned out to be conformal (Fortin–Grinstein–Stergiou; Luty–Polchinski–Rattazzi).
- Friedan–Konechny (2009; published 2010) prove a non-perturbative two-dimensional formula $\partial_i c=-(g_{ij}+\Delta g_{ij}+b_{ij})\beta^j$ under infrared hypotheses; $b$ is antisymmetric and $\Delta g$ is a metric correction. This does not establish the strictly positive, symmetric gradient metric requested here.
- In four dimensions, Jack–Osborn (2013; revised 2015) require the modified beta function $B$, which removes redundant flavour rotations, in their gradient-like equations; their perturbative analysis does not establish a global non-perturbative positive metric.
- Hartman, Mathys and Stergiou (17 November 2026) construct a non-perturbative positive-semidefinite spectral metric using the averaged null energy condition, giving a monotonic four-dimensional $a$-function under the paper's trace-expansion assumptions ([arXiv:2611.23370v1](https://arxiv.org/abs/2611.23370v1)). Section 8 retains an antisymmetric term in the gradient-like formula and explicitly leaves the strict gradient property open.`,
    residual: r`The domain of physical theory space, quotient by redundant directions, renormalization scheme, allowed scalar function and metric, and local versus global scope must be fixed before this is a single gradient-flow proposition. A metric constructed on one regular flow segment does not establish a global representation across fixed points. Hartman, Mathys and Stergiou (November 2026) obtain a positive-semidefinite metric and a monotonic $a$-function, but Section 8 leaves the antisymmetric two-form $\Omega_{IJ}=\partial_Iw_J-\partial_Jw_I$ in the gradient-like equation. Positivity alone proves neither $\Omega_{IJ}B^J=0$ nor positive definiteness of the metric. Related: R1, R2.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Non-perturbative ANEC spectral construction of a positive-semidefinite metric and monotonic a-function in four dimensions, identified with the Jack–Osborn metric in a chosen perturbative local-RG scheme. Section 8 explicitly leaves the strict gradient property open: the antisymmetric two-form need not vanish and strict positivity is unproved.", url: "https://arxiv.org/abs/2611.23370v1", date: "2026-11-17", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Perturbative gradient-flow structure of RG flows in three dimensions.", url: "https://arxiv.org/abs/1505.05400v3", date: "2015-08-11", version: "v3" },
    ],
    refs: [
      { label: "Hartman, Mathys & Stergiou, 'A Positive Metric on Four-Dimensional QFTs' (2026 preprint, v1)", url: "https://arxiv.org/abs/2611.23370v1" },
      { label: "Jack, Jones, Poole, 'Gradient flows in three dimensions' (2015)", url: "https://arxiv.org/abs/1505.05400" },
      { label: "Friedan, Konechny, 'Gradient formula for the beta-function of 2d quantum field theory', J. Phys. A 43 (2010) 215401", url: "https://arxiv.org/abs/0910.3109" },
      { label: "Jack, Osborn, 'Constraints on RG flow for four dimensional quantum field theories' (2013; revised 2015)", url: "https://arxiv.org/abs/1312.0428" },
      { label: "Friedan, Konechny, 'On the boundary entropy of one-dimensional quantum systems at low temperature' (arXiv 2003)", url: "https://arxiv.org/abs/hep-th/0312197" },
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
- Conformal bootstrap: El-Showk et al. (2012) find a kink in numerical bounds. Mixed-correlator islands for $(\Delta_\sigma,\Delta_\epsilon)$ additionally assume $\mathbb Z_2$ symmetry and that these are the only relevant scalars (Kos–Poland–Simmons-Duffin 2014; refined by Kos–Poland–Simmons-Duffin–Vichi 2016). They do not construct the lattice scaling limit.
- The Wilson–Fisher fixed point has been constructed rigorously only for long-range variants with small $\epsilon$ (Brydges–Mitter–Scoppola 2003; Abdesselam 2007).`,
    residual: r`Full resolution requires a scaling limit of the stated short-range critical model with all the listed properties, including conformal invariance and the Osterwalder–Schrader axioms. A subsequential limit, non-Gaussianity or rotation invariance alone is partial progress. A construction must state the field normalization and convergence topology. Massive constructive $\phi^4_3$ theory is a different, already known target.`,
    evidence: [
      { kind: "published", role: "progress", summary: "Published lecture notes reviewing random-current methods and marginal 4D Gaussianity; Section 11 lists the critical 3D scaling limit as open.", url: "https://arxiv.org/abs/2112.04248v3", date: "2022-10-03", version: "v3" },
    ],
    refs: [
      { label: "Aizenman, Duminil-Copin, 'Marginal triviality of the scaling limits of critical 4D Ising and φ⁴₄ models', Ann. Math. (2021)", url: "https://arxiv.org/abs/1912.07973" },
      { label: "Aizenman, 'A geometric perspective on the scaling limits of critical Ising and φ⁴_d models' (2021)", url: "https://arxiv.org/abs/2112.04248" },
      { label: "El-Showk et al., conformal bootstrap for the 3D Ising model (2012)", url: "https://arxiv.org/abs/1203.6064" },
      { label: "Kos, Poland, Simmons-Duffin, 'Bootstrapping mixed correlators in the 3D Ising model', JHEP 11 (2014) 109", url: "https://arxiv.org/abs/1406.4858" },
      { label: "Kos, Poland, Simmons-Duffin, Vichi, precision islands for the 3D Ising CFT (2016)", url: "https://arxiv.org/abs/1603.04436" },
    ] },
];
