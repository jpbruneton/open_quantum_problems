"""Certificate for step (A) in d = 5:  H(p) >= F(p) - ETA  for every probability vector p on 5 outcomes,
where F = sum_m THETA[m] prod_i c_{k_i}(p) (params5.py) and H is the Shannon entropy in bits.

By the S_5 symmetry of H and F it suffices to treat the ordered region p1 >= p2 >= ... >= p5, which is the simplex
with vertices e1, (1/2,1/2,0,0,0), (1/3,1/3,1/3,0,0), (1/4,...,1/4,0), (1/5,...,1/5).
Coordinates x = 60 (p1,...,p4) (p5 = 1 - p1 - ... - p4); vertex coordinates of all simplices produced by edge
bisection are dyadic multiples of 1/60 and are exact in double precision as x-values.
Bound on a simplex S with vertices v_0..v_4 and longest edge l (Euclidean, in p coordinates):
H is concave, so H >= its linear interpolant on S; if Hess F >= -m on S (m >= 0) then
F <= (interpolant of F) + (m/2) sum_i lambda_i |p - v_i|^2 <= interpolant + (m/2)(2/5) l^2
(since sum_i lambda_i |p - v_i|^2 = sum_{i<k} lambda_i lambda_k |v_i - v_k|^2 <= l^2 (1 - 1/5)/2).  Hence
  H - F + ETA >= min_i (H - F + ETA)(v_i) - (m/5) l^2.
m is bounded with an outward-rounded interval Hessian of F on the bounding box and Gershgorin's theorem.
Vertex values are computed in double precision with an absolute margin, and every accepted simplex is re-checked
with vertex values in ball arithmetic (arb, 128 bits) from the exact rational vertices.
Output: data/A5_certificate.json."""
import sys, os, json, time, itertools, math
HERE = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, HERE)
import numpy as np
import sympy as sp
from fractions import Fraction as Fr
import flint
from ia import IPoly, dn, up
from params5 import THETA, ETA

DATA = os.path.join(HERE, '..', 'data')
MARGIN = 1e-10
SC = 60

P = sp.symbols('p1:5')
P5 = 1 - sum(P)
def c_sym(k): return sum(x**k for x in P) + P5**k
FX = sp.expand(sum(sp.Rational(t.numerator, t.denominator)*sp.Mul(*[c_sym(k) for k in m]) for m, t in THETA.items()))
def todict(expr):
    poly = sp.Poly(expr, *P)
    return {tuple(mo): Fr(int(sp.fraction(c)[0]), int(sp.fraction(c)[1])) for mo, c in zip(poly.monoms(), poly.coeffs())}
HESS = [[IPoly(todict(sp.diff(FX, P[i], P[k]))) for k in range(4)] for i in range(4)]
TH = [(m, float(t)) for m, t in THETA.items()]
ETAf = float(ETA)

def eta(p):
    return np.where(p > 0, -p*np.log2(np.where(p > 0, p, 1.0)), 0.0)

def HmF(X):  # X: (..., 4) in x = 60 p coordinates
    p = [X[..., i]/SC for i in range(4)]
    p5 = np.maximum((SC - X.sum(-1))/SC, 0.0)
    p.append(p5)
    H = sum(eta(q) for q in p)
    c = {k: sum(q**k for q in p) for k in range(2, 6)}
    Fv = sum(t*np.prod([c[k] for k in m], axis=0) if m else t for m, t in TH)
    return H - Fv + ETAf

