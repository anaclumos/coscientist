---
title: Componentes del grafo
description: Los tipos de nodos y aristas que componen un grafo dialéctico
sourceLocale: en
sourceHash: 1c3352deea91
translatedAt: 2026-01-14
---

Los componentes del grafo son los bloques de construcción de un
[Grafo dialéctico](./dialectical-graph): los [Nodos del grafo dialéctico](./dialectical-graph-nodes) que representan
objetos epistémicos y las [Aristas del grafo dialéctico](./dialectical-graph-edges) que representan [Relaciones argumentativas](./argumentative-relations) entre ellos.

**Tipos de nodos** ):

- [Afirmación](./claim) — proposiciones verificables
- [Fragmento de evidencia](./evidence-span) — texto citado exacto de las fuentes
- [Alcance](./scope) — condiciones de aplicabilidad
- [Suposición](./assumption) — premisas implícitas
- [Método](./method) — procedimientos para generar evidencia
- [Fuente](./source) — anclajes de procedencia
- [Contraejemplo](./counterexample) — casos que invalidan afirmaciones
- [Nodo de cuestión](./issue-node) — conjuntos de afirmaciones en colisión

**Tipos de aristas** ):

- [Ataque](./attack) — impugnaciones directas de la verdad
- [Socavación](./undercut) — impugnaciones de los fundamentos
- `supports`, `refines`, `generalizes`, `specializes`
- `cites`, `defines`, `measures`, `replicates`, `fails_to_replicate`
- [Contención](./contention) — marcadores estructurados de conflicto
