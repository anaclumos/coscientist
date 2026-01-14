---
title: Memex Multibahasa
description: Sistem pengetahuan pribadi yang sadar bahasa dengan dukungan terjemahan otomatis
---

Memex multibahasa adalah sistem pengetahuan pribadi yang secara native mendukung konten dalam berbagai bahasa, dengan deteksi bahasa otomatis, penerjemahan, dan penautan lintas bahasa. Ia memperluas visi [Memex](./memex) asli [Vannevar Bush](./vannevar-bush) ke dunia di mana pengetahuan tidak menghormati batas-batas bahasa.

[Extracranial](./extracranial) karya [Sunghyun Cho](./sunghyun-cho) adalah implementasi dari konsep ini. Ia mencakup deteksi bahasa otomatis, penyajian spesifik-lokal  menggunakan tag hreflang, serta kemampuan untuk menulis dalam satu bahasa sambil membiarkan sistem penerjemahan menangani penyajian dalam bahasa lain.

Implikasi arsitekturalnya signifikan. Elemen antarmuka, pencarian, dan keterkaitan tautan semuanya harus memperhitungkan bahasa:

- Kueri dalam bahasa Korea seharusnya menemukan konten yang relevan baik jika awalnya ditulis dalam bahasa Korea maupun diterjemahkan dari bahasa Inggris.
- Backlink harus berfungsi lintas bahasa.
- [Garis tanggung jawab](./responsibility-line) harus melacak bukan hanya siapa yang menyatakan apa, tetapi juga dalam bahasa apa dan melalui metode penerjemahan yang mana.

Inilah mengapa [Extracranial](./extracranial) mempertimbangkan kontribusi komunitas melalui GitHub untuk menyempurnakan terjemahan: terjemahan mesin  membuat konten multibahasa menjadi mungkin, tetapi peninjauan manusia diperlukan untuk menjaga [kesetiaan terjemahan](./translation-fidelity). Memex multibahasa bukanlah masalah yang sudah tuntas, melainkan kolaborasi yang terus berjalan antara sistem otomatis dan penilaian manusia.

Bagi [Kosaintis](./coscientist), Memex multibahasa menjadi [Graf Dialektis](./dialectical-graph) multibahasa: sebuah struktur yang menyimpan [klaim](./claim), [rentang bukti](./evidence-span), serta relasi dari bahasa mana pun, dengan memperlakukan bahasa sebagai metadata, bukan sebagai batas yang fundamental.
