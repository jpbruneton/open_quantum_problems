# Literature update — 12 November 2026: arXiv review of 9–11 November

This update checks catalogue entries against new arXiv papers posted since the
previous update ([2026-11-09-literature-update.md](2026-11-09-literature-update.md)).
Its scope is limited to claimed solutions and partial progress on existing entries.
No new problems were looked for, and no entries were added.

Before starting, `origin/main` was fetched; it had no new commits. There were no
open pull requests or issues.

## Method

- Sources: the arXiv announcements of Monday 9, Tuesday 10 and Wednesday 11 November 2026.
  New submissions and cross-lists came from the “past week” listings of quant-ph,
  hep-th, math-ph, gr-qc, cond-mat (str-el, stat-mech, quant-gas, dis-nn), cs.CC,
  cs.IT, cs.DS, math.OA, math.SP, math.PR and math.FA, which gave 1,133 papers.
  Titles and abstracts came from the arXiv API.
- Each abstract was screened against all 191 entries for a claimed solution or
  substantive progress on the question an entry states. The screening was done in
  four parallel passes. Every candidate retained below was then opened on arXiv;
  its full text was read for scope, its AI-use disclosure and, where relevant,
  its Lean scope.
- New versions of papers already cited in the catalogue were also checked: the
  latest version of each of the 290 cited 2025–2026 arXiv identifiers was queried.
  The arXiv API index lags by about two days, so replacements of 11 November may
  be missed.

## Status changes

