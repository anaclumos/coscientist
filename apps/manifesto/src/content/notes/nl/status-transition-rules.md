---
title: Regels voor statusovergangen
description: Wat de overgang tussen claimtoestanden in een dialectische grafiek triggert
---

Regels voor statusovergangen bepalen wat een [claim](./claim) van de ene toestand naar de andere verplaatst in de [claimstatus-taxonomie](./claim-status-taxonomy). Overgangen hangen af van het type uitdaging, niet van het aantal: één doorslaggevend [tegenvoorbeeld](./counterexample) weegt zwaarder dan veel niet-overtuigende bezwaren.

Belangrijke overgangen zijn onder andere: voorlopig → betwist (wanneer een [aanval](./attack) wordt geregistreerd), betwist → voorwaardelijk ondersteund (wanneer de aanval wordt beantwoord door de [reikwijdte](./scope) te beperken of [aannames](./assumption) te verduidelijken), voorwaardelijk ondersteund → robuust (wanneer meerdere onafhankelijke paden bevestigen), robuust → weerlegd (wanneer een tegenvoorbeeld toetsing doorstaat), en elke toestand → achterhaald (wanneer [definitieverschuiving](./definition-drift) de betekenis van de claim verbreekt).

Deze regels maken deel uit van de [epistemische protocollaag](./epistemic-protocol-layer) in [Cowetenschapper](./coscientist). Ze maken kennisupdates expliciet en controleerbaar in plaats van impliciet in proza.