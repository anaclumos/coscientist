---
title: Contraejemplo
description: Un caso que refuta o acota una afirmación
sourceLocale: en
sourceHash: 6a23b6dcab90
translatedAt: 2026-01-14
---

Un contraejemplo es un caso que viola la predicción de una
[afirmación](./claim), obligando a rechazarla o a acotar su [alcance](./scope).
Es un tipo específico de [ataque](./attack): no un argumento de que la
afirmación es incorrecta en general, sino evidencia de que falla en un caso
particular.

Los contraejemplos son epistemicamente poderosos porque son concretos. Un solo
contraejemplo bien documentado puede pesar más que muchas instancias
confirmatorias, especialmente si la afirmación se formuló como universal. Por
eso la [búsqueda con refutación primero](./rebuttal-first-search) y la
[búsqueda con contraejemplos primero](./counterexample-first-search) priorizan
encontrarlos temprano.

En un [Grafo Dialéctico](./dialectical-graph), los contraejemplos son nodos
conectados a las afirmaciones mediante una arista `attacks`. Tienen sus propios
[fragmentos de evidencia](./evidence-span), [alcance](./scope) y
[fuente](./source), de modo que el propio ataque pueda ser examinado.
