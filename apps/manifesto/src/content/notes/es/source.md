---
title: Fuente
description: "Un ancla de procedencia para afirmaciones y evidencias"
sourceLocale: en
sourceHash: 73116d209a24
translatedAt: 2026-01-14
---

Una fuente es el punto de origen de un [fragmento de evidencia](./evidence-span)
o una [afirmación](./claim): un documento, conjunto de datos, experimento o
persona de la que proviene la información. Las fuentes anclan la
[procedencia](./provenance) y hacen trazable la
[línea de responsabilidad](./responsibility-line).

No todas las fuentes son iguales. Una fuente primaria informa observaciones
originales; una fuente secundaria resume o interpreta; una fuente terciaria
compila a partir de secundarias. Cada paso introduce potencial de desviación, y
[Cocientífico](./coscientist) hace seguimiento de estas distinciones mediante
aristas `cites` explícitas en el [Grafo Dialéctico](./dialectical-graph).

Las fuentes son nodos en el grafo (véase
[Nodos del Grafo Dialéctico](./dialectical-graph-nodes)) con metadatos como
autor, fecha y contexto. Cuando se cuestiona una afirmación, la fuente
proporciona el punto de partida para su reexamen.
