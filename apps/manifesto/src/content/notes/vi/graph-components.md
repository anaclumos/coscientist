---
title: Các thành phần của đồ thị
description: Các loại nút và cạnh tạo nên một đồ thị biện chứng
sourceLocale: en
sourceHash: eb17714b277c
translatedAt: 2026-01-14
---

Các thành phần đồ thị là những khối xây dựng của một
[Đồ thị Biện chứng](./dialectical-graph): các loại nút biểu diễn các đối tượng
nhận thức luận và các loại cạnh biểu diễn các quan hệ giữa chúng.

**Các loại nút** (xem
[Các nút của Đồ thị Biện chứng](./dialectical-graph-nodes)):

- [Mệnh đề](./claim) — các phát biểu có thể kiểm chứng
- [Đoạn bằng chứng](./evidence-span) — văn bản được trích dẫn nguyên văn chính
  xác từ nguồn
- [Phạm vi](./scope) — các điều kiện áp dụng
- [Giả định](./assumption) — các tiền đề ngầm
- [Phương pháp](./method) — các quy trình tạo ra bằng chứng
- [Nguồn](./source) — các mốc neo về xuất xứ
- [Phản ví dụ](./counterexample) — các trường hợp làm sai mệnh đề
- [Nút vấn đề](./issue-node) — các cụm mệnh đề xung đột

**Các loại cạnh** (xem
[Các cạnh của Đồ thị Biện chứng](./dialectical-graph-edges)):

- [Tấn công](./attack) — thách thức trực tiếp đối với tính đúng
- [Làm suy yếu cơ sở](./undercut) — thách thức đối với căn cứ
- `supports`, `refines`, `generalizes`, `specializes`
- `cites`, `defines`, `measures`, `replicates`, `fails_to_replicate`
- [Tranh chấp](./contention) — các dấu hiệu xung đột có cấu trúc
