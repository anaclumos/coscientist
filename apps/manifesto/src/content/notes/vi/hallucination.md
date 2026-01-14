---
title: Ảo giác
description: Các đầu ra của AI có vẻ hợp lý nhưng sai sự thật hoặc bịa đặt
---

Ảo giác (hallucination) là một đầu ra của AI trông tự tin và mạch lạc khi đọc, nhưng lại chứa lỗi तथ्य, thông tin bịa đặt, hoặc các trích dẫn/tài liệu tham khảo được “sáng tác”. Mối nguy không nằm ở sự ngẫu nhiên: mà ở tính hợp lý. Văn bản ảo giác thường vượt qua kiểm tra sơ sài vì nó tuân theo các mẫu thống kê của văn xuôi đúng sự thật.

Ảo giác là một triệu chứng của cách [LLMs](./llm) hoạt động: chúng dự đoán các token tiếp theo có khả năng cao, chứ không phải các token “đúng”. Khi dữ liệu huấn luyện về một chủ đề thưa thớt hoặc mâu thuẫn, mô hình sẽ nội suy (interpolate), và kết quả có thể sai một cách trơn tru. Đây là lý do [bẫy trôi chảy](./fluency-trap) nguy hiểm đến vậy: sự trôi chảy không đồng nghĩa với độ chính xác.

Trong [Nhà đồng khoa học](./coscientist), rủi ro ảo giác được quản lý thông qua [lớp giao thức nhận thức luận](./epistemic-protocol-layer): [tính truy xuất nguồn gốc](./traceability) yêu cầu các khẳng định phải liên kết với [đoạn bằng chứng](./evidence-span), [tìm kiếm ưu tiên phản biện](./rebuttal-first-search) “stress-test” trước khi chấp nhận, và [Giao thức Đồng thuận Đa AI](./multi-ai-consensus-protocol) sử dụng sự bất đồng giữa các mô hình như một tín hiệu để kiểm tra kỹ hơn.