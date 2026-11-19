#!/usr/bin/env python3
"""Checks for the note "Photon-added squeezed vacua: sigma^{1,1} majorizes sigma^{k,k} for every k".

The reduced state sigma^{k,l} of the photon-added two-mode squeezed vacuum
a^{dag k} b^{dag l} |Psi_lambda> has eigenvalues proportional to
lambda^n C(n+k,k) C(n+l,l), n >= 0.

Exact integer / rational arithmetic unless stated otherwise:
  1. Lemma 1: N_{k,l}(x) = A_{k,l}(x) / (1-x)^(k+l+1), A_{k,l} = sum_j C(k,j) C(l,j) x^j.
  2. Theorem 1: the coefficients of N_kk/N_11, obtained by exact deconvolution,
     equal those of A_k(x) / ((1-x^2)(1-x)^(2k-3)) and the explicit formula, and are >= 1.
  3. The closed forms of c_n^(22), c_n^(33), c_n^(44) printed by Van Herstraeten et al.
  4. Direct exact majorization test sigma^{1,1} > sigma^{k,k} at rational lambda.
  5. Theorem 2: nonnegativity of N_{k,l}/N_{0,m} (k+l >= m) and N_{k,l}/N_{1,1} (k+l >= 3).
  6. Proposition 3: the exact largest eigenvalues at lambda = 1/16 and the
     incomparability of sigma^{3,3} and sigma^{4,4}.
  7. Floating-point scan of diagonal pairs (numerical evidence only, not a proof).

Deterministic, no network (add --full for the complete scan); writes data/verification.json and exits non-zero on failure.
"""
import hashlib
import json
import sys
import time
from fractions import Fraction
from math import comb
from pathlib import Path

import numpy as np
from scipy.special import gammaln

ENTRY = Path(__file__).resolve().parent.parent
DATA = ENTRY / "data"
NMAX = 160
KMAX = 40
results = {}
START = time.perf_counter()


def record(name, ok, **extra):
    results[name] = dict(passed=bool(ok), **extra)
    print(f"[{'PASS' if ok else 'FAIL'}] {name} {extra if extra else ''}")


def mul(a, b, n=NMAX):
    c = [0] * (n + 1)
    for i, ai in enumerate(a[: n + 1]):
        if ai:
            for j, bj in enumerate(b[: n + 1 - i]):
                c[i + j] += ai * bj
    return c


def inv_one_minus_x_pow(r, n=NMAX):
    """Coefficients of (1-x)^(-r), r >= 0."""
    if r == 0:
        return [1] + [0] * n
    return [comb(m + r - 1, r - 1) for m in range(n + 1)]


def deconv(b, a, n=NMAX):
    """Exact series quotient b/a for integer series with a[0] = 1."""
    d = []
    for m in range(n + 1):
        d.append(b[m] - sum(d[j] * a[m - j] for j in range(m)))
    return d


def N_series(k, l, n=NMAX):
    return [comb(m + k, k) * comb(m + l, l) for m in range(n + 1)]


def A_poly(k, l):
    return [comb(k, j) * comb(l, j) for j in range(min(k, l) + 1)]


# 1. Lemma 1 ------------------------------------------------------------------
ok = all(mul(A_poly(k, l), inv_one_minus_x_pow(k + l + 1)) == N_series(k, l)
         for k in range(13) for l in range(13))
record("lemma1_generating_function", ok, range="0<=k,l<=12", order=NMAX)

