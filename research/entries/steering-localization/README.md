# Exact ensemble-steering defect under partial environmental access

For a two-branch tripartite pure state, the note evaluates exactly the worst-case ensemble-preparation defect when measurement access is restricted to one part of the purifier. It also derives spatial bounds for increasing access and gives a gapped quasi-local parent model.

## Public files

- [`manuscript/steering-localization.tex`](manuscript/steering-localization.tex) — canonical LaTeX source.
- [`manuscript/steering-localization.pdf`](manuscript/steering-localization.pdf) — compiled manuscript.
- [`checks/verify51.py`](checks/verify51.py) — finite-dimensional checks of the partial-trace formulas, binary witnesses, rational cases, spatial tails, and parent-Hamiltonian spectra.
- [`data/verification51.json`](data/verification51.json) — generated verification record.

## Reproduce

Run from the repository root:

```text
python research/entries/steering-localization/checks/verify51.py
```

The checker requires NumPy. It uses no optimizer, GPU, or network access.

## Scope

The manuscript supplies the analytic proofs. The checker tests the finite matrix identities and representative exact or numerical cases; it is not a proof assistant formalization. Bibliographic priority is a separate question from these mathematical checks.
