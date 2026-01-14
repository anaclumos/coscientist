---
title: Grafo dialéctico
description:
  Un modelo de grafo de conocimiento que almacena afirmaciones y relaciones en
  lugar del contenido del documento
sourceLocale: en
sourceHash: cd2021478e98
translatedAt: 2026-01-14
---

Un grafo dialéctico es un grafo de conocimiento que almacena la estructura
argumentativa (afirmaciones, definiciones, supuestos, métodos, fragmentos de
evidencia y las relaciones entre ellos) en lugar de tratar los documentos como
texto indiferenciado. La idea central es simple: no confundas el texto con el
conocimiento. El texto es el empaquetado; el conocimiento es la estructura de
restricciones que permite que las afirmaciones se apoyen, se ataquen y se
refinen mutuamente.

[Cocientífico](./coscientist) impone una separación triple: el texto original se
conserva como fragmentos de evidencia citables; las afirmaciones se descomponen
en proposiciones normalizadas; y las relaciones se almacenan como vínculos
argumentativos explícitos. Esto es una corrección estructural para un modo de
fallo común de [RAG](./rag): el truncamiento de extractos. El fragmento de
evidencia mantiene la redacción exacta y la fuente, la afirmación registra quién
afirmó qué, y una arista `cites` hace explícita la atribución en lugar de
dejarla implícita en la prosa.

El grafo también separa una capa de inferencia (la red de afirmaciones en
evolución) de una capa narrativa (una proyección con marca temporal adecuada
para la lectura). Un documento no es la verdad final; es una instantánea del
grafo. Cada frase debería poder retroceder a través de afirmación, alcance,
supuesto, método, datos, fragmento de evidencia y fuente. Sin esa cadena, una
frase es solo una frase, no conocimiento.

Para actuar como freno frente al
[Colapso de la Enciclopedia](./encyclopedia-meltdown), el sistema prioriza las
contradicciones y los contraejemplos en lugar del consenso. Cuando una
afirmación entra en el grafo, la postura por defecto es adversarial: buscar
ataques y refutaciones parciales temprano para que la estructura se actualice
mediante la refutación en lugar de derivar por repetición. Para tipos concretos
de nodos y relaciones, consulta
[Nodos del grafo dialéctico](./dialectical-graph-nodes) y
[Aristas del grafo dialéctico](./dialectical-graph-edges).
