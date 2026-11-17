# Piste 65 : deux quantités différentes

17 novembre 2026. Statut : clarification et contre-exemple élémentaire ; originalité non revendiquée.

## Audit du texte

[2607.16960v1, III.1](https://arxiv.org/html/2607.16960v1) décrit avant sa définition 3 la quantité L_k(rho)=min_{sigma dans F_k} lambda_max(rho-sigma), mais la définition 3 et la preuve duale emploient R_k(rho)=min {t>=0 : rho <= (1+t)sigma, sigma dans F_k}. La seconde est une robustesse généralisée. Les propriétés démontrées pour R_k ne s'appliquent pas automatiquement à L_k. La fidélité à niveau fini concerne F_k, pas tous les états séparables.

Ce constat ne réfute pas la monotonie de la définition 3. Il empêche de programmer la phrase descriptive comme si elle était équivalente à cette définition.

## Calcul exact sur Bell

Soit P=|Phi+><Phi+| sur deux qubits, et s=(I+2P)/6. L'état s est séparable : c'est le twirl U tensor conj(U) d'un produit |00><00| ; on peut aussi utiliser son mélange fini des six produits des bases X,Y,Z conjuguées. Pour tout état PPT sigma, Tr(P sigma)<=1/2, puisque P^{T_B}=F/2 <= I/2. Donc lambda_max(P-sigma)>=1/2. Le spectre de P-s est {1/2,-1/6,-1/6,-1/6}, d'où L_k(P)=1/2 pour tout k.

Si (1+t)sigma >= P, l'espérance dans P impose (1+t)/2 >=1, donc t>=1. Le choix t=1 et sigma=s convient, d'où R_k(P)=1 pour tout k. Tous les états s utilisés sont séparables, donc possèdent les extensions PPT de chaque niveau.

## Obstruction générale par ancilla locale

Pour F_k stable par ajout et retrait d'une ancilla locale de dimension m,

L_k(rho tensor I_m/m)=L_k(rho)/m.

Preuve : tensoriser un sigma optimal donne la borne supérieure. Inversement, X=rho tensor I_m/m-sigma <= lambda_max(X) I implique, après trace de l'ancilla, rho-Tr_C(sigma)<=m lambda_max(X) I ; le marginal de sigma est libre. Cela donne la borne inférieure.

Retirer cette ancilla fait donc passer L_k(P tensor I_m/m)=1/(2m) à 1/2 par une opération locale. On peut même conserver les dimensions : remplacer I_m/m par |0><0| localement donne L_k(P tensor |0><0|)=1/2. La borne inférieure utilise le projecteur P tensor |0><0| et sa transposée partielle <= I/2 ; la borne supérieure utilise s tensor |0><0|. Cette opération est libre pour toutes les extensions PPT. L_k n'est donc pas monotone sous toutes ces opérations, alors que R_k l'est.

Le script `../verify_eigenvalue_shift.py` vérifie les matrices et les certificats rationnels pour m=2. La preuve analytique, et non un solveur numérique, établit les optimums.

## Antériorité et portée

Le problème des distances non contractives sous ajout/retrait d'une ancilla est ancien : [Piani, 1206.0231](https://arxiv.org/abs/1206.0231), et [Paula–de Oliveira–Sarandy, 1302.7034](https://arxiv.org/abs/1302.7034) pour les normes de Schatten. Ces textes portent sur la discordance ; ils documentent le mécanisme, sans être cités comme preuve de la formule unilatérale ci-dessus. Les ressources d'inextensibilité sont déjà quantifiées dans [Kaur et al., 1803.10710](https://arxiv.org/abs/1803.10710). Aucun antécédent de correction spécifique à la phrase de 2607.16960 n'a été trouvé par la recherche ciblée ; cela ne rend pas le mécanisme nouveau.

[2605.25516](https://arxiv.org/abs/2605.25516) utilise une distance en norme trace à des sources extensibles, sans condition PPT. Il ne faut identifier ni ses ensembles libres ni ses valeurs à ceux de R_k ou L_k. Pas de nouveau théorème d'anti-collusion obtenu.
