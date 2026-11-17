# Revue individuelle des 150 rapprochements

Campagne du 17 novembre 2026. **150/150 rapprochements examinés et consignés**, portant sur 156 articles distincts. Les approfondissements ont été effectués au fil de la lecture. Aucun commit supplémentaire après la demande d'arrêt des commits ; `checkpoint.py` a été remplacé par un validateur local qui n'invoque plus Git.

Mise à jour : l'utilisateur a ensuite demandé explicitement « Fusionne commit push puis continue et termine 51 ». Les commits et le push sont donc de nouveau autorisés ; le validateur reste indépendant de Git.

## Bilan et portée

| Décision | Nombre | Sens |
|---|---:|---|
| Écartée | 132 | Aucun prolongement assez précis/prometteur trouvé, ou obstacle au transfert envisagé |
| Connue | 9 | Connexion, question ou conséquence déjà explicitée dans la littérature identifiée |
| Non conclue | 9 | Une cible technique reste définissable, sans nouveauté bibliographique établie |
| Théorème à originalité établie | 0 | Aucun dans cette campagne |

Les **156 résumés** ont été lus. **31 rapprochements** ont fait l'objet d'une lecture ciblée de sections du texte intégral d'au moins un article ; les **119 autres** ont été évalués au niveau des résumés. Cela ne signifie pas que 150 paires ont été intégralement vérifiées. Les recherches d'antériorité portent sur les sous-questions approfondies ; un rejet rapide n'est pas une preuve d'absence de nouveauté. « Connue » qualifie la connexion examinée, pas l'intégralité des deux articles.

Le [dossier KD](../2026-11-17-kd-z3x3/README.md) est distinct : il contient son certificat, son audit de priorité et son manuscrit/PDF. La présente revue n'établit pas davantage sa priorité.

