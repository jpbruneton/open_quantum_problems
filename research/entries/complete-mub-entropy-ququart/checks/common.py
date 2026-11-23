"""Exact data for the PN4 proof: standard complete MUB set of C^4 (two qubits),
the quartic comparison function F and the homogeneous polynomial g on the chart psi=(1,w)."""
import itertools
from fractions import Fraction as Fr
import flint

# Pauli matrices with Gaussian-rational entries, stored as (re, im) integer matrices
I2 = [[1, 0], [0, 1]]
def cm(re, im): return (re, im)
PAULI = {
    'I': ([[1, 0], [0, 1]], [[0, 0], [0, 0]]),
    'X': ([[0, 1], [1, 0]], [[0, 0], [0, 0]]),
    'Y': ([[0, 0], [0, 0]], [[0, -1], [1, 0]]),
    'Z': ([[1, 0], [0, -1]], [[0, 0], [0, 0]]),
}
CLASSES = [['XI', 'IX', 'XX'], ['ZI', 'IZ', 'ZZ'], ['YI', 'IY', 'YY'],
           ['XY', 'YZ', 'ZX'], ['XZ', 'YX', 'ZY']]

def cmul(A, B):
    (ar, ai), (br, bi) = A, B
    n, m, k = len(ar), len(br[0]), len(br)
    rr = [[sum(ar[i][t]*br[t][j] - ai[i][t]*bi[t][j] for t in range(k)) for j in range(m)] for i in range(n)]
    ii = [[sum(ar[i][t]*bi[t][j] + ai[i][t]*br[t][j] for t in range(k)) for j in range(m)] for i in range(n)]
    return (rr, ii)

def ckron(A, B):
    (ar, ai), (br, bi) = A, B
    n, m = len(ar), len(br)
    R = [[0]*(n*m) for _ in range(n*m)]; J = [[0]*(n*m) for _ in range(n*m)]
    for i in range(n):
        for j in range(n):
            for k in range(m):
                for l in range(m):
                    R[i*m+k][j*m+l] = ar[i][j]*br[k][l] - ai[i][j]*bi[k][l]
                    J[i*m+k][j*m+l] = ar[i][j]*bi[k][l] + ai[i][j]*br[k][l]
    return (R, J)

def pauli2(name): return ckron(PAULI[name[0]], PAULI[name[1]])

def projectors():
    """For each class, the four rank-one projectors (I+s1 P1)(I+s2 P2)/4 as (R, J) with Fraction entries."""
    out = []
    I4 = pauli2('II')
    for cl in CLASSES:
        P1, P2 = pauli2(cl[0]), pauli2(cl[1])
        prs = []
        for s1, s2 in itertools.product((1, -1), repeat=2):
            A = tuple([[I4[t][i][j] + s1*P1[t][i][j] for j in range(4)] for i in range(4)] for t in range(2))
            Bm = tuple([[I4[t][i][j] + s2*P2[t][i][j] for j in range(4)] for i in range(4)] for t in range(2))
            R, J = cmul(A, Bm)
            prs.append(([[Fr(x, 4) for x in row] for row in R], [[Fr(x, 4) for x in row] for row in J]))
        out.append(prs)
    return out

# Comparison function F(p) = t0 + t2 c2 + t3 c3 + t4 c4 + t22 c2^2,  c_k = sum_a p_a^k.
# t3, t4, t22 are rounded values from an SDP/LP design (max. curvature at the minimisers);
T3, T4, T22 = Fr(1841, 100), Fr(-1081, 100), Fr(61, 100)
def solve_t0_t2():
    # edge: c2=1/2,c3=1/4,c4=1/8,c2^2=1/4 ; uniform: 1/4,1/16,1/64,1/16
    r1 = 1 - (T3/4 + T4/8 + T22/4)
    r2 = 2 - (T3/16 + T4/64 + T22/16)
    # t0 + t2/2 = r1 ; t0 + t2/4 = r2
    t2 = 4*(r1 - r2); t0 = r1 - t2/2
    return t0, t2
