"""Exact checks that accompany the analytic part of the Z_p x Z_q theorem.

1. Z_2 x Z_2 (exact, sympy): the state rho = (I - (ZZ + XZ + XX - ZX)/3)/4 and the witness
   W' = I + ZZ + XZ + XX - ZX - YY. Checks rho >= 0, Q(rho) >= 0, Tr(W' rho) = -1/3 and
   Tr(W' P) >= 0 on the twenty pure KD-positive projectors.
2. Tr(W P) >= 0 on every pure KD-positive projector for the CHSH witness of the manuscript, for
   a list of pairs (p, q). The manuscript proves this for all pairs; this is an exhaustive exact
   cross-check on small cases.
3. The rational inequalities of the case table, with the kappa bounds read from
   data/kappa-bounds.json (run certify_kappa.py first).

Run from the repository root:
    python research/entries/kd-z3x3/checks/check_chsh_analytic.py
Writes data/chsh-analytic-checks.json. Requires python-flint (through chsh_common) and sympy.
"""
import json
import sys
from fractions import Fraction
from pathlib import Path

import sympy as sp

HERE = Path(__file__).resolve().parent
DATA = HERE.parent / "data"
sys.path.insert(0, str(HERE))

from chsh_common import witness_functions, witness_on_pure  # noqa: E402

out = {}

# ------------------------------------------------------------------ 1. Z_2 x Z_2
Z = sp.Matrix([[1, 0], [0, -1]])
X = sp.Matrix([[0, 1], [1, 0]])
Y = sp.Matrix([[0, -sp.I], [sp.I, 0]])
kp = sp.kronecker_product
B = kp(Z, Z) + kp(X, Z) + kp(X, X) - kp(Z, X)
rho = (sp.eye(4) - sp.Rational(1, 3) * B) / 4
Wp = sp.eye(4) + B - kp(Y, Y)
eigenvalues = rho.eigenvals()
out["Z2xZ2_rho_eigenvalues"] = {str(sp.nsimplify(k)): int(v) for k, v in eigenvalues.items()}
# the eigenvalues are 1/4 (twice) and 1/4 +- sqrt(2)/6; positivity is 9 > 8
out["Z2xZ2_rho_psd"] = bool(all(sp.simplify(k).is_nonnegative for k in eigenvalues))
points = [(0, 0), (0, 1), (1, 0), (1, 1)]
index = {e: i for i, e in enumerate(points)}


def chi(k, x):
    return (-1) ** ((k[0] * x[0] + k[1] * x[1]) % 2)


Q = {(g, k): sp.nsimplify(sum(rho[index[g], index[x]] * chi(k, x) * chi(k, g) for x in points) / 4)
     for g in points for k in points}
out["Z2xZ2_Q_min"] = str(min(Q.values()))
out["Z2xZ2_Q_real_nonnegative"] = bool(all(v.is_real and v >= 0 for v in Q.values()))
trace_value = sp.simplify((Wp * rho).trace())
out["Z2xZ2_Tr_Wprime_rho"] = str(trace_value)
subgroups = [[(0, 0)], [(0, 0), (0, 1)], [(0, 0), (1, 0)], [(0, 0), (1, 1)], points]
values = []
for H in subgroups:
    cosets = {frozenset(((g[0] + h[0]) % 2, (g[1] + h[1]) % 2) for h in H) for g in points}
    characters = {}
    for k in points:
        characters.setdefault(tuple(chi(k, h) for h in H), k)
    for coset in cosets:
        for k in characters.values():
            v = sp.Matrix([chi(k, x) if x in coset else 0 for x in points]) / sp.sqrt(len(H))
            values.append(sp.simplify((v.H * Wp * v)[0]))
out["Z2xZ2_pure_states"] = len(values)
out["Z2xZ2_min_Tr_Wprime_pure"] = str(min(values))
out["Z2xZ2_ok"] = bool(out["Z2xZ2_rho_psd"] and out["Z2xZ2_Q_real_nonnegative"]
                       and len(values) == 20 and min(values) >= 0 and trace_value < 0)

# ------------------------------------------------------------------ 2. pure states, CHSH witness
pure = {}
for (p, q) in [(2, 3), (2, 5), (2, 7), (3, 5), (3, 7), (5, 7), (3, 19), (7, 11),
               (3, 3), (5, 5), (7, 7), (11, 11), (13, 13)]:
    vals = witness_on_pure(p, q, witness_functions(p, q))
    low = min(v for v, _ in vals)
    pure[f"{p},{q}"] = {"pure_states": len(vals), "min_Tr_W_pure": str(low), "ok": low >= 0}
    print(p, q, pure[f"{p},{q}"], flush=True)
out["pure_state_checks"] = pure

# ------------------------------------------------------------------ 3. case table
bounds = json.loads((DATA / "kappa-bounds.json").read_text())
k3 = Fraction(bounds[0]["kappa_upper"]).limit_denominator(10 ** 6) + Fraction(1, 10 ** 6)
k5 = Fraction(bounds[1]["kappa_upper"]).limit_denominator(10 ** 6) + Fraction(1, 10 ** 6)
assert k3 >= Fraction(bounds[0]["kappa_upper"]) and k5 >= Fraction(bounds[1]["kappa_upper"])
# the certified bounds are below the values printed in the manuscript
assert Fraction(bounds[0]["kappa_upper"]) <= Fraction(125642, 100000)
assert Fraction(bounds[1]["kappa_upper"]) <= Fraction(128772, 100000)


def s(p):
    return Fraction(2) if p == 2 else Fraction(2 * (p - 1), p)


tsirelson_upper = Fraction(28285, 10000)
assert tsirelson_upper ** 2 > 8
cases = {
    "(2,3): nu = s2 s3 > max(2, 2 kappa_3)": (s(2) * s(3), max(2, 2 * k3)),
    "(2,q), q >= 5: nu >= s2 s5 > 2 sqrt 2": (s(2) * s(5), tsirelson_upper),
    "(3,q), q >= 19: nu >= s3 s19 > max(2, 2 kappa_3)": (s(3) * s(19), max(2, 2 * k3)),
    "(5,q), q >= 7: nu >= s5 s7 > max(2, 2 kappa_5)": (s(5) * s(7), max(2, 2 * k5)),
    "(p,q), 7 <= p < q: nu >= s7 s11 > 2 sqrt 2": (s(7) * s(11), tsirelson_upper),
    "(p,p), p >= 7: nu >= s7^2 > 2 sqrt 2": (s(7) * s(7), tsirelson_upper),
}
out["case_inequalities"] = {k: {"nu_lower": str(a), "threshold_upper": str(b), "ok": a > b}
                            for k, (a, b) in cases.items()}
out["all_ok"] = bool(out["Z2xZ2_ok"] and all(v["ok"] for v in pure.values())
                     and all(v["ok"] for v in out["case_inequalities"].values()))
(DATA / "chsh-analytic-checks.json").write_text(json.dumps(out, indent=1) + "\n")
print(json.dumps(out, indent=1))
if not out["all_ok"]:
    raise SystemExit("analytic checks failed")
