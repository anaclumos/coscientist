---
title: Keşif Stratejileri
description: Sürekli bilgi keşfi için grafik dolaşım stratejileri
---

[Coscientist](./coscientist) yalnızca geri getiren değil; [Diyalektik Grafik](./dialectical-graph) içinde çelişkileri, sınır koşullarını ve yöntem bağımlılığını aktif biçimde görünür kılarak yeni yaklaşımları sürekli arayan bir motora ihtiyaç duyar.

Bir strateji, önce karşı-örnek (counterexample) aramasıdır: popülerlik, kalite kanıtı olarak daha az; risk kanıtı olarak daha çok ele alınır. Bir iddia ne kadar yaygın biçimde tekrarlanıyorsa, karşı-örnekler ve sınır koşulları toplamak o kadar değerli hâle gelir; çünkü popüler iddialardan kaynaklanan bulaşma, [Encyclopedia Meltdown](./encyclopedia-meltdown) içinde daha geniş bir etki yarıçapına sahiptir.

Bir diğer strateji, çelişki minimum-kesit (minimum-cut) aramasıdır. İddia kümeleri çatıştığında, sistem çatışmayı üreten öncüller ve ilişkilerden oluşan en küçük kümeyi bulur, ardından tefekkür için o yapıyı hedefler. İnsan zamanı [minimum çelişki kümesine](./minimum-contradiction-set) yatırılırken, yapay zekâ geniş arama, aday üretimi ve [minimum-kesit](./minimum-cut) hesaplamasını üstlenir.

Tanım kayması (definition drift) tespiti, anlamı hareket eden bir nesne olarak ele alır. Bir terimin tanımı zaman içinde ya da topluluklar arasında kaydığında, grafik ortak bir kavram varsaymak yerine değişimi açıkça kaydeder (bkz. [tanım kayması](./definition-drift)); bu da [RAG](./rag-limitations)’in yaygın bir başarısızlık kipine karşı koyar.

Yöntem–sonuç bağlaşımı doğrulaması, iddiaları sonuçlarına göre değil yöntemlerine göre kümeler; çünkü farklı sonuçlar aynı kusuru paylaşabilir ve aynı sonuçlar çok farklı temellere dayanabilir. Benzer şekilde, yineleme yolu ayrıştırması (replication path separation) “çoğunluk oyu”ndan kaçınır; desteğin tekrar tekrar yeniden ifade edilmesinden mi yoksa bağımsız yollardan mı geldiğini sorar.

Bu davranışlar, iddia normalizasyonu, gizli varsayım çıkarımı, tanım çatışması tespiti, karşı-örnek araması, tartışmacı yol minimizasyonu, kapsam yeniden inşası, alternatif hipotez üretimi ve doğrulama stratejisi tasarımı gibi uzmanlaşmış ajanlar olarak uygulanır. Bu ayrıştırma, tefekkür çalışmasını açık ve denetlenebilir hâle getirir.