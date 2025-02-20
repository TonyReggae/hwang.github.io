import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    bundler: viteBundler(),
    base: '/pages/',
    // dest: '../hwang.github.io.pages/',
    // public: './',
    // hostname: 'https://blog-docs.github.io/pages/',
    // locales: {
    //     '/': {
    //         lang: 'zh-CN',
    //         title: '',
    //         home: '/'
    //     },
    // },
    theme: defaultTheme({
        logo: './img/logo_light.png',
        logoDark: './img/logo_dark.png',
        // 默认主题配置
        navbar: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: '神经网络',
                link: '/humanities/',
            },
        ],
    }),
})