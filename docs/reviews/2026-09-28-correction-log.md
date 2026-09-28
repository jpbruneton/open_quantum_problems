# Correction log — 28 September 2026

Baseline: `2346a2a` (literature update through 28 September 2026). This pass follows a source and consistency audit of the whole catalogue. It corrects references, AI-use records, version pointers and wording. It also adds missing baseline results. It is not a new literature update: problem statements, IDs, statuses, archive dispositions and per-entry review dates are unchanged. The two exceptions are two horizon badges (section 5). The [28 September literature update](2026-09-28-literature-update.md) and earlier reports are left as historical records.

## Audit method

- Extracted every reference, evidence, provenance and watchlist record (601 records, 294 distinct arXiv identifiers).
- Checked all arXiv identifiers against the arXiv API for existence, title, authors, latest version and journal reference.
- Fetched the abstract page and version history of the 96 arXiv papers first submitted in 2025–2026. Compared every evidence date and version with that history.
- Compared the scope claims for recent preprints with their abstracts. This includes all claimed resolutions recorded as "Improved": A4, A7, C4, C5, C10 and E10.
- Compared 50 arXiv-hosted AI-use provenance records with the disclosure text in the cited manuscript version. The 51st record, F8, links to a journal page. It was checked against the arXiv version published in Quantum (v4).
- Resolved journal DOIs through Crossref and checked link status. Publisher 403 responses from bot protection were not treated as broken links.
- Checked every reference added in this pass the same way before insertion.

No proof was verified. Claims beyond abstracts were spot-checked in the manuscript text only where stated below.

## Summary

| Category of change | Count |
| --- | --- |
| Incorrect source URL, title or attribution corrected | 7 |
| AI-use provenance records corrected or completed | 6 |
| Stale or unpinned version pointers fixed | 14 |
| Reader-facing editing notes removed | 7 |
| Status/evidence records added for consistency | 3 entries |
| Horizon badges changed | 2 |
| Missing baseline references added | 27 |
| New evidence records added | 9 |
| Labels normalized to actual titles, authors or venues | about 40 |

## 1. Source errors corrected

| Entry | Problem | Correction |
| --- | --- | --- |
| E3 | The Gurvits (STOC 2003) reference linked to the DOI of the Horodecki *Rev. Mod. Phys.* review. | Linked to the correct DOI, `10.1145/780542.780545` (Crossref-verified). |
| A7 | The Dinur–Lin–Vidick reference carried an incorrect title, "Almost good quantum locally testable codes". | Actual title: "Expansion of higher-dimensional cubical complexes with application to quantum locally testable codes", FOCS 2024. The almost-good-qLTC description is kept as a descriptor; the entry text was already accurate. |
| A3 | The Bostanci–Haferkamp–Nirkhe–Zhandry reference carried an incorrect title. | Actual title: "Separating QMA from QCMA with a classical oracle", STOC 2026 (Crossref-verified). |
| M2, M12 | Bucaj et al. (arXiv:1706.06135) is a one-dimensional localization paper. It was labelled as an account of "unresolved higher-dimensional regimes" and "the open 2D problem". | Relabelled with its title and journal (*Trans. AMS* 372, 2019) as the one-dimensional baseline. M12 now also cites Aizenman–Warzel and Ding–Smart (2D edge localization for Bernoulli potentials). Hurtado's reference now carries its actual title; its bottom-of-spectrum scope was confirmed from the published abstract. |
| B9 | Rank-finiteness was attributed to Bruillard–Ng–Rowell–Wang, but only Rowell–Stong–Wang was cited. | Added Bruillard, Ng, Rowell & Wang, *J. Amer. Math. Soc.* 29 (2016). |
| B15 | The only source was a 2026 DMRG study of kagome Hamiltonians extended by J2 and Dzyaloshinskii–Moriya terms, which the entry itself excludes. It was described as the primary study of the pure nearest-neighbour model. | Rewrote the paragraph to cite the canonical pure-model studies: Yan–Huse–White (2011) and Depenbrock–McCulloch–Schollwöck (2012), gapped Z2 by DMRG; He–Zaletel–Oshikawa–Pollmann (2017) and Liao et al. (2017), gapless Dirac. The 2026 study is kept with its actual title and scope. Evidence records were split accordingly. |
| U5 | The Pour-El–Richards DOI resolved to a Springer 404 page. | Linked to the Cambridge University Press reissue, DOI `10.1017/9781316717325`. |

