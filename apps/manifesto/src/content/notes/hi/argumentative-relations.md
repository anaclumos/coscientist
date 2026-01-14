---
title: तर्क-वितर्क संबंध
description: कार्य के आधार पर संगठित, द्वंद्वात्मक ग्राफ में किनारा प्रकार
sourceLocale: en
sourceHash: 45592ddcb1d1
translatedAt: 2026-01-14
---

तर्क-वितर्क संबंध, [द्वंद्वात्मक ग्राफ](./dialectical-graph) में किनारा प्रकार
होते हैं, जो यह एन्कोड करते हैं कि ज्ञानमीमांसात्मक वस्तुएँ एक-दूसरे से कैसे
संबंधित हैं। यही वे तत्व हैं जो किसी द्वंद्वात्मक ग्राफ को विषय-समानता ग्राफ से
अलग बनाते हैं।

## चुनौती संबंध

- [Attack](./attack) — किसी दावे की सत्यता पर सीधी चुनौती
- [Undercut](./undercut) — विधि, मान्यता , या परिभाषा पर चुनौती
- [Counterexample](./counterexample) — ऐसा उदाहरण/मामला जो दावे को तोड़ देता है
- `contradicts` — स्पष्ट असंगतता

## समर्थन संबंध

- `supports` — प्रमाण या तर्क जो किसी दावे को मजबूत करता है
- `cites` — किसी [source](./source) को स्पष्ट श्रेय/उद्धरण
- `replicates` / `fails_to_replicate` — पुनरुत्पादन स्थिति

## परिष्करण संबंध

- `refines` — दावे को संकुचित या स्पष्ट करता है
- `generalizes` / `specializes` — दायरा समायोजन
- `depends_on` — दावों को उनकी [assumptions](./assumption) से जोड़ता है
- `defines` — शब्दों को उनकी परिभाषाओं से जोड़ता है (समय के साथ
  [Definition Drift](./definition-drift) के माध्यम से ट्रैक किया गया)

पूर्ण विनिर्देशन के लिए [Dialectical Graph Edges](./dialectical-graph-edges)
देखें, और यह समझने के लिए कि प्रकारित किनारे क्यों महत्वपूर्ण हैं,
[Relation Typing vs Similarity](./relation-typing-vs-similarity) देखें।
