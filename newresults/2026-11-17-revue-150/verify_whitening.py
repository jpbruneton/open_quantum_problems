"""Exact rational check of the five-product-effect normalization obstruction."""
from fractions import Fraction as F
import json
from pathlib import Path


def mul(a,b):
    return [[sum(a[i][k]*b[k][j] for k in range(4)) for j in range(4)] for i in range(4)]


def main():
    eye = [[F(i==j) for j in range(4)] for i in range(4)]
    p = [[F(1,4)]*4 for _ in range(4)]
    s = [[eye[i][j]+3*p[i][j] for j in range(4)] for i in range(4)]
    t = [[eye[i][j]-p[i][j]/2 for j in range(4)] for i in range(4)]
    assert mul(mul(t,s),t) == eye
    v = [t[i][0] for i in range(4)]
    assert v == list(map(F,[F(7,8),F(-1,8),F(-1,8),F(-1,8)]))
    e = [[x*y for y in v] for x in v]
    pt = [[e[2*(i//2)+j%2][2*(j//2)+i%2] for j in range(4)] for i in range(4)]
    witness = pt[1][1]+pt[1][2]+pt[2][1]+pt[2][2]
    assert witness == F(-3,16)
    result = dict(arithmetic='exact fractions',normalization='T S T = I',
                  product_inputs=5,entangled_effect_coefficients=list(map(str,v)),
                  coefficient_determinant=str(v[0]*v[3]-v[1]*v[2]),
                  partial_transpose_witness=str(witness),novelty='not claimed; known PGM phenomenon')
    (Path(__file__).resolve().parent/'whitening-check.json').write_text(json.dumps(result,indent=2),encoding='utf-8')
    print(json.dumps(result,indent=2))


if __name__ == '__main__': main()
