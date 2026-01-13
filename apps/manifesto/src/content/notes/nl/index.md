---
title: "Outputtokens ≠ Kennis"
description: Manifest en persoonlijk verhaal voor het Coscientist-systeem
---

## Een persoonlijke zoektocht naar een cognitief exoskelet

Ik, [Sunghyun Cho](./sunghyun-cho), groeide op met eerbied voor encyclopedieën en het idee van één enkele, gezaghebbende opslagplaats van kennis. Als kind verdiepte ik me in _Encyclopedia Galactica_ en stelde ik me een wereld voor waarin al mijn projecten en onderzoek konden leven in een universeel naslagwerk. Later ontdekte ik Vannevar Bush’ essay uit 1945 [As We May Think](./as-we-may-think), waarin de [Memex](./memex) werd beschreven: een archief waarmee individuen documenten kunnen opslaan en terugvinden via associatieve sporen. Die visie voelde als een cognitief exoskelet.

Tegen de tijd dat ik in de 21e eeuw aan mijn eigen carrière begon, was het internet een ruwe benadering geworden van een mondiale Memex. Toch ontbrak er iets: het behield collectieve archieven, maar wist het individuele denken niet vast te leggen—met inbegrip van persoonlijke context, evoluerende inzichten en levende ideeën. Ik experimenteerde met [second brain](./second-brain)-tools en [digital garden](./digital-garden)-praktijken, maar vond ze te handmatig en te fragiel. Ik wilde een geëxternaliseerd [digital brain](./digital-brain) dat met minimale frictie kon groeien en zich kon aanpassen.

Dat inzicht zette [Project Aldehyde](./project-aldehyde) in gang, mijn poging om een superset van de Memex te bouwen voor persoonlijk gebruik. Jaren van iteratie culmineerden in mijn essay van mei 2022 [Creating Next-gen Digital Brains](./creating-next-gen-digital-brains), waarin ik betoogde dat frictie de vijand is van persoonlijke kennisworkflows: de beste manier om een tuin te beheren is niet voortdurend onderhoud, maar het cultiveren van een [digital jungle](./digital-jungle) die zichzelf organiseert. Je zou ruwe kennis moeten kunnen binnenwerpen en het systeem het laten organiseren, linken en opnieuw naar boven laten halen.

Halverwege 2022 bouwde ik een prototype met een statische-site-pipeline van Obsidian naar het web en noemde het [Extracranial](./extracranial). Het was een persoonlijk digitaal brein dat content automatisch indexeerde, backlinks suggereerde en oude posts liet vervallen tenzij ze als evergreen waren gemarkeerd. Het bevrijdde me van micromanagement van links en liet me focussen op schrijven en denken.

Maar terwijl ik die persoonlijke wiki bouwde, werd een groter probleem zichtbaar: zelfs een perfecte persoonlijke Memex is niet genoeg als de bredere epistemische omgeving (epistemic environment) gecompromitteerd is. Toen generatieve AI alomtegenwoordig werd, verschoof de diepere vraag van “hoe sla ik kennis op?” naar “hoe voorkomen we dat verificatie instort wanneer AI systemen kan overspoelen met plausibele tekst?”

## Van digitale breinen naar protocollen

Traditionele media dwingen een lineaire structuur af. Kennis is in de praktijk een netwerk. Het “next-gen digital brain” was mijn antwoord op die kloof. De principes waren eenvoudig: frictieloze invoer (ideeën vastleggen zonder opgelegde taxonomie), geautomatiseerde organisatie (verbanden algoritmisch afleiden), dynamische evolutie (kennis laten vervallen of evergreen laten blijven), multimodale content (diagrammen, demo’s, interactieve media) en naadloze bronnen (notities verbinden met papers, code, datasets en referenties). Handmatig linken kan het begrip nog verfijnen, maar het zou optioneel moeten zijn. Het systeem moet het zware werk doen.

In 2023 worstelde ik met vragen die verder gingen dan persoonlijke notities. AI-gegenereerde content bedreigde de verificatie zelf. Ik noemde het instortingsscenario [Encyclopedia Meltdown](./encyclopedia-meltdown): wanneer AI het initiatief neemt om te schrijven, verdwijnt de [responsibility line](./responsibility-line) en versterken fouten zichzelf via links.

