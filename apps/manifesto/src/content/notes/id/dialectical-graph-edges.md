---
title: Sisi Graf Dialektis
description: Jenis relasi yang menghubungkan node dalam graf pengetahuan dialektis
---

Dalam sebuah [Graf Dialektis](./dialectical-graph), sisi (edge) menyandikan jenis relasi alih-alih skor kemiripan. Nilainya adalah Anda bisa bertanya “bagaimana ini memengaruhi itu?” alih-alih hanya “apakah ini tentang topik yang sama?”

Relasi yang umum meliputi `supports`, `attacks`, dan `undercuts` (tantangan pada level metode/asumsi/definisi); relasi penyempurnaan dan cakupan seperti `refines`, `generalizes`, `specializes`, dan `depends_on`; tautan asal-usul (provenance) seperti `cites`, `defines`, `measures`, `replicates`, dan `fails_to_replicate`; serta konflik langsung seperti `contradicts`. Beberapa graf juga memakai tautan topikal yang longgar seperti `is_about`, tetapi kerja epistemik berasal dari sisi argumentatif yang bertipe.

Sisi bertipe memungkinkan pembaruan pengetahuan melalui rantai sanggahan, pendeteksian konflik definisi, dan pelacakan status replikasi. Ini adalah kemampuan yang sulit direpresentasikan oleh pengambilan berbasis kemiripan (lihat [keterbatasan RAG](./rag-limitations)). Sisi bertipe juga mendukung penilaian kualitas: kualitas pengetahuan kurang bergantung pada arah sebuah kesimpulan dan lebih pada ketahanan jalur yang menghasilkannya, dan sisi menyandikan struktur jalur tersebut.