# Kirkwood–Dirac positive states of finite abelian Fourier pairs

For the position/Fourier pair of a finite abelian group `G`, every Kirkwood–Dirac (KD) positive state is a mixture of pure KD-positive states if and only if `G` is cyclic of prime-power order. The "if" part is a theorem of De Bièvre, Langrenez and Radchenko. The note proves the "only if" part: subgroup and quotient embeddings preserve the trace-norm distance to the pure-state hull, which reduces the question to `Zp x Zq` with `p`, `q` prime, and every such group carries a KD-positive state outside the hull, detected by a CHSH-type witness. For `Z3 x Z3` the note gives a fully explicit state certified in rational arithmetic, at trace-norm distance at least 111/20000 from the hull.

The slug `kd-z3x3` is kept from the first version (17 November 2026), which contained the `Z3 x Z3` certificate, the transfer theorem and the classification for groups of order 2^a 3^b. The version of 23 November 2026 adds the `Zp x Zq` theorem and the full classification.

## Public files

- [`manuscript/kd-z3x3.tex`](manuscript/kd-z3x3.tex) — canonical LaTeX source.
- [`manuscript/kd-z3x3.pdf`](manuscript/kd-z3x3.pdf) — compiled manuscript.

`Z3 x Z3` (exact certificate, Section 5 of the manuscript), standard library only:

- [`checks/verify_diagonal_certificate.py`](checks/verify_diagonal_certificate.py) — proof of positive definiteness by weighted diagonal dominance.
- [`checks/verify_z3_certificate.py`](checks/verify_z3_certificate.py) — independent reconstruction of the 54 pure arrays, exact positivity check, and separating-witness check.
- [`checks/verify_paper_data.py`](checks/verify_paper_data.py) — consistency check between the printed matrices, exact certificate, and stated bounds.
- [`checks/test_exact_certificate.py`](checks/test_exact_certificate.py) — mutation tests for the independent checker.
- [`data/z3x3-simple-certificate.json`](data/z3x3-simple-certificate.json) — exact state and witness data.
- `data/diagonal-verification.json`, `data/paper-data-verification.json`, `data/z3x3-independent-verification.json` — generated records.

`Zp x Zq` (CHSH witness, Section 4 of the manuscript):

- [`checks/chsh_common.py`](checks/chsh_common.py) — shared routines: witness functions, enumeration of the pure KD-positive states, ball-arithmetic positivity test.
- [`checks/certify_kappa.py`](checks/certify_kappa.py) — rigorous upper bounds on the constants κ₃ and κ₅ of the case analysis; writes `data/kappa-bounds.json`.
- [`checks/check_chsh_analytic.py`](checks/check_chsh_analytic.py) — exact checks of the `Z2 x Z2` proposition, of the rational inequalities of the case table, and of the nonnegativity of the witness on all pure KD-positive states for thirteen pairs; writes `data/chsh-analytic-checks.json`.
- [`checks/certify_chsh_states.py`](checks/certify_chsh_states.py) — certificates for the six pairs (3,5), (3,7), (3,11), (3,13), (3,17), (5,5); writes `data/chsh-certificate-<p>-<q>.json`.
- `data/chsh-state-<p>-<q>.json` — exact rational weights of the six states (input certificates).

## Reproduce

Run from the repository root:

```text
python research/entries/kd-z3x3/checks/verify_diagonal_certificate.py
python research/entries/kd-z3x3/checks/verify_z3_certificate.py
python research/entries/kd-z3x3/checks/verify_paper_data.py
python -m unittest discover -s research/entries/kd-z3x3/checks -p test_exact_certificate.py -v
python research/entries/kd-z3x3/checks/certify_kappa.py
python research/entries/kd-z3x3/checks/check_chsh_analytic.py
python research/entries/kd-z3x3/checks/certify_chsh_states.py
```

The first four commands use only the Python standard library. The last three need `python-flint` (Arb ball arithmetic; tested with 0.9.0), `numpy` and `sympy` (tested with 1.14); `check_chsh_analytic.py` reads the record written by `certify_kappa.py`.

## Scope

**Analytic proof.** The manuscript proves the transfer theorem, the properties of the CHSH witness for all primes (zero-mean observables, a character-sum identity for `Zp x Zp`), the two eigenvalue bounds (Tsirelson's bound and a sharper bound from a two-dimensional block decomposition), the `Z2 x Z2` case, and the `Z3 x Z3` separation with its trace-norm gap. The classification of the pure KD-positive states and the equality for cyclic groups of prime-power order are taken from De Bièvre, Langrenez and Radchenko (Ann. Henri Poincaré 27, 2026, Theorems 3.1 and 6.1).

**Computational verification.** Three steps are computer-assisted. The bounds κ₃ ≤ 1.25642 and κ₅ ≤ 1.28772 are certified on a grid of 4000 angles in ball arithmetic with a Lipschitz bound between grid points. For six pairs `(p, q)` the separated state is given by rational weights; its KD array, its witness value and the witness values on all pure KD-positive states are checked in exact rational arithmetic, and its positive definiteness in ball arithmetic. The `Z3 x Z3` arithmetic is checked in rational or cyclotomic arithmetic only. The six states were found by semidefinite programming in the private workspace; the proof uses only the stored weights.

**Bibliographic priority.** Published results before this note: equality for the discrete Fourier transform in prime dimension (Langrenez, Arvidsson-Shukur, De Bièvre 2024), in dimension p² (Yang et al. 2024) and for all cyclic groups of prime-power order (De Bièvre, Langrenez, Radchenko 2026); separated states for `Z6` and `Z2 x Z2` (same paper, positivity checked numerically) and for `Z2^n` (Thio et al., PRL 137, 080601, 2026). Yang et al. conjectured the equality for every dimension; Burkat and Strelchuk (Phys. Rev. A 114, 042446, 2026, Appendix D) record the case `d = pq ≠ 6` as open, and Spriet (J. Fourier Anal. Appl. 32, 99, 2026) writes that total ordering of the compact open subgroups "might also be necessary". A search made on 23 November 2026 of the literature citing De Bièvre–Langrenez–Radchenko (all entries of the Google Scholar list supplied by the maintainer), of arXiv, and of the public repository `the-omega-institute/trureturing` found no earlier proof of the `Zp x Zq` theorem or of the classification. The doctoral theses of J. Thio (Cambridge, 2026) and C. Langrenez (Lille, 2025) were searched by keyword and read in their relevant chapters, not in full; they do not contain the result and are not cited. The new elements are the transfer theorem with exact distances, the CHSH witness and the `Zp x Zq` theorem, the exact `Z3 x Z3` certificate, and the resulting classification. The result has not been independently refereed.
