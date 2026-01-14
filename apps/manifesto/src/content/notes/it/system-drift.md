---
title: Deriva del sistema
description: Degrado dei sistemi di conoscenza tramite auto-contaminazione o trascuratezza
sourceLocale: en
sourceHash: 3596c6112d9f
translatedAt: 2026-01-14
---

La deriva del sistema è la categoria di [fenomeni di deriva](./drift-phenomena)
in cui il sistema di conoscenza stesso si degrada nel tempo, indipendentemente
da cambiamenti semantici o ambientali.

## Forme

- [Collasso del modello](./model-collapse) — degrado dovuto all’addestramento su
  dati generati dall’IA
- [Correzione vs deriva](./correction-vs-drift) — quando correggere gli errori
  costa più che lasciarli propagare

## Perché è importante

La deriva del sistema è la modalità di guasto in cui un sistema di conoscenza si
stabilizza attorno a un falso stato stazionario "mantenuto approssimativamente".
Gli errori persistono perché correggerli è costoso; i contenuti generati dall’IA
contaminano i dati di addestramento; e il sistema perde gradualmente il contatto
con la verità di base .

[Collasso dell’enciclopedia](./encyclopedia-meltdown) è la forma estrema: quando
l’IA prende l’iniziativa di scrivere, la
[linea di responsabilità](./responsibility-line) scompare e il sistema deriva
verso un collasso autoreferenziale. La difesa è lo
[strato di protocollo epistemico](./epistemic-protocol-layer): mantenere la
correzione meno costosa della deriva tramite [tracciabilità](./traceability),
[ingestione zero-trust](./zero-trust-ingestion) e
[ricerca "prima la confutazione"](./rebuttal-first-search).

## Correlati

- [Fenomeni di deriva](./drift-phenomena) — la categoria madre
- [Deriva semantica](./semantic-drift) — quando i significati cambiano
- [Deriva ambientale](./environmental-drift) — quando cambia il mondo
- [Marcescenza cerebrale istituzionale](./institutional-brain-rot) — analogo
  organizzativo
