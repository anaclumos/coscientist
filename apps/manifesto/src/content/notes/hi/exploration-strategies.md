---
title: अन्वेषण रणनीतियाँ
description: सतत ज्ञान-खोज के लिए ग्राफ ट्रैवर्सल रणनीतियाँ
sourceLocale: en
sourceHash: e9c34bc73e32
translatedAt: 2026-01-14
---

[सह-वैज्ञानिक](./coscientist) को केवल retrieval (पुनर्प्राप्ति) से अधिक चाहिए:
इसे ऐसे अन्वेषण की आवश्यकता है जो [द्वंद्वात्मक ग्राफ](./dialectical-graph) में
विरोधाभास, सीमा-शर्तें, और पद्धति-निर्भरता को सक्रिय रूप से सतह पर लाए।

मुख्य रणनीतियाँ शामिल हैं:

- [Counterexample-First Search](./counterexample-first-search) — लोकप्रियता को
  जोखिम-संकेत मानें; प्रतिवाद और सीमा-शर्तों को प्राथमिकता दें
- [Minimum Cut](./minimum-cut) — वह न्यूनतम संरचना अलग करें जो विरोधाभास पैदा
  करती है, फिर [minimum contradiction set](./minimum-contradiction-set) पर ध्यान
  केंद्रित करें
- [Definition Drift](./definition-drift) — साझा अवधारणाएँ मान लेने के बजाय अर्थ
  में होने वाले बदलावों का पता लगाएँ
- [Method-Conclusion Coupling](./method-conclusion-coupling) — साझा खामियाँ
  खोजने के लिए दावों को पद्धति के आधार पर समूहित करें
- [Replication Path Separation](./replication-path-separation) — स्वतंत्र
  साक्ष्य को बार-बार दोहराए गए पुनर्वक्तव्यों से अलग करें

कार्यान्वयन में, ये normalization (सामान्यीकरण), assumption extraction
(धारणा-निष्कर्षण), counterexample search (प्रतिवाद-खोज), scope reconstruction
(क्षेत्र-सीमा का पुनर्निर्माण), और verification strategy design (सत्यापन
रणनीति-डिज़ाइन) के लिए विशेषीकृत एजेंटों के रूप में दिखाई देते हैं।
