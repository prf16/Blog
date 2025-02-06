import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const basicsOperatingSystemNote = defineNoteConfig({
  dir: 'basics/计算机操作系统',
  link: '/basics/计算机操作系统',
  sidebar: [
    '',
    {
      text: '第1章 操作系统概述',
      prefix: '第1章 操作系统概述',
      collapsed: false,
      items: [
        '概述',
      ],
    },
    {
      text: '第2章 进程与线程',
      prefix: '第2章 进程与线程',
      collapsed: false,
      items: [
        '2.1 进程与线程',
        '2.2 CPU调度',
      ],
    },
  ],
})

const basicsDataStructureAlgorithmNote = defineNoteConfig({
  dir: 'basics/数据结构',
  link: '/basics/数据结构',
  sidebar: [
    '',    
    {
      text: '第1章 绪论',
      prefix: '第1章 绪论',
      collapsed: false,
      items: "auto",
    },
    {
      text: '第2章 线性表',
      prefix: '第2章 线性表',
      collapsed: false,
      items: [
        '2.1 线性表的定义和基本操作',
        '2.2 线性表的顺序表示',
      ],
    },
  ]
})

const basicsOrganizationArchitectureNote = defineNoteConfig({
  dir: 'basics/计算机组成原理',
  link: '/basics/计算机组成原理',
  sidebar: [
    '',
    {
      text: '第1章 计算机系统概述',
      prefix: '第1章 计算机系统概述',
      collapsed: false,
      items: [
        '1.1 计算机的发展历程',
      ],
    },
    {
      text: '第2章 数据的标识和运算',
      prefix: '第2章 数据的标识和运算',
      collapsed: false,
      items: [
        '2.1 数制与编码',
      ],
    },
  ]
})

const basicsNetworkNote = defineNoteConfig({
  dir: 'basics/计算机网络',
  link: '/basics/计算机网络',
  sidebar: [
    '',
    {
      text: '第1章 计算机网络体系结构',
      prefix: '第1章 计算机网络体系结构',
      collapsed: false,
      items: [
        '1.1 计算机网络概述',
      ],
    },
  ]
})

const languagesGoNote = defineNoteConfig({
  dir: 'languages/golang',
  link: '/languages/golang',
  sidebar: [
    '',
    {
      text: 'Go语言核心36讲',
      prefix: 'Go语言核心36讲',
      collapsed: false,
      items: [
        '模块一：Go语言基础知识',
      ],
    },
  ]
})

const middlewareRedisNote = defineNoteConfig({
  dir: 'middleware/redis',
  link: '/middleware/redis',
  sidebar: [
    '',
    {
      text: 'Redis核心技术与实战',
      prefix: 'Redis核心技术与实战',
      collapsed: false,
      items: [
        '01 基本架构',
        '02 数据结构',
      ],
    },
  ],
})

const middlewareKafkaNote = defineNoteConfig({
  dir: 'middleware/kafka',
  link: '/middleware/kafka',
  sidebar: ['', '学习笔记', '源码理解-1' ],
})

const middlewareElasticsearchNote = defineNoteConfig({
  dir: 'middleware/elasticsearch',
  link: '/middleware/elasticsearch',
  sidebar: [
    '',
    {
      text: '学习资料',
      collapsed: false,
      prefix: '学习资料',
      items: [
        {
          text: 'Ela...核心技术与实战',
          prefix: 'Elasticsearch核心技术与实战',
          collapsed: true,
          items: [
            '第1章 概述',
            '第2章 安装上手',
            '第3章 入门',
            '第4章 深入搜索',
          ],
        },
      ]
    }
  ],
})

const examplesHighConcurrencyFlashSaleSystemNote = defineNoteConfig({
  dir: 'examples/高并发促销活动系统开发',
  link: '/examples/高并发促销活动系统开发',
  sidebar: [
    '',
    '线上抽奖',
  ]
})

const questionNote = defineNoteConfig({
  dir: 'question',
  link: '/question',
  sidebar: [
    '',
    'charles',
  ]
})


const mianjingNote = defineNoteConfig({
  dir: '面经',
  link: '/面经',
  sidebar: [
    '',
    '七年整理',
  ]
})


export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    basicsOperatingSystemNote,
    basicsDataStructureAlgorithmNote,
    basicsOrganizationArchitectureNote,
    basicsNetworkNote,
    middlewareRedisNote,
    middlewareKafkaNote,
    middlewareElasticsearchNote,
    examplesHighConcurrencyFlashSaleSystemNote,
    languagesGoNote,
    questionNote,
    mianjingNote,
  ],
})