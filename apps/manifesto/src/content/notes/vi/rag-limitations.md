---
title: Các hạn chế của RAG
description: Vì sao truy xuất–tăng cường sinh (retrieval-augmented generation) tiêu chuẩn không thể tạo ra khám phá thực sự
---

Retrieval-augmented generation (RAG) cải thiện tính đúng sự thật bằng cách truy xuất các tài liệu liên quan, nhưng RAG tiêu chuẩn vẫn có những hạn chế mang tính cấu trúc đối với việc tạo lập tri thức. Nó truy xuất các mẩu văn bản và tạo ra văn xuôi trôi chảy; nhưng nó không biểu diễn được những đối tượng bạn cần cho khám phá: các khẳng định, phản khẳng định, định nghĩa, phương pháp, và các quan hệ ràng buộc chúng lại với nhau.

Một dạng thất bại là thiên lệch định lượng. Nếu nhiều nguồn lặp lại một khẳng định và chỉ một số ít chứa các bác bỏ hoặc phản ví dụ có tính quyết định, thì truy xuất dựa trên độ tương tự (similarity-based retrieval) có xu hướng khuếch đại phe đa số và làm “mượt” đi các điểm ngoặt. Một phản ví dụ đơn lẻ hoặc một lần sửa lại định nghĩa có thể mang trọng lượng nhận thức luận (epistemic weight) lớn hơn cả trăm lần lặp lại, nhưng nó không nhất thiết “tương tự hơn”.

Một hạn chế khác là thiếu các quan hệ tường minh. RAG có thể truy xuất các đoạn trích từ nghiên cứu A và nghiên cứu B, nhưng thường nó không thể biểu diễn rằng B bác bỏ A, làm suy yếu phương pháp của A, hoặc thu hẹp phạm vi của A; nó chỉ đặt các mẩu trích cạnh nhau. Điều đó thay thế chất lượng của căn cứ bằng số lượng văn bản.

Cuối cùng, nguồn gốc trích dẫn (provenance) trở nên mong manh khi bị cắt ngắn. Khi một đoạn trích bị lược bỏ phần quy thuộc (“B báo cáo rằng A đã khẳng định…”) và chỉ giữ lại kết luận (“X có hiệu quả”), mô hình có thể âm thầm viết lại đường trách nhiệm. Trích dẫn biến thành “cảm giác”, và “ai đã khẳng định điều gì” trở nên khó tái dựng.

Vì thế, RAG tiêu chuẩn gặp khó khăn trong việc cập nhật và tổng hợp tri thức khi có [tranh chấp](./contention) thực sự. Một hướng thay thế là chuyển từ “nó giống đến mức nào” sang “nó có quan hệ gì”, như trong một [Đồ thị Biện chứng](./dialectical-graph) lưu trữ các khẳng định và các loại quan hệ, đồng thời ưu tiên mâu thuẫn và phản ví dụ thay vì sự đồng thuận.