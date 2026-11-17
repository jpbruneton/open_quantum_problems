"""Exact determinant identities; EA criterion itself is cited from 2018."""
from fractions import Fraction as Q
from pathlib import Path
import json


def main():
    checks=[]
    for gamma,n in [(Q(3,4),Q(1,10)),(Q(4,5),Q(1,10)),(Q(1,2),Q(1,2)),(Q(9,10),Q(0)),(Q(1),Q(1,3))]:
        a,b=1-gamma*(1-n),gamma*n
        q,c=1-gamma,n*(1-n)
        p00,p11= a*b,(1-a)*(1-b)
        pmid=(a*(1-b)+b*(1-a))/2
        assert p00+2*pmid+p11==1
        det=p00*p11-q*q/4
        assert p00*p11==c*gamma**2*(q+c*gamma**2)
        # Positive middle entries and the 2x2 PT block decide PPT exactly.
        assert min(p00,p11,pmid)>=0
        checks.append(dict(gamma=str(gamma),n=str(n),pt_block_determinant=str(det),
                           singlet_NPT=det<0))
    result=dict(arithmetic='exact fractions',checks=checks,
                antecedent='1708.08208v2, Example 3, equation (49)',
                scope='Conjecture 8 of 2506.06089 only, not source-placement conjecture 6',
                novelty='not claimed; matching an earlier EA threshold')
    (Path(__file__).parent/'gad-singlet-check.json').write_text(json.dumps(result,indent=2)+'\n',encoding='utf-8')
    print(json.dumps(result,indent=2))


if __name__=='__main__': main()
