"""Shared exact tools for the CHSH witness on G = Z_p x Z_q (p, q prime).

Conventions (those of the manuscript):
  position basis |g>, Fourier basis |chi_k> with chi_k(g) = exp(2 pi i (k1 g1 / p + k2 g2 / q)),
  Q(A)(g, k) = <chi_k|g><g|A|chi_k> = (1/N) sum_h A[g, h] chi_k(h - g),  N = pq.

A point of G x G^ is x = (x1, x2, x3, x4): x1 in Z_p and x2 in Z_q are positions,
x3 in Z_p and x4 in Z_q label characters. The witness W = I + A0 B0 + A1 B0 + A1 B1 - A0 B1
has N Q(W)(x) = 1 + u1(x1) u2(x2) + u3(x3) u2(x2) + u3(x3) u4(x4) - u1(x1) u4(x4), and a pure
KD-positive projector P has Q(P) = 1/N on a rectangle (a + H) x (b + H^perp) and 0 elsewhere,
so Tr(W P) is the average of N Q(W) over that rectangle.

Exact parts use fractions.Fraction. Positive definiteness is certified with Arb ball
arithmetic (python-flint).
"""
from fractions import Fraction
import itertools

from flint import acb, acb_mat, arb


# ------------------------------------------------------------------ witness functions
def legendre(a, p):
    a %= p
    if a == 0:
        return 0
    return 1 if pow(a, (p - 1) // 2, p) == 1 else -1


def alternating(p):
    """Zero-mean alternating function: (1, -1) for p = 2; (0, -1, 1, ..., -1, 1) for odd p."""
    if p == 2:
        return [1, -1]
    return [0] + [(-1) ** x for x in range(1, p)]


def witness_functions(p, q):
    """Choice made in the manuscript: alternating functions if p != q,
    Legendre symbols (with a signed u4) if p = q is odd."""
    if p != q:
        return alternating(p), alternating(q), alternating(p), alternating(q)
    if p == 2:
        return [1, -1], [1, -1], [1, -1], [1, -1]
    leg = [legendre(x, p) for x in range(p)]
    sign = -legendre(-1, p)
    return leg, leg, leg, [sign * v for v in leg]


def chsh_symbol(u1, u2, u3, u4, x):
    x1, x2, x3, x4 = x
    return u1[x1] * u2[x2] + u3[x3] * u2[x2] + u3[x3] * u4[x4] - u1[x1] * u4[x4]


# ------------------------------------------------------------------ pure KD-positive states
def subgroups_pq(p, q):
    """All subgroups of Z_p x Z_q for primes p, q: the cyclic ones and the full group."""
    group = [(a, b) for a in range(p) for b in range(q)]
    subs = {frozenset(group)}
    for g in group:
        subs.add(frozenset(((i * g[0]) % p, (i * g[1]) % q) for i in range(p * q)))
    return sorted(subs, key=len)


def annihilator(H, p, q):
    """Characters k = (k1, k2) that are trivial on H."""
    return frozenset((k1, k2) for k1 in range(p) for k2 in range(q)
                     if all((k1 * h1 * q + k2 * h2 * p) % (p * q) == 0 for (h1, h2) in H))


def pure_rectangles(p, q):
    """Supports (a + H) x (b + H^perp) of the KD arrays of all pure KD-positive projectors."""
    out = []
    points = list(itertools.product(range(p), range(q)))
    for H in subgroups_pq(p, q):
        Hp = annihilator(H, p, q)
        cosets = {frozenset(((g[0] + h[0]) % p, (g[1] + h[1]) % q) for h in H) for g in points}
        dual_cosets = {frozenset(((k[0] + h[0]) % p, (k[1] + h[1]) % q) for h in Hp) for k in points}
        for c in cosets:
            for d in dual_cosets:
                out.append((H, c, d))
    return out


def witness_on_pure(p, q, u):
    """Exact values Tr(W P) on every pure KD-positive projector P."""
    u1, u2, u3, u4 = u
    n = p * q
    vals = []
    for H, c, d in pure_rectangles(p, q):
        s = Fraction(0)
        for (x1, x2) in c:
            for (x3, x4) in d:
                s += 1 + chsh_symbol(u1, u2, u3, u4, (x1, x2, x3, x4))
        vals.append((Fraction(s, n), len(H)))
    return vals


# ------------------------------------------------------------------ rigorous positivity
def fourier_acb(m):
    """Columns are the Fourier vectors: F[x, a] = exp(2 pi i x a / m) / sqrt(m)."""
    s = arb(m).sqrt()
    return acb_mat([[acb.exp_pi_i(acb(2 * x * a) / m) / s for a in range(m)] for x in range(m)])


def kron_acb(A, B):
    a, b = A.tolist(), B.tolist()
    ra, rb = len(a), len(b)
    return acb_mat([[a[i // rb][j // rb] * b[i % rb][j % rb] for j in range(ra * rb)]
                    for i in range(ra * rb)])


def identity_acb(m):
    return acb_mat([[acb(1) if i == j else acb(0) for j in range(m)] for i in range(m)])


def diag_acb(vals):
    m = len(vals)
    return acb_mat([[acb(vals[i]) if i == j else acb(0) for j in range(m)] for i in range(m)])


def herm(M):
    return M.conjugate().transpose()


def certify_pd(M, Vnum):
    """M: Hermitian acb_mat (balls). Vnum: floating-point approximation of its eigenvectors.

    Returns (ok, lower) where ok means that V^* M V has a positive diagonal and is strictly
    diagonally dominant, with every comparison decided by ball arithmetic. Strict diagonal
    dominance makes V^* M V positive definite, so V is invertible and M is positive definite.
    """
    n = M.nrows()
    V = acb_mat([[acb(float(Vnum[i, j].real), float(Vnum[i, j].imag)) for j in range(n)]
                 for i in range(n)])
    T = herm(V) * M * V
    t = T.tolist()
    worst = None
    ok = True
    for i in range(n):
        r = arb(0)
        for j in range(n):
            if j != i:
                r += abs(t[i][j])
        margin = t[i][i].real - r
        if not (margin > 0):
            ok = False
        lo = margin.lower()
        worst = lo if worst is None or lo < worst else worst
    return ok, worst
