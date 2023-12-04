---
title: "Quantifying Throughput of Basic Blocks on ARM Microarchitectures by Static Code Analyzers: A Case Study on Kunpeng 920"
FirstAuthor:
- Qingcai Jiang
OtherAuthors:
- Shaojie Tan
- Zhenwei Cao
- Xiaoyu Hao
- Junshi Chen
- Hong An
ConfJournal: "Int Conf on High Performance Computing & Communications"
ConfJournalAbbr: HPCC
IsAConference: "yes" # 会议填yes，期刊写 no
CCFLevel: "C" 
Year: 2022
Abstract: "The performance of high-performance computing (HPC) and other real-world applications is becoming unpre-dictable as the micro-architecture of the modern central processing unit (CPU) turns to be more and more complex. As a consequence, predicting the execution time of a code snippet is notoriously difficult. Basic block throughput predictor, also known as static code analyzer, provides a ubiquitous way to predict the execution time of a basic block, which includes assembly code segments without jump-related instructions. In this article, we build a workflow to faithfully run, collect and analyze basic blocks from real-world applications. Several static code analyzers are introduced, compared and optimized to show which one performs better on accuracy and other metrics on Kunpeng 920 processor. Under extensive experiments, we achieve state-of-the-art 86.7% accuracy in predicting the throughput of all basic …"
KeyWords:
- Static Analysis
- High-performance architecture
- performance modeling and simulation
Link: https://ieeexplore.ieee.org/abstract/document/10074638 # 官网链接 
PDF: https://qcjiang.github.io/pdf/static_code_analyzer_hpcc2022.pdf # pdf文件位置
SLIDE:  # PPT文件位置
video: # 会议视频
---

The performance of high-performance computing (HPC) and other real-world applications is becoming unpre-dictable as the micro-architecture of the modern central processing unit (CPU) turns to be more and more complex. As a consequence, predicting the execution time of a code snippet is notoriously difficult. Basic block throughput predictor, also known as static code analyzer, provides a ubiquitous way to predict the execution time of a basic block, which includes assembly code segments without jump-related instructions. In this article, we build a workflow to faithfully run, collect and analyze basic blocks from real-world applications. Several static code analyzers are introduced, compared and optimized to show which one performs better on accuracy and other metrics on Kunpeng 920 processor. Under extensive experiments, we achieve state-of-the-art 86.7% accuracy in predicting the throughput of all basic …