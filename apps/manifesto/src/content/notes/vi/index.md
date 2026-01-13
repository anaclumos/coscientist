---
title: "Token đầu ra ≠ Tri thức"
description: Bản tuyên ngôn và tường thuật cá nhân cho hệ thống Coscientist
---

## Một hành trình cá nhân đi tìm bộ khung xương ngoài nhận thức

Tôi, [Sunghyun Cho](./sunghyun-cho), lớn lên với sự tôn kính dành cho các bộ bách khoa toàn thư và ý niệm về một kho lưu trữ tri thức duy nhất mang tính thẩm quyền. Khi còn nhỏ, tôi nghiền ngẫm _Encyclopedia Galactica_, tưởng tượng một thế giới nơi mọi dự án và nghiên cứu của tôi có thể sống bên trong một tài liệu tham chiếu phổ quát. Về sau, tôi phát hiện bài tiểu luận năm 1945 của Vannevar Bush [As We May Think](./as-we-may-think), mô tả [Memex](./memex): một kho lưu trữ cho phép mỗi cá nhân lưu hồ sơ và truy hồi chúng thông qua các “đường mòn” liên tưởng. Tầm nhìn đó với tôi giống như một bộ khung xương ngoài nhận thức.

Khi tôi bắt đầu sự nghiệp của mình vào thế kỷ 21, internet đã trở thành một phiên bản xấp xỉ thô của một Memex toàn cầu. Nhưng vẫn thiếu một điều gì đó: nó lưu giữ các ghi chép tập thể nhưng không nắm bắt được tâm trí của từng cá nhân, bao gồm bối cảnh cá nhân, những nhận thức đang tiến hóa, và các ý tưởng “sống”. Tôi thử nghiệm các công cụ [second brain](./second-brain) và thực hành [digital garden](./digital-garden), rồi nhận ra chúng quá thủ công và quá mong manh. Tôi muốn một [digital brain](./digital-brain) được “ngoại hóa” có thể phát triển và thích nghi với ma sát tối thiểu.

Nhận ra điều đó đã khởi động [Project Aldehyde](./project-aldehyde), nỗ lực của tôi nhằm xây dựng một “tập siêu” (superset) của Memex cho mục đích cá nhân. Nhiều năm lặp lại và tinh chỉnh đã kết tinh trong bài luận tháng 5/2022 của tôi [Creating Next-gen Digital Brains](./creating-next-gen-digital-brains), lập luận rằng ma sát là kẻ thù của quy trình làm việc tri thức cá nhân: cách tốt nhất để quản một khu vườn không phải là chăm bón liên tục, mà là nuôi dưỡng một [digital jungle](./digital-jungle) tự tổ chức. Bạn nên có thể ném vào tri thức thô và để hệ thống tự sắp xếp, liên kết, rồi làm nó “trồi lên” trở lại.

Đến giữa năm 2022, tôi triển khai một nguyên mẫu dùng pipeline trang tĩnh từ Obsidian lên web và đặt tên là [Extracranial](./extracranial). Đó là một bộ não số cá nhân tự lập chỉ mục nội dung, gợi ý liên kết ngược (backlinks), và cho phép các bài cũ “phân rã” theo thời gian trừ khi được đánh dấu evergreen. Nó giải phóng tôi khỏi việc vi quản (micromanaging) các liên kết và cho phép tôi tập trung vào viết và suy nghĩ.

Tuy nhiên, khi tôi xây dựng wiki cá nhân đó, một vấn đề lớn hơn dần hiện ra: ngay cả một Memex cá nhân hoàn hảo cũng chưa đủ nếu môi trường tri thức (epistemic environment) rộng lớn hơn bị tổn hại. Khi AI tạo sinh (generative AI) trở nên phổ biến khắp nơi, câu hỏi sâu hơn chuyển từ “làm sao tôi lưu trữ tri thức?” sang “làm sao chúng ta ngăn việc kiểm chứng sụp đổ khi AI có thể làm ngập các hệ thống bằng văn bản nghe có vẻ hợp lý?”

## Từ bộ não số đến các giao thức

Các phương tiện truyền thống áp đặt cấu trúc tuyến tính. Nhưng tri thức trong thực tế là một mạng lưới. “Bộ não số thế hệ tiếp theo” là phản hồi của tôi cho khoảng trống đó. Các nguyên tắc của nó rất rõ ràng: nhập liệu không ma sát (ghi lại ý tưởng mà không bị ép vào phân loại), tổ chức tự động (suy luận các kết nối bằng thuật toán), tiến hóa động (để tri thức phân rã hoặc giữ trạng thái evergreen), nội dung đa phương thức (sơ đồ, demo, truyền thông tương tác), và nguồn liền mạch (kết nối ghi chú với bài báo, mã nguồn, tập dữ liệu, và tài liệu tham chiếu). Liên kết thủ công vẫn có thể tinh chỉnh hiểu biết, nhưng nên là tùy chọn. Hệ thống nên làm phần nặng.

