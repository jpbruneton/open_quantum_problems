#!/usr/bin/env python3
"""Checker for the research note "A parity obstruction to depth-optimal
syndrome extraction for lifted-product codes"
(research/entries/syndrome-schedule-parity).

Setting.  Two 1x1 protographs a, b in F_2[G] with |supp a| = wa, |supp b| = wb,
over the cyclic group G = Z_g.  The lifted-product (two-block) code has
    X(i) -- VV(i+s), s in supp a;   X(i) -- CC(i+t), t in supp b;
    Z(i) -- VV(i-t), t in supp b;   Z(i) -- CC(i-s), s in supp a,
so that every ancilla and every data qubit has degree D = wa + wb.  A schedule
assigns to every edge (CNOT) a layer in {1, ..., depth}, with distinct layers
at every vertex, and is proper when, for every X-ancilla x and Z-ancilla z,
the number of shared data qubits at which x acts before z is even.

What this script checks (deterministic, standard library + NumPy):
  [1] the counting identity I(S) = sum_{t in S}(D - t) - C(|S|, 2) for every
      subset S of {1..D}, D <= 9, and C(wa+wb,2) - C(wa,2) - C(wb,2) = wa*wb;
  [2] the double-counting identity: for random depth-D edge colourings
      (properness not imposed) the total number of X-before-Z incidences
      summed over all X/Z ancilla pairs equals g*wa*wb exactly;
  [3] exhaustive search over schedules that are uniform in the group
      (one layer per monomial and edge family): no proper depth-D schedule
      when wa, wb are both odd, for odd and even g; positive controls with an
      even weight;
  [4] exhaustive search over all schedules of the lifted Tanner graph
      (backtracking): no proper depth-D schedule for the odd/odd cases
      listed; the three-band schedule of depth D+1 (Nguyen, Rimbach-Russ and
      Bosco) is proper on the same codes; depth-D schedules exist in the
      even-weight controls.  With --extended the search also exhausts
      wa = wb = 3 over Z_3 (about 3e8 nodes, roughly ten minutes);
  [5] the exact certificate data/even_order_schedule.json: a proper depth-6
      schedule for wa = wb = 3 over Z_6 (an even-order group), checked
      independently, together with the code parameters [[12, 4]];
  [6] the [[90, 8, 10]] bivariate bicycle code (group Z_15 x Z_3, odd order
      45, weights 3 and 3) satisfies the hypotheses of the theorem: its
      parameters, the degrees, and the odd parity count 405.

Run from the repository root:
    python research/entries/syndrome-schedule-parity/checks/check_syndrome_parity.py
(add --extended for the longer search).  The script rewrites data/verification.json in the entry directory.
"""
import json
import random
import sys
import time
from itertools import combinations, permutations
from math import comb
from pathlib import Path

import numpy as np

ENTRY = Path(__file__).resolve().parent.parent
SEED = 260819917
FAILS = []
RECORD = []


def report(name, ok, detail=""):
    print(f"[{'PASS' if ok else 'FAIL'}] {name}" + (f"  ({detail})" if detail else ""))
    RECORD.append({"check": name, "passed": bool(ok), "detail": detail})
    if not ok:
        FAILS.append(name)


# ---------------------------------------------------------------- the graph
def build(g, Sa, Sb):
    """Edges (ancilla, data qubit, type, family, shift) of the lifted graph."""
    edges = []
    for i in range(g):
        for s in Sa:
            edges.append((("X", i), ("VV", (i + s) % g), "X", "A", s))
        for t in Sb:
            edges.append((("X", i), ("CC", (i + t) % g), "X", "B", t))
        for t in Sb:
            edges.append((("Z", i), ("VV", (i - t) % g), "Z", "B*", t))
        for s in Sa:
            edges.append((("Z", i), ("CC", (i - s) % g), "Z", "A*", s))
    return edges


def circulant(g, S):
    M = np.zeros((g, g), dtype=np.int64)
    for i in range(g):
        for s in S:
            M[i, (i + s) % g] ^= 1
    return M


def rank_gf2(M):
    M = M.copy() % 2
    r = 0
    for c in range(M.shape[1]):
        piv = [i for i in range(r, M.shape[0]) if M[i, c]]
        if not piv:
            continue
        M[[r, piv[0]]] = M[[piv[0], r]]
        for i in range(M.shape[0]):
            if i != r and M[i, c]:
                M[i] ^= M[r]
        r += 1
    return r


