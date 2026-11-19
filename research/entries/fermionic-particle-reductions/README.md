# Spectra of particle-reduced fermionic density operators

Amosov and Filippov (Quantum Inf. Process. 16, 2 (2017), arXiv:1512.01828) introduced the particle-removing map Φ(ρ) = Σⱼ aⱼ ρ aⱼ† on the fermionic Fock space and conjectured that, for every pure state, Φᵖ(ρ) and the p-particle reduced density operator ρₚ have the same spectrum. The note proves that for every pure state on the Fock space of n modes and every p, the full spectra satisfy Spec Φᵖ(ρ) = p! Spec ρₚ, zero eigenvalues included. The conjecture is therefore true for p = 1 and false for every p ≥ 2 unless both operators vanish; the minimal counterexample is the two-mode state |11⟩. The proof identifies ρₚ and Φᵖ(ρ)/p! as complementary outputs of the completely positive map with Kraus operators a_{s_p}⋯a_{s_1}. The same factor corrects Proposition 4 of the source, which becomes Φ^{N−p}(ρ) = (N−p)! ρₚ at fixed particle number N.

## Public files

- [`manuscript/fermionic-particle-reductions.tex`](manuscript/fermionic-particle-reductions.tex) — canonical LaTeX source.
- [`manuscript/fermionic-particle-reductions.pdf`](manuscript/fermionic-particle-reductions.pdf) — compiled manuscript.
- [`checks/verify_particle_reductions.py`](checks/verify_particle_reductions.py) — builds the ladder operators with the sign convention of the source, implements ρₚ literally from its definition and Φᵖ by composition, and checks the lemmas, the spectral identity on random pure states, the eigenvector map, the tuple-indexed kernel, the fixed-N correction, the trace identities and the exact counterexamples.
- [`data/verification.json`](data/verification.json) — generated verification record.

There is no input certificate: the checker constructs every operator and state from the definitions in the manuscript, with a fixed seed.

## Reproduce

Run from the repository root:

```text
python research/entries/fermionic-particle-reductions/checks/verify_particle_reductions.py
```

The checker requires NumPy only. It uses a fixed seed and no network access, runs in a few seconds, rewrites `data/verification.json`, and exits with a non-zero status if any check fails.

## Scope

**Analytic proof.** The manuscript proves Spec Φᵖ(ρ) = p! Spec ρₚ for every pure state on the n-mode Fock space and every p, the explicit eigenvector correspondence, the characterization of the cases p ≥ 2 where the conjecture holds (only when both operators vanish), the equality of nonzero spectra with the tuple-indexed kernel, and the corrected fixed-particle-number identity Φ^{N−p}(ρ) = (N−p)! ρₚ for pure and mixed states.

**Computational verification.** The checker tests these statements in floating-point arithmetic for n ≤ 6 modes on 106 random pure-state cases (generic, even and odd parity, fixed N = 2, 3), random mixed states, and exact two-mode examples. It confirms the sign and normalization conventions of the source; it is not a formal verification.

**Bibliographic priority.** The fixed-particle-number duality between p- and (N−p)-particle reductions of a pure state is classical (attributed by Amosov and Filippov to Carlson and Keller, and derived by singular value decomposition in Gigena, Di Tullio and Rossignoli, Phys. Rev. A 103, 052424 (2021), Sec. II B). The factorial correction at fixed N is also not new: it appears explicitly, without comment on Proposition 4 of the source, in the definition of the M-body density operator of Gigena et al. (Eq. (79)). What the note adds is the identity Spec Φᵖ(ρ) = p! Spec ρₚ at variable particle number, the identification of ρₚ and Φᵖ(ρ)/p! as complementary outputs, and the observation that the conjecture fails for p ≥ 2 and that Proposition 4 and its corollary fail for N − p ≥ 2 and p ≥ 2. These were not found in the documented search (the 42 citing works listed by Semantic Scholar, the closest ones read at source, and keyword searches); quantum-chemistry monographs were not consulted, so this does not certify priority.

**Open.** Generalized Pauli constraints under the parity superselection rule (raised by the source), and the spectrum of Φᵖ(ρ) for mixed states, where the spectral identity fails and only the trace identity and the complementarity relation survive.
