---
title: Verunreinigung von Trainingsdaten
description: KI-generierte Inhalte, die die Korpora verschmutzen, mit denen zukünftige Modelle trainiert werden
sourceLocale: en
sourceHash: a873d340b329
translatedAt: 2026-01-14
---

Verunreinigung von Trainingsdaten entsteht, wenn KI-generierter Text ins Web gelangt,
in Trainingskorpora gescraped wird und die nächste Modellgeneration prägt.
Das Ergebnis ist eine Rückkopplungsschleife: Modelle, die auf den Ausgaben ihrer Vorgänger trainiert werden,
übernehmen deren Verzerrungen , verstärken deren Fehler und verlieren den Zugang zum unabhängigen
menschlichen Signal, das die Originale nützlich gemacht hat.

Das unterscheidet sich von Benchmark-Verunreinigung (wenn Testdaten in Trainingssätze durchsickern),
auch wenn beide denselben Begriff verwenden. Bei der Verunreinigung von Trainingsdaten geht es um die
Herkunft des zugrunde liegenden Korpus: Sobald sich [KI-Schrott](./ai-slop) im großen Maßstab
mit von Menschen geschriebenem Text vermischt, wird die Unterscheidung teuer oder unmöglich.
Web-Scrapes nach 2022 sind zunehmend verdächtig.

Die Konsequenzen verstärken sich. [Modellkollaps](./model-collapse) beschreibt die Qualitätsverschlechterung,
wenn Modelle auf synthetischen Daten trainieren: Verteilungen verengen sich, seltene Modi verschwinden,
und die Ausgabe konvergiert gegen einen homogenisierten Mittelwert.
[Enzyklopädie-Meltdown](./encyclopedia-meltdown) beschreibt den Ausfall eines Wissenssystems,
wenn KI-Ausgaben als Quellen zitiert werden und dadurch zirkuläre Autorität entsteht.
Die Verunreinigung von Trainingsdaten ist die vorgelagerte Ursache für beides.

Die Parallele zu [stahl mit niedrigem Hintergrund](./low-background-steel) verdeutlicht das Problem.
Nukleartests kontaminierten allen Stahl nach 1945; die Verbreitung von LLMs kontaminierte allen Web-Text nach 2020.
Beide Kontaminationsereignisse waren irreversibel, beide erzeugten Nachfrage nach [Ressourcen vor der Kontamination](./pre-contamination-resource),
und beide bedeuten, dass technischer Fortschritt Materialien erfordert, die produziert wurden, bevor die Technologie existierte.

Lösungen umfassen die Verifikation der [Provenienz](./provenance), zeitstempel-gesteuerte Archive
und Datenkuratierungspraktiken, die Quellen mit klaren Ketten menschlicher Autor\*innenschaft bevorzugen.
Die MIT Data Provenance Initiative und ähnliche Bemühungen wollen Transparenz über die Herkunft von Trainingsdaten schaffen —
ein notwendiger Schritt, damit zukünftige Modelle vermeiden, auf ihren eigenen Spiegelbildern zu trainieren.