def code_parameters(g, Sa, Sb):
    A, B = circulant(g, Sa), circulant(g, Sb)
    HX = np.hstack([A, B])
    HZ = np.hstack([B.T, A.T])
    commute = not ((HX @ HZ.T) % 2).any()
    return commute, 2 * g, 2 * g - rank_gf2(HX) - rank_gf2(HZ)


def pair_constraints(edges):
    """For each (X ancilla, Z ancilla) pair, the list of (x-edge, z-edge)
    index pairs meeting at a shared data qubit."""
    byq = {}
    for k, e in enumerate(edges):
        byq.setdefault(e[1], {"X": [], "Z": []})[e[2]].append(k)
    cons = {}
    for d in byq.values():
        for x in d["X"]:
            for z in d["Z"]:
                cons.setdefault((edges[x][0], edges[z][0]), []).append((x, z))
    return list(cons.values())


def is_proper_schedule(edges, layer, depth):
    """Independent check of a complete schedule: layers in range, distinct at
    every vertex, and the parity condition for every X/Z ancilla pair."""
    seen = {}
    for e, t in zip(edges, layer):
        if not 1 <= t <= depth:
            return False
        for v in (e[0], e[1]):
            if t in seen.setdefault(v, set()):
                return False
            seen[v].add(t)
    nbr = {}
    for e, t in zip(edges, layer):
        nbr.setdefault(e[0], {})[e[1]] = t
    for x in [v for v in nbr if v[0] == "X"]:
        for z in [v for v in nbr if v[0] == "Z"]:
            shared = set(nbr[x]) & set(nbr[z])
            if sum(nbr[x][q] < nbr[z][q] for q in shared) % 2:
                return False
    return True


# ------------------------------------------------- [1] counting identities
def check_1():
    ok = True
    count = 0
    for D in range(1, 10):
        layers = range(1, D + 1)
        for w in range(D + 1):
            for S in combinations(layers, w):
                direct = sum(x < z for x in S for z in layers if z not in S)
                ok &= direct == sum(D - x for x in S) - comb(w, 2)
                count += 1
    ok2 = all(comb(a + b, 2) - comb(a, 2) - comb(b, 2) == a * b
              for a in range(0, 30) for b in range(0, 30))
    report("[1] I(S) = sum(D - t) - C(|S|,2) and C(a+b,2) - C(a,2) - C(b,2) = ab",
           ok and ok2, f"{count} subsets, D <= 9")


# ------------------------------------------ [2] double-counting identity
def random_coloring(edges, depth, rng):
    """A random proper edge colouring with `depth` colours (no parity
    condition), by randomised backtracking."""
    E = len(edges)
    ends = [(e[0], e[1]) for e in edges]
    used = {}
    col = [0] * E
    order = list(range(E))

    def rec(n):
        if n == E:
            return True
        best, bestdom = None, None
        for k in order:
            if col[k]:
                continue
            u, v = ends[k]
            dom = [c for c in range(1, depth + 1)
                   if c not in used.get(u, ()) and c not in used.get(v, ())]
            if best is None or len(dom) < len(bestdom):
                best, bestdom = k, dom
                if len(dom) <= 1:
                    break
        rng.shuffle(bestdom)
        u, v = ends[best]
        for c in bestdom:
            col[best] = c
            used.setdefault(u, set()).add(c)
            used.setdefault(v, set()).add(c)
            if rec(n + 1):
                return True
            used[u].discard(c)
            used[v].discard(c)
            col[best] = 0
        return False

    rng.shuffle(order)
    assert rec(0)
    return col


def check_2():
    rng = random.Random(SEED)
    ok = True
    n = 0
    for g, Sa, Sb in [(3, [0], [0, 1, 2]), (5, [0, 1, 2], [0, 1, 3]),
                      (4, [0, 1], [0, 1, 3]), (6, [0, 1, 2], [0, 2, 3]),
                      (7, [0, 1, 3], [0, 2, 3, 4, 6]), (8, [0, 1, 2], [0, 4])]:
        edges = build(g, Sa, Sb)
        D = len(Sa) + len(Sb)
        cons = pair_constraints(edges)
        for _ in range(10):
            col = random_coloring(edges, D, rng)
            total = sum(col[x] < col[z] for lst in cons for x, z in lst)
            ok &= total == g * len(Sa) * len(Sb)
            n += 1
    report("[2] sum over X/Z pairs of X-before-Z incidences = g*wa*wb "
           "(random depth-D colourings)", ok, f"{n} colourings")


