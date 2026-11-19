"""GF(2) tools for bivariate bicycle (BB) codes and their covers.

Used by check_bb_covers.py (covers of bivariate bicycle codes, arXiv:2511.13560).

A BB code Q(A, B, l, m): group G = Z_l x Z_m, element (i, j) has index i*m + j.
A and B are lists of exponent pairs (monomials x^i y^j).  Qubits: left block
(index g) and right block (index N + g), N = l*m.
  X check c acts on left qubits c + alpha_i and right qubits c + beta_j.
  Z check c acts on left qubits c - beta_j and right qubits c - alpha_i.
Vectors over GF(2) are Python ints (bit q = qubit q).
"""
import itertools
import math

import numpy as np


# ----------------------------------------------------------------------------
# construction
# ----------------------------------------------------------------------------
def checks(A, B, l, m):
    """Return (HX rows, HZ rows, n) as lists of ints."""
    N = l * m

    def idx(i, j):
        return (i % l) * m + (j % m)

    HX, HZ = [], []
    for ci in range(l):
        for cj in range(m):
            rx = 0
            rz = 0
            for (a, b) in A:
                rx ^= 1 << idx(ci + a, cj + b)
                rz ^= 1 << (N + idx(ci - a, cj - b))
            for (a, b) in B:
                rx ^= 1 << (N + idx(ci + a, cj + b))
                rz ^= 1 << idx(ci - a, cj - b)
            HX.append(rx)
            HZ.append(rz)
    return HX, HZ, 2 * N


# ----------------------------------------------------------------------------
# linear algebra over GF(2) with int bitsets
# ----------------------------------------------------------------------------
def echelon(rows):
    """Return dict pivot_bit -> reduced row (each pivot bit appears in one row only
    among the pivots processed so far; enough for rank / membership tests)."""
    piv = {}
    for r in rows:
        r = reduce_vec(r, piv)
        if r:
            piv[r.bit_length() - 1] = r
    return piv


def reduce_vec(v, piv):
    while v:
        h = v.bit_length() - 1
        p = piv.get(h)
        if p is None:
            return v
        v ^= p
    return 0


def rank(rows):
    return len(echelon(rows))


def nullspace(rows, n):
    """Basis of {v in F_2^n : <r, v> = 0 for all rows r}."""
    # Gaussian elimination to reduced row echelon form, tracking pivots by lowest bit.
    rows = [r for r in rows if r]
    pivots = []          # list of (pivot column, row)
    for r in rows:
        for (c, pr) in pivots:
            if (r >> c) & 1:
                r ^= pr
        if r:
            c = (r & -r).bit_length() - 1
            # eliminate column c from earlier pivot rows
            pivots = [(c2, pr ^ r if (pr >> c) & 1 else pr) for (c2, pr) in pivots]
            pivots.append((c, r))
    pivcols = {c for (c, _) in pivots}
    basis = []
    for f in range(n):
        if f in pivcols:
            continue
        v = 1 << f
        for (c, pr) in pivots:
            if (pr >> f) & 1:
                v |= 1 << c
        basis.append(v)
    return basis


def logical_reps(H_other, H_same, n):
    """Representatives of ker(H_other) / rowspace(H_same) (a basis)."""
    piv = echelon(H_same)
    reps = []
    for v in nullspace(H_other, n):
        r = reduce_vec(v, piv)
        if r:
            piv[r.bit_length() - 1] = r
            reps.append(v)
    return reps


def num_logical(HX, HZ, n):
    return n - rank(HX) - rank(HZ)


