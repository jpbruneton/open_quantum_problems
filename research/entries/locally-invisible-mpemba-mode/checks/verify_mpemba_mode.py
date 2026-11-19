"""Numerical checks for the research note "A Mpemba mode invisible to every
strict reduction" (entry locally-invisible-mpemba-mode).

NumPy and SciPy only, no network, deterministic. For n = 2..5 qubits and several
values of the boundary rate eps, the script

  [1] assembles the Liouvillian
          L = sum_j D[X_j X_{j+1}] + eps D[X_1] + sum_j D[Z_j],
          D[U](rho) = U rho U^dag - rho,
      as a 4^n x 4^n matrix and diagonalizes it numerically;
  [2] compares the numerical spectrum, with multiplicities, to the exact rate
      formula of the manuscript (Pauli strings are eigenvectors), using
      rational arithmetic for the formula;
  [3] checks the closed form of the spectrum, eigenvalues -2(m + eps b) with
      multiplicity C(2n-1, m), and that 0 is a simple eigenvalue with eigenvector the identity, that
      the gap is 2 eps, that -2 eps is a simple eigenvalue with eigenvector
      Z_1...Z_n, and that every other eigenvalue is <= -2;
  [4] evolves rho_P = (I + alpha Z...Z)/2^n and rho_Q = (I + beta X_n)/2^n with
      the matrix exponential of L (n <= 4), checks the trace distances
      alpha e^{-2 eps t}/2 and beta e^{-2t}/2, locates the crossing numerically
      and compares it with log(beta/alpha)/(2 - 2 eps);
  [5] checks that every reduction of rho_P(t) to a strict subset of sites is
      maximally mixed, and that rho_P(t*) and rho_Q(t*) are isospectral at the
      crossing time.

Run from the repository root:
  python research/entries/locally-invisible-mpemba-mode/checks/verify_mpemba_mode.py
The script writes data/verification.json and exits non-zero on failure.
"""
import os
os.environ.setdefault("OPENBLAS_NUM_THREADS", "1")
os.environ.setdefault("OMP_NUM_THREADS", "1")
import hashlib
import itertools
import json
import sys
import time
from collections import Counter
from fractions import Fraction
from math import comb
from pathlib import Path

import numpy as np
from scipy.linalg import expm
from scipy.optimize import brentq

ENTRY = Path(__file__).resolve().parent.parent
DATA = ENTRY / "data"

PAULI = {
    "I": np.eye(2, dtype=complex),
    "X": np.array([[0, 1], [1, 0]], dtype=complex),
    "Y": np.array([[0, -1j], [1j, 0]], dtype=complex),
    "Z": np.array([[1, 0], [0, -1]], dtype=complex),
}
EPS_VALUES = (Fraction(1, 6), Fraction(1, 2), Fraction(9, 10))
FAILS = []
RESULTS = {}


def check(name, ok, **detail):
    RESULTS.setdefault(name, []).append(dict(passed=bool(ok), **detail))
    print(f"[{'PASS' if ok else 'FAIL'}] {name} {detail}")
    if not ok:
        FAILS.append(name)


def string_op(labels):
    out = np.array([[1.0 + 0j]])
    for c in labels:
        out = np.kron(out, PAULI[c])
    return out


def site_op(n, sites, letter):
    return string_op("".join(letter if k in sites else "I" for k in range(n)))


def jumps(n, eps):
    """List of (rate, U) for the Lindbladian of the manuscript."""
    out = [(1.0, site_op(n, (j, j + 1), "X")) for j in range(n - 1)]
    out.append((float(eps), site_op(n, (0,), "X")))
    out += [(1.0, site_op(n, (j,), "Z")) for j in range(n)]
    return out


def liouvillian(n, eps):
    """Matrix of L acting on row-major vec(rho): vec(U rho U^dag) = (U kron conj U) vec(rho)."""
    d = 2 ** n
    L = np.zeros((d * d, d * d), dtype=complex)
    for rate, U in jumps(n, eps):
        L += rate * (np.kron(U, U.conj()) - np.eye(d * d))
    return L


