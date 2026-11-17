# Piste 51 — Steering quantitatif : une obstruction mixte et un énoncé géométrique pur

17 novembre 2026. Les énoncés et preuves ci-dessous sont établis dans cette note. Leur priorité bibliographique n'est pas établie. Les ingrédients sont classiques ; la formulation géométrique précise est un candidat à examiner, pas une découverte annoncée.

**Approfondissement terminé :** voir la [clôture](piste51-cloture.md) et le [dossier public canonique](../../research/entries/steering-localization/README.md). Le modèle à deux branches donne exactement s_B=(1-kappa)sqrt(pq), puis un taux spatial avec borne inférieure atteinte. Il ne résout pas la question générale sur les cônes ; la nouveauté substantielle reste non établie.

## 1. Quantifier la bonne tâche

Pour des algèbres de von Neumann commutantes A et B, un état normal omega et un ensemble fini (lambda_i) de fonctionnelles positives sur A avec somme omega_A, définissons

\[
d_B(\lambda;\omega)
=\inf_{(b_i)\text{ POVM dans }B}
\frac12\sum_i\|\lambda_i-\omega(\,\cdot\, b_i)|_A\|_{A_*}.
\]

Le défaut complet est le supremum sur tous les ensembles finis, noté s_B(omega). Il est entre 0 et 1. En dimension finie, la norme des fonctionnelles est la norme trace des matrices correspondantes. Les lambda_i sont **sous-normalisées** : les probabilités sont incluses. Le problème n'est pas celui de violer une inégalité de steering à plusieurs réglages ou de mesurer la distance à tous les modèles LHS ; c'est la réalisation de chaque décomposition d'une marginale fixée, dans un état et avec une algèbre de mesure fixés.

La caractérisation exacte par une espérance conditionnelle préservant l'état est déjà [van Luijk et al., 2608.10783](https://arxiv.org/html/2608.10783v1). Sa portée dépend de la pureté et des algèbres accessibles.

## 2. Contre-exemple à une implication fondée seulement sur la dualité relative mixte

Prenons deux qubits dans l'état produit omega=I_A/2 tensor I_B/2. Une mesure de Bob ne prépare chez Alice que des opérateurs q_i I_A/2. Pourtant l'ensemble cible

\[
\lambda_0=|0\rangle\langle0|/2,
\qquad \lambda_1=|1\rangle\langle1|/2
\]

a bien pour moyenne I_A/2. Pour toute probabilité q,

\[
\frac12\left(\|\lambda_0-qI/2\|_1+
\|\lambda_1-(1-q)I/2\|_1\right)=\frac12.
\]

Il n'y a donc pas de steering complet.

Dans la représentation GNS de cet état, l'algèbre physique globale M est l'algèbre des multiplications à gauche. Pour les sous-algèbres physiques A et B, on a **exactement**

\[
B'\cap M=A,\qquad A'\cap M=B.
\]

Le commutant absolu contient en plus les degrés de liberté de purification à droite. La dualité relative ne les rend pas accessibles à Bob.

Le même contre-exemple existe sur le réseau carré : prendre l'état produit tracial sur tous les sites. Pour toute partition par un cône Lambda, la représentation produit donne M=M_Lambda bar-tensor M_Lambda^c et les deux facteurs ont centre trivial. Donc

\[
\pi(\mathcal A_{\Lambda^c})'\cap M=\pi(\mathcal A_\Lambda)''.
\]

