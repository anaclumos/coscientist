---
title: "Jetons de sortie ≠ connaissance"
description: Une quête personnelle d’un exosquelette cognitif
---

Moi, [Sunghyun Cho](./sunghyun-cho), j’ai grandi avec une révérence pour les encyclopédies et l’idée d’un dépôt unique et faisant autorité du savoir. Enfant, je dévorais _Encyclopedia Galactica_, en imaginant un monde où tous mes projets et mes recherches pourraient vivre dans une référence universelle. Plus tard, j’ai découvert l’essai de 1945 de [Vannevar Bush](./vannevar-bush), [Comme nous pourrions penser](./as-we-may-think), qui décrivait le [Memex](./memex) : une archive permettant aux individus de stocker des documents et de les retrouver via des pistes associatives. Cette vision ressemblait à un exosquelette cognitif.

Au moment où j’ai commencé ma propre carrière au XXIe siècle, Internet était devenu une approximation grossière d’un Memex mondial. Pourtant, il manquait quelque chose : il préservait les archives collectives mais ne parvenait pas à capturer l’esprit de l’individu, y compris le contexte personnel, les insights (insights) en évolution et les idées vivantes. J’ai expérimenté des outils de [second cerveau](./second-brain) et des pratiques de [jardin numérique](./digital-garden), pour finalement les trouver trop manuels et trop fragiles. Je voulais un [cerveau numérique](./digital-brain) externalisé, capable de grandir et de s’adapter avec un minimum de friction.

Cette prise de conscience a lancé [Projet Aldéhyde](./project-aldehyde), ma tentative de construire un sur-ensemble du Memex à des fins personnelles. Des années d’itérations ont culminé dans mon essai de mai 2022, [Créer des cerveaux numériques de nouvelle génération](./creating-next-gen-digital-brains), qui soutenait que la friction est l’ennemi des workflows (workflows) de connaissance personnelle : la meilleure manière de gérer un jardin n’est pas un entretien constant, mais de cultiver une [jungle numérique](./digital-jungle) qui s’auto-organise. Vous devriez pouvoir y jeter du savoir brut et laisser le système l’organiser, le relier et le faire ressurgir.

À la mi-2022, j’ai mis en œuvre un prototype en utilisant une chaîne de publication statique d’Obsidian vers le web et je l’ai nommé [Extracranial](./extracranial). C’était un cerveau numérique personnel qui indexait automatiquement le contenu, suggérait des backlinks (liens retour), laissait les anciens billets se dégrader sauf s’ils étaient marqués « evergreen » (pérennes), et fonctionnait de manière bilingue [à travers les Sprachraums](./across-the-sprachraums). Cela m’a libéré de la micro-gestion des liens et m’a permis de me concentrer sur l’écriture et la réflexion.

Cependant, en construisant ce wiki personnel, un problème plus large est apparu : même un Memex personnel parfait ne suffit pas si l’environnement épistémique au sens large est compromis. À mesure que l’IA générative devenait omniprésente, la question de fond s’est déplacée de « comment stocker le savoir ? » à « comment empêcher l’effondrement de la vérification lorsque l’IA peut inonder les systèmes de texte plausible ? »

## Des cerveaux numériques aux protocoles

Les médias traditionnels imposent une structure linéaire. Le savoir, en pratique, est un réseau. Le « cerveau numérique de nouvelle génération » était ma réponse à cet écart. Ses principes étaient simples :

- saisie sans friction — capturer les idées sans taxonomie imposée
- organisation automatisée — inférer les connexions algorithmiquement
- évolution dynamique — laisser le savoir se dégrader ou rester pérenne
- contenu multimodal — diagrammes, démos, médias interactifs
- sources sans couture — relier les notes aux articles, au code, aux jeux de données et aux références

L’établissement manuel de liens peut encore affiner la compréhension, mais il devrait être optionnel. Le système devrait faire le gros du travail.

