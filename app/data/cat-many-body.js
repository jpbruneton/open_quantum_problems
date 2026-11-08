const r = String.raw;
// OpenAI Math Release, pinned to the commit reviewed on 17 October 2026.
const OAI = "https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/";

export const MANYBODY = [
  { id: "B1", cat: "many-body", horizon: "sharp", status: "claimed-solved",
    reviewedAt: "2026-10-17",
    evidence: [
      { kind: "preprint", role: "claimed-solution", summary: "Claimed entropy area law for the unique ground state of any uniformly gapped finite-range Hamiltonian on any finite induced square-lattice subgraph, for every subset; OpenAI GitHub manuscript, pending assessment.", url: `${OAI}preprints/A-two-dimensional-area-law-from-a-global-spectral-gap-September-24-2026/paper.pdf`, date: "2026-10-06", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Uniformly gapped, unique-ground-state examples with volume-law Rényi entropy below order one but a von Neumann area law; a comparison, not a counterexample to B1.", url: "https://arxiv.org/abs/2610.15199v1", date: "2026-10-10", version: "v1" },
    ],
    provenance: [
      { summary: "OpenAI lists itself as author and states that an unreleased internal model produced the manuscript collection. No Lean formalization is listed for the area-law family. This is OpenAI's account.", url: `${OAI}README.md` },
      { summary: "Kuwahara reports extensive ChatGPT use from GPT-5 through GPT-5.6 and GPT-6 Astra for proof exploration, derivations, consistency checks and alternative approaches, with the research programme and framework developed by the author.", url: "https://arxiv.org/abs/2610.15199v1", version: "v1" },
    ],
    title: "Area law in two spatial dimensions",
    statement: r`For a family of finite-range 2D lattice Hamiltonians with fixed on-site dimension, uniformly bounded interaction strength, a unique ground state and a uniform spectral gap, prove $S(\rho_A)\le C|\partial A|$ for square regions $A$, with $C$ independent of system and region size.`,
    definition: r`**The area law** says that the entanglement entropy of a region $A$ in a gapped ground state scales with the size of its boundary $|\partial A|$ rather than its volume. It underlies why gapped ground states are efficiently describable by tensor networks and is a cornerstone of Hamiltonian complexity.

The one-dimensional law for unique gapped ground states is established; the two-dimensional unique-ground-state formulation stated above was a central open target. Standard review: Eisert, Cramer and Plenio, Rev. Mod. Phys. 82, 277 (2010), [arXiv:0808.3773](https://arxiv.org/abs/0808.3773).`,
    progress: r`- The one-dimensional unique-gapped-ground-state area law is established (Hastings, [arXiv:0705.2024](https://arxiv.org/abs/0705.2024)), with subsequently improved quantitative gap and local-dimension dependence (Arad, Kitaev, Landau and Vazirani, [arXiv:1301.1162](https://arxiv.org/abs/1301.1162)).
- In 2D there are important structured cases. The Anshu–Arad–Gosset frustration-free theorem assumes a local gap and a specified cut geometry ([arXiv:2103.02492](https://arxiv.org/abs/2103.02492)); it is not a theorem for every frustration-free Hamiltonian. Suitable stabilizer constructions and controlled deformations give other positive examples.
- Ground-space assumptions are essential: on-site projectors pinning one sublattice and leaving the other spins free produce a gap of one but allow volume-entangled ground states. Thus a gap alone cannot imply the law for every vector of an unrestricted degenerate ground space. Topologically degenerate models require their own explicit local-ground-space hypotheses.
- Comparison (10 October 2026): Kuwahara constructs uniformly gapped finite-range Hamiltonians with unique ground states whose Rényi-$\alpha$ entropies for $0<\alpha<1$ obey a volume law, while their von Neumann entropy obeys an area law ([arXiv:2610.15199](https://arxiv.org/abs/2610.15199v1)). This disproves the Rényi area-law conjecture below order one in dimensions at least two; it is compatible with the von Neumann statement above.`,
    claim: r`**OpenAI, [“A two-dimensional area law from a global spectral gap”](${OAI}preprints/A-two-dimensional-area-law-from-a-global-spectral-gap-September-24-2026/paper.pdf)** (OpenAI Math Release on GitHub, not on arXiv; dated 24 September 2026, public 6 October 2026).

What it claims:
- For a finite-range Hamiltonian on any finite induced subgraph of the square lattice with a unique ground state, a lower bound on the full-system gap and fixed bounds on local dimension, range and strength, the entanglement entropy of every site set is at most a constant times the number of boundary-crossing edges.
- This covers square regions with constants independent of system and region size.

Caveats:
- It is a GitHub release, not peer reviewed, and no Lean formalization is listed for the area-law family.
- OpenAI states that an unreleased internal model produced the manuscript collection.
- Independent assessment is pending.`,
    residual: r`A theorem about entanglement is not itself a total algorithm for deciding whether the gap promise holds; U1 does not automatically preclude such a conditional theorem. Representation and efficient computation are distinct further questions (B2, B3).`,
    refs: [
      { label: "Hastings, 'An area law for one-dimensional quantum systems', J. Stat. Mech. (2007) P08024", url: "https://arxiv.org/abs/0705.2024" },
      { label: "Arad, Kitaev, Landau, Vazirani, 'An area law and sub-exponential algorithm for 1D systems' (2013)", url: "https://arxiv.org/abs/1301.1162" },
      { label: "Eisert, Cramer, Plenio, 'Colloquium: Area laws for the entanglement entropy', Rev. Mod. Phys. 82, 277 (2010)", url: "https://arxiv.org/abs/0808.3773" },
      { label: "Anshu, Arad & Gosset, 'An area law for 2D frustration-free spin systems', STOC 2022 (local-gap hypotheses)", url: "https://arxiv.org/abs/2103.02492" },
      { label: "OpenAI, 'A two-dimensional area law from a global spectral gap' (OpenAI Math Release manuscript, dated 24 September 2026; public 6 October 2026)", url: `${OAI}preprints/A-two-dimensional-area-law-from-a-global-spectral-gap-September-24-2026/paper.pdf` },
      { label: "Kuwahara, 'The Rényi area law conjecture is false below α=1 in high dimensions' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.15199v1" },
    ] },

  { id: "B2", cat: "many-body", horizon: "sharp", status: "improved",
    reviewedAt: "2026-10-17",
    evidence: [
      { kind: "preprint", role: "progress", summary: "Claimed PEPS with bond dimension polynomial in $L$ and global vector error at most $L^{-1}$ for uniformly gapped nearest-neighbor ground states on open $L\\times L$ squares; not arbitrary accuracy $\\epsilon$ or general finite range. OpenAI GitHub manuscript.", url: `${OAI}preprints/Polynomial-PEPS-approximation-of-gapped-square-grid-ground-states-September-24-2026/paper.pdf`, date: "2026-10-06", version: "v1" },
    ],
    provenance: [
      { summary: "OpenAI lists itself as author and states that an unreleased internal model produced the manuscript collection. No Lean formalization is listed for this family. This is OpenAI's account.", url: `${OAI}README.md` },
    ],
    title: "Efficient tensor-network approximation in 2D",
    statement: r`For every fixed-range, bounded-strength 2D Hamiltonian family with fixed on-site dimension, a unique ground state and a uniform gap, does there exist a normalized pure PEPS approximating the ground-state vector to norm error $\epsilon$ with bond dimension polynomial in the number of sites $N$ and $1/\epsilon$?`,
    definition: r`**Efficient PEPS approximation** asks whether the unique ground state of a uniformly gapped 2D local Hamiltonian can be approximated in global vector norm by a normalized pure PEPS whose bond dimension is polynomial in the number of sites and the inverse accuracy. This is an existence question about a pure-state representation, not an algorithm for discovering it or contracting it. The polynomial may depend on the fixed local dimension, range, interaction bound and gap lower bound, but not on system size. Global vector-norm error is deliberately stronger than reproducing bounded-region reduced states.

In one dimension the analogous statement for matrix product states is known; in two dimensions it is open. Standard review: Cirac, Pérez-García, Schuch and Verstraete, Rev. Mod. Phys. 93, 045003 (2021), [arXiv:2011.12127](https://arxiv.org/abs/2011.12127).`,
    progress: r`- In 1D, an area law plus a spectral gap yields an efficient MPS approximation, and the ground state can be found in polynomial time (Landau, Vazirani and Vidick, [arXiv:1307.5143](https://arxiv.org/abs/1307.5143)).
- In 2D the chain of implications breaks: bounded entropy across cuts does not obviously bound the bond dimension needed for a global PEPS, and contracting a general 2D PEPS is itself #P-hard (see B3), so even having a PEPS description need not make it useful.
- Gibbs-state PEPS approximations (Molnár, Schuch, Verstraete and Cirac, [arXiv:1406.2973](https://arxiv.org/abs/1406.2973)) and local-observable approximation theorems do not automatically establish the global pure-state statement. An area-law bound on von Neumann entropy alone is not a universal efficient-representation theorem.
- OpenAI, [“Polynomial PEPS approximation of gapped square-grid ground states”](${OAI}preprints/Polynomial-PEPS-approximation-of-gapped-square-grid-ground-states-September-24-2026/paper.pdf) (OpenAI Math Release on GitHub, not on arXiv; dated 24 September 2026, public 6 October 2026): for uniformly gapped nearest-neighbor Hamiltonians with unique ground states on open $L\times L$ squares, a PEPS with bond dimension polynomial in $L$ and normalized global vector error at most $L^{-1}$ is claimed, using only the full-system gap and the companion area law (B1). This is an existence theorem at one inverse-polynomial accuracy schedule.`,
    residual: r`The stated target asks for polynomial dependence on both $N$ and $1/\epsilon$ for every accuracy and for general fixed range, which the square-grid result above does not give.

A distinct weaker target asks for trace-distance error at most $\epsilon$ on every region of a fixed size. Its scaling must be stated separately; allowing mixed or purified tensor networks can also change the task.`,
    refs: [
      { label: "Cirac, Pérez-García, Schuch & Verstraete, 'Matrix product states and projected entangled pair states: Concepts, symmetries, and theorems', Rev. Mod. Phys. 93, 045003 (2021)", url: "https://arxiv.org/abs/2011.12127" },
      { label: "Landau, Vazirani, Vidick, 'A polynomial-time algorithm for the ground state of 1D gapped Hamiltonians', Nat. Phys. 11 (2015)", url: "https://arxiv.org/abs/1307.5143" },
      { label: "Molnár, Schuch, Verstraete & Cirac, 'Approximating Gibbs states of local Hamiltonians efficiently with PEPS', PRB 91, 045138 (2015)", url: "https://arxiv.org/abs/1406.2973" },
      { label: "OpenAI, 'Polynomial PEPS approximation of gapped square-grid ground states' (OpenAI Math Release manuscript, dated 24 September 2026; public 6 October 2026)", url: `${OAI}preprints/Polynomial-PEPS-approximation-of-gapped-square-grid-ground-states-September-24-2026/paper.pdf` },
    ] },

  { id: "B3", cat: "many-body", horizon: "incremental",
    title: "Efficient contraction of physically restricted PEPS",
    statement: r`For injective 2D PEPS specified by finite-precision tensors, establish checkable boundary-mixing and conditioning promises that allow normalized bounded-support expectation values to be computed to additive error $\epsilon$ in time polynomial in input length and $1/\epsilon$. State whether a uniform parent gap suffices within the chosen class.`,
    definition: r`**PEPS contraction** is the task of extracting expectation values from a compact PEPS description of a state. Exact contraction, relative approximation of a norm, and additive approximation of a normalized observable are different computational tasks; a hardness result must specify which one and its precision promises.

Worst-case hardness results obstruct a general polynomial algorithm under the corresponding complexity assumptions (Schuch, Wolf, Verstraete and Cirac, PRL 98, 140506 (2007), [arXiv:quant-ph/0611050](https://arxiv.org/abs/quant-ph/0611050)), so the question is which physically restricted classes admit efficient contraction.`,
    progress: r`- Numerical boundary-MPS and corner-transfer methods often perform well, but injectivity or finite correlation length alone is not an unconditional polynomial-time certificate.
- Schwarz, Buerschaper and Eisert give a quasi-polynomial local-observable algorithm under explicit injectivity, gap and conditioning assumptions ([arXiv:1606.06301](https://arxiv.org/abs/1606.06301)). This is not a general polynomial contraction theorem.`,
    residual: r`The residual is to close the algorithmic gap in a named promise family, or exhibit an obstruction preserving those promises. Specify accessible boundary data, tensor conditioning and bond-dimension scaling; the phrase 'largest natural class' has no mathematical success criterion. This task is separate from existence of a representation (B2), certifying the parent gap (M7) and finding tensors from a Hamiltonian.`,
    refs: [
      { label: "Schuch, Wolf, Verstraete, Cirac, 'Computational complexity of PEPS', PRL 98, 140506 (2007)", url: "https://arxiv.org/abs/quant-ph/0611050" },
      { label: "Cirac, Pérez-García, Schuch & Verstraete, 'Matrix product states and projected entangled pair states: Concepts, symmetries, and theorems', Rev. Mod. Phys. 93, 045003 (2021)", url: "https://arxiv.org/abs/2011.12127" },
      { label: "Schwarz, Buerschaper & Eisert, 'Approximating local observables on projected entangled pair states', PRA 95, 060102 (2017)", url: "https://arxiv.org/abs/1606.06301" },
    ] },

  { id: "B4", cat: "many-body", horizon: "incremental",
    title: "Eigenstate thermalization hypothesis",
    statement: r`For a specified deterministic nonintegrable local Hamiltonian, prove quantitative ETH estimates in a fixed symmetry sector and finite-energy-density window for a stated class of local observables. Distinguish all-eigenstate (strong) ETH, vanishing-fraction exceptions (weak ETH), and statistical off-diagonal estimates.`,
    definition: r`**The eigenstate thermalization hypothesis** (ETH) posits that matrix elements of local observables in the energy eigenbasis take the Srednicki form, with smooth diagonal parts (equal to the microcanonical average) and pseudo-random, exponentially-small-in-entropy off-diagonal parts. If ETH holds, individual eigenstates already look thermal and expectation values relax to Gibbs values.

ETH, introduced by Deutsch and Srednicki, explains how isolated quantum systems thermalize. Standard review: D'Alessio, Kafri, Polkovnikov and Rigol, Adv. Phys. 65 (2016), [arXiv:1509.06411](https://arxiv.org/abs/1509.06411).`,
    progress: r`- Numerical evidence supports ETH in many nonintegrable chains, and controlled random-matrix/circuit or specially structured models admit rigorous results.
- Canonical typicality concerns typical vectors in a subspace, not automatically the actual eigenbasis of a deterministic Hamiltonian.
- Weak ETH theorems under specific assumptions do not imply strong ETH; some integrable models can satisfy weak local statements while failing the stronger thermalization picture. Rare scars can violate strong ETH without disproving weak ETH.`,
    residual: r`Deriving ETH from the structure of a concrete, non-random local Hamiltonian — checkable sufficient conditions guaranteeing the diagonal and off-diagonal ansatz for its actual eigenstates — is open. This is the incremental, rigorous heart of quantum thermalization. Related: B5, B7, M4, U3.`,
    refs: [
      { label: "Deutsch, 'Quantum statistical mechanics in a closed system', PRA 43, 2046 (1991)", url: "https://doi.org/10.1103/PhysRevA.43.2046" },
      { label: "Srednicki, 'Chaos and quantum thermalization', PRE 50, 888 (1994)", url: "https://doi.org/10.1103/PhysRevE.50.888" },
      { label: "D'Alessio, Kafri, Polkovnikov & Rigol, 'From quantum chaos and eigenstate thermalization to statistical mechanics and thermodynamics', Adv. Phys. 65 (2016)", url: "https://arxiv.org/abs/1509.06411" },
    ] },

  { id: "B5", cat: "many-body", horizon: "programme", status: "improved",
    provenance: [
      { summary: "The authors acknowledge GPT 5.5–6 and Claude Fable 5–5.1 for technical assistance in their proofs.", url: "https://arxiv.org/html/2609.35973v1", version: "v1" },
    ],
    evidence: [
      { kind: "preprint", role: "progress", summary: "Structural theory of dynamical steady states in translation-invariant spin systems: equilibrium steady states force conservation of specific energy, a dynamical Gibbs variational principle, and thermalization criteria conditional on restored locality and classification of local constants of motion; no model is proved to thermalize unconditionally.", url: "https://arxiv.org/abs/2610.21475v1", date: "2026-10-15", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Conservation of specific entropy, energy and relative entropy under stated interaction assumptions, with weak Gibbsianity preserved for short times in any dimension and all times in one dimension; the analytic input for the structural theory.", url: "https://arxiv.org/abs/2610.21489v1", date: "2026-10-15", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Conditional 1D local thermalization for specified initial ensembles and nondegenerate energy gaps; no general relaxation-time estimate.", url: "https://arxiv.org/abs/2609.35973v1", date: "2026-09-28", version: "v1" },
    ],
    reviewedAt: "2026-10-26",
    title: "Unitary derivation of thermalization",
    statement: r`For a specified translation-invariant nonintegrable local Hamiltonian and a stated low-correlation initial-state family with narrow energy density, prove local-observable convergence or time-fraction closeness to the appropriate thermal ensemble, with explicit relaxation times, finite-size errors and ordering of limits.`,
    definition: r`**Unitary derivation of thermalization** means proving from the microscopic unitary dynamics that a nonintegrable many-body system relaxes to thermal equilibrium, with explicit relaxation time scales, bounds on residual fluctuations, and control of finite-size effects. It goes beyond ETH as an ansatz (B4). Finite closed systems recur, so persistent global trace-norm convergence cannot be the unrestricted target.

Standard review: Gogolin and Eisert, Rep. Prog. Phys. 79 (2016), [arXiv:1503.07538](https://arxiv.org/abs/1503.07538).`,
    progress: r`- Equilibration-on-average theorems (for example Linden, Popescu, Short and Winter, [arXiv:0812.2385](https://arxiv.org/abs/0812.2385)) use effective-dimension and energy-gap nonresonance or bounded-degeneracy assumptions to bound fluctuations around a time-averaged state; these are not assumptions of a positive ground-state spectral gap. They do not alone identify that state with a Gibbs ensemble or give physically useful relaxation times.
- Controlled free and selected integrable quenches have generalized-ensemble results; this is not a universal relaxation theorem for every integrable model.
- Pilatowsky-Cameo, Styliaris, Bakshi and Malz (28 September 2026) derive local thermalization for translation-invariant spin chains with nondegenerate energy gaps and maximally entropic ensembles of low-complexity initial states at fixed positive temperature (Corollary 4) ([arXiv:2609.35973](https://arxiv.org/abs/2609.35973v1)). The result controls ensemble/time-averaged local deviations and finite-size errors. It supplies no general finite relaxation-time bound and does not cover arbitrary initial states.
- Jakšić, Pillet and Szczepanek (15 October 2026) continue their structural theory of approach to equilibrium in translation-invariant quantum spin systems ([arXiv:2610.21475](https://arxiv.org/abs/2610.21475v1)). Dynamical steady states are defined as weak-* limit points of time-averaged evolution; if such a state is an equilibrium state of a sufficiently regular interaction, the specific energy of that interaction must be a constant of the motion, and the asymptotic equilibrium states minimize the specific relative entropy from the initial state. Thermalization is reduced to two model-dependent questions: restoration of a local thermodynamic description at large times and classification of the local constants of motion; if finite-range locality is restored and energy is the only finite-range constant, every steady state is thermal at the energy-fixed temperature. A companion paper proves the finite-time conservation laws behind this, using Lieb–Robinson bounds in any dimension and Araki's bounds in one dimension ([arXiv:2610.21489](https://arxiv.org/abs/2610.21489v1)). This sharpens what must be proved for a concrete nonintegrable model; it proves thermalization for none, and gives no relaxation times.`,
    residual: r`The residual programme combines ensemble identification, local relaxation and quantitative rates for concrete interacting models. Conserved charges and symmetry sectors must be fixed; arbitrary initial states include deliberately stationary or atypical ones.

Non-Abelian subtarget: for a model with conserved noncommuting charges, derive the appropriate local equilibrium predictions and finite-size/rate bounds under a stated charge-preparation convention (see the quantum-thermodynamics roadmap of Campbell et al., [arXiv:2504.20145](https://arxiv.org/abs/2504.20145)). Noncommuting charges cannot simply be assigned simultaneous sharp values. This is an operational extension of thermalization, not a claim that no non-Abelian thermodynamic formalism exists. Related: B4, B6, O10.`,
    refs: [
      { label: "Jakšić, Pillet & Szczepanek, 'Approach to Equilibrium in Translation-Invariant Quantum Systems: Structural Results II' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.21475v1" },
      { label: "Jakšić, Pillet & Szczepanek, 'Dynamical Conservation Laws in Quantum Spin Systems' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.21489v1" },
      { label: "Saúl Pilatowsky-Cameo, Georgios Styliaris, Ainesh Bakshi, Daniel Malz, 'One-dimensional quantum Gibbs states in constant circuit depth' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.35973v1" },
      { label: "Linden, Popescu, Short, Winter, 'Quantum mechanical evolution towards thermal equilibrium', PRE 79, 061103 (2009)", url: "https://arxiv.org/abs/0812.2385" },
      { label: "Gogolin & Eisert, 'Equilibration, thermalisation, and the emergence of statistical mechanics in closed quantum systems', Rep. Prog. Phys. 79 (2016)", url: "https://arxiv.org/abs/1503.07538" },
      { label: "Campbell et al., 'Roadmap on Quantum Thermodynamics', Quantum Sci. Technol. 11, 012501 (2026) — includes non-Abelian conservation-law questions", url: "https://arxiv.org/abs/2504.20145" },
    ] },

  { id: "B6", cat: "many-body", horizon: "programme",
    title: "Derivation of quantum hydrodynamics",
    statement: r`For a concrete deterministic nonintegrable quantum lattice model with a specified conserved density, derive a diffusive scaling limit with finite positive diffusion coefficient and controlled errors for smooth initial profiles. Treat ballistic Euler limits and nonlinear fluctuations as separate subtargets.`,
    definition: r`**Quantum hydrodynamics** is the effective large-scale description of conserved densities via diffusion or ballistic transport, expected to emerge from microscopic quantum dynamics. Deriving it rigorously is a longstanding challenge, the quantum analogue of Hilbert's sixth problem for classical mechanics.

Standard review: Bertini et al., Rev. Mod. Phys. 93, 025003 (2021), [arXiv:2003.03334](https://arxiv.org/abs/2003.03334).`,
    progress: r`- Generalized hydrodynamics provides a powerful Euler-scale theory for integrable systems (Castro-Alvaredo, Doyon and Yoshimura, [arXiv:1605.07331](https://arxiv.org/abs/1605.07331)), with rigorous results in controlled settings and extensive physical support. Its derivation and validity assumptions are model dependent; it is not a universal error-controlled diffusion theorem for nonintegrable lattices.
- KPZ-type behavior and ballistic transport require different scaling questions.
- Rigorous classical interacting-particle hydrodynamic limits supply methodology rather than an automatic quantum proof.`,
    residual: r`Deriving normal diffusion — a finite diffusion constant — from a genuinely interacting, non-integrable quantum lattice model, with quantitative error bounds in a diffusive scaling limit, remains open and is a central programme in mathematical statistical mechanics. Related: B5, B12.`,
    refs: [
      { label: "Castro-Alvaredo, Doyon, Yoshimura, 'Emergent hydrodynamics in integrable quantum systems out of equilibrium', PRX 6, 041065 (2016)", url: "https://arxiv.org/abs/1605.07331" },
      { label: "Bertini et al., 'Finite-temperature transport in one-dimensional quantum lattice models', Rev. Mod. Phys. 93, 025003 (2021)", url: "https://arxiv.org/abs/2003.03334" },
    ] },

  { id: "B7", cat: "many-body", horizon: "incremental",
    title: "Stability of fragmentation and many-body scars",
    statement: r`For a specified constrained spin model, determine which fragmentation or scar diagnostics survive bounded local perturbations preserving its stated exact symmetries, and bound the system-size and perturbation dependence of memory or revival lifetimes.`,
    definition: r`**Ergodicity-breaking mechanisms** let quantum systems evade the ETH paradigm: integrability (extensively many local conserved charges), many-body localization (emergent l-bits under disorder), Hilbert-space fragmentation (dynamical shattering of the state space into exponentially many disconnected sectors), quantum many-body scars (rare non-thermal eigenstates, as in the PXP/Rydberg model), and pseudolocal or non-Abelian conserved quantities. The question here is the stability of fragmentation and scars under perturbations.

Standard review: Serbyn, Abanin and Papić, Nat. Phys. 17, 675 (2021), [arXiv:2011.09486](https://arxiv.org/abs/2011.09486).`,
    progress: r`- Each mechanism has its own well-developed theory and diagnostic (level statistics, entanglement scaling, revivals, commutant algebras for fragmentation).
- Moudgalya and Motrunich organize scars and fragmentation via commutant algebras, a promising unifying language ([arXiv:2108.10324](https://arxiv.org/abs/2108.10324)).
- Integrability is understood via Bethe ansatz / Yang–Baxter structure.`,
    residual: r`The useful frontier is a stability theorem or counterexample for a fixed mechanism and perturbation class, not the existence of one language for every failure of ETH. Exact fragmentation, long-lived approximate conservation and rare eigenstate scars are distinct. A finite-time revival is not by itself a stable phase; the order of infinite-volume, long-time and vanishing-perturbation limits matters. MBL is treated separately in M4.`,
    refs: [
      { label: "Serbyn, Abanin, Papić, 'Quantum many-body scars and weak breaking of ergodicity', Nat. Phys. 17, 675 (2021)", url: "https://arxiv.org/abs/2011.09486" },
      { label: "Moudgalya & Motrunich, 'Hilbert space fragmentation and commutant algebras', PRX 12, 011050 (2022)", url: "https://arxiv.org/abs/2108.10324" },
    ] },

  { id: "B8", cat: "many-body", horizon: "programme", status: "improved",
    reviewedAt: "2026-09-10",
    evidence: [
      { kind: "preprint", role: "progress", summary: "Decomposition theorem for locally finite-dimensional fermionic QCA; QCA triviality does not mean all 2D gapped phases are trivial.", url: "https://arxiv.org/abs/2609.09317v1", date: "2026-09-08", version: "v1" },
    ],
    provenance: [
      { summary: "Kwan, Long and Haah report Claude and ChatGPT use for figure-generation scripts and literature searches. This declaration does not attribute the mathematical proof to those tools.", url: "https://arxiv.org/html/2609.09317v1", version: "v1" },
    ],
    title: "Classification of gapped phases in d≥2",
    statement: r`Organize classification of uniformly gapped local Hamiltonian families in $d\ge2$ under gapped-path equivalence, fixing bosonic or fermionic degrees of freedom, symmetries, ground-space structure and stabilization conventions. Use explicit subproblems for intrinsic order, symmetry enrichment and boundaries.`,
    definition: r`**Gapped phases** are equivalence classes of uniformly gapped local Hamiltonian families under gapped paths. A uniformly gapped local path induces quasi-local spectral flow under the applicable hypotheses. This is not an unrestricted assertion of exact finite-depth-circuit equality: approximation accuracy, circuit range, ancillary product states and thermodynamic conventions matter. These choices form part of the equivalence relation, not an afterthought.

With on-site symmetry, one-dimensional bosonic phases are classified by projective representations, and group cohomology organizes symmetry-protected topological phases in higher dimensions (Chen, Gu, Liu and Wen, PRB 87, 155114 (2013), [arXiv:1106.4772](https://arxiv.org/abs/1106.4772)).`,
    progress: r`- The 1D bosonic unique-ground-state setting has a controlled classification (see Schuch, Pérez-García and Cirac, [arXiv:1010.3732](https://arxiv.org/abs/1010.3732)): without symmetry it is trivial under the stated phase conventions, and on-site symmetry yields the familiar projective-representation/SPT classification. Symmetry breaking, degenerate ground spaces and fermionic parity introduce additional cases. The phrase 'all 1D gapped phases are trivial' would erase them.
- In 2D, anyon categories, symmetry-fractionalization data and invertible phases provide substantial but not universally complete classifications.
- Kwan, Long and Haah (8 September 2026) claim that every two-dimensional fermionic quantum cellular automaton on a locally finite-dimensional algebra decomposes into local automorphisms and a fermionic shift ([arXiv:2609.09317](https://arxiv.org/abs/2609.09317v1)). Their “triviality” concerns bounded-spread automorphisms and the stated stabilization conventions. It is not a theorem that every two-dimensional fermionic gapped Hamiltonian phase is trivial, or a complete classification with symmetry and intrinsic topological order.`,
    residual: r`2D and 3D are a major, still-incomplete programme mixing physics with higher category theory and cobordism. Chiral phases (nonzero chiral central charge, no gapped boundary), the precise role of invertible/anomalous phases, fermionic and crystalline cases, and a fully rigorous equivalence relation are not settled. Related: B9.`,
    refs: [
      { label: "Kwan, Long & Haah, 'Fermionic quantum cellular automata in 2d are trivial' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.09317v1" },
      { label: "Chen, Gu, Liu & Wen, 'Symmetry protected topological orders and the group cohomology of their symmetry group', PRB 87, 155114 (2013)", url: "https://arxiv.org/abs/1106.4772" },
      { label: "Kitaev, 'Anyons in an exactly solved model and beyond', Ann. Phys. 321 (2006)", url: "https://arxiv.org/abs/cond-mat/0506438" },
      { label: "Senthil, 'Symmetry-protected topological phases of quantum matter', Annu. Rev. Condens. Matter Phys. 6 (2015)", url: "https://arxiv.org/abs/1405.4015" },
      { label: "Schuch, Pérez-García & Cirac, 'Classifying quantum phases using matrix product states and projected entangled pair states', PRB 84, 165139 (2011)", url: "https://arxiv.org/abs/1010.3732" },
    ] },

  { id: "B9", cat: "many-body", horizon: "programme",
    title: "Completeness and realizability of 2D anyon data",
    statement: r`For two-dimensional bosonic gapped phases without imposed symmetry, determine whether a unitary modular tensor category together with the full chiral central charge completely determines the gapped-path phase. Separately, determine which compatible pairs are realizable by local Hamiltonians.`,
    definition: r`**Anyon data** — a unitary modular tensor category (UMTC) together with the chiral central charge $c_-$ — is the cluster of invariants used to label two-dimensional bosonic topologically ordered phases. The question is whether it forms a complete invariant (do two systems with identical data necessarily lie in the same phase?) and whether every consistent set of data arises from a physical Hamiltonian (realizability).

The working conjecture is that a UMTC together with $c_-$ completely classifies the phase. Reference: Rowell, Stong and Wang, 'On classification of modular tensor categories', Comm. Math. Phys. 292 (2009), [arXiv:0712.1377](https://arxiv.org/abs/0712.1377).`,
    progress: r`- Much structure (fusion, braiding, modular data) is understood, and the relation to conformal field theory boundaries is well developed.
- Rank-finiteness shows that only finitely many UMTCs exist at each rank (Bruillard, Ng, Rowell and Wang, [doi:10.1090/jams/842](https://doi.org/10.1090/jams/842)).
- Modular $S,T$ matrices alone do not determine a UMTC (Mignard and Schauenburg, [arXiv:1708.02796](https://arxiv.org/abs/1708.02796)); equality of those matrices is not equality of the full categorical input.
- Symmetry-enriched theories need additional symmetry action, fractionalization, defect and obstruction data; fractionalization alone is not a general classification.`,
    residual: r`Completeness and realizability are not proved in this generality. The full chiral central charge matters, not only its value modulo eight, because invertible bosonic layers can change it without adding anyons. Symmetry enrichment, fermionic systems and 3D loop excitations are separate branches of B8 rather than hidden assumptions of this target.`,
    relations: [{ id: "B8", type: "parent" }, { id: "B14", type: "benchmark" }, { id: "B15", type: "benchmark" }],
    refs: [
      { label: "Bruillard, Ng, Rowell & Wang, 'Rank-finiteness for modular categories', J. Amer. Math. Soc. 29, 857–881 (2016)", url: "https://doi.org/10.1090/jams/842" },
      { label: "Rowell, Stong, Wang, 'On classification of modular tensor categories', Comm. Math. Phys. 292 (2009)", url: "https://arxiv.org/abs/0712.1377" },
      { label: "Mignard & Schauenburg, 'Modular categories are not determined by their modular data', Lett. Math. Phys. 111 (2021)", url: "https://arxiv.org/abs/1708.02796" },
    ] },

  { id: "B10", cat: "many-body", horizon: "programme",
    title: "Two-dimensional Hubbard model",
    statement: r`For the nearest-neighbor repulsive square-lattice Hubbard model, determine thermodynamic ground-state order as a function of $U/t$ and hole doping. A concrete benchmark is whether long-range d-wave pair correlations survive at $U/t=8$ and doping $1/8$, allowing competition with stripes. Treat the finite-temperature pseudogap separately.`,
    definition: r`**The single-band Hubbard model** $H=-t\sum_{\langle ij\rangle\sigma}c^\dagger_{i\sigma}c_{j\sigma}+U\sum_i n_{i\uparrow}n_{i\downarrow}$ on the square lattice is the minimal model of strongly correlated electrons and the prime candidate for capturing cuprate high-Tc superconductivity. Its zero-temperature phase diagram as a function of filling and $U/t$ is the target.

Standard review: Qin, Schäfer, Andergassen, Corboz and Gull, 'The Hubbard model: a computational perspective', Annu. Rev. Condens. Matter Phys. 13 (2022), [arXiv:2104.00064](https://arxiv.org/abs/2104.00064).`,
    progress: r`- Half-filled antiferromagnetic/Mott behavior has strong support, with rigorous results under particular lattice, coupling and limiting assumptions. Lieb's total-spin theorem ([doi:10.1103/PhysRevLett.62.1201](https://doi.org/10.1103/PhysRevLett.62.1201)) is not a proof of long-range antiferromagnetic order at every coupling, and Nagaoka's one-hole infinite-repulsion theorem is a different limit.
- At finite doping, sign problems and finite-size/geometry effects complicate numerical extrapolation. Multi-method studies find closely competing stripe and pairing states in specific parameter regimes (for example Zheng et al., [arXiv:1701.00054](https://arxiv.org/abs/1701.00054)); these are not a rigorous full phase diagram.
- In the regime containing the benchmark, Qin et al. (2020) combine constrained-path AFQMC and DMRG and find a non-superconducting ground state of the pure nearest-neighbour model at moderate-to-strong coupling near optimal hole doping ([arXiv:1910.08931](https://arxiv.org/abs/1910.08931)).
- With an added next-nearest-neighbour hopping $t'$ — a different Hamiltonian — Xu et al. (2024) find superconductivity coexisting with partially filled stripes ([arXiv:2303.08376](https://arxiv.org/abs/2303.08376)). Both studies are numerical evidence with extrapolation and method assumptions, not proofs.`,
    residual: r`The full doped phase diagram — whether and where the model superconducts, the nature of the pseudogap, and the competition with stripe/charge order — is contested even numerically, and there is no rigorous determination. This is a grand programme, not a single conjecture. Related: B11.`,
    refs: [
      { label: "Qin, Schäfer, Andergassen, Corboz, Gull, 'The Hubbard model: a computational perspective', Annu. Rev. Condens. Matter Phys. 13 (2022)", url: "https://arxiv.org/abs/2104.00064" },
      { label: "Zheng et al. (Simons Collaboration), 'Stripe order in the underdoped region of the two-dimensional Hubbard model', Science 358 (2017)", url: "https://arxiv.org/abs/1701.00054" },
      { label: "Lieb, 'Two theorems on the Hubbard model', PRL 62, 1201 (1989)", url: "https://doi.org/10.1103/PhysRevLett.62.1201" },
      { label: "Qin et al., 'Absence of superconductivity in the pure two-dimensional Hubbard model', PRX 10, 031016 (2020)", url: "https://arxiv.org/abs/1910.08931" },
      { label: "Xu et al., 'Coexistence of superconductivity with partially filled stripes in the Hubbard model', Science 384, adh7691 (2024) — model with next-nearest-neighbour hopping", url: "https://arxiv.org/abs/2303.08376" },
    ],
    evidence: [
      { kind: "numerical", role: "progress", summary: "AFQMC/DMRG study finds a non-superconducting ground state of the pure nearest-neighbour model at moderate-to-strong coupling near optimal doping; numerical extrapolation, not a proof.", url: "https://arxiv.org/abs/1910.08931" },
      { kind: "numerical", role: "progress", summary: "With next-nearest-neighbour hopping, superconductivity coexisting with stripes is reported; this is a different Hamiltonian from the benchmark.", url: "https://arxiv.org/abs/2303.08376" },
    ] },

  { id: "B11", cat: "many-body", horizon: "incremental", status: "improved",
    title: "Intrinsic sign problem",
    statement: r`For a specified class of local Hamiltonians and allowed local or quasilocal basis changes, characterize obstructions to stoquasticity. Separate finite-input basis-curing complexity from a phase-invariant obstruction under uniformly local transformations.`,
    definition: r`**The sign problem** is the exponential obstruction that blocks quantum Monte Carlo for many fermionic and frustrated systems. A Hamiltonian is 'stoquastic' (sign-problem-free in a given basis) if its off-diagonal matrix elements are nonpositive. The question is which systems are only basis-dependently cursed — curable by a local basis change — and which are intrinsically sign-problematic.

Reference: Hastings, 'How quantum are non-negative wavefunctions?', J. Math. Phys. 57, 015210 (2016), [arXiv:1506.08883](https://arxiv.org/abs/1506.08883).`,
    progress: r`- Checking the signs of an explicitly listed matrix is easy; a succinct local-Hamiltonian representation and allowed transformations require separate complexity analysis.
- Hastings, Ringel–Kovrizhin, Smith–Golan–Ringel ([arXiv:2005.05343](https://arxiv.org/abs/2005.05343)) and Golan–Smith–Ringel ([arXiv:2005.05566](https://arxiv.org/abs/2005.05566)) establish topological sign-problem obstructions under particular locality, phase and spectral assumptions. Their criteria do not say that every nonzero chiral central charge forbids every conceivable sign-free representation.
- Karakashian and Hen (2026) separated stoquastizability from vanishing geometric phase (VGP) ([arXiv:2607.18596](https://arxiv.org/abs/2607.18596)). They exhibit VGP 3-local Hamiltonians which are formally hard to stoquastize yet retain StoqMA-type complexity, give polynomial-time recognition in several natural settings, and prove general VGP recognition PSPACE-complete for geometrically local Hamiltonians. The result suggests that the tractable/sign-free boundary is not captured by the existence of a stoquastizing basis alone; it does not provide the sought necessary-and-sufficient quasilocal basis-change criterion.`,
    residual: r`A general characterization — necessary and sufficient conditions for a local Hamiltonian to be curable by a quasilocal basis change — is open and being extended phase by phase. Related: A9, B10.`,
    evidence: [{ kind: "preprint", role: "progress", summary: "VGP/stoquastizability and recognition-complexity results concern specified representations, not a complete phase-level sign criterion.", url: "https://arxiv.org/abs/2607.18596" }],
    refs: [
      { label: "Hastings, 'How quantum are non-negative wavefunctions?', J. Math. Phys. 57, 015210 (2016)", url: "https://arxiv.org/abs/1506.08883" },
      { label: "Smith, Golan & Ringel, 'Intrinsic sign problems in topological quantum field theories', Phys. Rev. Research 2, 033515 (2020)", url: "https://arxiv.org/abs/2005.05343" },
      { label: "Golan, Smith & Ringel, 'Intrinsic sign problem in fermionic and bosonic chiral topological matter', Phys. Rev. Research 2, 043032 (2020)", url: "https://arxiv.org/abs/2005.05566" },
      { label: "Karakashian & Hen, 'Dismantling the Stoquastic Dichotomy' (2026 preprint)", url: "https://arxiv.org/abs/2607.18596" },
    ] },

  { id: "B12", cat: "many-body", horizon: "incremental",
    title: "Optimal Lieb–Robinson bounds for long-range systems",
    statement: r`Close remaining upper/lower-bound gaps for information propagation under power-law interactions, after fixing dimension $d$, decay exponent $\alpha$, per-site strength normalization and the task/error norm. Focus on endpoints, logarithmic corrections or a specified regime not settled by the known $\alpha>2d$ exponents.`,
    definition: r`**Lieb–Robinson bounds** give an emergent light cone limiting how fast information and correlations spread under local Hamiltonian dynamics. For short-range interactions the cone is linear with a finite group velocity. For long-range interactions decaying as $1/r^\alpha$, the cone can broaden into a polynomial or logarithmic shape, and the sharp form depends intricately on $\alpha$ and dimension $d$.

Standard review: Chen, Lucas and Yin, 'Speed limits and locality in many-body quantum dynamics', Rep. Prog. Phys. 86 (2023), [arXiv:2303.07386](https://arxiv.org/abs/2303.07386).`,
    progress: r`- In the standard worst-case operator-norm setting, strictly linear cones are established for $\alpha>2d+1$, not merely $\alpha>2d$ (Kuwahara and Saito, [arXiv:1910.14477](https://arxiv.org/abs/1910.14477); Tran et al., [arXiv:2001.11509](https://arxiv.org/abs/2001.11509)).
- Tran et al. determine the principal optimal exponents above $2d$ ([arXiv:2103.15828](https://arxiv.org/abs/2103.15828)); the interval $2d<\alpha<2d+1$ has a different, polynomial propagation scale. Matching protocols and commutator estimates must be compared with the same allowed controls and accuracy criterion.`,
    residual: r`For $\alpha\le d$, whether interactions are Kac-normalized changes the question. Operator norm, state-dependent norms, entanglement generation and state transfer also need not share the same bound. A residual target selects an exponent or endpoint and specifies time-dependent controls, finite-size scaling and error tolerance; the known core exponent regime is not part of the open residual.`,
    refs: [
      { label: "Chen, Lucas, Yin, 'Speed limits and locality in many-body quantum dynamics', Rep. Prog. Phys. 86 (2023)", url: "https://arxiv.org/abs/2303.07386" },
      { label: "Tran et al., 'Hierarchy of linear light cones with long-range interactions', PRX 10, 031009 (2020)", url: "https://arxiv.org/abs/2001.11509" },
      { label: "Kuwahara & Saito, 'Strictly linear light cones in long-range interacting systems of arbitrary dimensions', PRX 10, 031010 (2020)", url: "https://arxiv.org/abs/1910.14477" },
      { label: "Tran et al., 'Lieb-Robinson light cone for power-law interactions', PRL 127, 160401 (2021)", url: "https://arxiv.org/abs/2103.15828" },
    ] },

  { id: "B13", cat: "many-body", horizon: "sharp", status: "claimed-solved",
    reviewedAt: "2026-10-17",
    evidence: [
      { kind: "preprint", role: "claimed-solution", summary: "Claimed condensate fraction bounded below uniformly for small fixed density and $0\\le T\\le\\rho^2$, including the ground state, for bounded nonnegative radial finite-range potentials; OpenAI GitHub manuscript, pending assessment.", url: `${OAI}preprints/A-density-uniform-condensate-bound-for-dilute-Bose-gases-September-27-2026/paper.pdf`, date: "2026-10-06", version: "v1" },
      { kind: "preprint", role: "claimed-solution", summary: "Claimed ground-state condensation for the dilute hard-sphere gas with a fraction independent of the gas parameter; the main statement is reported as Lean-formalized.", url: `${OAI}preprints/Ground-state-condensation-in-the-dilute-hard-sphere-gas-September-24-2026/paper.pdf`, date: "2026-10-06", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Claimed Bogoliubov depletion asymptotics for hard spheres and fixed bounded repulsive potentials, with the thermodynamic limit before the dilute limit; a further quantitative target.", url: `${OAI}preprints/Quantum-Depletion-for-Fixed-Bounded-Repulsive-Potentials-October-5-2026/fixed-repulsion-quantum-depletion.pdf`, date: "2026-10-06", version: "v1" },
    ],
    provenance: [
      { summary: "OpenAI lists itself as author and states that an unreleased internal model produced the manuscript collection. Its Lean formalization covers uniform ground-state condensation for hard spheres, not the bounded-potential theorem or the depletion asymptotics. This is OpenAI's account; the formalization was not rebuilt here.", url: `${OAI}lean/docs/267.md` },
    ],
    title: "Bose–Einstein condensation at fixed density",
    statement: r`For a homogeneous three-dimensional Bose gas with a fixed nonnegative finite-range two-body potential, prove at zero temperature that the largest eigenvalue of the one-body density matrix is at least $cN$ in the thermodynamic limit $N/L^3=\rho$, for sufficiently small fixed gas parameter $\rho a^3>0$ and some $c>0$.`,
    definition: r`**Bose–Einstein condensation at fixed density** means that the largest eigenvalue of the one-body density matrix is of order $N$ in the homogeneous thermodynamic limit. Use periodic boxes, fixed kinetic-energy normalization and a potential with positive scattering length $a$. The density and potential stay fixed as the box grows: this is not a mean-field or Gross–Pitaevskii scaling limit.

Rigorous energy asymptotics and condensation theorems in other scaling regimes provide substantial progress but do not imply a macroscopic one-body eigenvalue in this homogeneous fixed-density limit. Solovej's account explicitly separates the energy expansion from this condensation question: Solovej, 'Mathematical physics of dilute Bose gases', C. R. Physique 26, 339–348 (2025), [sections 5 and 8](https://comptes-rendus.academie-sciences.fr/physique/item/10.5802/crphys.247.pdf).`,
    claim: r`**OpenAI, [“A density-uniform condensate bound for dilute Bose gases”](${OAI}preprints/A-density-uniform-condensate-bound-for-dilute-Bose-gases-September-27-2026/paper.pdf)** (OpenAI Math Release on GitHub, not on arXiv; dated 27 September 2026, public 6 October 2026).

**OpenAI, [“Ground-state condensation in the dilute hard-sphere gas”](${OAI}preprints/Ground-state-condensation-in-the-dilute-hard-sphere-gas-September-24-2026/paper.pdf)** (OpenAI Math Release on GitHub, not on arXiv; dated 24 September 2026, public 6 October 2026).

What it claims:
- For every bounded, measurable, nonnegative, radial finite-range potential that is not almost everywhere zero, the constant-orbital condensate fraction on periodic boxes is bounded below uniformly for all sufficiently small fixed densities and temperatures $0\le T\le\rho^2$, including the zero-temperature state.
- The hard-sphere manuscript claims ground-state condensation with a fraction independent of the gas parameter.
- Companion manuscripts claim positive-temperature condensation and Bogoliubov depletion asymptotics for hard spheres and fixed bounded repulsive potentials, with the thermodynamic limit taken before the dilute limit ([“Quantum Depletion for Fixed Bounded Repulsive Potentials”](${OAI}preprints/Quantum-Depletion-for-Fixed-Bounded-Repulsive-Potentials-October-5-2026/fixed-repulsion-quantum-depletion.pdf), dated 5 October 2026).

Caveats:
- These are GitHub releases, not peer reviewed; independent assessment is pending.
- OpenAI states that an unreleased internal model produced the manuscript collection. Its Lean formalization covers uniform ground-state condensation for hard spheres, not the bounded-potential theorem or the depletion asymptotics; the formalization was not rebuilt here.`,
    residual: r`The claims cover the radial potentials of the standard formulation; a non-radial bounded potential is outside the stated theorems. Positive-temperature condensation and quantitative depletion are further targets, not required for the zero-temperature existence benchmark.`,
    refs: [
      { label: "Solovej, 'Mathematical physics of dilute Bose gases', C. R. Physique 26, 339–348 (2025), sections 5 and 8", url: "https://comptes-rendus.academie-sciences.fr/physique/item/10.5802/crphys.247.pdf" },
      { label: "OpenAI, 'A density-uniform condensate bound for dilute Bose gases' (OpenAI Math Release manuscript, dated 27 September 2026; public 6 October 2026)", url: `${OAI}preprints/A-density-uniform-condensate-bound-for-dilute-Bose-gases-September-27-2026/paper.pdf` },
      { label: "OpenAI, 'Ground-state condensation in the dilute hard-sphere gas' (OpenAI Math Release manuscript, dated 24 September 2026; public 6 October 2026)", url: `${OAI}preprints/Ground-state-condensation-in-the-dilute-hard-sphere-gas-September-24-2026/paper.pdf` },
    ],
  },

  { id: "B14", cat: "many-body", horizon: "sharp", status: "improved",
    reviewedAt: "2026-10-17",
    provenance: [
      { summary: "OpenAI lists itself as author and states that an unreleased internal model produced the manuscript collection. Its Lean formalization reports the spherical Fock-space gap inequality and a planar inequality; the torus statement is not among them. This is OpenAI's account; the formalization was not rebuilt here.", url: `${OAI}lean/docs/269.md` },
      { summary: "Gao states that Claude Opus 5.5 completed the proof of the improvement and the SDP search under the author's direction, and declares the accompanying code and data AI-generated.", url: "https://arxiv.org/abs/2610.12700v1", version: "v1" },
      { summary: "Scheer and Khalaf acknowledge ChatGPT 5.5, 5.6 Sol and 5.6 Astra, Claude Fable 5.1 and Opus 5.5 for literature search and further assistance.", url: "https://arxiv.org/abs/2610.18854v1", version: "v1" },
    ],
    title: "Laughlin bulk spectral gap",
    statement: r`For the full fermionic $\nu=1/3$ Haldane $V_1$ pseudopotential projected to the lowest Landau level on tori with fixed magnetic length and bounded aspect ratio, prove a system-size-independent positive energy gap above its ground space at $N_\phi=3N$.`,
    definition: r`**The Laughlin bulk gap** question asks whether the Haldane $V_1$ pseudopotential, the parent Hamiltonian of the $\nu=1/3$ Laughlin state, keeps a positive spectral gap above its ground space as the system grows. The energy normalization is fixed as particle number grows. The target is the untruncated parent Hamiltonian in the two-dimensional thermodynamic limit, not a thin-cylinder approximation and not uniqueness of a topologically degenerate ground space.

Established baseline: Warzel and Young prove a gap for a thin-torus truncated model, J. Math. Phys. 63, 041901 (2022), [arXiv:2112.13764](https://arxiv.org/abs/2112.13764). That important theorem does not establish the full pseudopotential gap on bounded-aspect-ratio tori.`,
    progress: r`- Schraven and Warzel (2026) study thin-cylinder Laughlin correlations and an entanglement-spectrum gap ([arXiv:2601.12165](https://arxiv.org/abs/2601.12165)). An entanglement-spectrum gap is not the Hamiltonian excitation gap sought here.
- OpenAI, [“A Fock-space inequality and the Laughlin spectral gap”](${OAI}preprints/A-Fock-space-inequality-and-the-Laughlin-spectral-gap-September-24-2026/A-Fock-space-inequality-and-the-Laughlin-spectral-gap-September-24-2026.pdf) (OpenAI Math Release on GitHub; dated 24 September 2026, public 6 October 2026): via a Knabe-type Fock-space inequality $H_Q^2\ge\gamma H_Q$, the full fermionic $V_1$ Hamiltonian on the round sphere is claimed to have a gap of at least $1/25$ above the Laughlin state for all large systems. A 5 October 2026 companion claims stability under weak bounded projected one-body potentials.
- Gao (8 October 2026) uses the same strategy to raise the certified spherical constant, giving a gap of at least $1/5$, and a planar spectral bound ([arXiv:2610.12700](https://arxiv.org/abs/2610.12700v1)).
- Scheer and Khalaf (13 October 2026) give an exact-rational SDP hierarchy with a certified thermodynamic limit on the sphere and leave the torus to future work ([arXiv:2610.18854](https://arxiv.org/abs/2610.18854v1)).`,
    residual: r`The sphere has a different geometry and ground-space structure from the bounded-aspect-ratio tori of the statement, so the torus gap remains open. Rigorous finite-size criteria or controlled approximation errors connecting a solved model to the full parent would be meaningful partial progress.`,
    relations: [{ id: "M6", type: "related" }, { id: "B9", type: "parent" }],
    evidence: [
      { kind: "preprint", role: "progress", summary: "Claimed uniform gap of at least $1/25$ above the Laughlin state for the full $V_1$ interaction on the round sphere; not the torus statement. OpenAI GitHub manuscript.", url: `${OAI}preprints/A-Fock-space-inequality-and-the-Laughlin-spectral-gap-September-24-2026/A-Fock-space-inequality-and-the-Laughlin-spectral-gap-September-24-2026.pdf`, date: "2026-10-06", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Exact-rational SDP strengthening of the spherical Fock-space inequality to a gap of at least $1/5$, plus a planar spectral lower bound.", url: "https://arxiv.org/abs/2610.12700v1", date: "2026-10-08", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Hierarchy of exact SDP lower bounds on the spherical Laughlin gap, certified in the thermodynamic limit; the torus is left open.", url: "https://arxiv.org/abs/2610.18854v1", date: "2026-10-13", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Thin-cylinder correlation decay and an entanglement-spectrum gap; not a proof of the full bulk energy gap.", url: "https://arxiv.org/abs/2601.12165" }],
    refs: [
      { label: "OpenAI, 'A Fock-space inequality and the Laughlin spectral gap' (OpenAI Math Release manuscript, dated 24 September 2026; public 6 October 2026)", url: `${OAI}preprints/A-Fock-space-inequality-and-the-Laughlin-spectral-gap-September-24-2026/A-Fock-space-inequality-and-the-Laughlin-spectral-gap-September-24-2026.pdf` },
      { label: "Qiang Gao, 'Improving the lower bound on the Laughlin gap: An SDP search' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.12700v1" },
      { label: "Scheer & Khalaf, 'A hierarchy of exact lower bounds on the Laughlin spectral gap' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.18854v1" },
      { label: "Warzel & Young, 'The spectral gap of a fractional quantum Hall system on a thin torus', J. Math. Phys. 63, 041901 (2022)", url: "https://arxiv.org/abs/2112.13764" },
      { label: "Young, 'On a bulk gap strategy for quantum lattice models', Rev. Math. Phys. 36, 2460007 (2024)", url: "https://arxiv.org/abs/2308.01405" },
      { label: "Schraven & Warzel, 'Fractional Quantum Hall States: Infinite Matrix Product Representation and its Implications' (2026 preprint) — thin-cylinder correlations and entanglement-spectrum gap", url: "https://arxiv.org/abs/2601.12165" },
    ] },

  { id: "B15", cat: "many-body", horizon: "incremental",
    title: "Ground-state phase of the kagome Heisenberg model",
    statement: r`Determine the thermodynamic ground-state phase and excitation gap of $H=\sum_{\langle ij\rangle}\vec S_i\cdot\vec S_j$ for spin $1/2$ on the uniform kagome lattice, with nearest-neighbor antiferromagnetic coupling one and no additional interactions.`,
    definition: r`**The spin-1/2 kagome Heisenberg antiferromagnet** with nearest-neighbour coupling is a concrete frustrated quantum magnet and a canonical spin-liquid benchmark. Competing interpretations of its ground state include a gapped $\mathbb Z_2$ spin liquid and a gapless Dirac spin liquid.

Reference: Yan, Huse and White, 'Spin-liquid ground state of the S = 1/2 kagome Heisenberg antiferromagnet', Science 332, 1173 (2011), [arXiv:1011.6114](https://arxiv.org/abs/1011.6114).`,
    progress: r`- DMRG studies on cylinders by Yan, Huse and White ([arXiv:1011.6114](https://arxiv.org/abs/1011.6114)) and by Depenbrock, McCulloch and Schollwöck ([arXiv:1205.4858](https://arxiv.org/abs/1205.4858)) reported a spin liquid with a finite spin gap and topological entanglement consistent with $\mathbb Z_2$ order.
- Later DMRG with flux insertion (He, Zaletel, Oshikawa and Pollmann, [arXiv:1611.06238](https://arxiv.org/abs/1611.06238)) and tensor-network (PESS) calculations (Liao et al., [arXiv:1610.04727](https://arxiv.org/abs/1610.04727)) instead report signatures of a gapless Dirac spin liquid.
- A 2026 DMRG study (Jiang et al., [npj Comput. Mater. 12, 91](https://www.nature.com/articles/s41524-026-01959-5)) maps the robustness of the spin-liquid phase to next-nearest-neighbour and Dzyaloshinskii–Moriya perturbations relevant to herbertsmithite and Zn-barlowite; it concerns those extended Hamiltonians and does not settle the gapped-versus-gapless question for the pure model.
- Sun, Roth, Chen and Heyl (3 November 2026) optimize neural-network quantum states on two-dimensional tori of up to 300 spins and report very low variational energies ([arXiv:2611.05174](https://arxiv.org/abs/2611.05174v1)). They find no magnetic or valence-bond long-range order. The dominant symmetry-resolved spin and dimer correlations share a common scaling consistent with the $SO(6)$ monopole multiplet of the Dirac spin liquid. As the system size grows, the overlap with Gutzwiller-projected states increasingly favors the Dirac state over $\mathbb Z_2$ candidates. This strengthens the numerical case for a gapless $U(1)$ Dirac spin liquid. It remains variational evidence on finite tori, not a controlled thermodynamic determination.`,
    residual: r`The target requires controlled thermodynamic extrapolation, certified numerical bounds or a proof. Finite-cylinder spectra, variational energies and finite bond dimensions are evidence with limitations, not an exact phase determination. Magnetic materials with further-neighbor or anisotropic interactions, square-kagome models and breathing-kagome variants are different Hamiltonians.`,
    reviewedAt: "2026-11-08",
    relations: [{ id: "B8", type: "parent" }, { id: "B9", type: "related" }],
    evidence: [
      { kind: "numerical", role: "progress", summary: "Neural-network quantum states on tori up to 300 spins: no long-range order, correlation scaling consistent with Dirac-spin-liquid monopoles, and growing preference for the Dirac Gutzwiller state over Z2 candidates. Finite-size variational evidence.", url: "https://arxiv.org/abs/2611.05174v1", date: "2026-11-03", version: "v1" },
      { kind: "numerical", role: "progress", summary: "Cylinder DMRG reports a spin liquid with a finite spin gap, consistent with a gapped Z2 phase; finite-circumference extrapolation, not a proof.", url: "https://arxiv.org/abs/1011.6114" },
      { kind: "numerical", role: "progress", summary: "DMRG flux insertion reports a much smaller spin gap and Dirac-cone signatures, favouring a gapless Dirac spin liquid; the thermodynamic phase remains unresolved.", url: "https://arxiv.org/abs/1611.06238" },
      { kind: "numerical", role: "progress", summary: "A 2026 DMRG study maps the spin-liquid phase under added J2 and Dzyaloshinskii–Moriya couplings; these extended Hamiltonians differ from the pure nearest-neighbour target.", url: "https://www.nature.com/articles/s41524-026-01959-5" },
    ],
    refs: [
      { label: "Yan, Huse & White, 'Spin-liquid ground state of the S = 1/2 kagome Heisenberg antiferromagnet', Science 332, 1173 (2011)", url: "https://arxiv.org/abs/1011.6114" },
      { label: "Depenbrock, McCulloch & Schollwöck, 'Nature of the spin-liquid ground state of the S = 1/2 Heisenberg model on the kagome lattice', PRL 109, 067201 (2012)", url: "https://arxiv.org/abs/1205.4858" },
      { label: "He, Zaletel, Oshikawa & Pollmann, 'Signatures of Dirac cones in a DMRG study of the kagome Heisenberg model', PRX 7, 031020 (2017)", url: "https://arxiv.org/abs/1611.06238" },
      { label: "Liao et al., 'Gapless spin-liquid ground state in the S = 1/2 kagome antiferromagnet', PRL 118, 137202 (2017)", url: "https://arxiv.org/abs/1610.04727" },
      { label: "Sun, Roth, Chen & Heyl, 'Evidence for a Dirac Spin Liquid in the Kagome Heisenberg Antiferromagnet from High-Precision Neural-Network Quantum States' (2026 preprint, v1)", url: "https://arxiv.org/abs/2611.05174v1" },
      { label: "Jiang et al., 'Quantifying the phase diagram and Hamiltonian of S = 1/2 kagome antiferromagnets: bridging theory and experiment', npj Comput. Mater. 12, 91 (2026) — extended J2/DM Hamiltonians", url: "https://www.nature.com/articles/s41524-026-01959-5" },
    ],
  },

  { id: "B16", cat: "many-body", horizon: "sharp", status: "improved",
    reviewedAt: "2026-11-08",
    title: "Self-correcting quantum memory in three dimensions",
    statement: r`Is there a family of geometrically local, bounded-strength Hamiltonians on finite-dimensional spins in $\mathbb R^3$ whose ground space encodes at least one qubit such that, under local thermal dynamics (e.g. Davies generators) at some fixed positive temperature with no active correction, the encoded qubit, prepared in the ground space, can be recovered after a time growing super-polynomially (ideally exponentially) in system size?`,
    definition: r`**A self-correcting quantum memory** stores quantum information passively, as a magnet stores a classical bit: under local thermal dynamics with no active correction, the encoded information survives for a time growing super-polynomially in system size. The 4D toric code is self-correcting; in 2D, no commuting stabilizer code is. Three dimensions remained open.

Standard review: Brown, Loss, Pachos, Self and Wootton, 'Quantum memories at finite temperature', Rev. Mod. Phys. 88 (2016), [arXiv:1411.6643](https://arxiv.org/abs/1411.6643).`,
    progress: r`- Haah's cubic code has no string logical operators ([arXiv:1101.1962](https://arxiv.org/abs/1101.1962)) and a logarithmic energy barrier, giving a lifetime that grows only up to a temperature-dependent size (Bravyi and Haah, [arXiv:1105.4159](https://arxiv.org/abs/1105.4159)).
- Layer codes show partial self-correction, with an exponential lifetime up to a temperature-dependent size cutoff (Williamson, October 2025, [arXiv:2510.09218](https://arxiv.org/abs/2510.09218)).
- Balasubramanian, Davydova and Lin (May 2026) build a 3D CSS stabilizer Hamiltonian by recursive transformations of a seed code and prove an exponential memory lifetime at low temperature with an explicit renormalization decoder ([arXiv:2605.10943](https://arxiv.org/abs/2605.10943v1)). Their theorem uses a thermal encoding, the logical state tensored with a Gibbs state of the syndromes, and the authors explicitly do not address passive initialization from the ground space.
- Stengele, Caha, Capel and Warzel (30 September 2026) prove that Haah's cubic code thermalizes rapidly at every positive temperature, so it is not self-correcting ([arXiv:2609.39959](https://arxiv.org/abs/2609.39959v1)).`,
    residual: r`The remaining step is the same lifetime from a ground-space encoding, as in the statement, or a proof that the thermal and ground-space initializations are equivalent.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "3D stabilizer Hamiltonian with proved exponential memory lifetime at low temperature under a thermal syndrome encoding; ground-space initialization not addressed.", url: "https://arxiv.org/abs/2605.10943v1", date: "2026-05-11", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Haah's cubic code thermalizes rapidly at every positive temperature, ruling it out as a self-correcting memory.", url: "https://arxiv.org/abs/2609.39959v1", date: "2026-09-30", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Partial self-correction in layer codes: exponential lifetime up to a temperature-dependent size cutoff.", url: "https://arxiv.org/abs/2510.09218v1", date: "2025-10-10", version: "v1" },
    ],
    provenance: [
      { summary: "Balasubramanian, Davydova and Lin thank ChatGPT 5.5 for help improving the clarity of the manuscript.", url: "https://arxiv.org/abs/2605.10943v1", version: "v1" },
    ],
    relations: [{ id: "B8", type: "related" }, { id: "A18", type: "related" }],
    refs: [
      { label: "Brown, Loss, Pachos, Self & Wootton, 'Quantum memories at finite temperature', Rev. Mod. Phys. 88 (2016)", url: "https://arxiv.org/abs/1411.6643" },
      { label: "Haah, 'Local stabilizer codes in three dimensions without string logical operators', PRA 83 (2011)", url: "https://arxiv.org/abs/1101.1962" },
      { label: "Bravyi & Haah, 'Quantum Self-Correction in the 3D Cubic Code Model', PRL 111 (2013)", url: "https://arxiv.org/abs/1105.4159" },
      { label: "Williamson, 'Partial Self-Correction in Layer Codes' (2025 preprint)", url: "https://arxiv.org/abs/2510.09218" },
      { label: "Balasubramanian, Davydova & Lin, 'A passive self-correcting quantum memory in three dimensions' (2026 preprint, v1)", url: "https://arxiv.org/abs/2605.10943v1" },
      { label: "Stengele, Caha, Capel & Warzel, 'Haah's 3D cubic code thermalizes rapidly' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.39959v1" },
    ] },

  { id: "B17", cat: "many-body", horizon: "sharp", status: "claimed-solved",
    reviewedAt: "2026-11-08",
    title: "Néel order in the 2D spin-1/2 Heisenberg antiferromagnet",
    statement: r`For the spin-$1/2$ nearest-neighbour Heisenberg antiferromagnet on $\mathbb Z^2$, prove that the ground state has Néel long-range order: the staggered magnetization (or the staggered two-point correlation at large distance) stays bounded away from zero in the thermodynamic limit.`,
    definition: r`**Néel order** in the spin-$1/2$ nearest-neighbour Heisenberg antiferromagnet on $\mathbb Z^2$ means that the ground-state staggered magnetization stays bounded away from zero in the thermodynamic limit. This model is the parent model of the cuprates; its long-range order has overwhelming numerical support but resisted proof.

Dyson, Lieb and Simon proved order at low temperature in 3D using reflection positivity and infrared bounds, J. Stat. Phys. 18 (1978), [doi:10.1007/BF01106729](https://doi.org/10.1007/BF01106729).`,
    progress: r`- Kennedy, Lieb and Shastry ([doi:10.1007/BF01023854](https://doi.org/10.1007/BF01023854)), and earlier Neves and Perez, extended ground-state order in 2D to spin $S\ge1$ and to some anisotropic models. Their method reduces order to bounds on finite-distance correlators that were not available for $S=1/2$.`,
    claim: r`**Chadha, Wang, Nosov, Scheer and Khalaf, [“Establishing Néel order in the square-lattice antiferromagnetic Heisenberg model: a bootstrap proof”](https://arxiv.org/abs/2611.03241v1)** (arXiv:2611.03241, v1, 2 November 2026).

What it claims:
- A bootstrap (semidefinite) method that generalizes the Kennedy–Lieb–Shastry inequalities gives a strictly positive lower bound on the Néel order parameter in the thermodynamic limit for a discrete set of anisotropies in $[0,2]$, including the isotropic point.
- The numerical bounds are converted into exact rational certificates, which the authors present as a complete computer-assisted proof.

Caveats:
- Not peer reviewed; the certificates were not rerun here, and independent assessment is pending.
- The authors report using Claude Opus 5.5, Fable 5.1 and ChatGPT 6.1 for literature search, and Claude Opus 5.5 and Fable 5.1 for coding assistance.`,
    evidence: [
      { kind: "preprint", role: "claimed-solution", summary: "Claimed computer-assisted proof of Néel order in the 2D spin-1/2 XXZ model, including the Heisenberg point, via bootstrap bounds with exact rational certificates; pending assessment.", url: "https://arxiv.org/abs/2611.03241v1", date: "2026-11-02", version: "v1" },
    ],
    provenance: [
      { summary: "Chadha et al. report using Claude Opus 5.5, Fable 5.1 and ChatGPT 6.1 for literature search, and Claude Opus 5.5 and Fable 5.1 for coding assistance.", url: "https://arxiv.org/abs/2611.03241v1", version: "v1" },
    ],
    relations: [{ id: "B10", type: "related" }, { id: "B18", type: "related" }],
    refs: [
      { label: "Dyson, Lieb & Simon, 'Phase transitions in quantum spin systems with isotropic and nonisotropic interactions', J. Stat. Phys. 18 (1978)", url: "https://doi.org/10.1007/BF01106729" },
      { label: "Kennedy, Lieb & Shastry, 'Existence of Néel order in some spin-1/2 Heisenberg antiferromagnets', J. Stat. Phys. 53 (1988)", url: "https://doi.org/10.1007/BF01023854" },
      { label: "Chadha, Wang, Nosov, Scheer & Khalaf, 'Establishing Néel order in the square-lattice antiferromagnetic Heisenberg model: a bootstrap proof' (2026 preprint, v1)", url: "https://arxiv.org/abs/2611.03241v1" },
    ] },

  { id: "B18", cat: "many-body", horizon: "sharp", status: "claimed-solved",
    reviewedAt: "2026-11-08",
    title: "Spontaneous magnetization of the 3D quantum Heisenberg ferromagnet",
    statement: r`For the nearest-neighbour isotropic quantum Heisenberg ferromagnet on $\mathbb Z^3$ (spin $S=1/2$ in particular), prove that at sufficiently low positive temperature there is a translation-invariant equilibrium (KMS) state with nonzero spontaneous magnetization.`,
    definition: r`**Spontaneous magnetization** of the quantum Heisenberg ferromagnet means a translation-invariant equilibrium (KMS) state with nonzero magnetization at low positive temperature. Ferromagnetic order at low temperature in three dimensions is textbook physics, yet for the quantum Heisenberg ferromagnet it was a long-standing open problem.

Reflection positivity, which proves order for the classical Heisenberg model and the quantum antiferromagnet (Fröhlich, Simon and Spencer; Dyson, Lieb and Simon, J. Stat. Phys. 18 (1978), [doi:10.1007/BF01106729](https://doi.org/10.1007/BF01106729)), fails for the quantum ferromagnet.`,
    progress: r`- The free energy at large spin is controlled by spin-wave theory (Correggi, Giuliani and Seiringer, [arXiv:1312.7873](https://arxiv.org/abs/1312.7873)).
- Random-loop representations give further partial results (Tóth; Ueltschi, [arXiv:1301.0811](https://arxiv.org/abs/1301.0811)).`,
    claim: r`**OpenAI, [“Spontaneous magnetization in the quantum Heisenberg ferromagnet”](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Spontaneous-magnetization-in-the-quantum-Heisenberg-ferromagnet-September-24-2026/paper.pdf)** (OpenAI Math Release on GitHub, not on arXiv; dated 24 September 2026, public 6 October 2026).

What it claims:
- For every $d\ge3$ and every spin $S$, the nearest-neighbour isotropic ferromagnet has a translation-invariant, spontaneously magnetized KMS state at every sufficiently low positive temperature, with magnetization at least $S/4$.
- Companion manuscripts in the same release claim Bloch's law and its first lattice correction.

Caveats:
- It is a GitHub release, not peer reviewed; independent assessment is pending.
- OpenAI states that an unreleased internal model produced the manuscript collection. Lean scope for this family was not checked here.`,
    evidence: [
      { kind: "preprint", role: "claimed-solution", summary: "Claimed spontaneous magnetization (at least S/4) in a translation-invariant KMS state at low temperature for d>=3 and every spin; OpenAI GitHub manuscript, pending assessment.", url: "https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Spontaneous-magnetization-in-the-quantum-Heisenberg-ferromagnet-September-24-2026/paper.pdf", date: "2026-10-06", version: "v1" },
    ],
    provenance: [
      { summary: "OpenAI lists itself as author and states that an unreleased internal model produced the manuscript collection. Lean scope for this family was not checked here.", url: "https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Spontaneous-magnetization-in-the-quantum-Heisenberg-ferromagnet-September-24-2026/README.md" },
    ],
    relations: [{ id: "B17", type: "related" }],
    refs: [
      { label: "Dyson, Lieb & Simon, 'Phase transitions in quantum spin systems with isotropic and nonisotropic interactions', J. Stat. Phys. 18 (1978)", url: "https://doi.org/10.1007/BF01106729" },
      { label: "Correggi, Giuliani & Seiringer, 'Validity of the spin-wave approximation for the free energy of the Heisenberg ferromagnet', Comm. Math. Phys. 339 (2015)", url: "https://arxiv.org/abs/1312.7873" },
      { label: "Ueltschi, 'Random loop representations for quantum spin systems', J. Math. Phys. 54 (2013)", url: "https://arxiv.org/abs/1301.0811" },
      { label: "OpenAI, 'Spontaneous magnetization in the quantum Heisenberg ferromagnet' (OpenAI Math Release manuscript, dated 24 September 2026)", url: "https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Spontaneous-magnetization-in-the-quantum-Heisenberg-ferromagnet-September-24-2026/paper.pdf" },
    ] },

  { id: "B19", cat: "many-body", horizon: "sharp",
    reviewedAt: "2026-11-08",
    title: "Wigner crystallization of three-dimensional jellium",
    statement: r`Consider three-dimensional jellium at zero temperature: $N$ spin-1/2 fermions with kinetic energy $-\tfrac12\Delta$ and Coulomb repulsion, in a uniform neutralizing background of density $\rho$, on the periodic cube of side $L$ with $N=\rho L^3$ and the periodic (Ewald) Coulomb interaction. For a ground state $\Psi_L$ and $k\in(2\pi/L)\mathbb Z^3$, let $S_L(k)=N^{-1}\big\langle\Psi_L,\big|\sum_{j=1}^Ne^{ik\cdot x_j}\big|^2\Psi_L\big\rangle$.
(i) Prove that there is $\rho_c>0$ such that for every $0<\rho<\rho_c$ translation symmetry is broken: for every choice of ground states there are $c>0$ and wave vectors $k_L$ with $0<a\le|k_L|\le b$ such that $S_L(k_L)\ge cN$ for all large $L$ (a Bragg peak; a fluid has $S_L(k)=O(1)$).
(ii) Prove that, for $\rho$ small enough and along cubes commensurate with a body-centred cubic (BCC) lattice of density $\rho$, the wave vectors carrying such peaks lie asymptotically on the reciprocal lattice of that BCC lattice.`,
    definition: r`**Jellium**, or the homogeneous electron gas, replaces the nuclei of a solid by a uniform positive background. Wigner argued in 1934 that at low density the Coulomb energy $\sim1/a$ of electrons spaced by $a$ dominates their kinetic energy $\sim1/a^2$, so they should freeze into a lattice: Phys. Rev. 46, 1002 (1934), [doi:10.1103/PhysRev.46.1002](https://doi.org/10.1103/PhysRev.46.1002). The BCC lattice has the lowest Coulomb lattice energy among the candidates, hence the expected structure. The thermodynamic limit of the energy exists (Lieb and Narnhofer, J. Stat. Phys. 12, 291 (1975), [doi:10.1007/BF01012066](https://doi.org/10.1007/BF01012066)). Standard reference: Blanc and Lewin, “The crystallization conjecture: a review”, EMS Surv. Math. Sci. 2, 255–306 (2015), [arXiv:1504.01153](https://arxiv.org/abs/1504.01153).

The two stages are Open Problems 4 and 5 in Lewin, C. R. Physique 26, 369–380 (2025), [doi:10.5802/crphys.249](https://doi.org/10.5802/crphys.249). He calls the breaking of translations one of the most important open problems in mathematical physics, with no strategy of proof known. Equivalently, one may ask for an infinite-volume ground state that is not translation invariant; defining such states is itself delicate because the Coulomb mean field diverges without screening. Lewin also poses the variant with optimized classical point nuclei in place of the background. His Open Problem 6, tools for the whole phase diagram, is the surrounding programme rather than a separate target.`,
    progress: r`- One dimension is settled. Kunz proved crystallization for the classical one-dimensional jellium, Ann. Phys. 85, 303 (1974), [doi:10.1016/0003-4916(74)90413-8](https://doi.org/10.1016/0003-4916(74)90413-8); Brascamp and Lieb proved quantum symmetry breaking at low density (1975); Jansen and Jung proved it at all densities, Comm. Math. Phys. 331, 1133–1154 (2014), [arXiv:1306.6906](https://arxiv.org/abs/1306.6906). The one-dimensional interaction $-|x-y|$ is special and the methods do not extend.
- Classical zero-temperature analogues are known in dimensions 8 and 24: universal optimality of $E_8$ and the Leech lattice (Cohn, Kumar, Miller, Radchenko and Viazovska, Ann. of Math. 196, 983–1082 (2022), [arXiv:1902.05438](https://arxiv.org/abs/1902.05438)) implies that they minimize the jellium and renormalized Coulomb energies there (Petrache and Serfaty, [arXiv:1908.09714](https://arxiv.org/abs/1908.09714)).
- In two dimensions, OpenAI's Math Release (public 6 October 2026, not on arXiv) claims universal optimality of the triangular lattice in the plane ([manuscript](${OAI}preprints/Universal-optimality-of-the-triangular-lattice-September-23-2026/paper.pdf)). A companion manuscript claims the Sandier–Serfaty conjecture that the triangular lattice minimizes the planar Coulomb renormalized energy ([manuscript](${OAI}preprints/Triangular-minimality-for-planar-Coulomb-renormalized-energy-September-23-2026/paper.pdf)). These are classical, two-dimensional and pending assessment.
- In three dimensions only lattice comparisons exist. On 21 October 2026 (v1), Muratov and Novaga gave a computer-assisted proof that BCC uniquely minimizes the renormalized Coulomb energy among Bravais lattices of fixed covolume ([arXiv:2610.29732](https://arxiv.org/abs/2610.29732v1)). This identifies the best lattice. It does not compare with non-lattice configurations and does not involve quantum states.
- Energies, not states: the different definitions of the jellium energy coincide classically (Lewin, Lieb and Seiringer, PRB 100, 035127 (2019), [arXiv:1905.09138](https://arxiv.org/abs/1905.09138); Cotar and Petrache, [arXiv:1707.07664](https://arxiv.org/abs/1707.07664)). On 14 October 2026 (v1), Csirik proved the quantum equality of the jellium and uniform-electron-gas energies ([arXiv:2610.20910](https://arxiv.org/abs/2610.20910v1)). None of these says anything about the structure of ground states.
- In Hartree–Fock theory the translation-invariant state is never a minimizer, at any density (Overhauser instability; quantified by Gontier, Hainzl and Lewin, PRA 99, 052501 (2019), [arXiv:1811.12461](https://arxiv.org/abs/1811.12461)). This is a mean-field effect: the many-body gas is expected to be a fluid at high density.
- Quantum Monte Carlo puts the transition from a paramagnetic fluid to a BCC crystal at $r_s=86.6(7)$, with no stable ferromagnetic fluid (Azadi and Drummond, PRB 105, 245135 (2022), [arXiv:2201.08743](https://arxiv.org/abs/2201.08743)). This is numerical evidence, not a proof.`,
    residual: r`Both stages are open for the quantum three-dimensional model; stage (i) alone would be a major advance. Stage (ii) is open even classically. Intermediate targets:
- classical jellium at zero temperature (point charges, no kinetic energy): prove that minimizers of the renormalized Coulomb energy are periodic, then BCC. Given the lattice-restricted comparison of Muratov and Novaga, the missing step is comparison with non-lattice configurations;
- conditional on the classical result, show that low-density quantum ground states are close to the classical crystal at scale $\rho^{-1/3}$, with controlled zero-point fluctuations;
- positive temperature: symmetry breaking for $0<T<T_c(\rho)$. This first requires infinite-volume equilibrium states, which for three-dimensional Coulomb systems have been constructed only for classical charges at zero temperature and at high temperature.

Spin order inside the crystal (ferromagnetic or antiferromagnetic) is outside the statement.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Computer-assisted proof that BCC uniquely minimizes the renormalized 3D Coulomb lattice energy among Bravais lattices of fixed covolume; no comparison with non-lattice configurations.", url: "https://arxiv.org/abs/2610.29732v1", date: "2026-10-21", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Claimed universal optimality of the triangular lattice in the plane, with planar Riesz and logarithmic jellium minima; classical, two-dimensional. OpenAI GitHub manuscript, pending assessment.", url: `${OAI}preprints/Universal-optimality-of-the-triangular-lattice-September-23-2026/paper.pdf`, date: "2026-10-06", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Claimed Sandier–Serfaty conjecture: the triangular lattice minimizes the planar Coulomb renormalized energy; computer-assisted, classical, two-dimensional. OpenAI GitHub manuscript, pending assessment.", url: `${OAI}preprints/Triangular-minimality-for-planar-Coulomb-renormalized-energy-September-23-2026/paper.pdf`, date: "2026-10-06", version: "v1" },
      { kind: "published", role: "progress", summary: "Translation-symmetry breaking for the quantum one-dimensional jellium at all densities.", url: "https://doi.org/10.1007/s00220-014-2032-y", date: "2014-04-08" },
      { kind: "numerical", role: "progress", summary: "Diffusion Monte Carlo: paramagnetic fluid to BCC crystal at r_s = 86.6(7), extrapolated to the thermodynamic limit.", url: "https://arxiv.org/abs/2201.08743" },
    ],
    provenance: [
      { summary: "Muratov and Novaga state that the code of the computer-assisted proof was built and executed using Claude Opus 5 and cross-validated by ChatGPT-6 Astra, and that they manually verified all arguments and code and redid the verifying runs.", url: "https://arxiv.org/html/2610.29732v1", version: "v1" },
      { summary: "Csirik states substantial use of ChatGPT and Claude, including in developing the proofs, writing and figures, and that he checked all proofs by hand. A Lean formalization produced with the same tools checks parts of the argument relative to stated hypotheses; cited results such as the Lieb–Narnhofer limit remain inputs.", url: "https://arxiv.org/html/2610.20910v1", version: "v1" },
      { summary: "OpenAI lists itself as author and states that an unreleased internal model produced the manuscript collection. Its Lean formalization covers universal energy minimality of the triangular lattice and the Gaussian minorants, not the planar Coulomb renormalized-energy manuscript. This is OpenAI's account; the formalization was not rebuilt here.", url: `${OAI}lean/docs/090.md` },
    ],
    relations: [{ id: "B18", type: "related" }],
    refs: [
      { label: "Lewin, 'Some open mathematical problems concerning charged quantum particles', C. R. Physique 26, 369–380 (2025), Open Problems 4–6", url: "https://doi.org/10.5802/crphys.249" },
      { label: "Blanc & Lewin, 'The crystallization conjecture: a review', EMS Surv. Math. Sci. 2, 255–306 (2015)", url: "https://arxiv.org/abs/1504.01153" },
      { label: "Lewin, 'Coulomb and Riesz gases: The known and the unknown', J. Math. Phys. 63, 061101 (2022)", url: "https://arxiv.org/abs/2202.09240" },
      { label: "Wigner, 'On the interaction of electrons in metals', Phys. Rev. 46, 1002 (1934)", url: "https://doi.org/10.1103/PhysRev.46.1002" },
      { label: "Lieb & Narnhofer, 'The thermodynamic limit for jellium', J. Stat. Phys. 12, 291–310 (1975)", url: "https://doi.org/10.1007/BF01012066" },
      { label: "Kunz, 'The one-dimensional classical electron gas', Ann. Phys. 85, 303–335 (1974)", url: "https://doi.org/10.1016/0003-4916(74)90413-8" },
      { label: "Jansen & Jung, 'Wigner crystallization in the quantum 1D jellium at all densities', Comm. Math. Phys. 331, 1133–1154 (2014)", url: "https://arxiv.org/abs/1306.6906" },
      { label: "Cohn, Kumar, Miller, Radchenko & Viazovska, 'Universal optimality of the E8 and Leech lattices and interpolation formulas', Ann. of Math. 196, 983–1082 (2022)", url: "https://arxiv.org/abs/1902.05438" },
      { label: "Petrache & Serfaty, 'Crystallization for Coulomb and Riesz interactions as a consequence of the Cohn-Kumar conjecture', Proc. Amer. Math. Soc. 148 (2020)", url: "https://arxiv.org/abs/1908.09714" },
      { label: "Muratov & Novaga, 'BCC optimality for the three-dimensional Coulomb lattice energy' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.29732v1" },
      { label: "Csirik, 'Equality of the Jellium and the Uniform Electron Gas Energies' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.20910v1" },
      { label: "Lewin, Lieb & Seiringer, 'Floating Wigner crystal with no boundary charge fluctuations', PRB 100, 035127 (2019)", url: "https://arxiv.org/abs/1905.09138" },
      { label: "Cotar & Petrache, 'Equality of the Jellium and Uniform Electron Gas next-order asymptotic terms for Coulomb and Riesz potentials' (preprint, 2017)", url: "https://arxiv.org/abs/1707.07664" },
      { label: "Gontier, Hainzl & Lewin, 'Lower bound on the Hartree-Fock energy of the electron gas', PRA 99, 052501 (2019)", url: "https://arxiv.org/abs/1811.12461" },
      { label: "Azadi & Drummond, 'Low-density phase diagram of the three-dimensional electron gas', PRB 105, 245135 (2022)", url: "https://arxiv.org/abs/2201.08743" },
      { label: "OpenAI, 'Universal optimality of the triangular lattice' (OpenAI Math Release manuscript, dated 23 September 2026; public 6 October 2026)", url: `${OAI}preprints/Universal-optimality-of-the-triangular-lattice-September-23-2026/paper.pdf` },
      { label: "OpenAI, 'Triangular minimality for planar Coulomb renormalized energy' (OpenAI Math Release manuscript, dated 23 September 2026; public 6 October 2026)", url: `${OAI}preprints/Triangular-minimality-for-planar-Coulomb-renormalized-energy-September-23-2026/paper.pdf` },
    ] },
];
