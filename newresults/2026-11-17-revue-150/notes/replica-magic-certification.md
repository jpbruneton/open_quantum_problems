# Piste 106 : certifier une densité SRE

17 novembre 2026. Statut : méthode candidate fondée sur des outils connus, sans nouveau résultat chiffré.

[2508.03534](https://arxiv.org/html/2508.03534) calcule la magie des MPS ; [2412.07837](https://arxiv.org/html/2412.07837) certifie des observables locales par bootstrap grossier. La densité de magie est un logarithme de quantité globale : un intervalle sur une petite fenêtre ne certifie pas automatiquement sa limite thermodynamique.

Pour un état pur de n qubits, Z_2=2^{-n} somme_P <P>^4 et M_2=-log Z_2. Sur quatre répliques, Z_2=<q^{tensor n}>, où q=(I^{tensor4}+X^{tensor4}+Y^{tensor4}+Z^{tensor4})/2=2 Pi et Pi est le projecteur sur les valeurs propres +1 de X^{tensor4} et Z^{tensor4}. Ainsi q est positif. Pour des tenseurs MPS fixés, le transfert répliqué associé à cette insertion est une application complètement positive T sur les liaisons répliquées.

Un certificat possible est H strictement positif, aH <= T(H) <= bH avec 0<a<=b. La positivité et l'itération donnent a<=r(T)<=b (borne de Collatz-Wielandt sur le cône positif). Des environnements de bord strictement positifs assurent que la racine n-ième de leur contraction de T^n converge vers r(T). Pour un MPS normalisé dont le transfert ordinaire a rayon 1, cela donne -log b <= lim M_2/n <= -log a. Il faut contrôler le support effectivement accessible si un environnement est singulier. Des matrices rationnelles permettraient des certificats LDL exacts à petite dimension, sans SDP lourd.

Ce n'est pas encore un certificat pour le vrai fondamental d'un Hamiltonien : il certifie un MPS donné. Ajouter une borne d'énergie ne contrôle la magie globale qu'avec une borne d'erreur d'état adéquate ; l'opérateur q^{tensor n} a norme 2^n. Cette amplification empêche de convertir naïvement une petite erreur locale en erreur sur la densité.

Antériorité : les transferts SRE existent déjà dans [2207.13076](https://arxiv.org/abs/2207.13076) et leur spectre est précisément étudié dans [2602.15116v2](https://arxiv.org/abs/2602.15116v2), avec des formules exactes pour des MPS de liaison 2. Les quotients de Collatz-Wielandt pour applications positives/CP sont également antérieurs, par exemple [Friedland, Applications of Mathematics 65 (2020)](https://ampapers.math.cas.cz/full/65/5/am65_5_3.pdf). Ni le transfert ni l'inégalité de rayon spectral ne sont nouveaux. Reste à choisir une instance sans formule déjà publiée et à produire un intervalle exact utile ; aucun tel gain n'a été obtenu pendant cette revue.
