"""Verify the exact one-copy PPT distillation optimum for the qutrit support of Zhu and Wang.

The support P is spanned by
    u0 = (8|01> + 7|10>)/sqrt(113),  u1 = (7|12> + 8|21>)/sqrt(113),  u2 = (|20> + i|02>)/sqrt(2).
The manuscript proves W0(P) = min{ ||E^Gamma||_inf : P <= E <= 1 } = sqrt(177)/(7 + sqrt(177)).

This script checks, in order:
  1. the block data of P (exact, with SymPy);
  2. that the explicit effect E* is feasible and has ||E*^Gamma||_inf = lambda* (exact, with SymPy);
  3. the lower bound, by three floating-point tests that do not use the analytic proof:
     random feasible effects, a multistart minimisation over the symmetric (twirled) family,
     and a dual witness Y (Y >= 0, Tr Y = 1) whose value equals lambda*;
  4. the integer output dimensions 1, 2, 3, 5 for n = 1..4 copies, with rational bounds.

Usage (from the repository root):
    python research/entries/exact-ppt-distillation-qutrit/checks/verify_ppt_distillation.py
Writes data/verification.json and exits non-zero on failure.
"""
import hashlib
import json
import sys
import time
from fractions import Fraction
from math import floor
from pathlib import Path

import numpy as np
import sympy as sp
from scipy.optimize import minimize

ENTRY = Path(__file__).resolve().parent.parent
DATA = ENTRY / "data"
SEED = 20261119

# Basis |ij> -> index 3 i + j.
EDGES = {"01": (1, 3), "12": (5, 7), "02": (2, 6)}  # (|ij>, |ji>) with i < j


def support_exact():
    k = lambda i, j: sp.Matrix([1 if n == 3 * i + j else 0 for n in range(9)])
    u0 = (8 * k(0, 1) + 7 * k(1, 0)) / sp.sqrt(113)
    u1 = (7 * k(1, 2) + 8 * k(2, 1)) / sp.sqrt(113)
    u2 = (k(2, 0) + sp.I * k(0, 2)) / sp.sqrt(2)
    return sp.simplify(sum((u * u.H for u in (u0, u1, u2)), sp.zeros(9, 9)))


def partial_transpose(X):
    """Transpose on the second qutrit: |ij><kl| -> |il><kj|."""
    if isinstance(X, np.ndarray):
        return X.reshape(3, 3, 3, 3).transpose(0, 3, 2, 1).reshape(9, 9)
    Y = sp.zeros(9, 9)
    for i, j, k, l in np.ndindex(3, 3, 3, 3):
        Y[3 * i + l, 3 * k + j] = X[3 * i + j, 3 * k + l]
    return Y


def check_blocks(P):
    expected = {
        "01": sp.Matrix([[64, 56], [56, 49]]) / 113,
        "12": sp.Matrix([[49, 56], [56, 64]]) / 113,
        "02": sp.Matrix([[1, sp.I], [-sp.I, 1]]) / 2,
    }
    for name, idx in EDGES.items():
        block = P.extract(list(idx), list(idx))
        assert sp.simplify(block - expected[name]) == sp.zeros(2, 2), name
    assert sp.simplify(P * P - P) == sp.zeros(9, 9) and P.trace() == 3
    # P vanishes outside the three edge blocks, in particular on |00>, |11>, |22>.
    mask = sp.zeros(9, 9)
    for idx in EDGES.values():
        for a in idx:
            for b in idx:
                mask[a, b] = 1
    assert all(P[a, b] == 0 for a in range(9) for b in range(9) if mask[a, b] == 0)
    return {name: str(expected[name]) for name in EDGES}


def optimal_effect_exact(P):
    lam = sp.sqrt(177) / (7 + sp.sqrt(177))
    peaks = {"01": sp.Rational(64, 113), "12": sp.Rational(64, 113), "02": sp.Rational(1, 2)}
    E = sp.zeros(9, 9)
    weights = {}
    for name, idx in EDGES.items():
        t = sp.simplify((lam - peaks[name]) / (1 - peaks[name]))
        assert 0 < t.evalf(50) < 1
        weights[name] = t
        block = P.extract(list(idx), list(idx))
        new = block + t * (sp.eye(2) - block)
        for a in range(2):
            for b in range(2):
                E[idx[a], idx[b]] = new[a, b]
    # Feasibility: E - P and 1 - E are positive semidefinite (2x2 blocks t(1-P_e), (1-t)(1-P_e)).
    for idx in EDGES.values():
        D = E.extract(list(idx), list(idx)) - P.extract(list(idx), list(idx))
        F = sp.eye(2) - E.extract(list(idx), list(idx))
        for M in (D, F):
            assert sp.simplify(M.det()) == 0 and M.trace().evalf(50) >= 0
    EG = partial_transpose(E)
    diag_ii = [0, 4, 8]
    others = [n for n in range(9) if n not in diag_ii]
    # E^Gamma is diagonal on |ij>, i != j, and has a 3x3 block on |00>, |11>, |22>.
    assert all(EG[a, b] == 0 for a in range(9) for b in range(9)
               if a != b and not (a in diag_ii and b in diag_ii))
    diag_values = [sp.nsimplify(sp.simplify(EG[n, n])) for n in others]
    assert max(sp.N(v - lam, 50) for v in diag_values) <= 1e-40
    B = EG.extract(diag_ii, diag_ii)
    x = sp.symbols("x")
    cp = sp.expand(sp.simplify(B.charpoly(x).as_expr()))
    assert sp.simplify(cp - x * (x**2 - lam**2)) == 0, cp
    return lam, weights, E


