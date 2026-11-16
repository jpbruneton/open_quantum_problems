# Un état exotique certifié pour les bases Fourier de Z₃ × Z₃

Statut : existence démontrée par certificat exact ; antériorité non certifiée. « Exotique » signifie ici KD-positif mais hors de l'enveloppe convexe des purs KD-positifs. Cela ne signifie pas KD-négatif.

## Données explicites

On ordonne les éléments de G = F₃² par `(0,0),(0,1),(0,2),(1,0),...,(2,2)` ; même ordre pour les caractères χ_c(g) = ζ^(c·g), où ζ² + ζ + 1 = 0 et Im ζ > 0. La transformée est F₃ ⊗ F₃.

Le fichier [z3x3-simple-certificate.json](z3x3-simple-certificate.json) contient deux matrices entières R et M de taille 9 × 9. Elles définissent entièrement l'état et le témoin par

\[
Q_G(\rho)=R/7740000,\qquad Q_G(W)=M,
\qquad A_{g,h}=\sum_c Q_G(A)(g,c)\zeta^{c\cdot(g-h)}.
\]

Le témoin M est

```text
 -1   8  -1  -1   8  -1   8 -10   8
 -1  -1   8  -1  -1   8   8   8 -10
  8   8   8   8   8   8 -10 -10 -10
 -1  -1   8   8 -10   8   8  -1  -1
 -1  -1   8   8  -1  -1   8 -10   8
  8 -10  -1 -10  -1   8 -10 -28 -19
  8  -1  -1  -1   8  -1   8   8 -10
  8   8 -10  -1   8  -1   8  -1  -1
-10   8  -1   8  -1 -10 -10 -19 -28
```

Une autre description de la construction : parmi les 54 projecteurs purs KD-positifs, 43 maximisent Tr(WP) = 18. Soit ρ₀ leur moyenne uniforme. Alors

\[
Q_G(\rho)=Q_G(\rho_0)+\frac1{20000}M.
\]

Cette perturbation sort de l'enveloppe convexe tout en restant définie positive et strictement KD-positive. La positivité est certifiée ci-dessous ; elle n'est pas supposée à partir de la petitesse du paramètre.

## Pourquoi les 54 purs sont tous les purs

Les sous-groupes de F₃² sont {0}, les quatre droites et F₃². Pour chaque H, les purs sont les indicatrices normalisées des classes de H avec une phase de caractère, selon la [classification publiée des purs](https://arxiv.org/html/2501.12252v2#S3). Leurs matrices KD sont 1/9 fois les indicatrices

\[
\mathbf1_{a+H}(g)\mathbf1_{c+H^\perp}(\chi).
\]

Chaque sous-groupe donne neuf projecteurs distincts : 6 × 9 = 54. Le vérificateur reconstruit ces masques à partir des six sous-groupes, sans réutiliser ceux stockés par la recherche.

## Vérifications exactes

Le script [verify_z3_certificate.py](verify_z3_certificate.py) utilise seulement des fractions rationnelles. Pour ρ = A + Bζ, il vérifie exactement l'hermiticité et la trace, puis la positivité par la matrice rationnelle

\[
X=A-B/2,\qquad
\mathcal R=\begin{pmatrix}X&-3B/2\\3B/2&3X\end{pmatrix}.
\]

Cette matrice est congruente à la représentation réelle usuelle de ρ, via diag(I,√3 I). Ses 18 pivots LDL sont strictement positifs. La reconstruction LDLᵀ est égale à Rcal sur chacune de ses 324 entrées, en fractions exactes. C'est un calcul différent du LDL cyclotomique 9 × 9 du script de recherche.

Les autres résultats exacts sont

\[
\operatorname{Tr}\rho=1,\qquad
\min_{g,c}Q_G(\rho)(g,c)=\frac{2291}{1935000}>0,
\]

\[
\max_{P\text{ pur KD+}}\operatorname{Tr}(WP)=18,
\qquad
\operatorname{Tr}(W\rho)=\frac{206973}{10000},
\qquad \text{écart}=\frac{26973}{10000}>0.
\]

Le produit Tr(ρW) est recalculé directement dans Q(ζ) et par l'identité de recouvrement KD ; les deux coïncident exactement. L'inégalité sur tous les purs s'étend à leur enveloppe convexe par linéarité. Cela prouve ρ ∉ C_G.

Enfin, le calcul donne ||W − 18I||∞ ≤ 486 par majoration des sommes des modules des coefficients de chaque ligne (|a+bζ| ≤ |a|+|b|). Pour σ ∈ C_G, l'inégalité de Hölder donne

\[
\|\rho-\sigma\|_1\geq
\frac{\operatorname{Tr}[(W-18I)(\rho-\sigma)]}{486}
\geq \frac{26973}{4860000}=\frac{111}{20000}.
\]

Cette borne est certifiée mais n'est pas prétendue optimale.

## Recherche et portée

Une première recherche de 30 directions aléatoires était non concluante ; elle n'établissait aucune égalité d'ensembles. La recherche suivante a exploré des normales d'appui du polytope des purs, puis perturbé la moyenne des projecteurs qui saturent l'inégalité. NumPy a servi à trouver les coefficients. La décision finale repose sur l'arithmétique exacte.

Le résultat ne contredit pas l'égalité connue pour le groupe cyclique Z₉ : sa transformée F₉ n'est pas F₃ ⊗ F₃. Il ne revendique ni le premier état exotique en dimension neuf pour toutes bases, ni une résistance aux perturbations des bases. Voir [prior-art.md](prior-art.md).
