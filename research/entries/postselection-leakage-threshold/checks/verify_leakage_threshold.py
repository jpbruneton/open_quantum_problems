"""Verification for the research note "Exact leakage threshold for the positivity
of the Margenau-Hill image of a post-selection" (entry postselection-leakage-threshold).

Claim: for a density matrix rho, an orthogonal projector P and the effect
E = P + eta (I - P) with 0 <= eta <= 1, the Margenau-Hill operator
Phi(eta) = (E rho + rho E)/2 is positive semidefinite if and only if
eta >= eta_crit = (1 - sqrt(1 - kappa^2)) / (1 + sqrt(1 - kappa^2)),
where kappa = || A^{+1/2} C D^{+1/2} || is computed from the blocks
rho = [[A, C], [C^dag, D]] relative to P (Moore-Penrose square roots).

Run from the repository root:
    python research/entries/postselection-leakage-threshold/checks/verify_leakage_threshold.py
Deterministic (fixed seed). Requires numpy and sympy. Writes data/verification.json.
"""
import json
import platform
import sys
from pathlib import Path

import numpy as np
import sympy as sp

ENTRY = Path(__file__).resolve().parent.parent
RECORD = ENTRY / "data" / "verification.json"
SEED = 20261119


def eta_crit(kappa):
    s = np.sqrt(max(0.0, 1.0 - kappa ** 2))
    return (1.0 - s) / (1.0 + s)


def psd_pinv_sqrt(M, tol=1e-10):
    w, V = np.linalg.eigh(M)
    inv = np.array([1.0 / np.sqrt(x) if x > tol else 0.0 for x in w])
    return (V * inv) @ V.conj().T


def blocks(rho, Q1, Q2):
    A = Q1.conj().T @ rho @ Q1
    C = Q1.conj().T @ rho @ Q2
    D = Q2.conj().T @ rho @ Q2
    return A, C, D


def kappa_and_witness(rho, Q1, Q2):
    """kappa and the vector w = (u, v) of the manuscript (in the full space)."""
    A, C, D = blocks(rho, Q1, Q2)
    Ah, Dh = psd_pinv_sqrt(A), psd_pinv_sqrt(D)
    K = Ah @ C @ Dh
    U, s, Vh = np.linalg.svd(K)
    kappa = float(s[0]) if s.size else 0.0
    y = Vh[0].conj()                     # right singular vector, K y = kappa x
    v = Dh @ y
    Apinv = Ah @ Ah
    return kappa, v, Apinv @ C @ v


def image(rho, P, eta):
    n = rho.shape[0]
    E = P + eta * (np.eye(n) - P)
    return (E @ rho + rho @ E) / 2


def min_eig(M):
    return float(np.linalg.eigvalsh((M + M.conj().T) / 2)[0])


def random_state(rng, n, rank):
    G = rng.normal(size=(n, rank)) + 1j * rng.normal(size=(n, rank))
    rho = G @ G.conj().T
    return rho / np.trace(rho).real


def random_projector(rng, n, r):
    G = rng.normal(size=(n, n)) + 1j * rng.normal(size=(n, n))
    Q, _ = np.linalg.qr(G)
    return Q[:, :r], Q[:, r:]


