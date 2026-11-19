#!/usr/bin/env python3
"""Verification for the research note "The root-fidelity matrix bounds the Holevo
quantity of three qubit states" (entry fidelity-matrix-holevo-bound).

Conjecture of Fannes, de Melo, Roga and Zyczkowski (arXiv:1104.2271): for three states,
    chi({p_i, rho_i}) <= S(C),   C = [ sqrt(p_i p_j) sqrt(F_ij) ],  F_ij = (tr|sqrt(rho_i) sqrt(rho_j)|)^2.

Checks (all deterministic, numpy/scipy only, natural logarithms):
  1. Lemma 1: integral formula for the entropy of a 3x3 state through (e2, e3);
     pure triples satisfy S(|G|) >= S(G).
  2. Lemma 2: f(D) concave on [0, 1/4], phi(s) = f(s^2/4) convex on [0, 1].
  3. Qubit fidelity formula F_ij = (1 + <a^_i, a^_j>)/2, e2 = (1 - R^2)/4, and the
     inequalities chi <= f(e2) <= S(C) for K = 3 (matrix computations), chi <= f(e2)
     for K = 2, 4, 5, 6, plus an adversarial Nelder-Mead minimisation of f(e2) - chi.
  4. Proposition 3 for qubits: a contraction M of the Bloch ball maps a pure triple with
     the same fidelities onto the mixed triple; the map is not completely positive.
  5. Dimensions 3, 4, 5: random ensembles and a reduced, fixed-seed adversarial
     maximisation of chi - S(C) (L-BFGS-B); a counterexample would need chi - S(C) > 0.

Writes data/verification.json next to this entry; exit status 1 on failure.
Run from the repository root:
    python research/entries/fidelity-matrix-holevo-bound/checks/check_fidelity_holevo.py
"""
import json
import sys
import time
from pathlib import Path

import numpy as np
from scipy.integrate import quad
from scipy.optimize import minimize

ENTRY = Path(__file__).resolve().parent.parent
OUT = ENTRY / "data" / "verification.json"
rng = np.random.default_rng(11042271)
RESULTS = []
T0 = time.time()


def report(name, ok, **values):
    RESULTS.append({"check": name, "pass": bool(ok), **values})
    detail = ", ".join(f"{k} = {v:.3e}" if isinstance(v, float) else f"{k} = {v}" for k, v in values.items())
    print(("PASS  " if ok else "FAIL  ") + name + ("  | " + detail if detail else ""), flush=True)


# --------------------------------------------------------------------------- helpers
def H(ev):
    ev = np.clip(np.asarray(ev, dtype=float), 0, None)
    ev = ev[ev > 1e-300]
    return float(-(ev * np.log(ev)).sum())


def S(M):
    return H(np.linalg.eigvalsh(M))


def sqrtm_psd(M):
    w, v = np.linalg.eigh(M)
    return (v * np.sqrt(np.clip(w, 0, None))) @ v.conj().T


def root_fid(a, b):
    return float(np.linalg.svd(sqrtm_psd(a) @ sqrtm_psd(b), compute_uv=False).sum())


def chi_and_C(p, rhos):
    K = len(p)
    chi = S(sum(pi * r for pi, r in zip(p, rhos))) - sum(pi * S(r) for pi, r in zip(p, rhos))
    E = np.eye(K)
    for i in range(K):
        for j in range(i + 1, K):
            E[i, j] = E[j, i] = root_fid(rhos[i], rhos[j])
    sp = np.sqrt(p)
    return chi, E, sp[:, None] * E * sp[None, :]


def f_det(D):
    """Entropy of a qubit state with determinant D in [0, 1/4]."""
    lam = (1 + np.sqrt(max(0.0, 1 - 4 * D))) / 2
    return H([lam, 1 - lam])


PAULI = [np.array([[0, 1], [1, 0]], dtype=complex), np.array([[0, -1j], [1j, 0]]),
         np.array([[1, 0], [0, -1]], dtype=complex)]


def qubit(a):
    return 0.5 * (np.eye(2) + sum(ai * s for ai, s in zip(a, PAULI)))


