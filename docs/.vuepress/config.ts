import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: '我的学习笔记',
  description: '个人博客',

  bundler: viteBundler(),

  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/plume-1.svg' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/plume-1.svg' }],
    ['script', { src: '<!-- Google tag (gtag.js) -->\n' +
          '<script async src="https://www.googletagmanager.com/gtag/js?id=G-NZPPLPB9FP"></script>\n' +
          '<script>\n' +
          '  window.dataLayer = window.dataLayer || [];\n' +
          '  function gtag(){dataLayer.push(arguments);}\n' +
          '  gtag(\'js\', new Date());\n' +
          '\n' +
          '  gtag(\'config\', \'G-NZPPLPB9FP\');\n' +
          '</script>' }]
  ],

  theme: plumeTheme({
    // 添加您的部署域名
    // hostname: 'https://your_site_url',
    // your git repo url
    docsRepo: '',
    docsDir: 'docs',
    footer: {
      copyright: 'Copyright © 2024 - 2025 hxiaobao 版权所有 | <a href="https://beian.miit.gov.cn/" target="_blank">京ICP备2024102188号-1</a>',
      content: 'Powered by <a href="https://vuepress.vuejs.org/" target="_blank" rel="noopener noreferrer">VuePress</a> & <a href="https://theme-plume.vuejs.press/" target="_blank" rel="noopener noreferrer">VuePress-theme-plume</a>',
    },
    plugins: {
      /**
       * Shiki 代码高亮
       * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
       */
      // shiki: {
           // 强烈建议预设代码块高亮语言，插件默认加载所有语言会产生不必要的时间开销
      //   languages: ['shell', 'bash', 'typescript', 'javascript'],
      // },

      /**
       * markdown enhance
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
       */
      markdownEnhance: {
        demo: true,
      //   include: true,
      //   chart: true,
      //   echarts: true,
      //   mermaid: true,
      //   flowchart: true,
      },

      /**
       *  markdown power
       * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
       */
      markdownPower: {
      //   pdf: true,
      //   caniuse: true,
      //   plot: true,
      //   bilibili: true,
      //   youtube: true,
      //   icons: true,
      //   codepen: true,
      //   replit: true,
      //   codeSandbox: true,
      //   jsfiddle: true,
        repl: {
          go: true,
      //     rust: true,
      //     kotlin: true,
        },
      },

      /**
       * 评论 comments
       * @see https://theme-plume.vuejs.press/guide/features/comments/
       */
      // comment: {
      //   provider: '', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
      //   comment: true,
      //   repo: '',
      //   repoId: '',
      //   categoryId: '',
      //   mapping: 'pathname',
      //   reactionsEnabled: true,
      //   inputPosition: 'top',
      // },
    },
  }),
})
