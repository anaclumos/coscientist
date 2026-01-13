---
title: Coscientist
description: Ein intellektuelles Begleitsystem zur Wissensproduktion im Post-AI-Zeitalter
---

Coscientist ist ein Open-Source-Dienst, inspiriert von Isaac Asimovs fiktiver [Encyclopedia Galactica](./encyclopedia-galactica). Er soll mehr sein als eine [Wissensark](./knowledge-ark) aus Informationen: ein intellektueller Begleiter, der das Nachdenken gemeinsam mit dem menschlichen [Galarch](./galarch) erweitert. Vor allem ist es ein System, um unsere Köpfe im Post-AI-Zeitalter wieder vom „Brain Rot“ zu befreien.

Er wird von [Sunghyun Cho](./sunghyun-cho) gebaut. Die Entstehungsgeschichte ist unkompliziert: Bewahrung ist wichtig, aber Bewahrung allein erzeugt kein Verständnis. Coscientist ist darauf ausgelegt, Wissen aktualisierbar zu machen, sodass Widersprüche, Gegenbeispiele und Bedeutungsverschiebungen von Definitionen sichtbar und handhabbar werden, statt durch flüssige Zusammenfassungen glattgebügelt zu werden.

Das erste Prinzip ist Souveränität: Die Wissensautorität muss beim [Galarch](./galarch) bleiben. Sich gegen den [Encyclopedia Meltdown](./encyclopedia-meltdown) zu wappnen, ist kein nachträglicher Gedanke; es ist eine Designvorgabe. KI kann Kontemplationsarbeit leisten, aber sie sollte nicht die Initiative des Schreibens und Deklarierens an sich reißen.

Deshalb geht Coscientist über Q&A-artiges RAG hinaus (siehe [RAG-Einschränkungen](./rag-limitations)). Es pflegt einen [Dialektischen Graphen](./dialectical-graph), der [argumentative Akte](./argumentative-act) statt rohen Dokumenttext speichert, sodass jede Behauptung an Evidenzspannen, Quellen und explizite Relationen wie Angriffe, Unterminierungen (undercuts) und Zitate gebunden werden kann (siehe [Knoten des Dialektischen Graphen](./dialectical-graph-nodes) und [Kanten des Dialektischen Graphen](./dialectical-graph-edges)). Die Exploration wird durch Strategien gesteuert, die gegnerischen Druck priorisieren, darunter Gegenbeispiel-zuerst-Suche, Widerspruchsisolation via [Minimum Cut](./minimum-cut) und explizite Erkennung von [Definition Drift](./definition-drift) (siehe [Explorationsstrategien](./exploration-strategies)).

Auf Protokollebene nutzt das System Verfahren wie das [Multi-AI-Konsensprotokoll](./multi-ai-consensus-protocol) und [Wissenssynthese](./knowledge-synthesis), um Dokumente kollidieren zu lassen, statt sie lediglich zusammenzufassen. Der angestrebte Erfolgszustand ist ein Ökosystem aus Argumenten: Die KI übernimmt die Such- und Umstrukturierungsarbeit, während der Galarch Struktur und Verifikation überwacht, sodass die entstehende Erzählung nachvollziehbar bleibt.

Referenz: https://cho.sh/r/6975BA.