const r = String.raw;
// OpenAI Math Release, pinned to the commit reviewed on 17 October 2026.
const OAI = "https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/";
// PSI Open Quantum Problems batch, pinned to the 23 October 2026 snapshot cited in its CITATIONS.bib.
const PSI = "https://github.com/physical-superintelligence/oqp-batch-2026/blob/7049357c42a8fe85262da08fdc10d57b4d9e67a0/";

export const CHANNELS = [
  { id: "C1", cat: "channels", horizon: "incremental", status: "improved",
    reviewedAt: "2026-11-08",
    relations: [{ id: "C11", type: "benchmark" }, { id: "U4", type: "related" }, { id: "C4", type: "related" }, { id: "C5", type: "related" }],
    evidence: [
      { kind: "preprint", role: "progress", summary: "Counterexamples to additivity of minimum output p-Rényi entropy for every p>0.", url: "https://arxiv.org/abs/2607.15210v2", date: "2026-07-16", version: "v2" },
      { kind: "preprint", role: "progress", summary: "Superadditivity of classical communication from random permutations instead of Haar unitaries, toward derandomization.", url: "https://arxiv.org/abs/2608.25961v2", date: "2026-08-26", version: "v2" },
      { kind: "preprint", role: "progress", summary: "Deterministic polynomial-time construction of channels with minimum-output-entropy nonadditivity.", url: "https://arxiv.org/abs/2608.31081v1", date: "2026-08-31", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Exact certificate of a positive-order Rényi additivity violation for an explicit channel pair, with an archived verification artifact.", url: "https://arxiv.org/abs/2608.17376v2", date: "2026-08-18", version: "v2" },
      { kind: "preprint", role: "progress", summary: "Claimed unassisted classical capacity of every qubit generalized amplitude-damping channel, with Holevo-capacity and minimum-output-entropy additivity against every finite-dimensional partner; classical, not quantum, capacity. OpenAI GitHub manuscript.", url: `${OAI}preprints/Classical-capacity-and-entropy-inequalities-for-generalized-amplitude-damping-September-24-2026/paper.pdf`, date: "2026-10-06", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Claimed additivity for qubit channels with a pure output, including amplitude-damping classical capacity and parallel entanglement cost.", url: "https://arxiv.org/abs/2609.28592v1", date: "2026-09-23", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Convergent amplitude-damping capacity series and truncation bounds; classical capacity relies on the preceding additivity claim.", url: "https://arxiv.org/abs/2609.31609v1", date: "2026-09-25", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Explicit non-random minimum-output entropy nonadditivity; v2 extends the gap to prescribed Renyi-order ranges.", url: "https://arxiv.org/abs/2609.23946v2", date: "2026-09-24", version: "v2" },
      { kind: "preprint", role: "progress", summary: "Explicit channels with strictly subadditive minimum output Rényi entropy for every $p>1$, from subspaces of high geometric measure of entanglement; accepted to FOCS 2026. A nonadditivity result, not a capacity formula.", url: "https://arxiv.org/abs/2510.07547v2", date: "2026-01-25", version: "v2" },
      { kind: "preprint", role: "progress", summary: "Explicit qutrit zero-Q, zero-P channel outside the PPT and antidegradable classes; not a general capacity-computability theorem.", url: "https://arxiv.org/abs/2607.24693", date: "2026-07-27" }],
    provenance: [
      { summary: "Leung, Lovitz, Nechita and Wu acknowledge ChatGPT 5.4 and 5.5 in preparing the first version, including constructions and initial ideas.", url: "https://arxiv.org/abs/2607.15210v2", version: "v2" },
      { summary: "Lovitz and Wu report that a key finite-dimensional approximation was proposed by ChatGPT 5.6 Sol and later simplified by the authors.", url: "https://arxiv.org/abs/2608.25961v2", version: "v2" },
      { summary: "Zhen, Zhu, Chen and Wang report LLM assistance with literature search, which surfaced the deterministic spectral results they use.", url: "https://arxiv.org/abs/2608.31081v1", version: "v1" },
      { summary: "Krohn-Grimberghe reports that the four verification programs in the artifact were produced with AI assistance under the author's direction.", url: "https://arxiv.org/abs/2608.17376v2", version: "v2" },
      { summary: "OpenAI lists itself as author and states that an unreleased internal model produced the manuscript collection. It reports a Lean formalization of the generalized amplitude-damping capacity and additivity statement; it was not rebuilt here.", url: `${OAI}lean/docs/276.md` },
      { summary: "The authors credit frontier language models with proofs of Theorems 4.1–4.2 and ChatGPT-6 Astra with writing. They report human verification and Lean formalization, which was not rebuilt here.", url: "https://arxiv.org/html/2609.28592v1", version: "v1" },
      { summary: "Pirandola credits GPT-5.6 Sol and GPT-6 Astra with candidate derivations, proof development and presentation; he reports checking the results and takes responsibility.", url: "https://arxiv.org/html/2609.31609v1", version: "v1" },
      { summary: "Shou and Gorshkov credit GPT-6 Astra with the proof method, checking and proofreading.", url: "https://arxiv.org/html/2609.23946v2", version: "v2" },
      { summary: "Zhu and Wang report that they formulated the problem and selected channels, while QudeLeap's AI Scientist harness and language models suggested a signed-lift mechanism that the authors reformulated and take responsibility for.", url: "https://arxiv.org/abs/2607.24693" }],
    title: "Structural formulas for quantum channel capacities",
    statement: r`For explicitly specified finite-dimensional memoryless channel families, find certified capacity formulas or sufficient additivity criteria for $Q(\mathcal N)=\lim_{n\to\infty}\frac1n\max_\rho I_c(\rho,\mathcal N^{\otimes n})$, and characterize their domain of validity.`,
    definition: r`**The quantum capacity** $Q(\mathcal N)$ of a memoryless channel $\mathcal N$ is the asymptotic rate of reliable unassisted qubit transmission. The Lloyd–Shor–Devetak theorem expresses it as the regularized coherent information in the statement. Evaluating it, deriving a single-letter formula and deciding whether an arbitrary input channel has a computable capacity are different tasks.

For degradable channels the coherent information is additive, so the capacity is single-letter; examples include dephasing and the degradable parameter regime of amplitude damping (Devetak and Shor, [arXiv:quant-ph/0311131](https://arxiv.org/abs/quant-ph/0311131)). In general, superadditivity defeats naive single-copy formulas. The target here is a specified natural family with a verified finite-letter formula, matching bounds or sufficient structural additivity conditions.`,
    progress: r`- Superadditivity of coherent information and superactivation: two zero-capacity channels can have positive joint capacity (Smith and Yard, [arXiv:0807.4935](https://arxiv.org/abs/0807.4935)). This defeats naive single-copy formulas.
- Derksen and Lovitz give explicit channels with strictly subadditive minimum output Rényi entropy for every order $p>1$, built from subspaces of high geometric measure of entanglement (October 2025 preprint, revised January 2026; accepted at FOCS 2026, 8–11 November 2026) ([arXiv:2510.07547](https://arxiv.org/abs/2510.07547)). A negative result for single-letter formulas, not a capacity theorem.
- Leung, Lovitz, Nechita and Wu prove violations of minimum output $p$-Rényi additivity for every $p>0$, closing most of the previously open range $0<p<1$ (July 2026) ([arXiv:2607.15210](https://arxiv.org/abs/2607.15210)).
- Zhu and Wang claim an explicit qutrit channel with zero quantum and private capacities that is neither PPT nor antidegradable, using an all-blocklength relative-entropy argument (July 2026) ([arXiv:2607.24693](https://arxiv.org/abs/2607.24693)). This proposes an additional mechanism for incapacity, not a complete structural classification.
- Krohn-Grimberghe certifies exactly a positive-order Rényi violation for the explicit Cubitt–Harrow–Leung–Montanaro–Winter channel pair (August 2026) ([arXiv:2608.17376](https://arxiv.org/abs/2608.17376)).
- Lovitz and Wu show that Haar randomness in Hastings-type superadditivity can be replaced by random permutations, a route to derandomization (August 2026) ([arXiv:2608.25961](https://arxiv.org/abs/2608.25961)).
- Zhen, Zhu, Chen and Wang give a deterministic polynomial-time construction of channels violating minimum-output-entropy additivity (August 2026) ([arXiv:2608.31081](https://arxiv.org/abs/2608.31081)).
- Tang, Zhu, Bai and Wang claim strong additivity of Holevo information and channel entanglement of formation for qubit channels admitting a pure output, yielding the amplitude-damping classical capacity and parallel entanglement cost (23 September 2026) ([arXiv:2609.28592](https://arxiv.org/abs/2609.28592)). These are distinct from unassisted quantum capacity.
- Shou and Gorshkov give explicit non-random counterexamples to minimum-output von Neumann entropy additivity (24 September 2026; v2) ([arXiv:2609.23946](https://arxiv.org/abs/2609.23946)). With Derksen–Lovitz, explicit nonadditivity is now available at every Rényi order.
- Pirandola gives convergent series for the amplitude-damping quantum, classical and entanglement-assisted capacities, with truncation control (25 September 2026) ([arXiv:2609.31609](https://arxiv.org/abs/2609.31609)). The classical series uses the Tang–Zhu–Bai–Wang additivity claim.
- OpenAI's Math Release (public 6 October 2026; a GitHub release, not an arXiv preprint) claims that the unassisted classical capacity of every qubit generalized amplitude-damping channel, at all damping and thermal parameters, equals its one-shot Holevo capacity, given by a one-variable maximum. Holevo capacity, minimum output entropy and regularized classical capacity are claimed additive under tensor products with every finite-dimensional channel ([manuscript](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Classical-capacity-and-entropy-inequalities-for-generalized-amplitude-damping-September-24-2026/paper.pdf)). This extends the September pure-output amplitude-damping result to the thermal family; it concerns classical, not quantum, capacity.`,
    residual: r`No universal finite-letter quantum-capacity formula follows from any of these results. The minimum-output-entropy results sharpen explicit nonadditivity; the amplitude-damping and generalized amplitude-damping results concern classical capacity or entanglement cost. The structural quantum-capacity formulas asked for here remain open.

Scope:
- Unbounded blocklength phenomena rule out one fixed coherent-information blocklength that works for every channel. They do not prove that every conceivable single-letter expression is impossible, or that ordinary memoryless quantum or private capacity is Turing-uncomputable.
- The 2026 capacity-complexity work ([arXiv:2601.22471](https://arxiv.org/abs/2601.22471)) distinguishes quantum-capacity hardness from specialized zero-error undecidability; U4 treats the remaining computability question.
- The depolarizing-channel threshold and its August 2026 certificate have been promoted to the concrete benchmark C11.`,
    refs: [
      { label: "Leung, Lovitz, Nechita & Wu, 'Counterexamples to additivity of minimum output p-Rényi entropy of quantum channels for all p≥0' (2026 preprint, v2) (found via the QIQCOP Zoo)", url: "https://arxiv.org/abs/2607.15210v2" },
      { label: "Lovitz & Wu, 'Superadditivity of classical communication over quantum channels via random and deterministic permutations' (2026 preprint, v2) (found via the QIQCOP Zoo)", url: "https://arxiv.org/abs/2608.25961v2" },
      { label: "Zhen, Zhu, Chen & Wang, 'Deterministic Minimum-Output-Entropy Nonadditivity via Haagerup's Inequality' (2026 preprint, v1) (found via the QIQCOP Zoo)", url: "https://arxiv.org/abs/2608.31081v1" },
      { label: "Krohn-Grimberghe, 'Exact certification of a positive-order Rényi additivity violation for an explicit channel pair' (2026 preprint, v2) (found via the QIQCOP Zoo)", url: "https://arxiv.org/abs/2608.17376v2" },
      { label: "OpenAI, 'Classical capacity and entropy inequalities for generalized amplitude damping' (OpenAI Math Release manuscript, dated 24 September 2026; public 6 October 2026)", url: `${OAI}preprints/Classical-capacity-and-entropy-inequalities-for-generalized-amplitude-damping-September-24-2026/paper.pdf` },
      { label: "Tang, Zhu, Bai & Wang, 'Classical Capacity and Entanglement Cost of the Amplitude Damping Channel' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.28592v1" },
      { label: "Pirandola, 'Exact series formulas for the capacities of the amplitude damping channel' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.31609v1" },
      { label: "Shou & Gorshkov, 'A constructive violation of additivity of minimum output von Neumann entropy' (2026 preprint, v2)", url: "https://arxiv.org/abs/2609.23946v2" },
      { label: "Derksen & Lovitz, 'Constructive counterexamples to the additivity of minimum output Rényi entropy of quantum channels for all p>1' (2025 preprint, v2; accepted to FOCS 2026)", url: "https://arxiv.org/abs/2510.07547v2" },
      {"label":"Bhattacharyya, Mehta & Zhao, 'On the undecidability of quantum channel capacities' (2026, corrected v3; FOCS 2026)","url":"https://arxiv.org/abs/2601.22471v3"},
      { label: "Devetak & Shor, 'The capacity of a quantum channel for simultaneous transmission of classical and quantum information', Comm. Math. Phys. 256 (2005)", url: "https://arxiv.org/abs/quant-ph/0311131" },
      { label: "Smith & Yard, 'Quantum communication with zero-capacity channels', Science 321 (2008)", url: "https://arxiv.org/abs/0807.4935" },
      { label: "Zhu & Wang, 'Quantum Incapacity beyond No-Cloning and PPT Mechanisms' (2026 preprint)", url: "https://arxiv.org/abs/2607.24693" },
      { label: "Krohn-Grimberghe, 'A certified lower bound on the quantum-capacity threshold of the depolarizing channel' (2026 preprint)", url: "https://arxiv.org/abs/2608.15870" },
    ] },

  { id: "C2", cat: "channels", horizon: "incremental",
    provenance: [
      { summary: "Mele, Catalano, Fanizza, Giovannetti and Lami credit ChatGPT with substantial help in finding the non-Gaussian counterexample after their own attempts.", url: "https://arxiv.org/abs/2607.27449v1", version: "v1" },
    ],
    evidence: [
      { kind: "preprint", role: "progress", summary: "Thermal-input bound optimal among single-mode Gaussian inputs; a certified non-Gaussian input gives positive capacity beyond the Gaussian threshold.", url: "https://arxiv.org/abs/2607.27449v1", date: "2026-07-29", version: "v1" },
    ],
    reviewedAt: "2026-11-08",
    relations: [{ id: "C3", type: "related" }, { id: "C10", type: "parent" }],
    title: "Quantum capacity of the thermal attenuator",
    statement: r`For a bosonic thermal attenuator with transmissivity $\eta$, environment mean occupation $N_{\rm th}$ and mean input-photon budget $N_S$ per use, determine the unassisted quantum capacity $Q(\eta,N_{\rm th},N_S)$ outside known zero-capacity and pure-loss cases. Treat private capacity as a separate subtarget.`,
    definition: r`**The thermal attenuator** with transmissivity $\eta$ and environment occupation $N_{\rm th}$ mixes the input with a thermal environment on a beam splitter. It models optical transmission with loss and added noise. Here the energy budget is a mean photon-number constraint averaged over uses of each code; other constraints, assistance conventions and finite-error capacities must be stated separately.

The zero-temperature pure-loss case is solved, and some noisy regimes are known to have zero capacity, but useful positive-capacity noisy regimes remain unresolved. Rosati, Mari and Giovannetti gave the standard narrow bounds ([Nature Communications 9, 4339 (2018)](https://www.nature.com/articles/s41467-018-06848-0)).`,
    progress: r`- The pure-loss channel has known degradable and antidegradable regimes and an energy-constrained single-letter quantum capacity. Thermal channels have established antidegradable and entanglement-breaking zero-capacity regions.
- Upper bounds follow from channel decompositions, data processing and two-way bounds such as PLOB ([arXiv:1510.08863](https://arxiv.org/abs/1510.08863)); coherent information yields achievable lower bounds.
- Rosati, Mari and Giovannetti give narrow bounds for the capacity of thermal attenuators ([Nature Communications 9, 4339 (2018)](https://www.nature.com/articles/s41467-018-06848-0)).
- Correlated multimode Gaussian coding can improve on product thermal-input strategies (Noh, Pirandola and Jiang, [Nature Communications 11, 457 (2020)](https://www.nature.com/articles/s41467-020-14329-6)).
- Mele, Catalano, Fanizza, Giovannetti and Lami prove that the Holevo–Werner thermal-input lower bound is the exact optimum over single-mode Gaussian inputs, and that a non-Gaussian input beats it (29 July 2026, v1) ([arXiv:2607.27449](https://arxiv.org/abs/2607.27449)). Hence the capacity is positive in a region where the channel is not antidegradable but every single-mode Gaussian input gives zero coherent information. For one thermal environment photon they narrow the positivity threshold to $0.75\le\eta_c\le0.7841<4/5$.`,
    residual: r`The exact capacity and the exact positivity threshold remain open. The target is matching achievable and converse bounds for fixed $(\eta,N_{\rm th},N_S)$. Across this three-parameter family progress is incremental: closing the gap on a specified parameter region counts, and no single proof or counterexample settles every point.

Cautions:
- “Gaussian optimization” must not silently mean a one-mode product ansatz, and the remaining upper/lower gaps should not all be called uniformly small.
- Private capacity requires its own coding and secrecy definition and should not be assumed equal to quantum capacity.`,
    refs: [
      { label: "Mele, Catalano, Fanizza, Giovannetti & Lami, 'Bosonic quantum communication beyond the thermal threshold' (2026 preprint, v1) (found via the QIQCOP Zoo)", url: "https://arxiv.org/abs/2607.27449v1" },
      {"label":"Rosati, Mari & Giovannetti, 'Narrow bounds for the quantum capacity of thermal attenuators', Nature Communications 9, 4339 (2018)","url":"https://www.nature.com/articles/s41467-018-06848-0"},
      {"label":"Noh, Pirandola & Jiang, 'Enhanced energy-constrained quantum communication over bosonic Gaussian channels', Nature Communications 11, 457 (2020)","url":"https://www.nature.com/articles/s41467-020-14329-6"},
      { label: "Pirandola, Laurenza, Ottaviani, Banchi, 'Fundamental limits of repeaterless quantum communications', Nat. Commun. 8, 15043 (2017)", url: "https://arxiv.org/abs/1510.08863" },
    ] },

  { id: "C3", cat: "channels", horizon: "incremental", status: "improved",
    reviewedAt: "2026-10-26",
    relations: [{ id: "C2", type: "related" }, { id: "C10", type: "parent" }],
    provenance: [
      { summary: "Pirandola reports that GPT-6 Astra generated candidate derivations and proofs and assisted with their development and presentation; v3 adds a detailed AI-use history. The same statement appears in the noisy-channel and the multimode manuscript (the latter with Spedalieri).", url: "https://arxiv.org/abs/2610.06832v3", version: "v3" },
      { summary: "Falco, Mele, Lami and Giovannetti state that their main result was obtained on 17 September 2026 with a single ChatGPT Astra prompt, and that Pirandola independently obtained the same result.", url: "https://arxiv.org/abs/2610.12365v1", version: "v1" },
      { summary: "Barber and Pirandola report that ChatGPT (GPT-6 Astra) generated candidate derivations and proofs and assisted with their development and presentation.", url: "https://arxiv.org/html/2610.26783v1", version: "v1" },
    ],
    evidence: [
      { kind: "preprint", role: "progress", summary: "Claimed exact PPT-assisted quantum and entanglement-distribution capacities of thermal loss, thermal amplification and additive Gaussian noise, with and without an energy constraint; PPT assistance is stronger than LOCC, so these are benchmarks, not $Q_2$ or $K$.", url: "https://arxiv.org/abs/2610.26783v1", date: "2026-10-19", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Claimed energy-constrained two-way quantum, entanglement, private and key capacities of pure loss, $g(N)-g((1-\\eta)N)$ under a mean transmitted-photon constraint; pure loss is a boundary case, not a noisy family.", url: "https://arxiv.org/abs/2610.06832v3", date: "2026-10-05", version: "v3" },
      { kind: "preprint", role: "progress", summary: "Independent claim of the same energy-constrained pure-loss two-way quantum and key capacities under an average input photon-number constraint.", url: "https://arxiv.org/abs/2610.12365v1", date: "2026-10-08", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Unified energy-constrained adaptive weak-converse bound for thermal loss, noisy amplification and additive noise; an explicit gap to hashing rates remains.", url: "https://arxiv.org/abs/2610.08786v2", date: "2026-10-06", version: "v2" },
      { kind: "preprint", role: "progress", summary: "Claimed exact finite-energy two-way capacities for multimode pure loss and publicly revealed fading; noisy channels are not covered.", url: "https://arxiv.org/abs/2610.18731v1", date: "2026-10-13", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Improved achievable thermal-loss two-way quantum rates, not exact Q2 or K. Submission predates its September listing.", url: "https://arxiv.org/abs/2609.27792v1", date: "2026-08-17", version: "v1" },
    ],
    title: "Two-way capacities of Gaussian channels",
    statement: r`Determine exact two-way entanglement-distribution capacity $Q_2$ and secret-key capacity $K$ for specified noisy thermal-loss, thermal-amplifier and additive-noise channels, distinguishing unrestricted-energy from fixed-energy coding.`,
    definition: r`**The two-way assisted capacities** $Q_2(\mathcal N)$ and $K(\mathcal N)$ are the optimal rates of entanglement distribution and of secret-key generation over a channel when the parties may also use unlimited authenticated two-way classical communication. The two tasks have distinct operational definitions, and $Q_2$ and $K$ need not coincide for a general channel. They bound repeaterless communication over a single link, not capacities of arbitrary repeater networks.

In the unrestricted-energy limit, Pirandola, Laurenza, Ottaviani and Banchi (PLOB) established $Q_2=K=-\log_2(1-\eta)$ for pure loss and $Q_2=K=\log_2[g/(g-1)]$ for a quantum-limited amplifier of gain $g>1$ ([arXiv:1510.08863](https://arxiv.org/abs/1510.08863)). These boundary cases are excluded from the open claim. With nonzero thermal noise or additive Gaussian noise, general matching bounds are missing. A finite input-energy budget changes the problem even for a channel with a known unrestricted-energy capacity.`,
    progress: r`- Barber and Pirandola improve achievable two-way quantum rates for thermal loss over a range of parameters by combining qubit–bosonic distribution and optimized entanglement distillation (submitted 17 August 2026, listed September 2026) ([arXiv:2609.27792](https://arxiv.org/abs/2609.27792)). This tightens lower bounds; it gives neither matching converses nor an exact secret-key capacity.
- Pirandola claims that the energy-constrained two-way quantum, entanglement-distribution, private and secret-key capacities of pure loss equal $g(N)-g((1-\eta)N)$, the reverse-coherent-information rate, under a constraint on mean transmitted photon number; he also covers the quantum-limited amplifier (5 October 2026; reviewed at v3) ([arXiv:2610.06832](https://arxiv.org/abs/2610.06832)).
- Pirandola gives a unified energy-constrained adaptive weak-converse bound for thermal loss, noisy amplification and additive noise (6 October 2026) ([arXiv:2610.08786](https://arxiv.org/abs/2610.08786)). It improves evaluated converses but leaves a gap to achievable rates.
- Falco, Mele, Lami and Giovannetti independently claim the same pure-loss two-way quantum and secret-key capacities, under a constraint on average input photon number (8 October 2026, v1) ([arXiv:2610.12365](https://arxiv.org/abs/2610.12365)).
- Pirandola and Spedalieri extend the pure-loss result to multimode loss and publicly revealed fading (13 October 2026) ([arXiv:2610.18731](https://arxiv.org/abs/2610.18731)). Noisy channels are not covered.
- Barber and Pirandola claim the exact quantum-communication and entanglement-distribution capacities of thermal loss, thermal amplification and additive Gaussian noise when the assistance is enlarged from LOCC to operations that completely preserve positive partial transpose (19 October 2026, v1) ([arXiv:2610.26783](https://arxiv.org/abs/2610.26783)). For thermal loss the unconstrained PPT-assisted capacity is claimed to equal the PLOB bound throughout the non-entanglement-breaking regime, and the energy-constrained versions are claimed at every mean input energy.`,
    residual: r`The noisy LOCC-assisted capacities in the statement remain open. PPT-preserving operations contain LOCC, so the PPT-assisted quantum-capacity formulas upper-bound $Q_2$ under the same energy constraint; whether LOCC attains these rates remains open. Without an energy constraint, the separate PLOB key converse also upper-bounds $K$ and coincides with the claimed PPT-assisted capacity for these families. The energy-constrained PPT quantum converse does not by itself upper-bound energy-constrained $K$. The pure-loss results are boundary cases, not the noisy families.

Cautions:
- The quantum-limited amplifier is not an unresolved generic amplifier case.
- The energy constraint and error criterion must be included in every benchmark. Pirandola bounds transmitted photons, while Falco et al. bound average input photons.
- Comparisons of achievable protocols with energy-constrained benchmarks must retain the protocol's resource assumptions.
- The incremental goal is to close specified $Q_2$ or $K$ gaps in noisy families under explicit energy assumptions, using PLOB and later converse techniques alongside achievable protocols.`,
    refs: [
      { label: "Pirandola, 'Energy-constrained two-way capacities of pure-loss and quantum-limited amplifier channels' (2026 preprint, v3)", url: "https://arxiv.org/abs/2610.06832v3" },
      { label: "Falco, Mele, Lami & Giovannetti, 'Energy-constrained two-way capacities of the pure-loss channel' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.12365v1" },
      { label: "Pirandola, 'Energy-constrained two-way capacity bounds for noisy Gaussian channels' (2026 preprint, v2)", url: "https://arxiv.org/abs/2610.08786v2" },
      { label: "Pirandola & Spedalieri, 'Finite-energy two-way assisted capacities: Exact formulas for multimode loss and fading' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.18731v1" },
      { label: "Barber & Pirandola, 'Improved lower bound for the two-way-assisted quantum capacity of the bosonic thermal-loss channel' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.27792v1" },
      { label: "Barber & Pirandola, 'PPT-assisted capacities of bosonic Gaussian channels' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.26783v1" },
      {"label":"Pirandola, Laurenza, Ottaviani & Banchi, 'Fundamental limits of repeaterless quantum communications' (PLOB), Nature Communications 8, 15043 (2017)","url":"https://arxiv.org/abs/1510.08863"},
      { label: "Wilde, Tomamichel, Berta, 'Converse bounds for private communication over quantum channels', IEEE Trans. Inf. Theory 63 (2017)", url: "https://arxiv.org/abs/1602.08898" },
    ] },

  { id: "C4", cat: "channels", horizon: "sharp", status: "claimed-solved",
    reviewedAt: "2026-11-08",
    relations: [{ id: "C1", type: "related" }, { id: "C11", type: "related" }],
    evidence: [
      { kind: "preprint", role: "claimed-solution", summary: "Second claimed general exponential quantum strong converse, via a fully quantum blowing-up lemma; not independent proof validation.", url: "https://arxiv.org/abs/2609.11771v1", date: "2026-09-10", version: "v1" },
      { kind: "preprint", role: "claimed-solution", summary: "Claimed exponential strong converses for arbitrary finite-dimensional memoryless channels and all unassisted codes. This would resolve the stated quantum-capacity question; independent verification is pending.", url: "https://arxiv.org/abs/2609.08998v1", date: "2026-09-08", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Strong converse restricted to full-joint-eigenspace stabilizer codes over Pauli channels.", url: "https://arxiv.org/abs/2607.23450", date: "2026-07-26" }, { kind: "preprint", role: "progress", summary: "Claimed all-code exponential strong converse for finite-dimensional degradable and antidegradable channels; this earlier claim does not cover general channels.", url: "https://arxiv.org/abs/2608.01308", date: "2026-08-02" }],
    provenance: [
      { summary: "Beigi and Tomamichel disclose Codex with ChatGPT 6 Astra for exploring and checking proof strategies and preparing the manuscript; they retain responsibility for the proofs and exposition.", url: "https://arxiv.org/html/2609.11771v1", version: "v1" },
      { summary: "Cheng and Tomamichel credit OpenAI Codex with ChatGPT 6 Astra for suggesting the asymptotic-continuity approach via derivative bounds and an initial proof. They attribute the integral-representation exposition to themselves, report further drafting and literature assistance, and take responsibility after review.", url: "https://arxiv.org/html/2609.08998v1", version: "v1" },
      { summary: "Tomamichel reports author-directed Claude proof development, writing and literature work, plus ChatGPT adversarial review, and states that he checked the statements, proofs and references.", url: "https://arxiv.org/abs/2607.23450" }, { summary: "Kondra et al. disclose ChatGPT 5.6 Sol assistance on technical proof steps and later manuscript work with Claude Opus 4.8; they state that the initial draft was handwritten and all assisted material was reviewed.", url: "https://arxiv.org/abs/2608.01308" }],
    title: "Strong converse for quantum capacity",
    statement: r`For every finite-dimensional memoryless channel $\mathcal N$, does unassisted entanglement transmission at a fixed rate above $Q(\mathcal N)$ force entanglement fidelity to tend to zero for all code sequences? Prove the statement or construct a counterexample.`,
    definition: r`**A strong converse** for quantum capacity states that at any fixed rate above $Q(\mathcal N)$ the entanglement fidelity of every code sequence tends to zero as the blocklength grows. This makes the capacity a sharp threshold. The weak converse only rules out asymptotically perfect transmission. Exponential decay of the fidelity is a stronger quantitative conclusion and should be distinguished from the basic strong-converse question.

Earlier work established quantum strong converses for selected channel classes and strong-converse upper bounds based on the Rains quantity (Tomamichel, Wilde and Winter, [arXiv:1406.2946](https://arxiv.org/abs/1406.2946)). The general question for all finite-dimensional channels and all codes was open.`,
    progress: r`- For degradable channels the general baseline was a “pretty strong” converse, not an all-code full strong converse.
- Strong converses for classical communication through entanglement-breaking channels (Wilde, Winter and Yang, [arXiv:1306.1586](https://arxiv.org/abs/1306.1586)) do not prove the corresponding quantum-capacity statement.
- Tomamichel claims an exponential strong converse for full-joint-eigenspace stabilizer codes over Pauli channels, with a threshold set by the corresponding coherent-information optimization (July 2026) ([arXiv:2607.23450](https://arxiv.org/abs/2607.23450)). This is a restricted-code result, not a theorem for every encoder.
- Kondra, Brinster, Kampermann, Bruß and Wyderka claim an all-code exponential strong converse for finite-dimensional degradable and antidegradable channels, including the first all-code exponential erasure-channel result over its full parameter range (August 2026) ([arXiv:2608.01308](https://arxiv.org/abs/2608.01308)). They also give general SDP strong-converse bounds and a result for a multilevel amplitude-damping family. This covers restricted classes, not general channels.`,
    claim: r`**Cheng and Tomamichel, [“No information transmission through quantum channels above capacity”](https://arxiv.org/abs/2609.08998)** (arXiv preprint, v1).

**Beigi and Tomamichel, [“Strong Converse for Quantum Capacity via a Fully Quantum Blowing-Up Lemma”](https://arxiv.org/abs/2609.11771)** (arXiv preprint, v1).

What it claims:
- Cheng and Tomamichel: an exponential strong converse for unassisted quantum communication over every finite-dimensional memoryless channel, and for unassisted classical communication at its own capacity. Their entanglement-generation bound covers arbitrary codes and implies the transmission statement above. The argument uses integral representations and asymptotic continuity of regularized Rényi capacities.
- Beigi and Tomamichel: exponential fidelity decay above quantum capacity for every finite-dimensional memoryless channel, by a different route: a fully quantum blowing-up lemma and a polynomial approximation that controls the projective norm of a Stinespring-image projector.
- Each claims to settle the full finite-dimensional question, not another restricted channel class.

Caveats:
- Neither preprint has been peer reviewed, and this catalogue has not independently assessed them. Hence “Claimed solved” rather than “Solved”.
- The two proofs use different methods but share an author (Tomamichel), so they are not confirmations by disjoint teams.
- Both disclose AI assistance: Cheng and Tomamichel credit Codex with ChatGPT 6 Astra for suggesting the asymptotic-continuity approach and an initial proof; Beigi and Tomamichel used it to explore and check proof strategies.`,
    residual: r`No exact capacity formula, infinite-dimensional extension or assisted-capacity theorem follows from these claims. Code restrictions, assistance and fidelity conventions still distinguish the various results.`,
    refs: [
      { label: "Beigi & Tomamichel, 'Strong Converse for Quantum Capacity via a Fully Quantum Blowing-Up Lemma' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.11771v1" },
      { label: "Cheng & Tomamichel, 'No information transmission through quantum channels above capacity' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.08998v1" },
      { label: "Tomamichel, Wilde, Winter, 'Strong converse rates for quantum communication', IEEE Trans. Inf. Theory 63 (2017)", url: "https://arxiv.org/abs/1406.2946" },
      { label: "Wilde, Winter, Yang, 'Strong converse for the classical capacity of entanglement-breaking and Hadamard channels', Comm. Math. Phys. 331 (2014)", url: "https://arxiv.org/abs/1306.1586" },
      { label: "Tomamichel, 'A strong converse for stabilizer codes over Pauli channels via the blowing-up lemma' (2026 preprint)", url: "https://arxiv.org/abs/2607.23450" },
      { label: "Kondra et al., 'Sharp Quantum Capacity Thresholds: Exponential Strong Converses for Degradable and Antidegradable Channels' (2026 preprint)", url: "https://arxiv.org/abs/2608.01308" },
    ] },

  { id: "C5", cat: "channels", horizon: "incremental", status: "improved",
    reviewedAt: "2026-10-05",
    relations: [{ id: "C1", type: "related" }, { id: "E16", type: "related" }],
    evidence: [
      { kind: "preprint", role: "progress", summary: "Exact private strong-converse exponent claimed under a joint squared-fidelity criterion, expressed through a regularized quantity.", url: "https://arxiv.org/abs/2609.38144v1", date: "2026-09-29", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Channel-order criteria and explicit zero-private-capacity/activation families; not a general classification of P versus Q.", url: "https://arxiv.org/abs/2610.03706v1", date: "2026-10-02", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Two individually zero-private-capacity channels are claimed to have positive joint private capacity; this is operational superactivation, not just private-information superadditivity.", url: "https://arxiv.org/abs/2609.10520v1", date: "2026-09-09", version: "v1" },
    ],
    provenance: [
      { summary: "The authors report ChatGPT and Codex assistance with proof exploration, derivation checks, literature and editing, and state that they verified the resulting content.", url: "https://arxiv.org/html/2609.38144v1", version: "v1" },
      { summary: "Hirche reports Codex with gpt-6-sol and gpt-6-astra contributions to proof strategies, intermediate results and proof drafting, as well as supporting research and writing. He retains responsibility for the proofs.", url: "https://arxiv.org/html/2610.03706v1", version: "v1" },
      { summary: "Zhu and Wang report QudeLeap AI Quantum Scientist and language-model assistance in finding an initial activating example, exploring proofs, and drafting. They say they checked and rewrote the proofs and retain responsibility. They also report Lean 4 formalization, which this review has not rebuilt.", url: "https://arxiv.org/html/2609.10520v1", version: "v1" },
    ],
    title: "Private versus quantum capacity",
    statement: r`At fixed input and output dimensions, characterize when a memoryless channel has $P(\mathcal N)>Q(\mathcal N)$ and bound the maximal gap $P-Q$; separately seek structural criteria for additivity across specified channel pairs.`,
    definition: r`**The private capacity** $P(\mathcal N)$ of a channel is the optimal rate of reliable secret classical communication against the channel environment; the quantum capacity $Q(\mathcal N)$ is the optimal qubit-transmission rate. Always $Q\le P$. A gap probes the difference between secrecy and preservation of quantum coherence.

Regularized formulas are known for both, and there are channels with $P>0$ but $Q=0$, a consequence of key distillable from bound entanglement (Horodecki, Horodecki, Horodecki and Oppenheim, [PRL 94, 160502 (2005)](https://doi.org/10.1103/PhysRevLett.94.160502)). Such examples show that an unnormalized maximal gap over all dimensions is not a finite open target: tensor powers make the absolute gap arbitrarily large, and a ratio is meaningless or infinite when $Q=0$. Fixed dimensions or an explicit dimension normalization are therefore essential.`,
    progress: r`- Private information can be superadditive across channel uses (Elkouss and Strelchuk, [arXiv:1502.05326](https://arxiv.org/abs/1502.05326)).
- Zhu and Wang claim operational private-capacity superactivation: a four-level channel and a qubit erasure channel with erasure probability $1/2$ each have $P=0$, but their product transmits more than $0.0001903$ private bits per product use (9 September 2026, v1) ([arXiv:2609.10520](https://arxiv.org/abs/2609.10520)). Their theorem extends positivity to erasure probabilities below one and at least one half, using a fixed joint output measurement and classical wiretap coding. This concerns regularized operational capacity, which is stronger than single-letter private-information superadditivity; if verified, it settles the existence subquestion. The authors report a Lean 4 formalization whose scope and build have not been checked here.
- Cheng, Hirche and Tomamichel claim an exact strong-converse exponent for finite-dimensional quantum wiretap channels, using squared fidelity to an ideal secret key as a joint reliability and secrecy criterion (29 September 2026, v1) ([arXiv:2609.38144](https://arxiv.org/abs/2609.38144)). The formula uses regularized Rényi private information; it is not a single-letter capacity formula or a criterion-independent converse.
- Hirche connects channel orderings to binary estimation, obtains exact thresholds for specified noisy Werner–Holevo families and extends activation constructions (2 October 2026, v1) ([arXiv:2610.03706](https://arxiv.org/abs/2610.03706)). Complete comparison controls stability against antidegradable helpers, whereas regularized comparison alone need not prevent activation.`,
    residual: r`A general classification of when $P>Q$, structural additivity criteria, and tight fixed-dimension bounds on the gap remain open.

Distinctions:
- Single-letter superadditivity of private information is a different question from whether the operational capacity $P(\mathcal N\otimes\mathcal M)$ equals $P(\mathcal N)+P(\mathcal M)$ for different channels; the same distinction applies to $Q$.
- Entanglement with zero distillable key is a question about states (E16), not the same problem as a channel-capacity gap.`,
    refs: [
      { label: "Hao-Chung Cheng, Christoph Hirche, Marco Tomamichel, 'The exact strong converse exponent for private communication over quantum channels' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.38144v1" },
      { label: "Christoph Hirche, 'Quantum estimation, channel orders, and private capacity' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.03706v1" },
      { label: "Zhu & Wang, 'Private communication via zero-private-capacity quantum channels' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.10520v1" },
      { label: "Horodecki, Horodecki, Horodecki, Oppenheim, 'Secure key from bound entanglement', PRL 94, 160502 (2005)", url: "https://doi.org/10.1103/PhysRevLett.94.160502" },
      { label: "Elkouss & Strelchuk, 'Superadditivity of private information for any number of uses of the channel', PRL 115, 040501 (2015)", url: "https://arxiv.org/abs/1502.05326" },
    ] },

  { id: "C6", cat: "channels", horizon: "incremental", status: "improved",
    reviewedAt: "2026-10-26",
    relations: [{ id: "C1", type: "related" }, { id: "U4", type: "related" }],
    evidence: [
      { kind: "preprint", role: "progress", summary: "A continuum of Rényi-type elements $\\vartheta_\\alpha$, $0\\le\\alpha\\le2$, in the entanglement-assisted asymptotic spectrum of graphs; proves the Duan–Winter conjecture $C_{\\min}(C_5)=\\log_2(5/2)$ and settles two links of their inequality chain. Upper bounds on entanglement-assisted zero-error capacities, not exact values of $\\Theta(C_7)$.", url: "https://arxiv.org/abs/2610.20775v1", date: "2026-10-14", version: "v1" },
      { kind: "preprint", role: "progress", summary: "An exactly multiplicative SDP upper bound $\\Gamma(K)$ on no-signalling-assisted zero-error capacity of quantum channels, sharp bounds for classical-quantum channels, and a negative answer to an open question on the asymptotic simulation cost.", url: "https://arxiv.org/abs/2610.21071v1", date: "2026-10-15", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Certified classical seven-cycle Shannon-capacity lower bound from an independent set in a 500th strong power, not an exact capacity.", url: "https://arxiv.org/abs/2608.30273", date: "2026-08-31" },
      { kind: "preprint", role: "progress", summary: "Lean-formalized lower bounds for several odd cycles, including Θ(C7) ≥ 3.258805…, in the recursive line started by Itty et al. and Gao; lower bounds only.", lean: true, url: "https://arxiv.org/abs/2607.29681v1", date: "2026-07-31", version: "v1" },
    ],
    provenance: [{ summary: "Tandon reports ChatGPT and Claude use for constructions, proof development/checks, implementation and writing, and supplies exact computations and machine-readable certificates under author responsibility.", url: "https://arxiv.org/abs/2608.30273" },
      { summary: "Mghirbi and Douglas report generative-AI use throughout research and preparation, including mathematical exploration, proof development and critique; finite numerical checks are stated not to be used as proof.", url: "https://arxiv.org/html/2610.20775v1", version: "v1" },
      { summary: "Li and Li report using ChatGPT in developing the arguments and proofs of specified sections, reviewed and verified by the authors.", url: "https://arxiv.org/html/2610.21071v1", version: "v1" }],
    title: "Zero-error capacities and graph-capacity benchmarks",
    statement: r`For explicitly specified channel or noncommutative-graph families, evaluate asymptotic zero-error capacity with message type and assistance fixed. A concrete classical benchmark is the exact Shannon capacity $\Theta(C_7)$.`,
    definition: r`**The zero-error capacity** of a channel is the asymptotic rate at which messages can be sent so that they are perfectly distinguishable at every blocklength, unlike vanishing-error Shannon transmission. Classical messages, quantum states, entanglement assistance, one-shot transmission and asymptotic rates define different quantities. Classically, an independent-set problem on strong graph powers defines the Shannon capacity $\Theta(G)$, and the capacity in bits per use is $\log_2\Theta(G)$. Lovász settled the five-cycle; the seven-cycle remains a benchmark.

For quantum channels the confusability graph becomes a noncommutative graph (an operator system), with quantum Lovász-type SDP bounds (Duan, Severini and Winter, [arXiv:1002.2514](https://arxiv.org/abs/1002.2514)).`,
    progress: r`- Superactivation of the asymptotic zero-error classical capacity (Cubitt, Chen and Harrow, [arXiv:0906.2547](https://arxiv.org/abs/0906.2547)), together with entanglement-assisted enhancements, shows that zero-error resources can behave very differently from ordinary capacities.
- The seven-cycle lower bound had stood at $\Theta(C_7)\ge367^{1/5}\approx3.25787$ (Polak and Schrijver, 2019, [doi:10.1016/j.ipl.2018.11.006](https://doi.org/10.1016/j.ipl.2018.11.006)).
- A rapid AI-assisted sequence then raised it, starting with Itty, Rosin, Carstensen and Reichman, $134753^{1/10}>3.25802$ (July 2026) ([arXiv:2607.21517](https://arxiv.org/abs/2607.21517)).
- Gao's recursive product construction gives $3.25878\ldots$ (July 2026) ([arXiv:2607.27869](https://arxiv.org/abs/2607.27869)).
- Buys, Polak and Zuiddam give Lean-formalized lower bounds for several odd cycles, including $3.25880\ldots$ for $C_7$ (31 July 2026) ([arXiv:2607.29681](https://arxiv.org/abs/2607.29681)).
- Tandon claims a heterogeneous refinement giving an independent set in the 500th strong power, $\Theta(C_7)\ge3.25883262\ldots$ (31 August 2026) ([arXiv:2608.30273](https://arxiv.org/abs/2608.30273)).
- Mghirbi and Douglas show that the Lovász number is not the only element of Li and Zuiddam's entanglement-assisted asymptotic spectrum of graphs (14 October 2026, v1) ([arXiv:2610.20775](https://arxiv.org/abs/2610.20775)). Petz–Rényi information radii of orders $0\le\alpha\le2$ define $\log_2\vartheta_\alpha$. The parameters $\vartheta_\alpha$ are additive under disjoint unions, multiplicative under strong products and monotone, with $\vartheta_0=\vartheta$, $\vartheta_1=2^{C_{\min}}$ and $\vartheta_2=\Sigma$; their logarithms interpolate $\log_2\vartheta$, the minimal Holevo capacity $C_{\min}$ and the no-signalling simulation cost $\log_2\Sigma$. On the pentagon this proves Duan and Winter's conjecture $C_{\min}(C_5)=\log_2(5/2)$, and two open links of their inequality chain are settled, one by an exact-arithmetic certificate on a 32-vertex Mermin–Peres graph.
- Li and Li introduce an exactly multiplicative SDP parameter $\Gamma(K)$ bounding the no-signalling-assisted zero-error capacity of a quantum channel from above, with sharp bounds for classical-quantum channels, and show that the asymptotic simulation cost is not given by the single-letter or regularized $\Sigma^-$ formula (15 October 2026, v1) ([arXiv:2610.21071](https://arxiv.org/abs/2610.21071)).`,
    residual: r`The exact value of $\Theta(C_7)$ is unresolved: a gap remains below the Lovász upper bound $\vartheta(C_7)=7\cos(\pi/7)/(1+\cos(\pi/7))\approx3.3177$. The seven-cycle results are classical graph-capacity lower bounds, not bit rates or general quantum-capacity theorems. The October 2026 results give computable bounds and spectrum structure, not a general zero-error capacity formula.

The active programme is computable bounds and matching characterizations in stated models. Specialized zero-error undecidability results must not be transferred to ordinary memoryless quantum capacity (C1, U4).`,
    refs: [
      { label: "Duan, Severini, Winter, 'Zero-error communication via quantum channels, non-commutative graphs, and a quantum Lovász theta function', IEEE Trans. Inf. Theory 59 (2013)", url: "https://arxiv.org/abs/1002.2514" },
      { label: "Cubitt, Chen, Harrow, 'Superactivation of the asymptotic zero-error classical capacity of a quantum channel', IEEE Trans. Inf. Theory 57 (2011)", url: "https://arxiv.org/abs/0906.2547" },
      { label: "Polak & Schrijver, 'New lower bound on the Shannon capacity of C7 from circular graphs', Inf. Process. Lett. 143, 37–40 (2019)", url: "https://doi.org/10.1016/j.ipl.2018.11.006" },
      { label: "Itty, Rosin, Carstensen & Reichman, 'Improved lower bounds for the Shannon capacity of odd cycles' (2026 preprint)", url: "https://arxiv.org/abs/2607.21517" },
      { label: "Gao, 'A Recursive Construction Improving the Lower Bound on the Shannon Capacity of C7' (2026 preprint)", url: "https://arxiv.org/abs/2607.27869" },
      { label: "Buys, Polak & Zuiddam, 'Lean-verified lower bounds for the Shannon capacity of odd cycles' (2026 preprint, v1)", url: "https://arxiv.org/abs/2607.29681v1" },
      { label: "Tandon, 'Strengthening Recursive Constructions for Zero-Error Shannon Capacity' (2026 preprint)", url: "https://arxiv.org/abs/2608.30273" },
      { label: "Mghirbi & Douglas, 'The Lovász number is not alone: a continuum of Rényi points in the entanglement-assisted spectrum of graphs' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.20775v1" },
      { label: "Li & Li, 'Multiplicative Semidefinite Programming Upper Bounds on Quantum No-Signalling-Assisted Zero-Error Capacity' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.21071v1" },
    ] },

  { id: "C7", cat: "channels", horizon: "programme", status: "improved",
    relations: [{ id: "C8", type: "related" }],
    evidence: [{ kind: "preprint", role: "progress", summary: "Marton's inner bound is claimed suboptimal for an explicit classical broadcast channel; this is a classical subproblem, not a quantum capacity-region theorem.", url: "https://arxiv.org/abs/2608.19869", date: "2026-08-20" }],
    provenance: [{ summary: "Huang, Liu and Liu report GPT-5.6 Sol and Claude Fable/Opus assistance with numerical and analytic searches, and acknowledge human verification and editorial help. This is an author disclosure, not independent proof verification.", url: "https://arxiv.org/abs/2608.19869" }],
    title: "Private-message quantum broadcast capacity regions",
    statement: r`For a specified two-receiver memoryless quantum broadcast channel, characterize the region for independent classical private messages, with no preshared entanglement, feedback or receiver cooperation; treat common messages, quantum transmission and entanglement assistance as separate variants.`,
    definition: r`**A quantum broadcast channel** maps one sender's input to two receiver systems. Its achievable rate region depends on what each receiver must recover and which auxiliary resources are allowed, so a “full classical–quantum–entanglement region” is not one defined task without those choices. Here private messages means independent classical messages intended for the respective receivers, with no secrecy requirement. The task excludes preshared entanglement, feedback and receiver cooperation.

Coding theorems for quantum broadcast channels go back to Yard, Hayden and Devetak ([arXiv:quant-ph/0603098](https://arxiv.org/abs/quant-ph/0603098)).`,
    progress: r`- Yard–Hayden–Devetak and Savov–Wilde established coding results and achievable regions in specified degraded, classical–quantum and other settings. Quantum superposition and Marton-type coding give inner bounds, and some structured channel families admit matching characterizations. These results hold under their stated message and assistance hypotheses.
- Huang, Yanxiao Liu and Yi Liu claim an explicit two-receiver discrete memoryless classical broadcast channel for which Marton's inner bound is strictly suboptimal (August 2026) ([arXiv:2608.19869](https://arxiv.org/abs/2608.19869)). Since classical channels embed in the unassisted classical-message task, this challenges a candidate general formula within that classical subproblem. It does not resolve a quantum broadcast region or block progress on quantum special cases.`,
    residual: r`The programme is to close well-defined inner/outer-bound gaps for named channel families. Common messages, quantum transmission and entanglement assistance are kept as separately labelled variants.`,
    refs: [
      { label: "Yard, Hayden, Devetak, 'Quantum broadcast channels', IEEE Trans. Inf. Theory 57 (2011)", url: "https://arxiv.org/abs/quant-ph/0603098" },
      { label: "Huang, Liu & Liu, 'Sub-optimality of Marton's Inner Bound for the Two-Receiver Broadcast Channel' (2026 preprint)", url: "https://arxiv.org/abs/2608.19869" },
    ] },

  { id: "C8", cat: "channels", horizon: "programme",
    relations: [{ id: "C7", type: "related" }],
    title: "Classical communication over quantum interference channels",
    statement: r`For specified two-sender, two-receiver memoryless classical–quantum interference channels, obtain matching rate-region bounds for independent classical messages with no preshared entanglement, feedback or sender/receiver cooperation.`,
    definition: r`**A classical–quantum interference channel** has two senders and two receivers: classical inputs $(x_1,x_2)$ produce a joint quantum output state on $B_1B_2$, and each receiver decodes only its own sender's classical message while being affected by the other sender. Transmission of unknown quantum states or entanglement-assisted communication is a different task.

The unrestricted classical interference problem embeds in this class, so a fully general solution would also solve that classical problem. The standard quantum reference is Fawzi, Hayden, Savov, Sen and Wilde ([arXiv:1102.2624](https://arxiv.org/abs/1102.2624)).`,
    progress: r`- Quantum Han–Kobayashi-type coding and simultaneous-decoding methods give achievable regions (Fawzi, Hayden, Savov, Sen and Wilde, [arXiv:1102.2624](https://arxiv.org/abs/1102.2624)).
- Strong- and very-strong-interference assumptions yield additional characterizations.
- Sen's one-shot joint-typicality techniques address decoding obstacles but do not give a universal exact region ([arXiv:1806.07278](https://arxiv.org/abs/1806.07278)).`,
    residual: r`Exact quantum special cases and sharper bounds remain possible despite the classical embedding. The programme should select a concrete channel family, state its assistance convention and display a specific inner/outer-bound gap, rather than conflate all quantum-network message types.`,
    refs: [
      { label: "Fawzi, Hayden, Savov, Sen, Wilde, 'Classical communication over a quantum interference channel', IEEE Trans. Inf. Theory 58 (2012)", url: "https://arxiv.org/abs/1102.2624" },
      { label: "Sen, 'Unions, intersections and a one-shot quantum joint typicality lemma' (2018)", url: "https://arxiv.org/abs/1806.07278" },
    ] },

  { id: "C9", cat: "channels", horizon: "programme",
    relations: [{ id: "C1", type: "related" }, { id: "O5", type: "related" }],
    title: "Capacities of channels with memory",
    statement: r`For finitely specified finite-memory quantum channels, obtain certified capacity bounds with explicit finite-block errors, fixing the interaction map, initial memory, reset/access assumptions and quantitative forgetfulness or stationarity conditions.`,
    definition: r`**A quantum channel with memory** correlates different uses of a transmission medium. A useful finite description specifies an interaction map from input plus memory to output plus updated memory, an initial memory state, and whether either party can access or reset that memory. An arbitrary infinite sequence of unrelated non-Markovian maps is not the same computable input model.

Standard review: Caruso, Giovannetti, Lupo and Mancini, Rev. Mod. Phys. 86, 1203 (2014), [arXiv:1207.5435](https://arxiv.org/abs/1207.5435).`,
    progress: r`- Kretschmann and Werner define operational forgetfulness and prove coding theorems with regularized expressions for forgetful channels ([arXiv:quant-ph/0502106](https://arxiv.org/abs/quant-ph/0502106)). The remaining issue is therefore not the absence of a definition of forgetfulness.
- Gaussian, finite-state classical-memory and matrix-product structures supply examples with additional bounds or tractability; information-spectrum approaches handle broader non-i.i.d. settings.`,
    residual: r`The target is a stated model family with computable finite-block error estimates and their resource and runtime dependence, or a structural result about when such estimates exist. Initial-state sensitivity and nonforgetful behaviour require separate hypotheses. Correlation between uses alone does not identify the notion of non-Markovianity studied for dynamical maps in O5.`,
    refs: [
      { label: "Kretschmann & Werner, 'Quantum channels with memory', PRA 72, 062323 (2005)", url: "https://arxiv.org/abs/quant-ph/0502106" },
      { label: "Caruso, Giovannetti, Lupo, Mancini, 'Quantum channels and memory effects', Rev. Mod. Phys. 86, 1203 (2014)", url: "https://arxiv.org/abs/1207.5435" },
    ] },

  { id: "C10", cat: "channels", horizon: "programme", status: "improved",
    reviewedAt: "2026-10-17",
    relations: [{ id: "C2", type: "benchmark" }, { id: "C3", type: "benchmark" }, { id: "M11", type: "related" }],
    evidence: [
      { kind: "preprint", role: "progress", summary: "Claimed energy-constrained classical capacity of every single-mode bosonic Gaussian channel, achieved by Gaussian ensembles, with strong-converse and rate–error statements under stated constraints.", url: "https://arxiv.org/abs/2610.22308v1", date: "2026-10-15", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Claimed entropy photon-number inequality for two independent finite-energy multimode bosonic inputs, with thermal-attenuator minimum-output-entropy and degraded pure-loss broadcast-region consequences. OpenAI GitHub manuscript.", url: `${OAI}preprints/The-entropy-photon-number-inequality-September-24-2026/paper.pdf`, date: "2026-10-06", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Claimed coincidence of unassisted and two-way assisted quantum and private capacities for energy-constrained bosonic dephasing, a non-Gaussian family.", url: "https://arxiv.org/abs/2610.13854v1", date: "2026-10-09", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Claimed O(1/n) fidelity bound above unconstrained pure-loss quantum capacity; not an energy-constrained classical or general thermal-channel theorem.", url: "https://arxiv.org/abs/2609.16608v1", date: "2026-09-15", version: "v1" },
    ],
    provenance: [
      { summary: "Adesso, Lami and Giovannetti report GPT 6 Astra assistance with lifting a single-use witness to many uses (Proposition 8) and Claude Opus 5.5 assistance with an initial derivation of Lemma 9; they state that the present proof required heavy human intervention.", url: "https://arxiv.org/abs/2610.22308v1", version: "v1" },
      { summary: "OpenAI lists itself as author of the entropy photon-number manuscript and states that an unreleased internal model produced the collection. It reports a Lean formalization of the inequality only; this was not rebuilt here.", url: `${OAI}lean/docs/273.md` },
      { summary: "Arqand and Smith report extensive ChatGPT Astra assistance in developing the main solution, completing proofs and finding errors, with the research formulated and directed by the authors.", url: "https://arxiv.org/abs/2610.13854v1", version: "v1" },
      { summary: "Wilde reports extensive ChatGPT Pro 6 Astra assistance with proof strategies, arguments, literature and drafting, without supplying the initial methods; he retains responsibility for verification and the final manuscript.", url: "https://arxiv.org/html/2609.16608v1", version: "v1" },
    ],
    title: "Quantum Shannon theory in infinite dimensions",
    statement: r`For specified infinite-dimensional channels and resource tasks, prove coding, continuity and converse results under explicit energy-growth and input-constraint hypotheses, identifying which conclusions survive beyond Gaussian and energy-compact settings.`,
    definition: r`**Infinite-dimensional quantum Shannon theory** studies coding theorems, converses and continuity for channels on infinite-dimensional systems, such as bosonic modes. This requires careful control of unbounded observables, entropy and topology. Capacities may diverge without resource constraints, and finite-dimensional continuity and compactness arguments need not extend unchanged. This entry absorbs M11's broader mathematical programme, while C2 and C3 remain concrete channel benchmarks.

Standard reference: Holevo, Quantum Systems, Channels, Information (De Gruyter, 2nd ed. 2019), [doi:10.1515/9783110642490](https://doi.org/10.1515/9783110642490).`,
    progress: r`- Substantial theory already exists: the pure-loss classical capacity, Gaussian-optimizer theorems for specified phase-insensitive settings (Giovannetti, Holevo and García-Patrón, [arXiv:1312.2251](https://arxiv.org/abs/1312.2251)), energy-constrained capacities, and continuity bounds due to Winter, Shirokov and others. These do not assert that Gaussian inputs optimize every bosonic task, or that all entropies are uniformly continuous without assumptions.
- Wilde and Winter show that a strong converse can fail for classical communication over pure loss under a mean-energy constraint ([arXiv:1308.6732](https://arxiv.org/abs/1308.6732)).
- A photon-number occupation constraint supports a different strong-converse theorem (Bardhan and Wilde, [arXiv:1312.3287](https://arxiv.org/abs/1312.3287)); related phase-insensitive Gaussian results keep analogous hypotheses (Bardhan, García-Patrón, Wilde and Winter, [arXiv:1401.4161](https://arxiv.org/abs/1401.4161)).
- Wilde claims a strong converse at the unconstrained quantum capacity of every pure-loss bosonic channel, allowing arbitrary multimode encodings and joint decoding without an energy restriction; the entanglement-generation fidelity is $O(1/n)$ at a fixed rate above capacity (15 September 2026, v1) ([arXiv:2609.16608](https://arxiv.org/abs/2609.16608)). This concerns quantum transmission at the unconstrained threshold, so it does not contradict the mean-energy classical counterexample, and does not give strong converses at energy-constrained thresholds or for noisy thermal attenuators.
- OpenAI's Math Release (public 6 October 2026) claims the entropy photon-number inequality for two independent finite-energy bosonic inputs in any finite number of modes, allowing entanglement within each input ([manuscript](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/The-entropy-photon-number-inequality-September-24-2026/paper.pdf)). It derives the exact minimum output entropy at fixed input entropy for tensor powers of a thermal attenuator, and the classical capacity region of the degraded two-receiver pure-loss broadcast channel under a mean photon constraint. The inequality itself is reported as Lean-formalized; the consequences are not.
- Arqand and Smith prove that four energy-constrained capacities of bosonic dephasing channels, a non-Gaussian family, coincide with a Fock-diagonal coherent-information formula (9 October 2026, v1) ([arXiv:2610.13854](https://arxiv.org/abs/2610.13854)).
- Adesso, Lami and Giovannetti claim the energy-constrained classical capacity of every single-mode bosonic Gaussian channel at every input energy, achieved by Gaussian-displacement ensembles, and characterize communication above capacity under photon-number cutoffs and mean-energy constraints (15 October 2026, v1) ([arXiv:2610.22308](https://arxiv.org/abs/2610.22308)).`,
    residual: r`The 2026 results close specified classical and non-Gaussian tasks. General multimode channels, other constraints and the broader programme remain open.

Scope:
- Constraint choice matters even for simple channels, so “prove all strong converses under natural energy constraints” is not a valid unconditional goal.
- The programme is to characterize sufficient energy-growth, compactness and continuity assumptions, establish explicit moduli and finite-block bounds, and identify non-Gaussian families with controlled coding theorems. It includes infinite-dimensional entanglement and resource inequalities, but each proposed result must name its task, topology and constraint.`,
    refs: [
      { label: "Adesso, Lami & Giovannetti, 'Classical Capacity of Single-Mode Bosonic Gaussian Channels' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.22308v1" },
      { label: "OpenAI, 'The entropy photon-number inequality' (OpenAI Math Release manuscript, dated 24 September 2026; public 6 October 2026)", url: `${OAI}preprints/The-entropy-photon-number-inequality-September-24-2026/paper.pdf` },
      { label: "Arqand & Smith, 'No advantage from classical assistance for energy-constrained bosonic dephasing channels' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.13854v1" },
      { label: "Wilde, 'Strong converse for the quantum capacity of the pure-loss bosonic channel' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.16608v1" },
      {"label":"Wilde & Winter, 'Strong converse for the classical capacity of the pure-loss bosonic channel', Problems of Information Transmission (2014)","url":"https://arxiv.org/abs/1308.6732"},
      {"label":"Bardhan & Wilde, 'Strong converse rates for classical communication over thermal and additive noise bosonic channels', PRA 89, 022302 (2014) — photon-number occupation constraint","url":"https://arxiv.org/abs/1312.3287"},
      {"label":"Bardhan, García-Patrón, Wilde & Winter, 'Strong converse for the classical capacity of optical quantum communication channels', IEEE Trans. Inf. Theory 61, 1842 (2015) — phase-insensitive Gaussian channels with an occupation constraint","url":"https://arxiv.org/abs/1401.4161"},
      { label: "Giovannetti, Holevo, García-Patrón, 'A solution of the Gaussian optimizer conjecture', Comm. Math. Phys. 334 (2015)", url: "https://arxiv.org/abs/1312.2251" },
      { label: "Holevo, 'Quantum Systems, Channels, Information' (De Gruyter, 2nd ed. 2019)", url: "https://doi.org/10.1515/9783110642490" },
    ] },

  { id: "C11", cat: "channels", horizon: "sharp", status: "improved",
    reviewedAt: "2026-11-08",
    title: "Quantum capacity of the qubit depolarizing channel",
    relations: [{ id: "C1", type: "parent" }, { id: "C4", type: "related" }],
    statement: r`For $\mathcal D_q(\rho)=(1-q)\rho+\frac q3(X\rho X+Y\rho Y+Z\rho Z)$, determine the unassisted memoryless quantum capacity, or at least $q_* = \sup\{q\in[0,3/4]:Q(\mathcal D_q)>0\}$.`,
    definition: r`**The qubit depolarizing channel** $\mathcal D_q$ is a canonical simple noise model whose ordinary quantum capacity is still unknown. Here $q$ is the total probability of a nonidentity Pauli error, so each individual Pauli error has probability $p=q/3$. Other definitions of “depolarizing probability” differ, so numerical thresholds must state their convention.

Antidegradability gives zero quantum capacity for $q\in[1/4,3/4]$. Coherent information and degenerate quantum codes give achievable lower bounds, starting with DiVincenzo, Shor and Smolin ([arXiv:quant-ph/9706061](https://arxiv.org/abs/quant-ph/9706061)), but single-use optimization is not in general the capacity. The remaining gap is already a sharp problem for a two-dimensional channel.`,
    progress: r`Threshold ladder (per-Pauli $p$, as tabulated in the August 2026 certificate paper):
- DiVincenzo, Shor and Smolin (1998): $0.06352$ ([arXiv:quant-ph/9706061](https://arxiv.org/abs/quant-ph/9706061)).
- Smith and Smolin (2007): $0.063626$ ([arXiv:quant-ph/0604107](https://arxiv.org/abs/quant-ph/0604107)).
- Fern and Whaley (2008): $0.0637675$ ([arXiv:0708.1597](https://arxiv.org/abs/0708.1597)).
- Agarwal et al. (May 2026): $0.064657$, i.e. $q\approx0.19397$, from a symmetric-subspace search ([arXiv:2605.09138](https://arxiv.org/abs/2605.09138)). The code constructions in this ladder are rigorous, but the final sign of the coherent information at each printed point was evaluated numerically.

- Kondra, Brinster, Kampermann, Bruß and Wyderka prove exponential strong converses for degradable and antidegradable channels (2 August 2026, v1) ([arXiv:2608.01308](https://arxiv.org/abs/2608.01308)). For full-support qubit Pauli channels they obtain an efficiently computable bound which, for the depolarizing channel, vanishes exactly at the antidegradability threshold and beats the regularized Rains bound at high noise. This sharpens the converse side.
- Starting from the public states of Agarwal et al., Krohn-Grimberghe supplies an exact-arithmetic certificate of positive coherent information for a 45-copy rank-two input at $p=0.064956$, i.e. $q=0.194868$ (August 2026) ([arXiv:2608.15870](https://arxiv.org/abs/2608.15870)). If verified, this certifies $q_*\ge0.194868$. The certificate is designed to permit independent checking, which this catalogue has not performed.
- A Zenodo dataset by Harish Santhanalakshmi Ganesan applies the unchanged Krohn-Grimberghe certifier to a further polished 45-copy rank-two symmetric-subspace input and reports certified-positive coherent information at $p=32483/500000=0.064966$, i.e. $q=0.194898$, with enclosure $I_c\in[2.31,2.78]\times10^{-8}$ bits (19 October 2026) ([doi:10.5281/zenodo.23484691](https://doi.org/10.5281/zenodo.23484691)). The deposit includes the state, both certificate documents, an independent floating-point evaluator and the search log. The input state was found by an autonomous AI search agent; the sign check is the deposited exact computation, not peer reviewed, and this catalogue has not rerun it. If correct, $q_*\ge0.194898$.`,
    residual: r`The capacity and the threshold $q_*$ remain open. The certified points are candidate-specific lower bounds on $q_*$, not exact capacity formulas or the threshold itself, and the Kondra et al. converse is not the threshold either.

This benchmark was promoted from C1 to keep the precise threshold question and its noise normalization visible. Unassisted vanishing-error capacity is intended; two-way, zero-error and restricted-code capacities are different quantities.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Exponential strong converses for degradable and antidegradable channels; improved high-noise depolarizing converse vanishing at the antidegradability threshold.", url: "https://arxiv.org/abs/2608.01308v1", date: "2026-08-02", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Exact-arithmetic positive coherent-information certificate for a 45-copy rank-two input at total Pauli error q=0.194868; not an exact threshold.", url: "https://arxiv.org/abs/2608.15870", date: "2026-08-16" },
      { kind: "numerical", role: "progress", summary: "Deposited 19 October 2026: exact-arithmetic certificates (same certifier) of positive coherent information for a further polished 45-copy rank-two input at per-Pauli p=32483/500000, total Pauli error q=0.194898; candidate-specific lower bound found by an AI search agent, not peer reviewed, not an exact threshold.", url: "https://doi.org/10.5281/zenodo.23484691", date: "2026-10-19", version: "v1" }],
    provenance: [
      { summary: "Krohn-Grimberghe reports an AI-driven numerical search and AI assistance with code, calculations, mechanical proof derivations and drafting under author direction. The author takes responsibility; the verification chain is intended to be independent of witness discovery.", url: "https://arxiv.org/abs/2608.15870" },
      { summary: "Harish Santhanalakshmi Ganesan reports that the October 2026 input state was produced autonomously by an AI research agent (EVO discovery harness, Claude Sonnet 5.5) polishing the Krohn-Grimberghe state, that the evaluator, task scaffolding and write-up were made with Claude Fable 5.1 under the contributor's direction, and that the exact certificates come from the unchanged Krohn-Grimberghe certifier run by the contributor.", url: "https://doi.org/10.5281/zenodo.23484691" }],
    refs: [
      { label: "Kondra, Brinster, Kampermann, Bruß & Wyderka, 'Sharp Quantum Capacity Thresholds: Exponential Strong Converses for Degradable and Antidegradable Channels' (2026 preprint, v1) (found via the QIQCOP Zoo)", url: "https://arxiv.org/abs/2608.01308v1" },
      { label: "Krohn-Grimberghe, 'A certified lower bound on the quantum-capacity threshold of the depolarizing channel' (2026 preprint)", url: "https://arxiv.org/abs/2608.15870" },
      { label: "Harish Santhanalakshmi Ganesan, 'Certified positive coherent information of the qubit depolarizing channel at per-Pauli p = 32483/500000 (45 qubits, rank-2 symmetric input): state, exact certificates, evaluator' (Zenodo dataset, 19 October 2026)", url: "https://doi.org/10.5281/zenodo.23484691" },
      { label: "Agarwal, Kalra, Lee, Leung, Schaeffer, Sinha & Smith, 'Enhanced quantum capacity thresholds from symmetry' (2026 preprint)", url: "https://arxiv.org/abs/2605.09138" },
      { label: "DiVincenzo, Shor & Smolin, 'Quantum-channel capacity of very noisy channels', PRA 57, 830 (1998)", url: "https://arxiv.org/abs/quant-ph/9706061" },
      { label: "Smith & Smolin, 'Degenerate quantum codes for Pauli channels', PRL 98, 030501 (2007)", url: "https://arxiv.org/abs/quant-ph/0604107" },
      { label: "Fern & Whaley, 'Lower bounds on the nonzero capacity of Pauli channels', PRA 78, 062335 (2008)", url: "https://arxiv.org/abs/0708.1597" },
      { label: "Tomamichel, 'A strong converse for stabilizer codes over Pauli channels via the blowing-up lemma' (2026 preprint; includes depolarizing parameter regimes)", url: "https://arxiv.org/abs/2607.23450" },
    ] },

  { id: "C12", cat: "channels", horizon: "sharp", status: "claimed-solved",
    lean: { url: `${OAI}lean/docs/272.md`, note: "Both counterexamples (the trace-preserving PPT channel on M_21 and the dimension-ten PPT pair) are formalized in Lean according to OpenAI; the build was not rerun here." },
    reviewedAt: "2026-11-08",
    title: "PPT-squared conjecture",
    relations: [{ id: "E1", type: "related" }, { id: "C1", type: "related" }, { id: "E16", type: "related" }],
    provenance: [
      { summary: "OpenAI lists itself as author and states that an unreleased internal model produced the manuscript collection. It reports Lean formalizations of both counterexamples: the dimension-ten PPT pair and the trace-preserving channel on $M_{21}(\\mathbb C)$. These were not rebuilt here.", url: `${OAI}lean/docs/272.md` },
      { summary: "PSI states that the mathematics of the $2(d-1)$ bound was developed by PSI researchers working with OpenAI's GPT-5.6-Sol, GPT-5.6 Pro and GPT-6-Astra and Anthropic's Claude Opus 5 in automated research workflows, and that the Lean formalization was written by AI agents (Claude Opus 5.5 in Claude Code and GPT-6-Astra in Codex) under PSI's direction. David Turturean and Ning Bao are named as responsible for the correctness of the paper. This is PSI's account.", url: `${PSI}ppt-composition-bound/README.md` },
    ],
    statement: r`Is $\Psi\circ\Phi$ entanglement breaking for every pair of compatible finite-dimensional complex completely positive, trace-preserving maps whose Choi matrices have positive partial transpose?`,
    definition: r`**The PPT-squared conjecture** asserts that the composition of two PPT channels is always entanglement breaking. A PPT channel has a Choi matrix that stays positive under partial transpose; an entanglement-breaking channel destroys entanglement with every reference system, equivalently it has a separable Choi matrix. The conjecture asks whether two compatible PPT stages always suffice, and it connects channel composition with limits on entanglement swapping across PPT-entangled links.

Special cases were developed by Christandl, Müller-Hermes and Wolf ([arXiv:1807.01266](https://arxiv.org/abs/1807.01266)). The scalar field matters: the straightforward real-Hilbert-space analogue is false.`,
    progress: r`- Established special cases include low dimensions and Gaussian channels (Christandl, Müller-Hermes and Wolf, [arXiv:1807.01266](https://arxiv.org/abs/1807.01266), and related work).
- The straightforward real-Hilbert-space analogue of the conjecture is false (Chiribella, Davidson, Paulsen and Rahaman, [arXiv:2207.02510](https://arxiv.org/abs/2207.02510)).
- Partial results cover symplectic-covariant maps (Park, [arXiv:2602.09860](https://arxiv.org/abs/2602.09860)) and Cartan-covariant maps (Prudhoe, [arXiv:2501.03959](https://arxiv.org/abs/2501.03959)).
- An and Lee claim a stronger qutrit composition theorem involving one-copy-undistillable Choi matrices and Schmidt number at most two (July 2026) ([arXiv:2607.15947](https://arxiv.org/abs/2607.15947)). It does not settle arbitrary higher dimension.
- Park claims that every PPT channel has a finite entanglement-breaking index, with an index-at-most-three bound for a restricted family (August 2026) ([arXiv:2608.13551](https://arxiv.org/abs/2608.13551)). Eventual entanglement breaking is therefore not listed as the open question: a finite number of iterations depending on the map does not show that two always suffice.
- Turturean and Bao (PSI, October 2026; GitHub, not peer reviewed) claim a bound uniform over all maps: for every $d\ge2$, any $2(d-1)$ PPT maps on $M_d(\mathbb C)$, possibly different and not necessarily trace preserving, compose to an entanglement-breaking map. Hence every PPT map on $M_d(\mathbb C)$ has entanglement-breaking index at most $2(d-1)$. The key step, suggested by Christandl, Müller-Hermes and Wolf, is that every pair of PPT maps breaks entanglement with a qubit reference; each pair then lowers the Schmidt number by at least one. The main theorem is formalized in Lean 4 according to PSI ([paper](${PSI}ppt-composition-bound/paper/ppt-composition-bound.pdf)).`,
    claim: r`**OpenAI, [“Entanglement with zero distillable secret key in local dimension ten”](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/Entanglement-with-zero-distillable-secret-key-in-local-dimension-ten-September-27-2026/paper.pdf)** (OpenAI Math Release on GitHub, public 6 October 2026; not on arXiv), Theorems 1.2 and 1.3.

What it claims:
- Explicit PPT maps on $M_{10}(\mathbb C)$ whose composition has a Choi matrix with no product vector in its range, so the composition is not entanglement breaking. These maps need not be trace preserving.
- A separate, explicitly specified trace-preserving PPT channel on $M_{21}(\mathbb C)$ whose square is not entanglement breaking. This answers the channel form stated here, with the same channel used twice. It is a claimed counterexample, so the conjecture would be false.
- The same construction underlies the zero-key claim in E16.

Caveats:
- OpenAI lists itself as author and states that an unreleased internal model produced the manuscript collection.
- OpenAI reports Lean formalizations of both counterexamples; they were not rebuilt here.
- The manuscript is a GitHub release, not peer reviewed, and no independent assessment was found. Hence “Claimed solved” rather than “Solved”.`,
    residual: r`If the counterexample is confirmed, the stated conjecture is settled in the negative. A general proof, or one complex finite-dimensional pair of PPT channels whose composition is not entanglement breaking, resolves it. Questions about eventual entanglement breaking (finite index) are separate and not listed here as open.

If both claims hold, the natural quantitative question is the least number $N(d)$ such that every composition of $N(d)$ PPT maps on $M_d(\mathbb C)$ is entanglement breaking. The counterexample gives $N(10)\ge3$ and the PSI bound gives $N(d)\le2(d-1)$, so $3\le N(10)\le18$. Whether $N(d)$ grows with $d$ or stays bounded, and the same question for the entanglement-breaking index of a single channel, are open.`,
    evidence: [
      { kind: "preprint", role: "progress", lean: true, summary: "Claimed uniform bound: any $2(d-1)$ PPT maps on $M_d(\\mathbb C)$, possibly different and not trace preserving, compose to an entanglement-breaking map, so every PPT map has entanglement-breaking index at most $2(d-1)$. PSI GitHub paper with a Lean 4 formalization of the main theorem; not peer reviewed. It does not settle whether two maps suffice in general.", url: `${PSI}ppt-composition-bound/paper/ppt-composition-bound.pdf`, date: "2026-10-23", version: "v1" },{ kind: "preprint", lean: true, role: "claimed-solution", summary: "Claimed counterexample: a trace-preserving PPT channel on $M_{21}(\\mathbb C)$ whose square is not entanglement breaking, plus a dimension-ten PPT pair; reported Lean-formalized. OpenAI GitHub manuscript, pending assessment.", url: `${OAI}preprints/Entanglement-with-zero-distillable-secret-key-in-local-dimension-ten-September-27-2026/paper.pdf`, date: "2026-10-06", version: "v1" }, { kind: "preprint", role: "progress", summary: "Every PPT channel is claimed to become entanglement breaking after finitely many iterations; this does not settle the two-step conjecture.", url: "https://arxiv.org/abs/2608.13551v2", date: "2026-08-17", version: "v2" }, { kind: "preprint", role: "progress", summary: "Qutrit composition result beyond the PPT setting, not an arbitrary-dimensional resolution.", url: "https://arxiv.org/abs/2607.15947", date: "2026-07-17" }],
    refs: [
      { label: "Christandl, Müller-Hermes & Wolf, 'When Do Composed Maps Become Entanglement Breaking?', Annales Henri Poincaré (2019)", url: "https://arxiv.org/abs/1807.01266" },
      { label: "OpenAI, 'Entanglement with zero distillable secret key in local dimension ten' (OpenAI Math Release manuscript, dated 27 September 2026; public 6 October 2026) — Theorems 1.2 and 1.3", url: `${OAI}preprints/Entanglement-with-zero-distillable-secret-key-in-local-dimension-ten-September-27-2026/paper.pdf` },
      { label: "Prudhoe, 'Entanglement Breaking Structure of Cartan-Covariant Quantum Channels' (2026 revision, v3)", url: "https://arxiv.org/abs/2501.03959" },
      { label: "Park, 'k-Positivity and high-dimensional bound entanglement under symplectic group symmetries' (2026 preprint)", url: "https://arxiv.org/abs/2602.09860" },
      { label: "An & Lee, 'Beyond the Positive Partial Transpose Squared Conjecture: The Qutrit Case' (2026 preprint)", url: "https://arxiv.org/abs/2607.15947" },
      { label: "Park, 'Every PPT channel has finite entanglement breaking index' (2026 preprint, v2)", url: "https://arxiv.org/abs/2608.13551v2" },
      { label: "Chiribella, Davidson, Paulsen & Rahaman, 'Positive maps and entanglement in real Hilbert spaces' (real-analogue counterexample)", url: "https://arxiv.org/abs/2207.02510" },
      { label: "Turturean & Bao, 'Entanglement Breaking after 2(d−1) PPT Maps' (PSI paper, repository snapshot of 23 October 2026; GitHub, not peer reviewed)", url: `${PSI}ppt-composition-bound/paper/ppt-composition-bound.pdf` },
      { label: "PSI, Lean 4 formalization of the 2(d−1) bound (statement map in docs/FIDELITY.md)", url: `${PSI}ppt-composition-bound/lean/docs/FIDELITY.md` },
    ] },

  { id: "C13", cat: "channels", horizon: "sharp",
    reviewedAt: "2026-11-08",
    title: "Two-way quantum capacity of the amplitude-damping channel",
    statement: r`For the qubit amplitude-damping channel $\mathcal A_p(\rho)=A_0\rho A_0^\dagger+A_1\rho A_1^\dagger$ with $A_0=|0\rangle\langle0|+\sqrt{1-p}\,|1\rangle\langle1|$ and $A_1=\sqrt p\,|0\rangle\langle1|$, determine the two-way assisted quantum capacity $Q_2(\mathcal A_p)$ for $0<p<1$.`,
    definition: r`**The two-way assisted quantum capacity** $Q_2(\mathcal A_p)$ of the amplitude-damping channel is its optimal rate of quantum communication when sender and receiver may also use unlimited two-way classical communication. Amplitude damping models energy relaxation and is the simplest non-unital qubit channel. Its unassisted quantum capacity is known, because the channel is degradable for $p\le1/2$ (and the capacity is zero above); with two-way assistance the capacity is open.

The standard upper bounds come from the teleportation-simulation framework of Pirandola, Laurenza, Ottaviani and Banchi ([arXiv:1510.08863](https://arxiv.org/abs/1510.08863)).`,
    progress: r`- The reverse coherent information gives the lower bound $Q_2\ge\max_u[h_2(u)-h_2(pu)]$.
- PLOB-type squashing and teleportation-simulation arguments give upper bounds that do not match it ([arXiv:1510.08863](https://arxiv.org/abs/1510.08863)). The QIQCOP Zoo points out that one printed squashing bound used a non-optimal substitution.
- Fawzi, Shayeghi and Ta's symmetry-reduced SDP hierarchy tightens the converse with several copies, still leaving a gap (2022) ([arXiv:2203.02127](https://arxiv.org/abs/2203.02127)).`,
    residual: r`A matching protocol and converse at any fixed $0<p<1$ would be progress; the full curve resolves the question. The secret-key capacity is a related but distinct quantity.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Symmetry-reduced SDP hierarchy giving strong-converse bounds on two-way and PPT-assisted quantum capacity; improves the amplitude-damping converse without closing the gap.", url: "https://arxiv.org/abs/2203.02127v1", date: "2022-03-04", version: "v1" },
    ],
    relations: [{ id: "C3", type: "related" }, { id: "C1", type: "related" }],
    refs: [
      { label: "Pirandola, Laurenza, Ottaviani & Banchi, 'Fundamental limits of repeaterless quantum communications', Nat. Commun. 8 (2017)", url: "https://arxiv.org/abs/1510.08863" },
      { label: "Fawzi, Shayeghi & Ta, 'A hierarchy of efficient bounds on quantum capacities exploiting symmetry', IEEE Trans. Inf. Theory 68 (2022)", url: "https://arxiv.org/abs/2203.02127" },
    ] },
];
