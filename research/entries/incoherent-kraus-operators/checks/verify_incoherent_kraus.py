"""Verify the results on the number of incoherent Kraus operators.

An operator is incoherent when each column has at most one non-zero entry:
K = sum_j c_j |f(j)><j| for a "type" f: {0..d-1} -> {0..d-1}.  The Choi vector of K is the
vector of its entries in the basis e_ij = |i><j|, and J = sum_k |K_k>><<K_k|.

Checks:
  1. Qubit (Theorem 1): 4000 random incoherent CP maps given by 5 to 12 incoherent operators are
     rewritten with four incoherent operators by the recurrence of the proof; the Choi matrices agree.
     The qubit depolarizing channel has Choi rank 4, so four is needed.
  2. Dimension count (Theorem 2): D_d = d^2 (d^2 - d + 1) and r_d = ceil(D_d / (2d - 1)), and a
     floating-point check that the parametrisation by r random types has rank min((2d-1) r, D_d).
  3. Qutrit (Theorems 3 and 4), exact: at the Gaussian-integer point stored in
     data/qutrit_certificate.json, the integer Jacobian of (coefficients) -> J for the thirteen
     stored types has rank 63 = D_3 modulo the prime 2^31 - 1 (hence over Q), the matrix
     S = sum_k K_k^dag K_k is diagonal with positive integer entries, and the composite of the
     Jacobian with the map J -> S has rank 9 modulo the same prime.

Usage (from the repository root):
    python research/entries/incoherent-kraus-operators/checks/verify_incoherent_kraus.py
Writes data/verification.json and exits non-zero on failure.
"""
import hashlib
import json
import sys
import time
from math import ceil
from pathlib import Path

import numpy as np

ENTRY = Path(__file__).resolve().parent.parent
DATA = ENTRY / "data"
SEED = 20261119
PRIME = 2**31 - 1


# ---------------------------------------------------------------------------------------------
# 1. Qubit: four incoherent Kraus operators
# ---------------------------------------------------------------------------------------------
CYCLE = [(0, 0), (1, 1), (1, 0), (0, 1)]  # vertices of the 4-cycle; edge k joins k and k+1


def qubit_choi(ops):
    J = np.zeros((4, 4), complex)
    for K in ops:
        v = np.array([K[i, j] for (i, j) in CYCLE])
        J += np.outer(v, v.conj())
    return J


def chain(a0, d, m, steps):
    """a_0 = a0 and a_{k+1} = d_{k+1} - m_k / a_k; None if some a_k <= 0 while m_k > 0."""
    a = [a0]
    for k in range(steps):
        if m[k] > 0 and a[k] <= 0:
            return None
        a.append(d[(k + 1) % 4] - (m[k] / a[k] if m[k] > 0 else 0.0))
    return a


def four_kraus(J):
    """Four incoherent Kraus operators with Choi matrix J (construction of Theorem 1)."""
    assert abs(J[0, 2]) < 1e-10 and abs(J[1, 3]) < 1e-10, "J lacks the incoherent zero pattern"
    d = np.real(np.diag(J)).copy()
    c = [J[k, (k + 1) % 4] for k in range(4)]
    m = [abs(x) ** 2 for x in c]
    rot = 0
    if min(m) == 0:  # cut case: rotate so that the closing edge is the vanishing one
        rot = (m.index(0) + 1) % 4
        d = np.roll(d, -rot)
        c = c[rot:] + c[:rot]
        m = m[rot:] + m[:rot]
        a = chain(d[0], d, m, 3)
        assert a is not None and a[3] > -1e-9, "no edge decomposition"
    else:
        def G(a0):
            a = chain(a0, d, m, 4)
            return -np.inf if a is None else a[4] - a0
        lo, hi = 0.0, d[0]                      # smallest a0 for which the chain is defined
        for _ in range(200):
            mid = 0.5 * (lo + hi)
            lo, hi = (lo, mid) if np.isfinite(G(mid)) else (mid, hi)
        left, right = hi, d[0]                  # G is concave there: ternary search for its top
        for _ in range(300):
            u, v = left + (right - left) / 3, right - (right - left) / 3
            left, right = (u, right) if G(u) < G(v) else (left, v)
        top = 0.5 * (left + right)
        assert G(top) > -1e-9 * d[0], "no edge decomposition: J is not incoherent"
        lo, hi = top, d[0]                      # largest zero of G (G(d_0) < 0)
        for _ in range(200):
            mid = 0.5 * (lo + hi)
            lo, hi = (mid, hi) if G(mid) >= 0 else (lo, mid)
        a = chain(lo, d, m, 4)
    ops = []
    for k in range(4 if min(m) > 0 else 3):
        u, v = CYCLE[(k + rot) % 4], CYCLE[(k + 1 + rot) % 4]
        x = np.sqrt(max(a[k], 0.0))
        K = np.zeros((2, 2), complex)
        K[u] = x
        K[v] = np.conj(c[k]) / x if m[k] > 0 else 0.0
        ops.append(K)
    if min(m) == 0:                              # diagonal remainder at the end of the path
        K = np.zeros((2, 2), complex)
        K[CYCLE[(3 + rot) % 4]] = np.sqrt(max(a[3], 0.0))
        ops.append(K)
    return ops


