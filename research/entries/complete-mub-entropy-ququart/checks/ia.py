"""Vectorised interval evaluation of real polynomials over many boxes, with outward rounding.
Every floating-point result is widened by one ulp (np.nextafter) after each operation, which encloses
the exact result under IEEE-754 round-to-nearest arithmetic."""
import numpy as np
from fractions import Fraction

def dn(x): return np.nextafter(x, -np.inf)
def up(x): return np.nextafter(x, np.inf)

def coef_interval(q):
    q = Fraction(q)
    f = float(q)
    lo, hi = f, f
    if Fraction(f) > q: lo = float(dn(f))
    if Fraction(f) < q: hi = float(up(f))
    return lo, hi

def imul(alo, ahi, blo, bhi):
    c = np.stack([alo*blo, alo*bhi, ahi*blo, ahi*bhi])
    return dn(c.min(0)), up(c.max(0))

def ipow(lo, hi, e):
    """Exact-range interval power of [lo,hi] (outward rounded)."""
    if e == 0: return np.ones_like(lo), np.ones_like(hi)
    plo, phi = lo**e, hi**e
    # rounding: integer powers computed by repeated multiplication have rel. error <= e ulp; widen by 2e ulps
    rlo, rhi = np.minimum(plo, phi), np.maximum(plo, phi)
    if e % 2 == 0:
        contains0 = (lo <= 0) & (hi >= 0)
        rlo = np.where(contains0, 0.0, rlo)
    for _ in range(2*e):
        rlo = dn(rlo); rhi = up(rhi)
    if e % 2 == 0: rlo = np.maximum(rlo, 0.0)
    return rlo, rhi

class IPoly:
    """Polynomial given by dict {exponent tuple: Fraction}."""
    def __init__(self, d):
        self.terms = [(tuple(e), coef_interval(c)) for e, c in d.items() if c != 0]
        self.nv = len(self.terms[0][0]) if self.terms else 0
    def eval(self, lo, hi):
        """lo, hi: arrays (nboxes, nv). Returns enclosure (lo, hi) of the polynomial range on each box."""
        nb = lo.shape[0]
        cache = {}
        def pw(i, e):
            k = (i, e)
            if k not in cache: cache[k] = ipow(lo[:, i], hi[:, i], e)
            return cache[k]
        slo = np.zeros(nb); shi = np.zeros(nb)
        for e, (clo, chi) in self.terms:
            mlo = np.full(nb, clo); mhi = np.full(nb, chi)
            for i, ei in enumerate(e):
                if ei:
                    plo, phi = pw(i, ei)
                    mlo, mhi = imul(mlo, mhi, plo, phi)
            slo = dn(slo + mlo); shi = up(shi + mhi)
        return slo, shi

def derivative_dict(d, i):
    out = {}
    for e, c in d.items():
        if e[i] > 0:
            e2 = list(e); e2[i] -= 1
            out[tuple(e2)] = out.get(tuple(e2), 0) + c*e[i]
    return out
