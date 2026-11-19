"""Verification for the research note "The variance of a sum of independent quantum errors".

Formula under test (Lacalle and Pozo Coronado, arXiv:2412.15800, Conjecture 1):
    V(X1+X2) = V(X1) + V(X2) - V(X1) V(X2) / 2,   V(X) = E||X-P||^2 = 2 - 2 E[x_0],
equivalently  m12 = m1 * m2  with  m(X) = E<P, X> = 1 - V(X)/2.

Exact checks use SymPy; the ensemble checks use NumPy/SciPy with fixed seeds.
Run from the repository root:
    python research/entries/variance-sum-quantum-errors/checks/check_variance_formula.py
The script writes data/verification.json and exits with status 1 if any check fails.
"""
import hashlib
import itertools
import json
import sys
import time
from pathlib import Path

import numpy as np
import sympy as sp
from scipy.linalg import expm

ENTRY = Path(__file__).resolve().parent.parent
DATA = ENTRY / "data"
START = time.perf_counter()
RECORD = []

OK = True


def report(name, cond, detail=""):
    global OK
    OK = OK and bool(cond)
    RECORD.append({"check": name, "passed": bool(cond), "detail": detail})
    print(("PASS" if cond else "FAIL") + "  " + name + ("  | " + detail if detail else ""))


def formula(V1, V2):
    return V1 + V2 - V1 * V2 / 2


# ---------------------------------------------------------------------------
# 1. Exact: the paper's own basis on S^1.  h_1(theta) = (1 + sin theta)/(2 pi).
#    Theorem 3 of the paper claims formula (1) for all independent r.v. on S^1,
#    but its proof omits the pair (h_k, h_l).
# ---------------------------------------------------------------------------
th, tp = sp.symbols("theta thetap", real=True)
h1 = (1 + sp.sin(th)) / (2 * sp.pi)
norm = sp.simplify(sp.integrate(h1, (th, -sp.pi, sp.pi)))
V_h1 = sp.simplify(2 - 2 * sp.integrate(sp.cos(th) * h1, (th, -sp.pi, sp.pi)))
s_h1 = sp.simplify(sp.integrate(sp.sin(th) * h1, (th, -sp.pi, sp.pi)))
# composition by rotation: theta = theta1 + theta2
V_rot = sp.simplify(2 - 2 * sp.integrate(sp.cos(th + tp) * h1 * h1.subs(th, tp),
                                         (th, -sp.pi, sp.pi), (tp, -sp.pi, sp.pi)))
# composition with the sign convention printed in the paper (beta' = sin(theta0 + theta0')),
# i.e. theta = theta2 - theta1
V_ref = sp.simplify(2 - 2 * sp.integrate(sp.cos(th - tp) * h1 * h1.subs(th, tp),
                                         (th, -sp.pi, sp.pi), (tp, -sp.pi, sp.pi)))
pred = formula(V_h1, V_h1)
print("S^1, X1, X2 ~ h_1: norm =", norm, " V(h_1) =", V_h1, " E[sin] =", s_h1)
print("   formula (1) predicts", pred, "; exact V(X1+X2) =", V_rot, "(rotation), ", V_ref, "(paper's sign convention)")
report("S^1 counterexample inside the paper's basis (h_1, h_1): exact 5/2 (or 3/2) versus predicted 2",
       norm == 1 and V_h1 == 2 and pred == 2 and V_rot == sp.Rational(5, 2) and V_ref == sp.Rational(3, 2))

# ---------------------------------------------------------------------------
# 2. Exact: one qubit, two deterministic coherent errors R_x(2 pi/3).
# ---------------------------------------------------------------------------
def Rx(a):
    return sp.Matrix([[sp.cos(a / 2), -sp.I * sp.sin(a / 2)], [-sp.I * sp.sin(a / 2), sp.cos(a / 2)]])


psi0 = sp.Matrix([1, 0])
U = Rx(2 * sp.pi / 3)
V1 = sp.simplify(2 - 2 * sp.re((psi0.T * U * psi0)[0]))
V12 = sp.simplify(2 - 2 * sp.re((psi0.T * U * U * psi0)[0]))
print("one qubit, U1 = U2 = R_x(2pi/3): V1 = V2 =", V1, " V12 =", V12, " formula (1) gives", formula(V1, V1))
report("one-qubit coherent counterexample: V1 = V2 = 1, V12 = 3, formula gives 3/2",
       V1 == 1 and V12 == 3 and formula(V1, V1) == sp.Rational(3, 2))

