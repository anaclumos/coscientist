---
title: Taxonomía del estado de la afirmación
description: Los estados en los que puede estar una afirmación dentro de un grafo dialéctico
sourceLocale: en
sourceHash: ece55705e1ef
translatedAt: 2026-01-14
---

La taxonomía del estado de la [afirmación](./claim) define los estados que una
[afirmación](./claim) puede ocupar en un
[Grafo Dialéctico](./dialectical-graph). Para ver cómo una afirmación suele
moverse a través de estos estados con el tiempo, consulta el
[Ciclo de vida de la afirmación](./claim-lifecycle).

## Estados comunes

- `tentative` — etapa de hipótesis
- `contested` — debate activo
- `conditionally supported` — verdadera bajo condiciones especificadas
- `robust` — respaldada mediante múltiples vías independientes
- `refuted` — derrumbada por un [contraejemplo](./counterexample)
- `obsolete` — significado perdido debido a la
  [deriva de la definición](./definition-drift) o a un cambio de método

El estado no es una única puntuación de confianza. Una afirmación puede ser
robusta en diversidad de evidencia pero estar en disputa en cuanto al alcance;
puede estar apoyada condicionalmente en un contexto y refutada en otro. El
estado multidimensional captura esta complejidad.

Las transiciones entre estados están impulsadas por el tipo de refutación, no
por la cantidad. Un solo [contraejemplo](./counterexample) bien fundamentado
puede mover una afirmación de robusta a refutada; muchas objeciones débiles
pueden dejarla en disputa sin resolver. Consulta las
[Reglas de transición de estado](./status-transition-rules) para la lógica
formal de transición.
