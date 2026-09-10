const r = String.raw;

export const CHANNELS = [
  { id: "C1", cat: "channels", horizon: "incremental", status: "improved",
    relations: [{ id: "C11", type: "benchmark" }, { id: "U4", type: "related" }, { id: "C4", type: "related" }, { id: "C5", type: "related" }],
    evidence: [{ kind: "preprint", summary: "Explicit qutrit zero-Q, zero-P channel outside the PPT and antidegradable classes; not a general capacity-computability theorem.", url: "https://arxiv.org/abs/2607.24693", date: "2026-07-27" }],
    provenance: [{ summary: "Zhu and Wang report that they formulated the problem and selected channels, while QudeLeap's AI Scientist harness and language models suggested a signed-lift mechanism that the authors reformulated and take responsibility for.", url: "https://arxiv.org/abs/2607.24693" }],
    title: "Structural formulas for quantum channel capacities",
    statement: r`For explicitly specified finite-dimensional memoryless channel families, find certified capacity formulas or sufficient additivity criteria for $Q(\mathcal N)=\lim_{n\to\infty}\frac1n\max_\rho I_c(\rho,\mathcal N^{\otimes n})$, and characterize their domain of validity.`,
    context: r`Quantum capacity is the asymptotic rate of reliable unassisted qubit transmission. The Lloyd–Shor–Devetak theorem gives a regularized coherent-information expression. Evaluating it, deriving a single-letter formula and deciding whether an arbitrary input channel has a computable capacity are different tasks.

For degradable channels, coherent information is additive; examples include dephasing and the degradable parameter regime of amplitude damping. Superadditivity of coherent information and Smith–Yard superactivation defeat naive single-copy formulas. Unbounded blocklength phenomena rule out one fixed coherent-information blocklength that works for every channel. They do not prove that every conceivable single-letter expression is impossible or that ordinary memoryless quantum/private capacity is Turing-uncomputable. The 2026 capacity-complexity work distinguishes quantum-capacity hardness from specialized zero-error undecidability; U4 treats the remaining computability question.

Preprint progress (July 2026): Zhu and Wang claim an explicit qutrit channel with zero quantum and private capacities that is neither PPT nor antidegradable, using an all-blocklength relative-entropy argument. This supplies a proposed additional mechanism for incapacity, not a complete structural classification.

The depolarizing-channel threshold and its August certificate have been promoted to the concrete benchmark C11. Here the incremental target is a specified natural family with a verified finite-letter formula, matching bounds or sufficient structural additivity conditions.`,
    refs: [
      {"label":"Bhattacharyya, Mehta & Zhao, 'On the undecidability of quantum channel capacities' (2026 preprint, corrected v3)","url":"https://arxiv.org/abs/2601.22471v3"},
      { label: "Devetak & Shor, 'The capacity of a quantum channel for simultaneous transmission of classical and quantum information', Comm. Math. Phys. 256 (2005)", url: "https://arxiv.org/abs/quant-ph/0311131" },
      { label: "Smith & Yard, 'Quantum communication with zero-capacity channels', Science 321 (2008)", url: "https://arxiv.org/abs/0807.4935" },
      { label: "Zhu & Wang, 'Quantum Incapacity beyond No-Cloning and PPT Mechanisms' (2026 preprint)", url: "https://arxiv.org/abs/2607.24693" },
      { label: "Krohn-Grimberghe, 'A certified lower bound on the quantum-capacity threshold of the depolarizing channel' (2026 preprint)", url: "https://arxiv.org/abs/2608.15870" },
    ] },

  { id: "C2", cat: "channels", horizon: "sharp",
    relations: [{ id: "C3", type: "related" }, { id: "C10", type: "parent" }],
    title: "Quantum capacity of the thermal attenuator",
    statement: r`For a bosonic thermal attenuator with transmissivity $\eta$, environment mean occupation $N_{\rm th}$ and mean input-photon budget $N_S$ per use, determine the unassisted quantum capacity $Q(\eta,N_{\rm th},N_S)$ outside known zero-capacity and pure-loss cases. Treat private capacity as a separate subtarget.`,
    context: r`The thermal attenuator mixes the input with a thermal environment on a beam splitter. It models optical transmission with loss and added noise. Here the energy budget is a mean photon-number constraint averaged over uses of each code; other constraints, assistance conventions and finite-error capacities must be stated separately.

The zero-temperature pure-loss channel has known degradable/antidegradable regimes and an energy-constrained single-letter quantum capacity. Thermal channels have established antidegradable and entanglement-breaking zero-capacity regions, but useful positive-capacity noisy regimes remain unresolved. Upper bounds follow from channel decompositions, data processing and two-way bounds, while coherent information yields achievable lower bounds.

Rosati–Mari–Giovannetti provide important bounds. Correlated multimode Gaussian coding can improve upon product thermal-input strategies, as demonstrated by published 2020 work. Thus “Gaussian optimization” must not silently mean a one-mode product ansatz, nor should all remaining upper/lower gaps be called uniformly small.

The target is matching achievable and converse bounds for fixed $(\eta,N_{\rm th},N_S)$. Private capacity requires its own coding and secrecy definition and should not be assumed equal to quantum capacity.`,
    refs: [
      {"label":"Rosati, Mari & Giovannetti, 'Narrow bounds for the quantum capacity of thermal attenuators', Nature Communications 9, 4339 (2018)","url":"https://www.nature.com/articles/s41467-018-06848-0"},
      {"label":"'Enhanced energy-constrained quantum communication over bosonic Gaussian channels', Nature Communications (2020)","url":"https://www.nature.com/articles/s41467-020-14329-6"},
      { label: "Pirandola, Laurenza, Ottaviani, Banchi, 'Fundamental limits of repeaterless quantum communications', Nat. Commun. 8, 15043 (2017)", url: "https://arxiv.org/abs/1510.08863" },
    ] },

  { id: "C3", cat: "channels", horizon: "incremental",
    relations: [{ id: "C2", type: "related" }, { id: "C10", type: "parent" }],
    title: "Two-way capacities of Gaussian channels",
    statement: r`Determine exact two-way entanglement-distribution capacity $Q_2$ and secret-key capacity $K$ for specified noisy thermal-loss, thermal-amplifier and additive-noise channels, distinguishing unrestricted-energy from fixed-energy coding.`,
    context: r`Unlimited authenticated two-way classical communication changes channel capacity. Entanglement distribution and secret-key generation have distinct operational definitions; $Q_2$ and $K$ need not coincide for a general channel. They bound repeaterless communication over a single link, rather than capacities of arbitrary repeater networks.

Known exact boundary cases must be excluded from the open claim. PLOB establishes, in the unrestricted-energy limit, $Q_2=K=-\log_2(1-\eta)$ for pure loss and $Q_2=K=\log_2[g/(g-1)]$ for a quantum-limited amplifier of gain $g>1$. The quantum-limited amplifier is therefore not an unresolved generic amplifier case.

With nonzero thermal noise or additive Gaussian noise, general matching bounds are missing. A finite input-energy budget changes the problem even for a channel with a known unrestricted-energy capacity; the constraint and error criterion must be included in every benchmark.

The incremental goal is to close specified $Q_2$ or $K$ gaps in noisy families and under explicit energy assumptions, using PLOB and subsequent converse techniques alongside achievable protocols.`,
    refs: [
      {"label":"Pirandola, Laurenza, Ottaviani & Banchi, PLOB theorem, Nature Communications 8, 15043 (2017)","url":"https://arxiv.org/abs/1510.08863"},
      { label: "Wilde, Tomamichel, Berta, 'Converse bounds for private communication over quantum channels', IEEE Trans. Inf. Theory 63 (2017)", url: "https://arxiv.org/abs/1602.08898" },
    ] },

  { id: "C4", cat: "channels", horizon: "sharp", status: "improved",
    reviewedAt: "2026-09-10",
    relations: [{ id: "C1", type: "related" }, { id: "C11", type: "related" }],
    evidence: [
      { kind: "preprint", summary: "Claimed exponential strong converses for arbitrary finite-dimensional memoryless channels and all unassisted codes. This would resolve the stated quantum-capacity question; independent verification is pending.", url: "https://arxiv.org/abs/2609.08998v1", date: "2026-09-08", version: "v1" },
      { kind: "preprint", summary: "Strong converse restricted to full-joint-eigenspace stabilizer codes over Pauli channels.", url: "https://arxiv.org/abs/2607.23450", date: "2026-07-26" }, { kind: "preprint", summary: "Claimed all-code exponential strong converse for finite-dimensional degradable and antidegradable channels; this earlier claim does not cover general channels.", url: "https://arxiv.org/abs/2608.01308", date: "2026-08-02" }],
    provenance: [
      { summary: "Cheng and Tomamichel credit OpenAI Codex with ChatGPT 6 Astra for suggesting the asymptotic-continuity approach via derivative bounds and an initial proof. They attribute the integral-representation exposition to themselves, report further drafting and literature assistance, and take responsibility after review.", url: "https://arxiv.org/html/2609.08998v1", version: "v1" },
      { summary: "Tomamichel reports author-directed Claude proof development, writing and literature work, plus ChatGPT adversarial review, and states that he checked the statements, proofs and references.", url: "https://arxiv.org/abs/2607.23450" }, { summary: "Kondra et al. disclose ChatGPT 5.6 Sol assistance on technical proof steps and later manuscript work with Claude Opus 4.8; they state that the initial draft was handwritten and all assisted material was reviewed.", url: "https://arxiv.org/abs/2608.01308" }],
    title: "Strong converse for quantum capacity",
    statement: r`For every finite-dimensional memoryless channel $\mathcal N$, does unassisted entanglement transmission at a fixed rate above $Q(\mathcal N)$ force entanglement fidelity to tend to zero for all code sequences? Prove the statement or construct a counterexample.`,
    context: r`A strong converse makes quantum capacity a sharp threshold: above it, entanglement fidelity tends to zero as blocklength grows. The weak converse only prevents asymptotically perfect transmission. Exponential decay is a stronger quantitative conclusion and should be distinguished from the basic strong-converse question.

Earlier work established quantum strong converses for selected channel classes and strong-converse upper bounds using the Rains quantity. The general degradable-channel baseline was a “pretty strong” converse, not an all-code full strong converse. Strong converses for classical communication through entanglement-breaking channels do not prove the corresponding quantum-capacity statement.

Preprint progress (July 2026): Tomamichel claims an exponential strong converse for full-joint-eigenspace stabilizer codes over Pauli channels, with a threshold determined by the corresponding coherent-information optimization. This restricted-code result is not a theorem for every possible encoder.

Further preprint progress (August 2026): Kondra–Brinster–Kampermann–Bruß–Wyderka claim an all-code exponential strong converse for finite-dimensional degradable and antidegradable channels, including the first all-code exponential erasure-channel result over its full parameter range. They also give general SDP strong-converse bounds and a result for a multilevel amplitude-damping family. These are newly proposed proofs; this catalogue does not independently certify them.

The July and August manuscripts concern restricted classes. The September claim below addresses the unrestricted finite-dimensional question; code restrictions, assistance and fidelity conventions still distinguish the results.

Claimed resolution (8 September 2026, v1): Cheng and Tomamichel claim an exponential strong converse for unassisted quantum communication over every finite-dimensional memoryless channel, as well as for unassisted classical communication at its respective capacity. Their entanglement-generation bound covers arbitrary codes and implies the transmission statement above. The argument uses integral representations and asymptotic continuity of regularized Rényi capacities. This claims to settle the full finite-dimensional question, rather than another restricted channel class; it remains a preprint awaiting independent assessment here. The catalogue retains “Improved” pending that assessment. No exact capacity formula, infinite-dimensional extension or assisted-capacity theorem follows merely from this claim.`,
    refs: [
      { label: "Cheng & Tomamichel, 'No information transmission through quantum channels above capacity' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.08998v1" },
      { label: "Tomamichel, Wilde, Winter, 'Strong converse rates for quantum communication', IEEE Trans. Inf. Theory 63 (2017)", url: "https://arxiv.org/abs/1406.2946" },
      { label: "Wilde, Winter, Yang, 'Strong converse for the classical capacity of entanglement-breaking and Hadamard channels', Comm. Math. Phys. 331 (2014)", url: "https://arxiv.org/abs/1306.1586" },
      { label: "Tomamichel, 'A strong converse for stabilizer codes over Pauli channels via the blowing-up lemma' (2026 preprint)", url: "https://arxiv.org/abs/2607.23450" },
      { label: "Kondra et al., 'Sharp Quantum Capacity Thresholds: Exponential Strong Converses for Degradable and Antidegradable Channels' (2026 preprint)", url: "https://arxiv.org/abs/2608.01308" },
    ] },

  { id: "C5", cat: "channels", horizon: "incremental", status: "improved",
    reviewedAt: "2026-09-10",
    relations: [{ id: "C1", type: "related" }, { id: "E16", type: "related" }],
    evidence: [
      { kind: "preprint", summary: "Two individually zero-private-capacity channels are claimed to have positive joint private capacity; this is operational superactivation, not just private-information superadditivity.", url: "https://arxiv.org/abs/2609.10520v1", date: "2026-09-09", version: "v1" },
    ],
    provenance: [
      { summary: "Zhu and Wang report QudeLeap AI Quantum Scientist and language-model assistance in finding an initial activating example, exploring proofs, and drafting. They say they checked and rewrote the proofs and retain responsibility. They also report Lean 4 formalization, which this review has not rebuilt.", url: "https://arxiv.org/html/2609.10520v1", version: "v1" },
    ],
    title: "Private versus quantum capacity",
    statement: r`At fixed input and output dimensions, characterize when a memoryless channel has $P(\mathcal N)>Q(\mathcal N)$ and bound the maximal gap $P-Q$; separately seek structural criteria for additivity across specified channel pairs.`,
    context: r`Private capacity $P$ is the reliable secret-classical-communication rate against the channel environment; quantum capacity $Q$ is the qubit-transmission rate. Always $Q\leq P$. A gap probes the difference between secrecy and preservation of quantum coherence.

Regularized formulas are known, as are channels with $P>0$ but $Q=0$. Such examples show that an unnormalized maximal gap over all dimensions is not a finite open target: tensor powers make the absolute gap arbitrarily large. A ratio also becomes meaningless or infinite when $Q=0$. Fixed dimensions or an explicit dimension normalization are therefore essential.

Private information can be superadditive across channel uses. This single-letter issue must be distinguished from whether the operational capacity $P(\mathcal N\otimes\mathcal M)$ equals $P(\mathcal N)+P(\mathcal M)$ for different channels; analogous distinctions apply to $Q$.

Useful residual work characterizes families with equality or strict separation and tight fixed-dimension bounds. The state question of entanglement with zero distillable key is E16, not the same problem as a channel-capacity gap.

Preprint progress (9 September 2026, v1): Zhu and Wang claim operational private-capacity superactivation: a four-level channel and a qubit erasure channel with erasure probability $1/2$ each have $P=0$, but their product transmits more than $0.0001903$ private bits per product use. Their theorem extends positivity to erasure probabilities below one and at least one half, using a fixed joint output measurement and classical wiretap coding. This is a claim about regularized operational capacity, stronger than single-letter private-information superadditivity. It settles the existence subquestion if verified, while structural criteria and optimal dimension-constrained gaps remain. The authors report a Lean 4 formalization; its scope and build have not been independently checked here.`,
    refs: [
      { label: "Zhu & Wang, 'Private communication via zero-private-capacity quantum channels' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.10520v1" },
      { label: "Horodecki, Horodecki, Horodecki, Oppenheim, 'Secure key from bound entanglement', PRL 94, 160502 (2005)", url: "https://doi.org/10.1103/PhysRevLett.94.160502" },
      { label: "Elkouss & Strelchuk, 'Superadditivity of private information for any number of uses of the channel', PRL 115, 040501 (2015)", url: "https://arxiv.org/abs/1502.05326" },
    ] },

  { id: "C6", cat: "channels", horizon: "incremental", status: "improved",
    relations: [{ id: "C1", type: "related" }, { id: "U4", type: "related" }],
    evidence: [{ kind: "preprint", summary: "Certified classical seven-cycle Shannon-capacity lower bound from an independent set in a 500th strong power, not an exact capacity.", url: "https://arxiv.org/abs/2608.30273", date: "2026-08-31" }],
    provenance: [{ summary: "Tandon reports ChatGPT and Claude use for constructions, proof development/checks, implementation and writing, and supplies exact computations and machine-readable certificates under author responsibility.", url: "https://arxiv.org/abs/2608.30273" }],
    title: "Zero-error capacities and graph-capacity benchmarks",
    statement: r`For explicitly specified channel or noncommutative-graph families, evaluate asymptotic zero-error capacity with message type and assistance fixed. A concrete classical benchmark is the exact Shannon capacity $\Theta(C_7)$.`,
    context: r`Zero-error communication requires perfectly distinguishable messages at every blocklength, unlike vanishing-error Shannon transmission. Classical messages, quantum states, entanglement assistance, one-shot transmission and asymptotic rates define different quantities.

Classically, an independent-set problem on strong graph powers defines $\Theta(G)$, while the capacity in bits per use is $\log_2\Theta(G)$. Lovász settled the five-cycle; the seven-cycle remains a benchmark. Quantum channels lead to noncommutative graphs/operator systems and quantum Lovász-type SDP bounds. Established superactivation and entanglement-assisted enhancements show that zero-error resources can behave very differently from ordinary capacities.

Preprint progress (31 August 2026): Tandon claims a certified independent set in the 500th strong power of the seven-cycle, yielding $\Theta(C_7)\geq3.25883262\ldots$. This is a classical graph-capacity lower bound, not a bit rate or a generic quantum-capacity theorem; the exact value remains unresolved.

The active programme is computable bounds and matching characterizations in stated models. Specialized zero-error undecidability results must not be transferred to ordinary memoryless quantum capacity in C1/U4.`,
    refs: [
      { label: "Duan, Severini, Winter, 'Zero-error communication via quantum channels, non-commutative graphs, and a quantum Lovász theta function', IEEE Trans. Inf. Theory 59 (2013)", url: "https://arxiv.org/abs/1002.2514" },
      { label: "Cubitt, Chen, Harrow, 'Superactivation of the asymptotic zero-error classical capacity of a quantum channel', IEEE Trans. Inf. Theory 57 (2011)", url: "https://arxiv.org/abs/0906.2547" },
      { label: "Tandon, 'Strengthening Recursive Constructions for Zero-Error Shannon Capacity' (2026 preprint)", url: "https://arxiv.org/abs/2608.30273" },
    ] },

  { id: "C7", cat: "channels", horizon: "programme", status: "improved",
    relations: [{ id: "C8", type: "related" }],
    evidence: [{ kind: "preprint", summary: "Marton's inner bound is claimed suboptimal for an explicit classical broadcast channel; this is a classical subproblem, not a quantum capacity-region theorem.", url: "https://arxiv.org/abs/2608.19869", date: "2026-08-20" }],
    provenance: [{ summary: "Huang, Liu and Liu report GPT-5.6 Sol and Claude Fable/Opus assistance with numerical and analytic searches, and acknowledge human verification and editorial help. This is an author disclosure, not independent proof verification.", url: "https://arxiv.org/abs/2608.19869" }],
    title: "Private-message quantum broadcast capacity regions",
    statement: r`For a specified two-receiver memoryless quantum broadcast channel, characterize the region for independent classical private messages, with no preshared entanglement, feedback or receiver cooperation; treat common messages, quantum transmission and entanglement assistance as separate variants.`,
    context: r`A broadcast channel maps one sender's input to two receiver systems. The achievable region depends on what each receiver must recover and which auxiliary resources are allowed. A “full classical–quantum–entanglement region” is not one defined task without those choices.

Yard–Hayden–Devetak and Savov–Wilde established coding results and achievable regions in specified degraded, classical–quantum and other settings. Quantum superposition and Marton-type coding give inner bounds; some structured channel families admit matching characterizations. These results should be recorded with their message and assistance hypotheses.

Preprint progress (August 2026, classical subproblem): Huang–Yanxiao Liu–Yi Liu claim an explicit two-receiver discrete memoryless classical broadcast channel for which Marton's inner bound is strictly suboptimal. Since classical channels embed in the unassisted classical-message task, this challenges a candidate general formula within that subproblem. It does not resolve a quantum broadcast region or block progress on quantum special cases.

The programme is to close well-defined inner/outer-bound gaps for named channel families, while keeping other communication tasks as separately labeled variants.`,
    refs: [
      { label: "Yard, Hayden, Devetak, 'Quantum broadcast channels', IEEE Trans. Inf. Theory 57 (2011)", url: "https://arxiv.org/abs/quant-ph/0603098" },
      { label: "Huang, Liu & Liu, 'Sub-optimality of Marton's Inner Bound for the Two-Receiver Broadcast Channel' (2026 preprint)", url: "https://arxiv.org/abs/2608.19869" },
    ] },

  { id: "C8", cat: "channels", horizon: "programme",
    relations: [{ id: "C7", type: "related" }],
    title: "Classical communication over quantum interference channels",
    statement: r`For specified two-sender, two-receiver memoryless classical–quantum interference channels, obtain matching rate-region bounds for independent classical messages with no preshared entanglement, feedback or sender/receiver cooperation.`,
    context: r`In an interference channel each sender communicates with its intended receiver while affecting the other receiver. Here classical inputs $(x_1,x_2)$ produce a joint quantum output state on $B_1B_2$; each receiver decodes only its own classical message. Transmission of unknown quantum states or entanglement-assisted communication is a different task.

Quantum Han–Kobayashi-type coding and simultaneous-decoding methods give achievable regions, as in Fawzi–Hayden–Savov–Sen–Wilde. Strong- and very-strong-interference assumptions yield additional characterizations. Sen's joint-typicality techniques address decoding obstacles but do not provide a universal exact region.

The unrestricted classical interference problem embeds in this class, so a fully general solution would also solve that classical problem. Nevertheless, exact quantum special cases and sharper bounds remain possible. The programme should select a concrete channel family, state its assistance convention and display a specific inner/outer-bound gap, rather than conflate all quantum-network message types.`,
    refs: [
      { label: "Fawzi, Hayden, Savov, Sen, Wilde, 'Classical communication over a quantum interference channel', IEEE Trans. Inf. Theory 58 (2012)", url: "https://arxiv.org/abs/1102.2624" },
      { label: "Sen, 'Unions, intersections and a one-shot quantum joint typicality lemma' (2018)", url: "https://arxiv.org/abs/1806.07278" },
    ] },

  { id: "C9", cat: "channels", horizon: "programme",
    relations: [{ id: "C1", type: "related" }, { id: "O5", type: "related" }],
    title: "Capacities of channels with memory",
    statement: r`For finitely specified finite-memory quantum channels, obtain certified capacity bounds with explicit finite-block errors, fixing the interaction map, initial memory, reset/access assumptions and quantitative forgetfulness or stationarity conditions.`,
    context: r`Memory channels correlate different uses of a transmission medium. A useful finite description specifies an interaction map from input plus memory to output plus updated memory, an initial memory state, and whether either party can access or reset that memory. An arbitrary infinite sequence of unrelated non-Markovian maps is not the same computable input model.

Kretschmann–Werner already define operational forgetfulness and prove coding theorems with regularized expressions for forgetful channels. The remaining issue is not the absence of a definition of forgetfulness. Gaussian, finite-state classical-memory and matrix-product structures supply examples with additional bounds or tractability; information-spectrum approaches handle broader non-i.i.d. settings.

The target is a stated model family with computable finite-block error estimates and resource/runtime dependence, or a structural result about when those estimates exist. Initial-state sensitivity and nonforgetful behavior require separate hypotheses. Correlation between uses alone does not identify the same notion of non-Markovianity studied for dynamical maps in O5.`,
    refs: [
      { label: "Kretschmann & Werner, 'Quantum channels with memory', PRA 72, 062323 (2005)", url: "https://arxiv.org/abs/quant-ph/0502106" },
      { label: "Caruso, Giovannetti, Lupo, Mancini, 'Quantum channels and memory effects', Rev. Mod. Phys. 86, 1203 (2014)", url: "https://arxiv.org/abs/1207.5435" },
    ] },

  { id: "C10", cat: "channels", horizon: "programme",
    relations: [{ id: "C2", type: "benchmark" }, { id: "C3", type: "benchmark" }, { id: "M11", type: "related" }],
    title: "Quantum Shannon theory in infinite dimensions",
    statement: r`For specified infinite-dimensional channels and resource tasks, prove coding, continuity and converse results under explicit energy-growth and input-constraint hypotheses, identifying which conclusions survive beyond Gaussian and energy-compact settings.`,
    context: r`Infinite-dimensional quantum information requires careful control of unbounded observables, entropy and topology. Capacities may diverge without resource constraints; finite-dimensional continuity and compactness arguments need not extend unchanged. This entry absorbs M11's broader mathematical programme while retaining C2/C3 as concrete channel benchmarks.

Substantial theory already exists: pure-loss classical capacity, Gaussian-optimizer theorems for specified phase-insensitive settings, energy-constrained capacities and continuity bounds due to Winter, Shirokov and others. These are not blanket assertions that Gaussian inputs optimize every bosonic task or that all entropies are uniformly continuous without assumptions.

Constraint choice matters even for simple channels. Wilde–Winter show that a strong converse can fail for classical communication over pure loss under a mean-energy constraint. A photon-number occupation constraint supports a different strong-converse theorem; related phase-insensitive Gaussian results retain analogous hypotheses. Thus “prove all strong converses under natural energy constraints” is not a valid unconditional goal.

The programme is to characterize sufficient energy-growth, compactness and continuity assumptions, establish explicit moduli and finite-block bounds, and identify non-Gaussian families with controlled coding theorems. It includes infinite-dimensional entanglement and resource inequalities, but each proposed result must name its task, topology and constraint.`,
    refs: [
      {"label":"Wilde & Winter, 'Strong converse for the classical capacity of the pure-loss bosonic channel', Problems of Information Transmission (2014)","url":"https://arxiv.org/abs/1308.6732"},
      {"label":"Bardhan & Wilde, strong converse for thermal/additive-noise bosonic channels under a photon-number occupation constraint","url":"https://arxiv.org/abs/1312.3287"},
      {"label":"Strong converse for phase-insensitive bosonic Gaussian channels with an occupation constraint","url":"https://arxiv.org/abs/1401.4161"},
      { label: "Giovannetti, Holevo, García-Patrón, 'A solution of the Gaussian optimizer conjecture', Comm. Math. Phys. 334 (2015)", url: "https://arxiv.org/abs/1312.2251" },
      { label: "Holevo, 'Quantum Systems, Channels, Information' (De Gruyter, 2nd ed. 2019)", url: "https://doi.org/10.1515/9783110642490" },
    ] },

  { id: "C11", cat: "channels", horizon: "sharp", status: "improved",
    title: "Quantum capacity of the qubit depolarizing channel",
    relations: [{ id: "C1", type: "parent" }, { id: "C4", type: "related" }],
    statement: r`For $\mathcal D_q(\rho)=(1-q)\rho+\frac q3(X\rho X+Y\rho Y+Z\rho Z)$, determine the unassisted memoryless quantum capacity, or at least $q_* = \sup\{q\in[0,3/4]:Q(\mathcal D_q)>0\}$.`,
    context: r`The depolarizing channel is a canonical simple noise model whose ordinary quantum capacity is still unknown. The parameter $q$ here is the total nonidentity Pauli error probability; the probability of each individual Pauli error is $p=q/3$. Other definitions of “depolarizing probability” differ, so numerical thresholds must state their convention.

Antidegradability gives zero quantum capacity for $q\in[1/4,3/4]$. Achievable rates from coherent information and degenerate quantum codes give lower bounds, but optimization over a single use is not generally the capacity. The residual gap already poses a sharp problem for a two-dimensional channel.

Preprint progress (August 2026): Krohn-Grimberghe supplies an exact-arithmetic certificate claiming positive coherent information for a 45-copy rank-two input at per-Pauli noise $p=0.064956$, or total error $q=0.194868$. If verified, this certifies $q_*\geq0.194868$; it is not an exact capacity formula or the threshold itself. The certificate is designed to permit independent checking, which this catalogue does not claim to have performed.

This benchmark was promoted from C1 to keep the precise threshold question and its noise normalization visible. Unassisted vanishing-error capacity is intended; two-way, zero-error and restricted-code capacities are different quantities.`,
    evidence: [{ kind: "preprint", summary: "Exact-arithmetic positive coherent-information certificate for a 45-copy rank-two input at total Pauli error q=0.194868; not an exact threshold.", url: "https://arxiv.org/abs/2608.15870", date: "2026-08-16" }],
    provenance: [{ summary: "Krohn-Grimberghe reports an AI-driven numerical search and AI assistance with code, calculations, mechanical proof derivations and drafting under author direction. The author takes responsibility; the verification chain is intended to be independent of witness discovery.", url: "https://arxiv.org/abs/2608.15870" }],
    refs: [
      { label: "Krohn-Grimberghe, 'A certified lower bound on the quantum-capacity threshold of the depolarizing channel' (2026 preprint)", url: "https://arxiv.org/abs/2608.15870" },
      { label: "Tomamichel, 'A strong converse for stabilizer codes over Pauli channels via the blowing-up lemma' (2026 preprint; includes depolarizing parameter regimes)", url: "https://arxiv.org/abs/2607.23450" },
    ] },

  { id: "C12", cat: "channels", horizon: "sharp", status: "improved",
    title: "PPT-squared conjecture",
    relations: [{ id: "E1", type: "related" }, { id: "C1", type: "related" }],
    statement: r`Is $\Psi\circ\Phi$ entanglement breaking for every pair of compatible finite-dimensional complex completely positive, trace-preserving maps whose Choi matrices have positive partial transpose?`,
    context: r`A PPT channel has a Choi matrix positive under partial transpose. An entanglement-breaking channel destroys entanglement with every reference system, equivalently having a separable Choi matrix. The conjecture asks whether two compatible PPT stages always suffice. It connects channel composition with limits on entanglement swapping across PPT-entangled links.

Established special cases include low dimensions and Gaussian channels, as developed by Christandl–Müller-Hermes–Wolf and related work. The general complex higher-dimensional problem remains the target. The straightforward real-Hilbert-space analogue is false, so the scalar field is not cosmetic.

Recent partial results include symplectic-covariant and Cartan-covariant map classes. An–Lee's July 2026 preprint claims a stronger qutrit composition theorem involving one-copy-undistillable Choi matrices and Schmidt number at most two; it does not settle arbitrary higher dimension.

Important scope update: Park's August preprint claims that every PPT channel has a finite entanglement-breaking index, and gives an index-at-most-three bound for a restricted family. Eventual entanglement breaking is therefore not being listed as the open existence question. A finite number of iterations depending on the map does not establish that two always suffice.

A general proof or one complex finite-dimensional PPT-channel pair whose composition is not entanglement breaking resolves the stated conjecture.`,
    evidence: [{ kind: "preprint", summary: "Every PPT channel is claimed to become entanglement breaking after finitely many iterations; this does not settle the two-step conjecture.", url: "https://arxiv.org/abs/2608.13551v2", date: "2026-08-17", version: "v2" }, { kind: "preprint", summary: "Qutrit composition result beyond the PPT setting, not an arbitrary-dimensional resolution.", url: "https://arxiv.org/abs/2607.15947", date: "2026-07-17" }],
    refs: [
      { label: "Christandl, Müller-Hermes & Wolf, 'When Do Composed Maps Become Entanglement Breaking?', Annales Henri Poincaré (2019)", url: "https://arxiv.org/abs/1807.01266" },
      { label: "Prudhoe, 'Entanglement Breaking Structure of Cartan-Covariant Quantum Channels' (2026 revision, v3)", url: "https://arxiv.org/abs/2501.03959" },
      { label: "Park, 'k-Positivity and high-dimensional bound entanglement under symplectic group symmetry' (2026 preprint)", url: "https://arxiv.org/abs/2602.09860" },
      { label: "An & Lee, 'Beyond the Positive Partial Transpose Squared Conjecture: The Qutrit Case' (2026 preprint)", url: "https://arxiv.org/abs/2607.15947" },
      { label: "Park, 'Every PPT channel has finite entanglement breaking index' (2026 preprint, v2)", url: "https://arxiv.org/abs/2608.13551v2" },
      { label: "Chiribella, Davidson, Paulsen & Rahaman, 'Positive maps and entanglement in real Hilbert spaces' (real-analogue counterexample)", url: "https://arxiv.org/abs/2207.02510" },
    ] },
];
