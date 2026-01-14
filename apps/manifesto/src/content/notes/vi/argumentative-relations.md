---
title: Quan hệ lập luận
description: "Các loại cạnh trong một đồ thị biện chứng được tổ chức theo chức năng"
sourceLocale: en
sourceHash: a48d629230dc
translatedAt: 2026-01-14
---

Các quan hệ lập luận là các loại cạnh trong một
[Đồ thị Biện chứng](./dialectical-graph) (xem thêm [Các Thành phần của Đồ thị](./graph-components)) mã hóa cách các đối tượng tri thức liên
hệ với nhau. Chúng là yếu tố phân biệt một đồ thị biện chứng với một đồ thị
tương đồng theo chủ đề.

## Quan hệ Thách thức

- [Tấn công](./attack) — thách thức trực tiếp tính đúng-sai của một mệnh đề
- [Bác bỏ cơ sở](./undercut) — thách thức phương pháp, giả định, hoặc định nghĩa
- [Phản ví dụ](./counterexample) — một trường hợp làm mệnh đề bị phá vỡ
- `contradicts` — không tương thích một cách tường minh

## Quan hệ Hỗ trợ

- `supports` — bằng chứng hoặc lập luận giúp củng cố một mệnh đề
- `cites` — quy dẫn/tín dẫn rõ ràng tới một [nguồn](./source)
- `replicates` / `fails_to_replicate` — trạng thái tái lập

## Quan hệ Tinh chỉnh

- `refines` — thu hẹp hoặc làm rõ một mệnh đề
- `generalizes` / `specializes` — điều chỉnh phạm vi
- `depends_on` — liên kết các mệnh đề với các [giả định](./assumption) của chúng
- `defines` — kết nối các thuật ngữ với định nghĩa của chúng

Xem [Các Cạnh của Đồ thị Biện chứng](./dialectical-graph-edges) để biết đặc tả
đầy đủ và [Phân loại Quan hệ so với Tương đồng](./relation-typing-vs-similarity)
để hiểu vì sao các cạnh được phân loại lại quan trọng.