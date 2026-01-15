---
title: Kanıt Aralığı
description:
  Bir iddiayı destekleyen veya ona meydan okuyan bir kaynaktan birebir
  alıntılanmış kesin bir aralık
sourceLocale: en
sourceHash: a8833ec8512f
translatedAt: 2026-01-14
---

Bir kanıt aralığı, bir kaynaktan bir [iddia](./claim)ı destekleyen veya ona
meydan okuyan birebir alıntılanmış kesin metindir. Orijinal ifadeyi ve bağlamı
korur; böylece sonraki okurlar, sapmış olabilecek bir parafrazı ya da özeti
değil, gerçekte ne söylendiğini görebilir.

Bir [Diyalektik Graf](./dialectical-graph) içinde kanıt aralıkları,
[kaynak](./source)larına ve ilgili oldukları iddialara bağlantıları olan
düğümler olarak saklanır. Bu, [üçlü ayrım](./triple-separation)ın ilk
katmanıdır: ham metin korunur, iddialar normalize edilir, ilişkiler açıkça ifade
edilir.

Kanıt aralıkları, [RAG](./rag-limitations) içindeki alıntı kırpma sorununu
önler; burada alıntılama, atıfı ("B, A’nın şunu iddia ettiğini bildiriyor...")
fark ettirmeden düşürebilir ve geriye yalnızca sonucu bırakabilir; böylece
[sorumluluk hattı](./responsibility-line) kopar.
