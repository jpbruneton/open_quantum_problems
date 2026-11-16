"""Search and independently certify a KD-positive non-classical state for Z3^2.

NumPy is used ONLY to discover coefficients. The certificate is checked from
scratch with Fraction arithmetic in Q(zeta_3), without an optimization solver.
No claim about historical novelty is made.
"""
from fractions import Fraction as F
import hashlib
import itertools as it
import json
from pathlib import Path
import time
import numpy as np

from verify_mathematics import elements, subgroups

ROOT = Path(__file__).resolve().parent
N = 9
GROUP = (3, 3)
ELEMS = elements(GROUP)


def masks():
    out = set()
    for h in subgroups(GROUP):
        for a in ELEMS:
            for c in ELEMS:
                out.add(tuple(int(((g[0] - a[0]) % 3, (g[1] - a[1]) % 3) in h and
                                  all(((chi[0] - c[0]) * x[0] + (chi[1] - c[1]) * x[1]) % 3 == 0 for x in h))
                              for g in ELEMS for chi in ELEMS))
    result = np.array(sorted(out), dtype=int)
    assert result.shape == (54, 81)
    assert np.all(result.sum(axis=1) == N)
    return result


def inverse_q(q):
    roots = np.exp(2j * np.pi / 3 * np.arange(3))
    return np.array([[sum(q[i, k] * roots[((g[0] - h[0]) * chi[0] + (g[1] - h[1]) * chi[1]) % 3]
                         for k, chi in enumerate(ELEMS)) for h in ELEMS] for i, g in enumerate(ELEMS)])


def kd(a):
    u = np.array([[np.exp(2j * np.pi * (g[0] * c[0] + g[1] * c[1]) / 3) for c in ELEMS] for g in ELEMS]) / 3
    return u.conj() * (a @ u)


def density_projection(a):
    a = (a + a.conj().T) / 2
    v, u = np.linalg.eigh(a)
    s = np.sort(v)[::-1]
    cs = np.cumsum(s) - 1
    idx = np.nonzero(s - cs / np.arange(1, N + 1) > 0)[0][-1]
    theta = cs[idx] / (idx + 1)
    return (u * np.maximum(v - theta, 0)) @ u.conj().T


def project(a, count=1500):
    x, p, q = a.copy(), np.zeros_like(a), np.zeros_like(a)
    for i in range(count):
        y = density_projection(x + p)
        p = x + p - y
        z = inverse_q(np.maximum(kd(y + q).real, 0))
        q = y + q - z
        if np.max(np.abs(z - x)) < 1e-11 and i > 100:
            x = z
            break
        x = z
    return x


# Arithmetic in Q(z), z^2+z+1=0. A pair denotes a+b*z.
def plus(x, y):
    return x[0] + y[0], x[1] + y[1]


def minus(x, y):
    return x[0] - y[0], x[1] - y[1]


def times(x, y):
    a, b = x
    c, d = y
    return a * c - b * d, a * d + b * c - b * d


def conjugate(x):
    return x[0] - x[1], -x[1]


def divide(x, y):
    norm = y[0] * y[0] - y[0] * y[1] + y[1] * y[1]
    a, b = times(x, conjugate(y))
    return a / norm, b / norm


ZERO = (F(0), F(0))
ONE = (F(1), F(0))
ROOTS = [ONE, (F(0), F(1)), (F(-1), F(-1))]


def certify(state_coeff, witness_coeff, out_file, state_q_override=None, witness_q_override=None):
    m = masks().tolist()
    d = [F(x).limit_denominator(10**6) for x in state_coeff]
    if d:
        d[0] += 1 - sum(d)
    c = [F(x).limit_denominator(10**5) for x in witness_coeff]
    state_q = [sum(d[i] * m[i][j] for i in range(54)) / N for j in range(81)]
    witness_q = [sum(c[i] * m[i][j] for i in range(54)) / N for j in range(81)]
    if state_q_override is not None:
        state_q = list(state_q_override)
        witness_q = list(witness_q_override)
    if min(state_q) <= 0 or sum(state_q) != 1:
        raise ValueError("Rounded state does not have strictly positive normalized KD entries")
    alpha = max(sum(witness_q[j] * row[j] for j in range(81)) for row in m)
    value = N * sum(a * b for a, b in zip(state_q, witness_q))
    if value <= alpha:
        raise ValueError("No exact witness gap after rounding")
    matrix = []
    for i, g in enumerate(ELEMS):
        row = []
        for h in ELEMS:
            value_gh = ZERO
            for k, chi in enumerate(ELEMS):
                power = ((g[0] - h[0]) * chi[0] + (g[1] - h[1]) * chi[1]) % 3
                value_gh = plus(value_gh, times((state_q[i * N + k], F(0)), ROOTS[power]))
            row.append(value_gh)
        matrix.append(row)
    assert all(matrix[j][i] == conjugate(matrix[i][j]) for i in range(N) for j in range(N))
    lower = [[ZERO for j in range(N)] for i in range(N)]
    diag = []
    for j in range(N):
        pivot = matrix[j][j]
        for k in range(j):
            pivot = minus(pivot, times(times(lower[j][k], (diag[k], F(0))), conjugate(lower[j][k])))
        if pivot[1] != 0 or pivot[0] <= 0:
            raise ValueError("Exact LDL positivity certificate failed")
        diag.append(pivot[0])
        lower[j][j] = ONE
        for i in range(j + 1, N):
            v = matrix[i][j]
            for k in range(j):
                v = minus(v, times(times(lower[i][k], (diag[k], F(0))), conjugate(lower[j][k])))
            lower[i][j] = divide(v, pivot)
    output = {"group": [3, 3], "status": "exactly-certified-example; historical novelty unassessed",
              "construction": "Q_rho=sum_i state_coeff[i] * pure_KD_mask[i] / 9",
              "pure_masks": m, "state_coeff": list(map(str, d)), "witness_coeff": list(map(str, c)),
              "Q_state": [list(map(str, state_q[i*N:(i+1)*N])) for i in range(N)],
              "Q_witness": [list(map(str, witness_q[i*N:(i+1)*N])) for i in range(N)],
              "minimum_Q_state": str(min(state_q)), "trace": str(sum(state_q)),
              "witness_free_maximum": str(alpha), "witness_state_value": str(value),
              "witness_gap": str(value - alpha), "witness_gap_float": float(value - alpha),
              "LDL_positive_pivots": list(map(str, diag)),
              "field": "Q(zeta_3), zeta_3^2+zeta_3+1=0",
              "source_for_complete_pure_state_classification": "2501.12252v2, Theorem 3.1",
              "script_sha256": hashlib.sha256(Path(__file__).read_bytes()).hexdigest()}
    out_file.write_text(json.dumps(output, indent=2), encoding="utf-8")
    return output