# ------------------------------- [3] schedules uniform over the group
def uniform_search(g, Sa, Sb):
    """Return the number of proper depth-D schedules in which the layer of an
    edge depends only on its family (A, B, B*, A*) and monomial."""
    edges = build(g, Sa, Sb)
    a, b = len(Sa), len(Sb)
    D = a + b
    found = 0
    for perm in permutations(range(1, D + 1)):
        tA = dict(zip(Sa, perm[:a]))
        tB = dict(zip(Sb, perm[a:]))
        setA, setB = set(perm[:a]), set(perm[a:])
        for pBs in permutations(range(1, D + 1), b):
            if setA & set(pBs):
                continue  # a VV qubit would see a repeated layer
            tBs = dict(zip(Sb, pBs))
            for pAs in permutations(range(1, D + 1), a):
                if setB & set(pAs):
                    continue  # a CC qubit would see a repeated layer
                tAs = dict(zip(Sa, pAs))
                table = {"A": tA, "B": tB, "B*": tBs, "A*": tAs}
                layer = [table[e[3]][e[4]] for e in edges]
                if is_proper_schedule(edges, layer, D):
                    found += 1
    return found


def check_3():
    rows = []
    ok = True
    odd_cases = [(g, [0], [1 % g]) for g in range(1, 7)] + [
        (3, [0], [0, 1, 2]), (4, [0], [0, 1, 2]), (5, [0], [0, 1, 3]),
        (5, [0, 1, 2], [0]), (6, [0], [0, 1, 3]),
        (3, [0, 1, 2], [0, 1, 2]), (4, [0, 1, 2], [0, 1, 3]),
        (5, [0, 1, 2], [0, 1, 3]), (6, [0, 1, 2], [0, 1, 2]),
        (7, [0, 1, 3], [0, 2, 3])]
    for g, Sa, Sb in odd_cases:
        n = uniform_search(g, Sa, Sb)
        rows.append({"g": g, "a": Sa, "b": Sb, "proper_uniform_depth_D": n})
        ok &= n == 0
    controls = [(3, [0], [0, 1]), (4, [0], [0, 1]), (5, [0, 1], [0, 1, 3]),
                (3, [0, 1], [0, 1, 2])]
    okc = True
    for g, Sa, Sb in controls:
        n = uniform_search(g, Sa, Sb)
        rows.append({"g": g, "a": Sa, "b": Sb, "proper_uniform_depth_D": n})
        okc &= n > 0
    report("[3a] uniform schedules, wa and wb odd: none of depth D "
           f"({len(odd_cases)} codes, odd and even g)", ok)
    report("[3b] uniform schedules with an even weight: depth D attained "
           f"({len(controls)} controls)", okc)
    return rows


# ------------------------------------ [4] exhaustive search, all schedules
def search(edges, depth, node_limit=None):
    """Backtracking over all schedules of the lifted graph, most constrained
    edge first; the parity of each X/Z pair is tested as soon as all its
    incidences are scheduled.  Returns (found, nodes, layers)."""
    E = len(edges)
    vid = {}
    for e in edges:
        vid.setdefault(e[0], len(vid))
        vid.setdefault(e[1], len(vid))
    ends = [(vid[e[0]], vid[e[1]]) for e in edges]
    cons = pair_constraints(edges)
    edge_cons = [set() for _ in range(E)]
    for c, lst in enumerate(cons):
        for x, z in lst:
            edge_cons[x].add(c)
            edge_cons[z].add(c)
    edge_cons = [sorted(s) for s in edge_cons]
    remaining = [len({k for p in lst for k in p}) for lst in cons]
    used = [0] * len(vid)
    col = [0] * E
    full = (1 << depth) - 1
    nodes = [0]

    def rec(n):
        nodes[0] += 1
        if node_limit and nodes[0] > node_limit:
            raise RuntimeError("node limit")
        if n == E:
            return True
        best, bestdom, bestn = -1, 0, depth + 1
        for k in range(E):
            if col[k]:
                continue
            u, v = ends[k]
            dom = full & ~(used[u] | used[v])
            m = bin(dom).count("1")
            if m < bestn:
                best, bestdom, bestn = k, dom, m
                if m <= 1:
                    break
        if bestn == 0:
            return False
        k = best
        u, v = ends[k]
        for c in range(depth):
            if not (bestdom >> c) & 1:
                continue
            col[k] = c + 1
            used[u] |= 1 << c
            used[v] |= 1 << c
            for cc in edge_cons[k]:
                remaining[cc] -= 1
            good = all(remaining[cc] or
                       sum(col[x] < col[z] for x, z in cons[cc]) % 2 == 0
                       for cc in edge_cons[k])
            if good and rec(n + 1):
                return True
            for cc in edge_cons[k]:
                remaining[cc] += 1
            used[u] &= ~(1 << c)
            used[v] &= ~(1 << c)
            col[k] = 0
        return False

    found = rec(0)
    return found, nodes[0], (list(col) if found else None)


