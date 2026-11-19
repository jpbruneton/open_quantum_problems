#!/usr/bin/env python3
"""Checker for the research note "Structured negativity and negativity:
an exact criterion for their equality" (research/entries/structured-negativity).

Kumari and Adhikari (arXiv:2209.03909) define, for a state rho on C^d (x) C^d,
    N(rho)   = (2/(d-1)) * sum of |negative eigenvalues of rho^Gamma|,
    rho~     = (d I + rho^Gamma)/(d^3+1)        (SPA of the partial transpose),
    N_S(rho) = d (d^3+1) max{ d/(d^3+1) - lambda_min(rho~), 0 },
and conjecture N = N_S whenever rho^Gamma has q = d(d-1)/2 negative
eigenvalues (strict inequality N < N_S otherwise; "N_S >= N always").

What this script checks (deterministic; numpy for floats, sympy for the
exact rational statements; a few seconds):
  [1] N_S(rho) = d * max(0, -lambda_min(rho^Gamma)) on random states, d = 2,3,4;
  [2] N/N_S = (2/(d(d-1))) * (sum of |negative eigenvalues|)/(largest one);
  [3] d = 2: N = N_S for random states (q <= 1);
  [4] Werner states: q = 1, N/N_S = 2/(d(d-1));
      isotropic states: q = d(d-1)/2, flat negative spectrum, N = N_S;
  [5] pure states of Schmidt rank d: q = d(d-1)/2 and N < N_S unless the state
      is maximally entangled; exact counterexample (2|00>+2|11>+|22>)/3 with
      N = 8/9, N_S = 4/3 (sympy, exact);
  [6] random mixed states of 3 (x) 3 with exactly q = 3: N/N_S < 1;
  [7] exact state of 3 (x) 3 with q = 4 = (d-1)^2 equal negative eigenvalues:
      N = 4/21 > N_S = 1/7 (ratio 4/3 = 2(1-1/d): Result-1 is saturated and
      "N_S >= N" fails);
  [8] exact state of 3 (x) 3 with q = 4 and N = N_S = 3/32, and exact state
      (|psi><psi| + 9 rho_star)/10 with q = 4 and N < N_S;
  [9] general d: Q = projector on Sym^{2(d-1)}(C^2) inside C^d (x) C^d;
      spectrum of Q^Gamma is q_J = (2n+1)(n!)^2/((n-J)!(n+J+1)!), n = d-1,
      multiplicity 2J+1 (Q built exactly with sympy, eigenvalues compared in
      double precision, d = 2..6); the state
      rho = (I - t P^Gamma)/(d^2 - t(d-1)^2), P = I - Q,
      t = C(2n,n)/(C(2n,n)-1), is positive (double precision) and
      rho^Gamma = (I - t P)/(d^2 - t(d-1)^2) (exact identity), which has
      (d-1)^2 equal negative eigenvalues, so N/N_S = 2(d-1)/d (d = 2..6).

Run from the repository root:
    python research/entries/structured-negativity/checks/check_structured_negativity.py
The script rewrites data/verification.json in the entry directory.
"""
import json
import math
import sys
from pathlib import Path

import numpy as np
import sympy as sp

SEED = 220903909
RNG = np.random.default_rng(SEED)
ENTRY = Path(__file__).resolve().parent.parent
FAILS = []
RECORD = []


def report(name, ok, detail=""):
    print(f"[{'PASS' if ok else 'FAIL'}] {name}" + (f"  ({detail})" if detail else ""))
    RECORD.append({"check": name, "passed": bool(ok), "detail": detail})
    if not ok:
        FAILS.append(name)


# ------------------------------------------------------------ float helpers
def pt(rho, d):
    """Partial transpose on the second factor."""
    return rho.reshape(d, d, d, d).transpose(0, 3, 2, 1).reshape(d * d, d * d)


def negativity(rho, d):
    ev = np.linalg.eigvalsh(pt(rho, d))
    return 2.0 / (d - 1) * (-ev[ev < 0]).sum()