def main():
    started = time.monotonic()
    m = masks()
    projectors = np.array([inverse_q(row.reshape(N, N) / N) for row in m])
    a = np.array([np.r_[p.real.ravel(), p.imag.ravel()] for p in projectors]).T
    u, s, vh = np.linalg.svd(a, full_matrices=False)
    basis = u[:, s > 1e-9]
    pinv = np.linalg.pinv(a)
    rng = np.random.default_rng(20261116)
    import sys
    facets = "--facets" in sys.argv
    centered = np.array([np.r_[(p-np.eye(N)/N).real.ravel(), (p-np.eye(N)/N).imag.ravel()] for p in projectors])
    ut, st, vht = np.linalg.svd(centered, full_matrices=False)
    tangent_basis = vht[st > 1e-9].T
    polar = centered @ tangent_basis
    print("Pure states", len(m), "real span dimension", basis.shape[1], flush=True)
    best = -1
    for trial in range(30):
        if facets:
            w = np.zeros(polar.shape[1])
            active = []
            for depth in range(polar.shape[1]):
                if active:
                    ua, sa, vha = np.linalg.svd(polar[active], full_matrices=True)
                    null = vha[len(active):].T
                else:
                    null = np.eye(polar.shape[1])
                direction = null @ rng.normal(size=null.shape[1])
                denominator = polar @ direction
                slack = 1 - polar @ w
                bounds = [(max(0., slack[i]) / denominator[i], i) for i in range(len(m))
                          if i not in active and denominator[i] > 1e-9]
                step, index = min(bounds)
                w += step * direction
                active.append(index)
            vecw = tangent_basis @ w
            witness = vecw[:N*N].reshape(N,N) + 1j * vecw[N*N:].reshape(N,N)
            witness = (witness + witness.conj().T) / 2
            witness /= np.linalg.norm(witness)
        else:
            coeff = rng.normal(size=len(m))
            witness = np.einsum('i,ijk->jk', coeff, projectors)
            witness -= np.trace(witness).real / N * np.eye(N)
            witness /= np.linalg.norm(witness)
        coeff = pinv @ np.r_[witness.real.ravel(), witness.imag.ravel()]
        alpha = max(np.trace(p @ witness).real for p in projectors)
        if facets:
            scores = np.array([np.trace(p @ witness).real for p in projectors])
            touching = projectors[scores > alpha - 1e-7]
            center = touching.mean(axis=0)
            candidate = project(center + .02 * witness)
        else:
            candidate = project(8 * witness + np.eye(N) / N)
        vec = np.r_[candidate.real.ravel(), candidate.imag.ravel()]
        vec = basis @ (basis.T @ vec)
        candidate = vec[:N*N].reshape(N,N) + 1j * vec[N*N:].reshape(N,N)
        candidate /= np.trace(candidate).real
        eigen_min = np.min(np.linalg.eigvalsh(candidate))
        qmin = np.min(kd(candidate).real)
        eps = max(0., -eigen_min / (1 / N - eigen_min), -qmin / (1 / (N*N) - qmin)) + 1e-5
        candidate = (1 - eps) * candidate + eps * np.eye(N) / N
        gap = np.trace(candidate @ witness).real - alpha
        best = max(best, gap)
        print("Trial", trial, "gap", round(gap, 8), "best", round(best, 8), flush=True)
        if gap > 1e-6:
            state_coeff = pinv @ np.r_[candidate.real.ravel(), candidate.imag.ravel()]
            certificate = certify(state_coeff, coeff, ROOT / "z3x3-certificate.json")
            print("EXACT CERTIFICATE", certificate["witness_gap_float"], "elapsed", round(time.monotonic()-started,2), flush=True)
            return
    (ROOT / ("z3x3-facet-search-inconclusive.json" if facets else "z3x3-search-inconclusive.json")).write_text(json.dumps({"trials": 30, "best_gap": best,
                                                                    "seconds": time.monotonic()-started}), encoding="utf-8")
    print("Search inconclusive; no claim that the convex sets coincide.")


if __name__ == "__main__":
    main()