De tegenmaatregel is een [epistemic protocol layer](./epistemic-protocol-layer), een constitutionele laag voor kennissystemen. De kernverplichtingen zijn soevereiniteit (kennisautoriteit blijft bij de menselijke [Galarch](./galarch)), traceerbaarheid (elke bewering behoudt een responsibility line) en rebuttal-first-validatie (gebruik [rebuttal-first search](./rebuttal-first-search) om vóór acceptatie naar tegenbewijs te zoeken). Deze laag pakt ook druk aan zoals [model collapse](./model-collapse) en de vloedgolf van [AI slop](./ai-slop) door expliciete herkomst (provenance) en zero-trust-inname af te dwingen.

## ScienceOps en institutionele schaal

Persoonlijke kennisinfrastructuur loste gemak op, niet institutionele schaal. De volgende sprong was [ScienceOps](./scienceops): software-operationsdiscipline toepassen op wetenschappelijk onderzoek via reproduceerbare experimenten, automatisering en snelle iteratie, terwijl de rol van de [natural science engineer](./natural-science-engineer) wordt geïntroduceerd. Wanneer experimenten pipelines worden in plaats van eenmalige acties, kan de lus tussen hypothese en verificatie drastisch krimpen.

Het grotere doel is een “GitHub voor wetenschappers” dat experimenten behandelt als code: geversioneerd, herhaalbaar en auditbaar. Dat is de operationele context die vraagt om een cognitieve engine zoals [Coscientist](./coscientist).

## Coscientist: architectuur, agency en blauwdruk

[Coscientist](./coscientist) is het systeem dat deze draden samenbrengt. Het is een multi-agent LLM-architectuur die is ontworpen om te functioneren als onderzoekspartner in plaats van als een enkele antwoordmachine. De interne loop scheidt voorstel, kritiek, ranking en verfijning, met een meta-reviewlaag die samenhang, traceerbaarheid en onzekerheid controleert.

Op de kennislaag onderhoudt het een [Dialectical Graph](./dialectical-graph) die beweringen en relaties opslaat in plaats van ruwe tekst. Narratieve output wordt behandeld als een projectie van een inferentielaag, zodat elke uitspraak kan terugsporen naar bronnen, bewijsfragmenten en expliciete relaties. Deze scheiding voorkomt de “vloeiend maar onverifieerbaar”-faalmodus van conventionele generatie.

Traditionele AI-veiligheid kadert het probleem vaak als alignment. Ik leg de nadruk op [cognitive agency preservation](./cognitive-agency-preservation): AI moet het menselijk oordeel versterken, niet vervangen. Praktisch betekent dat de gebruiker in de rol van verificateur houden: het werk laten zien, onzekerheid zichtbaar maken, alternatieve hypothesen presenteren en rebuttal-seeking als standaard instellen.

Coscientist is bedoeld als een blauwdruk voor een nieuwe epistemische infrastructuur: frictieloos maar soeverein, snel maar verantwoordingsplichtig, krachtig zonder agency te ondermijnen. Het richt zich op drie faalmodi: institutionele brain rot (verminderd door kruisverwijzingen en adversarial review), verificatie-instorting (verminderd door traceerbaarheid en geautomatiseerde rebuttal search) en verlies van agency (verminderd door transparantie en menselijk veto).

De langetermijnvisie is een gefedereerd netwerk van Coscientist-instanties op persoonlijke, organisatorische en publieke schaal die gevalideerde kennis uitwisselen terwijl lokale soevereiniteit behouden blijft. Als je een leesroute wilt: begin met [Creating Next-gen Digital Brains](./creating-next-gen-digital-brains) (persoonlijke tooling), daarna [Encyclopedia Meltdown](./encyclopedia-meltdown) en de [epistemic protocol layer](./epistemic-protocol-layer) (de faalmodus en de verdediging), en vervolgens [Dialectical Graph](./dialectical-graph) en [knowledge synthesis](./knowledge-synthesis) (de architectuur).