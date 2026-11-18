"""Numerical checks for the local discrimination of maximally entangled two-qubit states.

NumPy and SciPy only, no network. Every optimum stated in the manuscript is
checked from both sides: an explicit measurement, assembled as 4x4 matrices and
tested for positivity, completeness and success probability, and the operator-
norm certificate that bounds all separable measurements. The proofs are in the
manuscript; these computations only test their ingredients on concrete families.
"""
import os
os.environ.setdefault("OPENBLAS_NUM_THREADS", "1")
os.environ.setdefault("OMP_NUM_THREADS", "1")
import hashlib
import itertools
import json
import time
from pathlib import Path

import numpy as np
from scipy import optimize

ENTRY = Path(__file__).resolve().parent.parent
CHECKS = ENTRY / "checks"
DATA = ENTRY / "data"
MANUSCRIPT = ENTRY / "manuscript"
SEED = 20261118

I2 = np.eye(2)
I4 = np.eye(4)
PAULI = np.array([[[0, 1], [1, 0]], [[0, -1j], [1j, 0]], [[1, 0], [0, -1]]])
SINGLET = np.array([0, 1, -1, 0]) / np.sqrt(2)
TETRAHEDRON = np.array([[1, 1, 1], [1, -1, -1], [-1, 1, -1], [-1, -1, 1]]) / np.sqrt(3)


# ---------- conventions of the manuscript ----------

def spin(v):
    return np.tensordot(v, PAULI, axes=1)


def unitary(q):
    """U(q) = q0 - i q.sigma for a unit quaternion q."""
    return q[0] * I2 - 1j * spin(q[1:])


def state(q):
    """|e(q)> = (1 x U(q)) |singlet>."""
    return np.kron(I2, unitary(q)) @ SINGLET


def rotation(q):
    a, b, c, d = q
    return np.array([[a*a+b*b-c*c-d*d, 2*(b*c-a*d), 2*(b*d+a*c)],
                     [2*(b*c+a*d), a*a-b*b+c*c-d*d, 2*(c*d-a*b)],
                     [2*(b*d-a*c), 2*(c*d+a*b), a*a-b*b-c*c+d*d]])


def qmul(p, q):
    return np.concatenate(([p[0]*q[0] - p[1:] @ q[1:]],
                           p[0]*q[1:] + q[0]*p[1:] + np.cross(p[1:], q[1:])))


def qconj(q):
    return np.concatenate(([q[0]], -q[1:]))


def correlation(psi):
    """Matrix C with <sigma_a x sigma_b> = b.C a."""
    rho = np.outer(psi, psi.conj())
    t = np.array([[np.trace(rho @ np.kron(PAULI[a], PAULI[b])).real for b in range(3)]
                  for a in range(3)])
    return t.T


def pair_effect(a, b):
    """(1 + sigma_a x sigma_b)/2, the sum of two product projectors."""
    return (I4 + np.kron(spin(a), spin(b))) / 2


def partial_transpose(m):
    return m.reshape(2, 2, 2, 2).transpose(0, 3, 2, 1).reshape(4, 4)


def min_eig(m):
    return float(np.linalg.eigvalsh((m + m.conj().T) / 2)[0])


def success(states, effects):
    return float(np.mean([np.real(s.conj() @ m @ s) for s, m in zip(states, effects)]))


def check_measurement(effects, separable=True, tol=1e-8):
    total = sum(effects)
    assert np.max(np.abs(total - I4)) < tol, np.max(np.abs(total - I4))
    for m in effects:
        assert min_eig(m) > -tol
        if separable:
            # For two qubits a positive operator with positive partial transpose is separable.
            assert min_eig(partial_transpose(m)) > -tol


# ---------- geometry ----------

def min_norm_weights(points):
    """Weights of the point of conv(rows) closest to the origin (non-negative least squares)."""
    k, dim = points.shape
    system = np.vstack((points.T, np.ones((1, k))))
    target = np.concatenate((np.zeros(dim), [1.0]))
    u, _ = optimize.nnls(system, target, maxiter=200 * k)
    return u / u.sum()


def covering(qs):
    """cos(Theta) = max over unit kappa of min_j |kappa.q_j|, with centre, signs and weights."""
    best = None
    for tail in itertools.product((1.0, -1.0), repeat=len(qs) - 1):
        signs = np.array((1.0,) + tail)
        pts = qs * signs[:, None]
        w = min_norm_weights(pts)
        z = pts.T @ w
        value = np.linalg.norm(z)
        if best is None or value > best[0]:
            best = (value, z, signs, w)
    value, z, signs, w = best
    kappa = z / value if value > 1e-12 else None
    return min(value, 1.0), kappa, signs, w


