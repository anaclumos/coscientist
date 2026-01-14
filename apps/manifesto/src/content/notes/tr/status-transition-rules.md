---
title: Durum Geçiş Kuralları
description: Diyalektik bir grafikte iddia durumları arasında hareketi ne tetikler
sourceLocale: en
sourceHash: bae87c3f8772
translatedAt: 2026-01-14
---

Durum geçiş kuralları, bir [iddianın](./claim)
[iddia durum taksonomisinde](./claim-status-taxonomy) bir durumdan diğerine
neyin taşıdığını tanımlar. Geçişler sayıya değil, meydan okumanın türüne
bağlıdır: tek bir belirleyici [karşı-örnek](./counterexample), ikna edici
olmayan pek çok itirazdan daha önemlidir.

Başlıca geçişler şunlardır: geçici → ihtilaflı (bir [saldırı](./attack)
kaydedildiğinde), ihtilaflı → koşullu olarak desteklenen (saldırı,
[kapsamın](./scope) daraltılması veya [varsayımların](./assumption)
netleştirilmesiyle yanıtlandığında), koşullu olarak desteklenen → sağlam (birden
çok bağımsız yol doğruladığında), sağlam → çürütülmüş (bir karşı-örnek
incelemeye rağmen ayakta kaldığında) ve herhangi bir durum → geçersiz (
[tanım kayması](./definition-drift) iddianın anlam bağını kopardığında).

Bu kurallar, [Eşbilimci](./coscientist) içindeki
[epistemik protokol katmanının](./epistemic-protocol-layer) bir parçasıdır.
Bilgi güncellemeyi, düzyazıda örtük olmak yerine açık ve denetlenebilir hale
getirirler.
