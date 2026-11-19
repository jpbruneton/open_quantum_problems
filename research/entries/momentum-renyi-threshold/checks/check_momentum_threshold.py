#!/usr/bin/env python3
"""Verification for the research note "Momentum Renyi and Tsallis entropies behind hard
walls: the threshold 1/(2(m+1))" (entry momentum-renyi-threshold).

Statement tested: if the wave function psi (extended by zero outside its
interval) has its first jump in the derivative of order m, with jumps J_k at the
points x_k, then

    (i p)^(m+1) sqrt(2 pi) phi(p) = G(p) + o(1),   G(p) = sum_k J_k exp(-i p x_k),

and  int gamma(p)^alpha dp  (gamma = |phi|^2) converges iff alpha > 1/(2(m+1)).

The script uses eigenfunctions of the well [0,1] with Robin walls
    psi'(0) = psi(0)/Lambda0,   -psi'(1) = psi(1)/Lambda1
(Lambda = 0: Dirichlet, Lambda = inf: Neumann, complex Lambda allowed), for which
phi is known in closed form, and checks numerically:
  1. the closed-form Fourier transform against direct quadrature;
  2. the asymptotic law above (error decays like 1/|p|);
  3. dyadic blocks B(P) = int_P^{2P} gamma^alpha dp: at alpha = alpha_TH they tend to
     the non-zero constant ln(2) (2 pi)^(-alpha_TH) Mean(|G|^(1/(m+1))) (divergence),
     the ratio B(2P)/B(P) tends to 2^(1-2 alpha (m+1)) on both sides of alpha_TH;
  4. a polynomial example with m = 2 (alpha_TH = 1/6);
  5. the attractive Robin wall on the half-line (closed form);
  6. the divergence rate (alpha - alpha_TH) int gamma^alpha -> (2 pi)^(-alpha_TH) Mean/(m+1)
     for the Neumann ground state (Hurwitz zeta representation, mpmath).

All of this is numerical evidence supporting the proof written in the note.
Deterministic. Writes data/verification.json next to this entry; exit status 1 on failure.
Run from the repository root:
    python research/entries/momentum-renyi-threshold/checks/check_momentum_threshold.py
"""
import cmath
import json
import math
import sys
import time
from pathlib import Path

import mpmath as mp
import numpy as np
from scipy import integrate, optimize

ENTRY = Path(__file__).resolve().parent.parent
OUT = ENTRY / "data" / "verification.json"
T0 = time.time()
INF = float("inf")
ok_all = True
RESULTS = []
TABLE = []


def report(name, ok, extra=""):
    global ok_all
    ok_all = ok_all and bool(ok)
    RESULTS.append({"check": name, "pass": bool(ok), "detail": extra.strip()})
    print(f"[{'PASS' if ok else 'FAIL'}] {name} {extra}")


# ---------------------------------------------------------------------------
# Robin well eigenfunctions on [0, 1]:  psi = cp e^{ikx} + cm e^{-ikx}
# ---------------------------------------------------------------------------

def left_coeffs(k, lam0):
    """psi = cos(kx) + s sin(kx) (psi(0) = 1) or sin(kx) for a Dirichlet wall."""
    if lam0 == 0:
        return (-0.5j, 0.5j)                       # sin(kx)
    s = 0.0 if lam0 == INF else 1.0 / (k * lam0)
    return ((1 - 1j * s) / 2, (1 + 1j * s) / 2)    # cos(kx) + s sin(kx)


def psi_and_derivs(k, lam0, x, order):
    cp, cm = left_coeffs(k, lam0)
    return cp * (1j * k) ** order * cmath.exp(1j * k * x) + cm * (-1j * k) ** order * cmath.exp(-1j * k * x)


def right_condition(k, lam0, lam1):
    v, d = psi_and_derivs(k, lam0, 1.0, 0), psi_and_derivs(k, lam0, 1.0, 1)
    if lam1 == 0:
        return v
    if lam1 == INF:
        return d
    return d + v / lam1


