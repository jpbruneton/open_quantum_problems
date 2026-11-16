"""Check the exact numerical claims and printed arrays of the LaTeX note."""
from collections import Counter
from fractions import Fraction as F
import hashlib
import itertools
import json
from pathlib import Path
import re

from verify_z3_certificate import verify as verify_ldl
from verify_diagonal_certificate import verify as verify_diagonal


def check():
    root = Path(__file__).resolve().parent
    path = root/'z3x3-simple-certificate.json'
    data = json.loads(path.read_text(encoding='utf-8'))
    tex = (root/'kd-z3x3.tex').read_text(encoding='utf-8')
    # The manuscript must contain exactly the arrays that were certified.
    for name, key in [('R', 'integer_Q_numerator'), ('M', 'integer_witness_Q')]:
        block = re.search(name+r'=\\begin\{pmatrix\}(.*?)\\end\{pmatrix\}', tex, re.S).group(1)
        rows = [[int(x.strip()) for x in row.split('&')]
                for row in block.strip().split('\\\\')]
        assert rows == data[key], f'Manuscript {name} differs from the certificate'
    ld = verify_ldl(path)
    dg = verify_diagonal(path)
    expected = [1360135,1360135,1376216,940135,940135,330636,786094,786094,536024]
    assert [F(v)*61920000 for v in dg['weighted_row_margins']] == expected
    assert dg['minimum_eigenvalue_lower_bound'] == '27553/10320000'
    elems = list(itertools.product(range(3), repeat=2))
    subgroups = [{(0,0)}, set(elems)]
    subgroups += [{((a*x)%3,(a*y)%3) for a in range(3)}
                 for x,y in [(1,0),(0,1),(1,1),(1,2)]]
    masks = set()
    for h in subgroups:
        for a in elems:
            for b in elems:
                support = {((a[0]+x)%3,(a[1]+y)%3) for x,y in h}
                allowed = {c for c in elems if all(((c[0]-b[0])*x+(c[1]-b[1])*y)%3 == 0
                                                  for x,y in h)}
                masks.add(tuple(int(g in support and c in allowed) for g in elems for c in elems))
    m = [x for row in data['integer_witness_Q'] for x in row]
    scores = Counter(sum(x*y for x,y in zip(mask,m)) for mask in masks)
    assert scores == {18:43,-63:10,-144:1}
    touching = [mask for mask in masks if sum(x*y for x,y in zip(mask,m)) == 18]
    center_q = [sum(F(mask[j],9*43) for mask in touching) for j in range(81)]
    q = [F(x,data['Q_denominator']) for row in data['integer_Q_numerator'] for x in row]
    assert q == [x+F(y,20000) for x,y in zip(center_q,m)]
    assert F(ld['strict_gap'])/F(ld['shifted_witness_operator_norm_upper_bound']) == F(111,20000)
    result = dict(certificate_sha256=hashlib.sha256(path.read_bytes()).hexdigest(),
                  manuscript_sha256=hashlib.sha256((root/'kd-z3x3.tex').read_bytes()).hexdigest(),
                  printed_matrices_equal_certificate=True, witness_score_multiplicities=dict(scores),
                  construction_from_43_touching_vertices='exactly checked',
                  weighted_diagonal_dominance=dg, independent_realification=ld,
                  conclusion='All checked exact arithmetic assertions of the manuscript passed.')
    (root/'paper-data-verification.json').write_text(json.dumps(result,indent=2),encoding='utf-8')
    print(json.dumps({k:v for k,v in result.items() if k not in ('weighted_diagonal_dominance','independent_realification')},indent=2))


if __name__ == '__main__':
    check()
