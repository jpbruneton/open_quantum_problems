# Audit d'originalité du 17 novembre 2026

## Verdict utilisable

**Aucun antécédent direct repéré pour le certificat sur Z₃ × Z₃ avec les bases position/Fourier fixées.** L'exemple est un candidat crédible à une contribution originale, suffisamment précis pour rédiger une note de recherche destinée à une relecture indépendante. La recherche effectuée ne justifie pas une affirmation de priorité certaine. Elle ne couvre pas toutes les publications, thèses, communications et équivalences possibles.

La validité et la priorité sont deux questions distinctes. Le certificat exact, et maintenant une preuve de positivité par dominance diagonale pondérée, établissent l'énoncé sans tolérance numérique. L'audit n'a trouvé ni son énoncé déjà prouvé pour F₃ ⊗ F₃, ni une implication immédiate des résultats effectivement examinés. Une vérification par les spécialistes reste souhaitable avant une soumission.

## Résultats les plus proches et différences

| Source primaire examinée | Portée utile à l'audit | Conséquence pour notre revendication |
|---|---|---|
| [De Bièvre–Langrenez–Radchenko, 2501.12252v2](https://arxiv.org/html/2501.12252v2), théorèmes 3.1, 5.2, 6.1, section 7 et conclusion | Classification des purs, critère général, égalité pour Zₚᵏ cyclique ; contre-exemples Z₆ et Z₂² ; cas abélien général encore ouvert | La classification des 54 purs est un ingrédient publié. Notre cas Z₃² n'est pas l'un des deux contre-exemples exposés |
| [Spriet, 2507.23628v3](https://arxiv.org/html/2507.23628v3), discussion après l'équation (12) | Conjecture liée à l'ordre total des sous-groupes compacts ouverts | La classification générale par les cycliques de puissance première est déjà une spécialisation finie de cette piste conjecturale, pas une nouvelle conjecture à nous attribuer |
| [Thio et al., 2506.08092v2](https://arxiv.org/html/2506.08092v2), après l'équation (17), notes VI–VII | États exotiques pour deux qubits et tout nombre supérieur de qubits ; recherche par facettes | **Correction de l'exploration initiale : la famille Z₂ⁿ est déjà explicitement connue. La méthode de recherche par facettes n'est pas nouvelle** |
| [Burkat–Strelchuk, 2502.11784v4](https://arxiv.org/pdf/2502.11784v4), pages 2–4, résultats et annexes B/D ciblées | Unitaries qui préservent la positivité, DFT cyclique et extensions tensorielles ; les exemples exotiques discutés sont DFT₆ et H⊗ⁿ | Ni l'existence d'unitaires qui préservent KD+, ni la classification de ces unitaires ne donne directement notre séparation sur F₃ ⊗ F₃ |
| [Cai–Yang–Zheng, 2603.13863v1](https://arxiv.org/html/2603.13863v1) | DFT cyclique, graphes et sous-espaces associés | Distinguer F₉ de F₃ ⊗ F₃ ; l'égalité cyclique en dimension neuf ne réfute pas notre certificat |
| [Xu, 2412.16945v1](https://arxiv.org/html/2412.16945v1) | Enveloppe linéaire réelle des purs pour la DFT cyclique | Une combinaison linéaire réelle n'est pas une combinaison convexe ; ce résultat ne tranche pas notre question |
| [Langrenez–Arvidsson-Shukur–De Bièvre, 2306.00086v1](https://arxiv.org/html/2306.00086v1), sections 5.2–5.4 et annexe C | États mixtes exotiques pour certains couples de bases ; cas Fourier premier | L'existence d'états exotiques en général est déjà connue et ne constitue pas notre contribution |
| [Langrenez–De Bièvre–Arvidsson-Shukur, 2407.04558v1](https://arxiv.org/html/2407.04558v1), sections 2 et 4, annexe B | Enveloppes convexes, témoins, exemples de spin un | Le phénomène, les témoins de séparation et le vocabulaire sont antérieurs |
| [Thèse de J. Thio, 2026](https://www.repository.cam.ac.uk/items/f573fe06-ffcc-4599-8c9c-e60fe9b74b0f), théorème 2.2.3, PDF p. 67 / imprimée 52 | Existence pour un couple de bases dans toute dimension impaire > 2 ; transition I−2|+⟩⟨+| | En dimension neuf, les modules des entrées sont 7/9 et 2/9, contre 1/3 pour notre Fourier. Cette construction ne traite donc pas automatiquement notre couple fixé |
| [Thèse de C. Langrenez, 2025](https://pepite-depot.univ-lille.fr/LIBRE/EDMADIS/2025/2025ULILB013.pdf), chapitre 4 et section 6.2 ciblés | Contexte fini abélien et perspectives | Une question de thèse peut être résolue dans une publication ultérieure : le cas Z₂ⁿ ci-dessus en donne précisément l'exemple |

Les titres, références et introductions des textes proches ont aussi servi à élargir la recherche. Il s'agit de lectures ciblées, pas d'un audit de toutes les démonstrations de chacun de ces textes.

## Ce qui peut être présenté dans la note

1. Un état explicite pour Z₃², KD strictement positif, hors de l'enveloppe des purs, avec preuve exacte courte et borne de séparation.
2. La spécialisation aux ensembles KD d'un argument de plongement/rétraction, pour les sous-groupes et quotients abéliens finis ; la conservation de distance découle de la contraction de la norme trace. La technique générale des rétractions est standard ; seule la vérification des applications KD constitue ici le contenu spécifique.
3. Des conséquences pour les groupes ayant Z₃² comme sous-quotient et, en combinant des cas connus, les groupes d'ordre 2ᵃ3ᵇ. Aucune priorité certaine n'est revendiquée pour ces conséquences.

Ne pas revendiquer : l'invention des états exotiques, le premier exemple de dimension neuf pour des bases arbitraires, la méthode des facettes, les familles de qubits, ni la classification abélienne générale conjecturale.

## Requêtes et limites

Recherche web, incluant les variantes exactes :

```text
"Kirkwood-Dirac" "exotic" "Fourier"
"Kirkwood-Dirac" "mixed" "abelian"
"Kirkwood-Dirac" "Z_3" "convex"
"Kirkwood-Dirac" "noncyclic"
"Kirkwood-Dirac" "non-cyclic"
"Kirkwood-Dirac" "finite fields"
"Kirkwood-Dirac" "qutrits" positivity
"Kirkwood-Dirac" "two-qutrit"
"Kirkwood-Dirac" "tensor" "mixed states" exotic
"Kirkwood-Dirac" "tensor product" "convex hull"
"Kirkwood-Dirac" "subquotient"
"Kirkwood-Dirac" "subgroup" "retraction"
"Kirkwood-Dirac" "subgroups" "convex" "2026"
"2501.12252" "positivity" "2026" "qutrit"
"Kirkwood-Dirac" "Z₃"
```

Les recherches précédentes du 16 novembre comportaient aussi les variantes `elementary abelian`, `prime squared counterexample`, `subgroup quotient convex hull positive`, `hereditary` et `subgroup trace distance`. Les variantes typographiques donnent parfois beaucoup de bruit. Le corpus local quant-ph couvre seulement deux ans et n'est pas une base d'antériorités complète. Les articles citants n'ont pas été parcourus au moyen d'un graphe bibliométrique exhaustif. Les personnes concernées n'ont pas été contactées.

Conclusion documentaire : `not-found-in-documented-search`, avec originalité plausible pour le cas fixé Z₃² et priorité restant à vérifier.