def eigen_k(lam0, lam1, index):
    """index-th positive root (real walls) or Newton from a real guess (complex walls)."""
    if isinstance(lam0, complex) or isinstance(lam1, complex):
        k = complex(index)
        for _ in range(60):
            h = 1e-6
            f = right_condition(k, lam0, lam1)
            df = (right_condition(k + h, lam0, lam1) - right_condition(k - h, lam0, lam1)) / (2 * h)
            k -= f / df
        assert abs(right_condition(k, lam0, lam1)) < 1e-10
        return k
    f = lambda t: right_condition(t, lam0, lam1).real
    grid = np.linspace(0.05, 60.0, 24000)
    vals = np.array([f(t) for t in grid])
    roots = [optimize.brentq(f, grid[i], grid[i + 1], xtol=1e-14)
             for i in range(len(grid) - 1) if vals[i] * vals[i + 1] < 0]
    return roots[index]


class State:
    def __init__(self, lam0, lam1, index, label):
        self.label = label
        self.k = eigen_k(lam0, lam1, index)
        self.lam0 = lam0
        cp, cm = left_coeffs(self.k, lam0)
        f = lambda x: abs(psi_and_derivs(self.k, lam0, x, 0)) ** 2
        norm = math.sqrt(integrate.quad(f, 0, 1, epsabs=1e-13, epsrel=1e-13)[0])
        self.cp, self.cm = cp / norm, cm / norm
        self.norm = norm
        # order of the first non-vanishing boundary derivative and the jumps
        v0, v1 = self.deriv(0.0, 0), self.deriv(1.0, 0)
        self.m = 0 if max(abs(v0), abs(v1)) > 1e-9 else 1
        self.A = self.deriv(0.0, self.m)          # jump at x = 0:  psi^(m)(0+) - 0
        self.B = self.deriv(1.0, self.m)          # jump at x = 1:  0 - psi^(m)(1-) = -B
        self.alpha_th = 1.0 / (2 * (self.m + 1))

    def deriv(self, x, order):
        return psi_and_derivs(self.k, self.lam0, x, order) / self.norm

    def psi(self, x):
        return self.cp * np.exp(1j * self.k * x) + self.cm * np.exp(-1j * self.k * x)

    def phi(self, p):
        """phi(p) = (2 pi)^(-1/2) int_0^1 psi(x) exp(-i p x) dx, closed form."""
        p = np.asarray(p, dtype=float)

        def E(u):                                   # int_0^1 exp(i u x) dx
            u = np.asarray(u, dtype=complex)
            small = np.abs(u) < 1e-6
            us = np.where(small, 1.0, u)
            return np.where(small, 1 + 0.5j * u, (np.exp(1j * us) - 1) / (1j * us))

        return (self.cp * E(self.k - p) + self.cm * E(-self.k - p)) / math.sqrt(2 * math.pi)

    def G(self, p):
        return self.A - self.B * np.exp(-1j * np.asarray(p, dtype=float))

    def mean_G_power(self, expo):
        """Mean value over a period of |G(p)|^expo."""
        th = (np.arange(200000) + 0.5) * (2 * math.pi / 200000)
        return float(np.mean(np.abs(self.A - self.B * np.exp(-1j * th)) ** expo))


def block(state, alpha, P, pts_per_unit=400):
    n = int(P * pts_per_unit) + 1
    p = np.linspace(P, 2 * P, n)
    y = np.abs(state.phi(p)) ** (2 * alpha)
    return float(integrate.simpson(y, x=p))


states = [
    State(INF, INF, 0, "Neumann-Neumann, 1st excited"),
    State(INF, INF, 2, "Neumann-Neumann, 3rd excited"),
    State(0, 0, 0, "Dirichlet-Dirichlet, ground"),
    State(0, 0, 3, "Dirichlet-Dirichlet, n=4"),
    State(0, INF, 1, "Dirichlet-Neumann, n=2"),
    State(0.5, 0.5, 0, "Robin(0.5)-Robin(0.5), 1st positive-energy state"),
    State(-0.3, 2.0, 1, "Robin(-0.3)-Robin(2.0)"),
    State(0, 0.7, 2, "Dirichlet-Robin(0.7)"),
    State(0.4 + 0.3j, INF, 4, "complex Robin(0.4+0.3i)-Neumann"),
]

