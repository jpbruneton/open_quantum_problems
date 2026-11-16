# Transport des états KD-positifs par sous-groupes et quotients

Statut : preuve dérivée dans cette exploration ; priorité bibliographique non établie. Tous les groupes ci-dessous sont abéliens et finis. La norme trace ne comprend pas de facteur 1/2.

## Conventions

Pour G de cardinal N, on utilise les bases position et Fourier, avec `U(g,χ) = χ(g)/sqrt(N)`. Pour un opérateur A,

\[
Q_G(A)(g,\chi)=\frac1N\sum_{h\in G}A_{g,h}\chi(h-g).
\]

Notons E_G l'ensemble des matrices de densité avec Q_G réel et positif ou nul, et C_G l'enveloppe convexe des projecteurs purs appartenant à E_G.

L'ingrédient publié est la classification des purs : ils sont les projecteurs des vecteurs

\[
\psi(g)=|L|^{-1/2}\gamma(g)\mathbf1_{a+L}(g),
\]

où L ≤ G et γ est un caractère. Voir [De Bièvre–Langrenez–Radchenko, théorème 3.1](https://arxiv.org/html/2501.12252v2#S3). Les arguments qui suivent utilisent cette classification, sans la redémontrer.

## 1. Sous-groupe

Soit H ≤ G, de cardinal m. L'isométrie V : ℓ²(H) → ℓ²(G) prolonge les fonctions par zéro. Directement dans la définition de Q,

\[
Q_G(V\rho V^*)(g,\chi)=
\begin{cases}
\dfrac mN Q_H(\rho)(g,\chi|_H),&g\in H,\\
0,&g\notin H.
\end{cases}
\]

Donc V envoie E_H dans E_G. Un pur de H reste un indicateur de classe de sous-groupe avec phase de caractère dans G : tout caractère de H se prolonge à G. Ainsi V C_H V* ⊆ C_G.

Réciproquement, comprimons un pur ψ de G. L'intersection `(a+L) ∩ H` est vide ou une classe de L ∩ H. Le vecteur V*ψ est donc nul ou proportionnel à un pur KD-positif sur H. En fixant un pur τ ∈ C_H, le canal

\[
R_V(X)=V^*XV+\operatorname{Tr}[(I-VV^*)X]\,\tau
\]

est complètement positif et préserve la trace ; il réalise une compression suivie d'une préparation sur le complément. Il satisfait R_V(C_G) ⊆ C_H et R_V(VρV*) = ρ.

## 2. Quotient

Posons K = G/H et m = |H|. L'isométrie J : ℓ²(K) → ℓ²(G) est

\[
(Jf)(g)=m^{-1/2}f(g+H).
\]

La somme des caractères sur H donne

\[
Q_G(J\rho J^*)(g,\chi)=
\begin{cases}
\dfrac1m Q_K(\rho)(g+H,\bar\chi),&\chi|_H=1,\\
0,&\text{sinon},
\end{cases}
\]

où χ̄ est le caractère induit sur K. Donc J E_K J* ⊆ E_G. Le relevé d'un pur associé à une classe de M ≤ K est le pur associé à sa préimage dans G ; ainsi J C_K J* ⊆ C_G.

Pour la rétraction, appliquons J* à ψ = γ 1_{a+L}/sqrt(|L|). Sur une fibre de q : G → K, l'intersection avec a+L est vide ou une classe de H ∩ L. Si γ est non trivial sur H ∩ L, toutes les sommes correspondantes s'annulent. Sinon leur module est constant sur q(a+L), et leur phase est un caractère de q(L), prolongé à K. Par conséquent J*ψ est nul ou proportionnel à un pur KD-positif de K. Le canal

\[
R_J(X)=J^*XJ+\operatorname{Tr}[(I-JJ^*)X]\,\tau,
\qquad \tau\in C_K\text{ pur},
\]

vérifie R_J(C_G) ⊆ C_K et R_J(JρJ*) = ρ.

## 3. Conservation exacte de la distance

Pour E = V ou J et le petit groupe S = H ou K,

\[
\boxed{\quad
\inf_{\sigma\in C_G}\|E\rho E^*-\sigma\|_1
=\inf_{\omega\in C_S}\|\rho-\omega\|_1.
\quad}
\]

La première inégalité « ≤ » vient de E C_S E* ⊆ C_G et de l'invariance de la norme trace sous plongement isométrique. Pour l'autre sens, tout σ ∈ C_G a R_E(σ) ∈ C_S, et la contraction de la norme trace des opérateurs hermitiens par un canal donne

\[
\|\rho-R_E(\sigma)\|_1
=\|R_E(E\rho E^*-\sigma)\|_1
\leq\|E\rho E^*-\sigma\|_1.
\]

Il suffit de prendre l'infimum. Le raisonnement ne suppose pas que la rétraction envoie tout E_G dans E_S : seule son action sur C_G est nécessaire et a été prouvée.

## 4. Conséquences et limites

L'égalité E_G = C_G se transmet à tout sous-groupe et à tout quotient. Inversement, un contre-exemple sur un sous-quotient S se relève à G, avec la même distance à C.

Tout groupe abélien fini non cyclique contient un sous-groupe Zₚ × Zₚ pour au moins un premier p. Tout groupe cyclique dont l'ordre a deux facteurs premiers distincts contient Zₚq. Ainsi des contre-exemples dans toutes les familles Zₚ² et Zₚq suffiraient à prouver que seuls le groupe trivial et les groupes cycliques de puissance première ont E = C. Les cas cycliques de puissance première sont déjà établis dans la littérature ; l'existence uniforme des autres contre-exemples n'est pas prouvée ici.

Le contre-exemple Z₃² de ce dossier fournit tous les groupes ayant un sous-quotient Z₃², notamment tous les 3-groupes abéliens non cycliques, avec distance au moins 111/20000. Les cas publiés Z₂² et Z₆ donnent les autres obstructions nécessaires pour classifier les groupes d'ordre 2ᵃ3ᵇ : seuls subsistent les cycliques d'ordre 2ᵃ, les cycliques d'ordre 3ᵇ et le groupe trivial.

Les contrôles de `verify_mathematics.py` portent sur huit plongements issus de Z₂², avec 3 008 entrées pures au total. `verify_z3_lifts.py` ajoute quatre plongements issus de Z₃² vers Z₃³ et Z₉ × Z₃, avec 2 052 entrées pures. Ce sont des contrôles numériques des identités, distincts de la preuve générale ci-dessus.
