#!/usr/bin/env python3
"""Numerical checks for the research note "Spectra of particle-reduced fermionic
density operators" (entry fermionic-particle-reductions).

Conjecture of Amosov and Filippov (arXiv:1512.01828, Sec. 5): for every pure
fermionic state rho on the Fock space of n modes, the operators
    rho_p      (p-particle reduced density operator, their Eq. "RDM-operator")
    Phi^p(rho) (p-fold composition of Phi(X) = sum_j a_j X a_j^dagger)
have the same spectrum.

What this script checks (deterministic, numpy only, a few seconds):
  [A] the building block a_T^dag a_S prod_{s notin S u T} a_s a_s^dag equals |T><S|;
  [B] Phi^p(rho) = p! sum_T A_T rho A_T^dag for arbitrary (mixed) rho;
  [C] Spec Phi^p(|psi><psi|) = p! * Spec rho_p (full spectra, 2^n eigenvalues,
      zero eigenvalues included) for random pure states: generic Fock-space
      states, parity-superselected states, fixed-N states (M = 4, 5, 6 modes,
      N = 2, 3), real and complex;
  [D] the explicit eigenvector map: if c is an eigenvector of rho_p with
      eigenvalue lam > 0, then sum_T conj(c_T) A_T |psi> is an eigenvector of
      Phi^p(rho) with eigenvalue p! lam;
  [E] the nonzero spectrum of the tuple-indexed p-RDM
      D(s_1..s_p; t_1..t_p) = <a_s1^dag .. a_sp^dag a_tp .. a_t1> (n^p x n^p)
      equals the nonzero spectrum of Phi^p(rho) exactly (no factor);
  [F] fixed particle number N, pure or mixed: Phi^(N-p)(rho) = (N-p)! rho_p
      as operators (Proposition 4 of the source holds only up to (N-p)!);
  [G] exact minimal counterexamples (integers / rationals):
      n = 2, |psi> = |11>, p = 2 : Spec rho_2 = {1,0,0,0}, Spec Phi^2 = {2,0,0,0};
      n = 2, mixed rho = (|10><10| + |01><01|)/2, p = 1:
            Spec rho_1 = {1/2,1/2,0,0}, Spec Phi(rho) = {1,0,0,0};
  [H] trace identities tr rho_p = <C(N,p)>, tr Phi^p(rho) = <N(N-1)...(N-p+1)>.

Run from the repository root:
  python research/entries/fermionic-particle-reductions/checks/verify_particle_reductions.py

The proofs are in the manuscript; these computations test the sign and
normalization conventions of the source. The script writes data/verification.json.
"""
import hashlib
import itertools
import json
import math
import sys
import time
from pathlib import Path

import numpy as np

ENTRY = Path(__file__).resolve().parent.parent
DATA = ENTRY / "data"
SEED = 151201828
TOL = 1e-10
RNG = np.random.default_rng(SEED)
FAILS = []
RESULTS = []


def report(name, ok, detail=""):
    print(f"[{'PASS' if ok else 'FAIL'}] {name}" + (f"  ({detail})" if detail else ""))
    RESULTS.append({"check": name, "passed": bool(ok), "detail": detail})
    if not ok:
        FAILS.append(name)


# ---------------------------------------------------------------- operators
def ladder_ops(n):
    """Annihilation operators a_1..a_n on the 2^n Fock space, with the
    Jordan-Wigner convention of the source:
    a_t^dag |j_1..j_n> = (-1)^(j_1+..+j_{t-1}) |j_1..1_t..j_n> if j_t = 0.
    Basis index = binary number j_1 j_2 ... j_n (j_1 most significant)."""
    dim = 2 ** n
    ops = []
    for t in range(n):
        adag = np.zeros((dim, dim))
        for idx in range(dim):
            bits = [(idx >> (n - 1 - s)) & 1 for s in range(n)]
            if bits[t] == 0:
                sign = (-1) ** sum(bits[:t])
                new = idx | (1 << (n - 1 - t))
                adag[new, idx] = sign
        ops.append(adag.T.copy())  # a_t = (a_t^dag)^T, real matrices
    return ops


def prod(mats, dim):
    out = np.eye(dim)
    for m in mats:
        out = out @ m
    return out


