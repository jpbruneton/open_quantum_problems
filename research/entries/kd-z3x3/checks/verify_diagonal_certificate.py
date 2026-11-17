"""Exact weighted diagonal-dominance proof for the fixed Z3^2 state.

No NumPy, optimization solver, search output factorization, or eigenvalues.
The rational inequality sqrt(3)/2 < 7/8 bounds complex moduli.
"""
from fractions import Fraction as F
import itertools
import json
from pathlib import Path


def verify(path):
    if not __debug__:
        raise RuntimeError('Run this exact checker without Python -O')
    data = json.loads(path.read_text(encoding='utf-8'))
    elems = list(itertools.product(range(3), repeat=2))
    q = [[F(x, data['Q_denominator']) for x in row] for row in data['integer_Q_numerator']]
    assert len(q) == 9 and all(len(row) == 9 for row in q)
    a, b = [[F(0)]*9 for _ in range(9)], [[F(0)]*9 for _ in range(9)]
    for i, g in enumerate(elems):
        for j, h in enumerate(elems):
            for k, c in enumerate(elems):
                power = sum(c[t]*(g[t]-h[t]) for t in range(2)) % 3
                if power == 0:
                    a[i][j] += q[i][k]
                elif power == 1:
                    b[i][j] += q[i][k]
                else:
                    a[i][j] -= q[i][k]
                    b[i][j] -= q[i][k]
    assert all(a[j][i] == a[i][j]-b[i][j] and b[j][i] == -b[i][j]
               for i in range(9) for j in range(9))
    assert sum(a[i][i] for i in range(9)) == 1
    assert min(min(row) for row in q) > 0
    scales = [1, 1, 1, 1, 1, 2, 1, 1, 2]
    # rho_ij = a_ij+b_ij*zeta, Re rho_ij=a_ij-b_ij/2.
    bounds = [[abs(a[i][j]-b[i][j]/2)+F(7, 8)*abs(b[i][j])
               for j in range(9)] for i in range(9)]
    margins = [scales[i]*a[i][i]-sum(scales[j]*bounds[i][j]
                for j in range(9) if j != i) for i in range(9)]
    assert all(m > 0 for m in margins)
    eigen_lower = min(m/scales[i] for i, m in enumerate(margins))
    return dict(scales=scales, rational_modulus_bound='|a-b/2| + 7|b|/8',
                weighted_row_margins=list(map(str, margins)),
                minimum_eigenvalue_lower_bound=str(eigen_lower),
                proof='Weighted Gershgorin bound and Hermiticity imply rho is positive definite.')


if __name__ == '__main__':
    entry = Path(__file__).resolve().parent.parent
    data = entry/'data'
    result = verify(data/'z3x3-simple-certificate.json')
    (data/'diagonal-verification.json').write_text(json.dumps(result, indent=2), encoding='utf-8')
    print(json.dumps(result, indent=2))
