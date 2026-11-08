# Comparaison avec d'autres catalogues — 8 novembre 2026

Note de travail (auxiliaire, non publiée sur le site). Elle compare le catalogue OQM à :

- **QIQCOP Zoo** — <https://qiqc-op.com/> (code : <https://github.com/Naixu-Guo/quantum-open-problems>). 217 problèmes, 179 « Unsolved » / 38 « Solved », 7 domaines, 63 thèmes, mis à jour le 6 novembre 2026. Récupéré via l'API publique `api/index.json` puis `api/problems/<id>.json` (217 fiches complètes).
- **Open Quantum Problems, IQOQI Vienne** — <https://oqp.iqoqi.oeaw.ac.at/open-quantum-problems>. 29 problèmes ouverts listés ; dernier ajout le 8 janvier 2026 ; colonne « Last Progress » figée à 2023.

Rien dans `app/data/` n'a été modifié. Les points ci-dessous sont des pistes : chaque source signalée doit encore être lue avant intégration, sauf mention « vérifié ».

## 1. Résumé

- **Recouvrement.** Environ 45 des 217 fiches QIQCOP correspondent à une entrée OQM. Le recouvrement se concentre sur les canaux, l'intrication, la complexité et les SIC/MUB. QIQCOP n'a rien en théorie spectrale (M), many-body (B), QFT, fondements conceptuels (F), systèmes ouverts (O) ni indécidabilité (U), hormis U4.
- **Statuts.** QIQCOP n'a que deux statuts : un résultat complet en prépublication est marqué « Solved » avec une mention de prépublication (politique explicite). OQM distingue « Claimed solved » de « Solved ». Plusieurs différences de statut viennent seulement de cette différence de politique.
- **Divergence majeure (vérifiée) : N1, existence des SIC.** QIQCOP signale un manuscrit de Radchenko et Wheeler, daté du 4 octobre 2026. Sa §9.2 revendique l'existence des SIC (la partie existence de la conjecture de Zauner) **en toute dimension**. N1 est encore « Open » chez nous, sans mention de ce texte.

## 2. Divergences de statut ou d'information

