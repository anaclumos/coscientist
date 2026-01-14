---
title: Sumber
description: Jangkar asal-usul untuk klaim dan bukti
sourceLocale: en
sourceHash: 73116d209a24
translatedAt: 2026-01-14
---

Sumber adalah titik asal untuk sebuah [rentang bukti](./evidence-span) atau
[klaim](./claim): dokumen, dataset, eksperimen, atau orang tempat informasi
tersebut berasal. Sumber menjangkar [asal-usul](./provenance) dan membuat
[jalur tanggung jawab](./responsibility-line) dapat ditelusuri.

Tidak semua sumber setara. Sumber primer melaporkan pengamatan asli; sumber
sekunder merangkum atau menafsirkan; sumber tersier mengompilasi dari sumber
sekunder. Setiap langkah memperkenalkan potensi penyimpangan, dan
[Kosaintis](./coscientist) melacak pembedaan ini melalui edge `cites` yang
eksplisit di [Graf Dialektik](./dialectical-graph).

Sumber adalah node dalam graf ) dengan metadata seperti penulis, tanggal, dan
konteks. Ketika sebuah klaim dipersoalkan, sumber menyediakan titik awal untuk
pemeriksaan ulang.
