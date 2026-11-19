#!/usr/bin/env python3
"""Checks for the note "Separable states with the moments of high Schmidt rank states".

For r >= 2, a spacing m >= 1 and weights p_j > 0 summing to 1, compare
    psi_r   = sum_{j<r} sqrt(p_j) |mj, mj>                     (Schmidt rank r)
    sigma_r = sum_{j<r} p_j |mj, mj><mj, mj|                   (separable).
The manuscript proves that every quadrature moment of total degree d < 2m
coincides for the two states. The checker
  1. builds truncated Fock matrices of x_A, p_A, x_B, p_B, with a cutoff large
     enough that no truncation occurs, and compares the expectation values of
     every ordered word of length <= d in these four operators (all monomials,
     symmetrized or not), for m = 2, d <= 3 and r = 2..6, and for m = 3, 4,
     d = 2m - 1, r = 2..5;
  2. checks sharpness: the degree-2m moment <a^m b^m> differs, and with spacing
     m = 1 the second moment <a b> already differs;
  3. checks the Schmidt rank r of psi_r, the equality of the mean photon numbers,
     and the uniform bound 2m z/(1-z) for geometric weights p_j ~ z^j;
  4. tests the bound lambda_r <= E/(r(r-1)) on random pure two-mode states.
Floating point with a fixed tolerance; deterministic, no network. Writes
data/verification.json and exits non-zero on failure.
"""
import hashlib
import json
import sys
import time
from math import factorial, sqrt
from pathlib import Path

import numpy as np

ENTRY = Path(__file__).resolve().parent.parent
DATA = ENTRY / "data"
START = time.perf_counter()
results = {}


def record(name, ok, **extra):
    results[name] = dict(passed=bool(ok), **extra)
    print(f"[{'PASS' if ok else 'FAIL'}] {name} {extra if extra else ''}")


def ladder(D):
    a = np.diag(np.sqrt(np.arange(1, D)), 1)          # a|n> = sqrt(n)|n-1>
    return a


def quadratures(D):
    a = ladder(D)
    x = (a + a.T) / sqrt(2)
    p = (a - a.T) / (1j * sqrt(2))
    return x, p


def geometric(r, z):
    w = np.array([z ** j for j in range(r)], dtype=float)
    return w / w.sum()


def states(r, m, d, weights):
    """Single-mode dimension D and the stacked vectors (psi, v_0, ..., v_{r-1}) as D x D arrays."""
    D = m * (r - 1) + d + 1                       # occupations 0..m(r-1)+d: no truncation
    V = np.zeros((r + 1, D, D), dtype=complex)
    for j in range(r):
        V[0, m * j, m * j] = sqrt(weights[j])
        V[j + 1, m * j, m * j] = 1.0
    return D, V


def max_word_difference(r, m, d, weights):
    """Max over all words W of length <= d in (xA, pA, xB, pB) of
    |<psi|W|psi> - sum_j p_j <v_j|W|v_j>|, and the largest |moment| for scale."""
    D, V0 = states(r, m, d, weights)
    x, p = quadratures(D)
    ops = [("A", x), ("A", p), ("B", x), ("B", p)]
    bra_psi = V0[0].conj()
    bras = V0[1:].conj()
    w = np.asarray(weights)
    worst, scale, count = 0.0, 0.0, 0

    def apply(op, V):
        side, M = op
        if side == "A":
            return np.einsum("ab,kbc->kac", M, V)
        return np.einsum("cb,kab->kac", M, V)      # (M on mode B): V[a, :] -> M V[a, :]

    def recurse(V, depth):
        nonlocal worst, scale, count
        if depth > 0:
            m_psi = np.vdot(bra_psi.conj(), V[0])
            m_sig = np.sum(w * np.einsum("kab,kab->k", bras, V[1:]))
            worst = max(worst, abs(m_psi - m_sig))
            scale = max(scale, abs(m_psi))
            count += 1
        if depth < d:
            for op in ops:
                recurse(apply(op, V), depth + 1)

    recurse(V0, 0)
    return worst, scale, count


# 1. equality of all moments of degree < 2m ------------------------------------
rows, ok = [], True
cases = [(2, 3, r) for r in range(2, 7)] + [(m, 2 * m - 1, r) for m in (3, 4) for r in range(2, 6)]
rng = np.random.default_rng(20261119)
for m, d, r in cases:
    for label, weights in (("geometric z=1/2", geometric(r, 0.5)),
                           ("random", rng.dirichlet(np.ones(r)))):
        worst, scale, count = max_word_difference(r, m, d, weights)
        good = worst <= 1e-10 * max(1.0, scale)
        ok &= good
        rows.append(dict(m=m, degree=d, r=r, weights=label, words=count,
                         max_abs_difference=worst, max_abs_moment=scale))
record("all_quadrature_moments_of_degree_below_2m_coincide", ok, cases=len(rows))


