---
title: Extrait probant
description:
  Une plage citée exactement d’une source qui soutient ou conteste une
  affirmation
sourceLocale: en
sourceHash: a8833ec8512f
translatedAt: 2026-01-14
---

Un extrait probant est le texte cité exactement d’une source qui soutient ou
conteste une [affirmation](./claim). Il préserve le libellé et le contexte
d’origine, afin que les lecteurs ultérieurs puissent voir ce qui a réellement
été dit, et non une paraphrase ou un résumé qui a pu dériver.

Dans un [Graphe dialectique](./dialectical-graph), les extraits probants sont
stockés sous forme de nœuds avec des liens vers leur [source](./source) et vers
les affirmations auxquelles ils se rapportent. C’est la première couche de la
[triple séparation](./triple-separation) : texte brut préservé, affirmations
normalisées, relations explicites.

Les extraits probants évitent le problème de troncature des extraits dans le
[RAG](./rag-limitations), où la citation peut supprimer silencieusement
l’attribution (« B rapporte que A a affirmé… ») et ne laisser que la conclusion,
rompant ainsi la [chaîne de responsabilité](./responsibility-line).
