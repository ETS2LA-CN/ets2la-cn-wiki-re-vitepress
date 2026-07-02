import { defineConfig } from 'vitepress'
import { set_sidebar } from './auto_sidebar.ts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ETS2LA 中文维基",
  description: "ETS2LA 的中文文档",
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: '/image/ets2la-cn.png' }],
    ['script', { defer: '', src: 'https://static.goodnightan.com/script.js', 'data-website-id': '2b74bcbe-2fa0-45a5-a4a0-39840310cf5a' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://docs.ets2la.com/' }],
    ['meta', { property: 'og:title', content: 'ETS2LA 中文维基 - ETS2LA 中文使用指南' }],
    ['meta', { property: 'og:description', content: '一个专为 ETS2LA 中国社区编写的使用指南' }],
    ['meta', { property: 'og:image', content: 'https://docs.ets2la.com/logo.png' }],
  ],
  themeConfig: {
      siteTitle: "ETS2LA 中文维基",
      logo: "/image/svg/logo.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/version/v3/docs/' },
      { text: '更新&新闻', link: '/updates/' },
      { text: '作者', link: '/author/' },
      { text: '关于', link: '/about/' },
      { text: '赞助名单', link: '/sponsored/' },
      {
        text: 'v3',
        items: [
          { text: 'v3 (当前 玩命编写中)', link: '/version/v3/docs/' },
          { text: 'v2 (停止支持)', link: '/version/v2/docs/' }
        ]
      }
    ],

    sidebar: {
      '/version/v2/docs/': set_sidebar('/version/v2/docs/'),
      '/version/v3/docs/': set_sidebar('/version/v3/docs/'),
      '/updates/': set_sidebar('/updates/'),
      '/author/': set_sidebar('/author/'),
      '/sponsored/': set_sidebar('/sponsored/'),
      '/about/': set_sidebar('/about/'),
      '/': set_sidebar('')
    },

    outline: 'deep',

    editLink: {
      pattern: 'https://github.com/ETS2LA-CN/ets2la-cn-wiki-re-vitepress/edit/main/:path',
      text: '发现文档有问题？在 GitHub 上编辑此页'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist' },
      { icon: 'discord', link: 'https://ets2la.com/discord' },
      { icon: {
        svg: '<svg t="1764297309339" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4765" width="200" height="200"><path d="M153.930323 0L0 724.067097l56.485161 108.345806h370.621936l86.214193 166.152258h83.571613l36.005162-166.152258h229.24387l150.95742-719.44258L952.980645 0H153.930323z m45.584516 706.56L328.010323 114.952258h190.926451l-32.701935 152.609032 141.047742-158.224516h185.64129l-14.534194 79.27742-214.709677 249.393548 115.612903 202.157419-16.516129 66.394839h-176.392258l-84.892903-157.894194-27.086452 157.894194h-194.890322z" p-id="4766"></path></svg>'
      },
      link: 'https://www.kookapp.cn/app/invite/VZaUPP',
      ariaLabel: 'kook link' },
    ],
    footer: {
      message: '<span id="umami-stats"></span> | <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">苏ICP备2025160641号-3</a> | <a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32120202010796" target="_blank" rel="noopener">苏公网安备32120202010796号</a> | <span id="site-uptime"></span>'
    }
  },
    //图片懒加载
    markdown:{
      image:{
          lazyLoading:true
      }
    }
})
