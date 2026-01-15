---
title: Sisi Graf Dialektik
description: "Jenis relasi yang menghubungkan node dalam graf pengetahuan dialektik"
sourceLocale: en
sourceHash: 82c6fd07bccd
translatedAt: 2026-01-14
---

Dalam sebuah [Graf Dialektik](./dialectical-graph), sisi mengodekan jenis relasi
alih-alih skor kemiripan [lihat [Relasi Argumentatif](./argumentative-relations)]. Nilainya adalah Anda bisa bertanya "bagaimana ini
berdampak pada itu?" alih-alih hanya "apakah ini tentang topik yang sama?"

Jenis relasi yang umum meliputi:

- Dukungan: `supports`
- Tantangan: `attacks`, `undercuts`, `contradicts`
- Penyempurnaan dan cakupan: `refines`, `generalizes`, `specializes`,
  `depends_on`
- Provenans dan pengukuran: `cites`, `defines`, `measures`
- Replikasi: `replicates`, `fails_to_replicate`
- Tautan topikal opsional: `is_about`

Sisi bertipe memungkinkan pembaruan pengetahuan melalui rantai sanggahan,
pendeteksian konflik definisi, dan pelacakan status replikasi. Ini adalah
kemampuan yang sulit direpresentasikan oleh pengambilan berbasis kemiripan.
Sisi bertipe juga mendukung penilaian kualitas: kualitas pengetahuan kurang
bergantung pada arah sebuah kesimpulan dan lebih pada ketahanan jalur yang
menghasilkan kesimpulan itu, dan sisi mengodekan struktur jalur tersebut lintas node [lihat [Node Graf Dialektik](./dialectical-graph-nodes)] dan [Component Graf](./graph-components) lainnya.
