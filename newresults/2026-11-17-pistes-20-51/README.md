# Approfondissement des pistes 20 puis 51

17 novembre 2026. Travail demandé après la revue des 150 rapprochements. La consigne initiale de conserver les changements locaux a été remplacée par une autorisation explicite de commit et push. Les preuves ci-dessous sont des dérivations contrôlées dans cette session, pas une certification de nouveauté.

- [20 — Arrondi contraint](piste20.md) : réparation constructive, obstruction à une réparation linéaire universelle et perte en racine carrée pour la réparation terme par terme. Aucun meilleur taux de convergence démontré.
- [51 — Steering et localisation](piste51.md) : contre-exemple à la formulation mixte générale ; borne géométrique 2f(t) dans le cas pur pour des ensembles restreints à une région réduite ; calcul exact d'un défaut de steering en racine carrée.
- [51 — Clôture et modèle exact](piste51-cloture.md) : défaut (1-kappa)sqrt(pq), taux spatial avec borne inférieure atteinte et parent à gap. [LaTeX](steering-localization.tex), [PDF](steering-localization.pdf) et [contrôles](verification51.json). Approfondissement terminé, originalité substantielle non établie.

Les sources et limites de chaque énoncé sont détaillées dans les notes. La validité mathématique et la priorité bibliographique sont deux questions distinctes.

## Résultat du travail

La piste 20 reste ouverte : la réparation proposée fonctionne mais ne donne aucun meilleur exposant. Un exemple montre pourquoi une réparation terme par terme peut perdre une racine carrée ; il ne borne pas la meilleure approximation possible.

L'approfondissement de la piste 51 est terminé. L'implication mixte sans hypothèse supplémentaire est fausse. Dans le cas pur, la proposition 51.2 donne une estimation uniforme en nombre d'issues après restriction des ensembles. Un second modèle, à accès croissant à un environnement de spins, donne un minimax exact et une décroissance spatiale calculée des deux côtés. Cette géométrie ne résout pas le problème général des cônes. Les preuves sont courtes et utilisent des outils connus ; leur intérêt comme résultats originaux reste à établir. Aucun modèle topologique nouveau n'est résolu.

## Reproduire les vérifications

```text
python -B verify.py
python -B verify51.py
```

[Script](verify.py) et [sortie avec empreintes des preuves](verification.json). Exemples rationnels exacts pour les deux pertes en racine et l'obstruction produit ; 36 cas d'arrondi, 54 perturbations d'ensembles, 12 cas de localisation avec jusqu'à 40 issues. NumPy suffit, sans GPU, SDP ni réseau. Les simulations prennent moins d'une seconde sur cette machine lors de l'exécution initiale. Elles contrôlent les identités et bornes finies ; la partie sur les algèbres de cônes repose sur la preuve écrite.

Les recherches d'antériorité ont notamment retrouvé les travaux proches [2607.23689](https://arxiv.org/abs/2607.23689) pour 20 et [2609.01267](https://arxiv.org/abs/2609.01267) pour 51. La connexion générale de chaque piste ne doit pas être annoncée comme nouvelle.

Le second script ajoute 240 ensembles, 400 témoins binaires, 200 concurrents pour le défaut d'espérance, 16 cas rationnels, 18 chaînes finies, 5 queues géométriques et 4 spectres de parents. Il s'exécute en moins d'une seconde. Les antécédents sur les ellipsoïdes de steering et les états à branches sont détaillés dans la clôture.