La définition 1.1 de [Ogata, 2501.02398](https://arxiv.org/html/2501.02398v1) est satisfaite avec U=U_t=I, R=0 et f(t)=0. Une décomposition sur un seul qubit d'Alice, tensorisée avec l'état produit du reste de sa région, garde pourtant l'obstruction 1/2. Si l'on exige en plus des algèbres de cônes proprement infinies, on peut ajouter à chaque site un ancilla dans un état produit pur : le facteur de cône supplémentaire est de type I infini, tandis que l'obstruction sur le qubit initial demeure.

**Conclusion exacte :** il ne peut exister une borne universelle s_B≤g(f) avec g(0)=0 fondée sur la seule dualité relative d'Ogata pour les états mixtes. C'est un exemple trivial sans ordre topologique, suffisant pour réfuter cette formulation générale ; il ne réfute pas un énoncé ajoutant des hypothèses physiques plus fortes. L'échec du steering d'un état produit est évidemment connu.

## 3. Stabilité à partir d'une espérance presque préservatrice : version matricielle

On fixe maintenant une purification pure de rho_AC sur ACB. Les algèbres accessibles sont les matrices sur A et sur B ; C est inaccessible. Les espérances conditionnelles M_AC vers M_A tensor I_C ont la forme

\[
E_\tau(X\otimes Y)=X\operatorname{Tr}(\tau Y)\otimes I_C.
\]

Leur défaut de préservation de l'état vaut

\[
\delta_\tau=\tfrac12\|\rho_{AC}-\rho_A\otimes\tau_C\|_1.
\]

**Proposition 51.1.** Avec F la fidélité racine, F(rho,sigma)=||sqrt(rho)sqrt(sigma)||_1,

\[
s_B(\rho)\leq
\inf_{\tau_C}\sqrt{1-F(\rho_{AC},\rho_A\otimes\tau_C)^2}
\leq\sqrt{2\delta_* -\delta_*^2},
\quad \delta_*=\inf_{\tau_C}\delta_\tau.
\]

**Preuve.** Tout ensemble lambda_i de rho_A se relève en Lambda_i=lambda_i tensor tau_C, de somme sigma=rho_A tensor tau_C. Le lemme standard de perturbation des ensembles fournit des mu_i positifs de somme rho_AC tels que

\[
\tfrac12\sum_i\|\mu_i-\Lambda_i\|_1
\leq\sqrt{1-F(\rho_{AC},\sigma)^2}.
\]

Pour voir ce lemme, choisir des purifications de rho_AC et sigma atteignant la fidélité d'Uhlmann, puis appliquer aux deux la même mesure réalisant la décomposition Lambda_i de sigma. La contraction de la distance trace par ce canal donne l'inégalité. On peut agrandir l'espace purifiant ; les mu_i obtenus se réalisent ensuite par une POVM sur n'importe quelle purification fixée de rho_AC, par HJW et complétion sur le support. Cela n'ajoute pas de système physiquement accessible à Bob.

La trace partielle sur C contracte encore la distance. La mesure correspondante sur B réalise Tr_C mu_i. Enfin F≥1-delta_tau. Prendre l'infimum en tau et le supremum en ensembles prouve l'énoncé. Il n'y a pas de facteur dépendant du nombre d'issues.

La perturbation d'ensembles et les projections à somme fixée sont déjà étudiées, notamment dans [Afham–Tomamichel, 2602.14732, §3.6](https://arxiv.org/html/2602.14732v1). La proposition est une application de ces outils ; elle ne constitue pas une nouvelle équivalence de sous-facteurs. Aucune extension quantitative à toutes les algèbres de type III n'est revendiquée ici.

## 4. L'exposant 1/2 est nécessaire, même avec deux issues

Soit 0<q≤1/2, p=1-q, et

\[
|\Psi_q\rangle_{ACB}=\sqrt p\,|000\rangle+\sqrt q\,|111\rangle.
\]

L'état rho_AC=p|00><00|+q|11><11|. Toute espérance conditionnelle vers A est de la forme E_tau ci-dessus. Déphaser tau sur C ne peut augmenter la distance à rho_AC ; pour tau=diag(1-u,u),

\[
\delta_\tau=pu+q(1-u)=q+(p-q)u.
\]

Ainsi **delta_*=q**, atteint en tau=|0><0|. La dégénérescence de tau ne pose pas problème : l'espérance est positive et unitaire, mais pas fidèle. Si l'on exige sa fidélité, le même infimum est obtenu en faisant u tendre vers zéro.

Le défaut complet de steering peut aussi être calculé exactement :

\[
\boxed{s_B(\Psi_q)=\sqrt{pq}=\sqrt{\delta_*(1-\delta_*)}.}
\]

**Borne inférieure.** L'ensemble binaire lambda_±=|phi_±><phi_±|/2, avec phi_±=sqrt(p)|0>±sqrt(q)|1>, a pour moyenne rho_A. Toute mesure sur B laisse les états conditionnels d'Alice diagonaux, car C porte une copie orthogonale du bit. Les témoins ±X donnent pour chaque issue une norme trace au moins sqrt(pq), donc un défaut total au moins sqrt(pq). La mesure triviale b_±=I/2 atteint cette borne pour cet ensemble.

**Borne supérieure pour tous les ensembles.** Pour un ensemble quelconque, écrivons lambda_i=[[x_i,z_i],[z_i*,y_i]]. Sa partie diagonale est réalisable par la POVM diagonale b_i=diag(x_i/p,y_i/q). L'erreur totale est sum_i |z_i|≤sum_i sqrt(x_i y_i)≤sqrt(pq), puisque sum x_i=p et sum y_i=q. Cela démontre l'égalité pour le supremum sur tous les ensembles finis.

Donc s_B/delta_* diverge comme q^(-1/2). Aucune borne linéaire uniforme s_B≤C delta_* n'est possible. L'exposant de la proposition 51.1 est optimal, à une constante près. **Limite :** A et B ne sont pas tomographiquement complets à cause du système C ; cet exemple ne prouve pas l'optimalité sous l'hypothèse supplémentaire A∨B=B(H).

Le comportement des marginales GHZ est connu. La formule exacte pour cette fonction de défaut et la comparaison à delta_* sont des calculs de cette session ; aucune priorité bibliographique n'est affirmée.

## 5. Un lemme de localisation uniforme des ensembles

Soient A0 une algèbre de von Neumann, (e_i) une POVM dans A0', W un unitaire, et supposons que c_i=W e_i W* appartient aussi à A0' pour chaque i. Pour tout vecteur unitaire Omega,

\[
\frac12\sum_i\|\langle\Omega,\,\cdot\,e_i\Omega\rangle
-\langle\Omega,\,\cdot\,c_i\Omega\rangle\|_{(A0)_*}
\leq\min\{1,2\|W-I\|\}.
\]

**Preuve.** Les isométries de mesure sont V_e xi=sum_i |i> tensor sqrt(e_i)xi et V_c=(I tensor W)V_e W*. Par conséquent ||V_c-V_e||≤2||W-I||. La demi-distance trace des deux états vectoriels V_e Omega et V_c Omega est au plus leur distance vectorielle, donc au plus 2||W-I||. Restreindre l'algèbre des observables à la somme directe des copies de A0 contracte cette distance. Les commutations assurent que les états obtenus sont exactement les fonctionnelles ci-dessus. Cette restriction est valide aussi pour des algèbres infinies : la norme des fonctionnelles restreintes ne dépasse pas celle des états sur B(ell2(I) tensor H).

Si W commute avec A0, on peut appliquer une seule mesure aux états Omega et W*Omega et obtenir le meilleur facteur ||W-I||. Nous gardons le facteur 2 dans le cas général. Aucune optimalité de cette constante n'est revendiquée.

## 6. Corollaire géométrique pour un état pur et une région élargie

Soit un état **pur** du réseau dans sa représentation GNS (pi,H,Omega), satisfaisant la définition 1.1 d'Ogata. Alors pi(A_global)''=B(H), et le commutant relatif est le commutant absolu.

Fixons un cône Lambda et un élargissement angulaire epsilon autorisé. Notons R et f(t) les données de la dualité approchée, et

\[
D=\Lambda_\varepsilon(-R),\quad
D_t=\Lambda_{2\varepsilon}(-t),\quad
A=\pi(\mathcal A_{\Lambda^c})'',\quad
A_t=\pi(\mathcal A_{D_t^c})'',\quad
B_t=\pi(\mathcal A_{D_t})''.
\]

Pour t≥R on a D⊂D_t, Lambda⊂D_t et A_t⊂A. La définition fournit U et U_t∈B_t tels que A'⊂U pi(A_D)'' U* et ||U_t-U||≤f(t).

**Proposition 51.2.** Pour tout ensemble normal fini (lambda_i) de omega_A, il existe une POVM (c_i) dans B_t telle que

\[
\boxed{\frac12\sum_i\|\lambda_i|_{A_t}-\omega(\,\cdot\,c_i)|_{A_t}\|
\leq\min\{1,2f(t)\}.}
\]

**Preuve.** Le théorème de Radon–Nikodym des fonctionnelles dominées réalise lambda_i(a)=<Omega,a e_i Omega> avec une POVM e_i dans A'. Pour justifier la normalisation même si Omega n'est pas cyclique pour A, travailler sur K=closure(A Omega), dont la projection appartient à A', puis attribuer I-P_K à une issue. Les e_i sont ainsi des effets dans A' de somme I sur tout H.

Posons b_i=U*e_iU dans pi(A_D)'', puis c_i=U_t b_i U_t* dans B_t. Ce sont exactement des POVM ; aucun arrondi indépendant de leurs effets n'est nécessaire. Avec W=U_tU*, on a c_i=W e_i W* et ||W-I||≤f(t). Les e_i et c_i commutent avec A_t. Le lemme précédent conclut.

**Ce que signifie la borne.** Le coût d'erreur sur l'ensemble reste contrôlé pour tout nombre fini d'issues, y compris lorsque ce nombre dépend de t. Si f décroît exponentiellement ou comme une puissance dans un modèle donné, la même vitesse se transmet à cette erreur. Aucune fonction f particulière n'a été démontrée ici pour un Hamiltonien nouveau.

**Deux restrictions indispensables.**

1. Les cibles sont les restrictions à A_t d'ensembles définis sur A. Ce n'est pas un énoncé de steering complet pour *tous* les ensembles de omega_A_t. Un ensemble sur une sous-algèbre ne se relève pas automatiquement en un ensemble de la moyenne fixée sur l'algèbre plus grande.
2. Quand t augmente, la région de Bob D_t grandit et celle d'Alice se réduit. Il s'agit d'un coût d'élargissement de la région de contrôle, pas d'une décroissance automatique de l'erreur lorsque deux observateurs fixes s'éloignent. La mesure appartient à une algèbre de cône infini : aucune complexité de réalisation par un circuit fini n'est établie.

Cette version pure évite d'inférer une espérance conditionnelle préservant l'état à partir d'une simple proximité d'algèbres. Elle utilise directement la même conjugaison pour toutes les issues.

## 7. Post-sélection et portée opérationnelle

Une borne totale D=(1/2)sum_i||lambda_i-mu_i||≤eta n'assure pas une erreur uniforme des états **normalisés**. Si p_i=lambda_i(1)>0 et q_i=mu_i(1)>0, alors

\[
\tfrac12\|\lambda_i/p_i-\mu_i/q_i\|
\leq \|\lambda_i-\mu_i\|/p_i\leq2\eta/p_i.
\]

Si p_i>2eta, q_i est nécessairement positif. En conséquence une garantie uniforme pour les issues de probabilité au moins p_min demande le facteur 1/p_min. La proposition géométrique porte sur les ensembles sous-normalisés, sans cette restriction artificielle.

## 8. Antériorité et verdict scientifique

Requêtes du 17 novembre : `approximate Haag duality steering`, `Haag duality quantitative steering`, `Haag duality approximate steering`, `steering conditional expectation square root`, `steering localization Haag duality`, `steering continuity ensembles purification trace distance`, `GHZ ensemble steering distance`.

- [Ogata, 2501.02398, définition 1.1](https://arxiv.org/html/2501.02398v1) : hypothèse de localisation des unitaires utilisée dans la proposition 51.2. Nous n'en revendiquons pas l'invention.
- [Van Luijk et al., 2608.10783, théorème 3 et §3](https://arxiv.org/html/2608.10783v1) : caractérisation exacte du relèvement et du steering, avec traitement des supports. Le présent travail ne remplace pas cette théorie.
- [Afham–Tomamichel, 2602.14732, §3.6](https://arxiv.org/html/2602.14732v1) : géométrie et projection des ensembles. Le lemme de perturbation utilisé en 51.1 est une conséquence des outils de fidélité existants.
- **Antécédent proche retrouvé :** [Wallick–Wilming, 2609.01267](https://arxiv.org/html/2609.01267v1), notamment théorème 5.1 et §6, traite déjà l'échec du steering et de la dualité approchée dans des secteurs anyoniques non abéliens. Il interdit de présenter la connexion générale topologie–steering comme nouvelle. Sa portée est différente du contre-exemple produit et de l'estimation de localisation ci-dessus.

Les articles ont été consultés par sections ciblées ; aucune revue exhaustive de toutes leurs références et citations ultérieures n'a été faite. Les propositions 51.1 et 51.2 sont des conséquences courtes d'outils établis. Leurs formulations exactes n'ont pas été retrouvées dans les passages et recherches consultés, ce qui ne suffit pas à établir leur originalité.

**Bilan :** la formulation générale mixte est réfutée ; une version géométrique pure est démontrée avec les restrictions explicites ci-dessus ; l'exposant 1/2 d'une autre stabilité, celle fondée sur le défaut d'espérance, est nécessaire dans un modèle fini. Aucun nouveau résultat sur une phase topologique particulière, aucun invariant nouveau, aucune équivalence quantitative générale de sous-facteurs n'est obtenu.

La question substantielle restante est une borne inférieure dans la géométrie précise des cônes, ou une réciproque quantitative sous des hypothèses adaptées. La [clôture](piste51-cloture.md) calcule un coût exact dans un modèle pur à accès partiel à l'environnement, avec des régions différentes. Elle ne prétend donc pas résoudre cette question générale.
