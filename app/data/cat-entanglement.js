const r = String.raw;

export const ENTANGLEMENT = [
  { id: "E1", cat: "entanglement", horizon: "sharp", status: "improved",
    relations: [{ id: "E2", type: "reduction" }, { id: "E5", type: "related" }, { id: "E16", type: "related" }],
    evidence: [{ kind: "preprint", summary: "Two-copy distillation is claimed for a distinguished state and neighborhoods in the two-parameter DiVincenzo family, not the general Werner or NPT problem.", url: "https://arxiv.org/abs/2608.08836", date: "2026-08-09" }],
    provenance: [{ summary: "Tabia, Chen and Hsieh report GPT-5.6 Thinking assistance with reasoning, searches and exact certificates under Tabia's direction, and state that they reconstructed and verified the calculations. This is the authors' account, not independent verification.", url: "https://arxiv.org/abs/2608.08836" }],
    title: "NPT bound entanglement",
    statement: r`Determine whether every bipartite state with negative partial transpose is distillable, or construct an NPT state whose distillable entanglement is zero.`,
    context: r`Entanglement distillation converts many copies of a noisy entangled state into near-perfect Bell pairs by local operations and classical communication (LOCC). A state with positive partial transpose (PPT) cannot be distilled. The reverse question — whether every negative-partial-transpose (NPT) state is distillable — remains a foundational open problem.

What is known: All NPT states in $2\times n$ systems are distillable. The general existence question reduces to the Werner-state benchmark retained at E2. For $\rho_\alpha=(I+\alpha F)/(d^2+\alpha d)$, with $F$ the swap operator, the NPT but one-copy-undistillable interval is $-1/2\leq\alpha<-1/d$ for $d\geq3$. A fixed state in this interval undistillable for every copy number would establish NPT bound entanglement. Finite-copy results and numerical evidence apply to specified parameters and copy numbers; they do not establish all-copy undistillability of one NPT state. Three July 2026 preprints claim coincident one-copy and two-copy thresholds; E2 preserves the details and partial three-copy results.

Preprint progress (August 2026): Tabia, Chen and Hsieh report that a distinguished one-copy-undistillable state in the two-parameter DiVincenzo family is two-copy distillable in every local dimension $d\geq3$. Their witnesses cover a neighborhood, and further three-copy witnesses enlarge the distillable region. This addresses that family's proposed undistillable region, not the Werner conjecture or general NPT question. Independent proof verification is not claimed here.

NPT bound entanglement would have major consequences for activation and the nonadditivity of distillability. A single explicit all-copy-undistillable NPT state, or a proof that no such state exists, resolves the question.`,
    refs: [
      {"label":"DiVincenzo et al., 'Evidence for bound entangled states with negative partial transpose', PRA 61, 062312 (2000)","url":"https://doi.org/10.1103/PhysRevA.61.062312"},
      { label: "Horodecki, Horodecki, Horodecki, Horodecki, 'Quantum entanglement', Rev. Mod. Phys. 81, 865 (2009)", url: "https://doi.org/10.1103/RevModPhys.81.865" },
      { label: "Tabia, Chen & Hsieh, 'Two-copy distillability of one-copy-undistillable negative-partial-transpose states in every dimension' (2026 preprint)", url: "https://arxiv.org/abs/2608.08836" },
    ] },

  { id: "E2", cat: "entanglement", horizon: "sharp", status: "improved",
    archive: { kind: "merged", targets: ["E1"], reason: "The Werner-state problem is the canonical reduction of NPT bound entanglement, not an independent conjecture. Its benchmark and source history remain here." },
    relations: [{ id: "E1", type: "parent" }],
    evidence: [{ kind: "preprint", summary: "Three July manuscripts claim full two-copy Werner nondistillability in the one-copy-undistillable range; the general three-copy and all-copy questions remain unresolved.", url: "https://arxiv.org/abs/2607.21367v2", date: "2026-07-27", version: "v2" }],
    provenance: [
      { summary: "Fu, Gao and Park's v2 reports language/LaTeX assistance and proof-development ideas arising from GPT-5.5 and GPT-5.6 Sol; the authors state that they independently examined and verified the arguments.", url: "https://arxiv.org/html/2607.21367v2", version: "v2" },
      { summary: "Bharti, Gajjala and Haug report initial proofs generated with ChatGPT 5.6 Sol and subsequently verified, reconstructed and revised by the authors.", url: "https://arxiv.org/abs/2607.24479" },
      { summary: "Fraser, Huber, Pozsgay and Vona report proof discovery and refinement with GPT Sol-5.6 and Claude Fable/Opus. These disclosures do not constitute independent proof verification.", url: "https://arxiv.org/abs/2607.24309" },
    ],
    title: "Distillability of NPT Werner states",
    statement: r`Benchmark retained under E1: for $\rho_\alpha=(I+\alpha F)/(d^2+\alpha d)$ with $d\geq3$ and $-1/2\leq\alpha<-1/d$, decide whether some $n$ and Schmidt-rank-two $|\psi\rangle$ satisfy $\langle\psi|(\rho_\alpha^{T_B})^{\otimes n}|\psi\rangle<0$.`,
    context: r`This is the concrete reduction of E1, retained as an archival benchmark rather than counted as a separate active conjecture. Distillability is equivalent to the existence of a Schmidt-rank-two vector with negative expectation against a finite tensor power of the partial transpose.

Here $F$ is the swap operator. The Werner state is NPT for $\alpha<-1/d$ and one-copy distillable exactly for $\alpha<-1/2$. The intervening range requires uniform control over tensor powers. Pankowski–Piani–Horodecki–Horodecki developed useful formulations and bounds; related approaches use positive maps, partial-trace inequalities and real algebraic geometry.

Preprint progress (July 2026): Fu–Gao–Park, Bharti–Gajjala–Haug and Fraser–Huber–Pozsgay–Vona independently claim the full $n=2$ result: one-copy and two-copy distillability have the same threshold $\alpha<-1/2$. These manuscript claims use sharp partial-trace inequalities; this catalogue does not independently certify their proofs. The general problem for $n\geq3$ remains unresolved.

Further preprint progress (submitted 31 July 2026): Wu and Zou analyze the three-copy Werner endpoint and claim nonnegativity for positive-semidefinite rank-two coefficient operators, the normal rank-two sector and specified nonnormal cases. This does not settle the full three-copy problem. The initial submission date precedes August despite the arXiv identifier.

Resolving the all-copy Werner question resolves E1. The corrected author attributions and version-specific disclosures are retained in the references and provenance below.`,
    refs: [
      { label: "Pankowski, Piani, Horodecki, Horodecki, 'A few steps more towards NPT bound entanglement', IEEE Trans. Inf. Theory 56 (2010)", url: "https://arxiv.org/abs/0711.2613" },
      { label: "DiVincenzo et al., PRA 61, 062312 (2000)", url: "https://doi.org/10.1103/PhysRevA.61.062312" },
      { label: "Fu, Gao & Park, 'A solution to 2-copy distillability of Werner states' (2026 preprint, v2)", url: "https://arxiv.org/abs/2607.21367v2" },
      { label: "Bharti, Gajjala & Haug, 'Two-copy nondistillability of Werner states: sharp partial-trace inequalities and finite-copy extensions' (2026 preprint)", url: "https://arxiv.org/abs/2607.24479" },
      { label: "Fraser, Huber, Pozsgay & Vona, 'On the two-copy distillability of Werner states and a new partial trace inequality' (2026 preprint)", url: "https://arxiv.org/abs/2607.24309" },
      { label: "Wu & Zou, 'Sharp Plucker Geometry for Three-Copy Werner Distillation' (2026 preprint)", url: "https://arxiv.org/abs/2608.02647" },
    ] },

  { id: "E3", cat: "entanglement", horizon: "incremental", status: "improved",
    relations: [{ id: "E12", type: "related" }],
    evidence: [{ kind: "preprint", summary: "Randomized polynomial-time separability testing with a fixed constant Euclidean-distance promise gap; not exact or arbitrary-norm membership.", url: "https://arxiv.org/abs/2607.23773", date: "2026-07-26" }],
    provenance: [{ summary: "Malavolta attributes the main idea to himself with Michael Walter's feedback, and reports ChatGPT 5.5/5.6 assistance on technical reduction proofs. He states that he wrote the final manuscript and takes responsibility.", url: "https://arxiv.org/abs/2607.23773" }],
    title: "Effective separability criteria",
    statement: r`For rational finite-dimensional density matrices, identify structured families admitting efficient separability tests with a specified norm and promise gap, and bound the dimension and accuracy dependence of convergent hierarchies.`,
    context: r`Deciding whether a bipartite mixed state is separable is fundamental but hard. PPT is necessary and sufficient for arbitrary states only in $2\times2$ and $2\times3$; higher dimensions admit PPT entanglement.

What is known: Appropriate weak-membership promise versions of separability are NP-hard; the norm, gap and input encoding matter. The Doherty–Parrilo–Spedalieri symmetric-extension hierarchy converges to the separable set, with SDP cost increasing with dimension and level. Realignment, covariance-matrix criteria and witnesses provide useful one-sided tests. Low-rank and symmetric families admit stronger results. For Gaussian states, PPT is sufficient in one-mode-versus-many-mode and certain symmetric settings, but not in arbitrary bipartite mode configurations: Gaussian bound-entangled states exist.

Preprint progress (July 2026): Malavolta claims a randomized polynomial-time algorithm distinguishing separable density matrices from those at least a fixed constant $\eta>0$ from the separable set in Euclidean norm. The theorem's promise is essential: it does not give exact membership, vanishing-gap or arbitrary trace-distance tractability.

The incremental target is a quantitative map of specified tractable families and certified hierarchy levels as functions of dimension and requested accuracy, rather than an undefined “maximal tractable class”.`,
    refs: [
      {"label":"Lami, Serafini & Adesso, 'Gaussian entanglement revisited' (published 2018)","url":"https://arxiv.org/abs/1612.05215"},
      { label: "Gurvits, 'Classical deterministic complexity of Edmonds' problem and quantum entanglement', STOC 2003", url: "https://doi.org/10.1103/RevModPhys.81.865" },
      { label: "Doherty, Parrilo, Spedalieri, 'Complete family of separability criteria', PRA 69, 022308 (2004)", url: "https://arxiv.org/abs/quant-ph/0308032" },
      { label: "Malavolta, 'Quantum Separability in Polynomial Time' (2026 preprint)", url: "https://arxiv.org/abs/2607.23773" },
    ] },

  { id: "E4", cat: "entanglement", horizon: "incremental", status: "improved",
    relations: [{ id: "E5", type: "related" }, { id: "E11", type: "related" }],
    title: "Effective membership in LOCC and its closure",
    statement: r`For finitely specified bipartite channels or instruments, develop certified $\varepsilon$-membership tests for the closure of LOCC in a stated operational norm, and distinguish this task from exact finite-round or unbounded-round LOCC implementability.`,
    context: r`Local operations and classical communication (LOCC) are the free operations of entanglement theory, but their geometry is subtle. LOCC is not closed, and separable operations can fail to be LOCC — the operational phenomenon of nonlocality without entanglement.

What is known: Chitambar–Leung–Mančinska–Ozols–Winter carefully distinguish bounded-round protocols, unbounded-round LOCC, its closure and separable operations. These distinctions must be fixed before membership is a well-defined task. For channels one can use diamond-norm approximation; for instruments retain the classical outcome register. For pure bipartite state conversion, Nielsen's majorization criterion already gives an exact single-copy solution.

Preprint progress (August 2026): Zhao and Chen encode complete multiqubit orthogonal product bases as edge-coloured multigraphs and claim that a complete colour-splitting tree exactly characterizes perfect finite-round LOCC discrimination. Their algorithm constructs a protocol in this structured family; it is not a membership algorithm for arbitrary LOCC maps.

Useful residual questions ask for certified approximation with a specified promise gap, structured instrument classes, and communication-round complexity. Exact membership and membership in the closure must not be interchanged.`,
    refs: [
      {"label":"Chitambar et al., 'Everything You Always Wanted to Know About LOCC', CMP 328 (2014)","url":"https://arxiv.org/abs/1210.4583"},
      { label: "Nielsen, 'Conditions for a class of entanglement transformations', PRL 83, 436 (1999)", url: "https://arxiv.org/abs/quant-ph/9811053" },
      { label: "Zhao & Chen, 'Multiqubit orthogonal product bases' (2026 preprint)", url: "https://arxiv.org/abs/2608.18421" },
    ] },

  { id: "E5", cat: "entanglement", horizon: "programme",
    relations: [{ id: "E6", type: "related" }, { id: "E9", type: "related" }, { id: "E11", type: "related" }],
    title: "Asymptotic mixed-state entanglement conversion",
    statement: r`For explicitly specified families of finite-dimensional bipartite mixed states $\rho,\sigma$, determine the optimal rate $R_{\rm LOCC}(\rho\to\sigma)$ with vanishing trace-distance error, without catalysts or auxiliary entanglement.`,
    context: r`The asymptotic conversion rate is the supremum of rates $r$ for which LOCC maps $\rho^{\otimes n}$ to $\sigma^{\otimes\lfloor rn\rfloor}$ with trace-distance error tending to zero. For entangled pure states this is the ratio of their entanglement entropies, with Bell pairs as a reversible currency.

For mixed states, the extreme conversions are distillation to Bell pairs at rate $E_D$ and formation from Bell pairs at cost $E_C=E_F^\infty$. Monotones give bounds on other rates, but general equality conditions and optimal protocols are not known. Established irreversible examples rule out simply extending the pure-state entropy-ratio law.

This is a programme of family-specific rate calculations and matching converses, not one conjecture covering every mixed-state pair. The ordinary unassisted LOCC convention is fixed here. Catalysts, correlated return and sublinear auxiliary resources define different rates and are treated separately in E11.`,
    refs: [
      { label: "Bennett, DiVincenzo, Smolin, Wootters, 'Mixed-state entanglement and quantum error correction', PRA 54, 3824 (1996)", url: "https://doi.org/10.1103/PhysRevA.54.3824" },
      { label: "Horodecki⁴, Rev. Mod. Phys. 81, 865 (2009)", url: "https://doi.org/10.1103/RevModPhys.81.865" },
    ] },

  { id: "E6", cat: "entanglement", horizon: "sharp", status: "improved",
    relations: [{ id: "E5", type: "parent" }, { id: "E9", type: "related" }, { id: "E11", type: "related" }],
    evidence: [{ kind: "preprint", summary: "Irreversibility persists for an explicit state under PPT operations with correlated catalysts; this is not an LOCC equality classification.", url: "https://arxiv.org/abs/2608.20063", date: "2026-08-20" }],
    provenance: [{ summary: "Ao, Philip and Streltsov report ChatGPT 5.6 assistance with editing, organization, references and exploration/verification of mathematical arguments, while asserting independent author review and responsibility.", url: "https://arxiv.org/abs/2608.20063" }],
    title: "Irreversibility of mixed-state entanglement",
    statement: r`Give a structural characterization of finite-dimensional bipartite states satisfying $E_C(\rho)=E_D(\rho)$ under ordinary asymptotic LOCC with vanishing error and no catalysts.`,
    context: r`Pure-state entanglement is reversible: entropy of entanglement governs both formation and distillation. Mixed-state irreversibility is established by explicit examples, including bound-entangled states with $E_D=0<E_C$. It is not correct to treat every mixed state as irreversible: locally distinguishable flagged mixtures of suitable pure resources provide reversible mixed subclasses.

Vidal and Cirac exhibited irreversible states and clarified the gap $E_C-E_D$. Changing the free operations changes the question: strict non-entangling, asymptotically non-entangling, PPT and LOCC conventions are not interchangeable. Results on entanglement “second laws”, including Lami–Regula's irreversibility theorem, must retain their operation and error hypotheses.

Preprint progress (August 2026): Ao, Philip and Streltsov claim full additivity and strong superadditivity of regularized PPT relative entropy, and an explicit state with an irreversible formation–distillation gap even with correlated catalysts under PPT operations. This does not supply the missing equality criterion for ordinary LOCC.

The target is the boundary between reversible and irreversible states under the fixed convention, not merely another example of a gap.`,
    refs: [
      { label: "Vidal & Cirac, 'Irreversibility in asymptotic manipulations of entanglement', PRL 86, 5803 (2001)", url: "https://arxiv.org/abs/quant-ph/0102036" },
      { label: "Lami & Regula, 'No second law of entanglement manipulation after all', Nat. Phys. 19 (2023)", url: "https://doi.org/10.1038/s41567-022-01873-9" },
      { label: "Ao, Philip & Streltsov, 'PPT Entanglement with Correlated Catalysis: Monotones and Irreversibility' (2026 preprint)", url: "https://arxiv.org/abs/2608.20063" },
    ] },

  { id: "E7", cat: "entanglement", horizon: "sharp",
    relations: [{ id: "E8", type: "related" }],
    title: "Minimal reversible entanglement-generating set",
    statement: r`For three fixed parties, does a finite set of pure resource states exist from which every finite-dimensional tripartite pure state can be reversibly generated by asymptotic LOCC with vanishing error?`,
    context: r`For bipartite pure states the Bell pair is a reversible currency. A multipartite analogue would be a finite reversible entanglement-generating set (MREGS), allowing tensor products of its resources at asymptotic rates.

What is known: Bennett–Popescu–Rohrlich–Smolin–Thapliyal introduced the multipartite programme. Acín–Vidal–Cirac, rather than that original paper, established the inadequacy of the natural candidate consisting of three pairwise EPR resources and a GHZ state. GHZ and pairwise entanglement have inequivalent reversible resource content; a list of familiar representatives is therefore not automatically a reversible generating set.

No finite MREGS is known even for three parties. Fixing that party number avoids conflating the question with an ever-growing number of laboratories. Negative results under one-way communication, finite-copy exact conversion or other restricted operations do not by themselves exclude all finite asymptotic LOCC generating sets.`,
    refs: [
      {"label":"Acín, Vidal & Cirac, 'On the structure of a reversible entanglement generating set for tripartite states', QIC 3 (2003)","url":"https://arxiv.org/abs/quant-ph/0202056"},
      { label: "Bennett, Popescu, Rohrlich, Smolin, Thapliyal, 'Exact and asymptotic measures of multipartite pure-state entanglement', PRA 63, 012307 (2000)", url: "https://arxiv.org/abs/quant-ph/9908073" },
    ] },

  { id: "E8", cat: "entanglement", horizon: "programme",
    relations: [{ id: "E7", type: "related" }, { id: "E5", type: "related" }],
    title: "Multipartite entanglement classification",
    statement: r`For fixed party number, local dimensions and rank bounds, develop computable invariants and conversion criteria for multipartite states under a specified equivalence relation, distinguishing pure-state SLOCC orbits from mixed-state LOCC convertibility.`,
    context: r`Multipartite entanglement has no single canonical classification independent of the allowed operations. Pure-state SLOCC equivalence, local-unitary equivalence, deterministic LOCC conversion and asymptotic resource conversion ask different questions.

For pure three-qubit states, SLOCC yields finitely many classes, including inequivalent GHZ and W classes. Four-qubit pure states already have infinitely many SLOCC classes; the Verstraete–Dehaene–De Moor–Verschelde classification organizes them into nine parameterized families, not nine equivalence classes. Tensor algebra, orbit geometry and invariant theory describe small cases. Entanglement polytopes and tensor rank provide useful coarser structure.

Mixed-state classification requires its own rank, dimensional and operational hypotheses; pure-state examples do not settle it. The programme is to obtain computable invariants, complete criteria in selected families and algorithms with explicit costs, rather than a universal finite list for all systems.`,
    refs: [
      { label: "Dür, Vidal, Cirac, 'Three qubits can be entangled in two inequivalent ways', PRA 62, 062314 (2000)", url: "https://arxiv.org/abs/quant-ph/0005115" },
      { label: "Verstraete, Dehaene, De Moor, Verschelde, 'Four qubits can be entangled in nine different ways', PRA 65, 052112 (2002)", url: "https://arxiv.org/abs/quant-ph/0109033" },
    ] },

  { id: "E9", cat: "entanglement", horizon: "incremental",
    relations: [{ id: "E5", type: "related" }, { id: "E6", type: "related" }, { id: "E10", type: "related" }, { id: "U4", type: "related" }],
    title: "Certified evaluation of regularized entanglement and correlation measures",
    statement: r`For each of $E_C$, $E_D$, $E_R^\infty$ and the total-correlation quantity $E_P^\infty$, determine whether rational finite-dimensional inputs admit two-sided approximation to any rational accuracy with a certified stopping rule, and separately identify efficient structured cases.`,
    context: r`Many operational quantities involve an asymptotic limit over copies. Entanglement cost is $E_C=E_F^\infty$; regularized relative entropy and entanglement of purification also involve many-copy optimization. Entanglement of purification measures total correlations and is not, in general, an LOCC entanglement monotone.

Nonadditivity of entanglement of formation and related channel quantities invalidates their naive single-copy replacements. It does not exclude every possible closed formula, nor establish Turing uncomputability. Likewise NP-hardness of finite-copy optimization is different from the absence of any terminating algorithm. Entangled states with zero distillable entanglement complicate structural criteria but do not themselves prove undecidability.

Published progress (2026): Beigi–Rubboli–Tomamichel give structural single-copy criteria for additivity of quantum relative-entropy optimizations. These can certify useful special cases; they do not provide a general computability theorem for all the quantities listed here.

The task must be specified quantity by quantity, with input encoding, additive accuracy and a two-sided certificate. Efficient algorithms, computable convergence rates and analytic formulas are distinct levels of success.`,
    refs: [
      {"label":"Beigi, Rubboli & Tomamichel, 'Additivity of quantum relative entropies as a single-copy criterion', CMP 407, 134 (2026)","url":"https://arxiv.org/abs/2507.05696"},
      { label: "Hastings, 'Superadditivity of communication capacity using entangled inputs', Nat. Phys. 5 (2009)", url: "https://arxiv.org/abs/0809.3972" },
      { label: "Huang, 'Computing quantum discord is NP-complete', New J. Phys. 16 (2014)", url: "https://arxiv.org/abs/1305.5941" },
    ] },

  { id: "E10", cat: "entanglement", horizon: "sharp", status: "improved",
    relations: [{ id: "E9", type: "related" }],
    evidence: [{ kind: "numerical", summary: "Werner-state calculations support nonadditivity but do not constitute a rigorously certified counterexample.", url: "https://arxiv.org/abs/1206.1307" }, { kind: "preprint", summary: "Rényi results for alpha below 1 and at least 2 do not settle ordinary entanglement of purification at alpha=1.", url: "https://arxiv.org/abs/2608.28897", date: "2026-08-28" }],
    title: "Additivity of entanglement of purification",
    statement: r`For ordinary von Neumann entanglement of purification, prove $E_P(\rho\otimes\sigma)=E_P(\rho)+E_P(\sigma)$ for all finite-dimensional states, or give a rigorously certified counterexample.`,
    context: r`Entanglement of purification $E_P$ is the minimum entanglement over purifications of a bipartite state. It measures quantum plus classical correlations. Its regularization governs formation of correlations with asymptotically vanishing communication, but evaluating that whole regularization is a separate task under E9.

Terhal–Horodecki–Leung–DiVincenzo introduced the quantity and established bounds; it is not an entanglement monotone under LOCC. Chen–Winter supplied strong numerical evidence for nonadditivity on Werner states, together with rigorous structural results. Their numerical evidence is not an explicit rigorously proved counterexample. Holographic conjectures involving entanglement-wedge cross-sections provide additional motivation, not a resolution for arbitrary states.

Preprint progress (August 2026): Negari and Baghali Khanian claim Rényi nonadditivity for every $\alpha\in[0,1)$ using a classical two-qubit family, and additivity for $\alpha\in[2,\infty]$ within that family. The ordinary $\alpha=1$ problem remains unresolved. A theorem at another Rényi order must not be labeled a solution here.`,
    refs: [
      {"label":"Chen & Winter, 'Non-Additivity of the Entanglement of Purification (Beyond Reasonable Doubt)' (numerical evidence, 2012)","url":"https://arxiv.org/abs/1206.1307"},
      { label: "Terhal, Horodecki, Leung, DiVincenzo, 'The entanglement of purification', J. Math. Phys. 43, 4286 (2002)", url: "https://arxiv.org/abs/quant-ph/0202044" },
      { label: "Bagchi & Pati, 'Monogamy, polygamy, and other properties of entanglement of purification', PRA 91 (2015)", url: "https://doi.org/10.1103/PhysRevA.91.042323" },
      { label: "Negari & Baghali Khanian, 'Rényi Entanglement of Purification Is Non-additive' (2026 preprint)", url: "https://arxiv.org/abs/2608.28897" },
    ] },

  { id: "E11", cat: "entanglement", horizon: "incremental", status: "improved",
    relations: [{ id: "E4", type: "related" }, { id: "E5", type: "related" }, { id: "E6", type: "related" }],
    title: "Entanglement catalysis",
    statement: r`For specified mixed or multipartite LOCC conversion families, characterize feasibility and catalyst cost separately for exact product return, exact marginal return with correlations, and approximate return with a stated error–dimension bound.`,
    context: r`A catalyst is an auxiliary state enabling a conversion while being returned according to a specified convention. Exact uncorrelated return requires an output $\sigma\otimes\tau$ with the original catalyst $\tau$. Correlated catalysis may return only the marginal $\tau$, and approximate return allows a perturbation. These are inequivalent resource theories.

For pure bipartite states, Jonathan–Plenio discovered exact catalysis; catalytic majorization/trumping criteria characterize the relevant Schmidt-vector conversions, including their support and strict-inequality conditions. Kondra–Datta–Streltsov's entropy criterion concerns approximate pure-bipartite conversion with the catalyst marginal returned and allowed output correlations, not arbitrary exact mixed-state or multipartite conversion. Van Dam–Hayden embezzlement shows why unconstrained catalyst dimension and arbitrarily small return error can otherwise trivialize conversion obstructions.

Related preprint progress (August 2026): Ao–Philip–Streltsov provide monotones and an irreversibility example under the larger class of PPT operations with correlated catalysts. E6 records this same paper's evidence and provenance; it is not a second independent advance.

Useful benchmarks fix source/target families, trace-distance accuracy, allowed correlations and catalyst dimension or entanglement cost. Necessary-and-sufficient criteria in these controlled settings remain the incremental target.`,
    refs: [
      {"label":"Kondra, Datta & Streltsov, 'Catalytic transformations of pure entangled states', PRL 127, 150503 (2021)","url":"https://arxiv.org/abs/2102.11136"},
      { label: "Jonathan & Plenio, 'Entanglement-assisted local manipulation of pure quantum states', PRL 83, 3566 (1999)", url: "https://doi.org/10.1103/PhysRevLett.83.3566" },
      { label: "Ao, Philip & Streltsov, 'PPT Entanglement with Correlated Catalysis: Monotones and Irreversibility' (2026 preprint)", url: "https://arxiv.org/abs/2608.20063" },
    ] },

  { id: "E12", cat: "entanglement", horizon: "incremental",
    relations: [{ id: "E3", type: "related" }, { id: "E14", type: "related" }],
    title: "Efficient and structured quantum marginal compatibility",
    statement: r`For overlapping local density matrices supplied succinctly, obtain certified compatibility algorithms and hierarchy bounds for specified families, distinguishing mixed global states from pure global states and fixing an inverse-polynomial or other explicit promise gap.`,
    context: r`The quantum marginal problem asks whether prescribed reduced states come from one common global state. It includes important versions of fermionic N-representability in quantum chemistry, but particle statistics, pure versus mixed global states and input representation change the problem.

Known complete formulations must be distinguished from efficient algorithms. For an explicitly represented finite global density matrix, mixed-state compatibility is semidefinite feasibility: positivity, unit trace and linear partial-trace constraints. Its matrix size can grow exponentially with the number of sites. Klyachko and related representation-theoretic work characterize one-body pure-state spectral compatibility. Yu–Simnacher–Wyderka–Nguyen–Gühne additionally established a complete SDP hierarchy for arbitrary pure-state marginal compatibility.

Appropriate promise versions with succinct overlapping local inputs are QMA-complete. This does not mean no complete mathematical criterion exists; it obstructs a generic efficient algorithm. The residual programme is quantitative convergence, certified finite-level tests and tractable structures beyond known one-body cases.`,
    refs: [
      {"label":"Yu et al., 'A complete hierarchy for the pure state marginal problem', Nature Communications (2021)","url":"https://www.nature.com/articles/s41467-020-20799-5"},
      { label: "Klyachko, 'Quantum marginal problem and N-representability', J. Phys. Conf. Ser. 36 (2006)", url: "https://arxiv.org/abs/quant-ph/0511102" },
      { label: "Liu, Christandl, Verstraete, 'Quantum computational complexity of the N-representability problem', PRL 98, 110503 (2007)", url: "https://arxiv.org/abs/quant-ph/0609125" },
    ] },

  { id: "E13", cat: "entanglement", horizon: "programme",
    relations: [{ id: "E12", type: "related" }],
    title: "Quantum entropy cone",
    statement: r`For $n\geq4$, characterize the closure of von Neumann entropy vectors over arbitrary finite local dimensions; as a sharp subquestion, determine whether a new universal unconstrained linear inequality exists beyond the basic quantum entropy inequalities.`,
    context: r`For an $n$-party state, the entropy vector records $S(\rho_I)$ for every nonempty subset $I$. Taking all finite local dimensions and closure defines the quantum entropy cone considered here. Restricting dimension, requiring exact realizability or restricting to special states gives a different set.

For up to three parties, the basic inequalities — nonnegativity, subadditivity, strong subadditivity and weak monotonicity — characterize the closed cone. Classical entropy vectors already have independent non-Shannon inequalities for four parties; this classical result does not transfer directly to quantum entropy vectors.

For quantum states, nontrivial constrained inequalities have long been established by Linden–Winter and Cadney–Linden–Winter. Thus the unresolved sharp subquestion is about universal unconstrained linear inequalities, not the existence of any constrained inequality. Recent work on the tip of the cone further distinguishes exact entropy-vector realizability from closure; holographic inequalities likewise concern a special state class, not arbitrary states.

A new independent universal inequality would be a major advance but would not by itself characterize the entire cone. Complete characterization is therefore labeled a programme.`,
    refs: [
      {"label":"'Inner bounding the quantum entropy cone with subadditivity and subsystem coarse grainings', PRA 109, 052407 (2024)","url":"https://doi.org/10.1103/PhysRevA.109.052407"},
      {"label":"'The Tip of the Quantum Entropy Cone', PRL 131, 240201 (2023)","url":"https://doi.org/10.1103/PhysRevLett.131.240201"},
      { label: "Pippenger, 'The inequalities of quantum information theory', IEEE Trans. Inf. Theory 49 (2003)", url: "https://doi.org/10.1109/TIT.2003.809569" },
      { label: "Linden & Winter, 'A new inequality for the von Neumann entropy', Comm. Math. Phys. 259 (2005)", url: "https://arxiv.org/abs/quant-ph/0406162" },
    ] },

  { id: "E14", cat: "entanglement", horizon: "incremental", status: "improved",
    relations: [{ id: "N1", type: "related" }, { id: "E12", type: "related" }],
    evidence: [{ kind: "preprint", summary: "Claimed completion of the seven-party existence row: AME(7,d) exactly for d at least 3.", url: "https://arxiv.org/abs/2608.01011", date: "2026-08-02" }, { kind: "preprint", summary: "Explicit code constructions for five previously unresolved parameter pairs.", url: "https://arxiv.org/abs/2608.05781", date: "2026-08-06" }],
    provenance: [{ summary: "Shi et al. disclose GPT-5.6 assistance with the odd-q AME(7,2q) construction and state that they verified it independently.", url: "https://arxiv.org/abs/2608.01011" }, { summary: "Bevins and Bidav disclose extensive author-directed Claude Fable 5 and ChatGPT 5.6 Sol use for search, code, exact checks and manuscript preparation, and state that they reviewed the constructions and text.", url: "https://arxiv.org/abs/2608.05781" }],
    title: "Absolutely maximally entangled states",
    statement: r`Extend the certified existence/nonexistence table for $\mathrm{AME}(n,d)$ with explicit constructions or impossibility proofs for unresolved parameter pairs, keeping minimal-support and unrestricted AME questions distinct.`,
    context: r`An $\mathrm{AME}(n,d)$ pure state has maximally mixed reductions on every set of at most half of its $n$ parties. Such perfect tensors connect secret sharing, quantum error correction and quantum maximum-distance-separable codes.

Classical MDS codes and index-one orthogonal arrays construct minimal-support AME states; they are not equivalent to unrestricted AME existence. The established $\mathrm{AME}(4,6)$ construction illustrates the distinction from classical orthogonal-Latin-square obstructions. “Planar maximally entangled” imposes a different collection of cuts and is not a synonym for AME.

For qubits, AME states exist for $n=2,3,5,6$, not for $n=4$ or $n\geq7$. Many higher-dimensional constructions come from classical MDS codes and multiunitary matrices. The four-party row is known for all $d\geq3$.

Preprint progress (August 2026): Shi–Zhang–Zhao–Li claim completion of the seven-party row, with existence exactly for $d\geq3$. Bevins–Bidav report explicit constructions for $(12,5)$, $(18,11)$, $(18,13)$, $(17,11)$ and $(17,13)$. These manuscript results close particular cells, not the full diagram. A parameter table should track proof status and the support restriction for each cell rather than label the entire classification one sharp conjecture.`,
    refs: [
      {"label":"Rather et al., 'Thirty-six entangled officers of Euler', PRL 128, 080507 (2022)","url":"https://arxiv.org/abs/2104.05122"},
      { label: "Huber, Gühne, Siewert, 'Absolutely maximally entangled states of seven qubits do not exist', PRL 118, 200502 (2017)", url: "https://arxiv.org/abs/1608.06228" },
      { label: "Goyeneche, Alsina, Latorre, Riera, Życzkowski, 'Absolutely maximally entangled states, combinatorial designs, and multiunitary matrices', PRA 92 (2015)", url: "https://arxiv.org/abs/1506.08857" },
      { label: "Shi et al., 'Complete Existence Classification of Seven-Partite Absolutely Maximally Entangled States' (2026 preprint)", url: "https://arxiv.org/abs/2608.01011" },
      { label: "Bevins & Bidav, 'Symmetry-guided constructions of absolutely maximally entangled states in five open cases' (2026 preprint)", url: "https://arxiv.org/abs/2608.05781" },
    ] },

  { id: "E15", cat: "entanglement", horizon: "programme",
    archive: { kind: "merged", targets: ["F7"], reason: "Entanglement of identical particles is an operational subsystem-structure programme, not a separate uniquely defined conjecture." },
    relations: [{ id: "F7", type: "parent" }],
    title: "Entanglement of identical particles",
    statement: r`Operational special case retained under F7: with accessible mode algebras, superselection restrictions and allowed local operations fixed, compare the entanglement resources available in specified bosonic or fermionic tasks.`,
    context: r`For distinguishable systems, entanglement is relative to a subsystem structure. Identical particles do not have physically labeled particle tensor factors in the same sense; antisymmetrization or symmetrization alone must not be mistaken for an operationally extractable resource.

Several consistent frameworks already exist. Mode entanglement uses accessible mode algebras and may be restricted by particle-number superselection. Particle-based correlation measures answer other questions. Wiseman–Vaccaro and related work quantify resource restrictions in concrete tasks. Benatti–Floreanini–Franchini–Marzolino propose operational consistency criteria and argue that a mode-based approach satisfies them; the literature does not simply lack a framework.

A unique universal definition independent of laboratories, observables and free operations is not the appropriate sharp target. The useful residual work is operational comparison under explicit assumptions. This entry is merged into F7's subsystem-structure programme while preserving the identical-particle history.`,
    refs: [
      {"label":"Benatti et al., 'Entanglement in indistinguishable particle systems', Physics Reports 878 (2020)","url":"https://arxiv.org/abs/2007.06253"},
      { label: "Wiseman & Vaccaro, 'Entanglement of indistinguishable particles shared between two parties', PRL 91, 097902 (2003)", url: "https://arxiv.org/abs/quant-ph/0210002" },
    ] },
  { id: "E16", cat: "entanglement", horizon: "sharp",
    title: "Entangled states with zero distillable secret key",
    relations: [{ id: "E1", type: "related" }, { id: "C5", type: "related" }],
    evidence: [{ kind: "published", summary: "The 2026 resource theory of quantum secret key explicitly treats the existence of entangled zero-key states as unresolved.", url: "https://doi.org/10.22331/q-2026-05-06-2098", date: "2026-05-06" }],
    statement: r`Does there exist a finite-dimensional bipartite entangled state $\rho$ with $K_D(\rho)=0$, when key is distilled by LOCC with authenticated public communication and an adversary holds a purification?`,
    context: r`Distillable secret key $K_D$ is the asymptotic rate of shared classical bits that are uniform and independent of an adversary. The question asks whether this quantity is faithful on entangled bipartite states: does every entangled state contain some distillable secrecy?

Distillable entanglement implies distillable key, but the converse fails: PPT bound-entangled states can have positive key. Consequently the absence of distillable entanglement does not establish zero key, and the NPT bound-entanglement conjecture E1 is a different problem.

Horodecki–Sikorski–Das–Wilde's published 2026 resource theory explicitly allows for the unresolved possibility of entangled zero-key states. Calling this version “mathematical bound key” avoids silently identifying it with other conjectures involving a positive key-formation cost, whose definition requires additional care.

A proof that $K_D$ is positive for every entangled state, or one explicit entangled state with a rigorous zero-key converse against arbitrary LOCC protocols, resolves this sharp question. No finite-copy failure or numerical lack of a protocol establishes the required asymptotic zero.`,
    refs: [
      { label: "Horodecki, Sikorski, Das & Wilde, 'Cost of quantum secret key', Quantum 10, 2098 (2026)", url: "https://doi.org/10.22331/q-2026-05-06-2098" },
      { label: "Horodecki et al., 'Secure key from bound entanglement', PRL 94, 160502 (2005)", url: "https://doi.org/10.1103/PhysRevLett.94.160502" },
    ] },
];
