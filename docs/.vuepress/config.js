import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    bundler: viteBundler(),
    theme: defaultTheme(),
    // dest: '../hwang.github.io.pages/',
    // public: './',
    theme: defaultTheme({
        // 默认主题配置
        navbar: [
          {
            text: '首页',
            link: '/',
          },
          {
            text: '人文社科',
            link: '/humanities/',
          },
        ],
      }),
})