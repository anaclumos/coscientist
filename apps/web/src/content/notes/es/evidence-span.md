---
title: Fragmento de evidencia
description: Un rango exacto citado de una fuente que respalda o cuestiona una afirmación
sourceLocale: en
sourceHash: a8833ec8512f
translatedAt: 2026-01-14
---

Un fragmento de evidencia es el texto citado exacto de una fuente que respalda o
cuestiona una [afirmación](./claim). Conserva la redacción y el contexto
originales para que lectores posteriores puedan ver lo que realmente se dijo, no
una paráfrasis o un resumen que podría haberse desviado.

En un [Grafo dialéctico](./dialectical-graph), los fragmentos de evidencia se
almacenan como nodos con enlaces a su [fuente](./source) y a las afirmaciones a
las que se refieren. Esta es la primera capa de la
[triple separación](./triple-separation): texto en bruto preservado,
afirmaciones normalizadas, relaciones explícitas.

Los fragmentos de evidencia evitan el problema de truncamiento de extractos en
[RAG](./rag-limitations), donde al citar se puede omitir silenciosamente la
atribución («B informa que A afirmó...»), dejando solo la conclusión y cortando
la [línea de responsabilidad](./responsibility-line).
