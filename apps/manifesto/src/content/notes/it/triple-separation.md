---
title: Separazione tripla
description:
  Regola architetturale che separa testo grezzo, affermazioni normalizzate e
  relazioni esplicite
sourceLocale: en
sourceHash: d3ec3e911919
translatedAt: 2026-01-14
---

La separazione tripla è la regola architetturale in un
[Grafo Dialettico](./dialectical-graph) che mantiene distinte tre layer: il
testo originale viene preservato come [estratti di evidenza](./evidence-span)
citabili; le [affermazioni](./claim) vengono scomposte in
[proposizioni normalizzate](./normalized-proposition); e le relazioni vengono
archiviate come vincoli argomentativi espliciti ).

Questa separazione previene una modalità di fallimento comune in
[RAG](./rag-limitations): il troncamento degli estratti. Quando il testo viene
recuperato e riassunto senza preservare la formulazione originale,
l’attribuzione può scomparire silenziosamente. La separazione tripla garantisce
che tu possa sempre ricondurre un’affermazione alle parole esatte e alla
[fonte](./source) che le ha prodotte.

Abilita anche la [sintesi della conoscenza](./knowledge-synthesis) rendendo la
struttura interrogabile. Puoi chiedere "cosa attacca questa affermazione?" o "su
quali definizioni si basa?" perché quelle relazioni sono archiviate, non
implicite.
