"""Verification for the research note "Every real three-qubit state needs at most
three CZ gates" (entry real-three-qubit-states-three-cz).

Claim verified here: every real 3-qubit state is prepared from |000> by R_y
rotations and at most THREE CZ gates (topology CZ_01, CZ_12, CZ_01), and the
states reachable with at most two CZ gates are exactly those with
<Y_i Y_j> = 0 for some pair of qubits.

Run from the repository root:
    python research/entries/real-three-qubit-states-three-cz/checks/verify_three_cz.py
Deterministic (fixed seeds). Requires numpy and sympy. Writes data/verification.json.

Conventions: a state is a real array T[q0, q1, q2]; rot(a) is the plane
rotation [[cos a, -sin a], [sin a, cos a]] = R_y(2a).
"""
import itertools
import json
import platform
import sys
from pathlib import Path

import numpy as np
import sympy as sp

ENTRY = Path(__file__).resolve().parent.parent
RECORD = ENTRY / "data" / "verification.json"

TOL = 1e-9


def rot(a):
    return np.array([[np.cos(a), -np.sin(a)], [np.sin(a), np.cos(a)]])


def angle_of(mat):
    """Angle of a 2x2 rotation matrix."""
    return np.arctan2(mat[1, 0], mat[0, 0])


def apply1(T, q, mat):
    T = np.tensordot(mat, T, axes=([1], [q]))
    return np.moveaxis(T, 0, q)


def cz(T, i, j):
    T = T.copy()
    idx = [slice(None)] * 3
    idx[i] = 1
    idx[j] = 1
    T[tuple(idx)] *= -1
    return T


Y = np.array([[0, -1j], [1j, 0]])
Z = np.diag([1.0, -1.0])
X = np.array([[0.0, 1.0], [1.0, 0.0]])
I2 = np.eye(2)


def expval(T, ops):
    """<T| ops[0] x ops[1] x ops[2] |T> for a real state T (returns real part)."""
    S = T.astype(complex)
    for q, op in enumerate(ops):
        S = apply1(S, q, op)
    return float(np.real(np.vdot(T.astype(complex), S)))


def yy(T, i, j):
    ops = [I2, I2, I2]
    ops[i] = Y
    ops[j] = Y
    return expval(T, ops)


def hyperdet(T):
    """Delta of the paper; w_n with n = 4*b2 + 2*b1 + b0 read as |b2 b1 b0>.
    The value does not depend on the labelling of the qubits."""
    w = [T[n & 1, (n >> 1) & 1, (n >> 2) & 1] for n in range(8)]
    return ((w[0] * w[7] - w[1] * w[6] - w[2] * w[5] + w[3] * w[4]) ** 2
            - 4 * (w[1] * w[2] - w[0] * w[3]) * (w[5] * w[6] - w[4] * w[7]))