def random_bloch(n, mode):
    v = rng.normal(size=(n, 3))
    v /= np.linalg.norm(v, axis=1, keepdims=True)
    if mode == 0:
        r = rng.uniform(size=n) ** (1 / 3)                                  # uniform in the ball
    elif mode == 1:
        r = 1 - 10.0 ** rng.uniform(-12, -1, size=n)                        # nearly pure
    elif mode == 2:
        r = np.where(rng.uniform(size=n) < 0.5, 1.0, rng.uniform(size=n))  # some exactly pure
    else:
        r = 10.0 ** rng.uniform(-6, 0, size=n)                              # nearly maximally mixed
    return v * r[:, None]


# --------------------------------------------------------------------------- 1. Lemma 1
err = 0.0
for _ in range(20):
    lam = rng.dirichlet(np.ones(3) * rng.choice([0.3, 1.0, 5.0]))
    e2 = lam[0] * lam[1] + lam[0] * lam[2] + lam[1] * lam[2]
    e3 = lam.prod()
    g = lambda t: (t * t + 2 * e2 * t + 3 * e3) / (t ** 3 + t * t + e2 * t + e3) - 1 / (1 + t)
    val = quad(g, 0, 1, limit=400, epsabs=1e-13, epsrel=1e-13)[0] \
        + quad(g, 1, np.inf, limit=400, epsabs=1e-13, epsrel=1e-13)[0]
    err = max(err, abs(val - H(lam)))
report("Lemma 1: integral formula for S of a 3x3 state (20 spectra)", err < 1e-8, max_error=err)

gap = 1.0
for _ in range(5000):
    d = int(rng.integers(2, 5))
    V = rng.normal(size=(3, d)) + 1j * rng.normal(size=(3, d))
    V /= np.linalg.norm(V, axis=1, keepdims=True)
    p = rng.dirichlet(np.ones(3))
    G = np.sqrt(np.outer(p, p)) * (V.conj() @ V.T)
    gap = min(gap, S(np.abs(G)) - S(G))
report("pure triples: S(|G|) - S(G) >= 0 (5000 triples)", gap > -1e-12, min_gap=gap)

# --------------------------------------------------------------------------- 2. Lemma 2
Dg = np.linspace(0, 0.25, 20001)
fv = np.array([f_det(x) for x in Dg])
sg = np.linspace(0, 1, 20001)
pv = np.array([f_det(x * x / 4) for x in sg])
report("Lemma 2: f concave and increasing, phi convex (grids of 20001 points)",
       (np.diff(fv, 2) < 1e-13).all() and (np.diff(fv) > 0).all() and (np.diff(pv, 2) > -1e-13).all())

# --------------------------------------------------------------------------- 3. Theorem 1
N3 = 10000
slack1 = slack2 = 1.0
errF = errE = 0.0
for it in range(N3):
    a = random_bloch(3, it % 4)
    p = rng.dirichlet(np.ones(3) * rng.choice([0.2, 1.0, 5.0]))
    chi, E, C = chi_and_C(p, [qubit(x) for x in a])
    ahat = np.hstack([a, np.sqrt(np.clip(1 - (a * a).sum(1, keepdims=True), 0, None))])
    errF = max(errF, float(np.abs(E ** 2 - (1 + ahat @ ahat.T) / 2).max()))
    e2 = sum(p[i] * p[j] * (1 - E[i, j] ** 2) for i in range(3) for j in range(i + 1, 3))
    R = np.linalg.norm(p @ ahat)
    errE = max(errE, abs(e2 - (1 - R * R) / 4))
    slack1 = min(slack1, f_det(e2) - chi)
    slack2 = min(slack2, S(C) - f_det(e2))
report("qubit closed forms F_ij = (1+<a_i,a_j>)/2 and e2 = (1-R^2)/4", errF < 1e-6 and errE < 1e-6,
       max_error_F=errF, max_error_e2=errE)
report(f"Theorem 1, K = 3: chi <= f(e2) ({N3} ensembles)", slack1 > -1e-9, min_slack=slack1)
report(f"Corollary 2, K = 3: f(e2) <= S(C) ({N3} ensembles)", slack2 > -1e-9, min_slack=slack2)


