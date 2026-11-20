const r = String.raw;
// OpenAI Math Release, pinned to the commit reviewed on 17 October 2026.
const OAI = "https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/";
// PSI Open Quantum Problems batch, pinned to the 23 October 2026 snapshot cited in its CITATIONS.bib.
const PSI = "https://github.com/physical-superintelligence/oqp-batch-2026/blob/7049357c42a8fe85262da08fdc10d57b4d9e67a0/";

export const ENTANGLEMENT = [
  { id: "E1", cat: "entanglement", horizon: "sharp", status: "improved",
    reviewedAt: "2026-11-08",
    relations: [{ id: "E2", type: "reduction" }, { id: "E5", type: "related" }, { id: "E16", type: "related" }],
    evidence: [
      { kind: "preprint", role: "progress", summary: "One-copy undistillability on the open interval of a rank-five symmetric two-qutrit NPT family, and a structural obstruction for two copies; all-copy undistillability is not proved.", url: "https://arxiv.org/abs/2608.03710v1", date: "2026-08-04", version: "v1" },
{ kind: "preprint", role: "progress", summary: "Two-copy distillation is claimed for a distinguished state and neighborhoods in the two-parameter DiVincenzo family, not the general Werner or NPT problem. v2 (5 October 2026) adds exact two-copy-undistillability certificates for other parts of the same region, $d=3,\\dots,8$.", url: "https://arxiv.org/abs/2608.08836v2", date: "2026-10-05", version: "v2" },
      { kind: "preprint", role: "progress", summary: "Three-copy Werner results: the exact three-copy curve and threshold in local dimensions 3 and 4, built on October 2026 endpoint certificates, and, in every dimension $d\\ge3$, three-copy undistillability of the NPT Werner states $\\rho\\propto I-\\alpha F$ with $1/d<\\alpha\\le37/80$. PSI GitHub paper; the qutrit case is formalized in Lean 4 according to PSI, the dimension-uniform bound is not. Finite-copy progress, not all-copy undistillability; not peer reviewed.", url: `${PSI}oqp02-three-copy-werner/paper/oqp02-three-copy-werner.pdf`, date: "2026-10-23", version: "v1" }],
    provenance: [{ summary: "Tabia, Chen and Hsieh report GPT-5.6 Thinking assistance with reasoning, searches and exact certificates under Tabia's direction, and state that they reconstructed and verified the calculations. This is the authors' account, not independent verification.", url: "https://arxiv.org/abs/2608.08836" },
      { summary: "PSI states that the mathematics of the three-copy Werner paper was developed by PSI researchers working with Anthropic's Claude Fable 5.1 and Claude Opus 4.8 and OpenAI's GPT-5.6 and GPT-6-Astra in automated research workflows, and that the Lean formalization was written by AI agents (GPT-6-Astra in Codex) under PSI's direction. Ian MacCormack and Ning Bao are named as responsible for the correctness of the paper. This is PSI's account.", url: `${PSI}oqp02-three-copy-werner/README.md` }],
    title: "NPT bound entanglement",
    statement: r`Determine whether every bipartite state with negative partial transpose is distillable, or construct an NPT state whose distillable entanglement is zero.`,
    definition: r`**NPT bound entanglement** would be an entangled state with negative partial transpose (NPT) from which no Bell pairs can be distilled. Entanglement distillation converts many copies of a noisy entangled state into near-perfect Bell pairs by local operations and classical communication (LOCC). A state with positive partial transpose (PPT) cannot be distilled. The reverse question, whether every NPT state is distillable, is a foundational open problem.

NPT bound entanglement would have major consequences for activation and the nonadditivity of distillability. The question was made precise with the Werner-state candidates of DiVincenzo, Shor, Smolin, Terhal and Thapliyal, PRA 61, 062312 (2000), [doi:10.1103/PhysRevA.61.062312](https://doi.org/10.1103/PhysRevA.61.062312), and independently of Dür, Cirac, Lewenstein and Bruß, PRA 61, 062313 (2000), [arXiv:quant-ph/9910022](https://arxiv.org/abs/quant-ph/9910022).`,
    progress: r`- All NPT states in $2\times n$ systems are distillable.
- The general existence question reduces to the Werner-state benchmark retained at E2. For $\rho_\alpha=(I+\alpha F)/(d^2+\alpha d)$, with $F$ the swap operator, the NPT but one-copy-undistillable interval is $-1/2\leq\alpha<-1/d$ for $d\geq3$. A fixed state in this interval undistillable for every copy number would establish NPT bound entanglement.
- Three July 2026 preprints claim coincident one-copy and two-copy thresholds for Werner states; E2 preserves the details and partial three-copy results.
- Lei, Song, Chen and Liu (4 August 2026, v1) study a family of rank-five symmetric NPT two-qutrit states. They prove one-copy undistillability on the previously open parameter interval and find a structural obstruction to two-copy distillability by Schmidt-rank-two vectors, with numerical exploration beyond it ([arXiv:2608.03710](https://arxiv.org/abs/2608.03710v1)).
- Tabia, Chen and Hsieh (9 August 2026; v2 of 5 October 2026 reviewed) report that a distinguished one-copy-undistillable state in the two-parameter DiVincenzo family is two-copy distillable in every local dimension $d\geq3$. Their witnesses cover a neighborhood, and further three-copy witnesses enlarge the distillable region. v2 also gives exact two-copy-undistillability certificates for other parts of the region ($d=3,\dots,8$). This addresses that family's proposed undistillable region, not the Werner conjecture or the general NPT question. Independent proof verification is not claimed here ([arXiv:2608.08836](https://arxiv.org/abs/2608.08836v2)).
- MacCormack and Bao (PSI, 23 October 2026; GitHub, not peer reviewed) study three copies of the Werner state. In the convention above, the three-copy question at parameter $\alpha$ reduces to the sign of an explicit quadratic form on matrices of rank at most two. Taking as input exact endpoint certificates published in October 2026 for $d=3$ and $d=4$ (which already give the three-copy threshold), they prove by hand that the minimum of this form on unit matrices is $(1-2|\alpha|)(1-|\alpha|)^2$ for $-1/2\le\alpha\le0$ and local dimensions up to four, and determine the minimisers. Three copies are therefore distillable exactly when $\alpha<-1/2$, so for $d=3,4$ no state of the NPT one-copy-undistillable window is three-copy distillable. A second, dimension-uniform certificate gives three-copy undistillability for $-37/80\le\alpha<-1/d$ in every $d\ge3$. The qutrit case is formalized in Lean 4 according to PSI; the dimension-uniform bound is not ([paper](${PSI}oqp02-three-copy-werner/paper/oqp02-three-copy-werner.pdf)). The all-copy question remains open.`,
    residual: r`A single explicit NPT state undistillable for every number of copies, or a proof that no such state exists, resolves the question. Finite-copy results and numerical evidence apply to specified parameters and copy numbers; they do not establish all-copy undistillability of one NPT state. A rank-five example undistillable for every number of copies would also settle the question; this is the formulation used by the QIQCOP Zoo.`,
    refs: [
      { label: "Lei, Song, Chen & Liu, 'Entanglement Distillation of some Rank-Five Symmetric NPT States in Two-Qutrit Systems' (2026 preprint, v1)", url: "https://arxiv.org/abs/2608.03710v1" },
      {"label":"DiVincenzo, Shor, Smolin, Terhal & Thapliyal, 'Evidence for bound entangled states with negative partial transpose', PRA 61, 062312 (2000)","url":"https://doi.org/10.1103/PhysRevA.61.062312"},
      { label: "Horodecki, Horodecki, Horodecki, Horodecki, 'Quantum entanglement', Rev. Mod. Phys. 81, 865 (2009)", url: "https://doi.org/10.1103/RevModPhys.81.865" },
      { label: "Tabia, Chen & Hsieh, 'Two-copy distillability of one-copy-undistillable negative-partial-transpose states in every dimension' (2026 preprint, v2)", url: "https://arxiv.org/abs/2608.08836v2" },
      { label: "Dür, Cirac, Lewenstein & Bruß, 'Distillability and partial transposition in bipartite systems', PRA 61, 062313 (2000)", url: "https://arxiv.org/abs/quant-ph/9910022" },
      { label: "MacCormack & Bao, 'Three copies of the Werner state: the sharp curve in dimensions three and four and a bound in every dimension' (PSI paper, 23 October 2026; GitHub, not peer reviewed)", url: `${PSI}oqp02-three-copy-werner/paper/oqp02-three-copy-werner.pdf` },
      { label: "PSI, Lean 4 formalization of the qutrit case of the three-copy Werner result (statement map in docs/FIDELITY.md)", url: `${PSI}oqp02-three-copy-werner/lean/docs/FIDELITY.md` },
    ] },

  { id: "E2", cat: "entanglement", horizon: "sharp", status: "improved",
    archive: { kind: "merged", targets: ["E1"], reason: "The Werner-state problem is the canonical reduction of NPT bound entanglement, not an independent conjecture. Its benchmark and source history remain here." },
    relations: [{ id: "E1", type: "parent" }],
    evidence: [{ kind: "preprint", role: "progress", summary: "Three July 2026 manuscripts claim full two-copy Werner nondistillability in the one-copy-undistillable range; the general three-copy and all-copy questions remain unresolved.", url: "https://arxiv.org/abs/2607.21367v2", date: "2026-07-27", version: "v2" }],
    provenance: [
      { summary: "Fu, Gao and Park's v2 reports language/LaTeX assistance and proof-development ideas arising from GPT-5.5 and GPT-5.6 Sol; the authors state that they independently examined and verified the arguments.", url: "https://arxiv.org/html/2607.21367v2", version: "v2" },
      { summary: "Bharti, Gajjala and Haug report initial proofs generated with ChatGPT 5.6 Sol and subsequently verified, reconstructed and revised by the authors.", url: "https://arxiv.org/abs/2607.24479" },
      { summary: "Fraser, Huber, Pozsgay and Vona report proof discovery and refinement with GPT Sol-5.6 and Claude Fable/Opus. These disclosures do not constitute independent proof verification.", url: "https://arxiv.org/abs/2607.24309" },
    ],
    title: "Distillability of NPT Werner states",
    statement: r`Benchmark retained under E1: for $\rho_\alpha=(I+\alpha F)/(d^2+\alpha d)$ with $d\geq3$ and $-1/2\leq\alpha<-1/d$, decide whether some $n$ and Schmidt-rank-two $|\psi\rangle$ satisfy $\langle\psi|(\rho_\alpha^{T_B})^{\otimes n}|\psi\rangle<0$.`,
    definition: r`**Werner-state distillability** is the concrete reduction of E1, kept here as an archived benchmark rather than a separate active conjecture. A state is distillable exactly when some Schmidt-rank-two vector has negative expectation against a finite tensor power of its partial transpose. For the Werner state $\rho_\alpha=(I+\alpha F)/(d^2+\alpha d)$, with $F$ the swap operator, the state is NPT for $\alpha<-1/d$ and one-copy distillable exactly for $\alpha<-1/2$; the intervening range requires uniform control over tensor powers.

The Werner candidates were proposed by DiVincenzo, Shor, Smolin, Terhal and Thapliyal, PRA 61, 062312 (2000), [doi:10.1103/PhysRevA.61.062312](https://doi.org/10.1103/PhysRevA.61.062312).`,
    progress: r`- Pankowski, Piani, Horodecki and Horodecki developed useful formulations and bounds ([arXiv:0711.2613](https://arxiv.org/abs/0711.2613)); related approaches use positive maps, partial-trace inequalities and real algebraic geometry.
- In July 2026, Fu–Gao–Park ([arXiv:2607.21367](https://arxiv.org/abs/2607.21367v2)), Bharti–Gajjala–Haug ([arXiv:2607.24479](https://arxiv.org/abs/2607.24479)) and Fraser–Huber–Pozsgay–Vona ([arXiv:2607.24309](https://arxiv.org/abs/2607.24309)) independently claim the full $n=2$ result: one-copy and two-copy distillability have the same threshold $\alpha<-1/2$. The proofs use sharp partial-trace inequalities and have not been independently certified.
- Wu and Zou (submitted 31 July 2026) analyze the three-copy Werner endpoint and claim nonnegativity for positive-semidefinite rank-two coefficient operators, the normal rank-two sector and specified nonnormal cases ([arXiv:2608.02647](https://arxiv.org/abs/2608.02647)). This does not settle the full three-copy problem.`,
    residual: r`The general problem for $n\geq3$ copies remains open. Resolving the all-copy Werner question resolves E1.`,
    refs: [
      { label: "Pankowski, Piani, Horodecki, Horodecki, 'A few steps more towards NPT bound entanglement', IEEE Trans. Inf. Theory 56 (2010)", url: "https://arxiv.org/abs/0711.2613" },
      { label: "DiVincenzo, Shor, Smolin, Terhal & Thapliyal, 'Evidence for bound entangled states with negative partial transpose', PRA 61, 062312 (2000)", url: "https://doi.org/10.1103/PhysRevA.61.062312" },
      { label: "Fu, Gao & Park, 'A solution to 2-copy distillability of Werner states' (2026 preprint, v2)", url: "https://arxiv.org/abs/2607.21367v2" },
      { label: "Bharti, Gajjala & Haug, 'Two-copy nondistillability of Werner states: sharp partial-trace inequalities and finite-copy extensions' (2026 preprint)", url: "https://arxiv.org/abs/2607.24479" },
      { label: "Fraser, Huber, Pozsgay & Vona, 'On the two-copy distillability of Werner states and a new partial trace inequality' (2026 preprint)", url: "https://arxiv.org/abs/2607.24309" },
      { label: "Wu & Zou, 'Sharp Plucker Geometry for Three-Copy Werner Distillation' (2026 preprint)", url: "https://arxiv.org/abs/2608.02647" },
    ] },

  { id: "E3", cat: "entanglement", horizon: "incremental", status: "improved",
    reviewedAt: "2026-10-05",
    relations: [{ id: "E12", type: "related" }],
    evidence: [
      { kind: "preprint", role: "progress", summary: "Multipartite separability at constant Frobenius-norm accuracy; explicit classical input and quantum copy access have different resource bounds.", url: "https://arxiv.org/abs/2610.03637v1", date: "2026-10-02", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Sharp separability threshold in inverse temperature for bounded-overlap Pauli Hamiltonians; efficient sampling for fixed overlap degree and fixed relative margin below that threshold, not generic separability testing.", url: "https://arxiv.org/abs/2609.30149v1", date: "2026-09-24", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Accuracy-dependent lower bounds for a shared-feasible-region SDP model; not a lower bound on all algorithms, nor a new unconditional separation of QMA and QMA(2).", url: "https://arxiv.org/abs/2609.09033v1", date: "2026-09-08", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Randomized polynomial-time separability testing with a fixed constant Euclidean-distance promise gap; not exact or arbitrary-norm membership.", url: "https://arxiv.org/abs/2607.23773", date: "2026-07-26" }],
    provenance: [
      { summary: "The authors state that the classical algorithms were developed without AI. For the quantum algorithms they report ChatGPT assistance with arbitrary local dimensions and representation theory, and take responsibility for the paper.", url: "https://arxiv.org/html/2610.03637v1", version: "v1" },
      { summary: "Kiani credits ChatGPT 6 with the proof strategy and central arguments, refined through author feedback; he reports checking all proofs and responsibility for the paper.", url: "https://arxiv.org/html/2609.30149v1", version: "v1" },
      { summary: "Gharibian, Hecht and Rudolph disclose extensive, iterative generative-AI use in developing the proofs, including proposing and refining key proof ideas; they report critically evaluating, correcting and synthesizing the suggestions, writing the final exposition and taking full responsibility. They also report Lean proofs supporting the main results, which were not rebuilt here.", url: "https://arxiv.org/html/2609.09033v1", version: "v1" },
      { summary: "Malavolta attributes the main idea to himself with Michael Walter's feedback, and reports ChatGPT 5.5/5.6 assistance on technical reduction proofs. He states that he wrote the final manuscript and takes responsibility.", url: "https://arxiv.org/abs/2607.23773" }],
    title: "Effective separability criteria",
    statement: r`For rational finite-dimensional density matrices, identify structured families admitting efficient separability tests with a specified norm and promise gap, and bound the dimension and accuracy dependence of convergent hierarchies.`,
    definition: r`**Effective separability testing** asks for algorithms that decide whether a bipartite mixed state is separable, that is, a mixture of product states. The problem is fundamental but hard. PPT is necessary and sufficient for arbitrary states only in $2\times2$ and $2\times3$; higher dimensions admit PPT entanglement.

Appropriate weak-membership promise versions of separability are NP-hard; the norm, gap and input encoding matter. The classic hardness result is Gurvits, STOC 2003, [doi:10.1145/780542.780545](https://doi.org/10.1145/780542.780545).`,
    progress: r`- The Doherty–Parrilo–Spedalieri symmetric-extension hierarchy converges to the separable set, with SDP cost increasing with dimension and level ([arXiv:quant-ph/0308032](https://arxiv.org/abs/quant-ph/0308032)). Realignment, covariance-matrix criteria and witnesses provide useful one-sided tests. Low-rank and symmetric families admit stronger results.
- For Gaussian states, PPT is sufficient in one-mode-versus-many-mode and certain symmetric settings, but not in arbitrary bipartite mode configurations: Gaussian bound-entangled states exist ([arXiv:1612.05215](https://arxiv.org/abs/1612.05215)).
- Bakshi, Liu, Moitra and Tang (FOCS 2024) proved that Gibbs states of local Hamiltonians on bounded-degree interaction graphs are separable above a constant temperature, with efficient sampling of the product-state decomposition. This is a promise on the generating Hamiltonian and temperature, not a separability test for arbitrary input matrices ([arXiv:2403.16850](https://arxiv.org/abs/2403.16850)).
- Malavolta (July 2026) claims a randomized polynomial-time algorithm distinguishing separable density matrices from those at least a fixed constant $\eta>0$ from the separable set in Euclidean norm. The promise is essential: it does not give exact membership, vanishing-gap or arbitrary trace-distance tractability ([arXiv:2607.23773](https://arxiv.org/abs/2607.23773)).
- Gharibian, Hecht and Rudolph (8 September 2026, v1) bound the size of SDPs approximating separable-state optimization in the HNW extended-formulation model, where every objective shares a feasible region and an objective-independent product-state embedding. For $0<\theta<2/7$, sufficiently small error $a$ and large local dimension $d$, the claimed lower bound is $d^{c_\theta\min\{a^{-1/3},d^\theta\}}$. It is superpolynomial when $a=o(1)$, not automatically at fixed constant error. It restricts that SDP representation model, not every separability algorithm or every norm/promise formulation. The paper notes that concurrent quantum-oracle work already supersedes its approximate-disentangler application; its SDP bound is a separate contribution. Lean support is author-reported and has not been independently rebuilt ([arXiv:2609.09033](https://arxiv.org/abs/2609.09033v1)).
- Kiani (24 September 2026, v1), building on Bakshi et al., claims a sharp universal separability threshold in inverse temperature $\beta$ for Pauli Hamiltonians with coefficients bounded by one and term-overlap degree $\Delta\ge2$. At or below this threshold, Gibbs states decompose into product Pauli eigenstates. For fixed $\Delta$ and a fixed relative margin below the threshold, sampling is polynomial-time in system size and inverse trace-distance error. These guarantees apply at high physical temperature and do not give separability testing for arbitrary input states. See O10 for the preparation consequence ([arXiv:2609.30149](https://arxiv.org/abs/2609.30149v1)).
- Bernasconi and Malavolta (2 October 2026, v1) give multipartite weak-membership algorithms in Frobenius norm at fixed additive accuracy. With $k$ local factors of dimension $d$, the explicit-input runtime is $d^{O_\varepsilon(k)}$; a separate copy-access quantum algorithm has polynomial dependence on $k$ and $\log d$ at fixed accuracy. This is not efficient exact separability testing or a trace-norm guarantee at inverse-polynomial accuracy ([arXiv:2610.03637](https://arxiv.org/abs/2610.03637v1)).`,
    residual: r`The incremental target is a quantitative map of specified tractable families and certified hierarchy levels as functions of dimension and requested accuracy, rather than an undefined “maximal tractable class”. In every result above, the norm, the promise gap and the input access are essential.`,
    refs: [
      { label: "Martino Bernasconi, Giulio Malavolta, 'Polynomial-Time Algorithms for Nuclear Tensor Norms and Multipartite Separability' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.03637v1" },
      { label: "Kiani, 'Sharp universal death of entanglement threshold for Pauli Hamiltonians' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.30149v1" },
      { label: "Gharibian, Hecht & Rudolph, 'Semidefinite extension complexity of the separable set, with applications to approximate disentanglers' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.09033v1" },
      { label: "Bakshi, Liu, Moitra & Tang, 'High-Temperature Gibbs States are Unentangled and Efficiently Preparable', FOCS 2024", url: "https://arxiv.org/abs/2403.16850" },
      {"label":"Lami, Serafini & Adesso, 'Gaussian entanglement revisited' (published 2018)","url":"https://arxiv.org/abs/1612.05215"},
      { label: "Gurvits, 'Classical deterministic complexity of Edmonds' problem and quantum entanglement', STOC 2003", url: "https://doi.org/10.1145/780542.780545" },
      { label: "Doherty, Parrilo, Spedalieri, 'Complete family of separability criteria', PRA 69, 022308 (2004)", url: "https://arxiv.org/abs/quant-ph/0308032" },
      { label: "Malavolta, 'Quantum Separability in Polynomial Time' (2026 preprint)", url: "https://arxiv.org/abs/2607.23773" },
    ] },

  { id: "E4", cat: "entanglement", horizon: "incremental", status: "improved",
    relations: [{ id: "E5", type: "related" }, { id: "E11", type: "related" }],
    evidence: [{ kind: "preprint", role: "progress", summary: "Edge-coloured multigraph encoding of complete multiqubit orthogonal product bases; a complete colour-splitting tree characterizes perfect finite-round LOCC discrimination in this structured family, not membership of arbitrary maps in LOCC or its closure.", url: "https://arxiv.org/abs/2608.18421v2", date: "2026-08-31", version: "v2" }],
    title: "Effective membership in LOCC and its closure",
    statement: r`For finitely specified bipartite channels or instruments, develop certified $\varepsilon$-membership tests for the closure of LOCC in a stated operational norm, and distinguish this task from exact finite-round or unbounded-round LOCC implementability.`,
    definition: r`**LOCC membership** asks whether a given bipartite channel or instrument can be implemented, or approximated, by local operations and classical communication (LOCC). LOCC are the free operations of entanglement theory, but their geometry is subtle. LOCC is not closed, and separable operations can fail to be LOCC: the operational phenomenon of nonlocality without entanglement.

Chitambar, Leung, Mančinska, Ozols and Winter carefully distinguish bounded-round protocols, unbounded-round LOCC, its closure and separable operations; these distinctions must be fixed before membership is a well-defined task ([arXiv:1210.4583](https://arxiv.org/abs/1210.4583)). For channels one can use diamond-norm approximation; for instruments one must retain the classical outcome register.`,
    progress: r`- For pure bipartite state conversion, Nielsen's majorization criterion already gives an exact single-copy solution ([arXiv:quant-ph/9811053](https://arxiv.org/abs/quant-ph/9811053)).
- Zhao and Chen (August 2026) encode complete multiqubit orthogonal product bases as edge-coloured multigraphs and claim that a complete colour-splitting tree exactly characterizes perfect finite-round LOCC discrimination. Their algorithm constructs a protocol in this structured family; it is not a membership algorithm for arbitrary LOCC maps ([arXiv:2608.18421](https://arxiv.org/abs/2608.18421v2)).`,
    residual: r`Useful residual questions ask for certified approximation with a specified promise gap, structured instrument classes, and communication-round complexity. Exact membership and membership in the closure must not be interchanged.`,
    refs: [
      {"label":"Chitambar et al., 'Everything You Always Wanted to Know About LOCC', CMP 328 (2014)","url":"https://arxiv.org/abs/1210.4583"},
      { label: "Nielsen, 'Conditions for a class of entanglement transformations', PRL 83, 436 (1999)", url: "https://arxiv.org/abs/quant-ph/9811053" },
      { label: "Zhao & Chen, 'Multiqubit orthogonal product bases' (2026 preprint, v2)", url: "https://arxiv.org/abs/2608.18421v2" },
    ] },

  { id: "E5", cat: "entanglement", horizon: "programme", status: "improved",
    provenance: [
      { summary: "Takagi et al. attribute the core idea and initial proof to the authors and report ChatGPT 5.6 Sol and 6 Astra assistance finding and correcting technical mistakes, followed by author review.", url: "https://arxiv.org/html/2609.40215v1", version: "v1" },
      { summary: "Tirone et al. report an initial version completed without generative AI, followed by ChatGPT 5.5 assistance refining a proof; the authors report checking those refinements.", url: "https://arxiv.org/html/2609.40080v1", version: "v1" },
    ],
    evidence: [
      { kind: "preprint", role: "progress", summary: "Universal distillation of unknown states at their optimal asymptotic distillable rate; not a formula or positivity test for E_D.", url: "https://arxiv.org/abs/2609.40215v1", date: "2026-09-30", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Independent universal LOCC distillation result via tomography and local robustness in fixed finite dimension.", url: "https://arxiv.org/abs/2609.40080v1", date: "2026-09-30", version: "v1" },
    ],
    reviewedAt: "2026-10-05",
    relations: [{ id: "E6", type: "related" }, { id: "E9", type: "related" }, { id: "E11", type: "related" }],
    title: "Asymptotic mixed-state entanglement conversion",
    statement: r`For explicitly specified families of finite-dimensional bipartite mixed states $\rho,\sigma$, determine the optimal rate $R_{\rm LOCC}(\rho\to\sigma)$ with vanishing trace-distance error, without catalysts or auxiliary entanglement.`,
    definition: r`**The asymptotic conversion rate** $R_{\rm LOCC}(\rho\to\sigma)$ is the supremum of rates $r$ for which LOCC maps $\rho^{\otimes n}$ to $\sigma^{\otimes\lfloor rn\rfloor}$ with trace-distance error tending to zero. For entangled pure states this is the ratio of their entanglement entropies, with Bell pairs as a reversible currency.

For mixed states, the extreme conversions are distillation to Bell pairs at rate $E_D$ and formation from Bell pairs at cost $E_C$, both going back to Bennett, DiVincenzo, Smolin and Wootters, PRA 54, 3824 (1996), [doi:10.1103/PhysRevA.54.3824](https://doi.org/10.1103/PhysRevA.54.3824); the identity $E_C=E_F^\infty$ is due to Hayden, Horodecki and Terhal, J. Phys. A 34, 6891 (2001), [arXiv:quant-ph/0008134](https://arxiv.org/abs/quant-ph/0008134).`,
    progress: r`- Monotones give bounds on other rates, but general equality conditions and optimal protocols are not known. Established irreversible examples rule out simply extending the pure-state entropy-ratio law (see E6; review: [doi:10.1103/RevModPhys.81.865](https://doi.org/10.1103/RevModPhys.81.865)).
- Takagi et al. ([arXiv:2609.40215](https://arxiv.org/abs/2609.40215v1)) and Tirone et al. ([arXiv:2609.40080](https://arxiv.org/abs/2609.40080v1)) (30 September 2026, v1) independently announce universal LOCC distillation protocols attaining every rate below $E_D(\rho)$ from copies of an unknown finite-dimensional bipartite state. Prior knowledge of the input need not cost asymptotic rate. These existence results neither compute $E_D$ for arbitrary states nor prove that every NPT state has positive distillable entanglement.`,
    residual: r`Optimal general mixed-state conversion rates remain open. This is a programme of family-specific rate calculations and matching converses, not one conjecture covering every mixed-state pair. The ordinary unassisted LOCC convention is fixed here. Catalysts, correlated return and sublinear auxiliary resources define different rates and are treated separately in E11.`,
    refs: [
      { label: "Ryuji Takagi, Kaito Watanabe, Takaya Matsuura, Hayato Arai, Masahito Hayashi, 'Universal distillation of quantum entanglement' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.40215v1" },
      { label: "Salvatore Tirone, Francesco Anna Mele, Vittorio Giovannetti, Ludovico Lami, 'Universal Entanglement Distillation' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.40080v1" },
      { label: "Bennett, DiVincenzo, Smolin, Wootters, 'Mixed-state entanglement and quantum error correction', PRA 54, 3824 (1996)", url: "https://doi.org/10.1103/PhysRevA.54.3824" },
      { label: "Hayden, Horodecki & Terhal, 'The asymptotic entanglement cost of preparing a quantum state', J. Phys. A 34, 6891 (2001)", url: "https://arxiv.org/abs/quant-ph/0008134" },
      { label: "Horodecki, Horodecki, Horodecki & Horodecki, 'Quantum entanglement', Rev. Mod. Phys. 81, 865 (2009)", url: "https://doi.org/10.1103/RevModPhys.81.865" },
    ] },

  { id: "E6", cat: "entanglement", horizon: "incremental", status: "improved",
    reviewedAt: "2026-11-08",
    relations: [{ id: "E5", type: "parent" }, { id: "E9", type: "related" }, { id: "E11", type: "related" }],
    evidence: [
      { kind: "preprint", role: "progress", summary: "Very strong irreversibility: restoring reversibility incurs an error exponential in the number of copies, even for non-entangling operations.", url: "https://arxiv.org/abs/2607.27195v1", date: "2026-07-29", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Flower states: one ebit of distillable entanglement in every (even) local dimension, with a large gap to the LOCC entanglement cost.", url: "https://arxiv.org/abs/2608.02587v1", date: "2026-08-03", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Irreversibility persists for an explicit state under PPT operations with correlated catalysts; this is not an LOCC equality classification.", url: "https://arxiv.org/abs/2608.20063", date: "2026-08-20" }],
    provenance: [
      { summary: "Kondra et al. report that some technical proof details were developed with ChatGPT (GPT-5.6 Sol), with all output checked by the authors.", url: "https://arxiv.org/abs/2607.27195v1", version: "v1" },
      { summary: "Sen and Lami report using ChatGPT 5.5 for literature search and to complete the proof of one theorem.", url: "https://arxiv.org/abs/2608.02587v1", version: "v1" },
      { summary: "Ao, Philip and Streltsov report ChatGPT 5.6 assistance with editing, organization, references and exploration/verification of mathematical arguments, while asserting independent author review and responsibility.", url: "https://arxiv.org/abs/2608.20063" }],
    title: "Irreversibility of mixed-state entanglement",
    statement: r`Give a structural characterization of finite-dimensional bipartite states satisfying $E_C(\rho)=E_D(\rho)$ under ordinary asymptotic LOCC with vanishing error and no catalysts.`,
    definition: r`**Irreversibility of mixed-state entanglement** is the gap $E_C(\rho)>E_D(\rho)$ between the cost of forming a state from Bell pairs and the rate at which Bell pairs can be distilled back from it. Pure-state entanglement is reversible: entropy of entanglement governs both formation and distillation. Mixed-state irreversibility is established by explicit examples, including bound-entangled states with $E_D=0<E_C$.

It is not correct to treat every mixed state as irreversible: locally distinguishable flagged mixtures of suitable pure resources provide reversible mixed subclasses. Vidal and Cirac exhibited irreversible states and clarified the gap $E_C-E_D$ ([arXiv:quant-ph/0102036](https://arxiv.org/abs/quant-ph/0102036)).`,
    progress: r`- Lami and Regula proved an irreversibility theorem for entanglement manipulation, ruling out an entanglement “second law” under their operation and error hypotheses ([doi:10.1038/s41567-022-01873-9](https://doi.org/10.1038/s41567-022-01873-9)).
- Kondra, Brinster, Kampermann, Bruß and Wyderka (29 July 2026, v1) construct states for which any attempt to restore reversibility, even under non-entangling operations, incurs an error growing exponentially with the number of copies ([arXiv:2607.27195](https://arxiv.org/abs/2607.27195v1)).
- Sen and Lami (3 August 2026, v1) compute all main measures for “flower states”: distillable entanglement is one ebit for every (even) local dimension $2k$, while the LOCC entanglement cost is much larger ([arXiv:2608.02587](https://arxiv.org/abs/2608.02587v1)).
- Ao, Philip and Streltsov (August 2026) claim full additivity and strong superadditivity of regularized PPT relative entropy, and an explicit state with an irreversible formation–distillation gap even with correlated catalysts under PPT operations ([arXiv:2608.20063](https://arxiv.org/abs/2608.20063)).`,
    residual: r`All of these sharpen irreversibility examples; none gives the missing equality criterion for ordinary LOCC. The target is the boundary between reversible and irreversible states under the fixed convention, not merely another example of a gap. A complete characterization has no single yes/no resolution: progress is a larger certified reversible or irreversible class.

Changing the free operations changes the question: strict non-entangling, asymptotically non-entangling, PPT and LOCC conventions are not interchangeable. Results on entanglement “second laws” must retain their operation and error hypotheses.`,
    refs: [
      { label: "Kondra, Brinster, Kampermann, Bruß & Wyderka, 'Very Strong Irreversibility of Quantum Entanglement' (2026 preprint, v1) (found via the QIQCOP Zoo)", url: "https://arxiv.org/abs/2607.27195v1" },
      { label: "Sen & Lami, 'Entanglement of flower states' (2026 preprint, v1) (found via the QIQCOP Zoo)", url: "https://arxiv.org/abs/2608.02587v1" },
      { label: "Vidal & Cirac, 'Irreversibility in asymptotic manipulations of entanglement', PRL 86, 5803 (2001)", url: "https://arxiv.org/abs/quant-ph/0102036" },
      { label: "Lami & Regula, 'No second law of entanglement manipulation after all', Nat. Phys. 19 (2023)", url: "https://doi.org/10.1038/s41567-022-01873-9" },
      { label: "Ao, Philip & Streltsov, 'PPT Entanglement with Correlated Catalysis: Monotones and Irreversibility' (2026 preprint)", url: "https://arxiv.org/abs/2608.20063" },
    ] },

  { id: "E7", cat: "entanglement", horizon: "sharp",
    relations: [{ id: "E8", type: "related" }],
    title: "Minimal reversible entanglement-generating set",
    statement: r`For three fixed parties, does a finite set of pure resource states exist from which every finite-dimensional tripartite pure state can be reversibly generated by asymptotic LOCC with vanishing error?`,
    definition: r`**A minimal reversible entanglement-generating set (MREGS)** would be a finite set of multipartite pure states from which every pure state can be generated reversibly by asymptotic LOCC, using tensor products of its resources at asymptotic rates. For bipartite pure states the Bell pair is such a reversible currency.

Bennett, Popescu, Rohrlich, Smolin and Thapliyal introduced the multipartite programme ([arXiv:quant-ph/9908073](https://arxiv.org/abs/quant-ph/9908073)). Fixing the party number at three avoids conflating the question with an ever-growing number of laboratories.`,
    progress: r`- Acín, Vidal and Cirac established the inadequacy of the natural candidate consisting of three pairwise EPR resources and a GHZ state ([arXiv:quant-ph/0202056](https://arxiv.org/abs/quant-ph/0202056)). GHZ and pairwise entanglement have inequivalent reversible resource content; a list of familiar representatives is therefore not automatically a reversible generating set.`,
    residual: r`No finite MREGS is known even for three parties. Negative results under one-way communication, finite-copy exact conversion or other restricted operations do not by themselves exclude all finite asymptotic LOCC generating sets.`,
    refs: [
      {"label":"Acín, Vidal & Cirac, 'On the structure of a reversible entanglement generating set for three-partite states', QIC 3 (2003)","url":"https://arxiv.org/abs/quant-ph/0202056"},
      { label: "Bennett, Popescu, Rohrlich, Smolin, Thapliyal, 'Exact and asymptotic measures of multipartite pure-state entanglement', PRA 63, 012307 (2000)", url: "https://arxiv.org/abs/quant-ph/9908073" },
    ] },

  { id: "E8", cat: "entanglement", horizon: "programme", status: "improved",
    reviewedAt: "2026-10-26",
    relations: [{ id: "E7", type: "related" }, { id: "E5", type: "related" }],
    evidence: [
      { kind: "preprint", role: "progress", summary: "Positive-domination rigidity for finite-mode Gaussian states; stronger structured separability consequences, not a universal mixed-state classification. v2 (15 October 2026) reviewed; the abstract and stated applications are unchanged.", url: "https://arxiv.org/abs/2609.36336v2", date: "2026-10-15", version: "v2" },
      { kind: "preprint", role: "progress", summary: "Claimed collapse of partition mixing for finite-mode Gaussian targets, allowing non-Gaussian decompositions; does not extend to arbitrary mixed states.", url: "https://arxiv.org/abs/2609.10984v1", date: "2026-09-10", version: "v1" },
    ],
    provenance: [
      { summary: "The authors disclose GPT-5.6 Sol assistance with literature, proof auditing and drafting; they attribute the questions and arguments to themselves and report independent checking.", url: "https://arxiv.org/html/2609.10984v1", version: "v1" },
    ],
    title: "Multipartite entanglement classification",
    statement: r`For fixed party number, local dimensions and rank bounds, develop computable invariants and conversion criteria for multipartite states under a specified equivalence relation, distinguishing pure-state SLOCC orbits from mixed-state LOCC convertibility.`,
    definition: r`**Multipartite entanglement classification** sorts states of several parties into classes under a chosen equivalence relation. There is no single canonical classification independent of the allowed operations. Pure-state SLOCC equivalence, local-unitary equivalence, deterministic LOCC conversion and asymptotic resource conversion ask different questions.

The founding example is Dür, Vidal and Cirac's result that three qubits can be entangled in two inequivalent ways, GHZ and W ([arXiv:quant-ph/0005115](https://arxiv.org/abs/quant-ph/0005115)).`,
    progress: r`- For pure three-qubit states, SLOCC yields finitely many classes, including inequivalent GHZ and W classes (Dür, Vidal and Cirac, above).
- Four-qubit pure states already have infinitely many SLOCC classes; the Verstraete–Dehaene–De Moor–Verschelde classification organizes them into nine parameterized families, not nine equivalence classes ([arXiv:quant-ph/0109033](https://arxiv.org/abs/quant-ph/0109033)). Tensor algebra, orbit geometry and invariant theory describe small cases. Entanglement polytopes and tensor rank provide useful coarser structure.
- Yang et al. (10 September 2026, v1) claim that for a Gaussian state of finitely many bosonic modes, full inseparability is equivalent to genuine multipartite entanglement. More generally, a mixture over a finite family of separability partitions reduces to one fixed partition, even allowing non-Gaussian components and trace-norm closure. This distinguishes finite-mode Gaussian targets from arbitrary mixed states; it is not a general multipartite LOCC classification or a PPT criterion for every cut ([arXiv:2609.10984](https://arxiv.org/abs/2609.10984v1)).
- Shchukin and van Loock (28 September 2026, v1; v2 reviewed) claim a rigidity theorem: if a finite-mode Gaussian state dominates a nonzero positive operator separable across a fixed partition, it is itself separable across that partition. This implies that mixing finitely many separability partitions adds no Gaussian states, and rules out activation of genuine multipartite entanglement by identical copies of a biseparable Gaussian state. The theorem allows non-Gaussian decompositions but does not classify arbitrary non-Gaussian mixed states ([arXiv:2609.36336](https://arxiv.org/abs/2609.36336v2)).`,
    residual: r`Mixed-state classification requires its own rank, dimensional and operational hypotheses; pure-state examples do not settle it. The programme is to obtain computable invariants, complete criteria in selected families and algorithms with explicit costs, rather than a universal finite list for all systems.`,
    refs: [
      { label: "Evgeny Shchukin, Peter van Loock, 'Separability rigidity of Gaussian states under positive domination' (2026 preprint, v2)", url: "https://arxiv.org/abs/2609.36336v2" },
      { label: "Yang et al., 'Full Inseparability and Genuine Multipartite Entanglement Coincide for Finite-Mode Gaussian States' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.10984v1" },
      { label: "Dür, Vidal, Cirac, 'Three qubits can be entangled in two inequivalent ways', PRA 62, 062314 (2000)", url: "https://arxiv.org/abs/quant-ph/0005115" },
      { label: "Verstraete, Dehaene, De Moor, Verschelde, 'Four qubits can be entangled in nine different ways', PRA 65, 052112 (2002)", url: "https://arxiv.org/abs/quant-ph/0109033" },
    ] },

  { id: "E9", cat: "entanglement", horizon: "incremental", status: "improved",
    reviewedAt: "2026-11-08",
    relations: [{ id: "E5", type: "related" }, { id: "E6", type: "related" }, { id: "E10", type: "related" }, { id: "U4", type: "related" }],
    evidence: [
      { kind: "published", role: "progress", summary: "Efficient approximation of regularized relative entropies between structured sequences of sets, with convergence guarantees; certified evaluation for structured cases (IEEE Trans. Inf. Theory 72(4), 2330, April 2026; arXiv v2 of 4 June 2025 reviewed).", url: "https://arxiv.org/abs/2502.15659v2", date: "2025-06-04", version: "v2" },
      { kind: "preprint", role: "progress", summary: "Exact entanglement cost of every two-qubit Bell-diagonal state, equal to its entanglement of formation; new lower bounds for qudit isotropic states. A structured exact evaluation, not a general certified algorithm.", url: "https://arxiv.org/abs/2610.00187v1", date: "2026-09-17", version: "v1" },

      { kind: "preprint", role: "progress", summary: "Explicit asymptotic continuity bound for distillable entanglement, logarithmic in dimension, via an LOCC protocol interconverting nearby states at vanishing ebit cost. A continuity ingredient, not an algorithm with a certified stopping rule.", url: "https://arxiv.org/abs/2610.35722v1", date: "2026-10-26", version: "v1" },
    ],
    provenance: [
      { summary: "Fang states that OpenAI GPT-6 Astra was used to explore proof strategies, plot figures and support the writing, and that the AI-assisted material was verified.", url: "https://arxiv.org/abs/2610.00187v1", version: "v1" },

      { summary: "Schmitt and Sutter acknowledge GPT 6 Astra for assistance in developing the proof.", url: "https://arxiv.org/abs/2610.35722v1", version: "v1" },
    ],
    title: "Certified evaluation of regularized entanglement and correlation measures",
    statement: r`For each of $E_C$, $E_D$, $E_R^\infty$ and the total-correlation quantity $E_P^\infty$, determine whether rational finite-dimensional inputs admit two-sided approximation to any rational accuracy with a certified stopping rule, and separately identify efficient structured cases.`,
    definition: r`**Regularized entanglement and correlation measures** are defined by an asymptotic limit over copies. Entanglement cost is $E_C=E_F^\infty$; distillable entanglement $E_D$, regularized relative entropy $E_R^\infty$ and regularized entanglement of purification $E_P^\infty$ also involve many-copy optimization. Entanglement of purification measures total correlations and is not, in general, an LOCC entanglement monotone. The question is whether these numbers can be computed to any accuracy with a certified stopping rule.

Nonadditivity of entanglement of formation and related channel quantities, made famous by Hastings' superadditivity result ([arXiv:0809.3972](https://arxiv.org/abs/0809.3972)), invalidates naive single-copy replacements. It does not exclude every possible closed formula, nor establish Turing uncomputability.`,
    progress: r`- NP-hardness of finite-copy optimization is known for related quantities, for example quantum discord ([arXiv:1305.5941](https://arxiv.org/abs/1305.5941)). This is different from the absence of any terminating algorithm. Entangled states with zero distillable entanglement complicate structural criteria but do not themselves prove undecidability.
- Fang, Fawzi and Fawzi (arXiv 21 February 2025, v2 reviewed; published in IEEE Trans. Inf. Theory 72(4), April 2026, [doi:10.1109/TIT.2026.3661603](https://doi.org/10.1109/TIT.2026.3661603)) show that, under structural assumptions and with efficient descriptions of the sets involved, regularized relative entropies between sequences of sets can be approximated efficiently with convergence guarantees. Applications include resource-theoretic bounds. This gives certified evaluation for structured relative-entropy quantities; it does not cover $E_C$, $E_D$ or $E_P^\infty$ in general ([arXiv:2502.15659](https://arxiv.org/abs/2502.15659v2)).
- Beigi, Rubboli and Tomamichel (published 2026) give structural single-copy criteria for additivity of quantum relative-entropy optimizations. These can certify useful special cases; they do not provide a general computability theorem for all the quantities listed here ([arXiv:2507.05696](https://arxiv.org/abs/2507.05696)).
- Fang (17 September 2026, v1) determines the entanglement cost of every two-qubit Bell-diagonal state, in particular every qubit isotropic and Werner state, and shows that it equals the entanglement of formation. The proof combines log-Sobolev entropy bounds with an exact tensorization theorem of Dong et al. For qudit isotropic states it gives new lower bounds that do not close the gap for $d\ge3$. This settles $E_C$ for a family singled out in the QIQCOP Zoo; the higher-dimensional Werner and isotropic cases remain open ([arXiv:2610.00187](https://arxiv.org/abs/2610.00187v1)).
- Schmitt and Sutter (26 October 2026, v1) prove that $E_D$ is asymptotically continuous, with an explicit bound depending logarithmically on dimension. The proof is an explicit LOCC protocol converting either of two nearby states into the other at an ebit cost that vanishes with their trace distance. The bound has the same structure as known continuity bounds for entanglement cost and relative entropy of entanglement ([arXiv:2610.35722](https://arxiv.org/abs/2610.35722v1)).`,
    residual: r`Continuity allows approximation from rational inputs, but certified evaluation of $E_D$ still needs computable two-sided bounds that converge, which remain missing. The task must be specified quantity by quantity, with input encoding, additive accuracy and a two-sided certificate. Efficient algorithms, computable convergence rates and analytic formulas are distinct levels of success.`,
    refs: [
      { label: "Fang, Fawzi & Fawzi, 'Efficient approximation of regularized relative entropies and applications', IEEE Trans. Inf. Theory 72(4), 2330 (2026) (arXiv v2; found via the QIQCOP Zoo)", url: "https://arxiv.org/abs/2502.15659v2" },
      { label: "Fang, 'Entanglement cost of quantum depolarization' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.00187v1" },
      {"label":"Beigi, Rubboli & Tomamichel, 'Additivity of quantum relative entropies as a single-copy criterion', CMP 407, 134 (2026)","url":"https://arxiv.org/abs/2507.05696"},
      { label: "Hastings, 'Superadditivity of communication capacity using entangled inputs', Nat. Phys. 5 (2009)", url: "https://arxiv.org/abs/0809.3972" },
      { label: "Huang, 'Computing quantum discord is NP-complete', New J. Phys. 16 (2014)", url: "https://arxiv.org/abs/1305.5941" },
      { label: "Schmitt & Sutter, 'Distillable entanglement is continuous' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.35722v1" },
    ] },

  { id: "E10", cat: "entanglement", horizon: "sharp", status: "claimed-solved",
    lean: { url: "https://arxiv.org/html/2610.03630v1", note: "Canonical optimality and nonadditivity are formalized in Lean according to the authors; the formalization was not rebuilt here." },
    reviewedAt: "2026-10-05",
    relations: [{ id: "E9", type: "related" }],
    evidence: [
      { kind: "preprint", role: "claimed-solution", summary: "New von Neumann nonadditivity claim; Appendix D gives a counterexample to Lemma 2 of the earlier claimed proof. Independent assessment pending.", lean: true, url: "https://arxiv.org/abs/2610.03630v1", date: "2026-10-02", version: "v1" },
      { kind: "challenged", summary: "Earlier claimed proof of nonadditivity, challenged: Baghali Khanian and Negari give a counterexample to its Lemma 2 in arXiv:2610.03630v1, Appendix D. Retained as a historical claim, not supporting evidence for the current resolution.", url: "https://arxiv.org/abs/2609.29539v1", date: "2026-08-25", version: "v1" },
      { kind: "numerical", role: "progress", summary: "Werner-state calculations support nonadditivity but do not constitute a rigorously certified counterexample.", url: "https://arxiv.org/abs/1206.1307" }, { kind: "preprint", role: "progress", summary: "Rényi results for alpha below 1 and at least 2 do not settle ordinary entanglement of purification at alpha=1.", url: "https://arxiv.org/abs/2608.28897", date: "2026-08-28" }],
    provenance: [
      { summary: "Baghali Khanian and Negari report AI-assisted calculations and Lean formalization of canonical optimality and nonadditivity, with author checks of the theorem statements, axioms and assumptions. No model is named. The formalization was not rebuilt in this review.", url: "https://arxiv.org/html/2610.03630v1", version: "v1" },
      { summary: "The author reports AI use for code, calculations, mechanical proof steps and drafting under his direction, without naming a model. The supplied verification artifact was not run in this update.", url: "https://arxiv.org/html/2609.29539v1", version: "v1" },
    ],
    title: "Additivity of entanglement of purification",
    statement: r`For ordinary von Neumann entanglement of purification, prove $E_P(\rho\otimes\sigma)=E_P(\rho)+E_P(\sigma)$ for all finite-dimensional states, or give a rigorously certified counterexample.`,
    definition: r`**Entanglement of purification** $E_P$ is the minimum entanglement over purifications of a bipartite state. It measures quantum plus classical correlations and is not an entanglement monotone under LOCC. Its regularization governs formation of correlations with asymptotically vanishing communication, but evaluating that whole regularization is a separate task under E9.

Terhal, Horodecki, Leung and DiVincenzo introduced the quantity and established bounds ([arXiv:quant-ph/0202044](https://arxiv.org/abs/quant-ph/0202044)). Whether it is additive on tensor products has been open since. Holographic conjectures involving entanglement-wedge cross-sections provide additional motivation, not a resolution for arbitrary states.`,
    progress: r`- Chen and Winter supplied strong numerical evidence for nonadditivity on Werner states, together with rigorous structural results. Their numerical evidence is not an explicit rigorously proved counterexample ([arXiv:1206.1307](https://arxiv.org/abs/1206.1307)).
- Negari and Baghali Khanian (August 2026) claim Rényi nonadditivity for every $\alpha\in[0,1)$ using a classical two-qubit family, and additivity for $\alpha\in[2,\infty]$ within that family. These Rényi results do not resolve the ordinary $\alpha=1$ problem ([arXiv:2608.28897](https://arxiv.org/abs/2608.28897)).
- Krohn-Grimberghe (August 2026) claimed a certificate-based counterexample at singlet fraction $1/200$, with an [exact-rational verification artifact](https://doi.org/10.5281/zenodo.22097511) ([arXiv:2609.29539](https://arxiv.org/abs/2609.29539v1)). This earlier claim is now challenged: Appendix D of the paper below gives a counterexample to its Lemma 2, which breaks the lower-bound argument.`,
    claim: r`**Baghali Khanian and Negari, [“Entanglement of purification for Werner states: canonical purification and nonadditivity”](https://arxiv.org/abs/2610.03630v1)** (arXiv:2610.03630, v1).

What it claims:
- Canonical optimality of the purification for two-qubit Werner states when $1/64\le f\le1/4$.
- Nonadditivity of von Neumann entanglement of purification for Werner states with $1/64\le f<f_\ast\approx0.017086$, hence a counterexample to additivity.
- Its Appendix D also refutes Lemma 2 of Krohn-Grimberghe's earlier claimed proof (see Progress).

Caveats:
- Not peer reviewed; independent assessment is pending.
- The authors report AI-assisted calculations and a Lean formalization of canonical optimality and nonadditivity, without naming a model. The formalization has not been rebuilt here.`,
    residual: r`Even if the claim holds, the required finite copy number, a two-copy violation and the exact regularized value remain unresolved.`,
    refs: [
      { label: "Zahra Baghali Khanian, Amir-Reza Negari, 'Entanglement of purification for Werner states: canonical purification and nonadditivity' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.03630v1" },
      { label: "Krohn-Grimberghe, 'The entanglement of purification is not additive' (2026 preprint, v1; proof challenged by Baghali Khanian–Negari)", url: "https://arxiv.org/abs/2609.29539v1" },
      { label: "Krohn-Grimberghe, exact-rational verification artifact for entanglement-of-purification nonadditivity (historical artifact; underlying analytic lemma challenged)", url: "https://doi.org/10.5281/zenodo.22097511" },
      {"label":"Chen & Winter, 'Non-Additivity of the Entanglement of Purification (Beyond Reasonable Doubt)' (numerical evidence, 2012)","url":"https://arxiv.org/abs/1206.1307"},
      { label: "Terhal, Horodecki, Leung, DiVincenzo, 'The entanglement of purification', J. Math. Phys. 43, 4286 (2002)", url: "https://arxiv.org/abs/quant-ph/0202044" },
      { label: "Bagchi & Pati, 'Monogamy, polygamy, and other properties of entanglement of purification', PRA 91 (2015)", url: "https://doi.org/10.1103/PhysRevA.91.042323" },
      { label: "Negari & Baghali Khanian, 'Rényi Entanglement of Purification Is Non-additive' (2026 preprint)", url: "https://arxiv.org/abs/2608.28897" },
    ] },

  { id: "E11", cat: "entanglement", horizon: "incremental", status: "improved",
    reviewedAt: "2026-11-08",
    relations: [{ id: "E4", type: "related" }, { id: "E5", type: "related" }, { id: "E6", type: "related" }],
    evidence: [
      { kind: "preprint", role: "progress", summary: "Correlated-catalytic conversion, with arbitrarily small target error and exact catalyst-marginal return (catalyst dimension may depend on the error), is possible iff the marginal asymptotic rate is at least one, under general assumptions; under LOCC this fully characterizes conversion from any bipartite state to entangled pure targets via $E_D$. Correlated catalysts cannot raise $E_D$, distillable key or two-way private capacity.", url: "https://arxiv.org/abs/2611.06573v1", date: "2026-11-04", version: "v1" },
      { kind: "preprint", role: "progress", summary: "With correlated catalysis, the optimal asymptotic distillation fidelity at rate $R>E_D$ is $E_D/R$ for every distillable state, removing the strong converse; catalyst size requirements are characterized.", url: "https://arxiv.org/abs/2611.03148v1", date: "2026-11-02", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Monotones for PPT operations with correlated catalysts, and an irreversibility example. Because LOCC is contained in PPT operations, these also constrain correlated-catalytic LOCC conversions; no necessary-and-sufficient criterion follows. Cross-listed from E6.", url: "https://arxiv.org/abs/2608.20063", date: "2026-08-20" }],
    provenance: [
      { summary: "Ao, Philip and Streltsov report using ChatGPT for language editing, literature searches and discussions of mathematical arguments, and take full responsibility for the content.", url: "https://arxiv.org/abs/2611.06573v1", version: "v1" },
      { summary: "Masajada, Philip and Streltsov state that ChatGPT 6 Astra was used in preparing the manuscript and that they checked and verified all results.", url: "https://arxiv.org/abs/2611.03148v1", version: "v1" },
    ],
    title: "Entanglement catalysis",
    statement: r`For specified mixed or multipartite LOCC conversion families, characterize feasibility and catalyst cost separately for exact product return, exact marginal return with correlations, and approximate return with a stated error–dimension bound.`,
    definition: r`**An entanglement catalyst** is an auxiliary state that enables a conversion while being returned according to a specified convention. Exact uncorrelated return requires an output $\sigma\otimes\tau$ with the original catalyst $\tau$. Correlated catalysis may return only the marginal $\tau$, and approximate return allows a perturbation. These are inequivalent resource theories.

Jonathan and Plenio discovered exact catalysis for pure bipartite states, PRL 83, 3566 (1999), [doi:10.1103/PhysRevLett.83.3566](https://doi.org/10.1103/PhysRevLett.83.3566). Van Dam–Hayden embezzlement shows why unconstrained catalyst dimension and arbitrarily small return error can otherwise trivialize conversion obstructions.`,
    progress: r`- For pure bipartite states, catalytic majorization (trumping) criteria characterize the relevant Schmidt-vector conversions, including their support and strict-inequality conditions.
- Kondra, Datta and Streltsov's entropy criterion concerns approximate pure-bipartite conversion with the catalyst marginal returned and allowed output correlations, not arbitrary exact mixed-state or multipartite conversion ([arXiv:2102.11136](https://arxiv.org/abs/2102.11136)).
- Ao, Philip and Streltsov (August 2026) provide monotones and an irreversibility example under the larger class of PPT operations with correlated catalysts. Since every LOCC protocol is a PPT operation, their obstructions also apply to correlated-catalytic LOCC conversion. The same paper is recorded under E6, with its provenance; it is one advance cross-listed in two entries, not two independent results ([arXiv:2608.20063](https://arxiv.org/abs/2608.20063)).
- Masajada, Philip and Streltsov (2 November 2026, v1) show that correlated catalysis removes the strong converse for distillation: above $E_D$ the optimal fidelity is $E_D/R$ ([arXiv:2611.03148](https://arxiv.org/abs/2611.03148v1)).
- Ao, Philip and Streltsov (4 November 2026, v1) prove that, under general operational assumptions, correlated-catalytic conversion with arbitrarily small target error and exact catalyst-marginal return is possible exactly when the marginal asymptotic conversion rate is at least one; the catalyst dimension may depend on the target error. Under LOCC, this fully characterizes correlated-catalytic conversion from an arbitrary bipartite state to an entangled pure state in terms of distillable entanglement. This settles the marginal-return-with-correlations convention for that mixed-to-pure family. They also show that correlated catalysts cannot increase distillable entanglement or key, and so cannot activate bound entanglement ([arXiv:2611.06573](https://arxiv.org/abs/2611.06573v1)).`,
    residual: r`Exact product return, mixed targets, multipartite families and explicit catalyst-dimension trade-offs remain open. Useful benchmarks fix source/target families, trace-distance accuracy, allowed correlations and catalyst dimension or entanglement cost. Necessary-and-sufficient criteria in these controlled settings remain the incremental target.`,
    refs: [
      {"label":"Kondra, Datta & Streltsov, 'Catalytic transformations of pure entangled states', PRL 127, 150503 (2021)","url":"https://arxiv.org/abs/2102.11136"},
      { label: "Jonathan & Plenio, 'Entanglement-assisted local manipulation of pure quantum states', PRL 83, 3566 (1999)", url: "https://doi.org/10.1103/PhysRevLett.83.3566" },
      { label: "Ao, Philip & Streltsov, 'PPT Entanglement with Correlated Catalysis: Monotones and Irreversibility' (2026 preprint)", url: "https://arxiv.org/abs/2608.20063" },
      { label: "Ao, Philip & Streltsov, 'Equivalence of Correlated Catalytic and Marginal Asymptotic Transformations in Quantum Resource Theories' (2026 preprint, v1)", url: "https://arxiv.org/abs/2611.06573v1" },
      { label: "Masajada, Philip & Streltsov, 'Correlated Catalysis Removes the Strong Converse for Entanglement Distillation' (2026 preprint, v1)", url: "https://arxiv.org/abs/2611.03148v1" },
    ] },

  { id: "E12", cat: "entanglement", horizon: "incremental", status: "improved",
    reviewedAt: "2026-10-26",
    relations: [{ id: "E3", type: "related" }, { id: "E14", type: "related" }],
    provenance: [
      { summary: "Morelli states that the main idea and key proof steps are the author's and that most technical parts were done with Claude Opus 5.5.", url: "https://arxiv.org/html/2610.28162v1", version: "v1" },
      { summary: "Rubin and DePrince state that the key components are human work but that some key proofs, including the reduction of degree-4 to degree-2 multipliers, were derived by OpenAI's Astra-6 Pro model, with Gemini models used in early discussions and writing; they take responsibility for correctness.", url: "https://arxiv.org/html/2610.20737v2", version: "v2" },
    ],
    evidence: [
      { kind: "preprint", role: "progress", summary: "Dimension-free family of linear inequalities on the local spectra of pure tripartite states, complete for equal local dimension at most four; a structural result on one-body pure-state compatibility, not an efficient algorithm for overlapping succinct marginals.", url: "https://arxiv.org/abs/2610.28162v1", date: "2026-10-20", version: "v1" },
      { kind: "numerical", role: "progress", summary: "Open-source instantiation of a weighted sum-of-squares hierarchy for fermionic two-body N-representability, demonstrated on a three-fermion Richardson Hamiltonian; the hierarchy's levels grow with the system and no polynomial-time guarantee is claimed.", url: "https://arxiv.org/abs/2610.20737v2", date: "2026-10-21", version: "v2" },
      { kind: "preprint", role: "progress", summary: "Efficient first-order algorithms for suitable moment-polytope objectives; arbitrary overlapping-marginal compatibility remains a different computational problem.", url: "https://arxiv.org/abs/2609.06633v1", date: "2026-09-06", version: "v1" },
    ],
    title: "Efficient and structured quantum marginal compatibility",
    statement: r`For overlapping local density matrices supplied succinctly, obtain certified compatibility algorithms and hierarchy bounds for specified families, distinguishing mixed global states from pure global states and fixing an inverse-polynomial or other explicit promise gap.`,
    definition: r`**The quantum marginal problem** asks whether prescribed reduced states come from one common global state. It includes important versions of fermionic N-representability in quantum chemistry, but particle statistics, pure versus mixed global states and input representation change the problem.

Known complete formulations must be distinguished from efficient algorithms. For an explicitly represented finite global density matrix, mixed-state compatibility is semidefinite feasibility: positivity, unit trace and linear partial-trace constraints. Its matrix size can grow exponentially with the number of sites. Standard reference for the representation-theoretic side: Klyachko ([arXiv:quant-ph/0511102](https://arxiv.org/abs/quant-ph/0511102)).`,
    progress: r`- Klyachko and related representation-theoretic work characterize one-body pure-state spectral compatibility.
- Appropriate promise versions with succinct overlapping local inputs are QMA-complete: consistency of local density matrices of qubits (Liu, under Turing reductions, [arXiv:quant-ph/0604166](https://arxiv.org/abs/quant-ph/0604166)) and fermionic N-representability (Liu, Christandl and Verstraete, [arXiv:quant-ph/0609125](https://arxiv.org/abs/quant-ph/0609125)). This does not mean no complete mathematical criterion exists; it obstructs a generic efficient algorithm.
- Yu, Simnacher, Wyderka, Nguyen and Gühne established a complete SDP hierarchy for arbitrary pure-state marginal compatibility ([Nature Communications 2021](https://www.nature.com/articles/s41467-020-20799-5)).
- Doğan, Sakabe and Walter (6 September 2026, v1) introduce Hadamard mirror descent with convergence guarantees for suitable convex objectives over moment polytopes. Applications include efficient first-order computation of quantum functionals and related tensor parameters on entanglement polytopes, without an explicit facet list. This concerns the stated representation-theoretic optimization problems and their input models; it is not an efficient solution to arbitrary succinct overlapping-marginal compatibility or generic N-representability ([arXiv:2609.06633](https://arxiv.org/abs/2609.06633v1)).
- Morelli (20 October 2026, v1) gives a family of linear inequalities on the local spectra of pure three-party states that holds in every finite dimension, with the number of inequalities growing with dimension; for equal local dimension at most four they generate the complete set of eigenvalue inequalities. This is progress on the one-body pure-state problem of Klyachko type, not on succinct overlapping marginals ([arXiv:2610.28162](https://arxiv.org/abs/2610.28162v1)).
- Rubin and DePrince (v2, 21 October 2026) release an explicit open-source instantiation of a weighted sum-of-squares hierarchy for fermionic two-body N-representability, with nullspace constraints cancelling higher-body terms, and recover an exact three-fermion Richardson ground energy numerically. The hierarchy remains exponential in the worst case, consistent with QMA-hardness; it is a constructive tool, not an efficient general algorithm ([arXiv:2610.20737](https://arxiv.org/abs/2610.20737v2)).`,
    residual: r`The residual programme is quantitative convergence, certified finite-level tests and tractable structures beyond known one-body cases, for succinct overlapping inputs with an explicit promise gap.`,
    refs: [
      { label: "Morelli, 'Dimension-free marginal inequalities for pure three-party states' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.28162v1" },
      { label: "Rubin & DePrince, 'A constructive solution to the n-representability problem' (2026 preprint, v2)", url: "https://arxiv.org/abs/2610.20737v2" },
      { label: "Doğan, Sakabe & Walter, 'Convex optimization on moment polytopes: Hadamard mirror descent and efficient algorithms for quantum functionals and other tensor parameters' (2026 preprint, v1)", url: "https://arxiv.org/abs/2609.06633v1" },
      {"label":"Yu et al., 'A complete hierarchy for the pure state marginal problem', Nature Communications (2021)","url":"https://www.nature.com/articles/s41467-020-20799-5"},
      { label: "Klyachko, 'Quantum marginal problem and N-representability', J. Phys. Conf. Ser. 36 (2006)", url: "https://arxiv.org/abs/quant-ph/0511102" },
      { label: "Liu, 'Consistency of Local Density Matrices is QMA-complete', RANDOM 2006", url: "https://arxiv.org/abs/quant-ph/0604166" },
      { label: "Liu, Christandl, Verstraete, 'Quantum computational complexity of the N-representability problem', PRL 98, 110503 (2007)", url: "https://arxiv.org/abs/quant-ph/0609125" },
    ] },

  { id: "E13", cat: "entanglement", horizon: "programme",
    relations: [{ id: "E12", type: "related" }],
    title: "Quantum entropy cone",
    statement: r`For $n\geq4$, characterize the closure of von Neumann entropy vectors over arbitrary finite local dimensions; as a sharp subquestion, determine whether a new universal unconstrained linear inequality exists beyond the basic quantum entropy inequalities.`,
    definition: r`**The quantum entropy cone** is the closure of the set of entropy vectors of $n$-party states over all finite local dimensions, where the entropy vector records $S(\rho_I)$ for every nonempty subset $I$. Restricting dimension, requiring exact realizability or restricting to special states gives a different set.

The basic inequalities are nonnegativity, subadditivity, strong subadditivity and weak monotonicity. The question is whether further inequalities are needed. Standard reference: Pippenger, “The inequalities of quantum information theory”, IEEE Trans. Inf. Theory 49 (2003), [doi:10.1109/TIT.2003.809569](https://doi.org/10.1109/TIT.2003.809569).`,
    progress: r`- For up to three parties, the basic inequalities characterize the closed cone.
- Classical entropy vectors already have independent non-Shannon inequalities for four parties; this classical result does not transfer directly to quantum entropy vectors.
- For quantum states, nontrivial constrained inequalities have long been established by Linden–Winter ([arXiv:quant-ph/0406162](https://arxiv.org/abs/quant-ph/0406162)) and Cadney–Linden–Winter. Thus the unresolved sharp subquestion is about universal unconstrained linear inequalities, not the existence of any constrained inequality.
- Recent work on the tip of the cone further distinguishes exact entropy-vector realizability from closure ([doi:10.1103/PhysRevLett.131.240201](https://doi.org/10.1103/PhysRevLett.131.240201)). Holographic inequalities concern a special state class, not arbitrary states.`,
    residual: r`A new independent universal inequality would be a major advance but would not by itself characterize the entire cone. Complete characterization is therefore labeled a programme.

A concrete unconstrained benchmark, listed in the QIQCOP Zoo: does the four-party Zhang–Yeung non-Shannon inequality hold for von Neumann entropies of every finite-dimensional state? Either a proof for all density operators or a rigorously certified violating state would decide it; numerical minimization alone is a search tool.`,
    refs: [
      {"label":"He, Hubeny & Rota, 'Inner bounding the quantum entropy cone with subadditivity and subsystem coarse grainings', PRA 109, 052407 (2024)","url":"https://doi.org/10.1103/PhysRevA.109.052407"},
      {"label":"Christandl, Durhuus & Wolff, 'Tip of the Quantum Entropy Cone', PRL 131, 240201 (2023)","url":"https://doi.org/10.1103/PhysRevLett.131.240201"},
      { label: "Pippenger, 'The inequalities of quantum information theory', IEEE Trans. Inf. Theory 49 (2003)", url: "https://doi.org/10.1109/TIT.2003.809569" },
      { label: "Linden & Winter, 'A new inequality for the von Neumann entropy', Comm. Math. Phys. 259 (2005)", url: "https://arxiv.org/abs/quant-ph/0406162" },
    ] },

  { id: "E14", cat: "entanglement", horizon: "incremental", status: "improved",
    reviewedAt: "2026-11-08",
    relations: [{ id: "N1", type: "related" }, { id: "E12", type: "related" }],
    evidence: [
      { kind: "preprint", role: "progress", summary: "Reduction theorem for stabilizer AME states in composite dimension: obstructions at a prime-power factor propagate.", url: "https://arxiv.org/abs/2603.13442v2", date: "2026-03-23", version: "v2" },
      { kind: "preprint", role: "progress", summary: "No AME canonical graph states of 4n qudits in even local dimension; combined with the prime-power reduction this excludes stabilizer AME(4,6).", url: "https://arxiv.org/abs/2603.18193v3", date: "2026-09-28", version: "v3" },
{ kind: "preprint", role: "progress", summary: "Claimed completion of the seven-party existence row: AME(7,d) exactly for d at least 3.", url: "https://arxiv.org/abs/2608.01011", date: "2026-08-02" }, { kind: "preprint", role: "progress", summary: "Explicit code constructions for five previously unresolved parameter pairs.", url: "https://arxiv.org/abs/2608.05781", date: "2026-08-06" }, { kind: "preprint", lean: true, role: "progress", summary: "Lean 4 proof that an AME(4,6) state exists (the golden AME state of Rather et al., PRL 128, 080507), linked to the Formal Conjectures statement of IQOQI problem 35 by a merged pull request; exact arithmetic, no sorry. GitHub, not peer reviewed; the build was not rerun here.", url: "https://github.com/google-deepmind/formal-conjectures/pull/7502", date: "2026-10-25" }],
    provenance: [{ summary: "Shi et al. disclose GPT-5.6 assistance with the odd-q AME(7,2q) construction and state that they verified it independently.", url: "https://arxiv.org/abs/2608.01011" }, { summary: "Bevins and Bidav disclose extensive author-directed Claude Fable 5 and ChatGPT 5.6 Sol use for search, code, exact checks and manuscript preparation, and state that they reviewed the constructions and text.", url: "https://arxiv.org/abs/2608.05781" },
      { summary: "The contributor of the Lean proof of AME(4,6) existence (GitHub account zblore) states in the pull request that Claude Code was used to draft the Lean and that he checked every line himself.", url: "https://github.com/google-deepmind/formal-conjectures/pull/7502" }],
    title: "Absolutely maximally entangled states",
    statement: r`Extend the certified existence/nonexistence table for $\mathrm{AME}(n,d)$ with explicit constructions or impossibility proofs for unresolved parameter pairs, keeping minimal-support and unrestricted AME questions distinct.`,
    definition: r`**An absolutely maximally entangled state** $\mathrm{AME}(n,d)$ is a pure state of $n$ qudits of local dimension $d$ with maximally mixed reductions on every set of at most half of the parties. Such perfect tensors connect secret sharing, quantum error correction and quantum maximum-distance-separable codes.

Goyeneche, Alsina, Latorre, Riera and Życzkowski linked AME states to combinatorial designs and multiunitary matrices ([arXiv:1506.08857](https://arxiv.org/abs/1506.08857)). Classical MDS codes and index-one orthogonal arrays construct minimal-support AME states; they are not equivalent to unrestricted AME existence. “Planar maximally entangled” imposes a different collection of cuts and is not a synonym for AME.`,
    progress: r`- For qubits, AME states exist for $n=2,3,5,6$, not for $n=4$ or $n\geq7$ (seven qubits: Huber, Gühne and Siewert, [arXiv:1608.06228](https://arxiv.org/abs/1608.06228)). Many higher-dimensional constructions come from classical MDS codes and multiunitary matrices.
- The established $\mathrm{AME}(4,6)$ construction illustrates the distinction from classical orthogonal-Latin-square obstructions ([arXiv:2104.05122](https://arxiv.org/abs/2104.05122)). The four-party row is known for all $d\geq3$.
- The existence of $\mathrm{AME}(4,6)$ is reported as formally verified in Lean 4: on 25 October 2026 a proof was linked to the statement in DeepMind's Formal Conjectures repository. The contributor reports that it checks the golden AME state of Rather et al. by exact arithmetic in $\mathbb Z[e^{i\pi/10}]$, with no unproved step ("sorry") and only the standard axioms, and that Claude Code was used to draft the Lean; the build was not rerun here ([pull request](https://github.com/google-deepmind/formal-conjectures/pull/7502), [proof repository](https://github.com/zblore/fc-ame-4-6)).
- Cha (13 March 2026; v2 of 23 March 2026 reviewed) proves that a stabilizer $\mathrm{AME}(n,D)$ state in composite dimension yields stabilizer AME states for every sub-product of the prime-power factors of $D$, so an obstruction at one prime power propagates ([arXiv:2603.13442](https://arxiv.org/abs/2603.13442v2)).
- Wójcik, Makuta, Bruzda and Augusiak (18 March 2026; v3 of 28 September 2026 reviewed) show that AME states of $4n$ qudits of even local dimension are never canonical graph states over $\mathbb Z_d$; with Cha's reduction this excludes all pure stabilizer $\mathrm{AME}(4,6)$ states ([arXiv:2603.18193](https://arxiv.org/abs/2603.18193v3)).
- Shi, Zhang, Zhao and Li (August 2026) claim completion of the seven-party row, with existence exactly for $d\geq3$ ([arXiv:2608.01011](https://arxiv.org/abs/2608.01011)).
- Bevins and Bidav (August 2026) report explicit constructions for $(12,5)$, $(18,11)$, $(18,13)$, $(17,11)$ and $(17,13)$ ([arXiv:2608.05781](https://arxiv.org/abs/2608.05781)).`,
    residual: r`These manuscript results close particular cells, not the full diagram. A parameter table should track proof status and the support restriction for each cell rather than label the entire classification one sharp conjecture. A real $\mathrm{AME}(4,6)$, and the eight-ququart $\mathrm{AME}(8,4)$, remain open; both are separate QIQCOP Zoo entries.`,
    refs: [
      { label: "Cha, 'Non-existence of stabilizer absolutely maximally entangled states across infinitely many configurations' (2026 preprint, v2)", url: "https://arxiv.org/abs/2603.13442v2" },
      { label: "Wójcik, Makuta, Bruzda & Augusiak, 'On Non-Existence of Absolutely Maximally Entangled Canonical Graph States in Even Local Dimensions' (2026 preprint, v3)", url: "https://arxiv.org/abs/2603.18193v3" },
      {"label":"Rather et al., 'Thirty-six entangled officers of Euler', PRL 128, 080507 (2022)","url":"https://arxiv.org/abs/2104.05122"},
      { label: "Formal Conjectures (Google DeepMind), Lean statement of IQOQI problem 35 and linked AME(4,6) existence proof (October 2026)", url: "https://github.com/google-deepmind/formal-conjectures/blob/main/FormalConjectures/OpenQuantumProblems/35.lean" },
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
    definition: r`**Entanglement of identical particles.** For distinguishable systems, entanglement is relative to a subsystem structure. Identical particles do not have physically labeled particle tensor factors in the same sense, so antisymmetrization or symmetrization alone is not an operationally extractable resource.

Standard review: Benatti, Floreanini, Franchini and Marzolino, Physics Reports 878 (2020), [arXiv:2007.06253](https://arxiv.org/abs/2007.06253).`,
    progress: r`- Several consistent frameworks already exist. Mode entanglement uses accessible mode algebras and may be restricted by particle-number superselection. Particle-based correlation measures answer other questions.
- Wiseman–Vaccaro and related work quantify resource restrictions in concrete tasks ([arXiv:quant-ph/0210002](https://arxiv.org/abs/quant-ph/0210002)).
- Benatti, Floreanini, Franchini and Marzolino propose operational consistency criteria and argue that a mode-based approach satisfies them; the literature does not simply lack a framework.`,
    residual: r`A unique universal definition, independent of laboratories, observables and free operations, is not a meaningful sharp target. The remaining work is operational comparison under explicit assumptions, now part of F7's subsystem-structure programme.`,
    refs: [
      {"label":"Benatti et al., 'Entanglement in indistinguishable particle systems', Physics Reports 878 (2020)","url":"https://arxiv.org/abs/2007.06253"},
      { label: "Wiseman & Vaccaro, 'Entanglement of indistinguishable particles shared between two parties', PRL 91, 097902 (2003)", url: "https://arxiv.org/abs/quant-ph/0210002" },
    ] },
  { id: "E16", cat: "entanglement", horizon: "sharp", status: "claimed-solved",
    reviewedAt: "2026-10-17",
    title: "Entangled states with zero distillable secret key",
    relations: [{ id: "E1", type: "related" }, { id: "C5", type: "related" }, { id: "C12", type: "related" }],
    provenance: [
      { summary: "OpenAI lists itself as author and states that an unreleased internal model produced the manuscript collection. The family's Lean formalization covers the PPT-composition counterexamples; the zero-key statement is outside it. Supplied exact-arithmetic scripts check only finite arithmetic components. This is OpenAI's account.", url: `${OAI}lean/docs/272.md` },
    ],
    evidence: [
      { kind: "preprint", role: "claimed-solution", summary: "Claimed explicit entangled state on $\\mathbb C^{10}\\otimes\\mathbb C^{10}$ with $K_D=0$ against admitted LOCC protocols, including all finite two-way protocols with a purifying eavesdropper; OpenAI GitHub manuscript, pending assessment.", url: `${OAI}preprints/Entanglement-with-zero-distillable-secret-key-in-local-dimension-ten-September-27-2026/paper.pdf`, date: "2026-10-06", version: "v1" },
      { kind: "published", role: "progress", summary: "The 2026 resource theory of quantum secret key explicitly treats the existence of entangled zero-key states as unresolved.", url: "https://doi.org/10.22331/q-2026-05-06-2098", date: "2026-05-06" }],
    statement: r`Does there exist a finite-dimensional bipartite entangled state $\rho$ with $K_D(\rho)=0$, when key is distilled by LOCC with authenticated public communication and an adversary holds a purification?`,
    definition: r`**Distillable secret key** $K_D$ is the asymptotic rate of shared classical bits that are uniform and independent of an adversary, distilled by LOCC with authenticated public communication. The question asks whether this quantity is faithful on entangled bipartite states: does every entangled state contain some distillable secrecy?

Distillable entanglement implies distillable key, but the converse fails: Horodecki et al. showed that PPT bound-entangled states can have positive key, PRL 94, 160502 (2005), [doi:10.1103/PhysRevLett.94.160502](https://doi.org/10.1103/PhysRevLett.94.160502). Consequently the absence of distillable entanglement does not establish zero key, and the NPT bound-entanglement conjecture E1 is a different problem. The question is problem 24 of the Krüger–Werner collection of open problems (2005), now the [IQOQI Vienna list](https://oqp.iqoqi.oeaw.ac.at/secret-key-from-all-entangled-states/) (“Secret key from all entangled states”). Calling this version “mathematical bound key” avoids silently identifying it with other conjectures involving a positive key-formation cost, whose definition requires additional care.`,
    progress: r`- Horodecki, Sikorski, Das and Wilde's published 2026 resource theory of quantum secret key explicitly allows for the unresolved possibility of entangled zero-key states ([doi:10.22331/q-2026-05-06-2098](https://doi.org/10.22331/q-2026-05-06-2098)).`,
    claim: r`**OpenAI, [“Entanglement with zero distillable secret key in local dimension ten”](${OAI}preprints/Entanglement-with-zero-distillable-secret-key-in-local-dimension-ten-September-27-2026/paper.pdf)** (OpenAI Math Release on GitHub, not on arXiv).

What it claims:
- An explicit entangled state on $\mathbb C^{10}\otimes\mathbb C^{10}$, with no product vector in its range, has $K_D=0$.
- The converse bounds the error of any single output key bit below by a constant, for every admitted protocol on any number of copies. Admitted protocols include ordinary finite two-way LOCC with authenticated public communication, local auxiliaries and private randomness, plus specified countable processes; Eve holds a purification and the full public record.
- The state is the normalized Choi matrix of a composition of two PPT maps, which is also claimed to disprove the PPT-squared conjecture (C12).

Caveats:
- OpenAI lists itself as author and states that an unreleased internal model produced the manuscript collection.
- The zero-key theorem is not Lean-formalized; the family's Lean formalization covers only the PPT-composition counterexamples. Supplied exact-arithmetic scripts check only finite arithmetic components.
- Not peer reviewed. Marked “Claimed solved” pending independent assessment.`,
    residual: r`A proof that $K_D$ is positive for every entangled state, or one explicit entangled state with a rigorous zero-key converse against arbitrary LOCC protocols, resolves this sharp question. No finite-copy failure or numerical lack of a protocol establishes the required asymptotic zero.`,
    refs: [
      { label: "OpenAI, 'Entanglement with zero distillable secret key in local dimension ten' (OpenAI Math Release manuscript, dated 27 September 2026; public 6 October 2026)", url: `${OAI}preprints/Entanglement-with-zero-distillable-secret-key-in-local-dimension-ten-September-27-2026/paper.pdf` },
      { label: "Horodecki, Sikorski, Das & Wilde, 'Cost of quantum secret key', Quantum 10, 2098 (2026)", url: "https://doi.org/10.22331/q-2026-05-06-2098" },
      { label: "Horodecki et al., 'Secure key from bound entanglement', PRL 94, 160502 (2005)", url: "https://doi.org/10.1103/PhysRevLett.94.160502" },
    ] },

  { id: "E17", cat: "entanglement", horizon: "sharp",
    reviewedAt: "2026-11-08",
    title: "Distillable entanglement of the antisymmetric state",
    statement: r`For $d\ge3$ let $\rho_{\rm as}^{(d)}=\frac{2}{d(d-1)}P_{\rm as}$ be the normalized projector onto the antisymmetric subspace of $\mathbb C^d\otimes\mathbb C^d$. Determine its LOCC distillable entanglement $E_D(\rho_{\rm as}^{(d)})$ exactly, starting with $d=3$, and decide whether $d\,E_D(\rho_{\rm as}^{(d)})$ converges as $d\to\infty$, and to what value.`,
    definition: r`**The antisymmetric state** $\rho_{\rm as}^{(d)}$, the normalized projector onto the antisymmetric subspace of $\mathbb C^d\otimes\mathbb C^d$, is the standard example of extreme irreversibility: its entanglement cost stays bounded below for all $d$, while its distillable entanglement vanishes as $d\to\infty$.

The key reference is Christandl, Schuch and Winter, “Entanglement of the Antisymmetric State”, Comm. Math. Phys. 311 (2012), [arXiv:0910.4151](https://arxiv.org/abs/0910.4151). Related: E6 (irreversibility).`,
    progress: r`- Its entanglement cost is one ebit at $d=3$ (Yura, [arXiv:quant-ph/0302163](https://arxiv.org/abs/quant-ph/0302163)).
- $E_D>0$ since the state is one-copy distillable. For $d=3$ the bounds are roughly $1/3\le E_D\le\log_2(5/3)$; the logarithmic negativity ([arXiv:quant-ph/0102117](https://arxiv.org/abs/quant-ph/0102117)) and the Rains bound ([arXiv:quant-ph/0008047](https://arxiv.org/abs/quant-ph/0008047)) give upper bounds. The PPT-operation relaxation is known exactly, $\log_2(1+2/d)$.
- Christandl, Schuch and Winter proved that its distillable key, hence $E_D$, is $O(1/d)$, while its entanglement cost stays bounded below ([arXiv:0910.4151](https://arxiv.org/abs/0910.4151)).
- Wang and Duan established strict PPT irreversibility for every rank-two state supported on the $3\otimes3$ antisymmetric subspace; this does not include $\rho_{\rm as}^{(3)}$ itself, which has rank three ([arXiv:1606.09421](https://arxiv.org/abs/1606.09421)).
- Kondra, Brinster, Kampermann, Bruß and Wyderka (29 July 2026, v1) build analytically solvable families from antisymmetric states that show exponential strong-converse irreversibility under PPT operations. Their statements concern cost and error exponents, and the LOCC analogues are left open; the vanishing-error LOCC rate asked here is not evaluated ([arXiv:2607.27195](https://arxiv.org/abs/2607.27195v1)).`,
    residual: r`A complete answer gives an LOCC protocol and a matching converse for some $d$, starting with $d=3$; the asymptotic behaviour of $d\,E_D$, which is bounded above by $d\log_2(1+2/d)$ but whose convergence is not established in the sources cited here, is a separate sharp target.`,
    evidence: [
      { kind: "published", role: "progress", summary: "Distillable key, hence distillable entanglement, of the antisymmetric state is O(1/d), while its entanglement cost stays bounded below (Comm. Math. Phys. 311, 2012).", url: "https://arxiv.org/abs/0910.4151", date: "2012-04-01" },
    ],
    relations: [{ id: "E6", type: "related" }, { id: "E9", type: "related" }],
    refs: [
      { label: "Kondra, Brinster, Kampermann, Bruß & Wyderka, 'Very Strong Irreversibility of Quantum Entanglement' (2026 preprint, v1) (found via the QIQCOP Zoo)", url: "https://arxiv.org/abs/2607.27195v1" },
      { label: "Christandl, Schuch & Winter, 'Entanglement of the Antisymmetric State', Comm. Math. Phys. 311 (2012)", url: "https://arxiv.org/abs/0910.4151" },
      { label: "Yura, 'Entanglement Cost of Three-Level Antisymmetric States', J. Phys. A 36 (2003)", url: "https://arxiv.org/abs/quant-ph/0302163" },
      { label: "Rains, 'A semidefinite program for distillable entanglement', IEEE Trans. Inf. Theory 47 (2001)", url: "https://arxiv.org/abs/quant-ph/0008047" },
      { label: "Vidal & Werner, 'A computable measure of entanglement', PRA 65 (2002)", url: "https://arxiv.org/abs/quant-ph/0102117" },
      { label: "Wang & Duan, 'Irreversibility of Asymptotic Entanglement Manipulation Under Quantum Operations Completely Preserving Positivity of Partial Transpose', PRL 119 (2017)", url: "https://arxiv.org/abs/1606.09421" },
    ] },

  { id: "E18", cat: "entanglement", horizon: "sharp", status: "claimed-solved",
    reviewedAt: "2026-11-08",
    title: "Bipartite bound information",
    statement: r`Is there a classical tripartite distribution $P_{XYZ}$ with intrinsic information $I(X;Y\downarrow Z)>0$ but zero secret-key rate $S(X;Y\|Z)=0$ under public two-way communication — the classical analogue of bound entanglement?`,
    definition: r`**Bound information** would be classical correlations that cost secrecy to create but from which no secret key can be distilled, by analogy with bound entanglement. Distributions obtained by measuring bound entangled states are natural candidates.

Gisin and Wolf asked whether it exists ([arXiv:quant-ph/0005042](https://arxiv.org/abs/quant-ph/0005042)). The question is listed as problem 47 in the IQOQI Vienna list (Christandl).`,
    progress: r`- Renner and Wolf showed that the gap between the cost of forming correlations and the key that can be extracted from them can be strict for related quantities.
- Acín, Cirac and Masanes proved that multipartite bound information exists and can be activated ([arXiv:quant-ph/0311064](https://arxiv.org/abs/quant-ph/0311064v1)).`,
    claim: r`**Pauwels, Gisin and Renner, [“Bipartite Bound Information Exists”](https://arxiv.org/abs/2607.25838v2)** (arXiv preprint, v2 of 8 September 2026; v1 of 28 July 2026).

What it claims:
- An explicit source of two bits and a trit (Alice and Bob each hold a bit, Eve a trit) with zero secret-key rate under public two-way communication and positive intrinsic information (their Theorem 1). This is bipartite bound information, answering the Gisin–Wolf question.
- The example sits in a two-parameter family with the same properties.
- The distributions obtained by measuring the bound entangled states that motivated the original conjecture, in the standard basis, have no bound information; suitable measurements of purifications of separable states do.

Caveats:
- Not peer reviewed, and no independent assessment was found. Hence “Claimed solved” rather than “Solved”.
- The authors report that the construction emerged from an exploratory dialogue with ChatGPT (GPT-5.6 Sol), whose decisive contribution was to point them to a proposition of Gohari, Günlü and Kramer.`,
    residual: r`If the claim holds, the existence question is settled. Whether bipartite bound information can be activated, as in the multipartite case, remains open, and the paper proposes its examples as test cases. Quantum key from entangled states is the separate question E16.`,
    evidence: [
      { kind: "preprint", role: "claimed-solution", summary: "Explicit two-bit-and-trit source with zero secret-key rate and positive intrinsic information (Theorem 1); bipartite bound information exists. Not peer reviewed.", url: "https://arxiv.org/abs/2607.25838v2", date: "2026-09-08", version: "v2" },
      { kind: "published", role: "progress", summary: "Multipartite bound information exists and can be activated (PRL 92, 107903).", url: "https://arxiv.org/abs/quant-ph/0311064v1", date: "2003-11-11", version: "v1" },
    ],
    provenance: [
      { summary: "Pauwels, Gisin and Renner state that the construction emerged from an extended exploratory dialogue with ChatGPT (GPT-5.6 Sol, July 2026), which they directed to test conjectures, search for counterexamples and check calculations; its decisive contribution was identifying Proposition 1 of Gohari, Günlü and Kramer.", url: "https://arxiv.org/html/2607.25838v2", version: "v2" },
    ],
    relations: [{ id: "E16", type: "related" }, { id: "E1", type: "related" }],
    refs: [
      { label: "Pauwels, Gisin & Renner, 'Bipartite Bound Information Exists' (2026 preprint, v2)", url: "https://arxiv.org/abs/2607.25838v2" },
      { label: "Gisin & Wolf, 'Linking Classical and Quantum Key Agreement: Is There “Bound Information”?', CRYPTO 2000", url: "https://arxiv.org/abs/quant-ph/0005042" },
      { label: "Acín, Cirac & Masanes, 'Multipartite Bound Information exists and can be activated', PRL 92 (2004)", url: "https://arxiv.org/abs/quant-ph/0311064" },
      { label: "IQOQI Vienna Open Quantum Problems, problem 47: 'Is there bound information?' (M. Christandl)", url: "https://oqp.iqoqi.oeaw.ac.at/is-there-bound-information" },
    ] },

  { id: "E19", cat: "entanglement", horizon: "sharp", status: "improved",
    reviewedAt: "2026-11-08",
    title: "Separability from spectrum: absolutely separable versus absolutely PPT",
    statement: r`Call a bipartite state on $\mathbb C^m\otimes\mathbb C^n$ absolutely separable if $U\rho U^\dagger$ is separable for every global unitary $U$, and absolutely PPT if every $U\rho U^\dagger$ has positive partial transpose. Are the two sets equal for all $m,n$? In particular, decide the qutrit–qudit case $m=3$.`,
    definition: r`**An absolutely separable state** remains separable under every global unitary, so its separability is determined by its spectrum alone. Whether separability can be read from the spectrum was asked by Knill ([IQOQI problem 15](https://oqp.iqoqi.oeaw.ac.at/separability-from-spectrum/)).

The absolutely PPT states are characterized by explicit linear matrix inequalities on the eigenvalues (Hildebrand), so equality of the two sets would give a complete spectral criterion for absolute separability.`,
    progress: r`- Equality holds for all qubit–qudit systems: Verstraete, Audenaert and De Moor for $2\otimes2$; Johnston for $2\otimes n$ ([arXiv:1309.2006](https://arxiv.org/abs/1309.2006)).
- Arunachalam, Johnston and Russo showed that many standard criteria (range, realignment, Choi-type and Breuer–Hall maps) cannot detect entanglement in absolutely PPT states, and that the two properties coincide for isotropic states ([arXiv:1405.5853](https://arxiv.org/abs/1405.5853)).
- In the symmetric subspace, the analogous statement fails (Louvet et al., PRA 111, 042418 (2025), [arXiv:2411.16461](https://arxiv.org/abs/2411.16461)).
- Ahiable, Kothakonda and Winter (4 August 2026; v2 of 18 September 2026 reviewed) study the geometry of the spectra of absolutely separable and absolutely PPT states. They give a permutation-symmetric reformulation of the absolute PPT criterion and show that the absolutely PPT spectra form a spectrahedron for all $m\le n$. The equality question for $m\ge3$ is left open ([arXiv:2608.03390](https://arxiv.org/abs/2608.03390v2)).
- Tran (31 October 2026, v1) proves that the maximal purity of absolutely separable and absolutely PPT states coincides for every $3\otimes n$ system, $n\ge3$, and equals $\max\{(3n+8)/(3n+2)^2,\,3/(8n)\}$. This confirms for $m=3$ the inscribed-polytope purity conjecture of Ahiable, Kothakonda and Winter ([arXiv:2611.01306](https://arxiv.org/abs/2611.01306v1)).
- A second paper by the same author (1 November 2026, v1) proves equality of the two purity maxima on $m\otimes n$, $n\ge m\ge3$, when $n\ge2m^2-4$ ($m$ even) or $n\ge2m^2-m-4$ ($m$ odd). For $m=3$ this is $n\ge11$, so this purity theorem adds nothing to the qutrit case; the two papers are not independent confirmations. It also disproves the Ahiable–Kothakonda–Winter purity conjecture for every $m\ge10$ (at $n=4m-2$ and $n=4m$), and shows that the inner absolutely PPT polytope consists of absolutely separable spectra, a new linear sufficient condition for absolute separability ([arXiv:2611.01492](https://arxiv.org/abs/2611.01492v1)).
- Equal purity maxima are necessary for equality of the two sets but not sufficient. Neither paper is peer reviewed.`,
    residual: r`The general question, already open for $3\otimes3$, remains open: the 2026 results give equal purity maxima and a new sufficient condition for absolute separability, not equality of the two sets in any dimension with $m\ge3$.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Geometry of absolutely separable and absolutely PPT spectra; absolutely PPT spectra form a spectrahedron; equality for m>=3 left open.", url: "https://arxiv.org/abs/2608.03390v2", date: "2026-09-18", version: "v2" },
      { kind: "preprint", role: "progress", summary: "Maximum purity of absolutely separable and absolutely PPT states coincides in every qutrit–qudit system $3\\otimes n$, $n\\ge3$; equal maxima, not equal sets.", url: "https://arxiv.org/abs/2611.01306v1", date: "2026-10-31", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Purity maxima of absolutely PPT and absolutely separable states coincide for $n\\ge2m^2-4$ ($m$ even) or $n\\ge2m^2-m-4$ ($m$ odd; $n\\ge11$ for $m=3$); disproves the Ahiable–Kothakonda–Winter purity conjecture for $m\\ge10$; inner absolutely PPT polytope is absolutely separable; exact spectral volumes. Same author as arXiv:2611.01306.", url: "https://arxiv.org/abs/2611.01492v1", date: "2026-11-01", version: "v1" },
      { kind: "published", role: "progress", summary: "In the symmetric subspace, symmetric absolutely PPT does not imply symmetric absolute separability (PRA 111, 042418).", url: "https://arxiv.org/abs/2411.16461v2", date: "2025-04-15", version: "v2" },
    ],
    provenance: [
      { summary: "Tran states that ChatGPT 5.6 Sol (OpenAI) was used to perform symbolic computations and simplify some mathematical arguments, and ChatGPT 6 to improve the exposition; computations were cross-checked with Mathematica, and the author verified all mathematical content and takes full responsibility.", url: "https://arxiv.org/abs/2611.01306v1", version: "v1" },
      { summary: "Tran's second paper carries the same statement: ChatGPT 5.6 Sol (OpenAI) for symbolic computations and simplifying some mathematical arguments, ChatGPT 6 for the exposition, cross-checks with Mathematica, and author verification of all mathematical content.", url: "https://arxiv.org/abs/2611.01492v1", version: "v1" },
    ],
    relations: [{ id: "E3", type: "related" }],
    refs: [
      { label: "Ahiable, Kothakonda & Winter, 'The geometry of absolute separability and other convex matrix properties from spectrum' (2026 preprint, v2) (found via the QIQCOP Zoo)", url: "https://arxiv.org/abs/2608.03390v2" },
      { label: "Kuś & Życzkowski, 'Geometry of entangled states', PRA 63 (2001)", url: "https://arxiv.org/abs/quant-ph/0006068" },
      { label: "Johnston, 'Separability from Spectrum for Qubit-Qudit States', PRA 88 (2013)", url: "https://arxiv.org/abs/1309.2006" },
      { label: "Arunachalam, Johnston & Russo, 'Is absolute separability determined by the partial transpose?', QIC 15 (2015)", url: "https://arxiv.org/abs/1405.5853" },
      { label: "Louvet, Serrano-Ensástiga, Bastin & Martin, 'Nonequivalence between absolute separability and positive partial transposition in the symmetric subspace', PRA 111, 042418 (2025)", url: "https://arxiv.org/abs/2411.16461" },
      { label: "Tran, 'Maximum purity of absolutely separable and absolutely PPT states in qutrit--qudit systems' (2026 preprint, v1)", url: "https://arxiv.org/abs/2611.01306v1" },
      { label: "Tran, 'Purity maxima, absolute separability, and spectral volumes of absolutely PPT states' (2026 preprint, v1)", url: "https://arxiv.org/abs/2611.01492v1" },
      { label: "IQOQI Vienna Open Quantum Problems, problem 15: 'Separability from spectrum' (E. Knill)", url: "https://oqp.iqoqi.oeaw.ac.at/separability-from-spectrum/" },
    ] },

  { id: "E20", cat: "entanglement", horizon: "sharp", status: "improved",
    reviewedAt: "2026-11-08",
    title: "Lockability of distillable entanglement and distillable key",
    statement: r`For a finite-dimensional state $\rho_{AaB}$ in which $a$ is a qubit held by Alice, let $\Delta_E(\rho)=E(\rho_{Aa:B})-E(\rho_{A:B})$ be the loss of an entanglement quantity $E$ when $a$ is discarded. Is $\sup_\rho\Delta_E(\rho)$ finite (a dimension-independent constant) or infinite, for (i) $E=E_D$, the two-way LOCC distillable entanglement, and (ii) $E=K_D$, the two-way distillable secret key with an eavesdropper holding a purification (AB-locking)? A uniform bound, or one explicit family with unbounded loss, settles each case.`,
    definition: r`**A lockable entanglement measure** can drop by an arbitrarily large amount when one party loses a single qubit; a drop from order $\log d$ to nearly zero is one way to exhibit this. Horodecki, Horodecki, Horodecki and Oppenheim showed that entanglement of formation, entanglement cost and logarithmic negativity are lockable, that every convex, asymptotically discontinuous measure of at most logarithmic size is lockable, and that the relative entropy of entanglement is not, since it drops by at most two bits per lost qubit (PRL 94, 200501 (2005), [arXiv:quant-ph/0404096](https://arxiv.org/abs/quant-ph/0404096)). Christandl and Winter added squashed entanglement ([arXiv:quant-ph/0501090](https://arxiv.org/abs/quant-ph/0501090)).

The two operational rates, distillable entanglement and distillable key, are the cases left open. This is [IQOQI problem 25](https://oqp.iqoqi.oeaw.ac.at/lockable-entanglement-measures/) (P. Horodecki, 2005).`,
    progress: r`- One-way distillable entanglement is lockable, as a consequence of monogamy of entanglement; the two-way question is stated as open in the Horodeckis' review (Rev. Mod. Phys. 81, 865 (2009), Sec. XVIII.A, [arXiv:quant-ph/0702225](https://arxiv.org/abs/quant-ph/0702225)).
- Distillable key cannot be locked by removing a qubit from the eavesdropper (E-locking): Christandl, Ekert, Horodecki, Horodecki, Oppenheim and Renner show that protocols using pre-shared key can be converted into protocols without it, which rules this out (TCC 2007, [arXiv:quant-ph/0608199](https://arxiv.org/abs/quant-ph/0608199)). The case where Alice or Bob loses the qubit (AB-locking) is open, as is its classical key-agreement analogue (review above).
- Horodecki, Studziński, Kostecki, Sakarya and Yang prove that the two-way distillable key of irreducible private states is not lockable (PRA 104, 052422 (2021), [arXiv:2107.10737](https://arxiv.org/abs/2107.10737)). This covers one structured family, not all states.
- The flower states that lock entanglement cost and squashed entanglement do not lock $E_D$: Sen and Lami (3 August 2026, v1) prove that their distillable entanglement is exactly one ebit in every (even) local dimension, so the loss is at most one ebit ([arXiv:2608.02587](https://arxiv.org/abs/2608.02587v1)).
- The general sufficient criterion for locking (convexity plus asymptotic discontinuity) cannot apply to $E_D$: Schmitt and Sutter (26 October 2026, v1) prove that $E_D$ is asymptotically continuous ([arXiv:2610.35722](https://arxiv.org/abs/2610.35722v1)). Continuity does not by itself rule out locking, since entanglement of formation is asymptotically continuous and lockable.`,
    residual: r`Both questions remain open; the recorded progress excludes one candidate family and one general mechanism for $E_D$, and settles $K_D$ for irreducible private states only. A non-lockability theorem for $E_D$ needs a converse argument that survives the loss of a qubit for arbitrary protocols; a locking example needs a family with a provably unbounded loss of distillable entanglement after discarding one qubit, which is hard because upper bounds on $E_D$ such as relative entropy of entanglement are themselves non-lockable. Locking by measuring the qubit, rather than discarding it, is a related but distinct variant.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Flower states, the standard locking family, have distillable entanglement exactly one ebit in every (even) local dimension, so they cannot lock E_D.", url: "https://arxiv.org/abs/2608.02587v1", date: "2026-08-03", version: "v1" },
      { kind: "published", role: "progress", summary: "The two-way distillable key of irreducible private states is not lockable (PRA 104, 052422).", url: "https://arxiv.org/abs/2107.10737" },
      { kind: "published", role: "progress", summary: "Distillable key is not lockable by removing a qubit from the eavesdropper (E-locking); AB-locking is not addressed.", url: "https://arxiv.org/abs/quant-ph/0608199" },
      { kind: "published", role: "progress", summary: "Entanglement of formation, entanglement cost and logarithmic negativity are lockable; relative entropy of entanglement is not (PRL 94, 200501).", url: "https://arxiv.org/abs/quant-ph/0404096" },
    ],
    provenance: [
      { summary: "Sen and Lami report using ChatGPT 5.5 for literature search and to complete the proof of one theorem.", url: "https://arxiv.org/abs/2608.02587v1", version: "v1" },
      { summary: "Schmitt and Sutter acknowledge GPT 6 Astra for assistance in developing the proof.", url: "https://arxiv.org/abs/2610.35722v1", version: "v1" },
    ],
    relations: [{ id: "E16", type: "related" }, { id: "E9", type: "related" }, { id: "E6", type: "related" }, { id: "E18", type: "related" }],
    refs: [
      { label: "K. Horodecki, M. Horodecki, P. Horodecki & Oppenheim, 'Locking entanglement measures with a single qubit', PRL 94, 200501 (2005)", url: "https://arxiv.org/abs/quant-ph/0404096" },
      { label: "Christandl & Winter, 'Uncertainty, Monogamy, and Locking of Quantum Correlations', IEEE Trans. Inf. Theory 51, 3159 (2005)", url: "https://arxiv.org/abs/quant-ph/0501090" },
      { label: "R. Horodecki, P. Horodecki, M. Horodecki & K. Horodecki, 'Quantum entanglement', Rev. Mod. Phys. 81, 865 (2009)", url: "https://arxiv.org/abs/quant-ph/0702225" },
      { label: "Christandl, Ekert, M. Horodecki, P. Horodecki, Oppenheim & Renner, 'Unifying classical and quantum key distillation', TCC 2007, LNCS 4392", url: "https://arxiv.org/abs/quant-ph/0608199" },
      { label: "K. Horodecki, Studziński, Kostecki, Sakarya & Yang, 'Upper bounds on the leakage of private data and operational approach to markovianity', PRA 104, 052422 (2021)", url: "https://arxiv.org/abs/2107.10737" },
      { label: "Sen & Lami, 'Entanglement of flower states' (2026 preprint, v1)", url: "https://arxiv.org/abs/2608.02587v1" },
      { label: "Schmitt & Sutter, 'Distillable entanglement is continuous' (2026 preprint, v1)", url: "https://arxiv.org/abs/2610.35722v1" },
      { label: "IQOQI Vienna Open Quantum Problems, problem 25: 'Lockable entanglement measures' (P. Horodecki)", url: "https://oqp.iqoqi.oeaw.ac.at/lockable-entanglement-measures/" },
    ] },

  { id: "E21", cat: "entanglement", horizon: "sharp", status: "claimed-solved",
    reviewedAt: "2026-11-20",
    title: "Gaussian optimality of the entanglement of formation",
    statement: r`For every bipartite Gaussian state $\rho_V$ of finitely many bosonic modes ($m$ modes for Alice, $n$ for Bob) with covariance matrix $V$, prove $E_F(\rho_V)=E_F^{G}(V)$, where $E_F^{G}$ restricts the convex roof to ensembles of pure Gaussian states; or exhibit one Gaussian state for which a non-Gaussian pure-state ensemble achieves a strictly smaller average entanglement.`,
    definition: r`**The Gaussian entanglement of formation** $E_F^{G}(V)$ is the smallest average entanglement over decompositions of a Gaussian state into pure Gaussian states. Wolf, Giedke, Krüger, Werner and Cirac showed that the mixing distribution can then be taken Gaussian, so $E_F^{G}$ reduces to an optimization over covariance matrices, and that it upper-bounds the true entanglement of formation $E_F$ (PRA 69, 052320 (2004), [arXiv:quant-ph/0306177](https://arxiv.org/abs/quant-ph/0306177)). Equality would make the entanglement of formation of Gaussian states a finite-dimensional matrix problem; with additivity, it would also give their entanglement cost.

This is [IQOQI problem 29](https://oqp.iqoqi.oeaw.ac.at/entanglement-of-formation-for-gaussian-states/) (O. Krüger, 2005).`,
    progress: r`- Giedke, Wolf, Krüger, Werner and Cirac proved equality for symmetric two-mode Gaussian states (PRL 91, 107901 (2003), [arXiv:quant-ph/0304042](https://arxiv.org/abs/quant-ph/0304042)).
- Marian and Marian claimed the result for arbitrary two-mode states by constructing the optimal Gaussian decomposition (PRL 101, 220403 (2008), [arXiv:0809.0321](https://arxiv.org/abs/0809.0321)); the proof was later judged incomplete, its optimality against non-Gaussian ensembles being assumed rather than proved (Akbari-Kourbolagh and Alijanzadeh-Boura, p. 4194, as reported on the IQOQI page; Adesso 2026). Ivan and Simon reduced the two-mode question to an extremality conjecture for a generalized EPR observable ([arXiv:0808.1658](https://arxiv.org/abs/0808.1658)), and Akbari-Kourbolagh and Alijanzadeh-Boura argued the general two-mode case from it (Quantum Inf. Process. 14, 4179 (2015), [arXiv:1402.3321](https://arxiv.org/abs/1402.3321)). Adesso (2026) states that this argument proves the conjecture only under an extra condition on the Schmidt coefficients. The IQOQI page lists this paper as proving the two-mode case; Adesso disputes that.
- Adesso (3 August 2026; v3 of 15 October 2026 reviewed) claims equality for every two-mode Gaussian state, via a sharp affine inequality between entanglement and a generalized EPR observable valid for all pure two-mode states, Gaussian or not. He also claims additivity of $E_F$ on arbitrary tensor products of two-mode Gaussian states, hence $E_C=E_F=E_F^{G}$ for them, closed-form entanglement costs of thermal-loss, thermal-amplifier and additive-noise channels, and an extension to bisymmetric multimode states, which reduce to a two-mode core ([arXiv:2608.01909](https://arxiv.org/abs/2608.01909v3)). Not peer reviewed. The author provides Lean 4 certificates for the finite-dimensional, algebraic and real-analytic steps of Theorems 1 and 2 ([repository](https://github.com/gerardo-adesso/gaussian-eof)); this is a partial formalization and was not rebuilt here.`,
    claim: r`Gao and Adesso, [“Entanglement cost and classical capacity of multimode Gaussian states and channels”](https://arxiv.org/abs/2611.22915v1) (17 November 2026, v1), Theorem 1, claim $E_C(\rho_V)=E_F(\rho_V)=E_F^G(V)$ for every finite-energy bosonic Gaussian state on any finite multimode bipartition. They also claim strong superadditivity, tensor-product additivity, and Gaussian minimality of $E_F$ and $E_C$ at fixed covariance, including comparison with non-Gaussian states. The proof combines geodesic convexity of pure Gaussian entanglement with an unrestricted relative-entropy inequality (Proposition 2 and Appendices C–D). The latter uses and strengthens interpolation results from OpenAI's entropy photon-number manuscript. This covers the general multimode question stated here. The full text and appendices were read for scope; the proof and its external inputs have not been independently audited. No full Lean formalization is asserted here.`,
    residual: r`Independent assessment of the multimode proof and its supporting relative-entropy and interpolation arguments. The finite-energy, finite-mode bosonic question is claimed resolved; infinitely many modes and fermionic Gaussian states are separate questions. Efficient evaluation of the covariance minimum, finite-copy preparation and practical collective decoding remain further tasks.`,
    evidence: [
      { kind: "preprint", role: "claimed-solution", summary: "Theorem 1 claims Gaussian optimality for every finite-energy bosonic Gaussian state on arbitrary finite multimode bipartitions, with E_C = E_F = E_F^G, strong superadditivity and tensor additivity. General multimode resolution, pending independent assessment; no full Lean badge.", url: "https://arxiv.org/abs/2611.22915v1", date: "2026-11-17", version: "v1" },
      { kind: "preprint", role: "progress", summary: "Claims E_F equals the Gaussian entanglement of formation for every two-mode Gaussian state, additivity on tensor products of two-mode Gaussian states (so E_C = E_F), and an extension to bisymmetric multimode states; general multimode states left open. Author-provided Lean 4 certificates cover only the finite-dimensional, algebraic and real-analytic steps (partial formalization, not rebuilt here). Not peer reviewed.", url: "https://arxiv.org/abs/2608.01909v3", date: "2026-10-15", version: "v3" },
      { kind: "published", role: "progress", summary: "General two-mode argument resting on the Ivan–Simon extremality conjecture; according to Adesso (2026) it proves that conjecture only under an additional condition (Quantum Inf. Process. 14, 4179).", url: "https://arxiv.org/abs/1402.3321" },
      { kind: "published", role: "progress", summary: "Equality for symmetric two-mode Gaussian states (PRL 91, 107901).", url: "https://arxiv.org/abs/quant-ph/0304042" },
    ],
    provenance: [
      { summary: "Gao and Adesso state that OpenAI and Anthropic AI tools assisted mathematical development, literature searches, numerical methods, analytic checks and manuscript preparation; the authors retain responsibility for the results and final manuscript.", url: "https://arxiv.org/abs/2611.22915v1", version: "v1" },
      { summary: "Adesso acknowledges substantive AI use: ChatGPT (GPT 5.6 Sol) contributed to the affine supporting-line formulation of Theorem 1, the geometric isotonic compression and the identification of the closing log-Sobolev inequality; the proof of Theorem 2 (additivity) was developed with ChatGPT (GPT 6 Astra) and independently verified with Claude (Opus 5.5). He states that he directed the research and checked every step.", url: "https://arxiv.org/html/2608.01909v3", version: "v3" },
    ],
    relations: [{ id: "E9", type: "related" }, { id: "C10", type: "related" }],
    refs: [
      { label: "Gao & Adesso, 'Entanglement cost and classical capacity of multimode Gaussian states and channels' (2026 preprint, v1)", url: "https://arxiv.org/abs/2611.22915v1" },
      { label: "Adesso, 'Optimality of Gaussian Entanglement of Formation' (2026 preprint, v3)", url: "https://arxiv.org/abs/2608.01909v3" },
      { label: "Adesso, Lean 4 certificates for Theorems 1 and 2 of 'Optimality of Gaussian Entanglement of Formation' (GitHub, 2026; partial formalization)", url: "https://github.com/gerardo-adesso/gaussian-eof" },
      { label: "Wolf, Giedke, Krüger, Werner & Cirac, 'Gaussian entanglement of formation', PRA 69, 052320 (2004)", url: "https://arxiv.org/abs/quant-ph/0306177" },
      { label: "Giedke, Wolf, Krüger, Werner & Cirac, 'Entanglement of formation for symmetric Gaussian states', PRL 91, 107901 (2003)", url: "https://arxiv.org/abs/quant-ph/0304042" },
      { label: "Marian & Marian, 'Entanglement of formation for an arbitrary two-mode Gaussian state', PRL 101, 220403 (2008)", url: "https://arxiv.org/abs/0809.0321" },
      { label: "Ivan & Simon, 'Entanglement of formation for Gaussian states' (2008 preprint)", url: "https://arxiv.org/abs/0808.1658" },
      { label: "Akbari-Kourbolagh & Alijanzadeh-Boura, 'On the entanglement of formation of two-mode Gaussian states: a compact form', Quantum Inf. Process. 14, 4179 (2015)", url: "https://arxiv.org/abs/1402.3321" },
      { label: "Tserkis, Onoe & Ralph, 'Quantifying entanglement of formation for two-mode Gaussian states', PRA 99, 052337 (2019)", url: "https://arxiv.org/abs/1903.09961" },
      { label: "IQOQI Vienna Open Quantum Problems, problem 29: 'Entanglement of formation for Gaussian states' (O. Krüger)", url: "https://oqp.iqoqi.oeaw.ac.at/entanglement-of-formation-for-gaussian-states/" },
    ] },

  { id: "E22", cat: "entanglement", horizon: "sharp", status: "improved",
    reviewedAt: "2026-11-08",
    title: "Polynomial entanglement lower bounds for f-routing",
    statement: r`In one-round $f$-routing, Alice receives $x\in\{0,1\}^n$ and a qubit $Q$, Bob receives $y\in\{0,1\}^n$; they share an entangled state, apply local operations, exchange one simultaneous message each, and $Q$ must end up with Alice if $f(x,y)=0$ and with Bob if $f(x,y)=1$, each within diamond-norm error $\epsilon$. For a fixed constant $\epsilon>0$, find an explicit family $f_n:\{0,1\}^n\times\{0,1\}^n\to\{0,1\}$ (here taken to mean computable in time polynomial in $n$) and $c>0$ such that every $\epsilon$-correct protocol requires a shared state with entanglement (log local dimension, or more strongly entanglement of formation) at least $n^c$.`,
    definition: r`**$f$-routing** is the simplest non-local quantum computation: a quantum system is redirected according to a classical function of two distant inputs, using only pre-shared entanglement and one round of simultaneous communication. It underlies quantum position verification: an honest verifier-prover pair only computes $f(x,y)$, while attackers must simulate the routing non-locally, so an entanglement lower bound that grows with $n$ gives security against attackers with bounded entanglement. The task was introduced by Kent, Munro and Spiller (PRA 84, 012326 (2011), [arXiv:1008.2147](https://arxiv.org/abs/1008.2147)) and studied in the garden-hose model of Buhrman, Fehr, Schaffner and Speelman ([arXiv:1109.2563](https://arxiv.org/abs/1109.2563)).

The entanglement cost is bounded above by the randomness cost of conditional disclosure of secrets for the same function (Allerstorfer, Buhrman, May, Speelman and Verduyn Lunel, Quantum 8, 1387 (2024), [arXiv:2306.16462](https://arxiv.org/abs/2306.16462)), so a polynomial lower bound would also give a polynomial randomness lower bound for classical CDS, itself a known open problem. This is [IQOQI problem 48](https://oqp.iqoqi.oeaw.ac.at/large-lower-bounds-for-the-entanglement-cost-of-f-routing) (A. May, 2026).`,
    progress: r`- Asadi, Culf and May gave the first non-trivial lower bounds, on the Schmidt rank of the shared state, for protocols that are exact on one input class; they give linear bounds for several explicit functions ([arXiv:2402.18647](https://arxiv.org/abs/2402.18647)).
- Bluhm, Höfer, May, Stasiuk, Verduyn Lunel and Yuen proved that $f$-routing and $f$-measure are equivalent up to $O(1)$ overhead; consequences include sub-exponential upper bounds for every function and efficient protocols for functions in $\mathsf{Mod}_k\mathsf{L}$ (Quantum 10, 2152 (2026), [arXiv:2505.23893](https://arxiv.org/abs/2505.23893)).
- Bogner (6 August 2026; v3 of 1 September 2026 reviewed) proves the first growing lower bound that tolerates constant error on both routing cases: for the inner product modulo 2, every protocol with worst-case error at most $0.09$ needs a shared state, possibly mixed, whose entanglement of formation is $\Omega(\log n)$. Every labeled result is formalized in Lean 4; three published external results (an information–disturbance theorem, Liu's SLD comparison and Forster's sign-rank bound) enter as explicit hypotheses rather than proofs. The build was not rerun here ([arXiv:2608.05775](https://arxiv.org/abs/2608.05775v3), [Lean repository](https://github.com/kevinbogner/f-routing-lean)).
- Hasegawa and Mataraarachchi (21 September 2026; v2 of 12 October 2026 reviewed) bound the entanglement of one-sided-perfect $f$-routing below by a quarter of the logarithm of the sign rank of $f$, which is linear in $n$ for the inner product and matches the known upper bound. They also prove that the shared randomness of robust CDS is at least the logarithm of deterministic simultaneous-message communication complexity ([arXiv:2609.24291](https://arxiv.org/abs/2609.24291v2)).
- Renard and Spooner (30 September 2026; v2 of 2 November 2026 reviewed) prove computational, not entanglement, lower bounds for uniform attackers: an efficient attack places $f$ in a QSZK-type class, or in deterministic time for attacks with few magic gates or sparse Pauli expansions ([arXiv:2609.40278](https://arxiv.org/abs/2609.40278v2)).
- May's book-length review (v4, 29 October 2026) surveys upper and lower bounds on entanglement in non-local quantum computation ([arXiv:2605.02840](https://arxiv.org/abs/2605.02840v4)).`,
    residual: r`In the fully robust setting, where errors are allowed on both input classes, the best explicit bound is logarithmic (Bogner). Linear bounds are known only for protocols exact on one input class. A polynomial robust bound for an explicit function remains open; lower bounds for random functions, or under computational restrictions on the attackers, do not settle it.`,
    evidence: [
      { kind: "preprint", role: "progress", summary: "Robust Omega(log n) lower bound on the entanglement of formation for inner-product routing, with constant error on both cases and arbitrary mixed shared states; Lean 4 formalization with three published external results as hypotheses (not rebuilt here). Polynomial bound left open.", url: "https://arxiv.org/abs/2608.05775v3", date: "2026-09-01", version: "v3" },
      { kind: "preprint", role: "progress", summary: "Lower bound, logarithmic in the sign rank, for one-sided-perfect f-routing (linear in n for inner product, tight); robust-CDS randomness at least log of deterministic SMP complexity.", url: "https://arxiv.org/abs/2609.24291v2", date: "2026-10-12", version: "v2" },
      { kind: "preprint", role: "progress", summary: "Computational lower bounds for uniform f-routing attackers (QSZK-type, magic-gate and Pauli-sparsity restrictions); not entanglement lower bounds.", url: "https://arxiv.org/abs/2609.40278v2", date: "2026-11-02", version: "v2" },
      { kind: "published", role: "progress", summary: "f-routing and f-measure are equivalent up to O(1) overhead; sub-exponential upper bounds for all functions (Quantum 10, 2152).", url: "https://doi.org/10.22331/q-2026-07-01-2152", date: "2026-07-01" },
      { kind: "published", role: "progress", summary: "Schmidt-rank lower bounds for f-routing exact on one input class, via the rank of an associated matrix (ITCS 2025, LIPIcs 325, 11:1–11:18).", url: "https://arxiv.org/abs/2402.18647v4", date: "2025-07-24", version: "v4" },
    ],
    provenance: [
      { summary: "Bogner states that the mathematical content and the Lean formalization were developed with substantial use of GPT-5.6 Sol (OpenAI), and the wording revised with Claude Fable 5 (Anthropic); he reviewed and verified the material.", url: "https://arxiv.org/html/2608.05775v3", version: "v3" },
      { summary: "Hasegawa and Mataraarachchi report that ChatGPT 5.6 Sol developed the generalization behind the CDS bound and found that the tight inner-product bound follows from sign rank, and that ChatGPT 6 assisted with drafting; they take full responsibility.", url: "https://arxiv.org/html/2609.24291v2", version: "v2" },
      { summary: "Renard and Spooner state that the research direction, lemma statements and hypotheses are theirs and that ChatGPT (Sol 5.6) assisted in proving them, through repeated revision.", url: "https://arxiv.org/abs/2609.40278v2", version: "v2" },
    ],
    relations: [{ id: "E16", type: "related" }],
    refs: [
      { label: "Bogner, 'Robust logarithmic entanglement lower bound for f-routing' (2026 preprint, v3)", url: "https://arxiv.org/abs/2608.05775v3" },
      { label: "Bogner, Lean 4 formalization accompanying the f-routing lower bound (GitHub, 2026)", url: "https://github.com/kevinbogner/f-routing-lean" },
      { label: "Hasegawa & Mataraarachchi, 'New lower bounds for CDS and f-routing' (2026 preprint, v2)", url: "https://arxiv.org/abs/2609.24291v2" },
      { label: "Renard & Spooner, 'Computational Bounds for f-Routing' (2026 preprint, v2)", url: "https://arxiv.org/abs/2609.40278v2" },
      { label: "Bluhm, Höfer, May, Stasiuk, Verduyn Lunel & Yuen, 'A complexity theory for non-local quantum computation', Quantum 10, 2152 (2026)", url: "https://arxiv.org/abs/2505.23893" },
      { label: "Asadi, Culf & May, 'Rank lower bounds on non-local quantum computation' (ITCS 2025)", url: "https://arxiv.org/abs/2402.18647" },
      { label: "Allerstorfer, Buhrman, May, Speelman & Verduyn Lunel, 'Relating non-local quantum computation to information theoretic cryptography', Quantum 8, 1387 (2024)", url: "https://arxiv.org/abs/2306.16462" },
      { label: "Kent, Munro & Spiller, 'Quantum tagging: authenticating location via quantum information and relativistic signalling constraints', PRA 84, 012326 (2011)", url: "https://arxiv.org/abs/1008.2147" },
      { label: "Buhrman, Fehr, Schaffner & Speelman, 'The garden-hose model', ITCS 2013", url: "https://arxiv.org/abs/1109.2563" },
      { label: "May, 'Entanglement cost in non-local quantum computation' (2026 review, v4)", url: "https://arxiv.org/abs/2605.02840v4" },
      { label: "IQOQI Vienna Open Quantum Problems, problem 48: 'The entanglement cost of f-routing' (A. May)", url: "https://oqp.iqoqi.oeaw.ac.at/large-lower-bounds-for-the-entanglement-cost-of-f-routing" },
    ] },

  // 16 November 2026: questions from the carte v2 map of the quant-ph corpus.
  { id: "E23",
    cat: "entanglement",
    horizon: "sharp",
    status: "claimed-solved",
    reviewedAt: "2026-11-16",
    title: "Polynomial-time decision of local-unitary equivalence of graph states",
    statement: r`For a simple graph $G=(V,E)$ on $n$ labelled vertices, let $|G\rangle=\prod_{\{u,v\}\in E}CZ_{uv}\,|+\rangle^{\otimes n}$. Two graph states are LU-equivalent if $|H\rangle=(U_1\otimes\cdots\otimes U_n)|G\rangle$ for some single-qubit unitaries $U_i$. Is there a deterministic algorithm that decides LU-equivalence of two $n$-vertex graph states in time $\mathrm{poly}(n)$? Weaker form: is the problem in $\mathsf{NP}$? (Claudet, thesis 2025, Chapter 8; Claudet 2026, Discussion.)`,
    definition: r`**LC versus LU.** Two graph states are LC-equivalent when the $U_i$ can be chosen in the single-qubit Clifford group. Van den Nest, Dehaene and De Moor showed that LC-equivalence is exactly equivalence under sequences of local complementations, “Graphical description of the action of local Clifford transformations on graph states”, PRA 69, 022316 (2004), [arXiv:quant-ph/0308151](https://arxiv.org/abs/quant-ph/0308151). Bouchet's algorithm for locally equivalent graphs then decides LC-equivalence in polynomial time. The LU–LC conjecture, that LU-equivalent graph states are always LC-equivalent, would have made this test sufficient. Ji, Chen, Wei and Ying refuted it with a 27-qubit counterexample, QIC 10, 97 (2010), [arXiv:0709.1266](https://arxiv.org/abs/0709.1266).

Claudet and Perdrix characterised LU-equivalence by a generalised, “$r$-local”, complementation, [arXiv:2409.20183](https://arxiv.org/abs/2409.20183) (STACS 2025). In the final chapter of his thesis, Claudet asks whether a polynomial-time algorithm exists, and notes that even verifying an $r$-local complementation involves a non-polynomial number of equations, so that membership in NP is open ([arXiv:2511.22271](https://arxiv.org/abs/2511.22271), Chapter 8). His March 2026 paper states that the efficient-algorithm question “remains open for the time being” ([arXiv:2603.25219](https://arxiv.org/abs/2603.25219), Discussion).`,
    progress: r`- Ji, Chen, Wei and Ying (2007; QIC 2010) gave the first LU-but-not-LC pair of graph states, on 27 qubits ([arXiv:0709.1266](https://arxiv.org/abs/0709.1266)). Tsimakuridze and Gühne (J. Phys. A 50, 195302, 2017) constructed such counterexamples systematically via weighted hypergraph states ([arXiv:1611.06938](https://arxiv.org/abs/1611.06938)).
- Burchardt, de Jong and Vandré (October 2024) reduced LU verification for stabilizer states to modular linear equations. The number of equations can be exponential, and the general complexity was left unresolved ([arXiv:2410.03961](https://arxiv.org/abs/2410.03961v2)).
- Claudet and Perdrix (STACS 2025) proved that two graph states are LU-equivalent if and only if their graphs are related by $r$-local complementations, and that these give a strict infinite hierarchy of equivalences between LC and LU ([arXiv:2409.20183](https://arxiv.org/abs/2409.20183v4)).
- Claudet and Perdrix (ICALP 2025) decided LU-equivalence in quasi-polynomial time $n^{\log_2 n+O(1)}$, by reducing to a single generalised local complementation between standard forms. They also proved LU $=$ LC for graph states on up to 19 qubits ([arXiv:2502.06566](https://arxiv.org/abs/2502.06566v3)).
- Claudet (26 March 2026) proved LU $=$ LC on up to 26 qubits, so the 27-qubit counterexample is minimal ([arXiv:2603.25219](https://arxiv.org/abs/2603.25219v1)).
- Hahn, McCarty, Poulsen Nautrup and Claudet (March 2026) showed that counting the graph states LU-equivalent to a given one is #P-hard. This concerns counting, not decision ([arXiv:2603.08847](https://arxiv.org/abs/2603.08847v2)).`,
    claim: r`**Yuxuan Zhang, [“Polynomial-time local-unitary equivalence of graph states”](https://arxiv.org/abs/2610.00527v2)** (arXiv:2610.00527, v1 30 September 2026, v2 4 October 2026).

What it claims:
- A deterministic algorithm decides LU-equivalence of two graph states on $n$ labelled vertices in $\widetilde O(n^{6.38})$ bit operations, and returns exact single-qubit unitaries when they are equivalent (Theorem 1.1). This places the problem in $\mathsf P$, hence in $\mathsf{NP}$, which the paper presents as answering the question of Claudet's thesis.
- The method keeps Claudet and Perdrix's standard form, their reduction to one generalised complementation and their logarithmic bound on the level $r$. It replaces their enumeration of vertex subsets by incidence constraints generated from pairs and triples, compressed by modular row reduction, and solves the remaining graph transformation as an affine system over $\mathbb F_2$. The new steps cost $\widetilde O(n^5)$; the exponent $6.38$ comes from the inherited standardisation step.
- Corollaries: the number of LC classes inside an LU class is a power of two and is computable in the same time; the least level $r$ for which two graph states are $\mathrm{LC}_r$-equivalent is computable; the test extends to pure qubit stabilizer states and to stabilizer codes encoding one logical qubit.

Caveats:
- A single-author preprint, not peer reviewed and not assessed here. Hence “Claimed solved”.
- Correctness depends on the cited Claudet–Perdrix results and on the new compression and affine-system theorems. The reported computational checks are small: exhaustive comparisons with LC-orbit enumeration on up to six vertices, state-vector checks on four to eight qubits, and the published 27-vertex pair. The paper mentions a reference implementation but does not say whether it is released.
- The author states that OpenAI models developed candidate arguments, ran checks and drafted the manuscript under his supervision (see provenance).`,
    residual: "Independent verification of the claim. The paper states that its argument does not decide LU-equivalence of stabilizer codes with more than one logical qubit, since the relating unitary may then act jointly on the reference system. Lowering the exponent requires a faster standardisation step. Qudit and weighted graph states are outside its scope.",
    evidence: [
      { kind: "preprint",
        role: "claimed-solution",
        summary: "Deterministic Õ(n^6.38) algorithm deciding LU-equivalence of n-vertex qubit graph states, with exact local unitaries; places the problem in P. Builds on the Claudet–Perdrix reduction. Single-author preprint, not assessed.",
        url: "https://arxiv.org/abs/2610.00527v2",
        date: "2026-10-04",
        version: "v2" },
      { kind: "preprint",
        role: "progress",
        summary: "Quasi-polynomial n^{log₂ n + O(1)} algorithm for LU-equivalence of graph states; LU = LC up to 19 qubits. Published at ICALP 2025.",
        url: "https://arxiv.org/abs/2502.06566v3",
        date: "2025-09-22",
        version: "v3" },
      { kind: "preprint",
        role: "progress",
        summary: "LU-equivalence of graph states characterised by r-local complementation; strict infinite hierarchy between LC and LU. Published at STACS 2025.",
        url: "https://arxiv.org/abs/2409.20183v4",
        date: "2026-07-21",
        version: "v4" },
      { kind: "preprint",
        role: "progress",
        summary: "LU = LC for graph states on up to 26 qubits, so the 27-qubit counterexample is minimal; states the efficient-algorithm question as still open.",
        url: "https://arxiv.org/abs/2603.25219v1",
        date: "2026-03-26",
        version: "v1" },
    ],
    provenance: [
      { summary: "Zhang states that the work is part of an experimental series on agentic scientific research: the author set directions, designed the harness and guided revisions, while OpenAI models developed candidate arguments and derivations, searched the literature, wrote and ran computational checks, and drafted and revised the manuscript.",
        url: "https://arxiv.org/abs/2610.00527v2",
        version: "v2" },
    ],
    relations: [
      { id: "E8", type: "related" },
      { id: "E24", type: "related" },
    ],
    refs: [
      { label: "Claudet, 'Local Equivalences of Graph States', PhD thesis, Université de Lorraine (2025), Chapter 8", url: "https://arxiv.org/abs/2511.22271" },
      { label: "Claudet & Perdrix, 'Deciding Local Unitary Equivalence of Graph States in Quasi-Polynomial Time', ICALP 2025", url: "https://arxiv.org/abs/2502.06566" },
      { label: "Claudet & Perdrix, 'Local equivalence of stabilizer states: a graphical characterisation', STACS 2025", url: "https://arxiv.org/abs/2409.20183" },
      { label: "Claudet, 'The 27-qubit Counterexample to the LU-LC Conjecture is Minimal' (2026 preprint)", url: "https://arxiv.org/abs/2603.25219" },
      { label: "Van den Nest, Dehaene & De Moor, 'Graphical description of the action of local Clifford transformations on graph states', PRA 69, 022316 (2004)",
        url: "https://arxiv.org/abs/quant-ph/0308151" },
      { label: "Ji, Chen, Wei & Ying, 'The LU-LC conjecture is false', QIC 10, 97 (2010)", url: "https://arxiv.org/abs/0709.1266" },
      { label: "Burchardt, de Jong & Vandré, 'Algorithm to Verify Local Equivalence of Stabilizer States' (2024 preprint)", url: "https://arxiv.org/abs/2410.03961" },
      { label: "Zhang, 'Polynomial-time local-unitary equivalence of graph states' (2026 preprint, v2)", url: "https://arxiv.org/abs/2610.00527v2" },
    ] },

  { id: "E24",
    cat: "entanglement",
    horizon: "sharp",
    reviewedAt: "2026-11-16",
    title: "Smallest graph states separating levels of local equivalence",
    statement: r`(Claudet 2026, Discussion.) For $r\ge1$, let $c(r)$ be the least $n$ for which there are two $n$-vertex graphs whose graph states are $\mathrm{LC}_r$-equivalent but not $\mathrm{LC}_{r-1}$-equivalent, where $\mathrm{LC}_0$ is equality, $\mathrm{LC}_1$ is local Clifford equivalence and $\mathrm{LC}_r$ is equivalence under $r$-local complementations in the sense of Claudet and Perdrix. Known: $c(1)=3$, $c(2)=27$, and $2^{r+2}\le c(r)\le O(2^{r^2})$ for $r\ge2$. Determine $c(3)$, and decide whether $\log_2 c(r)$ grows linearly or quadratically in $r$.`,
    definition: r`**The local-equivalence hierarchy.** Claudet and Perdrix characterised local-unitary equivalence of graph states by $r$-local complementation and showed that the resulting equivalences $\mathrm{LC}_1\subsetneq\mathrm{LC}_2\subsetneq\cdots$ form a strict infinite hierarchy, every LU-equivalence being an $\mathrm{LC}_r$-equivalence for some $r$ ([arXiv:2409.20183](https://arxiv.org/abs/2409.20183), STACS 2025). Physically, $\mathrm{LC}_r$ allows single-qubit unitaries from a finite level of the Clifford hierarchy; $\mathrm{LC}_2$ already allows $Z(\pi/4)$. The value $c(2)$ is the size of the smallest LU-but-not-LC pair, whose existence refuted the LU–LC conjecture (Ji, Chen, Wei and Ying, [arXiv:0709.1266](https://arxiv.org/abs/0709.1266)); for $c(1)=3$, the triangle and the path on three vertices give LC-equivalent but distinct graph states.

Claudet poses the question after proving $c(2)=27$: no value of $c(r)$ for $r\ge3$ is known, and since the upper bound does not forbid super-exponential growth, “the question of the growth of $c$ is currently open” ([arXiv:2603.25219](https://arxiv.org/abs/2603.25219), Discussion).`,
    progress: r`- Tsimakuridze and Gühne (J. Phys. A 50, 195302, 2017) built families of LU-but-not-LC graph states systematically from weighted hypergraph states ([arXiv:1611.06938](https://arxiv.org/abs/1611.06938)).
- Claudet and Perdrix (STACS 2025) constructed, for every $r\ge2$, explicit graphs that are $\mathrm{LC}_r$- but not $\mathrm{LC}_{r-1}$-equivalent; their order gives $c(r)=O(2^{r^2})$ ([arXiv:2409.20183](https://arxiv.org/abs/2409.20183v4)).
- Claudet and Perdrix (ICALP 2025) proved that two graphs of order at most $2^{r+2}-1$ that are $\mathrm{LC}_r$-equivalent are already $\mathrm{LC}_{r-1}$-equivalent, so $c(r)\ge2^{r+2}$; in particular LU $=$ LC up to 19 qubits ([arXiv:2502.06566](https://arxiv.org/abs/2502.06566v3)).
- Claudet (26 March 2026) proved $c(2)=27$, using a connection between the relevant bipartite graphs and triorthogonal and Reed–Muller codes ([arXiv:2603.25219](https://arxiv.org/abs/2603.25219v1)).`,
    residual: r`The value $c(3)$ is unknown; the lower bound gives $c(3)\ge32$. Claudet suggests looking at codes with transversal gates at higher levels of the Clifford hierarchy. Open targets: explicit bounds on $c(3)$, a lower bound $c(r)\ge2^{\omega(r)}$, or a construction of order $2^{O(r)}$. Claudet noted that $c(r)=\Theta(2^{r^2})$ would give an $n^{\sqrt{\log_2 n}+O(1)}$ algorithm for LU-equivalence. That algorithmic motivation would be superseded if Zhang's claimed polynomial-time algorithm ([arXiv:2610.00527](https://arxiv.org/abs/2610.00527v2), October 2026, not assessed) holds. The combinatorial question would remain. The same preprint claims that the least level $r$ relating two given graph states is computable in polynomial time, which would make computer searches for $c(3)$ cheaper.`,
    evidence: [
      { kind: "preprint",
        role: "progress",
        summary: "c(2) = 27: LU and LC equivalence coincide for graph states on up to 26 qubits. States that no c(r) is known for r ≥ 3 and that the growth of c is open.",
        url: "https://arxiv.org/abs/2603.25219v1",
        date: "2026-03-26",
        version: "v1" },
      { kind: "preprint",
        role: "progress",
        summary: "Graphs of order at most 2^{r+2} − 1 that are LC_r-equivalent are LC_{r−1}-equivalent, hence c(r) ≥ 2^{r+2}. Published at ICALP 2025.",
        url: "https://arxiv.org/abs/2502.06566v3",
        date: "2025-09-22",
        version: "v3" },
      { kind: "preprint",
        role: "progress",
        summary: "Explicit graphs that are LC_r- but not LC_{r−1}-equivalent for every r ≥ 2, giving a strict infinite hierarchy and c(r) = O(2^{r²}). Published at STACS 2025.",
        url: "https://arxiv.org/abs/2409.20183v4",
        date: "2026-07-21",
        version: "v4" },
    ],
    provenance: [],
    relations: [
      { id: "E23", type: "related" },
      { id: "E8", type: "related" },
    ],
    refs: [
      { label: "Claudet, 'The 27-qubit Counterexample to the LU-LC Conjecture is Minimal' (2026 preprint), Discussion", url: "https://arxiv.org/abs/2603.25219" },
      { label: "Claudet & Perdrix, 'Local equivalence of stabilizer states: a graphical characterisation', STACS 2025", url: "https://arxiv.org/abs/2409.20183" },
      { label: "Claudet & Perdrix, 'Deciding Local Unitary Equivalence of Graph States in Quasi-Polynomial Time', ICALP 2025", url: "https://arxiv.org/abs/2502.06566" },
      { label: "Claudet, 'Local Equivalences of Graph States', PhD thesis, Université de Lorraine (2025)", url: "https://arxiv.org/abs/2511.22271" },
      { label: "Tsimakuridze & Gühne, 'Graph states and local unitary transformations beyond local Clifford operations', J. Phys. A 50, 195302 (2017)",
        url: "https://arxiv.org/abs/1611.06938" },
      { label: "Ji, Chen, Wei & Ying, 'The LU-LC conjecture is false', QIC 10, 97 (2010)", url: "https://arxiv.org/abs/0709.1266" },
    ] },

  { id: "E25",
    cat: "entanglement",
    horizon: "sharp",
    status: "improved",
    reviewedAt: "2026-11-16",
    title: "Geelen's conjecture: MBQC on proper vertex-minor-closed classes is classically simulable",
    statement: r`(Geelen, reported by McCarty 2021, Section 1.4.) Let $\mathcal F$ be a class of graphs closed under vertex-minors (local complementation and vertex deletion) that is not the class of all graphs. Is measurement-based quantum computation on the graph states $|G\rangle$, $G\in\mathcal F$, efficiently classically simulable? Operationally: given $G\in\mathcal F$ on $n$ vertices and an adaptive pattern of single-qubit measurements with bases specified by $\mathrm{poly}(n)$ bits, sample the outcome distribution to total-variation error $\varepsilon$ in time $\mathrm{poly}(n,1/\varepsilon)$. A positive answer means no such class is an efficiently universal MBQC resource unless $\mathsf{BQP}=\mathsf{BPP}$.`,
    definition: r`**Vertex-minors.** A vertex-minor of $G$ is obtained by local complementations and vertex deletions. On graph states these correspond to local Clifford operations and single-qubit Pauli measurements. Excluding a fixed vertex-minor is a structural restriction, analogous to excluding a minor in Robertson–Seymour theory. Van den Nest, Dür, Vidal and Briegel showed that MBQC on graph states of bounded rank-width is classically simulable, “Classical simulation versus universality in measurement based quantum computation”, PRA 75, 012337 (2007), [arXiv:quant-ph/0608060](https://arxiv.org/abs/quant-ph/0608060). By the vertex-minor grid theorem of Geelen, Kwon, McCarty and Wollan ([arXiv:1909.08113](https://arxiv.org/abs/1909.08113)), every class of unbounded rank-width contains all circle graphs as vertex-minors.

The conjecture is attributed to Geelen in R. McCarty's thesis, “Local structure for vertex-minors”, University of Waterloo (2021), Section 1.4 ([UWSpace](https://uwspace.uwaterloo.ca/handle/10012/17633)). It is stated as Conjecture 3 by Hahn, McCarty, Poulsen Nautrup and Claudet ([arXiv:2603.08847](https://arxiv.org/abs/2603.08847)), listed as open by Harrison, Iyer, Parekh, Thompson and Zhao ([arXiv:2510.05557](https://arxiv.org/abs/2510.05557), conclusion), and called central in the 2025 “Quantum Graph States” workshop summary ([arXiv:2508.04823](https://arxiv.org/abs/2508.04823)).`,
    progress: r`- Van den Nest, Dür, Vidal and Briegel (2007): classes of bounded rank-width are simulable ([arXiv:quant-ph/0608060](https://arxiv.org/abs/quant-ph/0608060)).
- Geelen, Kwon, McCarty and Wollan (J. Combin. Theory Ser. B): for every circle graph $H$, graphs of large enough rank-width contain $H$ as a vertex-minor. The remaining classes are therefore those that contain all circle graphs ([arXiv:1909.08113](https://arxiv.org/abs/1909.08113)).
- Harrison, Iyer, Parekh, Thompson and Zhao (October 2025; v2 May 2026) proved that circle graph states are not universal for MBQC unless $\mathsf{BQP}=\mathsf{BPP}$. They map circle graph states to fermionic Gaussian states, compute overlaps with product states by Pfaffians in $O(n^3)$, and use the Bravyi–Gosset–Liu sampling framework ([arXiv:2510.05557](https://arxiv.org/abs/2510.05557v2)).
- Hahn, McCarty, Poulsen Nautrup and Claudet (March 2026) reached the same conclusion independently. Bipartite circle graph states are planar code states, every circle graph is a vertex-minor of a bipartite circle graph with polynomial overhead, and MBQC on planar code states is simulable ([arXiv:2603.08847](https://arxiv.org/abs/2603.08847v2)).
- Davies and Jena (2025) showed, assuming Geelen's weak structural conjecture, that graph states in a proper vertex-minor-closed class have CZ-distance $O(n\log n)$ ([arXiv:2504.00291](https://arxiv.org/abs/2504.00291v2)).
- Goodenough and Sales (August 2026) showed, under the same structural conjecture, that sufficiently rank-connected stabilizer states excluding a fixed vertex-minor have code distance $O(\log n)$ and locally accessible information $\Omega(n/\log n)$. They suggest their techniques may help with the simulation conjecture ([arXiv:2608.21526](https://arxiv.org/abs/2608.21526v1)).`,
    residual: r`Open for every proper class that contains all circle graphs. Geelen's weak structural conjecture asserts that, in such a class, sufficiently rank-connected graphs are local-Clifford equivalent to rank-$p$ perturbations of circle graphs, for a constant $p$. It is unproven. A natural intermediate target is efficient simulation for rank-$p$ perturbations of circle graph states with $p$ fixed, which would make the conjecture conditional on the structural one. Barabash, Geelen, McCarty, McFarland and Wollan mention forthcoming work proving a structure theorem for graphs with a forbidden vertex-minor ([arXiv:2611.06776](https://arxiv.org/abs/2611.06776), November 2026); it has not appeared. For surface-code states of genus $g$, known simulation costs are polynomial in $n$ but in general exponential in $g$ (Hahn et al., §1.2.1).`,
    evidence: [
      { kind: "published", role: "progress", summary: "MBQC on graph states of bounded rank-width is efficiently classically simulable (PRA 75, 012337, 2007).", url: "https://arxiv.org/abs/quant-ph/0608060v1", date: "2006-08-07", version: "v1" },
      { kind: "preprint",
        role: "progress",
        summary: "Circle graph states are not universal MBQC resources unless BQP = BPP, via a mapping to fermionic Gaussian states and Pfaffian overlaps.",
        url: "https://arxiv.org/abs/2510.05557v2",
        date: "2026-05-17",
        version: "v2" },
      { kind: "preprint",
        role: "progress",
        summary: "Independent proof that MBQC on circle graph states is simulable, through planar code states; states Geelen's conjecture (Conjecture 3) and its known cases.",
        url: "https://arxiv.org/abs/2603.08847v2",
        date: "2026-04-28",
        version: "v2" },
      { kind: "preprint",
        role: "progress",
        summary: "Assuming Geelen's weak structural conjecture, graph states in a proper vertex-minor-closed class have CZ-distance O(n log n).",
        url: "https://arxiv.org/abs/2504.00291v2",
        date: "2025-07-27",
        version: "v2" },
      { kind: "preprint",
        role: "progress",
        summary: "Assuming the weak structural conjecture, rank-connected stabilizer states excluding a vertex-minor have distance O(log n) and locally accessible information Ω(n/log n).",
        url: "https://arxiv.org/abs/2608.21526v1",
        date: "2026-08-21",
        version: "v1" },
    ],
    provenance: [
      { summary: "Goodenough and Sales state that the figures were created with ChatGPT.", url: "https://arxiv.org/abs/2608.21526v1", version: "v1" },
    ],
    relations: [
      { id: "N10", type: "related" },
    ],
    refs: [
      { label: "McCarty, 'Local structure for vertex-minors', PhD thesis, University of Waterloo (2021), Section 1.4", url: "https://uwspace.uwaterloo.ca/handle/10012/17633" },
      { label: "Hahn, McCarty, Poulsen Nautrup & Claudet, 'The Structure of Circle Graph States' (2026 preprint)", url: "https://arxiv.org/abs/2603.08847" },
      { label: "Harrison, Iyer, Parekh, Thompson & Zhao, 'Fermionic Insights into Measurement-Based Quantum Computation: Circle Graph States Are Not Universal Resources' (2025 preprint)",
        url: "https://arxiv.org/abs/2510.05557" },
      { label: "Van den Nest, Dür, Vidal & Briegel, 'Classical simulation versus universality in measurement based quantum computation', PRA 75, 012337 (2007)",
        url: "https://arxiv.org/abs/quant-ph/0608060" },
      { label: "Geelen, Kwon, McCarty & Wollan, 'The grid theorem for vertex-minors', J. Combin. Theory Ser. B", url: "https://arxiv.org/abs/1909.08113" },
      { label: "Davies & Jena, 'Preparing graph states forbidding a vertex-minor' (2025 preprint)", url: "https://arxiv.org/abs/2504.00291" },
      { label: "Chitambar, Goodenough, Gühne, McCarty, Perdrix, Scarola & Sun, 'Quantum Graph States: Bridging Classical Theory and Quantum Innovation, Workshop Summary' (2025)",
        url: "https://arxiv.org/abs/2508.04823" },
    ] },

  { id: "E26",
    cat: "entanglement",
    horizon: "sharp",
    status: "improved",
    reviewedAt: "2026-11-16",
    title: "Krenn–Gu conjecture on GHZ graphs",
    statement: r`(Krenn and Gu; Krenn, Gu and Soltész 2019.) Let $G$ be a loopless multigraph whose edges carry colours from $\{1,\dots,d\}$ (in the general model each half-edge carries its own colour, allowing bichromatic edges) and nonzero complex weights. Each perfect matching induces a vertex colouring, with weight equal to the product of its edge weights. The weight of a vertex colouring is the sum of the weights of the perfect matchings inducing it. $G$ is a GHZ graph if every monochromatic induced colouring has weight $1$ and every non-monochromatic one has weight $0$; its dimension is the number of monochromatic colourings that occur. Conjecture: every GHZ graph on more than four vertices has dimension at most $2$. Physically, path-identity photonic set-ups without additional resources could then not produce GHZ states of more than four photons with local dimension $3$ or more.`,
    definition: r`**GHZ graphs.** Krenn, Gu and Zeilinger showed that a class of photonic experiments (path identity with probabilistic pair sources) corresponds to edge-weighted, edge-coloured graphs. The output state is a coherent superposition over perfect matchings. A GHZ graph produces a $d$-dimensional GHZ state, “Quantum Experiments and Graphs: Multiparty States as coherent superpositions of Perfect Matchings”, PRL 119, 240403 (2017), [arXiv:1705.06646](https://arxiv.org/abs/1705.06646). The complete graph $K_4$ gives a three-dimensional four-photon GHZ state. Krenn, Gu and Soltész stated the related graph-theoretic questions in “Questions on the structure of perfect matchings inspired by quantum physics”, Proc. 2nd Croatian Combinatorial Days (2019), [arXiv:1902.06023](https://arxiv.org/abs/1902.06023).

Chandran and Gajjala report that the conjecture “has been extensively publicized, including through several cash rewards”, and that $K_4$ is the only known simple graph on at least four vertices with matching index at least $3$ ([arXiv:2610.22190](https://arxiv.org/abs/2610.22190), §1).`,
    progress: r`- Bogdanov (2017, MathOverflow) settled the case without destructive interference, with positive weights: $K_4$ has matching index $3$ and every other simple graph at most $2$ (as cited by Chandran and Gajjala, 2026).
- Cervera-Lierta, Krenn and Aspuru-Guzik (Quantum 6, 836, 2022) used SAT solvers to show that, without bichromatic edges (multi-edges allowed, per Table 1 of Chandran and Gajjala 2026), the dimension is at most $2$ on six vertices and at most $3$ on eight vertices ([arXiv:2109.13273](https://arxiv.org/abs/2109.13273)).
- Chandran and Gajjala (Quantum 8, 1396, 2024) proved that no simple GHZ graph on $n>4$ vertices has dimension $d\ge n/\sqrt2$, even with bichromatic edges ([arXiv:2304.06407](https://arxiv.org/abs/2304.06407v3)).
- Chandran, Gajjala and Illickan (MFCS 2024) proved the conjecture for graphs of vertex connectivity at most $2$ and for cubic graphs, and showed that a minimal counterexample must be $4$-connected ([arXiv:2407.00303](https://arxiv.org/abs/2407.00303v1)).
- Chandran and Gajjala (15 October 2026) proved that every simple connected GHZ graph on at least four vertices has dimension at most $2^{\kappa(G)-1}+\binom{\kappa(G)}{2}$, where $\kappa$ is the vertex connectivity. They also gave a combinatorial proof that simple graphs have matching index at most $2$ on six vertices and at most $3$ on eight, and a bound in terms of maximum degree for multigraphs ([arXiv:2610.22190](https://arxiv.org/abs/2610.22190v1)).`,
    residual: r`The conjecture is open in general, in particular for $4$-connected graphs, multigraphs and bichromatic edges. Chandran and Gajjala note that the optimal dependence on $\kappa(G)$ is open, including whether a polynomial bound in $\kappa(G)$ holds, and that a short purely combinatorial proof of the four-vertex result is still missing. Sub-targets: prove the conjecture for simple $4$-connected graphs of bounded maximum degree; obtain a bound polynomial in $\kappa(G)$.`,
    evidence: [
      { kind: "published", role: "progress", summary: "SAT-solver bounds without bichromatic edges: dimension at most 2 on six vertices and at most 3 on eight vertices.", url: "https://doi.org/10.22331/q-2022-10-13-836", date: "2022-10-13" },
      { kind: "published", role: "progress", summary: "No simple GHZ graph on n > 4 vertices has dimension at least n/√2, bichromatic edges allowed.", url: "https://doi.org/10.22331/q-2024-07-03-1396", date: "2024-07-03" },
      { kind: "published",
        role: "progress",
        summary: "Conjecture holds for vertex connectivity at most 2 and for cubic graphs; a minimal counterexample is 4-connected (MFCS 2024).",
        url: "https://arxiv.org/abs/2407.00303v1",
        date: "2024-06-29",
        version: "v1" },
      { kind: "preprint",
        role: "progress",
        summary: "Dimension at most 2^{κ−1} + C(κ,2) for simple connected GHZ graphs with vertex connectivity κ; combinatorial bounds for six and eight vertices.",
        url: "https://arxiv.org/abs/2610.22190v1",
        date: "2026-10-15",
        version: "v1" },
    ],
    provenance: [],
    relations: [],
    refs: [
      { label: "Krenn, Gu & Zeilinger, 'Quantum Experiments and Graphs: Multiparty States as coherent superpositions of Perfect Matchings', PRL 119, 240403 (2017)",
        url: "https://arxiv.org/abs/1705.06646" },
      { label: "Krenn, Gu & Soltész, 'Questions on the Structure of Perfect Matchings inspired by Quantum Physics', Proc. 2nd Croatian Combinatorial Days (2019)",
        url: "https://arxiv.org/abs/1902.06023" },
      { label: "Chandran & Gajjala, 'Graph-theoretic insights on the constructability of complex entangled states', Quantum 8, 1396 (2024)",
        url: "https://arxiv.org/abs/2304.06407" },
      { label: "Chandran, Gajjala & Illickan, 'Krenn-Gu conjecture for sparse graphs', MFCS 2024", url: "https://arxiv.org/abs/2407.00303" },
      { label: "Chandran & Gajjala, 'Connectivity Bounds for GHZ Graphs' (2026 preprint)", url: "https://arxiv.org/abs/2610.22190" },
      { label: "Cervera-Lierta, Krenn & Aspuru-Guzik, 'Design of quantum optical experiments with logic artificial intelligence', Quantum 6, 836 (2022)",
        url: "https://arxiv.org/abs/2109.13273" },
    ] },

  { id: "E27",
    cat: "entanglement",
    horizon: "sharp",
    status: "improved",
    reviewedAt: "2026-11-16",
    title: "Computational-basis optimality of nonlocal stabilizer entropy",
    statement: r`Let $|\Psi\rangle$ be a pure state of $N=n_A+n_B$ qubits with Schmidt coefficients $\mu_0\ge\mu_1\ge\dots\ge\mu_{r-1}>0$ across the cut $A|B$. Let $\mathcal M_2(\psi)=-\log_2\big(2^{-N}\sum_{P}\langle\psi|P|\psi\rangle^4\big)$, the sum running over the $4^N$ Pauli strings, and let $\mathcal M_{\rm NL}(\Psi)=\min_{V_A,V_B}\mathcal M_2\big((V_A\otimes V_B)|\Psi\rangle\big)$ over local unitaries. Let $|\Psi_{\rm CB}\rangle=\sum_{x=0}^{r-1}\mu_x|x\rangle_A|x\rangle_B$, with $x$ written in binary on each side. Prove or disprove that $\mathcal M_{\rm NL}(\Psi)=\mathcal M_2(\Psi_{\rm CB})$ for every Schmidt spectrum and every bipartition. This is Conjecture 1 of Sierant (2026), who attributes it to Liu–Cui, Torre–Franchini–Giampaolo and Franchini–Giampaolo (2026) and calls its resolution for arbitrary Schmidt spectra "a central open problem".`,
    definition: r`**Nonlocal magic** is the part of a state's non-stabilizerness that no local unitary can remove. It depends only on the local-unitary orbit, hence only on the Schmidt spectrum, but evaluating it requires an optimization over $U(2^{n_A})\times U(2^{n_B})$. The conjecture says that the optimum is always reached by writing the Schmidt decomposition in the computational basis, largest coefficients on the smallest binary labels.

The stabilizer Rényi entropy was introduced by Leone, Oliviero and Hamma, “Stabilizer Rényi entropy”, PRL 128, 050402 (2022), [arXiv:2106.12587](https://arxiv.org/abs/2106.12587). The conjecture is stated as Conjecture 1, with the open problem in the Outlook, of Sierant, “Spectral geometry of nonlocal stabilizer entropy”, [arXiv:2609.13106](https://arxiv.org/abs/2609.13106v2).`,
    progress: r`- Qian and Wang introduced nonlocal nonstabilizerness and settled the two-qubit case (PRA 111, 052443 (2025), [arXiv:2502.06393](https://arxiv.org/abs/2502.06393v4)); Sierant credits $N=2$ to this work.
- Torre, Franchini and Giampaolo, and Liu and Cui, express nonlocal magic through the entanglement spectrum and conjecture that the computational-basis (Schmidt-aligned) representative is optimal ([arXiv:2607.07808](https://arxiv.org/abs/2607.07808v2), [arXiv:2607.10714](https://arxiv.org/abs/2607.10714v2), both v2 of 6 August 2026). Franchini and Giampaolo prove it when $\min(n_A,n_B)=1$ ([arXiv:2608.02745](https://arxiv.org/abs/2608.02745v2)).
- For the log-stabilizer fidelity instead of $\mathcal M_2$, the analogous optimization is solved exactly: Sierant expresses it as the distance of the entanglement spectrum from the closest Bell-pair spectrum ([arXiv:2608.28563](https://arxiv.org/abs/2608.28563v2)); Viscardi, Leone and Hamma give a closed form depending only on the Schmidt spectrum ([arXiv:2609.04119](https://arxiv.org/abs/2609.04119v2)).
- Liu and Cui (v2, 17 September 2026) bound $\mathcal M_{\rm NL}$ above and below by Rényi entanglement entropies and anti-flatness, and show that the ordered Schmidt reference state is a local minimum of the stabilizer entropy for integer $\alpha\ge2$ ([arXiv:2609.01993](https://arxiv.org/abs/2609.01993v2)).
- Sierant (v2, 14 September 2026) proves the conjecture for dyadic-staircase spectra (Theorem 1) and for Schmidt rank at most six (Theorem 2). For every state, $\mathcal M_{\rm NL}=\mathcal M_2(\Psi_{\rm CB})-c_1$ with $0\le c_1\le4$ (Theorem 3), so the two quantities share any divergent leading term ([arXiv:2609.13106](https://arxiv.org/abs/2609.13106v2)).
- For two qudits of prime dimension, Busoni, Gargalionis, Wallace and White conjecture closed forms based on the Schmidt-aligned state, with numerical support for qutrits and ququints (PRA 114, 042414 (2026), [arXiv:2603.09155](https://arxiv.org/abs/2603.09155v2)).`,
    residual: r`The conjecture for general Schmidt spectra. Sierant's compression inequality holds up to Schmidt rank seven but fails at rank eight, and his overlap inequality is proved only up to rank six, so ranks seven and eight are the first targets. Intermediate goals: reduce the universal constant $4$ in $0\le c_1\le4$; decide whether computational-basis optimality extends to Rényi indices $\alpha>2$. A counterexample would be a state in the local-unitary orbit with lower $\mathcal M_2$ than the sorted computational-basis representative.`,
    evidence: [
      { kind: "published", role: "progress", summary: "Introduces nonlocal nonstabilizerness and settles the two-qubit case (PRA 111, 052443).", url: "https://arxiv.org/abs/2502.06393v4", date: "2025-05-28", version: "v4" },
      { kind: "preprint", role: "progress", summary: "Proves computational-basis optimality of the nonlocal stabilizer 2-Rényi entropy when one side has a single qubit.", url: "https://arxiv.org/abs/2608.02745v2", date: "2026-08-06", version: "v2" },
      { kind: "preprint",
        role: "progress",
        summary: "Bounds the nonlocal stabilizer Rényi entropy by entanglement entropies and anti-flatness; the ordered Schmidt reference state is a local minimum for integer α ≥ 2.",
        url: "https://arxiv.org/abs/2609.01993v2",
        date: "2026-09-17",
        version: "v2" },
      { kind: "preprint",
        role: "progress",
        summary: "Conjecture proved for dyadic-staircase Schmidt spectra and for Schmidt rank at most six; for every state the gap between the computational-basis value and the nonlocal SRE lies in [0, 4].",
        url: "https://arxiv.org/abs/2609.13106v2",
        date: "2026-09-14",
        version: "v2" },
      { kind: "preprint",
        role: "progress",
        summary: "Closed-form nonlocal magic for the log-stabilizer fidelity, depending only on the Schmidt spectrum; not the stabilizer 2-Rényi entropy.",
        url: "https://arxiv.org/abs/2609.04119v2",
        date: "2026-11-02",
        version: "v2" },
    ],
    provenance: [
      { summary: "Sierant's acknowledgements state that ChatGPT 5.5 and 5.6 were used as an aid in formalizing the theorems and their proofs, and Claude Fable 5 and 5.1 for manuscript preparation; the author states that all results were verified independently.",
        url: "https://arxiv.org/abs/2609.13106v2",
        version: "v2" },
    ],
    relations: [
      { id: "E28", type: "related" },
    ],
    refs: [
      { label: "Sierant, 'Spectral geometry of nonlocal stabilizer entropy' (2026 preprint), Conjecture 1 and Outlook", url: "https://arxiv.org/abs/2609.13106" },
      { label: "Leone, Oliviero & Hamma, 'Stabilizer Rényi entropy', PRL 128, 050402 (2022)", url: "https://arxiv.org/abs/2106.12587" },
      { label: "Qian & Wang, 'Quantum Non-Local Nonstabilizerness', PRA 111, 052443 (2025)", url: "https://arxiv.org/abs/2502.06393" },
      { label: "Torre, Franchini & Giampaolo, 'Non-Local Magic from the Entanglement Spectrum' (2026 preprint)", url: "https://arxiv.org/abs/2607.07808" },
      { label: "Liu & Cui, 'Nonlocal nonstabilizerness for slightly entangled quantum many-body states' (2026 preprint)", url: "https://arxiv.org/abs/2607.10714" },
      { label: "Franchini & Giampaolo, 'Schmidt-Gauge Non-Local Magic: Representation, Optimality, and Mathematical Properties' (2026 preprint)",
        url: "https://arxiv.org/abs/2608.02745" },
      { label: "Viscardi, Leone & Hamma, 'Non-local Magic: closed-form solution and equivalence with magic of purification' (2026 preprint)",
        url: "https://arxiv.org/abs/2609.04119" },
    ] },

  { id: "E28",
    cat: "entanglement",
    horizon: "sharp",
    reviewedAt: "2026-11-16",
    title: "Maximal stabilizer Rényi entropy without a Weyl–Heisenberg SIC",
    statement: r`For pure states of $n$ qubits, $d=2^n$, let $M_\alpha(\psi)=\frac{1}{1-\alpha}\log\big(d^{-1}\sum_{P}|\langle\psi|P|\psi\rangle|^{2\alpha}\big)$, the sum running over the $d^2$ Pauli strings. For $\alpha\ge2$, $M_\alpha\le\frac{1}{1-\alpha}\log\frac{1+(d-1)(d+1)^{1-\alpha}}{d}$, with equality exactly for fiducials of a Weyl–Heisenberg (Pauli-covariant) SIC, which exist only for $n=1,3$. (Liu–Low–Yin 2025, Conjecture.) Prove or disprove that for $n\notin\{1,3\}$ and $\alpha\ge2$, $\max_\psi M_\alpha(\psi)=\frac{1}{1-\alpha}\log\frac{1+(d-1)d^{1-\alpha}}{d}$, uniquely attained by Weyl–Heisenberg MUB fiducial states when these exist. For $n=2$, $\alpha=2$ this reads $\max M_2=\log(16/7)$. Bipartite variant (Knipfer–Roman–Matcheva–Matchev 2026): for two qudits of prime dimension $p$, $\max M_2=\log[p^4/(2p^2-1)]$, the same formula with $d=p^2$.`,
    definition: r`**Maximal magic.** Stabilizer entropies measure how far the Pauli spectrum of a state is from that of a stabilizer state ([arXiv:2106.12587](https://arxiv.org/abs/2106.12587)); for integer $\alpha\ge2$ they are monotones for pure states under stabilizer protocols (Leone and Bittel, PRA 110, L040403 (2024), [arXiv:2404.11652](https://arxiv.org/abs/2404.11652)). Cuffaro and Fuchs showed that Weyl–Heisenberg SIC fiducials, when they exist, uniquely saturate the general upper bound, so that maximal magic "inherits all the difficulties" of the SIC existence problem ([arXiv:2412.21083](https://arxiv.org/abs/2412.21083)). For multiqubit systems, Liu, Low and Yin recall that Pauli-covariant SICs exist only for $n=1$ and $n=3$, citing Godsil and Roy, Eur. J. Comb. 30, 246 (2009) ([arXiv:quant-ph/0511004](https://arxiv.org/abs/quant-ph/0511004)). The question is what replaces SIC fiducials in all other cases.

The conjecture is stated after the two-qubit result in Liu, Low and Yin, “Maximal Magic for Two-qubit States”, QST 11, 015035 (2026), [arXiv:2502.17550](https://arxiv.org/abs/2502.17550v3).`,
    progress: r`- Cuffaro and Fuchs (30 December 2024) characterize the states saturating the general bound for $\alpha\ge2$ in any dimension: exactly the Weyl–Heisenberg SIC fiducials ([arXiv:2412.21083](https://arxiv.org/abs/2412.21083v1)).
- Liu, Low and Yin give strong numerical evidence that $\max M_2=\log(16/7)\approx0.827$ for two qubits, below the SIC bound $\log(5/2)$, and identify the 480 maximizers as Weyl–Heisenberg MUB fiducial states. Their numerics indicate that another state maximizes $M_\alpha$ for $\alpha<1.64$ ([arXiv:2502.17550](https://arxiv.org/abs/2502.17550v3)).
- Roman, Knipfer, Suda Neto, Matchev, Matcheva and Gleyzer derive analytic families for the two-qubit magic–entanglement Pareto frontiers and recover $\log(16/7)$ and the 480 states. They do not prove that their families exhaust the upper boundary ([arXiv:2603.24902](https://arxiv.org/abs/2603.24902v1)).
- Knipfer, Roman, Matcheva and Matchev locate the two-qutrit maxima numerically, evaluate them analytically ($\log(81/17)$ for qutrits) and conjecture $\log[p^4/(2p^2-1)]$ for two prime-dimensional qudits ([arXiv:2607.07197](https://arxiv.org/abs/2607.07197v1)).`,
    residual: r`No rigorous proof is known even for two qubits. A first target is a proof that $\max_\psi M_2(\psi)=\log(16/7)$ for $n=2$, for instance by a certificate after reduction by local unitaries, or any rigorous upper bound strictly below $\log(5/2)$. For $n\ge4$ the conjecture is conditional on the existence of Weyl–Heisenberg MUB fiducial states, which is itself not settled here.`,
    evidence: [
      { kind: "preprint",
        role: "progress",
        summary: "Weyl–Heisenberg SIC fiducials, when they exist, are the unique states saturating the upper bound on stabilizer entropies of order α ≥ 2.",
        url: "https://arxiv.org/abs/2412.21083v1",
        date: "2024-12-30",
        version: "v1" },
      { kind: "numerical",
        role: "progress",
        summary: "Numerical evidence that the maximal two-qubit M₂ is log(16/7), attained by 480 Weyl–Heisenberg MUB fiducial states; conjecture for all n ≠ 1, 3 and α ≥ 2 (QST 11, 015035).",
        url: "https://arxiv.org/abs/2502.17550v3",
        date: "2026-01-13",
        version: "v3" },
      { kind: "preprint",
        role: "progress",
        summary: "Analytic two-qubit Pareto frontiers of magic and entanglement consistent with log(16/7); exhaustiveness of the upper-boundary families not proved.",
        url: "https://arxiv.org/abs/2603.24902v1",
        date: "2026-03-26",
        version: "v1" },
      { kind: "numerical",
        role: "progress",
        summary: "Two-qutrit maximal magic log(81/17) located numerically; conjecture log[p⁴/(2p²−1)] for two qudits of prime dimension p.",
        url: "https://arxiv.org/abs/2607.07197v1",
        date: "2026-07-08",
        version: "v1" },
    ],
    provenance: [],
    relations: [
      { id: "N1", type: "related" },
      { id: "E27", type: "related" },
    ],
    refs: [
      { label: "Liu, Low & Yin, 'Maximal Magic for Two-qubit States', Quantum Sci. Technol. 11, 015035 (2026)", url: "https://arxiv.org/abs/2502.17550" },
      { label: "Cuffaro & Fuchs, 'Quantum States with Maximal Magic' (2024 preprint)", url: "https://arxiv.org/abs/2412.21083" },
      { label: "Leone, Oliviero & Hamma, 'Stabilizer Rényi entropy', PRL 128, 050402 (2022)", url: "https://arxiv.org/abs/2106.12587" },
      { label: "Godsil & Roy, 'Equiangular lines, mutually unbiased bases, and spin models', Eur. J. Comb. 30, 246 (2009)", url: "https://arxiv.org/abs/quant-ph/0511004" },
      { label: "Roman et al., 'The Pareto Frontiers of Magic and Entanglement: The Case of Two Qubits' (2026 preprint)", url: "https://arxiv.org/abs/2603.24902" },
      { label: "Knipfer, Roman, Matcheva & Matchev, 'Analytical Landscape of Maximal Magic for Two-Qutrit States and Beyond' (2026 preprint)",
        url: "https://arxiv.org/abs/2607.07197" },
    ] },

  { id: "E29",
    cat: "entanglement",
    horizon: "sharp",
    status: "improved",
    reviewedAt: "2026-11-16",
    title: "Purity threshold for multiqubit magic",
    statement: r`For $n$ qubits, $d=2^n$, let $p^\ast(n)$ be the largest $p$ such that every density operator with $\mathrm{Tr}\rho^2\le p$ is a convex mixture of stabilizer states; equivalently, the Hilbert–Schmidt inradius of the stabilizer polytope around $I/d$ is $r_n=\sqrt{p^\ast-1/d}$. (Liu–Haug–Ye–Liu–Roth 2025, Conjecture 1.) Prove that $p^\ast(n)=1/(d-\tfrac12)$ for every $n$, i.e. $r_n=1/\sqrt{d(2d-1)}$, or find $n$ and a non-stabilizer state of purity at most $1/(d-\tfrac12)$. Known: $1/(d-a_\ast)\le p^\ast(n)\le1/(d-\tfrac12)$ with $a_\ast\approx0.458327$, uniformly in $n$.`,
    definition: r`**The stabilizer polytope** is the convex hull of the pure stabilizer states; states outside it carry magic. A ball of states around the maximally mixed state lies inside it, and its radius gives a basis-independent purity threshold below which no state has magic, analogous to the separable ball in entanglement theory. Its facet structure is studied by Heinrich and Gross, “Robustness of Magic and Symmetries of the Stabiliser Polytope”, Quantum 3, 132 (2019), [arXiv:1807.10296](https://arxiv.org/abs/1807.10296).

The conjecture is Conjecture 1 of Liu, Haug, Ye, Liu and Roth, “Triangle Criterion”, PRX Quantum 7, 033016 (2026), [arXiv:2512.16777](https://arxiv.org/abs/2512.16777v2). Z. Liu and Z.-W. Liu restate it as determining the exact inradius ([arXiv:2609.03944](https://arxiv.org/abs/2609.03944v3), Conclusion).`,
    progress: r`- Liu, Haug, Ye, Liu and Roth construct, via their Triangle Criterion, magic states with purity arbitrarily close to $1/(d-\tfrac12)$, so $p^\ast(n)\le1/(d-\tfrac12)$. They check the conjecture by enumerating the facets of the stabilizer polytope for one and two qubits, and report numerical evidence up to $n=4$ ([arXiv:2512.16777](https://arxiv.org/abs/2512.16777v2)).
- Zurel and Davis characterize absolutely stabilizer states. They derive the inradius exactly for odd prime dimensions, where the purity threshold is $1/(d-1/d)$. For qubits their radius rests on a conjecture about the vertices of the $\Lambda$ polytope, verified for one and two qubits, which they state matches the conjecture above ([arXiv:2602.22336](https://arxiv.org/abs/2602.22336v2)).
- Z. Liu and Z.-W. Liu (v3, 5 November 2026) prove that every $n$-qubit state with $\mathrm{Tr}\rho^2\le1/(d-a_\ast)$, $a_\ast=1/2.181847\approx0.458327$, is a mixture of stabilizer states, with a constant independent of $n$ (Theorem 1). They call the exact inradius "a natural open problem" ([arXiv:2609.03944](https://arxiv.org/abs/2609.03944v3)).`,
    residual: r`The constant gap between $a_\ast\approx0.458327$ and $\tfrac12$ remains. Sub-targets: a proof for $n=3$, by facet certificates or a dual argument; raising $a_\ast$ uniformly in $n$; or a proof of the Zurel–Davis vertex conjecture, from which the qubit radius would follow.`,
    evidence: [
      { kind: "published",
        role: "progress",
        summary: "Magic states with purity arbitrarily close to 1/(d − 1/2); conjecture that this is the threshold, verified by facet enumeration for n ≤ 2 and numerically up to n = 4 (PRX Quantum 7, 033016).",
        url: "https://arxiv.org/abs/2512.16777v2",
        date: "2026-04-20",
        version: "v2" },
      { kind: "preprint",
        role: "progress",
        summary: "Exact inradius in odd prime dimensions; the multiqubit radius follows from a vertex conjecture on the Λ polytope verified for one and two qubits.",
        url: "https://arxiv.org/abs/2602.22336v2",
        date: "2026-09-30",
        version: "v2" },
      { kind: "preprint", role: "progress", summary: "Every n-qubit state of purity at most 1/(d − a*), a* ≈ 0.458327, is a mixture of stabilizer states, uniformly in n.", url: "https://arxiv.org/abs/2609.03944v3", date: "2026-11-05", version: "v3" },
    ],
    provenance: [],
    relations: [
      { id: "A39", type: "related" },
    ],
    refs: [
      { label: "Liu, Haug, Ye, Liu & Roth, 'Triangle Criterion: a mixed-state magic criterion with applications in distillation and detection', PRX Quantum 7, 033016 (2026)",
        url: "https://arxiv.org/abs/2512.16777" },
      { label: "Liu & Liu, 'On the geometry, typicality, and detectability of quantum magic' (2026 preprint)", url: "https://arxiv.org/abs/2609.03944" },
      { label: "Zurel & Davis, 'Basis-independent stabilizerness and maximally noisy magic states' (2026 preprint)", url: "https://arxiv.org/abs/2602.22336" },
      { label: "Heinrich & Gross, 'Robustness of Magic and Symmetries of the Stabiliser Polytope', Quantum 3, 132 (2019)", url: "https://arxiv.org/abs/1807.10296" },
    ] },
  { id: "E30", cat: "entanglement", horizon: "incremental", status: "improved", reviewedAt: "2026-11-20",
    title: "The copy complexity of separability testing",
    statement: r`Given identical copies of an unknown mixed state $\rho$ on $\mathbb C^d\otimes\mathbb C^d$, determine the optimal number $n_*(d,\varepsilon)$ needed to distinguish a separable state from one at trace distance at least $\varepsilon$ from every separable state, with success probability at least $2/3$. Arbitrary joint measurements on all copies are allowed, and computation time is unrestricted.`,
    definition: r`Write $\mathrm{Sep}_d=\{\sum_i p_i\sigma_i\otimes\tau_i:p_i\geq0,\ \sum_i p_i=1\}$, where $\sigma_i,\tau_i$ are density matrices. The distance is $\inf_{\omega\in\mathrm{Sep}_d}\tfrac12\|\rho-\omega\|_1$. A test is a two-outcome positive-operator-valued measure on $\rho^{\otimes n}$, required to succeed uniformly over both promised classes. This asks for the experimental information needed to detect entanglement even with an unlimited classical decision procedure. [Bădescu and O'Donnell, Sections 1–2](https://arxiv.org/abs/1905.01542v2).`,
    progress: r`Bădescu and O'Donnell prove $n_* = \Omega(d^2/\varepsilon^2)$ for $C/\sqrt d\leq\varepsilon\leq1/2$, with a universal sufficiently large constant $C$. Their reduction uses random states far from the separable set and the difficulty of testing the maximally mixed state. Full tomography followed by an unrestricted separability decision gives $O(d^4/\varepsilon^2)$ copies. [Theorem 4.3](https://arxiv.org/abs/1905.01542v2).

The FOCS 2024 quantum-learning workshop lists the gap between these powers of $d$ as an open problem. Its measurements may be entangled across copies; results restricted to single-copy or local measurements concern different resource models. [Complete workshop problem list, page 4](https://jerryzli.github.io/focs2024-slides/open_questions.pdf).`,
    residual: r`Close the dimension gap, already for a fixed sufficiently small constant $\varepsilon>0$, and determine the precision dependence in its appropriate regimes. Testing against an arbitrary separable state is a composite hypothesis problem; a test against one known reference state does not by itself give the minimax answer.`,
    evidence: [{ kind: "published", role: "progress", summary: "LATIN 2020: lower bound Ω(d²/ε²) when ε is at least a sufficiently large constant times d^(−1/2); tomography gives O(d⁴/ε²).", url: "https://arxiv.org/abs/1905.01542v2", date: "2019-09-09", version: "v2" }],
    relations: [{ id: "E3", type: "related" }, { id: "A17", type: "related" }],
    refs: [
      { label: "Bădescu & O'Donnell, 'Lower bounds for testing complete positivity and quantum separability', LATIN 2020, pp. 375–386 (arXiv v2, 2019)", url: "https://arxiv.org/abs/1905.01542v2" },
      { label: "Chen, Cotler, Huang, Li & Tang, 'Some Open Problems in Quantum Learning', FOCS workshop, 27 October 2024, p. 4", url: "https://jerryzli.github.io/focs2024-slides/open_questions.pdf" },
    ] },
];