# 2. Theorem 1 ----------------------------------------------------------------
inv_1mx2 = [1 if m % 2 == 0 else 0 for m in range(NMAX + 1)]
ok_eq = ok_pos = ok_formula = True
gmin = None
for k in range(2, KMAX + 1):
    d_dec = deconv(N_series(k, k), N_series(1, 1))
    d_prod = mul(A_poly(k, k), mul(inv_1mx2, inv_one_minus_x_pow(2 * k - 3)))
    ok_eq &= d_dec == d_prod

    def e_formula(m, k=k):
        return sum(comb(m - 2 * i + 2 * k - 4, 2 * k - 4) for i in range(m // 2 + 1))
    for n in range(40):
        ok_formula &= sum(comb(k, j) ** 2 * e_formula(n - j)
                          for j in range(min(k, n) + 1)) == d_dec[n]
    ok_pos &= min(d_dec) >= 1
    gmin = min(d_dec) if gmin is None else min(gmin, min(d_dec))
record("theorem1_product_form", ok_eq, range=f"2<=k<={KMAX}", order=NMAX)
record("theorem1_explicit_formula", ok_formula, range=f"2<=k<={KMAX}", order=39)
record("theorem1_coefficients_at_least_one", ok_pos, min_coefficient=gmin)


# 3. closed forms of the paper (c_n = d_{n+1}) --------------------------------
def sgn(n):
    return 1 if n % 2 == 0 else -1


d2 = deconv(N_series(2, 2), N_series(1, 1))
d3 = deconv(N_series(3, 3), N_series(1, 1))
d4 = deconv(N_series(4, 4), N_series(1, 1))
ok = all(Fraction(d2[n + 1]) == 3 * n + Fraction(sgn(n), 2) + Fraction(9, 2)
         for n in range(-1, NMAX))
ok &= all(Fraction(d3[n + 1]) == Fraction(5 * n ** 3, 3) + 10 * n ** 2 + Fraction(58 * n, 3) + 12
          for n in range(-1, NMAX))
ok &= all(Fraction(d4[n + 1]) == Fraction(7 * n ** 5, 24) + Fraction(175 * n ** 4, 48)
          + Fraction(425 * n ** 3, 24) + Fraction(125 * n ** 2, 3) + Fraction(95 * n, 2)
          - Fraction(3 * sgn(n), 32) + Fraction(675, 32) for n in range(-1, NMAX))
record("paper_closed_forms_k2_k3_k4", ok, first_coefficients_k2=d2[:8])


# 4. direct exact majorization test --------------------------------------------
def exact_spectrum(k, l, lam, M):
    w = [comb(n + k, k) * comb(n + l, l) * lam ** n for n in range(M)]
    A = sum(Fraction(c) * lam ** j for j, c in enumerate(A_poly(k, l)))
    return w, A / (1 - lam) ** (k + l + 1)


def exact_major_gap(k1, l1, k2, l2, lam, M, K):
    """min over 1<=K'<=K of S_K'(sigma^{k1,l1}) - S_K'(sigma^{k2,l2}), exact.

    The weights are unimodal in n, so the K largest among the first M weights are
    the K largest overall once the K-th largest exceeds the last (decreasing) weight.
    """
    w1, N1 = exact_spectrum(k1, l1, lam, M)
    w2, N2 = exact_spectrum(k2, l2, lam, M)
    s1, s2 = sorted(w1, reverse=True), sorted(w2, reverse=True)
    assert s1[K - 1] >= w1[-1] and s2[K - 1] >= w2[-1]
    assert w1[-1] < w1[-2] and w2[-1] < w2[-2]
    gap, c1, c2 = None, Fraction(0), Fraction(0)
    for i in range(K):
        c1 += s1[i]
        c2 += s2[i]
        g = c1 / N1 - c2 / N2
        gap = g if gap is None else min(gap, g)
    return gap


ok = True
lams = [Fraction(1, 100), Fraction(1, 16), Fraction(1, 4), Fraction(1, 2), Fraction(3, 4)]
ks = [2, 3, 5, 8, 9, 10, 12]
for lam in lams:
    for k in ks:
        ok &= exact_major_gap(1, 1, k, k, lam, M=260, K=200) > 0
record("direct_exact_majorization_11_vs_kk", ok, k=ks, lam=[str(x) for x in lams],
       partial_sums=200)

# 5. Theorem 2 ----------------------------------------------------------------
ok = all(min(deconv(N_series(k, l), N_series(0, m))) >= 0
         for m in range(9) for k in range(9) for l in range(9) if k + l >= m)
record("theorem2_base_0m", ok, range="0<=k,l,m<=8, k+l>=m")
ok = all(min(deconv(N_series(k, l), N_series(1, 1))) >= 0
         for k in range(11) for l in range(11) if k + l >= 3)
record("theorem2_base_11", ok, range="0<=k,l<=10, k+l>=3")
d = deconv(N_series(3, 3), N_series(2, 2))
first_neg = next(i for i, v in enumerate(d) if v < 0)
record("quotient_N33_over_N22_has_negative_coefficient", min(d) < 0,
       first_negative_index=first_neg, value=d[first_neg])

# 6. Proposition 3 ------------------------------------------------------------
lam = Fraction(1, 16)
w3, N3 = exact_spectrum(3, 3, lam, 60)
w4, N4 = exact_spectrum(4, 4, lam, 60)
top3, top4 = max(w3) / N3, max(w4) / N4
ok = (top3 == Fraction(34171875, 85786624) and top4 == Fraction(192216796875, 471590764544)
      and top4 > top3)
record("proposition3_largest_eigenvalues", ok, sigma33=str(top3), sigma44=str(top4),
       sigma33_float=float(top3), sigma44_float=float(top4))
g = exact_major_gap(4, 4, 3, 3, lam, M=120, K=60)
record("proposition3_incomparable_pair", g < 0, min_gap_44_minus_33=float(g))


# 7. floating-point scan (numerical evidence only) -----------------------------
def spectrum_float(k, l, lam):
    M = int(60 + (k + l + 45) / (1 - lam) * 1.6)
    while True:
        n = np.arange(M)
        logw = (n * np.log(lam) + gammaln(n + k + 1) - gammaln(k + 1) - 2 * gammaln(n + 1)
                + gammaln(n + l + 1) - gammaln(l + 1))
        w = np.exp(logw - logw.max())
        if w[-1] < 1e-25:
            return w / w.sum()
        M *= 2


def float_gap(p, r):
    n = max(len(p), len(r))
    p, r = np.pad(p, (0, n - len(p))), np.pad(r, (0, n - len(r)))
    return float((np.cumsum(np.sort(p)[::-1]) - np.cumsum(np.sort(r)[::-1])).min())


if "--full" in sys.argv:   # the complete scan quoted in the manuscript (under a minute)
    grid = np.concatenate([np.logspace(-6, -0.3, 400), 1 - np.logspace(-0.31, -2, 60)])
    LMAX, KSCAN = 10, 24
else:
    grid = np.concatenate([np.logspace(-5, -0.3, 120), 1 - np.logspace(-0.31, -2, 40)])
    LMAX, KSCAN = 6, 12
failures, scan_ok = [], True
for l in range(1, LMAX + 1):
    for k in range(l + 1, KSCAN + 1):
        best = min((float_gap(spectrum_float(l, l, x), spectrum_float(k, k, x)), x) for x in grid)
        if best[0] <= -1e-12:
            failures.append(dict(l=l, k=k, min_gap=best[0], at_lambda=float(best[1])))
            if l <= 2:
                scan_ok = False
record("float_scan_diagonal_pairs", scan_ok, grid_points=len(grid), l_max=LMAX, k_max=KSCAN,
       pairs_l_to_k_failing_on_grid=[(f["l"], f["k"]) for f in failures],
       note="sigma^(1,1) and sigma^(2,2) majorize every sigma^(k,k) on the grid; evidence only")

passed = all(r["passed"] for r in results.values())
report = dict(status="passed" if passed else "failed", checks=results,
              sha256={"checks/verify_majorization.py": hashlib.sha256(
                  Path(__file__).read_bytes()).hexdigest()},
              limits=("Exact integer and rational checks of finitely many coefficients and "
                      "partial sums, plus a floating-point grid scan; the proofs are in the "
                      "manuscript. Not a formal proof or a certification of novelty."))
report["elapsed_seconds"] = round(time.perf_counter() - START, 1)
DATA.mkdir(exist_ok=True)
(DATA / "verification.json").write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")
print("ALL CHECKS PASSED" if passed else "SOME CHECKS FAILED")
sys.exit(0 if passed else 1)
