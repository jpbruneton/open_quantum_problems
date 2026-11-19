# The root-fidelity matrix bounds the Holevo quantity of any three qubit states

Fannes, de Melo, Roga and Życzkowski conjectured that the Holevo quantity χ of three quantum states with probabilities pᵢ is at most the entropy of the 3×3 matrix with entries √(pᵢpⱼ)·√Fᵢⱼ, where Fᵢⱼ is the Uhlmann fidelity. The note proves the conjecture for any three qubit states, pure or mixed, with arbitrary probabilities. It does so through a stronger bound valid for any number K of qubit states: χ ≤ h((1 + √(1 − 4e₂))/2) with e₂ = Σ_{i<j} pᵢpⱼ(1 − Fᵢⱼ), with equality exactly when all states are pure or all are equal. It also shows that the conjecture holds in any dimension whenever the three states are the image of a pure triple with the same fidelities under a positive trace-preserving map; for qubits such a map exists but is not completely positive. The conjecture remains open for dimension d ≥ 3.

## Public files

- [`manuscript/fidelity-matrix-holevo-bound.tex`](manuscript/fidelity-matrix-holevo-bound.tex) — canonical LaTeX source.
- [`manuscript/fidelity-matrix-holevo-bound.pdf`](manuscript/fidelity-matrix-holevo-bound.pdf) — compiled manuscript.
- [`checks/check_fidelity_holevo.py`](checks/check_fidelity_holevo.py) — checks the two entropy lemmas, the qubit fidelity formula, the inequalities χ ≤ f(e₂) ≤ S(C) on random and adversarial qubit ensembles, the positive but not completely positive map of the sufficient criterion, and runs a reduced fixed-seed search for counterexamples in dimensions 3, 4 and 5.
- [`data/verification.json`](data/verification.json) — generated verification record.

There is no input certificate: the checker generates every ensemble from a fixed seed.

## Reproduce

Run from the repository root:

```text
python research/entries/fidelity-matrix-holevo-bound/checks/check_fidelity_holevo.py
```

The checker requires NumPy and SciPy. It uses a fixed seed, no GPU and no network access, runs in under a minute, rewrites `data/verification.json`, and exits with a non-zero status if a check fails.

## Scope

**Analytic proof.** The integral formula for the entropy of a 3×3 state in terms of its invariants, the concavity and convexity properties of the qubit entropy, the bound χ ≤ f(e₂) for any number of qubit states with its equality case, the conjecture for three qubit states, and the sufficient criterion in any dimension. The criterion relies on the published monotonicity of relative entropy under positive trace-preserving maps (Müller-Hermes and Reeb, 2017).

**Computational verification.** The checker tests these statements in floating-point arithmetic. For d = 3, 4, 5 it finds no counterexample on random ensembles and in short fixed-seed maximisations. A longer gradient search with 40-digit re-evaluation, described in the manuscript, was run during preparation and is not part of this bundle. Numerical searches are local and are not evidence for the general case.

**Bibliographic priority.** The qubit theorem and the three-qubit case of the conjecture were not found in a documented search of the source, Roga's thesis, the cocycle result of Zhang, Wu and Fei, and the works citing the source. This does not certify priority.

**Open.** The conjecture in dimension d ≥ 3, and whether every triple of states is the image of a pure triple with the same fidelities under a positive trace-preserving map.
