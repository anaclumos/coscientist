---
title: RAG
description:
  Generación aumentada por recuperación, una técnica para fundamentar las
  salidas de IA en documentos recuperados
sourceLocale: en
sourceHash: a4f12721cec3
translatedAt: 2026-01-14
---

RAG es una técnica que mejora la precisión de las salidas de IA al recuperar
documentos relevantes de un corpus y usarlos como contexto para la generación.
En lugar de depender únicamente de los parámetros aprendidos durante el
entrenamiento, el modelo puede referenciar fuentes externas, reduciendo la
[alucinación](./hallucination) y habilitando conocimiento que no estaba en los
datos de entrenamiento.

El pipeline estándar de RAG funciona así: una consulta se incrusta en un espacio
vectorial, se recuperan documentos similares según la similitud vectorial y el
texto recuperado se proporciona a un [LLM](./llm) como contexto para generar una
respuesta. Este enfoque se ha generalizado para preguntas y respuestas, búsqueda
y tareas intensivas en conocimiento.

Sin embargo, RAG tiene limitaciones estructurales para la producción de
conocimiento. Recupera fragmentos de texto basándose en similitud, no en
relaciones argumentativas. No puede distinguir apoyo de ataque, evidencia de
opinión, ni fuente primaria de reformulación. Cuando las fuentes entran en
conflicto, RAG tiende a mezclarlas en resúmenes fluidos en lugar de hacer
explícita la [contienda](./contention). Consulta
[Limitaciones de RAG](./rag-limitations) para la crítica completa.

[Cocientífico](./coscientist) va más allá de RAG al mantener un
[Grafo dialéctico](./dialectical-graph) que almacena [afirmaciones](./claim),
[fragmentos de evidencia](./evidence-span) y relaciones tipadas. La recuperación
pasa a ser «¿qué incide sobre esta afirmación?» en vez de «¿qué es similar a
esta consulta?».