def structured_negativity(rho, d):
    """Literal definition of the source, through the SPA-PT state."""
    tilde = (d * np.eye(d * d) + pt(rho, d)) / (d ** 3 + 1)
    lam_min = np.linalg.eigvalsh(tilde)[0]
    return d * (d ** 3 + 1) * max(d / (d ** 3 + 1) - lam_min, 0.0)


def neg_spectrum(rho, d, tol=1e-12):
    ev = np.linalg.eigvalsh(pt(rho, d))
    return -ev[ev < -tol]


def random_state(d, rank):
    G = RNG.normal(size=(d * d, rank)) + 1j * RNG.normal(size=(d * d, rank))
    rho = G @ G.conj().T
    return rho / np.trace(rho).real


def check_1_2_3():
    worst1 = worst2 = worst3 = 0.0
    count = 0
    for d in (2, 3, 4):
        for rank in range(1, d * d + 1):
            for _ in range(40):
                rho = random_state(d, rank)
                N, NS = negativity(rho, d), structured_negativity(rho, d)
                lam = np.linalg.eigvalsh(pt(rho, d))[0]
                worst1 = max(worst1, abs(NS - d * max(0.0, -lam)))
                nu = neg_spectrum(rho, d)
                if len(nu) and nu.max() > 1e-9:
                    count += 1
                    r = nu.sum() / nu.max()
                    worst2 = max(worst2, abs(N / NS - 2 * r / (d * (d - 1))))
                if d == 2:
                    worst3 = max(worst3, abs(N - NS))
    report("[1] N_S = d * max(0, -lambda_min(rho^Gamma)) (random states, d = 2,3,4)",
           worst1 < 1e-10, f"max deviation {worst1:.1e}")
    report(f"[2] N/N_S = 2 r/(d(d-1)), r = sum|neg|/max|neg| ({count} NPT states)",
           worst2 < 1e-8, f"max deviation {worst2:.1e}")
    report("[3] d = 2: N = N_S on random two-qubit states", worst3 < 1e-10,
           f"max deviation {worst3:.1e}")


