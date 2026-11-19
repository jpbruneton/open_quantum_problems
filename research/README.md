# Public research notes

This directory contains the canonical public source bundles for research notes published through Open Quantum Problems.

Each note lives at `entries/<slug>/` and contains:

- `README.md`: result, scope, file map, dependencies, and reproduction commands;
- `manuscript/`: the LaTeX source and compiled PDF;
- `checks/`: the smallest runnable Python verification bundle;
- `data/`: exact certificates and generated verification records.

All new exploratory research, intermediate calculations, and prior-art audits belong in the private `oqmresearch` repository. The `public/research/` tree is a deployment mirror for PDFs.

## Entries

- [Kirkwood–Dirac positivity on Z₃ × Z₃](entries/kd-z3x3/README.md)
- [Exact ensemble-steering defect under partial environmental access](entries/steering-localization/README.md)
- [Local discrimination of maximally entangled two-qubit states](entries/local-discrimination-entangled-qubits/README.md)
- [Real three-qubit states need at most three CZ gates](entries/real-three-qubit-states-three-cz/README.md)
- [Spectra of particle-reduced fermionic density operators](entries/fermionic-particle-reductions/README.md)
- [Exact PPT distillation from the Zhu–Wang qutrit support](entries/exact-ppt-distillation-qutrit/README.md)
- [The variance of a sum of independent quantum errors](entries/variance-sum-quantum-errors/README.md)
- [Momentum Rényi and Tsallis entropies behind hard walls: the threshold 1/(2(m+1))](entries/momentum-renyi-threshold/README.md)
- [A Mpemba mode invisible to every strict reduction](entries/locally-invisible-mpemba-mode/README.md)
- [Covariance data cannot bound the Schmidt number, even at fixed energy](entries/schmidt-number-separable-covariance/README.md)
- [How many incoherent Kraus operators?](entries/incoherent-kraus-operators/README.md)
- [Leakage threshold for the Margenau–Hill state of a post-selected system](entries/postselection-leakage-threshold/README.md)

Use [ENTRY_TEMPLATE.md](ENTRY_TEMPLATE.md) for every later public note.
