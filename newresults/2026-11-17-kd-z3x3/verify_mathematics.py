"""Small, reproducible mathematical checks. Existing NumPy; no solver/model.

The Z2 x Z2 seed is from De Bievre--Langrenez--Radchenko,
arXiv:2501.12252v2, section 7.2. It is NOT a new counterexample.
Exact arithmetic certifies its positivity, KD positivity and witness gap.
Larger-group checks are numerical checks of identities proved in the notes.
"""
from fractions import Fraction as F
from functools import lru_cache
import hashlib
import itertools as it
import json
from pathlib import Path
import time

import numpy as np

ROOT = Path(__file__).resolve().parent


def det(a):
    n = len(a)
    total = F(0)
    for p in it.permutations(range(n)):
        sign = (-1) ** sum(p[i] > p[j] for i in range(n) for j in range(i + 1, n))
        value = F(sign)
        for i, j in enumerate(p):
            value *= a[i][j]
        total += value
    return total


def tr_product(a, b):
    return sum(a[i][j] * b[j][i] for i in range(len(a)) for j in range(len(a)))


def exact_seed():
    v = [[F(x, 20) for x in row] for row in
         [[1, -4, -4, 8], [-4, 9, 0, 4], [-4, 0, 9, 4], [8, 4, 4, 1]]]
    star = [[F(0) for j in range(4)] for i in range(4)]
    star[1][1] = F(1, 2)
    for vector in ([1, -1, 0, 0], [0, 0, 1, 1], [1, 0, -1, 0], [0, 1, 0, 1]):
        for i in range(4):
            for j in range(4):
                star[i][j] += F(vector[i] * vector[j], 16)
    lam = F(1, 100)
    rho = [[(1 - lam) * star[i][j] + lam * v[i][j] for j in range(4)] for i in range(4)]
    h = [[1, 1, 1, 1], [1, -1, 1, -1], [1, 1, -1, -1], [1, -1, -1, 1]]
    q = [[F(h[i][j], 4) * sum(rho[i][k] * h[k][j] for k in range(4)) for j in range(4)] for i in range(4)]
    minors = [det([row[:n] for row in rho[:n]]) for n in range(1, 5)]
    assert all(x > 0 for x in minors)
    assert sum(rho[i][i] for i in range(4)) == 1
    assert min(map(min, q)) >= 0
    pure = pure_vectors((2, 2))
    values = []
    for psi in pure:
        p = np.outer(psi, psi.conj())
        assert np.max(np.abs(p.imag)) < 1e-14
        rational = [[F(float(p[i, j].real)).limit_denominator(1000) for j in range(4)] for i in range(4)]
        values.append(tr_product(rational, v))
    maximum = max(values)
    value = tr_product(rho, v)
    assert len(pure) == 20 and maximum == F(9, 20)
    margin = value - maximum
    assert margin == F(3, 500)
    witness = [[(maximum if i == j else F(0)) - v[i][j] for j in range(4)] for i in range(4)]
    norm_bound = max(sum(abs(x) for x in row) for row in witness)
    assert norm_bound == F(6, 5)
    assert margin / norm_bound == F(1, 200)
    result = {"arithmetic": "exact fractions", "source": "2501.12252v2 section 7.2",
              "lambda": str(lam), "leading_principal_minors": list(map(str, minors)),
              "minimum_KD_entry": str(min(map(min, q))), "pure_KD_states_enumerated": len(pure),
              "free_witness_maximum": str(maximum), "state_witness_value": str(value),
              "witness_margin": str(margin), "trace_norm_distance_lower_bound": str(margin / norm_bound),
              "claim": "Reproduction and exact certification of an existing seed, not a novelty claim"}
    return np.array(rho, dtype=float), np.array(v, dtype=float), result


@lru_cache(None)
def elements(mods):
    return tuple(it.product(*(range(n) for n in mods)))


def add(a, b, mods):
    return tuple((x + y) % n for x, y, n in zip(a, b, mods))


@lru_cache(None)
def subgroups(mods):
    elems = elements(mods)
    zero = elems[0]
    groups, seen = [frozenset((zero,))], {frozenset((zero,))}
    for group in groups:
        for g in elems:
            if g in group:
                continue
            cyclic, point = {zero}, g
            while point != zero:
                cyclic.add(point)
                point = add(point, g, mods)
            new = frozenset(add(h, c, mods) for h in group for c in cyclic)
            if new not in seen:
                seen.add(new)
                groups.append(new)
    return tuple(groups)


@lru_cache(None)
def fourier(mods):
    elems = elements(mods)
    return np.array([[np.exp(2j * np.pi * sum(x * y / n for x, y, n in zip(g, chi, mods)))
                      for chi in elems] for g in elems]) / np.sqrt(len(elems))