def gap_closed(a, p):
    """f(e2) - chi for qubit Bloch vectors a (K,3) and weights p, closed forms."""
    def g(r):
        r = min(max(r, 0.0), 1.0)
        return H([(1 + r) / 2, (1 - r) / 2])
    s = np.sqrt(np.clip(1 - (a * a).sum(1), 0, None))
    m = np.linalg.norm(p @ a)
    chi = g(m) - sum(pi * g(np.linalg.norm(x)) for pi, x in zip(p, a))
    return g(np.sqrt(m * m + (p @ s) ** 2)) - chi


slackK = 1.0
for it in range(20000):
    K = int(rng.choice([2, 4, 5, 6]))
    p = rng.dirichlet(np.ones(K) * rng.choice([0.2, 1.0, 5.0]))
    slackK = min(slackK, gap_closed(random_bloch(K, it % 4), p))
report("Theorem 1, K = 2, 4, 5, 6: chi <= f(e2) (20000 ensembles)", slackK > -1e-10, min_slack=slackK)


def nm_obj(x):
    a = x[:9].reshape(3, 3)
    nrm = np.linalg.norm(a, axis=1, keepdims=True)
    a = a / np.maximum(nrm, 1e-300) * np.tanh(nrm)
    w = np.exp(x[9:] - x[9:].max())
    return gap_closed(a, w / w.sum())


best = 1.0
for _ in range(20):
    res = minimize(nm_obj, rng.normal(size=12) * rng.choice([0.5, 1.5, 4.0]), method="Nelder-Mead",
                   options={"maxiter": 6000, "xatol": 1e-12, "fatol": 1e-15})
    best = min(best, float(res.fun))
report("Theorem 1: adversarial minimisation of f(e2) - chi (20 Nelder-Mead runs)", best > -1e-10, min_found=best)

# --------------------------------------------------------------------------- 4. Proposition 3, qubits
def choi_min_eig(M):
    J = np.zeros((4, 4), dtype=complex)
    for k in range(2):
        for l in range(2):
            X = np.zeros((2, 2), dtype=complex)
            X[k, l] = 1
            t = np.array([np.trace(X @ s) for s in PAULI])
            LX = 0.5 * (np.trace(X) * np.eye(2) + sum((M @ t)[c] * PAULI[c] for c in range(3)))
            J += np.kron(X, LX)
    return float(np.linalg.eigvalsh((J + J.conj().T) / 2).min())


NM = 500
max_norm = max_fid = max_img = 0.0
max_chi_gap = -1.0
not_cp = 0
for _ in range(NM):
    a = random_bloch(3, 0)
    p = rng.dirichlet(np.ones(3))
    ahat = np.hstack([a, np.sqrt(1 - (a * a).sum(1, keepdims=True))])
    w, v = np.linalg.eigh(ahat @ ahat.T)
    B = (v * np.sqrt(np.clip(w, 0, None))) @ v.T        # rows: unit vectors of R^3 with the same Gram matrix
    M = np.linalg.solve(B, a).T                          # M b_i = a_i
    max_norm = max(max_norm, float(np.linalg.svd(M, compute_uv=False).max()))
    max_img = max(max_img, float(np.abs(B @ M.T - a).max()))
    chi_p, E_p, _ = chi_and_C(p, [qubit(b) for b in B])
    chi_m, E_m, _ = chi_and_C(p, [qubit(x) for x in a])
    max_fid = max(max_fid, float(np.abs(E_p - E_m).max()))
    max_chi_gap = max(max_chi_gap, chi_m - chi_p)
    not_cp += choi_min_eig(M) < -1e-9
report(f"Proposition 3 (qubits): ||M|| <= 1, fidelities preserved, images correct ({NM} triples)",
       max_norm < 1 + 1e-9 and max_fid < 1e-6 and max_img < 1e-9,
       max_norm_minus_1=max_norm - 1, max_fidelity_error=max_fid, not_completely_positive=f"{not_cp}/{NM}")