def three_band_schedule(edges, Sa, Sb):
    """The three-band schedule of Nguyen, Rimbach-Russ and Bosco for 1x1
    protographs: the A and A* monomials share the middle band; the monomials
    of b are split into B1 (B in the early band, B* in the late band) and B2
    (B* early, B late).  Depth wa + 2*ceil(wb/2)."""
    a, b = len(Sa), len(Sb)
    e = (b + 1) // 2
    B1, B2 = Sb[:e], Sb[e:]
    mid = {s: e + 1 + j for j, s in enumerate(Sa)}
    late0 = e + a
    table = {"A": dict(mid), "A*": dict(mid), "B": {}, "B*": {}}
    for j, t in enumerate(B1):
        table["B"][t] = 1 + j
        table["B*"][t] = late0 + 1 + j
    for j, t in enumerate(B2):
        table["B*"][t] = 1 + j
        table["B"][t] = late0 + 1 + j
    return [table[e_[3]][e_[4]] for e_ in edges], a + 2 * e


def check_4(extended=False):
    rows = []
    ok_none = ok_plus = ok_ctrl = True
    impossible = [(g, [0], [1 % g]) for g in range(1, 9)] + [
        (3, [0], [0, 1, 2]), (4, [0], [0, 1, 2]), (5, [0], [0, 1, 2]),
        (5, [0], [0, 1, 3]), (6, [0], [0, 1, 2]), (7, [0], [0, 1, 3]),
        (3, [0, 1, 2], [0]), (5, [0, 1, 3], [0])]
    if extended:
        impossible.append((3, [0, 1, 2], [0, 1, 2]))
    for g, Sa, Sb in impossible:
        edges = build(g, Sa, Sb)
        D = len(Sa) + len(Sb)
        t0 = time.time()
        found, nodes, _ = search(edges, D)
        ok_none &= not found
        layer, depth = three_band_schedule(edges, Sa, Sb)
        okp = depth == D + 1 and is_proper_schedule(edges, layer, depth)
        ok_plus &= okp
        rows.append({"g": g, "a": Sa, "b": Sb, "D": D,
                     "proper_depth_D_exists": found, "nodes": nodes,
                     "three_band_depth_D_plus_1_proper": bool(okp),
                     "seconds": round(time.time() - t0, 2)})
    controls = [(3, [0], [0, 1]), (5, [0], [0, 1]), (3, [0, 1], [0, 1, 2]),
                (5, [0, 1], [0, 1, 3])]
    for g, Sa, Sb in controls:
        edges = build(g, Sa, Sb)
        D = len(Sa) + len(Sb)
        found, nodes, layer = search(edges, D)
        okc = found and is_proper_schedule(edges, layer, D)
        if len(Sb) % 2 == 0:
            # three-band schedule with the even weight split: depth D
            layer3, depth3 = three_band_schedule(edges, Sa, Sb)
            okc &= depth3 == D and is_proper_schedule(edges, layer3, depth3)
        ok_ctrl &= okc
        rows.append({"g": g, "a": Sa, "b": Sb, "D": D,
                     "proper_depth_D_exists": bool(okc), "nodes": nodes})
    report(f"[4a] exhaustive search: no proper depth-D schedule "
           f"({len(impossible)} odd/odd codes)", ok_none)
    report("[4b] the three-band schedule of depth D+1 is proper on the same codes",
           ok_plus)
    report(f"[4c] even-weight controls admit proper depth-D schedules "
           f"({len(controls)} codes)", ok_ctrl)
    return rows