print("state | k | m | alpha_TH | psi^(m)(0) | psi^(m)(1)")
for s in states:
    print(f"  {s.label}: k={s.k:.6f}, m={s.m}, alpha_TH={s.alpha_th}, "
          f"A={s.A:.4f}, B={s.B:.4f}")
exp_m = [0, 0, 1, 1, 0, 0, 0, 0, 0]
report("0. m = 1 iff both walls are Dirichlet, m = 0 otherwise", [s.m for s in states] == exp_m)

# 1. closed-form Fourier transform vs quadrature --------------------------------
err = 0.0
for s in states:
    for p in [-7.3, 0.4, 3.1, 25.0]:
        re = integrate.quad(lambda x: (s.psi(x) * np.exp(-1j * p * x)).real, 0, 1, epsabs=1e-13)[0]
        im = integrate.quad(lambda x: (s.psi(x) * np.exp(-1j * p * x)).imag, 0, 1, epsabs=1e-13)[0]
        err = max(err, abs((re + 1j * im) / math.sqrt(2 * math.pi) - s.phi(p)))
report("1. closed-form phi(p) agrees with quadrature", err < 1e-10, f"max error = {err:.1e}")

# 2. asymptotic law -------------------------------------------------------------
print("2. sup over a window of length 60 of | |p|^(m+1) sqrt(2pi) |phi(p)| - |G(p)| |, times P:")
ok = True
for s in states:
    row = []
    for P in [1e2, 1e3, 1e4]:
        worst = 0.0
        for sign in (+1, -1):
            p = sign * np.linspace(P, P + 60, 6001)
            lhs = np.abs(p) ** (s.m + 1) * math.sqrt(2 * math.pi) * np.abs(s.phi(p))
            worst = max(worst, float(np.max(np.abs(lhs - np.abs(s.G(p))))))
        row.append(worst * P)
    ok &= row[2] < 1.5 * row[0] + 1e-6 and row[2] / 1e4 < 2e-2
    print(f"    {s.label}: " + ", ".join(f"{v:.3f}" for v in row))
report("2. error of the leading term is O(1/|p|) (P * error stays bounded)", ok)

# 3. dyadic blocks --------------------------------------------------------------
print("3. dyadic blocks B(P) = int_P^2P gamma^alpha dp, P = 50 * 2^j, j = 0..7")
ok_const, ok_ratio = True, True
for s in states:
    a0 = s.alpha_th
    pred = math.log(2) * (2 * math.pi) ** (-a0) * s.mean_G_power(2 * a0)
    Ps = [50 * 2 ** j for j in range(8)]
    b0 = [block(s, a0, P) for P in Ps]
    rel = abs(b0[-1] / pred - 1)
    ok_const &= rel < 2e-3 and pred > 1e-3
    line = f"    {s.label}: B(6400) = {b0[-1]:.6f}, predicted constant = {pred:.6f}"
    for da in (+0.1, -0.1):
        a = a0 + da
        b = [block(s, a, P) for P in Ps[-2:]]
        ratio, expected = b[1] / b[0], 2 ** (1 - 2 * a * (s.m + 1))
        ok_ratio &= abs(ratio / expected - 1) < 5e-3
        line += f"; alpha_TH{da:+.1f}: ratio {ratio:.4f} (expected {expected:.4f})"
    TABLE.append({"state": s.label, "k": str(s.k), "m": s.m, "alpha_TH": a0,
                  "block_at_P_6400": b0[-1], "predicted_constant": pred})
    print(line)
report("3a. at alpha_TH every dyadic block tends to a non-zero constant (divergence)", ok_const)
report("3b. block ratios 2^(1 - 2 alpha (m+1)): < 1 above alpha_TH, > 1 below", ok_ratio)

# 4. polynomial example with m = 2 ----------------------------------------------
# psi = x^2 (1-x)^2 on [0,1]: psi, psi' vanish at both ends, psi''(0) = psi''(1) = 2.
mp.mp.dps = 40


def phi_poly(p):
    p = mp.mpf(p)
    e = mp.exp(-1j * p)
    I = [(1 - e) / (1j * p)]
    for n in range(1, 5):
        I.append((n * I[-1] - e) / (1j * p))
    return (I[2] - 2 * I[3] + I[4]) / mp.sqrt(2 * mp.pi)


