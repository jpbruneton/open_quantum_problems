"""Parameters of the d = 5 certificate: F = sum_m THETA[m] prod_i c_{k_i}, target VB, lift degree NLIFT."""
from fractions import Fraction as Fr
NLIFT = 18
VB = Fr(20447, 2000)
THETA = {
    (): Fr(4828809, 1048576),
    (2,): Fr(-8834707, 524288),
    (3,): Fr(2624211, 65536),
    (4,): Fr(-3085713, 65536),
    (2, 2): Fr(-3232189, 524288),
    (5,): Fr(15855625, 1048576),
    (3, 2): Fr(5416695, 524288),
}
ETA = Fr(1, 2000)
