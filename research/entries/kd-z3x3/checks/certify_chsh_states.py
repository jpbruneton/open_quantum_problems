"""Certificates for the six pairs (p, q) settled by an explicit state in the manuscript:
(3, 5), (3, 7), (3, 11), (3, 13), (3, 17) and (5, 5).

Each file data/chsh-state-<p>-<q>.json stores rational weights on the four families of
product projectors
    |a><a| x |b><b|,   |f_al><f_al| x |b><b|,   |f_al><f_al| x |f_be><f_be|,   |a><a| x |f_be><f_be|,
where |f> denotes a Fourier vector. With these weights w12, w32, w34, w14,
    N^2 Q(rho)(x) = N (w12[x1, x2] + w32[x3, x2] + w34[x3, x4] + w14[x1, x4])   exactly.

Checks, for the CHSH witness W of the manuscript:
  (i)   Tr rho = 1                                   exact rational arithmetic
  (ii)  Q(rho) >= 0 entrywise                        exact rational arithmetic
  (iii) rho > 0                                      Arb ball arithmetic (congruence + Gershgorin)
  (iv)  Tr(W rho) < 0                                exact rational arithmetic
  (v)   Tr(W P) >= 0 on every pure KD-positive P     exact rational arithmetic

Run from the repository root:
    python research/entries/kd-z3x3/checks/certify_chsh_states.py
Writes data/chsh-certificate-<p>-<q>.json. Requires python-flint and numpy.
"""
import json
import sys
from fractions import Fraction
from pathlib import Path

import numpy as np

HERE = Path(__file__).resolve().parent
DATA = HERE.parent / "data"
sys.path.insert(0, str(HERE))

from flint import acb, acb_mat, ctx  # noqa: E402
from chsh_common import (witness_functions, witness_on_pure, fourier_acb, kron_acb,  # noqa: E402
                         identity_acb, herm, certify_pd)

ctx.prec = 160
PAIRS = [(3, 5), (3, 7), (3, 11), (3, 13), (3, 17), (5, 5)]


def edges(u):
    u1, u2, u3, u4 = u
    # (sign in the witness, left function, right function), in the order w12, w32, w34, w14
    return [(+1, u1, u2), (+1, u3, u2), (+1, u3, u4), (-1, u1, u4)]


def fourier_float(m):
    return np.array([[np.exp(2j * np.pi * x * a / m) for a in range(m)] for x in range(m)]) / np.sqrt(m)


def rho_float(p, q, W):
    Fp, Fq = fourier_float(p), fourier_float(q)
    U = [np.eye(p * q), np.kron(Fp, np.eye(q)), np.kron(Fp, Fq), np.kron(np.eye(p), Fq)]
    return sum(U[e] @ np.diag(np.array([[float(x) for x in row] for row in W[e]]).ravel())
               @ U[e].conj().T for e in range(4))


def kd_array_float(rho, p, q):
    """Q(rho)(g, k) from the definition, in floating point (convention cross-check only)."""
    pts = [(a, b) for a in range(p) for b in range(q)]
    C = np.array([[np.exp(2j * np.pi * (k[0] * x[0] / p + k[1] * x[1] / q)) for x in pts] for k in pts])
    return (rho @ C.T) * np.conj(C.T) / (p * q)


def witness_float(p, q, u):
    u1, u2, u3, u4 = [np.array(f, float) for f in u]
    Fp, Fq = fourier_float(p), fourier_float(q)
    A0, A1 = np.diag(u1), Fp @ np.diag(u3) @ Fp.conj().T
    B0, B1 = np.diag(u2), Fq @ np.diag(u4) @ Fq.conj().T
    return np.eye(p * q) + np.kron(A0, B0) + np.kron(A1, B0) + np.kron(A1, B1) - np.kron(A0, B1)


def certify(p, q, W):
    n = p * q
    u = witness_functions(p, q)
    rep = {"group": f"Z_{p} x Z_{q}", "u": [list(map(int, f)) for f in u]}

    total = sum(W[e][a][b] for e in range(4) for a in range(p) for b in range(q))
    rep["trace_is_one"] = total == 1

    qmin = min(W[0][x1][x2] + W[1][x3][x2] + W[2][x3][x4] + W[3][x1][x4]
               for x1 in range(p) for x2 in range(q) for x3 in range(p) for x4 in range(q))
    rep["min_N_Q"] = str(qmin)
    rep["kd_positive"] = qmin >= 0

    value = Fraction(0)
    for e, (sign, f, g) in enumerate(edges(u)):
        for a in range(p):
            for b in range(q):
                value += W[e][a][b] * (1 + sign * f[a] * g[b])
    rep["Tr_W_rho"] = str(value)
    rep["witness_negative"] = value < 0

    pure = witness_on_pure(p, q, u)
    pure_min = min(v for v, _ in pure)
    rep["pure_states"] = len(pure)
    rep["min_Tr_W_pure"] = str(pure_min)
    rep["witness_nonnegative_on_pure"] = pure_min >= 0

    Fp, Fq = fourier_acb(p), fourier_acb(q)
    Us = [identity_acb(n), kron_acb(Fp, identity_acb(q)), kron_acb(Fp, Fq), kron_acb(identity_acb(p), Fq)]
    rho = None
    for e in range(4):
        D = acb_mat([[acb(W[e][i // q][i % q].numerator) / W[e][i // q][i % q].denominator
                      if i == j else acb(0) for j in range(n)] for i in range(n)])
        term = Us[e] * D * herm(Us[e])
        rho = term if rho is None else rho + term

    rnum = rho_float(p, q, W)
    Qn = kd_array_float(rnum, p, q)
    Qf = np.array([[float(W[0][x1][x2] + W[1][x3][x2] + W[2][x3][x4] + W[3][x1][x4]) / n
                    for x3 in range(p) for x4 in range(q)] for x1 in range(p) for x2 in range(q)])
    rep["float_convention_check_max_error"] = float(np.abs(Qn - Qf).max())
    rep["float_Tr_W_rho"] = float(np.real(np.trace(witness_float(p, q, u) @ rnum)))

    _, V = np.linalg.eigh(rnum)
    ok, lower = certify_pd(rho, V)
    rep["positive_definite_certified"] = ok
    rep["eigenvalue_lower_bound"] = str(lower)
    rep["all_ok"] = all([rep["trace_is_one"], rep["kd_positive"], rep["witness_negative"],
                         rep["witness_nonnegative_on_pure"], ok,
                         rep["float_convention_check_max_error"] < 1e-12])
    return rep


def main():
    all_ok = True
    for p, q in PAIRS:
        stored = json.loads((DATA / f"chsh-state-{p}-{q}.json").read_text())
        W = [[[Fraction(s) for s in row] for row in stored["weights"][e]] for e in range(4)]
        rep = certify(p, q, W)
        (DATA / f"chsh-certificate-{p}-{q}.json").write_text(json.dumps(rep, indent=1) + "\n")
        print(f"Z_{p} x Z_{q}: Tr(W rho) = {rep['Tr_W_rho']}, min N Q = {rep['min_N_Q']}, "
              f"lambda_min >= {rep['eigenvalue_lower_bound']}, all_ok = {rep['all_ok']}", flush=True)
        all_ok = all_ok and rep["all_ok"]
    if not all_ok:
        raise SystemExit("certificate failed")


if __name__ == "__main__":
    main()