# ----------------------------------------------------------------------------
# exact distance by meet in the middle on (syndrome, logical value) keys
# ----------------------------------------------------------------------------
class DistanceSolver:
    """Exact minimum weight of ker(H) minus rowspace(H_dual).

    Each qubit q gets a syndrome key (column q of an independent set of rows of
    H) and logical keys (column q of a basis of ker(H_dual)/rowspace(H), i.e.
    operators of the other type, cut into chunks of at most 63 bits).  A vector
    v is a nontrivial logical operator iff the XOR of its syndrome keys is zero
    and the XOR of its logical keys is nonzero.
    """

    CHUNK = 63

    def __init__(self, H, H_dual, n, reps=None):
        """If reps is given, it replaces the basis of ker(H_dual)/rowspace(H):
        the solver then finds the minimum weight of the vectors of ker(H) that
        are not orthogonal to span(reps)."""
        self.n = n
        indep = list(echelon(H).values())
        self.r = len(indep)
        if reps is None:
            reps = logical_reps(H_dual, H, n)
        self.k = len(reps)
        if self.r > 63:
            raise ValueError("syndrome does not fit in 63 bits")

        def pack(rows):
            keys = []
            for q in range(n):
                key = 0
                for t, row in enumerate(rows):
                    key |= ((row >> q) & 1) << t
                keys.append(key)
            return np.array(keys, dtype=np.uint64)

        self.syn = pack(indep)
        self.logs = [pack(reps[c:c + self.CHUNK]) for c in range(0, len(reps), self.CHUNK)]
        # level t = XOR keys of all t-subsets: (syndromes, [logical chunks], offsets by last index)
        zero = np.zeros(1, dtype=np.uint64)
        self._levels = [(zero, [zero for _ in self.logs], None)]

    def _level(self, t):
        while len(self._levels) <= t:
            cur = len(self._levels)
            if cur == 1:
                syn = self.syn.copy()
                logs = [a.copy() for a in self.logs]
                off = np.arange(self.n + 1)
            else:
                psyn, plogs, poff = self._levels[cur - 1]
                # all (cur-1)-subsets with last index < j, extended by j
                syn = np.concatenate([psyn[:poff[j]] ^ self.syn[j] for j in range(self.n)])
                logs = [np.concatenate([pl[:poff[j]] ^ a[j] for j in range(self.n)])
                        for pl, a in zip(plogs, self.logs)]
                off = np.concatenate(([0], np.cumsum(poff[:self.n])))
            self._levels.append((syn, logs, off))
        return self._levels[t]

    @staticmethod
    def _groups(level):
        syn, logs, _ = level
        order = np.argsort(syn, kind="stable")
        s = syn[order]
        starts = np.concatenate(([0], np.flatnonzero(s[1:] != s[:-1]) + 1))
        mins = [np.minimum.reduceat(a[order], starts) for a in logs]
        maxs = [np.maximum.reduceat(a[order], starts) for a in logs]
        return s[starts], mins, maxs

    def has_logical_of_weight_at_most(self, w):
        """True iff some nontrivial logical has weight <= w, assuming none has
        weight < w (call with increasing w)."""
        if self.k == 0:
            return False
        w1, w2 = (w + 1) // 2, w // 2
        u1, mn1, mx1 = self._groups(self._level(w1))
        if w1 == w2:
            return any(bool(np.any(a != b)) for a, b in zip(mn1, mx1))
        u2, mn2, mx2 = self._groups(self._level(w2))
        _, i1, i2 = np.intersect1d(u1, u2, assume_unique=True, return_indices=True)
        for a1, b1, a2, b2 in zip(mn1, mx1, mn2, mx2):
            bad = (a1[i1] != b1[i1]) | (a2[i2] != b2[i2]) | (a1[i1] != a2[i2])
            if np.any(bad):
                return True
        return False

    def distance(self, wmax=None):
        """Exact distance; returns None if k == 0, or wmax + 1 if no logical of
        weight <= wmax exists (meaning distance > wmax)."""
        if self.k == 0:
            return None
        w = 1
        while wmax is None or w <= wmax:
            if self.has_logical_of_weight_at_most(w):
                return w
            w += 1
        return wmax + 1


def params(A, B, l, m, wmax=None):
    """(n, k, dZ) with dZ the minimum weight of ker(HX) minus rowspace(HZ)."""
    HX, HZ, n = checks(A, B, l, m)
    solver = DistanceSolver(HX, HZ, n)
    return n, solver.k, solver.distance(wmax)