def synthesize(T):
    """Return a gate list preparing the real unit state T (up to numerical
    error) with CZ_01, CZ_12, CZ_01 and plane rotations.
    Gates: ('r', qubit, angle) or ('cz', i, j), in order of application."""
    # Step 1: rotate qubit 1 so that <Y_0 Z_1 Y_2> = 0.
    ez = expval(T, [Y, Z, Y])
    ex = expval(T, [Y, X, Y])
    alpha = 0.5 * np.arctan2(ez, ex)
    phi = apply1(T, 1, rot(alpha))
    assert abs(expval(phi, [Y, Z, Y])) < 1e-12
    # Step 2: undo the last CZ; psi2 has <Y_0 Y_2> = 0.
    psi2 = cz(phi, 0, 1)
    assert abs(yy(psi2, 0, 2)) < 1e-12
    # Step 3: rotate qubit 1 so that both slices along qubit 1 are singular.
    T0, T1 = psi2[:, 0, :], psi2[:, 1, :]
    d0, d1 = np.linalg.det(T0), np.linalg.det(T1)
    dmix = np.linalg.det(T0 + T1) - d0 - d1
    Q = np.array([[d0, dmix / 2], [dmix / 2, d1]])
    Q = Q - np.trace(Q) / 2 * np.eye(2)          # trace is zero up to rounding
    _, vecs = np.linalg.eigh(Q)
    u = (vecs[:, 0] + vecs[:, 1]) / np.sqrt(2)
    G = np.array([[u[0], u[1]], [-u[1], u[0]]])   # rotation, rows u and u-perp
    psi3 = apply1(psi2, 1, G)
    # Step 4: psi3 = a0 x |0> x c0 + a1 x |1> x c1.
    a, gam = [], []
    for k in range(2):
        S = psi3[:, k, :]
        U_, s_, Vt_ = np.linalg.svd(S)
        c = Vt_[0]
        a.append(S @ c)
        gam.append(np.arctan2(c[1], c[0]))
    rho = (gam[0] + gam[1]) / 2
    gamma = (gam[0] - gam[1]) / 2
    # Step 5: chi = a0 x |0> + a1 x |1> on qubits (0, 1), one CZ.
    M = np.stack(a, axis=1)                        # M[q0, q1]
    U_, s_, Vt_ = np.linalg.svd(M)
    s_ = s_.copy()
    if np.linalg.det(U_) < 0:
        U_[:, 1] *= -1
        s_[1] *= -1
    if np.linalg.det(Vt_) < 0:
        Vt_[1, :] *= -1
        s_[1] *= -1
    mu = np.arctan2(-s_[1], s_[0])
    gates = [
        ('r', 0, mu), ('r', 1, np.pi / 4),
        ('cz', 0, 1),
        ('r', 1, -np.pi / 4), ('r', 0, angle_of(U_)), ('r', 1, angle_of(Vt_.T)),
        ('r', 2, gamma),
        ('cz', 1, 2),
        ('r', 2, rho),
        ('r', 1, -angle_of(G)),
        ('cz', 0, 1),
        ('r', 1, -alpha),
    ]
    return gates


def run(gates):
    T = np.zeros((2, 2, 2))
    T[0, 0, 0] = 1.0
    for g in gates:
        if g[0] == 'r':
            T = apply1(T, g[1], rot(g[2]))
        else:
            T = cz(T, g[1], g[2])
    return T


def infidelity(T, gates):
    out = run(gates)
    return 1.0 - abs(float(np.sum(out * T)))


def circuit_state(pairs, params):
    """Generic circuit: rotations on the 3 qubits, then for each CZ a rotation
    on each of its two qubits."""
    T = np.zeros((2, 2, 2))
    T[0, 0, 0] = 1.0
    p = iter(params)
    for q in range(3):
        T = apply1(T, q, rot(next(p)))
    for (i, j) in pairs:
        T = cz(T, i, j)
        T = apply1(T, i, rot(next(p)))
        T = apply1(T, j, rot(next(p)))
    return T


def jac_rank(pairs, rng):
    n = 3 + 2 * len(pairs)
    x = rng.uniform(0, 2 * np.pi, n)
    h = 1e-6
    J = np.zeros((8, n))
    for k in range(n):
        e = np.zeros(n)
        e[k] = h
        J[:, k] = (circuit_state(pairs, x + e) - circuit_state(pairs, x - e)).ravel() / (2 * h)
    sv = np.linalg.svd(J, compute_uv=False)
    return int(np.sum(sv > 1e-6))