def lower_bound_tests(P_num, lam):
    rng = np.random.default_rng(SEED)
    Q = np.eye(9) - P_num
    opnorm = lambda E: float(np.abs(np.linalg.eigvalsh(partial_transpose(E))).max())

    # (a) Random feasible effects E = P + Q X Q with 0 <= X <= 1 (no symmetry assumed).
    worst_random = np.inf
    for _ in range(20000):
        A = rng.normal(size=(9, 9)) + 1j * rng.normal(size=(9, 9))
        _, V = np.linalg.eigh(A + A.conj().T)
        spec = rng.uniform(0, 1, 9) ** rng.uniform(0.2, 5)
        X = V @ np.diag(spec) @ V.conj().T
        worst_random = min(worst_random, opnorm(P_num + Q @ X @ Q))
    assert worst_random >= lam - 1e-12

    # (b) Symmetric family: E = sum_e [P_e + t_e (1 - P_e)] + sum_i d_i |ii><ii|.
    blocks = [(idx, P_num[np.ix_(idx, idx)]) for idx in EDGES.values()]

    def build(x):
        x = np.clip(x, 0, 1)
        E = np.zeros((9, 9), complex)
        for (idx, B), t in zip(blocks, x[:3]):
            E[np.ix_(idx, idx)] = B + t * (np.eye(2) - B)
        for n, dval in zip((0, 4, 8), x[3:]):
            E[n, n] = dval
        return E

    def descend(x):  # Nelder-Mead with restarts, since the objective is not smooth
        for _ in range(8):
            x = minimize(lambda y: opnorm(build(y)), x, method="Nelder-Mead",
                         options=dict(maxiter=20000, xatol=1e-13, fatol=1e-15)).x
        return opnorm(build(x))

    best = min(descend(rng.uniform(0, 1, 6)) for _ in range(30))
    assert lam - 1e-12 <= best <= lam + 1e-9, (best, lam)

    # (c) Dual witness: ||E^Gamma|| >= Tr(E Y^Gamma) >= Tr(P Y^Gamma) + (negative part of Q Y^Gamma Q)
    #     for every Y >= 0 with Tr Y = 1 and every feasible E (since E = P + Q E Q, 0 <= QEQ <= Q).
    E_star = build(np.array([(lam - p) / (1 - p) for p in (64 / 113, 64 / 113, 0.5)] + [0, 0, 0]))
    G = partial_transpose(E_star)[np.ix_((0, 4, 8), (0, 4, 8))]
    phi = np.zeros(9, complex)
    phi[[0, 4, 8]] = np.linalg.eigh(G)[1][:, -1]
    Y = (1 - lam) * np.outer(phi, phi.conj())
    for n, wgt in ((1, 64 / 177), (7, 64 / 177), (2, 49 / 177)):  # |01>, |21>, |02>
        Y[n, n] += lam * wgt
    assert abs(np.trace(Y) - 1) < 1e-14 and np.linalg.eigvalsh(Y)[0] > -1e-14
    YG = partial_transpose(Y)
    neg = np.linalg.eigvalsh(Q @ YG @ Q)
    dual_value = float(np.trace(P_num @ YG).real + neg[neg < 0].sum())
    assert abs(dual_value - lam) < 1e-12
    return dict(random_feasible_effects=20000, smallest_random_norm=worst_random,
                symmetric_family_multistart_minimum=best, dual_witness_value=dual_value)


def dimension_counts():
    # lambda*^{-1} = 1 + 7/sqrt(177);  13.305^2 > 177 gives a rational lower bound.
    root_upper = Fraction(13305, 1000)
    assert root_upper**2 > 177
    low = 1 + 7 / root_upper
    high = Fraction(391, 250)  # Zhu-Wang: W0(P^{(n)}) >= ||T^Gamma||_1^{-n} > (250/391)^n
    rows = []
    for n in range(1, 6):
        lo, hi = floor(low**n), floor(high**n)   # (391/250)^n is never an integer
        rows.append(dict(copies=n, lower=lo, upper=hi, determined=lo == hi))
    assert [r["lower"] for r in rows[:4]] == [1, 2, 3, 5]
    assert all(r["determined"] for r in rows[:4]) and not rows[4]["determined"]
    return rows


def main():
    start = time.perf_counter()
    P = support_exact()
    blocks = check_blocks(P)
    lam, weights, _ = optimal_effect_exact(P)
    lam_f = float(lam.evalf(30))
    P_num = np.array(P.evalf(30).tolist(), dtype=complex)
    lower = lower_bound_tests(P_num, lam_f)
    dims = dimension_counts()
    report = dict(
        status="passed", seed=SEED,
        support_blocks=blocks,
        optimum=dict(exact="sqrt(177)/(7+sqrt(177))", value=lam_f,
                     complement_weights={k: str(sp.nsimplify(v)) for k, v in weights.items()},
                     rate_lower_bound_log2=float(sp.log(1 / lam, 2).evalf(20))),
        lower_bound_checks=lower,
        output_dimensions=dims,
        elapsed_seconds=round(time.perf_counter() - start, 1),
        sha256={"checks/verify_ppt_distillation.py":
                hashlib.sha256(Path(__file__).read_bytes()).hexdigest()},
        limits=("Steps 1, 2 and 4 are exact; step 3 is floating point and complements, "
                "but does not replace, the analytic lower bound."),
    )
    DATA.mkdir(exist_ok=True)
    (DATA / "verification.json").write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")
    print(json.dumps({k: report[k] for k in ("status", "optimum", "lower_bound_checks",
                                             "elapsed_seconds")}, indent=2))


if __name__ == "__main__":
    try:
        main()
    except AssertionError as err:
        print("FAILED:", repr(err))
        sys.exit(1)
