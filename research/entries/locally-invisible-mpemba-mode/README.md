# A Mpemba mode invisible to every strict reduction

On a chain of n ≥ 2 qubits, the local Lindbladian L = Σⱼ D[XⱼXⱼ₊₁] + ε D[X₁] + Σⱼ D[Zⱼ], with D[U](ρ) = UρU† − ρ and 0 < ε < 1, is diagonal in the Pauli basis. Its spectrum is {−2(m + εb)} with multiplicity C(2n−1, m), for 0 ≤ m ≤ 2n−1 and b ∈ {0, 1}. The stationary state 𝟙/2ⁿ is unique, the gap is 2ε, and the slowest mode is the global parity P = Z₁⋯Zₙ, which is annihilated by every partial trace. The state (𝟙 + αP)/2ⁿ therefore has maximally mixed reductions on every strict subset of sites at all times, yet it relaxes at the slowest rate. It is overtaken by (𝟙 + βXₙ)/2ⁿ, with α < β, at time log(β/α)/(2 − 2ε) in trace distance, relative entropy and every unitarily invariant distance to equilibrium that grows with the deviation. Any observable sensitive to the slow amplitude, such as a single-observable Mpemba witness, acts on all n sites, although local Z measurements with multiplied outcomes estimate it.

## Public files

- [`manuscript/locally-invisible-mpemba-mode.tex`](manuscript/locally-invisible-mpemba-mode.tex) — canonical LaTeX source.
- [`manuscript/locally-invisible-mpemba-mode.pdf`](manuscript/locally-invisible-mpemba-mode.pdf) — compiled manuscript.
- [`checks/verify_mpemba_mode.py`](checks/verify_mpemba_mode.py) — assembles the Liouvillian as a 4ⁿ × 4ⁿ matrix for n = 2…5, compares its numerical spectrum with the exact rate formula and closed form, checks the uniqueness of the stationary and slowest modes, evolves the two states for n ≤ 4, locates the crossing and checks the strict reductions.
- [`data/verification.json`](data/verification.json) — generated verification record, including the exact spectra with multiplicities.

There is no input certificate: the checker builds the generator and the states from the formulas in the manuscript.

## Reproduce

Run from the repository root:

```text
python research/entries/locally-invisible-mpemba-mode/checks/verify_mpemba_mode.py
```

The checker requires NumPy and SciPy. It is deterministic, uses no network access, runs in about ten seconds, rewrites `data/verification.json`, and exits with a non-zero status if any check fails.

## Scope

**Analytic proof.** The manuscript proves, for every n ≥ 2 and 0 < ε < 1, the full spectrum with multiplicities, the uniqueness of the stationary state and of the slowest mode, the vanishing of every strict reduction of the slow mode, the trace-distance laws and the crossing time, and the extension of the crossing to unitarily invariant monotone distances.

**Computational verification.** Floating-point diagonalization for n = 2…5 and ε ∈ {1/6, 1/2, 9/10}, time evolution by matrix exponential for n ≤ 4, with the rate formula evaluated in rational arithmetic. It is not a formal verification.

**Bibliographic priority.** No systematic search for antecedents was documented for this note, and no priority is claimed; its ingredients (Pauli-diagonal dissipators, a weakly broken parity) are standard.

**Open.** A characterization of local Lindbladians whose slowest mode is invisible to strict reductions, and analogues for non-unital (thermal) dynamics.