report("Proposition 3 (qubits): chi(mixed triple) <= chi(pure model)", max_chi_gap < 1e-10,
       max_chi_difference=max_chi_gap)

# --------------------------------------------------------------------------- 5. d = 3, 4, 5
def ensemble(x, d, r):
    n = 3 * d * r
    A = (x[:n] + 1j * x[n:2 * n]).reshape(3, d, r)
    A /= np.sqrt((np.abs(A) ** 2).sum(axis=(1, 2), keepdims=True))
    w = np.exp(x[2 * n:] - x[2 * n:].max())
    return [Ai @ Ai.conj().T for Ai in A], w / w.sum()


def delta(x, d, r):
    rhos, p = ensemble(x, d, r)
    chi, _, C = chi_and_C(p, rhos)
    return chi - S(C), chi


rand_max = -1.0
for d in (3, 4, 5):
    for _ in range(1500):
        r = int(rng.integers(1, d + 1))
        rand_max = max(rand_max, delta(rng.normal(size=6 * d * r + 3), d, r)[0])
report("d = 3, 4, 5: chi - S(C) <= 0 on 4500 random ensembles", rand_max < 1e-9, max_delta=rand_max)

adv = []
for d, r in [(3, 2), (3, 3), (4, 2), (4, 4), (5, 3)]:
    for _ in range(3):
        x0 = rng.normal(size=6 * d * r + 3)
        res = minimize(lambda x: -delta(x, d, r)[0], x0, method="L-BFGS-B", options={"maxiter": 150})
        dl, ch = delta(res.x, d, r)
        adv.append({"d": d, "rank": r, "delta": float(dl), "chi": float(ch)})
adv_max = max(c["delta"] for c in adv)
report("d = 3, 4, 5: free maximisation of chi - S(C) (15 L-BFGS-B runs) finds no positive value",
       adv_max < 1e-9, max_delta=adv_max)


def orbit_delta(x, d, spectra, p):
    """States U_i diag(spectra_i) U_i^+ with U_i from the QR factorisation of a free complex matrix."""
    n = 3 * d * d
    Z = (x[:n] + 1j * x[n:]).reshape(3, d, d)
    rhos = []
    for Zi, lam in zip(Z, spectra):
        Q, _ = np.linalg.qr(Zi)
        rhos.append((Q * lam) @ Q.conj().T)
    chi, _, C = chi_and_C(p, rhos)
    SC = S(C)
    return chi - SC, chi, SC


orb = []
for d in (3, 4, 5):
    for _ in range(3):
        spectra = rng.dirichlet(np.ones(d) * rng.choice([0.3, 1.0]), size=3)
        p = rng.dirichlet(np.ones(3))
        res = minimize(lambda x: -orbit_delta(x, d, spectra, p)[0], rng.normal(size=6 * d * d),
                       method="L-BFGS-B", options={"maxiter": 150})
        dl, ch, sc = orbit_delta(res.x, d, spectra, p)
        orb.append({"d": d, "delta": float(dl), "chi": float(ch), "ratio_chi_over_SC": float(ch / sc)})
orb_max = max(c["delta"] for c in orb)
orb_ratio = max(c["ratio_chi_over_SC"] for c in orb)
report("d = 3, 4, 5: maximisation of chi - S(C) over unitary orbits at fixed spectra and p (9 runs)",
       orb_max < 1e-9 and orb_ratio < 1, max_delta=orb_max, max_ratio=orb_ratio)
adv += [dict(c, mode="orbit") for c in orb]

ok = all(r["pass"] for r in RESULTS)
OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps({
    "entry": "fidelity-matrix-holevo-bound",
    "checker": "checks/check_fidelity_holevo.py",
    "seed": 11042271,
    "numpy": np.__version__,
    "all_pass": ok,
    "runtime_seconds": round(time.time() - T0, 1),
    "checks": RESULTS,
    "adversarial_runs_d_ge_3": adv,
}, indent=2) + "\n")
print("\nALL CHECKS PASS" if ok else "\nSOME CHECK FAILED")
print(f"wrote {OUT.relative_to(ENTRY.parent.parent.parent)}")
sys.exit(0 if ok else 1)
