# Audit des horizons en fondements et gravitation

Le classement « sharp » exige un domaine défini, des hypothèses identifiables et un critère de résolution qui porte sur la question entière. La seule forme « prouver ou donner un contre-exemple » ne suffit pas si les objets admissibles ou le sens du résultat restent à choisir.

L'audit couvre les **44 entrées actives** des séries F, G, H, QG et R dans les fichiers locaux : **16 reclassements**, **14 entrées conservées en sharp** et **14 horizons déjà prudents conservés**. Les décisions portent sur les formulations actuelles. Une conjecture physique reconnue peut demander une formulation plus précise avant de recevoir ce label.

| Série | Entrées | Sharp avant | Sharp après | Reclassements |
| --- | ---: | ---: | ---: | ---: |
| F | 16 | 5 | 4 | 1 |
| G | 10 | 9 | 5 | 4 |
| H | 6 | 6 | 0 | 6 |
| QG | 8 | 6 | 2 | 4 |
| R | 4 | 4 | 3 | 1 |
| Total | 44 | 30 | 14 | 16 |

## Critère appliqué

Un problème reste sharp lorsque les objets et la propriété sont définis, même si la preuve est très difficile ou comporte plusieurs étapes. Ainsi, les propriétés demandées pour un même objet dans R4 ne justifient pas un déclassement. Les deux problèmes de construction/non-existence de G4 ont aussi des objets et des critères explicites ; résoudre l'un ne résout cependant pas l'autre.

Une fiche devient **conceptual** lorsque la définition du domaine, de l'observable ou du critère de succès fait encore partie de la recherche. Elle devient **programme** lorsqu'elle rassemble construction, classification, limites ou extensions dans plusieurs cadres encore à fixer. Elle devient **incremental** lorsque sa portée actuelle consiste à améliorer des bornes ou à couvrir davantage de cas.

Une preuve dans une sous-classe ne prouve pas une conjecture universelle. Un contre-exemple doit satisfaire les hypothèses de cette même conjecture. Une démonstration conditionnelle conserve ses hypothèses ; une correction perturbative négative ne constitue pas nécessairement une diminution de la quantité totale. Ces distinctions sont désormais explicites dans les fiches concernées.

## Fondements quantiques

Fichiers : [cat-foundations.js](../../app/data/cat-foundations.js).

| Entrée | Horizon avant → après | Décision et critère |
| --- | --- | --- |
| F1 Measurement problem | conceptual → conceptual | Ontologie, dynamique et sens des probabilités dépendent du cadre interprétatif ; la fiche le dit déjà. |
| F3 Operational reconstruction | conceptual → conceptual | Le vocabulaire d'axiomes, les règles de composition et les critères de comparaison restent des choix du programme. Un théorème de reconstruction conditionnel n'en clôt pas l'ensemble. |
| F4 Wigner's-friend scenarios | conceptual → conceptual | Les hypothèses sur les enregistrements accessibles et le contrôle cohérent constituent la question ; un protocole précis peut fournir un sous-problème sharp. |
| F5 Objective classical records | conceptual → conceptual | Le critère d'objectivité et l'accès aux fragments ne sont pas fixés dans une unique tâche. Une fois fixés, les bornes de redondance et de durée constituent des objectifs quantitatifs. |
| F6 Long-time classical limits | programme → programme | Dynamiques, observables, ordres des limites et fenêtres de temps distincts ; aucun théorème unique n'est annoncé comme résolution universelle. |
| F7 Subsystem structure | conceptual → conceptual | Données accessibles, notion de localité approchée et métrique de stabilité doivent définir l'inverse problem. |
| F8 Quantum reference frames | conceptual → conceptual | Groupe, ressources, couplages, tâche et erreur opérationnelle sont encore à choisir. Les résultats quantitatifs se comparent à l'intérieur de ces choix. |
| F9 Indefinite causal order | conceptual → conceptual | La réalisabilité dépend des hypothèses sur les laboratoires et l'espace-temps. Le sous-problème de purifiabilité ne définit pas toute la frontière physique. |
| F10 Quantum latent causes | conceptual → conceptual | Graphe, dimensions cachées, instruments accessibles et statistique à identifier doivent être fixés. Le programme d'inférence général n'est pas une seule proposition. |
| F12 Reversible correlating dynamics | sharp → sharp | Espaces convexes de dimension finie, composition localement tomographique, réversibilité et plongement des états et effets sont explicités. Un exemple non plongeable doit satisfaire toutes ces hypothèses. L'audit ne statue pas sur l'objection bibliographique déjà signalée dans la fiche. |
| F13 Relativistic collapse | sharp → programme | Les conditions physiques ne spécifient pas une classe de dynamiques stochastiques et de théories de champs ni le sens de la limite non relativiste. Étendre un no-go à une autre classe restreinte ne constitue pas l'alternative logique à l'existence générale. |
| F14 Nonlinear quantum mechanics | programme → programme | Composition, états mixtes et règles de mesure restent à fixer avant une implication de non-signalisation vers linéarité. |
| F15 Higher-order interference | sharp → sharp | Existence ou impossibilité d'une théorie satisfaisant les axiomes opérationnels nommés et la composition indiquée. Le mot « reasonable » du titre n'est pas le critère : la liste d'axiomes l'est. |
| F16 Wigner entropy | incremental → incremental | Valeur optimale et réalisation de l'infimum ; les améliorations de bornes et les secteurs tronqués ne donnent pas un critère binaire unique déjà conjecturé. |
| F17 Beam-splitter extremality | sharp → sharp | Ensemble des états Wigner-positifs, séparateur équilibré, support de Fock fini et extrémalité sont explicitement définis. |
| F18 Pure spin Wigner negativity | sharp → sharp | Noyau de Stratonovich donné et négativité ponctuelle pour chaque état pur de spin positif : un état admissible partout positif réfuterait la proposition. |

