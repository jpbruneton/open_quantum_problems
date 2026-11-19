# How many incoherent Kraus operators? A generic lower bound and thirteen for the qutrit

In the resource theory of coherence, incoherent operations are channels that can be written with Kraus operators each having at most one non-zero entry per column. The note recasts the minimal number of such operators, the incoherent length, as a decomposition of the Choi matrix into positive blocks supported on cliques of a complete multipartite graph, a graph-theoretic restatement of the classification by type of Streltsov, Rana, Boes and Eisert (PRL 119, 140402, 2017). For a qubit it re-derives, by a fixed-point argument on a four-cycle, the value four first proved by Rana and Lewenstein (J. Phys. A 51, 414002, 2018) and proved again by Qiao et al. (EPL 129, 60006, 2020). In dimension `d` it proves that a generic incoherent completely positive map needs at least `⌈d²(d²−d+1)/(2d−1)⌉` incoherent Kraus operators (4, 13, 30 for d = 2, 3, 4; about d³/2). For the qutrit, an exact integer rank certificate shows that thirteen operators of fixed types cover a non-empty open set of incoherent completely positive maps, so the bound 13 is attained there, and also a non-empty open set of trace-preserving incoherent operations.

## Public files

- [`manuscript/incoherent-kraus-operators.tex`](manuscript/incoherent-kraus-operators.tex) — canonical LaTeX source.
- [`manuscript/incoherent-kraus-operators.pdf`](manuscript/incoherent-kraus-operators.pdf) — compiled manuscript.
- [`checks/verify_incoherent_kraus.py`](checks/verify_incoherent_kraus.py) — rebuilds four incoherent Kraus operators for 4000 random qubit maps; tabulates the lower bound and compares parametrisation ranks with the dimension count; checks the qutrit certificate exactly (diagonal `Σ K†K`, Jacobian rank 63 and trace-map rank 9 modulo 2³¹ − 1).
- [`data/qutrit_certificate.json`](data/qutrit_certificate.json) — exact input certificate: thirteen types and a Gaussian-integer coefficient point.
- [`data/verification.json`](data/verification.json) — generated verification record.

## Reproduce

Run from the repository root:

```text
python research/entries/incoherent-kraus-operators/checks/verify_incoherent_kraus.py
```

The checker requires NumPy only. It uses a fixed seed and no network access, runs in a few seconds, reads `data/qutrit_certificate.json` and rewrites `data/verification.json`.

## Scope

**Analytic proof.** The clique formulation, the qubit theorem (the theorem of Rana and Lewenstein, re-proved), the generic lower bound for incoherent completely positive maps in every dimension, and the two qutrit theorems, the latter resting on an exact rank certificate.

**Computational verification.** The qutrit ranks are exact integer computations modulo a prime. The qubit reconstruction and the random-type rank comparisons are floating-point checks.

**Bibliographic priority.** The qubit value four is due to Rana and Lewenstein (2018), after the bound five of Streltsov, Rana, Boes and Eisert (2017); Qiao et al. (2020) gave a second proof and the qutrit upper bound 32. Rana and Lewenstein also exhibited individual operations whose incoherent length exceeds the Choi rank, for a qubit and for a strictly incoherent qutrit operation. The clique formulation restates the Choi-matrix and type arguments of Streltsov et al. The new results are the generic lower bound `r_d`, which makes the gap generic from d = 3 on, and the qutrit results; they were not found in the documented search (works citing these three papers in OpenAlex as of 19 November 2026, and targeted searches), which does not establish priority.

**Open.** Whether generic trace-preserving incoherent operations also need `r_d` operators (conjectured; not proved even for d = 3), and the worst case over all qutrit incoherent operations, which is known only to lie between 9 and 32.
