---
title: "Outputtokens ≠ Kennis"
description: Een persoonlijke zoektocht naar een cognitief exoskelet
---

Ik, [Sunghyun Cho](./sunghyun-cho), ben opgegroeid met eerbied voor encyclopedieën en het idee van één enkele, gezaghebbende opslagplaats van kennis. Als kind ploos ik _Encyclopedia Galactica_ uit en stelde ik me een wereld voor waarin al mijn projecten en onderzoek konden leven in één universele referentie. Later ontdekte ik [Vannevar Bush](./vannevar-bush)'s essay uit 1945, [Zoals wij zouden kunnen denken](./as-we-may-think), waarin de [Memex](./memex) werd beschreven: een archief dat individuen in staat stelt records op te slaan en ze terug te vinden via associatieve sporen. Die visie voelde als een cognitief exoskelet.

Tegen de tijd dat ik mijn eigen carrière begon in de 21e eeuw, was het internet een ruwe benadering geworden van een wereldwijde Memex. Toch ontbrak er iets: het bewaart collectieve records, maar slaagt er niet in de individuele geest vast te leggen—met inbegrip van persoonlijke context, zich ontwikkelende inzichten en levende ideeën. Ik experimenteerde met tools voor een [tweede brein](./second-brain) en praktijken rond een [digitale tuin](./digital-garden), om vervolgens te ontdekken dat ze te handmatig en te fragiel waren. Ik wilde een geëxternaliseerd [digitaal brein](./digital-brain) dat met minimale frictie kon groeien en zich aanpassen.

Dat inzicht vormde het startschot voor [Project Aldehyde](./project-aldehyde), mijn poging om een superset van de Memex te bouwen voor persoonlijk gebruik. Jaren van iteratie mondden uit in mijn essay van mei 2022, [Digitale breinen van de volgende generatie creëren](./creating-next-gen-digital-brains), waarin ik betoogde dat frictie de vijand is van persoonlijke kennisworkflows: de beste manier om een tuin te beheren is niet voortdurend wieden en snoeien, maar het cultiveren van een [digitale jungle](./digital-jungle) die zichzelf organiseert. Je zou rauwe kennis moeten kunnen dumpen, waarna het systeem die organiseert, verbindt en weer naar boven haalt.

Halverwege 2022 implementeerde ik een prototype met een statische-site-pipeline van Obsidian naar het web en noemde het [Extracranial](./extracranial). Het was een persoonlijk digitaal brein dat content automatisch indexeerde, backlinks suggereerde, oude posts liet vergaan tenzij ze als evergreen waren gemarkeerd, en tweetalig opereerde [over de Sprachraums heen](./across-the-sprachraums). Het bevrijdde me van het micromanagen van links en liet me focussen op schrijven en denken.

Maar terwijl ik die persoonlijke wiki bouwde, kwam een groter probleem in beeld: zelfs een perfecte persoonlijke Memex is niet genoeg als de bredere epistemische omgeving is aangetast. Toen generatieve AI alomtegenwoordig werd, verschoof de diepere vraag van "hoe sla ik kennis op?" naar "hoe voorkomen we dat verificatie instort wanneer AI systemen kan overspoelen met plausibele tekst?"

## Van Digitale Breinen naar Protocollen

Traditionele media dwingen een lineaire structuur af. Kennis in de praktijk is een netwerk. Het "next-gen digital brain" was mijn antwoord op die kloof. De principes waren eenvoudig:

- frictieloze invoer — ideeën vastleggen zonder opgedrongen taxonomie
- geautomatiseerde organisatie — verbanden algorithmisch afleiden
- dynamische evolutie — kennis laten vervallen of evergreen laten blijven
- multimodale content — diagrammen, demo’s, interactieve media
- naadloze bronnen — notities verbinden met papers, code, datasets en referenties

Handmatig linken kan begrip nog steeds aanscherpen, maar het zou optioneel moeten zijn. Het systeem moet het zware werk doen.

