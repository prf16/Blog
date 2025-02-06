---
title: Elasticsearch
createTime: 2024/12/18 10:40:11
permalink: /middleware/elasticsearch/
---

## 概述

Elasticsearch 是 **JAVA** 语言开发基于 **Lucene** 一个 **分布式** 的、基于 Lucene 的 **搜索引擎** 和 **分析引擎**。

它能够快速地存储、搜索和分析大量数据。

Elasticsearch 经常用于日志分析、实时应用监控、全文检索等场景。

它的特点包括高扩展性、近实时搜索能力以及对结构化和非结构化数据的支持。

## 分布式

## 搜索引擎

### 倒排索引

倒排索引作为ES的核心，底层基于Lucene进行实现。

倒排索引（Inverted Index）也叫反向索引，有反向索引必有正向索引。

通俗地来讲，正向索引是通过文档ID找单词。反向索引则是通过单词找文档ID。

## 分析引擎

### 文本分析（Analysis）

文本分析是将全文本拆分为一系列最小单元（token）的过程，称为分词。

它是自然语言处理（NLP）领域中的重要过程。

这个过程是通过分词器（Analyzer）来实现的，es有内置的分词器、也有自定义分词器。

### 分词器（Analyzer）

分词器（Analyzer）由三个核心部分组成：

- 字符过滤器（Character Filters）

- 分词器（Tokenizer）

- token 过滤器（Token Filters）

它们按照**顺序**依次处理文本，完成从原始文本到可索引词条（Terms）的转换。

#### 1. 字符过滤器（Character Filters）

文本分析的第一步，对原始文本进行预处理。

它用于筛选、转换或移除特定字符，例如：移除HTML标签、转换为小写、替换某些字符等。

#### 2. 分词器（Tokenizer）

文本分析的第二步，字符串被分词器按照规则分为单个的单词，它的功能是将连续的文本分割成一个个独立的单元（如单词或子词），这些单元是更小的词条，被称为 tokens。

这对于后续的各种文本处理任务（如机器翻译、情感分析等）是非常关键的步骤。不同的语言可能需要不同类型的分词器，因为语言结构和语法规则各不相同。例如，在英文中，分词器可以根据空格来区分单词；而在中文中，则需要更复杂的算法来识别词语的边界。

**功能**

- 分割文本：根据空格、标点符号或其他规则将文本拆分为 tokens。

- 生成词汇单元：确保每个 token 是有意义的词语或符号。

**Elasticsearch 的内置分词器**

- Standard Analyzer - 默认分词器，按词切分，小写处理

- Simple Analyzer - 按照非字母切分(符号被过滤)，小写处理

- Stop Analyzer-小写处理，停用词过滤(the，a，is)

- Whitespace Analyzer - 按照空格切分，不转小写

- Keyword Analyzer - 不分词，直接将输入当作输出

- Patter Analyzer - 正则表达式，默认\W+(非字符分隔)

- Language - 提供了30多种常见语言的分词器

- Customer Analyzer 自定义分词器

#### 3. token 过滤器（Token Filters）

文本分析的第三步，它们对已经分词后的 token 进行进一步的处理或转换。与字符过滤器不同，token 过滤器不会改变原始文本，而是直接操作已经生成的 token。

::: warning

这里的token经常混淆，有被称为 term，token，词元，词项，词条诸如此类的名词，所以直接称为 **token**

token 是一个在分词阶段中产生的最小单位，也是一个 Tokne 对象

term 是一个在构建倒排索引阶段产生的最小单位，也是一个 Term 对象。

:::

**功能**

- 大小写转换：将所有 tokens 统一为小写或大写形式。

- 去除停用词：移除常见的无意义词汇，如“the”、“is”、“a”等。

- 词干提取：将词语还原为其词根形式（例如，“running” -> “run”）。

- 同义词扩展：根据同义词表将某个 token 替换为多个同义词。

- 词形还原：将词语还原为标准形式（例如，“better” -> “good”）。

- n-gram 生成：为每个 token 生成连续的 n-gram 或前缀 n-gram。

## 问题

### ES写入数据的工作原理是什么？



### ES查询数据的工作原理是什么？


## 学习资料

[极客时间-Elasticsearch核心技术与实战 阮一鸣](https://time.geekbang.org/course/intro/100030501) [🔨](https://www.youtube.com/playlist?list=PLn5XLkWHBxyuTUqxpuwdPEwO3ZoxwhkyS)

[Elastic 中国社区官方博客](https://elasticstack.blog.csdn.net/?type=blog)

[ElasticSearch核心知识讲解](https://developer.aliyun.com/article/941168)

### Logstash

入门跟练

[Logstash：Logstash 入门教程 （一）](https://blog.csdn.net/UbuntuTouch/article/details/105973985)

[Logstash：Logstash 入门教程 （二）](https://elasticstack.blog.csdn.net/article/details/105979677)

[Logstash：把 Apache 日志导入到 Elasticsearch](https://blog.csdn.net/UbuntuTouch/article/details/100727051)

## to do list

Elasticsearch 工程师认证考试
