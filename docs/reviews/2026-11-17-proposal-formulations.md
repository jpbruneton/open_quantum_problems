# Proposal formulations — 17 November 2026

The 44 priority proposals of the 8–9 November batches have been expanded, together
with all 24 secondary leads. The eleven proposals added on 16 November were also
read; seven needed clarification. There remain 55 priority proposals and 24
secondary leads, outside the 218-entry active catalogue. Identifiers, former-key
aliases, batch dates, horizons and verdict categories are preserved.

Before editing, `origin/main` was fetched and had no commits ahead of the local
checkout. There were no open pull requests or issues to review.

## Material used and scope

The working material was found in the maintainer's private `oqmresearch` repository:

- `docs/research/README.md`, the index of preliminary work and its limitations;
- the per-problem notes for PM1–PM6, PB1–PB4, PQF1–PQF5, PU1–PU2,
  PE1–PE4, PN1, PC1, PA3, PA5, PA6, PF1 and PH3;
- `docs/research/bilans/2026-11-08-selection-et-audit/`;
- `docs/research/bilans/2026-11-10-revue-complete/nouveaux-problemes.md` and
  `applique-nouveaux-problemes.md`;
- the public proposal reports of 8, 9 and 16 November.

These notes are unpublished working documents. Their numerical searches,
conditional arguments and proposed proofs have not been promoted to published
progress or claimed resolutions. Their useful contribution here is to identify
missing conventions, logical distinctions and concrete intermediate tasks.

Primary sources were reopened for selected corrections, including
[Chatterjee's Definition 2.3 and Theorem 2.4](https://arxiv.org/html/2006.16229#S2.SS4),
[He–Hubeny–Rota's discussion of candidate rays](https://arxiv.org/html/2412.15364),
[Lüscher](https://arxiv.org/abs/1006.4518),
[Lüscher–Weisz](https://arxiv.org/abs/1101.0963),
[Michalakis–Pytel](https://arxiv.org/abs/1109.1588),
[Müller-Lennert et al.](https://arxiv.org/html/1306.3142),
[Faulkner](https://arxiv.org/abs/2611.11760),
[Kibe–Roy](https://arxiv.org/abs/2607.07799), and
[Dall'Acqua–Solovej](https://arxiv.org/abs/1001.5417).
This was an editorial and formulation review, not an exhaustive search for new
solutions or an audit of proofs. The earlier literature-review dates remain in
place.

## Coverage

| Proposals | Main additions |
|---|---|
| PM1–PM6 | Operator conventions, spectral normalization, thermodynamic quantifiers, boundary conditions and the distinction between correlation decay and a Hamiltonian gap. |
| PB1–PB4 | Graph distance and cut boundary; Landau-level and flux conventions; a fixed Bose-potential class and order of limits; the triangular-lattice order parameter. |
| PQF1–PQF5 | Physical-scale matching across regulators; canonical field normalization; uniform correlation constants; separate continuum, volume and clustering limits; a genuine invariant measure excluding an explosion cemetery state. |
| PU1–PU2 | Perturbation quantifiers, input precision, boundedness assumptions and the distinction between finite-instance algorithms and uniform size cutoffs. |
| PE1–PE4 | PPT and EB definitions; dimension changes under encodings; conditional dimension bounds; asymptotic key rates; Werner parameters and one-copy benchmarks. |
| PN1–PN3 | Full MUB search versus a restricted ansatz; explicit correlation sets; repeated-game strategies allowing correlations between all copies. |
| PC1–PC3 | Rényi conventions, arbitrary joint inputs, channel and energy models, weak versus strong additivity. |
| PA1–PA7 | Oracle interfaces, exact completeness, uniform constants, sampling-error models, succinct-state access, circuit-size quantifiers and continuum-verifier completeness. |
| PO1–PO3 | Mixing-time normalization, finite-size critical crossover, clock model and complete resource accounting. |
| PF1 | Quantum operations allowed by the two DAGs, exact sets versus closures, and the criterion for an actual separation. |
| PG1–PG2 | Initial focusing versus assumed monotonicity; renormalized entropy; diagonal claims versus general shape variations and known off-diagonal obstructions. |
| PH1–PH3, PQG1 | CFT ensembles and exceptional states; actual RT minimum data; exact graph certificates; full positive-P alternatives in field certification. |
| SB1–SF2, all 24 leads | A specific question, success criterion, relevant baseline and reason the nearby result does not already settle it. |

## Corrections beyond expansion

- **PM1:** fixed-width intervals at a positive distance from a free band edge are
  already part of the claimed M2 result. The suggested intermediate target now
  explicitly reaches the band centre.
- **PM2:** a qualitative gapped neighbourhood of an AKLT parent is already covered
  by stability results under their hypotheses. The proposed intermediate work is
  quantitative continuation towards the bilinear Heisenberg point.
- **PM3:** the AKLT comparison now credits Matsui for unrestricted infinite-chain
  uniqueness, separately from the finite-chain parent-Hamiltonian results.
- **PM4:** a universal excess-charge bound with constant two is a stronger target,
  not an easier sub-target of obtaining any explicit constant.
- **PQF1:** the title now says universality. Regulator comparisons require matching
  physical scales and operator normalizations; equal bare couplings are insufficient.
- **PQF2:** the perturbative test is restricted to an asymptotically free trajectory
  and a specified canonical field convention, using a connected separated-point
  correlator and a perturbatively matched coefficient.
- **PQF3:** replaced a separation-dependent prefactor by Chatterjee's uniform
  constants and local-function class. The strong boundary-uniform statement is
  distinguished from an ordinary mass gap. Its implication is a lattice area law.
- **PO2:** the title and main target now address the shrinking critical window;
  the already claimed exponent at the critical point remains in the baseline.
- **PG2:** non-integer diagonal indices are no longer presented as the outstanding
  target. The remaining question must account for off-diagonal obstructions.
- **PH3:** resolving the three candidate orbits does not by itself prove
  completeness of the six-region holographic entropy cone.

Seven recent formulations were clarified: **PM7** now defines its hopping symbol
and finite section without requiring the reader to reconstruct M17; **PM8** requires
control of logarithmic potentials before taking a distributional Laplacian;
**PA10** fixes an error scale relative to the peak and makes the conditioning
explicit; **PN4** and **PN5** define the measured information quantities and what a
global certificate must establish; **PO4** asks for an extremal growth function
without assuming a pure power law; **PO5** specifies traceless matrix coordinates,
the control topology and a fixed objective. The existing caveats on inferred scope
remain. PA8, PA9, PA11 and PB5 were retained after reading their statements and
caveats.

## Rendering and validation

Priority statements and secondary notes now render their paragraph breaks using
the existing text renderer. The list previews remain compact. The introductory
page links this report and distinguishes the wording revision from the earlier
literature reviews.

The catalogue tests now parse the mathematics in all priority and secondary
proposals, and render all 55 priority detail pages while checking paragraph
separation. All 15 tests pass. The production build succeeds and generates all
358 pages. A comparison with the previous Git version confirms 44/44 initial
statements, 24/24 secondary notes and 7/11 recent statements changed, with all
IDs, aliases, horizons, entry cross-references and verdict categories preserved.
Representative generated HTML pages retain their separate paragraphs and render
without KaTeX errors. `git diff --check` passes. No commit or push was made.
