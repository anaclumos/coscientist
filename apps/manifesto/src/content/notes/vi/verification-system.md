---
title: Hệ thống xác minh
description: Các cơ chế để kiểm tra các khẳng định dựa trên bằng chứng và phản bằng chứng
sourceLocale: en
sourceHash: 67e81c4c10c1
translatedAt: 2026-01-14
---

Hệ thống xác minh là tập hợp các cơ chế mà [Nhà đồng khoa học](./coscientist) sử
dụng để kiểm tra các [khẳng định](./claim) dựa trên bằng chứng, phản bằng chứng
và các lời giải thích thay thế. Đây không phải là một công cụ đơn lẻ mà là một
bộ giao thức và thực hành phối hợp với nhau.

## Các thành phần cốt lõi

- [Xác minh](./verification) — quy trình kiểm tra các khẳng định
- [Tìm kiếm ưu tiên phản bác](./rebuttal-first-search) — tìm phản bằng chứng
  trước khi chấp nhận
- [Giao thức đồng thuận đa AI](./multi-ai-consensus-protocol) — dùng bất đồng
  giữa các mô hình như một tín hiệu
- [Yêu cầu nhất trí](./unanimity-requirement) — chỉ chấp nhận khẳng định khi tất
  cả người thẩm định đều đồng ý
- [Ranh giới trách nhiệm](./responsibility-line) — truy vết ai đã khẳng định
  điều gì
- [Phản ví dụ](./counterexample) — các trường hợp làm "gãy" khẳng định
- [Nạp dữ liệu theo mô hình không tin cậy mặc định ](./zero-trust-ingestion) —
  yêu cầu nguồn gốc trước khi trao quyền uy

Hệ thống được thiết kế để đảm bảo
[sửa sai rẻ hơn lệch hướng](./correction-vs-drift) và hỗ trợ
[độ khó mong muốn](./desirable-difficulty-in-verification) để
[Người vận hành](./operator) luôn duy trì sự tham gia.
