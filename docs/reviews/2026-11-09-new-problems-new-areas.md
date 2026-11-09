# New problems in areas the catalogue does not cover — proposal (9 November 2026)

> **Later the same day.** Most selected candidates are well-known open problems, so
> 31 entries (from 32 candidates; P52 and P53 merged) were promoted to the catalogue in
> four new areas (G, H, QG, R) and Foundations (F13–F15). Only P55, P56, P58, P59, P64
> and P81 remain proposals, filed under the new catalogue areas. See
> [2026-11-09-literature-update.md](2026-11-09-literature-update.md), which also corrects
> three attributions below (arXiv:2308.14517 is Kay's review, arXiv:2112.04248 is by
> Aizenman alone, arXiv:2310.19655 appeared in Class. Quantum Grav.).

This report adds a second batch of candidates to the "New problems suggested by AI"
page. The first batch (8 November 2026,
[2026-11-08-new-problems-proposal.md](2026-11-08-new-problems-proposal.md)) asked what
the 2026 claimed resolutions leave open. This one looks outside the catalogue's ten
areas: the catalogue has no entry on black holes, holography, entropy bounds,
quantum cosmology, the renormalization group or collapse models, and touches gravity
only through QF10 (interacting QFT on curved spacetime).

Nothing in the catalogue (`app/data/cat-*.js`) changes. The candidates are
proposals: no status, not counted, awaiting human selection.

## Source and method

About fifty candidates were drafted with AI assistance in the maintainer's private
research notes (working IDs QG1–QG44 for gravity, holography and cosmology; X3–X10
for foundations-adjacent extensions). A separate AI review of the same day triaged
them and added fifteen candidates of its own (collapse CL1–CL3, alternatives
AL1–AL2, entropy bounds EB1–EB3, complexity CX1–CX2, renormalization group RG1–RG5).
That review rechecked the status of the items most likely to have moved (QG2, QG4,
QG7, QG13, QG19, QG20, QG21, QG36) on arXiv pages; the other statuses come from an
audit made earlier the same day. No proof was audited. The arXiv API was not
reachable from the review environment; verification used web search and the arXiv
abstract, HTML or PDF pages.

The two TQC–GUP extensions (X1–X2) are handled separately and are not part of this
batch.

Selection for the site used four criteria, in order:

1. **Notoriety.** A named conjecture or problem posed by its authors in the arXiv
   literature, not a formulation invented during a session.
2. **Status.** No resolution found as of 9 November 2026. An announced but
   unassessed resolution is reported as a caveat, following the catalogue's
   "Claimed solved" convention.
3. **Sharpness.** A closable statement (proof, counterexample, computation) or, for a
   programme, an explicit closable sub-target.
4. **Bibliography.** A pre-AI antecedent, the recent state of the art, and any
   current claims.

## New areas

These are proposal areas only. They are defined in
`app/data/proposals-new-areas.js` (`PROPOSAL_THEMES`), are distinct from the ten
catalogue categories, and would become catalogue categories only if entries are
accepted.

| Area | Proposals |
|---|---|
| Black holes and semiclassical gravity | P47–P51 |
| Holography and AdS/CFT | P52–P56 |
| Entropy bounds and energy conditions | P57–P64 |
| Complexity and gravity | P65–P68 |
| Quantum cosmology and de Sitter | P69–P70 |
| Quantum gravity: UV completion and swampland | P71–P74 |
| Renormalization group and structure of QFT | P75–P79 |
| Testing the quantum nature of gravity | P80–P81 |
| Collapse models and nonlinear quantum dynamics | P82–P83 |

One candidate, P84 (higher-order interference), is filed under the existing
Foundations area because it is a question about operational reconstruction (F3).

## Selected candidates (38)

