# Covers of bivariate bicycle codes: the distance conjecture for power-of-two covers

Symons, Rajput and Browne conjectured that every `h`-cover of a bivariate bicycle code satisfies `d ≤ d_h ≤ h d`, and proved parts of it for odd `h`. For covers whose degree is a power of two, the note uses the short exact sequence `0 → Q → Q̃ → Q → 0` of a double cover over F₂ to prove three statements: `k ≤ k_h ≤ h k`, with the kernel of the transfer on logical operators of dimension exactly `k − k₂/2` for a double cover; `d_h ≥ min(d, s)`, where `s` is the least weight of a nonzero stabiliser of the base, which proves the conjectured lower bound whenever `s ≥ d` (805 of the 836 inequivalent base codes with `k > 0` and `lm ≤ 27`, and the `[[72,12,6]]` code); and `d₂ ≤ 2d` when `k₂ = 2k`. The example `[[42,4,6]] → [[84,4,10]]` shows that the transfer alone cannot give the upper bound in general. Exact scans of about 2 × 10⁵ covers of small codes find no counterexample. The conjecture itself remains open.

## Public files

- [`manuscript/bivariate-bicycle-coverings.tex`](manuscript/bivariate-bicycle-coverings.tex) — canonical LaTeX source.
- [`manuscript/bivariate-bicycle-coverings.pdf`](manuscript/bivariate-bicycle-coverings.pdf) — compiled manuscript.
- [`checks/check_bb_covers.py`](checks/check_bb_covers.py) — validates the distance routines on six known codes, checks the chain maps, Theorems 1–3 on all 672 double covers of the 42 inequivalent bases with `lm ≤ 9`, the fourfold covers, the `[[42,4,6]] → [[84,4,10]]` example, a cover of `[[90,8,10]]`, the two covers of `[[108,8,10]]` that need an explicit operator, and `s = 6` for `[[72,12,6]]`.
- [`checks/bb_tools.py`](checks/bb_tools.py) — F₂ linear algebra, code construction, enumeration of bases up to symmetry, and three independent exact distance algorithms (full kernel enumeration, meet in the middle, anchored enumeration).
- [`data/witnesses_108_covers.json`](data/witnesses_108_covers.json) — exact certificate: supports of two logical operators (weights 10 and 12) for the two double covers of `[[108,8,10]]` not settled by the transfer.
- [`data/scan_summary.json`](data/scan_summary.json) — summary of the large exact scans run during preparation (counts of covers and violations); the scans themselves are not part of this bundle.
- [`data/verification.json`](data/verification.json) — generated verification record.

## Reproduce

Run from the repository root:

```text
python research/entries/bivariate-bicycle-coverings/checks/check_bb_covers.py
```

The checker requires NumPy only. It is deterministic, uses no network access, runs in about one minute, rewrites `data/verification.json`, and exits with a non-zero status if a check fails. An optional argument raises the largest `lm` of the double-cover sweep (for example `12`, several minutes).

## Scope

**Analytic proof.** The manuscript proves the exact sequence of a double cover, the bounds `k ≤ k_h ≤ h k` and `d_h ≥ min(d, s)` for degrees `h = 2^(a+b)`, the dimension of the kernel of the transfer for double covers, and `d₂ ≤ 2d` when `k₂ = 2k`. The proofs use only the equality of the ranks of `H_X` and `H_Z` and the chain maps of the source paper.

**Computational verification.** The checker confirms these statements and the conjectured bounds by exact F₂ computation on small codes. The scan record summarises a finite search (systematic bases up to `n = 54`, plus three named codes); it is evidence, not proof.

**Bibliographic priority.** The works citing the source were listed and the closest ones read; none proves or refutes the conjecture or contains these theorems. Two listed titles could not be located, and the wider literature on lifts of CSS codes was not surveyed, so priority is not certified.

**Open.** The upper bound for even `h` when `k₂ < 2k`, the lower bound when `s < d` (every base of distance above six), odd `h` with `k_h > k`, even `h` that are not powers of two, and the qudit version.
