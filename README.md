# Open Problems in Quantum Mechanics for humans and AI Agents

A curated catalogue of open problems in quantum theory — for humans and AI
agents to attack, discuss, and make progress on.

This is a collaborative, community project. If you spot an error, know of a
result that should update a problem's status, or want to add a problem,
reference, or piece of context: contributions are very welcome, just open a
pull request or an issue.

## Website

https://openquantumproblems.com/

### Timeline

**10 September 2026 — targeted literature update**

- Updated eleven entries using thirteen new versioned arXiv references, plus one source for the existing Bell-activation watchlist. See the [dated literature report](docs/reviews/2026-09-10-literature-update.md) for scope and source-by-source qualifications.
- C4 now records a claimed general exponential strong converse; C5 records claimed operational private-capacity superactivation. Both remain “Improved” pending independent assessment.
- Added progress on separability SDP bounds, tomography measurement trade-offs, noisy nonlocal games, self-testing assumptions, fermionic QCA, information causality, moment-polytope optimization, scalar-QED infrared sectors and local Gibbs-state certification.
- Preserved the full-review date of 4 September and all untouched entry dates. Added a separate latest-update date, source links and attributed AI/formalization disclosures. Counts remain 113 active entries and ten archive/background pages.

**4 September 2026 — full catalogue review implemented**

- Reassessed all 111 original entries and implemented their statement, scope, status and citation corrections. The [full audit](docs/reviews/2026-09-04-catalogue-review.md) records the pre-change findings; the [implementation record](docs/reviews/2026-09-04-implementation.md) maps the changes.
- Consolidated nine overlapping entries and moved U5 to background. All original `#p/ID` links remain valid; archived pages link to their active parents and are excluded from active counts.
- Added or promoted twelve questions: M12/M13, B13/B14/B15, E16, N11, C11/C12, A19, QF11 and O10. The catalogue now has 113 active entries and ten retained archive/background pages.
- Added source-linked evidence badges, a separate author-provenance section, relations, review dates, a public review/evidence-policy page and a non-counted research watchlist.
- Linked all 401 reference records and corrected additional legacy author/title/publication metadata while preserving the literature history.
- Added the frontend credit “powered by Astra”. Preserved the existing site design and GitHub publishing workflow.
- Added automated checks for all IDs, archive targets, source metadata, internal links, KaTeX expressions and rendering of every detail/category view.

**4 September 2026 — earlier literature update**

- A5: added the first quantum-oracle separation between $\mathsf{QMA}(2)$ and $\mathsf{QMA}$ and the resulting constant-error no-disentanglers theorem.
- A12/A14/A16/A17/A18: added new BosonSampling hardness ingredients, the withdrawal of a claimed graph-isomorphism algorithm, an independent bounded-round query-simulation theorem, a shadow-tomography obstruction, and fault-tolerance overhead, calibration and decoding results.
- C6/C7: recorded the improved $C_7$ zero-error lower bound and the counterexample to the optimality of Marton's classical broadcast-channel inner bound.
- E4/E6/E10/E11: added a finite-round LOCC criterion for multiqubit product bases, correlated-catalytic irreversibility, and the nonadditivity/additivity split for Rényi entanglement of purification away from the von Neumann case.
- N3/N8: added the composite-dimension MUB numerical survey and size-independent multipartite GHZ self-testing robustness.
- O5/O9 and F2/F8/F9: added Pauli-twirling non-Markovianity, scalable noise-learning methods, a revised categorical Born-rule theorem, compositional quantum-reference-frame results, and a sharper taxonomy of dynamical causal order.
- These were partial-progress records, not independently verified solutions. The subsequent full review corrected scope, metadata and provenance errors in this initial update; current entry wording takes precedence.

**20 August 2026**

- C4: recorded a preprint claiming exponential strong converses for all finite-dimensional degradable and antidegradable channels.
- E1/E2: added new two- and three-copy distillability results, while keeping the general NPT and $n\geq3$ Werner questions open.
- E14/N2: recorded preprint classification/construction claims for $\mathrm{AME}(7,d)$, five other AME cases and order-six complex Hadamard matrices; the MUB problem is distinct.
- C1/A16: added a certified positive-capacity lower benchmark for the depolarizing channel, not its exact threshold, and a bounded-round quantum-query simulation preprint.
- Added three previously missing problems: quantum property testing (A17), fault tolerance beyond local stochastic noise (A18), and learning open-system dynamics (O9).
- Checked and summarized each paper's author-declared AI involvement, conditionally and without treating it as independently verified.

**29 July 2026**

- E2: recorded preprints claiming the two-copy Werner-state result; the general all-copy question remains open.
- C1/E3: added the new non-PPT/non-antidegradable zero-capacity channel and constant-gap separability algorithm.
- N6/N9: added the three finite-level NPA non-exactness and phase-transition results.
- C4/A5/A9/B11: added the stabilizer-code strong converse, optimal product-test analysis, and VGP/stoquasticity results.
- Added reported AI-provenance disclosures to improved entries, with explicit uncertainty and human-verification caveats.

## Contributing

- Fix or expand a problem: edit the relevant file in `app/data/`.
- Add a solution, improvement, or progress note: same place, with the
  contributor's name and (if applicable) the model used.
- Anything else — new problems, better references, corrections — PRs welcome.

No formal process, no gatekeeping. Just send it.

### Catalogue structure and evidence

The source of truth is `app/data/cat-*.js`, aggregated by `app/data/problems.js`.
`main.tex` is a historical manuscript, not a synchronized export of the current site.
Do not renumber existing IDs or reuse an archived ID for a new question.

- `statement` defines the model, assumptions, quantifiers and success criterion; `context` separates the established baseline from the open residual.
- `horizon` distinguishes `sharp`, `incremental`, `programme` and `conceptual` entries. A programme is not a single conjecture.
- `status: "improved"` means relevant progress is recorded, including a claimed resolution awaiting assessment; it does not certify every cited claim.
- `reviewedAt` records the most recent literature check for that entry. A targeted `LITERATURE_UPDATE` does not change the baseline `REVIEW` date or untouched entry dates.
- `evidence` contains `{ kind, summary, url, date?, version? }`. Supported kinds are `published`, `preprint`, `numerical`, `conjecture` and `withdrawn`. Include scope, not just an optimistic headline.
- `provenance` contains `{ summary, url, version? }` for attributed disclosures. No disclosure is not evidence of no AI use, and AI use is not evidence for or against mathematical correctness.
- `relations` contains `{ id, type }` with `parent`, `benchmark`, `reduction` or `related`.
- `archive` contains `{ kind: "merged" | "background", targets: [id], reason }`. Archived pages remain addressable through `getProblem`; `PROBLEMS` and category counts include only active records.
- References should use verified DOI/arXiv/publisher URLs. Distinguish submission, revision, acceptance and publication dates; do not infer publication from an arXiv identifier or acceptance notice.

### Development checks

Run `npm test` for catalogue integrity, mathematical syntax and server-rendered view checks, then `npm run build` for the production build. `npm run dev` starts the normal local preview. The test suite uses the project's existing Next compiler and React renderer; it requires no extra browser or test dependencies.
