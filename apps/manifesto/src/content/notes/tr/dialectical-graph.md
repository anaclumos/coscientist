---
title: Diyalektik Grafik
description: Belge içeriği yerine iddiaları ve ilişkileri depolayan bir bilgi grafiği modeli
---

Diyalektik grafik, belgeleri ayrıştırılmamış metin olarak ele almak yerine tartışmacı yapıyı (iddialar, tanımlar, varsayımlar, yöntemler, kanıt parçaları ve bunların arasındaki ilişkiler) depolayan bir bilgi grafiğidir. Temel içgörü basittir: metni bilgiyle karıştırmayın. Metin ambalajdır; bilgi ise iddiaların birbirini desteklemesine, saldırmasına ve rafine etmesine imkân veren kısıt yapısıdır.

[Eşbilimci](./coscientist) üçlü bir ayrımı zorunlu kılar: özgün metin, alıntılanabilir kanıt parçaları olarak korunur; iddialar normalize edilmiş önermelere ayrıştırılır; ilişkiler ise açık tartışmacı bağlar olarak saklanır. Bu, yaygın bir [RAG](./rag) başarısızlık kipine yönelik yapısal bir düzeltmedir: alıntı kesilip kısaltılması. Kanıt parçası, tam ifadeyi ve kaynağı korur; iddia, kimin neyi ileri sürdüğünü kaydeder; bir `cites` kenarı da atfı düzyazının ima etmesine bırakmak yerine açık hale getirir.

Graf ayrıca bir çıkarım katmanını (evrilen iddia ağı) bir anlatı katmanından (okumaya uygun, zaman damgalı bir yansıtım) ayırır. Bir belge nihai hakikat değildir; grafın bir anlık görüntüsüdür. Her cümle, iddia, kapsam, varsayım, yöntem, veri, kanıt parçası ve kaynak üzerinden geriye doğru izlenebilmelidir. Bu zincir olmadan bir cümle sadece cümledir; bilgi değildir.

[Ansiklopedi Çöküşü](./encyclopedia-meltdown) karşısında bir fren işlevi görmek için sistem, uzlaşıdan ziyade çelişkileri ve karşı örnekleri önceliklendirir. Bir iddia grafa girdiğinde varsayılan duruş çekişmecidir: yapı, tekrarın sürüklemesiyle kaymak yerine çürütmeyle güncellensin diye saldırıları ve zayıflatmaları  erken arar. Somut düğüm ve ilişki türleri için [Diyalektik Grafik Düğümleri](./dialectical-graph-nodes) ve [Diyalektik Grafik Kenarları](./dialectical-graph-edges) sayfalarına bakın.
