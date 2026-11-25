# Literature update, 25 November 2026: external contribution on F18

This update records one external contribution. Before starting, `origin/main` was fetched; there were no open pull requests, and one open issue, [#21](https://github.com/jpbruneton/open_quantum_problems/issues/21), discussed below with the maintainer before any change.

## Status change

| ID | Before | After | Reason |
| --- | --- | --- | --- |
| F18 · No pure spin state has a non-negative SU(2) Wigner function | Open | **Claimed solved** | A full proof, with a uniform quantitative bound, was submitted in issue #21 as a GitHub manuscript (LaTeX and PDF). It is not on arXiv and not peer reviewed. |

**F18.** Issue #21 (opened 25 November 2026 by `HandsomeSteven666`, signed "Sent by dot.") links the repository [`HandsomeSteven666/spherical-wigner-negativity-for-all-pure-spin-states`](https://github.com/HandsomeSteven666/spherical-wigner-negativity-for-all-pure-spin-states/tree/75c19189c67319604e061f7f1afc7f37562a11d1). At commit `75c1918` it holds Xiuzhi Yang, *Spherical Wigner Negativity of Pure Spin States* (dated 24 November 2026), in English and Chinese, as LaTeX source and PDF. The English source was read in full, appendices included. The catalogue links the repository at that commit, so the link shows the version that was checked.

Theorem 1 is exactly the F18 statement, for every sign choice of the self-dual kernel. Its proof has two steps. Lemma 1 gives, for every pure state, a rotation $g$ with $\langle\psi|U_j(g)|\psi\rangle=0$. It is taken from Corollary 1 of Gichev, *A note on common zeroes of Laplace–Beltrami eigenfunctions*, Ann. Global Anal. Geom. 26 (2004), [arXiv:math/0511688](https://arxiv.org/abs/math/0511688) (v1 only, not withdrawn). That corollary states that every orbit of a compact connected irreducible group on $V$, $\dim V>1$, meets every complex hyperplane. Appendix B also gives two self-contained proofs for SU(2). The first was checked step by step: on $\mathrm{SU}(2)\simeq S^3$, a zero-free matrix coefficient $f=re^{i\theta}$ satisfies $\mathcal Lf=-j(j+1)f$, hence $\sum_kX_k(r^2X_k\theta)=0$. Integration by parts makes $\theta$ constant, which contradicts $\int f\,d\nu=0$. The theorem then follows as in Davis, Hennigar, Mann and Ghose for coherent states. If $W_\psi\ge0$, then $W_{U(g)\psi}\ge0$, and traciality gives $\int W_\psi W_{U(g)\psi}\,d\mu=0$. Both are polynomials of integral one, so their product is positive on an open set, which is a contradiction.

Theorem 2 gives $\delta_j(\psi)\ge\frac{\sqrt{2j+1}}4e^{-4(1+e^{-1})j}$ for the negative volume. Lemma 3, the logarithmic mean bound along pairs of meridians, and the Jensen and positive-part estimates were each rederived. The $j=\tfrac12$ values in the manuscript ($\tfrac1{\sqrt3}-\tfrac12\approx0.0774$ exact, bound $\approx0.0229$) were recomputed.

A numerical check covered 30 random pure states for each $j\in\{\tfrac12,1,\dots,\tfrac52,3,4,5\}$. Each had a rotation with $|\langle\psi|U(g)\psi\rangle|^2<10^{-11}$, and each had a negative grid minimum of $W_\psi$.

No antecedent was found. A web search and a search of `the-omega-institute/trureturing` issues and pull requests found nothing, for arXiv:2609.07242, 2206.00195 and 2008.10167 or by keywords. The manuscript discloses ChatGPT assistance, and this is recorded in `provenance`. The entry has no Lean badge.

The private research workspace held a computer-assisted proof of F18 for $j\le13/2$. This result supersedes it, so that note will not be published.
