"""Verification for the research note "Covers of bivariate bicycle codes".

Checks, by exact GF(2) computation on small codes, the statements proved in the
manuscript for double covers (h = 2) of bivariate bicycle codes:
  (T1) k <= k_2 <= 2k and dim ker(transfer on H_1) = k - k_2/2;
  (T2) d_2 >= min(d, s), s = least weight of a nonzero Z-stabiliser of the base;
  (T3) if k_2 = 2k the transfer is injective on H_1, hence d_2 <= 2d;
together with fourfold covers, the [[42,4,6]] -> [[84,4,10]] example and one
double cover of the [[90,8,10]] code.  The large exploratory scans are not
rerun here; data/scan_summary.json records their outcome.

Run from the repository root (deterministic, NumPy only, about one minute):
    python research/entries/bivariate-bicycle-coverings/checks/check_bb_covers.py
Optional argument: maximal lm of the bases for the double-cover sweep (default 9).
Writes data/verification.json and exits with status 1 on failure.
"""
import functools
import hashlib
import json
import sys
import time
import itertools
from pathlib import Path

import numpy as np

print = functools.partial(print, flush=True)

from bb_tools import (DistanceSolver, anchored_distance, anchored_distance_mw,
                      bases, brute_force_distance, checks, echelon, lifts, logical_reps,
                      nullspace, num_logical, popcount64, project, rank, reduce_vec)

ENTRY = Path(__file__).resolve().parent.parent
DATA = ENTRY / "data"


def gf2_rank_numpy(rows, n):
    """Independent GF(2) rank by dense Gaussian elimination on a NumPy array."""
    M = np.array([[(r >> q) & 1 for q in range(n)] for r in rows], dtype=np.uint8)
    rk = 0
    for c in range(n):
        piv = np.nonzero(M[rk:, c])[0]
        if piv.size == 0:
            continue
        p = rk + piv[0]
        M[[rk, p]] = M[[p, rk]]
        others = np.nonzero(M[:, c])[0]
        others = others[others != rk]
        M[others] ^= M[rk]
        rk += 1
        if rk == M.shape[0]:
            break
    return rk


def exact_distance(A, B, l, m):
    """Exact Z-distance (None if k = 0)."""
    HX, HZ, n = checks(A, B, l, m)
    if num_logical(HX, HZ, n) == 0:
        return None
    F = 1
    while True:
        try:
            w = anchored_distance_mw(A, B, l, m, F)
        except ValueError:
            return DistanceSolver(HX, HZ, n).distance()
        if w <= 2 * F + 1:
            return w
        F += 1


def min_span_weight(rows):
    """Least weight of a nonzero vector of the span (exhaustive)."""
    basis = list(echelon(rows).values())
    S = np.zeros(1, dtype=np.uint64)
    for v in basis:
        S = np.concatenate((S, S ^ np.uint64(v)))
    return int(popcount64(S[1:]).min())


def transfer(v, N, u):
    """Pull-back of a base vector (2N bits) to the u-fold cover (2uN bits)."""
    mask = (1 << N) - 1
    left, right = v & mask, v >> N
    out = 0
    for s in range(u):
        out |= left << (s * N)
        out |= right << (u * N + s * N)
    return out


def transfer_kernel_dim(HX, HZ, n, HXt, HZt, N, u):
    """dim ker of the map induced by the transfer on H_1 (Z-type logicals)."""
    reps = logical_reps(HX, HZ, n)                 # ker HX / rowspace HZ
    piv = echelon(HZt)
    rk = 0
    for v in reps:
        r = reduce_vec(transfer(v, N, u), piv)
        if r:
            piv[r.bit_length() - 1] = r
            rk += 1
    return len(reps) - rk


