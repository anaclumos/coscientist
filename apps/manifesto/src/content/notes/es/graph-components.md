---
title: Componentes del grafo
description: Los tipos de nodos y aristas que conforman un grafo dialéctico
sourceLocale: en
sourceHash: eb17714b277c
translatedAt: 2026-01-14
---

Los componentes del grafo son los bloques de construcción de un
[Grafo dialéctico](./dialectical-graph): los tipos de nodos que representan
objetos epistémicos y los tipos de aristas que representan relaciones entre
ellos.

**Tipos de nodos** (ver
[Nodos del grafo dialéctico](./dialectical-graph-nodes)):

- [Afirmación](./claim) — proposiciones verificables
- [Fragmento de evidencia](./evidence-span) — texto citado exacto de las fuentes
- [Alcance](./scope) — condiciones de aplicabilidad
- [Suposición](./assumption) — premisas implícitas
- [Método](./method) — procedimientos para generar evidencia
- [Fuente](./source) — anclajes de procedencia
- [Contraejemplo](./counterexample) — casos que invalidan afirmaciones
- [Nodo de cuestión](./issue-node) — conjuntos de afirmaciones en colisión

**Tipos de aristas** (ver
[Aristas del grafo dialéctico](./dialectical-graph-edges)):

- [Ataque](./attack) — impugnaciones directas de la verdad
- [Socavación](./undercut) — impugnaciones de los fundamentos
- `supports`, `refines`, `generalizes`, `specializes`
- `cites`, `defines`, `measures`, `replicates`, `fails_to_replicate`
- [Contención](./contention) — marcadores estructurados de conflicto