worst = []
for P in [200, 2000, 20000]:
    w = 0
    for i in range(400):
        p = P + mp.mpf(i) * mp.mpf("0.0317")
        lhs = p ** 3 * mp.sqrt(2 * mp.pi) * abs(phi_poly(p))
        w = max(w, abs(lhs - abs(2 - 2 * mp.exp(-1j * p))))
    worst.append(float(w * P))
report("4. m = 2 example: |p|^3 sqrt(2pi)|phi| -> |2 - 2 e^{-ip}|, alpha_TH = 1/6",
       worst[2] < 1.5 * worst[0] and worst[2] / 20000 < 1e-2,
       "P*error = " + ", ".join(f"{v:.2f}" for v in worst))

# 5. attractive Robin wall on the half-line --------------------------------------
kappa = 1.7
gamma = lambda p: kappa / (math.pi * (kappa ** 2 + p ** 2))
alpha = 0.75
num = 2 * integrate.quad(lambda p: gamma(p) ** alpha, 0, INF, epsabs=1e-13, epsrel=1e-12)[0]
exact = (kappa / math.pi) ** alpha * kappa ** (1 - 2 * alpha) * math.sqrt(math.pi) \
    * math.gamma(alpha - 0.5) / math.gamma(alpha)
rate = [(a - 0.5) * (kappa / math.pi) ** a * kappa ** (1 - 2 * a) * math.sqrt(math.pi)
        * math.gamma(a - 0.5) / math.gamma(a) for a in (0.5 + 1e-3, 0.5 + 1e-5)]
pred = (2 * math.pi) ** -0.5 * math.sqrt(2 * kappa)
report("5. Robin wall psi = sqrt(2 kappa) exp(-kappa x): closed form of int gamma^alpha and "
       "pole at alpha = 1/2", abs(num / exact - 1) < 1e-9 and abs(rate[1] / pred - 1) < 1e-4,
       f"(alpha-1/2)*integral -> {rate[1]:.6f}, predicted {pred:.6f}")

# 6. divergence rate for the Neumann ground state psi = 1 on [0,1] ----------------
# gamma(p) = (2 pi)^(-1) (sin(p/2)/(p/2))^2 ;
# int gamma^alpha dp = 4 (2 pi)^(-alpha) pi^(-2 alpha) int_0^pi sin(t)^(2 alpha) zeta(2 alpha, t/pi) dt.
mp.mp.dps = 25


def neumann_ground_integral(alpha):
    alpha = mp.mpf(alpha)
    f = lambda t: mp.sin(t) ** (2 * alpha) * mp.zeta(2 * alpha, t / mp.pi)
    val = mp.quad(f, [0, mp.pi / 4, mp.pi / 2, mp.pi])
    return 4 * (2 * mp.pi) ** (-alpha) * mp.pi ** (-2 * alpha) * val


pred = float((2 * mp.pi) ** mp.mpf(-0.5) * 4 / mp.pi)
vals = [float((mp.mpf(e)) * neumann_ground_integral(mp.mpf("0.5") + mp.mpf(e)))
        for e in ("1e-2", "1e-3", "1e-4")]
report("6. Neumann ground state: (alpha - 1/2) int gamma^alpha -> (2pi)^(-1/2) * 4/pi",
       abs(vals[2] / pred - 1) < 2e-3 and abs(vals[2] - pred) < abs(vals[0] - pred),
       "values at alpha-1/2 = 1e-2, 1e-3, 1e-4: " + ", ".join(f"{v:.6f}" for v in vals)
       + f"; limit {pred:.6f}")

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps({
    "entry": "momentum-renyi-threshold",
    "checker": "checks/check_momentum_threshold.py",
    "all_pass": bool(ok_all),
    "runtime_seconds": round(time.time() - T0, 1),
    "checks": RESULTS,
    "wells": TABLE,
    "neumann_ground_rate": {"alpha_minus_half": [1e-2, 1e-3, 1e-4], "values": vals, "limit": pred},
}, indent=2) + "\n")
print()
print("ALL CHECKS PASSED" if ok_all else "SOME CHECKS FAILED")
print(f"wrote {OUT.relative_to(ENTRY.parent.parent.parent)}")
sys.exit(0 if ok_all else 1)