class Fock:
    def __init__(self, n):
        self.n = n
        self.dim = 2 ** n
        self.a = ladder_ops(n)
        self.ad = [x.T for x in self.a]
        self.num = sum(self.ad[s] @ self.a[s] for s in range(n))
        self._A = {}

    def A(self, S):
        """A_S = a_{s_p} ... a_{s_1} for S = (s_1 < ... < s_p)."""
        S = tuple(S)
        if S not in self._A:
            self._A[S] = prod([self.a[s] for s in reversed(S)], self.dim)
        return self._A[S]

    def subsets(self, p):
        return list(itertools.combinations(range(self.n), p))

    def phi(self, X):
        return sum(self.a[j] @ X @ self.ad[j] for j in range(self.n))

    def phi_p(self, X, p):
        for _ in range(p):
            X = self.phi(X)
        return X

    def unit(self, T, S):
        """Literal building block of Eq. (RDM-operator):
        a_{t1}^dag..a_{tp}^dag a_{sp}..a_{s1} prod_{s notin S u T} a_s a_s^dag."""
        out = self.A(T).T @ self.A(S)
        for s in range(self.n):
            if s not in S and s not in T:
                out = out @ (self.a[s] @ self.ad[s])
        return out

    def rho_p(self, rho, p):
        """Literal implementation of Eq. (RDM-operator) of the source."""
        out = np.zeros((self.dim, self.dim), dtype=complex)
        subs = self.subsets(p)
        for S in subs:
            for T in subs:
                coeff = np.trace(rho @ self.A(S).T @ self.A(T))  # <a_S^dag a_T>
                if coeff != 0:
                    out += coeff * self.unit(T, S)
        return out

    def basis_index(self, S):
        return sum(1 << (self.n - 1 - s) for s in S)


def random_state(fock, kind, real, N=None):
    dim = fock.dim
    v = RNG.normal(size=dim) + (0 if real else 1j) * RNG.normal(size=dim)
    pop = np.array([bin(i).count("1") for i in range(dim)])
    if kind == "even":
        v = v * (pop % 2 == 0)
    elif kind == "odd":
        v = v * (pop % 2 == 1)
    elif kind == "fixedN":
        v = v * (pop == N)
    v = v.astype(complex)
    return v / np.linalg.norm(v)


def spec(X):
    return np.sort(np.linalg.eigvalsh((X + X.conj().T) / 2))


# ------------------------------------------------------------------ checks
def check_A():
    worst = 0.0
    for n in (2, 3, 4):
        f = Fock(n)
        for p in range(1, n + 1):
            for S in f.subsets(p):
                for T in f.subsets(p):
                    E = np.zeros((f.dim, f.dim))
                    E[f.basis_index(T), f.basis_index(S)] = 1.0
                    worst = max(worst, np.abs(f.unit(T, S) - E).max())
    report("[A] a_T^dag a_S prod a_s a_s^dag = |T><S| (n = 2,3,4, all p, S, T)",
           worst < TOL, f"max deviation {worst:.1e}")


def check_B():
    worst = 0.0
    for n in (2, 3, 4, 5):
        f = Fock(n)
        G = RNG.normal(size=(f.dim, f.dim)) + 1j * RNG.normal(size=(f.dim, f.dim))
        rho = G @ G.conj().T
        rho /= np.trace(rho).real
        for p in range(1, n + 1):
            lhs = f.phi_p(rho, p)
            rhs = math.factorial(p) * sum(f.A(T) @ rho @ f.A(T).T for T in f.subsets(p))
            worst = max(worst, np.abs(lhs - rhs).max())
    report("[B] Phi^p(rho) = p! sum_T A_T rho A_T^dag (random mixed rho, n = 2..5)",
           worst < TOL, f"max deviation {worst:.1e}")


