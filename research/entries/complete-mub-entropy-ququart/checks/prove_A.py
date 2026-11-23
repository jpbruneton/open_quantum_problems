"""Certified proof of (A): H(p) >= F(p) for every probability vector p on 4 outcomes, with equality exactly at
the uniform vector and at the six vectors with two entries 1/2 (two entries 0).

Coordinates x = (p1, p2, p3), p4 = 1 - p1 - p2 - p3, domain the tetrahedron Delta.
(i)  Local lemma at u = (1/4,1/4,1/4,1/4): on the ball |x - u| <= RHO_U the Hessian of H - F is positive definite
     (interval enclosure), and grad (H-F)(u) = 0, so H - F > 0 on the punctured ball.
(ii) Local lemma at e = (1/2,1/2,0,0) on R_e = {p3+p4 <= S0, |p1-p2| <= 2 T0}:
     H - F >= phi(t) + s (log2(1/s) - e1 - K), with t=(p1-p2)/2, s=p3+p4, phi(t)=h(1/2+t)-F(1/2+t,1/2-t,0,0),
     e1 >= max eta' on the relevant interval, K >= sup over R_e of [-(d1F+d2F)/2 + max(d3F,d4F)];
     phi is convex on [-T0,T0] (interval check of phi'') with phi(0)=phi'(0)=0, and S0 <= 2^-(e1+K).
     By the S4 symmetry of H and F this covers the six permutations of e.
(iii) Branch and bound on simplices: H - L concave (L = linear interpolant of F on the simplex), hence
     H - F >= min_vertices (H - F) - (m_-/2)(3/8) l^2, with m_- >= max(0, -lambda_min(Hess F)) on the simplex and
     l the longest edge.  Simplices contained in a local region are discarded.
Floating-point: vertex values are computed in double precision; a margin of 1e-12 (absolute) is subtracted,
far above the accumulated rounding error of these O(1) expressions (|terms| <= 50).  Interval enclosures use
outward rounding (ia.py).  Output: data/A_certificate.json."""
import sys, os, json, time, itertools, math
HERE = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, HERE)
import numpy as np
import sympy as sp
from fractions import Fraction as Fr
from common import THETA
from ia import IPoly, dn, up

DATA = os.path.join(HERE, '..', 'data')
RHO_U = 0.0015
S0, T0 = 0.02, 0.04
MARGIN = 1e-12
LN2 = math.log(2)

p1, p2, p3 = sp.symbols('p1 p2 p3')
P4 = 1 - p1 - p2 - p3
t0, t2, t3, t4, t22 = [sp.Rational(t.numerator, t.denominator) for t in THETA]
def Fsym(ps):
    c = lambda k: sum(x**k for x in ps)
    return t0 + t2*c(2) + t3*c(3) + t4*c(4) + t22*c(2)**2
FX = sp.expand(Fsym([p1, p2, p3, P4]))
X = (p1, p2, p3)
def todict(expr):
    poly = sp.Poly(expr, *X)
    return {tuple(m): Fr(int(sp.fraction(c)[0]), int(sp.fraction(c)[1])) for m, c in zip(poly.monoms(), poly.coeffs())}
HESS = [[IPoly(todict(sp.diff(FX, X[i], X[k]))) for k in range(3)] for i in range(3)]
Fnum = sp.lambdify(X, FX, 'numpy')

def eta(p):
    p = np.asarray(p, float)
    return np.where(p > 0, -p*np.log2(np.where(p > 0, p, 1.0)), 0.0)

def HmF(x):  # x: (..., 3)
    q4 = 1 - x[..., 0] - x[..., 1] - x[..., 2]
    q4 = np.maximum(q4, 0.0)
    H = eta(x[..., 0]) + eta(x[..., 1]) + eta(x[..., 2]) + eta(q4)
    # F from power sums: all quantities are O(1) (c_k <= 1, |t| <= 22), so the rounding error of the vertex value
    # is below 1e-13, well inside MARGIN; vertex coordinates are dyadic, so q4 = 1 - x1 - x2 - x3 is exact.
    P = [x[..., 0], x[..., 1], x[..., 2], q4]
    c = {k: sum(pp**k for pp in P) for k in (2, 3, 4)}
    T = [float(t) for t in THETA]
    Fv = T[0] + T[1]*c[2] + T[2]*c[3] + T[3]*c[4] + T[4]*c[2]*c[2]
    return H - Fv

