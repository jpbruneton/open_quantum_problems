# Every real three-qubit state can be prepared with rotations and three CZ gates

A real three-qubit state has real amplitudes in the computational basis and can be prepared from |000⟩ with real gates only: single-qubit rotations R_y(θ) and controlled-Z (CZ) gates. Perdomo, Castaneda and Vogeler (arXiv:2201.03724; Int. J. Quantum Inf. 23, 2450046 (2025)) proved that four CZ gates always suffice and conjectured that four is optimal. The note refutes this conjecture. Every real three-qubit state is prepared with R_y rotations and the three gates CZ₀₁, CZ₁₂, CZ₀₁ (linear connectivity suffices), and three is optimal. The proof characterizes the states reachable with two CZ gates as exactly those for which one of the correlations ⟨Y_iY_k⟩ vanishes, that is, for which some pair of qubits has zero rebit concurrence in the sense of Caves, Fuchs and Rungta, which gives the exact CZ count of every real three-qubit state: 0 for products, 1 for states that are products across a bipartition, 2 when some ⟨Y_iY_k⟩ vanishes, and 3 otherwise, which includes almost every state. The W state needs exactly three, and Wootters's state ½(|000⟩ − |011⟩ − |101⟩ − |110⟩), in which every pair is maximally entangled and whose hyperdeterminant is −1/4, is prepared by an explicit three-CZ circuit.

## Public files

- [`manuscript/real-three-qubit-states-three-cz.tex`](manuscript/real-three-qubit-states-three-cz.tex) — canonical LaTeX source.
- [`manuscript/real-three-qubit-states-three-cz.pdf`](manuscript/real-three-qubit-states-three-cz.pdf) — compiled manuscript.
- [`checks/verify_three_cz.py`](checks/verify_three_cz.py) — implements the constructive synthesis of the manuscript's two theorems, simulates the circuits on 25 000 random real states and nine named states, checks the two-CZ characterization on all ordered pairs of CZ gates, computes generic Jacobian ranks of the circuit maps, checks the identity 4Δ = 4 det ρ_q − E_qa² − E_qb² relating the hyperdeterminant to the rebit three-tangle, and verifies the example circuit and the quoted invariants in exact symbolic arithmetic.
- [`data/verification.json`](data/verification.json) — generated verification record.

There is no input certificate: the checker constructs every state and circuit from the formulas in the manuscript.

## Reproduce

Run from the repository root:

```text
python research/entries/real-three-qubit-states-three-cz/checks/verify_three_cz.py
```

The checker requires NumPy and SymPy. It uses fixed seeds and no network access, runs in about ten seconds, rewrites `data/verification.json`, and exits with a non-zero status on failure.

## Scope

**Analytic proof.** The manuscript proves that the real states reachable with at most two CZ gates are exactly those with ⟨Y_iY_k⟩ = 0 for some pair, that three CZ gates in the arrangement CZ₀₁, CZ₁₂, CZ₀₁ prepare every real state, and the resulting exact CZ count. This refutes the conjecture of Perdomo, Castaneda and Vogeler that four is optimal.

**Computational verification.** The checker confirms the construction to machine precision (worst infidelity below 10⁻¹⁵) on random states, including 5 000 states with negative hyperdeterminant, and verifies the explicit circuit for the example state exactly. The fraction of states with negative hyperdeterminant (about 22%) is a sampling estimate. The result rests on the proofs, not on the samples.

**Bibliographic priority.** The interpretation of ⟨Y_iY_k⟩ as the signed rebit concurrence (Caves, Fuchs and Rungta 2001) and of 4Δ as Wootters's rebit three-tangle (2014) is prior work, and so is the example state (Wootters 2012). Real circuit synthesis for gates (Wei and Di 2012: two CNOT gates and R_y rotations for SO(4)) and the complex three-CNOT count for states (Žnidarič, Giraud and Georgeot 2008) are the closest antecedents. The two-CZ characterization, the three-CZ construction on a line and the exact CZ count were not found in the documented search, which covered the five works citing arXiv:2201.03724 in Semantic Scholar, OpenAlex and INSPIRE as of 19 November 2026 (all read except a textbook) and targeted searches on real circuits and rebit entanglement. This does not certify priority.

**Open.** The optimal CZ count for mapping one arbitrary real state to another by a real circuit, whether the triangular arrangement CZ₀₁, CZ₀₂, CZ₁₂ alone reaches every real state, and the optimal counts for four or more qubits.