| OQM | Statut OQM | Fiche QIQCOP | Statut QIQCOP | Analyse |
| --- | --- | --- | --- | --- |
| **N1** SIC-POVMs | Open | SIC existence in every dimension; WH-covariant SICs; Zauner-symmetric fiducials | Unsolved, avec « significant reported progress » | **Vérifié.** Radchenko & Wheeler, [*Stark units for real quadratic fields and reciprocity laws*](https://www.danrad.net/papers/stark-reciprocity.pdf) (4 oct. 2026, manuscrit personnel, pas sur arXiv). Le texte prouve que les valeurs des dilogarithmes quantiques finis de [RW26, arXiv:2609.21892](https://arxiv.org/abs/2609.21892) sont des unités algébriques, avec la loi de réciprocité. La §9.2 combine cela avec Appleby–Flammia–Kopp (arXiv:2501.03970, Thm 1.46) pour conclure à « $d^2$ complex equiangular lines in $\mathbb C^d$ for every $d\ge4$ », donc l'existence en toute dimension. Le disclaimer indique que le document a été **généré par des LLM puis édité par les auteurs**, après la communication d'un chercheur indépendant (Imran Zaidi, 29 sept.). Ce dernier revendiquait déjà Zauner pour certaines dimensions paires. **Action proposée :** passer N1 en *Claimed solved* (résolution complète annoncée, non relue par des pairs), avec la provenance IA, en citant aussi AFK arXiv:2609.39192 (ghost r-SICs). Notre ajout du 8 nov. (Khodaiemehr, réduction conditionnelle) devient secondaire. |
| **N2** MUB d=6 | Claimed solved | Maximum number of MUBs (toute dimension $d$) | Unsolved (fiche maj. 7 oct.) | Pas de vraie divergence : leur fiche porte sur toutes les dimensions et note que $\mu(6)=3$ est revendiqué. Elle ne cite pas encore la 2e preuve de Cárdenes Wuttig–Tindall (arXiv:2611.06917, 4 nov.). |
| **E10** Additivité de $E_P$ | Claimed solved (Baghali Khanian–Negari, arXiv:2610.03630) | Additivity of the entanglement of purification | Unsolved (maj. 25 sept.) | Leur fiche s'arrête aux résultats de Rényi (arXiv:2608.28897) et ne connaît pas la revendication du 2 oct. pour $\alpha=1$. Pas d'action chez nous. |
| **A7** qLTC bons | Claimed solved (arXiv:2609.20780) | Asymptotically good quantum LTCs | Unsolved (« literature checked through 15 September ») | Leur vérification s'arrête avant la prépublication du 20 sept. que nous citons. Pas d'action chez nous ; à recontrôler que notre source couvre bien poids de contrôle borné, distance et taux linéaires, et soundness constante. |
| **C4** Strong converse, capacité quantique | Claimed solved | Strong converse for the quantum capacity of a general channel | Solved | Même source (arXiv:2609.08998 et 2609.11771). La différence vient seulement de la politique de statut. Ils notent que les deux articles partagent Tomamichel comme auteur et ne sont donc pas indépendants ; argument utile à reprendre dans notre contexte. |
| **C12** PPT² | Claimed solved | The PPT-squared conjecture | Solved | Même source OpenAI ; différence de politique seulement. |
| **E16** Clé nulle | Claimed solved | Secret key from every entangled state | Solved | Idem. |
| **C10** Inégalité EPnI | Improved (revendication OpenAI notée) | Entropy photon-number inequality | Unsolved (preuve OpenAI documentée) | Cohérent. |
| Watchlist « OpenAI quantum computation » | non compté | Parity is not in QAC0 | **Solved** | Ils s'appuient sur le manuscrit OpenAI **et** sur une simplification indépendante : Gao, Ji, Liu, [*A simplified proof of PARITY ∉ QAC0*](https://eccc.weizmann.ac.il/report/2026/258/) (ECCC TR26-258, 18 oct. 2026). Cette 2e source est un vrai engagement indépendant. **Action proposée :** l'ajouter au watchlist, voire créer une entrée A (complexité des circuits en profondeur constante). |

## 3. Sources citées par QIQCOP et absentes chez nous (à lire avant intégration)

| Entrée OQM visée | Source | Ce que QIQCOP en dit |
| --- | --- | --- |
| N1 | Radchenko–Wheeler, manuscrit du 4 oct. (voir §2) ; RW26 arXiv:2609.21892 | Revendication complète, générée par LLM et éditée par les auteurs. |
| F3 (principes, causalité informationnelle) | Das Bhowmik & Banik, *Almost-Quantum Correlations Violate Information Causality*, arXiv:2610.41444v1 | Contre-exemple fini : les corrélations presque quantiques violent la causalité informationnelle. Complète Pompili–Weilenmann, déjà cité. |
| E9 (évaluation de $E_C$) | Fang, *Entanglement cost of quantum depolarization*, arXiv:2610.00187v1 | $E_C=E_F$ pour tous les états de Bell-diagonaux qubits intriqués, donc pour Werner/isotropes $d=2$. Nouvelles bornes pour $d\ge3$. C'est un cas structuré d'évaluation exacte, ce que E9 demande. |
| A12 (GBS) | Zhao (arXiv:2609.01008, 2609.06526), Zhang (arXiv:2610.00112) | Anti-concentration des hafniens gaussiens complexes (ingrédient GBS), avec formalisation Lean (Zhao). |
| A13 (RCS) | Go, Oh, Jeong, arXiv:2607.20804 | Transfert d'hypothèse au bruit dépolarisant local ; ne prouve pas la dureté. |
| A7 | Li, Li, Liu, arXiv:2604.01874 | qLTC presque bons avec portes CCZ transversales. |
| E14 (AME) | Cha, arXiv:2603.13442 (pas d'AME(4,6) stabilisateur) ; arXiv:2603.18193 | Obstructions stabilisatrices. |
| O10 | arXiv:2609.15902 ; Bakshi et al., arXiv:2607.28536 (mélanges PEPS exacts à liaison constante en 1D) | À croiser avec nos ajouts MLSI 1D. |
| N11 / non-localité multi-copies | Renner, Lobo, Konderak, Augusiak, Acín, arXiv:2604.26605 | Tout état pur intriqué atteint un contenu local nul sur assez de copies. |
| E5/E6 (irréversibilité) | Sen & Lami, arXiv:2607.27195, 2608.02587 | Famille « flower states » ; mesures calculées. |
| E1/E2 | arXiv:2608.03710 | Troisième référence sur la distillabilité à deux copies des états de Werner (nous citons déjà 2607.24309 et 2607.24479). |

## 4. Problèmes présents chez QIQCOP, absents chez OQM (candidats)

Regroupés par thème ; ce sont les fiches **Unsolved** les plus nettes et les plus « sharp ». Le fichier [`2026-11-08-new-problems-proposal.md`](../reviews/2026-11-08-new-problems-proposal.md) en recoupe déjà une partie.

- **Cryptanalyse et algèbre quantiques :** HSP diédral en temps polynomial ; SVP approché et LWE en temps quantique polynomial ; isomorphisme de graphes (déjà A14) ; coût total en portes et espace logique sous-linéaire pour factoriser RSA.
- **Complexité en requêtes :** Graph Collision et Triangle Finding ; chemin dans les Welded Trees ; compromis temps-espace pour la collision ; KKL quantique au point extrême.
- **Codes correcteurs :** qLDPC atteignant la borne de hashing de Pauli ; bornes de distance des codes qubits ; codes MDS stabilisateurs de longueur maximale ; petits codes ((7,3,3)), [[11,3,3]] à poids 4, codes invariants par permutation ; mémoire auto-correctrice 3D (déjà dans notre watchlist) ; « tough error models » (IQOQI #14).
- **Shannon quantique :** capacité d'un canal de Pauli qubit (généralise C11) ; dépolarisant en dimension $d\ge3$ ; intrication écrasée et capacité privée du dépolarisant ; capacités à deux voies de l'amortissement d'amplitude et de l'amplificateur thermique (à rattacher à C3) ; seuil de positivité et version à énergie contrainte de l'atténuateur thermique (sous-cibles de C2) ; inégalité de Zhang–Yeung pour l'entropie de von Neumann (sous-cible concrète de E13).
- **Ressources et magie :** croissance du rang stabilisateur de $|T\rangle^{\otimes n}$ ; seuils de distillation de magie (qutrits, états T déphasés) ; rayon inscrit du polytope stabilisateur.
- **Apprentissage et tomographie :** complexité en copies du shadow tomography ; apprentissage hamiltonien sans contrôle à temps court ou depuis des états de Gibbs à toute température ; test d'identité d'états de Gibbs locaux.
- **Cryptographie :** unitaires pseudo-aléatoires à partir de circuits aléatoires ; superactivation de la clé secrète ; information liée (« bound information », IQOQI #47) ; coût d'intrication du f-routing (IQOQI #48).
- **Non-localité :** toutes les inégalités de Bell et les facettes de polytopes ; semi-algébricité de l'adhérence de l'ensemble quantique ; non-localité multi-copies de tout état intriqué ; simulation par boîtes PR ; violation CHSH du vide à longue distance (IQOQI #12).

## 5. Couverture propre à OQM

Ces entrées n'ont pas d'équivalent chez QIQCOP ni à l'IQOQI. C'est une différence de positionnement à mettre en avant (page « Related catalogues ») :

- **Physique mathématique et spectrale :** M1–M13 (ionisation, Anderson, Haldane, QUE, Lieb–Thirring…).
- **Many-body :** B1–B15 (loi d'aire 2D, ETH, Hubbard, kagome, Laughlin…).
- **QFT :** QF1–QF11 (Yang–Mills, QED₄, fermions chiraux…).
- **Fondements :** F1–F11.
- **Systèmes ouverts et thermodynamique :** O1–O10.
- **Indécidabilité :** U1–U5.
- **Suivi propre à OQM :** le statut *Claimed solved* et l'enregistrement des déclarations d'usage d'IA (`provenance`), qui n'existent pas chez QIQCOP.

## 6. Correspondance avec la liste IQOQI

La plupart des 29 problèmes IQOQI ont un équivalent chez nous : #2 → E1/E2 ; #13 → N2/N3 ; #15 → absolument séparable (QIQCOP « Absolute separability from spectra ») ; #20 → E6/E7 ; #23 → N1 ; #24 → E16 ; #35 → E14 ; #38 → C12 ; #43 → F9 ; #44 → E3 ; #45 → A19 ; #46 → O-série (thermodynamique). La liste IQOQI ne note aucune des revendications de 2026 : PPT², clé nulle, SIC, MUB. Elle est donc en retard sur les deux autres catalogues.

## 7. Actions proposées

1. **N1 → Claimed solved** sur la base de Radchenko–Wheeler (manuscrit du 4 oct.), avec provenance IA et lecture de la §9.2 et de AFK Thm 1.46. Priorité haute.
2. Ajouter Das Bhowmik–Banik (F3) et Fang (E9) après lecture.
3. Ajouter Gao–Ji–Liu (ECCC TR26-258) au watchlist QAC0 ; envisager une entrée dédiée.
4. Reprendre la remarque de QIQCOP sur la non-indépendance des deux preuves du strong converse (C4).
5. Ajouter sur le site une section « Related catalogues » (QIQCOP Zoo, IQOQI, QMBL, OpenProblemBench).
6. Puiser dans la §4 pour de nouvelles entrées, en coordination avec le fichier de propositions du 8 novembre.