def hess_box(lo, hi):
    """interval Hessian of F (in x coords) on boxes."""
    return [[HESS[i][k].eval(lo, hi) for k in range(3)] for i in range(3)]

import flint
flint.ctx.prec = 128
_TA = [flint.arb(flint.fmpq(t.numerator, t.denominator)) for t in THETA]
_LN2 = flint.arb(2).log()
_cache = {}
def arb_HmF(v):
    """H - F at a vertex (exact dyadic coordinates) in ball arithmetic."""
    if v in _cache: return _cache[v]
    q = [Fr(x) for x in v]; q.append(1 - sum(q))
    P = [flint.arb(flint.fmpq(x.numerator, x.denominator)) for x in q]
    H = flint.arb(0)
    for x, xf in zip(P, q):
        if xf > 0: H -= x*x.log()/_LN2
    c = {k: sum((x**k for x in P), flint.arb(0)) for k in (2, 3, 4)}
    val = H - (_TA[0] + _TA[1]*c[2] + _TA[2]*c[3] + _TA[3]*c[4] + _TA[4]*c[2]*c[2])
    _cache[v] = val
    return val

def lemma_uniform():
    """Hess(H-F) on the box |x_i - 1/4| <= RHO_U (which contains the ball): exact Taylor expansion of Hess F about
    the uniform point, deviation bounded by sum |c| RHO_U^deg; Hess H bounded entrywise."""
    h = sp.symbols('h1 h2 h3'); rho = sp.Rational(RHO_U).limit_denominator(10**9)
    sub = {p1: sp.Rational(1, 4) + h[0], p2: sp.Rational(1, 4) + h[1], p3: sp.Rational(1, 4) + h[2]}
    Hmid = np.zeros((3, 3)); Rad = np.zeros((3, 3))
    for i in range(3):
        for k in range(3):
            e = sp.Poly(sp.expand(sp.diff(FX, X[i], X[k]).subs(sub)), *h)
            c0 = sum(c for m, c in zip(e.monoms(), e.coeffs()) if sum(m) == 0)
            dev = sum(abs(c)*rho**sum(m) for m, c in zip(e.monoms(), e.coeffs()) if sum(m) > 0)
            # -(1/ln2)(delta/p_i + 1/p4): p_i in [1/4-rho,1/4+rho], p4 in [1/4-3rho, 1/4+3rho]
            r = float(rho)
            dlo = (1/(0.25 + r) if i == k else 0) + 1/(0.25 + 3*r); dhi = (1/(0.25 - r) if i == k else 0) + 1/(0.25 - 3*r)
            lo = -dhi/LN2 - float(c0) - float(dev); hi = -dlo/LN2 - float(c0) + float(dev)
            Hmid[i, k] = (lo + hi)/2; Rad[i, k] = (hi - lo)/2*(1 + 1e-9)
    lam = np.linalg.eigvalsh(Hmid).min(); radn = np.sqrt((Rad**2).sum())
    return dict(lambda_min_mid=float(lam), radius_frobenius=float(radn), ok=bool(lam - 1e-9 > radn))