def is_incoherent(K, tol=1e-12):
    return all(np.sum(np.abs(K[:, col]) > tol) <= 1 for col in range(K.shape[1]))


def random_incoherent(rng, d, n_ops):
    ops = []
    for _ in range(n_ops):
        K = np.zeros((d, d), complex)
        for col in range(d):
            K[rng.integers(d), col] = rng.normal() + 1j * rng.normal()
        ops.append(K)
    return ops


def check_qubit(rng):
    worst, cyclic, cut = 0.0, 0, 0
    for trial in range(4000):
        J = qubit_choi(random_incoherent(rng, 2, int(rng.integers(5, 13))))
        new = four_kraus(J)
        assert len(new) == 4 and all(is_incoherent(K) for K in new)
        worst = max(worst, np.abs(qubit_choi(new) - J).max() / np.abs(J).max())
        if min(abs(J[k, (k + 1) % 4]) for k in range(4)) > 1e-14:
            cyclic += 1
        else:
            cut += 1
    assert worst < 1e-7, worst
    # The four Pauli matrices are incoherent; the depolarizing channel has Choi rank 4.
    paulis = [np.eye(2), np.array([[0, 1], [1, 0]]), np.array([[0, -1j], [1j, 0]]), np.diag([1, -1])]
    assert all(is_incoherent(P) for P in paulis)
    J = qubit_choi([P / 2 for P in paulis])
    assert np.linalg.matrix_rank(J) == 4
    assert np.allclose(sum((P / 2).conj().T @ (P / 2) for P in paulis), np.eye(2))
    return dict(maps_tested=cyclic + cut, cyclic_cases=cyclic, cut_cases=cut,
                max_relative_choi_error=worst, depolarizing_choi_rank=4)


# ---------------------------------------------------------------------------------------------
# 2. Dimension count in dimension d
# ---------------------------------------------------------------------------------------------
def jacobian(d, types, c):
    """Real Jacobian of c -> J = sum_k v_k v_k^dag, columns (Re c, Im c), rows
    (diagonal of J, Re and Im of the strict upper triangle)."""
    n = d * d
    iu = np.triu_indices(n, 1)
    r = len(types)
    V = np.zeros((r, n), complex)
    for k in range(r):
        for j in range(d):
            V[k, types[k][j] * d + j] = c[k][j]
    cols, dS = [], []
    for part in (1, 1j):
        for k in range(r):
            for j in range(d):
                e = np.zeros(n, complex)
                e[types[k][j] * d + j] = part
                dJ = np.outer(e, V[k].conj()) + np.outer(V[k], e.conj())
                cols.append(np.concatenate([np.real(np.diag(dJ)), np.real(dJ[iu]), np.imag(dJ[iu])]))
                # S_{jl} = sum_i J_{(i,l),(i,j)} with index (i,j) -> i d + j
                S = np.array([[sum(dJ[i * d + l, i * d + jj] for i in range(d)) for l in range(d)]
                              for jj in range(d)])
                iud = np.triu_indices(d, 1)
                dS.append(np.concatenate([np.real(np.diag(S)), np.real(S[iud]), np.imag(S[iud])]))
    return np.array(cols).T, np.array(dS).T


