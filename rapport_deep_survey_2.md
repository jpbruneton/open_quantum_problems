# Deep survey — revue des pistes pour Open Quantum Problems

Les 238 pistes de [leads.jsonl](../oqmresearch/arxivdeepsurvey/results/full/report/leads.jsonl), au commit c99670a, ont chacune un verdict dans le registre. Les 879 identifiants cités ont tous une fiche source dans le corpus filtré. Le tri s’appuie sur l’intitulé, les indices et les références de chaque piste. Les abstracts ont servi à départager les rapprochements et à formuler les pistes retenues. Les références HTML signalent les textes consultés pour des vérifications ciblées. L’examen n’a pas porté sur le texte intégral de chacun des 879 articles.

Le périmètre couvre la théorie quantique et `gr-qc` théorique, y compris la complexité, les algorithmes et les codes abstraits. L’expérimentation, l’instrumentation optique, les semi-conducteurs, les supraconducteurs et l’ingénierie des machines quantiques sont hors périmètre.

La revue retient **25 rangs regroupés en 23 fiches**, puis **sept directions de recherche supplémentaires** et une mise à jour bibliographique. Les premières cibles pour une fiche OQM sont les graphes cachés (rang 13), la distillation PPT exacte (rang 154) et la discrimination LOCC à deux copies (hors classement). Pour cette dernière, le rapport donne une preuve qui élimine les protocoles à sens unique, même quand chaque partie peut mesurer ses deux copies conjointement. La question interactive reste à instruire. Les autres calculs de contrôle sont donnés aux rangs 3, 70, 95 et 184.

## Pistes retenues pour instruction

### Rang 3 — Équivalence uniforme de circuits paramétrés

