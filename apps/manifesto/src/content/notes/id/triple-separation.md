---
title: Pemisahan Tiga Lapis
description:
  Aturan arsitektural yang memisahkan teks mentah, klaim yang dinormalisasi, dan
  relasi eksplisit
sourceLocale: en
sourceHash: d3ec3e911919
translatedAt: 2026-01-14
---

Pemisahan tiga lapis adalah aturan arsitektural dalam sebuah
[Graf Dialektik](./dialectical-graph) yang menjaga tiga lapisan tetap terpisah:
teks asli dipertahankan sebagai [rentang bukti](./evidence-span) yang dapat
dikutip; [klaim](./claim) diuraikan menjadi
[proposisi yang dinormalisasi](./normalized-proposition); dan relasi disimpan
sebagai pengikatan argumentatif yang eksplisit ).

Pemisahan ini mencegah mode kegagalan umum dalam [RAG](./rag-limitations):
pemotongan kutipan. Ketika teks diambil lalu diringkas tanpa mempertahankan
redaksi aslinya, atribusi dapat hilang tanpa disadari. Pemisahan tiga lapis
memastikan bahwa Anda selalu dapat melacak sebuah klaim kembali ke kata-kata
persis dan [sumber](./source) yang menghasilkannya.

Ini juga memungkinkan [sintesis pengetahuan](./knowledge-synthesis) dengan
membuat struktur dapat dikueri. Anda dapat bertanya "apa yang menyerang klaim
ini?" atau "definisi apa yang menjadi sandaran ini?" karena relasi-relasi
tersebut disimpan, bukan sekadar tersirat.
