# Momentum Rényi and Tsallis entropies behind hard walls: the threshold 1/(2(m+1))

A wave function cut off by hard walls has an algebraic momentum tail. As a result, momentum Rényi and Tsallis entropies of order α exist only above a threshold α_TH. The note proves the following criterion. If the first derivative of the zero-extended wave function that jumps has order m, then ∫γ(p)^α dp is finite exactly when α > 1/(2(m+1)). The Rényi entropy diverges like (1/(1 − α_TH))·ln(1/(α − α_TH)) at the threshold, with an explicit limit for (α − α_TH)∫γ^α. For eigenfunctions of a Schrödinger operator with integrable (possibly complex) potential between hard walls, only m = 0 and m = 1 occur. Hence α_TH = 1/4 when both walls are Dirichlet and α_TH = 1/2 otherwise, at every level and for real or complex Robin lengths. This proves Olendski's conjecture that 1/2 is the threshold of every one-dimensional non-Dirichlet hard-wall system. The same dichotomy holds on a half-line. The particular thresholds were found earlier by Olendski from explicit formulas, and the mechanism (endpoint jumps governing Fourier decay) is classical; the note's contribution is the two-sided criterion, the interference bound for two walls and the divergence rate.

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

**Bibliographic priority.** The asymptotic expansion of Fourier integrals by endpoint jumps is classical. The thresholds 1/4 and 1/2 for Dirichlet, Neumann, mixed and Robin wells are Olendski's (Int. J. Quantum Chem. 2020; Eur. J. Phys. 2019), as is the value for annuli (Eur. Phys. J. Plus 2022). Aptekarev, Dehesa, Sánchez-Moreno and Tulyakov (J. Math. Chem. 2012) computed the Dirichlet-well momentum entropies for integer orders only. The general statement in terms of m, the proof of divergence with two walls, the divergence rate and the dichotomy for every integrable potential and complex Robin length were not found in these works, all read in full, nor in the titles and abstracts of the twelve works citing the 2020 paper. No treatment of the problem was found in `the-omega-institute/trureturing`. This does not certify priority.

**Open.** Potentials that are singular at a wall, such as a term proportional to 1/x², which give fractional exponents. Domains in dimension d ≥ 2. The divergence rate for three or more jump points (Bohr mean value).
