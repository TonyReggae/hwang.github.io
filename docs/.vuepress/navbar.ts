import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/', icon: 'fa6-solid:blog', },
  // { text: '标签', link: '/blog/tags/' },
  // { text: '归档', link: '/blog/archives/' },

  // {
  //   text: '笔记',
  //   items: [{ text: 'Demo', link: '/notes/demo/README.md' }],
  // },
  {
    text: '计算机科学与技术',
    items: [
      // { text: '计算机导论', link: '/notes/zh/nio/README.md' },
      // { text: '数据结构', link: '/notes/zh/nio/README.md' },
      { text: '操作系统', link: '/notes/zh/os/README.md' },
      { text: 'NIO与Socket编程技术', link: '/notes/zh/nio/README.md' },
    ],
    icon: 'hugeicons:computer-programming-01',
  },
  {
    text: '人文社科',
    items: [
      { text: '马克思主义基本原理', link: '/notes/zh/nio/README.md' },
      { text: '中国农村相关制度和深化改革', link: '/notes/zh/countryside/README.md' },
    ]
  },
])

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/' },
  { text: 'Blog', link: '/blog/', icon: 'fa6-solid:blog', },
  // { text: 'Tags', link: '/en/blog/tags/' },
  // { text: 'Archives', link: '/en/blog/archives/' },
  {
    text: 'Computer Science',
    items: [
      // { text: 'Introduction to Computer Science', link: '/notes/zh/nio/README.md' },
      // { text: 'Data Structures and Algorithms', link: '/notes/zh/nio/README.md' },
      { text: 'Operating System', link: '/notes/zh/os/README.md' },
      { text: 'NIO and Socket Programming Technical', link: '/notes/zh/nio' },
    ],
    icon: 'hugeicons:computer-programming-01',
  },
  {
    text: 'Social Science',
    items: [
      { text: 'Marxism', link: '/notes/zh/nio/README.md' },
      { text: "China's rural-related systems and deepening reform", link: '/notes/zh/countryside/README.md' },
    ]
  },
])