def check_dimension_count(rng):
    table = []
    for d in range(2, 7):
        D = d * d * (d * d - d + 1)
        assert D == d * d + 2 * (d * (d - 1) // 2) * d * d
        table.append(dict(d=d, cone_dimension=D, lower_bound=ceil(D / (2 * d - 1))))
    assert [row["lower_bound"] for row in table[:3]] == [4, 13, 30]
    observed = []
    for d, rs in ((2, (2, 3, 4, 5)), (3, (8, 11, 12, 13, 14))):
        D = d * d * (d * d - d + 1)
        for r in rs:
            types = [tuple(int(x) for x in rng.integers(d, size=d)) for _ in range(r)]
            c = rng.normal(size=(r, d)) + 1j * rng.normal(size=(r, d))
            s = np.linalg.svd(jacobian(d, types, c)[0], compute_uv=False)
            rank = int((s > 1e-9 * s[0]).sum())
            assert rank <= min((2 * d - 1) * r, D)
            observed.append(dict(d=d, r=r, rank=rank, ceiling=min((2 * d - 1) * r, D)))
    return table, observed


# ---------------------------------------------------------------------------------------------
# 3. Qutrit: exact rank certificate
# ---------------------------------------------------------------------------------------------
def rank_mod_p(M, p=PRIME):
    A = [[int(v) % p for v in row] for row in M]
    rows, cols, rk = len(A), len(A[0]), 0
    for col in range(cols):
        piv = next((i for i in range(rk, rows) if A[i][col]), None)
        if piv is None:
            continue
        A[rk], A[piv] = A[piv], A[rk]
        inv = pow(A[rk][col], p - 2, p)
        A[rk] = [(v * inv) % p for v in A[rk]]
        for i in range(rows):
            if i != rk and A[i][col]:
                f = A[i][col]
                A[i] = [(a - f * b) % p for a, b in zip(A[i], A[rk])]
        rk += 1
        if rk == rows:
            break
    return rk


def to_int_matrix(M):
    R = np.round(M)
    assert np.abs(M - R).max() == 0
    return R.astype(np.int64)


def check_qutrit(rng):
    cert = json.loads((DATA / "qutrit_certificate.json").read_text(encoding="utf-8"))
    d = 3
    types = [tuple(t) for t in cert["types"]]
    c = [[complex(re, im) for re, im in row] for row in cert["coefficients"]]
    assert len(types) == 13 and all(len(t) == 3 for t in types)
    assert all(abs(x) > 0 for row in c for x in row)
    # S = sum_k K_k^dag K_k is diagonal with positive integer entries.
    S = np.zeros((d, d), complex)
    for f, row in zip(types, c):
        K = np.zeros((d, d), complex)
        for j in range(d):
            K[f[j], j] = row[j]
        S += K.conj().T @ K
    assert np.abs(S - np.diag(np.diag(S))).max() == 0 and np.all(np.diag(S).real > 0)
    assert [int(x) for x in np.diag(S).real] == cert["S_diagonal"]
    jac, dS = jacobian(d, types, c)
    jac_i, dS_i = to_int_matrix(jac), to_int_matrix(dS)
    assert jac_i.shape == (81, 78)
    zero_rows = int((np.abs(jac_i).sum(axis=1) == 0).sum())
    rank_J = rank_mod_p(jac_i)
    rank_S = rank_mod_p(dS_i)
    assert zero_rows == 18 and rank_J == 63 and rank_S == 9
    # Floating-point corroboration: rank 63 at random points, and twelve of the types give <= 60.
    float_ranks = []
    for _ in range(10):
        z = rng.normal(size=(13, d)) + 1j * rng.normal(size=(13, d))
        s = np.linalg.svd(jacobian(d, types, z)[0], compute_uv=False)
        float_ranks.append(int((s > 1e-9 * s[0]).sum()))
    assert all(x == 63 for x in float_ranks)
    return dict(types=cert["types"], prime=PRIME, jacobian_shape=[81, 78], identically_zero_rows=zero_rows,
                jacobian_rank_mod_p=rank_J, trace_map_rank_mod_p=rank_S, S_diagonal=cert["S_diagonal"],
                float_ranks_at_random_points=float_ranks)


def main():
    start = time.perf_counter()
    rng = np.random.default_rng(SEED)
    qubit = check_qubit(rng)
    table, observed = check_dimension_count(rng)
    qutrit = check_qutrit(rng)
    report = dict(
        status="passed", seed=SEED, qubit=qubit, lower_bound_table=table,
        random_type_ranks=observed, qutrit=qutrit,
        elapsed_seconds=round(time.perf_counter() - start, 1),
        sha256={name: hashlib.sha256((ENTRY / name).read_bytes()).hexdigest()
                for name in ("checks/verify_incoherent_kraus.py", "data/qutrit_certificate.json")},
        limits=("The qutrit ranks are exact (integer matrices, rank modulo a prime). The qubit "
                "reconstruction and the random-type ranks are floating-point checks."),
    )
    (DATA / "verification.json").write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")
    print(json.dumps({k: report[k] for k in ("status", "qubit", "elapsed_seconds")}, indent=2))
    print(json.dumps({k: qutrit[k] for k in ("jacobian_rank_mod_p", "trace_map_rank_mod_p",
                                              "S_diagonal")}))


if __name__ == "__main__":
    try:
        main()
    except AssertionError as err:
        print("FAILED:", repr(err))
        sys.exit(1)
