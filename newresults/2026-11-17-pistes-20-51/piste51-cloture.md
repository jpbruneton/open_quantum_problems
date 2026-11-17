# Piste 51 — Clôture de l'approfondissement

17 novembre 2026. **Travail demandé terminé ; originalité substantielle non établie.** Le statut bibliographique du rapprochement reste `non-conclue` : cela ne signifie plus qu'un calcul de cette session attend d'être exécuté. Le problème général sur les algèbres de cônes reste ouvert.

[Note LaTeX](../../research/entries/steering-localization/manuscript/steering-localization.tex) · [PDF](../../research/entries/steering-localization/manuscript/steering-localization.pdf) · [Vérifications](../../research/entries/steering-localization/checks/verify51.py) · [Résultats et empreintes](../../research/entries/steering-localization/data/verification51.json).

## Résultat exact supplémentaire

On conserve la définition du défaut s_B de la [note initiale](piste51.md) : pire erreur de réalisation d'un ensemble fini de la marginale d'Alice, optimisée sur les POVM de Bob, en demi-somme des normes trace des opérateurs sous-normalisés.

Pour l'état pur

\[
|\Psi\rangle=\sqrt p\,|0\rangle_A|b_0\rangle_B|u\rangle_C
+\sqrt q\,|1\rangle_A|b_1\rangle_B|v\rangle_C,
\quad p+q=1,\quad 0<q\leq p,
\]

avec b_0,b_1 orthonormaux et C inaccessible, poser kappa=|<u|v>|. Alors

\[
\boxed{s_B=(1-\kappa)\sqrt{pq},\qquad
\delta_*=\inf_\tau\tfrac12\|\rho_{AC}-\rho_A\otimes\tau\|_1
=q\sqrt{1-\kappa^2}.}
\]

Il s'agit d'égalités démontrées, sans optimisation numérique supposée exacte. La preuve complète est dans le LaTeX.

- **Borne supérieure pour tous les ensembles :** la POVM HJW de l'ensemble cible conserve ses diagonales et multiplie ses termes hors diagonale par kappa. Le coût vaut (1-kappa) sum |z_i| ≤ (1-kappa) sqrt(pq).
- **Borne inférieure atteinte :** l'ensemble binaire des vecteurs sqrt(p)|0> ± sqrt(q)|1>, chacun avec poids 1/2, et le témoin Pauli X donnent la même borne pour toute POVM. La mesure logique X l'atteint.
- **Défaut d'espérance :** la norme trace se décompose en deux blocs de poids p,q. L'inégalité triangulaire donne le minimum en tau=|u><u|.

La mesure porte sur le sous-espace logique de Bob ; toute POVM sur ce sous-espace s'étend à son espace physique. Le nombre de dimensions de l'environnement n'introduit aucun facteur dans ces égalités.

## Un taux spatial démontré dans un modèle explicite

Partir d'une paire sqrt(p)|00>+sqrt(q)|11> sur A,B0 et de qubits d'environnement initialement |0>. Appliquer des rotations d'angles theta_j, contrôlées par A, sur le qubit j. Bob contrôle B0 et les R premiers qubits. Le drapeau B0 maintient l'orthogonalité des branches accessibles.

Si 0≤theta_j<pi/2 et sum theta_j<∞, le produit d'unitaires converge en norme, l'état global est pur et

\[
s_{B_R}=\sqrt{pq}\left(1-\prod_{j>R}\cos\theta_j\right),
\qquad
\sqrt{pq}(1-e^{-V_R/2})\leq s_{B_R}\leq\tfrac12\sqrt{pq}V_R,
\quad V_R=\sum_{j>R}\theta_j^2.
\]

Les bornes concordent au premier ordre en V_R. Pour theta_j=theta0 r^j,

\[
s_{B_R}\sim\frac{\sqrt{pq}\,\theta_0^2}{2(1-r^2)}r^{2(R+1)}.
\]

Le coût opérationnel décroît ici comme le **carré** du majorant de queue de l'unitaire, qui est O(r^R). La note fournit aussi un R suffisant pour une précision donnée et une réalisation de la mesure binaire par annulation des rotations accessibles suivie d'une mesure X sur B0.

Un Hamiltonien parent H=UH0U* possède exactement le gap 1. Les différences avec le parent produit sont sommables en norme. Cela donne un modèle physique mathématiquement défini, mais inhomogène et à interactions de portée non finie. Aucune phase topologique nouvelle n'est construite.

