---
title: Bewering
description: Een verifieerbare propositie opgeslagen als een node in een dialectische grafiek
sourceLocale: en
sourceHash: a3b6f4399179
translatedAt: 2026-01-14
---

Een bewering is een verifieerbare propositie die uit tekst wordt geëxtraheerd en
als een eersteklas [Dialectische Grafiek-node](./dialectical-graph-nodes) wordt opgeslagen in een
[Dialectische Grafiek](./dialectical-graph). (Zie [Dialectische Grafiek-nodes](./dialectical-graph-nodes).) Beweringen zijn geen ruwe zinnen;
het zijn genormaliseerde uitspraken met expliciete afhankelijkheden van
[reikwijdte](./scope), [aannames](./assumption) en [methode](./method).

Beweringen kunnen worden gekoppeld aan [evidence spans](./evidence-span) die ze
ondersteunen, [tegenvoorbeelden](./counterexample) die ze afbakenen,
[aanvallen](./attack) die ze betwisten, en [ondermijningen](./undercut) die hun
grondslag ter discussie stellen. Deze relationele structuur maakt het mogelijk
dat kennis wordt bijgewerkt door weerlegging in plaats van vervanging.

Elke bewering heeft een status ): ze kan voorlopig, betwist, voorwaardelijk
ondersteund, robuust, weerlegd of verouderd zijn. De status verandert op basis
van het type weerlegging, niet op basis van het aantal, en kan terugvallen als
de ondersteunende structuur verzwakt.
