# Exact ensemble-steering defect under partial environmental access

For a two-branch tripartite pure state √p|0⟩|b₀⟩|u⟩ + √q|1⟩|b₁⟩|v⟩, the note evaluates exactly the worst-case ensemble-preparation defect when measurements are restricted to the part B of the purifier and the environment C is hidden: s_B = (1−κ)√(pq), with κ = |⟨u|v⟩|. A binary target ensemble and a two-outcome measurement attain this value. The note also computes the optimal state-preservation defect of conditional expectations, δ_* = q√(1−κ²), derives matching spatial bounds when Bob gains access to a growing segment of a controlled-rotation chain, and gives a gapped quasi-local parent Hamiltonian.

## Public files

- [`manuscript/steering-localization.tex`](manuscript/steering-localization.tex) — canonical LaTeX source.
- [`manuscript/steering-localization.pdf`](manuscript/steering-localization.pdf) — compiled manuscript.
- [`checks/verify51.py`](checks/verify51.py) — finite-dimensional checks of the partial-trace formulas, binary witnesses, rational cases, spatial tails, and parent-Hamiltonian spectra.
- [`data/verification51.json`](data/verification51.json) — generated verification record.

## Reproduce

Run from the repository root:

```text
python research/entries/steering-localization/checks/verify51.py
```

The checker requires NumPy. It uses no optimizer, GPU, or network access.

## Scope

**Analytic proof.** The manuscript proves every universal statement (Theorem 1, the formula for δ_*, Corollary 2 and the parent-Hamiltonian properties).

**Computational verification.** The checker tests the finite matrix identities and representative exact or numerical cases; it is not a proof assistant formalization.

**Bibliographic priority.** The ingredients are known: the Schrödinger–HJW theorem for full purifier access (Kirkpatrick, Found. Phys. Lett. 19, 95 (2006)); the Cauchy–Schwarz bound and the binary ensemble √p|0⟩ ± √q|1⟩ from the ℓ1 coherence of assistance (Zhao et al., Phys. Rev. A 100, 012315 (2019)), to which the result reduces when κ = 0; and branch states with products of decoherence factors from quantum Darwinism (Blume-Kohout and Zurek, Phys. Rev. A 73, 062310 (2006)). The exact minimax value for κ > 0, the comparison with δ_* and the spatial rate were not found in the literature consulted on 19 November 2026; this is not a proof of originality. The proofs are short, and the note does not claim a general quantitative theory of steering under partial access.
