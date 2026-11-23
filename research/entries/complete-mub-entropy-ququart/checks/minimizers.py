"""Exact enumeration of the 60 two-qubit stabiliser states and of their 20 MUB probabilities (Gaussian rationals),
identification of the 40 states with entropy sum exactly 7 (patterns (1/2,1/2,0,0) x3 and uniform x2) and check
that the remaining 20 (eigenstates of one basis) give 8.  Also lists the 28 chart points w = psi/psi_0 for the
states with |psi_0| maximal.  Output: data/minimizers.json."""
import os, sys, json, itertools
HERE = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, HERE)
from fractions import Fraction as Fr
from common import projectors

def gauss_vecs():
    # candidate stabiliser vectors: entries in {0, +-1, +-i}, support size 1, 2 or 4, first nonzero entry = 1
    units = [(1, 0), (-1, 0), (0, 1), (0, -1)]
    out = set()
    for supp in [s for r in (1, 2, 4) for s in itertools.combinations(range(4), r)]:
        for ph in itertools.product(units, repeat=len(supp) - 1):
            v = [(0, 0)]*4; v[supp[0]] = (1, 0)
            for k, p in zip(supp[1:], ph): v[k] = p
            out.add(tuple(v))
    return sorted(out)

def prob(R, J, v):
    # psi = a + i b ; p = a^T R a + b^T R b - 2 a^T J b, divided by |psi|^2
    a = [x[0] for x in v]; b = [x[1] for x in v]
    n = sum(x*x for x in a) + sum(x*x for x in b)
    s = sum(R[i][j]*(a[i]*a[j] + b[i]*b[j]) - 2*J[i][j]*a[i]*b[j] for i in range(4) for j in range(4))
    return Fr(s)/n

def main():
    P = projectors()
    res = {'sum7': [], 'sum8': []}
    for v in gauss_vecs():
        probs = [[prob(R, J, v) for (R, J) in cl] for cl in P]
        pats = [tuple(sorted(p, reverse=True)) for p in probs]
        if all(p in [(1, 0, 0, 0), (Fr(1, 2), Fr(1, 2), 0, 0), (Fr(1, 4),)*4] for p in pats):
            ent = sum({(1, 0, 0, 0): 0, (Fr(1, 2), Fr(1, 2), 0, 0): 1, (Fr(1, 4),)*4: 2}[p] for p in pats)
            res['sum%d' % ent].append(dict(psi=[list(x) for x in v], patterns=[[str(x) for x in p] for p in pats]))
    n7, n8 = len(res['sum7']), len(res['sum8'])
    # chart points: |psi_0| maximal among components and psi_0 != 0, w = psi/psi_0
    chart = []
    for s in res['sum7']:
        v = s['psi']
        mod = [x[0]**2 + x[1]**2 for x in v]
        if mod[0] == max(mod) and mod[0] > 0:
            chart.append([v[1][0], v[2][0], v[3][0], v[1][1], v[2][1], v[3][1]])   # psi_0 = 1
    print('stabiliser states with sum 7:', n7, ' with sum 8:', n8, ' chart points:', len(chart))
    assert n7 == 40 and n8 == 20 and len(chart) == 28
    os.makedirs(os.path.join(HERE, '..', 'data'), exist_ok=True)
    json.dump(dict(n_sum7=n7, n_sum8=n8, chart_points=sorted(chart), sum7=res['sum7']),
              open(os.path.join(HERE, '..', 'data', 'minimizers.json'), 'w'), indent=1)

if __name__ == '__main__':
    main()
