---
title: "Çıktı Token’ları ≠ Bilgi"
description: Coscientist sistemi için manifesto ve kişisel anlatı
---

## Bilişsel Bir Dış İskelet İçin Kişisel Bir Arayış

Ben, [Sunghyun Cho](./sunghyun-cho), ansiklopedilere ve tek bir otoriter bilgi deposu fikrine saygı duyarak büyüdüm. Çocukken _Encyclopedia Galactica_’yı didik didik okur, tüm projelerimin ve araştırmalarımın evrensel bir başvuru kaynağının içinde yaşayabildiği bir dünya hayal ederdim. Sonra Vannevar Bush’un 1945 tarihli [As We May Think](./as-we-may-think) denemesini keşfettim; burada [Memex](./memex) anlatılıyordu: bireylerin kayıtları depolamasına ve onları çağrışımsal izler üzerinden geri getirmesine izin veren bir arşiv. Bu vizyon bana bilişsel bir dış iskelet gibi gelmişti.

21. yüzyılda kendi kariyerime başladığımda, internet küresel bir Memex’in kaba bir yaklaşımı hâline gelmişti. Yine de bir şey eksikti: kolektif kayıtları koruyor ama bireyin zihnünü—kişisel bağlamı, evrilen içgörüleri ve yaşayan fikirleri—yakalamakta başarısız oluyordu. [second brain](./second-brain) araçları ve [digital garden](./digital-garden) pratikleriyle denemeler yaptım; ancak onları fazla manuel ve fazla kırılgan buldum. Minimum sürtünmeyle büyüyüp uyum sağlayabilen, dışsallaştırılmış bir [digital brain](./digital-brain) istiyordum.

Bu fark ediş, Memex’in kişisel kullanım için bir üst kümesini inşa etme girişimim olan [Project Aldehyde](./project-aldehyde)’i başlattı. Yıllar süren iterasyonlar, Mayıs 2022’deki [Creating Next-gen Digital Brains](./creating-next-gen-digital-brains) denememle sonuçlandı; burada sürtünmenin kişisel bilgi iş akışlarının düşmanı olduğunu savundum: Bir bahçeyi yönetmenin en iyi yolu sürekli budamak değil, kendini organize eden bir [digital jungle](./digital-jungle) yetiştirmektir. Ham bilgiyi içeri atabilmeli ve sistemin onu organize etmesine, bağlamasına ve yeniden su yüzüne çıkarmasına izin verebilmelisiniz.

2022’nin ortalarına doğru, Obsidian’dan web’e uzanan statik site hattı (pipeline) kullanarak bir prototip uyguladım ve adını [Extracranial](./extracranial) koydum. Bu, içeriği otomatik indeksleyen, geri bağlantılar (backlink) öneren ve evergreen olarak işaretlenmedikçe eski yazıların zamanla çürümesine izin veren kişisel bir dijital beyindi. Beni bağlantıları mikro yönetmekten kurtardı ve yazmaya ve düşünmeye odaklanmamı sağladı.

Ne var ki, bu kişisel vikiyi inşa ederken daha büyük bir sorun görünür hâle geldi: Daha geniş epistemik ortam bozulmuşsa, kusursuz bir kişisel Memex bile yeterli değildir. Üretken yapay zekâ her yerde yaygınlaştıkça, daha derin soru “bilgiyi nasıl depolarım?”dan “Yapay zekâ sistemleri makul görünen metinle doldurabiliyorken doğrulamanın çökmesini nasıl engelleriz?”e kaydı.

## Dijital Beyinlerden Protokollere

Geleneksel mecralar doğrusal yapıyı dayatır. Pratikte bilgi bir ağdır. “Yeni nesil dijital beyin” bu boşluğa yanıtımdı. İlkeleri basitti: sürtünmesiz girdi (zorunlu taksonomi olmadan fikirleri yakalamak), otomatik organizasyon (bağlantıları algoritmik olarak çıkarsamak), dinamik evrim (bilginin çürümesine ya da evergreen kalmasına izin vermek), çok modlu içerik (diyagramlar, demolar, etkileşimli medya) ve kesintisiz kaynaklar (notları makalelere, koda, veri kümelerine ve referanslara bağlamak). Manuel bağlantılama yine anlayışı keskinleştirebilir, ama isteğe bağlı olmalıdır. Ağır işi sistem yapmalıdır.

2023’e gelindiğinde, kişisel not almayı aşan sorularla boğuşuyordum. Yapay zekâ tarafından üretilen içerik, doğrulamanın kendisini tehdit ediyordu. Çöküş senaryosuna [Encyclopedia Meltdown](./encyclopedia-meltdown) adını verdim: yazma inisiyatifi yapay zekâya geçtiğinde [responsibility line](./responsibility-line) ortadan kaybolur ve hatalar bağlantılar üzerinden kendi kendini büyütür.

