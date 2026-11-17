# Piste 113 : du défaut en norme trace à une robustesse

17 novembre 2026. Statut : lemme élémentaire conditionnel, pas de nouveau taux attribué à la hiérarchie existante.

Soit F une approximation extérieure compacte de SEP sur un espace de dimension totale D, et supposons que chaque sigma de F soit à distance en norme trace au plus epsilon d'un état tau séparable. On emploie ici ||sigma-tau||_1, sans facteur 1/2. Soit R_F la robustesse multiplicative définie par rho <= (1+R_F(rho))sigma.

La différence traceless sigma-tau a norme opérateur au plus epsilon/2 ; donc sigma <= tau+(epsilon/2)I. L'état

tau'=(tau+(epsilon/2)I)/(1+D epsilon/2)

est séparable. D'où

R_F(rho) <= R_SEP(rho) <= (1+R_F(rho))(1+D epsilon/2)-1.

La première inégalité vient de SEP inclus dans F, la seconde du certificat rho <= (1+R_F) sigma. Cette conversion, qui utilise le point intérieur I/D, est un argument standard de conditionnement en théorie des ressources ; aucune optimalité de son facteur D n'est revendiquée.

Attention au théorème à insérer : [2608.02590](https://arxiv.org/html/2608.02590), section 1.2.2, donne une borne particulièrement forte pour des extensions **bosoniques bilatérales**. [2607.16960](https://arxiv.org/html/2607.16960) définit une extension PPT **unilatérale invariante** par permutations. Invariance et support dans le sous-espace symétrique sont différents ; ajouter des copies côté A est une vraie contrainte supplémentaire. On ne peut donc pas remplacer epsilon par le meilleur taux bilatéral sans changer la relaxation.

On pourrait définir une nouvelle relaxation bilatérale et comparer son coût au gain de taux, puis rechercher si la conversion vers la robustesse a déjà été publiée. Les mesures par divergences d'inextensibilité sont déjà étudiées par [Kaur et al., 1803.10710](https://arxiv.org/abs/1803.10710) ; les propriétés de robustesses dans des ensembles convexes sont générales. Aucun nouveau taux pour la hiérarchie unilatérale ni nouvelle performance SDP n'est démontré ici.
