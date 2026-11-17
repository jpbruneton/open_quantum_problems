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

The manuscript contains the analytic argument. The scripts independently check the finite exact certificate and its agreement with the printed data. The accompanying literature audit is maintained in the working archive; mathematical verification does not by itself establish historical priority.