Karşı önlem bir [epistemic protocol layer](./epistemic-protocol-layer)’dır; bilgi sistemleri için anayasal bir katman. Temel taahhütleri egemenliktir (bilgi otoritesi insan [Galarch](./galarch)’ta kalır), izlenebilirliktir (her iddia bir sorumluluk çizgisini korur) ve önce-çürütme (rebuttal-first) doğrulamasıdır (kabulden önce karşı kanıt aramak için [rebuttal-first search](./rebuttal-first-search) kullanmak). Bu katman ayrıca [model collapse](./model-collapse) ve [AI slop](./ai-slop) seli gibi baskıları, açık köken (provenance) ve sıfır güven (zero-trust) alımı (ingestion) dayatarak ele alır.

## ScienceOps ve Kurumsal Ölçek

Kişisel bilgi altyapısı kolaylığı çözdü, kurumsal ölçeği değil. Bir sonraki sıçrama [ScienceOps](./scienceops) oldu: tekrarlanabilir deneyler, otomasyon ve hızlı iterasyon yoluyla yazılım operasyonları disiplinini bilimsel araştırmaya uygulamak ve [natural science engineer](./natural-science-engineer) rolünü tanıtmak. Deneyler tek seferlik işler değil de boru hatları (pipelines) hâline geldiğinde, hipotez ile doğrulama arasındaki döngü dramatik biçimde kısalabilir.

Daha büyük hedef, deneyleri kod gibi ele alan “bilim insanları için bir GitHub”dır: sürümlenen, tekrarlanabilir ve denetlenebilir. [Coscientist](./coscientist) gibi bir bilişsel motoru talep eden operasyonel bağlam budur.

## Coscientist: Mimari, Ajans ve Taslak

[Coscientist](./coscientist), bu izlekleri sentezleyen sistemdir. Tek bir cevap motoru olmaktan ziyade bir araştırma işbirlikçisi olarak çalışmak üzere tasarlanmış, çok etmenli (multi-agent) bir LLM mimarisidir. İç döngüsü öneri, eleştiri, sıralama ve iyileştirmeyi birbirinden ayırır; tutarlılığı, izlenebilirliği ve belirsizliği denetleyen bir meta-inceleme katmanıyla birlikte.

Bilgi katmanında, ham metin yerine iddiaları ve ilişkileri depolayan bir [Dialectical Graph](./dialectical-graph) tutar. Anlatı çıktısı, bir çıkarım katmanının projeksiyonu olarak ele alınır; böylece her ifade kaynaklara, kanıt aralıklarına (evidence spans) ve açık ilişkilere geri izlenebilir. Bu ayrım, geleneksel üretimin “pürüzsüz ama doğrulanamaz” arıza kipini önler.

Geleneksel yapay zekâ güvenliği çoğu zaman problemi hizalama (alignment) olarak çerçeveler. Ben [cognitive agency preservation](./cognitive-agency-preservation)’ı vurguluyorum: Yapay zekâ insan muhakemesini ikame etmemeli, güçlendirmelidir. Pratikte bu, kullanıcıyı doğrulayıcı rolünde tutmak demektir: yapılan işi göstermek, belirsizliği görünür kılmak, alternatif hipotezler sunmak ve çürütme aramayı varsayılan hâle getirmek.

Coscientist, yeni bir epistemik altyapı için bir taslak olarak düşünülmüştür: sürtünmesiz ama egemen, hızlı ama hesap verebilir, ajansı aşındırmadan güçlü. Üç arıza kipini hedefler: kurumsal beyin çürümesi (çapraz referanslama ve adversarial inceleme ile azaltılır), doğrulama çöküşü (izlenebilirlik ve otomatik çürütme aramasıyla azaltılır) ve ajans kaybı (şeffaflık ve insan vetosuyla azaltılır).

Uzun vadeli vizyon, kişisel, organizasyonel ve kamusal ölçeklerde doğrulanmış bilgiyi değiş tokuş ederken yerel egemenliği koruyan, federatif bir Coscientist örnekleri ağıdır. Bir okuma rotası isterseniz, [Creating Next-gen Digital Brains](./creating-next-gen-digital-brains) (kişisel araçlar) ile başlayın; sonra [Encyclopedia Meltdown](./encyclopedia-meltdown) ve [epistemic protocol layer](./epistemic-protocol-layer) (arıza kipi ve savunması); ardından [Dialectical Graph](./dialectical-graph) ve [knowledge synthesis](./knowledge-synthesis) (mimari).