def kd(rho, mods):
    u = fourier(mods)
    return u.conj() * (rho @ u)


@lru_cache(None)
def pure_vectors(mods):
    elems = elements(mods)
    idx = {g: i for i, g in enumerate(elems)}
    chars = fourier(mods) * np.sqrt(len(elems))
    unique = {}
    for h in subgroups(mods):
        covered = set()
        for g in elems:
            if g in covered:
                continue
            coset = {add(g, x, mods) for x in h}
            covered.update(coset)
            for ci in range(len(elems)):
                v = np.zeros(len(elems), dtype=complex)
                for x in coset:
                    v[idx[x]] = chars[idx[x], ci] / np.sqrt(len(h))
                first = next(x for x in v if abs(x) > 1e-10)
                v *= abs(first) / first
                key = tuple((round(x.real, 11), round(x.imag, 11)) for x in v)
                unique[key] = v
    return tuple(unique.values())


def check_lift(mods, rho, witness, quotient=False):
    elems, small = elements(mods), elements((2, 2))
    e = np.zeros((len(elems), 4), dtype=complex)
    if quotient:
        index_small = {g: i for i, g in enumerate(small)}
        for i, g in enumerate(elems):
            e[i, index_small[(g[0] % 2, g[1] % 2)]] = 1 / np.sqrt(len(elems) / 4)
    else:
        indices = {g: i for i, g in enumerate(elems)}
        for j, (a, b) in enumerate(small):
            g = (a * (mods[0] // 2), b * (mods[1] // 2)) + (0,) * (len(mods) - 2)
            e[indices[g], j] = 1
    assert np.max(np.abs(e.conj().T @ e - np.eye(4))) < 1e-12
    lifted = e @ rho @ e.conj().T
    q = kd(lifted, mods)
    assert np.min(q.real) >= -1e-12 and np.max(np.abs(q.imag)) < 1e-12
    assert np.min(np.linalg.eigvalsh(lifted)) >= -1e-12
    reset = np.diag([1., 0., 0., 0.])
    max_compressed_imag = 0
    min_compressed_KD = 1
    alpha = 9 / 20
    lift_witness = e @ witness @ e.conj().T + alpha * (np.eye(len(elems)) - e @ e.conj().T)
    max_free_witness = -1
    for psi in pure_vectors(mods):
        phi = e.conj().T @ psi
        prob = float(np.vdot(phi, phi).real)
        compressed = np.outer(phi, phi.conj())
        free_output = compressed + (1 - prob) * reset
        q_small = kd(free_output, (2, 2))
        min_compressed_KD = min(min_compressed_KD, float(np.min(q_small.real)))
        max_compressed_imag = max(max_compressed_imag, float(np.max(np.abs(q_small.imag))))
        assert np.min(q_small.real) >= -1e-12 and np.max(np.abs(q_small.imag)) < 1e-12
        if prob > 1e-12:
            pure_q = kd(compressed / prob, (2, 2))
            assert np.min(pure_q.real) >= -1e-12 and np.max(np.abs(pure_q.imag)) < 1e-12
        max_free_witness = max(max_free_witness, float(np.vdot(psi, lift_witness @ psi).real))
    recovered = e.conj().T @ lifted @ e + (1 - np.trace(e.conj().T @ lifted @ e).real) * reset
    error = float(np.max(np.abs(recovered - rho)))
    assert error < 1e-12 and max_free_witness <= alpha + 1e-12
    lifted_value = float(np.trace(lifted @ lift_witness).real)
    assert lifted_value - alpha >= 3 / 500 - 1e-12
    return {"group": list(mods), "map": "quotient-uniform-lift" if quotient else "subgroup-zero-extension",
            "dimension": len(elems), "all_pure_KD_inputs_checked": len(pure_vectors(mods)),
            "min_KD": float(np.min(q.real)), "max_imag_KD": float(np.max(np.abs(q.imag))),
            "retraction_error": error, "free_witness_maximum": max_free_witness,
            "lifted_witness_value": lifted_value, "arithmetic": "floating point identity checks, tolerance 1e-12"}


def cnot_distortion():
    results = []
    for n in range(2, 11):
        def forward(x):
            for i in range(n - 1):
                if (x >> i) & 1:
                    x ^= 1 << (i + 1)
            return x
        def backward(x):
            for i in reversed(range(n - 1)):
                if (x >> i) & 1:
                    x ^= 1 << (i + 1)
            return x
        lf = li = 0
        for x in range(1 << n):
            assert backward(forward(x)) == x
            for bit in range(n):
                lf = max(lf, (forward(x) ^ forward(x ^ (1 << bit))).bit_count())
                li = max(li, (backward(x) ^ backward(x ^ (1 << bit))).bit_count())
        assert lf == n and li == 2
        results.append({"qubits": n, "forward_Hamming_Lipschitz": lf, "inverse_Hamming_Lipschitz": li,
                        "arithmetic": "exact exhaustive edge enumeration"})
    return results


def gaussian_obstruction():
    eye = np.eye(16)
    ghz = np.zeros(16)
    ghz[0] = ghz[15] = 1 / np.sqrt(2)
    pure = np.outer(ghz, ghz)
    i2, x, y, z = np.eye(2), np.array([[0, 1], [1, 0]]), np.array([[0, -1j], [1j, 0]]), np.diag([1, -1])
    majoranas = []
    for j in range(4):
        for op in (x, y):
            value = np.array([[1]], complex)
            for k in range(4):
                value = np.kron(value, z if k < j else op if k == j else i2)
            majoranas.append(value)
    max_covariance = 0
    results = []
    for p in (0., 1/20, 1/9, 1/5, 1/2, 1.):
        a, b = (1 - p) / 16, p / 2
        rho = (1 - p) * eye / 16 + p * pure
        cov = np.array([[np.trace(rho @ (1j * (u @ v - v @ u) / 2)).real for v in majoranas] for u in majoranas])
        max_covariance = max(max_covariance, float(np.max(np.abs(cov))))
        assert np.max(np.abs(cov)) < 1e-12
        sigma = rho.copy()
        sigma[0, 15] = sigma[15, 0] = min(a, b)
        # Explicit product-state decomposition in each party's even-parity subspace.
        decomposition = np.zeros((16, 16), complex)
        c = min(a, b)
        for phase in (0, np.pi / 2, np.pi, 3 * np.pi / 2):
            va, vb = np.zeros(4, complex), np.zeros(4, complex)
            va[0], va[3] = 1 / np.sqrt(2), np.exp(1j * phase) / np.sqrt(2)
            vb[0], vb[3] = 1 / np.sqrt(2), np.exp(-1j * phase) / np.sqrt(2)
            product = np.kron(va, vb)
            decomposition += c * np.outer(product, product.conj())
        remainder = np.diag(sigma - decomposition).real
        assert np.min(remainder) >= -1e-12
        decomposition += np.diag(remainder)
        assert np.max(np.abs(decomposition - sigma)) < 1e-12
        predicted = max(0., (9 * p - 1) / 8)
        distance = float(np.sum(np.abs(np.linalg.eigvalsh(rho - sigma))))
        # W = (antisymmetric projector)^{T_B} on local even 2x2 subspaces.
        w = np.zeros((16, 16))
        w[3, 3] = w[12, 12] = .5
        w[0, 15] = w[15, 0] = -.5
        lower = max(0., -2 * float(np.trace(rho @ w).real))
        assert abs(distance - predicted) < 1e-12 and abs(lower - predicted) < 1e-12
        results.append({"p": p, "exact_trace_norm_distance_formula": predicted,
                        "verified_attaining_separable_distance": distance,
                        "witness_lower_bound": lower})
    return {"modes": 4, "bipartition": "2 modes : 2 modes, local even-parity encoded qubits",
            "covariance_max_error": max_covariance, "formula": "max(0,(9*p-1)/8)", "points": results,
            "claim": "Explicit diagnostic counterexample; not asserted historically new"}


def main():
    started = time.monotonic()
    rho, witness, seed = exact_seed()
    lifts = [check_lift(mods, rho, witness, quotient)
             for mods in ((2, 2, 2), (4, 2), (4, 4), (2, 2, 2, 2)) for quotient in (False, True)]
    result = {"seed": seed, "KD_lifting_checks": lifts, "CNOT": cnot_distortion(),
              "nonGaussian_covariance_obstruction": gaussian_obstruction(),
              "seconds": round(time.monotonic() - started, 3),
              "script_sha256": hashlib.sha256(Path(__file__).read_bytes()).hexdigest(),
              "scope": "Exact seed and finite identities; general lifting results require the written proof. No novelty certification."}
    (ROOT / "mathematical-checks.json").write_text(json.dumps(result, indent=2), encoding="utf-8")
    print(json.dumps({"exact_seed": seed, "lifting_cases": len(lifts),
                      "pure_inputs_checked": sum(x["all_pure_KD_inputs_checked"] for x in lifts),
                      "CNOT_cases": len(result["CNOT"]), "GHZ_points": 6,
                      "seconds": result["seconds"]}, indent=2))


if __name__ == "__main__":
    main()
