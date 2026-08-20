const r = String.raw;

export const CHANNELS = [
  { id: "C1", cat: "channels", horizon: "incremental", status: "improved",
    title: "Computable classes of quantum capacities",
    statement: r`Since no general single-letter formula can exist, identify maximal natural channel classes for which $Q(\mathcal{N})=\lim_n \tfrac1n \max_\rho I_c(\rho,\mathcal{N}^{\otimes n})$ is computable or finite-letter.`,
    context: r`The quantum capacity $Q(\mathcal{N})$ is the optimal rate of reliable qubit transmission through a noisy channel. Unlike Shannon's classical capacity, it is given by a regularized (many-copy) coherent-information formula that is generally not computable in closed form.

What is known: The Lloyd–Shor–Devetak theorem establishes the regularized coherent-information formula. For degradable channels (Devetak–Shor) the coherent information is additive, giving a single-letter capacity — this covers dephasing channels, amplitude damping, and certain bosonic channels. But the formula is badly non-additive in general: Smith–Yard exhibited superactivation, where two channels each with zero quantum capacity have positive capacity together, and DiVincenzo–Shor–Smolin showed superadditivity of coherent information. Cubitt et al. and Elkouss–Strelchuk showed that the regularization can require an unbounded number of copies, so no fixed-letter formula suffices in general.

New progress (2026): Zhu and Wang constructed an explicit qutrit channel with exactly zero quantum and private capacities which is neither PPT nor antidegradable. Their all-blocklength relative-entropy argument establishes a mechanism for quantum and private incapacity beyond the two standard PPT and no-cloning mechanisms. This resolves the existence question for zero-capacity channels outside those classes, while leaving the broader classification and computability programme open.

Additional progress (August 2026): Krohn-Grimberghe supplied an exact-arithmetic, independently checkable certificate that the qubit depolarizing channel has positive coherent information at per-Pauli noise $p=0.064956$. The explicit 45-copy rank-two input improves the previous numerical lower bound on the positive-capacity threshold. This is a certified quantitative advance, not a capacity formula or a resolution of the regularization problem.

**Authors' statement (unverified, July paper):** According to the paper's disclosure, the authors would have formulated the question, selected the candidate channels and directed the work, while QudeLeap's AI Scientist harness and several frontier language models would have suggested the key signed-lift mechanism. The authors say they reformulated that suggestion as precise mathematics and take responsibility for the result.

**Author's statement (unverified, August paper):** According to the contribution statement, an AI-driven numerical search would have found the input state, and AI systems would also have assisted with code, calculations, mechanical proof derivations and drafting under the author's direction. The author takes full responsibility; the published verification chain is designed to check the computational claims independently of how the witness was found.

The open, incremental task is to enlarge the classes — beyond degradable/antidegradable/PPT — for which $Q$ is computable or single-letter, and to understand the structure that makes capacity tractable. Related: C4, C5, U4.`,
    refs: [
      { label: "Devetak & Shor, 'The capacity of a quantum channel for simultaneous transmission of classical and quantum information', Comm. Math. Phys. 256 (2005)" },
      { label: "Smith & Yard, 'Quantum communication with zero-capacity channels', Science 321 (2008)" },
      { label: "Zhu & Wang, 'Quantum Incapacity beyond No-Cloning and PPT Mechanisms' (2026)", url: "https://arxiv.org/abs/2607.24693" },
      { label: "Krohn-Grimberghe, 'A certified lower bound on the quantum-capacity threshold of the depolarizing channel' (2026)", url: "https://arxiv.org/abs/2608.15870" },
    ] },

  { id: "C2", cat: "channels", horizon: "sharp",
    title: "Quantum capacity of the thermal attenuator",
    statement: r`Determine the energy-constrained quantum and private capacities of a general bosonic thermal-loss channel outside the degradable and antidegradable regimes.`,
    context: r`The thermal attenuator — a beam-splitter interaction with a thermal environment — models optical fiber and free-space loss with added thermal noise. It is the workhorse channel of continuous-variable quantum communication, so its exact quantum and private capacities are of direct practical interest.

What is known: In limiting regimes the capacity is known. The pure-loss channel (zero temperature) is degradable/antidegradable and its energy-constrained quantum capacity is a single-letter expression (Wolf–Pérez-García–Giedke; Wilde–Qi). For the general thermal attenuator, tight upper and lower bounds exist: lower bounds from Gaussian coherent-information optimization, and upper bounds from the PLOB (Pirandola–Laurenza–Ottaviani–Banchi) bound and from data-processing / decomposition arguments (Rosati–Mari–Giovannetti; Sharma–Wilde et al.). These bounds are close but do not coincide in the intermediate (non-degradable, nonzero temperature) regime.

The exact energy-constrained quantum (and private) capacity of the general thermal attenuator remains open — a sharp gap between the best known upper and lower bounds. Related: C3, C10.`,
    refs: [
      { label: "Pirandola, Laurenza, Ottaviani, Banchi, 'Fundamental limits of repeaterless quantum communications', Nat. Commun. 8, 15043 (2017)" },
      { label: "Rosati, Mari, Giovannetti, 'Narrow bounds for the quantum capacity of thermal attenuators', Nat. Commun. 9, 4339 (2018)" },
    ] },

  { id: "C3", cat: "channels", horizon: "incremental",
    title: "Two-way capacities of Gaussian channels",
    statement: r`Determine the exact two-way-assisted entanglement-distribution and secret-key capacities for thermal attenuators, amplifiers and additive-noise channels.`,
    context: r`With unlimited two-way classical communication between sender and receiver, the relevant figures of merit are the two-way entanglement-distribution capacity and the secret-key capacity — the ultimate rates for quantum repeaters and quantum key distribution over a given channel.

What is known: For the pure-loss channel, the PLOB bound gives the exact secret-key capacity $-\log_2(1-\eta)$ (with transmissivity $\eta$), a landmark tight result. For the thermal attenuator, quantum amplifier, and additive-Gaussian-noise channels, PLOB and subsequent work (Wilde–Tomamichel–Berta; Pirandola et al.) give strong upper bounds and matching lower bounds only in special cases; gaps remain for nonzero thermal noise and for amplifiers.

Closing these gaps — exact two-way capacities for the full Gaussian family — is an incremental but important target, since two-way capacities set the ultimate benchmarks for practical quantum communication and repeater design. Related: C2.`,
    refs: [
      { label: "Pirandola, Laurenza, Ottaviani, Banchi, Nat. Commun. 8, 15043 (2017)" },
      { label: "Wilde, Tomamichel, Berta, 'Converse bounds for private communication over quantum channels', IEEE Trans. Inf. Theory 63 (2017)" },
    ] },

  { id: "C4", cat: "channels", horizon: "sharp", status: "improved",
    title: "Strong converse for quantum capacity",
    statement: r`Determine for which channels communication above $Q(\mathcal{N})$ forces the fidelity to converge to zero, and settle the general finite-dimensional case or give a counterexample.`,
    context: r`A strong converse says the capacity is a sharp threshold: at any rate above $Q(\mathcal{N})$ the transmission fidelity does not merely fail to reach 1, it decays to 0 as the block length grows. A weak converse only forbids fidelity 1. Strong converses make the capacity operationally sharp.

What is known: The strong converse holds for several structured classes. For degradable channels and for the classical capacity of entanglement-breaking and other channels, strong converses are established (Wilde–Winter–Yang via Rényi/sandwiched divergences; Tomamichel–Wilde–Winter for the quantum capacity of certain channels, e.g. dephasing and generalized dephasing). The Rains bound and its regularizations provide strong-converse upper bounds for many channels.

New progress (2026): Tomamichel proved a strong converse for stabilizer codes over Pauli channels. Above the coherent information of the code input, entanglement fidelity decays exponentially; for memoryless Pauli channels this fixes the $\varepsilon$-quantum capacity within the full-joint-eigenspace stabilizer-code class for every $\varepsilon<1$. The proof also isolates an encoder-side statement whose extension would cover unrestricted codes. This is a substantial restricted-class result, not a proof of the general strong converse.

**Author's statement (unverified, July paper):** According to the paper's disclosure, Claude would have originated and executed the proof ideas, drafted and typeset the manuscript, and carried out the literature search under Tomamichel's direction, corrections and verification. Other Claude models would have handled revisions, while ChatGPT would have acted as an adversarial referee. Tomamichel says he checked the statements, proofs and references and takes responsibility for the paper.

Further progress (August 2026): Kondra, Brinster, Kampermann, Bruß and Wyderka proved an exponential strong converse for every finite-dimensional degradable and antidegradable channel, covering all codes. Consequences include the first all-code exponential strong converse for the quantum erasure channel over its full parameter range, SDP strong-converse bounds for arbitrary finite-dimensional channels, and an exact result for a nondegradable multilevel amplitude-damping family. The unrestricted finite-dimensional problem remains open.

**Authors' statement (unverified, August paper):** The authors state that some technical proof steps would have been developed with ChatGPT 5.6 Sol. They say the initial draft was written by hand and later improved with ChatGPT 5.6 Sol and Claude Opus 4.8, and that all AI-assisted material was reviewed and revised by the authors, who take responsibility for it.

Whether a strong converse for the quantum capacity holds for all finite-dimensional channels is open — no general proof and no counterexample. Given the non-additivity phenomena (C1), a counterexample is conceivable. This is a sharp yes/no problem. Related: C1, C5.`,
    refs: [
      { label: "Tomamichel, Wilde, Winter, 'Strong converse rates for quantum communication', IEEE Trans. Inf. Theory 63 (2017)" },
      { label: "Wilde, Winter, Yang, 'Strong converse for the classical capacity of entanglement-breaking and Hadamard channels', Comm. Math. Phys. 331 (2014)" },
      { label: "Tomamichel, 'A strong converse for stabilizer codes over Pauli channels via the blowing-up lemma' (2026)", url: "https://arxiv.org/abs/2607.23450" },
      { label: "Kondra et al., 'Sharp Quantum Capacity Thresholds: Exponential Strong Converses for Degradable and Antidegradable Channels' (2026)", url: "https://arxiv.org/abs/2608.01308" },
    ] },

  { id: "C5", cat: "channels", horizon: "incremental",
    title: "Private versus quantum capacity",
    statement: r`Characterize channels with $P(\mathcal{N})>Q(\mathcal{N})$, determine the maximal possible separation, and decide when either capacity is additive.`,
    context: r`The private capacity $P(\mathcal{N})$ is the rate of secret classical communication, and the quantum capacity $Q(\mathcal{N})$ the rate of qubit transmission; always $Q\le P$. Understanding when private strictly exceeds quantum capacity, and by how much, probes the difference between hiding classical information and preserving quantum coherence.

What is known: The private capacity has a regularized formula (Devetak; Cai–Winter–Yeung). Large separations exist: Horodecki–Horodecki–Horodecki–Oppenheim's private states show channels with high private capacity but low or zero quantum capacity, and Leung et al. and Elkouss–Strelchuk exhibited big gaps and non-additivity of private information. Both $P$ and $Q$ are non-additive in general, and even zero-quantum-capacity channels can have positive private capacity.

A structural characterization of the channels with $P>Q$, the maximal achievable separation, and criteria for additivity of either quantity, are open — an incremental problem tightly linked to C1 and to the theory of bound entanglement (E1). Related: C1, C4.`,
    refs: [
      { label: "Horodecki, Horodecki, Horodecki, Oppenheim, 'Secure key from bound entanglement', PRL 94, 160502 (2005)" },
      { label: "Elkouss & Strelchuk, 'Superadditivity of private information for any number of uses of the channel', PRL 115, 040501 (2015)" },
    ] },

  { id: "C6", cat: "channels", horizon: "incremental",
    title: "Zero-error quantum capacities",
    statement: r`Characterize zero-error classical and quantum capacities, their superactivation, and the channel classes for which the required regularization can be evaluated effectively.`,
    context: r`Zero-error capacity asks for the rate of perfectly (not just asymptotically) reliable transmission. Even classically this is Shannon's zero-error capacity, a notoriously hard combinatorial quantity — the zero-error capacity of the 7-cycle is still unknown, and the 5-cycle was only settled by Lovász's theta function.

What is known: The quantum generalization was developed by Duan–Severini–Winter and Cubitt–Chen–Harrow via non-commutative graph theory: a channel's zero-error properties are governed by an operator system ('quantum graph'), with a quantum Lovász theta as a semidefinite bound. Striking non-additivity appears: Duan and Cubitt–Cubitt–Smolin–Smith–Leung–Winter showed superactivation of zero-error capacity — channels each with zero zero-error capacity that jointly transmit perfectly. Entanglement can boost zero-error classical capacity (Cubitt–Leung–Matthews–Winter).

Characterizing zero-error classical and quantum capacities in general, the extent of superactivation, and the classes where the regularizations are effectively computable, are open — incremental problems inheriting classical combinatorial hardness. Related: C1, U4.`,
    refs: [
      { label: "Duan, Severini, Winter, 'Zero-error communication via quantum channels, non-commutative graphs, and a quantum Lovász theta function', IEEE Trans. Inf. Theory 59 (2013)" },
      { label: "Cubitt, Chen, Harrow, 'Superactivation of the asymptotic zero-error classical capacity of a quantum channel', IEEE Trans. Inf. Theory 57 (2011)" },
    ] },

  { id: "C7", cat: "channels", horizon: "programme",
    title: "Quantum broadcast-channel capacity region",
    statement: r`Determine the full classical–quantum–entanglement capacity region of a general quantum broadcast channel.`,
    context: r`A broadcast channel has one sender transmitting to several receivers over a shared noisy channel. The capacity region is the set of simultaneously achievable rate tuples. Even classically, the general broadcast-channel capacity region is a famous unsolved problem (open since the 1970s), so the quantum version inherits and extends that difficulty.

What is known: Partial results exist. Yard–Hayden–Devetak determined capacity regions for degraded quantum broadcast channels and for classical–quantum broadcast channels in special cases; Savov–Wilde and others gave achievable rate regions (quantum Marton and superposition coding). Entanglement-assisted and specific degraded/Hadamard structures are better understood. Bounds combine quantum superposition coding with decoupling arguments.

The general quantum broadcast capacity region — the full trade-off among classical, quantum, and entanglement rates to multiple receivers — is unknown, and will remain so at least until the classical problem is solved. This is a long-horizon programme. Related: C8.`,
    refs: [
      { label: "Yard, Hayden, Devetak, 'Quantum broadcast channels', IEEE Trans. Inf. Theory 57 (2011)" },
      { label: "Savov & Wilde, 'Classical codes for quantum broadcast channels', IEEE Trans. Inf. Theory 61 (2015)" },
    ] },

  { id: "C8", cat: "channels", horizon: "programme",
    title: "Quantum interference-channel capacity region",
    statement: r`Find matching inner and outer bounds, or an exact characterization, for general quantum interference channels.`,
    context: r`An interference channel has multiple sender–receiver pairs sharing a medium, so each transmission interferes with the others. The classical interference-channel capacity region is one of the most celebrated open problems in network information theory — the best known inner bound (Han–Kobayashi) is not proven optimal in general, even for two users.

What is known: Quantum versions have achievable regions from quantum Han–Kobayashi-type coding and simultaneous-decoding arguments (Fawzi–Hayden–Savov–Sen–Wilde; Sen's work on the quantum simultaneous decoder). Special cases — strong/very strong interference regimes, and classical-quantum interference channels — have partial characterizations. The quantum simultaneous-decoding conjecture, needed for several of these regions, was a bottleneck partly resolved by Sen.

An exact characterization, or matching inner and outer bounds, for the general quantum interference channel is open and blocked in part by the unsolved classical problem. A long-horizon programme. Related: C7.`,
    refs: [
      { label: "Fawzi, Hayden, Savov, Sen, Wilde, 'Classical communication over a quantum interference channel', IEEE Trans. Inf. Theory 58 (2012)" },
      { label: "Sen, 'A one-shot quantum joint typicality lemma', (2018)" },
    ] },

  { id: "C9", cat: "channels", horizon: "programme",
    title: "Capacities of channels with memory",
    statement: r`Develop computable capacity formulas for broad non-Markovian channel families with correlated noise, including an operational classification of forgetful and nonforgetful memory.`,
    context: r`Most capacity theorems assume memoryless (i.i.d.) channel uses. Real channels have correlated noise across uses — memory. Capacities of channels with memory require different tools, and general formulas are scarce.

What is known: For 'forgetful' quantum memory channels — where the influence of the distant past decays — Kretschmann and Werner proved coding theorems giving regularized capacity expressions, and information-theoretic quantities converge. For certain Gauss–Markov and finite-state (Markov) memory models, and for channels with classical memory, capacity formulas or bounds exist (Caruso et al. review; Datta–Dorlas one-shot / information-spectrum methods handle general non-i.i.d. sources). Quantum Markov chains and matrix-product channel structures give tractable subclasses.

Computable capacity formulas for broad non-Markovian, strongly correlated channels, and a clean operational classification of forgetful versus nonforgetful memory, remain open — a programme intertwined with the theory of open-system non-Markovianity (O5). Related: C1, O5.`,
    refs: [
      { label: "Kretschmann & Werner, 'Quantum channels with memory', PRA 72, 062323 (2005)" },
      { label: "Caruso, Giovannetti, Lupo, Mancini, 'Quantum channels and memory effects', Rev. Mod. Phys. 86, 1203 (2014)" },
    ] },

  { id: "C10", cat: "channels", horizon: "incremental",
    title: "Quantum Shannon theory in infinite dimensions",
    statement: r`Extend coding theorems, strong converses and resource inequalities to bosonic and other infinite-dimensional systems under physically natural energy constraints, with controlled compactness and continuity.`,
    context: r`Continuous-variable / bosonic systems live in infinite-dimensional Hilbert spaces, where capacities can be infinite without energy constraints and entropic quantities are not continuous. A fully rigorous quantum Shannon theory in this setting requires energy constraints and careful functional-analytic control.

What is known: Considerable progress. The classical capacity of the pure-loss bosonic channel was established (Giovannetti–Guha–Lloyd–Maccone–Shapiro et al.), and the long-standing minimum-output-entropy / Gaussian-optimizer conjecture — that Gaussian inputs are optimal — was proved by Giovannetti–Holevo–García-Patrón, settling several bosonic classical capacities. Energy-constrained capacities, continuity bounds (Winter; Shirokov), and strong converses for many Gaussian channels are now available. Holevo's monograph systematizes much of this.

A complete infinite-dimensional theory — all coding theorems, strong converses, and resource inequalities under natural energy constraints, with uniform continuity/compactness — is still being assembled, and general non-Gaussian channels are less controlled. This overlaps M11 and is an incremental consolidation. Related: M11, C2.`,
    refs: [
      { label: "Giovannetti, Holevo, García-Patrón, 'A solution of Gaussian optimizer conjecture...', Comm. Math. Phys. 334 (2015)" },
      { label: "Holevo, 'Quantum Systems, Channels, Information' (De Gruyter, 2nd ed. 2019)" },
    ] },
];
