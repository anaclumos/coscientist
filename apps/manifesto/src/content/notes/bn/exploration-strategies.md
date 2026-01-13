---
title: অনুসন্ধান কৌশলসমূহ
description: ধারাবাহিক জ্ঞান আবিষ্কারের জন্য গ্রাফ ট্র্যাভার্সাল কৌশল
---

[Coscientist](./coscientist)-এর এমন একটি ইঞ্জিন প্রয়োজন যা কেবল তথ্য উদ্ধার (retrieve) করে না; বরং [Dialectical Graph](./dialectical-graph)-এ সক্রিয়ভাবে বিরোধ (contradictions), সীমা-শর্ত (boundary conditions), এবং পদ্ধতি-নির্ভরতা (method dependence) সামনে এনে নতুন পন্থা নিরন্তর খুঁজে বেড়ায়।

একটি কৌশল হলো কাউন্টারউদাহরণ-প্রথম (counterexample-first) অনুসন্ধান: জনপ্রিয়তাকে গুণমানের প্রমাণ হিসেবে কম, এবং ঝুঁকির প্রমাণ হিসেবে বেশি ধরা হয়। কোনো দাবির পুনরাবৃত্তি যত বেশি হয়, ততই কাউন্টারউদাহরণ ও সীমা-শর্ত সংগ্রহ করা মূল্যবান হয়ে ওঠে, কারণ জনপ্রিয় দাবিজনিত দূষণের প্রভাব [Encyclopedia Meltdown](./encyclopedia-meltdown)-এ আরও বড় বিস্তার (blast radius) তৈরি করে।

আরেকটি কৌশল হলো বিরোধের মিনিমাম-কাট (minimum-cut) অনুসন্ধান। দাবি-গুচ্ছ (claim clusters) পরস্পর সংঘর্ষে লিপ্ত হলে, সিস্টেম এমন ন্যূনতম পূর্বধারণা (premises) ও সম্পর্ক (relations)-এর সেট খোঁজে যা সংঘর্ষটি সৃষ্টি করে, তারপর সেই কাঠামোটিকেই চিন্তন (contemplation)-এর লক্ষ্য বানায়। মানব সময় বিনিয়োগ করা হয় [minimum contradiction set](./minimum-contradiction-set)-এ, আর AI সামলায় বিস্তৃত অনুসন্ধান, প্রার্থী (candidate) উৎপাদন, এবং [minimum-cut](./minimum-cut) গণনা।

সংজ্ঞা সরে যাওয়া (definition drift) শনাক্তকরণ অর্থকে একটি চলমান বস্তু হিসেবে ধরে। সময় বা কমিউনিটি ভেদে কোনো শব্দের সংজ্ঞা বদলালে, গ্রাফটি “একই ধারণা” ধরে না নিয়ে পরিবর্তনটিকে স্পষ্টভাবে নথিবদ্ধ করে (দেখুন [definition drift](./definition-drift)); এতে [RAG](./rag-limitations)-এর একটি সাধারণ ব্যর্থতা-রীতির মোকাবিলা হয়।

পদ্ধতি–উপসংহার সংযোজন (method–conclusion coupling) যাচাই দাবিগুলোকে উপসংহারের ভিত্তিতে না গুচ্ছবদ্ধ করে পদ্ধতির ভিত্তিতে করে, কারণ ভিন্ন উপসংহার একই ত্রুটি ভাগ করতে পারে এবং একই উপসংহার একেবারেই ভিন্ন ভিত্তির উপর দাঁড়াতে পারে। একইভাবে, পুনরুৎপাদন পথ বিচ্ছিন্নকরণ (replication path separation) “সংখ্যাগরিষ্ঠ ভোট” এড়িয়ে চলে—এটা জিজ্ঞেস করে সমর্থন কি স্বাধীন পথ (independent paths) থেকে আসছে, নাকি কেবল বারবার পুনর্বিবৃতি (repeated restatements)।

এই আচরণগুলো বিশেষায়িত এজেন্ট হিসেবে বাস্তবায়িত হয়, যার মধ্যে রয়েছে: দাবি স্বাভাবিকীকরণ (claim normalization), লুকানো পূর্বধারণা আহরণ (hidden assumption extraction), সংজ্ঞা-সংঘাত শনাক্তকরণ (definition conflict detection), কাউন্টারউদাহরণ অনুসন্ধান (counterexample search), তর্কাত্মক পথ ন্যূনতমকরণ (argumentative path minimization), পরিসর পুনর্গঠন (scope reconstruction), বিকল্প হাইপোথিসিস উৎপাদন (alternative hypothesis generation), এবং যাচাই কৌশল নকশা (verification strategy design)। এই বিভাজন চিন্তন কাজকে স্পষ্ট ও যাচাইযোগ্য করে তোলে।