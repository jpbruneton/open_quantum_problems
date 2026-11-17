# Piste 111 : le coût quadratique écrit ne s'annule pas sur les états séparables

17 novembre 2026. Statut : contre-exemple exact à une définition précise de prépublication ; mécanisme de distance à soi non nulle déjà connu. Pas de revendication générale de nouveauté.

## Définition auditée

[2606.04969v2](https://arxiv.org/html/2606.04969v2), équations (1)–(4), choisit des bases hermitiennes locales traceless orthonormées pour Tr(F_i F_j)=delta_ij et le coût C=somme_X (X tensor I-I tensor X)^2 entre deux copies de AB. Puis W=(min_couplages Tr(C tau))^{1/2} et E(rho)=inf_{sigma séparable} W(rho,sigma). Le PDF v2, page 2, confirme ces formules. Il faut distinguer ce coût quadratique d'une norme duale W1 appliquée à rho-sigma.

## Identité de coût et borne universelle

Pour une base locale complète de dimension d,

somme_i F_i tensor F_i = Swap-I/d,
somme_i F_i^2 = (d^2-1)I/d.

Donc, en réordonnant les deux copies, le coût écrit vaut exactement

C=2(d_A+d_B)I-2(Swap_A+Swap_B).

Les deux swaps sont des involutions hermitiennes qui commutent. Il s'ensuit

C >= 2(d_A+d_B-2)I.

Ainsi, dès que d_A,d_B>1, E ne peut s'annuler sur aucun état. Pour tout état séparable rho=sum_j p_j |a_j b_j><a_j b_j|, le couplage sum_j p_j |a_j b_j><a_j b_j| tensor |a_j b_j><a_j b_j| atteint la borne ; il a deux marges égales à rho. Par conséquent

E(rho)=sqrt(2(d_A+d_B-2)) pour tout rho séparable.

Sur deux qubits, E(|00><00|)=2, en contradiction avec la propriété (i) de la proposition 2. La valeur duale décrite comme fonction de rho-sigma vaut zéro lorsque rho=sigma : elle ne peut égaler ce coût.

## Tous les états purs

Si rho=|psi><psi| est pur, tout couplage de première marge rho est rho tensor sigma. Avec les marges rho_A,rho_B,

Tr(C(rho tensor sigma))=2(d_A+d_B)-2 Tr[(rho_A tensor I+I tensor rho_B)sigma].

Si mu_1 est la plus grande valeur propre de Schmidt, l'optimisation sur sigma séparable atteint simultanément les deux maxima par un produit de vecteurs propres. D'où

E(|psi><psi|)^2=2(d_A+d_B-2mu_1).

Pour Bell, E^2=6. Le script `../verify_quadratic_cost.py` contrôle les matrices de swaps et les contractions par arithmétique rationnelle. La preuve des optimums est analytique.

## Antériorité et conséquences

Les coûts quantiques quadratiques avec distance à soi non nulle sont connus ; voir [Tóth–Pitrik, Quantum 7, 1143 (2023)](https://quantum-journal.org/papers/q-2023-10-16-1143/), [2209.09925](https://arxiv.org/abs/2209.09925). Ces cadres ne doivent pas être confondus avec une norme de Wasserstein à coût de Hamming. Aucun correctif spécifique à 2606.04969 n'a été trouvé dans les recherches ciblées par identifiant et par titre ; une priorité de cette observation spécifique n'est pas certifiée.

Cette note réfute l'annulation de la formule écrite, pas toute mesure d'intrication basée sur un transport quantique. Une variante avec transposition/conjugaison ou coût centré est une autre définition ; même une variante transposée garde une distance à soi positive sur un état pur pour des observables incompatibles, donc elle exigerait un nouvel audit. Le rapprochement avec le Schrödinger bridge classique de [2603.16056](https://arxiv.org/abs/2603.16056) ne répare pas cette obstruction.
