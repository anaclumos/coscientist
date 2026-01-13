---
title: Strategi Eksplorasi
description: Strategi penelusuran graf untuk penemuan pengetahuan berkelanjutan
---

[Coscientist](./coscientist) membutuhkan mesin yang melakukan lebih dari sekadar mengambil (retrieve); ia terus-menerus mencari pendekatan baru dengan secara aktif memunculkan kontradiksi, kondisi batas, dan ketergantungan pada metode di [Dialectical Graph](./dialectical-graph).

Salah satu strateginya adalah pencarian yang mengutamakan kontra-contoh (counterexample-first search): popularitas diperlakukan kurang sebagai bukti kualitas dan lebih sebagai bukti risiko. Semakin luas sebuah klaim diulang, semakin bernilai untuk mengumpulkan kontra-contoh dan kondisi batas, karena kontaminasi dari klaim populer memiliki radius dampak (blast radius) yang lebih besar dalam [Encyclopedia Meltdown](./encyclopedia-meltdown).

Strategi lain adalah pencarian minimum-cut untuk kontradiksi (contradiction minimum-cut search). Ketika klaster klaim saling bertentangan, sistem mencari himpunan premis dan relasi minimal yang menghasilkan konflik tersebut, lalu menargetkan struktur itu untuk kontemplasi. Waktu manusia diinvestasikan pada [himpunan kontradiksi minimum](./minimum-contradiction-set), sementara AI menangani pencarian luas, generasi kandidat, dan komputasi [minimum-cut](./minimum-cut).

Deteksi pergeseran definisi (definition drift detection) memperlakukan makna sebagai objek yang bergerak. Ketika definisi suatu istilah bergeser lintas waktu atau komunitas, graf mencatat perubahan itu secara eksplisit (lihat [definition drift](./definition-drift)) alih-alih mengasumsikan konsep yang dibagi bersama, yang menangkal mode kegagalan umum dari [RAG](./rag-limitations).

Verifikasi keterkaitan metode–kesimpulan (method–conclusion coupling verification) mengelompokkan klaim berdasarkan metode, bukan berdasarkan kesimpulan, karena kesimpulan yang berbeda dapat berbagi cacat yang sama dan kesimpulan yang identik dapat bertumpu pada landasan yang sangat berbeda. Pemisahan jalur replikasi (replication path separation) juga menghindari "voting mayoritas" dengan menanyakan apakah dukungan berasal dari jalur yang independen, alih-alih dari pengulangan pernyataan yang sama.

Perilaku-perilaku ini diimplementasikan sebagai agen-agen terspesialisasi, termasuk normalisasi klaim, ekstraksi asumsi tersembunyi, deteksi konflik definisi, pencarian kontra-contoh, minimalisasi jalur argumentatif, rekonstruksi cakupan, generasi hipotesis alternatif, dan perancangan strategi verifikasi. Dekomposisi ini membuat kerja kontemplasi menjadi eksplisit dan dapat diperiksa.