| Key | Working ID | Title | Horizon | Notes |
|---|---|---|---|---|
| P47 | QG1 | Page curve in asymptotically flat gravity with a massless graviton | conceptual | Defining the radiation entropy is part of the task |
| P48 | QG3 | Hawking effect for an interacting field | sharp | Fredenhagen–Haag's explicit remark |
| P49 | QG4 | Quantum strong cosmic censorship for Kerr–de Sitter and Kerr | sharp | Tightened after Hintz–Klein (arXiv:2310.19655) |
| P50 | QG17 | Distinguished Hadamard states on Kerr | sharp | Includes the Kay–Lupo conjecture |
| P51 | QG16 | Cauchy problem for the semiclassical Einstein equations | sharp | Part (ii) closer to incremental |
| P52 | QG2 | Extremal CFTs and pure AdS₃ gravity | sharp | Tierz claim (arXiv:2512.00361) unassessed |
| P53 | QG20 | Optimal modular-bootstrap gap at large central charge | sharp | Same Tierz claim |
| P54 | QG40 | Nonlinear instability of anti-de Sitter space | sharp | Vacuum case open; Moschidis covers Vlasov and null dust |
| P55 | QG41 | Virasoro ETH for heavy states in holographic CFT₂ | sharp | Form of (iii) depends on the KdV ensemble |
| P56 | QG42 | Boundary rigidity from holographic entanglement entropies | sharp | Michel's conjecture in holographic form |
| P57 | QG13 | Quantum focusing conjecture in four dimensions | sharp | 2025 counterexamples are 2D only (arXiv:2510.13961) |
| P58 | EB1 | Quantum Bousso bound beyond weak gravity | sharp | Implied by the QFC |
| P59 | EB2 | Rényi QNEC for interacting theories | sharp | Free fields done (arXiv:2007.15025) |
| P60 | QG14 | Achronal ANEC in curved spacetime for interacting fields | sharp | |
| P61 | QG15 | Generalized second law beyond leading semiclassical order | sharp | Left open by Faulkner–Speranza |
| P62 | QG18 | Quantum energy inequality for the constructed φ⁴₃ theory | sharp | No interacting QEI in d ≥ 3 |
| P63 | QG19 | Quantum Penrose inequality | sharp | Bibliography corrected (arXiv:2406.17860) |
| P64 | QG21 | Six-region holographic entropy cone: the three unresolved extreme rays | sharp | Rays 110, 145, 168 (arXiv:2601.19979) |
| P65 | QG36 | Linear growth of complexity for a fixed Hamiltonian | sharp | Sustained, not linear, growth proved (arXiv:2609.26885) |
| P66 | QG23 | Python's lunch conjecture | sharp | |
| P67 | QG33 (a) | Harlow–Hayden decoding hardness without cryptographic assumptions | sharp | Back-reaction part (b) left out as incremental |
| P68 | CX1 | Universal operator growth hypothesis | sharp | Bound proved at infinite temperature only |
| P69 | QG27 | Contour of the no-boundary wavefunction | sharp | Within a fixed minisuperspace |
| P70 | QG28 | Light interacting scalar in de Sitter | sharp | |
| P71 | QG7 | Seven-loop ultraviolet finiteness of N = 8 supergravity | sharp | No seven-loop computation found |
| P72 | QG10 | Does string theory sit at the boundary of the graviton S-matrix bootstrap? | sharp | |
| P73 | QG8 | No global symmetries in asymptotically flat quantum gravity | conceptual | Sharp once a framework is fixed |
| P74 | QG43 | Instability of non-supersymmetric AdS vacua (Ooguri–Vafa) | sharp | Disproof by one stable vacuum; proof is a programme |
| P75 | RG1 | The a-theorem in six dimensions | sharp | Fazzi–Giri–Levy cover type-A orbi-instantons only |
| P76 | RG2 | Scale invariance implies conformal invariance in d ≥ 3 | sharp | |
| P77 | RG3 | Are renormalization-group flows gradient flows? | sharp | |
| P78 | RG4 | Existence and conformal invariance of the 3D Ising scaling limit | sharp | |
| P79 | RG5 (= QG11) | Unitarity of the asymptotic-safety fixed point | programme | Sharp sub-target: stable spectral positivity |
| P80 | QG12 (a) | Gravitationally mediated entanglement as a witness of quantum gravity | sharp | 2025 Aziz–Howl controversy |
| P81 | QG38 | Certifying a non-classical state of the radiated gravitational field | sharp | |
| P82 | CL2 | Relativistic collapse model for interacting fields | sharp | Strongest collapse-model candidate |
| P83 | AL2 | Causal nonlinear quantum mechanics | sharp | Replaces the session note X8 |
| P84 | AL1 | A reasonable theory with higher-order interference? | sharp | Overlaps F3; replaces X6 |