def popcount64(x):
    """Bit count of a uint64 array (works with numpy 1.x and 2.x)."""
    x = x.copy()
    m1 = np.uint64(0x5555555555555555)
    m2 = np.uint64(0x3333333333333333)
    m4 = np.uint64(0x0F0F0F0F0F0F0F0F)
    h01 = np.uint64(0x0101010101010101)
    x -= (x >> np.uint64(1)) & m1
    x = (x & m2) + ((x >> np.uint64(2)) & m2)
    x = (x + (x >> np.uint64(4))) & m4
    return (x * h01) >> np.uint64(56)


def brute_force_distance(H, H_dual, n):
    """Independent exact distance by enumerating ker(H) entirely (small codes)."""
    stab = list(echelon(H_dual).values())
    reps = logical_reps(H, H_dual, n)     # ker(H)/rowspace(H_dual)
    k = len(reps)
    if k == 0:
        return None
    S = np.zeros(1, dtype=np.uint64)
    for v in stab:
        S = np.concatenate((S, S ^ np.uint64(v)))
    best = n + 1
    for c in range(1, 1 << k):
        v = 0
        for t in range(k):
            if (c >> t) & 1:
                v ^= reps[t]
        best = min(best, int(popcount64(S ^ np.uint64(v)).min()))
    return best


# ----------------------------------------------------------------------------
# exact distance from the two-block structure (anchored enumeration)
# ----------------------------------------------------------------------------
def _apply(cols, arr):
    """Apply the GF(2)-linear map with column images cols (ints) to a uint64 array."""
    out = np.zeros_like(arr)
    one = np.uint64(1)
    for j, c in enumerate(cols):
        if c:
            out ^= ((arr >> np.uint64(j)) & one) * np.uint64(c)
    return out


def _solver(cols, N):
    """For the map M with column images cols (N-bit ints): return (P, kernel)
    with M P c = c for every c in the image of M, and a basis of ker M."""
    piv = {}                       # pivot bit -> (vector, combination)
    kernel = []
    for j, c in enumerate(cols):
        v, comb = c, 1 << j
        for p, (pv, pc) in piv.items():
            if (v >> p) & 1:
                v ^= pv
                comb ^= pc
        if v == 0:
            kernel.append(comb)
            continue
        p = v.bit_length() - 1
        for q in list(piv):
            qv, qc = piv[q]
            if (qv >> p) & 1:
                piv[q] = (qv ^ v, qc ^ comb)
        piv[p] = (v, comb)
    P = [piv[p][1] if p in piv else 0 for p in range(N)]
    return P, kernel


def _subsets_with_anchor(N, size_max):
    """uint64 array of all subsets of {0..N-1} containing 0, of size <= size_max."""
    out = [np.array([1], dtype=np.uint64)]
    level = np.array([1], dtype=np.uint64)
    off = None
    for t in range(1, size_max):
        if t == 1:
            new = np.array([1 | (1 << j) for j in range(1, N)], dtype=np.uint64)
            noff = np.arange(N)            # noff[j] = number of entries with last index < j
        else:
            new = np.concatenate([level[:off[j]] | np.uint64(1 << j) for j in range(1, N)])
            noff = np.concatenate(([0, 0], np.cumsum(off[1:N])))[:N]
        level, off = new, noff
        out.append(level)
    return np.concatenate(out)


