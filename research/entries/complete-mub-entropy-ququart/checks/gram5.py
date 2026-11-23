"""Exact rational Gram matrices of the Hermitian forms
    f_m(psi) = sum_{j=0}^{5} prod_i c_{k_i}(p_j(psi)) * N(psi)^(n-|m|),   N = |psi|^2,
for the complete set {I, D^s F5 : s=0..4} of MUBs in C^5 (D = diag(omega^{k^2})).
f_m(psi) = sum_{delta,gamma} C[delta,gamma] conj(psi)^delta psi^gamma  (|delta| = |gamma| = n).
Derivation: <b_{s,a}|psi> = 5^{-1/2} sum_k omega^{-(s k^2 + a k)} psi_k; the sum over a in Z_5 of each factor
keeps the terms with sum_k k (delta_i - gamma_i)_k = 0 mod 5 (factor 5), and the sum over s keeps the terms with
sum_k k^2 (delta - gamma)_k = 0 mod 5 (factor 5).  All coefficients are rational."""
import itertools, math
from fractions import Fraction as Fr

d = 5
def comps(k):
    return [c for c in itertools.product(range(k+1), repeat=d) if sum(c) == k]
def mult(c):
    r = math.factorial(sum(c))
    for x in c: r //= math.factorial(x)
    return r
def add(a, b): return tuple(x+y for x, y in zip(a, b))
def conv(P, Q):
    R = {}
    for (d1, g1), v1 in P.items():
        for (d2, g2), v2 in Q.items():
            key = (add(d1, d2), add(g1, g2)); R[key] = R.get(key, 0) + v1*v2
    return R
def lin(c): return sum(k*x for k, x in enumerate(c)) % 5
def quad(c): return sum(k*k*x for k, x in enumerate(c)) % 5

_cache = {}
def part_fourier(k):
    if ('F', k) not in _cache:
        cs = comps(k)
        _cache[('F', k)] = {(dl, gm): Fr(mult(dl)*mult(gm), 5**(k-1)) for dl in cs for gm in cs if lin(dl) == lin(gm)}
    return _cache[('F', k)]
def part_comp(k):
    out = {}
    for a in range(d):
        e = tuple(k if i == a else 0 for i in range(d)); out[(e, e)] = Fr(1)
    return out
def part_id(r):
    return {(c, c): Fr(mult(c)) for c in comps(r)}

def form(m, n):
    """dict (delta,gamma) -> Fraction for f_m * N^(n-|m|)."""
    r = n - sum(m)
    assert r >= 0
    I = part_id(r)
    if not m:
        return {k: 6*v for k, v in I.items()}
    Pc = I; Pf = I
    for k in m:
        Pc = conv(Pc, part_comp(k)); Pf = conv(Pf, part_fourier(k))
    out = dict(Pc)
    for (dl, gm), v in Pf.items():
        # sum over the five Fourier bases (s = 0..4)
        if (quad(dl) - quad(gm)) % 5 == 0:
            out[(dl, gm)] = out.get((dl, gm), 0) + 5*v
    return {k: v for k, v in out.items() if v != 0}

def monomials(n): return comps(n)

def gram(m, n, monos=None):
    """Dense list-of-lists rational matrix C[i][j] = coefficient of conj(psi)^monos[i] psi^monos[j]."""
    monos = monos or monomials(n)
    idx = {c: i for i, c in enumerate(monos)}
    K = len(monos)
    C = [[Fr(0)]*K for _ in range(K)]
    for (dl, gm), v in form(m, n).items():
        C[idx[dl]][idx[gm]] += v
    return C

if __name__ == '__main__':
    import numpy as np, sys
    n = int(sys.argv[1]) if len(sys.argv) > 1 else 3
    w = np.exp(2j*np.pi/5)
    F5 = np.array([[w**(i*k) for k in range(5)] for i in range(5)])/np.sqrt(5)
    Dg = np.diag([w**(k*k) for k in range(5)])
    B = [np.eye(5)] + [np.linalg.matrix_power(Dg, s) @ F5 for s in range(5)]
    rng = np.random.default_rng(0); psi = rng.normal(size=5) + 1j*rng.normal(size=5)
    P = np.array([np.abs(b.conj().T @ psi)**2 for b in B]); N = np.vdot(psi, psi).real
    for m in [(), (2,), (3,), (2, 2), (4,), (5,), (3, 2)]:
        if sum(m) > n: continue
        f = form(m, n)
        val = sum(float(v)*np.prod(np.conj(psi)**np.array(dl))*np.prod(psi**np.array(gm)) for (dl, gm), v in f.items())
        ex = sum(np.prod([(P[j]**k).sum() for k in m]) for j in range(6))*N**(n-sum(m))
        print(m, val, ex)