Two further links were replaced by stable DOIs after timing out from the audit machine:
- F2: Gleason (1957), `10.1512/iumj.1957.6.56050`.
- QF4: Montvay–Münster (1994), `10.1017/CBO9780511470783`.

## 2. AI-use provenance

| Entry | Source | Correction |
| --- | --- | --- |
| E3 | Gharibian–Hecht–Rudolph, arXiv:2609.09033v1 | The record mentioned only Lean support. It omitted the manuscript's "Generative AI disclosure", which states extensive, iterative generative-AI use in developing the proofs, including proposing and refining key proof ideas. The disclosure is now recorded. |
| A7 | Gay–Jeronimo, arXiv:2609.20780v1 | Made the model versions precise. ChatGPT Pro 5 to 6 were used, with only 5.6 and 6 Pro materially helping, and 6 Pro used as an editorial assistant. Also recorded the authors' statement that the paper was released early in light of rumours that OpenAI had solved several major TCS problems. |
| A17 | Wang, arXiv:2608.02600 | Updated to the v3 disclosure (8 September): LLMs used throughout for ideas, proof strategies and redrafting, with author validation. The v2 wording is noted. |
| A17 | Stempin–Llorens–Huber, arXiv:2608.20113v1 | Replaced the correction-history wording with the paper's own statement: GPT Sol 5.6 was used to derive Theorems A and B. |
| O9 | Chen–Yu, arXiv:2607.28610v1 | Replaced "recorded in a previous update, not rechecked" with the verified disclosure text. The URL is pinned to v1. |
| F8 | De Vuyst–Höhn–Tsobanjan, Quantum 10, 2196 | Replaced "not rechecked" with the verified statement in arXiv:2507.14131v4, the published version: "No AI tools were used in its creation." |

The remaining 45 checked provenance records match their sources.

## 3. Version pointers

- A17, Wang: v3 (8 September, before the 10 September review of A17) retitled the paper "A Unified Complexity Framework for Quantum Property Testing". It also extended the scope to Schmidt-rank and MPS testing. Evidence, reference and provenance now point to v3, and the context sentence was updated.
- A17, Acharya–Dharmavarapu–Liu–Yu: v3 (23 September) retitled the paper "Near-Optimal Mixedness Testing with Pauli Measurements" and added fixed-Pauli-protocol bounds. The main bound Θ̃((√10)^N/ε²) is present from v1. The reviewed v1 is kept as evidence; the label now records v3.
- QF7, Semenoff–Waterfield: v2 (12 September) exists. Its arXiv comment reports typo fixes and clarifying remarks, and the current abstract matches the entry. The reviewed v1 is kept; the label now records v2.
- E4, Zhao–Chen: pinned to v2 (31 August).
- The following evidence records declared a `version` but linked an unversioned URL. Each URL now carries the declared version: N11 (arXiv:2409.03739v3), O6, O9, O10 (Slezak et al.), F2, F3 (Hoffreumon–Woods), F4, F8 (two records) and F9 (Salzger–Vilasini).

## 4. Reader-facing editing notes removed

Sentences that described the catalogue's internal correction history, instead of the science, were removed or rewritten:

- B11: "…the unrelated digital-simulation paper previously attributed here."
- E2: "The corrected author attributions…"
- E7: "…rather than that original paper…"
- C4: "…absent from the previous update…"
- A17: "…the previous no-disclosure statement was incorrect" (context), and "This corrects the former assertion…" (provenance).
- F9: "…not published in Physical Review Research."
- O9 and F8 provenance: see section 2.

