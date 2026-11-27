const formalConjectures = "https://github.com/google-deepmind/formal-conjectures/blob/d8d031d4998c78575159ccab9a7a9e95ce043883/FormalConjectures";
const openFrontiers = "https://huggingface.co/datasets/FlippyDora/OpenFrontiers-Bench/blob/main/lean/FrontierBench";
const openAI = "https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/lean/ComparatorChallenges";
const psi = "https://github.com/physical-superintelligence/oqp-batch-2026/blob/7049357c42a8fe85262da08fdc10d57b4d9e67a0";

const threeCopyWerner = [
  { label: "PSI · three-copy distillability of qutrit Werner states", url: `${psi}/oqp02-three-copy-werner/lean/Challenge.lean` },
];

// Each label states what the linked source actually formalizes. A paper link
// is identified as an author's report when no public Lean source was located.
export const LEAN_FORMULATIONS = {
  M5: [
    { label: "CertifiedGaps · uniform gap on even spin-one Heisenberg rings, conditional on finite trace inputs", url: "https://github.com/LionSR/CertifiedGaps/blob/77b55881495a059ed22123e4e85eaaa8c3faa422/code/lean/CertifiedGaps/Heisenberg/Main.lean" },
  ],
  B13: [
    { label: "OpenAI · ground-state condensation in the dilute hard-sphere case", url: `${openAI}/HardSphere.lean` },
  ],
  B14: [
    { label: "OpenAI · uniform spectral gap for the spherical Laughlin Hamiltonian", url: `${openAI}/Laughlin.lean` },
    { label: "OpenAI · planar Laughlin gap inequality", url: `${openAI}/LaughlinPlanar.lean` },
  ],
  B18: [
    { label: "OpenAI · spontaneous magnetization of a low-temperature Heisenberg ferromagnet in dimension three and higher", url: `${openAI}/Heisenberg.lean` },
  ],
  E1: threeCopyWerner,
  E2: threeCopyWerner,
  E10: [
    { label: "Baghali Khanian and Negari · authors’ report of a Lean formalization of nonadditivity for Werner states (paper)", url: "https://arxiv.org/html/2610.03630v1" },
  ],
  E14: [
    { label: "Formal Conjectures · classify all pairs of party count and local dimension admitting an AME state", url: `${formalConjectures}/OpenQuantumProblems/35.lean` },
    { label: "OpenFrontiers R17 · the seven-party classification", url: `${openFrontiers}/R17.lean` },
    { label: "Four parties of local dimension six · explicit existence proof", url: "https://github.com/zblore/fc-ame-4-6/blob/d42273127096f5cbdc2c05f6d727f2dc75d5ea81/AME46/FormalTarget.lean" },
  ],
  E21: [
    { label: "Adesso · algebraic and analytic certificates for the two-mode result and the many-pair EPR inequality", url: "https://github.com/gerardo-adesso/gaussian-eof/blob/1d70fb1a181a9ff1e194363f7a535d68aec9245e/README.md" },
  ],
  E22: [
    { label: "Bogner · logarithmic entanglement lower bound for inner-product routing", url: "https://github.com/kevinbogner/f-routing-lean/blob/e1ff65953f6c99c65cb5f67f7fa99cae97fb89b9/FRouting/EntanglementFormationMain.lean" },
  ],
  E26: [
    { label: "Formal Conjectures · Krenn–Gu equations over complex weights for all even vertex counts of at least six", url: `${formalConjectures}/Paper/MonochromaticQuantumGraph.lean` },
    { label: "Six vertices and three colours · nonexistence certificate for unrestricted complex weights", url: "https://github.com/algal/krenn-gu-6x3-certificate/blob/c04696e515e0c02be140353fb52ea60c62e827b1/KrennGuCertificate/Unrestricted.lean" },
    { label: "Kitamura · at most N − 2 colours for every even N ≥ 6, over every integral domain", url: "https://github.com/KitaKen1/monochromatic-quantum-graph-sharp-bound-lean/blob/6c5340384479dbb36129b2e0084449be2458cce2/lean/QuantumCR/SharpDegreeBound.lean" },
    { label: "Kitamura · no solution with integer weights for every even N ≥ 6 and D ≥ 3", url: "https://github.com/KitaKen1/monochromatic-quantum-graphs-lean/blob/d3ed1892ef181f5f5f5d61d9b5817f05b53a6675/lean/QuantumLean/IntegerConclusion.lean" },
    { label: "Kitamura · ten vertices and eight colours, over every integral domain", url: "https://github.com/KitaKen1/monochromatic-quantum-graph-n10-d8-lean/blob/a9309005c7a27a2615f8e7eebef7a1db017809ab/lean/QuantumGraphTenEightFC.lean" },
  ],
  N1: [
    { label: "Formal Conjectures · existence of a SIC-POVM in every positive dimension", url: `${formalConjectures}/OpenQuantumProblems/23.lean` },
    { label: "Māris Ozols · existence in every positive dimension, formulated with rank-one projectors", url: "https://github.com/marozols/SIC-existence/blob/91e3a438beb8dd4f580fd56195479981f0db49bd/MainResults.lean" },
    { label: "Hertaspace · the Formal Conjectures existence statement in a separate proof repository", url: "https://github.com/Hertaspace/sic-povm-lean/blob/0f4ec7ea0970657d11dbbf8a1917e95de820aac1/SICLean/Solution.lean" },
  ],
  N2: [
    { label: "Formal Conjectures · maximum number of mutually unbiased bases in dimension six", url: `${formalConjectures}/OpenQuantumProblems/13.lean` },
    { label: "OpenFrontiers O37 · the same dimension-six question as a benchmark", url: `${openFrontiers}/O37.lean` },
    { label: "OpenAI · upper bound of five bases in dimension six", url: `${openAI}/MUBSix.lean` },
    { label: "Cárdenes Wuttig and Tindall · exclusion of four bases from externally checked interval certificates", url: "https://github.com/JoeyT1994/NoFourMUBS/blob/827b48379bf52fc0272654afe54f682f7eb77036/README.md" },
  ],
  N3: [
    { label: "Formal Conjectures · definition of a complete MUB family and the broader question of the maximum in each dimension", url: `${formalConjectures}/OpenQuantumProblems/13.lean` },
  ],
  N4: [
    { label: "Gao, Yu and Zhi · an explicit game separating the approximate quantum and commuting-operator models", url: "https://github.com/leanhnhe091221-boop/explicit-linear-system-game-formalization/blob/216c052eafb48cc89ef2c7d7061800b18962d72c/ThomGame/Construction/NonlocalGameSeparation.lean" },
  ],
  N14: [
    { label: "PSI · part B for projective measurements on maximally entangled states", url: `${psi}/oqp27-cglmp-inequalities/lean/Challenge.lean` },
    { label: "Mishra and Senthilkumar · part B for complete von Neumann measurements, including the assumptions used above 20 outcomes", url: "https://github.com/anshM123/IQOQI-OQP-27/blob/d5213b7b1c9975b8cc0f16d55e3baa9c4ba451a0/formal-conjectures-27/STATEMENT_FOR_REVIEW.md" },
  ],
  N16: [
    { label: "PSI · vacuum Bell correlations for two fixed bounded regions at sufficiently large separation", url: `${psi}/oqp12-vacuum-bell-correlations/lean/Challenge.lean` },
  ],
  C5: [
    { label: "Zhu and Wang · a pair of zero-private-capacity channels with positive joint private capacity", url: "https://github.com/QudeLeap/lean-private-capacity/blob/31da985b72057ae7e8c7a07103df8632e05757c0/QIT/Coding/Private/TransitionSuperactivation.lean" },
  ],
  C6: [
    { label: "Buys, Polak and Zuiddam · lower bound on the Shannon capacity of the seven-cycle", url: "https://github.com/spectra-research/shannon-capacity-lean/blob/aa21eeb12b75b0413d3fa9fb4208b5d0bf2c4d65/ShannonBounds/CapC7.lean" },
  ],
  C12: [
    { label: "OpenAI · a trace-preserving PPT channel in dimension 21 whose square is not entanglement breaking", url: `${openAI}/DimensionTenChannel.lean` },
    { label: "OpenAI · two PPT maps in dimension ten whose composition is not entanglement breaking", url: `${openAI}/DimensionTenPair.lean` },
    { label: "PSI · entanglement breaking after a dimension-dependent number of PPT compositions", url: `${psi}/ppt-composition-bound/lean/Challenge.lean` },
  ],
  A11: [
    { label: "Physical Superintelligence · the Aaronson–Ambainis influential-variable conjecture in the original normalization", url: "https://github.com/physical-superintelligence/aaronson-ambainis/blob/2a6ceaef872ae993708950f951989134084b851a/AaronsonAmbainis/Conjecture.lean" },
  ],
  A20: [
    { label: "OpenAI · bounded-error parity lower bound for constant-depth quantum circuits with zero-initialized ancillas", url: `${openAI}/QACParity.lean` },
  ],
  A24: [
    { label: "Stabilizer Rank Challenge · nine-term upper bound for seven copies in a Clifford-equivalent basis", url: "https://github.com/unitaryfoundation/stabrank/blob/c0f1521c2702107aae3b14c1b0d95929fe507c7c/lean_proofs/LeanProofs/QubitHM7StabRank.lean" },
  ],
  A32: [
    { label: "Contributor submission to Formal Conjectures · maximum guaranteed code dimension for a given error-space dimension", url: "https://github.com/zblore/formal-conjectures/blob/59acd41c63767efa847eb926a02f2e8a44ad2e87/FormalConjectures/OpenQuantumProblems/14.lean" },
  ],
  A34: [
    { label: "Deng et al. · lower bounds beyond n/2 queries for explicit symmetric Boolean functions (Lean package)", url: "https://drive.google.com/file/d/1YByxN8GeiwrGXNzsDj_wpVjKhYLUqT8q/view?usp=sharing" },
  ],
  F9: [
    { label: "PSI · a four-qubit process that is extensibly causal and admits no purification", url: `${psi}/oqp43-extensible-causality/lean/Challenge.lean` },
  ],
};
