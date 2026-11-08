# New open problems arising from the 2026 resolutions — proposal (8 November 2026)

This report proposes new entries for the catalogue. Unlike the dated literature
updates, it does not record progress on existing problems: it asks what the
recent claimed resolutions (OpenAI Math Release of 6 October, the November
follow-ups, the Yang–Mills announcement) and the recorded partial progress now
leave open, and formulates the sharpest successor questions we could verify.

Nothing in `app/data/` has been changed by this report. Candidates are written in
catalogue form (statement, horizon, baseline, references) so that accepted ones
can be pasted into `cat-*.js` with new IDs. Suggested ID ranges are indicated;
existing IDs are never reused.

Method. The 113 active entries were exported and read in full. Five parallel
literature sweeps (one per pair of categories) opened the resolving manuscripts
(OpenAI PDFs at commit `4eaee87`, their `lean/docs` scope notes and `CONTENTS.md`;
arXiv abstracts and HTML of the October–November 2026 follow-ups; KITP and ECCC
pages), extracted the authors' own "open questions" sections, and ran arXiv
export-API sweeps through 8 November 2026. "Verified" below means the page or PDF
was opened in this review; "unverified" means seen only in a listing, a snippet or
from memory. Author-declared AI use is quoted where seen; it is reported, not
assessed. Openness of a question is asserted only when the resolving papers
themselves state it or no contrary source was found; the residual uncertainty is
flagged per item.

Counts: 46 priority candidates (section 1, written in full), 24 secondary
candidates (section 2, one paragraph each), and 12 status findings on existing
entries that were discovered on the way (section 3).

---

## 1. Priority candidates

### 1.1 Spectral theory and many-body physics (suggested IDs M14–M20, B16–B21)

**P1. Band-interior delocalization in the 3D Anderson model** (extends M2) — sharp

Statement. For $H_\lambda=-\Delta+\lambda V_\omega$ on $\ell^2(\mathbb Z^3)$ with
i.i.d. potentials uniform on $[-1,1]$: for every $\delta>0$ there is
$\lambda(\delta)>0$ such that for all $0<\lambda<\lambda(\delta)$ the spectral
restriction of $H_\lambda$ to $(-6+\delta,\,6-\delta)$ is almost surely purely
absolutely continuous with nonzero weight. Minimal sub-target: nonzero a.c.
spectrum on an open interval containing $E=0$ for all sufficiently small
$\lambda$.

