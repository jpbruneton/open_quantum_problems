# Pistes 18–20 : l'arrondi des états ne normalise pas automatiquement les mesures locales

Statut : question de transfert non résolue ; obstruction exacte à une réparation naïve. Le principe général est déjà connu via les mesures pretty-good d'ensembles produits ; pas de revendication d'originalité pour ce principe.

Les deux ingrédients sont [les mesures extendibles, 2412.18556v3](https://arxiv.org/html/2412.18556v3), annexe A, et [l'arrondi argmax des états, 2608.02590](https://arxiv.org/html/2608.02590). Le premier exige une décomposition dont chaque terme garde des marginales de canal précises. Un mélange de produits proche au sens de la norme trace ne fournit pas à lui seul ces contraintes. Le résultat pour un état bosonique ne s'applique pas non plus à une extension seulement invariante par permutations sans vérifier son support.

## Un exemple exact : la renormalisation globale peut créer des effets intriqués

Sur deux qubits, soit P = |++⟩⟨++|. Prenons cinq effets séparables non normalisés : F_j = |j⟩⟨j| pour j = 00,01,10,11 et F_4 = 3P. Leur somme est S = I+3P. La réparation habituelle forme E_j = S^(-1/2) F_j S^(-1/2). Comme P est un projecteur,

\[
T=S^{-1/2}=I-\tfrac12P,\qquad TST=I.
\]

C'est donc bien une POVM. Pourtant E_00 = |v⟩⟨v| avec v = (7,−1,−1,−1)/8. Le déterminant de la matrice des coefficients bipartites de v vaut −1/8, donc v est intriqué. Plus explicitement, pour w = (0,1,1,0),

\[
\langle w|E_{00}^{T_B}|w\rangle=-3/16<0.
\]

Ainsi des effets séparables peuvent devenir intriqués sous la réparation globale, même quand leur somme était inversible et séparable. L'exemple s'étend à S=I+tP, t>0, avec T=I+((1+t)^(-1/2)−1)P : le déterminant du vecteur corrigé est ((1+t)^(-1/2)−1)/4 ≠ 0. L'obstruction existe donc aussi arbitrairement près de la normalisation exacte. Elle ne prouve pas qu'aucune autre réparation préservant la localité n'est possible.

## Antériorité

Requêtes du 17 novembre : `"separable" "POVM" "normalization" "square root"`, `"pretty good measurement" "product states" "entangled"`. Les [notes de Preskill, exercice double-trine](https://www.lorentz.leidenuniv.nl/quantumcomputers/literature/preskill_10.pdf) et les travaux de discrimination collective montrent déjà que la mesure pretty-good d'états produits peut être intriquée. L'exemple rationnel ci-dessus est un diagnostic de cette revue, pas un phénomène inédit.

La convergence vers les mesures 1-LOCC utilise déjà un de Finetti sous contraintes : Berta–Borderi–Fawzi–Scholz, [1810.12197](https://arxiv.org/abs/1810.12197), proposition A.5, reprise dans 2412.18556. La question restante précise est de savoir si l'argmax permet d'améliorer la vitesse de cette version contrainte en gardant exactement les marginales et la structure causale. Ni la preuve d'une amélioration ni son originalité ne sont établies ici.
