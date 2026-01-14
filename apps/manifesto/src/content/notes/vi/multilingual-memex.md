---
title: Memex đa ngôn ngữ
description: Một hệ thống tri thức cá nhân có nhận biết ngôn ngữ với hỗ trợ dịch tự động
---

Memex đa ngôn ngữ là một hệ thống tri thức cá nhân hỗ trợ nội dung bằng nhiều ngôn ngữ một cách “tự nhiên”, với khả năng tự động phát hiện ngôn ngữ, dịch thuật và liên kết xuyên ngôn ngữ. Nó mở rộng tầm nhìn [Memex](./memex) nguyên bản của [Vannevar Bush](./vannevar-bush) sang một thế giới nơi tri thức không bị ràng buộc bởi biên giới ngôn ngữ.

[Extracranial](./extracranial) của [Sunghyun Cho](./sunghyun-cho) là một hiện thực hóa của khái niệm này. Nó bao gồm phát hiện ngôn ngữ tự động, phân phối theo miền địa phương (locale) bằng thẻ hreflang, và khả năng viết bằng một ngôn ngữ trong khi để các hệ thống dịch xử lý việc phân phối sang các ngôn ngữ khác.

Hệ quả về mặt kiến trúc là rất đáng kể. Các thành phần giao diện, tìm kiếm và liên kết đều phải tính đến ngôn ngữ:

- Một truy vấn bằng tiếng Hàn cần tìm được nội dung liên quan dù nội dung đó ban đầu được viết bằng tiếng Hàn hay được dịch từ tiếng Anh.
- Liên kết ngược (backlinks) phải hoạt động xuyên ngôn ngữ.
- [Đường trách nhiệm](./responsibility-line) phải theo dõi không chỉ ai đã khẳng định điều gì, mà còn khẳng định bằng ngôn ngữ nào và thông qua phương pháp dịch nào.

Đó là lý do [Extracranial](./extracranial) xem đóng góp của cộng đồng qua GitHub như một cách để tinh chỉnh bản dịch: dịch máy giúp nội dung đa ngôn ngữ trở nên khả thi, nhưng cần con người rà soát để duy trì [độ trung thực của bản dịch](./translation-fidelity). Memex đa ngôn ngữ không phải là một bài toán đã được giải, mà là một sự cộng tác liên tục giữa các hệ thống tự động và năng lực phán đoán của con người.

Đối với [Nhà đồng khoa học](./coscientist), Memex đa ngôn ngữ trở thành [Đồ thị biện chứng](./dialectical-graph) đa ngôn ngữ: một cấu trúc lưu trữ [các khẳng định](./claim), [các đoạn bằng chứng](./evidence-span), và các quan hệ từ bất kỳ ngôn ngữ nào, coi ngôn ngữ như siêu dữ liệu (metadata) thay vì một ranh giới nền tảng.