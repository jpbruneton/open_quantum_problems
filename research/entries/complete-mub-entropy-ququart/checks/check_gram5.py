"""Consistency checks for gram5.py and cert_B5.py (these checks are tests, not part of the proof):
1. the six bases {I, D^s F5} (D = diag(omega^{k^2})) are orthonormal and mutually unbiased (floating point);
2. for random psi, the rational Gram forms of gram5.py reproduce sum_j prod_i c_{k_i}(p_j) N^(n-|m|) computed
   directly from the bases (relative error < 1e-10), for every monomial m of degree <= 5 and n in {5, 8, 10};
Output: data/gram5_checks.json."""
import os, sys, json, itertools
HERE = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, HERE)
import numpy as np
from gram5 import form

DATA = os.path.join(HERE, '..', 'data')
MONS = [(), (2,), (3,), (4,), (2, 2), (5,), (3, 2)]

def bases():
    w = np.exp(2j*np.pi/5)
    F5 = np.array([[w**(i*k) for k in range(5)] for i in range(5)])/np.sqrt(5)
    Dg = np.diag([w**(k*k) for k in range(5)])
    return [np.eye(5)] + [np.linalg.matrix_power(Dg, s) @ F5 for s in range(5)]

def main():
    B = bases(); out = {}
    orth = max(np.abs(b.conj().T @ b - np.eye(5)).max() for b in B)
    unb = max(abs(np.abs(B[i].conj().T @ B[j])**2 - 0.2).max() for i, j in itertools.combinations(range(6), 2))
    out['orthonormality_error'] = float(orth); out['unbiasedness_error'] = float(unb)
    assert orth < 1e-12 and unb < 1e-12
    rng = np.random.default_rng(2026)
    worst = 0.0
    for n in (5, 8, 10):
        for m in MONS:
            if sum(m) > n: continue
            f = form(m, n)
            keys = list(f.items())
            Dl = np.array([k[0] for k, _ in keys]); Gm = np.array([k[1] for k, _ in keys])
            V = np.array([float(v) for _, v in keys])
            for _ in range(3):
                psi = rng.normal(size=5) + 1j*rng.normal(size=5)
                val = (V*np.prod(np.conj(psi)**Dl, 1)*np.prod(psi**Gm, 1)).sum()
                P = np.array([np.abs(b.conj().T @ psi)**2 for b in B]); N = np.vdot(psi, psi).real
                ex = sum(np.prod([(P[j]**k).sum() for k in m]) for j in range(6))*N**(n - sum(m))
                worst = max(worst, abs(val - ex)/abs(ex))
    out['gram_vs_direct_max_relative_error'] = worst
    assert worst < 1e-10
    os.makedirs(DATA, exist_ok=True)
    json.dump(out, open(os.path.join(DATA, 'gram5_checks.json'), 'w'), indent=1)
    print(out)

if __name__ == '__main__':
    main()
