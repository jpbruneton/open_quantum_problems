# Deux transferts qui demandent des hypothèses supplémentaires

Ces diagnostics sont démontrés ici pour trier les pistes. Aucune nouveauté historique n'est revendiquée.

## Dualité et coût de transport physique

Le texte sur la [préparation thermique du code torique, section 5](https://arxiv.org/html/2508.00126v2#S5) exploite la conjugaison unitaire de générateurs. Les coefficients de contraction fondés sur les [coûts de transport](https://arxiv.org/html/2506.04197v1) dépendent aussi du choix du coût ou du semi-norme Lipschitz.

Si le coût est transporté avec la conjugaison, l'égalité des coefficients est formelle. Pour garder un coût physique fixé, il faut contrôler la distorsion. L'obstruction existe déjà pour des états diagonaux : sur n bits munis de la distance de Hamming, la cascade de CNOT successifs réalise

\[
F(x)_j=x_1\oplus\cdots\oplus x_j.
\]

Elle est réversible. Modifier le premier bit modifie les n bits de sortie : Lip(F) = n. L'inverse prend les différences de bits voisins : Lip(F⁻¹) = 2 pour n ≥ 2. Les deux bornes sont atteintes. L'extension aux distances W₁ des lois classiques a les mêmes constantes, en utilisant les couplages pour la majoration et les masses de Dirac pour l'égalité.

Pour un noyau T, on obtient donc seulement la borne générale

\[
\eta_d(F T F^{-1})\leq\operatorname{Lip}(F)\operatorname{Lip}(F^{-1})\eta_d(T)
=2n\eta_d(T).
\]

Cela n'affirme pas qu'un générateur précis du code torique perd réellement ce facteur. Cela suffit à invalider un transfert automatique et uniforme en taille pour toute dualité, si le coût de Hamming reste fixé. `verify_mathematics.py` vérifie exactement toutes les arêtes pour n = 2,...,10.

Question restante : pour la dualité et les secteurs physiques considérés, existe-t-il un coût pondéré utile dont la distorsion se contrôle uniformément ? Cette question demande une étude du générateur, pas seulement une conjugaison symbolique.

## La covariance ne contrôle pas l'intrication hors du cadre gaussien

Le critère de covariance d'[extendibilité fermionique gaussienne](https://arxiv.org/html/2508.18532v2) ne fournit pas une caractérisation suffisante pour un état arbitraire. Le problème de [correction d'erreurs approchée à bruit symétrique, section 2.4](https://arxiv.org/html/2507.12326v1#S2.SS4) impose aussi des contraintes de canaux à la séparabilité : une relaxation gaussienne ne les remplace pas automatiquement.

Considérons quatre modes, séparés en deux modes chez chaque partie, et

\[
|\Omega\rangle=(|0000\rangle+|1111\rangle)/\sqrt2,
\qquad \rho_p=(1-p)I_{16}/16+p|\Omega\rangle\langle\Omega|,
\quad 0\leq p\leq1.
\]

Toutes les covariances quadratiques de Majorana sont nulles, comme pour I₁₆/16. En effet les occupations moyennes valent 1/2, aucun opérateur quadratique ne relie 0000 à 1111 et les autres corrélations croisées s'annulent. Pourtant, pour SEP l'ensemble des états séparables de cette bipartition,

\[
\inf_{\sigma\in\mathrm{SEP}}\|\rho_p-\sigma\|_1
=\max\{0,(9p-1)/8\}.
\]

Pour le prouver, posons a = (1−p)/16 et b = p/2. Les deux seules entrées hors diagonale de ρ sont ρ₀,₁₅ = ρ₁₅,₀ = b. Remplaçons-les par c = min(a,b) pour obtenir σ. Dans les sous-espaces locaux pairs engendrés par |00⟩ et |11⟩, la moyenne sur θ = 0,π/2,π,3π/2 des produits

\[
\frac{|00\rangle+e^{i\theta}|11\rangle}{\sqrt2}
\otimes
\frac{|00\rangle+e^{-i\theta}|11\rangle}{\sqrt2}
\]

a quatre entrées diagonales égales à 1/4 et les deux cohérences extrêmes égales à 1/4. Un poids 4c de cette moyenne, complété par des projecteurs produits diagonaux de poids non négatifs, donne σ. Donc σ est séparable, même en imposant la parité locale, et ||ρ−σ||₁ = 2(b−c).

Pour la minoration, dans ces deux qubits encodés, prenons

\[
W=\tfrac12(|01\rangle\langle01|+|10\rangle\langle10|
-|00\rangle\langle11|-|11\rangle\langle00|),
\]

prolongé par zéro. C'est la transposée partielle du projecteur sur l'état singulet ; son espérance est non négative sur SEP. Comme ||2W||∞ = 1 et Tr(ρW) = a−b, Hölder impose une distance au moins 2(b−a) si b > a. Les bornes coïncident et donnent la formule.

Ainsi une fonction de la covariance seule peut voir exactement le même objet pour un état séparable et pour un état à distance 1 de SEP. Une extension au-delà du cas gaussien doit contrôler une quantité supplémentaire : distance à un état gaussien, moments supérieurs, ou autre hypothèse structurelle. La borne par inégalité triangulaire avec cette distance est immédiate et n'est pas présentée comme un théorème inédit.

## Une connexion déjà explicite

Le rapprochement entre les hiérarchies SOS de [codage classique pour canaux quantiques](https://arxiv.org/html/2609.09629v2) et la [contraction en norme trace](https://arxiv.org/html/2507.16737v1) n'est pas retenu comme nouveauté : le premier texte établit déjà explicitement ce lien. Un bon score de rapprochement peut donc retrouver une connexion existante.
