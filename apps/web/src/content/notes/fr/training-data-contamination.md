---
title: Contamination des données d’entraînement
description: Du contenu généré par IA qui pollue les corpus utilisés pour entraîner les futurs modèles
sourceLocale: en
sourceHash: a873d340b329
translatedAt: 2026-01-14
---

La contamination des données d’entraînement se produit lorsque du texte généré par IA entre sur le web, est aspiré (scrapé) dans des corpus d’entraînement, et façonne la prochaine génération de modèles. Il en résulte une boucle de rétroaction : des modèles entraînés sur les sorties de leurs prédécesseurs héritent de leurs biais, amplifient leurs erreurs et perdent l’accès au signal humain indépendant qui rendait les originaux utiles.

Cela se distingue de la contamination des benchmarks (des données de test qui fuient dans les ensembles d’entraînement), même si les deux partagent le terme. La contamination des données d’entraînement concerne la provenance du corpus sous-jacent : une fois que l’[AI slop](./ai-slop) se mélange à grande échelle au texte écrit par des humains, les distinguer devient coûteux voire impossible. Les collectes du web postérieures à 2022 sont de plus en plus suspectes.

Les conséquences se cumulent. L’[effondrement des modèles](./model-collapse) décrit la dégradation de la qualité lorsque des modèles s’entraînent sur des données synthétiques : les distributions se resserrent, les modes rares disparaissent, et la sortie converge vers une moyenne homogénéisée. L’[effondrement de l’encyclopédie](./encyclopedia-meltdown) décrit la défaillance du système de connaissance lorsque des sorties d’IA sont citées comme sources, créant une autorité circulaire. La contamination des données d’entraînement en est la cause en amont pour les deux.

Le parallèle avec l’[acier à faible bruit de fond](./low-background-steel) clarifie le problème. Les essais nucléaires ont contaminé tout l’acier produit après 1945 ; la prolifération des LLM a contaminé tout le texte du web postérieur à 2020. Les deux événements de contamination étaient irréversibles, les deux ont créé une demande de [ressources d’avant contamination](./pre-contamination-resource), et les deux signifient que faire progresser la technologie exige des matériaux produits avant l’existence de cette technologie.

Les solutions impliquent la vérification de la [provenance](./provenance), des archives à accès conditionné par horodatage, et des pratiques de curation des données qui privilégient des sources avec des chaînes d’attribution humaine claires. La MIT Data Provenance Initiative et des efforts similaires visent à apporter de la transparence à l’origine des données d’entraînement — une étape nécessaire si les futurs modèles doivent éviter de s’entraîner sur leur propre reflet.