Why now. The claimed M2 resolution (OpenAI, *Absolutely Continuous Spectrum for
Weak-Disorder Anderson Models in Dimensions at Least Three*, 23 Sep 2026, verified
PDF) proves purely a.c. spectrum only on a fixed sliver adjacent to the lower band
edge: for $d=3$, $I_3=(-6+\varepsilon^2/2,-6+\varepsilon^2)$ with
$\varepsilon<1/100$ (width below $5\cdot10^{-5}$); for $d\ge4$,
$-2d+(1/200,1/100)$; the $d=3$ disorder threshold is existential. The
manuscript states it "does not locate the full mobility edge" and leaves
diffusion (Simon's Problem 3) separate. The physically expected statement, a.c.
spectrum throughout the band interior at weak disorder, has no rigorous result.
Distinct from the mobility-edge subproblem already recorded in M2.

Baseline. Jakšić–Last, arXiv:2610.11611 (Bethe lattice, shortened purity step;
verified); Jakšić–Last–Warzel, arXiv:2609.06987 (cyclicity criterion on
$\mathbb Z^d$, "usefulness remains to be explored"; verified); Erdős–Salmhofer–Yau,
weak-coupling diffusion on kinetic time scales (Acta Math. 2008; unverified);
Hislop–Kirsch–Krishna, arXiv:2401.07262 (a.c. implies weak dynamical
delocalization; listing).

**P2. Dynamical localization in the 2D Anderson model at every disorder** (extends M12) — sharp

Statement. For $H=-\Delta+V_\omega$ on $\ell^2(\mathbb Z^2)$, $V_\omega$ i.i.d.
uniform on $[-h,h]$, prove for every $h>0$ and compact $I$:
$\sup_t\mathbb E\sum_x(1+|x|)^p|\langle\delta_x,e^{-itH}\chi_I(H)\delta_0\rangle|^2<\infty$
for some $p>0$; strong form: exponential decay of the eigenfunction correlator
$\mathbb E\sup_{|f|\le1}|\langle\delta_x,f(H)\chi_I(H)\delta_0\rangle|\le Ce^{-c|x|}$.

Why now. The OpenAI 2D manuscript (*Pure-Point Spectrum for the Two-Dimensional
Anderson Model at Every Positive Disorder*, verified) proves pure point spectrum
and states explicitly: "We do not assert one probability-one event for all
disorder strengths, a bound uniform in energy, or a dynamical-localization
theorem"; eigenfunction decay is also not asserted. The Lean doc 261 formalizes
only the spectral set. Pure point spectrum via Simon–Wolff is compatible with
subdiffusive transport, so this is a separate theorem. M12's context already says
dynamical localization "should be recorded separately"; no entry exists.

Baseline. Aizenman–Molchanov and Germinet–Klein dynamical localization at large
disorder or band edges (classical, unverified); Ding–Smart (2D Bernoulli, edges;
in catalogue). No 2026 preprint found addressing the full-disorder-range
statement.

**P3. Haldane gap for the spin-2 chain** (extends M5) — sharp

Statement. For $H_L=\sum_{j=1}^L\vec S_j\cdot\vec S_{j+1}$ with spin-2 operators,
periodic boundary conditions and even $L$, prove
$\liminf_{L\to\infty,L\in2\mathbb N}(E_1(L)-E_0(L))>0$.

Why now. M5's context treats higher integer spin as "a related extension"; with
spin 1 claimed and favourably reviewed by Tasaki, spin 2 is the obvious next case
and a test of the method's reach. The purity bootstrap certifies from finite
thermal traces of twisted chains; the spin-2 correlation length
$\xi\approx49$ and gap $\Delta\approx0.085$ would require certificates on chains
of hundreds of spin-2 sites, far beyond exact trace enclosures. No 2026 preprint
attempts it (arXiv API sweep "Haldane gap", verified).

Baseline. Schollwöck–Jolicoeur, $\Delta_{S=2}=0.085(5)$, $\xi=49(1)$ (1995;
snippet); Nakano–Todoroki–Sakai, arXiv:1909.02178 (large-$S$ numerics; listing);
Grover, arXiv:2611.07400 (bootstrap extensions; "the key assumption is again a
Hermitian spatial transfer representation"; verified). AI disclosure (Grover):
extensive use of ChatGPT Astra and Codex; "AI developed much of the bootstrap
argument connecting finite PEPS norms to exponential decay of correlations."

**P4. Uniqueness of the infinite spin-1 chain ground state among all states, and the free-end spectrum** (extends M5) — sharp

Statement. (a) Prove that the infinite spin-1 antiferromagnetic Heisenberg chain
has a unique ground state on the quasi-local algebra in the operator-algebraic
sense ($\omega(A^*[H,A])\ge0$ for all local $A$), without assuming translation
invariance. (b) For the open chain without boundary field, prove a uniform gap
$E_4(L)-E_0(L)\ge c>0$ above a four-fold quasi-degenerate edge multiplet with
$E_3(L)-E_0(L)\le Ce^{-L/\xi}$.

Why now. Tasaki (arXiv:2610.34330v2, verified) proves uniqueness only among
translation-invariant ground states and writes that uniqueness among all
ground states "requires an additional argument"; for free ends he states the
expected four-fold quasi-degeneracy as an expectation. The OpenAI companion treats
only the boundary field $h=3/5$. For the AKLT chain both (a) and (b) are theorems
(Fannes–Nachtergaele–Werner; Kennedy), so this isolates exactly the
Heisenberg-versus-AKLT gap left by the new proofs. Grover's near-degeneracy
extension is the natural tool for (b) but uses exact symmetry sectors, not SPT
edge modes.

Baseline. Tasaki 2610.34330v2 (verified; AI disclosure: "ChatGPT Astra made
substantial contributions to developing the proofs"); OpenAI boundary-field
manuscript (verified); Kennedy, J. Phys.: Condens. Matter 2, 5737 (1990;
unverified).

**P5. Three-dimensional area law from a global spectral gap** (extends B1) — sharp

Statement. For finite induced subgraphs $\Lambda\subset\mathbb Z^3$, finite-range
Hamiltonians with bounded local dimension, range and strength, a unique ground
state and a full-system gap $\gamma$, prove $S(\rho_A)\le C(q,R,J,\gamma)|\partial A|$
for every $A\subset\Lambda$ with $C$ independent of $\Lambda$ and $A$.

Why now. The OpenAI theorem (*A two-dimensional area law from a global spectral
gap*, verified) is formulated for induced subgraphs of the square lattice and its
bookkeeping is two-dimensional. Kuwahara (arXiv:2610.15199, verified, §V) explains
why no mechanical generalization is available: "the worst-case AGSP rank–error
trade-off does not, by itself, contain enough information to prove a general
higher-dimensional von Neumann area law." A companion variant: the same bound for
every vector of a degenerate ground space satisfying local topological quantum
order. Note also that the 2D constant is non-explicit in $\gamma$ (secondary
candidate S1).

Baseline. OpenAI manuscript (verified); Kuwahara 2610.15199 (verified; AI
disclosure: "This project has made use of ChatGPT throughout its development");
Masanes 2009, Brandão–Cramer 2015 (unverified); Arad–Firanko–Jain degenerate
frustration-free case (unverified).

**P6. Bosonic Laughlin gap at $\nu=1/2$ on the sphere** (extends B14) — sharp

Statement. For $N$ bosons in the lowest Landau level on Haldane's sphere with
$N_\phi=2(N-1)$ and $H=\sum_{i<j}P^{(0)}_{ij}$ (projector onto relative angular
momentum zero), whose unique zero mode is the bosonic Laughlin state, prove
$\inf_N(E_1(N)-E_0(N))>0$; stronger: a Fock-space inequality $H_Q^2\ge\gamma H_Q$
for all large flux $Q$.

Why now. The OpenAI Fock-space inequality (gap $\ge1/25$, Lean-formalized) and
the follow-ups Gao (arXiv:2610.12700, $\ge1/5$, cap $\approx0.222$ for the current
auxiliary-operator family) and Scheer–Khalaf (arXiv:2610.18854v2, certified
$>1/100$ in the thermodynamic limit) all treat fermions at $1/3$ (all verified).
Scheer–Khalaf list "other model wavefunctions" and note the torus has "no clear
analog of the south pole mapping." The bosonic contact model is the simplest
untouched case and tests whether the method depends on fermionic structure.
Companion target: certify the fermionic spherical constant above the $0.222$ cap.

AI disclosures. Gao: "completed by the AI model Claude Opus 5.5 (Anthropic)" under
the author's direction. Scheer–Khalaf: ChatGPT and Claude for literature search,
coding and checks; "did not contribute in a substantial way to the main ideas."

**P7. Bose–Einstein condensation up to a fixed fraction of the critical temperature** (extends B13) — sharp

Statement. Same model as B13 (fixed bounded nonnegative radial finite-range $v$,
periodic boxes, $N/L^3\to\rho$). Let $T_c^{(0)}(\rho)=4\pi(\rho/\zeta(3/2))^{2/3}$.
Prove: for every $\kappa\in(0,1)$ there are $\rho_0(\kappa,v)>0$ and $c(\kappa)>0$
such that for all $\rho<\rho_0$ and $T=\kappa T_c^{(0)}(\rho)$ the canonical Gibbs
state has condensate fraction at least $c(\kappa)$ in the thermodynamic limit.
Converse target: no condensation for $T>(1+\kappa)T_c^{(0)}$ at small $\rho a^3$.

Why now. The claimed B13 resolution covers $0\le T\le\rho^2$ (verified, Thm 1.1
of *A density-uniform condensate bound*), which is far below $T_c\sim\rho^{2/3}$ in
the dilute limit; the hard-sphere positive-temperature manuscript only asserts
"a strictly positive temperature $T(a,\rho)$." Temperatures of order $T_c$ are
where the critical-temperature shift $\Delta T_c/T_c\approx1.3\,a\rho^{1/3}$ lives
and where both the scaling-limit results (Deuchert–Seiringer) and the new
fixed-density method are silent.

Baseline. OpenAI condensate and hard-sphere manuscripts (verified); OpenAI
depletion manuscript: zero-temperature depletion $\frac{8}{3\sqrt\pi}\sqrt{\rho a^3}$
in the thermodynamic-then-dilute limit (verified); Basti–Brooks–Cenatiempo–Olgiati–Schlein,
arXiv:2609.25314 (Lee–Huang–Yang upper bound; verified); Bahri–Jauslin,
arXiv:2611.05293 (verified).

**P8. Néel order at positive temperature for the spin-1/2 Heisenberg antiferromagnet in three dimensions** — sharp (not in catalogue)

Statement. For the nearest-neighbour spin-1/2 antiferromagnet on $\mathbb Z^3$
(bipartite periodic boxes), prove there is $\beta_0<\infty$ such that for
$\beta>\beta_0$ the staggered two-point function satisfies
$\liminf_\Lambda|\Lambda|^{-2}\sum_{x,y}(-1)^{x+y}\langle\vec S_x\cdot\vec S_y\rangle_{\beta,\Lambda}>0$.

Why now. Dyson–Lieb–Simon (1978) proved this for $S\ge1$ in $d=3$ and for $S=1/2$
only in sufficiently high dimension; Kennedy–Lieb–Shastry (1988) proved the
$S=1/2$, $d=3$ statement at zero temperature only. Two 2026 developments make it
timely: the OpenAI ferromagnet proof (*Spontaneous magnetization in the quantum
Heisenberg ferromagnet*, KMS state with $\omega(S^z_0)\ge S/4$ for all $d\ge3$ and
all $S$, Lean-formalized; verified) bypasses reflection positivity, and
Chadha–Wang–Nosov–Scheer–Khalaf's bootstrap (P9) notes its infrared bound
"holds in the Gibbs state at any temperature." The oldest sharp gap in the
quantum-magnetism ordering landscape.

Baseline. OpenAI family 271 (verified); Dyson–Lieb–Simon, J. Stat. Phys. 18 (1978);
Kennedy–Lieb–Shastry, J. Stat. Phys. 53 (1988) (classical, unverified); Ueltschi,
arXiv:1211.4141 (random loops; snippet).

**P9. 120° order for the spin-1/2 triangular-lattice Heisenberg antiferromagnet** — sharp (not in catalogue)

Statement. For $H=\sum_{\langle xy\rangle}\vec S_x\cdot\vec S_y$ with spin 1/2 on
the triangular lattice (periodic tori commensurate with three sublattices), prove
that ground states have three-sublattice long-range order: the
$\mathbf K$-point structure factor $|\Lambda|^{-2}\sum_{x,y}e^{i\mathbf K\cdot(x-y)}\langle\vec S_x\cdot\vec S_y\rangle$
has a positive thermodynamic limit; or prove its absence.

Why now. Chadha–Wang–Nosov–Scheer–Khalaf (arXiv:2611.03241, 2 Nov 2026, verified)
claim the first rigorous proof of Néel order for the 2D spin-1/2 XXZ model at a
grid of anisotropies including the Heisenberg point, via a Hamiltonian bootstrap
with exactly certified MPS energy upper bounds and generalized
Kennedy–Lieb–Shastry inequalities. The method "needs the infrared bound, which the
authors say is usually a property of reflection-positive models," and the
triangular lattice is frustrated and not reflection positive in the usual sense.
Numerics (Sorella 1999; White–Chernyshev 2007; Li et al. PRB 105, 184418 (2022),
$m\approx0.161$) support order; Anderson–Fazekas originally proposed a spin
liquid. No rigorous result in either direction was found (two extended searches).
Companion incremental target: extend Chadha et al. from a discrete grid to every
$\Delta\in[0,2]$ and certify $m_s\ge0.30$ at $\Delta=1$ (their certified bound is
$m_x^2\ge7.63\times10^{-4}$); see S2.

AI disclosure (Chadha et al.): "use of AI tools Claude Opus 5.5, Fable 5.1 and
ChatGPT 6.1 for searching the literature"; Claude Opus 5.5 and Fable 5.1 "were used
for assistance with coding, and algorithmic improvements, particularly the
certification procedure."

**P10. Explicit excess-charge constant: no doubly charged negative ions** (extends M1) — sharp

Statement. For the nonrelativistic two-spin Coulomb atom of M1, prove
$N_c(Z)\le Z+2$ for every $Z\ge1$, and $N_c(Z)\le Z+1$ for all sufficiently large
$Z$. Companion: for bosonic atoms prove $N_c^{\rm bos}(Z)\le t_cZ+C$ with
$t_c\approx1.21$ (Solovej's constant) and $C$ universal.

Why now. The claimed M1 resolution gives $N\le Z+CM$ with a universal but
non-explicit $C$ from a multi-scale screening argument (verified; the Lean doc 263
formalizes only ionization-energy and radius asymptotics). Chemistry says $C\le2$.
Explicit non-asymptotic bounds are an active line (Nam $1.22Z+3Z^{1/3}$;
Hundertmark–Pattakos–Schulz $1.1185Z+4Z^{1/3}$; Benguria–González-Brantes,
arXiv:2511.07582, verified listing; Chen–Wu two-centre TFDW, arXiv:2610.09997,
verified). The bosonic second-order term is untouched since Solovej (1990).

**P11. Spectral gap of the spin-2 AKLT model on the square lattice** (extends M7) — sharp

Statement. For $H=\sum_{\langle xy\rangle}P^{(4)}_{xy}$ on $L\times L$ tori (projector
onto total spin 4 of neighbouring spin-2's), prove $\inf_L(E_1(L)-E_0(L))>0$ with
an explicit bound.

Why now. The canonical concrete PEPS gap problem still open: Guo–Pomata–Wei
(arXiv:2010.03137, listing) state it explicitly; the hexagonal spin-3/2 case is
settled (Lemm–Sandvik–Wang; Pomata–Wei) and now re-proved analytically by
Kastoryano's boundary-state factorization (arXiv:2609.27993, verified). Three
2026 tools converge: Kastoryano's framework, Jackson–Nachtergaele–Young's LTQO
stability (arXiv:2605.12184, listing) and Grover's PEPS purity bootstrap, which
proved exponential decay for the Jian–Zaletel square-lattice PEPS while noting the
gap "remains open" and that transfer-operator Hermiticity "must be verified for
each PEPS" (verified).

**P12. Sharp two-dimensional Lieb–Thirring constant at $\gamma=1$** (sibling of M13) — sharp (not in catalogue)

Statement. Let $L_{1,2}$ be the optimal constant in
$\sum_j|\lambda_j(-\Delta+V)|\le L_{1,2}\int_{\mathbb R^2}V_-^{2}\,dx$. Decide whether
$L_{1,2}=L^{\rm cl}_{1,2}=1/(8\pi)$ (semiclassical constant), or determine
$L_{1,2}$ otherwise; equivalently, decide whether $L_{1,2}=\max\{L^{(1)}_{1,2},L^{\rm cl}_{1,2}\}$
(the Lieb–Thirring conjecture at this point).

Why now. The one-dimensional case is now closed on two fronts: Read–Schulz
(arXiv:2609.10478v2, verified; $L_{1,1}=4/(3\sqrt3\pi)$, operator-valued
extension, and $L_{1,d}\le(2/\sqrt3)L^{\rm cl}_{1,d}$ in every dimension) and
OpenAI family 262 (sharp 1D constants for all $1/2<\gamma<3/2$ with matrix
potentials and all equality cases; verified). In 2D the conjecture is known to
fail for $1<\gamma\lesssim1.165$ (Frank–Gontier–Lewin), and numerics suggest
periodic optimizers; $\gamma=1$ itself is listed as open (Read–Schulz
introduction; Frank's ICM 2022 survey). M13 covers only $d=3$. AI disclosure
(Read–Schulz): "A first version of the main argument was developed by GPT-6
Astra under the guidance of L.R."

Baseline. Frank–Hundertmark–Jex–Nam, JEMS (2021), $L_{1,d}\le1.456L^{\rm cl}$;
Corso–Ried $1.44655$; Frank–Gontier–Lewin, "The periodic Lieb–Thirring
inequality" (2021); Frank, "The state of the Lieb–Thirring conjecture",
arXiv:2203.06051 (listing).

### 1.2 Quantum field theory and undecidability (suggested IDs QF12–QF17, U6–U7)

**P13. Uniqueness and Euclidean invariance of the 4D Yang–Mills continuum limit** (extends QF1) — sharp

Statement. For $G=SU(N)$ Wilson lattice gauge theory on $(a\mathbb Z)^4\cap[-L,L]^4$
with $\beta(a)$ on the asymptotically free trajectory, prove that the Schwinger
functions of renormalised gauge-invariant local observables converge as $a\to0$,
$L\to\infty$ (not merely along subsequences), that the limit is independent of
the lattice action within the Wilson/heat-kernel class and of boundary
conditions, and that it is $E(4)$-invariant and clustering.

Why now. The KITP shepherding-committee statement (verified) says OpenAI's proof
reaches "infinite distances" and that "in the infinite volume limit, it must become
translationally and rotationally invariant", and lists checking "that the
definitions and problem statement correspond with those which are standard" as its
first objective. The publicly posted 3D/4D Balaban-style arguments (Sussman–Alpoge
GitHub, "largely LLM-written", "not satisfactorily vetted") give at most
subsequential limits. Whether the private manuscript settles uniqueness is
unknown; on the public record it is open. Lemoine–Nohra (arXiv:2608.15923,
listing) prove universality across lattice actions in 2D only.

**P14. Non-triviality and perturbative matching of constructed 4D Yang–Mills** (extends QF1) — sharp

Statement. For any 4D continuum $SU(N)$ Yang–Mills Schwinger functions obtained as
a lattice continuum limit, prove (i) non-Gaussianity: the connected four-point
function of renormalised $\operatorname{tr}F^2$ is not identically zero; (ii)
short-distance matching
$\langle\operatorname{tr}F^2(x)\operatorname{tr}F^2(0)\rangle=C|x|^{-8}(1+c_1g^2(|x|)+O(g^4))$
with $g^2(r)^{-1}=\beta_0\log(1/(r\Lambda))+\dots$, $\beta_0=\frac{11N}{3(4\pi)^2}$.

Why now. The Jaffe–Witten statement does not require matching, so once existence
is accepted the natural sharp question is whether the object is Yang–Mills rather
than some other (possibly free) theory; Baez's comment on Woit's blog (verified)
makes exactly this point and notes "no standard checklist exists." Balaban's RG
controls effective couplings at each scale, which is the natural tool. No rigorous
non-triviality theorem for 4D Yang–Mills exists on the public record. Douglas,
Nat. Rev. Phys. 8, 86 (2026) (paywalled, unverified).

**P15. Strong mass gap for 4D lattice Yang–Mills at large $\beta$** (between QF1 and QF2) — sharp

Statement. For 4D Wilson $SU(N)$ lattice gauge theory on $[-L,L]^4$, prove that
there exist $\beta_0$ and $m(\beta)>0$ such that for all $\beta\ge\beta_0$ and all
boundary conditions, connected plaquette correlations satisfy
$|\langle f;g\rangle|\le Ce^{-m(\beta)\operatorname{dist}(f,g)}$ uniformly in $L$.
By Chatterjee (2020) this implies Wilson's area law for groups with nontrivial
centre.

Why now. The KITP statement says "confinement and the mass gap remain very
important open challenges"; Chatterjee's slides (verified) call any correlation
decay at large $\beta$ for non-Abelian theories in 3D and 4D "completely open";
Douglas's LGT Lean project (verified) has formalised decay only in the
strong-coupling regime $\beta<1/(32n(d-1))$. This is the sharpest lattice
intermediate between QF1 and QF2. Related: Nair, arXiv:2608.10133 (3D gap
"outline"; verified); Shen–Zhu–Zhu, arXiv:2401.13299 (lattice YM–Higgs gap in
infinite volume; verified).

**P16. Infinite-volume limit and mass gap for the 2D non-Abelian Yang–Mills–Higgs measure** (extends QF1) — sharp

Statement. Let $\mu_L$ be the Bringmann–Cao–Hairer–Zhao measure on
$\mathbb T^2_L$ for compact $G$, representation $V$, fixed couplings. Prove (i)
$\mu_L$ converges as $L\to\infty$ to a measure on gauge orbits over $\mathbb R^2$;
(ii) exponential clustering of gauge-invariant local observables with $m>0$;
(iii) the limit is the scaling limit of lattice Yang–Mills–Higgs.

Why now. The 2 November construction (arXiv:2611.03640, verified, 350 pp.) is
finite-volume and rules out finite-time blow-up "at least in two dimensions";
nothing about infinite volume or a gap is claimed. The ingredients now exist:
Piazza–Shen prove a volume-uniform log-Sobolev inequality for 2D $SU(N)$ lattice
Yang–Mills at all $\beta$ (arXiv:2610.35286, verified); Shen–Zhu–Zhu prove a
lattice YM–Higgs mass gap in infinite volume at fixed spacing (verified);
Barashkov–Chandra–Chevyrev–Koller–Mohamed (arXiv:2609.21972, Abelian, verified).
AI disclosure (BCHZ): "main ideas and nearly all of the write-up were produced
without AI"; GPT-6 Astra and GPT-5.6 Sol "proved seven listed technical lemmas and
propositions, each reviewed before inclusion."

**P17. Global existence and invariant measure for 3D stochastic Yang–Mills–Higgs on $\mathbb T^3$** (new) — sharp

Statement. For the 3D stochastic Yang–Mills–Higgs Langevin dynamics on gauge
orbits over $\mathbb T^3$ (Chandra–Chevyrev–Hairer–Shen), prove absence of
finite-time blow-up and existence of an invariant probability measure.

Why now. BCHZ write that prior work "did not rule out the existence of finite-time
blowup, which was left as an important open problem" and resolve it only in 2D.
Chevyrev–Shen (ARMA 2026, arXiv:2503.03060, verified) establish uniqueness of
gauge-covariant mass renormalisation in 3D and are quoted (snippet, unverified
wording) as saying existence of the invariant measure "would yield a construction
of the 3D YMH measure on $\mathbb T^3$, which is currently an open problem."
Cao–Chatterjee (CMP 2024) supply a 3D state space.

**P18. Reflection positivity of the non-Abelian chiral lattice fermion measure** (extends QF5) — sharp

Statement. For an anomaly-free non-Abelian chiral representation (e.g. $SO(10)$
with a 16, or the Standard Model) and the gauge-invariant overlap-fermion measure
on admissible lattice gauge fields (Lüscher–Craig), prove or disprove that the
effective gauge-field weight $\int d\mu(U)\det{}'(D[U])$ is reflection positive on a
4D lattice of fixed spacing (equivalently, admits a positive-metric transfer
matrix).

Why now. QF5 lists reflection positivity inside a programme; the October–November
trio makes it an isolated sharp question. Witten (arXiv:2611.05051, verified):
"We do not get any natural definition of the phase of $Z(W_i)$, so we just assign
it an arbitrary phase"; the path integral "is not positive." Hsu
(arXiv:2610.29019, verified abstract) proves reflection positivity only for a
variant at zero Yukawa coupling and zero theta. Craig, arXiv:2610.09093 (verified
abstract; Lean companion on Zenodo). Companion conceptual question (S5): is the
chiral sign problem intrinsic?

**P19. Perturbation-stable undecidability of the spectral gap** (extends U1) — sharp

Statement. Does there exist a computable family $\{h(n)\}$ of translation-invariant
nearest-neighbour interactions (1D chain or 2D lattice, fixed local dimension)
such that the gapped/gapless promise problem is undecidable and remains undecidable
for every family $\{h(n)+p(n)\}$ with $\|p(n)\|\le\varepsilon$, for some fixed
$\varepsilon>0$ (perturbations ranging over all nearest-neighbour terms)? Or does
every undecidable family become decidable under some $O(\varepsilon)$ perturbation?

Why now. Castilla-Castellano–Lucia (arXiv:2607.08686, verified) show a 1-local
rank-one perturbation of norm $O(\varepsilon)$ makes the
Bausch–Cubitt–Lucia–Pérez-García 1D family decidable and ask "how robust are these
undecidability results to perturbations"; Xu–Schötz–Wang–Magron–Klep–Fawzi–Renou
(arXiv:2606.03836v5, verified) state "Whether undecidability can be realized by a
family that is stable under such perturbations is open." Whether the 2D
Cubitt–Pérez-García–Wolf family is similarly unstable is also unclear.

**P20. Explicit frustration-freeness cutoffs for small local dimension** (new; adjacent to U1) — sharp

Statement. Shiraishi (arXiv:2611.07337, 5 Nov 2026, verified) proves that for
translation-invariant nearest-neighbour Hamiltonians with local dimension $d$
(algebraic entries) there is a Hamiltonian-independent cutoff $L(d)$ such that
frustration-freeness at size $L(d)$ implies it at all sizes, that $L(d)$ is
uncomputable in $d$, and that there is a frustration-free Hamiltonian whose
frustration-freeness is unprovable in ZFC. Problem: compute, or bound by an explicit
integer, the minimal cutoff $L_{\min}(2)$ for qubits on the 2D square lattice and
$L_{\min}(d)$ for 1D chains at small $d$; determine whether the 1D analogue has a
computable cutoff function.

Why now. The supplement states: "Determining explicit cutoffs for small d in
physically relevant graph families is therefore an uneasy but interesting
direction for future research." One of the few decidability-positive results in
the area. AI disclosure: "NS used ChatGPT (GPT-5.4, GPT-5.5 Pro, GPT-5.6 Sol, and
GPT-6 Astra) to establish the dicidability result."

### 1.3 Entanglement and nonlocality (suggested IDs E17–E21, N12–N15)

**P21. PPT-cubed conjecture** (extends C12) — sharp

Statement. For PPT maps (completely positive and completely copositive)
$\Phi_1,\Phi_2,\Phi_3$ on $M_d(\mathbb C)$, any $d$, is $\Phi_3\circ\Phi_2\circ\Phi_1$
always entanglement breaking? Channel form: for every PPT channel $\Phi$, is
$\Phi^{\circ3}$ entanglement breaking? Concrete sub-question: is the cube of the
explicit OpenAI channel on $M_{21}(\mathbb C)$ entanglement breaking?

Why now. PPT-squared is claimed disproved (OpenAI family 272; the PDF notes "A
failure at the second iterate is compatible with such eventual behavior";
verified). Park (arXiv:2608.13551v2, verified) proves finite entanglement-breaking
index for every PPT map, names the "PPT-cubed conjecture" as the next target, gives
index $\le3$ for his class $\mathrm{DSP}_2$ and $\le5$ for $\mathrm{DSP}_3$
uniformly in $d$, and asks (Question 5.11) whether $\mathrm{PPT}(d,d)\subseteq\mathrm{DSP}_2(d,d)$
(known for $d=3$, open for $d\ge4$), which would imply PPT-cubed. AI disclosure
(Park): ChatGPT "for language polishing, LaTeX editing, and exploratory
mathematical discussion"; some ideas "arose in interactions with GPT-5.6 Sol."
Caveat: whether the OpenAI paper computes the cube was not checked.

**P22. Smallest dimension at which PPT-squared fails** (extends C12) — sharp

Statement. Let $d_{\rm CP}$ be the least $d$ admitting PPT maps on $M_d$ with
non-entanglement-breaking composition, and $d_{\rm TP}$ the least $d$ admitting a
trace-preserving PPT channel with non-EB square. Known $4\le d_{\rm CP}\le10$,
$4\le d_{\rm TP}\le21$. Determine both; in particular decide the conjecture for
$d=4$.

Why now. The OpenAI manuscript states "We do not claim that either dimension is
minimal" (verified). Dimension 3 is proved (Christandl–Müller-Hermes–Wolf;
Chen–Yang–Tang); the construction's key gadget is a PPT map on $M_4$, and Park's
Prop. 5.12 notes the $d=4$ inclusion is unknown. Marquez Gonzalez,
arXiv:2609.32979 (DOC class, includes a $d=4$ case; listing). The Lean scope
(`lean/docs/272.md`) formalizes exactly the two composition statements, not zero
key.

**P23. Minimal local dimension of a zero-key entangled state** (extends E16) — sharp

Statement. Let $d_{\min}$ be the least $d$ such that some entangled $\rho$ on
$\mathbb C^d\otimes\mathbb C^d$ has $K_D(\rho)=0$ (LOCC with authenticated public
communication, Eve holding a purification). Known $3\le d_{\min}\le10$. Sharp
sub-question: is $K_D(\rho)>0$ for every entangled two-qutrit state?

Why now. E16 is claimed solved by a $10\otimes10$ state which, per the manuscript
(Lemma 2.1 remark, verified), is PPT; minimality is disclaimed. Every entangled
two-qubit state is NPT (Horodecki 1996) and every NPT $2\times n$ state is
distillable (Dür–Cirac–Lewenstein–Bruß 2000), hence has key, so $d_{\min}\ge3$
for $d\otimes d$. PPT entangled states exist already in $2\times4$, so a
$2\otimes n$ zero-key state is a separate sub-question. (Corrected 8 Nov 2026: an
earlier wording wrongly stated that all PPT $2\times n$ states are separable.) Pauwels–Gisin–Renner (arXiv:2607.25838, listing; cited by OpenAI)
prove positive two-way key for the Horodecki two-qutrit bound-entangled states
with $3<\alpha\le4$, so the only $3\otimes3$ family tested so far has key.
Horodecki–Sikorski–Das–Wilde, Quantum 10, 2098 (2026) (verified) work under the
assumption that zero-key entangled states do not exist. Companion (S9): Bell-nonlocal
states with zero key.

**P24. Two-copy nonadditivity and the exact regularized entanglement of purification of Werner states** (extends E10) — sharp

Statement. For two-qubit Werner states $W(f)$ with $1/64\le f<f_*\approx0.017086$
(where Baghali Khanian–Negari prove $E_P^\infty<E_P$): (a) is
$E_P(W(f)^{\otimes2})<2E_P(W(f))$? (b) compute $E_P^\infty(W(f))$, or at least the
least $n$ with $E_P(W^{\otimes n})<nE_P(W)$; (c) are the thresholds $1/64$ and $f_*$
sharp?

Why now. The claimed E10 resolution (arXiv:2610.03630, verified) guarantees "a
finite-copy violation of additivity without identifying the required number of
copies" and lists exactly these questions in its Discussion. Chen–Winter's 2012
numerics suggested two-copy violation, never certified; Krohn-Grimberghe's
certificate approach at $f=1/200$ is challenged. AI disclosure: "centaur
(human–AI) workflow"; "Agentic AI tools assisted with detailed calculations, all of
which were independently verified by the authors"; "The formalization was carried
out by AI."

**P25. Mutually unbiased bases in dimension ten** (extends N2, N3) — sharp

Statement. Determine $N(10)$, the maximal number of MUBs in $\mathbb C^{10}$;
known $3\le N(10)\le11$. Decide in particular whether a fourth basis exists.
Generalized form: is $N(2p)=3$ for every odd prime $p$?

Why now. $N(6)=3$ is now claimed by two independent computer-assisted proofs.
Cárdenes Wuttig–Tindall's outlook (arXiv:2611.06917, verified): "After six, the
smallest open dimensions are now ten and twelve", with a proposed corner
reconstruction of order-10 Hadamard matrices from a dephased $5\times5$ corner.
Dimension 10 is the first case where the tensor bound 3 is the best known lower
bound and the order-10 complex Hadamard matrices are unclassified; the same authors
beat the tensor bound in $d=12$ (five MUBs, arXiv:2609.40311, verified), so 12
behaves differently and 10 is the clean test. McNulty–Weigert review, Quantum
(2026), arXiv:2410.23997, Problem 10.7 (verified). AI disclosure (CW–T): "ChatGPT
6 Astra and Claude Opus 5.5 assisted significantly in developing the proof."

**P26. The place law for ghost SIC overlap units** (extends N1) — sharp

Statement (Khodaiemehr, Conjecture VI.20). For every $d\ge4$, the Stark solution
of the SIC group $G_d$ satisfies the place law $\mathrm{PL}(u)$ for every $u\in G_d$
with $2u\ne0$: each Galois conjugate of every ghost overlap unit is real or
unimodular according to the infinite place of $\mathbb Q(\sqrt{(d-3)(d+1)})$ beneath
it. Theorem VI.23 proves PL implies Zauner's conjecture in dimension $d$.
Companion: the explicit reciprocity law (Conjecture VI.40) for odd $d\ge5$.

Why now. N1 records the Appleby–Flammia–Kopp conditional route (Stark plus
Shintani–Faddeev). The 1 November preprint (arXiv:2611.01524, verified abstract
and PDF) replaces two external conjectures by a single arithmetic condition on
objects that exist unconditionally, proves no symmetry maps a ghost to a SIC, and
reduces the condition for $d=p^k$ with $p\equiv5\pmod6$ and $d=3^k$ to a sign-free
multiplet hypothesis under algebraic Stark. The author writes that the remaining
gap is reduced to this corollary. AI disclosure: "computations were carried out
with the assistance of Claude (Anthropic). The author checked all results, proofs
and computations." Related: Appleby–Flammia–Kopp, arXiv:2609.39192;
Bengtsson–McConnell, arXiv:2606.23535 (both verified abstracts).

**P27. Closure of the quantum set in the minimal scenarios beyond I3322** (extends N4) — sharp

Statement. Let $C_q(m_A,m_B;k_A,k_B)$ be the set of finite-dimensional
tensor-product correlations. (i) Certify the September 2026 claims that the I3322
value is not attained in finite dimension, i.e. $C_q(3,3;2,2)$ is not closed.
(ii) Decide the remaining Pareto-minimal two-input cases: is $C_q(2,2;2,3)$
closed? $C_q(2,2;3,3)$?

Why now. N4 cites Dykema–Paulsen–Prakash's five-input binary example as the
smallest non-closure. Douglas (arXiv:2609.05555v2, verified: I3322 value attained
spatially but not in finite dimension, dimension complexity
$\Theta(\log1/\varepsilon)$) and Krohn-Grimberghe (arXiv:2609.29693, verified:
value $0.25087538451397653\ldots$ in a width-$10^{-55}$ interval,
$\omega_q=\omega_{\rm spatial}=\omega_{qc}$, no finite-dimensional attainment)
would move the binary-output frontier to three inputs, which is Pareto-minimal
among binary-output scenarios (for $(2,m;2,2)$ Jordan's lemma reduces to
two-qubit extreme points, so the set is closed; this reduction is the reviewers'
reasoning, not from the literature). Both proofs are computer-assisted and only
partly machine-checked. This also resolves the Pál–Vértesi I3322 conjecture.

### 1.4 Channels and complexity (suggested IDs C13–C16, A20–A26)

**P28. Single-letter strong-converse exponent for the erasure and degradable channels** (extends C4) — sharp

Statement. Cheng–Tomamichel give the exact entanglement-generation strong-converse
exponent $E^{\rm sc}(r)=\sup_{\alpha>1}\frac{\alpha-1}{\alpha}[r-Q_\alpha(\mathcal N)]$
with $Q_\alpha$ the regularized sandwiched Rényi coherent information. Prove or
disprove: for the qubit erasure channel and every $\alpha>1$,
$Q^{(1)}_\alpha(\mathcal E_p^{\otimes n})=nQ^{(1)}_\alpha(\mathcal E_p)$ (additivity),
hence a closed-form exponent; stronger: the same for every degradable channel.
Companion: the exact exponent under the entanglement-transmission criterion, which
can differ (replacer channel: $r$ versus $2r$).

Why now. C4 asks only for the strong converse, now claimed. Kondra et al.
(arXiv:2608.01308, verified) wrote "determining the optimal exponent, even for the
erasure channel, is open"; Cheng–Tomamichel (arXiv:2609.08998, verified) then gave
the regularized formula, so single-letterization is what remains.
Cheng–Hirche–Tomamichel (arXiv:2609.38144, verified) pose the analogous additivity
question for private information. AI disclosures: 2609.08998: "OpenAI Codex with
ChatGPT 6 Astra proposed the derivative-bound approach… and produced a first
correct but arguably opaque proof."

**P29. Exact zero-capacity threshold of the thermal attenuator** (extends C2, C11) — sharp

Statement. For the single-mode thermal attenuator $\Phi_{\eta,\nu}$, define
$\eta_c(\nu)=\inf\{\eta:Q(\Phi_{\eta,\nu})>0\}$ (unconstrained energy). Known
$\eta_{AD}(\nu)=\frac{\nu+1/2}{\nu+1}\le\eta_c(\nu)\le\eta_G(\nu)$, and at $\nu=1$:
$0.75\le\eta_c(1)\le0.7841$. Determine $\eta_c(1)$; decide whether
$\eta_c(\nu)=\eta_{AD}(\nu)$ for all $\nu>0$.

Why now. Mele–Catalano–Fanizza–Giovannetti–Lami (arXiv:2607.27449, verified)
certify non-Gaussian codes below the Gaussian threshold and write "the true value
of $\eta_c$ is unknown." Ahmed et al. (arXiv:2609.39747, verified) show the
depolarizing channel on symmetric subspaces converges to a thermal attenuator, so
this threshold feeds C11 directly. AI disclosures: 2607.27449: ChatGPT 5.5 and
5.6 Sol "to find the non-Gaussian counterexample families"; 2609.39747: key
Gaussianity statement "suggested by AI", some AI lemma proofs "unusable as given"
and rewritten.

**P30. Holevo additivity for every qubit channel** (extends C1) — sharp

Statement. Two statements of increasing strength. (Weak) For every qubit channel
$\Phi$, is $C(\Phi)=\lim_n\chi(\Phi^{\otimes n})/n=\chi(\Phi)$? (Strong) For every
qubit channel $\Phi$ and every finite-dimensional channel $\Omega$, is
$\chi(\Phi\otimes\Omega)=\chi(\Phi)+\chi(\Omega)$? Strong additivity implies the
weak form; the converse is not known. (Corrected 8 Nov 2026: an earlier wording
called the two forms equivalent.)

Why now. King (2002) settled unital qubit channels; the generalized
amplitude-damping channel is the first full non-unital family (OpenAI family 276,
verified listing; Fang, arXiv:2609.14621, verified, who frames this as the central
question). A Lean-formalized "proposed proof" for all qubit channels is posted by
Kitamura (GitHub, 11 Oct 2026, "with help from ChatGPT, OpenAI Codex, and Claude
Code"; coding theorem not formalized; unrefereed, verified page). If that claim
holds, the entry would start as "claimed solved".

**P31. Unitary synthesis at inverse-polynomial error from a Boolean oracle** (new) — sharp

Statement. OpenAI family 283 claims: for every $n$-qubit unitary $U$ there is a
Boolean oracle $f_U$ and a uniform polynomial-size oracle circuit implementing $U$
to diamond-norm error $1/2$. Does the same hold with error $1/\mathrm{poly}(n)$
(or $2^{-n}$)? Secondary: can $f_U$ be computed efficiently from a classical
description of $U$?

Why now. The Aaronson–Kuperberg problem was conjectured negative and is now
claimed positive at constant error, with small error explicitly not addressed
(CONTENTS: "its efficient classical construction is not asserted"; verified).
Huang–Ramkumar–Wright (arXiv:2610.06700, verified) prove the random-oracle version
impossible (superpolynomial query lower bound), so a tailored oracle is essential;
Brakerski–Yuen (arXiv:2605.09957, verified) give the $(2-o(1))\log d$ oracle-length
lower bound and tie the question to scalable pseudorandom unitaries;
Lombardi–Ma–Wright (2023) give the one-query lower bound. He–Ou–Zhao
(arXiv:2611.02819, verified) already build on the claim to prove
unitaryQIP = unitaryPSPACE.

**P32. Does unentanglement beat SBQP relative to a classical oracle?** (extends A5) — sharp

Statement. Is there a classical oracle $A$ with
$\mathsf{QMA}(2)^A\not\subseteq\mathsf{SBQP}^A$, or does
$\mathsf{QMA}(2)^A\subseteq\mathsf{SBQP}^A$ hold for every classical oracle?

Why now. Grewal–Mutreja–Tomer (arXiv:2610.06760, verified) give the October 2026
classical-oracle separation $\mathsf{QMA}\ne\mathsf{QMA}(2)$ but note their problem
"admits an SBQP algorithm, so it cannot resolve this", calling it "one of the most
interesting directions for understanding the power of unentanglement." Relevant to
$\mathsf{QMA}(2)\subseteq\mathsf{EXP}$ since $\mathsf{SBQP}\subseteq\mathsf{PP}$. AI
disclosure: "the original proof was obtained through interaction with an AI model…
the original AI-generated manuscript is publicly available."

**P33. Perfect completeness beyond QMA: $\mathsf{QMA}(2)=\mathsf{QMA}_1(2)$ and $\mathsf{BQP}=\mathsf{BQP}_1$** (extends A4) — sharp

Statement. In the finite-register model with a fixed exact gate set: (a) does every
$\mathsf{QMA}(2)$ protocol admit a perfectly complete one preserving product-state
soundness? (b) does every BQP language have a perfectly complete polynomial-time
algorithm ($\mathsf{BQP}=\mathsf{BQP}_1$)?

Why now. Both resolving papers name these as successors: Liu–Vidick
(arXiv:2609.15926, verified) call (a) "perhaps the most intriguing open problem";
Grewal–Rudolph (arXiv:2609.13032, verified) say their proof "does not seem to
extend" to (b) since "no prover can supply the exact rational value the cyclic test
needs." Aaronson–Harris–Witteveen, arXiv:2509.21131 (limits to black-box
amplification; listing). AI disclosure (Grewal–Rudolph): "the core proof idea for
the main theorem came from prompting a generative AI system."

**P34. Optimal exponents in the Aaronson–Ambainis theorem** (extends A11; contingent) — sharp

Statement. Call $(a,b)$ admissible if there is $c>0$ such that every bounded
degree-$d$ multilinear $f$ with variance $v$ has
$\max_i\mathrm{Inf}_i(f)\ge cv^a/d^b$. Determine the optimal $b$ at $a=1$ (is
$\max_i\mathrm{Inf}_i\ge cv/d$ possible?) or exhibit polynomials certifying $b>1$;
derive the optimal exponent in the classical simulation of $T$-query algorithms on
most inputs.

Why now. On 6 November 2026 Physical Superintelligence announced a Lean-checked
proof of the conjecture with $(a,b)=(5/2,6)$, hence $(7,7)$, $c=815/(125\pi^4)$,
produced by its research system "using instances of a non-public Anthropic model",
audited by Halverson, with Blanc–Docter–Strassle–Tan writing an exposition
(company page, verified; no arXiv ID; not peer reviewed). If the claim stands, A11
moves to "claimed solved" and the quantitative question is what remains.
Girish–Mittal–Nehoran–Raz (arXiv:2609.35327, verified) show distribution
independence, so exponents transfer. Blanc–Docter–Strassle–Tan, arXiv:2608.19158
(bounded-round case; verified).

**P35. Lossy BosonSampling in the intermediate loss regime** (extends A12) — sharp

Statement. Fixed-loss BosonSampling with $N$ photons, $M=\mathrm{poly}(N)$ modes,
Haar interferometer and exactly $k(N)$ photons lost. Aaronson–Brod: $k=O(1)$ is as
hard as lossless. Go–Jeong, Lim and Angrisani–Mhiri: $k=\Theta(N)$ is classically
samplable in polynomial time. For $k=\lceil\log N\rceil$ and for $k=N^\alpha$,
$0<\alpha<1$: classically hard under the standard conjectures, or polynomial-time
samplable?

Why now. Three October–November 2026 easiness results delimit the surviving
hardness window; Angrisani–Mhiri's runtime scales as $\exp(O(1/(1-\eta)))$, so
loss fraction $\Theta(1/\log N)$ is the current boundary, and the authors write
that "where exactly the hardness boundary lies is not settled." Go–Jeong,
arXiv:2610.27065; Lim, arXiv:2611.01434; Angrisani–Mhiri, arXiv:2611.08444 (all
verified). AI disclosures: Go–Jeong: "Generative AI assisted with analytical
cross-checks and manuscript editing"; Angrisani–Mhiri: ChatGPT "to help identify
the relevant polynomial basis… to help prove technical results."

**P36. No Low-Energy Sampleable States (NLSS)** (extends A6, A7) — sharp

Statement. Exhibit a family of $O(1)$-local Hamiltonians $H_n$ on $n$ qubits and
$\varepsilon>0$ such that no state of energy density below $\varepsilon$ is
sampleable (no classical polynomial-time algorithm samples its computational-basis
outcomes and computes its amplitudes); or refute under $\mathsf{MA}\ne\mathsf{QMA}$.

Why now. NLTS (2022) was followed by NLTM (Wei–Han–Li–Liu, arXiv:2609.40220,
verified: no low-energy states that are stabilizer plus $O(\log n)$-depth
magic), whose authors list "exclude more general witness classes at positive energy
density" as the route to quantum PCP; NLSS (Gharibian–Le Gall) is the explicit next
rung and good qLTCs (A7) are the natural ingredient. No 2026 resolution found. AI
disclosure (Wei et al.): "Generative AI tools assisted with completing the proof
details."

### 1.5 Open systems and foundations (suggested IDs O11–O15, F12–F14)

**P37. Rapid mixing of the CKG sampler for the 2D transverse-field Ising model up to its critical line** (extends O10) — sharp

Statement. Let $H_h=-\sum_{\langle ij\rangle}Z_iZ_j-h\sum_iX_i$ on an $L\times L$
torus with fixed $h\in(0,h_c)$, and $\mathcal L_\beta$ the
Chen–Kastoryano–Gilyén Lindbladian with single-site Pauli jumps. Conjecture: for
every fixed $\beta<\beta_c(h)$ (the physical phase boundary),
$t_{\rm mix}(\varepsilon)=\mathrm{poly}(n)\log(1/\varepsilon)$; or exhibit slow mixing
strictly inside the paramagnetic phase.

Why now. The quantum analogue of Martinelli–Olivieri's theorem for classical
Glauber dynamics. Rouzé–Stilck França (arXiv:2610.03578, verified) reach classical
references with strong spatial mixing plus small noncommuting perturbations
(perturbatively small field); Gamarnik–Kiani–Zlokapa (arXiv:2411.04300, verified)
prove $t_{\rm mix}=\exp[n^{1/2-o(1)}]$ at low temperature and small field;
Rakovszky–Placke–Breuckmann–Khemani, PRL 137, 050402 (2026) give the bottleneck
theorem. The whole intermediate region at finite $h$ is open. The conjecture is
the reviewers' sharpening; no paper states it explicitly.

**P38. Critical spectral-gap exponent of the Davies generator for the mean-field Heisenberg ferromagnet** (new) — sharp

Statement. For the complete-graph Heisenberg ferromagnet on $n$ qubits with
single-site Davies dynamics, Basso–Bergamaschi–Lin–Ragone–Stubbs prove
$\mathrm{gap}=\Theta(1)$ for $\beta<2$ and $\Theta(n^{-1})$ for $\beta>2$, but only
$\Omega(n^{-1})\le\mathrm{gap}\le O(n^{-1/2})$ at $\beta=2$. Determine the exponent
$\alpha$ with $\mathrm{gap}(\beta=2)=\Theta(n^{-\alpha})$ and the crossover scaling
in the window $\beta=2+cn^{-\gamma}$.

Why now. The first fully rigorous two-sided gap result across a quantum
symmetry-breaking transition (arXiv:2607.21798, verified); the authors "leave open a
complete characterization of when $\beta=2\pm o(1)$ asymptotically approaches
criticality" and list the lattice case ($\mathbb Z^d$, $d\ge3$) as "open after half
a century." Classical analogues (critical Curie–Weiss and SK heat-bath dynamics;
OpenAI family 227) have exact answers.

**P39. Fermi–Hubbard Gibbs sampling: dimension-free threshold and all-temperature mixing in 2D** (extends O10) — sharp

Statement. Bakshi–Moitra–Tan (arXiv:2604.08408v2, verified) give a sampler mixing
in $O(\log(n/\varepsilon))$ for the nearest-neighbour Fermi–Hubbard model on a
$d$-dimensional lattice whenever $\beta\le c/(d^3t_{\max})$, with $U,\mu$
arbitrary. (i) Is the true threshold $\beta t_{\max}\le c'$ with $c'$ independent of
$d$? (ii) For the repulsive 2D model, Mermin–Wagner excludes magnetic long-range
order at any $T>0$ but not discrete-symmetry or Kosterlitz–Thouless transitions
(stripe or pairing orders away from half filling; the attractive model has a
finite-temperature superconducting transition). Conjecture that for every fixed
$\beta$, $U/t>0$ and filling at which the Gibbs state has no finite-temperature
transition there is a quasi-local reversible sampler with
$t_{\rm mix}=\mathrm{poly}(n)$ on the square lattice; and identify a region where a
bottleneck lower bound gives superpolynomial mixing at finite $\beta$. (Corrected
8 Nov 2026: an earlier wording invoked Mermin–Wagner for all transitions.)

Why now. O10 is restricted to spin Hamiltonians; fermionic Gibbs preparation and
the Hubbard model (B10) are not catalogued. Šmíd–Meister–Berta–Bondesan
(arXiv:2510.04954v2) add the strongly interacting regime; Ding–Li–Zhang
(arXiv:2611.03422, verified) give 1D all-temperature thermalization. Caveat: the
Bakshi–Moitra–Tan AI-disclosure subsection could not be retrieved.

**P40. Size- and time-uniform error bounds for coarse-grained and KMS master equations** (sharpens O2) — sharp

Statement. For a $D$-dimensional lattice of $n$ sites, each coupled to its own
bath, and local observables $O$ on $O(1)$ sites, prove
$\sup_{t\ge0}|\operatorname{tr}(O\rho_S(t))-\operatorname{tr}(O\rho_S^{\rm CG}(t))|\le C(\tau_B/\tau_D)^\gamma\|O\|$
with $C,\gamma>0$ independent of $n$ and $t$, under Lieb–Robinson assumptions;
separately decide whether the linear-in-time growth of the global trace-norm error
is optimal.

Why now. Ikeuchi–Mori (arXiv:2604.21366v2, verified) obtain time-uniformity for
fixed dimension but not $n$-uniformity and state as future work "an efficient error
bound that is uniform in time and the system size"; Scandi–Alhambra, PRX 16, 011040
(2026) (verified) obtain quasi-local generators with linear-in-time error.
Ong–Parameswaran–Placke–Hahn, PRA 114, 042445 (2026) (verified abstract).

**P41. The ultimate accuracy–entropy relation for autonomous quantum clocks** (extends O7) — sharp

Statement. For autonomous ticking clocks with entropy production $\Sigma_{\rm tick}$
per tick and accuracy $\mathcal N=\mu^2/\sigma^2$: classical clocks obey
$\mathcal N\le\Sigma_{\rm tick}/2$ (tight), while Meier et al. construct a quantum
ring clock with $\mathcal N=e^{\Omega(\Sigma_{\rm tick})}$. Prove or refute the
existence of a universal $g$ with $\mathcal N\le g(\Sigma_{\rm tick})$ for all
autonomous quantum clocks of unbounded dimension; if it exists, decide whether $g$
is exponential.

Why now. Meier et al., Nat. Phys. (2025), arXiv:2407.07948 (verified): "the
ultimate bounds on this relationship are unknown." Nelmes et al., arXiv:2604.22704;
Honma–Van Vu, PRA 113, 032207 (2026); Miller–Erker, arXiv:2603.04556 (all verified
abstracts).

**P42. The Centeno–Wolfe conjecture: distinguishing quantum causal structures with intermediate latents** (extends F10) — sharp

Statement. Four observed nodes $A,B,C,D$ with settings on $A,B$. DAG (a): three
parallel bipartite intermediate latents; DAG (b): a single tripartite intermediate
latent. Both exogenize to the same DAG, so Quantum Inflation cannot separate them.
Conjecture: $P(a,b,c,d|x,y)=P^{\rm CHSH=2\sqrt2}(a,b|x,y)\,\delta_{b=c=d}$ is
realizable in (b) but not in (a). Companion: are all intermediate-latent variants
of the tetrahedron scenario pairwise observationally distinct?

Why now. Centeno–Wolfe, PRA 112, 042206 (2025), arXiv:2412.10238v3 (Aug 2026;
verified) state the conjecture; Tolotti–Blank-Matthews–Parzygnat, arXiv:2610.10004
(verified) characterize causal confusion via PPT and entanglement-breaking
channels. A concrete falsifiable instance of F10.

**P43. Closing the Markovian Diósi–Penrose window** (extends F1) — sharp (experimental)

Statement. For the Markovian Diósi–Penrose model with free cutoff $R_0$: XENONnT
gives $R_0>4.9\times10^{-10}$ m (90% CL), excluding the parameter-free version
($R_0\approx5\times10^{-12}$ m); classicality requires $R_0\lesssim10^{-4}$ m
(Figurato et al., "to some degree arbitrary"). (i) Make the upper bound rigorous by
fixing a minimal macroscopic-superposition suppression criterion; (ii) design and
run a test sensitive to $R_0\ge10^{-8}$ m. Success: exclusion of the whole window
or a detection.

Why now. Aprile et al. (XENONnT), PRL 136, 120201 (2026), arXiv:2506.05507
(verified); Curceanu–Bortolotti–Diósi–Manti–Piscicchia, arXiv:2610.35608 (verified)
stress that the bounds do not touch Penrose's lifetime criterion or coloured and
dissipative variants; Dey–Barker–Datta, arXiv:2604.21705 (verified). For CSL the
analogous sharp residual is the surviving coloured-noise region.

### 1.6 Items found outside the five sweeps (reviewer's own candidates)

**P44. Håstad-type size lower bound for parity in $\mathsf{QAC}^0$** (new) — sharp

Statement. OpenAI family 274 (two manuscripts, verified via CONTENTS and
`lean/docs/274.md`) claims that constant-depth quantum circuits with arbitrary
one-qubit gates, unbounded-arity Toffoli gates and polynomially many total qubits
cannot compute parity with any fixed positive advantage (Moore's conjecture in the
measured-output model; Lean covers the constant-depth lower bound and the
polynomial-size specialization). Problem: prove the quantitative analogue of
Håstad's theorem: depth-$d$ circuits in this model computing parity on $n$ bits with
advantage $\varepsilon$ require $\exp(\Omega(n^{1/(d-1)}))$ total qubits (or
determine the correct exponent). Companion: the same for $\mathrm{MOD}_q$.

Why now. As of April 2026 the qualitative question was open (Gretta–Gupta,
arXiv:2604.02793, equivalence with Fourier concentration; Nadimpalli et al.
ancilla-bounded results); the claimed resolution makes the size exponent the
natural successor, as in the classical theory.

**P45. Exponential parallel repetition for three-player entangled games** (new) — sharp

Statement. For every finite three-player one-round game with entangled value
$v<1$, prove that the entangled value of the $k$-fold parallel repetition decays as
$\exp(-\Omega_G(k))$ (or exhibit a game with subexponential decay).

Why now. OpenAI family 277 (verified) claims exponential threshold repetition for
all two-player entangled games with rate $\propto\delta^5/(1+\log|\mathcal A||\mathcal B|)$;
Song (ECCC TR26-199, verified) improves the gap exponent to three, matching
Holenstein's classical bound. For three or more players only special classes are
known: GHZ (Braverman–Khot–Minzer, SICOMP 2025), 3-XOR games under a question
condition, free and anchored games (Dinur–Harsha–Venkat–Yuen; Chung–Wu–Yuen). The
general multiplayer case is open, and the two-player tools (correlated sampling)
do not obviously extend.

**P46. Is the continuum electronic-structure problem in QMA?** (new; complements A-category) — sharp

Statement. OpenAI family 275 (verified) claims QMA-hardness of approximating the
ground-energy infimum of the full spinful fermionic continuum Coulomb Hamiltonian
with clamped unit-charge nuclei at rational positions, threshold separation at
least one. Problem: is this promise problem in QMA, i.e. does it admit a
polynomial-size quantum witness and verifier despite the infinite-dimensional
state space (basis-set truncation with certified error)? Equivalently, is continuum
electronic structure QMA-complete?

Why now. O'Gorman–Irani–Whitfield–Fefferman, PRX Quantum 3, 020322 (2022) proved
fixed-basis QMA-completeness and listed the continuum problem and bounded
basis-set-error variants as open; the hardness direction is now claimed, and
containment is untouched. Companion: the Kohn–Sham non-representability result
(family 278) suggests asking for the exact $L^p$ class in which ensemble
$v$-representability fails.

---

## 2. Secondary candidates (one paragraph each)

S1. Gap dependence of the 2D area-law constant (B1): optimal growth of
$C(\gamma)$ as $\gamma\to0$; 1D has $\tilde O(1/\gamma)$ versus
$\Omega(\gamma^{-1/4})$; Kuwahara: "the optimal dependence… is likewise unknown."

S2. Néel order of the 2D spin-1/2 XXZ antiferromagnet for every
$\Delta\in[0,2]$, with certified $m_s\ge0.30$ at $\Delta=1$ (Chadha et al.'s
certificates extend only to intervals of width about $0.002$ in $\Delta$).
Incremental.

S3. Certified value of the Haldane gap $\Delta\ge0.4$ (M5): proved constants are
$\log20/784\approx3.8\times10^{-3}$ (periodic) and $\log10/392$ (boundary field)
against the DMRG value $0.41050(2)$; the Laughlin analogue already improved from
$1/25$ to $1/5$ in two weeks.

S4. Ionization conjecture for pseudo-relativistic (Chandrasekhar) atoms at fixed
$Z\alpha<2/\pi$: Hartree–Fock version proved (Dall'Acqua–Solovej); many-body
asymptotic neutrality status unverified.

S5. Is the chiral sign problem intrinsic? Hardness of estimating the
Witten–Hsu interpolation partition function, or a positivity-restoring change of
variables. Conceptual.

S6. Local-dimension threshold $d^*$ for 1D spectral-gap undecidability (sharpens
U1); Xu et al.'s bulk construction has local dimension $2r+3$. Castilla-Castellano–Lucia
pose it verbatim.

S7. Certified lower bound or gaplessness for the bulk gap of the kagome
antiferromagnet (B15): Xu et al. certify an upper bound $0.94J$ in floating point
and prove lower bounds are not computable in general.

S8. $\theta$-dependence of 4D Yang–Mills: non-constancy of $E(\theta)$ or a
positive topological susceptibility surviving the continuum limit; no rigorous
literature found.

S9. Bell-nonlocal (or steerable) states with $K_D=0$: PPT states violating Bell
inequalities exist (Vértesi–Brunner 2014; Singh–Banik, arXiv:2610.19905), and a
zero-key PPT state is now claimed; openness plausible but unconfirmed.

S10. Rényi-$\alpha$ entanglement of purification additivity for classical
two-qubit states, $\alpha\in[1,2)$ (Negari–Baghali Khanian's conjecture;
Faraji, arXiv:2611.00144, proves Rényi-2 additivity for symmetric Werner states).

S11. $C_{qa}=C_{qc}$ in the $(3,3;2,2)$ scenario (N4): Gao–Yu–Zhi's explicit
Tsirelson counterexample has 1,417,152 equations; Krohn-Grimberghe proves equality
of values for I3322.

S12. Bell-locality threshold of two-qutrit Werner states under projective
measurements (N11 analogue): Caban–Mohsin, arXiv:2610.02997, prove locality in the
CGLMP scenario for all $p$; the general question is open to our knowledge.

S13. Two-sided computability of squashed entanglement (E9): Ahmed–Smith,
arXiv:2609.14031, prove no cardinality bound on the conditioning system even for a
dephased Bell pair, closing the naive route.

S14. Entanglement-assisted Shannon capacity of $C_7$ (C6): decide
$\Theta^*(C_7)>\Theta(C_7)$ and $\Theta^*(C_7)=\vartheta(C_7)\approx3.3177$;
Mghirbi–Douglas, arXiv:2610.20775, show $\vartheta$ is not alone in the assisted
spectrum. Openness unverified.

S15. Energy-constrained exponential strong converse for adaptive two-way
protocols over pure loss (C3/C10): author-stated open problem (Pirandola,
arXiv:2610.06832; Adesso–Lami–Giovannetti, arXiv:2610.22308).

S16. QMA versus ClonableQMA relative to a classical oracle (A3):
Cakan–Chung–Hung–Yang Conjecture 1 (arXiv:2610.06740).

S17. Optimal time overhead of constant-space fault tolerance (A18 adjacent):
Han–Liu reach depth $O(D\log(WD/\varepsilon))$ (arXiv:2609.28461);
Bharti–Haug–Tanggara prove a spacetime lower bound (arXiv:2608.26272); is
$\Omega(\log1/\varepsilon)$ depth overhead necessary?

S18. Product expansion of Reed–Solomon codes over binary extension fields
(Bafna–Li–Nguyen Conjecture 5.6, arXiv:2609.26735) and existence of imbalanced
two-sided lossless 4-dimensional cubical complexes (Cohen et al., arXiv:2610.00525);
the conditional routes to A7 that Gay–Jeronimo's claim does not settle.

S19. Single-family exact quartic separation and $Q$ versus approximate degree
(A16 archive): OpenAI family 284 rules out every exponent below 4 for $R$ versus
$Q$ via a sequence of families; whether one family achieves exponent exactly 4,
and the largest $Q/\widetilde{\deg}$ gap, remain.

S20. Arrhenius lower bound for local KMS samplers versus a quasi-local
"quantum Swendsen–Wang" for noncommuting ferromagnets (O10); the only
construction claim is an unrefereed Zenodo preprint (Rey, Jul 2026).

S21. No-go theorem for leading-order-accurate Lindblad descriptions of
nonequilibrium steady states with two baths (O2): Sarma–Kulkarni–Purkayastha–Tupkary,
PRA 114, 012423 (2026), have SDP evidence, no analytic criterion.

S22. Finite-clock corrections to the autonomous work operator (O7/O8):
Cepollaro et al., arXiv:2607.20602, leave the finite back-reacting clock case open.

S23. Are the pure unique-sink-orientation process matrices outside QC-QC
(F9)? Shmueli, arXiv:2610.40573: "we do not even know whether all pure processes
are physical"; Salzger–Vilasini, arXiv:2605.08351, fix the fixed-spacetime boundary.

S24. Operational distinguishability of quantum-reference-frame transformation
rules for non-ideal frames (F8): Castro-Ruiz–Galley–Loveridge, PRA 114, 032201
(2026); Garmier–Hausmann–Castro-Ruiz, arXiv:2512.19343v2.

---

## 3. Status findings on existing entries (not applied here)

These were discovered during the sweeps and should go into the next literature
update, with the usual version pinning and provenance records.

1. **A11 → claimed solved.** Physical Superintelligence announced on 6 Nov 2026 a
   Lean-checked proof of the Aaronson–Ambainis conjecture ($\mathrm{Inf}_i\ge cv^{5/2}/d^6$),
   produced with "a non-public Anthropic model"; exposition by Blanc–Docter–Strassle–Tan
   forthcoming; no arXiv ID; not peer reviewed (psi.inc/research/aaronson-ambainis,
   github.com/physical-superintelligence/aaronson-ambainis).
2. **New quantum-magnetism cluster.** Chadha–Wang–Nosov–Scheer–Khalaf,
   arXiv:2611.03241, claim Néel order for the 2D spin-1/2 Heisenberg
   antiferromagnet (no catalogue entry); OpenAI family 271 proves spontaneous
   magnetization and Bloch's $T^{3/2}$ law for 3D quantum Heisenberg
   ferromagnets. Consider a watchlist item or a new entry (P8, P9).
3. **N4.** Douglas (arXiv:2609.05555v2) and Krohn-Grimberghe (arXiv:2609.29693)
   claim $C_q(3,3;2,2)$ is not closed (I3322), smaller than the cited five-input
   example.
4. **C11.** Ahmed et al., arXiv:2609.39747: depolarizing threshold lower bound
   $q_*\ge0.2029161$, beyond the current $0.194868$ certificate.
5. **A4.** Liu–Vidick, arXiv:2609.15926: independent second proof of
   $\mathsf{QMA}=\mathsf{QMA}_1$ (also $\mathsf{QIP}(2)$ and qq-$\mathsf{QAM}$).
6. **C12 / E16.** `lean/docs/272.md` formalizes exactly the two composition
   statements; the zero-key theorem is not formalized; the zero-key state is PPT;
   minimality of dimensions 10 and 21 is disclaimed.
7. **M2.** The claimed a.c. interval is a fixed sliver at the lower band edge
   (width below $5\cdot10^{-5}$ for $d=3$); the entry's wording "an open energy
   interval independent of the disorder strength" is correct but should say where
   the interval sits.
8. **M12.** OpenAI 2D manuscript explicitly excludes dynamical localization and
   eigenfunction decay; Lean covers only the spectral set.
9. **M13.** Read–Schulz (arXiv:2609.10478) and OpenAI family 262 close the 1D
   Lieb–Thirring cases; $L_{1,d}\le(2/\sqrt3)L^{\rm cl}_{1,d}$ is the new best
   general bound. Context update.
10. **C1.** Kitamura's Lean draft claiming Holevo additivity for all qubit
    channels (GitHub, unrefereed). Watchlist.
11. **A6 / A10 / A18 / C2.** Bafna–Nguyen–Zhang, arXiv:2610.04952 (combinatorial
    gap amplification); Sen, arXiv:2611.02370 (state synthesis with an NP
    oracle); Bharti–Haug–Tanggara, arXiv:2608.26272 and Han–Liu, arXiv:2609.28461;
    Mele et al., arXiv:2607.27449 ($Q>0$ for $\eta\ge0.7841$ at $\nu=1$).
12. **E11 / E3 / N7.** Ao–Philip–Streltsov, arXiv:2611.06573 (correlated
    catalysis cannot make bound entanglement distillable); Brinster et al.,
    arXiv:2609.20698 (no finite collapse of the entanglement-cost hierarchy);
    Mančinska, arXiv:2610.06512 (Flagged Magic-Square self-tests a non-maximally
    entangled state).

Also noted: Han, arXiv:2611.04131 (QUE with polynomial rate iff Egorov holds to
$-T_E$ with polynomial remainder; cross-reference for M8/F6); Yang, arXiv:2611.01520
(order-optimal $e^{O(\beta)}$ Hamiltonian learning from Gibbs states; O9);
Kidmose-Frederiksen–Nielsen, arXiv:2610.05280 (quantum $n$-colouring undecidable for
$n\ge3$; nonlocality).

---

## 4. Caveats

- None of the OpenAI manuscripts is refereed; their theorems were read directly but
  proofs were not audited, and in families 261, 263 and 267 the Lean formalization
  covers a weaker statement than the headline.
- Openness of P1, P2, P4, P7, P10 rests on the resolving papers' own scope statements
  plus arXiv sweeps through 8 November 2026; GitHub-only releases could exist.
- P37 and P39 are the reviewers' sharpenings of principles stated by the authors;
  no paper states those conjectures verbatim.
- P9 (triangular lattice), S4, S9, S12, S14 are classical or plausible open
  questions whose openness could not be confirmed by a 2026 source stating it.
- P34 depends on an announcement that has no arXiv manuscript yet.
- Suggested ID ranges are placeholders; assignment, relations and `reviewedAt`
  fields are left to the integration step, together with `npm test`.

---

## 5. Deferred: two externally proposed programmes to revisit later

Source: an unpublished exploratory note, "Trois pistes de recherche en physique
quantique, Étape 1" (8 November 2026, produced with ChatGPT Astra for the
maintainer). Its first proposal (cost of conditionally independent witnesses
under a conservation law) was assessed here as an elementary corollary of
block-diagonality under total charge and a path-graph bound on the achievable
total-variation distance, with log(1+W_min) between (R/2)·L and R·L,
L = −½ log(4p(1−p)). At the maintainer's request it is kept on the site as a
"New result" (R1, proof sketch, not refereed), with the exact constant left open.
The other two are kept as programmes to
revisit after an anteriority audit; they are not catalogue entries and are not
shown on the site.

D1. Classicalization of hydrodynamic memory in U(1)-symmetric random circuits.
Conjecture: at fixed window size, the averaged operational distance of the
observed multi-time process to the class of classical-memory processes decays
exponentially in the inter-intervention time, while the distance to memoryless
processes decays only algebraically (ratio → 0). Points to settle first: the
per-realization versus averaged-process formulation (only the Haar-averaged
process has an autonomous classical charge dynamics); whether the algebraic
non-conserved tails of Khemani–Vishwanath–Huse are reproducible by classical
memory; a witness excluding all classical-memory models, not one model.

D2. Quantum connectivity visible only in time. Question: is there a controlled
graph Hamiltonian H = ΩX_G + Σ_g |g⟩⟨g|⊗H_g on three or four sites such that a
single classical fluctuating-graph law reproduces every single-time channel
Φ_t exactly on [0,T], while some multi-time process with interventions on the
particle alone lies at distance ≥ ε⋆ from every classical-memory model? Points to
settle first: with the maximally mixed control, Φ_t equals the static mixture of
U_0 and U_1 to order t²; deviations at order Ω²t³ exclude Markovian telegraph
noise but not renewal processes; compute the order-t⁴ obstruction on the
chain/star pair; audit the literature on witnesses of quantum versus classical
two-level fluctuators and on dimension-bounded quantum memory (Taranto et al.).
