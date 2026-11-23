"""Exact certificate for step (B) in d = 5:
    sum_{j=0}^{5} F(p_j(psi)) >= VB * |psi|^2   ... more precisely  f(psi) := N^r * (sum_j F(p_j) - VB) * N^{deg} >= 0,
for every psi in C^5, where F = sum_m theta_m prod_i c_{k_i} (power sums c_k = sum_a p_a^k), lifted to bidegree (n, n)
by powers of N = |psi|^2 (Quillen lift).

The Gram matrix G of f in the monomial basis {psi^gamma : |gamma| = n} is rational (gram5.py) and block diagonal
by the Z_5 charge sum_k k gamma_k mod 5.  For each block we prove G_block >= 0 exactly:
  A = T G T with T = diag(2^-e_i) (exact congruence, e_i ~ log2 sqrt(multinomial));
  L = floating Cholesky factor of A - tau I, rounded to L~ = round(2^40 L)/2^40;
  E = A - tau I - L~ L~^T computed exactly in integers (flint fmpz_mat);
  if ||E||_F < tau then A = L~ L~^T + (tau I + E) is positive semidefinite.
Then f(psi) = m(psi)^* G m(psi) >= 0 for all psi, hence sum_j F(p_j(psi)) >= VB on unit vectors.
Usage: python research/entries/complete-mub-entropy-ququart/checks/cert_B5.py [VB_override]  (parameters in params5.py; an override writes
data/B5_negative_test.json and is used to check that a too-large VB is rejected).  Output: data/B5_certificate.json."""
import os, sys, json, time, math
HERE = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, HERE)
from fractions import Fraction as Fr
import numpy as np
import flint
from gram5 import form, monomials, mult, lin
from params5 import THETA, VB, NLIFT

DATA = os.path.join(HERE, '..', 'data')
SHIFT = 40          # L~ = round(2^SHIFT L) / 2^SHIFT
TAU_EXP = 20        # tau = 2^-TAU_EXP

def main():
    t0 = time.time()
    n = NLIFT
    VB_ = VB if len(sys.argv) < 2 else Fr(sys.argv[1])   # optional override (negative test)
    outname = 'B5_certificate.json' if len(sys.argv) < 2 else 'B5_negative_test.json'
    monos = monomials(n); K = len(monos)
    idx = {c: i for i, c in enumerate(monos)}
    # exact Gram matrix as dict (i, j) -> Fraction
    G = {}
    for m, th in THETA.items():
        if th == 0: continue
        for (dl, gm), v in form(m, n).items():
            key = (idx[dl], idx[gm]); G[key] = G.get(key, 0) + th*v
    for i, c in enumerate(monos):
        G[(i, i)] = G.get((i, i), 0) - VB_*mult(c)
    print('Gram built', K, len(G), round(time.time()-t0, 1), flush=True)
    e = [round(math.log2(math.sqrt(mult(c)))) for c in monos]
    tau = Fr(1, 2**TAU_EXP)
    report = []
    ok_all = True
    for q in range(5):
        bl = [i for i, c in enumerate(monos) if lin(c) == q]
        pos = {i: a for a, i in enumerate(bl)}
        k = len(bl)
        ent = {}
        for (i, j), v in G.items():
            if i in pos and j in pos:
                if v != 0: ent[(pos[i], pos[j])] = v / 2**(e[i] + e[j])
            elif (i in pos) != (j in pos) and v != 0:
                raise SystemExit('Gram matrix is not block diagonal by charge')
        for (a, b), v in ent.items():
            assert ent.get((b, a), 0) == v, 'Gram matrix not symmetric'
        den = 1
        for x in ent.values(): den = math.lcm(den, x.denominator)
        Q = den * 2**(2*SHIFT + TAU_EXP)
        rows = [[0]*k for _ in range(k)]
        Af = np.zeros((k, k))
        for (a, b), x in ent.items():
            rows[a][b] = int(x*Q); Af[a, b] = float(x)
        Mint = flint.fmpz_mat(rows); del rows
        lam = float(np.linalg.eigvalsh(Af)[0])
        try:
            L = np.linalg.cholesky(Af - float(tau)*np.eye(k))
        except np.linalg.LinAlgError:
            report.append(dict(charge=q, size=k, lambda_min_float=lam, ok=False)); ok_all = False; continue
        Li = np.round(L * 2**SHIFT).astype(np.int64)
        Lm = flint.fmpz_mat([[int(x) for x in row] for row in Li])
        LLt = Lm * Lm.transpose()
        scale = Q // 2**(2*SHIFT)
        tauQ = Q // 2**TAU_EXP
        E = Mint - LLt*scale
        fro2 = 0
        for a in range(k):
            for b in range(k):
                x = int(E[a, b]) - (tauQ if a == b else 0)
                fro2 += x*x
        ok = fro2 < tauQ*tauQ
        ok_all &= ok
        report.append(dict(charge=q, size=k, lambda_min_float=lam, frobenius_residual=math.sqrt(fro2)/Q,
                           tau=float(tau), ok=bool(ok)))
        print(report[-1], round(time.time()-t0, 1), flush=True)
    cert = dict(statement='Gram matrix of N^(n-deg) (sum_j F(p_j) - VB N^deg) is PSD (exact), hence sum_j F(p_j(psi)) >= VB',
                theta={str(m): str(t) for m, t in THETA.items()}, VB=str(VB_), VB_float=float(VB_), n=n,
                blocks=report, ok=bool(ok_all), seconds=round(time.time()-t0, 1))
    os.makedirs(DATA, exist_ok=True)
    json.dump(cert, open(os.path.join(DATA, outname), 'w'), indent=1)
    print('DONE ok =', ok_all)

if __name__ == '__main__':
    main()