En 2023, je me débattais avec des questions qui dépassaient la prise de notes personnelle. Les contenus générés par l’IA menaçaient la vérification elle-même. J’ai appelé ce scénario d’effondrement [Effondrement de l'Encyclopédie](./encyclopedia-meltdown) : lorsque l’IA prend l’initiative d’écrire, la [ligne de responsabilité](./responsibility-line) disparaît et les erreurs s’auto-amplifient via les liens.

La contre-mesure est une [couche de protocole épistémique](./epistemic-protocol-layer), une couche constitutionnelle pour les systèmes de connaissance. Ses engagements centraux sont la souveraineté (l’autorité sur le savoir reste entre les mains de l’[Opérateur](./operator) humain), la traçabilité (chaque affirmation conserve une ligne de responsabilité) et la validation « réfutation d’abord » (utiliser la [recherche réfutation d’abord](./rebuttal-first-search) pour chercher des contre-preuves avant l’acceptation). Cette couche traite aussi des pressions telles que le [effondrement du modèle](./model-collapse) et le déluge d’[AI slop](./ai-slop), en imposant une provenance explicite et une ingestion zero-trust (zero-trust).

## ScienceOps et échelle institutionnelle

L’infrastructure de connaissance personnelle résolvait la commodité, pas l’échelle institutionnelle. Le saut suivant fut [ScienceOps](./scienceops) : appliquer la discipline des opérations logicielles à la recherche scientifique via des expériences reproductibles, l’automatisation et l’itération rapide, tout en introduisant le rôle de l’[ingénieur en sciences naturelles](./natural-science-engineer). Lorsque les expériences deviennent des pipelines plutôt que des coups uniques, la boucle entre hypothèse et vérification peut se réduire de manière spectaculaire.

L’objectif plus vaste est un « GitHub pour les scientifiques » qui traite les expériences comme du code : versionnées, répétables et auditables. C’est le contexte opérationnel qui exige un moteur cognitif comme [Coscientifique](./coscientist).

## Coscientist : architecture, agentivité et plan directeur

[Coscientifique](./coscientist) est le système qui synthétise ces fils. C’est une architecture multi-agents de [LLM](./llm) conçue pour fonctionner comme un collaborateur de recherche plutôt que comme un simple moteur de réponses. Sa boucle interne sépare proposition, critique, classement et raffinement, avec une couche de méta-revue qui vérifie la cohérence, la traçabilité et l’incertitude.

Au niveau de la connaissance, il maintient un [Graphe Dialectique](./dialectical-graph) qui stocke des affirmations et des relations plutôt que du texte brut. La sortie narrative est traitée comme une projection d’une couche d’inférence, de sorte que chaque énoncé peut remonter aux sources, aux segments de preuve et aux relations explicites. Cette séparation évite le mode d’échec « fluide mais invérifiable » de la génération conventionnelle.

La sûreté (safety) de l’IA traditionnelle cadre souvent le problème comme une question d’alignement. Je mets l’accent sur la [préservation de l’agentivité cognitive](./cognitive-agency-preservation) : l’IA doit renforcer le jugement humain, pas le remplacer. Concrètement, cela signifie maintenir l’utilisateur dans le rôle de vérificateur : montrer le travail, faire remonter l’incertitude, présenter des hypothèses alternatives et faire de la recherche de réfutations la valeur par défaut.

Coscientist se veut un plan directeur pour une nouvelle infrastructure épistémique : sans friction mais souveraine, rapide mais responsable, puissante sans éroder l’agentivité. Il vise trois modes de défaillance : la pourriture cérébrale institutionnelle (atténuée par le recoupement et la revue adversariale), l’effondrement de la vérification (atténué par la traçabilité et la recherche automatisée de réfutations) et la perte d’agentivité (atténuée par la transparence et le veto humain).

La vision à long terme est un réseau fédéré d’instances Coscientist, aux échelles personnelle, organisationnelle et publique, qui échangent du savoir validé tout en préservant la souveraineté locale. Si vous voulez un parcours de lecture, commencez par [Créer des cerveaux numériques de nouvelle génération](./creating-next-gen-digital-brains) (outillage personnel), puis [Effondrement de l'Encyclopédie](./encyclopedia-meltdown) et la [couche de protocole épistémique](./epistemic-protocol-layer) (le mode de défaillance et sa défense), puis [Graphe Dialectique](./dialectical-graph) et la [synthèse de connaissances](./knowledge-synthesis) (l’architecture).