Les archives F2 et F11 ne font pas partie des 16 entrées actives demandées.

## Trous noirs et gravitation semi-classique

Fichier : [cat-semiclassical-gravity.js](../../app/data/cat-semiclassical-gravity.js).

| Entrée | Horizon avant → après | Décision et critère |
| --- | --- | --- |
| G1 Page curve | conceptual → conceptual | L'algèbre du rayonnement, le régulateur et l'habillage gravitationnel font partie de la définition recherchée. |
| G2 Interacting Hawking effect | sharp → sharp | Le critère principal est la convergence tardive ordre par ordre vers un état stationnaire de type Unruh dans le cadre de l'effondrement indiqué. La fiche distingue désormais ce critère du calcul de la première correction ; une correction stationnaire non thermique ne réfute pas la convergence. Le choix principal est l'interaction quartique ; Yukawa devient une extension. Un théorème doit préciser les asymptotiques géométriques, la prescription de renormalisation et l'algèbre asymptotique. |
| G3 Quantum strong cosmic censorship | sharp → programme | Mélange d'un coefficient sur fond fixé, de sa classification en paramètres et d'une conclusion sur une métrique avec rétroaction. La divergence d'un tenseur sur Kerr fixé ne prouve pas à elle seule l'inextensibilité de la métrique couplée. |
| G4 Hadamard states | sharp → sharp | Problèmes explicites de construction de l'état d'Unruh et de non-existence avec miroir de Dirichlet. Les cas de champ, masses et domaines géométriques sont identifiés ; chaque partie garde son propre critère. |
| G5 Semiclassical Cauchy problem | sharp → programme | Classification des données et paramètres en FLRW, puis existence sans symétrie avec choix entre équations d'ordre quatre et réduction d'ordre. Une réussite dans une prescription ne résout pas les autres. |
| G6 Quantum focusing | sharp → sharp | Une inégalité fonctionnelle précise dans le domaine semi-classique à quatre dimensions annoncé. La fiche sépare maintenant QFC et QFC restreinte et exige une prescription cohérente pour l'action, les contre-termes d'entropie et un éventuel lissage à l'échelle de coupure. Une preuve pour un champ particulier reste partielle pour le domaine entier. |
| G7 Achronal ANEC | sharp → sharp | Intégrale et conditions de complétude, achronalité et auto-cohérence sont explicites. Le même tenseur renormalisé doit sourcer l'équation et figurer dans l'intégrale. Un exemple sur fond arbitraire ne réfute pas cette conjecture. |
| G8 Generalized second law | sharp → programme | L'ordre sous-dominant, la théorie, les algèbres des coupes et la normalisation de trace ne sont pas fixés. Le signe d'une correction isolée et le signe de la variation totale d'entropie ne sont pas interchangeables. |
| G9 Interacting QEI | sharp → sharp | Cible resserrée sur la théorie massive constructive quartique à trois dimensions, dans Minkowski, avec couplage minimal, énergie du vide nulle et ligne inertielle. Pour toute fonction test réelle lisse à support compact, on demande une borne uniforme en l'état ; une fonction et une suite d'états d'énergie moyennée non bornée inférieurement suffisent à réfuter cette version. Les autres améliorations du tenseur, trajectoires et la théorie perturbative à quatre dimensions sont des extensions. |
| G10 Quantum Penrose inequality | sharp → conceptual | La fiche laisse ouverte « the appropriate generalized minimality condition ». La classe de surfaces et la prescription de l'entropie sur la nappe de lumière doivent être fixées avant d'en faire une proposition sharp. La symétrie sphérique est une restriction ; un résultat en AdS à trois dimensions concerne un autre domaine. |

