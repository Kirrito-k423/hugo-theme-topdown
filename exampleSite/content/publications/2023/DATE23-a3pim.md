---
title: "A3PIM: An Automated, Analytic and Accurate
Processing-in-Memory Offloader"
FirstAuthor:
- Qingcai Jiang
- Shaojie Tan
OtherAuthors:
- Junshi Chen
- Hong An
ConfJournal: "Design, Automation and Test in Europe Conference"
ConfJournalAbbr: DATE
IsAConference: "yes" # 会议填yes，期刊写 no
CCFLevel: "B" 
Year: 2023
Abstract: "A3PIM1: an Automated,
Analytic and Accurate Processing-in-Memory offloader. We sys-
tematically consider the cross-segment data movement and the
intrinsic memory access pattern of each code segment via static
code analyzer"
KeyWords:
- Processing-in-Memory
- Static Analysis
- Workload Offloading
Link: https://ieeexplore.ieee.org/Xplore/home.jsp # 官网链接 
PDF: https://ieeexplore.ieee.org/Xplore/home.jsp # pdf文件位置
SLIDE: https://ieeexplore.ieee.org/Xplore/home.jsp # PPT文件位置
video: https://bilibili.com # 会议视频
---

The performance gap between memory and proces-
sor has grown rapidly. Consequently, the energy and wall-clock
time costs associated with moving data between the CPU and
main memory predominate the overall computational cost. The
Processing-in-Memory (PIM) paradigm emerges as a promising
architecture that mitigates the need for extensive data movements
by strategically positioning computing units proximate to the
memory. Despite the abundant efforts devoted to building a
robust and highly-available PIM system, identifying PIM-friendly
segments of applications poses significant challenges due to the
lack of a comprehensive tool to evaluate the intrinsic memory
access pattern of the segment.

To tackle this challenge, we propose A3PIM1: an Automated,
Analytic and Accurate Processing-in-Memory offloader. We sys-
tematically consider the cross-segment data movement and the
intrinsic memory access pattern of each code segment via static
code analyzer. We evaluate A3PIM across a wide range of real-
world workloads including GAP and PrIM benchmarks and
achieve an average speedup of 2.63x and 4.45x (up to 7.14x and
10.64x) when compared to CPU-only and PIM-only executions,
respectively.