# ---------------------------------------------------------------------------
# 3. Exact: second error centred, first error not centred, gate model.
#    U2 = R_y(t) or R_y(-t) Z with probability 1/2 ; X1 = R_y(a)|0> deterministic.
# ---------------------------------------------------------------------------
def Ry(a):
    return sp.Matrix([[sp.cos(a / 2), -sp.sin(a / 2)], [sp.sin(a / 2), sp.cos(a / 2)]])


Z = sp.diag(1, -1)
t, a = sp.pi / 2, sp.pi / 2
M2 = (Ry(t) + Ry(-t) * Z) / 2
fwd = sp.simplify(M2 * psi0)                  # E[U2]|0>
bwd = sp.simplify(M2.T * psi0)                # E[U2^dagger]|0>  (real matrices)
m2 = fwd[0]
x1 = Ry(a) * psi0
m1 = x1[0]
m12 = sp.simplify((psi0.T * M2 * x1)[0])
print("gate model, centred second error only: E[U2]|0> =", list(fwd), " E[U2^+]|0> =", list(bwd))
print("   m1 =", m1, " m2 =", m2, " m12 =", m12, " m1*m2 =", sp.simplify(m1 * m2))
report("gate model: centring of the second error alone does not suffice (m12 = 0, m1*m2 = 1/2)",
       fwd[1] == 0 and bwd[1] != 0 and m12 == 0 and sp.simplify(m1 * m2) == sp.Rational(1, 2))

# ---------------------------------------------------------------------------
# 4. Exact: the paper's example on S^7 (first error anisotropic and NOT centred,
#    second error isotropic).  Theorem 2 of the manuscript gives V12 = 2 - 2 m1 m2.
# ---------------------------------------------------------------------------
t0, t1, t2 = sp.symbols("t0 t1 t2", real=True)
meas = sp.sin(t0) ** 6 * sp.sin(t1) ** 5 * sp.sin(t2) ** 4


def integ(expr):
    return sp.integrate(sp.integrate(sp.integrate(sp.expand(expr * meas), (t0, 0, sp.pi)), (t1, 0, sp.pi)), (t2, 0, sp.pi))


g1 = 2 + sp.cos(t0) * sp.sin(t1) ** 2 + sp.cos(t1) * sp.sin(t2)
Z1 = integ(g1)
m1_ex = sp.nsimplify(integ(sp.cos(t0) * g1) / Z1)
x1_ex = sp.simplify(integ(sp.sin(t0) * sp.cos(t1) * g1) / Z1)     # E[x_1], transverse mean
g2 = 1 + sp.cos(t0)
m2_ex = sp.nsimplify(integ(sp.cos(t0) * g2) / integ(g2))
V1e, V2e = 2 - 2 * m1_ex, 2 - 2 * m2_ex
print("S^7 example: V(g1) =", V1e, " V(g2) =", V2e, " E[x_1] under g1 =", x1_ex, "=", float(x1_ex))
print("   2 - 2 m1 m2 =", 2 - 2 * m1_ex * m2_ex, " ; formula (1) =", sp.nsimplify(formula(V1e, V2e)))
report("S^7 example of the paper: V(g1)=53/28, V(g2)=7/4, V12=445/224, and g1 is not centred (E[x_1] != 0)",
       V1e == sp.Rational(53, 28) and V2e == sp.Rational(7, 4)
       and 2 - 2 * m1_ex * m2_ex == sp.Rational(445, 224) and x1_ex != 0)

# ---------------------------------------------------------------------------
# 5. Gate model, finite random ensembles in O(n): exact identity
#       V12 = V1 + V2 - V1 V2/2 - 2 <w2, u1>,
#    u1 = E[X1] - m1 P,  w2 = E[R2^T] P - m2 P.
# ---------------------------------------------------------------------------
rng = np.random.default_rng(20241220)


def rand_orth(n, scale):
    """Orthogonal matrix exp(scale * antisymmetric), anisotropic on purpose."""
    A = rng.normal(size=(n, n)) * scale * rng.uniform(0.2, 1.5, size=(n, 1))
    return expm(A - A.T)


def rand_error(n, k, scale):
    """Finite random error: k rotations with random weights (non uniform)."""
    wts = rng.dirichlet(np.ones(k))
    return wts, [rand_orth(n, scale) for _ in range(k)]


def mean_mat(err):
    return sum(w * R for w, R in zip(*err))


