"""Exact check (Gaussian rationals) that the symmetries used to reduce the domain in prove_B.py preserve the set of
20 rank-one MUB projectors: all 24 permutation matrices of the computational basis, the 16 diagonal matrices
diag(1, i^a, i^b, i^c) with a+b+c = 0 mod 4, and complex conjugation.  Output: data/symmetries.json."""
import os, sys, json, itertools
HERE = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, HERE)
from fractions import Fraction as Fr
from common import projectors

def key(R, J): return tuple(tuple(r) for r in R) + tuple(tuple(r) for r in J)

def conj_by(U, R, J):
    # U = (Ur, Ui) complex; returns U (R+iJ) U^dagger
    Ur, Ui = U
    n = 4
    def mm(Ar, Ai, Br, Bi):
        return ([[sum(Ar[i][t]*Br[t][j] - Ai[i][t]*Bi[t][j] for t in range(n)) for j in range(n)] for i in range(n)],
                [[sum(Ar[i][t]*Bi[t][j] + Ai[i][t]*Br[t][j] for t in range(n)) for j in range(n)] for i in range(n)])
    Xr, Xi = mm(Ur, Ui, R, J)
    UdR = [[Ur[j][i] for j in range(n)] for i in range(n)]; UdI = [[-Ui[j][i] for j in range(n)] for i in range(n)]
    return mm(Xr, Xi, UdR, UdI)

def main():
    P = [pr for cl in projectors() for pr in cl]
    S = set(key(R, J) for R, J in P)
    res = {}
    ok_perm = 0
    for perm in itertools.permutations(range(4)):
        Ur = [[1 if perm[j] == i else 0 for j in range(4)] for i in range(4)]; Ui = [[0]*4 for _ in range(4)]
        ok_perm += all(key(*conj_by((Ur, Ui), R, J)) in S for R, J in P)
    unit = {0: (1, 0), 1: (0, 1), 2: (-1, 0), 3: (0, -1)}
    ok_diag = 0
    for a, b in itertools.product(range(4), repeat=2):
        c = (-a - b) % 4
        ph = [unit[0], unit[a], unit[b], unit[c]]
        Ur = [[ph[i][0] if i == j else 0 for j in range(4)] for i in range(4)]
        Ui = [[ph[i][1] if i == j else 0 for j in range(4)] for i in range(4)]
        ok_diag += all(key(*conj_by((Ur, Ui), R, J)) in S for R, J in P)
    ok_conj = all(key(R, [[-x for x in r] for r in J]) in S for R, J in P)
    res = dict(permutations_ok=ok_perm, diagonal_phases_ok=ok_diag, conjugation_ok=ok_conj)
    print(res)
    assert ok_perm == 24 and ok_diag == 16 and ok_conj
    json.dump(res, open(os.path.join(HERE, '..', 'data', 'symmetries.json'), 'w'), indent=1)

if __name__ == '__main__':
    main()