def check_instance(rho, Q1, Q2):
    """Return a dict of diagnostics and a pass flag for one (rho, P)."""
    P = Q1 @ Q1.conj().T
    kappa, v, Acv = kappa_and_witness(rho, Q1, Q2)
    ec = eta_crit(kappa)
    scale = np.linalg.norm(rho, 2)
    ok = kappa <= 1 + 1e-9
    # positive at and above the threshold
    grid = [ec] + list(ec + (1 - ec) * np.array([0.01, 0.1, 0.5, 1.0]))
    worst_above = min(min_eig(image(rho, P, e)) for e in grid)
    ok &= worst_above >= -1e-9 * scale
    # explicit negative direction below the threshold
    worst_witness_err = 0.0
    below_ok = True
    if ec > 1e-6:
        for frac in (0.0, 0.5, 0.9, 0.99):
            eta = frac * ec
            u = -(1 + eta) / 2 * Acv
            w = Q1 @ u + Q2 @ v
            val = float(np.real(w.conj() @ image(rho, P, eta) @ w))
            predicted = eta - (1 + eta) ** 2 * kappa ** 2 / 4   # times ||y||^2 = 1
            worst_witness_err = max(worst_witness_err, abs(val - predicted))
            below_ok &= val < 0 and min_eig(image(rho, P, eta)) < 0
    ok &= below_ok and worst_witness_err < 1e-9
    # bisection on the smallest eigenvalue reproduces the formula
    lo, hi = 0.0, 1.0
    if min_eig(image(rho, P, 0.0)) >= -1e-12 * scale:
        bis = 0.0
    else:
        for _ in range(60):
            mid = (lo + hi) / 2
            if min_eig(image(rho, P, mid)) >= -1e-12 * scale:
                hi = mid
            else:
                lo = mid
        bis = hi
    bis_err = abs(bis - ec)
    # at kappa = 1 the smallest eigenvalue vanishes to second order at eta = 1,
    # so bisection on its sign is less accurate there; the witness covers eta < 1
    ok &= bis_err < (5e-4 if kappa > 1 - 1e-9 else 1e-6)
    # kappa < 1 exactly when rank(rho) = rank(A) + rank(D)
    A, _, D = blocks(rho, Q1, Q2)
    rk = [np.linalg.matrix_rank(M, tol=1e-9) for M in (rho, A, D)]
    rank_additive = rk[0] == rk[1] + rk[2]
    ok &= rank_additive == (kappa < 1 - 1e-7)
    return ok, {"kappa": kappa, "eta_crit": ec, "bisection": bis,
                "rank_additive": bool(rank_additive),
                "min_eig_on_[eta_crit,1]": worst_above,
                "witness_error": worst_witness_err}


def exact_checks():
    eta, k = sp.symbols("eta kappa", positive=True)
    s = sp.sqrt(1 - k ** 2)
    ec = (1 - s) / (1 + s)
    # eta_crit is the smaller root of kappa^2 (1+eta)^2 = 4 eta
    root_ok = sp.simplify(k ** 2 * (1 + ec) ** 2 - 4 * ec) == 0
    other = (1 + s) / (1 - s)
    product_ok = sp.simplify(ec * other - 1) == 0          # roots are reciprocal
    series = sp.series(ec, k, 0, 7).removeO()
    series_ok = sp.expand(series - (k ** 2 / 4 + k ** 4 / 8 + 5 * k ** 6 / 64)) == 0
    # qubit example: rho = (I + r X)/2, P = |0><0|, r = 4/5
    r = sp.Rational(4, 5)
    rho = sp.Matrix([[1, r], [r, 1]]) / 2
    E = sp.diag(1, eta)
    Phi = (E * rho + rho * E) / 2
    det = sp.factor(Phi.det())
    roots = sp.solve(sp.Eq(Phi.det(), 0), eta)
    qubit_ok = sorted(roots) == [sp.Rational(1, 4), 4] and ec.subs(k, r) == sp.Rational(1, 4)
    r3 = sp.Rational(3, 5)
    second_ok = sp.nsimplify(ec.subs(k, r3)) == sp.Rational(1, 9)
    out = {
        "eta_crit_is_root": bool(root_ok),
        "roots_reciprocal": bool(product_ok),
        "series": str(series),
        "qubit_r_4/5_det_Phi": str(det),
        "qubit_r_4/5_roots": [str(x) for x in sorted(roots)],
        "qubit_r_3/5_eta_crit": str(sp.nsimplify(ec.subs(k, r3))),
    }
    return bool(root_ok and product_ok and series_ok and qubit_ok and second_ok), out