## 5. Status, evidence and horizon consistency

- **E4, E11 and O5 were marked "Improved" with no evidence record.** Each now has one:
  - E4: Zhao–Chen, arXiv:2608.18421v2.
  - O5: Kattemölle–Gulácsi–Burkard, *npj Quantum Inf.* 12, 138, published 20 August 2026.
  - E11: Ao–Philip–Streltsov, cross-listed from E6. The E11 text now explains why this paper is relevant: LOCC is a subset of PPT operations, so PPT obstructions constrain correlated-catalytic LOCC. It remains one advance cross-listed in two entries.
- **E6, sharp → incremental.** The statement asks for a structural characterization of the states with E_C = E_D, which no single proof or counterexample closes. A sentence explaining this was added.
- **C2, sharp → incremental.** The statement asks for Q(η, N_th, N_S) over a three-parameter family; progress consists of closing gaps on specified parameter regions. A sentence explaining this was added.

Active counts are unchanged: 113 active entries and 10 archive/background pages. The sharp-question count decreases from 40 to 38.

## 6. Baseline results added

Every addition was checked against its arXiv record or through Crossref.

| Entry | Addition |
| --- | --- |
| M1 | Fefferman–Seco and Seco–Sigal–Solovej (1990): N_c(Z) ≤ Z + O(Z^{5/7}). The asymptotic baseline is confirmed in the introduction of arXiv:2504.18487. The context no longer understates it as only N_c/Z → 1. |
| M8 | Dyatlov–Jin (*Acta Math.* 2018) and Dyatlov–Jin–Nonnenmacher (*JAMS* 2022): every semiclassical measure has full support. The text notes that full support is much weaker than Liouville measure. |
| M12 | Ding–Smart (*Invent. Math.* 2020) as the 2D Bernoulli edge-localization baseline that Hurtado extends. |
| B10 | Qin et al. (PRX 10, 031016, 2020): a non-superconducting ground state of the pure model in the benchmark regime (AFQMC/DMRG). Xu et al. (*Science* 384, 2024): superconductivity with stripes once t′ is added, which is a different Hamiltonian. Both are recorded as numerical evidence. |
| B15 | The four pure-model studies listed in section 1. |
| E3, O10 | Bakshi–Liu–Moitra–Tang (FOCS 2024): high-temperature Gibbs states are separable and efficiently preparable. Kiani's September preprint explicitly builds on it. O10 also cites Chen–Kastoryano–Gilyén (the exact noncommutative Gibbs sampler) and Rouzé–Stilck França–Alhambra (high-temperature polynomial thermalization, *Nature Physics* 2026). |
| C6 | The seven-cycle lower-bound sequence described in Tandon's own paper: Polak–Schrijver (2019, ≈ 3.25787), Itty et al., Gao, and Buys–Polak–Zuiddam (Lean-formalized, ≈ 3.25880, added as evidence), then Tandon (3.25883262…). The Lovász bound ϑ(C₇) ≈ 3.3177 is stated to show the remaining gap. |
| C11 | The prior positivity-point ladder, taken from the table in arXiv:2608.15870: DiVincenzo–Shor–Smolin (1998), Smith–Smolin (2007), Fern–Whaley (2008) and Agarwal et al. (2026, p = 0.064657, q ≈ 0.19397). The text notes that the certificate starts from Agarwal et al.'s public states. |
| N11 | Replaced the "no numerical interval" note with certified bounds. Designolle et al. (PRR 2023) give lower and upper bounds on K_G(3) approximately 1.43665 and 1.4546; Designolle–Vértesi–Pokutta (PRA 2026, Table 2(b)) improve the lower bound to approximately 1.43670. The upper bound on v_proj moves from about 0.69606 to 0.69604; its lower bound is approximately 0.6875. These are rounded summaries, not exact endpoints. |
| U1 | Bravyi–Gosset (*J. Math. Phys.* 56, 2015): a complete gapped/gapless classification of translation-invariant nearest-neighbour frustration-free spin-1/2 chains, the smallest case of U1's question. |
| A4 | The Grewal–Rudolph abstract's consequence that quantum 3-SAT becomes QMA-complete. |

