# Local discrimination of maximally entangled two-qubit states

Two parties share one of `k` equally likely maximally entangled two-qubit states and must guess which one. Such states correspond to lines in R⁴; let Θ be the angular radius of the smallest cone of lines containing the family. The note proves that the optimal success probability over all separable measurements, equivalently over all positive-partial-transpose measurements, is `(1 + sin 2Θ)/k` for Θ ≤ π/4 and `2/k` otherwise. It gives a separate exact formula for protocols with a single classical message, proves that one message attains the separable optimum for every family of at most three states, and exhibits four states on a tetrahedron for which it does not. For the five equiangular states of Wei, Cobucci and Tavakoli, one bit reaches exactly 2/5.

## Public files

- [`manuscript/local-discrimination-entangled-qubits.tex`](manuscript/local-discrimination-entangled-qubits.tex) — canonical LaTeX source.
- [`manuscript/local-discrimination-entangled-qubits.pdf`](manuscript/local-discrimination-entangled-qubits.pdf) — compiled manuscript.
- [`checks/verify_discrimination.py`](checks/verify_discrimination.py) — builds the optimal separable and one-message measurements as 4×4 matrices and checks positivity, positive partial transposes, completeness, success probabilities and the operator-norm bound certificate on the named and random families.
- [`data/verification.json`](data/verification.json) — generated verification record.

There is no input certificate: the checker constructs every family from the formulas in the manuscript.

## Reproduce

Run from the repository root:

```text
python research/entries/local-discrimination-entangled-qubits/checks/verify_discrimination.py
```

The checker requires NumPy and SciPy. It uses a fixed seed, no GPU and no network access, runs in under a minute, and rewrites `data/verification.json`.

## Scope

**Analytic proof.** The manuscript proves the one-message formula, the separable optimum, the criterion for their equality, the equality for at most three states, the strict gap for the tetrahedral family, and the value D/k for tight frames of maximally entangled states in any dimension.

**Computational verification.** The checker tests these statements in floating-point arithmetic on pairs of states, the Bell states, three states with equal overlaps, the tetrahedral family, the five-state simplex, and sixty random families of two to six states. It is not a proof assistant formalization. A semidefinite-programming comparison over positive-partial-transpose measurements, mentioned in the manuscript, was run during preparation and is not part of this bundle.

**Bibliographic priority.** A targeted search of the literature on local discrimination of maximally entangled states and on the discrimination of qubit unitaries found no direct antecedent for the formulas. This does not certify priority. The cases of two states and of orthogonal Bell states are known and are cited in the manuscript.

**Open.** The optimum of general (two-way) local protocols when one message is not enough, whether one message always reaches 2/k when Θ > π/4, and the extension of the separable optimum beyond two qubits.
