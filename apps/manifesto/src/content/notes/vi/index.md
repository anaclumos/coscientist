---
title: "Token đầu ra ≠ Tri thức"
description: Một hành trình cá nhân đi tìm bộ khung xương ngoài nhận thức
---

Tôi, [Sunghyun Cho](./sunghyun-cho), lớn lên với sự tôn kính dành cho các bộ bách khoa toàn thư và ý niệm về một kho tri thức duy nhất, có thẩm quyền tuyệt đối. Khi còn nhỏ, tôi nghiền ngẫm _Encyclopedia Galactica_, tưởng tượng một thế giới nơi mọi dự án và nghiên cứu của tôi có thể sống trong một tài liệu tham chiếu phổ quát. Sau này tôi biết đến bài luận năm 1945 của [Vannevar Bush](./vannevar-bush), [Như chúng ta có thể nghĩ](./as-we-may-think), mô tả [Memex](./memex): một kho lưu trữ cho phép mỗi cá nhân cất giữ hồ sơ và truy hồi chúng qua các "đường mòn" liên tưởng. Tầm nhìn đó đối với tôi giống như một bộ khung xương ngoài cho nhận thức.

Đến khi tôi bắt đầu sự nghiệp của mình trong thế kỷ 21, internet đã trở thành một phiên bản gần đúng của một Memex toàn cầu. Nhưng vẫn thiếu một điều: nó lưu giữ hồ sơ tập thể, song không nắm bắt được tâm trí cá nhân — gồm bối cảnh riêng, những hiểu biết đang tiến hóa, và các ý niệm còn "sống". Tôi thử nghiệm các công cụ [bộ não thứ hai](./second-brain) và thực hành [vườn kỹ thuật số](./digital-garden), nhưng rồi nhận ra chúng quá thủ công và quá mong manh. Tôi muốn một [bộ não kỹ thuật số](./digital-brain) được ngoại hiện hóa, có thể lớn lên và thích nghi với ma sát tối thiểu.

Nhận ra điều đó đã khởi động [Dự án Aldehyde](./project-aldehyde), nỗ lực của tôi nhằm xây dựng một "siêu tập" của Memex cho mục đích cá nhân. Nhiều năm lặp đi lặp lại đã kết tinh thành bài luận tháng 5/2022 của tôi [Tạo bộ não kỹ thuật số thế hệ tiếp theo](./creating-next-gen-digital-brains), lập luận rằng ma sát là kẻ thù của quy trình tri thức cá nhân: cách tốt nhất để quản một khu vườn không phải là chăm tỉa liên tục, mà là nuôi dưỡng một [digital jungle](./digital-jungle) tự tổ chức. Bạn phải có thể ném vào tri thức thô và để hệ thống tự sắp xếp, liên kết, rồi làm nó "trồi lên" trở lại khi cần.

Đến giữa năm 2022, tôi triển khai một nguyên mẫu dùng pipeline trang tĩnh từ Obsidian lên web và đặt tên nó là [Extracranial](./extracranial). Đó là một bộ não số cá nhân tự động lập chỉ mục nội dung, gợi ý backlink, cho phép bài viết cũ "mục rữa" theo thời gian trừ khi được đánh dấu evergreen, và vận hành song ngữ [xuyên qua các Sprachraum](./across-the-sprachraums). Nó giải phóng tôi khỏi việc vi mô hóa các liên kết và cho phép tôi tập trung vào viết và suy nghĩ.

Tuy nhiên, khi tôi xây dựng wiki cá nhân đó, một vấn đề lớn hơn hiện ra: ngay cả một Memex cá nhân hoàn hảo cũng không đủ nếu môi trường nhận thức  rộng hơn bị suy thoái. Khi AI sinh nội dung  trở nên phổ biến khắp nơi, câu hỏi sâu hơn đã chuyển từ "làm sao tôi lưu trữ tri thức?" sang "làm sao ta ngăn việc kiểm chứng sụp đổ khi AI có thể bơm ngập hệ thống bằng văn bản nghe có vẻ hợp lý?"

## Từ Bộ Não Số đến Giao thức

Truyền thông truyền thống áp đặt cấu trúc tuyến tính. Còn tri thức trong thực tế là một mạng lưới. "Bộ não số thế hệ mới" là phản hồi của tôi trước khoảng trống đó. Các nguyên tắc của nó khá rõ ràng:

- đầu vào không ma sát — ghi lại ý tưởng mà không bị ép phân loại 
- tổ chức tự động — suy ra các kết nối bằng thuật toán
- tiến hóa động — để tri thức mục rữa hoặc luôn xanh 
- nội dung đa phương thức — sơ đồ, demo, media tương tác
- nguồn liền mạch — nối ghi chú với bài báo, mã nguồn, bộ dữ liệu, và tài liệu tham khảo

Liên kết thủ công vẫn có thể tinh chỉnh hiểu biết, nhưng nó nên là tùy chọn. Hệ thống phải gánh phần việc nặng.

Đến năm 2023, tôi vật lộn với những câu hỏi vượt khỏi phạm vi ghi chú cá nhân. Nội dung do AI tạo ra đe dọa chính khả năng kiểm chứng. Tôi gọi kịch bản sụp đổ đó là [Sự sụp đổ Bách khoa toàn thư](./encyclopedia-meltdown): khi AI chủ động viết, [responsibility line](./responsibility-line) (đường trách nhiệm) biến mất và sai sót tự khuếch đại qua các liên kết.

