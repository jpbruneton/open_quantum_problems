# Piste 20 — Ce que peut et ne peut pas donner une réparation après arrondi

17 novembre 2026. Conclusion : trois lemmes élémentaires établis ci-dessous ; aucun gain sur le taux de la hiérarchie des mesures 1-LOCC. La question principale reste ouverte. Les lemmes servent à choisir une stratégie de preuve, sans revendication de priorité.

## 1. Bien identifier la hiérarchie

Les contraintes utiles sont celles de [Singh–Nuradha–Wilde, 2412.18556v3, annexe A](https://arxiv.org/html/2412.18556v3#A1), issues de [Berta–Borderi–Fawzi–Scholz, 1810.12197, proposition A.5](https://arxiv.org/html/1810.12197). Pour une mesure, on veut des états sur A et BY tels que

\[
\chi_{ABY}=\sum_x p_x\alpha_x\otimes\widetilde\omega_x,
\qquad \sum_xp_x\alpha_x=I_A/a,
\qquad \operatorname{Tr}_Y\widetilde\omega_x=I_B/b\quad\forall x.
\]

Y est classique. Ces contraintes fournissent une mesure d'Alice suivie d'une mesure de Bob dépendant du message x. La normalisation de chaque terme de Bob est essentielle.

[Jeronimo–Wu–Xu, 2608.02590v1, corollaire 1.5](https://arxiv.org/html/2608.02590v1) borne la distance à SEP pour des extensions bilatérales aux niveaux n,m par une constante dimensionnelle fois (nm)^(-1/2). Avec n=1 et m=k, ce théorème ne fournit donc pas un taux k^(-1). Son résultat k^(-1) sur deux sites échangeables ne transforme pas le système distingué A en une copie supplémentaire de BY. Il faut aussi construire une approximation avec la même composante de Bob répétée si l'on veut utiliser le second moment ci-dessous.

**Conséquence :** ni l'amélioration d'exposant, ni les contraintes de canal ne suivent du simple rapprochement des deux articles.

## 2. Réparation positive et locale d'une marginale

Soit omega un état sur BY, beta=Tr_Y omega et tau=I_B/b. Choisissons un état classique nu sur Y et posons

\[
r=b\|\beta\|_\infty\geq1,\qquad
\mathcal R(\omega)=\frac{\omega+(r\tau-\beta)\otimes\nu}{r}.
\]

La formule dépend de l'entrée : ce n'est pas un canal linéaire universel.

**Lemme 20.1.** R(omega) est positif, de trace un, de marginale tau. Il reste classique sur Y si omega l'est. De plus,

\[
\|\mathcal R(\omega)-\omega\|_1
\leq \frac{2(r-1)}r
\leq 2b\|\beta-\tau\|_2.
\]

**Preuve.** r tau-beta est positif et de trace r-1. La somme du numérateur a pour marginale r tau et pour trace r. La différence est la somme d'un terme positif de trace (r-1)/r et de -(r-1)omega/r. Enfin r-1=b lambda_max(beta-tau), au plus b||beta-tau||_2. Cela prouve tout, y compris le cas r=1 où la correction est nulle.

Cette construction conserve les produits entre A et BY. Elle évite donc l'obstruction à la conjugaison globale déjà documentée dans [la première note](../2026-11-17-revue-150/notes/measurement-rounding.md). Elle n'est pas revendiquée optimale en dimension ou en constante.

## 3. Un théorème conditionnel de conversion

Supposons donné un état rho sur A(BY)_1(BY)_2 tel que rho_A=I_A/a et rho_B1B2=tau tensor tau, ainsi qu'une approximation

\[
\sigma=\sum_xp_x\alpha_x\otimes\omega_x^{\otimes2},
\quad \|\rho-\sigma\|_1\leq\eta.
\]

Les alpha_x et omega_x sont des états et les p_x des probabilités. On peut déphaser Y avant la construction si rho est classique sur Y. L'existence de cette approximation avec un bon eta est une **hypothèse**, pas un résultat nouveau de Finetti.

**Lemme 20.2.** Il existe un état chi de la forme 1-LOCC de la section 1 avec

\[
\|\rho_{AB_1Y_1}-\chi\|_1
\leq \min\{2,(1+a)\eta+2b\sqrt\eta\}.
\]

**Preuve du contrôle de variance.** Ecrivons beta_x=Tr_Y omega_x et S le swap sur B1B2. Alors

\[
V:=\sum_xp_x\|\beta_x-\tau\|_2^2
=\operatorname{Tr}\!\left[S\left(\sigma_{B_1B_2}-\tau^{\otimes2}\right)\right]
\leq\eta.
\]

L'identité utilise Tr beta_x=1, Tr beta_x tau=1/b et Tr S(beta_x tensor beta_x)=Tr beta_x^2. Elle n'exige pas que la moyenne des beta_x soit exactement tau. L'inégalité utilise ||S||_infty=1 et la contraction par trace partielle.

Réparons chaque omega_x par le lemme 20.1. La différence de la marginale ABY est au plus 2b sqrt(V), par Cauchy–Schwarz. L'état obtenu theta a une décomposition produit dont chaque facteur BY a la bonne marginale, mais sa marginale A est encore gamma=sum p_x alpha_x. On a ||gamma-I/a||_1≤eta.

Posons s=a||gamma||_infty et choisissons un état omega_0 de marginale tau sur BY. La seconde réparation est

\[
\chi=\frac{\theta+(sI_A/a-\gamma)\otimes\omega_0}{s}.
\]

Elle ajoute un message d'Alice et conserve les contraintes de Bob. Comme gamma-I/a est hermitien de trace nulle, lambda_max(gamma-I/a)≤||gamma-I/a||_1/2. Donc ||chi-theta||_1≤2(s-1)/s≤a eta. L'inégalité triangulaire donne l'énoncé.

Enfin, si chi=sum_x A_x tensor omega'_x avec sum A_x=I/a, les opérateurs E_x=a A_x^T forment la POVM d'Alice ; les F_xy=b(omega'_x[y])^T forment celle de Bob. Les effets sum_x E_x tensor F_xy sont exactement normalisés et 1-LOCC. Le majorant de l'erreur **totale** des blocs d'effets en norme trace vaut ab fois celui des états Choi. Ne pas confondre cette borne dimensionnée avec une distance opérationnelle sans facteur.

**Portée.** Même si eta=O(1/k), ce raisonnement ne garantit que O(1/sqrt(k)). Il ne suffit pas à dépasser le résultat contraint déjà connu.

## 4. La perte de racine est réelle pour une réparation terme par terme

Pour 0<t<1, sur un bit classique,

\[
\beta_\pm=(I\pm tZ)/2,\qquad
\mu_2=\tfrac12\beta_+^{\otimes2}+\tfrac12\beta_-^{\otimes2}.
\]

Le premier moment est tau=I/2. On calcule exactement

\[
\mu_2-\tau^{\otimes2}=\tfrac{t^2}{4}Z\otimes Z,
\quad\|\mu_2-\tau^{\otimes2}\|_1=t^2,
\quad\tfrac12\sum_{\pm}\|\beta_\pm-\tau\|_1=t.
\]

Avec Y trivial, toute correction des termes ayant la bonne marginale remplace beta_± par tau. Son coût moyen est nécessairement sqrt(eta), eta=t². Aucun majorant C eta uniforme ne peut donc borner **ce coût moyen pour toutes les décompositions**.

**Limite décisive :** la moyenne à un site est déjà tau. Si l'on recombine les termes avant correction, il n'y a aucune erreur à corriger. Cet exemple n'est donc ni une borne inférieure sur la meilleure approximation 1-LOCC, ni un obstacle à un nouvel arrondi qui exploiterait les compensations. C'est précisément ce qu'une amélioration devra savoir faire.

## 5. Pas de canal universel projetant sur toutes les bonnes marginales

**Lemme 20.3.** Pour b≥2 et au moins deux valeurs de Y, il n'existe pas d'application linéaire positive et préservant la trace, sur les états classiques sur Y, qui (i) envoie tout état sur un état de marginale B égale à I/b et (ii) fixe tous les états ayant déjà cette marginale.

**Preuve.** Pour chaque y, l'état tau tensor |y><y| doit être fixé. Il est une combinaison strictement positive des états |j><j| tensor |y><y|. Par positivité, les images de ces derniers doivent avoir leur support dans le bloc y. La condition (i) force alors chaque image à être exactement tau tensor |y><y|. Prenons maintenant l'état valide

\[
\zeta=\frac1b\sum_{j=1}^b |j\rangle\langle j|\otimes|f(j)\rangle\langle f(j)|,
\]

où f prend au moins deux valeurs. Par linéarité son image est tau tensor zeta_Y, différente de zeta, contredisant (ii). La contradiction existe déjà dans un problème entièrement classique.

Ce lemme exclut une réduction des contraintes de canal à l'image d'une unique projection positive qui fixerait toute la tranche affine. Il n'exclut ni les réparations non linéaires, ni les théorèmes de Finetti qui imposent directement des contraintes linéaires à l'extension.

## 6. Audit d'antériorité et décision

Recherche web du 17 novembre : `quantum de Finetti linear constraints marginal correction square root rounding channels`, `constrained de Finetti theorem convergence O(1/n) channels marginal`, `positive projection fixed marginal quantum`, `de Finetti rounding repair constraints`, `fidelity projections prior-channel`.

- [1810.12197](https://arxiv.org/html/1810.12197) est l'antécédent direct du de Finetti contraint ; son argument conditionne des copies mesurées et préserve ainsi les contraintes au cours de la construction. Refaire cet argument ne serait pas une découverte.
- [Fixed points in de Finetti hierarchies, 2607.23689, §8(1)](https://arxiv.org/html/2607.23689) discute précisément l'obstacle des contraintes linéaires pour l'amélioration des vitesses ; sa partie sur les points fixes ne doit pas être assimilée sans preuve à la tranche des marginales fixées. La formulation générale « améliorer le taux contraint » est donc déjà un problème identifié.
- [Nahar et al., 2403.11851, PRX Quantum 5, 040315](https://arxiv.org/abs/2403.11851) fournit des réductions par post-sélection à marginale fixée. Une domination d'opérateurs avec un préfacteur n'est pas une approximation additive en norme trace tendant vers zéro : ce résultat ne clôt pas notre question de taux.
- [Afham–Tomamichel, 2602.14732](https://arxiv.org/abs/2602.14732) traite les projections en fidélité sur les états à marginale fixée et sur les décompositions positives. Les corrections de marginales sont un domaine déjà développé ; la formule simple du lemme 20.1 n'est pas présentée comme une invention.

Les trois preuves sont élémentaires et autonomes. Aucun antécédent exact des formulations 20.1–20.3 n'a été identifié dans cette recherche limitée ; cela ne suffit pas à revendiquer leur originalité ou un résultat publiable.

**Choix de recherche :** arrêter la stratégie « meilleur de Finetti non contraint puis réparation indépendante ». Une suite substantielle demanderait soit un arrondi directement sur les instruments normalisés, soit une recombinaison contrôlée des termes avant réparation. L'objectif k^(-1) pour la hiérarchie initiale demeure non démontré et non réfuté.