Le point de G10 est également visible dans la [proposition originale de Bousso, Shahbazi-Moghaddam et Tomašević, section III B](https://arxiv.org/pdf/1908.02755), qui formule la restriction de minimalité sans l'expliciter dans cet article court. La décision éditoriale porte sur la définition manquante dans la fiche ; elle ne prétend pas qu'aucune formulation précise ne puisse être donnée.

## Holographie et complexité gravitationnelle

Fichier : [cat-holography.js](../../app/data/cat-holography.js).

| Entrée | Horizon avant → après | Décision et critère |
| --- | --- | --- |
| H1 Extremal CFTs and modular gap | sharp → incremental | Famille de problèmes d'existence chirale et recherche du gap optimal. Un exemple à central charge 48 règle cette valeur seulement. Une borne au seuil BTZ plus une constante n'exclut pas un gap strictement au-dessus du seuil ; un surplus sous-linéaire non borné échappe aux deux alternatives quantitatives proposées. Leur prétendue équivalence est retirée. |
| H2 AdS instability | sharp → programme | Existence de données qui s'effondrent, généricité, temps d'effondrement et formulation CFT sont des objectifs distincts. Une famille stable ne réfute pas l'existence d'autres données arbitrairement petites qui s'effondrent. Norme de petitesse, notion de généricité et famille CFT doivent être précisées. |
| H3 Complexity growth | sharp → programme | « Chaotic » et « typical » ne fixent ni famille de Hamiltoniens, distribution d'états, portes, erreur, ressources auxiliaires ni fenêtre de temps. Une hypothèse de complexité doit rester attachée à toute conclusion conditionnelle. |
| H4 Python's lunch | sharp → conceptual | L'encodeur, le sous-espace de code, la tâche de reconstruction, l'erreur et l'accès de calcul définissent la complexité recherchée. Le résultat à oracle Haar déjà enregistré ne définit pas une borne en circuits pour tout encodeur microscopique connu. |
| H5 Harlow–Hayden hardness | sharp → programme | Une dynamique préparée efficacement ou qualifiée de scrambling n'est pas une classe explicitement conjecturée difficile. Il faut fixer famille ou ensemble, information sur la dynamique, accès du décodeur, promesse de récupération, erreur, probabilité et quantificateurs de pire cas ou cas moyen. La phrase universelle initiale est remplacée par le programme réel. |
| H6 Operator growth | sharp → programme | Limite thermodynamique avant la profondeur de Krylov, choix de l'opérateur, classe de Hamiltoniens et définition thermique de l'exposant de Lyapunov manquent à une proposition unique. Le fait qu'un sous-objectif pourrait devenir sharp ne suffit pas à classer la fiche entière ainsi. |

Les six reclassements n'invalident pas les conjectures correspondantes. Ils distinguent leur portée physique des données encore nécessaires pour proposer un théorème précis à un chercheur ou à un agent.

## Gravitation quantique et cosmologie

Fichier : [cat-quantum-gravity.js](../../app/data/cat-quantum-gravity.js).

| Entrée | Horizon avant → après | Décision et critère |
| --- | --- | --- |
| QG1 Seven-loop finiteness | sharp → sharp | Dimension, théorie, amplitude, ordre de boucle et coefficient de divergence à tester sont identifiés. |
| QG2 Graviton bootstrap boundary | sharp → sharp | La cible est désormais explicitement la borne sur le coefficient dans l'ensemble d'amplitudes satisfaisant les axiomes du bootstrap cité. Une amplitude doit satisfaire tous ces axiomes, au-delà d'une troncature numérique. Sa complétion en une théorie entière de gravitation est une question distincte ; « consistent » ne sert plus de critère implicite. |
| QG3 No global symmetries | conceptual → conceptual | Le cadre asymptotiquement plat et sa définition opérationnelle sont déjà reconnus comme faisant partie du problème. |
| QG4 Non-supersymmetric AdS | sharp → conceptual | « Consistent theory of quantum gravity », appartenance des vides, conditions aux limites et stabilité absolue ne définissent pas un domaine explicite. La fiche sépare désormais preuve dans une classe et réfutation de la conjecture universelle. |
| QG5 Asymptotic safety | programme → programme | Existence et reconstruction d'une théorie continue, unitarité et contrôle des troncatures relèvent d'un programme. Une positivité à ordre fini ne règle pas l'ensemble. |
| QG6 Gravity-mediated entanglement | sharp → conceptual | L'espace d'états hybrides, les dynamiques, les corrélations initiales, le sens de la localité et la mesure d'intrication ou le témoin restent à définir. Choisir la classe de comparaison est une partie substantielle de la question. |
| QG7 No-boundary contour | sharp → conceptual | « With fixed measure » ne donne pas la mesure. Ordre des opérateurs, conditions aux extrémités, déformations admissibles, critère de suppression et contenu matériel ne sont pas fixés. Tester un champ scalaire n'établit pas la propriété pour toute addition de matière. |
| QG8 Interacting de Sitter | sharp → programme | Construction non perturbative, expansion perturbative resommée, attraction de classes d'états, taux et limite stochastique constituent plusieurs objectifs. « Reasonable » ne définit pas les états initiaux ; observables, topologie et limites doivent être précisées. |

QG2 et QG4 sont conservées dans le catalogue conformément à la décision de périmètre du mainteneur. Les changements concernent leur évaluabilité et ne reposent pas sur leur association à la théorie des cordes.

## Renormalisation et phénomènes critiques

Fichier : [cat-renormalization.js](../../app/data/cat-renormalization.js).

| Entrée | Horizon avant → après | Décision et critère |
| --- | --- | --- |
| R1 Six-dimensional a-theorem | sharp → sharp | Inégalité sur un coefficient d'anomalie identifié, entre points fixes de flots unitaires non triviaux en six dimensions. Les théories stationnaires sont retirées de l'inégalité stricte. Le résidu demande tous les flots du domaine, et non « generic ». La recherche d'un monotone dans toute dimension est séparée. |
| R2 Scale versus conformal | sharp → sharp | Implication en dimension quatre sous hypothèses explicites de localité, unitarité, tenseur d'énergie-impulsion et courant de dilatation. « Assumption-free » est retiré : l'enjeu est d'éviter les hypothèses supplémentaires, pas toute hypothèse. |
| R3 RG gradient flows | sharp → conceptual | Espace quotient des théories, schéma de renormalisation, fonction, métriques permises et portée locale ou globale doivent définir la représentation. Une métrique sur un segment de flot ne donne pas une représentation globale, notamment aux points fixes. |
| R4 3D Ising scaling limit | sharp → sharp | Modèle microscopique fixé et propriétés mathématiques identifiées pour sa limite critique. Le résidu exige désormais l'ensemble des propriétés pour une résolution complète ; une sous-suite, la non-gaussianité ou les rotations seules restent des progrès partiels. |

## Traçabilité et validation

`git fetch` a été effectué ; aucune mise à jour de `origin/main` n'était à intégrer depuis le HEAD local. Les listes GitHub des pull requests et issues ouvertes étaient vides. Les modifications locales préexistantes, notamment la mise à jour bibliographique du même jour, ont été conservées.

Il s'agit d'un audit logique des énoncés et horizons, pas d'une nouvelle certification des démonstrations ou d'une recherche bibliographique exhaustive sur les 44 sujets. Les statuts, dates de revue bibliographique et références existantes restent inchangés. Le court article original sur l'inégalité de Penrose quantique a été relu intégralement pour le point de formulation de G10.

Les définitions des horizons dans le README et dans les descriptions de l'application sont alignées sur ce critère. Le journal de corrections référence les 24 fiches dont un champ a changé ; les 20 autres sont couvertes par les décisions de conservation ci-dessus.

Validation : `npm test` réussit avec **15 tests sur 15** ; `npm run build` réussit avec **368 pages générées** ; `git diff --check` ne signale pas d'erreur. Une comparaison des cinq fichiers de catégorie avec leur état au début de l'audit confirme la conservation des identifiants, nombres d'entrées, statuts, dates de revue, références, preuves enregistrées, déclarations de provenance, archives et relations.
