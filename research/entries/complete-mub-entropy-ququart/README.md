# The five mutually unbiased bases of a ququart: the sum of their Shannon entropies is at least seven bits

For every state of C^4 and every complete set of five mutually unbiased bases, the sum of the five Shannon entropies of the measurement outcomes is at least 7 bits. Equality holds for exactly forty pure states. In the two-qubit Pauli realization they are the stabilizer states whose stabilizer group contains one operator from each of three different classes of commuting Pauli operators; each gives the distribution (1/2, 1/2, 0, 0) in three bases and the uniform distribution in the other two. The value 7 had been found by numerical minimization (Riccardi, Macchiavello and Maccone, Phys. Rev. A 95, 032109, 2017); the best bound proved before was 2 + 3 log2 3 ≈ 6.755 (Sánchez-Ruiz). The note also proves the non-tight bound 10.2205 bits for the six mutually unbiased bases of C^5, above the classical 6 log2 3 ≈ 9.510 and below the numerical value 10.2524.

Addition of 27 November 2026 (manuscript subsection "Two-component states and local minimality"): in dimension five, the numerical value V_5 = 6 + 5 h((5+√5)/10) ≈ 10.2524 is proved to be the exact minimum over all states supported on two vectors of one of the six bases. Equality holds for 300 pure states, and these are strict local minima among all density matrices: S(ρ) − V_5 ≥ t log2(1/t) − 48t with t = 1 − Tr(Pρ). A state below V_5, if one exists, therefore has at least three nonzero components in each of the six bases. Both proofs are analytic.

The proof of the main theorems is computer-assisted. It compares the Shannon entropy H with an explicit quartic symmetric polynomial F and certifies (A) H(p) ≥ F(p) on the probability simplex and (B) Σ_j F(p_j) ≥ 7 on pure states. In dimension five, (B) is replaced by an exact Hermitian sum-of-squares certificate.

## Public files

- [`manuscript/complete-mub-entropy-ququart.tex`](manuscript/complete-mub-entropy-ququart.tex) — canonical LaTeX source.
- [`manuscript/complete-mub-entropy-ququart.pdf`](manuscript/complete-mub-entropy-ququart.pdf) — compiled manuscript (built by the repository workflow).

Dimension four (Theorem 1, Sections 3–5 of the manuscript):

- [`checks/common.py`](checks/common.py) — exact projectors of the Pauli realization, coefficients of F, construction of the degree-8 polynomial g of inequality (B).
- [`checks/ia.py`](checks/ia.py) — vectorized interval arithmetic with outward rounding.
- [`checks/minimizers.py`](checks/minimizers.py) — the forty states of sum 7 and the twenty basis states of sum 8, in exact arithmetic; writes `data/minimizers.json`.
- [`checks/symmetries.py`](checks/symmetries.py) — exact check that the permutations, diagonal phases and complex conjugation preserve the set of twenty projectors; writes `data/symmetries.json`.
- [`checks/prove_A.py`](checks/prove_A.py) — inequality (A): local lemmas at the equality points and branch-and-bound on simplices, with every proved simplex re-checked in ball arithmetic; writes `data/A_certificate.json`.
- [`checks/prove_B.py`](checks/prove_B.py) — inequality (B): exact local lemmas at the 28 chart points of the minimizers and branch-and-bound on boxes; writes `data/B_certificate.json` and the leaves `data/B_leaves.npz`.
- [`checks/replay_B_exact.py`](checks/replay_B_exact.py) — independent exact re-verification of every leaf in rational arithmetic; writes `data/B_replay.json`.
- [`checks/coverage_B_exact.py`](checks/coverage_B_exact.py) — independent exact reconstruction of the bisection tree, checking that the leaves, the boxes outside the domain and the local balls cover the domain; writes `data/B_coverage.json`.

Dimension five (Theorem 2, Section 6):

- [`checks/params5.py`](checks/params5.py) — coefficients of the degree-5 comparison function, target value V_B = 20447/2000, lift degree 18, tolerance η = 1/2000.
- [`checks/gram5.py`](checks/gram5.py) — exact rational Gram matrices of the Hermitian forms.
- [`checks/check_gram5.py`](checks/check_gram5.py) — consistency checks of the bases and of the Gram forms against a direct computation; writes `data/gram5_checks.json`.
- [`checks/cert_B5.py`](checks/cert_B5.py) — step (B): exact integer proof that each Gram block is positive semidefinite; writes `data/B5_certificate.json`, or `data/B5_negative_test.json` when called with a larger target.
- [`checks/cert_A5.py`](checks/cert_A5.py) — step (A): H ≥ F − η on the ordered region of the 5-outcome simplex; writes `data/A5_certificate.json`.
- [`checks/two_sparse.py`](checks/two_sparse.py) — numerical cross-check of the two-component theorem and of the local bound (the 300 rays, their value, the spectrum of the zero-outcome operator, the alignment of the gradient, 2000 random two-component states); writes `data/two_sparse.json`. The proofs do not rely on it.

