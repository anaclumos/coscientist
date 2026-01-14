---
title: Sisi Graf Dialektik
description: Jenis relasi yang menghubungkan node dalam graf pengetahuan dialektik
---

Dalam sebuah [Graf Dialektik](./dialectical-graph), sisi  mengodekan jenis relasi alih-alih skor kemiripan. Nilainya adalah Anda bisa bertanya "bagaimana ini berdampak pada itu?" alih-alih hanya "apakah ini tentang topik yang sama?"

Jenis relasi yang umum meliputi:

- Dukungan: `supports`
- Tantangan: `attacks`, `undercuts`, `contradicts`
- Penyempurnaan dan cakupan: `refines`, `generalizes`, `specializes`, `depends_on`
- Provenans dan pengukuran: `cites`, `defines`, `measures`
- Replikasi: `replicates`, `fails_to_replicate`
- Tautan topikal opsional: `is_about` 

Sisi bertipe  memungkinkan pembaruan pengetahuan melalui rantai sanggahan, pendeteksian konflik definisi, dan pelacakan status replikasi. Ini adalah kemampuan yang sulit direpresentasikan oleh pengambilan berbasis kemiripan ). Sisi bertipe juga mendukung penilaian kualitas: kualitas pengetahuan kurang bergantung pada arah sebuah kesimpulan dan lebih pada ketahanan jalur yang menghasilkan kesimpulan itu, dan sisi mengodekan struktur jalur tersebut.
