---
title: Limitaciones de RAG
description:
  Por qué la generación aumentada por recuperación estándar no puede producir
  descubrimiento genuino
sourceLocale: en
sourceHash: 6ccba3a6818d
translatedAt: 2026-01-14
---

[RAG](./rag) (Retrieval-Augmented Generation; generación aumentada por
recuperación) mejora la factualidad al recuperar documentos relevantes, pero el
RAG estándar aún tiene limitaciones estructurales para la producción de
conocimiento. Recupera fragmentos de texto y produce prosa fluida; no representa
los objetos que necesitas para el descubrimiento: afirmaciones,
contraafirmaciones, definiciones, métodos y las relaciones que los vinculan.

Un modo de fallo es el sesgo cuantitativo. Si muchas fuentes repiten una
afirmación y un pequeño número contiene refutaciones decisivas o contraejemplos,
la recuperación basada en similitud tiende a amplificar a la mayoría y a
suavizar los puntos de inflexión. Un único contraejemplo o una revisión de una
definición puede tener más peso epistémico que cien repeticiones, pero no
necesariamente es "más similar".

Otra limitación es la ausencia de relaciones explícitas. RAG puede recuperar
extractos del estudio A y del estudio B, pero por lo general no puede
representar que B refuta a A, socava su método o acota su alcance; simplemente
coloca fragmentos cerca unos de otros. Eso sustituye la calidad de los
fundamentos por la cantidad de texto.

Por último, la procedencia es frágil bajo el truncamiento. Cuando un extracto
pierde la atribución ("B informa que A afirmó…") y solo conserva la conclusión ,
el modelo puede reescribir silenciosamente la línea de responsabilidad. Las
citas se convierten en sensaciones, y "quién afirmó qué" se vuelve difícil de
reconstruir.

Por esto, el RAG estándar tiene dificultades para la actualización y la síntesis
de conocimiento en presencia de [contención](./contention) real. Una alternativa
es pasar de "qué tan similar es" a "qué relación es", como en un
[Grafo Dialéctico](./dialectical-graph) que almacena afirmaciones y tipos de
relación y prioriza contradicciones y contraejemplos en lugar del consenso.
