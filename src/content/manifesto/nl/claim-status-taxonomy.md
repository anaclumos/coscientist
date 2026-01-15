---
title: Taxonomie van claimstatus
description: De toestanden waarin een claim kan verkeren binnen een dialectische graaf
sourceLocale: en
sourceHash: ece55705e1ef
translatedAt: 2026-01-14
---

De taxonomie van claimstatus definieert de toestanden die een [claim](./claim)
kan innemen in een [Dialectische Graaf](./dialectical-graph). Voor hoe een claim
typisch door deze toestanden beweegt in de loop van de tijd, zie de
[Claimlevenscyclus](./claim-lifecycle).

## Veelvoorkomende toestanden

- `tentative` — hypothesefase
- `contested` — actief debat
- `conditionally supported` — waar onder gespecificeerde voorwaarden
- `robust` — ondersteund via meerdere onafhankelijke paden
- `refuted` — onderuitgehaald door een [tegenvoorbeeld](./counterexample)
- `obsolete` — betekenis verloren door [definitieverschuiving](./definition-drift)
  of een methodologische verschuiving

Status is geen enkelvoudige vertrouwensscore. Een claim kan robuust zijn qua
diversiteit van bewijs, maar betwist qua reikwijdte; hij kan in de ene context
voorwaardelijk ondersteund zijn en in een andere weerlegd. Multi-dimensionale
status legt deze complexiteit vast.

Overgangen tussen toestanden worden gedreven door het soort weerlegging, niet
door de hoeveelheid. Een enkel goed onderbouwd
[tegenvoorbeeld](./counterexample) kan een claim van robuust naar weerlegd
verplaatsen; veel zwakke bezwaren kunnen hem betwist laten zonder het op te
lossen. Zie [Regels voor statusovergangen](./status-transition-rules) voor de
formele overgangslogica.
