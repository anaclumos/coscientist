---
title: Wissenssynthese
description: Wie sich Synthese vom Mitteln in dialektischen Wissenssystemen unterscheidet
---

Wissenssynthese ist das, was nach dem Retrieval passiert, wenn man inkompatible Quellen vergleichbar machen muss. Sie ist kein Mitteln. Sie bedeutet, Prämissen, Definitionen und Geltungsbereich so auszurichten, dass Meinungsverschiedenheiten zu expliziten Objekten werden statt zu Rauschen.

Standard-[RAG](./rag-limitations) ist stark im Retrieval und schwach in der Synthese, weil ihm ein internes Objekt namens [contention](./contention) fehlt. In einem [Dialektischen Graphen](./dialectical-graph) ist contention erstklassig (first-class), sodass das System Inkompatibilität in ihre Ursachen zerlegen kann: Definitionsunterschiede, Stichprobenunterschiede, Methodenunterschiede, Scope-Unterschiede oder zeitgetriebene [Nichtstationarität](./nonstationarity).

Auflösung ist daher nicht ein einzelner Satz. Sie ist eine verzweigte Karte: Wenn derselbe Begriff unter unterschiedlichen Definitionen zu unterschiedlichen Schlussfolgerungen führt, protokolliert das System die Verzweigung auf der Definitionsebene, bevor es sie als Widerspruch in den Schlussfolgerungen behandelt. [Issue-Knoten](./dialectical-graph-nodes) bündeln, was womit in Konflikt steht, und halten die Bedingungen fest, unter denen das Issue gelöst werden kann.

Das Ziel ist eine Karte der Widersprüche plus explizite Auflösungsbedingungen, damit zukünftige Arbeit Wissen durch Umordnung statt durch Umschreiben aktualisieren kann. Deshalb zielt die Contemplation-AI in [Coscientist](./coscientist) darauf ab, Dokumente kollidieren zu lassen: Issue-Cluster zu erzeugen, Bedingungen zu verfeinern, strukturierte Widerlegungen (rebuttals) zu erstellen und explizite Koordinatensysteme für den Vergleich bereitzustellen.