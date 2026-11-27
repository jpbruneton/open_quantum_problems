const r = String.raw;

export const NOV27_PROPOSALS = [
  {
    key: "PE5", cat: "entanglement", extends: ["E4"], horizon: "sharp",
    title: "Can two-way local measurements attain the separable bound for four tetrahedral states?",
    statement: r`Alice and Bob receive one of four equiprobable two-qubit states $(I\otimes U_j)|S\rangle$, where $|S\rangle=(|01\rangle-|10\rangle)/\sqrt2$. Let $t_j$ be the unit vectors of a regular tetrahedron, $\theta=\pi/8$, and $U_j=\cos\theta\,I-i\sin\theta\,(t_j\cdot\sigma)$ for the three Pauli matrices $\sigma$. The parties have local ancillas, no shared entanglement beyond the input, and may exchange classical messages in either direction.

Does the supremum of their probability of guessing $j$ over all finite-round protocols equal $(1+1/\sqrt2)/4$? A sequence approaching that value establishes equality. A strict separation requires an upper bound uniform in the number of rounds.`,
    why: r`The site's [local discrimination note](https://github.com/jpbruneton/open_quantum_problems/tree/main/research/entries/local-discrimination-entangled-qubits) gives the separable optimum $(1+\sin 2\theta)/4$. For this ensemble a single classical message falls strictly short. For families of at most three such states one message already attains the optimum. Four states therefore isolate the contribution of feedback.`,
    assessment: { verdict: "open-substantive", confidence: "medium", summary: r`The note explicitly leaves the two-way problem open. A successful protocol may implement any optimal measurement. Excluding a particular separable measurement, or optimizing a fixed number of rounds, leaves the supremum undecided.` },
  },
  {
    key: "PN6", cat: "nonlocality", extends: ["N19"], horizon: "sharp",
    title: "Can three copies be the first to attain the SLD precision bound?",
    statement: r`Consider a smooth finite-dimensional quantum statistical model of locally constant deficient rank, with at least two real parameters. Fix a point with positive definite symmetric logarithmic derivative (SLD) Fisher matrix $J$. For $n$ identical copies allow any joint measurement and a locally unbiased estimator at that point. Its covariance $V_n$ obeys $\operatorname{tr} V_n\ge\operatorname{tr}(J^{-1})/n$ with identity cost.

Is there such a model and point for which equality is attainable at $n=3$ and unattainable at both $n=1$ and $n=2$? A positive answer needs the three-copy measurement or an exact attainability certificate and the two smaller-copy obstructions for the same model.`,
    why: r`[N19](https://openquantumproblems.com/p/N19) records a three-parameter rank-three example in dimension ten with a single-copy obstruction and exact two-copy saturation. Full-rank models obey a gap-persistence theorem. This leaves a concrete question about the first copy number at deficient rank.`,
    caveat: "The threshold of three is proposed here. N19 records the authors’ two-copy example.",
    assessment: { verdict: "under-review", confidence: "medium", summary: r`The reported one-to-two-copy example already attains the bound at two copies and cannot witness this claim. An asymptotically efficient estimator also leaves exact three-copy attainability undecided. The 26 November review records the checks of the example used as the baseline.` },
  },
];
