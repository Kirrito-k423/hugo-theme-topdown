---
title: "Uncovering the performance bottleneck of modern HPC processor with static code analyzer: a case study on Kunpeng 920"
FirstAuthor:
- Shaojie Tan
- Qingcai Jiang
OtherAuthors:
- Zhenwei Cao
- Xiaoyu Hao
- Junshi Chen
- Hong An
ConfJournal: "CCF Transactions on High Performance Computing"
ConfJournalAbbr: THPC
IsAConference: "no" # 会议填yes，期刊写 no
CCFLevel: "C" 
JournalLabel: "CCF C Journal"
Year: 2023
Abstract: "The performance of high-performance computing (HPC) and other real-world applications is becoming unpredictable as the micro-architecture of the modern central processing unit (CPU) turns to be more and more complex. As a consequence, predicting the execution time of a code snippet is notoriously difficult. Basic block throughput predictor is a crucial feature of the static code analyzer. It offers a ubiquitous method for predicting the execution time of a basic block. In this article, we build a workflow to faithfully run, collect and analyze basic blocks from real-world applications. Several static code analyzers are introduced, compared, and optimized to show which one performs better on accuracy and other metrics on a Kunpeng 920 processor. Through extensive experiments, we achieve state-of-the-art 86.7% accuracy in predicting the throughput of all basic blocks. Moreover, we showcase the potential …"
KeyWords:
- Static Analysis
- High-performance architecture
- performance modeling and simulation
Link: https://link.springer.com/article/10.1007/s42514-023-00160-0 # 官网链接 
PDF:  # pdf文件位置
SLIDE:  # PPT文件位置
video:  # 会议视频
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