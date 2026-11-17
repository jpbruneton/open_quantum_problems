"""Rational certificates for Bell eigenvalue-shift versus robustness, no SDP."""
from fractions import Fraction as Q
from pathlib import Path
import json


def eye(n): return [[Q(i == j) for j in range(n)] for i in range(n)]
def sub(a,b): return [[x-y for x,y in zip(r,s)] for r,s in zip(a,b)]
def scale(a,c): return [[c*x for x in r] for r in a]
def kron(a,b): return [[x*y for x in r for y in s] for r in a for s in b]
def dot(a,b): return sum(a[i][j]*b[j][i] for i in range(len(a)) for j in range(len(a)))
def mul(a,b): return [[sum(a[i][k]*b[k][j] for k in range(len(a))) for j in range(len(a))] for i in range(len(a))]


def main():
    i4=eye(4)
    v=[Q(1),Q(0),Q(0),Q(1)]
    p=[[x*y/2 for y in v] for x in v]
    s=[[((i==j)+2*p[i][j])/6 for j in range(4)] for i in range(4)]
    delta=sub(p,s)
    assert mul(delta,delta)==[[delta[i][j]/3+Q(i==j,12) for j in range(4)] for i in range(4)]
    assert dot(p,delta)==Q(1,2) and dot(p,s)==Q(1,2)
    # P^TB = swap/2. I/2-P^TB is an orthogonal projection.
    pt=[[p[2*(i//2)+j%2][2*(j//2)+i%2] for j in range(4)] for i in range(4)]
    bound=sub(scale(i4,Q(1,2)),pt)
    assert mul(bound,bound)==bound
    # 2s-P = (I-P)/3 is positive; this certifies robustness <=1.
    assert sub(scale(s,2),p)==scale(sub(i4,p),Q(1,3))
    # The explicit matrix witnesses in dimension eight.
    anc=scale(eye(2),Q(1,2))
    pure=[[Q(1),Q(0)],[Q(0),Q(0)]]
    mixed_delta=kron(delta,anc)
    pure_delta=kron(delta,pure)
    witness=kron(p,anc)
    assert dot(witness,mixed_delta)==Q(1,4)
    assert dot(kron(p,pure),pure_delta)==Q(1,2)
    out=dict(arithmetic='exact fractions',bell_shift='1/2',bell_robustness='1',
             local_mixed_ancilla_shift='1/4',local_reset_ancilla_shift='1/2',
             proof='Analytic optima in notes/eigenvalue-shift-versus-robustness.md',
             novelty='not claimed; clarification of two inequivalent formulas')
    (Path(__file__).parent/'eigenvalue-shift-check.json').write_text(json.dumps(out,indent=2)+'\n',encoding='utf-8')
    print(json.dumps(out,indent=2))


if __name__=='__main__': main()