def exact_checks():
    """Exact arithmetic: the angle-pi/4 circuit for N, and the invariants of
    W and N quoted in the manuscript."""
    def srot(a):
        return sp.Matrix([[sp.cos(a), -sp.sin(a)], [sp.sin(a), sp.cos(a)]])
    I = sp.eye(2)

    def kron3(a, b, c):
        return sp.kronecker_product(a, sp.kronecker_product(b, c))

    def r(q, a):
        ops = [I, I, I]
        ops[q] = srot(a)
        return kron3(*ops)

    def czm(i, j):
        return sp.diag(*[(-1) ** (((n >> (2 - i)) & 1) * ((n >> (2 - j)) & 1)) for n in range(8)])
    pi = sp.pi
    gates = [r(0, pi / 4), r(1, pi / 4), czm(0, 1), r(1, -pi / 4), r(0, -3 * pi / 4),
             r(2, pi / 4), czm(1, 2), r(2, pi / 2), r(1, pi / 4), czm(0, 1)]
    v = sp.zeros(8, 1)
    v[0] = 1
    for g in gates:
        v = g * v
    v = sp.simplify(v)
    Nvec = sp.Matrix([1, 0, 0, -1, 0, -1, -1, 0]) / 2   # index 4*q0 + 2*q1 + q2
    circuit_ok = sp.simplify(v - Nvec) == sp.zeros(8, 1)
    Ys = sp.Matrix([[0, -sp.I], [sp.I, 0]])

    def E(vec, i, k):
        ops = [I, I, I]
        ops[i] = Ys
        ops[k] = Ys
        return sp.nsimplify(sp.simplify((vec.T * kron3(*ops) * vec)[0]))

    def hyper(vec):
        # w_n with n = 4*b2 + 2*b1 + b0, i.e. qubit 0 is the least significant bit
        w = [vec[4 * (n & 1) + 2 * ((n >> 1) & 1) + ((n >> 2) & 1)] for n in range(8)]
        return sp.simplify((w[0] * w[7] - w[1] * w[6] - w[2] * w[5] + w[3] * w[4]) ** 2
                           - 4 * (w[1] * w[2] - w[0] * w[3]) * (w[5] * w[6] - w[4] * w[7]))
    Wvec = sp.Matrix([0, 1, 1, 0, 1, 0, 0, 0]) / sp.sqrt(3)
    out = {
        'circuit_output_equals_N': bool(circuit_ok),
        'N_hyperdeterminant': str(hyper(Nvec)),
        'N_YY': [str(E(Nvec, 0, 1)), str(E(Nvec, 0, 2)), str(E(Nvec, 1, 2))],
        'W_hyperdeterminant': str(hyper(Wvec)),
        'W_YY': [str(E(Wvec, 0, 1)), str(E(Wvec, 0, 2)), str(E(Wvec, 1, 2))],
    }
    ok = (circuit_ok and out['N_hyperdeterminant'] == '-1/4'
          and out['N_YY'] == ['1', '1', '1'] and out['W_YY'] == ['2/3', '2/3', '2/3'])
    return ok, out


