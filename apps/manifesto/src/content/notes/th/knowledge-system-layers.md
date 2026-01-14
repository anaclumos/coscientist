---
title: ชั้นของระบบความรู้
description: ชั้นเชิงสถาปัตยกรรมของ Coscientist
---

ชั้นของระบบความรู้ (Knowledge system layers) คือองค์ประกอบเชิงสถาปัตยกรรมที่แยกจากกันซึ่งประกอบกันเป็น [นักวิทยาศาสตร์ร่วม](./coscientist) การแยกชั้นเหล่านี้ช่วยให้ความกังวล (concerns) ที่แตกต่างกันสามารถพัฒนาไปอย่างอิสระจากกันได้

## ชั้นข้อมูล (Data Layer)

- [ช่วงหลักฐาน (Evidence Span)](./evidence-span) — ข้อความอ้างอิงดิบที่เก็บรักษาแบบคำต่อคำ
- [แหล่งที่มา (Source)](./source) — จุดยึดที่มาของข้อมูลเพื่อการตรวจสอบย้อนกลับ (traceability)

## ชั้นการอนุมาน (Inference Layer)

- [ชั้นการอนุมาน (Inference Layer)](./inference-layer) — เครือข่ายที่มีชีวิตและพัฒนาอยู่เสมอของข้ออ้าง (claims) และความสัมพันธ์
- [ข้ออ้าง (Claim)](./claim), [การโต้แย้ง (Attack)](./attack), [การตัดทอนฐาน (Undercut)](./undercut) และ [ความสัมพันธ์เชิงโต้แย้งอื่น ๆ (Argumentative Relations)](./argumentative-relations)

## ชั้นเรื่องเล่า (Narrative Layer)

- [ชั้นเรื่องเล่า (Narrative Layer)](./narrative-layer) — การฉายภาพของกราฟในรูปแบบที่มนุษย์อ่านเข้าใจได้
- เอกสารในฐานะสแนปช็อตที่มีการประทับเวลา ไม่ใช่ความจริงฐานราก (ground truth)

## ชั้นโปรโตคอล (Protocol Layer)

- [ชั้นโปรโตคอลเชิงญาณวิทยา (Epistemic Protocol Layer)](./epistemic-protocol-layer) — กฎว่าด้วยวิธีที่ข้ออ้างเข้าสู่ระบบและได้รับอำนาจความน่าเชื่อถือ
- [รัฐธรรมนูญความรู้ (Knowledge Constitution)](./knowledge-constitution) — เอกสารกำกับดูแลการดำเนินงานด้านความรู้

## หลักการแยกส่วน (Separation Principle)

- [การแยกสามส่วน (Triple Separation)](./triple-separation) — แยกข้อความดิบ ข้ออ้างที่ทำให้เป็นมาตรฐาน (normalized) และความสัมพันธ์ออกจากกันให้ชัดเจน