## 7. Metadata normalization

References described only by a paraphrase now carry their actual title, authors and venue, with the descriptor kept where useful. This covers:

- M1 (Hundertmark et al.), M8 and M10 (Dyatlov's *Notices* article), M11, M13 (three references), B1, B2, B3, B5 (roadmap, now *Quantum Sci. Technol.* 11, 012501, 2026), B8, B11 (two references), B12, B13 (Solovej's *C. R. Physique* article), B14 (three references), E1/E2 (DiVincenzo et al.), E5, E13 (two references), N3 (McNulty–Weigert, now *Quantum* 10, 2051), N7 (three references), N8, C2 (Noh–Pirandola–Jiang), C3 (PLOB), C10 (two references), C12 (Park), A4 (the PRL title of Jeffery–Witteveen), A6 (Bergamaschi–Metger–Vidick–Zhang), U1 (Rai et al.), O6 (Shiraishi).
- M8 also had the confused phrase "holomorphic (mass-form) analogue" replaced by "mass equidistribution for holomorphic Hecke eigenforms".
- Bhattacharyya–Mehta–Zhao (C1, U4) is now marked as a FOCS 2026 paper, following its arXiv journal reference.

## 8. Site and tests

- `CORRECTION_LOG` is exported from `app/data/problems.js`. The review page now links this log and states its scope.
- `scripts/catalogue.test.cjs` checks that the log exists and is linked from the review page.

## 9. Not changed

- Problem statements, IDs, archives, statuses and `reviewedAt` dates.
- The published literature-update reports.
- The correctness assessment of any claimed resolution. A4, A7, C4, C5 and E10 remain "Improved" pending assessment.
- The Bazzi–Khater v3 disclosure (A18) could not be checked, because no HTML rendering was available. Its record was left as is.
- The Vilasini–Woods v2 date (F4) was not rechecked.
- The *Notices* page returns a bot-protection page to automated requests. It was left in place because Crossref confirms the article.

## 10. Follow-up review of commit `5c07c06`

Reviewed all 16 changed files, reran the catalogue tests and production build, and spot-checked the substantive additions against primary sources. This was a review of code, metadata and scientific scope, not an independent verification of the cited proofs or computational certificates. The Improved list remains intact; counts remain 113 active entries, 43 Improved entries and 38 sharp questions.

Two wording corrections followed:

- **E3/O10:** made the inverse-temperature direction and the fixed-parameter sampling guarantee explicit, following [Kiani, Theorems 1.1 and 1.3](https://arxiv.org/html/2609.30149v1). The ambiguous temperature wording predated the reviewed commit and remained in its revised paragraphs.
- **N11:** distinguished rounded decimals from exact certified endpoints. [The 2023 paper, equation (7)](https://arxiv.org/html/2302.04721v3) marks its decimals as approximate; [the 2026 paper, Table 2(b) and section IV.4](https://arxiv.org/html/2409.03739v3) makes the small improvement visible at five decimal places. The entry and the summary row above now retain this distinction.

## 11. Subsequent status distinction

At the maintainer's request, A4, A7, C4 and E10 are now **Claimed solved**, distinguishing their full-resolution claims from partial progress. The previous sections and literature reports record the status at their respective review stages. This reclassification does not independently validate the proofs or change the literature-review dates.

The homepage now links to a dedicated searchable list of the four claims. There are 39 Improved entries, four Claimed solved entries and zero Solved entries; the total remains 113 active entries. C5 and C10 remain Improved because their cited claims address subquestions of the broader entries. Tests check exact list membership, counts, badges and preservation of the distinction from Solved.

## Validation

- `npm test`: all catalogue tests pass, including KaTeX parsing, metadata, review-date rules and server rendering of every view.
- `npm run build`: succeeds.
- Every new or changed DOI returns a resolver redirect. Every new arXiv reference matches its arXiv title and first author.
