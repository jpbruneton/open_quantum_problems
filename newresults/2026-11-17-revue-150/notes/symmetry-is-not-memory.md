# Une multiplicité de Liouville n'est pas automatiquement une mémoire

Piste 31, 17 novembre 2026. Statut : obstruction élémentaire connue dans son principe ; aucune revendication d'originalité.

## Question examinée

Peut-on choisir un canal de maximum d'entropie sous une faible symétrie et déduire de la décomposition de Schur une mémoire quantique sans bruit ? Non : la covariance seule ne suffit pas. Il faut vérifier une structure physique de sous-système et la conservation de la distinguabilité.

## Contre-exemple exact

Sur trois qubits, soit D(X) = Tr(X) I/8. Ce canal est covariant sous toute conjugaison unitaire, donc sous les permutations. Son superopérateur vaut diag(1,0,...,0) dans une base de Pauli normalisée : seul I est conservé. Pour tous états rho et sigma, D(rho)=D(sigma). Aucun encodage de deux états logiques distincts ne peut donc être sans bruit, même avec un décodage physique ultérieur.

La représentation des permutations sur (C^4) tensorisé trois fois possède néanmoins un facteur de dimension 2 pour la partition (2,1). Une identité sur un facteur d'un bloc de Liouville I_2 tensorisé A n'impose pas que A possède un état stationnaire dans ce bloc, ni que ce facteur soit une algèbre physique d'observables logiques. Ici le bloc concerné est simplement nul. Pour une version inversible comme application linéaire, prendre D_p = p Id +(1-p)D, 0<p<1 : toute différence d'états est contractée exactement par p, et le spectre est {1,p}. L'obstruction subsiste.

Le canal complètement dépolarisant maximise aussi l'entropie du Choi normalisé sans autre contrainte : J(D)=I/64 a l'entropie log(64), maximum en dimension 64. La symétrie et le maximum d'entropie peuvent donc coexister avec l'effacement total.

## Rapport aux textes et antériorité

[So–Choi, 2507.15506, III.3–III.4 et appendice A](https://arxiv.org/html/2507.15506) identifient des facteurs de multiplicité et en donnent une interprétation de stockage. L'exemple ci-dessus limite une interprétation opérationnelle universelle de cette identification sous la seule covariance. Il ne conteste pas la décomposition de représentation ; un schéma comportant d'autres hypothèses doit être évalué séparément.

[Maximum channel entropy, 2508.03994](https://arxiv.org/html/2508.03994) étudie des canaux sous contraintes. Le choix des contraintes doit effectivement imposer la protection, et pas seulement une symétrie du canal.

La caractérisation opérationnelle des sous-systèmes sans bruit par les points fixes est antérieure : [Choi–Kribs, PRL 96, 050501 (2006)](https://doi.org/10.1103/PhysRevLett.96.050501), [prépublication](https://arxiv.org/abs/quant-ph/0507213), et [Blume-Kohout et al., 0705.4282](https://arxiv.org/abs/0705.4282). La différence entre covariance et lois de conservation est également étudiée dans [Cîrstoiu et al., PRX 10, 041035 (2020)](https://doi.org/10.1103/PhysRevX.10.041035).

Conclusion de recherche : ne pas proposer un théorème « faible symétrie implique mémoire ». Une cible recevable devrait fixer un encodage CPTP et une algèbre logique, puis imposer leur préservation avant l'optimisation entropique. Aucun nouveau théorème n'est établi ici.
