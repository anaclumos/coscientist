---
title: RAG
description:
  Retrieval-Augmented Generation, eine Technik zur Fundierung von KI-Ausgaben in
  abgerufenen Dokumenten
sourceLocale: en
sourceHash: a4f12721cec3
translatedAt: 2026-01-14
---

RAG ist eine Technik, die die Genauigkeit von KI-Ausgaben verbessert, indem sie
relevante Dokumente aus einem Korpus abruft und sie als Kontext für die
Generierung verwendet. Anstatt sich ausschließlich auf während des Trainings
gelernte Parameter zu verlassen, kann das Modell auf externe Quellen verweisen,
wodurch [Halluzinationen](./hallucination) reduziert und Wissen ermöglicht wird,
das nicht in den Trainingsdaten enthalten war.

Die Standard-RAG-Pipeline funktioniert wie folgt: Eine Anfrage wird in einen
Vektorraum eingebettet, ähnliche Dokumente werden anhand von Vektorähnlichkeit
abgerufen, und der abgerufene Text wird einem [LLM](./llm) als Kontext zur
Generierung einer Antwort bereitgestellt. Dieser Ansatz ist für
Fragebeantwortung, Suche und wissensintensive Aufgaben weit verbreitet.

RAG hat jedoch strukturelle Einschränkungen für die Wissensproduktion. Es ruft
Textausschnitte auf Basis von Ähnlichkeit ab, nicht auf Basis argumentativer
Beziehungen. Es kann Unterstützung nicht von Angriff unterscheiden, Evidenz
nicht von Meinung, oder Primärquelle nicht von einer Wiedergabe. Wenn Quellen in
Konflikt stehen, neigt RAG dazu, sie zu glatten Zusammenfassungen zu vermischen,
anstatt die [Kontroverse](./contention) sichtbar zu machen. Siehe
[RAG-Einschränkungen](./rag-limitations) für die vollständige Kritik.

[Kozientist](./coscientist) geht über RAG hinaus, indem es einen
[Dialektischen Graphen](./dialectical-graph) pflegt, der
[Behauptungen](./claim), [Evidenzspannen](./evidence-span) und typisierte
Relationen speichert. Abruf wird zu „was ist für diese Behauptung relevant?"
statt „was ist dieser Anfrage ähnlich?"
