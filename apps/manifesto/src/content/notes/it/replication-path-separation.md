---
title: Separazione dei percorsi di replica
description: Chiedersi se il supporto proviene da percorsi indipendenti o da ripetute riformulazioni
---

La separazione dei percorsi di replica è la pratica di chiedersi se l’apparente accordo tra le fonti rifletta evidenze indipendenti oppure ripetute riformulazioni della stessa affermazione di fondo. L’accordo della maggioranza non è una prova forte se tutte le fonti concordi risalgono a un’unica origine.

Questa è una difesa fondamentale contro l’[Crollo dell'Enciclopedia](./encyclopedia-meltdown), in cui contenuti generati dall’IA possono citare sé stessi tramite intermediari, creando l’illusione di un consenso dovuto a un’amplificazione circolare. La separazione dei percorsi chiede: "Quanti percorsi davvero indipendenti portano a questa conclusione?"

In un [Grafo dialettico](./dialectical-graph), la separazione dei percorsi è resa possibile da una [provenienza](./provenance) esplicita e da archi `cites`. Il sistema può risalire dal supporto di un’affermazione fino alle [fonti](./source) originali e rilevare quando un’apparente replica è in realtà una ripetizione.