def check_C_D_E_H():
    worst_spec = 0.0     # | Spec Phi^p - p! Spec rho_p |
    worst_eig = 0.0      # eigenvector map residual
    worst_tuple = 0.0    # tuple-indexed p-RDM nonzero spectrum vs Phi^p
    worst_tr = 0.0
    naive_gap = 0.0      # largest | Spec Phi^p - Spec rho_p | for p >= 2
    naive_gap_p1 = 0.0   # same for p = 1 (should vanish: conjecture true)
    cases = 0
    configs = []
    for n in (2, 3, 4):
        for kind in ("generic", "even", "odd"):
            configs.append((n, kind, None))
    for n in (4, 5, 6):
        for N in (2, 3):
            configs.append((n, "fixedN", N))
    configs.append((5, "generic", None))
    configs.append((6, "generic", None))
    for (n, kind, N) in configs:
        f = Fock(n)
        pmax = n if n <= 4 else 3
        for real in (True, False):
            psi = random_state(f, kind, real, N)
            rho = np.outer(psi, psi.conj())
            for p in range(1, pmax + 1):
                cases += 1
                fact = math.factorial(p)
                rp = f.rho_p(rho, p)
                ph = f.phi_p(rho, p)
                s_rp, s_ph = spec(rp), spec(ph)
                worst_spec = max(worst_spec, np.abs(s_ph - fact * s_rp).max())
                gap = np.abs(s_ph - s_rp).max()
                if p == 1:
                    naive_gap_p1 = max(naive_gap_p1, gap)
                else:
                    naive_gap = max(naive_gap, gap)
                # [H] traces
                Nop = f.num
                binom = np.eye(f.dim)
                for i in range(p):
                    binom = binom @ (Nop - i * np.eye(f.dim))
                falling = (psi.conj() @ binom @ psi).real
                worst_tr = max(worst_tr, abs(np.trace(ph).real - falling),
                               abs(np.trace(rp).real - falling / fact))
                # [D] eigenvector map
                subs = f.subsets(p)
                idx = [f.basis_index(S) for S in subs]
                block = rp[np.ix_(idx, idx)]
                w, U = np.linalg.eigh(block)
                for lam, c in zip(w, U.T):
                    if lam > 1e-8:
                        vec = sum(np.conj(c[k]) * (f.A(T) @ psi) for k, T in enumerate(subs))
                        worst_eig = max(worst_eig,
                                        np.linalg.norm(ph @ vec - fact * lam * vec))
                # [E] tuple-indexed p-RDM, n^p x n^p
                if n ** p <= 300:
                    tuples = list(itertools.product(range(n), repeat=p))
                    vecs = []
                    for t in tuples:
                        # a_{t_p} ... a_{t_1} |psi>
                        v = psi
                        for j in t:
                            v = f.a[j] @ v
                        vecs.append(v)
                    V = np.array(vecs).T                      # columns a_t psi
                    D = V.conj().T @ V                        # D[s,t] = <a_s psi|a_t psi>
                    sD = np.sort(np.linalg.eigvalsh(D))[::-1]
                    sP = s_ph[::-1]
                    k = min(len(sD), len(sP))
                    dev = np.abs(sD[:k] - sP[:k]).max()
                    tail = max(np.abs(sD[k:]).max(initial=0.0), np.abs(sP[k:]).max(initial=0.0))
                    worst_tuple = max(worst_tuple, dev, tail)
    report(f"[C] Spec Phi^p(rho) = p! Spec rho_p, full 2^n spectra ({cases} pure-state cases)",
           worst_spec < 1e-9, f"max deviation {worst_spec:.1e}")
    report("[C'] p = 1: Spec Phi(rho) = Spec rho_1 (conjecture holds as stated)",
           naive_gap_p1 < 1e-9, f"max deviation {naive_gap_p1:.1e}")
    report("[C''] p >= 2: Spec Phi^p(rho) != Spec rho_p (conjecture fails as stated)",
           naive_gap > 1e-3, f"largest eigenvalue gap observed {naive_gap:.4f}")
    report("[D] eigenvector map c -> sum_T conj(c_T) A_T psi", worst_eig < 1e-9,
           f"max residual {worst_eig:.1e}")
    report("[E] nonzero spectrum of tuple-indexed p-RDM = nonzero spectrum of Phi^p(rho)",
           worst_tuple < 1e-9, f"max deviation {worst_tuple:.1e}")
    report("[H] tr Phi^p = <N(N-1)..(N-p+1)> = p! tr rho_p", worst_tr < 1e-9,
           f"max deviation {worst_tr:.1e}")


