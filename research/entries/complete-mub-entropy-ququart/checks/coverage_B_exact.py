"""Independent exact coverage check of the branch-and-bound tree of prove_B.py.

The bisection tree is rebuilt from the root box in exact rational arithmetic. Every node must be
(a) a recorded leaf of data/B_leaves.npz (re-verified exactly by replay_B_exact.py),
(b) provably disjoint from the reduced domain D (exact tests), or
(c) contained in one of the local balls of data/B_certificate.json (exact test),
and is otherwise split along the first axis of maximal width, as in prove_B.py. A node narrower than the
narrowest leaf is reported as uncovered. Together with replay_B_exact.py and the exact local lemmas of
prove_B.py, this proves inequality (B) on D without any floating-point rounding argument.
Output: data/B_coverage.json."""
import os, json, time
import numpy as np
from fractions import Fraction as Fr

HERE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(HERE, '..', 'data')


def m2(l, h):
    return Fr(0) if l <= 0 <= h else min(l * l, h * h)


def M2(l, h):
    return max(l * l, h * h)


def main():
    t0 = time.time()
    boxes = np.load(os.path.join(DATA, 'B_leaves.npz'))['boxes']
    cert = json.load(open(os.path.join(DATA, 'B_certificate.json')))
    Z = [([Fr(x) for x in z['z']], Fr(z['R'])) for z in cert['zeros']]
    leaves = set(tuple(Fr(float(x)) for x in row) for row in boxes)
    minw = min(float((row[6:] - row[:6]).max()) for row in boxes)
    # variables (u1, u2, u3, v1, v2, v3), w_k = u_k + i v_k; bounding box of D
    root = tuple([Fr(0), Fr(0), Fr(-1), Fr(0), Fr(0), Fr(-1), Fr(1), Fr(1), Fr(1), Fr(3, 4), Fr(1), Fr(1)])
    stack = [root]
    nleaf = nout = nball = nsplit = 0
    uncovered = []
    used = set()
    while stack:
        b = stack.pop()
        lo, hi = b[:6], b[6:]
        if b in leaves:
            nleaf += 1
            used.add(b)
            continue
        mn = [m2(lo[k], hi[k]) + m2(lo[k + 3], hi[k + 3]) for k in range(3)]
        mx = [M2(lo[k], hi[k]) + M2(lo[k + 3], hi[k + 3]) for k in range(3)]
        # D: |w1|^2 <= 1, |w2|^2 <= |w1|^2, |w3|^2 <= |w2|^2, v1 <= u1 (the sign conditions are in the root box)
        if mn[0] > 1 or mn[1] > mx[0] or mn[2] > mx[1] or lo[3] > hi[0]:
            nout += 1
            continue
        c = [(l + h) / 2 for l, h in zip(lo, hi)]
        r = [(h - l) / 2 for l, h in zip(lo, hi)]
        if any(sum((abs(ci - zi) + ri) ** 2 for ci, zi, ri in zip(c, z, r)) <= R * R for z, R in Z):
            nball += 1
            continue
        w = [h - l for l, h in zip(lo, hi)]
        ax = w.index(max(w))
        if float(w[ax]) < minw * 0.99:
            uncovered.append([float(x) for x in b])
            if len(uncovered) > 5:
                break
            continue
        mid = c[ax]
        nsplit += 1
        h1 = list(hi); h1[ax] = mid
        l2 = list(lo); l2[ax] = mid
        stack.append(tuple(lo) + tuple(h1))
        stack.append(tuple(l2) + tuple(hi))
    out = dict(leaves_recorded=len(leaves), leaves_reached=nleaf, outside_D=nout, inside_local_balls=nball,
               splits=nsplit, uncovered=len(uncovered), unused_leaves=len(leaves - used),
               ok=(not uncovered and not stack), seconds=round(time.time() - t0, 1))
    json.dump(out, open(os.path.join(DATA, 'B_coverage.json'), 'w'), indent=1)
    print('COVERAGE', out)


if __name__ == '__main__':
    main()
