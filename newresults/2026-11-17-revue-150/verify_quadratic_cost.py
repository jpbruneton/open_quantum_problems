"""Exact integer/rational certificates for the quadratic cost in 2606.04969v2."""
from fractions import Fraction as Q
from pathlib import Path
import json


def mul(a,b): return [[sum(a[i][k]*b[k][j] for k in range(len(a))) for j in range(len(a))] for i in range(len(a))]


def main():
    # Index order A1 B1 A2 B2, all qubits. Swaps act between copies.
    n=16
    ident=[[int(i==j) for j in range(n)] for i in range(n)]
    def swap_matrix(bit1,bit2):
        out=[[0]*n for _ in range(n)]
        for col in range(n):
            bits=[(col>>k)&1 for k in (3,2,1,0)]
            bits[bit1],bits[bit2]=bits[bit2],bits[bit1]
            row=sum(v<<(3-k) for k,v in enumerate(bits))
            out[row][col]=1
        return out
    sa,sb=swap_matrix(0,2),swap_matrix(1,3)
    assert mul(sa,sa)==ident and mul(sb,sb)==ident and mul(sa,sb)==mul(sb,sa)
    cost=[[8*ident[i][j]-2*sa[i][j]-2*sb[i][j] for j in range(n)] for i in range(n)]
    # C-4I=2(I-SA)+2(I-SB), PSD because both swaps are Hermitian involutions.
    assert all(cost[i][j]-4*ident[i][j]==2*(ident[i][j]-sa[i][j])+2*(ident[i][j]-sb[i][j]) for i in range(n) for j in range(n))
    # With first marginal |00>, second-copy cost is diag(4,6,6,8).
    product=[[cost[i][j] for j in range(4)] for i in range(4)]
    assert product==[[([4,6,6,8][i] if i==j else 0) for j in range(4)] for i in range(4)]
    # With first marginal Phi+, second-copy cost equals 6 I.
    bell=[[sum(Q(1,2)*cost[4*a+i][4*b+j] for a in (0,3) for b in (0,3)) for j in range(4)] for i in range(4)]
    assert bell==[[Q(6*(i==j)) for j in range(4)] for i in range(4)]
    result=dict(arithmetic='exact integer and Fraction matrices',cost_lower_bound=4,
                separable_state_E_squared=4,bell_state_E_squared=6,
                contradiction='Proposition 2(i) for equations (1)-(4) as written',
                novelty='self-distance obstruction known; specific correction priority not established')
    (Path(__file__).parent/'quadratic-cost-check.json').write_text(json.dumps(result,indent=2)+'\n',encoding='utf-8')
    print(json.dumps(result,indent=2))


if __name__=='__main__': main()
