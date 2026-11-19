# Structured negativity and negativity: an exact criterion for their equality

Kumari and Adhikari (arXiv:2209.03909, Ann. Phys. 446, 169113 (2022)) defined the structured negativity `N_S`, an entanglement quantifier read from the structural physical approximation of the partial transpose, and conjectured that for two `d`-level systems it coincides with the negativity `N` whenever the partial transpose has `d(d−1)/2` negative eigenvalues. The note proves that `N_S = d·|λ_min(ρ^Γ)|`, so that `N/N_S = 2r/(d(d−1))`, where `r` is the sum of the negative eigenvalues divided by the most negative one. Hence `N = N_S` exactly when that sum equals `d(d−1)/2` times the most negative eigenvalue. The conjecture holds for two qubits and fails for every `d ≥ 3`; the pure state `(2|00⟩+2|11⟩+|22⟩)/3` has three negative eigenvalues, `N = 8/9` and `N_S = 4/3`. A family of states whose partial transpose has `(d−1)²` equal negative eigenvalues, built from the symmetric subspace of `2(d−1)` qubits, saturates the inequality `N ≤ 2(1−1/d)N_S` in every dimension and gives `N > N_S` for every `d ≥ 3`. Explicit two-qutrit states with four negative eigenvalues realise `N > N_S`, `N = N_S` and `N < N_S`.

## Public files

- [`manuscript/structured-negativity.tex`](manuscript/structured-negativity.tex) — canonical LaTeX source.
- [`manuscript/structured-negativity.pdf`](manuscript/structured-negativity.pdf) — compiled manuscript.
- [`checks/check_structured_negativity.py`](checks/check_structured_negativity.py) — computes `N_S` literally from its definition and checks the exact criterion on random states, the Werner, isotropic and pure-state families, the exact two-qutrit counterexamples in rational arithmetic, and the spectrum of the partially transposed symmetric projector and the saturating family for `d = 2, …, 6`.
- [`data/verification.json`](data/verification.json) — generated verification record.

There is no input certificate: every state is given by a closed formula in the manuscript and rebuilt by the checker.

## Reproduce

Run from the repository root:

```text
python research/entries/structured-negativity/checks/check_structured_negativity.py
```

The checker requires NumPy and SymPy. It uses a fixed seed, no network access, runs in a few seconds, and rewrites `data/verification.json`.

## Scope

**Analytic proof.** The manuscript proves the identity `N_S = d·max(0, −λ_min(ρ^Γ))`, the exact criterion for `N = N_S` and its three regimes, the pure-state refutation for every `d ≥ 3`, the spectrum of the partial transpose of the projector onto `Sym^{2(d−1)}(C²)`, and the saturating family in every dimension.

**Computational verification.** The two-qutrit counterexamples have rational entries (one eigenvalue involves `√1747`) and are checked in exact arithmetic with SymPy. The saturating family is checked for `d = 2, …, 6`, with the projector built exactly and eigenvalues compared in double precision. Random states only test conventions; they add nothing beyond the theorem.

**Bibliographic priority.** A search of the works citing Kumari and Adhikari and of the literature on the negative spectrum of the partial transpose found neither the criterion, nor the counterexamples, nor the saturating family. The criterion is an immediate rewriting of the definitions, and the pure-state counterexample is likely familiar to anyone who has computed both quantities. The literature on rotationally invariant states, where the spectrum of the partially transposed symmetric projector probably appears in another form, was not searched. This does not certify priority.

**Open.** The set of values of `r` attainable at fixed number `q` of negative eigenvalues, in particular whether a flat negative spectrum exists for `d(d−1)/2 < q < (d−1)²`, and the other claims of the source paper, such as the monotonicity of `N_S` under local operations and classical communication.
