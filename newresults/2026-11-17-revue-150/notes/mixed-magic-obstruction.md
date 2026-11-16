# Pistes 3, 4 et 9 : l'information mutuelle ne se transporte pas directement aux mélanges

Statut : obstruction élémentaire vérifiée, sans revendication d'originalité. Elle ne réfute pas les théorèmes publiés sur les états purs. Elle exclut un prolongement naïf envisagé pendant la revue.

Les rapprochements associent les états fixes MPS et leur nonstabilizerness à des MPDO stationnaires ou des phases intrinsèquement mixtes. Les cadres diffèrent : un théorème sur des états purs et circuits unitaires peu profonds ne devient pas un témoin pour l'enveloppe convexe des stabilisateurs mixtes et des canaux locaux.

Pour n ≥ 2 et 0 < p < 1, considérons

\[
\rho_{n,p}=p|0^n\rangle\langle0^n|+(1-p)|1^n\rangle\langle1^n|.
\]

C'est un mélange explicite de deux purs stabilisateurs. Il est diagonal, séparable et admet une représentation MPDO de dimension de lien deux, avec poids de bord p et 1−p. Pour deux régions non vides disjointes A et B, chaque réduction non vide a les valeurs propres p et 1−p ; donc

\[
I(A:B)_{\rho_{n,p}}=h_2(p).
\]

Cette valeur est génériquement non entière, indépendamment de la séparation des régions. L'information classique à longue portée peut donc donner une information mutuelle non entière dans un mélange de stabilisateurs, sans aucune magie au sens de la sortie de leur enveloppe convexe. La présence de cette valeur ne suffit pas à elle seule à généraliser le témoin pur.

Pour les exemples CSS sous bruit de Pauli, un second contrôle est immédiat : un canal mélangeant des Pauli envoie un stabilisateur pur sur un mélange de stabilisateurs. On ne peut donc conclure à de la nonstabilizerness parce que l'état possède une structure topologique mixte. Cela ne classe pas les exemples non abéliens ou le semion chiral.

## Antériorités et portée

- [2502.19504](https://arxiv.org/abs/2502.19504) concerne les critères MPS purs ; sa transposition est l'objet de notre test, pas une affirmation des auteurs.
- [2501.10552v2](https://arxiv.org/html/2501.10552v2), V.2 et VI.3 : préparation dissipative et espace stationnaire. Il faut notamment distinguer convergence vers un espace stationnaire et préparation d'un état précis de cet espace.
- [2507.22989v2](https://arxiv.org/html/2507.22989v2), V.2 : construction CSS sous bruit de Pauli.
- [2509.03600v1](https://arxiv.org/html/2509.03600v1) : cadre pré-bialgébrique ; aucune implication magique ne résulte du seul mot « point fixe ».
- [Bilinskaya et al., PRL 137, 190402 (2026)](https://journals.aps.org/prl/abstract/10.1103/4t3l-hy7z) fournit déjà des témoins par l'information à différentes échelles. Sa discussion mentionne l'étude des phases mixtes comme prolongement ; il ne faut pas attribuer cette direction à la présente revue.

Requêtes du 17 novembre 2026 : `"Long-range nonstabilizerness" "mixed"` et `"Parent Lindbladians" "nonstabilizerness"`. Le calcul ci-dessus est une obstruction élémentaire à un transfert envisagé, pas un théorème inédit. Aucune identification entre l'ensemble des stabilisateurs projecteurs normalisés et leur enveloppe convexe n'est supposée.