def main():
    rng = np.random.default_rng(SEED)
    ok = True
    rec = {}

    exact_ok, exact_rec = exact_checks()
    print(f"[1] exact: {exact_rec}")
    ok &= exact_ok
    rec["exact"] = exact_rec

    # [2] the diagonal example of the original note: kappa = 0.8, eta_crit = 1/4
    a = np.diag([1.0, 2.0])
    d = np.diag([3.0, 4.0])
    c = np.sqrt(a) @ np.diag([0.8, 0.2]) @ np.sqrt(d)
    rho = np.block([[a, c], [c.T, d]])
    rho = rho / np.trace(rho)
    Q = np.eye(4)
    flag, info = check_instance(rho, Q[:, :2], Q[:, 2:])
    print(f"[2] block-diagonal example: {info}")
    ok &= flag and abs(info["eta_crit"] - 0.25) < 1e-12
    rec["block_example"] = info

    # [3] random full-rank and rank-deficient states, random projectors
    cases = {"full_rank": [], "rank_deficient": [], "pure": []}
    stats = {}
    for label in cases:
        worst_bis, worst_wit, worst_min, count, fails = 0.0, 0.0, 0.0, 0, 0
        for n in range(2, 7):
            for r in range(1, n):
                for _ in range(20):
                    rank = {"full_rank": n, "rank_deficient": max(1, n - 2), "pure": 1}[label]
                    rho = random_state(rng, n, rank)
                    Q1, Q2 = random_projector(rng, n, r)
                    flag, info = check_instance(rho, Q1, Q2)
                    count += 1
                    fails += not flag
                    worst_bis = max(worst_bis, abs(info["bisection"] - info["eta_crit"]))
                    worst_wit = max(worst_wit, info["witness_error"])
                    worst_min = min(worst_min, info["min_eig_on_[eta_crit,1]"])
        stats[label] = {"instances": count, "failures": fails,
                        "max_|bisection-formula|": worst_bis,
                        "max_witness_error": worst_wit,
                        "min_eig_on_[eta_crit,1]": worst_min}
        print(f"[3] {label}: {stats[label]}")
        ok &= fails == 0
    rec["random"] = stats

    # [4] singular blocks built explicitly: A and D singular, C linking supports
    fails, count = 0, 0
    for _ in range(200):
        n1, n2 = rng.integers(2, 4), rng.integers(2, 4)
        k1, k2 = rng.integers(1, n1), rng.integers(1, n2)
        rho_small = random_state(rng, k1 + k2, k1 + k2)
        V1 = random_projector(rng, n1, k1)[0]
        V2 = random_projector(rng, n2, k2)[0]
        emb = np.zeros((n1 + n2, k1 + k2), complex)
        emb[:n1, :k1] = V1
        emb[n1:, k1:] = V2
        rho = emb @ rho_small @ emb.conj().T
        Q = np.eye(n1 + n2)
        flag, info = check_instance(rho, Q[:, :n1], Q[:, n1:])
        count += 1
        fails += not flag
    print(f"[4] singular A and D blocks: {count} instances, {fails} failures")
    ok &= fails == 0
    rec["singular_blocks"] = {"instances": count, "failures": fails}

    # [5] pure states with nonzero weight on both blocks have kappa = 1
    worst = 0.0
    for _ in range(100):
        n = int(rng.integers(2, 7))
        r = int(rng.integers(1, n))
        rho = random_state(rng, n, 1)
        Q1, Q2 = random_projector(rng, n, r)
        worst = max(worst, abs(kappa_and_witness(rho, Q1, Q2)[0] - 1.0))
    print(f"[5] generic pure states: max |kappa - 1| = {worst:.1e}")
    ok &= worst < 1e-8
    rec["pure_states_max_|kappa-1|"] = worst

    print("RESULT:", "PASS" if ok else "FAIL")
    record = {
        "entry": "postselection-leakage-threshold",
        "checker": "checks/verify_leakage_threshold.py",
        "seed": SEED,
        "python": platform.python_version(),
        "numpy": np.__version__,
        "sympy": sp.__version__,
        "result": "PASS" if ok else "FAIL",
        "checks": rec,
    }
    RECORD.parent.mkdir(parents=True, exist_ok=True)
    RECORD.write_text(json.dumps(record, indent=2, default=float) + "\n")
    print(f"record written to {RECORD.relative_to(ENTRY.parents[2])}")
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
