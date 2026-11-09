const r = String.raw;

// Proposals of 9 November 2026 that remain candidates. The well-known open problems of
// the same review were promoted to the catalogue (G, H, QG, R series and F13–F15); these
// six are new formulations or narrow sub-questions. Details:
// docs/reviews/2026-11-09-new-problems-new-areas.md.

export const NEW_AREAS_BATCH = "2026-11-09";

const SG = [
  { key: "P58", title: "Quantum Bousso bound beyond weak gravity", horizon: "sharp", extends: ["G6"],
    statement: r`For Einstein gravity in $D=4$ coupled to quantum fields, and a light sheet $L$ from a codimension-2 surface $\sigma$ with non-positive classical expansion, prove $S_{\rm out}(L)\le\big(A(\sigma)-A(\sigma')\big)/4G\hbar$ with $S_{\rm out}$ defined by vacuum subtraction (Bousso–Casini–Fisher–Maldacena), when back-reaction is not perturbative; or exhibit a semiclassical counterexample. Variant: prove the discrete max-focusing conjecture of Bousso–Tabor, from which the bound follows.`,
    why: r`The quantum bound is proved in the weak-gravity limit (free fields, then interacting theories under assumptions) and in JT gravity. It follows from the QFC, so it is a weaker and more accessible target. Gauss–Bonnet gravity violates it (Fu–Koeller–Marolf), which is why Einstein gravity is fixed.`,
    baseline: r`Bousso, arXiv:hep-th/9905177; Flanagan–Marolf–Wald, arXiv:hep-th/9908070; Strominger–Thompson, arXiv:hep-th/0303067; Bousso–Casini–Fisher–Maldacena, arXiv:1404.5635; Bousso–Tabor, arXiv:2410.18192; Franken, arXiv:2510.15787.`,
    assessment: { verdict: "open-substantive", confidence: "high", summary: r`Open beyond $G\to0$; the Bekenstein bound in Casini's precise form is proved and is deliberately not proposed.` } },

  { key: "P59", title: "Rényi QNEC for interacting theories", horizon: "sharp", extends: ["G6"],
    statement: r`The Rényi QNEC states that the second null shape derivative of the sandwiched Rényi relative entropy of index $n>1$ between a state and the vacuum, on a null cut, is non-negative. Prove it for an interacting theory (a holographic CFT, or a general CFT in $d>2$), or exhibit a violation for $n>1$; describe the behaviour for $n<1$, where violations are expected.`,
    why: r`Moosa, Rath and Su proved it for free fields in $d>2$ and $n>1$; $d=2$ and $n<1$ behave differently. The von Neumann QNEC is proved in general in flat space, so the interacting Rényi case is the natural next step.`,
    baseline: r`Moosa–Rath–Su, JHEP 01 (2021) 064, arXiv:2007.15025; Bousso–Fisher–Koeller–Leichenauer–Wall, arXiv:1509.02542; Balakrishnan–Faulkner–Khandker–Wang, arXiv:1706.09432; Ceyhan–Faulkner, arXiv:1812.04683.`,
    assessment: { verdict: "open-substantive", confidence: "medium", summary: r`Open beyond free fields. A July 2026 preprint on a Rényi version of the QFC (arXiv:2607.07799) was not audited.` } },
];

