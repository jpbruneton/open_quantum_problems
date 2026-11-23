"""Rigorous upper bounds on kappa_p = max_theta || cos(theta) A0 + i sin(theta) A1 || for p = 3, 5,
where A0 = diag(v_p) in the position basis of Z_p, A1 = F diag(v_p) F^* in the Fourier basis and
v_p is the alternating function of the manuscript.

With M(theta) = cos(theta) A0 + i sin(theta) A1 and phi = 2 theta,
    M(theta)^* M(theta) = C0 + cos(phi) C1 + sin(phi) C2,
    C0 = (A0^2 + A1^2)/2,   C1 = (A0^2 - A1^2)/2,   C2 = (i/2) [A0, A1].
On the grid phi_k = 2 pi k / K each bound lambda_max(phi_k) <= b_k is certified by proving
b_k I - (C0 + cos(phi_k) C1 + sin(phi_k) C2) > 0 in Arb ball arithmetic. Between grid points,
    lambda_max(phi) <= lambda_max(phi_k) + (pi / K) (||C1||_F + ||C2||_F)   for |phi - phi_k| <= pi / K.

Run from the repository root:
    python research/entries/kd-z3x3/checks/certify_kappa.py
Writes data/kappa-bounds.json. Requires python-flint and numpy.
"""
import json
import sys
from pathlib import Path

import numpy as np

HERE = Path(__file__).resolve().parent
DATA = HERE.parent / "data"
sys.path.insert(0, str(HERE))

from flint import acb, arb, ctx  # noqa: E402
from chsh_common import alternating, fourier_acb, diag_acb, herm, identity_acb, certify_pd  # noqa: E402

ctx.prec = 128


def frobenius(M):
    s = arb(0)
    for row in M.tolist():
        for z in row:
            s += abs(z) ** 2
    return s.sqrt()


def kappa_bound(p, K=4000):
    u = alternating(p)
    F = fourier_acb(p)
    A0 = diag_acb(u)
    A1 = F * diag_acb(u) * herm(F)
    C0 = (A0 * A0 + A1 * A1) * acb(0.5)
    C1 = (A0 * A0 - A1 * A1) * acb(0.5)
    C2 = (A0 * A1 - A1 * A0) * acb(0, 0.5)

    Fn = np.array([[np.exp(2j * np.pi * x * a / p) for a in range(p)] for x in range(p)]) / np.sqrt(p)
    A0n = np.diag(np.array(u, float)).astype(complex)
    A1n = Fn @ A0n @ Fn.conj().T
    C0n = (A0n @ A0n + A1n @ A1n) / 2
    C1n = (A0n @ A0n - A1n @ A1n) / 2
    C2n = 0.5j * (A0n @ A1n - A1n @ A0n)

    identity = identity_acb(p)
    best = None
    for k in range(K):
        phi = 2 * np.pi * k / K
        Hn = C0n + np.cos(phi) * C1n + np.sin(phi) * C2n
        b = float(np.linalg.eigvalsh(Hn)[-1]) + 1e-9
        Hb = C0 + C1 * acb(arb.cos_pi(arb(2 * k) / K)) + C2 * acb(arb.sin_pi(arb(2 * k) / K))
        _, V = np.linalg.eigh(b * np.eye(p) - Hn)
        ok, _ = certify_pd(identity * acb(b) - Hb, V)
        if not ok:
            raise RuntimeError(f"certification failed for p = {p} at grid point {k}")
        best = b if best is None or b > best else best

    lipschitz = (frobenius(C1) + frobenius(C2)) * arb.pi() / K
    kappa_squared = arb(best) + lipschitz
    return {"p": p, "u": u, "grid_points": K, "max_grid_bound": best,
            "lipschitz_term_upper": float(lipschitz.upper()),
            "kappa_squared_upper": float(kappa_squared.upper()),
            "kappa_upper": float(kappa_squared.sqrt().upper())}


if __name__ == "__main__":
    out = [kappa_bound(3), kappa_bound(5)]
    (DATA / "kappa-bounds.json").write_text(json.dumps(out, indent=1) + "\n")
    print(json.dumps(out, indent=1))
