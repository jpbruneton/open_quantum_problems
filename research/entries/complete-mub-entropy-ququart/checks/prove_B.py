"""Certified proof of (B): g(u,v) >= 0 on the reduced domain
D = {w = u+iv in C^3 : |w3| <= |w2| <= |w1| <= 1, 0 <= v1 <= u1, u2 >= 0, v2 >= 0}  (chart psi = (1, w)),
with equality exactly at the zeros of g in D (subset of the 28 chart points of data/minimizers.json).
D is a fundamental domain for the symmetries listed in the README (index permutations, diagonal phases
diag(1, i^a, i^b, i^c) with a+b+c = 0 mod 4, complex conjugation), all of which preserve the MUB set.

Step 1 (exact, rational arithmetic). For each zero z0: g(z0)=0, grad g(z0)=0; write
g(z0+h) = h^T Q0 h + sum_{|beta|>=3} a_beta h^beta exactly (flint compose); check Q0 - mu I > 0 by exact LDL^T and
mu > sum_{k>=3} A_k R^(k-2), A_k = sum_{|beta|=k}|a_beta|.  Since |h^beta| <= |h|_2^|beta|, this gives
g(z0+h) >= |h|^2 (mu - sum_k A_k |h|^(k-2)) > 0 for 0 < |h|_2 <= R.

Step 2 (branch and bound, floating point with rigorous error terms). For a box c + [-r, r], the exact Taylor
expansion g(c+h) = sum_beta a_beta(c) h^beta is computed (a = M . mono(c)); with T = sum_{|beta|>=3}|a_beta| r^beta,
  L1 = a_0 - sum_{beta != 0} |a_beta| r^beta,
  L2 = q(h*) + min_{|h|<=r} grad q(h*).(h-h*) - T   if the quadratic part Q is positive semidefinite,
where q(h) = a_0 + a_1.h + h^T Q h and h* is any point of the box (convexity of q).  The box is proved when
max(L1, L2) - err > 0, where err bounds all floating-point rounding (see README).  Boxes contained in a ball of
Step 1 are discarded.
"""
import sys, os, json, time, itertools, math
HERE = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, HERE)
import numpy as np
from fractions import Fraction as Fr
from common import build_g, THETA
import flint

DATA = os.path.join(HERE, '..', 'data')
U = 2.0**-53

def fr(c): return Fr(int(c.p), int(c.q))

def ldl_pd(M):
    n = len(M); A = [row[:] for row in M]
    for k in range(n):
        if A[k][k] <= 0: return False
        for i in range(k+1, n):
            f = A[i][k]/A[k][k]
            for j in range(k, n): A[i][j] -= f*A[k][j]
    return True

def local_step(ctx, g):
    gens = ctx.gens(); G = {tuple(int(t) for t in e): fr(c) for e, c in g.to_dict().items()}
    def ev(x):
        s = Fr(0)
        for e, c in G.items():
            t = c
            for xi, ei in zip(x, e):
                if ei: t *= Fr(xi)**ei
            s += t
        return s
    zeros = []
    for w in itertools.product([(0, 0), (1, 0), (-1, 0), (0, 1), (0, -1)], repeat=3):
        x = [w[0][0], w[1][0], w[2][0], w[0][1], w[1][1], w[2][1]]
        if ev(x) == 0: zeros.append(x)
    out = []
    for z in zeros:
        gs = g.compose(*[gens[i] + z[i] for i in range(6)])
        d = {tuple(int(t) for t in e): fr(c) for e, c in gs.to_dict().items()}
        assert all(sum(e) >= 2 for e in d), 'g(z0) or grad g(z0) nonzero'
        Q = [[Fr(0)]*6 for _ in range(6)]
        A = {}
        for e, c in d.items():
            k = sum(e)
            if k == 2:
                idx = [i for i in range(6) for _ in range(e[i])]
                if idx[0] == idx[1]: Q[idx[0]][idx[0]] += c
                else: Q[idx[0]][idx[1]] += c/2; Q[idx[1]][idx[0]] += c/2
            else:
                A[k] = A.get(k, Fr(0)) + abs(c)
        lam = np.linalg.eigvalsh(np.array([[float(v) for v in r] for r in Q])).min()
        mu = Fr(math.floor(lam*0.9*1000), 1000)
        assert ldl_pd([[Q[i][j] - (mu if i == j else 0) for j in range(6)] for i in range(6)]), 'Q0 - mu I not PD'
        R = Fr(1, 2)
        while not (sum(A[k]*R**(k-2) for k in A) < mu): R /= Fr(5, 4)
        R = Fr(math.floor(float(R)*2**20), 2**20)
        assert sum(A[k]*R**(k-2) for k in A) < mu
        out.append(dict(z=z, mu=mu, R=R))
    return out

