# Catalogue review implementation

Date: 4 September 2026. Implements the [complete 111-entry review](2026-09-04-catalogue-review.md), following the user's explicit implementation and commit/push request.

## Scope applied

All ten category data files were revised against their entry-by-entry audits. Changes include precise assumptions, corrected established baselines, open residuals, theorem/preprint/numerical distinctions, bibliographic corrections and explicit author-provenance notes. “Keep” recommendations still received their specified refinements; the audit's 27/74/9/1 dispositions describe the original catalogue, not a new scientific confidence score.

The implementation preserves the existing Next.js architecture, package manager, design and GitHub publishing workflow. It does not migrate hosting or introduce unrelated features. The frontend footer displays the requested literal credit, “powered by Astra”.

## Twelve added or promoted questions

| ID | Question |
| --- | --- |
| M12 | Two-dimensional Anderson localization at arbitrary disorder |
| M13 | Sharp three-dimensional Lieb–Thirring constant |
| B13 | Homogeneous interacting Bose–Einstein condensation at fixed density |
| B14 | Untruncated Laughlin bulk spectral gap |
| B15 | Ground-state phase of the uniform kagome Heisenberg model |
| E16 | Entangled states with zero distillable secret key |
| N11 | Exact two-qubit Werner Bell-locality threshold |
| C11 | Qubit depolarizing quantum capacity and positivity threshold |
| C12 | Complex finite-dimensional PPT-squared conjecture |
| A19 | Noncryptographic classical verification of BQP |
| QF11 | Physically implementable local QFT measurements |
| O10 | Efficient Gibbs preparation and dissipative mixing |

## Preserved legacy links

| Legacy ID | Treatment / destination |
| --- | --- |
| M3 | Merged into M2 |
| M11 | Merged into C10 |
| E2 | Consolidated Werner benchmark under E1 |
| E15 | Merged into F7 |
| N9 | Consolidated under N6/N5 |
| A16 | Concrete bounded-query material under A11; retained overview |
| QF4 | Umbrella over QF1/QF3/QF5 |
| F2 | Axiomatic branch under F3, Everettian branch under F1 |
| F11 | Relational structure under F8, clock performance under O7 |
| U5 | Background/methods, not a standalone open problem |

All original `#p/ID` routes still resolve. Archive pages explain the disposition and link to active parents; parent pages expose their consolidated subproblems. No IDs are renumbered. The result is 123 addressable records: **113 active entries and ten archive/background pages**.

## Evidence and navigation

- The public `#review` page explains evidence levels, review limitations, consolidations and the non-counted watchlist. It links the full audit and appendices.
- Detail pages show the review date, source-linked evidence, relations and a separate author-reported provenance section where applicable.
- Preprints are not promoted to established theorems merely because their abstracts claim proofs. Published restricted results do not mark entire programmes solved.
- The research watchlist preserves the lower-confidence candidates from the audit without presenting them as publication-ready open problems. Finite-resource catalysts, continuum entanglement restrictions and non-Abelian thermalization are handled within existing topics.
- Category numbering no longer fabricates contiguous ID ranges from active counts. Archived entries are absent from active/sharp lists but discoverable from their category and the review page.
- Existing links and keyboard navigation are preserved or improved. The footer credit is present in every view.
- All 401 reference records now have source links. Bibliographic cleanup also split combined citations, removed redundant duplicates and corrected older author/title/venue/year mismatches. There are 75 structured evidence records and 29 separately attributed provenance notes.

## Verification

`npm test` checks the complete original-ID set, additions, exact archive destinations, data schema, HTTPS source syntax, internal relations, balanced and valid KaTeX, rendered detail pages for every record, all category views, sharp/home/review/not-found views, formula-safe previews and report coverage/links.

The nine tests pass, including regression checks preserving the sources for the priority scientific corrections. Legacy bibliography verification concerns source identity and metadata, with selected abstracts/full texts—not a fresh full-text review of the entire historical corpus.

The final production build passes. A temporary local production server returned HTTP 200 with the 113-entry count, review link and “powered by Astra” footer in its rendered response, then was stopped. This is an HTTP/server-rendering smoke check, not a browser visual or interaction test.

These automated checks validate data and rendering, not the truth of mathematical proofs or the availability of every external URL. Bibliographic links use identified sources; historical records without a verified link must not receive guessed URLs. The original literature audit remains subject to its stated scope and independent-proof-verification limits.
