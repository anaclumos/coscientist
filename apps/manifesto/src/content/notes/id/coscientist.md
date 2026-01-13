---
title: Coscientist
description: Sistem pendamping intelektual untuk produksi pengetahuan di era pasca-AI
---

Coscientist adalah layanan open-source yang terinspirasi oleh fiksi [Encyclopedia Galactica](./encyclopedia-galactica) karya Isaac Asimov. Ini dimaksudkan untuk menjadi lebih dari sekadar [bahtera pengetahuan](./knowledge-ark) berisi informasi: pendamping intelektual yang memperluas kontemplasi bersama [Galarch](./galarch) manusia. Di atas segalanya, ini adalah sistem untuk mencegah pikiran kita menjadi “busuk” (un-brain-rotting) di era pasca-AI.

Ini dibangun oleh [Sunghyun Cho](./sunghyun-cho). Kisah asalnya sederhana: pelestarian itu penting, tetapi pelestarian saja tidak menghasilkan pemahaman. Coscientist dirancang agar pengetahuan dapat diperbarui sehingga kontradiksi, contoh tandingan, dan pergeseran definisi menjadi terlihat dan dapat ditindaklanjuti, alih-alih “dihaluskan” oleh ringkasan yang terdengar lancar.

Prinsip pertama adalah kedaulatan: otoritas pengetahuan harus tetap berada pada [Galarch](./galarch). Menjaga agar tidak terjadi [Encyclopedia Meltdown](./encyclopedia-meltdown) bukanlah hal yang dipikirkan belakangan; itu adalah kendala desain. AI dapat melakukan kerja kontemplasi, tetapi seharusnya tidak merebut inisiatif untuk menulis dan menyatakan.

Inilah mengapa Coscientist melampaui RAG bergaya tanya-jawab (lihat [batasan RAG](./rag-limitations)). Ia mempertahankan sebuah [Graf Dialektik](./dialectical-graph) yang menyimpan [tindakan argumentatif](./argumentative-act) alih-alih teks dokumen mentah, sehingga setiap klaim dapat diikat pada cuplikan bukti, sumber, dan relasi eksplisit seperti serangan, undercut, dan sitasi (lihat [Node Graf Dialektik](./dialectical-graph-nodes) dan [Edge Graf Dialektik](./dialectical-graph-edges)). Eksplorasi digerakkan oleh strategi yang memprioritaskan tekanan adversarial (adversarial pressure), termasuk pencarian yang mengutamakan contoh tandingan (counterexample-first search), isolasi kontradiksi melalui [minimum cut](./minimum-cut), dan deteksi eksplisit [pergeseran definisi](./definition-drift) (lihat [Strategi Eksplorasi](./exploration-strategies)).

Pada tingkat protokol, sistem ini menggunakan prosedur seperti [Protokol Konsensus Multi-AI](./multi-ai-consensus-protocol) dan [sintesis pengetahuan](./knowledge-synthesis) untuk membuat dokumen saling bertabrakan, bukan sekadar diringkas. Keadaan sukses yang dituju adalah sebuah ekosistem argumen: AI menangani pekerjaan pencarian dan restrukturisasi, sementara Galarch mengawasi struktur dan verifikasi agar narasi yang dihasilkan tetap dapat ditelusuri.

Referensi: https://cho.sh/r/6975BA.