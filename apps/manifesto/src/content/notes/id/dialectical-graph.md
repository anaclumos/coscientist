---
title: Graf Dialektik
description: Model graf pengetahuan yang menyimpan klaim dan relasi alih-alih konten dokumen
---

Graf dialektik adalah graf pengetahuan yang menyimpan struktur argumentatif (klaim, definisi, asumsi, metode, rentang bukti, serta relasi di antaranya) alih-alih memperlakukan dokumen sebagai teks yang tidak dibedakan. Wawasan intinya sederhana: jangan mengira teks sebagai pengetahuan. Teks adalah kemasan; pengetahuan adalah struktur kendala yang memungkinkan klaim saling mendukung, menyerang, dan menyempurnakan.

[Coscientist](./coscientist) menegakkan pemisahan rangkap tiga: teks asli dipertahankan sebagai rentang bukti yang bisa dikutip; klaim diuraikan menjadi proposisi yang dinormalkan; dan relasi disimpan sebagai pengikatan argumentatif yang eksplisit. Ini adalah perbaikan struktural untuk mode kegagalan RAG yang umum: pemotongan kutipan (excerpt truncation). Rentang bukti menjaga redaksi dan sumber yang persis, klaim mencatat siapa menyatakan apa, dan edge `cites` membuat atribusi menjadi eksplisit alih-alih tersirat oleh prosa.

Graf ini juga memisahkan lapisan inferensi (jaringan klaim yang berkembang) dari lapisan naratif (proyeksi bertanda waktu yang cocok untuk dibaca). Dokumen bukan kebenaran final; dokumen adalah cuplikan graf. Setiap kalimat harus dapat ditelusuri mundur melalui klaim, cakupan, asumsi, metode, data, rentang bukti, dan sumber. Tanpa rantai itu, sebuah kalimat hanyalah kalimat, bukan pengetahuan.

Untuk bertindak sebagai rem terhadap [Encyclopedia Meltdown](./encyclopedia-meltdown), sistem memprioritaskan kontradiksi dan contoh tandingan (counterexamples) alih-alih konsensus. Saat sebuah klaim masuk ke graf, sikap default-nya bersifat adversarial: mencari serangan dan pengguguran (undercuts) sejak dini agar struktur diperbarui lewat bantahan alih-alih melayang karena pengulangan. Untuk jenis node dan relasi yang konkret, lihat [Node Graf Dialektik](./dialectical-graph-nodes) dan [Edge Graf Dialektik](./dialectical-graph-edges).