---
title: Phân loại Trạng thái Mệnh đề
description: Các trạng thái mà một mệnh đề có thể ở trong một đồ thị biện chứng
sourceLocale: en
sourceHash: e713e484c72f
translatedAt: 2026-01-14
---

Phân loại trạng thái mệnh đề xác định các trạng thái mà một [mệnh đề](./claim)
có thể chiếm trong một [Đồ thị Biện chứng](./dialectical-graph).

## Các Trạng thái Phổ biến

- `tentative` — giai đoạn giả thuyết
- `contested` — đang tranh luận tích cực
- `conditionally supported` — đúng trong các điều kiện được chỉ định
- `robust` — được nâng đỡ bởi nhiều tuyến lập luận độc lập
- `refuted` — bị bác bỏ bởi một [phản ví dụ](./counterexample)
- `obsolete` — mất ý nghĩa do [trôi dạt định nghĩa](./definition-drift) hoặc
  thay đổi phương pháp

Trạng thái không phải là một điểm số độ tin cậy đơn lẻ. Một mệnh đề có thể
robust về mức độ đa dạng bằng chứng nhưng contested về phạm vi; nó có thể
conditionally supported trong ngữ cảnh này và refuted trong ngữ cảnh khác. Trạng
thái đa chiều nắm bắt được sự phức tạp này.

Các chuyển trạng thái được thúc đẩy bởi loại phản biện, không phải số lượng. Chỉ
một [phản ví dụ](./counterexample) duy nhất nhưng có bằng chứng mạnh cũng có thể
chuyển một mệnh đề từ robust sang refuted; nhiều phản đối yếu có thể khiến nó
vẫn contested mà không đi đến phân giải.
