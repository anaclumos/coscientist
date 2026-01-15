---
title: Phản ví dụ
description: Một trường hợp phá vỡ hoặc thu hẹp một khẳng định
sourceLocale: en
sourceHash: 6a23b6dcab90
translatedAt: 2026-01-14
---

Phản ví dụ là một trường hợp vi phạm dự đoán của một [khẳng định](./claim), buộc
phải либо bác bỏ hoặc thu hẹp [phạm vi](./scope). Đây là một dạng cụ thể của
[tấn công](./attack): không phải là một lập luận rằng khẳng định sai nói chung,
mà là bằng chứng rằng nó thất bại trong một tình huống cụ thể.

Phản ví dụ có sức mạnh nhận thức luận vì chúng cụ thể. Một phản ví dụ duy nhất
được ghi chép đầy đủ có thể lấn át nhiều trường hợp xác nhận, đặc biệt nếu khẳng
định được nêu dưới dạng phổ quát. Vì vậy,
[tìm kiếm ưu tiên phản bác](./rebuttal-first-search) và
[tìm kiếm ưu tiên phản ví dụ](./counterexample-first-search) ưu tiên tìm chúng
sớm.

Trong một [Đồ thị Biện chứng](./dialectical-graph), phản ví dụ là các nút được
nối với các khẳng định thông qua một cạnh `attacks`. Chúng mang theo
[đoạn bằng chứng](./evidence-span), [phạm vi](./scope), và [nguồn](./source)
riêng, để bản thân cuộc tấn công cũng có thể được xem xét kỹ lưỡng.