def one_way(cs, seed=0):
    """Optimal success with one message: max over Alice's axis of (1 + enclosing radius)/k."""
    k = len(cs)

    def axis(angles):
        th, ph = angles
        return np.array([np.sin(th)*np.cos(ph), np.sin(th)*np.sin(ph), np.cos(th)])

    def negative_radius(angles):
        pts = cs @ axis(angles)
        z = pts.T @ min_norm_weights(pts)
        return -np.sqrt(max(0.0, 1 - z @ z))

    res = optimize.differential_evolution(negative_radius, [(0, np.pi), (0, 2*np.pi)], seed=seed,
                                          tol=1e-12, atol=1e-12, popsize=24, maxiter=400,
                                          polish=False)
    res = optimize.minimize(negative_radius, res.x, method="Nelder-Mead",
                            options=dict(xatol=1e-11, fatol=1e-14, maxiter=4000))
    v = axis(res.x)
    return (1 - res.fun) / k, v


def one_way_measurement(cs, v):
    """Alice measures sigma_v and sends the sign; Bob uses the enclosing-ball measurement."""
    pts = cs @ v
    w = min_norm_weights(pts)
    z = pts.T @ w
    radius = np.sqrt(max(0.0, 1 - z @ z))
    effects = []
    for j in range(len(cs)):
        m = np.zeros((4, 4), dtype=complex)
        for sign in (1, -1):
            bob = w[j] * (I2 + sign * spin(pts[j] - z) / radius)
            m += np.kron((I2 + sign * spin(v)) / 2, bob)
        effects.append(m)
    return effects, radius


def cap_measurement(qs, kappa, signs, w):
    """Separable measurement of Theorem 2 for Theta <= pi/4."""
    o = rotation(kappa)
    effects = []
    for q, sign, weight in zip(qs, signs, w):
        if weight < 1e-12:
            effects.append(np.zeros((4, 4), dtype=complex))
            continue
        rel = qmul(qconj(kappa), sign * q)
        n = rel[1:] / np.linalg.norm(rel[1:])
        a = np.cross(n, [1.0, 0, 0] if abs(n[0]) < 0.9 else [0, 1.0, 0])
        a /= np.linalg.norm(a)
        a2 = np.cross(n, a)
        effects.append(weight * (pair_effect(a, -o @ a2) + pair_effect(a2, o @ a)))
    return effects


def plateau_measurement(rs, rng):
    """Separable measurement with success 2/k from S_j >= 0 with sum_j R_j S_j = 0."""
    k = len(rs)

    def split(x):
        ls = x.reshape(k, 3, 3)
        ss = np.einsum("jab,jcb->jac", ls, ls)
        return ss / np.trace(ss.sum(axis=0))

    def residual(x):
        return np.einsum("jab,jbc->ac", rs, split(x)).ravel()

    best = None
    for _ in range(40):
        sol = optimize.least_squares(residual, rng.normal(size=9 * k), xtol=1e-15, ftol=1e-15,
                                     gtol=1e-15, max_nfev=4000)
        if best is None or sol.cost < best.cost:
            best = sol
        if best.cost < 1e-24:
            break
    ss = split(best.x)
    effects = []
    for r, s in zip(rs, ss):
        vals, vecs = np.linalg.eigh(s)
        effects.append(sum(2 * val * pair_effect(vec, -r @ vec)
                           for val, vec in zip(vals, vecs.T) if val > 0))
    return effects, float(np.linalg.norm(residual(best.x)))


