---
title: Afirmación
description: Una proposición verificable almacenada como un nodo en un grafo dialéctico
sourceLocale: en
sourceHash: a3b6f4399179
translatedAt: 2026-01-14
---

Una afirmación es una proposición verificable extraída de un texto y almacenada
como un [Nodo del Grafo Dialéctico](./dialectical-graph-nodes) de primera clase en un
[Grafo Dialéctico](./dialectical-graph). (Véase [Nodos del Grafo Dialéctico](./dialectical-graph-nodes).) Las afirmaciones no son oraciones en bruto; son enunciados normalizados con
dependencias explícitas de [alcance](./scope), [supuestos](./assumption) y
[método](./method).

Las afirmaciones pueden vincularse a [segmentos de evidencia](./evidence-span)
que las respaldan, [contraejemplos](./counterexample) que las acotan,
[ataques](./attack) que las cuestionan y [refutaciones de base](./undercut) que
ponen en duda sus fundamentos. Esta estructura relacional permite que el
conocimiento se actualice mediante refutación en lugar de sustitución.

Toda afirmación tiene un estado: puede ser tentativa, disputada, respaldada condicionalmente, robusta, refutada u obsoleta. El estado
cambia según el tipo de refutación, no según la cantidad, y puede retroceder si
la estructura de apoyo se debilita.