def check_4():
    ok_w = ok_i = True
    for d in (2, 3, 4, 5):
        dim = d * d
        F = np.zeros((dim, dim))
        for i in range(d):
            for j in range(d):
                F[i * d + j, j * d + i] = 1.0
        phi = np.zeros(dim)
        for i in range(d):
            phi[i * d + i] = 1 / math.sqrt(d)
        Pphi = np.outer(phi, phi)
        anti = (np.eye(dim) - F) / 2
        for x in (0.6, 0.8, 1.0):
            # Werner state: mixture of the normalised antisymmetric projector and noise
            rho = x * anti / np.trace(anti) + (1 - x) * np.eye(dim) / dim
            nu = neg_spectrum(rho, d)
            if len(nu):
                N, NS = negativity(rho, d), structured_negativity(rho, d)
                ok_w &= (len(nu) == 1) and abs(N / NS - 2 / (d * (d - 1))) < 1e-9
            # isotropic state
            rho = x * Pphi + (1 - x) * np.eye(dim) / dim
            nu = neg_spectrum(rho, d)
            if len(nu):
                N, NS = negativity(rho, d), structured_negativity(rho, d)
                ok_i &= (len(nu) == d * (d - 1) // 2) and abs(N - NS) < 1e-9 \
                    and (nu.max() - nu.min()) < 1e-10
    report("[4a] Werner states (d = 2..5): q = 1 and N/N_S = 2/(d(d-1))", ok_w)
    report("[4b] isotropic states (d = 2..5): q = d(d-1)/2, flat, N = N_S", ok_i)


def check_5():
    # exact counterexample
    d = 3
    psi = sp.Matrix([0] * 9)
    psi[0], psi[4], psi[8] = sp.Rational(2, 3), sp.Rational(2, 3), sp.Rational(1, 3)
    rho = psi * psi.T
    ev = pt_sym(rho, d).eigenvals()
    neg = sorted([(-k, m) for k, m in ev.items() if k < 0], reverse=True)
    q = sum(m for _, m in neg)
    N = sp.Rational(2, d - 1) * sum(k * m for k, m in neg)
    NS = d * max(k for k, _ in neg)
    report("[5a] exact: (2|00>+2|11>+|22>)/3 has q = 3 = d(d-1)/2, N = 8/9, N_S = 4/3",
           q == 3 and N == sp.Rational(8, 9) and NS == sp.Rational(4, 3),
           f"q = {q}, N = {N}, N_S = {NS}, negative eigenvalues {[(-k, m) for k, m in neg]}")
    # random pure states of full Schmidt rank
    ok = True
    worst_formula = 0.0
    max_ratio = 0.0
    for d in (3, 4, 5):
        for _ in range(200):
            G = RNG.normal(size=(d, d)) + 1j * RNG.normal(size=(d, d))
            G /= np.linalg.norm(G)
            rho = np.outer(G.reshape(-1), G.reshape(-1).conj())
            s = np.linalg.svd(G, compute_uv=False)  # sqrt of Schmidt weights
            prods = np.array([s[i] * s[j] for i in range(d) for j in range(i + 1, d)])
            N, NS = negativity(rho, d), structured_negativity(rho, d)
            nu = neg_spectrum(rho, d)
            ok &= len(nu) == d * (d - 1) // 2 and N < NS
            worst_formula = max(worst_formula, abs(N - 2 / (d - 1) * prods.sum()),
                                abs(NS - d * prods.max()))
            max_ratio = max(max_ratio, N / NS)
    report("[5b] random pure states of Schmidt rank d (d = 3,4,5): q = d(d-1)/2 and N < N_S",
           ok and worst_formula < 1e-9,
           f"largest N/N_S = {max_ratio:.4f}; formula deviation {worst_formula:.1e}")
    # maximally entangled state: equality
    okm = True
    for d in (3, 4, 5):
        phi = np.zeros(d * d)
        for i in range(d):
            phi[i * d + i] = 1 / math.sqrt(d)
        rho = np.outer(phi, phi)
        okm &= abs(negativity(rho, d) - 1) < 1e-10 and abs(structured_negativity(rho, d) - 1) < 1e-10
    report("[5c] maximally entangled states: N = N_S = 1", okm)


def check_6():
    d = 3
    ratios = []
    trials = 0
    while len(ratios) < 300 and trials < 200000:
        trials += 1
        rank = int(RNG.integers(1, 6))
        rho = random_state(d, rank)
        if trials % 2 == 0:  # also noisy full-Schmidt-rank pure states
            G = RNG.normal(size=9) + 1j * RNG.normal(size=9)
            G /= np.linalg.norm(G)
            eps = RNG.uniform(0, 0.3)
            rho = (1 - eps) * np.outer(G, G.conj()) + eps * random_state(d, 9)
        nu = neg_spectrum(rho, d, tol=1e-9)
        if len(nu) == 3:
            ratios.append(negativity(rho, d) / structured_negativity(rho, d))
    ratios = np.array(ratios)
    report("[6] 300 random mixed states of 3x3 with exactly q = 3: N/N_S < 1 in every case",
           len(ratios) == 300 and ratios.max() < 1 - 1e-6,
           f"N/N_S in [{ratios.min():.4f}, {ratios.max():.4f}]")


# ------------------------------------------------------------ exact helpers
def pt_sym(M, d):
    out = sp.zeros(d * d, d * d)
    for i in range(d):
        for j in range(d):
            for k in range(d):
                for l in range(d):
                    out[i * d + l, k * d + j] = M[i * d + j, k * d + l]
    return out


def ket(d, i, j):
    v = sp.zeros(d * d, 1)
    v[i * d + j] = 1
    return v


def exact_report(rho, d):
    assert rho == rho.T
    ev_rho = rho.eigenvals()
    ev_pt = pt_sym(rho, d).eigenvals()
    neg = sorted([(-k, m) for k, m in ev_pt.items() if k < 0], reverse=True)
    q = sum(m for _, m in neg)
    N = sp.Rational(2, d - 1) * sum(k * m for k, m in neg)
    NS = d * max(k for k, _ in neg)
    return ev_rho, ev_pt, q, N, NS


def check_7_8():
    d = 3
    K = lambda i, j: ket(d, i, j)
    O = lambda a, b: a * b.T
    # state of [7]: 21 rho
    A = (5 * (O(K(0, 0), K(0, 0)) + O(K(2, 2), K(2, 2))) + 3 * O(K(1, 1), K(1, 1))
         + 3 * (O(K(0, 0), K(1, 1)) + O(K(1, 1), K(0, 0)) + O(K(1, 1), K(2, 2)) + O(K(2, 2), K(1, 1)))
         + (O(K(0, 0), K(2, 2)) + O(K(2, 2), K(0, 0))))
    u = K(1, 0) + K(2, 1)
    v = K(0, 1) + K(1, 2)
    rho = (A + 2 * O(u, u) + 2 * O(v, v)) / 21
    rho_star = rho
    ev_rho, ev_pt, q, N, NS = exact_report(rho, d)
    ok = (rho.trace() == 1 and min(ev_rho) >= 0 and q == 4
          and ev_pt == {sp.Rational(5, 21): 5, sp.Rational(-1, 21): 4}
          and N == sp.Rational(4, 21) and NS == sp.Rational(1, 7))
    report("[7] exact 3x3 state: rho >= 0, Spec rho^Gamma = {5/21 (x5), -1/21 (x4)}, "
           "N = 4/21 > N_S = 1/7", ok,
           f"Spec rho = {dict(ev_rho)}, q = {q}, N = {N}, N_S = {NS}, N/N_S = {N / NS}")
    # state of [8]: 64 rho
    A = (21 * (O(K(0, 0), K(0, 0)) + O(K(2, 2), K(2, 2))) + 2 * O(K(1, 1), K(1, 1))
         + 5 * (O(K(0, 0), K(1, 1)) + O(K(1, 1), K(0, 0)) + O(K(1, 1), K(2, 2)) + O(K(2, 2), K(1, 1)))
         + 4 * (O(K(0, 0), K(2, 2)) + O(K(2, 2), K(0, 0))))
    rho = (A + 4 * O(u, u) + 4 * O(v, v) + 2 * O(K(0, 2), K(0, 2)) + 2 * O(K(2, 0), K(2, 0))) / 64
    ev_rho, ev_pt, q, N, NS = exact_report(rho, d)
    ok = (rho.trace() == 1 and min(ev_rho) >= 0 and q == 4
          and N == sp.Rational(3, 32) and NS == sp.Rational(3, 32))
    report("[8] exact 3x3 state with q = 4 and N = N_S = 3/32", ok,
           f"Spec rho^Gamma = {dict(ev_pt)}, Spec rho = {dict(ev_rho)}")
    # state of [8b]: (1/10)|psi><psi| + (9/10) rho_star, psi = (2|00>+2|11>+|22>)/3
    psi = sp.Matrix([0] * 9)
    psi[0], psi[4], psi[8] = sp.Rational(2, 3), sp.Rational(2, 3), sp.Rational(1, 3)
    rho = sp.Rational(1, 10) * psi * psi.T + sp.Rational(9, 10) * rho_star
    ev_pt = pt_sym(rho, d).eigenvals()
    neg = [(k, m) for k, m in ev_pt.items() if k.is_negative]
    q = sum(m for _, m in neg)
    nu = [-k for k, m in neg for _ in range(m)]
    N = sp.nsimplify(sum(nu))  # (2/(d-1)) = 1 for d = 3
    NS = 3 * max(nu, key=lambda x: float(x))
    expected = {sp.Rational(-11, 126): 1, sp.Rational(-41, 630): 2,
                sp.Rational(5, 42) - sp.sqrt(1747) / 315: 1}
    ok = (q == 4 and dict(neg) == expected and float(N) < float(NS)
          and rho.trace() == 1)  # convex combination of two states: a state
    report("[8b] exact 3x3 state with q = 4 and N < N_S", ok,
           f"negative eigenvalues {[str(k) for k, _ in neg]}, N = {float(N):.6f}, "
           f"N_S = {float(NS):.6f}")


def sym_projector_exact(d):
    """Q = projector of C^d (x) C^d = Sym^n(C^2) (x) Sym^n(C^2), n = d-1, onto
    Sym^{2n}(C^2), in the Dicke bases, with exact entries (rational times sqrt).
    Dicke state |n,k> (k ones). <n,k; n,l | 2n,m> = delta_{m,k+l}
    sqrt(C(n,k) C(n,l) / C(2n,k+l))."""
    n = d - 1
    Q = sp.zeros(d * d, d * d)
    for m in range(2 * n + 1):
        vec = sp.zeros(d * d, 1)
        for k in range(d):
            l = m - k
            if 0 <= l <= n:
                vec[k * d + l] = sp.sqrt(sp.Rational(math.comb(n, k) * math.comb(n, l),
                                                     math.comb(2 * n, m)))
        Q += vec * vec.T
    return Q


def check_9():
    ok_spec = ok_state = True
    details = []
    for d in range(2, 7):
        n = d - 1
        Q = sym_projector_exact(d)
        # projector sanity (exact)
        assert sp.simplify(Q * Q - Q) == sp.zeros(d * d, d * d)
        QG = pt_sym(Q, d)
        # spectrum of Q^Gamma: Q is built exactly, the eigenvalues are compared
        # in double precision with the closed formula (multiplicities included)
        expected = {}
        for J in range(n + 1):
            qJ = sp.Rational((2 * n + 1) * math.factorial(n) ** 2,
                             math.factorial(n - J) * math.factorial(n + J + 1))
            expected[qJ] = expected.get(qJ, 0) + 2 * J + 1
        exp_list = np.sort([float(qJ) for qJ, mult in expected.items() for _ in range(mult)])
        num_list = np.linalg.eigvalsh(np.array(QG.evalf(30), dtype=float))
        ok_spec &= len(exp_list) == d * d and np.abs(exp_list - num_list).max() < 1e-12
        kappa = min(expected)
        ok_spec &= kappa == sp.Rational(1, math.comb(2 * n, n))
        # the saturating state
        t = sp.Rational(math.comb(2 * n, n), math.comb(2 * n, n) - 1)
        P = sp.eye(d * d) - Q
        norm = d * d - t * (d - 1) ** 2
        rho = (sp.eye(d * d) - t * pt_sym(P, d)) / norm
        rho_f = np.array(rho.evalf(30), dtype=float)
        ev_rho = np.linalg.eigvalsh(rho_f)
        rhoG_exact = (sp.eye(d * d) - t * P) / norm      # = rho^Gamma since Gamma is an involution
        okG = sp.simplify(pt_sym(rho, d) - rhoG_exact) == sp.zeros(d * d, d * d)
        mu = (t - 1) / norm
        N = sp.Rational(2, d - 1) * (d - 1) ** 2 * mu
        NS = d * mu
        Nf, NSf = negativity(rho_f, d), structured_negativity(rho_f, d)
        nu = neg_spectrum(rho_f, d)
        ok_state &= (abs(np.trace(rho_f) - 1) < 1e-12 and ev_rho[0] > -1e-12 and okG
                     and len(nu) == (d - 1) ** 2 and nu.max() - nu.min() < 1e-12
                     and abs(Nf - float(N)) < 1e-10 and abs(NSf - float(NS)) < 1e-10
                     and N / NS == sp.Rational(2 * (d - 1), d))
        details.append(f"d={d}: kappa=1/{math.comb(2 * n, n)}, t={t}, N={N}, N_S={NS}")
    report("[9a] Spec Q^Gamma = {q_J with multiplicity 2J+1}, min = 1/C(2d-2,d-1) (d = 2..6)",
           ok_spec)
    report("[9b] rho_t >= 0 and rho_t^Gamma has (d-1)^2 equal negative eigenvalues, "
           "N/N_S = 2(d-1)/d (d = 2..6)", ok_state, "; ".join(details))


def main():
    print("Check of the structured-negativity conjecture (arXiv:2209.03909)")
    check_1_2_3()
    check_4()
    check_5()
    check_6()
    check_7_8()
    check_9()
    print()
    out = ENTRY / "data" / "verification.json"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps({"status": "failed" if FAILS else "passed", "seed": SEED,
                               "checks": RECORD}, indent=2) + "\n")
    print(f"wrote {out.relative_to(ENTRY.parents[2])}")
    if FAILS:
        print("SOME CHECKS FAILED:", FAILS)
        sys.exit(1)
    print("ALL CHECKS PASSED")


if __name__ == "__main__":
    main()
