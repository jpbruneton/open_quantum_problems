# Literature update — 14 November 2026: quantum query complexity beyond n/2

This targeted update follows the [12 November update](2026-11-12-literature-update.md).
It adds one entry, prompted by Google Research's blog post of 13 November 2026,
[“Advancing science and engineering with Antigravity's /teamwork feature”](https://research.google/blog/advancing-science-engineering-with-antigravitys-teamwork-feature/).

Before starting, `origin/main` was fetched; the local copy was two commits behind
and was pulled. There were no open pull requests or issues.

## Method

- Every result announced in the blog post was listed and screened for relevance to
  the catalogue. Only one is a quantum open problem: Deng, Hao, Lin, Liu, Mirrokni,
  Shao and Woodruff, [arXiv:2611.09809](https://arxiv.org/abs/2611.09809v1)
  (v1, 6 November 2026).
- The paper's full text was read, including its AI-methodology statement. The
  question's origin was checked against Aaronson's
  [2014 list](https://scottaaronson.blog/?p=1792) (question 5, credited to Shelby Kimmel).
- The Lean package linked from the paper (`qgap_cuberoot.zip`, on Google Drive) was
  downloaded, and its README and `QGap/Headline.lean` were read. The build was not rerun.
- The catalogue had no entry for this question. The closest entries are A11
  (Aaronson–Ambainis) and A23 (triangle finding).

The paper was announced on 9 November and so fell within the window of the
12 November review. That review screened only for progress on existing entries,
so it did not look for new questions. There is no gap in arXiv coverage between
the 8 November review, which covered submissions to 5 November, and the 12 November
review.

## New entry

| ID | Status | Source |
|---|---|---|
| A34 Quantum query complexity beyond n/2 | Claimed solved, Lean verified | [arXiv:2611.09809](https://arxiv.org/abs/2611.09809v1) |

- **What the paper claims.** The symmetric function $\mathrm{PARITY}(x)\oplus\mathbf 1[|x|\ge m]$
  on $2m$ bits needs $m+1$ queries at every fixed error below $1/2$ (Theorem 1.3). An
  explicit symmetric family needs $n/2+\Omega(n^{1/3})$ queries (Theorem 1.2). A
  matching algorithm computes the Hamming weight, and hence every symmetric function,
  with $n/2+O(n^{1/3})$ queries (Theorem 1.1).
- **Lean badge.** The package formalizes all the lower bounds (Theorems 1.2–1.4,
  lower half, and Section 5) in two operational query models. Its trusted
  specification file imports only Mathlib. The README states that the headline theorems use only the standard
  axioms. The lower bounds answer the question as stated, so the entry's full
  claimed solution is formalized according to the authors. The upper bound
  (Theorem 1.1) is outside the package and is not part of the question.
- **Status.** A single unrefereed preprint: “Claimed solved”, not “Solved”.
- **Residual.** For non-symmetric functions it remains open whether some single-bit
  function needs $n/2+\Omega(\sqrt n)$ queries, or whether van Dam's bound improves to
  $n/2+o(\sqrt n)$.
- **Provenance.** The authors report that OpenAI's GPT 6 Astra Ultra found the upper
  bound. Google's Stellar Colosseum produced the lower bound, its Lean formalization
  and a simpler hard function. The authors state that they rewrote the analysis themselves.

Counts: 96 open, 62 improved, 24 claimed solved (182 active entries). None is marked solved.

## Other results in the blog post (out of scope)

- Proof of the Courtade–Kumar conjecture ([arXiv:2609.24931](https://arxiv.org/abs/2609.24931v2)),
  formalized in Lean. This is classical information theory, so it is out of scope.
- Classical algorithms and complexity: combinatorial Boolean matrix multiplication,
  stacked sparse sketches, cut sparsification, adaptive data analysis, Steiner spanners,
  online inverse optimization, Tarjan's deque conjecture, integer multiplication.
- LEAP formalizations of known proofs (Weil conjectures, Navier–Stokes blowup with
  forcing, Bochner–Riesz in 3D and others), and results in statistics and chemistry.
- The post also mentions quantum-algorithm results from an earlier Gemini 4 post
  without details. They were not checked here.
