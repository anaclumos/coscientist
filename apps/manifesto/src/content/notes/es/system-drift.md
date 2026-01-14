---
title: Deriva del sistema
description: Degradación de los sistemas de conocimiento por aut contaminación o negligencia
---

La deriva del sistema es la categoría de [fenómenos de deriva](./drift-phenomena) en la que el propio sistema de conocimiento se degrada con el tiempo, independientemente de cambios semánticos o ambientales.

## Formas

- [Colapso del modelo](./model-collapse) — degradación por entrenar con datos generados por IA
- [Corrección vs deriva](./correction-vs-drift) — cuando corregir errores cuesta más que dejar que se propaguen

## Por qué importa

La deriva del sistema es el modo de fallo en el que un sistema de conocimiento se estabiliza alrededor de un estado estacionario falso "aproximadamente mantenido". Los errores persisten porque corregir es caro; el contenido generado por IA contamina los datos de entrenamiento; y el sistema pierde gradualmente el contacto con la verdad fundamental.

[Colapso de la enciclopedia](./encyclopedia-meltdown) es la forma extrema: cuando la IA toma la iniciativa de escribir, la [línea de responsabilidad](./responsibility-line) desaparece y el sistema deriva hacia un colapso autorreferencial. La defensa es la [capa de protocolo epistémico](./epistemic-protocol-layer): mantener la corrección más barata que la deriva mediante [trazabilidad](./traceability), [ingesta de confianza cero](./zero-trust-ingestion) y [búsqueda primero de refutación](./rebuttal-first-search).

## Relacionado

- [Fenómenos de deriva](./drift-phenomena) — la categoría principal
- [Deriva semántica](./semantic-drift) — cuando los significados cambian
- [Deriva ambiental](./environmental-drift) — cuando el mundo cambia
- [Putrefacción cerebral institucional](./institutional-brain-rot) — análogo organizacional
