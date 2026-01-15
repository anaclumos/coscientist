---
title: Tipado de relaciones vs similitud
description: "Por qué las aristas tipadas resuelven lo que la recuperación basada en similitud no puede"
sourceLocale: en
sourceHash: ae787ed89f61
translatedAt: 2026-01-14
---

Tipado de relaciones vs similitud contrapone dos enfoques para conectar conocimiento: la recuperación basada en similitud. "¿De qué trata esto?", mientras que los grafos con relaciones tipadas (como en el [Grafo Dialéctico](./dialectical-graph)) preguntan "¿qué le hace esto a aquello?"

La recuperación por similitud saca a la superficie documentos que usan palabras similares. No puede decirte si esos documentos están de acuerdo, entran en conflicto o abordan preguntas diferentes. Las aristas tipadas—[apoya](./dialectical-graph-edges), [ataca](./attack), [socava](./undercut), [cita](./source)—capturan la relación argumentativa, habilitando preguntas como "¿qué cuestiona esta afirmación?" o "¿de qué supuestos depende esto?"

Esta distinción es crítica para la [síntesis de conocimiento](./knowledge-synthesis). Si recuperas dos fuentes que "parecen relacionadas" pero no puedes saber si están de acuerdo o en conflicto, la síntesis se derrumba en un resumen. Las aristas tipadas hacen del conflicto un objeto explícito que puede mapearse, resolverse o registrarse.