def centre(err):
    """Symmetrise by all sign flips D = diag(1, +-1, ..., +-1): R -> D R D.  Then E[R]P = m P."""
    wts, Rs = err
    n = Rs[0].shape[0]
    out_w, out_R = [], []
    for signs in itertools.product([1.0, -1.0], repeat=n - 1):
        D = np.diag((1.0,) + signs)
        for w, R in zip(wts, Rs):
            out_w.append(w / 2 ** (n - 1)); out_R.append(D @ R @ D)
    return np.array(out_w), out_R


max_id, max_viol_generic, max_viol_centred1, max_viol_centred2bwd = 0.0, 0.0, 0.0, 0.0
for n in (2, 4, 8):          # S^1, one qubit (S^3), two qubits (S^7)
    P = np.zeros(n); P[0] = 1.0
    for trial in range(40):
        e1 = rand_error(n, 3, 0.6); e2 = rand_error(n, 4, 0.3)        # not identically distributed
        for tag, (a1, a2) in {"generic": (e1, e2), "first centred": (centre(e1), e2),
                              "second centred": (e1, centre(e2))}.items():
            M1, M2n = mean_mat(a1), mean_mat(a2)
            # exact expectation over the product ensemble
            m12n = sum(w1 * w2 * (R2 @ R1 @ P)[0] for w1, R1 in zip(*a1) for w2, R2 in zip(*a2))
            m1n, m2n = (M1 @ P)[0], (M2n @ P)[0]
            u1 = M1 @ P - m1n * P
            w2 = M2n.T @ P - m2n * P
            V1n, V2n, V12n = 2 - 2 * m1n, 2 - 2 * m2n, 2 - 2 * m12n
            max_id = max(max_id, abs(V12n - (formula(V1n, V2n) - 2 * w2 @ u1)))
            gap = abs(V12n - formula(V1n, V2n))
            if tag == "generic":
                max_viol_generic = max(max_viol_generic, gap)
            elif tag == "first centred":
                max_viol_centred1 = max(max_viol_centred1, gap)
            else:   # D R D symmetrisation also centres the backward error R^T P
                max_viol_centred2bwd = max(max_viol_centred2bwd, gap)
print("gate model, 360 random finite ensembles in O(2), O(4), O(8):")
print("   max |V12 - (V1+V2-V1V2/2 - 2<w2,u1>)| = %.2e" % max_id)
print("   max |V12 - formula(1)|: generic %.3f ; first error centred %.2e ; second (backward) centred %.2e"
      % (max_viol_generic, max_viol_centred1, max_viol_centred2bwd))
report("gate model: exact corrected identity holds to rounding", max_id < 1e-12)
report("gate model: formula (1) holds when the first error is centred (anisotropic, non identically distributed)",
       max_viol_centred1 < 1e-12)
report("gate model: formula (1) holds when the backward second error is centred", max_viol_centred2bwd < 1e-12)
report("gate model: formula (1) fails for generic non-centred errors", max_viol_generic > 1e-2)

# ---------------------------------------------------------------------------
# 6. Transport model: X = T(X1) Y2, T(x) any rotation with T(x) P = x.
#    Formula (1) holds for every section T as soon as E[Y2] is parallel to P.
# ---------------------------------------------------------------------------
def householder_rotation(x):
    """Rotation sending P to x (product of two reflections); x != -P."""
    n = x.shape[0]
    P = np.zeros(n); P[0] = 1.0
    v = P + x
    H1 = np.eye(n) - 2 * np.outer(v, v) / (v @ v)   # sends P to -x ... composed below
    H0 = np.eye(n) - 2 * np.outer(P, P)             # P -> -P
    return H1 @ H0                                   # P -> -P -> x


def twisted_section(x, seedmat):
    """Another section: same rotation followed by a fixed twist in the stabiliser of P."""
    return householder_rotation(x) @ seedmat


def rand_points(n, k, spread):
    P = np.zeros(n); P[0] = 1.0
    pts = P + spread * rng.normal(size=(k, n)) * rng.uniform(0.2, 1.5, size=(1, n))
    pts /= np.linalg.norm(pts, axis=1, keepdims=True)
    return rng.dirichlet(np.ones(k)), pts


def centre_points(dist):
    wts, pts = dist
    n = pts.shape[1]
    ws, ps = [], []
    for signs in itertools.product([1.0, -1.0], repeat=n - 1):
        D = np.array((1.0,) + signs)
        ws.extend(wts / 2 ** (n - 1)); ps.extend(pts * D)
    return np.array(ws), np.array(ps)


