import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { 
    text: '基础四大件', 
    items: [
      { text: '计算机操作系统', link: '/basics/计算机操作系统/README.md' },
      { text: '计算机组成原理', link: '/basics/计算机组成原理/README.md' },
      { text: '计算机网络', link: '/basics/计算机网络/README.md' },
      { text: '数据结构', link: '/basics/数据结构/README.md'},
    ],
    // icon: 'fluent:markdown-20-filled',
  },
  { 
    text: '开发语言', 
    items: [
      { text: 'Golang', icon: 'vscode-icons:file-type-go-gopher', link: '/languages/golang/README.md' },
      { text: 'PHP',icon: 'vscode-icons:file-type-php2', link: '/languages/php/README.md' },
    ],
    // icon: 'ph:code-bold'
  },
  { 
    text: '中间件', 
    items: [
      { text: 'Redis', link: '/middleware/redis/README.md' },
      { text: 'Kafka', link: '/middleware/kafka/README.md' },
      { text: 'Elasticsearch', link: '/middleware/elasticsearch/README.md' },
    ],
    // icon:'lucide:box',
  },
  { 
    text: '开发案例', 
    items: [
      { text: '高并发抢购系统开发', link: '/examples/高并发促销活动系统开发/README.md' },
      { text: '微信开发', link: '/demo/README.md' },
    ],
    // icon:'map:wind-surfing',
  },
  { text: '疑难问题', link: '/question/README.md', icon: 'wpf:faq' },
  { text: '在线导航', link: '/tools/', icon: 'fa-location-arrow' },
])
