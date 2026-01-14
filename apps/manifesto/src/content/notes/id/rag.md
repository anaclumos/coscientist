---
title: RAG
description: Retrieval-Augmented Generation, sebuah teknik untuk membumikan keluaran AI pada dokumen yang diambil kembali
---

RAG  adalah teknik yang meningkatkan akurasi keluaran AI dengan mengambil dokumen yang relevan dari sebuah korpus dan menggunakannya sebagai konteks untuk generasi. Alih-alih hanya mengandalkan parameter yang dipelajari selama pelatihan, model dapat merujuk pada sumber eksternal, mengurangi [halusinasi](./hallucination) dan memungkinkan pemanfaatan pengetahuan yang tidak ada dalam data pelatihan.

Alur kerja RAG standar berjalan sebagai berikut: sebuah kueri diubah menjadi embedding ke dalam ruang vektor, dokumen-dokumen serupa diambil berdasarkan kemiripan vektor, dan teks yang diambil diberikan kepada sebuah [Model Bahasa Besar](./llm) sebagai konteks untuk menghasilkan respons. Pendekatan ini telah menjadi luas digunakan untuk tanya-jawab, pencarian, dan tugas-tugas yang intensif pengetahuan.

Namun, RAG memiliki keterbatasan struktural untuk produksi pengetahuan. RAG mengambil potongan teks berdasarkan kemiripan, bukan berdasarkan relasi argumentatif. RAG tidak dapat membedakan dukungan dari serangan, bukti dari opini, atau sumber primer dari parafrasa/penyebutan ulang. Ketika sumber-sumber saling bertentangan, RAG cenderung mencampurkannya menjadi ringkasan yang mulus alih-alih menampilkan [pertentangan](./contention). Lihat [Keterbatasan RAG](./rag-limitations) untuk kritik lengkapnya.

[Kosaintis](./coscientist) melampaui RAG dengan mempertahankan sebuah [Graf Dialektis](./dialectical-graph) yang menyimpan [klaim](./claim), [rentang bukti](./evidence-span), dan relasi yang bertipe. Pengambilan  menjadi "apa yang relevan terhadap klaim ini?" alih-alih "apa yang mirip dengan kueri ini?"