def min_stabiliser_weight_up_to_6(HZ, n):
    """Least weight of a nonzero vector of rowspace(HZ) if it is <= 6, else 7.
    A vector lies in rowspace(HZ) iff it is orthogonal to ker(HZ); every such
    vector of weight <= 6 is the symmetric difference of two distinct subsets of
    size <= 3 with equal syndromes."""
    G = nullspace(HZ, n)
    syn = [sum(((g >> q) & 1) << t for t, g in enumerate(G)) for q in range(n)]
    buckets = {}
    for r in range(4):
        for S in itertools.combinations(range(n), r):
            v = 0
            for q in S:
                v ^= syn[q]
            buckets.setdefault(v, []).append(frozenset(S))
    best = 7
    for L in buckets.values():
        for a, b in itertools.combinations(L, 2):
            best = min(best, len(a ^ b))
    return best


def main():
    ok = True
    record = {}
    t_start = time.time()
    lm_max = int(sys.argv[1]) if len(sys.argv) > 1 else 9

    # --- 1. distance routines against known parameters ------------------------
    known = [
        ("[[18,8,2]]", [(0, 0), (0, 1), (0, 2)], [(0, 0), (1, 0), (2, 0)], 3, 3, 8, 2),
        ("[[36,8,4]]", [(3, 0), (0, 1), (0, 2)], [(0, 0), (1, 0), (2, 0)], 6, 3, 8, 4),
        ("[[54,8,6]]", [(3, 0), (0, 1), (0, 2)], [(0, 0), (1, 0), (2, 0)], 9, 3, 8, 6),
        ("[[72,12,6]]", [(3, 0), (0, 1), (0, 2)], [(0, 3), (1, 0), (2, 0)], 6, 6, 12, 6),
        ("[[90,8,10]]", [(9, 0), (0, 1), (0, 2)], [(0, 0), (2, 0), (7, 0)], 15, 3, 8, 10),
        ("[[108,8,10]]", [(3, 0), (0, 1), (0, 2)], [(0, 3), (1, 0), (2, 0)], 9, 6, 8, 10),
    ]
    for name, A, B, l, m, k0, d0 in known:
        HX, HZ, n = checks(A, B, l, m)
        k = num_logical(HX, HZ, n)
        d_anch = exact_distance(A, B, l, m)
        extra = ""
        good = (k == k0 and d_anch == d0)
        if n <= 72:
            d_mitm_z = DistanceSolver(HX, HZ, n).distance()
            d_mitm_x = DistanceSolver(HZ, HX, n).distance()
            good &= d_mitm_z == d0 and d_mitm_x == d0
            extra += f" meet-in-the-middle dZ={d_mitm_z} dX={d_mitm_x}"
        if n <= 36:
            d_bf = brute_force_distance(HX, HZ, n)
            good &= d_bf == d0
            extra += f" full enumeration dZ={d_bf}"
        if l * m <= 63 and n <= 90:
            d_a1 = anchored_distance(A, B, l, m, (d0 + 1) // 2)
            good &= d_a1 == d0
        print(f"[1] {name}: k={k}, anchored d={d_anch};{extra}  {'ok' if good else 'MISMATCH'}")
        record.setdefault("known_codes", {})[name] = {"k": k, "d": d_anch, "agrees": bool(good)}
        ok &= good

    # --- 2. chain maps on one cover -------------------------------------------
    A, B, l, m, u = [(0, 0), (0, 1), (0, 2)], [(0, 0), (1, 0), (2, 0)], 3, 3, 2
    At, Bt = [(3, 0), (0, 1), (0, 2)], [(0, 0), (1, 0), (2, 0)]
    N = l * m
    HX, HZ, n = checks(A, B, l, m)
    HXt, HZt, nh = checks(At, Bt, l * u, m)
    good = True
    # p maps cover X-stabilisers / Z-stabilisers to base ones, cover cycles to base cycles
    pivX, pivZ = echelon(HX), echelon(HZ)
    for row in HXt:
        good &= reduce_vec(project(row, N, u), pivX) == 0
    for row in HZt:
        good &= reduce_vec(project(row, N, u), pivZ) == 0
    # tau maps base stabilisers to cover stabilisers
    pivXt, pivZt = echelon(HXt), echelon(HZt)
    for row in HX:
        good &= reduce_vec(transfer(row, N, u), pivXt) == 0
    for row in HZ:
        good &= reduce_vec(transfer(row, N, u), pivZt) == 0
    # p o tau = u (zero for u = 2), and ker p = im tau for u = 2 (dimension count)
    good &= all(project(transfer(1 << q, N, u), N, u) == 0 for q in range(n))
    # the rows of the matrix of p are the vectors tau(e_q): rank p = rank tau = n, so
    # dim ker p = nh - n = n = dim im tau, and im tau is contained in ker p
    good &= rank([transfer(1 << q, N, u) for q in range(n)]) == n and nh - n == n
    print(f"[2] projection and transfer are chain maps, p o tau = 0 and ker p = im tau "
          f"on the cover [[36,8,4]] -> [[18,8,2]]: {'ok' if good else 'FAIL'}")
    record["chain_maps_36_to_18"] = bool(good)
    ok &= good

    # --- 3. exhaustive double covers of the bases with lm <= 12 ----------------
    stats = {"bases": 0, "covers": 0, "s<d bases": 0, "k_h=2k": 0, "k_h=k": 0,
             "d_h<d": 0, "d_h>2d": 0, "T1 fail": 0, "T2 fail": 0, "T3 fail": 0}
    ratio_hist = {}
    rank_checks, rank_mismatch = 0, 0
    for lm in range(3, lm_max + 1):
        for l in range(1, lm + 1):
            if lm % l:
                continue
            m = lm // l
            N = l * m
            for A, B in bases(l, m):
                HX, HZ, n = checks(A, B, l, m)
                k = num_logical(HX, HZ, n)
                if k == 0:
                    continue
                d = exact_distance(A, B, l, m)
                s = min_span_weight(HZ)
                stats["bases"] += 1
                stats["s<d bases"] += s < d
                for At in lifts(A, l, 2):
                    for Bt in lifts(B, l, 2):
                        HXt, HZt, nh = checks(At, Bt, 2 * l, m)
                        kh = num_logical(HXt, HZt, nh)
                        dh = exact_distance(At, Bt, 2 * l, m)
                        kd = transfer_kernel_dim(HX, HZ, n, HXt, HZt, N, 2)
                        if stats["covers"] % 17 == 0:      # independent rank computation
                            rank_checks += 1
                            k_np = nh - gf2_rank_numpy(HXt, nh) - gf2_rank_numpy(HZt, nh)
                            rank_mismatch += k_np != kh
                        stats["covers"] += 1
                        stats["k_h=2k"] += kh == 2 * k
                        stats["k_h=k"] += kh == k
                        if not (k <= kh <= 2 * k and 2 * kd == 2 * k - kh):
                            stats["T1 fail"] += 1
                        if dh < min(d, s):
                            stats["T2 fail"] += 1
                        if kh == 2 * k and (kd != 0 or dh > 2 * d):
                            stats["T3 fail"] += 1
                        stats["d_h<d"] += dh < d
                        stats["d_h>2d"] += dh > 2 * d
                        ratio_hist[(d, dh)] = ratio_hist.get((d, dh), 0) + 1
    print(f"[3] double covers (x direction, all orientations) of all bases with lm <= {lm_max}, k > 0:")
    print("    " + ", ".join(f"{a}={b}" for a, b in stats.items()))
    print("    histogram of (d, d_h):", dict(sorted(ratio_hist.items())))
    record["double_covers"] = {"lm_max": lm_max, **stats,
                               "histogram_d_dh": {f"{a},{b}": c for (a, b), c in sorted(ratio_hist.items())},
                               "independent_rank_crosschecks": rank_checks}
    ok &= rank_mismatch == 0
    ok &= stats["T1 fail"] == stats["T2 fail"] == stats["T3 fail"] == 0
    ok &= stats["d_h<d"] == 0 and stats["d_h>2d"] == 0

    # --- 4. fourfold covers (towers of double covers), lm <= 6 ------------------
    st4 = {"covers": 0, "k_h>4k": 0, "d_h<min(d,s)": 0, "d_h<d": 0, "d_h>4d": 0}
    for (l, m) in ((1, 3), (3, 1), (2, 3)):
        if True:
            for A, B in bases(l, m):
                HX, HZ, n = checks(A, B, l, m)
                k = num_logical(HX, HZ, n)
                if k == 0:
                    continue
                d = exact_distance(A, B, l, m)
                s = min_span_weight(HZ)
                for At in lifts(A, l, 4):
                    for Bt in lifts(B, l, 4):
                        HXt, HZt, nh = checks(At, Bt, 4 * l, m)
                        kh = num_logical(HXt, HZt, nh)
                        dh = exact_distance(At, Bt, 4 * l, m)
                        st4["covers"] += 1
                        st4["k_h>4k"] += kh > 4 * k
                        st4["d_h<min(d,s)"] += dh < min(d, s)
                        st4["d_h<d"] += dh < d
                        st4["d_h>4d"] += dh > 4 * d
    print("[4] fourfold covers (l -> 4l) of all bases with (l, m) in {(1,3), (3,1), (2,3)}: "
          + ", ".join(f"{a}={b}" for a, b in st4.items()))
    record["fourfold_covers"] = st4
    ok &= st4["k_h>4k"] == st4["d_h<min(d,s)"] == st4["d_h<d"] == st4["d_h>4d"] == 0

    # --- 5. a cover where the transfer kills every minimum-weight logical ------
    A, B, l, m = [(0, 0), (0, 1), (0, 5)], [(0, 0), (0, 1), (0, 8)], 1, 21
    At, Bt = [(0, 0), (0, 1), (1, 5)], [(0, 0), (1, 1), (1, 8)]
    N = l * m
    HX, HZ, n = checks(A, B, l, m)
    HXt, HZt, nh = checks(At, Bt, 2 * l, m)
    k, kh = num_logical(HX, HZ, n), num_logical(HXt, HZt, nh)
    d = exact_distance(A, B, l, m)
    dh = exact_distance(At, Bt, 2 * l, m)
    piv = echelon(HX)
    reps = []
    for v in nullspace(HZt, nh):
        pv = project(v, N, 2)
        r = reduce_vec(pv, piv)
        if r:
            piv[r.bit_length() - 1] = r
            reps.append(pv)
    F = 1
    while True:
        dtau = anchored_distance_mw(A, B, l, m, F, reps=reps)
        if dtau <= 2 * F + 1:
            break
        F += 1
    kd = transfer_kernel_dim(HX, HZ, n, HXt, HZt, N, 2)
    print(f"[5] base Z_21, A=1+y+y^5, B=1+y+y^8: [[{n},{k},{d}]]; cover A~=1+y+x y^5, "
          f"B~=1+x y+x y^8: [[{nh},{kh},{dh}]]; dim ker(transfer) = {kd}; least weight of a base "
          f"logical with nontrivial transfer = {dtau}")
    good = (n, k, d, nh, kh, dh, kd) == (42, 4, 6, 84, 4, 10, 2) and dtau == 8 and dh <= 2 * d
    record["example_42_to_84"] = {"base": [n, k, d], "cover": [nh, kh, dh], "dim_ker_transfer": kd,
                                  "d_tau": dtau, "passed": bool(good)}
    ok &= good

    # --- 6. one double cover of the [[90,8,10]] code ----------------------------
    A, B, l, m, d = [(9, 0), (0, 1), (0, 2)], [(0, 0), (2, 0), (7, 0)], 15, 3, 10
    At, Bt = [(9, 0), (0, 1), (0, 2)], [(0, 0), (2, 0), (7, 0)]
    HXt, HZt, nh = checks(At, Bt, 2 * l, m)
    kh = num_logical(HXt, HZt, nh)
    low = anchored_distance_mw(At, Bt, 2 * l, m, 4)       # sees every logical of weight <= 9
    print(f"[6] cover (30, 3) of [[90,8,10]] with the same polynomials: n={nh}, k_h={kh}, "
          f"no nontrivial logical of weight <= 9: {low >= 10}")
    record["cover_of_90_8_10"] = {"n": nh, "k_h": kh, "no_logical_weight_le_9": bool(low >= 10)}
    ok &= low >= 10

    # --- 7. the two double covers of [[108,8,10]] not settled by the transfer ---
    cert = json.loads((DATA / "witnesses_108_covers.json").read_text(encoding="utf-8"))
    base = cert["base"]
    bA, bB = [tuple(t) for t in base["A"]], [tuple(t) for t in base["B"]]
    l0, m0 = base["l"], base["m"]
    HXb, HZb, nb = checks(bA, bB, l0, m0)
    good = num_logical(HXb, HZb, nb) == base["k"]
    rows7 = []
    for cov in cert["covers"]:
        At, Bt = [tuple(t) for t in cov["A"]], [tuple(t) for t in cov["B"]]
        lc, mc = cov["l"], cov["m"]
        is_cover = (lc == 2 * l0 and mc == m0
                    and sorted((a % l0, b) for a, b in At) == sorted(bA)
                    and sorted((a % l0, b) for a, b in Bt) == sorted(bB))
        HXt, HZt, nh = checks(At, Bt, lc, mc)
        kh = num_logical(HXt, HZt, nh)
        v = sum(1 << q for q in cov["support"])
        in_ker = all(bin(v & row).count("1") % 2 == 0 for row in HXt)
        nontrivial = any(bin(v & x).count("1") & 1 for x in logical_reps(HZt, HXt, nh))
        low = anchored_distance_mw(At, Bt, lc, mc, 4)    # exact if <= 9, else d_h >= 10
        row = {"cover": [lc, mc], "n": nh, "k_h": kh, "is_double_cover": bool(is_cover),
               "witness_weight": len(cov["support"]), "witness_valid": bool(in_ker and nontrivial),
               "no_logical_weight_le_9": bool(low >= 10),
               "least_weight_found_by_anchored_search": int(low)}
        good &= is_cover and in_ker and nontrivial and low >= 10 and len(cov["support"]) <= 20
        rows7.append(row)
        print(f"[7] cover {cov['A']} {cov['B']} of [[108,8,10]]: n={nh}, k_h={kh}; witness of weight "
              f"{len(cov['support'])} valid: {in_ker and nontrivial}; no logical of weight <= 9: {low >= 10}; "
              f"anchored search finds weight {low}")
    record["covers_of_108_8_10"] = rows7
    ok &= good

    # --- 8. [[72,12,6]] has s = d = 6, so Theorem 2 covers all its 2^a-covers ---
    HX, HZ, n = checks([(3, 0), (0, 1), (0, 2)], [(0, 3), (1, 0), (2, 0)], 6, 6)
    s72 = min_stabiliser_weight_up_to_6(HZ, n)
    print(f"[8] [[72,12,6]]: least weight of a nonzero Z-stabiliser s = {s72}")
    record["s_of_72_12_6"] = s72
    ok &= s72 == 6

    print(f"elapsed {time.time() - t_start:.0f}s")
    print("RESULT:", "PASS" if ok else "FAIL")
    out = {"status": "passed" if ok else "failed", **record,
           "elapsed_seconds": round(time.time() - t_start, 1),
           "sha256": {f"checks/{f}": hashlib.sha256((ENTRY / "checks" / f).read_bytes()).hexdigest()
                      for f in ("check_bb_covers.py", "bb_tools.py")},
           "limits": "Exact GF(2) computations on small codes; they test the theorems proved in the "
                     "manuscript and search for counterexamples, but do not replace the proofs."}
    DATA.mkdir(exist_ok=True)
    (DATA / "verification.json").write_text(json.dumps(out, indent=2) + "\n", encoding="utf-8")
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