max_c, max_nc, max_sec = 0.0, 0.0, 0.0
for n in (2, 4, 8):
    P = np.zeros(n); P[0] = 1.0
    twist = np.eye(n)
    if n > 2:
        twist[1:, 1:] = rand_orth(n - 1, 0.8)
    else:
        twist[1, 1] = -1.0
    for trial in range(15):
        d1 = rand_points(n, 4, 0.8)                 # first error: arbitrary, not centred
        d2 = rand_points(n, 3, 0.5)                 # second error: arbitrary
        d2c = centre_points(d2)                     # second error: centred, anisotropic
        res = {}
        for sec_name, sec in (("H", householder_rotation), ("T", lambda x: twisted_section(x, twist))):
            for tag, dd in (("nc", d2), ("c", d2c)):
                m12n = sum(w1 * w2 * (sec(x1) @ y)[0] for w1, x1 in zip(*d1) for w2, y in zip(*dd))
                res[(sec_name, tag)] = 2 - 2 * m12n
        V1n = 2 - 2 * (d1[0] @ d1[1])[0]
        V2n = 2 - 2 * (d2[0] @ d2[1])[0]              # same for centred version
        for sname in ("H", "T"):
            max_c = max(max_c, abs(res[(sname, "c")] - formula(V1n, V2n)))
            max_nc = max(max_nc, abs(res[(sname, "nc")] - formula(V1n, V2n)))
        max_sec = max(max_sec, abs(res[("H", "nc")] - res[("T", "nc")]))
print("transport model, 45 random finite ensembles on S^1, S^3, S^7, two different sections:")
print("   second error centred: max |V12 - formula(1)| = %.2e" % max_c)
print("   second error not centred: max |V12 - formula(1)| = %.3f ; max difference between sections = %.3f"
      % (max_nc, max_sec))
report("transport model: formula (1) holds for any first error and any section when the second error is centred",
       max_c < 1e-12)
report("transport model: without centring the result fails and depends on the section", max_nc > 1e-2 and max_sec > 1e-2)

# ---------------------------------------------------------------------------
# 7. Monte Carlo on the paper's S^7 example in the transport model (fixed seed).
# ---------------------------------------------------------------------------
rng = np.random.default_rng(7)
N = 6_000_000
x = rng.normal(size=(N, 8)); x /= np.linalg.norm(x, axis=1, keepdims=True)
c0 = x[:, 0]
r1 = np.sqrt(np.clip(1 - c0 ** 2, 1e-300, None))
c1 = x[:, 1] / r1
r2 = np.sqrt(np.clip(1 - c0 ** 2 - x[:, 1] ** 2, 1e-300, None))
c2 = x[:, 2] / r2
dens1 = 2 + c0 * (1 - c1 ** 2) + c1 * np.sqrt(np.clip(1 - c2 ** 2, 0, None))
X1 = x[rng.uniform(size=N) < dens1 / 4]
y = rng.normal(size=(N, 8)); y /= np.linalg.norm(y, axis=1, keepdims=True)
Y2 = y[rng.uniform(size=N) < (1 + y[:, 0]) / 2]
n_s = min(len(X1), len(Y2)); X1, Y2 = X1[:n_s], Y2[:n_s]
# x0-coordinate of T(X1) Y2 with T = H1 H0 (Householder section), vectorised:
#   H0 y = y - 2 y0 P ;  H1 z = z - 2 v (v.z)/(v.v), v = P + X1
z = Y2.copy(); z[:, 0] = -z[:, 0]
v = X1.copy(); v[:, 0] += 1.0
out0 = z[:, 0] - 2 * v[:, 0] * np.einsum("ij,ij->i", v, z) / np.einsum("ij,ij->i", v, v)
V1mc, V2mc, V12mc = 2 - 2 * X1[:, 0].mean(), 2 - 2 * Y2[:, 0].mean(), 2 - 2 * out0.mean()
err = 2 * out0.std() / np.sqrt(n_s)
print("Monte Carlo S^7 (%d samples): V1 = %.4f (53/28 = %.4f), V2 = %.4f (7/4), V12 = %.5f +- %.5f (445/224 = %.5f)"
      % (n_s, V1mc, 53 / 28, V2mc, V12mc, err, 445 / 224))
report("Monte Carlo agrees with 445/224 within 4 standard errors and excludes V12 = 2",
       abs(V12mc - 445 / 224) < 4 * err and abs(V12mc - 2) > 8 * err)

