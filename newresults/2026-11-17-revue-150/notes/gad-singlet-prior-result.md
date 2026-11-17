# Pistes 149–150 : une conjecture GAD et son antériorité

17 novembre 2026. Statut : conséquence d'un critère antérieur, pas un théorème inédit. Le problème général de placement de source n'est pas résolu ici.

## Énoncé ciblé

[2506.06089](https://arxiv.org/html/2506.06089), conjecture numérique 8, demande si deux copies identiques d'un canal de damping généralisé (GAD) préservent de l'intrication pour au moins un état exactement lorsqu'elles la préservent pour le singulet. Le texte vérifie numériquement une frontière avec un SDP.

## Calcul sur le singulet

Notons gamma la probabilité de damping, n la population d'équilibre d'un niveau, q=1-gamma et c=n(1-n). L'échange n vers 1-n ne change pas le résultat. Dans une convention où a=1-gamma(1-n) et b=gamma n sont les probabilités de sortie 0 conditionnées aux entrées 0 et 1, l'image du singulet a populations ab et (1-a)(1-b) sur 00 et 11, et cohérence -q/2 entre 01 et 10. Sa transposée partielle est NPT si et seulement si

q^2/4 > ab(1-a)(1-b) = c gamma^2(q+c gamma^2).

En factorisant cette quadratique en q, et puisque q,c sont non négatifs, cela équivaut à

1-gamma > 2(1+sqrt(2)) n(1-n) gamma^2.

L'égalité est la frontière PPT. Les cas n=0,1 donnent survie jusqu'à gamma=1.

## Critère antérieur qui ferme cette conjecture particulière

[Filippov–Frizen–Kolobova, PRA 97, 012322 (2018)](https://doi.org/10.1103/PhysRevA.97.012322), [1708.08208v2](https://arxiv.org/pdf/1708.08208v2), exemple 3, équation (49), donne la frontière d'annihilation de toute intrication pour deux processus GAD identiques. Après substitution gamma=1-exp(-2 r t), avec r leur taux de bain, elle est

gamma_* = (sqrt(1+8(1+sqrt(2))c)-1)/(4(1+sqrt(2))c), pour c>0.

C'est exactement la racine de 1-gamma=2(1+sqrt(2))c gamma^2 obtenue sur le singulet. Le domaine EA comprend la frontière par fermeture du cône séparable en dimension finie. Le critère antérieur, combiné au déterminant explicite, implique donc l'équivalence demandée dans la conjecture 8. Il n'est pas nécessaire de générer une nouvelle application indécomposable pour la prouver.

La priorité de la caractérisation EA appartient au travail antérieur ; je ne revendique pas l'originalité de cette réduction de la conjecture. Le texte de 2025 cite des travaux EA de 2012 et 2013, mais la recherche dans sa bibliographie n'a pas retrouvé le titre de 2018. Ce constat bibliographique ne remplace pas un audit exhaustif des versions et commentaires ultérieurs.

Le script `../verify_gad_singlet.py` contrôle rationnellement les populations, la trace et l'identité du déterminant pour plusieurs paramètres. La fermeture de la conjecture utilise aussi le théorème publié de 2018, pas seulement ces exemples.

## Limites du rapprochement

Les sorties sont deux qubits : PPT est déjà un critère exact de séparabilité, et les applications positives de M2 vers M2 sont décomposables. Les recherches d'applications indécomposables de [2508.21348](https://arxiv.org/abs/2508.21348) et [2605.14644](https://arxiv.org/abs/2605.14644) n'ajoutent donc pas directement de pouvoir de détection à ces sorties. Une extension en dimension supérieure serait une autre question. La conjecture 6 du placement de source, portant sur deux canaux généraux et un autre SDP, reste distincte et n'est pas démontrée ici.
