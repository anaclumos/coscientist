---
title: Halluzination
description: KI-Ausgaben, die plausibel wirken, aber faktisch falsch oder erfunden sind
sourceLocale: en
sourceHash: 35a042b51f6a
translatedAt: 2026-01-14
---

Eine Halluzination ist eine KI-Ausgabe, die selbstbewusst und kohärent wirkt,
aber sachliche Fehler, erfundene Informationen oder ausgedachte Quellenangaben
enthält. Die Gefahr ist nicht Zufälligkeit, sondern Plausibilität.
Halluzinierter Text besteht oft eine oberflächliche Prüfung, weil er den
statistischen Mustern wahrheitsgemäßer Prosa folgt.

Halluzination ist ein Symptom dafür, wie [LLMs](./llm) funktionieren: Sie sagen
wahrscheinliche nächste Tokens voraus, nicht wahre. Wenn die Trainingsdaten zu
einem Thema spärlich oder widersprüchlich sind, interpoliert das Modell, und das
Ergebnis kann glatt, aber falsch sein. Deshalb ist die
[Flüssigkeitsfalle](./fluency-trap) so gefährlich: Sprachliche Gewandtheit
impliziert keine Genauigkeit.

In [Kozientist](./coscientist) wird das Halluzinationsrisiko über die
[epistemische Protokollschicht](./epistemic-protocol-layer) gesteuert:
[Nachvollziehbarkeit](./traceability) verlangt, dass Behauptungen mit
[Evidenzspannen](./evidence-span) verknüpft werden, die
[Widerlegung-zuerst-Suche](./rebuttal-first-search) unterzieht Aussagen vor der
Akzeptanz einem Stresstest, und das
[Multi-AI-Konsensprotokoll](./multi-ai-consensus-protocol) nutzt
Modell-Uneinigkeit als Signal für eine genauere Prüfung.