# ---------------------------------------------------------------------------
# 8. Companion fidelity formula (Lacalle, Pozo Coronado, Martin-Cuevas, QIP 25:38, 2026):
#       F2_12 = f0 + (F2_1 - f0)(F2_2 - f0)/(1 - f0),  F2(X) = E[x_0^2 + x_1^2],  f0 = 2/(d+1).
#    Transport model; second error anisotropic but with isotropic second moment
#    E[Y Y^T] = a P P^T + b (1 - P P^T)  (obtained by sign flips and cyclic shifts of x_1..x_d).
# ---------------------------------------------------------------------------
rng = np.random.default_rng(38)


def iso_second_moment(dist):
    wts, pts = dist
    n = pts.shape[1]
    ws, ps = [], []
    for shift in range(n - 1):
        perm = [0] + [1 + (i + shift) % (n - 1) for i in range(n - 1)]
        for signs in itertools.product([1.0, -1.0], repeat=n - 1):
            D = np.array((1.0,) + signs)
            ws.extend(wts / ((n - 1) * 2 ** (n - 1))); ps.extend(pts[:, perm] * D)
    return np.array(ws), np.array(ps)


def F2(wts, pts):
    return float(wts @ (pts[:, 0] ** 2 + pts[:, 1] ** 2))


max_f_iso, max_f_generic = 0.0, 0.0
for n in (4, 8):
    f0 = 2.0 / n
    twist = np.eye(n); twist[1:, 1:] = rand_orth(n - 1, 0.8)
    for trial in range(6):
        d1 = rand_points(n, 4, 0.8)
        d2 = rand_points(n, 2, 0.5)
        d2s = iso_second_moment(d2)
        for sec in (householder_rotation, lambda x: twisted_section(x, twist)):
            for tag, dd in (("generic", d2), ("iso", d2s)):
                Ts = [sec(x1) for x1 in d1[1]]
                acc = 0.0
                for w1, T in zip(d1[0], Ts):
                    out = dd[1] @ T.T                      # rows: T y
                    acc += w1 * float(dd[0] @ (out[:, 0] ** 2 + out[:, 1] ** 2))
                pred_f = f0 + (F2(*d1) - f0) * (F2(*dd) - f0) / (1 - f0)
                if tag == "iso":
                    max_f_iso = max(max_f_iso, abs(acc - pred_f))
                else:
                    max_f_generic = max(max_f_generic, abs(acc - pred_f))
print("fidelity formula, transport model on S^3 and S^7: max deviation %.2e (isotropic second moment), %.3f (generic)"
      % (max_f_iso, max_f_generic))
report("fidelity formula holds when the second error has an isotropic second moment (first error arbitrary)",
       max_f_iso < 1e-12)
report("fidelity formula fails for a generic second error", max_f_generic > 1e-2)

print()
print("ALL CHECKS PASS" if OK else "SOME CHECK FAILED")
record = {
    "status": "passed" if OK else "failed",
    "checks": RECORD,
    "exact_values": {
        "circle_h1_variance": str(V_h1), "circle_h1_mean_sin": str(s_h1),
        "circle_sum_rotation": str(V_rot), "circle_sum_paper_sign": str(V_ref),
        "qubit_coherent_V1": str(V1), "qubit_coherent_V12": str(V12),
        "gate_model_m12": str(m12), "gate_model_m1m2": str(sp.simplify(m1 * m2)),
        "S7_V_g1": str(V1e), "S7_V_g2": str(V2e), "S7_E_x1_under_g1": str(x1_ex),
        "S7_V12": str(2 - 2 * m1_ex * m2_ex),
    },
    "floating_point": {
        "gate_identity_max_error": max_id, "gate_generic_max_violation": max_viol_generic,
        "gate_first_centred_max_violation": max_viol_centred1,
        "transport_centred_max_violation": max_c, "transport_noncentred_max_violation": max_nc,
        "transport_section_dependence": max_sec,
        "monte_carlo_S7": {"samples": int(n_s), "V12": float(V12mc), "two_std_err": float(err)},
        "fidelity_isotropic_second_moment_max_error": max_f_iso,
        "fidelity_generic_max_violation": max_f_generic,
    },
    "seeds": [20241220, 7, 38],
    "elapsed_seconds": round(time.perf_counter() - START, 1),
    "sha256": {"checks/check_variance_formula.py": hashlib.sha256(Path(__file__).read_bytes()).hexdigest()},
    "limits": "Exact symbolic counterexamples and floating-point checks on finite ensembles; "
              "the general statements are proved in the manuscript, not by this script.",
}
DATA.mkdir(exist_ok=True)
(DATA / "verification.json").write_text(json.dumps(record, indent=2) + "\n", encoding="utf-8")
sys.exit(0 if OK else 1)
