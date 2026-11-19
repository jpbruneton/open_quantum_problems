# Exact PPT distillation from the Zhu–Wang qutrit support

Zhu and Wang (arXiv:2608.12135) gave a rank-three support `P` on two qutrits for which the rate of exact entanglement distillation under positive-partial-transpose (PPT) operations lies strictly below the min-Rains relative entropy. They bounded the rate from above but did not evaluate the one-copy semidefinite program `W₀(P) = min{‖E^Γ‖∞ : P ≤ E ≤ 1}`. The note proves `W₀(P) = √177/(7+√177) = (177 − 7√177)/128 ≈ 0.65524`, with an explicit optimal effect, by reducing the problem with a phase symmetry of `P` to six real parameters. Combined with the witness bound of Zhu and Wang, it follows that the largest exact maximally entangled output from `n` copies of any state supported on `P` has dimension 1, 2, 3 and 5 for `n = 1, 2, 3, 4`, and that the asymptotic rate lies in `[log₂(1 + 7/√177), log₂(391/250)) ≈ [0.6099, 0.6452)`.

## Public files

- [`manuscript/exact-ppt-distillation-qutrit.tex`](manuscript/exact-ppt-distillation-qutrit.tex) — canonical LaTeX source.
- [`manuscript/exact-ppt-distillation-qutrit.pdf`](manuscript/exact-ppt-distillation-qutrit.pdf) — compiled manuscript.
- [`checks/verify_ppt_distillation.py`](checks/verify_ppt_distillation.py) — builds `P` and the optimal effect exactly in SymPy, checks the block data, feasibility and the spectrum of the partial transpose exactly; tests the lower bound numerically with random feasible effects, a multistart minimisation over the symmetric family and a dual witness; and checks the integer output dimensions with rational bounds.
- [`data/verification.json`](data/verification.json) — generated verification record.

There is no input certificate: the support is given by rational data in the manuscript and is rebuilt by the checker.

## Reproduce

Run from the repository root:

```text
python research/entries/exact-ppt-distillation-qutrit/checks/verify_ppt_distillation.py
```

The checker requires NumPy, SciPy and SymPy. It uses a fixed seed and no network access, runs in about 20 seconds, and rewrites `data/verification.json`.

## Scope

**Analytic proof.** The manuscript proves the exact value of `W₀(P)`, the optimal effect, the lower bound `(1 + 7/√177)ⁿ ≤ W₀(P^{⊗n})⁻¹` for all `n`, and, using the certified inequality `‖T^Γ‖₁ < 391/250` of Zhu and Wang (taken from their paper, not re-derived), the output dimensions for `n ≤ 4` and the rate interval.

**Computational verification.** The block data, feasibility, spectrum of the optimal partial transpose and integer bounds are checked exactly. The lower bound on `W₀(P)` is additionally tested in floating point; these tests support but do not replace the proof. The dual witness of Remark 3 is evaluated numerically only.

**Bibliographic priority.** The exact one-copy value, the optimal effect and the values of `M₁, …, M₄` were not found in the source paper or in the other cited works. This is a documented, targeted search, not a certification of priority.

**Open.** Multiplicativity of `W₀` on this support, the value `M₅ ∈ {8, 9}`, and the exact asymptotic rate.
