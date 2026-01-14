---
title: RAG
description:
  Retrieval-Augmented Generation, một kỹ thuật giúp "neo" đầu ra AI vào các tài
  liệu được truy xuất
sourceLocale: en
sourceHash: a4f12721cec3
translatedAt: 2026-01-14
---

RAG là một kỹ thuật cải thiện độ chính xác của đầu ra AI bằng cách truy xuất các
tài liệu liên quan từ một kho văn bản và dùng chúng làm ngữ cảnh cho việc sinh
nội dung. Thay vì chỉ dựa vào các tham số đã học trong quá trình huấn luyện, mô
hình có thể tham chiếu các nguồn bên ngoài, giảm [ảo giác](./hallucination) và
cho phép sử dụng tri thức không có trong dữ liệu huấn luyện.

Quy trình RAG tiêu chuẩn hoạt động như sau: một truy vấn được nhúng vào không
gian vector, các tài liệu tương tự được truy xuất dựa trên độ tương đồng vector,
và phần văn bản được truy xuất sẽ được cung cấp cho một [LLM](./llm) làm ngữ
cảnh để tạo ra câu trả lời. Cách tiếp cận này đã trở nên phổ biến cho các tác vụ
hỏi-đáp, tìm kiếm, và các nhiệm vụ đòi hỏi nhiều tri thức.

Tuy nhiên, RAG có những hạn chế mang tính cấu trúc đối với việc tạo lập tri
thức. Nó truy xuất các đoạn văn bản dựa trên độ tương đồng, chứ không dựa trên
quan hệ lập luận. Nó không thể phân biệt ủng hộ với phản bác, bằng chứng với ý
kiến, hay nguồn sơ cấp với việc diễn giải lại. Khi các nguồn mâu thuẫn, RAG có
xu hướng hòa trộn chúng thành các bản tóm tắt trơn tru thay vì làm lộ rõ
[tranh chấp](./contention). Xem [Các hạn chế của RAG](./rag-limitations) để đọc
phê bình đầy đủ.

[Nhà đồng khoa học](./coscientist) vượt ra ngoài RAG bằng cách duy trì một
[Đồ thị Biện chứng](./dialectical-graph) lưu trữ các [mệnh đề](./claim), các
[đoạn bằng chứng](./evidence-span), và các quan hệ được phân loại theo kiểu.
Việc truy xuất trở thành "điều gì liên quan đến mệnh đề này?" thay vì "điều gì
tương tự với truy vấn này?"
