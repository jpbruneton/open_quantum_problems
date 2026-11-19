# How much leakage makes the Margenau–Hill state of a post-selected system positive

A system between a preparation, summarized by a density matrix ρ, and a later post-selection with effect E can be assigned the Margenau–Hill operator (Eρ + ρE)/2, which may have negative eigenvalues; Kam and Wong (arXiv:2609.17307) showed that this happens whenever the subspace forbidden by E is not invariant under ρ. The note treats a leaky post-selection E = P + η(1 − P), where P is an orthogonal projector and 0 ≤ η ≤ 1 is the leakage. Writing ρ in blocks A, C, D relative to P and κ = ‖A^{+1/2} C D^{+1/2}‖ (Moore–Penrose inverses), it proves that κ ≤ 1 and that the Margenau–Hill operator is positive semidefinite if and only if η ≥ η_crit = (1 − √(1 − κ²))/(1 + √(1 − κ²)) = κ²/4 + κ⁴/8 + O(κ⁶), in any finite dimension and for singular as well as full-rank ρ. Below the threshold an explicit vector makes the operator negative. The threshold is below one exactly when rank ρ = rank A + rank D, so for a pure state with weight in both subspaces no leakage short of η = 1 suffices. For a qubit with Bloch vector (4/5, 0, 0) and P = |0⟩⟨0|, η_crit = 1/4 exactly.

## Public files

- [`manuscript/postselection-leakage-threshold.tex`](manuscript/postselection-leakage-threshold.tex) — canonical LaTeX source.
- [`manuscript/postselection-leakage-threshold.pdf`](manuscript/postselection-leakage-threshold.pdf) — compiled manuscript.
- [`checks/verify_leakage_threshold.py`](checks/verify_leakage_threshold.py) — checks the threshold algebra and the qubit example in exact arithmetic, then tests the criterion, the explicit negative vector, the rank characterization and a bisection of the smallest eigenvalue on 1 100 random instances (dimensions 2 to 6, full-rank, rank-deficient and pure states, singular diagonal blocks).
- [`data/verification.json`](data/verification.json) — generated verification record.

There is no input certificate: the checker generates every instance from a fixed seed.

## Reproduce

Run from the repository root:

```text
python research/entries/postselection-leakage-threshold/checks/verify_leakage_threshold.py
```

The checker requires NumPy and SymPy. It uses a fixed seed and no network access, runs in a few seconds, rewrites `data/verification.json`, and exits with a non-zero status on failure.

## Scope

**Analytic proof.** The manuscript proves the threshold criterion through the Schur complement with Moore–Penrose inverses (proved in the note), including singular diagonal blocks, the bound κ ≤ 1, the explicit negative vector below threshold, and the characterization κ < 1 ⇔ rank ρ = rank A + rank D. At η = 0 the criterion recovers Theorem 2 of Kam and Wong together with its converse for this family of effects.

**Computational verification.** The checker confirms these statements in floating-point arithmetic on random instances and verifies the closed form, its series expansion and the qubit examples (η_crit = 1/4 and 1/9) exactly. It is not a proof assistant formalization.

**Bibliographic priority.** The threshold formula was not found in the documented search, which consisted of reading Kam and Wong's paper and the foundational references cited. The result is an elementary consequence of the Schur-complement criterion and a related statement may exist elsewhere; this does not certify priority.

**Open.** Positivity of the intermediate orderings ρ^s E ρ^{1−s} (symmetrized) with 0 < s < 1/2 under leakage, and anisotropic leakage in which η(1 − P) is replaced by a general effect on the forbidden subspace.