| ID | Before | After | Reason |
|---|---|---|---|
| O6 | Open | Improved | Yamanouchi–Shiraishi, [arXiv:2611.08974](https://arxiv.org/abs/2611.08974v1) |

Counts: 96 open, 62 improved, 23 claimed solved. None is marked solved.

## Updated entries

- **A11 (Aaronson–Ambainis, claimed solved).** Turturean's proof is now on arXiv
  ([arXiv:2611.09773](https://arxiv.org/abs/2611.09773v1), v1 of 6 November). The
  claimed-solution evidence now points to it, and its AI disclosure is recorded.
  Two independent preprints were added:
  - an exposition by Blanc, Docter, Strassle and Tan
    ([arXiv:2611.11626](https://arxiv.org/abs/2611.11626v1));
  - a seven-page proof via the completion framework by Huffstutler, Miloschewsky
    and Podder ([arXiv:2611.12795](https://arxiv.org/abs/2611.12795v1)). It
    reproves the special case of Turturean's certificate inequality that it uses.

  The status stays “Claimed solved”, since neither paper is a refereed assessment.
- **M5 (Haldane gap, claimed solved).** Sirui Lu
  ([arXiv:2611.11049](https://arxiv.org/abs/2611.11049v1)) reports an independent
  exact-arithmetic reproduction of all of OpenAI's finite certificates, and
  sharpens the bound to $\Delta_L>0.0729$ for every even $L\ge36$. The catalogue
  previously listed the missing reproduction of these certificates as the main
  caveat. Lu also gives a Lean 4 formalization whose remaining hypotheses are the
  short-ring trace totals ($5\le n\le12$), checked outside Lean. It is recorded
  as Lean evidence on a progress item, not as the “Lean verified” badge, because
  the formalization is not complete. The status stays “Claimed solved”, pending
  peer review.
- **O6 (coherent thermal conversion, now Improved).** For commensurate energy gaps,
  given the time-translation symmetry condition, the optimal catalyst-free
  asymptotic pure-to-pure rate under thermal operations is the minimum of the
  free-energy and energy-variance ratios. Single-shot, mixed-state and
  bounded-catalyst conversion stay open.
- **G6 (QFC).** Faulkner, [arXiv:2611.11920](https://arxiv.org/abs/2611.11920v1)
  (algebraic QNEC without the finite-null-energy assumption, plus a weight version)
  and [arXiv:2611.11760](https://arxiv.org/abs/2611.11760v1) (diagonal Rényi QNEC
  for every $p\ge2$, i.e. $\alpha\ge1$, for half-sided modular inclusions). These
  are QFT results, not the QFC, and G6 stays Open.
- **QG6 (gravitational entanglement witness).** Feng–Vedral,
  [arXiv:2611.12229](https://arxiv.org/abs/2611.12229v2): an exact dynamical
  distinction from passive stochastic local-phase classical-mediator models under
  dephasing. The model class is restricted and the witness is not entanglement,
  so QG6 stays Open.
- **F9 (indefinite causal order).** Cheng,
  [arXiv:2611.10615](https://arxiv.org/abs/2611.10615v1): no QC-CC circuit can
  exactly and deterministically simulate the quantum switch with finitely many calls.
- **B15 (kagome).** Zhang–Haegeman–He,
  [arXiv:2611.09881](https://arxiv.org/abs/2611.09881v1): variational infinite-PEPS
  evidence for a stable gapless spin liquid. This is numerical evidence, and B15
  stays Open.
- **QF5 (lattice chiral gauge theories).** Grabowska,
  [arXiv:2611.13886](https://arxiv.org/abs/2611.13886v1): a gauge-fixed
  boundary-of-slab Hamiltonian in which mirror fermions decouple for background
  gauge fields.
- **N15 (facets of local polytopes).** Chen–Hu–Tura v3
  ([arXiv:2511.07523v3](https://arxiv.org/abs/2511.07523v3), 9 November, retitled)
  proves that a nondegenerate local maximum of the quantum-to-classical ratio is a
  facet.

The AI-use disclosures of all the papers above are recorded in `provenance`.

## Candidates considered and not added

- Proposal PG2 (Rényi QNEC) is affected by Faulkner's arXiv:2611.11760, which
  covers non-integer $\alpha\ge1$ for diagonal half-sided variations. The proposal's
  assessment was left unchanged, pending the maintainer's decision.
- [arXiv:2611.09594](https://arxiv.org/abs/2611.09594) (C5/C1): magic-state
  environments giving positive private capacity with zero quantum capacity,
  superactivated by the Smith–Yard mechanism. These are new examples of a known
  mechanism, not a characterization.
- [arXiv:2611.10481](https://arxiv.org/abs/2611.10481) (N6/C6): deciding perfect
  normal spatial strategies is Σ⁰₂-complete. This is a hardness result, not a
  decidable restricted family.
- [arXiv:2611.12993](https://arxiv.org/abs/2611.12993) (E9): termination of the SDP
  hierarchy for the zero-error PPT entanglement cost of two qutrits. This is not the
  LOCC cost $E_C$.
- [arXiv:2611.12498](https://arxiv.org/abs/2611.12498) (M14?): cases of a
  shuffle-word-embedding conjecture; no link to the trace-exponential lower bound
  was established.
- [arXiv:2611.09321](https://arxiv.org/abs/2611.09321) (N12, steering),
  [arXiv:2611.11759](https://arxiv.org/abs/2611.11759) (exact quantum value of one
  game), [arXiv:2611.12600](https://arxiv.org/abs/2611.12600) (distributed QMA),
  [arXiv:2611.12746](https://arxiv.org/abs/2611.12746) (oracle barrier for A19),
  [arXiv:2611.14497](https://arxiv.org/abs/2611.14497) (excess charge in a density
  functional, not M1's Hamiltonian),
  [arXiv:2611.13981](https://arxiv.org/abs/2611.13981) (Mermin violation in
  commuting algebras, not N16's question),
  [arXiv:2611.13156](https://arxiv.org/abs/2611.13156) (A18 noise model),
  [arXiv:2611.14101](https://arxiv.org/abs/2611.14101) (t-J numerics),
  [arXiv:2611.11534](https://arxiv.org/abs/2611.11534) (conditional Yang–Mills
  bounds) and [arXiv:2611.08919](https://arxiv.org/abs/2611.08919) (query
  separations under permutation symmetry): topical, or outside the stated questions.
- Schraven–Warzel v3 (arXiv:2601.12165, B14 context): typo corrections only.

## Verification

Each added item was opened on its arXiv page, including the title, authors,
submission history and comments. The full texts were checked for scope, AI-use
disclosures and, for M5, the scope of the Lean formalization. No proof was audited,
no certificate was recomputed and no Lean build was rerun. Coverage is limited to
the categories and days listed above.