T0, T2 = solve_t0_t2()
THETA = (T0, T2, T3, T4, T22)

def F_of(p):
    c = lambda k: sum(x**k for x in p)
    return T0 + T2*c(2) + T3*c(3) + T4*c(4) + T22*c(2)**2

def build_g():
    """g(u,v) = sum_j F_hom(p_j(psi)) - 7 N^4 for psi = (1, u1+i v1, u2+i v2, u3+i v3), N = |psi|^2.
    Returns an fmpq_mpoly in the 6 variables u1,u2,u3,v1,v2,v3."""
    ctx = flint.fmpq_mpoly_ctx.get(('u1', 'u2', 'u3', 'v1', 'v2', 'v3'), 'lex')
    u1, u2, u3, v1, v2, v3 = ctx.gens()
    a = [ctx.from_dict({(0,)*6: 1}), u1, u2, u3]
    b = [ctx.from_dict({}), v1, v2, v3]
    N = sum((x*x for x in a[1:]), ctx.from_dict({(0,)*6: 1})) + sum((x*x for x in b[1:]), ctx.from_dict({}))
    one = ctx.from_dict({(0,)*6: 1})
    g = ctx.from_dict({})
    for prs in projectors():
        ps = []
        for R, J in prs:
            p = ctx.from_dict({})
            for i in range(4):
                for j in range(4):
                    if R[i][j]:
                        p += flint.fmpq(R[i][j].numerator, R[i][j].denominator)*(a[i]*a[j] + b[i]*b[j])
                    if J[i][j]:
                        p -= 2*flint.fmpq(J[i][j].numerator, J[i][j].denominator)*a[i]*b[j]
            ps.append(p)
        c2 = sum(ps[k]**2 for k in range(4)); c3 = sum(ps[k]**3 for k in range(4)); c4 = sum(ps[k]**4 for k in range(4))
        q = lambda f: flint.fmpq(f.numerator, f.denominator)
        g += q(T0)*N**4 + q(T2)*c2*N**2 + q(T3)*c3*N + q(T4)*c4 + q(T22)*c2*c2
    g -= 7*N**4
    return ctx, g

def partitions(n, mx=None):
    mx = n if mx is None else mx
    if n == 0: yield (); return
    for k in range(min(n, mx), 1, -1):
        for r in partitions(n-k, k): yield (k,) + r

def feature_list(D):
    mons = [()]
    for d in range(2, D+1): mons += list(partitions(d))
    return mons

def build_feature_polys(D):
    """For each feature m (product of power sums), the polynomial sum_j m(p_j) * N^(D-deg m) in the chart,
    plus N^D last. Returns ctx, list."""
    ctx = flint.fmpq_mpoly_ctx.get(('u1', 'u2', 'u3', 'v1', 'v2', 'v3'), 'lex')
    u1, u2, u3, v1, v2, v3 = ctx.gens()
    one = ctx.from_dict({(0,)*6: 1}); zero = ctx.from_dict({})
    a = [one, u1, u2, u3]; b = [zero, v1, v2, v3]
    N = one + u1*u1 + u2*u2 + u3*u3 + v1*v1 + v2*v2 + v3*v3
    classes_p = []
    for prs in projectors():
        ps = []
        for R, J in prs:
            p = ctx.from_dict({})
            for i in range(4):
                for j in range(4):
                    if R[i][j]: p += flint.fmpq(R[i][j].numerator, R[i][j].denominator)*(a[i]*a[j] + b[i]*b[j])
                    if J[i][j]: p -= 2*flint.fmpq(J[i][j].numerator, J[i][j].denominator)*a[i]*b[j]
            ps.append(p)
        classes_p.append(ps)
    mons = feature_list(D)
    out = []
    for m in mons:
        tot = ctx.from_dict({})
        for ps in classes_p:
            cs = {k: sum((x**k for x in ps), zero) for k in set(m)}
            t = one
            for k in m: t = t*cs[k]
            tot += t
        out.append(tot*N**(D - sum(m)))
    out.append(N**D)
    return ctx, mons, out