def check_F():
    worst = 0.0
    worst_naive = 0.0
    for n, N in ((4, 2), (4, 3), (5, 2), (5, 3), (6, 2), (6, 3)):
        f = Fock(n)
        for mixed in (False, True):
            if mixed:
                rho = np.zeros((f.dim, f.dim), dtype=complex)
                ws = RNG.random(3)
                ws /= ws.sum()
                for w in ws:
                    psi = random_state(f, "fixedN", False, N)
                    rho += w * np.outer(psi, psi.conj())
            else:
                psi = random_state(f, "fixedN", False, N)
                rho = np.outer(psi, psi.conj())
            for p in range(0, N):
                lhs = f.phi_p(rho, N - p)
                rp = f.rho_p(rho, p) if p > 0 else None
                if p == 0:
                    vac = np.zeros((f.dim, f.dim))
                    vac[0, 0] = 1.0
                    rp = vac  # rho_0 = <1> |0><0|
                worst = max(worst, np.abs(lhs - math.factorial(N - p) * rp).max())
                if N - p >= 2:
                    worst_naive = max(worst_naive, np.abs(lhs - rp).max())
    report("[F] fixed N (pure and mixed): Phi^(N-p)(rho) = (N-p)! rho_p", worst < 1e-9,
           f"max deviation {worst:.1e}")
    report("[F'] Proposition 4 of the source without the factorial fails when N-p >= 2",
           worst_naive > 1e-3, f"max |Phi^(N-p)(rho) - rho_p| = {worst_naive:.4f}")


def check_G():
    f = Fock(2)
    # |11> has basis index 3
    psi = np.zeros(4)
    psi[3] = 1.0
    rho = np.outer(psi, psi)
    s2 = np.round(spec(f.rho_p(rho, 2)), 12)
    sp = np.round(spec(f.phi_p(rho, 2)), 12)
    ok1 = np.allclose(s2, [0, 0, 0, 1]) and np.allclose(sp, [0, 0, 0, 2])
    report("[G1] n = 2, |11>, p = 2: Spec rho_2 = {1,0,0,0}, Spec Phi^2(rho) = {2,0,0,0}",
           ok1, f"rho_2: {s2.tolist()}  Phi^2: {sp.tolist()}")
    rho = np.diag([0.0, 0.5, 0.5, 0.0])  # (|01><01| + |10><10|)/2
    s1 = np.round(spec(f.rho_p(rho, 1)), 12)
    sp = np.round(spec(f.phi_p(rho, 1)), 12)
    ok2 = np.allclose(s1, [0, 0, 0.5, 0.5]) and np.allclose(sp, [0, 0, 0, 1])
    report("[G2] n = 2, mixed (|01><01|+|10><10|)/2, p = 1: spectra {1/2,1/2,0,0} vs {1,0,0,0}",
           ok2, f"rho_1: {s1.tolist()}  Phi: {sp.tolist()}")
    # the two-mode example of the source (p = 1), generic amplitudes
    c = np.array([0.5, 0.5j, -0.5, 0.5])  # c00, c01, c10, c11
    rho = np.outer(c, c.conj())
    s1 = spec(f.rho_p(rho, 1))
    sp = spec(f.phi_p(rho, 1))
    expect = np.sort([0, 0, abs(c[3]) ** 2, 1 - abs(c[0]) ** 2])
    ok3 = np.allclose(s1, expect) and np.allclose(sp, expect)
    report("[G3] two-mode example of the source: both spectra = {1-|c00|^2, |c11|^2, 0, 0}",
           ok3, f"{np.round(sp, 12).tolist()}")


def main():
    start = time.perf_counter()
    print("Check of the Amosov-Filippov conjecture (arXiv:1512.01828)")
    check_A()
    check_B()
    check_C_D_E_H()
    check_F()
    check_G()
    print()
    record = {
        "entry": "fermionic-particle-reductions",
        "status": "failed" if FAILS else "passed",
        "seed": SEED,
        "checks": RESULTS,
        "elapsed_seconds": round(time.perf_counter() - start, 1),
        "sha256": {"checks/verify_particle_reductions.py":
                   hashlib.sha256(Path(__file__).read_bytes()).hexdigest()},
        "limits": ("Floating-point checks of the identities of the manuscript on random "
                   "pure and mixed states with n <= 6 modes; not a formal proof or a "
                   "certification of novelty."),
    }
    DATA.mkdir(exist_ok=True)
    (DATA / "verification.json").write_text(json.dumps(record, indent=2) + "\n",
                                            encoding="utf-8")
    if FAILS:
        print("SOME CHECKS FAILED:", FAILS)
        sys.exit(1)
    print("ALL CHECKS PASSED")


if __name__ == "__main__":
    main()