## Reproduce

Run from the repository root, in this order (prove_B.py reads `minimizers.json`; the replay and coverage checks read the leaves written by prove_B.py):

```text
python research/entries/complete-mub-entropy-ququart/checks/minimizers.py
python research/entries/complete-mub-entropy-ququart/checks/symmetries.py
python research/entries/complete-mub-entropy-ququart/checks/prove_A.py
python research/entries/complete-mub-entropy-ququart/checks/prove_B.py
python research/entries/complete-mub-entropy-ququart/checks/coverage_B_exact.py
python research/entries/complete-mub-entropy-ququart/checks/replay_B_exact.py

python research/entries/complete-mub-entropy-ququart/checks/check_gram5.py
python research/entries/complete-mub-entropy-ququart/checks/cert_B5.py
python research/entries/complete-mub-entropy-ququart/checks/cert_B5.py 10.23
python research/entries/complete-mub-entropy-ququart/checks/cert_A5.py
python research/entries/complete-mub-entropy-ququart/checks/two_sparse.py
```

Dependencies: Python 3, `numpy`, `scipy`, `sympy` and `python-flint` (tested with numpy 2.5.3 and python-flint 0.9.0). Indicative times on four cores: prove_A 7 s, prove_B 1 min, coverage 40 s, exact replay 15–30 min; check_gram5 and cert_B5 about 6 min each; cert_A5 about 12 min. The negative test (`cert_B5.py 10.23`) must report `ok = False`.

## Scope

**Analytic proof.** Concavity reduces the problem to pure states and shows that the minimizers are pure; the classification of Brierley, Weigert and Bengtsson (all complete sets of mutually unbiased bases of C^4 and of C^5 are equivalent) extends the results from one complete set to all of them; the two-step comparison H ≥ F, Σ_j F ≥ 7; the reduction of (B) to a fundamental domain by symmetries; the local lemmas (structure and inequalities); the simplex bound for (A); in dimension five, the rationality of the Gram matrices and the "L̃L̃ᵀ + τI + E" positivity argument.

**Computational verification.** Exact rational arithmetic: values at the minimizers, symmetries, local lemmas at the 28 chart points (exact LDLᵀ factorizations), every leaf of the branch-and-bound for (B) and the coverage of its tree. Ball arithmetic (arb, 128 bits): vertex values of every proved simplex for (A) in both dimensions. Outward-rounded interval arithmetic: Hessian enclosures in the simplex searches. Exact integer arithmetic: the five Gram blocks of size 1463 in dimension five. The coefficients of the comparison functions were found by semidefinite programming and cutting planes in the private workspace; the proof uses only the stored rational values.

**What is not proved.** The exact minimum in dimension five (numerically 6 + 5 h((5+√5)/10) ≈ 10.2524) and its minimizers. Since 27 November 2026 this value is proved only for states supported on two vectors of one basis and as a strict local minimum; the explicit radius 2^−48 of the local bound is far from optimal.

**Bibliographic priority.** The value 7 and its minimizing states for d = 4 were obtained numerically by Riccardi, Macchiavello and Maccone (2017) and tested experimentally by Serino et al. (arXiv:2507.05025); the review of Chesi and Maccone (arXiv:2604.09384, 2026) still lists both the d = 4 and d = 5 values as numerical. The best earlier proved bounds are those of Ivanović and Sánchez-Ruiz, as stated in the reviews of Wehner–Winter and Coles–Berta–Tomamichel–Wehner. The common eigenstates attached to triples of Pauli classes, which are the minimizers here, were studied by Mandayam, Bandyopadhyay, Grassl and Wootters for collision entropy and three bases. A search made on 22 and 23 November 2026 of the literature (twenty-seven papers read in full, seventeen of them cited in the manuscript), of arXiv and of the public repository `the-omega-institute/trureturing` found no earlier proof. Citation indexes could not be reached from the session, so the papers citing Riccardi et al. were not all examined. For the addition of 27 November 2026, searches of arXiv and of `the-omega-institute/trureturing` (arXiv:1701.04304, mutually unbiased bases with entropy in dimension five) found no earlier proof of the two-component minimum or of the local minimality. The result has not been independently refereed.