def lemma_edge():
    # region: s = p3+p4 in [0,S0], t in [-T0,T0], p1 = (1-s)/2 + t, p2 = (1-s)/2 - t; bounding box in x coords
    lo = np.array([[0.5 - S0/2 - T0, 0.5 - S0/2 - T0, 0.0]]); hi = np.array([[0.5 + T0, 0.5 + T0, S0]])
    grads = [sp.diff(Fsym([p1, p2, p3, sp.Symbol('p4')]), v) for v in (p1, p2, p3, sp.Symbol('p4'))]
    # partial derivatives of F as a symmetric function of 4 independent variables
    q = sp.symbols('q1 q2 q3 q4')
    Fq = sp.expand(Fsym(list(q)))
    dF = [IPoly({tuple(m): Fr(int(sp.fraction(c)[0]), int(sp.fraction(c)[1]))
                 for m, c in zip(sp.Poly(sp.diff(Fq, v), *q).monoms(), sp.Poly(sp.diff(Fq, v), *q).coeffs())})
          for v in q]
    qlo = np.array([[0.5 - S0/2 - T0, 0.5 - S0/2 - T0, 0.0, 0.0]]); qhi = np.array([[0.5 + T0, 0.5 + T0, S0, S0]])
    # subdivide the region box to tighten K
    K = -np.inf
    n = 8
    for a, b in itertools.product(range(n), repeat=2):
        l = qlo.copy(); h = qhi.copy()
        l[0, 0] = qlo[0, 0] + (qhi[0, 0]-qlo[0, 0])*a/n; h[0, 0] = qlo[0, 0] + (qhi[0, 0]-qlo[0, 0])*(a+1)/n
        l[0, 1] = qlo[0, 1] + (qhi[0, 1]-qlo[0, 1])*b/n; h[0, 1] = qlo[0, 1] + (qhi[0, 1]-qlo[0, 1])*(b+1)/n
        d = [f.eval(l, h) for f in dF]
        # upper bound of -(d1F+d2F)/2 + max(d3F,d4F), rounded upwards at every step
        val = up(-dn(d[0][0][0] + d[1][0][0])/2 + max(d[2][1][0], d[3][1][0]))
        K = max(K, val)
    xmin = 0.5 - S0/2 - T0
    e1 = -math.log2(xmin) - 1/LN2 + 1e-12
    s0_max = 2.0**(-(e1 + K))
    # phi'' on [-T0, T0]: phi(t) = h(1/2+t) - F(1/2+t, 1/2-t, 0, 0)
    tt = sp.Symbol('t')
    phiF = sp.expand(Fsym([sp.Rational(1, 2) + tt, sp.Rational(1, 2) - tt, 0, 0]))
    d2 = sp.Poly(sp.diff(phiF, tt, 2), tt)
    d2P = IPoly({tuple(m): Fr(int(sp.fraction(c)[0]), int(sp.fraction(c)[1])) for m, c in zip(d2.monoms(), d2.coeffs())})
    ok_conv = True; worst = np.inf
    m = 400
    for k in range(m):
        a = -T0 + 2*T0*k/m; b = -T0 + 2*T0*(k+1)/m
        Fl, Fh = d2P.eval(np.array([[a]]), np.array([[b]]))
        # h''(x) = -1/(ln2 x(1-x)) with x=1/2+t: x(1-x) = 1/4 - t^2 >= 1/4 - max(a^2,b^2) ... h'' <= -1/(ln2 * 1/4)
        tmin2 = 0.0 if a <= 0 <= b else min(a*a, b*b)
        hpp_hi = -1/(LN2*(0.25 - tmin2))*(1 - 1e-12)
        val = hpp_hi - Fh[0]   # upper bound of phi''  -> we need phi'' <= 0 ?
        worst = min(worst, -val)
    # phi(t) = h - F ; need phi >= 0 near 0 with phi(0)=0: need phi'' >= 0, i.e. h'' - F_tt >= 0
    worst_lower = np.inf
    for k in range(m):
        a = -T0 + 2*T0*k/m; b = -T0 + 2*T0*(k+1)/m
        Fl, Fh = d2P.eval(np.array([[a]]), np.array([[b]]))
        tmax2 = max(a*a, b*b)
        hpp_lo = -1/(LN2*(0.25 - tmax2))*(1 + 1e-12)
        worst_lower = min(worst_lower, dn(hpp_lo - Fh[0]))
    ok_conv = worst_lower > 0
    phi0 = float(1 - Fnum(0.5, 0.5, 0.0))
    return dict(K=float(K), e1=e1, S0=S0, T0=T0, s0_max=s0_max, phi_second_derivative_lower=float(worst_lower),
                phi0=phi0, ok=bool(ok_conv and S0 < s0_max))

def in_regions(V):
    """V: (n,4,3) simplex vertices. True if the whole simplex lies in a local region."""
    q = np.concatenate([V, (1 - V.sum(2))[..., None]], 2)   # (n,4,4)
    du = np.sqrt(((V - 0.25)**2).sum(2))
    inside = (du <= RHO_U*(1-1e-12)).all(1)
    for a, b in itertools.combinations(range(4), 2):
        c, d = [k for k in range(4) if k not in (a, b)]
        s = q[..., c] + q[..., d]; t = np.abs(q[..., a] - q[..., b])
        inside |= ((s <= S0*(1-1e-12)) & (t <= 2*T0*(1-1e-12))).all(1)
    return inside