Đến năm 2023, tôi vật lộn với những câu hỏi vượt ra ngoài phạm vi ghi chú cá nhân. Nội dung do AI tạo ra đe dọa chính khả năng kiểm chứng. Tôi gọi kịch bản sụp đổ đó là [Encyclopedia Meltdown](./encyclopedia-meltdown): khi AI chủ động viết, [responsibility line](./responsibility-line) biến mất và sai sót tự khuếch đại qua các liên kết.

Biện pháp đối kháng là một [epistemic protocol layer](./epistemic-protocol-layer), một tầng hiến định cho các hệ thống tri thức. Các cam kết cốt lõi của nó là chủ quyền (thẩm quyền tri thức vẫn thuộc về con người [Galarch](./galarch)), khả năng truy vết (mọi mệnh đề đều giữ một responsibility line), và thẩm định “ưu tiên phản biện” (rebuttal-first) (dùng [rebuttal-first search](./rebuttal-first-search) để tìm bằng chứng phản chứng trước khi chấp nhận). Tầng này cũng xử lý các áp lực như [model collapse](./model-collapse) và làn lũ [AI slop](./ai-slop) bằng cách cưỡng chế xuất xứ (provenance) rõ ràng và tiếp nhận theo mô hình “không tin cậy mặc định” (zero-trust).

## ScienceOps và quy mô thể chế

Hạ tầng tri thức cá nhân giải quyết sự tiện lợi, chứ không giải quyết quy mô thể chế. Bước nhảy tiếp theo là [ScienceOps](./scienceops): áp dụng kỷ luật vận hành phần mềm (software-operations) vào nghiên cứu khoa học thông qua thí nghiệm tái lập được, tự động hóa, và lặp nhanh, đồng thời giới thiệu vai trò [natural science engineer](./natural-science-engineer). Khi thí nghiệm trở thành các pipeline chứ không phải những lần làm một-off, vòng lặp giữa giả thuyết và kiểm chứng có thể co lại đáng kể.

Mục tiêu lớn hơn là một “GitHub cho các nhà khoa học” coi thí nghiệm như mã: có phiên bản, lặp lại được, và kiểm toán được. Đó là bối cảnh vận hành đòi hỏi một động cơ nhận thức như [Coscientist](./coscientist).

## Coscientist: Kiến trúc, tác nhân, và bản thiết kế

[Coscientist](./coscientist) là hệ thống tổng hợp các sợi chỉ này. Đây là một kiến trúc LLM đa tác tử (multi-agent) được thiết kế để hoạt động như một cộng tác viên nghiên cứu thay vì một cỗ máy trả lời đơn lẻ. Vòng lặp nội bộ của nó tách riêng đề xuất, phê bình, xếp hạng, và tinh luyện, với một tầng meta-review kiểm tra tính mạch lạc, khả năng truy vết, và độ bất định.

Ở tầng tri thức, nó duy trì một [Dialectical Graph](./dialectical-graph) lưu các mệnh đề và quan hệ thay vì văn bản thô. Đầu ra tường thuật được coi như một phép chiếu (projection) của tầng suy luận, vì vậy mọi phát biểu đều có thể lần ngược về nguồn, các đoạn bằng chứng (evidence spans), và các quan hệ được biểu diễn tường minh. Sự tách bạch này tránh chế độ thất bại “trơn tru nhưng không kiểm chứng được” của kiểu sinh văn bản thông thường.

An toàn AI truyền thống thường đóng khung vấn đề như alignment. Tôi nhấn mạnh [cognitive agency preservation](./cognitive-agency-preservation): AI nên củng cố năng lực phán đoán của con người, không thay thế nó. Trên thực tế, điều đó nghĩa là giữ người dùng ở vai trò người kiểm chứng: “trình bày cách làm”, làm nổi bật độ bất định, đưa ra các giả thuyết thay thế, và đặt việc truy tìm phản biện làm mặc định.

Coscientist được định hướng như một bản thiết kế cho một hạ tầng tri thức mới: không ma sát nhưng có chủ quyền, nhanh nhưng có trách nhiệm giải trình, mạnh mẽ mà không bào mòn năng lực tác nhân (agency). Nó nhắm vào ba chế độ thất bại: sự “thoái hóa trí não” ở cấp thể chế (được giảm thiểu bằng đối chiếu chéo và phản biện đối kháng), sụp đổ kiểm chứng (được giảm thiểu bằng truy vết và tìm phản biện tự động), và mất agency (được giảm thiểu bằng minh bạch và quyền phủ quyết của con người).

Tầm nhìn dài hạn là một mạng liên kết (federated) gồm các phiên bản Coscientist ở cấp cá nhân, tổ chức, và công chúng, trao đổi tri thức đã được thẩm định trong khi vẫn bảo toàn chủ quyền cục bộ. Nếu bạn muốn một lộ trình đọc, hãy bắt đầu với [Creating Next-gen Digital Brains](./creating-next-gen-digital-brains) (công cụ cá nhân), rồi [Encyclopedia Meltdown](./encyclopedia-meltdown) và [epistemic protocol layer](./epistemic-protocol-layer) (chế độ thất bại và phòng tuyến), rồi [Dialectical Graph](./dialectical-graph) và [knowledge synthesis](./knowledge-synthesis) (kiến trúc).