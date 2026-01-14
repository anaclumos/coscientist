---
title: Mecanismos de síntesis
description: Patrones para hacer comparables fuentes incompatibles
sourceLocale: en
sourceHash: 3947eb0ccc18
translatedAt: 2026-01-14
---

Los mecanismos de síntesis son los patrones y protocolos que
[Cocientífico](./coscientist) utiliza para hacer comparables fuentes
incompatibles y para producir salida estructurada a partir del conflicto.

## Proceso central

- [Síntesis de conocimiento](./knowledge-synthesis) — alinear premisas,
  definiciones y alcance para hacer explícitos los desacuerdos

## Patrones de entrada

- [Colisión de documentos](./document-collision) — obligar a las fuentes a
  enfrentarse a las afirmaciones de las demás
- [Contención](./contention) — conflicto estructurado como un objeto de primera
  clase

## Patrones de salida

- [Mapa de resolución ramificado](./branched-resolution-map) — mostrar múltiples
  conclusiones válidas basadas en distintas premisas
- [Nodo de cuestión](./issue-node) — agrupar afirmaciones en colisión para una
  resolución focalizada

## Herramientas de análisis

- [Taxonomía de incompatibilidades](./incompatibility-taxonomy) — clasificar por
  qué las fuentes discrepan
- [Conjunto mínimo de contradicciones](./minimum-contradiction-set) — encontrar
  el núcleo de un conflicto
- [Corte mínimo](./minimum-cut) — aislar la estructura que produce la
  contradicción

## Dimensión multilingüe

- [Síntesis translingüística](./cross-linguistic-synthesis) — combinar
  conocimiento de múltiples idiomas
- [Indexación independiente del idioma](./language-agnostic-indexing) — índice
  conceptual que trasciende idiomas específicos
- [Pérdida de matices en la traducción](./translation-nuance-loss) — rastrear
  qué se pierde entre idiomas

## Contraste

- [Limitaciones de RAG](./rag-limitations) — por qué la recuperación por sí sola
  no puede sintetizar