Each proposal page states the problem, why it is open now, the baseline literature,
caveats where needed, and the review's verdict (all "open, substantive"; confidence
high or medium).

## Not selected

Retired by the review (vague or not attested in the literature): QG9, QG24 (sharp
form proved by Caron-Huot–Mazáč–Rastelli–Simmons-Duffin 2021), QG25, QG31, QG32
(ER=EPR is famous but not as a closable statement), QG34, QG35, X4, X5, X10. Merged:
QG39 into QG22, X9 into QG12.

Retained by the review but not put on the site, for the reasons given:

| Working ID | Reason |
|---|---|
| QG5 Schwarzschild microstates | A programme: its sharp sub-target (reproducing Sen's logarithmic coefficient by a microscopic count) presupposes a fixed UV-complete theory |
| QG6 State-independent interior | The quantified $(\epsilon,\delta)$ form is a session formulation |
| QG22 Factorization and ensemble duals | Conditional statements whose precise form is still debated |
| QG26 de Sitter static-patch holography | A programme |
| QG29 Quantum origin of primordial fluctuations | The classical class is broad and the answer depends on which observables are deemed accessible; partly settled by Wigner positivity of squeezed modes |
| QG30 de Sitter vacua in string theory | Contested; the review asks for a precise class statement first |
| QG37 Closed universes and observers | Moving fast since 2025, partly conceptual |
| QG44 Entanglement wedge at finite N | May already be a corollary of known results on exact codes |
| QG12 (b), QG33 (b) | Session formulations or incremental |
| EB3 rQFC-strengthened QNEC | A 2025 conjecture, not yet well known; kept as a remark on P57 |
| CX2 Complexity geometry | Less established than P65; medium priority in the review |
| CL1 Identifiability of collapse | Session formulation |
| CL3 Viable collapse parameter space | A bound-combination exercise, not an open problem |
| X3 Dissipative deterministic automata | A programme without a closable statement |

## Verification levels and limits

- Search does not certify that a problem is open; it establishes only that the
  queries made found no resolution.
- Checked on arXiv pages in the review: Tierz 2512.00361 (no response found);
  Hintz–Klein 2310.19655; Klein–Soltani–Casals–Hollands 2402.14171; Easson
  2511.05656; Franken et al. 2510.13961 and 2510.15787; Bousso–Tabor 2410.18192;
  Frassino et al. 2406.17860; Xu 2512.04137; He–Hubeny–Rota 2412.15364; He–Lee–Ooguri
  2601.19979; Lee–Pilatowsky-Cameo–Choi 2609.26885; Rabinovici et al. 2507.06286;
  Fazzi–Giri–Levy 2312.17178; Farnsworth–Luty–Prilepina 1309.4095;
  Muciño–Okon–Sudarsky–Wiedemann 2608.26474; Bortolotti et al. 2601.00651.
  XENONnT 2506.05507 was read through an aggregator summary.
- References given from memory and not re-verified include Gisin (1989–1990),
  Polchinski (1991), Weinberg (1989), Sorkin (1994), Michel (1981), Wallace–Zia (1974),
  Barnum–Müller–Ududec (2014), Dakić–Paterek–Brukner (2014), Sawant et al. (2014),
  Jack–Osborn (1990), Brydges–Mitter–Scoppola (2003),
  Aizenman–Duminil-Copin–Sidoravicius (2015), Bhattacharjee et al. (2022) and
  Casini–Testé–Torroba (2017).
- Unassessed claims are flagged on the pages concerned: Tierz (P52, P53), Easson
  (P49), Xu (P63), and the 2025 Aziz–Howl claim (P80).
