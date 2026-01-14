---
title: Aristas del Grafo Dialéctico
description: "Los tipos de relación que conectan nodos en un grafo de conocimiento dialéctico"
sourceLocale: en
sourceHash: 82c6fd07bccd
translatedAt: 2026-01-14
---

En un [Grafo Dialéctico](./dialectical-graph), las aristas codifican tipos de
relación en lugar de puntuaciones de similitud (véase
[Relaciones argumentativas](./argumentative-relations)). El valor es que puedes preguntar
«¿cómo incide esto en aquello?» en vez de solo «¿tratan del mismo tema?».

Los tipos de relación comunes incluyen:

- Apoyo: `supports`
- Impugnación: `attacks`, `undercuts`, `contradicts`
- Refinamiento y alcance: `refines`, `generalizes`, `specializes`, `depends_on`
- Procedencia y medición: `cites`, `defines`, `measures`
- Replicación: `replicates`, `fails_to_replicate`
- Enlaces temáticos opcionales: `is_about`

Las aristas tipadas permiten actualizar el conocimiento mediante cadenas de
refutación, detectar conflictos de definiciones y hacer seguimiento del estado
de replicación. Estas son capacidades que la recuperación basada en similitud
tiene dificultades para representar. También respaldan la evaluación de
calidad: la calidad del conocimiento depende menos de la dirección de una
conclusión y más de la durabilidad del camino que la produjo, y las aristas
codifican esa estructura del camino a través de nodos (véase
[Nodos del Grafo Dialéctico](./dialectical-graph-nodes)) y otros
[Componentes del Grafo](./graph-components).