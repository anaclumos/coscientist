---
title: Memex multilingue
description:
  Un système de connaissance personnelle sensible à la langue, avec prise en
  charge de la traduction automatique
sourceLocale: en
sourceHash: 4cbc551868c1
translatedAt: 2026-01-14
---

Un Memex multilingue est un système de connaissance personnelle qui prend
nativement en charge du contenu en plusieurs langues, avec détection automatique
de la langue, traduction et création de liens translinguistiques. Il prolonge la
vision originale du [Memex](./memex) de [Vannevar Bush](./vannevar-bush) dans un
monde où la connaissance ne respecte pas les frontières linguistiques.

[Extracranial](./extracranial) de [Sunghyun Cho](./sunghyun-cho) est une
implémentation de ce concept. Il inclut la détection automatique de la langue,
une diffusion spécifique à la locale au moyen de balises hreflang, ainsi que la
possibilité d’écrire dans une langue tout en laissant les systèmes de traduction
gérer la diffusion dans d’autres langues.

Les implications architecturales sont importantes. Les éléments d’interface, la
recherche et les liaisons doivent tous prendre en compte la langue :

- Une requête en coréen devrait trouver du contenu pertinent, qu’il ait été
  initialement rédigé en coréen ou traduit depuis l’anglais.
- Les backlinks devraient fonctionner à travers les langues.
- La [ligne de responsabilité](./responsibility-line) doit suivre non seulement
  qui a affirmé quoi, mais aussi dans quelle langue et via quelle méthode de
  traduction.

C’est pourquoi [Extracranial](./extracranial) envisage des contributions de la
communauté via GitHub pour affiner les traductions : la traduction automatique
rend le contenu multilingue possible, mais une révision humaine est nécessaire
pour maintenir la [fidélité de traduction](./translation-fidelity). Le Memex
multilingue n’est pas un problème résolu, mais une collaboration continue entre
des systèmes automatisés et le jugement humain.

Pour [Coscientifique](./coscientist), le Memex multilingue devient le
[Graphe dialectique](./dialectical-graph) multilingue : une structure qui stocke
des [assertions](./claim), des [extraits de preuve](./evidence-span) et des
relations provenant de n’importe quelle langue, en traitant la langue comme une
métadonnée plutôt que comme une frontière fondamentale.
