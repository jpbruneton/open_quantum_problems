# Public research notes

This directory contains the canonical public source bundles for research notes published through Open Quantum Problems.

Each note lives at `entries/<slug>/` and contains:

- `README.md`: result, scope, file map, dependencies, and reproduction commands;
- `manuscript/`: the LaTeX source and compiled PDF;
- `checks/`: the smallest runnable Python verification bundle;
- `data/`: exact certificates and generated verification records.

All new exploratory research, intermediate calculations, and prior-art audits belong in the private `oqmresearch` repository. The `public/research/` tree is a deployment mirror for PDFs.

## Entries

- [An exact KD-positive state outside the pure-state hull for the Fourier pair on Z3 x Z3](entries/kd-z3x3/README.md)
- [Exact ensemble-steering defect under partial environmental access](entries/steering-localization/README.md)
- [Local discrimination of maximally entangled two-qubit states](entries/local-discrimination-entangled-qubits/README.md)

Use [ENTRY_TEMPLATE.md](ENTRY_TEMPLATE.md) for every later public note.
