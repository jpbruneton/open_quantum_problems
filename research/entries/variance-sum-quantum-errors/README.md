# The variance of a sum of independent quantum errors

Lacalle and Pozo Coronado model a quantum computing error as a random pure state on the unit sphere around the error-free state, measure it by the variance `V = E‖X − P‖²`, and conjecture that two independent errors combine as `V₁₂ = V₁ + V₂ − V₁V₂/2`, a rule they prove for isotropic errors and state as a theorem on the circle. The note shows that the rule is equivalent to multiplicativity of the mean overlap `m = 1 − V/2` and that it turns on centring, that is, on whether the Euclidean mean of each error points along the error-free state. For centred errors, isotropic or not, the rule holds for any number of independent errors in both natural definitions of the sum (gate model and transport model), and an exact identity gives the correction term `−2⟨w₂, u₁⟩` in general. Without centring it fails: two independent errors on the circle with density `(1 + sin θ)/(2π)`, a member of the family used in the source's own proof, give `V₁₂ = 5/2` instead of `2`, so the source's Theorem 3 is false as stated; two over-rotations `R_x(2π/3)` of a qubit give `3` instead of `3/2`. The same argument proves the companion fidelity formula of Lacalle, Pozo Coronado and Martín-Cuevas in the transport model when the second error has an isotropic second moment.

## Public files

- [`manuscript/variance-sum-quantum-errors.tex`](manuscript/variance-sum-quantum-errors.tex) — canonical LaTeX source.
- [`manuscript/variance-sum-quantum-errors.pdf`](manuscript/variance-sum-quantum-errors.pdf) — compiled manuscript.
- [`checks/check_variance_formula.py`](checks/check_variance_formula.py) — recomputes the counterexamples and the source's seven-sphere example in exact arithmetic, runs a Monte Carlo test of that example, and tests the identity, the centred case and the fidelity remark on random finite ensembles.
- [`data/verification.json`](data/verification.json) — generated verification record.

There is no input certificate: every distribution is constructed by the checker from the formulas in the manuscript.

## Reproduce

Run from the repository root:

```text
python research/entries/variance-sum-quantum-errors/checks/check_variance_formula.py
```

The checker requires NumPy, SciPy and SymPy. It uses fixed seeds, no network access, runs in about ten seconds, rewrites `data/verification.json`, and exits with a non-zero status if a check fails.

## Scope

**Analytic proof.** The manuscript proves the identity `V₁₂ = V₁ + V₂ − V₁V₂/2 − 2⟨w₂, u₁⟩` in the gate model, the rule for a centred second error in the transport model with any section, the product formula for `k` mutually independent centred errors in both models, the three exact counterexamples, and the fidelity formula in the transport model under an isotropic second moment.

**Computational verification.** The checker recomputes the counterexamples and the seven-sphere example symbolically and tests the general statements in floating point on finite random ensembles in dimensions 2, 4 and 8. It is not a formal proof.

**Bibliographic priority.** The works citing the source were listed (Semantic Scholar, OpenAlex) and read; none proves, refutes or corrects the conjecture, and its authors still call it conjectural in 2026. The underlying mechanism is classical: on the circle it is the multiplicativity of the first trigonometric moment of a sum of independent angles, and in general the multiplicativity `E[R₂R₁] = E[R₂]E[R₁]` of mean operators of independent random isometries. The note claims priority only for applying it to this conjecture, for identifying centring as the relevant hypothesis, for the exact correction term and for the counterexamples, within the limits of the documented search. The accumulation of coherent errors behind the over-rotation counterexample is the phenomenon studied by Kueng et al. (2016) and Carignan-Dugas, Wallman and Emerson (2019).

**Open.** The “quantum variance” `V_q`, which is insensitive to the global phase and not a function of the mean, and the fidelity formula in the gate model. For the latter, a draft posted and withdrawn on 28 October 2026 (https://github.com/the-omega-institute/trureturing/issues/23079) proposes centred one-qubit counterexamples with a non-isotropic second moment; it has not been verified here.
