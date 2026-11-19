# Photon addition to a two-mode squeezed vacuum: σ^{1,1} majorizes σ^{k,k} for every k

Let σ^{k,l} be the reduced state of the two-mode squeezed vacuum with parameter λ after ideal addition of k photons to one mode and l photons to the other. Van Herstraeten, Cerf, Guha and Gagatsos (Phys. Rev. A 110, 042430, 2024) proved σ^{1,1} ≻ σ^{k,k} for 2 ≤ k ≤ 8 and conjectured it for all k, in the stronger form that their lower-triangular Toeplitz matrix relating the two spectra is column stochastic. The note proves this strong form for every k ≥ 2 and every λ ∈ (0,1), from the closed form N_kk(x)/N_11(x) = A_k(x)/((1−x²)(1−x)^{2k−3}) of the ratio of the generating functions of the two spectra, where A_k(x) = Σ_j C(k,j)² x^j. The same criterion proves σ^{0,m} ≻ σ^{k,l} whenever k+l ≥ m (in particular the relation σ^{0,l} ≻ σ^{k,l} that the authors observed numerically) and σ^{1,1} ≻ σ^{k,l} whenever k+l ≥ 3. An exact computation at λ = 1/16 shows that σ^{3,3} and σ^{4,4} are incomparable, so the diagonal chain σ^{k,k} ≻ σ^{k+1,k+1} already fails at k = 3.

## Public files

- [`manuscript/photon-added-squeezed-majorization.tex`](manuscript/photon-added-squeezed-majorization.tex) — canonical LaTeX source.
- [`manuscript/photon-added-squeezed-majorization.pdf`](manuscript/photon-added-squeezed-majorization.pdf) — compiled manuscript.
- [`checks/verify_majorization.py`](checks/verify_majorization.py) — exact integer and rational checks of the generating-function identity, the Toeplitz coefficients for 2 ≤ k ≤ 40, the closed forms printed in the original paper, direct majorization tests at rational λ, the extensions, and the counterexample at λ = 1/16, followed by a floating-point scan of diagonal pairs.
- [`data/verification.json`](data/verification.json) — generated verification record.

There is no input certificate: every quantity is generated from the formulas in the manuscript.

## Reproduce

Run from the repository root:

```text
python research/entries/photon-added-squeezed-majorization/checks/verify_majorization.py
```

The checker requires NumPy and SciPy. It is deterministic, uses no network access, runs in a few seconds, rewrites `data/verification.json` and exits with a non-zero status on failure. The option `--full` repeats the complete floating-point scan quoted in the manuscript (l ≤ 10, k ≤ 24, 460 values of λ) in under a minute.

## Scope

**Analytic proof.** The generating-function identity, the Toeplitz criterion, the conjecture σ^{1,1} ≻ σ^{k,k} in its strong form for all k ≥ 2, the extensions σ^{0,m} ≻ σ^{k,l} (k+l ≥ m) and σ^{1,1} ≻ σ^{k,l} (k+l ≥ 3), and the exact failure of σ^{3,3} ≻ σ^{4,4} at λ = 1/16. By the equality of Schmidt spectra for addition and subtraction of k photons on each mode, the main theorem also holds for photon subtraction. Nothing is claimed about realistic finite-gain or finite-transmissivity operations.

**Computational verification.** The checker confirms the identities coefficient by coefficient in exact arithmetic over finite ranges and tests majorization directly on finitely many partial sums. The statements σ^{2,2} ≻ σ^{k,k} for k ≥ 3 and the list of comparable diagonal pairs rest only on a floating-point grid scan and are not proved.

**Bibliographic priority.** The strong form of the conjecture for all k was proved earlier, with a Lean formalization, in the public repository [the-omega-institute/trureturing, pull request #11708](https://github.com/the-omega-institute/trureturing/pull/11708) (1 October 2026); the proof here is independent. The closed form of the quotient, the extension to unequal additions and the incomparability of σ^{3,3} and σ^{4,4} were not found there nor in the literature searched on 19 November 2026. The ingredients are classical and the Toeplitz construction is that of the original authors.

**Open.** A proof of σ^{2,2} ≻ σ^{k,k} for k ≥ 3, a description of all comparable diagonal pairs σ^{l,l}, σ^{k,k}, and comparisons between unbalanced additions with the same total, such as σ^{3,1} against σ^{2,2}.