# 2. sharpness -------------------------------------------------------------------
def ladder_moment_ambm(r, m, weights):
    """<a^m b^m> for psi_r and sigma_r, computed with ladder matrices."""
    D, V = states(r, m, 2 * m, weights)
    am = np.linalg.matrix_power(ladder(D), m)
    vals = [np.einsum("ab,ac,bd,cd->", V[k].conj(), am, am, V[k]) for k in range(r + 1)]
    psi_val = vals[0]
    sig_val = sum(weights[j] * vals[j + 1] for j in range(r))
    exact = sum(sqrt(weights[j] * weights[j + 1]) * factorial(m * (j + 1)) / factorial(m * j)
                for j in range(r - 1))
    return psi_val, sig_val, exact


ok, sharp = True, []
for m in (1, 2, 3, 4):
    for r in (2, 4):
        wts = geometric(r, 0.5)
        psi_val, sig_val, exact = ladder_moment_ambm(r, m, wts)
        good = abs(sig_val) < 1e-12 and abs(psi_val - exact) < 1e-9 * exact and exact > 0
        ok &= good
        sharp.append(dict(m=m, r=r, degree=2 * m, psi=float(psi_val.real), sigma=float(abs(sig_val)),
                          closed_form=exact))
record("degree_2m_moment_a^m_b^m_distinguishes", ok, cases=sharp)
# spacing 1: the second moment <a b> differs, so spacing 2 is needed for second moments
worst, _, _ = max_word_difference(3, 1, 2, geometric(3, 0.5))
record("spacing_1_second_moments_differ", worst > 1e-3, max_abs_difference=worst)

# 3. Schmidt rank, energies, uniform energy bound --------------------------------
ok = True
for m, d, r in cases:
    D, V = states(r, m, d, geometric(r, 0.5))
    s = np.linalg.svd(V[0], compute_uv=False)
    ok &= int(np.sum(s > 1e-12)) == r
record("psi_r_has_schmidt_rank_r", ok)

ok, energy_rows = True, []
for m in (2, 3):
    for z in (0.05, 0.2, 0.5):
        bound = 2 * m * z / (1 - z)
        means = []
        for r in range(2, 61):
            wts = geometric(r, z)
            mean = 2 * m * float(np.dot(np.arange(r), wts))
            means.append(mean)
            ok &= mean <= bound + 1e-12
        ok &= all(np.diff(means) >= -1e-15)
        # matrix check of the photon number for small r
        for r in range(2, 6):
            D, V = states(r, m, 1, geometric(r, z))
            nA = np.diag(np.arange(D))
            n_tot = lambda X: np.einsum("ab,ab->", X.conj(), nA @ X + X @ nA).real
            e_psi = n_tot(V[0])
            e_sig = sum(geometric(r, z)[j] * n_tot(V[j + 1]) for j in range(r))
            ok &= abs(e_psi - e_sig) < 1e-12 and abs(e_psi - means[r - 2]) < 1e-12
        energy_rows.append(dict(m=m, z=z, bound=bound, mean_r2=means[0], mean_r60=means[-1]))
record("mean_photon_number_equal_and_uniformly_bounded", ok, cases=energy_rows)

# 4. Proposition: lambda_r <= E / (r (r-1)) for pure states (random examples) --------
ok, tightest = True, 0.0
for trial in range(300):
    D = int(rng.integers(2, 12))
    C = rng.normal(size=(D, D)) + 1j * rng.normal(size=(D, D))
    C *= np.exp(-rng.uniform(0, 3) * np.add.outer(np.arange(D), np.arange(D)) / D)
    C /= np.linalg.norm(C)
    lam = np.sort(np.linalg.svd(C, compute_uv=False) ** 2)[::-1]
    n = np.arange(D)
    E = float(np.sum(np.abs(C) ** 2 * np.add.outer(n, n)))
    for r in range(2, D + 1):
        ratio = lam[r - 1] * r * (r - 1) / E
        tightest = max(tightest, ratio)
        ok &= ratio <= 1 + 1e-12
record("reduced_eigenvalue_bound_lambda_r_le_E_over_r_r_minus_1", ok, trials=300,
       largest_ratio=tightest)

passed = all(v["passed"] for v in results.values())
report = dict(status="passed" if passed else "failed", checks=results, moment_cases=rows,
              elapsed_seconds=round(time.perf_counter() - START, 1),
              sha256={"checks/verify_moments.py": hashlib.sha256(
                  Path(__file__).read_bytes()).hexdigest()},
              limits=("Floating-point evaluation of all quadrature words up to the stated degree on "
                      "finitely many examples; the proof for all r, m and d < 2m is in the manuscript."))
DATA.mkdir(exist_ok=True)
(DATA / "verification.json").write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")
print("ALL CHECKS PASSED" if passed else "SOME CHECKS FAILED")
sys.exit(0 if passed else 1)
