---
title: Aristas del Grafo Dialéctico
description: Los tipos de relación que conectan nodos en un grafo de conocimiento dialéctico
---

En un [Grafo Dialéctico](./dialectical-graph), las aristas codifican tipos de relación en lugar de puntuaciones de similitud. El valor está en que puedes preguntar “¿cómo afecta esto a aquello?” en vez de solo “¿tratan estos del mismo tema?”

Las relaciones típicas incluyen `supports`, `attacks` y `undercuts` (cuestionamientos a nivel de método/supuesto/definición); relaciones de refinamiento y alcance como `refines`, `generalizes`, `specializes` y `depends_on`; enlaces de procedencia como `cites`, `defines`, `measures`, `replicates` y `fails_to_replicate`; y conflictos directos como `contradicts`. Algunos grafos también usan enlaces temáticos laxos como `is_about`, pero el trabajo epistémico proviene de aristas argumentativas tipadas.

Las aristas tipadas permiten la actualización del conocimiento mediante cadenas de refutación, la detección de conflictos de definición y el seguimiento del estado de replicación. Estas son capacidades que la recuperación basada en similitud tiene dificultades para representar (véase [limitaciones de RAG](./rag-limitations)). También respaldan la evaluación de la calidad: la calidad del conocimiento depende menos de la dirección de una conclusión y más de la durabilidad del camino que la produjo, y las aristas codifican esa estructura de caminos.