flint.ctx.prec = 128
_TA = [(m, flint.arb(flint.fmpq(t.numerator, t.denominator))) for m, t in THETA.items()]
_ETA = flint.arb(flint.fmpq(ETA.numerator, ETA.denominator))
_LN2 = flint.arb(2).log()
_cache = {}
def arb_HmF(v):
    if v in _cache: return _cache[v]
    q = [Fr(x)/SC for x in v]; q.append(1 - sum(q))
    assert all(x >= 0 for x in q)
    A = [flint.arb(flint.fmpq(x.numerator, x.denominator)) for x in q]
    H = flint.arb(0)
    for x, xf in zip(A, q):
        if xf > 0: H -= x*x.log()/_LN2
    c = {k: sum((x**k for x in A), flint.arb(0)) for k in range(2, 6)}
    F = flint.arb(0)
    for m, t in _TA:
        term = t
        for k in m: term = term*c[k]
        F += term
    val = H - F + _ETA
    _cache[v] = val
    return val

def main():
    t_start = time.time()
    S = np.array([[[60, 0, 0, 0], [30, 30, 0, 0], [20, 20, 20, 0], [15, 15, 15, 15], [12, 12, 12, 12]]], float)
    pairs = list(itertools.combinations(range(5), 2))
    proved = 0; it = 0; minedge = 1e9; minLB = np.inf; arb_fail = 0; worst_vertex = np.inf
    while len(S):
        it += 1
        batch, S = S[-20000:], S[:-20000]
        vals = HmF(batch)                       # (n,5)
        worst_vertex = min(worst_vertex, float(vals.min()))
        lo = dn(batch.min(1)/SC); hi = up(batch.max(1)/SC)
        Hb = [[HESS[i][k].eval(lo, hi) for k in range(4)] for i in range(4)]
        lmin = np.full(len(batch), np.inf)
        for i in range(4):
            row = Hb[i][i][0].copy()
            for k in range(4):
                if k != i: row = dn(row - np.maximum(np.abs(Hb[i][k][0]), np.abs(Hb[i][k][1])))
            lmin = np.minimum(lmin, row)
        mminus = np.maximum(0.0, -lmin)
        E = np.stack([np.sqrt(((batch[:, i] - batch[:, k])**2).sum(1)) for i, k in pairs], 1)/SC
        lmax = E.max(1)
        LB = vals.min(1) - mminus/5*lmax**2*(1+1e-12) - MARGIN
        good = LB > 0
        for b in np.where(good)[0]:
            corr = flint.arb(float(mminus[b]))/5*(flint.arb(float(lmax[b]))*(1 + flint.arb(10)**-12))**2
            if not all(arb_HmF(tuple(batch[b, i])) - corr > 0 for i in range(5)):
                good[b] = False; arb_fail += 1
        proved += int(good.sum())
        if good.any(): minLB = min(minLB, float(LB[good].min()))
        bad = batch[~good]
        if len(bad):
            arg = E[~good].argmax(1)
            new = []
            for j, (i, k) in enumerate(pairs):
                sel = bad[arg == j]
                if not len(sel): continue
                mid = (sel[:, i] + sel[:, k])/2
                A = sel.copy(); A[:, k] = mid
                B = sel.copy(); B[:, i] = mid
                new += [A, B]
            minedge = min(minedge, float(lmax[~good].min())/2)
            if minedge < 1e-7: raise SystemExit('FAIL near %s' % (bad[:2]/SC))
            S = np.concatenate([S] + new, 0)
        if it % 100 == 0: print(f'it {it} pending {len(S)} proved {proved} minedge {minedge:.2e} {time.time()-t_start:.0f}s', flush=True)
    cert = dict(statement='H(p) >= F(p) - ETA on the 5-outcome simplex (ordered region, S_5 symmetry)',
                theta={str(m): str(t) for m, t in THETA.items()}, ETA=str(ETA),
                simplices_proved=proved, arb_recheck_rejections=arb_fail, min_certified_lower_bound=minLB,
                min_vertex_value=worst_vertex, min_edge=minedge, seconds=round(time.time()-t_start, 1))
    os.makedirs(DATA, exist_ok=True)
    json.dump(cert, open(os.path.join(DATA, 'A5_certificate.json'), 'w'), indent=1)
    print('DONE', cert)

if __name__ == '__main__':
    main()
