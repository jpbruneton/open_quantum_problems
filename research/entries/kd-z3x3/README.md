# An exact KD-positive state outside the pure-state hull for the Fourier pair on Z3 x Z3

For the position/Fourier pair on `Z3 x Z3`, the note gives an explicit positive-definite state with a strictly positive Kirkwood--Dirac array that lies outside the convex hull of all 54 pure KD-positive states. The separation and positivity claims are certified in exact arithmetic.

## Public files

- [`manuscript/kd-z3x3.tex`](manuscript/kd-z3x3.tex) — canonical LaTeX source.
- [`manuscript/kd-z3x3.pdf`](manuscript/kd-z3x3.pdf) — compiled manuscript.
- [`checks/verify_diagonal_certificate.py`](checks/verify_diagonal_certificate.py) — standard-library proof of positive definiteness by weighted diagonal dominance.
- [`checks/verify_z3_certificate.py`](checks/verify_z3_certificate.py) — independent standard-library reconstruction of the 54 pure arrays, exact positivity check, and separating-witness check.
- [`checks/verify_paper_data.py`](checks/verify_paper_data.py) — consistency check between the printed matrices, exact certificate, and stated bounds.
- [`checks/test_exact_certificate.py`](checks/test_exact_certificate.py) — mutation tests for the independent checker.
- [`data/z3x3-simple-certificate.json`](data/z3x3-simple-certificate.json) — exact state and witness data.
- `data/*verification.json` — generated records from the public checkers.

## Reproduce

Run from the repository root with a standard Python installation:

```text
python research/entries/kd-z3x3/checks/verify_diagonal_certificate.py
python research/entries/kd-z3x3/checks/verify_z3_certificate.py
python research/entries/kd-z3x3/checks/verify_paper_data.py
python -m unittest discover -s research/entries/kd-z3x3/checks -p test_exact_certificate.py -v
```

These checks use only the Python standard library.

## Scope

**Analytic proof.** The manuscript proves the separation (positivity by weighted diagonal dominance, the witness bound over the 54 pure states, the trace-norm gap) and the subgroup/quotient transfer theorem. The classification of the pure KD-positive states is taken from De Bièvre, Langrenez and Radchenko (Ann. Henri Poincaré 27, 2026, Theorem 3.1). The corollary for groups of order 2^a 3^b also uses their published examples for Z6 and Z2 × Z2, whose positivity they checked numerically.

**Computational verification.** The scripts independently check the finite exact certificate and its agreement with the printed data, in rational or cyclotomic arithmetic only.

**Bibliographic priority.** The construction (perturbing a state on a facet of the pure-state hull along its normal) is the one of De Bièvre–Langrenez–Radchenko, Section 7.2. Published separations for Fourier pairs concern Z6 and Z2^n (De Bièvre–Langrenez–Radchenko; Thio et al., PRL 137, 080601, 2026). A search of the citing literature and of the web on 19 November 2026 found no earlier treatment of Z3 × Z3. The new elements are the exact certificate for this group, the quantitative transfer to groups with a Z3² subquotient, and the resulting classification for orders 2^a 3^b, which is consistent with the necessity part of Spriet's conjecture (J. Fourier Anal. Appl. 32, 99, 2026).
