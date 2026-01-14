---
title: Khẳng định
description: Một mệnh đề có thể kiểm chứng được lưu trữ như một nút trong đồ thị biện chứng
sourceLocale: en
sourceHash: 11bb739db24b
translatedAt: 2026-01-14
---

Một khẳng định là một mệnh đề có thể kiểm chứng được trích xuất từ văn bản và
được lưu trữ như một đối tượng hạng nhất trong
[Đồ thị Biện chứng](./dialectical-graph). Khẳng định không phải là các câu thô;
chúng là các phát biểu đã được chuẩn hóa với các phụ thuộc tường minh về
[phạm vi](./scope), [giả định](./assumption), và [phương pháp](./method).

Các khẳng định có thể được liên kết tới các [đoạn bằng chứng](./evidence-span)
hỗ trợ chúng, các [phản ví dụ](./counterexample) làm thu hẹp chúng, các
[tấn công](./attack) thách thức chúng, và các [phản bác nền tảng](./undercut)
đặt câu hỏi về cơ sở của chúng. Cấu trúc quan hệ này cho phép tri thức được cập
nhật thông qua phản biện thay vì thay thế.

Mỗi khẳng định có một trạng thái (xem
[Các nút của Đồ thị Biện chứng](./dialectical-graph-nodes)): nó có thể là tạm
thời, đang bị tranh chấp, được hỗ trợ có điều kiện, vững chắc, bị bác bỏ, hoặc
lỗi thời. Trạng thái thay đổi dựa trên loại phản biện, không phải số lượng, và
nó có thể thoái lui nếu cấu trúc hỗ trợ suy yếu.
