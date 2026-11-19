# Separable states with the low-order moments of states of arbitrary Schmidt rank

For r ≥ 2, spacing m ≥ 1 and weights p_j > 0 summing to 1, the pure state |ψ⟩ = Σ_{j<r} √p_j |mj, mj⟩ has Schmidt rank r, while the separable mixture σ = Σ_{j<r} p_j |mj, mj⟩⟨mj, mj| has exactly the same quadrature moments of every degree below 2m, and the same mean photon number 2m Σ_j j p_j. With m = 2 the two states share their mean vectors, covariance matrices and third moments. With geometric weights p_j ∝ z^j the mean photon number stays below 2m z/(1−z) for every r, so for any degree d, any energy budget E > 0 and any r there is a Schmidt-rank-r state indistinguishable from a separable state by moments of degree at most d at mean photon number at most E. The moment ⟨a^m b^m⟩, of degree 2m, distinguishes the two states, so the condition 2m > d cannot be relaxed for this construction. At mean photon number E, the r-th eigenvalue of the reduced state of any pure state is at most E/(r(r−1)), so such a uniform obstruction necessarily involves small Schmidt coefficients.

## Public files

- [`manuscript/schmidt-number-separable-covariance.tex`](manuscript/schmidt-number-separable-covariance.tex) — canonical LaTeX source.
- [`manuscript/schmidt-number-separable-covariance.pdf`](manuscript/schmidt-number-separable-covariance.pdf) — compiled manuscript.
- [`checks/verify_moments.py`](checks/verify_moments.py) — builds truncation-free Fock matrices of the quadratures and compares every ordered quadrature word of length below 2m on |ψ⟩ and σ (m = 2 with r = 2, …, 6; m = 3, 4 with r = 2, …, 5), checks the distinguishing moment ⟨a^m b^m⟩, the failure of spacing 1 at second order, the Schmidt rank, the equal mean photon numbers, the uniform energy bound, and the eigenvalue bound on random pure states.
- [`data/verification.json`](data/verification.json) — generated verification record.

There is no input certificate: the states are generated from the formulas in the manuscript.

## Reproduce

Run from the repository root:

```text
python research/entries/schmidt-number-separable-covariance/checks/verify_moments.py
```

The checker requires NumPy. It uses a fixed seed, no network access, runs in under half a minute, rewrites `data/verification.json` and exits with a non-zero status on failure.

## Scope

**Analytic proof.** Equality of all quadrature moments of degree below 2m and of the mean photon numbers, the uniform energy bound and the resulting corollary for every degree d and energy E, the sharpness of the condition 2m > d for these states, and the bound λ_r ≤ E/(r(r−1)) on the reduced-state eigenvalues of pure states.

**Computational verification.** Floating-point evaluation of all quadrature words up to the stated degree on finitely many examples, with differences at rounding level, and random tests of the eigenvalue bound. This confirms the proofs on examples and is not a formal proof.

**Bibliographic priority.** The construction is elementary and no priority is claimed. It was not found in the works cited in the manuscript, which is the full extent of the documented search; similar observations may exist in the literature on moment-based entanglement criteria.

**Open.** Given an energy bound and a lower bound on the r-th Schmidt coefficient, which order of quadrature moments suffices to certify Schmidt number at least r? Whether a pure state of smaller Schmidt rank can share the low-order moments of |ψ⟩ was not examined.