def anchored_distance(A, B, l, m, F, max_kernel_dim=16):
    """Minimum weight of a nontrivial Z-type logical (f, g) among those with
    |f| <= F or |g| <= F.  Every logical of weight <= 2F+1 is of this kind, so
    the returned value w is the exact Z-distance when w <= 2F+1, and otherwise
    the Z-distance is >= 2F+2.  Uses translation invariance: the lighter block
    is translated so that it contains the origin.  Requires l*m <= 63."""
    N = l * m
    if N > 63:
        raise ValueError("block too large for 64-bit packing")
    HX, HZ, n = checks(A, B, l, m)
    reps = logical_reps(HZ, HX, n)          # X-type logical representatives
    if not reps:
        return None
    maskN = (1 << N) - 1
    # column images of the syndrome map, per block
    colsL = [0] * N
    colsR = [0] * N
    for c, row in enumerate(HX):
        for q in range(N):
            if (row >> q) & 1:
                colsL[q] |= 1 << c
            if (row >> (N + q)) & 1:
                colsR[q] |= 1 << c
    best = n + 1
    for (cs, co, shift_s, shift_o) in ((colsL, colsR, 0, N), (colsR, colsL, N, 0)):
        # 'small' block s (columns cs), 'other' block o (columns co)
        P, kernel = _solver(co, N)
        if len(kernel) > max_kernel_dim:
            raise ValueError(f"kernel of dimension {len(kernel)} too large")
        ker_all = np.zeros(1, dtype=np.uint64)
        for kv in kernel:
            ker_all = np.concatenate((ker_all, ker_all ^ np.uint64(kv)))
        rs = [np.uint64((r >> shift_s) & maskN) for r in reps]
        ro = [np.uint64((r >> shift_o) & maskN) for r in reps]

        def scan(small):
            nonlocal best
            target = _apply(cs, small)
            part = _apply(P, target)
            okmask = _apply(co, part) == target
            small_ok = small[okmask]
            part = part[okmask]
            if small_ok.size == 0:
                return
            ws = popcount64(small_ok)
            par_s = [popcount64(small_ok & r) & np.uint64(1) for r in rs]
            for kv in ker_all:
                other = part ^ kv
                w = ws + popcount64(other)
                nontrivial = np.zeros(small_ok.shape, dtype=bool)
                for ps, r in zip(par_s, ro):
                    nontrivial |= ((ps + popcount64(other & r)) & np.uint64(1)) == 1
                if np.any(nontrivial):
                    best = min(best, int(w[nontrivial].min()))

        scan(np.zeros(1, dtype=np.uint64))              # small block empty
        scan(_subsets_with_anchor(N, F))                # small block contains the origin
    return best


# ----------------------------------------------------------------------------
# multiword version of the anchored enumeration (blocks of any size)
# ----------------------------------------------------------------------------
def _to_words(v, W):
    return [np.uint64((v >> (64 * w)) & 0xFFFFFFFFFFFFFFFF) for w in range(W)]