## Ce que cela clôt et ce que cela ne résout pas

Le modèle répond à la question concrète d'un coût d'accès à l'environnement avec borne inférieure atteinte. Il complète le contre-exemple mixte et la borne géométrique pure de la note initiale. À q fixé et kappa proche de 1, s_B est même quadratique en delta_* ; à kappa=0 et q tendant vers zéro, le comportement en racine carrée subsiste. Une borne universelle et un taux dans un modèle fixé ne décrivent donc pas le même régime.

**La géométrie de ce modèle n'est pas celle du corollaire 51.2.** Alice est un qubit fixe, Bob contrôle un segment fini et le reste est inaccessible. Aucun résultat ci-dessus ne prouve que le facteur 2f(t) du corollaire pour cônes est optimal, ni ne fournit une réciproque quantitative pour les sous-facteurs. Ces problèmes ne sont pas déclarés résolus.

## Recherche d'antériorité complémentaire

Requêtes ciblées : `quantum steering ellipsoids complete steering`, `quantum Darwinism spin environment product overlap decoherence`, `steering ensemble trace norm dephasing`, `steering defect dephasing`, `steering distance maximally correlated`. Recherche du 17 novembre 2026, pas une revue exhaustive de citations.

| Source primaire | Passage consulté | Conséquence pour la revendication |
|---|---|---|
| [Jevtic–Pusey–Jennings–Rudolph, 1303.4724v2](https://arxiv.org/html/1303.4724v2) | « Complete and incomplete steering », annexe C | Les contraintes sur les décompositions et la géométrie des états accessibles sont anciennes. Leur « complete steering » concerne les décompositions dans l'ellipsoïde ; notre supremum porte sur toutes les décompositions de la marginale. |
| [Blume-Kohout–Zurek, quant-ph/0505031v2](https://arxiv.org/html/quant-ph/0505031v2) | §III, états à branches et facteurs de décohérence | La structure à deux branches et les produits de recouvrements ne sont pas nouveaux. Leur objet est l'information et sa redondance, pas le minimax défini ici. |
| [Blume-Kohout–Zurek, quant-ph/0408147](https://arxiv.org/abs/quant-ph/0408147) | Résumé et métadonnées | Antécédent supplémentaire du modèle d'environnement de spins ; pas utilisé comme preuve du minimax. |
| [Hughston–Jozsa–Wootters, 1993](https://doi.org/10.1016/0375-9601(93)90880-9) | Résultat classique utilisé ; page éditeur inaccessible lors de cette recherche | Les mesures réalisant les décompositions d'une matrice densité sont un outil standard. La construction utilisée est explicitement vérifiée dans notre preuve. |
| [van Luijk et al., 2608.10783](https://arxiv.org/abs/2608.10783) | Résumé revérifié ; théorème 3 étudié dans la note initiale | L'équivalence exacte entre steering et espérance préservatrice précède cette note. |
| [Wallick–Wilming, 2609.01267](https://arxiv.org/abs/2609.01267) | Résumé revérifié ; §5–6 étudiés dans la note initiale | La connexion avec les anyons et les échecs de dualité approchée est déjà développée. |

La formule exacte sous notre définition n'a pas été identifiée dans ces passages. **Cette absence ne prouve pas l'originalité.** La dérivation est courte et proche de la géométrie de déphasage connue : je ne recommande pas de la présenter comme un nouveau théorème majeur. Le résultat conservé est une note technique reproductible, avec une éventuelle nouveauté de formulation à faire évaluer indépendamment.

## Vérification et provenance

`python -B ../../research/entries/steering-localization/checks/verify51.py` effectue 240 cas d'ensembles, 400 mesures binaires concurrentes, 200 états concurrents pour le défaut d'espérance, 16 cas rationnels, 18 préparations sur la chaîne complète finie, 5 queues géométriques et 4 spectres de Hamiltoniens parents. Les préparations sont calculées directement par contraction du vecteur global, indépendamment de la formule de déphasage. Les tests n'établissent pas les quantificateurs universels : ceux-ci sont traités par les preuves.

NumPy suffit, sans GPU ni solveur SDP. Les empreintes de la source LaTeX et du script figurent dans le [rapport public](../../research/entries/steering-localization/data/verification51.json). Le travail a été dérivé et rédigé avec assistance IA ; il n'a pas été formalisé dans un assistant de preuve.
