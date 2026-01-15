---
title: Capa narrativa
description:
  Proyecciones con marca de tiempo del grafo dialéctico adecuadas para lectura
  humana
sourceLocale: en
sourceHash: b8d561687a3a
translatedAt: 2026-01-14
---

La capa narrativa es la proyección legible por humanos de un
[Grafo dialéctico](./dialectical-graph): documentos, resúmenes y explicaciones
generados a partir de la [capa de inferencia](./inference-layer) subyacente. Las
narrativas tienen marca de tiempo y versiones; representan lo que el grafo decía
en un momento particular.

Esta separación importa porque el conocimiento evoluciona, pero los documentos
persisten. Si tratas un documento como la fuente de verdad, puede volverse
obsoleto o engañoso a medida que el grafo se actualiza. Al tratar las narrativas
como instantáneas, [Cocientífico](./coscientist) deja explícito que la prosa es
derivada, no primaria.

Cada oración en una narrativa debería poder rastrearse hacia atrás a través de
[afirmaciones](./claim), [fragmentos de evidencia](./evidence-span) y
[fuentes](./source). Sin esa cadena, una oración es solo una oración, no
conocimiento verificado.