class Taylor:
    def __init__(self, g):
        d = {tuple(int(t) for t in e): fr(c) for e, c in g.to_dict().items()}
        self.E = list(d.keys()); coef = [d[e] for e in self.E]
        betas = {}; gammas = {}; rows = []; cols = []; vals = []
        for e, c in zip(self.E, coef):
            for b in itertools.product(*[range(ei+1) for ei in e]):
                gm = tuple(ei - bi for ei, bi in zip(e, b))
                bi_ = betas.setdefault(b, len(betas)); gi = gammas.setdefault(gm, len(gammas))
                mult = c
                for ei, bb in zip(e, b): mult *= math.comb(ei, bb)
                rows.append(bi_); cols.append(gi); vals.append(float(mult))
        self.B = np.array(sorted(betas, key=betas.get)); self.Gm = np.array(sorted(gammas, key=gammas.get))
        import scipy.sparse as sp
        self.M = sp.csr_matrix((vals, (rows, cols)), shape=(len(betas), len(gammas)))
        self.Mabs = abs(self.M)
        self.nterms = max(np.bincount(rows))
        self.deg = self.B.sum(1)
        self.maxdeg = int(max(sum(e) for e in self.E))
    def coeffs(self, c):
        """Return a (nb x nbeta) and abs-sum bound s with |a - a_exact| <= s * eps_rel."""
        P = np.ones((c.shape[0], 6, self.maxdeg+1))
        for k in range(1, self.maxdeg+1): P[:, :, k] = P[:, :, k-1]*c
        mono = np.ones((c.shape[0], len(self.Gm)))
        for i in range(6): mono *= P[:, i, self.Gm[:, i]]
        a = (self.M @ mono.T).T
        s = (self.Mabs @ np.abs(mono).T).T
        return a, s