Biện pháp đối phó là một [epistemic protocol layer](./epistemic-protocol-layer) (lớp giao thức nhận thức), một lớp "hiến pháp" cho các hệ thống tri thức. Những cam kết cốt lõi của nó là: chủ quyền (thẩm quyền tri thức vẫn thuộc về con người [Người vận hành](./operator)), khả năng truy vết (mỗi khẳng định giữ được đường trách nhiệm), và kiểm định "ưu tiên phản biện" (dùng [tìm kiếm phản bác trước](./rebuttal-first-search) để tìm phản chứng trước khi chấp nhận). Lớp này cũng xử lý các áp lực như [sự sụp đổ mô hình](./model-collapse) và làn sóng [AI slop](./ai-slop) bằng cách cưỡng chế xuất xứ  rõ ràng và cơ chế tiếp nhận theo nguyên tắc zero-trust.

## ScienceOps và Quy mô Thể chế

Hạ tầng tri thức cá nhân giải quyết sự tiện lợi, chứ không giải quyết quy mô thể chế. Bước nhảy tiếp theo là [ScienceOps](./scienceops): áp dụng kỷ luật vận hành phần mềm  vào nghiên cứu khoa học thông qua thí nghiệm tái lập , tự động hóa, và lặp nhanh — đồng thời đưa vào vai trò [natural science engineer](./natural-science-engineer) (kỹ sư khoa học tự nhiên). Khi thí nghiệm trở thành pipeline thay vì các lần làm "một phát", vòng lặp giữa giả thuyết và kiểm chứng có thể rút ngắn đáng kể.

Mục tiêu lớn hơn là một "GitHub cho các nhà khoa học" coi thí nghiệm như mã: được phiên bản hóa, lặp lại được, và có thể kiểm toán. Đó là bối cảnh vận hành đòi hỏi một động cơ nhận thức như [Nhà đồng khoa học](./coscientist).

## Coscientist: Kiến trúc, Tác nhân, và Bản thiết kế

[Nhà đồng khoa học](./coscientist) là hệ thống tổng hợp các mạch ý này. Đây là một kiến trúc đa tác nhân  dựa trên [LLM](./llm), được thiết kế để hoạt động như một cộng tác viên nghiên cứu thay vì một "cỗ máy trả lời" đơn lẻ. Vòng lặp nội bộ của nó tách bạch đề xuất, phê bình, xếp hạng, và tinh chỉnh, kèm một lớp meta-review kiểm tra tính mạch lạc, khả năng truy vết, và độ bất định.

Ở lớp tri thức, nó duy trì một [Đồ thị Biện chứng](./dialectical-graph) lưu các khẳng định và quan hệ thay vì văn bản thô. Đầu ra dạng tường thuật được xem là một phép chiếu của lớp suy luận, để mỗi câu đều có thể lần ngược về nguồn, các đoạn chứng cứ, và quan hệ được nêu rõ. Sự tách bạch này tránh chế độ thất bại "mượt nhưng không kiểm chứng được" của cách sinh văn bản thông thường.

An toàn AI truyền thống thường đóng khung vấn đề như alignment (căn chỉnh). Tôi nhấn mạnh [cognitive agency preservation](./cognitive-agency-preservation) (bảo toàn năng lực chủ động nhận thức): AI nên tăng cường phán đoán của con người, không thay thế nó. Về thực hành, điều đó nghĩa là giữ người dùng trong vai trò người kiểm chứng: trình bày các bước suy luận, làm nổi độ bất định, đưa ra giả thuyết thay thế, và mặc định ưu tiên việc tìm phản biện.

Coscientist được định hướng như một bản thiết kế cho hạ tầng nhận thức mới: không ma sát nhưng có chủ quyền, nhanh nhưng có trách nhiệm giải trình, mạnh mẽ mà không bào mòn năng lực chủ động. Nó nhắm vào ba chế độ thất bại: mục ruỗng não bộ ở cấp thể chế (giảm thiểu bằng đối chiếu chéo và phản biện đối kháng), sụp đổ kiểm chứng (giảm thiểu bằng truy vết và tìm phản biện tự động), và mất tác nhân (giảm thiểu bằng minh bạch và quyền phủ quyết của con người).

Tầm nhìn dài hạn là một mạng liên kết  các phiên bản Coscientist ở quy mô cá nhân, tổ chức, và công cộng, trao đổi tri thức đã được kiểm định trong khi vẫn giữ chủ quyền cục bộ. Nếu bạn muốn một lộ trình đọc, hãy bắt đầu với [Tạo bộ não kỹ thuật số thế hệ tiếp theo](./creating-next-gen-digital-brains) (công cụ cá nhân), rồi [Sự sụp đổ Bách khoa toàn thư](./encyclopedia-meltdown) và [epistemic protocol layer](./epistemic-protocol-layer) (chế độ thất bại và phòng vệ), sau đó [Đồ thị Biện chứng](./dialectical-graph) và [knowledge synthesis](./knowledge-synthesis) (kiến trúc).
