"""Independent exact re-verification of the leaves of prove_B.py.

For every box c + [-r, r] in data/B_leaves.npz (dyadic floats, hence exact rationals) the Taylor expansion of g at c
is computed exactly (flint fmpq_mpoly.compose), and one of the following lower bounds is checked to be positive in
exact rational arithmetic:
  L1 = a_0 - sum_{beta != 0} |a_beta| r^beta,
  L3 = a_0 - sum_i |a_i| r_i + m |r|^2 - T,   m = min(mu, 0) - 10^-40, with Q - m I positive definite (exact LDL^T),
  L2 = q(h*) + min_box grad q(h*).(h - h*) - T,       with Q positive definite (exact LDL^T),
where Q is the quadratic part, T = sum_{|beta|>=3} |a_beta| r^beta, and h* is a (rational) point of the box.
Together with the exact local lemmas of prove_B.py and the domain bookkeeping, this re-proves (B) without any
floating-point rounding argument.  Output: data/B_replay.json."""
import sys, os, json, time
HERE = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, HERE)
import numpy as np
from fractions import Fraction as Fr
import flint
from common import build_g

def ldl_pd(M):
    n = len(M); A = [row[:] for row in M]
    for k in range(n):
        if A[k][k] <= 0: return False
        for i in range(k+1, n):
            f = A[i][k]/A[k][k]
            for j in range(k, n): A[i][j] -= f*A[k][j]
    return True

def main():
    t0 = time.time()
    ctx, g = build_g(); G = ctx.gens()
    boxes = np.load(os.path.join(HERE, '..', 'data', 'B_leaves.npz'))['boxes']
    stats = dict(L1=0, L3=0, L2=0, failed=0)
    for n, row in enumerate(boxes):
        lo, hi = row[:6], row[6:]
        c = [Fr(float(a)) + (Fr(float(b)) - Fr(float(a)))/2 for a, b in zip(lo, hi)]
        r = [(Fr(float(b)) - Fr(float(a)))/2 for a, b in zip(lo, hi)]
        gs = g.compose(*[G[i] + flint.fmpq(c[i].numerator, c[i].denominator) for i in range(6)])
        a0 = Fr(0); lin = [Fr(0)]*6; Q = [[Fr(0)]*6 for _ in range(6)]; tail = Fr(0); s1 = Fr(0)
        for e, cf in gs.to_dict().items():
            e = [int(x) for x in e]; v = Fr(int(cf.p), int(cf.q)); k = sum(e)
            if k == 0: a0 = v; continue
            rb = Fr(1)
            for ri, ei in zip(r, e):
                if ei: rb *= ri**ei
            s1 += abs(v)*rb
            if k == 1: lin[e.index(1)] = v
            elif k == 2:
                idx = [i for i in range(6) for _ in range(e[i])]
                if idx[0] == idx[1]: Q[idx[0]][idx[0]] += v
                else: Q[idx[0]][idx[1]] += v/2; Q[idx[1]][idx[0]] += v/2
            else: tail += abs(v)*rb
        if a0 - s1 > 0: stats['L1'] += 1; continue
        Qf = np.array([[float(x) for x in rr] for rr in Q]); lam = np.linalg.eigvalsh(Qf)[0]
        nr = float(np.sqrt((Qf**2).sum()))
        r2 = sum(x*x for x in r); l1 = sum(abs(x)*y for x, y in zip(lin, r))
        mu = Fr(lam - 1e-9*nr - 1e-300) if lam - 1e-9*nr < 0 else Fr(0)
        m = mu - Fr(1, 10**40)          # the constant actually certified: Q - m I positive definite
        if a0 - l1 + m*r2 - tail > 0:
            if ldl_pd([[Q[i][j] - (m if i == j else 0) for j in range(6)] for i in range(6)]):
                stats['L3'] += 1; continue
        if lam > 0 and ldl_pd(Q):
            # projected gradient for h* (floating point), then exact convexity bound
            rf = np.array([float(x) for x in r]); lf = np.array([float(x) for x in lin]); h = np.zeros(6)
            lmax = np.linalg.eigvalsh(Qf)[-1]
            for _ in range(200): h = np.clip(h - (lf + 2*Qf@h)/(2*lmax), -rf, rf)
            hs = [Fr(float(x)) for x in h]
            hs = [max(-ri, min(ri, x)) for x, ri in zip(hs, r)]
            grad = [lin[i] + 2*sum(Q[i][j]*hs[j] for j in range(6)) for i in range(6)]
            qh = a0 + sum(lin[i]*hs[i] for i in range(6)) + sum(hs[i]*Q[i][j]*hs[j] for i in range(6) for j in range(6))
            lb = qh + sum(-abs(grad[i])*r[i] - grad[i]*hs[i] for i in range(6)) - tail
            if lb > 0: stats['L2'] += 1; continue
        stats['failed'] += 1
        if stats['failed'] < 5: print('exact replay failed on box', lo, hi, flush=True)
        if n % 5000 == 0: print(n, stats, round(time.time()-t0), flush=True)
    stats['boxes'] = int(len(boxes)); stats['seconds'] = round(time.time()-t0, 1)
    json.dump(stats, open(os.path.join(HERE, '..', 'data', 'B_replay.json'), 'w'), indent=1)
    print('REPLAY', stats)

if __name__ == '__main__':
    main()