def main():
    t_start = time.time()
    LU = lemma_uniform(); print('uniform lemma', LU, flush=True)
    LE = lemma_edge(); print('edge lemma', LE, flush=True)
    assert LU['ok'] and LE['ok']
    # check exact tightness values
    assert Fr(1) == sum([THETA[0], THETA[1]*Fr(1, 2), THETA[2]*Fr(1, 4), THETA[3]*Fr(1, 8), THETA[4]*Fr(1, 4)])
    S = np.array([[[0, 0, 0], [1, 0, 0], [0, 1, 0], [0, 0, 1]]], float)
    proved = excluded = 0; it = 0; minedge = 1.0; minLB = [np.inf]; arb_fail = [0]
    while len(S):
        it += 1
        batch, S = S[-20000:], S[:-20000]
        ins = in_regions(batch); excluded += ins.sum(); batch = batch[~ins]
        if not len(batch): continue
        vals = HmF(batch)                       # (n,4)
        lo = batch.min(1); hi = batch.max(1)
        Hb = hess_box(lo, hi)
        # lambda_min lower bound via Gershgorin on interval matrix
        lmin = np.full(len(batch), np.inf)
        for i in range(3):
            row = Hb[i][i][0].copy()
            for k in range(3):
                if k != i: row = dn(row - np.maximum(np.abs(Hb[i][k][0]), np.abs(Hb[i][k][1])))
            lmin = np.minimum(lmin, row)
        mminus = np.maximum(0.0, -lmin)
        edges = [np.sqrt(((batch[:, i] - batch[:, k])**2).sum(1)) for i, k in itertools.combinations(range(4), 2)]
        lmax = np.max(edges, 0)
        LB = vals.min(1) - mminus/2*(3/8)*lmax**2*(1+1e-12) - MARGIN
        good = LB > 0
        # independent ball-arithmetic re-check of every proved simplex (vertex values in arb, 128 bits)
        for b in np.where(good)[0]:
            corr = flint.arb(float(mminus[b]))*flint.arb(3)/flint.arb(16)*(flint.arb(float(lmax[b]))*(1 + flint.arb(10)**-12))**2   # lmax: float sqrt, relative error < 1e-15
            if not all(arb_HmF(tuple(batch[b, i])) - corr > 0 for i in range(4)):
                good[b] = False; arb_fail[0] += 1
        proved += good.sum()
        if good.any(): minLB[0] = min(minLB[0], float(LB[good].min()))
        bad = batch[~good]
        if len(bad):
            # bisect longest edge
            E = np.stack(edges, 1); arg = E[~good].argmax(1)
            pairs = list(itertools.combinations(range(4), 2))
            new = []
            for j, (i, k) in enumerate(pairs):
                sel = bad[arg == j]
                if not len(sel): continue
                mid = (sel[:, i] + sel[:, k])/2
                A = sel.copy(); A[:, k] = mid
                Bm = sel.copy(); Bm[:, i] = mid
                new += [A, Bm]
            minedge = min(minedge, lmax[~good].min()/2)
            if minedge < 1e-9: raise SystemExit('FAIL near %s' % bad[:2])
            S = np.concatenate([S] + new, 0)
        if it % 200 == 0: print(f'it {it} pending {len(S)} proved {proved} excluded {excluded} minedge {minedge:.2e}', flush=True)
    cert = dict(statement='H(p) >= F(p) on the 4-outcome simplex; equality only at uniform and (1/2,1/2,0,0) perms',
                theta=[str(t) for t in THETA], lemma_uniform=LU, lemma_edge=LE, rho_u=RHO_U,
                simplices_proved=int(proved), simplices_excluded=int(excluded), arb_recheck_rejections=arb_fail[0], min_certified_lower_bound=minLB[0], min_edge=minedge,
                seconds=round(time.time()-t_start, 1))
    os.makedirs(DATA, exist_ok=True)
    json.dump(cert, open(os.path.join(DATA, 'A_certificate.json'), 'w'), indent=1)
    print('DONE', cert)

if __name__ == '__main__':
    main()
