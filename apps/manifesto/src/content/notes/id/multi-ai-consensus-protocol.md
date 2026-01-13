---
title: Protokol Konsensus Multi-AI
description: Sistem penulisan dan verifikasi 1+4 (manusia + empat AI)
---

Protokol Konsensus Multi-AI adalah alur kerja kolaborasi di mana [Galarch](./galarch) bersama beberapa AI arus utama bekerja sama untuk mengurangi risiko halusinasi model tunggal dan mencegah [Encyclopedia Meltdown](./encyclopedia-meltdown).

Dalam varian "1+4", satu manusia mengoordinasikan empat sistem AI (per Desember 2025: ChatGPT, Gemini, Claude, dan Grok). Setiap AI memiliki memori percakapan yang independen, tetapi protokol ini memperlakukan keragaman memori sebagai proksi lemah bagi keragaman bukti; yang penting adalah memaksa ketidaksetujuan yang eksplisit dan keterlacakan.

Secara operasional, revisi diterima pada tingkat unit pernyataan (kalimat, paragraf, atau dokumen) hanya ketika mencapai kebulatan suara; ketidakpastian harus tetap dinyatakan secara eksplisit; metadata asal-usul (provenance) harus dapat dilacak; dan pencarian sanggahan dilakukan secara sengaja, bukan opsional. Protokol ini juga bersifat kultural: ia melatih kebiasaan untuk bertanya "apa yang akan mengubah pikiran saya?"

Ini bukan pembuktian kebenaran. Model berbagi data pelatihan dan dapat berkonvergensi pada mode kegagalan yang berkorelasi, sehingga kesepakatan dapat mencerminkan bias bersama; biaya untuk mencapai kebulatan suara dapat mendorong penulisan menjadi terlalu berhati-hati (hedging); dan memori yang independen tidak menjamin saluran bukti yang independen. Dalam satu tinjauan multi-AI terhadap protokol ini, hasilnya adalah 2 persetujuan, 1 keberatan, dan 1 penangguhan. Hasil ini menunjukkan bahwa protokol ini perlu diperkuat dengan prosedur sanggahan yang lebih kuat dan aturan tentang kemandirian bukti.