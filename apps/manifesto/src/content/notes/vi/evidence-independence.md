---
title: Tính độc lập của bằng chứng
description: Nguyên tắc rằng sự đồng thuận do thiên lệch huấn luyện chung tạo ra không phải là đồng thuận thực sự
---

Tính độc lập của bằng chứng là nguyên tắc cho rằng sự đồng ý bề ngoài giữa các mô hình AI không cấu thành đồng thuận đích thực nếu sự đồng ý đó bắt nguồn từ dữ liệu huấn luyện chung thay vì bằng chứng độc lập. Các mô hình được huấn luyện trên những tập dữ liệu có phần chồng lấp có thể hội tụ vào cùng một sai lầm, khiến "đồng thuận" chỉ là sự phản ánh của thiên lệch chứ không phải sự thật.

Đây là một hạn chế đã biết của [Giao thức Đồng thuận Đa AI](./multi-ai-consensus-protocol). Giao thức xem sự bất đồng giữa các mô hình là một dấu hiệu cảnh báo, nhưng sự đồng ý chỉ cung cấp mức đảm bảo yếu vì các mô hình không phải là những quan sát viên độc lập.

[Thẩm tra](./verification) thực sự đòi hỏi phải truy vết các khẳng định về các [nguồn](./source) độc lập và các [đoạn bằng chứng](./evidence-span) nằm ngoài phân phối huấn luyện. [Người vận hành](./operator) phải luôn hoài nghi trước sự đồng thuận của AI và tìm kiếm xác nhận từ bên ngoài đối với các khẳng định có mức độ hệ trọng cao.
