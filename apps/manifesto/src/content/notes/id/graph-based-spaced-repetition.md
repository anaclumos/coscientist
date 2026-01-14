---
title: Pengulangan Bersela Berbasis Graf
description: "Menggunakan usia klaim atau usia sanggahan untuk memicu verifikasi ulang"
sourceLocale: en
sourceHash: 1c4655730a74
translatedAt: 2026-01-14
---

Pengulangan bersela berbasis graf menerapkan prinsip
[pengulangan bersela](./spaced-repetition) pada pemeliharaan pengetahuan:
[klaim](./claim) yang belum diverifikasi baru-baru ini, atau yang bukti
pendukungnya sudah lama tidak ditantang, akan dimunculkan untuk ditinjau ulang.

Intinya adalah bahwa pengetahuan, seperti ingatan, meluruh tanpa keterlibatan
aktif. Sebuah klaim yang diverifikasi tiga tahun lalu mungkin tidak lagi berlaku
jika dunia telah berubah, jika definisi telah bergeser, atau jika
[contoh tandingan](./counterexample) baru telah muncul.

Dalam sebuah [Graf Dialektis](./dialectical-graph), ini dapat diimplementasikan
dengan melacak cap waktu verifikasi terakhir untuk setiap klaim dan jalur-jalur
pendukungnya. [Operator](./operator) akan diminta untuk memverifikasi ulang
klaim sesuai jadwal, dengan interval yang melebar untuk klaim yang kuat dan
menyempit untuk klaim yang diperdebatkan.