---
title: Node Graf Dialektis
description: "Jenis node dalam graf pengetahuan dialektis"
sourceLocale: en
sourceHash: 007206ea7078
translatedAt: 2026-01-14
---

Dalam sebuah [Graf Dialektis](./dialectical-graph), node merepresentasikan objek
epistemik, bukan teks mentah. Untuk ikhtisar tentang bagaimana bagian-bagian ini
saling menyatu, lihat [Komponen Graf](./graph-components). Jenis node yang umum mencakup:

- [Klaim](./claim) — proposisi yang dapat diverifikasi
- [Cakupan](./scope) — kondisi penerapan
- [Asumsi](./assumption) — premis implisit
- Definisi — makna istilah.
- [Metode](./method) — prosedur yang menghasilkan bukti atau kesimpulan
- Data — pengukuran atau hasil
- [Rentang Bukti](./evidence-span) — rentang kutipan yang persis
- [Sumber](./source) — jangkar provenance
- [Kontracontoh](./counterexample) — kasus yang merusak atau mempersempit klaim
- [Node Isu](./issue-node) — bundel klaster klaim yang saling bertabrakan

Dekomposisi ini mencegah kebingungan yang umum: sebuah dokumen bukanlah satu
hal. Makalah yang sama dapat memperkenalkan sebuah definisi, menyatakan sebuah
klaim, mengutip bukti, dan menyanggah hasil sebelumnya; masing-masing dari itu
harus tetap dapat dialamatkan jika Anda ingin pengetahuan diperbarui alih-alih
sekadar menumpuk.

Status klaim bersifat multidimensi, bukan satu skor keyakinan. Transisi lebih
sedikit didorong oleh jumlah sanggahan dan lebih oleh jenis sanggahan serta
apakah sanggahan itu berhasil pada level cakupan, asumsi, definisi, atau metode;
lihat [Tepi Graf Dialektis](./dialectical-graph-edges).