def _apply_mw(cols, arr, n_in, W_out):
    """cols[j] = image (int) of basis vector j; arr has shape (count, W_in)."""
    out = np.zeros((arr.shape[0], W_out), dtype=np.uint64)
    one = np.uint64(1)
    for j in range(n_in):
        c = cols[j]
        if not c:
            continue
        bit = (arr[:, j // 64] >> np.uint64(j % 64)) & one
        for w, cw in enumerate(_to_words(c, W_out)):
            if cw:
                out[:, w] ^= bit * cw
    return out


def _popcount_mw(arr):
    return sum(popcount64(arr[:, w]) for w in range(arr.shape[1]))


def _parity_mw(arr, mask_words):
    acc = np.zeros(arr.shape[0], dtype=np.uint64)
    for w, mw in enumerate(mask_words):
        if mw:
            acc += popcount64(arr[:, w] & mw)
    return acc & np.uint64(1)


def _anchored_subsets_mw(N, size, W):
    """All subsets of {0..N-1} of the given size containing 0, shape (count, W)."""
    import itertools
    if size == 1:
        idx = np.zeros((1, 0), dtype=np.int64)
    else:
        idx = np.array(list(itertools.combinations(range(1, N), size - 1)), dtype=np.int64)
    out = np.zeros((idx.shape[0], W), dtype=np.uint64)
    out[:, 0] |= np.uint64(1)
    rows = np.arange(idx.shape[0])
    for c in range(idx.shape[1]):
        out[rows, idx[:, c] // 64] |= np.uint64(1) << (idx[:, c] % 64).astype(np.uint64)
    return out


def anchored_distance_mw(A, B, l, m, F, reps=None, max_kernel_dim=16, chunk=200_000):
    """Same contract as anchored_distance, for blocks of any size, with an
    optional replacement of the X-type representatives (see DistanceSolver).
    Returns the minimum weight found, or 2*l*m + 1 if none."""
    N = l * m
    W = (N + 63) // 64
    HX, HZ, n = checks(A, B, l, m)
    if reps is None:
        reps = logical_reps(HZ, HX, n)
    if not reps:
        return None
    maskN = (1 << N) - 1
    colsL = [0] * N
    colsR = [0] * N
    for c, row in enumerate(HX):
        for q in range(N):
            if (row >> q) & 1:
                colsL[q] |= 1 << c
            if (row >> (N + q)) & 1:
                colsR[q] |= 1 << c
    best = n + 1
    for (cs, co, shift_s, shift_o) in ((colsL, colsR, 0, N), (colsR, colsL, N, 0)):
        P, kernel = _solver(co, N)
        if len(kernel) > max_kernel_dim:
            raise ValueError(f"kernel of dimension {len(kernel)} too large")
        ker_all = [0]
        for kv in kernel:
            ker_all += [x ^ kv for x in ker_all]
        rs = [_to_words((r >> shift_s) & maskN, W) for r in reps]
        ro = [(r >> shift_o) & maskN for r in reps]
        ro_w = [_to_words(r, W) for r in ro]

        def scan(small):
            nonlocal best
            target = _apply_mw(cs, small, N, W)
            part = _apply_mw(P, target, N, W)
            ok = np.all(_apply_mw(co, part, N, W) == target, axis=1)
            small_ok = small[ok]
            part = part[ok]
            if small_ok.shape[0] == 0:
                return
            ws = _popcount_mw(small_ok)
            par_s = [_parity_mw(small_ok, r) for r in rs]
            for kv in ker_all:
                kw = _to_words(kv, W)
                other = part.copy()
                for w in range(W):
                    other[:, w] ^= kw[w]
                wt = ws + _popcount_mw(other)
                cand = wt < best
                if not np.any(cand):
                    continue
                nontrivial = np.zeros(small_ok.shape[0], dtype=bool)
                for ps, rw in zip(par_s, ro_w):
                    nontrivial |= ((ps + _parity_mw(other, rw)) & np.uint64(1)) == 1
                sel = nontrivial & cand
                if np.any(sel):
                    best = min(best, int(wt[sel].min()))

        scan(np.zeros((1, W), dtype=np.uint64))
        for size in range(1, F + 1):
            subs = _anchored_subsets_mw(N, size, W)
            for s0 in range(0, subs.shape[0], chunk):
                scan(subs[s0:s0 + chunk])
    return best


# ----------------------------------------------------------------------------
# bases up to symmetry, lifts and projection
# ----------------------------------------------------------------------------
def canonical(A, B, l, m):
    best = None
    ua = [a for a in range(1, l + 1) if math.gcd(a, l) == 1] if l > 1 else [1]
    ub = [b for b in range(1, m + 1) if math.gcd(b, m) == 1] if m > 1 else [1]
    for a in ua:
        for b in ub:
            As = [((a * i) % l, (b * j) % m) for (i, j) in A]
            Bs = [((a * i) % l, (b * j) % m) for (i, j) in B]
            forms = []
            for P in (As, Bs):
                fs = []
                for (ti, tj) in P:
                    fs.append(tuple(sorted(((i - ti) % l, (j - tj) % m) for (i, j) in P)))
                forms.append(min(fs))
            key = min((forms[0], forms[1]), (forms[1], forms[0]))
            if best is None or key < best:
                best = key
    return best


def bases(l, m):
    mons = [(i, j) for i in range(l) for j in range(m)]
    polys = [((0, 0), p, q) for p, q in itertools.combinations(mons[1:], 2)]
    seen = set()
    for A in polys:
        for B in polys:
            if (B, A) < (A, B):
                continue
            key = canonical(A, B, l, m)
            if key in seen:
                continue
            seen.add(key)
            yield list(key[0]), list(key[1])


def lifts(P, l, u):
    opts = [[(a + l * s, b) for s in range(u)] for (a, b) in P[1:]]
    for c in itertools.product(*opts):
        yield [P[0]] + list(c)


def project(v, N, u):
    """Push-forward of a cover vector (2uN bits) to the base (2N bits)."""
    mask = (1 << N) - 1
    left = 0
    right = 0
    for s in range(u):
        left ^= (v >> (s * N)) & mask
        right ^= (v >> (u * N + s * N)) & mask
    return left | (right << N)