def main():
    ok = True
    rec = {}
    rng = np.random.default_rng(220103724)

    # --- 1. operator identities used in the proof ---------------------------
    def op3(ops):
        return np.kron(np.kron(ops[0], ops[1]), ops[2])
    CZ01 = np.diag([(-1.0) ** (b0 * b1) for b0 in (0, 1) for b1 in (0, 1) for _ in (0, 1)])
    lhs = CZ01 @ op3([Y, I2, Y]) @ CZ01
    e1 = np.max(np.abs(lhs - op3([Y, Z, Y])))
    CZ2 = np.diag([1.0, 1.0, 1.0, -1.0])
    e2 = np.max(np.abs(CZ2 @ np.kron(Y, Y) @ CZ2 - np.kron(X, X)))
    print(f"[1] CZ_01 Y_0Y_2 CZ_01 = Y_0 Z_1 Y_2 : max dev {e1:.1e};  CZ (YxY) CZ = XxX : max dev {e2:.1e}")
    ok &= e1 < 1e-14 and e2 < 1e-14
    rec['operator_identities_max_dev'] = [float(e1), float(e2)]

    # --- 2. explicit synthesis with three CZ on random real states ----------
    worst, nneg = 0.0, 0
    N = 20000
    for _ in range(N):
        T = rng.normal(size=(2, 2, 2))
        T /= np.linalg.norm(T)
        if hyperdet(T) < 0:
            nneg += 1
        gates = synthesize(T)
        assert sum(g[0] == 'cz' for g in gates) == 3
        worst = max(worst, infidelity(T, gates))
    print(f"[2] {N} Haar-random real states ({nneg} with Delta < 0): "
          f"worst infidelity of the 3-CZ circuit = {worst:.2e}")
    ok &= worst < TOL
    rec['random_states'] = {'count': N, 'with_negative_hyperdeterminant': nneg,
                            'worst_infidelity': worst}

    # --- 3. named and degenerate states -------------------------------------
    def ket(*amps):
        T = np.zeros((2, 2, 2))
        for bits, v in amps:
            T[int(bits[0]), int(bits[1]), int(bits[2])] = v
        return T / np.linalg.norm(T)
    named = {
        "|000>": ket(("000", 1)),
        "GHZ": ket(("000", 1), ("111", 1)),
        "W": ket(("001", 1), ("010", 1), ("100", 1)),
        "N = |000>-|011>-|101>-|110>": ket(("000", 1), ("011", -1), ("101", -1), ("110", -1)),
        "Bell x |0>": ket(("000", 1), ("110", 1)),
        "|0> x Bell": ket(("000", 1), ("011", 1)),
        "Bell(0,2) x |1>": ket(("010", 1), ("111", 1)),
        "|+++>": ket(*[(f"{n:03b}", 1) for n in range(8)]),
        "uniform with one sign": ket(*[(f"{n:03b}", -1 if n == 7 else 1) for n in range(8)]),
    }
    for name, T in named.items():
        gates = synthesize(T)
        inf = infidelity(T, gates)
        yys = [yy(T, 0, 1), yy(T, 0, 2), yy(T, 1, 2)]
        print(f"[3] {name:30s} Delta = {hyperdet(T):+.4f}  <YY> = "
              f"({yys[0]:+.3f}, {yys[1]:+.3f}, {yys[2]:+.3f})  infidelity = {inf:.1e}")
        ok &= inf < 1e-7
        rec.setdefault('named_states', {})[name] = {'hyperdeterminant': float(hyperdet(T)), 'YY': yys, 'infidelity': inf}
    # explicit circuit for the state N (Delta < 0)
    T = named["N = |000>-|011>-|101>-|110>"]
    print("    circuit for N (plane-rotation angles a, i.e. R_y(2a)):")
    for g in synthesize(T):
        print("      ", g[0], g[1], f"{g[2]:+.6f}" if g[0] == 'r' else g[2])
    outN = run(synthesize(T))
    print("    output amplitudes (|q0 q1 q2> = 000, 001, ..., 111):",
          np.array2string(outN.ravel(), precision=6, suppress_small=True))
    # the same circuit written with exact angles (multiples of pi/4)
    exact = [('r', 0, np.pi / 4), ('r', 1, np.pi / 4), ('cz', 0, 1),
             ('r', 1, -np.pi / 4), ('r', 0, -3 * np.pi / 4), ('r', 2, np.pi / 4), ('cz', 1, 2),
             ('r', 2, np.pi / 2), ('r', 1, np.pi / 4), ('cz', 0, 1)]
    dev = min(np.max(np.abs(run(exact) - T)), np.max(np.abs(run(exact) + T)))
    print(f"    exact-angle circuit for N: max amplitude deviation (up to global sign) = {dev:.1e}")
    ok &= dev < 1e-12
    rec['exact_angle_circuit_N_float_dev'] = float(dev)

    # --- 4. random states with Delta < 0 only -------------------------------
    worst, cnt = 0.0, 0
    while cnt < 5000:
        T = rng.normal(size=(2, 2, 2))
        T /= np.linalg.norm(T)
        if hyperdet(T) >= 0:
            continue
        cnt += 1
        worst = max(worst, infidelity(T, synthesize(T)))
    print(f"[4] 5000 random real states with Delta < 0: worst infidelity = {worst:.2e}")
    ok &= worst < TOL
    rec['negative_hyperdeterminant_states'] = {'count': 5000, 'worst_infidelity': worst}

    # --- 5. two CZ: <Y_i Y_j> vanishes for some pair -------------------------
    worst = 0.0
    pairs_all = [(0, 1), (0, 2), (1, 2)]
    for pr in itertools.product(pairs_all, repeat=2):
        for _ in range(200):
            T = circuit_state(pr, rng.uniform(0, 2 * np.pi, 7))
            m = min(abs(yy(T, 0, 1)), abs(yy(T, 0, 2)), abs(yy(T, 1, 2)))
            worst = max(worst, m)
    print(f"[5] all 9 two-CZ sequences, 200 random circuits each: "
          f"max over circuits of min_ij |<Y_iY_j>| = {worst:.2e}")
    ok &= worst < 1e-12
    rec['two_cz_circuits_max_min_YY'] = worst
    # converse: random states on the variety <Y_0Y_2>=0 need only two CZ
    worst = 0.0
    for _ in range(2000):
        T = rng.normal(size=(2, 2, 2))
        T /= np.linalg.norm(T)
        gates = synthesize(T)
        # state before the last CZ and its rotation: reachable with 2 CZ
        T2 = run(gates[:-2])
        assert sum(g[0] == 'cz' for g in gates[:-2]) == 2
        worst = max(worst, abs(yy(T2, 0, 2)))
    print(f"[5] states produced by the first two CZ of the synthesis: max |<Y_0Y_2>| = {worst:.2e}")
    ok &= worst < 1e-12
    rec['synthesis_two_cz_prefix_max_Y0Y2'] = worst
    w = named["W"]
    print(f"[5] W state: <Y_iY_j> = {yy(w, 0, 1):.6f}, {yy(w, 0, 2):.6f}, {yy(w, 1, 2):.6f} "
          f"(all nonzero: W needs exactly three CZ)")
    ok &= min(abs(yy(w, 0, 1)), abs(yy(w, 0, 2)), abs(yy(w, 1, 2))) > 0.6

    # --- 6. generic Jacobian ranks of the parameter-to-state map -------------
    seen = {}
    for pr in itertools.product(pairs_all, repeat=3):
        # canonical form under relabelling of qubits
        best = None
        for perm in itertools.permutations(range(3)):
            key = tuple(tuple(sorted((perm[i], perm[j]))) for (i, j) in pr)
            best = key if best is None or key < best else best
        r = jac_rank(pr, rng)
        seen.setdefault(best, set()).add(r)
    for key, ranks in sorted(seen.items()):
        print(f"[6] three-CZ topology {key}: generic Jacobian rank {sorted(ranks)} (dim of the real sphere: 7)")
    r2 = {jac_rank(pr, rng) for pr in [((0, 1), (1, 2)), ((0, 1), (0, 2)), ((0, 2), (1, 2))]}
    print(f"[6] two-CZ chain topologies: generic Jacobian rank {sorted(r2)} (hypersurface <Y_iY_k> = 0)")
    ok &= seen[((0, 1), (0, 2), (0, 1))] == {7} and r2 == {6}
    rec['jacobian_ranks_three_cz'] = {str(k): sorted(v) for k, v in sorted(seen.items())}
    rec['jacobian_ranks_two_cz_chains'] = sorted(r2)

    # --- 6b. sign of Delta is invariant under real orthogonal local gates ----
    worst = 0.0
    refl = np.diag([1.0, -1.0])
    for _ in range(500):
        T = rng.normal(size=(2, 2, 2))
        T /= np.linalg.norm(T)
        S = T
        for q in range(3):
            g = rot(rng.uniform(0, 2 * np.pi))
            if rng.random() < 0.5:
                g = g @ refl
            S = apply1(S, q, g)
        worst = max(worst, abs(hyperdet(S) - hyperdet(T)))
    print(f"[6b] Delta under random orthogonal local gates: max change {worst:.1e}")
    ok &= worst < 1e-12
    rec['hyperdeterminant_local_orthogonal_invariance_max_dev'] = worst

    # --- 6c. 4*Delta = 4 det rho_q - E_qa^2 - E_qb^2 (rebit monogamy) -------
    worst = 0.0
    for _ in range(500):
        T = rng.normal(size=(2, 2, 2))
        T /= np.linalg.norm(T)
        for q in range(3):
            M = np.moveaxis(T, q, 0).reshape(2, 4)
            a, b = [p for p in range(3) if p != q]
            rhs = 4 * np.linalg.det(M @ M.T) - yy(T, q, a) ** 2 - yy(T, q, b) ** 2
            worst = max(worst, abs(4 * hyperdet(T) - rhs))
    print(f"[6c] 4*Delta = 4 det rho_q - E_qa^2 - E_qb^2: max deviation {worst:.1e}")
    ok &= worst < 1e-12
    rec['rebit_three_tangle_identity_max_dev'] = worst

    # --- 7. exact (symbolic) checks ------------------------------------------
    exact_ok, exact_rec = exact_checks()
    print(f"[7] exact symbolic checks: {exact_rec}")
    ok &= exact_ok
    rec['exact'] = exact_rec

    print("RESULT:", "PASS" if ok else "FAIL")
    record = {
        'entry': 'real-three-qubit-states-three-cz',
        'checker': 'checks/verify_three_cz.py',
        'seed': 220103724,
        'python': platform.python_version(),
        'numpy': np.__version__,
        'sympy': sp.__version__,
        'result': 'PASS' if ok else 'FAIL',
        'checks': rec,
    }
    RECORD.parent.mkdir(parents=True, exist_ok=True)
    RECORD.write_text(json.dumps(record, indent=2, default=float) + "\n")
    print(f"record written to {RECORD.relative_to(ENTRY.parents[2])}")
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
