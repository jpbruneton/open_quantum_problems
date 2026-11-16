"""Independent exact certificate checker: Python standard library only.

This file does not import the search code, NumPy, or stored masks/LDL pivots.
It rebuilds all 54 pure-state masks from the six subgroups of F_3^2.
PSD is checked through an 18x18 RATIONAL realification, independently of the
search certificate's 9x9 cyclotomic LDL calculation.
"""
from fractions import Fraction as F
import hashlib
import itertools
import json
from pathlib import Path
import sys
import time


def verify(path):
    if not __debug__:
        raise RuntimeError("Run this certificate checker without Python -O")
    started = time.monotonic()
    data = json.loads(path.read_text(encoding="utf-8"))
    assert data["group"] == [3, 3]
    elems = list(itertools.product(range(3), repeat=2))
    subgroups = [{(0, 0)}, set(elems)]
    for u in ((1, 0), (0, 1), (1, 1), (1, 2)):
        subgroups.append({((a*u[0]) % 3, (a*u[1]) % 3) for a in range(3)})
    # Every subgroup of F_3^2 is a vector subspace: zero, one of four lines, or full.
    masks = set()
    for h in subgroups:
        for a in elems:
            for c in elems:
                coset = {((a[0]+x[0]) % 3, (a[1]+x[1]) % 3) for x in h}
                allowed_chars = {chi for chi in elems if all(
                    ((chi[0]-c[0])*x[0] + (chi[1]-c[1])*x[1]) % 3 == 0 for x in h)}
                masks.add(tuple(int(g in coset and chi in allowed_chars) for g in elems for chi in elems))
    assert len(masks) == 54 and all(sum(m) == 9 for m in masks)
    denom = int(data["Q_denominator"])
    q = [F(x, denom) for row in data["integer_Q_numerator"] for x in row]
    wq = [F(x) for row in data["integer_witness_Q"] for x in row]
    assert len(q) == len(wq) == 81
    assert min(q) > 0 and sum(q) == 1

    def reconstruct(values):
        # rho_gh=sum_chi Q(g,chi)*chi(g-h). zeta^2=-1-zeta.
        real, zeta = [[F(0) for j in range(9)] for i in range(9)], [[F(0) for j in range(9)] for i in range(9)]
        for i, g in enumerate(elems):
            for j, h in enumerate(elems):
                for k, chi in enumerate(elems):
                    power = ((g[0]-h[0])*chi[0] + (g[1]-h[1])*chi[1]) % 3
                    if power == 0:
                        real[i][j] += values[9*i+k]
                    elif power == 1:
                        zeta[i][j] += values[9*i+k]
                    else:
                        real[i][j] -= values[9*i+k]
                        zeta[i][j] -= values[9*i+k]
        assert all(real[j][i] == real[i][j]-zeta[i][j] and zeta[j][i] == -zeta[i][j]
                   for i in range(9) for j in range(9))
        return real, zeta

    a, b = reconstruct(q)
    wa, wb = reconstruct(wq)  # The separating observable must also be exactly Hermitian.
    assert sum(a[i][i] for i in range(9)) == 1
    x = [[a[i][j]-b[i][j]/2 for j in range(9)] for i in range(9)]
    # Congruence diag(I,sqrt(3)I) of the usual complex-to-real representation.
    realified = [[F(0) for j in range(18)] for i in range(18)]
    for i in range(9):
        for j in range(9):
            realified[i][j] = x[i][j]
            realified[i][j+9] = -3*b[i][j]/2
            realified[i+9][j] = 3*b[i][j]/2
            realified[i+9][j+9] = 3*x[i][j]
    assert all(realified[i][j] == realified[j][i] for i in range(18) for j in range(18))
    lower = [[F(int(i == j)) for j in range(18)] for i in range(18)]
    pivots = []
    for j in range(18):
        pivot = realified[j][j] - sum(lower[j][k]**2*pivots[k] for k in range(j))
        assert pivot > 0, (j, pivot)
        pivots.append(pivot)
        for i in range(j+1, 18):
            lower[i][j] = (realified[i][j] - sum(lower[i][k]*lower[j][k]*pivots[k] for k in range(j))) / pivot
    assert all(sum(lower[i][k]*pivots[k]*lower[j][k] for k in range(18)) == realified[i][j]
               for i in range(18) for j in range(18))
    free_max = max(sum(F(m[i])*wq[i] for i in range(81)) for m in masks)
    observed = 9*sum(qi*wi for qi, wi in zip(q, wq))
    # Also compute Tr(rho W) directly in Q(zeta_3), without the KD overlap identity.
    direct_real, direct_zeta = F(0), F(0)
    for i in range(9):
        for j in range(9):
            aa, bb, cc, dd = a[i][j], b[i][j], wa[j][i], wb[j][i]
            direct_real += aa*cc-bb*dd
            direct_zeta += aa*dd+bb*cc-bb*dd
    assert direct_zeta == 0 and direct_real == observed
    gap = observed-free_max
    assert gap > 0
    assert str(free_max) == data["witness_free_maximum"]
    assert str(observed) == data["witness_state_value"]
    assert str(gap) == data["witness_gap"]
    shifted_norm_bound = max(sum(abs(wa[i][j]-(free_max if i == j else 0))+abs(wb[i][j]) for j in range(9)) for i in range(9))
    return {"certificate": path.name, "certificate_sha256": hashlib.sha256(path.read_bytes()).hexdigest(),
            "independent_checker_sha256": hashlib.sha256(Path(__file__).read_bytes()).hexdigest(),
            "arithmetic": "fractions only; no floating-point or optimization dependencies",
            "pure_KD_states_rebuilt": len(masks), "KD_minimum": str(min(q)), "trace": "1",
            "rational_realification_dimension": 18, "positive_LDL_pivots_checked": len(pivots),
            "LDL_reconstruction": "exactly equal for all 324 matrix entries",
            "free_witness_maximum": str(free_max), "state_witness_value": str(observed), "strict_gap": str(gap),
            "shifted_witness_operator_norm_upper_bound": str(shifted_norm_bound),
            "trace_norm_distance_to_pure_KD_hull_lower_bound": str(gap/shifted_norm_bound),
            "conclusion": "rho is KD positive and outside convex hull of all pure KD-positive states for Z3 x Z3",
            "novelty": "not certified", "seconds": round(time.monotonic()-started, 4)}


if __name__ == "__main__":
    path = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(__file__).resolve().parent / "z3x3-simple-certificate.json"
    result = verify(path)
    output = path.parent / "z3x3-independent-verification.json"
    output.write_text(json.dumps(result, indent=2), encoding="utf-8")
    print(json.dumps(result, indent=2))