In 2023 worstelde ik met vragen die verder gingen dan persoonlijke notities. Door AI gegenereerde content bedreigde verificatie zelf. Ik noemde het instortingsscenario [Encyclopedie-ineenstorting](./encyclopedia-meltdown): wanneer AI het initiatief neemt om te schrijven, verdwijnt de [responsibility line](./responsibility-line) en versterken fouten zichzelf via links.

De tegenmaatregel is een [epistemic protocol layer](./epistemic-protocol-layer), een constitutionele laag voor kennissystemen. De kernverplichtingen zijn soevereiniteit ), traceerbaarheid , en rebuttal-first-validatie  om naar tegenbewijs te zoeken vóór acceptatie). Deze laag pakt ook druk aan zoals [modelinstorting](./model-collapse) en de vloed aan [AI-rommel](./ai-slop) door expliciete herkomst  en zero-trust-inname af te dwingen.

## ScienceOps en Institutionele Schaal

Persoonlijke kennisinfrastructuur loste gemak op, niet institutionele schaal. De volgende sprong was [ScienceOps](./scienceops): het toepassen van software-operationsdiscipline op wetenschappelijk onderzoek via reproduceerbare experimenten, automatisering en snelle iteratie, terwijl de rol van de [natural science engineer](./natural-science-engineer) werd geïntroduceerd. Wanneer experimenten pipelines worden, geen eenmalige acties, kan de lus tussen hypothese en verificatie dramatisch krimpen.

Het grotere doel is een "GitHub voor wetenschappers" die experimenten behandelt als code: geversioneerd, herhaalbaar en auditbaar. Dat is de operationele context die een cognitieve engine zoals [Cowetenschapper](./coscientist) vereist.

## Coscientist: Architectuur, Agency en Blueprint

[Cowetenschapper](./coscientist) is het systeem dat deze lijnen samenbrengt. Het is een multi-agent-[Groot taalmodel](./llm)-architectuur die is ontworpen om te functioneren als onderzoekssamenwerker in plaats van als één enkele antwoordenmachine. De interne lus scheidt voorstel, kritiek, rangschikking en verfijning, met een meta-reviewlaag die coherentie, traceerbaarheid en onzekerheid controleert.

Op de kennislaag onderhoudt het een [Dialectische graaf](./dialectical-graph) die claims en relaties opslaat in plaats van ruwe tekst. Narratieve output wordt behandeld als een projectie van een inferentielaag, zodat elke uitspraak kan terugsporen naar bronnen, evidence spans  en expliciete relaties. Deze scheiding vermijdt de "glad maar niet verifieerbaar"-faalmodus van conventionele generatie.

Traditionele AI-veiligheid framet het probleem vaak als alignment. Ik leg de nadruk op [cognitive agency preservation](./cognitive-agency-preservation): AI moet menselijk oordeel versterken, niet vervangen. Praktisch betekent dat de gebruiker in de rol van verificateur houden: het werk laten zien, onzekerheid zichtbaar maken, alternatieve hypotheses presenteren en rebuttal-seeking als standaard instellen.

Coscientist is bedoeld als blueprint voor een nieuwe epistemische infrastructuur: frictieloos maar soeverein, snel maar verantwoordingsplichtig, krachtig zonder agency uit te hollen. Het richt zich op drie faalmodi: institutionele brain rot , verificatie-instorting , en agency-verlies .

De langetermijnvisie is een gefedereerd netwerk van Coscientist-instanties op persoonlijke, organisatorische en publieke schaal die gevalideerde kennis uitwisselen terwijl lokale soevereiniteit behouden blijft. Als je een leesroute wilt: begin met [Digitale breinen van de volgende generatie creëren](./creating-next-gen-digital-brains) , ga dan naar [Encyclopedie-ineenstorting](./encyclopedia-meltdown) en de [epistemic protocol layer](./epistemic-protocol-layer) , en daarna naar [Dialectische graaf](./dialectical-graph) en [kennissynthese](./knowledge-synthesis) .
