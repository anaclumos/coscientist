---
title: Mehrsprachiger Memex
description: Ein sprachbewusstes persönliches Wissenssystem mit automatischer
  Übersetzungsunterstützung
sourceLocale: en
sourceHash: 4cbc551868c1
translatedAt: 2026-01-14
---

Ein mehrsprachiger Memex ist ein persönliches Wissenssystem, das Inhalte in
mehreren Sprachen nativ unterstützt – mit automatischer Spracherkennung,
Übersetzung und sprachübergreifender Verlinkung. Er erweitert die ursprüngliche
[Memex](./memex)-Vision von [Vannevar Bush](./vannevar-bush) auf eine Welt, in
der Wissen keine Sprachgrenzen respektiert.

[Sunghyun Cho](./sunghyun-cho)s [Extracranial](./extracranial) ist eine
Umsetzung dieses Konzepts. Es umfasst automatische Spracherkennung,
lokalspezifische Auslieferung mittels hreflang-Tags und die Möglichkeit, in
einer Sprache zu schreiben, während Übersetzungssysteme die Auslieferung in
anderen Sprachen übernehmen.

Die architektonischen Implikationen sind erheblich. UI-Elemente , Suche und
Verknüpfungen müssen Sprache durchgängig berücksichtigen:

- Eine Anfrage auf Koreanisch sollte relevante Inhalte finden, unabhängig davon,
  ob sie ursprünglich auf Koreanisch verfasst oder aus dem Englischen übersetzt
  wurden.
- Backlinks sollten sprachübergreifend funktionieren.
- Die [Responsibility Line](./responsibility-line) muss nicht nur nachverfolgen,
  wer was behauptet hat, sondern auch in welcher Sprache und über welche
  Übersetzungsmethode.

Deshalb berücksichtigt [Extracranial](./extracranial) Community-Beiträge via
GitHub, um Übersetzungen zu verfeinern: Maschinelle Übersetzung macht
mehrsprachige Inhalte möglich, aber menschliche Prüfung ist nötig, um die
[Übersetzungstreue](./translation-fidelity) zu bewahren. Der mehrsprachige Memex
ist kein gelöstes Problem, sondern eine fortlaufende Zusammenarbeit zwischen
automatisierten Systemen und menschlichem Urteilsvermögen.

Für [Kozientist](./coscientist) wird der mehrsprachige Memex zum mehrsprachigen
[Dialektischen Graphen](./dialectical-graph): einer Struktur, die
[Behauptungen](./claim), [Evidenzspannen](./evidence-span) und Relationen aus
jeder Sprache speichert, wobei Sprache als Metadatum statt als grundlegende
Grenze behandelt wird.