def main():
    t0 = time.time()
    ctx, g = build_g()
    loc = local_step(ctx, g)
    mz = os.path.join(DATA, 'minimizers.json')
    if os.path.exists(mz):
        cp = sorted(tuple(z) for z in json.load(open(mz))['chart_points'])
        assert sorted(tuple(int(v) for v in l['z']) for l in loc) == cp, 'zeros differ from minimizers.json'
    print('zeros', len(loc), 'min R', float(min(l['R'] for l in loc)), 'time', round(time.time()-t0, 1), flush=True)
    T = Taylor(g)
    eps_rel = (T.nterms + 2*T.maxdeg + 4)*U*1.01   # rounding of mono (<= maxdeg mults), coefficient, sums
    B, deg = T.B, T.deg
    i0 = np.where(deg == 0)[0][0]; i1 = [np.where((deg == 1) & (B[:, k] == 1))[0][0] for k in range(6)]
    quad = [(j, [i for i in range(6) for _ in range(B[j][i])]) for j in np.where(deg == 2)[0]]
    hi_ = np.where(deg >= 3)[0]; nz = np.where(deg >= 1)[0]
    Z = np.array([[float(v) for v in l['z']] for l in loc]); RR = np.array([float(l['R']) for l in loc])
    # reduced domain D (symmetry): 0 <= v1 <= u1, u2, v2 >= 0, |w3| <= |w2| <= |w1| <= 1
    qlo = [np.array([[0.0, 0.0, -1.0, 0.0, 0.0, -1.0]])]; qhi = [np.array([[1.0, 1.0, 1.0, 0.75, 1.0, 1.0]])]
    proved = excluded = outside = 0; it = 0; exact_checks = [0, 0]; minL = np.inf; proved_boxes = []; minwidth = 2.0
    pending_lo = np.vstack(qlo); pending_hi = np.vstack(qhi)
    BATCH = 4000
    while len(pending_lo):
        it += 1
        bl, bh = pending_lo[-BATCH:], pending_hi[-BATCH:]
        pending_lo, pending_hi = pending_lo[:-BATCH], pending_hi[:-BATCH]
        # discard boxes provably disjoint from D
        def m2(lo, hi): return np.where((lo <= 0) & (hi >= 0), 0.0, np.minimum(lo*lo, hi*hi))
        def M2(lo, hi): return np.maximum(lo*lo, hi*hi)
        mn = [m2(bl[:, k], bh[:, k]) + m2(bl[:, k+3], bh[:, k+3]) for k in range(3)]
        mx = [M2(bl[:, k], bh[:, k]) + M2(bl[:, k+3], bh[:, k+3]) for k in range(3)]
        out = (mn[0] > 1.0) | (mn[1] > mx[0]) | (mn[2] > mx[1]) | (bl[:, 3] > bh[:, 0])
        outside += out.sum(); bl, bh = bl[~out], bh[~out]
        if len(bl) == 0: continue
        c = (bl + bh)/2; r = (bh - bl)/2
        # exclusion: farthest point of box from zero within R (computed with margin)
        far = np.sqrt(((np.abs(c[:, None, :] - Z[None]) + r[:, None, :])**2).sum(2))*(1 + 1e-12)
        inside = (far <= RR[None]).any(1)
        excluded += inside.sum(); bl, bh, c, r = bl[~inside], bh[~inside], c[~inside], r[~inside]
        if len(c) == 0: continue
        a, s = T.coeffs(c)
        rp = np.ones((len(c), len(B)))
        for i in range(6): rp *= r[:, i:i+1]**B[None, :, i]
        rp *= (1 + 8*U*2)
        absterm = np.abs(a)*rp
        err = (eps_rel*(s*rp).sum(1))*1.01 + 1e-300
        L1 = a[:, i0] - absterm[:, nz].sum(1)
        tail = absterm[:, hi_].sum(1)
        # quadratic model
        Qm = np.zeros((len(c), 6, 6))
        for j, idx in quad:
            if idx[0] == idx[1]: Qm[:, idx[0], idx[0]] += a[:, j]
            else: Qm[:, idx[0], idx[1]] += a[:, j]/2; Qm[:, idx[1], idx[0]] += a[:, j]/2
        lin = a[:, i1]
        ev = np.linalg.eigvalsh(Qm)
        nrm = np.sqrt((Qm**2).sum((1, 2)))
        psd = ev[:, 0] - 1e-10*nrm > 0
        lmax = np.maximum(ev[:, -1], 1e-300)
        h = np.zeros((len(c), 6))
        for _ in range(60):
            grad = lin + 2*np.einsum('bij,bj->bi', Qm, h)
            h = np.clip(h - grad/(2*lmax[:, None]), -r, r)
        grad = lin + 2*np.einsum('bij,bj->bi', Qm, h)
        qh = a[:, i0] + (lin*h).sum(1) + np.einsum('bi,bij,bj->b', h, Qm, h)
        lmin_lin = (grad*(-r*np.sign(grad)) - grad*h).sum(1)   # min over box of grad.(x-h)
        L2 = np.where(psd, qh + lmin_lin - tail, -np.inf)
        # rounding in L2's own float ops is small relative to these magnitudes:
        err2 = 1e-11*(np.abs(a[:, i0]) + (np.abs(lin)*r).sum(1) + nrm*(r**2).sum(1) + tail)
        mu3 = np.minimum(ev[:, 0] - 2e-10*nrm, 0.0)
        L3 = a[:, i0] - (np.abs(lin)*r).sum(1) + mu3*(r**2).sum(1) - tail
        La = L1 - err - 1e-13*np.abs(absterm).sum(1)
        Lb = L2 - err - err2
        Lc = L3 - err - err2
        L = np.maximum(La, np.maximum(Lb, Lc))
        good = L > 0
        # exact re-check (rational LDL^T) of the eigenvalue claims used by L2 / L3
        for b in np.where(good & (La <= 0))[0]:
            Qf = [[Fr(float(Qm[b, i, k])) for k in range(6)] for i in range(6)]
            if Lb[b] > 0:
                ok = ldl_pd(Qf)                       # Q positive definite (psd flag)
            else:
                m = Fr(float(mu3[b])) - Fr(1, 10**30)
                ok = ldl_pd([[Qf[i][k] - (m if i == k else 0) for k in range(6)] for i in range(6)])
            exact_checks[0] += 1
            if not ok: good[b] = False; exact_checks[1] += 1
        proved += good.sum()
        proved_boxes.append(np.hstack([bl[good], bh[good]]))
        if good.any(): minL = min(minL, float(L[good].min()))
        bl, bh = bl[~good], bh[~good]
        if len(bl):
            w = bh - bl; ax = np.argmax(w, 1); idx = np.arange(len(bl))
            mid = (bl[idx, ax] + bh[idx, ax])/2
            h1 = bh.copy(); h1[idx, ax] = mid; l2 = bl.copy(); l2[idx, ax] = mid
            minwidth = min(minwidth, w.max(1).min()/2)
            if minwidth < 1e-7: raise SystemExit('FAIL: box too small near %s' % (c[~good][:2],))
            pending_lo = np.vstack([pending_lo, bl, l2]); pending_hi = np.vstack([pending_hi, h1, bh])
        if it % 50 == 0:
            print(f'it {it} pending {len(pending_lo)} proved {proved} excluded {excluded} outside {outside} minw {minwidth:.2e} t={time.time()-t0:.0f}s', flush=True)
    cert = dict(statement='g >= 0 on the reduced domain D of the chart psi=(1,u+iv); g > 0 on D except at chart points of data/minimizers.json',
                theta=[str(t) for t in THETA],
                zeros=[dict(z=l['z'], mu=str(l['mu']), R=str(l['R'])) for l in loc],
                boxes_proved=int(proved), boxes_excluded_local=int(excluded), boxes_outside_domain=int(outside), exact_eigen_checks=exact_checks[0], exact_eigen_check_failures=exact_checks[1], min_box_halfwidth=minwidth, min_certified_lower_bound=minL,
                seconds=round(time.time()-t0, 1))
    os.makedirs(DATA, exist_ok=True)
    json.dump(cert, open(os.path.join(DATA, 'B_certificate.json'), 'w'), indent=1)
    np.savez_compressed(os.path.join(DATA, 'B_leaves.npz'), boxes=np.vstack(proved_boxes))   # leaves, for replay_B_exact.py and coverage_B_exact.py
    print('DONE exact eigen checks', exact_checks, 'proved', proved, 'excluded', excluded, 'seconds', cert['seconds'])

if __name__ == '__main__':
    main()
