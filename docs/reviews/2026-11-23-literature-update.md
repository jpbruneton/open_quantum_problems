# Status update — 23 November 2026

Scope: entries N20, O12 and F17, which become "Claimed solved". The maintainer asked for these three changes. No other entry is touched and no review date other than theirs is reset.

External contributions: on 23 November 2026 `origin/main` had no unseen commit and the issue list was empty. One pull request was open, #10 (reordering of the New Research page, from another session of this project); it is not an external contribution and is left to its own thread.

## N20 · Fourier Kirkwood–Dirac positivity on finite abelian groups

Status: Improved → Claimed solved. The claim is ours: the research note `research/entries/kd-z3x3`, enlarged on 23 November 2026 from its first version of 17 November (which treated Z₃ × Z₃ and groups of order 2ᵃ3ᵇ), states that KD-positive states are mixtures of pure KD-positive states exactly for cyclic groups of prime-power order. Because the catalogue cites its own note, the entry says so explicitly, carries an AI-use disclosure in `provenance`, and keeps the status "Claimed solved": nobody outside the project has assessed the proof.

What was checked for this update:

- The proof was rederived step by step in the review of 23 November (private repository, `docs/research/N20`), and the public checkers were rerun from the entry directory: `certify_kappa.py`, `check_chsh_analytic.py` and `certify_chsh_states.py` all pass, as do the four existing Z₃ × Z₃ checkers.
- Prior art. Every entry of the Google Scholar list of works citing De Bièvre–Langrenez–Radchenko (supplied by the maintainer) was examined: the articles were read in full in their arXiv versions, and the two doctoral theses (Thio, Cambridge 2026; Langrenez, Lille 2025) were read in their relevant chapters and searched by keyword, not in full. None contains the Z_p × Z_q theorem or the classification. arXiv listings and the public repository `the-omega-institute/trureturing` were searched as well. The per-reference record is in the private repository (`docs/research/N20/lecture.md`).
- Two further papers were read in full on 23 November so that the note can cite them: Langrenez, Arvidsson-Shukur and De Bièvre, arXiv:2306.00086v1 (35 pages), and Yang, Yao, Geng, Wang and Chen, arXiv:2404.09399v2 (26 pages). Journal versions were not compared with the arXiv versions.

Not done: the compiled PDF of the note was not rebuilt in the session that wrote this report (no LaTeX installation was available); see the pull request. Xu (J. Math. Phys. 66, 102104), already cited in the entry by an earlier update, was not reread and is not cited in the note.

## O12 · Triplet reduction for the Markovian Mpemba effect

Status: Open → Claimed solved (conjecture refuted). Source of the claim: `the-omega-institute/trureturing`, issue #17871 and pull request #17892 (merged 16 October 2026), both read in full. The four-level counterexample was recomputed independently in exact rational arithmetic, with eigenvalues to 120 digits (private repository, `docs/research/O12/checks`): positive rates, slow mode, violation of the three-level conditions by all four triplets in both branches, and an interior maximum of the slow-mode overlap on the hot side.

Limits: the result exists only on GitHub (no article or preprint was found); the Lean file of the pull request could not be read from the session, so the entry carries no "Lean verified" badge; the supplement of the source paper (arXiv:2603.04567v1) was not read.

## F17 · Extremality of Fock-bounded beam-splitter states

Status: Open → Claimed solved (negative answer). Source of the claim: `the-omega-institute/trureturing`, issue #14447 (8 October 2026) and pull request #14609 (closed 9 October 2026), both read in full. The witness was recomputed independently at a = 1/2 in exact symbolic arithmetic, and the beam-splitter state by a separate numerical computation (private repository, `docs/research/F17/checks`).

Limits: GitHub only, no article or preprint found; the Lean file could not be read, so no "Lean verified" badge; the pull request itself flags two non-formalized reading steps (parity convention; passage from the finite-support midpoint to the full Wigner-positive set), both elementary; the full text of the source paper (arXiv:2512.14831v3) was not reread for this update.

## Counts

Active entries: 227 (unchanged). Open 97, Improved 97, Claimed solved 33, Solved 0.
