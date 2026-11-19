# A parity obstruction to depth-optimal syndrome extraction for lifted-product codes

Nguyen, Rimbach-Russ and Bosco (arXiv:2608.19917) schedule the controlled-NOT gates of syndrome-extraction circuits for lifted-product codes in `Δ` layers, the degree lower bound, when one factor has even degree, and in `Δ + 1` layers when both are odd; whether the extra layer is necessary was left open. The note proves that it is for the lifted product of two `1×1` protographs with entries of odd weights `a` and `b` over a finite group of odd order: no schedule satisfying the ordering (properness) conditions has depth `Δ = a + b`, so `Δ + 1` is optimal. The proof sums the properness conditions over all pairs of checks; by double counting the total is `|G|·a·b` for every depth-`Δ` schedule, an odd number, while each condition contributes an even one. A second argument excludes depth `Δ` for schedules uniform under the group, for groups of any order. The class includes the `[[90, 8, 10]]` bivariate bicycle code (group of order 45), for which the seven-layer circuit of Bravyi et al. is therefore optimal. Over the even-order group `Z_6` an exhaustive search finds a depth-`Δ` schedule for a `[[12, 4]]` code with `a = b = 1 + x + x²`, so the odd-order hypothesis cannot simply be dropped.

## Public files

- [`manuscript/syndrome-schedule-parity.tex`](manuscript/syndrome-schedule-parity.tex) — canonical LaTeX source.
- [`manuscript/syndrome-schedule-parity.pdf`](manuscript/syndrome-schedule-parity.pdf) — compiled manuscript.
- [`checks/check_syndrome_parity.py`](checks/check_syndrome_parity.py) — builds the lifted Tanner graphs over cyclic groups and checks the counting identity, the exclusion of uniform depth-`Δ` schedules, an exhaustive search over all schedules on small codes, the explicit three-band schedule of depth `Δ + 1`, the even-order certificate and the `[[90, 8]]` bivariate bicycle code.
- [`data/even_order_schedule.json`](data/even_order_schedule.json) — exact certificate: a proper depth-6 schedule for `a = b = 1 + x + x²` over `Z_6`, one layer per ancilla–qubit edge.
- [`data/verification.json`](data/verification.json) — generated verification record.

## Reproduce

Run from the repository root:

```text
python research/entries/syndrome-schedule-parity/checks/check_syndrome_parity.py
```

The checker requires NumPy and the Python standard library. It is deterministic, uses no network access, runs in about ten seconds and rewrites `data/verification.json`. Adding `--extended` also exhausts the search for `a = b = 1 + x + x²` over `Z_3` (about 3×10⁸ search nodes, roughly ten minutes).

## Scope

**Analytic proof.** The manuscript proves the counting identity for any CSS Tanner graph whose `X` ancillas and data qubits all have maximal degree, the main theorem for odd weights over groups of odd order, the exclusion of uniform depth-`Δ` schedules over every group, and the four-cycle argument for weight-two checks. The matching upper bound `Δ + 1` is the construction of Nguyen, Rimbach-Russ and Bosco.

**Computational verification.** On small cyclic groups the checker confirms the identity on random colourings, enumerates all uniform schedules, and runs an exhaustive backtracking search over all schedules; it also checks that the three-band schedule of depth `Δ + 1` is proper on the same codes. The depth-`Δ` schedule over `Z_6` is a computational result with an independently checked certificate.

**Bibliographic priority.** The obstruction was not found in the paper of Nguyen, Rimbach-Russ and Bosco, which leaves the optimality of `Δ + 1` as a numerical suggestion, nor in the other works cited. This does not certify priority.

**Open.** The minimal depth for groups of even order, where it depends on the code (in particular for the Gross code over a group of order 72), larger protographs, and circuit models with flag qubits or ancilla reuse.
