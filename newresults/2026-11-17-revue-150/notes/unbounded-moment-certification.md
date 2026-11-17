# Pistes 21–25 : sélection de moments et certification ne sont pas interchangeables

Le bootstrap SUSY [2510.01356v2](https://arxiv.org/html/2510.01356v2) fournit une cible concrète : contrôler la borne de forte interaction et les singularités numériques de troncature. Les techniques de [2512.17713v2](https://arxiv.org/html/2512.17713v2) donnent des certificats à partir de solutions SDP approchées, tandis que [2607.14755](https://arxiv.org/abs/2607.14755) recherche des ensembles de moments efficaces.

La sélection adaptative conserve une relaxation extérieure si les contraintes sont correctement projetées ; elle ne suffit pas à rendre une solution numérique exactement faisable. La certification après arrondi peut, inversement, perdre le gain observé numériquement si sa correction est plus grande que l'amélioration obtenue.

## Obstacle spécifique aux variables non bornées

Dans un système de type NPA à observables bornées, un résidu polynomial peut parfois être majoré à partir des bornes opératorielles. Pour une coordonnée canonique x non bornée, un coefficient résiduel petit ne donne aucune borne universelle sur son espérance : pour tout ε > 0, sup_ρ Tr(ρ εx²) = +∞. Il suffit de prendre des paquets translatés loin de l'origine. Le problème ne disparaît donc pas en rendant l'erreur matricielle petite.

Une application rigoureuse au modèle SUSY doit travailler au niveau du certificat SOS exact ou ajouter des contrôles coercifs des moments résiduels. Elle doit également conserver les contraintes de jauge, supercharges et limite de grande taille. Cette observation ne réfute pas les garanties des auteurs et ne démontre pas que leurs méthodes de certification sont inapplicables ; elle identifie une hypothèse à vérifier avant de transférer leur algorithme.

## Verdict et antériorités

L'application « sélectionner puis certifier une meilleure borne pour le modèle Marinari–Parisi » reste non conclue. Aucune meilleure borne numérique ou exacte n'a été obtenue ici et aucune originalité n'est revendiquée pour la combinaison générale de sélection et post-certification. Le texte de certification traite déjà les relaxations creuses, symétriques et les observables de systèmes quantiques. La méthode de sélection traite déjà une chaîne de Heisenberg ; une simple nouvelle instance n'est pas présentée comme un théorème inédit.

Recherche ciblée du 17 novembre : lectures des sections 3–4 de 2512.17713 et de la discussion de 2510.01356 ; recherche des hypothèses de bornitude et des données reproductibles. Étape suivante, si cette piste est reprise : récupérer le SDP et une solution duale précis, reconstruire un certificat exact, puis mesurer si la marge reste strictement meilleure après correction.