def apply_L(n, eps, rho):
    return sum(rate * (U @ rho @ U.conj().T - rho) for rate, U in jumps(n, eps))


def exact_rate(labels, eps):
    """Decay rate of a Pauli string from the manuscript's formula."""
    dephasing = 2 * sum(c in "XY" for c in labels)
    flips = [c in "YZ" for c in labels]  # anticommutes with X on that site
    edges = 2 * sum(a != b for a, b in zip(flips, flips[1:]))
    boundary = 2 * eps * flips[0]
    return dephasing + edges + boundary


def spectrum_checks(n, eps):
    labels_all = ["".join(t) for t in itertools.product("IXYZ", repeat=n)]
    rates = {lab: exact_rate(lab, eps) for lab in labels_all}
    # Pauli strings are eigenvectors with eigenvalue -rate
    worst_vec = 0.0
    for lab in labels_all:
        sigma = string_op(lab)
        worst_vec = max(worst_vec, np.abs(apply_L(n, eps, sigma) + float(rates[lab]) * sigma).max())
    check("Pauli strings are eigenvectors with the exact rates", worst_vec < 1e-12,
          n=n, eps=str(eps), max_residual=float(worst_vec))
    # numerical spectrum of the full Liouvillian against the predicted multiset
    ev = np.linalg.eigvals(liouvillian(n, eps))
    predicted = np.sort(np.array([-float(r) for r in rates.values()]))
    numeric = np.sort(ev.real)
    dev = float(max(np.abs(numeric - predicted).max(), np.abs(ev.imag).max()))
    check("numerical Liouvillian spectrum equals exact rate multiset", dev < 1e-9,
          n=n, eps=str(eps), dimension=4 ** n, max_deviation=dev)
    # structure of the slow part of the spectrum (exact, rational)
    zero = [lab for lab, r in rates.items() if r == 0]
    slow = [lab for lab, r in rates.items() if 0 < r < 2]
    others_min = min(r for lab, r in rates.items() if lab not in zero + slow)
    ok = zero == ["I" * n] and slow == ["Z" * n] and rates["Z" * n] == 2 * eps and others_min == 2
    check("unique stationary mode I, unique slowest mode Z...Z at rate 2 eps, rest >= 2", ok,
          n=n, eps=str(eps), gap=str(2 * eps), next_rate=str(others_min),
          rate_X_n=str(rates["I" * (n - 1) + "X"]))
    # closed form: eigenvalue -2(m + eps b) with multiplicity C(2n-1, m), 0<=m<=2n-1, b in {0,1}
    closed = Counter()
    for m in range(2 * n):
        for b in (0, 1):
            closed[-2 * (m + eps * b)] += comb(2 * n - 1, m)
    check("closed form: eigenvalues -2(m + eps b) with multiplicity C(2n-1, m)",
          closed == Counter(-r for r in rates.values()), n=n, eps=str(eps))
    distinct = sorted(Counter(-r for r in rates.values()).items(), reverse=True)
    return [[str(v), m] for v, m in distinct]


def partial_trace_keep(rho, n, keep):
    t = rho.reshape([2] * (2 * n))
    traced = [k for k in range(n) if k not in keep]
    # trace out sites in decreasing order to keep axis bookkeeping simple
    m = n
    for k in sorted(traced, reverse=True):
        t = np.trace(t, axis1=k, axis2=k + m)
        m -= 1
    d = 2 ** len(keep)
    return t.reshape(d, d)


def trace_distance(a, b):
    return 0.5 * np.abs(np.linalg.eigvalsh(a - b)).sum()