- [Table de couverture](INDEX.md)
- [150 verdicts détaillés et leurs sources](VERDICTS.md)
- [Entrées figées](input.json), [registre structuré](reviews.json), [audit d'intégrité](validation.json)

## Conclusions concrètes

1. **Le coût de transport écrit n'est pas la métrique revendiquée.** Pour la définition de 2606.04969v2, le coût vaut 2(dA+dB)I−2(SwapA+SwapB). La quantité censée mesurer l'intrication vaut donc déjà 2 sur les états séparables de deux qubits ; sa valeur au carré sur Bell est 6. [Preuve, conventions et antériorité](notes/quadratic-cost-not-a-metric.md), [contrôle exact](quadratic-cost-check.json). Le phénomène de distance à soi non nulle est connu ; l'observation spécifique n'est pas revendiquée comme prioritaire.
2. **Décalage spectral et robustesse sont distincts.** Ils valent 1/2 et 1 sur Bell. Le premier passe de 1/4 à 1/2 après une remise à zéro locale d'une ancilla de dimension 2, donc n'est pas monotone pour toutes les opérations libres. La définition multiplicative utilisée dans les preuves de 2607.16960 n'est pas réfutée. [Note](notes/eigenvalue-shift-versus-robustness.md), [contrôle exact](eigenvalue-shift-check.json).
3. **Une symétrie de Liouville ne garantit pas une mémoire physique.** Le canal complètement dépolarisant est covariant et maximise l'entropie du Choi, tout en effaçant toute information. [Note](notes/symmetry-is-not-memory.md). La théorie des points fixes nécessaire aux mémoires sans bruit est ancienne.
4. **Une conjecture GAD particulière découle d'un seuil antérieur.** La conjecture 8 de 2506.06089 sur le singulet sous deux GAD identiques correspond au critère EA publié en 2018. La frontière est 1−gamma=2(1+sqrt(2))n(1−n)gamma². [Dérivation et source précise](notes/gad-singlet-prior-result.md), [contrôle rationnel](gad-singlet-check.json). La conjecture générale de placement de source n'est pas résolue ici.
5. **Deux réparations naïves échouent.** Une normalisation globale d'effets séparables peut créer des effets intriqués ([note](notes/measurement-rounding.md), [certificat](whitening-check.json)). Une information mutuelle non entière peut provenir de simples mélanges classiques de stabilisateurs ([note](notes/mixed-magic-obstruction.md)). Ces mécanismes sont des obstacles connus dans leur principe, pas des théorèmes inédits.

Ces conclusions distinguent un calcul exact, l'application d'un résultat antérieur, une correction de définition et une nouveauté bibliographique. Elles ne constituent pas cinq découvertes originales.

## Les neuf pistes non conclues

**Approfondissement ultérieur de 20 puis 51 :** [dossier, preuves et vérifications](../2026-11-17-pistes-20-51/README.md). Pour 20, réparation locale prouvée avec perte de racine, sans meilleur taux. Pour 51, formulation mixte générale réfutée et borne géométrique pure obtenue sous des restrictions précises sur les cibles et régions. Ces pistes restent « non conclues » au sens de la recherche d'un résultat substantiel à originalité établie.

| Piste | Question qui reste | Prochain seuil de preuve |
|---:|---|---|
| 9 | Magie des états purs de constructions pré-bialgébriques | Fixer les tenseurs et le coût de circuits ; ne pas importer un témoin pur dans un mélange |
| 14 | Dicke et taux SOS de codage | Écrire le même problème polynomial, contrôler degré, normalisation et zéros de bord |
| 20 | Arrondi argmax de mesures sous contraintes | Dépasser la réparation terme par terme ; aucun meilleur taux établi |
| 21 | Sélection de moments du bootstrap SUSY | Obtenir une meilleure borne à budget fixé, après certification exacte |
| 24 | Certification du bootstrap à variables non bornées | Contrôler les résidus par coercivité ou identités SOS, puis produire une borne améliorée |
| 51 | Steering et dualité de Haag approchée | Exploiter la borne pure 2f(t) dans un modèle avec borne inférieure ; version mixte générale réfutée |
| 64 | Erreur stationnaire du protocole thermique | Séparer populations/cohérences et contrôler leur complément de Schur en volume |
| 106 | Densité de magie certifiée d'un MPS | Produire un certificat positif de rayon spectral utile sur une instance sans formule déjà connue |
| 113 | De Finetti et robustesse | Vérifier support bosonique et extension bilatérale avant d'importer un taux ; comparer le coût |

Les notes précisent les hypothèses et antériorités : [arrondi](notes/measurement-rounding.md), [SUSY](notes/unbounded-moment-certification.md), [steering](notes/topology-and-steering.md), [magie répliquée](notes/replica-magic-certification.md), [robustesse](notes/robustness-rounding-rate.md). Les pistes 14 et 64 ont leur prochaine étape dans le registre. Leur originalité n'est pas établie.

Pour une machine modeste, la piste 106 permettrait d'abord des certificats de petites matrices sur un MPS donné ; la piste 20 demande surtout une preuve qui respecte les contraintes. Une nouvelle grosse passe numérique ne remplace pas ces deux étapes. Les pistes SUSY et Haag ont un coût de formalisation bien supérieur au coût de sélection des résumés.

## Ce que la campagne apprend au moteur

La carte initiale vient d'embeddings de titres et résumés ; le moteur local utilise ensuite les groupes et des motifs textuels, sans recalculer les vecteurs. [Explication et score exact](../2026-11-17-kd-z3x3/rapprochement.md).

Le score a bien proposé des textes à comparer, mais ne mesure pas une probabilité de nouveauté. Dans cet échantillon, la famille « convex » intervient dans 68 paires et « tensor » dans 49. Trois scores distincts sont chacun partagés par dix paires. Ces ex aequo et les croisements d'articles employant les mêmes mots expliquent plusieurs séries peu productives. Cela n'est pas une évaluation statistique indépendante de toutes les autres campagnes possibles.

Les améliorations utiles à une future passe seraient : consigner les hypothèses et conclusions des théorèmes ; distinguer covariance/conservation, bosonique/invariant, CP/positif, pur/mixte et fini/infini ; consulter les citations directes avant de proposer une connexion ; et retenir aussi des lacunes à l'intérieur d'un même groupe. Ces changements de moteur ne sont pas implémentés dans cette campagne de lecture. Le registre constitue un jeu d'évaluation manuel pour les comparer ultérieurement.

## Reproduction et validation locale

Avec un Python standard, sans GPU ni dépendance scientifique :

```text
python -B campaign.py validate --complete
python -B verify_whitening.py
python -B verify_eigenvalue_shift.py
python -B verify_quadratic_cost.py
python -B verify_gad_singlet.py
python -B checkpoint.py 150
```

Exécuter depuis ce dossier. Les quatre vérifications scientifiques utilisent des entiers et fractions exactes ; elles ne résolvent pas un SDP et ne prouvent pas une priorité bibliographique. Le validateur contrôle la couverture, les identifiants, les références, les liens vers les notes et les empreintes des résumés figés ; il ne juge pas les verdicts scientifiques. Les scripts n'effectuent aucun appel réseau et aucune opération Git. Les fichiers `batch-*.json` sont des verdicts rédigés, pas des décisions générées automatiquement.