# ------------------------------- [5] certificate over an even-order group
def check_5():
    cert = json.loads((ENTRY / "data" / "even_order_schedule.json").read_text())
    g, Sa, Sb, D = cert["g"], cert["a"], cert["b"], cert["depth"]
    edges = build(g, Sa, Sb)
    layer_of = {(tuple(r["ancilla"]), tuple(r["qubit"])): r["layer"]
                for r in cert["schedule"]}
    ok = len(layer_of) == len(edges)
    layer = [layer_of.get((tuple(e[0]), tuple(e[1])), 0) for e in edges]
    ok &= D == len(Sa) + len(Sb) and is_proper_schedule(edges, layer, D)
    commute, n, k = code_parameters(g, Sa, Sb)
    ok &= commute and [n, k] == cert["code"]
    report(f"[5] certificate: proper depth-{D} schedule for wa = wb = 3 over "
           f"Z_{g}, code [[{n}, {k}]]", ok)
    return {"g": g, "a": Sa, "b": Sb, "depth": D, "n": n, "k": k}

# ------------------- [6] a bivariate bicycle code over an odd-order group
def check_6():
    """The [[90, 8, 10]] bivariate bicycle code of Bravyi et al. (l, m) =
    (15, 3), A = x^9 + y + y^2, B = 1 + x^2 + x^7: a lifted product of 1x1
    protographs of weights 3 and 3 over Z_15 x Z_3, of odd order 45."""
    l, m = 15, 3
    G = [(i, j) for i in range(l) for j in range(m)]
    idx = {h: n for n, h in enumerate(G)}
    Sa = [(9, 0), (0, 1), (0, 2)]
    Sb = [(0, 0), (2, 0), (7, 0)]

    def mat(S):
        M = np.zeros((len(G), len(G)), dtype=np.int64)
        for h in G:
            for s in S:
                M[idx[h], idx[((h[0] + s[0]) % l, (h[1] + s[1]) % m)]] ^= 1
        return M

    A, B = mat(Sa), mat(Sb)
    HX = np.hstack([A, B])
    HZ = np.hstack([B.T, A.T])
    commute = not ((HX @ HZ.T) % 2).any()
    n = HX.shape[1]
    k = n - rank_gf2(HX) - rank_gf2(HZ)
    # every ancilla has degree 6 and every data qubit has 3 X and 3 Z edges
    regular = set(HX.sum(1)) == {6} and set(HZ.sum(1)) == {6} and \
        set(HX.sum(0)) == {3} and set(HZ.sum(0)) == {3}
    count = len(G) * comb(6, 2) - n * comb(3, 2)
    ok = commute and (n, k) == (90, 8) and regular and count == 405 and count % 2 == 1
    report("[6] [[90, 8, 10]] bivariate bicycle code: lifted product over a group "
           "of order 45, D = 6, parity count g*wa*wb = 405 is odd", ok,
           f"n = {n}, k = {k}, regular = {regular}")
    return {"code": "[[90, 8, 10]] bivariate bicycle", "group_order": len(G),
            "n": n, "k": k, "D": 6, "parity_count": count}


def main():
    print("Parity obstruction for syndrome-extraction schedules of lifted products")
    t0 = time.time()
    check_1()
    check_2()
    uniform = check_3()
    exhaustive = check_4(extended="--extended" in sys.argv)
    certificate = check_5()
    bb90 = check_6()
    print(f"\n{time.time() - t0:.1f} s")
    out = ENTRY / "data" / "verification.json"
    out.write_text(json.dumps({"status": "failed" if FAILS else "passed",
                               "seed": SEED, "checks": RECORD,
                               "uniform_schedules": uniform,
                               "exhaustive_search": exhaustive,
                               "even_order_certificate": certificate,
                               "bivariate_bicycle_90": bb90},
                              indent=2) + "\n")
    print(f"wrote {out.relative_to(ENTRY.parents[2])}")
    if FAILS:
        print("SOME CHECKS FAILED:", FAILS)
        sys.exit(1)
    print("ALL CHECKS PASSED")


if __name__ == "__main__":
    main()
