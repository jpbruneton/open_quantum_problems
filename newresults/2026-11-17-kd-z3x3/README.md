# KD sur Z₃ × Z₃ : journal et audit d'originalité

## Provenance

Le 16 novembre 2026, le dépôt voisin `oqmresearch` a été actualisé puis un moteur local de rapprochement a été ajouté à `abstracts/discovery/`. Il réutilise les groupes de la carte Qwen3/BGE et recherche des motifs mathématiques communs dans les titres, abstracts et fiches. La passe élargie a retenu 150 rapprochements parmi 2 136 articles admissibles, après 24 864 évaluations orientées.

La piste KD vient d'une lecture complémentaire du dossier de géométrie, puis d'une recherche de témoins. Elle n'est pas le résultat automatique d'un score de proximité entre deux abstracts. Une première recherche aléatoire était non concluante ; la recherche de normales d'appui a fourni un exemple ensuite simplifié en fractions exactes.

Le dossier historique complet est dans `../oqmresearch/docs/research/bilans/2026-11-16-discovery-exhaustive/` relativement à la racine OQM. Les sources volumineuses sont dans le cache ignoré de ce dépôt voisin. Les certificats, scripts et notes essentiels sont également conservés dans le présent dossier.

## Énoncé vérifié

Pour les bases position/Fourier de G = Z₃ × Z₃, un état défini positif de trace un possède une matrice KD strictement positive mais n'appartient pas à l'enveloppe convexe des 54 purs KD-positifs. Le témoin W a un maximum 18 sur cette enveloppe, contre 206973/10000 sur l'état construit. La distance en norme trace à cette enveloppe est au moins 111/20000. Les calculs sont exacts et un vérificateur indépendant reconstruit les purs et la positivité.

Une preuve écrite transporte les exemples par sous-groupes et quotients abéliens finis, avec conservation de la distance à l'enveloppe des purs. L'originalité de cette preuve doit être examinée séparément de celle de l'exemple Z₃².

## Audit du 17 novembre 2026

L'examen des textes proches, de leurs références et des travaux citants accessibles n'a pas trouvé d'antécédent direct pour le couple Fourier F₃ ⊗ F₃. Les exemples exotiques pour des couples de bases arbitraires, les résultats pour le groupe cyclique Z₉ et ceux pour les qubits Z₂ⁿ ne couvrent pas automatiquement ce couple. Ce constat soutient une rédaction comme candidat original, mais ne constitue pas une certification de priorité. L'audit détaillé est dans [originalite.md](originalite.md).

Correction à conserver : Thio et al., 2506.08092v2, donnent déjà les familles exotiques Z₂ⁿ et emploient une recherche par facettes. La conjecture de classification générale est liée explicitement à celle de Spriet, pas attribuée à notre exploration. Les éléments candidats originaux sont plus étroits : l'exemple fixé Z₃² et la spécialisation quantitative du lemme de sous-quotients.

## Note scientifique et calculs

- [Dossier public canonique](../../research/entries/kd-z3x3/README.md) : manuscrit, certificat et vérificateurs reproductibles.
- [Preuve de positivité courte](../../research/entries/kd-z3x3/checks/verify_diagonal_certificate.py) : dominance diagonale pondérée avec calculs rationnels ; elle établit même λ_min(ρ) ≥ 27553/10320000.
- [Vérificateur indépendant](../../research/entries/kd-z3x3/checks/verify_z3_certificate.py) : reconstruit les 54 purs, certifie la positivité par un autre calcul et vérifie le témoin.
- [Vérification des données imprimées](../../research/entries/kd-z3x3/checks/verify_paper_data.py) : compare les matrices du LaTeX au certificat et vérifie les marges rationnelles, les 43/10/1 scores et la construction géométrique.
- [Fonctionnement réel du rapprochement](rapprochement.md) : rôle distinct de la carte d'embeddings et du score lexical.
- [Autres pistes et obstructions](diagnostics.md) : dualité/coût de transport, états non gaussiens à covariance nulle, connexion SOS déjà présente dans les sources.

Depuis ce dossier, pour les vérifications principales avec la bibliothèque standard de Python :

```text
python ../../research/entries/kd-z3x3/checks/verify_diagonal_certificate.py
python ../../research/entries/kd-z3x3/checks/verify_z3_certificate.py
python ../../research/entries/kd-z3x3/checks/verify_paper_data.py
python -m unittest discover -s ../../research/entries/kd-z3x3/checks -p test_exact_certificate.py -v
```

Les scripts de recherche utilisent NumPy. Les relancer dans une copie, car ils réécrivent leurs sorties. Les essais numériques aident à chercher ; les assertions des preuves finales sont en arithmétique exacte. Il n'y a pas de formalisation Lean et le résultat n'a pas fait l'objet d'une relecture externe.

## Bilan technique de la session

Le premier index local a pris environ 233 s, produit une base SQLite d'environ 263 Mo et atteint un pic mémoire d'environ 89 Mio. La sélection élargie sur cet index a pris 7,64 s et environ 159 Mio ; ce temps n'inclut pas l'indexation, les téléchargements, les lectures ni les calculs de recherche. Aucun modèle lourd n'a été chargé sur la machine pour cette sélection. Les métriques de la passe sont dans [run-summary.json](run-summary.json).

Les 150 dossiers de lecture et les neuf textes intégraux ajoutés restent dans `oqmresearch/abstracts/discovery/work/runs/2026-11-16-exhaustive/`. La sélection initiale y est figée avant cet enrichissement des sources. Les artefacts destinés à la publication sont désormais regroupés dans le dossier public canonique lié ci-dessus.
