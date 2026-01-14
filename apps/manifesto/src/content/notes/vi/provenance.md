---
title: Nguồn gốc 
description: Nguồn gốc và chuỗi lưu ký  cho các khẳng định và bằng chứng
---

Nguồn gốc  là xuất xứ và chuỗi lưu ký của một khẳng định hoặc một mẩu bằng chứng: ai đưa ra, khi nào, dựa trên cơ sở nào, và nó đã đi đến dạng hiện tại bằng cách nào. Không có provenance, bạn không thể phân biệt nguồn sơ cấp với các bản tóm lược được đóng gói lại, và bạn cũng không thể biết liệu sự đồng thuận bề ngoài có phản ánh bằng chứng độc lập hay chỉ là trích dẫn vòng tròn.

Trong một [Đồ thị Biện chứng](./dialectical-graph), provenance được mã hoá thông qua các nút [nguồn](./source), các [khoảng bằng chứng](./evidence-span), và các cạnh `cites` khiến việc ghi công trở nên tường minh thay vì chỉ được ngụ ý qua văn xuôi. Điều này ngăn chặn vấn đề cắt cụt đoạn trích vốn phổ biến trong [RAG](./rag-limitations), nơi việc trích dẫn làm rơi mất ngữ cảnh và [ranh giới trách nhiệm](./responsibility-line) biến mất.

Provenance là điều kiện tiên quyết cho [khả năng truy vết](./traceability): nếu bạn không thể truy vết một khẳng định về nguồn gốc của nó, bạn sẽ không thể sửa nó khi thế giới thay đổi.