def crossing_checks(n, eps, alpha=0.3, beta=0.8):
    d = 2 ** n
    eps_f = float(eps)
    I = np.eye(d)
    P = string_op("Z" * n)
    Q = string_op("I" * (n - 1) + "X")
    rhoP0 = (I + alpha * P) / d
    rhoQ0 = (I + beta * Q) / d
    pos = min(np.linalg.eigvalsh(rhoP0).min(), np.linalg.eigvalsh(rhoQ0).min())
    check("initial states are positive", pos > 0, n=n, min_eigenvalue=float(pos))
    L = liouvillian(n, eps)

    def evolve(rho, t):
        return (expm(L * t) @ rho.reshape(-1)).reshape(d, d)

    def gap(t):
        return trace_distance(evolve(rhoQ0, t), I / d) - trace_distance(evolve(rhoP0, t), I / d)

    worst_law = 0.0
    for t in np.linspace(0, 3, 13):
        dP = trace_distance(evolve(rhoP0, t), I / d)
        dQ = trace_distance(evolve(rhoQ0, t), I / d)
        worst_law = max(worst_law, abs(dP - alpha * np.exp(-2 * eps_f * t) / 2),
                        abs(dQ - beta * np.exp(-2 * t) / 2))
    check("trace distances follow alpha e^{-2 eps t}/2 and beta e^{-2t}/2", worst_law < 1e-10,
          n=n, eps=str(eps), max_deviation=float(worst_law))
    t_formula = np.log(beta / alpha) / (2 - 2 * eps_f)
    t_num = brentq(gap, 0.0, 2 * t_formula, xtol=1e-14)
    ok = abs(t_num - t_formula) < 1e-9 and gap(0) > 0 and gap(1.5 * t_formula) < 0
    check("Mpemba crossing at log(beta/alpha)/(2-2eps)", ok, n=n, eps=str(eps),
          alpha=alpha, beta=beta, t_numeric=float(t_num), t_formula=float(t_formula))
    # isospectrality at the crossing
    sp = np.linalg.eigvalsh(evolve(rhoP0, t_formula))
    sq = np.linalg.eigvalsh(evolve(rhoQ0, t_formula))
    check("rho_P(t*) and rho_Q(t*) are isospectral", np.abs(sp - sq).max() < 1e-10,
          n=n, max_deviation=float(np.abs(sp - sq).max()))
    # strict reductions of rho_P(t) are maximally mixed; site n of rho_Q(t) is not
    worst_red = 0.0
    for t in (0.0, 0.5, float(t_formula), 2.0):
        rho = evolve(rhoP0, t)
        for size in range(1, n):
            for keep in itertools.combinations(range(n), size):
                red = partial_trace_keep(rho, n, keep)
                worst_red = max(worst_red, np.abs(red - np.eye(2 ** size) / 2 ** size).max())
    redQ = partial_trace_keep(rhoQ0, n, (n - 1,))
    check("every strict reduction of rho_P(t) is maximally mixed", worst_red < 1e-12,
          n=n, max_deviation=float(worst_red),
          rho_Q_site_n_bloch_x=float(2 * redQ[0, 1].real))


def main():
    start = time.perf_counter()
    spectra = {}
    for n in range(2, 6):
        for eps in EPS_VALUES:
            spectra[f"n={n},eps={eps}"] = spectrum_checks(n, eps)
    for n in range(2, 5):
        for eps in EPS_VALUES:
            crossing_checks(n, eps)
    record = {
        "entry": "locally-invisible-mpemba-mode",
        "status": "failed" if FAILS else "passed",
        "checks": RESULTS,
        "exact_spectra_eigenvalue_multiplicity": spectra,
        "elapsed_seconds": round(time.perf_counter() - start, 1),
        "sha256": {"checks/verify_mpemba_mode.py":
                   hashlib.sha256(Path(__file__).read_bytes()).hexdigest()},
        "limits": ("Floating-point diagonalization and time evolution for n <= 5 (spectrum) "
                   "and n <= 4 (dynamics); the proofs for all n are analytic and in the "
                   "manuscript. Not a certification of novelty."),
    }
    DATA.mkdir(exist_ok=True)
    (DATA / "verification.json").write_text(json.dumps(record, indent=2) + "\n", encoding="utf-8")
    print("FAILED:" if FAILS else "ALL CHECKS PASSED", sorted(set(FAILS)) if FAILS else "")
    sys.exit(1 if FAILS else 0)


if __name__ == "__main__":
    main()
