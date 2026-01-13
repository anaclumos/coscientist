---
title: 知识综合
description: 在辩证式知识系统中，综合与求平均有何不同
---

知识综合（Knowledge synthesis）发生在检索之后：当你必须让彼此不兼容的来源变得可比较时。它不是求平均。它是在对齐前提、定义与范围（scope），让分歧从“噪声”变成明确的对象。

标准的 [RAG](./rag-limitations) 擅长检索、不擅长综合，因为它没有一个名为 [contention](./contention) 的内部对象。在 [辩证图（Dialectical Graph）](./dialectical-graph) 中，contention 是一等公民（first-class），因此系统可以把不兼容性分解为其成因：定义差异、抽样差异、方法差异、范围差异，或由时间驱动的 [非平稳性（nonstationarity）](./nonstationarity)。

因此，解决（resolution）不是一句话。它是一张分叉地图：如果同一术语在不同定义下得出不同结论，系统会先在定义层记录这种分叉，再将其视为“结论矛盾”。[议题节点（Issue nodes）](./dialectical-graph-nodes) 会把“什么与什么冲突”打包起来，并记录在何种条件下该议题可以被解决。

目标是一张“矛盾地图”加上明确的解决条件，这样未来的工作就能通过重排而非重写来更新知识。这也是为什么 [Coscientist](./coscientist) 中的沉思型 AI（contemplation AI）旨在让文档相互碰撞：产生议题簇、精炼后的条件、结构化反驳，以及用于比较的显式坐标系。