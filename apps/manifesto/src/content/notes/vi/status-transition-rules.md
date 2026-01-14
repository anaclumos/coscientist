---
title: Quy tắc chuyển đổi trạng thái
description:
  Điều gì kích hoạt việc di chuyển giữa các trạng thái của khẳng định trong một
  đồ thị biện chứng
sourceLocale: en
sourceHash: bae87c3f8772
translatedAt: 2026-01-14
---

Các quy tắc chuyển đổi trạng thái xác định điều gì khiến một
[khẳng định](./claim) chuyển từ trạng thái này sang trạng thái khác trong
[phân loại trạng thái khẳng định](./claim-status-taxonomy). Việc chuyển đổi phụ
thuộc vào loại thách thức, không phải số lượng: một
[phản ví dụ](./counterexample) mang tính quyết định quan trọng hơn nhiều phản
đối không thuyết phục.

Các chuyển đổi chính bao gồm: tạm thời → bị tranh chấp (khi một
[tấn công](./attack) được ghi nhận), bị tranh chấp → được hỗ trợ có điều kiện
(khi cuộc tấn công được trả lời bằng cách thu hẹp [phạm vi](./scope) hoặc làm rõ
[giả định](./assumption)), được hỗ trợ có điều kiện → vững chắc (khi nhiều lộ
trình độc lập cùng xác nhận), vững chắc → bị bác bỏ (khi một phản ví dụ vượt qua
được sự xem xét kỹ lưỡng), và bất kỳ trạng thái nào → lỗi thời (khi
[trôi dạt định nghĩa](./definition-drift) cắt đứt ý nghĩa của khẳng định).

Các quy tắc này là một phần của
[lớp giao thức nhận thức](./epistemic-protocol-layer) trong
[Nhà đồng khoa học](./coscientist). Chúng khiến việc cập nhật tri thức trở nên
tường minh và có thể kiểm toán, thay vì ẩn ngầm trong văn xuôi.