Le signal sur le mot *circuit* mélange des sujets. Le papier de Chuklanov fournit un problème précis. Pour des circuits en échelle, une fenêtre de largeur constante et des portes d’arité fixe et d’angles rationnels en unités de π donnent une représentation par automate pondéré indépendante de la longueur. La section 9 précise que les angles qui dépendent du compteur sortent de la classe traitée. [Chuklanov, §9](https://arxiv.org/html/2611.12049v1#S9)

**Question.** Pour des portes de phase diagonales d’angles rationnels périodiques de période fixe $p$, le test uniforme s’étend-il avec une dimension de représentation au plus $p$ fois celle d’une représentation sur le même alphabet enrichi de la phase du compteur ? Le produit de l’automate avec un compteur fini donne cette borne dès qu’un automate pour l’alphabet enrichi est disponible. Vérifier quelles familles de circuits admettent cet automate avec une dimension uniforme.

**Résultat de contrôle.** La suite $s_n=e^{i\pi/2^n}$ ne peut être représentée par un automate unaire complexe de dimension fixe. Une récurrence à coefficients constants $a_0,\ldots,a_r$ donnerait une fonction entière $f(z)=\sum_{j=0}^{r}a_j e^{i\pi 2^{-j}z}$ qui s’annule pour $z=2^{-n}$ dès un certain rang. Par le théorème d’identité, toutes ses dérivées en zéro s’annulent, donc $\sum_j a_j(2^{-k})^j=0$ pour tout $k$. Le polynôme des coefficients a alors une infinité de racines et tous les $a_j$ sont nuls. Tout automate unaire de dimension fixe satisfait une récurrence par Cayley–Hamilton. Pour transposer l’obstruction au modèle de circuits, il reste à retrouver une telle suite dans les coefficients parcourus par une famille de mots de longueur croissante, par exemple en codant $s_n$ en phase relative sur un qubit avec des ancilles inactives. Vérifier la représentation exacte employée par le papier et l’antériorité de l’argument.

### Rangs 4 et 6 — Magie des états mixtes et coarse-graining

OQM couvre déjà l’optimisation sur les orbites locales d’états bipartites purs. Le corpus ouvre une autre piste en rapprochant la concentration de magie et la renormalisation de l’entropie stabilisatrice dans les chaînes. Le premier calcul doit fixer la grandeur, le canal autorisé et le régime pur ou mixte. [Entrée OQM sur la magie non locale](app/data/cat-entanglement.js#L909) · [Concentration](https://arxiv.org/abs/2608.13376) · [Renormalisation](https://arxiv.org/abs/2609.17188)

**Question.** Dans un flot de renormalisation sur une chaîne de spins, la perte de magie d’un bloc après trace partielle peut-elle être compensée quantitativement par des corrélations avec son environnement pour une extension mixte opérationnelle fixée de la mesure ? Le test minimal doit comparer un produit magique avec ancille stabilisatrice, un mélange libre et un état bipartite avec corrélations. Le dossier OQM sur les obstructions en états mixtes doit servir au contrôle d’antériorité avant d’adopter une définition ou une conjecture.

### Rang 13 — Identifier un graphe caché par marche quantique

Wocjan réduit la dynamique à des blocs tridiagonaux et teste numériquement la discrimination entre prismes et échelles de Möbius. La conjecture 11.1 fixe aussi le problème classique pour $m$ impair, avec apex initial donné et étiquetage aléatoire. Elle borne l’avantage après $t$ requêtes par $Ct^2/6^L$, où $L$ est la hauteur de la spire. [Wocjan, §11](https://arxiv.org/html/2605.11228v1#S11)

**Question.** Peut-on coupler les transcriptions des deux oracles jusqu’à la première collision qui révèle la fermeture parallèle ou torsadée ? Séparer la probabilité d’atteindre la couche utile et celle de recoller deux explorations dont l’interaction voit le cycle global. Commencer par les requêtes adaptatives qui restent dans une composante explorée depuis l’apex, puis lever cette restriction ou donner un algorithme qui l’exploite. Côté quantique, contrôler séparément la borne asymptotique de contraste au temps optimisé et le coût de simulation dans le modèle d’oracle. Le support numérique ne règle ni l’une ni l’autre des conjectures.

### Rang 18 — Stabilité de la diffusion inverse en cosmologie

Schmidt et Floerchinger reconstruisent des histoires régulières asymptotiquement statiques à partir de l’amplitude complexe de réflexion. La section III.2.2 s’appuie sur l’unicité de la diffusion inverse pour la classe de Faddeev, qui utilise aussi les données discrètes lorsqu’il existe des états liés. Leur isospectralité expansion–contraction montre déjà ce que la perte de phase peut coûter. [Schmidt et Floerchinger, §III.2.2](https://arxiv.org/html/2611.13871v1)

**Question.** Quelle stabilité peut-on démontrer à bande de fréquences et bruit fixés pour une classe d’histoires de régularité donnée ? Fixer d’abord l’origine temporelle et la normalisation du facteur d’échelle. La première épreuve consiste à linéariser autour d’une histoire statique, choisir des perturbations lisses à fréquence croissante, puis comparer la norme d’histoire à leur signal sur la bande mesurée. Une obstruction linéarisée doit ensuite être transposée au problème non linéaire avec des bornes uniformes ou traitée comme une limite strictement locale. Vérifier la littérature de diffusion inverse à bande finie avant d’en faire une nouvelle entrée.

### Rang 22 — Témoins locaux de l’effet Mpemba quantique

Un article construit un témoin pour une dynamique markovienne et l’illustre par un qubit amorti. Un autre explique une inversion d’asymétrie dans des circuits aléatoires conservant la charge. Les deux cadres utilisent des quantités de relaxation différentes. [Témoin à une observable](https://arxiv.org/abs/2607.12163) · [Circuits de Clifford symétriques](https://arxiv.org/abs/2609.17988)

**Question.** Pour une chaîne et une métrique fixées, quelle taille de support faut-il à une observable pour identifier l’annulation de la contribution du mode lent ? Tester d’abord un générateur réversible à mode lent simple. Comparer ensuite deux états dont toutes les réductions sur $k$ sites sont identiques, mais dont les projections sur le mode lent diffèrent. La première cible est un exemple explicite de dynamique locale avec cette obstruction, ou un théorème qui force le mode lent à être détectable localement sous des hypothèses précises.

### Rang 29 — Stabilité des points exceptionnels en WKB exacte

Le triple puits inversé donne trois problèmes selon les conditions de Siegert. Pour le problème PT, la condition de quantification médiane conduit à une équation pour le point exceptionnel. La connexion avec l’analyse exacte du quartique PT permet de poser une question sur la stabilité de ce mécanisme. [Kamata et al., §§4–5](https://arxiv.org/html/2604.05878v3) · [Analyse du quartique PT](https://arxiv.org/abs/2401.00574)

**Question.** Sous une petite perturbation polynomiale PT qui conserve le graphe de Stokes local et les secteurs aux bords, le zéro double persiste-t-il et quelle est sa dérivée ? Si une condition analytique $F(E,g,\epsilon)=0$ représente le spectre, établir d’abord $F_gF_{EE}\ne0$ au zéro double. Le système $F=F_E=0$ fournit alors la persistance locale, et $g'_*(0)=-F_\epsilon/F_g$. La contribution propre au problème est de contrôler cette non-dégénérescence et de calculer la dérivée via les périodes WKB, ou d’identifier un changement de Stokes qui invalide l’argument.

### Rang 33 — Réponse de marée et conditions sur les branches de trous noirs

Une prépublication annonce l’annulation de toute la matrice conservative statique pour Kerr–Newman en Einstein–Maxwell, y compris les termes mixtes. Un calcul distinct de gravité quadratique indique une réponse non nulle sur une branche numérique non Schwarzschild. La comparaison doit garder la théorie, la branche et la prescription de réponse explicites. [Kerr–Newman](https://arxiv.org/abs/2610.17179) · [Gravité quadratique](https://arxiv.org/abs/2610.24625)

**Question.** Peut-on déterminer l’ordre d’annulation du premier nombre de Love non nul près de la rencontre des branches en gravité quadratique ? Reproduire le fond par tir, calculer le mode marginal au point de branchement et établir si la première variation de la réponse de marée s’annule sous les conditions à l’horizon et à l’infini. La distinction entre correction perturbative au voisinage de Schwarzschild et branche de la théorie complète est nécessaire pour interpréter le résultat.

### Rang 37 — Informations accessibles aux fragments et correction quantique

Maity, Onggadinata et Koh établissent dans un modèle de bloc GHZ un compromis exact entre fidélité et information classique accessible. Leur théorème 1 borne l’information de Holevo de tout fragment par l’entropie d’un bloc logique qubit quand l’état global bloc–environnement est pur. La conséquence pour une récupération imparfaite utilise la relation entre fidélité brute et récupérée propre à leur modèle. [Maity et al., théorème 1](https://arxiv.org/html/2608.03944v1)

**Question.** Pour une isométrie de bruit sur un code de dimension $d$, que peut-on borner sur le nombre de fragments disjoints qui distinguent presque parfaitement une base logique lorsque la récupération préserve l’intrication avec une référence ? Partir de l’information–perturbation pour la complémentaire sur la totalité de l’environnement. Examiner si une structure locale ou une hypothèse d’indépendance est nécessaire pour améliorer la borne quand plusieurs fragments sont disponibles. Le cas d’un registre classique copié entre fragments sépare la redondance de la quantité totale d’information. Vérifier l’antériorité dans les travaux sur les canaux complémentaires et le darwinisme quantique.

### Rang 42 — Profondeur optimale des circuits de syndrome qLDPC

Le désassemblage des codes réduit les contraintes de séquencement par les symétries du graphe de Tanner. Pour les produits homologiques quantiques–classiques étudiés, le texte donne une construction à la borne de degré $\Delta$ si au moins l’un des deux degrés est pair, et à $\Delta+1$ si les deux sont impairs. Des instances de codes de Tanner quantiques saturent numériquement la borne. [Construction et résultats de séquencement](https://arxiv.org/html/2608.19917v1)

**Question.** Dans le cas impair–impair, existe-t-il un ordonnancement à profondeur $\Delta$ qui respecte toutes les contraintes d’ordre des CNOT, ou une famille exigeant $\Delta+1$ ? Reproduire les contraintes du papier, résoudre les plus petits cas où elles s’appliquent, puis chercher soit un motif d’obstruction par parité, soit une construction qui dépasse le calendrier produit. Le problème porte sur la profondeur abstraite pour les interactions du graphe et suppose le même modèle d’ancilles et de portes.

### Rang 56 — Complexité de Krylov et coupure finie en gravité JT

Le dictionnaire de SYK doublement mis à l’échelle donne plusieurs correspondances dans des régimes spécifiés. Le papier soulève la question de leur unicité et de leur survie aux corrections quantiques. L’étude de JT à coupure finie calcule la longueur du pont Einstein–Rosen et sa saturation, et discute sa relation avec Krylov. [Dictionnaire DSSYK, §4](https://arxiv.org/html/2510.22658v1#S4) · [JT à coupure finie](https://arxiv.org/abs/2502.13208)

**Question.** Pour la même déformation et le même état thermofield-double, les premières corrections dues à la coupure donnent-elles le même développement temporel pour la longueur renormalisée et la complexité de Krylov, après fixation de la normalisation au temps court ? Calculer les premiers coefficients de Lanczos à partir des moments de la mesure spectrale déformée. Une divergence au premier ordre indépendant de la normalisation réfuterait cette version précise du dictionnaire.

### Rang 65 — Fenêtre entre reconstruction locale et condensation en DQI

Pour des instances aléatoires régulières clairsemées, le papier sur l’interférométrie quantique décodée distingue le seuil des décodeurs locaux et celui de la mesure optimale pour Max-$k$-XORSAT. Il annonce que BPQM atteint le premier. L’efficacité algorithmique de la mesure optimale entre les deux reste un point distinct de sa capacité informationnelle. [Décodeurs locaux et seuil de condensation](https://arxiv.org/abs/2611.12718)

**Question.** Dans la fenêtre entre ces seuils, quelle taille de voisinage ou quel type de traitement collectif suffit à améliorer quantitativement les chances de décodage ? Fixer d’abord $k$, $D$, la distribution des instances et le critère de réussite, puis tenter une borne pour des décodeurs combinant des estimations sur des boules qui se chevauchent. Une amélioration finie n’établirait un avantage asymptotique qu’avec une analyse de coût et un comparateur classique dans le même modèle.

### Rang 70 — Identifiabilité d’une fermeture par moments sur le cercle

La procédure Takagi–Prony extrapole les moments à partir d’une structure effective de pôles. On peut tester exactement la portée d’une garantie uniforme pour les moments trigonométriques, avant d’étudier les hypothèses plus structurées du papier. [Unit-Circle Moment Closure](https://arxiv.org/html/2606.28894v1)

**Résultat de contrôle.** Soient $m_k=\int e^{ik\theta}\,d\mu(\theta)$ et les deux densités $(1\pm\epsilon\cos((N+1)\theta))/(2\pi)$, avec $0<\epsilon\le1$. Elles ont $m_0=1$ et les mêmes moments $m_1,\ldots,m_N=0$, mais $m_{N+1}=\pm\epsilon/2$. L’intégration des exponentielles prouve que toute estimation de $m_{N+1}$ à partir de ces seules données subit une erreur d’au moins $\epsilon/2$ pour l’une des deux distributions. Ce calcul fixe une limite d’identifiabilité sur la classe de toutes les mesures de probabilité, y compris avec ces densités analytiques.

**Question.** Sous quelles bornes sur le nombre de pôles, leur séparation et leurs poids une fermeture de type Prony est-elle stable pour le prochain moment en présence de bruit ? Examiner la classe produite par la transformation du papier, vérifier si le couple ci-dessus y appartient, puis comparer à la stabilité connue de Prony et au problème tronqué des moments trigonométriques.

### Rang 89 — Nombre de Schmidt certifiable par moments de quadrature

Le travail en variables continues déduit des bornes de fidélité à une cible gaussienne à partir des deux premiers moments et les compare à des témoins quadratiques linéaires. Le travail sur les moments de $k$-réduction porte sur des opérateurs d’états en dimension finie. [Moments de quadrature](https://arxiv.org/html/2610.03113v1) · [Moments de $k$-réduction](https://arxiv.org/abs/2501.15360)

**Question.** Pour deux modes à énergie moyenne bornée, quelle marge de violation survit à la projection locale sur les $N$ premiers niveaux de Fock ? La probabilité de sortie est au plus $E/N$ si $E$ est l’espérance du nombre total d’excitations. Une projection locale ne peut augmenter le nombre de Schmidt. Examiner quels certificats de réduction sont estimables par les données de covariance, et chercher une paire d’états à covariance commune et nombres de Schmidt distincts.

### Rang 95 — Tomographie ADM sans synchronisation des horloges

La reconstruction locale emploie des temps dirigés avec une jauge d’horloge fournie. Dans le cas stationnaire, $t'=t+\phi(x)$ ajoute une différence de potentiel aux temps d’arrivée. [Tomographie optique et ADM, remarque II.1](https://arxiv.org/html/2611.14554v1)

**Question.** Que peut-on reconstruire du décalage stationnaire à partir de temps aller-retour et de sommes dirigées sur des triangles ? Une somme sur un cycle annule exactement les offsets d’horloge aux sommets. Pour de petits triangles, comparer la différence des deux parcours à la circulation du terme de Randers et chiffrer l’erreur due à la courbure des géodésiques. Examiner les périodes des cycles non contractiles et le recouvrement avec les problèmes inverses de géométrie magnétique.

### Rang 98 — Travail net et cohérence en régime stationnaire

L’ergotropie de deux qubits peut changer avec l’approximation séculaire. Un modèle collisionnel exhibe une cohérence stationnaire et comptabilise un coût de commutation. Un troisième travail borne le gain assisté par une ancille à l’aide de l’énergie liée. [Approximation séculaire](https://arxiv.org/abs/2610.24561) · [Modèle collisionnel](https://arxiv.org/abs/2609.38724) · [Énergie liée](https://arxiv.org/abs/2606.19945)

**Question.** Dans un modèle collisionnel à deux qubits avec hamiltoniens explicites, la contribution cohérente à l’ergotropie peut-elle augmenter le travail net après déduction des coûts de préparation et de commutation ? Commencer par un seul bain comme contrôle, puis séparer les flux de chaleur dans le cas de deux températures. Vérifier la positivité et la validité de l’approximation près de la dégénérescence des fréquences.

### Rang 131 — Alphabet des corrélateurs de de Sitter

Dans la théorie conforme $\phi^3$, l’intégrande se construit à partir de corrélateurs plats de champs et moments conjugués. Les auteurs trouvent un alphabet de symboles réduit pour des arbres en chaîne et en étoile. [Corrélateurs de de Sitter](https://arxiv.org/abs/2604.26421)

**Question.** La règle de disparition des lettres issue des tubings vaut-elle pour le premier arbre qui combine deux sommets de valence trois ? Construire le corrélateur par la récurrence de fusion et calculer ses discontinuités avant d’énoncer un critère pour tous les arbres. Si une lettre supposée absente revient, repérer le premier canal d’énergie qui la porte. Les resommations pour champs massifs constituent un second régime, avec des hypothèses différentes. [Corrélateurs massifs](https://arxiv.org/abs/2602.09977)

### Rang 145 — États de Dicke et préparation exacte sans fan-out

Le papier sépare poids constant avec CZ d’arité non bornée, état $W$ approché avec un nombre constant d’ancilles et poids arbitraire exact et propre avec fan-out. [Préparation unitaire à profondeur constante](https://arxiv.org/abs/2601.10693)

**Question.** Pour $k=\lfloor n/2\rfloor$, une famille uniforme de circuits QAC$^0$ sans fan-out, à ancilles polynomiales remises à zéro, prépare-t-elle exactement $|D^n_k\rangle$ ? Vérifier d’abord le recouvrement avec les conjectures de parité et les éventuelles réductions Dicke–fan-out. Une réduction devra employer le circuit de préparation comme unitaire sur son domaine valide et suivre explicitement les ancilles. Comparer la variante d’approximation en distance trace à la préparation exacte.

### Rang 154 — Distillation PPT exacte et géométrie du support

La prépublication annonce une famille de supports de rang trois où une borne tensoriellement stable améliore strictement le min-Rains. Pour une distillation exactement parfaite, l’effet de succès déterministe doit être l’identité sur le support de l’entrée. Cette contrainte continue à s’appliquer aux puissances tensorielles. [Borne de distillation PPT exacte](https://arxiv.org/abs/2608.12135)

**Question.** Pour le support de rang trois donné, la borne du nouvel opérateur témoin est-elle atteignable asymptotiquement ? Reproduire les SDP primale et duale pour une puis deux copies, chercher une construction d’effets PPT stables par tenseur, et vérifier si la borne varie seulement avec le projecteur de support. Examiner séparément la relaxation exigeant une erreur tendant vers zéro, car elle permet de négliger des sous-espaces de faible poids.

### Rang 161 — Cohérence de contrôle et information d’implémentation

Le quantum SWITCH est indépendant du choix des représentations de Kraus. Le branchement cohérent naïf dépend de leur mise en correspondance. L’article isole ce problème et construit un langage physiquement réalisable. [Programming with Quantum-Controlled Quantum Channels, discussion du problème de correspondance](https://arxiv.org/html/2607.15873v1)

**Question.** Pour deux canaux fixés, quel ensemble d’opérateurs de cohérence hors diagonale peut-on réaliser par un recouvrement contractant de leurs environnements de Stinespring ? Se donner des dilatations minimales $V_0,V_1$, écrire le bloc croisé comme contraction partielle, puis déterminer les points extrêmes pour des canaux de rang deux. Vérifier ce que donnent les supermaps qui respectent la composition et ce que les formalismes de canaux munis d’un vide ou d’une extension d’implémentation classifient déjà.

### Rang 170 — Localité approximative des duals de théorie de jauge

Le no-go non abélien suppose une reparamétrisation conservant exactement les degrés de liberté et les relations de commutation fondamentales. Le papier étudie aussi une construction augmentée avec liens et contraintes. [Hamiltoniens duals non abéliens](https://arxiv.org/html/2609.39780v1)

**Question.** Après projection à basse énergie ou troncature de représentations, peut-on borner simultanément l’erreur de commutation et la portée effective des interactions duales ? Sur le plus petit réseau où l’obstruction apparaît, calculer les commutateurs projetés et séparer le résidu de la projection du résidu de la transformation duale. Chercher une borne dépendant de la coupure ou une obstruction qui demeure quand celle-ci augmente. La question concerne le hamiltonien théorique.

### Rang 184 — Robustesse des sous-espaces interdits en lissage quantique

Le théorème 2 relie la positivité de la symétrisation de Margenau–Hill à l’invariance du noyau de l’effet post-sélectionné. [Forbidden Subspaces in Quantum State Smoothing, théorème 2](https://arxiv.org/html/2609.17307v1)

**Résultat de contrôle.** Pour $E=\operatorname{diag}(1,0)$ et $\rho=\left(\begin{smallmatrix}a&c\\\bar c&b\end{smallmatrix}\right)$, la symétrisation donne le bloc $\left(\begin{smallmatrix}a&c/2\\\bar c/2&0\end{smallmatrix}\right)$. Sa valeur propre minimale est $(a-\sqrt{a^2+|c|^2})/2$. Pour $a>0$ et petite cohérence, la négativité est donc quadratique en $|c|$ au premier ordre non nul.

**Question.** Si l’effet fuit hors de son support idéal, quelle perturbation suffit à masquer cette négativité ? En dimension deux, pour $E=\operatorname{diag}(1,\eta)$, le critère est l’inégalité de déterminant $\eta ab\ge (1+\eta)^2|c|^2/4$. Généraliser par blocs à effet mal conditionné et relier le seuil aux erreurs d’estimation du témoin. L’extension topologique du papier requiert une analyse séparée des symétries.

### Rangs 201 et 208 — Ressources quantiques et concentration de l’erreur de Trotter

Le théorème 2 donne la dépendance affine du kurtosis en fonction d’une magie fixée sous un ensemble Clifford global, pour l’erreur dominante $\langle E^\dagger E\rangle$. Le résultat sur le scrambling propose un compromis différent, défini par la propagation de Pauli. [Erreur de Trotter, théorème 2](https://arxiv.org/html/2604.13486v1) · [Scrambling](https://arxiv.org/abs/2508.11969)

**Question.** Existe-t-il une borne de concentration plus fine que celle du quatrième moment pour des états tirés d’un circuit Clifford local de profondeur fixée, avec un commutateur d’erreur à courte portée ? Pour un pas à deux termes, l’erreur vectorielle dominante est $(\delta t)^2[A,B]|\psi\rangle/2$, au signe près. Tester d’abord la croissance des cumulants de l’observable $[A,B]^\dagger[A,B]$ sur des chaînes petites, avec ensembles appariés en intrication et magie. Un contre-exemple à un ordre stochastique de toutes les queues resterait compatible avec une borne sur le kurtosis.

### Rang 233 — Localité de la variation d’une température hors équilibre

Le papier propose une température par minimisation d’entropie relative à structure de cohérence énergétique fixée et fait dépendre d’un alignement la localité de son taux instantané. [Température hors équilibre](https://arxiv.org/abs/2607.08655)

**Question.** Quelle erreur dans la dérivée locale résulte d’une petite violation de l’alignement ? Fixer d’abord la famille d’états de référence et la métrique qui mesure cette violation. Chercher deux états globaux qui coïncident sur un voisinage du sous-système et plusieurs choix simples d’hamiltonien à couplage de bord. Comparer les dérivées sous la prescription du papier. Une borne en norme de bord nécessitera d’isoler les dénominateurs associés à la susceptibilité énergétique.

## Registre de lecture

| Rang | Verdict et raison |
|---:|---|
| 1 | Faux rapprochement. Dans les quatre abstracts cités, *Wannier* désigne toujours Kramers–Wannier ou Kramers–Wannier–Wegner. Les symétries non inversibles restent un sujet à examiner en elles-mêmes. |
| 2 | Réserve. Les sources montrent des réductions de rang sur des EDP et des schémas distincts. Il faudrait fixer un problème d’évolution et une borne de rang liée à sa dynamique pour dépasser l’analogie MPS. |
| 3 | Retenue après resserrement sur les automates pondérés et les générateurs uniformes. |
| 4 | Retenue avec 6. Le lien de vocabulaire mélange divergence de Rényi et entropie stabilisatrice. Les applications aux états nucléaires ne suffisent pas à établir un mécanisme commun. |
| 5 | Réserve. Le gain de part agrège décodeurs neuronaux, correction au niveau circuit et revues. Une question distincte sur une famille de codes et un modèle de bruit serait nécessaire. |
| 6 | Retenue avec 4. Le catalogue couvre déjà la conjecture de Schmidt alignée pour la magie non locale. |
| 7 | Hors périmètre. Projection de taille de processeur à atomes neutres. |
| 8 | Écartée. L’absorption par la poussière et le scénario de graines de trous noirs à haut redshift donnent une étude astrophysique précise. Le score d’isolement ne fournit pas de question théorique quantique identifiable. |
| 9 | Réserve. Les annonces parlent de final-state projection, AdS/CFT et limites de la description semiclassique. Le comptage ne distingue pas leurs objets, déjà couverts en partie par les questions OQM sur l’information des trous noirs. |
| 10 | Écartée comme tendance globale. Deux appuis portent sur une liaison GKP et une unité photonique. La tomographie de bruit par famille de générateurs constitue une source théorique à examiner séparément si elle fournit une question d’identifiabilité. |
| 11 | Réserve. Les papiers en gravité bumblebee ou Kalb–Ramond calculent des observables de photon ring sous des hypothèses de milieu et de métrique différentes. Une question d’identifiabilité géométrique isolée serait recevable. |
| 12 | Réserve. Le mot *error* amalgame codes de Goppa, mitigation et tolérance en non-localité. Le dernier article sur le jeu de monogamie fournit une cible distincte à comparer aux pistes de non-localité. |
| 13 | Retenue. La conjecture sur les graphes cachés est formulée dans le texte principal. Les autres marches du lot traitent des modèles d’oracle et des tâches différents. |
| 14 | Écartée à ce stade. Le flux vers `cond-mat.stat-mech` est mesuré, mais cette piste ne cite aucun article et ne fixe aucun problème de Yang–Baxter. |
| 15 | Hors périmètre. Record physique de portée QKD en fibre. |
| 16 | Hors périmètre. Reconnaissance analogique via écho photonique et dispositif optique. |
| 17 | Réserve. XENONnT borne des modèles de réduction. La formulation indépendante de l’interprétation mérite un examen en fondements, en distinguant ses hypothèses des propositions bohmiennes et de collapse. |
| 18 | Retenue après resserrement sur la stabilité du problème inverse. Les autres articles sur le rayonnement de trou de ver et le cheveu de Proca sont indépendants. |
| 19 | Hors périmètre pour le pont observé. Co-déploiement de fibres, transfert de fréquence et synchronisation instrumentale. |
| 20 | Écartée comme piste commune. La récupération de Kerr par minimisation d’une action d’Ernst et les réseaux neuronaux de traitement de signaux partagent surtout une famille d’outils. |
| 21 | Réserve. Brisure forte–faible et décodabilité partielle offrent une cible si l’on fixe la classe de canaux et la notion d’ordre. Les articles plus anciens portent sur états mixtes préparés ou collapse. |
| 22 | Retenue sur la détectabilité locale du mode lent. |
| 23 | Écartée comme signal de bancs d’essai de génération de code. La question mathématique sur les familles de circuits apparaît au rang 3. |
| 24 | Hors périmètre. Même système physique de 3 000 qubits que 7. |
| 25 | Écartée à ce stade. Inversion de formes d’onde et calcul d’actions de Hessienne. La proximité des autres applications d’apprentissage sur EDP n’isole pas une question sur les ressources quantiques. |
| 26 | Réserve. Le commentaire et la réponse sur les contre-exemples ETH requièrent de comparer les versions fortes, les secteurs de symétrie et les scar states. La hausse des mentions ne résout aucune de ces distinctions. |
| 27 | Hors périmètre pour le signal. Il mesure la transition vers l’expérimentation en optomécanique. |
| 28 | Réserve. Les impossibilités sont de natures distinctes. Le modèle de cristal temporel ouvert propose un no-go précis pour la dissipation covariante avec balance détaillée. À comparer aux autres résultats sur la génération dissipative. |
| 29 | Retenue sur le point exceptionnel sous perturbation. |
| 30 | Réserve. La vague mélange cat codes, solveurs linéaires, matériel atomique et ordonnancement. Les affirmations générales de tolérance ne fixent pas de problème unique. |
| 31 | Écartée. La cooccurrence MCMC–QPO correspond surtout à l’ajustement de paramètres sur des oscillations astrophysiques. |
| 32 | Réserve. L’étoile semiclassique de densité constante est un point d’appui théorique. Un prolongement doit fixer l’état quantique et séparer stabilité radiale et régularité statique. |
| 33 | Retenue sur la réponse près de la bifurcation de branche. |
| 34 | Hors périmètre. Écart entre un record matériel et la taille typique des expériences. |
| 35 | Hors périmètre. Laser à cascade quantique et structure optique semi-conductrice. |
| 36 | Réserve. La censure cosmique faible, la censure forte et les modèles au bord AdS portent sur des énoncés différents. À reconsidérer uniquement sur un régime et une notion d’extension fixés. |
| 37 | Retenue sur la fidélité d’intrication après récupération et les informations de fragments. Le théorème cité contrôle d’abord une fidélité brute sur un bloc qubit. |
| 38 | Hors périmètre pour le pont détecté. Le PID de quadrature et le contrôle de cavité sont ancrés dans le refroidissement d’un dispositif. |
| 39 | Hors périmètre. Le motif et les références mélangent benchmarks sur machine et coûts de réalisation d’oracles. |
| 40 | Réserve. Le signal dépend du sigle FTQC et rapproche concaténation, distillation et compilation. Aucun énoncé transversal précis à partir de ce lot. |
| 41 | Réserve. Synthèse et compilation existent comme sujets, mais la lignée agrège méthodes numériques, optimisation de taille fixe et programmes uniformes. Le rang 3 donne une question mieux définie. |
| 42 | Retenue sur l’écart de profondeur dans le cas impair–impair. Les sources sur la construction discrète de codes et les matrices quasi-dyadiques portent sur d’autres objectifs. |
| 43 | Hors périmètre. Fidélité de détection d’atomes en pinces optiques. |
| 44 | Écartée. Le circuit de jeu EWL pour un système de recommandation ne donne pas une lacune mathématique commune avec les jeux de conception d’ansatz ou les agents de compilation. |
| 45 | Réserve. Les modèles d’énergie sombre précoce, de gravité quantique et d’énergie holographique ont des mécanismes distincts. Le classement de résolutions de la tension de Hubble demanderait un comparateur théorique commun. |
| 46 | Hors périmètre pour le signal mesuré. Il agrège des démonstrations et protocoles sur QPU, dont le partitionnement virtuel et la chimie hybride. |
| 47 | Réserve. Le seuil de perte du protocole cat breeding est une cible théorique possible après séparation du modèle optique de la question abstraite sur la conversion cat–GKP. Le pont ne compte aucun article-pont net. |
| 48 | Réserve. Codes de surface, codes turbo et compactification tordue n’optimisent pas la même propriété. La dernière source mérite examen sur les portes logiques si une lacune distincte du catalogue ressort. |
| 49 | Écartée. Chaîne de Markov se rapporte à l’inférence MCMC sur des données QPO, comme au rang 31. |
| 50 | Réserve. La simulabilité des réseaux de convolution quantique est une question théorique éligible. Les encodages en densité et les benchmarks cités ne définissent pas la même classe de modèles. |
| 51 | Rattachée à 22. Le signal de croissance confirme le thème et ajoute initial slip et résonances de Ruelle–Pollicott. Le problème retenu garde une dynamique et une métrique fixées. |
| 52 | Hors périmètre. Trajectoire de records de qubits logiques réalisés. |
| 53 | Hors périmètre pour la source principale. Le biais cryogénique vise les systèmes à deux niveaux dans des dispositifs, malgré des voisins théoriques sur la dynamique dissipative. |
| 54 | Réserve. Renormalisation du vide en gravité linéarisée, compactification et gravité massive ne résolvent pas le même problème de constante cosmologique. Une version calculable avec prescription de renormalisation fixée serait utile. |
| 55 | Réserve. Le no-go pour trous noirs réguliers en scalaire–tenseur est précis sous symétrie sphérique, champ radial et structure à deux horizons. Les autres résultats de la catégorie ne le renforcent pas. Examiner séparément quelles hypothèses donnent l’obstruction géométrique. |
| 56 | Retenue sur la déformation à coupure finie et le dictionnaire de Krylov. |
| 57 | Réserve. Le mot *logical* confond formalisme logique de Hardy et qubits logiques. La jauge de checks commutants et les codes quotients restent des sources théoriques distinctes. |
| 58 | Réserve. Lignée QAOA crédible, mais la compression de variables et l’encodage de phase ne donnent pas d’énoncé indépendant sur approximation ou profondeur. |
| 59 | Réserve. Lottery BP, décodeurs neuronaux et optimisation de temps d’exécution appellent des comparateurs et modèles de bruit différents. |
| 60 | Hors périmètre pour la démonstration expérimentale de spacetime codes. |
| 61 | Hors périmètre. Luminescence d’ensembles d’émetteurs localisés et références aux boîtes quantiques de matériaux. |
| 62 | Réserve. Le papier intitulé « A proof of the weak gravity conjecture » et les tests sur des géométries corrigées n’ont pas nécessairement la même formulation de la conjecture. Comparer charge, dimension et régime d’extrémalité avant mise à jour OQM. |
| 63 | Hors périmètre. Interfaces chirales avec contrôle sur puce, cavités et émetteurs. |
| 64 | Hors périmètre pour le pont spatial observé. Routage satellite, turbulence et design de réseau. Une question abstraite de routage d’intrication pourrait être reconstruite séparément. |
| 65 | Retenue après recentrage sur les seuils DQI. Le terme *quantum advantage* couvre aussi des tâches de communication causale sans rapport avec ce décodeur. |
| 66 | Réserve. La cooccurrence désigne une famille d’études géodésiques de métriques Kalb–Ramond. L’existence et la stabilité de géodésiques nulles donnent un problème si une classe de métriques et un invariant commun sont fixés. |
| 67 | Réserve. L’algèbre linéaire pour EDO, SVD et nombres de Betti recouvre plusieurs modèles d’accès et sorties. Le regroupement ne permet pas de formuler une borne unique. |
| 68 | Hors périmètre. Détecteurs interférométriques et cavités de filtrage. |
| 69 | Hors périmètre. Comparaison de fidélités expérimentales de portes sur plateformes hétérogènes. |
| 70 | Retenue. Le couple de densités explicites sépare observation des moments et hypothèses de reconstruction. |
| 71 | Réserve. Le signal agrège conjectures du swampland, stabilisation de modules et cosmologie effective. Isoler une conjecture avec paramètres et classe d’EFT donnés. |
| 72 | Réserve. Les noyaux mémoire fondés sur Green et la théorie modale peuvent mener à un problème abstrait de dynamique non markovienne. Le pont actuel décrit surtout la modélisation de guides et dispositifs. |
| 73 | Écartée. Le terme *dataset* rapproche recuit sur D-Wave, données IceCube et classification médicale en raison de leurs jeux de données. |
| 74 | Réserve. Les portes fold-transversales sur bivariate bicycle codes et la parallélisation sur produits homologiques donnent des ensembles de portes et des hypothèses de symétrie distincts. À croiser avec 85 et l’entrée existante sur qLDPC. |
| 75 | Réserve. Les références mélangent amplitudes de spin 2, holographie céleste et symétries généralisées. Il faut un lien d’amplitude précis avant d’inférer un transfert du double copy. |
| 76 | Écartée comme signal indépendant. Les orbites de trous noirs en présence de halos alimentent la même famille QPO que 31 et 49. |
| 77 | Hors périmètre. Fidélités expérimentales sur ions et atomes piégés. |
| 78 | Hors périmètre. Détection de sursauts radio et architecture dépendante du matériel. |
| 79 | Réserve. Temps relationnel dans le minisuperspace, horloges de matière et observables de Dirac définissent des versions distinctes du problème du temps. |
| 80 | Hors périmètre. Cavités à nanofibre, finesse optique et pinces atomiques. |
| 81 | Hors périmètre. Ingénierie moléculaire et centres NV, avec optodétection de spins. |
| 82 | Écartée comme signal de déclin. Le potentiel du radion et la localisation de la gravité sur branes épaisses restent des sujets théoriques distincts. |
| 83 | Rattachée à 65. Le passage de Ramsey et des horloges à l’interférométrie quantique décodée explique une partie du signal lexical. |
| 84 | Réserve en lien avec 36 et 55. Le théorème d’absence d’horizon de Cauchy avec cheveu scalaire donne une hypothèse précise, à distinguer des familles disformelles et de l’évaporation. |
| 85 | Réserve en lien avec 74. La croissance des portes transversales mêle le formalisme syndrome–opérations, des codes non-CSS et des constructions de blocs abstraits. |
| 86 | Hors périmètre. Record de squeezing optique et étalonnage de détecteur. |
| 87 | Hors périmètre pour le dispositif laser à quatre niveaux. L’arbre de décision théorique sous oracle reste distinct. |
| 88 | Écartée sous cette forme. Les solutions par mondes multiples, pseudo-trajectoires et nouveaux formalismes concernent des hypothèses différentes sur la localité. |
| 89 | Retenue. Les témoins de nombre de Schmidt en variables continues donnent une question de certification à énergie bornée. |
| 90 | Réserve pour le catalogue. La superactivation par magie de l’environnement est annoncée dans un modèle Clifford et figure déjà dans la revue bibliographique OQM du 12 novembre. Un prolongement devrait garder les deux capacités individuelles nulles. |
| 91 | Réserve en lien avec 55. Les solutions régulières quasi-topologiques permettent de tester quelles hypothèses du no-go scalaire–tenseur échouent. La stabilité demande un calcul indépendant. |
| 92 | Réserve. L’émergence mesurée mélange renormalisation tensorielle de réseau, ressources de simulation et choix d’architecture. |
| 93 | Réserve. Fixer les observables et le comparateur classique avant de tester un avantage de réservoir quantique. Prédiction chaotique et cartes récurrentes correspondent à des protocoles différents. |
| 94 | Hors périmètre. Records de photons physiquement intriqués. |
| 95 | Retenue. Le mot *optical* désigne ici une reconstruction de géométrie lorentzienne. Les données de cycles posent une question théorique sur la jauge. |
| 96 | À reporter au suivi du problème quantum PCP déjà catalogué. Réduction de poids, bornes de profondeur sur états bruités et preuves interactives par oracle concernent des formulations distinctes. |
| 97 | Réserve. Les états stationnaires symétriques par dissipation non markovienne et les arguments sur l’émergence de la mécanique quantique ont des hypothèses distinctes. |
| 98 | Retenue. Le noyau exploitable compare cohérence, ergotropie et bilan d’un cycle explicite. |
| 99 | Écartée comme signal de déclin. Discord des états X, chaînes XXZ et illumination gaussienne ont des questions de calcul différentes. |
| 100 | Écartée comme rapprochement. Modes fermioniques cosmologiques, supersymétrie du collisionneur et corrélations électroniques de matériaux emploient la non-gaussianité sur des objets distincts. |
| 101 | Réserve en lien avec 84. Le bornage de relaxation en censure forte se distingue de la thermodynamique des skyrmions et de la réduction des trous noirs tournants vers JT. |
| 102 | Écartée. La décélération des listes croisées cs.LG et quant-ph ne cite aucun article et peut dépendre des pratiques d’indexation. |
| 103 | Hors périmètre. Distances expérimentales de téléportation et de distribution d’intrication par fibre ou satellite. |
| 104 | Hors périmètre. Validation sur matériel et diagnostic de simulateur de jauge à atomes de Rydberg. |
| 105 | Réserve en lien avec 9. Les limites imposées par la sous-additivité forte et les scénarios de transition hors du trou noir requièrent des découpages de systèmes différents. |
| 106 | Réserve. Le no-go QBism et la réfutation des modèles maximalement $\psi$-épistémiques utilisent des hypothèses distinctes. Fixer le modèle ontologique et les statistiques à reproduire. |
| 107 | Réserve. Les fils d’intrication et la densité de charge de cordes donnent une dualité précise à vérifier. Le pont vers les géométries de micro-états ne compte aucun article-pont net. |
| 108 | Écartée comme signal lexical. La baisse de *Schroedinger* dépend notamment de l’orthographe et agrège chats, feedback et turbulence de la fonction d’onde. |
| 109 | Réserve. Les plongements Kerr et Reissner–Nordström dans des champs externes peuvent être comparés par leurs invariants et limites. La reconnexion de plasma est un problème différent. |
| 110 | Écartée comme thème supplémentaire. Les circuits paramétrés pour l’apprentissage et l’optimisation des réseaux profonds recoupent 50. |
| 111 | Rattachée à 29. Les points exceptionnels de l’oscillateur et le cas inversé apportent des modèles de contrôle. |
| 112 | Réserve. Les dérivées mixtes de $\log\psi$ donnent un critère de séparation en position dans une région sans nœud. Une extension exige de contrôler les raccordements et la topologie du support. |
| 113 | Réserve. Le signal « ami de Wigner » agrège localisation sur réseau, réexamen du paradoxe et interprétations. Comparer aux formulations OQM de Local Friendliness. |
| 114 | Réserve. Majorisation en espace des phases et no-go de génération heralded portent sur des opérations libres à comparer, indépendamment de l’optique instrumentale. Recoupe 138. |
| 115 | Réserve. Le critère par variance en Monte-Carlo variationnel pourrait donner une borne certifiée pour des états neuronaux. Le thème VQE–NQS n’a aucun pont net et mêle optimisation d’orbitales et estimations d’erreur. |
| 116 | Réserve. Une séparation par état de Haar partagé peut donner un problème théorique précis sur le nombre de copies et la réutilisation. Le mot Haar désigne aussi un outil de randomisation bien plus général. |
| 117 | Rattachée à 66. Les métriques de fond Kalb–Ramond et la leptogenèse CPT-violante modélisent des effets distincts. |
| 118 | Écartée comme scission explicative. Les deux références relient GUP ou quantification de la gravité à des interféromètres. Elles ne relient pas ces limites aux inégalités de Leggett–Garg. |
| 119 | Réserve. Le flux cs.IT rassemble ici la discrimination de canaux et les codes invariants par permutation. Un lien exigerait un énoncé de codage précis fondé sur le problème de discrimination. |
| 120 | Réserve. Le contrôle de conversion complète sous désaccord peut se reformuler en contrôle de SU(2), mais les voisins de séparation d’états portent sur un autre problème. |
| 121 | Réserve. L’estimation de paramètre à partir du paradoxe de Hardy et les fondements interprétatifs n’établissent pas le même problème. Le Hardy robuste doit être formulé via une probabilité de succès et des contraintes explicites. |
| 122 | Réserve théorique. Le no-go de mélange uniforme sur le cycle C9 est un point spectral précis, indépendant du problème de Yukawa. À confronter aux résultats de mélange instantané sur les cycles. |
| 123 | Écartée comme rapprochement. La présence conjointe de thermodynamique et d’ombre ou de QPO dans une métrique modifiée ne donne pas de relation universelle. |
| 124 | Écartée comme signal de déclin. Les perturbations cosmologiques de Hořava–Lifshitz appellent une question sur une action et un régime fixés. |
| 125 | Réserve. La converse forte du canal dégradable est non assistée et conjointe secret-fiabilité. La chaîne A–B–C passe par des termes partagés avec l’assistance par intrication, sans établir la même notion de ressource. |
| 126 | Réserve. L’absorption du groupe ne tranche pas la téléportation exacte avec une ressource partiellement intriquée. Il faut préciser succès probabiliste, catalyse ou copies multiples. |
| 127 | Rattachée à 5 et 42. Accélération de publications sur les codes de surface en agrégat, sans article ni question supplémentaire. |
| 128 | Réserve. Le filtrage gaussien conditionnel d’un cluster à trois modes est une construction théorique. Le voisin de tomographie de Wigner n’établit pas de lacune sur l’optimisation des instruments gaussiens. |
| 129 | Suivi d’entrée. Le catalogue cite déjà l’amplification de l’écart combinatoire à localité fixe et distingue l’écart énergétique. |
| 130 | Hors périmètre pour le signal. Micro-résonateurs et photoniques expérimentales. Les modèles collisionnels théoriques peuvent être lus séparément. |
| 131 | Retenue. Le calcul de symboles de corrélateurs de de Sitter conduit à un test sur des arbres ni chaînes ni étoiles. |
| 132 | Réserve. Extrapolation de bruit par distance de code et distance des codes bosoniques rotationnels n’ont pas la même métrique. |
| 133 | Réserve. L’estimation unitaire en norme diamant ordinaire et la discrimination sous contrainte d’énergie sont compatibles comme questions à rapprocher, après fixation du modèle de requêtes et de la classe d’unitaires. |
| 134 | Rattachée à 84 et 101. Les mêmes articles sur censure, hair et thermodynamique changent de voisinage. La fusion ne fournit pas un résultat supplémentaire. |
| 135 | Réserve. Les états cohérents en longueur minimale et l’intérieur de Schwarzschild utilisent des réalisations différentes. Fixer représentation, domaine et observable avant toute comparaison. |
| 136 | Écartée. La description d’un KEM topologique ne comporte pas de réduction exploitable au McEliece ou à son analyse par Fourier quantique. |
| 137 | Réserve. Les bornes de vitesse et d’incertitude sous feedback sont une cible théorique, mais l’assignation à la correction d’erreurs ne constitue pas un lien. Vérifier le type de contrôle et le coût de l’information de mesure. |
| 138 | Réserve en lien avec 114. Le no-go pour fonctionnelles linéaires de non-classicalité fixe une classe de distributions ordonnées et de canaux de classicalisation. Il faut une autre classe précise pour une extension. |
| 139 | Réserve. Les détecteurs et le potentiel gravitationnel retardé de l’étude trans-horizon ne modélisent pas le même mécanisme de récolte d’intrication. La causalité du couplage et l’ordre des approximations sont à vérifier. |
| 140 | Écartée comme tendance exploitable. Le transformeur intervient dans apprentissage d’hamiltonien et reconstruction d’état à partir de mesures différentes. Il faut une borne de complexité d’échantillonnage pour dépasser le choix d’architecture. |
| 141 | Réserve. Le résultat d’ensemble canonique Schwarzschild peut relier stabilité et sphère de photons sous conditions de cavité. L’extension à des métriques accélérées dépend du choix d’ensemble et de temps. |
| 142 | Réserve. Les dichotomies quantiques et l’encodage en ressources fournissent un langage commun one-shot. La fusion ne détermine pas une implication pour les canaux gaussiens ou leur converse. |
| 143 | Écartée. Le flux eess.IV est surtout porté par des méthodes d’imagerie et des applications NISQ. |
| 144 | Réserve. L’inversion de contraste de corrélations de survie a des bornes spécifiques. Le voisin de comparaison sans erreur d’états ne suffit pas pour identifier le même optimum. |
| 145 | Retenue. La préparation Dicke à poids linéaire sans fan-out fixe une question de complexité abstraite malgré le vocabulaire métrologique du cluster. |
| 146 | Hors périmètre pour la statistique de passage à l’expérience. Les preuves de sécurité du partage de secret demandent un modèle d’adversaire explicite. |
| 147 | Réserve. Les fréquences de fragmentation préthermique de la chaîne spin-1 et les revivals PXP donnent deux cas de contrôle. Il faudrait une borne de durée ou une notion de fragmentation commune. |
| 148 | Hors périmètre pour le signal. Architectures multi-puces, interconnexions cryogéniques et recherche de circuits pour matériel. |
| 149 | Hors périmètre. Émetteurs de nitrure de bore et interfaces photoniques en silicium. |
| 150 | Réserve. Le recouvrement entre Born, contextualité, valeurs faibles et Leggett–Garg ne remplace pas la comparaison de leurs hypothèses d’opérationnalité et de flèche du temps. |
| 151 | Rattachée à 135. La zone GUP–non-commutativité agrège des déformations distinctes et ne cite pas de papier pour un problème supplémentaire. |
| 152 | Rattachée à 98 comme contrôle bibliographique. L’avantage de puissance de charge et la nécessité d’opérations globales concernent une ressource différente du travail net stationnaire. |
| 153 | Réserve. La séparation qPKE–qOWF est relative à un oracle. Une question distincte concerne les constructions ou implications dans le modèle standard, avec clés et communication classiques. |
| 154 | Retenue. La distillation PPT exacte fournit un problème d’atteignabilité calculable, indépendant du libellé non hermitien du cluster. |
| 155 | Réserve. Le cycle Stirling holographique donne des limites thermodynamiques dans un modèle particulier. Il faudrait une égalité contrôlée de ressources ou une divergence au-delà de ce modèle. |
| 156 | Écartée. Le motif LLM couvre les scénarios de personas et des ansatz variationnels transformeurs. Aucun énoncé quantique commun. |
| 157 | Réserve. Le graphe relie BP et transversalité par la famille de codes. Il faut montrer qu’une symétrie du code contraint réellement les messages du décodeur sous portes logiques. |
| 158 | Écartée comme signal de lignée. La thermodynamique des cosmologies tachyoniques et les histoires de de Sitter ne disparaissent pas quand la partition change. |
| 159 | Écartée comme agrégat. Les articles d’introduction IA–quantique couvrent applications et outils distincts sans problème formel commun. |
| 160 | Réserve. Le steering entre électrons délocalisés sous Rashba doit préciser la factorisation en modes et les mesures localement permises. La proximité des fermions variationnels ne prouve pas la transférabilité. |
| 161 | Retenue sur la donnée de cohérence d’implémentation et sa stabilité sous composition. |
| 162 | Écartée comme tendance. La troisième particule et la limite classique de quanta sans masse sont des no-go conceptuels distincts des modèles de masse variable ou quasi exactement solubles. |
| 163 | Hors périmètre pour le pont principal, centré sur les diagnostics de champ laser fort. Les mesures faibles abstraites relèvent des fondements. |
| 164 | Rattachée à 74 et 85. Les portes fold-transversales et la réduction de connectivité matérielle sont deux usages distincts du même code. |
| 165 | Écartée comme chaîne. Fonction physique inclonable en silicium et cryptographie LWE reposent sur des hypothèses distinctes. |
| 166 | Réserve. Le filtrage quantique et le contrôle de systèmes ouverts restent des thèmes. L’absorption du groupe n’isole pas une lacune sur le contrôle stochastique. |
| 167 | Réserve en lien avec 135. La dynamique relativiste sur plan non commutatif et une nouvelle algèbre d’espace-temps nécessitent une représentation et des conditions de domaine communes. |
| 168 | Réserve. Le QFI local révèle certains crossovers, contrairement à certains volumes d’ellipsoïde. Un classement exact des modèles invisibles localement pourrait se rapprocher de la question de support du rang 22. |
| 169 | Hors périmètre pour l’usage principal du recuit et la sélection de caractéristiques. L’étiquette de question ouverte ne formule pas une conjecture quantique de complexité. |
| 170 | Retenue sur la localité duale non abélienne approximative. Le résultat de simulation d’impuretés constitue une autre cible. |
| 171 | Réserve en lien avec 105 et 113. L’analogie entre paradoxes favorise une interprétation selon l’auteur. Il faudrait une correspondance entre les hypothèses opérationnelles pour en faire une question formelle. |
| 172 | Réserve. QSP bruité et représentation statistique de canaux partagent des polynômes, mais il faut préciser le modèle de bruit et la norme avant de transférer une garantie. |
| 173 | Hors périmètre. Défauts de spin, hBN et métalentilles en carbure de silicium. |
| 174 | Écartée comme fusion. La tomographie collective et la tomographie conjointe état–mesure ne fournissent pas un problème de symétrie PT. |
| 175 | Hors périmètre. Visualisation du bruit et des performances de machines et circuits. |
| 176 | Réserve. Détection de transitions par réseau adversarial et classification sur données expérimentales. Une question de généralisation devrait fixer l’information disponible et l’ordre détecté. |
| 177 | Réserve en lien avec 3. Cut-and-meld garantit un optimum local relativement à un oracle. Il faut une séparation quantitative entre coût local et global pour une famille de circuits explicite. |
| 178 | Hors périmètre pour la métrique de passage à l’expérience. Les dimères photoniques et les systèmes lumière–matière dissipatifs ne déterminent pas une conjecture générale sur le skin effect. |
| 179 | Hors périmètre. Prédiction du bruit d’un simulateur à ions piégés. |
| 180 | Réserve. Stabilité des MPS et propriété d’intersection sont théoriques et précises. L’appui CUDA-Q correspond à un usage numérique distinct. |
| 181 | Écartée comme chaîne. Requête privée en QKD et comparaison semi-quantique par échange d’intrication ont des objectifs et modèles de sécurité distincts. |
| 182 | Réserve. Les chaînes de transfert d’état parfait et le désordre peuvent donner une borne de stabilité à géométrie fixée. La lignée seule ne l’identifie pas. |
| 183 | Écartée. Composition musicale et génération de rythmes n’isolent pas une question de théorie quantique. |
| 184 | Retenue. Le modèle à deux niveaux donne un test exact de robustesse de l’obstruction de positivité. |
| 185 | Rattachée à 115. L’antériorité de l’optimisation de variance doit être vérifiée avant de proposer un nouveau critère de convergence VMC. |
| 186 | Hors périmètre pour la hausse mesurée. Excitons, polaritons et dispositifs de guidage. |
| 187 | Écartée. La tarification de portefeuilles par graphes ne donne pas à elle seule une question quantique avec comparateur formel. |
| 188 | Rattachée à 22 et 51. Les démonstrations physiques de Mpemba étayent l’usage du terme. Le témoin local retenu est un problème théorique. |
| 189 | Hors périmètre. Conversion de fréquence et matériaux d’émetteurs télécom. |
| 190 | Rattachée à 124. Le déplacement du groupe ne tranche pas le statut de la projectabilité en gravité de Hořava–Lifshitz. |
| 191 | Hors périmètre pour les appuis. Simulateurs de pile distribuée et exploitation de réseaux de machines. |
| 192 | Rattachée à 2. Les entrées et sorties classiques sont une contrainte importante pour les volumes finis. Aucun énoncé supplémentaire sans modèle d’accès et erreur explicites. |
| 193 | Réserve. L’obstruction à mesurer la pureté par diffusion de neutrons pourrait se reformuler en sélection de cohérences par instruments conservant le spin. La portée dépend du modèle de mesure à deux copies. |
| 194 | Hors périmètre pour cette piste expérimentale. Les transitions induites par la mesure restent théoriquement éligibles. |
| 195 | Réserve. Les corrections à la dynamique des neutrinos dépendent de l’algèbre non commutative et du couplage. Fixer l’observable et comparer à une EFT ordinaire. |
| 196 | Rattachée à 5 et 42. Mémoires hiérarchiques qLDPC et réconciliation de clé non binaire n’ont pas le même modèle de code. |
| 197 | Réserve. Le peeling pour effacements connus et la simulation Clifford d’états magiques bruités sont des résultats précis mais indépendants. La chaîne ne fournit pas de réduction. |
| 198 | Hors périmètre. Formation d’un groupe de technologies à ions piégés. |
| 199 | Réserve en lien avec 67. Le calcul de Weyl pour transformer des valeurs propres et la diagonalisation par échantillonnage diffèrent par l’accès à la matrice et la sortie. |
| 200 | Réserve. Les deux modèles de transport en environnement corrélé permettent un test de l’avantage d’une cohérence sous même bruit et même énergie. La postérité sémantique mesure autre chose. |
| 201 | Retenue. Le théorème fixe un ensemble et un moment de l’erreur dominante. Le régime de circuits locaux et les queues restent à distinguer. |
| 202 | Réserve. Le codage GKP de champs compacts U(1) est une piste théorique indépendante du décompte expérimental. La géométrie des erreurs doit être définie avant comparaison avec 47. |
| 203 | Écartée comme signal lexical. DESI identifie une campagne d’observations et des contraintes, communes à des modèles d’énergie sombre distincts. |
| 204 | Réserve. L’estimation de l’erreur de phase en présence de fuites et la taille finie sous attaques cohérentes se rencontrent si l’on fixe le modèle de fuite et la définition de sécurité. |
| 205 | Réserve en lien avec 54. Énergie du vide gravitationnelle et énergie sombre holographique ont des prescriptions différentes. La scission sémantique ne discrimine pas des tenseurs de contraintes. |
| 206 | Écartée comme tendance globale. La matière quantique au voisinage d’une singularité et les condensats gravitationnels d’intérieur demandent des questions théoriques distinctes. |
| 207 | Rattachée à 62 et 71. Les implications cosmologiques des conjectures du swampland constituent leur postérité, pas un test commun de leurs hypothèses de compactification. |
| 208 | Retenue avec 201 comme point de comparaison. Le compromis de scrambling ne contrôle l’erreur de Trotter qu’après mise en correspondance des observables et ensembles. |
| 209 | Hors périmètre pour la transition mesurée. Les chats picoseconde et le filtrage N00N sont ancrés dans le traitement photonique. |
| 210 | Hors périmètre pour la croissance du terme QPU. Le VQE à moyenne d’états est un protocole indépendant de l’usage de machines distribuées. |
| 211 | Hors périmètre. Fibres à cristal photonique et sources sur micro-résonateurs. |
| 212 | Réserve. Les corrections à la phase géométrique sous décohérence sont éligibles. Fixer une définition de phase mixte et un modèle de bruit avant d’inférer une obstruction. |
| 213 | Écartée comme flux vers le génie logiciel. Les benchmarks et les tests de composants ne posent pas un problème d’équivalence théorique supplémentaire par rapport à 3. |
| 214 | Rattachée à 22. Le modèle à réservoirs donne un cas supplémentaire pour comparer la dépendance du Mpemba au régime markovien et aux observables. |
| 215 | Réserve théorique. Le contrôle global peut poser une question d’algèbre de Lie à topologie fixée. Le statut de l’universalité dépend du système et des contrôles admissibles. |
| 216 | Hors périmètre pour les validations photoniques. La téléportation à destination ouverte et le téléclonage sur ressource Dicke suggèrent une variante théorique à participants manquants. |
| 217 | Écartée comme doublon de vocabulaire de 156. Assistance à l’écriture de code et adaptation tensorielle de LLM n’ont pas le même objet mathématique. |
| 218 | Réserve avec 74 et 85. La hiérarchie de chain maps construit des portes logiques. Le décodage temps réel par BP ne fournit pas d’obstruction homologique complémentaire. |
| 219 | Réserve. Le lien entre Hawking, Unruh et anomalies dépend du choix de l’état, du détecteur et du générateur temporel. Les méthodes ouvertes et WKB doivent reproduire un même observable avant comparaison. |
| 220 | Suivi d’entrée. OQM cite les converses fortes annoncées. Auditer séparément le cas dégradable et l’argument général de projectivité tensorielle, sans déduire leur validité du signal de croissance. |
| 221 | Rattachée à 98 et 152. Bornes de puissance de charge sous interactions contraintes et travail net par cycle sont deux objectifs distincts. |
| 222 | Hors périmètre. Interférence de Hong–Ou–Mandel mesurée avec plus de dix atomes. |
| 223 | Hors périmètre pour le passage expérimental. Le mécanisme de non-réciprocité peut s’inscrire dans le problème théorique du rang 98 si le cycle et ses coûts sont spécifiés. |
| 224 | Réserve. La calibration sur orbites avec garanties à échantillon fini peut donner un problème statistique. L’apprentissage par renforcement à substitut classique n’en constitue pas un test. |
| 225 | Réserve. Confronter les instruction sets transversaux et la revendication de portes universelles à code et définition de transversalité fixés. La chaîne traverse plusieurs sens de la hiérarchie de Clifford. |
| 226 | Hors périmètre. Convergence historique de dispositifs de conversion paramétrique, stockage atomique et couplage photon–atomes. |
| 227 | Réserve. Les propositions d’entropie quasi locale et de corrections à l’aire exigent une définition commune de surface, d’état et de renormalisation. |
| 228 | Réserve. L’homologie persistante quantique est éligible. L’avantage exige de fixer le modèle d’accès aux complexes, le rang ou la persistance demandée et la sortie classique. |
| 229 | Écartée. La mémoire dissipative revendiquée pour un modèle de langage et sa validation matérielle ne donnent pas de borne universelle de mémoire quantique. |
| 230 | Hors périmètre pour les démonstrations sur processeurs. La théorie de jauge abstraite est traitée au rang 170. |
| 231 | Réserve historique. Bogolioubov et la dynamique de corrélations des condensats ouvrent des questions théoriques, sans indication d’une lacune précise par l’absorption du groupe. |
| 232 | Rattachée à 131 avec un second régime. Le bootstrap à dispersion quartique et les phénomènes de Stokes concernent des conditions aux limites différentes de celles du calcul conforme à arbre. |
| 233 | Retenue. La dépendance de la dérivée d’une température à l’alignement donne une question quantitativement testable. |
| 234 | Hors périmètre pour le signal retenu. Transmission médicale par fibre et mesure de signatures de protocoles physiques. |
| 235 | Écartée comme signal historique. Le petit groupe sur les trous noirs primordiaux réunit des scénarios de matière noire et de formation de graines. La partition ne tranche aucune hypothèse cosmologique. |
| 236 | Réserve. Le pseudospectre quadratique des états localisés et les impossibilités de transformation photonique sont deux problèmes théoriques distincts. Le flux vers physics.optics ne les relie pas. |
| 237 | Hors périmètre pour l’expérience de tomographie multiphoton. La définition mathématique d’un observable de phase et les limitations de covariance restent indépendantes de ce montage. |
| 238 | Hors périmètre pour la mesure de winding d’Uhlmann en réseau photonique et les séquences de découplage pour ensembles de spins. Le score de bascule est proche de zéro. |

## Pistes supplémentaires hors des 238

Point de départ : le fichier [openq/sentences.csv](../oqmresearch/arxivdeepsurvey/results/full/openq/sentences.csv). Parmi les entrées d’ouverture ou de conjecture depuis le 1er août 2026, le filtrage des identifiants déjà cités par les 238 pistes ou dans les données éditoriales OQM laisse 305 articles. Un filtre large sur les titres fournit 102 articles pour le repérage. Le choix ci-dessous repose ensuite sur le contenu des abstracts, des sections de texte intégral et la recherche de travaux ultérieurs pour les cas ambigus. Ce passage cible des problèmes assez précis pour être isolés. Il ne mesure pas la couverture de l’ensemble du corpus.

### Discrimination parfaite d’une base de deux qubits avec deux copies par LOCC

Bandyopadhyay donne une base avec trois états intriqués et un état produit. Une mesure séparable collective sur les deux copies réussit parfaitement. Le résultat négatif concerne des mesures séparables adaptatives qui traitent les copies successivement. La version 2 du 7 novembre laisse expressément ouverte la discrimination parfaite par LOCC avec des traitements collectifs dans chaque laboratoire. [Bandyopadhyay, v2](https://arxiv.org/html/2610.16138v2)

**Résultat partiel.** Deux copies de cette base sont insuffisantes pour une discrimination parfaite par LOCC à sens unique. Alice peut raffiner son POVM en effets de rang un puisque Bob peut ignorer le raffinement et reproduire son test initial. Écrivons $(a,b,c,d)$ pour les coefficients du bra associé à l’un de ces effets dans la base locale à deux qubits. La complétude exige un effet avec $d\ne0$. Sur cette branche, l’état produit $|\psi_3\rangle^{\otimes2}$ donne le vecteur $d|11\rangle$ chez Bob. L’orthogonalité des trois autres possibilités à $|11\rangle$ force $a=0$ par l’équation (6a).

À un facteur $1/3$ près, les trois vecteurs de Bob valent alors $(x_k,c,b,0)$, avec $x_k=\omega^k d+\omega^{2k}(b+c)$ pour $k=0,1,2$. Posons $s=|b|^2+|c|^2$. Si $s>0$, les trois orthogonalités imposent $\bar x_0x_1=\bar x_1x_2=\bar x_2x_0=-s$. Leur produit donne $|x_0x_1x_2|^2=-s^3$, impossible. Si $s=0$, les trois vecteurs sont colinéaires et non nuls puisque $d\ne0$. L’échange d’Alice et Bob permute les étiquettes $1$ et $2$ de la base et donne la même obstruction dans l’autre sens. Cette preuve utilise directement les coefficients de l’équation (6). Son antériorité bibliographique reste à établir. [Bandyopadhyay, §3](https://arxiv.org/html/2610.16138v2#S3)

**Cible.** Étendre l’analyse au premier effet d’un protocole interactif, qui peut être de rang supérieur et préserve seulement l’orthogonalité globale des états résiduels. Chercher une obstruction à atteindre une branche de rang un par une suite d’effets locaux, ou un protocole qui utilise la réponse de Bob pour contourner cette contrainte. Distinguer les protocoles à nombre fini de tours de leur fermeture.

### Forme tripartite des inégalités holographiques

La conjecture d’universalité porte sur des décompositions en informations tripartites et informations tripartites conditionnelles. Deux familles infinies ont été traitées. Le papier donne aussi des identités qui permettent d’attaquer des familles à partir de leur vecteur de coefficients entropiques. [Tripartite Form Universality](https://arxiv.org/html/2609.22504v1)

**Cible.** Pour un nombre fixé de parties, énumérer les termes tripartites et conditionnels admissibles avec la convention de signe de l’article. Placer leurs coefficients d’entropie en colonnes d’une matrice entière. Tester les facettes connues par faisabilité entière avec multiplicités non négatives, après quotient par la purification et contrôle du représentant primitif. Reproduire d’abord les familles du papier. Un échec de la relaxation rationnelle donne une obstruction par séparation, tandis qu’un échec seulement entier impose d’étudier l’intégralité et la normalisation avant toute interprétation.

### Longueur de Markov à temps fini en dimension un

Des Lindbladiens strictement locaux peuvent créer une longueur de Markov infinie en un temps arbitrairement court. Le cas de chaîne simple avec sauts $J_j=X_j+X_{j+1}$ présente au premier ordre une queue en $t b^{-4}$, où $b$ est la largeur du tampon. Le texte laisse ouverte l’origine du changement de décroissance observé à temps plus long. [Instabilité de chaînes de Markov, discussion et supplément SX](https://arxiv.org/html/2610.18983v1)

**Cible.** Déterminer l’ordre des limites dans cette chaîne pour l’état produit fixé par le papier. Contrôler le reste de la perturbation uniformément en $b$, ou dériver un développement exact à partir du fait que les $J_j$ commutent. Une pente déduite de quelques tailles n’établit ni queue algébrique à temps fixé ni longueur de Markov finie. Le premier résultat utile serait une borne asymptotique dans un régime conjoint explicite $t=t(b)$, puis un test de ce qui empêche le passage à $t>0$ fixé.

### Mémoires stabilisatrices 3D et choix arithmétique des tailles

Le critère de valuations garantit une barrière logarithmique pour certains *trivariate bicycle codes* et conduit à une durée de mémoire sous une dynamique de Davies spécifiée. Le supplément construit un cas de composante déficiente en rang que le choix $3\nmid L$ rend inoffensive pour les syndromes. Une défaillance du test pour une infinité de tailles laisse la possibilité d’une sous-suite thermiquement utile. [Certificats d’autocorrection partielle, supplément S-3](https://arxiv.org/html/2611.06469v1)

**Cible.** Généraliser le test arithmétique à des facteurs univariés $h(z)$ sur $\mathbb F_2$ dans une famille $g=hg_0$. Pour un facteur de racines non nulles, l’inversibilité dans l’anneau périodique en $z$ équivaut à $\gcd(h,1+z^L)=1$. Elle se lit donc à partir des ordres multiplicatifs des racines. Le calcul restant est de comparer les chemins d’erreur et le décodage pour les suites admissibles, sans supposer que l’inverse dans l’anneau périodique a une portée locale. Le premier test consiste à choisir un facteur dont l’ordre est distinct de 3 et à vérifier les deux types de syndromes et les opérateurs logiques sur une série de tailles admissibles.

### Tomographie gaussienne avec blocs de copies

Le texte isole deux lacunes, le taux en fonction de la taille $k$ du bloc de mesure au voisinage de l’état maximalement mélangé fermionique, et le régime bosonique intermédiaire. La borne par budget uniforme d’information de Fisher est compatible avec une amélioration en $1/k$, tandis que le régime froid obtenu via plongement utilise une dépendance différente. [Tomographie gaussienne, questions 7.1–7.2](https://arxiv.org/html/2611.07271v1#S7)

**Cible.** Fixer d’abord les états fermioniques proches de l’état maximalement mélangé et la métrique d’erreur du théorème. Tester si une POVM covariante par l’action spinorielle peut saturer simultanément l’information de Fisher dans les directions nécessaires à l’estimation. Une saturation de la trace seule ne suffit pas pour la perte minimax. Le premier cas compare $k=1$ et $k=2$ après décomposition en représentations irréductibles.

### Designs unitaires avec symétrie et géométrie de rencontre

Les taux de formation avec symétrie U(1) sont contrôlés par une rencontre de deux marcheurs dans les géométries étudiées, plutôt que par le transport d’une charge isolée. Le résultat du papier traite une plage de moments limitée en fonction du nombre de qubits. [Taux des designs U(1), résultat principal et supplément II](https://arxiv.org/html/2609.39458v1)

**Cible.** Au-delà des moments contrôlés, un mode de plusieurs répliques impose-t-il une échelle plus lente que la rencontre à deux sur un cycle ? Écrire l’opérateur de moments restreint aux secteurs de charge, construire des vecteurs tests concentrés sur des configurations multi-répliques séparées, et comparer leurs quotients de Rayleigh au mode de rencontre du papier. Tout nouvel écart doit distinguer l’effet du secteur de charge, l’ordre du moment et la géométrie des mises à jour.

### Intrication des modes propres d’un Lindbladien local

Une étude numérique observe des distributions différentes de l’intrication des eigenopérateurs entre modèles locaux et non locaux, malgré des statistiques spectrales pouvant paraître chaotiques. Elle extrait les modes fortement intriqués par une procédure de sélection de distribution. [Eigenoperator Entanglement Statistics in Local Lindbladians](https://arxiv.org/abs/2609.29215)

**Cible.** Tester si les queues attribuées à la localité persistent avec une sélection prédéfinie des modes et différentes normalisations gauche–droite. Partir d’un Lindbladien quadratique où les modes sont calculables, puis comparer à une perturbation locale qui brise cette solvabilité. Mesurer séparément l’intrication sur l’opérateur vectorisé et la sensibilité numérique des modes proches de dégénérescences. Une discordance systématique entre les deux sélections indiquerait une dépendance au protocole d’analyse.

### Mise à jour bibliographique — Seuil de Stein des canaux

Le texte de Gour laisse ouvert le seuil général avec lissage par sous-canaux et donne un contre-exemple au lissage CPTP pour certaines paires. Neuf jours plus tard, Gao, Ji et Liu annoncent la converse forte exponentielle pour des paires finies et l’AEP par sous-canaux comme conséquence. Leur autre article annonce un lissage exactement CPTP contre des familles d’alternatives sous hypothèses de fermeture et de présence d’un canal de remplacement fidèle. Le seuil par sous-canaux passe donc en suivi d’une preuve annoncée. Le travail utile consiste à vérifier l’approximation de Stinespring uniforme et les hypothèses de complétion avant de rapprocher les résultats CPTP. [Contre-exemple de Gour](https://arxiv.org/abs/2609.15004) · [Converse forte annoncée](https://arxiv.org/abs/2609.27196) · [Familles d’alternatives](https://arxiv.org/abs/2609.30762)