def analyse(qs, rng, seed=0):
    """Both optima for one family, each with an explicit measurement."""
    k = len(qs)
    states = [state(q) for q in qs]
    rs = np.array([rotation(q) for q in qs])
    cs = np.array([correlation(s) for s in states])
    assert np.max(np.abs(cs + rs)) < 1e-12          # C_j = -R(q_j)
    gram = np.array([[s.conj() @ t for t in states] for s in states])
    assert np.max(np.abs(gram - qs @ qs.T)) < 1e-12  # overlaps are quaternion inner products

    cos_theta, kappa, signs, w = covering(qs)
    theta = float(np.arccos(cos_theta))
    if theta <= np.pi / 4:
        value = (1 + np.sin(2 * theta)) / k
        if theta > 1e-9:
            # Upper bound: every C_j lies within operator distance sin(2 Theta) of Lambda.
            centre = -np.cos(2 * theta) * rotation(kappa)
            worst = max(np.linalg.norm(c - centre, 2) for c in cs)
            assert worst <= np.sin(2 * theta) + 1e-9, (worst, np.sin(2 * theta))
            effects = cap_measurement(qs, kappa, signs, w)
            check_measurement(effects)
            assert abs(success(states, effects) - value) < 1e-9
        regime = "cap"
    else:
        value = 2 / k
        effects, residual = plateau_measurement(rs, rng)
        check_measurement(effects, tol=1e-7)
        assert abs(success(states, effects) - value) < 1e-7
        regime = "plateau"

    message, v = one_way(cs, seed)
    effects, radius = one_way_measurement(cs, v)
    if radius > 1e-9:
        check_measurement(effects)
        assert abs(success(states, effects) - message) < 1e-9
    assert message <= value + 1e-7
    return dict(k=k, theta=theta, regime=regime, separable=float(value), one_way=float(message))


# ---------- families ----------

def random_families():
    rng = np.random.default_rng(SEED)
    rows, worst_small = [], 0.0
    for k in (2, 3, 4, 5, 6):
        for spread in (0.25, 0.6, 3.0):
            for _ in range(4):
                qs = rng.normal(size=4) + spread * rng.normal(size=(k, 4))
                qs /= np.linalg.norm(qs, axis=1)[:, None]
                row = analyse(qs, rng)
                row["spread"] = spread
                if k <= 3:   # one message always suffices for at most three states
                    worst_small = max(worst_small, row["separable"] - row["one_way"])
                rows.append(row)
    assert worst_small < 1e-6, worst_small
    gaps = [r["separable"] - r["one_way"] for r in rows]
    return dict(families=len(rows),
                cap=sum(r["regime"] == "cap" for r in rows),
                plateau=sum(r["regime"] == "plateau" for r in rows),
                largest_gap_up_to_three_states=worst_small,
                families_with_gap_above_1e_6=sum(g > 1e-6 for g in gaps),
                largest_gap=max(gaps))


def two_states():
    rng = np.random.default_rng(SEED + 1)
    rows = []
    for gamma in (0.2, 0.7, 1.2, np.pi / 2):
        qs = np.array([[1.0, 0, 0, 0], [np.cos(gamma), np.sin(gamma), 0, 0]])
        row = analyse(qs, rng)
        helstrom = (1 + np.sin(gamma)) / 2
        assert abs(row["separable"] - helstrom) < 1e-9 and abs(row["one_way"] - helstrom) < 1e-7
        rows.append(dict(overlap=float(np.cos(gamma)), value=float(helstrom)))
    return rows


def bell_states():
    rng = np.random.default_rng(SEED + 2)
    basis = np.eye(4)
    three = analyse(basis[1:], rng)
    four = analyse(basis, rng)
    assert abs(three["separable"] - 2/3) < 1e-7 and abs(three["one_way"] - 2/3) < 1e-6
    assert abs(four["separable"] - 1/2) < 1e-7 and abs(four["one_way"] - 1/2) < 1e-6
    return dict(three=three, four=four)


def equal_overlap_triple():
    rng = np.random.default_rng(SEED + 3)
    rows = []
    angles = 2 * np.pi * np.arange(3) / 3
    for r in (0.0, 0.1, 0.25, 0.4, 0.6, 0.8, 0.95):
        alpha, beta = np.sqrt((1 + 2*r) / 3), np.sqrt(2 * (1 - r) / 3)
        qs = np.array([[0, beta*np.cos(t), beta*np.sin(t), alpha] for t in angles])
        assert np.max(np.abs(qs @ qs.T - (r + (1 - r) * np.eye(3)))) < 1e-12
        row = analyse(qs, rng)
        local = 2/3 if r <= 0.25 else (1 + 2 * alpha * beta) / 3
        assert abs(row["separable"] - local) < 1e-7 and abs(row["one_way"] - local) < 1e-6
        # Global optimum: square-root measurement and its dual certificate.
        s = np.array([state(q) for q in qs]).T
        vals, vecs = np.linalg.eigh(s.conj().T @ s)
        root = (vecs * np.sqrt(np.clip(vals, 0, None))) @ vecs.conj().T
        amplitude = (np.sqrt(1 + 2*r) + 2 * np.sqrt(1 - r)) / 3
        assert np.max(np.abs(np.diag(root) - amplitude)) < 1e-12
        vals, vecs = np.linalg.eigh(s @ s.conj().T)
        vals[vals < 1e-12] = 0.0     # the three states span a three-dimensional subspace
        dual = amplitude * (vecs * np.sqrt(vals)) @ vecs.conj().T / 3
        for j in range(3):
            assert min_eig(dual - np.outer(s[:, j], s[:, j].conj()) / 3) > -1e-10
        assert abs(np.trace(dual).real - amplitude**2) < 1e-12
        rows.append(dict(overlap=r, local=float(local), joint=float(amplitude**2)))
    return rows


