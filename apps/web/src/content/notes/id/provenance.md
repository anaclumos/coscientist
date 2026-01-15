---
title: Provenans
description: Asal-usul dan rantai penguasaan untuk klaim dan bukti
sourceLocale: en
sourceHash: 37d043d7c7d1
translatedAt: 2026-01-14
---

Provenans adalah asal-usul dan rantai penguasaan dari sebuah klaim atau bukti:
siapa yang menyatakannya, kapan, berdasarkan apa, dan bagaimana hal itu sampai
pada bentuknya saat ini. Tanpa provenans, Anda tidak dapat membedakan sumber
primer dari ringkasan yang dikemas ulang, dan Anda tidak dapat mengetahui apakah
kesepakatan yang tampak mencerminkan bukti yang independen atau sitasi
melingkar.

Dalam sebuah [Graf Dialektik](./dialectical-graph), provenans dikodekan melalui
node [sumber](./source), [rentang bukti](./evidence-span), dan edge `cites` yang
membuat atribusi menjadi eksplisit alih-alih tersirat oleh prosa. Ini mencegah
masalah pemotongan kutipan yang umum dalam [RAG](./rag-limitations), ketika
pengutipan menghilangkan konteks dan
[garis tanggung jawab](./responsibility-line) lenyap.

Provenans adalah prasyarat untuk [ketertelusuran](./traceability): jika Anda
tidak dapat menelusuri sebuah klaim ke asal-usulnya, Anda tidak dapat
memperbaikinya ketika dunia berubah.
