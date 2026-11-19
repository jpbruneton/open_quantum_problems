# Momentum Rényi and Tsallis entropies behind hard walls: the threshold 1/(2(m+1))

A wave function cut off by hard walls has an algebraic momentum tail. As a result, momentum Rényi and Tsallis entropies of order α exist only above a threshold α_TH. The note proves the following criterion. If the first derivative of the zero-extended wave function that jumps has order m, then ∫γ(p)^α dp is finite exactly when α > 1/(2(m+1)). The Rényi entropy diverges like (1/(1 − α_TH))·ln(1/(α − α_TH)) at the threshold, with an explicit limit for (α − α_TH)∫γ^α. For eigenfunctions of a Schrödinger operator with integrable (possibly complex) potential between hard walls, only m = 0 and m = 1 occur. Hence α_TH = 1/4 when both walls are Dirichlet and α_TH = 1/2 otherwise, at every level and for real or complex Robin lengths. This proves Olendski's conjecture that 1/2 is the threshold of every one-dimensional non-Dirichlet hard-wall system. The same dichotomy holds on a half-line.

## Public files

- [`manuscript/momentum-renyi-threshold.tex`](manuscript/momentum-renyi-threshold.tex) — canonical LaTeX source.
- [`manuscript/momentum-renyi-threshold.pdf`](manuscript/momentum-renyi-threshold.pdf) — compiled manuscript.
- [`checks/check_momentum_threshold.py`](checks/check_momentum_threshold.py) — builds nine eigenfunctions of the well [0, 1] with Dirichlet, Neumann, mixed, real and complex Robin walls and uses their closed-form Fourier transforms. It checks the leading-term asymptotics, the dyadic-block behaviour at and around the threshold, an m = 2 polynomial example, the attractive Robin wall, and the divergence rate for the Neumann ground state.
- [`data/verification.json`](data/verification.json) — generated verification record.

There is no input certificate: all wave functions are constructed from closed formulas.

## Reproduce

Run from the repository root:

```text
python research/entries/momentum-renyi-threshold/checks/check_momentum_threshold.py
```

The checker requires NumPy, SciPy and mpmath. It is deterministic and runs in under a minute. It rewrites `data/verification.json` and exits with a non-zero status if a check fails.

## Scope

**Analytic proof.** The leading-term lemma, the positive-density lemma for the two-wall interference, the threshold theorem (both directions), the divergence rate for at most two jump points, and the corollaries for hard-wall eigenfunctions on an interval and on a half-line.

**Computational verification.** The checker illustrates these statements in floating point and in multiprecision arithmetic on explicit wave functions. It does not replace the proof.

**Bibliographic priority.** The asymptotic expansion of Fourier integrals by endpoint jumps is classical. Olendski already asserted the threshold 1/2 for Neumann and Robin wells from explicit formulas. In a documented search of the source, the author's later papers and the works citing the source, we did not find the general statement in terms of m, the proof of divergence with two walls, or the divergence rate. This does not certify priority.

**Open.** Potentials that are singular at a wall, which give fractional exponents, as in the pseudo-harmonic oscillator. Domains in dimension d ≥ 2. The divergence rate for three or more jump points (Bohr mean value).