const HOLO = [
  { key: "P55", title: "Virasoro ETH for heavy states in holographic CFT₂", horizon: "sharp", extends: ["B4", "H1"],
    statement: r`For a unitary compact CFT$_2$ with $c\gg1$ and a sparse light spectrum (at most $e^{o(c)}$ states below $\Delta=c/12$), and a heavy primary $|h\rangle$ with $h\gg c$, prove for every light operator $\mathcal O$: (i) $\langle h|\mathcal O|h\rangle$ equals the thermal value at the Cardy temperature up to $e^{-O(c)}$; (ii) off-diagonal elements $\langle h|\mathcal O|h'\rangle$ are suppressed as $e^{-S(h)/2}$ times a smooth function; (iii) the entropy of a fixed-size subsystem in $|h\rangle$ equals the thermal entropy, or quantify the deviation due to the KdV charges.`,
    why: r`Large-$c$ Virasoro blocks reproduce black-hole thermality (Fitzpatrick–Kaplan–Walters), but subsystem ETH generically fails in CFT$_2$ because of KdV charges (Basu–Das–Datta–Pal), and the correct ensemble for (iii) is a generalized Gibbs ensemble ("KdV ETH"). No global theorem exists.`,
    baseline: r`Fitzpatrick–Kaplan–Walters, JHEP 11 (2015) 200, arXiv:1501.05315; Collier–Maloney–Maxfield–Tsiares, arXiv:1912.00222; Basu–Das–Datta–Pal, arXiv:1705.03001; Besken–Datta–Kraus, arXiv:1907.06661; Chen–Dymarsky–Tian–Wang, arXiv:2409.19046.`,
    assessment: { verdict: "open-substantive", confidence: "medium", summary: r`Open as a theorem; the precise form of (iii) depends on the KdV ensemble and should be fixed before the problem is posed as a single statement.` } },

  { key: "P56", title: "Boundary rigidity from holographic entanglement entropies", horizon: "sharp", extends: [],
    statement: r`For a static asymptotically AdS$_{d+1}$ spacetime with spatial slice $(M,g)$, the Ryu–Takayanagi entropies of all boundary regions give the areas of boundary-anchored minimal surfaces. Prove that these data determine $g$ up to boundary-fixing diffeomorphism for a stated class of metrics (for instance without entanglement shadows), and characterize the obstruction in general; or exhibit two non-isometric metrics with the same RT data outside shadows.`,
    why: r`For $d=2$ minimal surfaces are geodesics and the question reduces to Riemannian boundary rigidity, proved for simple surfaces (Pestov–Uhlmann). In higher dimension, rigidity is known under a convex foliation condition (Stefanov–Uhlmann–Vasy); Michel's conjecture is open in general, and for codimension-2 minimal surfaces results are partial.`,
    baseline: r`Michel, Invent. Math. 65 (1981); Pestov–Uhlmann, Ann. Math. 161 (2005) 1093; Stefanov–Uhlmann–Vasy, arXiv:1702.03638; Ryu–Takayanagi, PRL 96 (2006) 181602; Bilson, arXiv:0807.3695.`,
    assessment: { verdict: "open-substantive", confidence: "medium", summary: r`Open: an inverse problem of geometry with a precise holographic reading; the class of admissible metrics must be stated.` } },

  { key: "P64", title: "Six-region holographic entropy cone: the three unresolved extreme rays", horizon: "sharp", extends: ["E13"],
    statement: r`Decide whether extreme rays 110, 145 and 168 of the six-region subadditivity cone are holographic (realizable by Ryu–Takayanagi entropies, equivalently by graph models). If they are not, find the six-region inequalities that exclude them and prove completeness of the holographic entropy cone for $n=6$.`,
    why: r`The cone is complete for $n\le5$ (Bao et al.; Hernández-Cuenca). For $n=6$, He, Hubeny and Rota realized 150 of 156 candidate orbits by graphs, and He, Lee and Ooguri three more by reinforcement learning; three rays remain, with no realization found up to 13 internal vertices. If they are not holographic, there are six-region inequalities still unknown.`,
    baseline: r`Bao–Nezami–Ooguri–Stoica–Sully–Walter, JHEP 09 (2015) 130, arXiv:1505.07839; Hayden–Headrick–Maloney, arXiv:1107.2940; Hernández-Cuenca, arXiv:1903.09148; Czech–Shuai–Wang–Zhang, arXiv:2309.15145; He–Hubeny–Rota, JHEP 06 (2025) 055, arXiv:2412.15364; He–Lee–Ooguri, JHEP 06 (2026) 267, arXiv:2601.19979.`,
    assessment: { verdict: "open-substantive", confidence: "high", summary: r`Open and unusually sharp: a finite question on three explicit rays ([He–Lee–Ooguri](https://arxiv.org/abs/2601.19979)). The holographic cone is strictly smaller than the quantum entropy cone of E13.` } },
];

const QG = [
  { key: "P81", title: "Certifying a non-classical state of the radiated gravitational field", horizon: "sharp", extends: ["QG6"],
    statement: r`Call classical the states of the radiated gravitational field with a positive Glauber–Sudarshan $P$ representation (coherent states and their mixtures). Is there a measurement protocol, realizable in principle with detectors coupled linearly to the strain, whose statistics certify that a given field state is not classical (squeezed, incoherent thermal, Fock)? In particular, does detecting a single graviton by stimulated absorption certify quantization, or does a classical-stochastic field model reproduce the detector statistics?`,
    why: r`Dyson argued single gravitons are undetectable by realistic detectors; the graviton noise depends on the field state and could be visible for squeezed states (Parikh–Wilczek–Zahariade). Single-graviton detection by stimulated absorption is possible in principle but does not distinguish quantum from classical gravity (Carney–Domcke–Rodd).`,
    baseline: r`Dyson, Int. J. Mod. Phys. A 28 (2013) 1330041; Parikh–Wilczek–Zahariade, arXiv:2005.07211; Carney–Domcke–Rodd, arXiv:2308.12988; Tobar–Manikandan–Beitel–Pikovski, arXiv:2308.15440.`,
    assessment: { verdict: "open-substantive", confidence: "medium", summary: r`Open as a certification theorem or no-go; the non-classicality criterion is standard quantum optics, which makes the statement precise.` } },
];

const mark = (items) => items.map((it) => ({ ...it, batch: NEW_AREAS_BATCH }));

export const NEW_AREA_PROPOSALS = [
  { cat: "semiclassical-gravity", name: "Semiclassical gravity", items: mark(SG) },
  { cat: "holography", name: "Holography", items: mark(HOLO) },
  { cat: "quantum-gravity", name: "Quantum gravity", items: mark(QG) },
];