def tetrahedral_family():
    rng = np.random.default_rng(SEED + 4)
    rows = []
    for theta in (0.2, np.pi / 8, 0.6, np.pi / 4):
        qs = np.array([np.concatenate(([np.cos(theta)], np.sin(theta) * t)) for t in TETRAHEDRON])
        row = analyse(qs, rng)
        assert abs(row["theta"] - theta) < 1e-9
        separable = (1 + np.sin(2 * theta)) / 4
        triple = np.sqrt(np.cos(theta)**2 + np.sin(theta)**2 / 9)   # cos(Theta_3)
        lower = (1 + 2 * triple * np.sqrt(1 - triple**2)) / 4
        assert abs(row["separable"] - separable) < 1e-9
        assert row["one_way"] < separable - 1e-4          # one message is strictly worse
        assert abs(row["one_way"] - lower) < 1e-6         # and ignores one of the four states
        rows.append(dict(theta=float(theta), separable=float(separable),
                         one_way=row["one_way"], three_state_value=float(lower)))
    return rows


def five_state_simplex():
    """Five equiangular maximally entangled states of Wei, Cobucci and Tavakoli."""
    unitaries = [I2] + [(I2 + 1j * np.sqrt(15) * spin(n)) / 4 for n in TETRAHEDRON]
    states = np.array([u.reshape(4) / np.sqrt(2) for u in unitaries])
    assert np.max(np.abs(abs(states.conj() @ states.T)**2
                         - (15 * np.eye(5) + np.ones((5, 5))) / 16)) < 1e-13
    assert np.max(np.abs(states.T @ states.conj() - 1.25 * I4)) < 1e-13   # tight frame
    worst = 0.0
    for axis in PAULI:
        basis = np.linalg.eigh(axis)[1]
        effects = np.zeros((5, 4, 4), dtype=complex)
        for a in basis.T:
            bob = np.sqrt(2) * np.einsum("a,jab->jb", a.conj(), states.reshape(5, 2, 2))
            povm = 0.4 * bob[:, :, None] * bob[:, None, :].conj()
            assert np.max(np.abs(povm.sum(axis=0) - I2)) < 1e-13
            for j in range(5):
                effects[j] += np.kron(np.outer(a, a.conj()), povm[j])
        check_measurement(list(effects))
        each = np.einsum("ji,jik,jk->j", states.conj(), effects, states).real
        worst = max(worst, float(np.max(np.abs(each - 0.4))))
    assert worst < 1e-13
    # The same family in the conventions of the manuscript.
    rng = np.random.default_rng(SEED + 5)
    qs = np.array([[1.0, 0, 0, 0]] + [np.concatenate(([0.25], np.sqrt(15) / 4 * t))
                                      for t in TETRAHEDRON])
    row = analyse(qs, rng)
    assert row["regime"] == "plateau" and abs(row["one_way"] - 0.4) < 1e-6
    return dict(one_bit_success=0.4, largest_deviation_per_state=worst,
                theta=row["theta"], published_local_value=0.3936)


if __name__ == "__main__":
    start = time.perf_counter()
    report = dict(status="passed", seed=SEED,
                  two_states=two_states(), bell_states=bell_states(),
                  equal_overlap_triple=equal_overlap_triple(),
                  tetrahedral_family=tetrahedral_family(),
                  five_state_simplex=five_state_simplex(),
                  random_families=random_families())
    report["elapsed_seconds"] = round(time.perf_counter() - start, 1)
    report["sha256"] = {"checks/verify_discrimination.py": hashlib.sha256(
        (CHECKS / "verify_discrimination.py").read_bytes()).hexdigest()}
    report["limits"] = ("Floating-point checks of explicit measurements and bound certificates "
                        "on finite families; not a formal proof or a certification of novelty.")
    DATA.mkdir(exist_ok=True)
    (DATA / "verification.json").write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")
    print(json.dumps({k: report[k] for k in ("status", "tetrahedral_family", "five_state_simplex",
                                             "random_families", "elapsed_seconds")}, indent=2))
