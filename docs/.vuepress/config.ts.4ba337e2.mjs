// docs/.vuepress/config.ts
import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { plumeTheme } from "vuepress-theme-plume";
var config_default = defineUserConfig({
  base: "/",
  lang: "zh-CN",
  locales: {
    "/": {
      // title: '| 首页',
      lang: "zh-CN",
      description: "Hwang\u7684\u77E5\u8BC6\u5E93"
    },
    "/en/": {
      // title: '| Home',
      lang: "en-US",
      description: "Hwang's knowledge base"
    }
  },
  head: [
    // 配置站点图标
    [
      "link",
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      }
    ]
  ],
  bundler: viteBundler(),
  shouldPrefetch: false,
  // 站点较大，页面数量较多时，不建议启用
  theme: plumeTheme({
    /* 添加您的部署域名, 有助于 SEO, 生成 sitemap */
    // hostname: 'https://your_site_url',
    /* 文档仓库配置，用于 editLink */
    // docsRepo: '',
    // docsDir: 'docs',
    // docsBranch: '',
    /* 页内信息 */
    // editLink: true,
    // lastUpdated: true,
    // contributors: true,
    // changelog: false,
    /**
     * 博客
     * @see https://theme-plume.vuejs.press/config/basic/#blog
     */
    // blog: false, // 禁用博客
    blog: {
      postList: true,
      // 是否启用文章列表页
      tags: false,
      // 是否启用标签页
      archives: true,
      // 是否启用归档页
      categories: true,
      // 是否启用分类页
      pagination: 15,
      // 每页显示文章数量
      include: ["blog/**/*.md"],
      // postCover: 'right', // 文章封面位置
      postCover: {
        layout: "left",
        ratio: "16:9",
        width: 300,
        compact: false
      }
    },
    /* 博客文章页面链接前缀 */
    article: "/article/",
    /**
     * 编译缓存，加快编译速度
     * @see https://theme-plume.vuejs.press/config/basic/#cache
     */
    cache: "filesystem",
    /**
     * 为 markdown 文件自动添加 frontmatter 配置
     * @see https://theme-plume.vuejs.press/config/basic/#autofrontmatter
     */
    // autoFrontmatter: {
    //   permalink: true,  // 是否生成永久链接
    //   createTime: true, // 是否生成创建时间
    //   title: true,      // 是否生成标题
    // },
    plugins: {
      /**
       * Shiki 代码高亮
       * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
       */
      shiki: {
        // 强烈建议预设代码块高亮语言，插件默认加载所有语言会产生不必要的时间开销
        languages: ["shell", "bash", "typescript", "javascript", "java"],
        twoslash: true,
        // 启用 twoslash
        whitespace: true,
        // 启用 空格/Tab 高亮
        lineNumbers: true,
        // 启用行号
        theme: "one-light"
        // 主题
      }
      /* 本地搜索, 默认启用 */
      // search: true,
      /**
       * Algolia DocSearch
       * 启用此搜索需要将 本地搜索 search 设置为 false
       * @see https://theme-plume.vuejs.press/config/plugins/search/#algolia-docsearch
       */
      // docsearch: {
      //   appId: '',
      //   apiKey: '',
      //   indexName: '',
      // },
      /* 文章字数统计、阅读时间，设置为 false 则禁用 */
      // readingTime: true,
      /**
       * markdown enhance
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
       */
      // markdownEnhance: {
      //   chartjs: true,
      //   echarts: true,
      //   mermaid: true,
      //   flowchart: true,
      // },
      /**
       *  markdown power
       * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
       */
      // markdownPower: {
      //   pdf: true,          // 启用 PDF 嵌入 @[pdf](/xxx.pdf)
      //   caniuse: true,      // 启用 caniuse 语法  @[caniuse](feature_name)
      //   plot: true,         // 启用隐秘文本语法 !!xxxx!!
      //   bilibili: true,     // 启用嵌入 bilibili视频 语法 @[bilibili](bid)
      //   youtube: true,      // 启用嵌入 youtube视频 语法 @[youtube](video_id)
      //   artPlayer: true,    // 启用嵌入 artPlayer 本地视频 语法 @[artPlayer](url)
      //   audioReader: true,  // 启用嵌入音频朗读功能 语法 @[audioReader](url)
      //   icons: true,        // 启用内置图标语法  :[icon-name]:
      //   codepen: true,      // 启用嵌入 codepen 语法 @[codepen](user/slash)
      //   replit: true,       // 启用嵌入 replit 语法 @[replit](user/repl-name)
      //   codeSandbox: true,  // 启用嵌入 codeSandbox 语法 @[codeSandbox](id)
      //   jsfiddle: true,     // 启用嵌入 jsfiddle 语法 @[jsfiddle](user/id)
      //   npmTo: true,        // 启用 npm-to 容器  ::: npm-to
      //   demo: true,         // 启用 demo 容器  ::: demo
      //   repl: {             // 启用 代码演示容器
      //     go: true,         // ::: go-repl
      //     rust: true,       // ::: rust-repl
      //     kotlin: true,     // ::: kotlin-repl
      //   },
      //   imageSize: 'local', // 启用 自动填充 图片宽高属性，避免页面抖动
      // },
      /**
       * 在 Markdown 文件中导入其他 markdown 文件内容。
       * @see https://theme-plume.vuejs.press/guide/markdown/include/
       */
      // markdownInclude: true,
      /**
       * Markdown 数学公式
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-math/
       */
      // markdownMath: {
      //   type: 'katex',
      // },
      /**
       * 水印
       * @see https://theme-plume.vuejs.press/guide/features/watermark/
       */
      // watermark: true,
      /**
       * 评论 comments
       * @see https://theme-plume.vuejs.press/guide/features/comments/
       */
      // comment: {
      //   provider: '', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
      //   comment: true,
      //   repo: '',
      //   repoId: '',
      //   category: '',
      //   categoryId: '',
      //   mapping: 'pathname',
      //   reactionsEnabled: true,
      //   inputPosition: 'top',
      // },
    }
    /**
     * 加密功能
     * @see https://theme-plume.vuejs.press/guide/features/encryption/
     */
    // encrypt: {},
  })
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTovY29kZXMvaHdhbmcuZ2l0aHViLmlvL2RvY3MvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxjb2Rlc1xcXFxod2FuZy5naXRodWIuaW9cXFxcZG9jc1xcXFwudnVlcHJlc3NcXFxcY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9jb2Rlcy9od2FuZy5naXRodWIuaW8vZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzXCI7aW1wb3J0IHsgdml0ZUJ1bmRsZXIgfSBmcm9tICdAdnVlcHJlc3MvYnVuZGxlci12aXRlJ1xuaW1wb3J0IHsgZGVmaW5lVXNlckNvbmZpZyB9IGZyb20gJ3Z1ZXByZXNzJ1xuaW1wb3J0IHsgcGx1bWVUaGVtZSB9IGZyb20gJ3Z1ZXByZXNzLXRoZW1lLXBsdW1lJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcbiAgYmFzZTogJy8nLFxuICBsYW5nOiAnemgtQ04nLFxuICBsb2NhbGVzOiB7XG4gICAgJy8nOiB7XG4gICAgICAvLyB0aXRsZTogJ3wgXHU5OTk2XHU5ODc1JyxcbiAgICAgIGxhbmc6ICd6aC1DTicsXG4gICAgICBkZXNjcmlwdGlvbjogJ0h3YW5nXHU3Njg0XHU3N0U1XHU4QkM2XHU1RTkzJyxcbiAgICB9LFxuICAgICcvZW4vJzoge1xuICAgICAgLy8gdGl0bGU6ICd8IEhvbWUnLFxuICAgICAgbGFuZzogJ2VuLVVTJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkh3YW5nJ3Mga25vd2xlZGdlIGJhc2VcIixcbiAgICB9LFxuICB9LFxuXG5cbiAgaGVhZDogW1xuICAgIC8vIFx1OTE0RFx1N0Y2RVx1N0FEOVx1NzBCOVx1NTZGRVx1NjgwN1xuICAgIFsnbGluaycsIHtcbiAgICAgIHJlbDogJ2ljb24nLFxuICAgICAgdHlwZTogJ2ltYWdlL3gtaWNvbicsXG4gICAgICBocmVmOiAnL2Zhdmljb24uaWNvJ1xuICAgIH1cbiAgICBdLFxuICBdLFxuXG4gIGJ1bmRsZXI6IHZpdGVCdW5kbGVyKCksXG4gIHNob3VsZFByZWZldGNoOiBmYWxzZSwgLy8gXHU3QUQ5XHU3MEI5XHU4RjgzXHU1OTI3XHVGRjBDXHU5ODc1XHU5NzYyXHU2NTcwXHU5MUNGXHU4RjgzXHU1OTFBXHU2NUY2XHVGRjBDXHU0RTBEXHU1RUZBXHU4QkFFXHU1NDJGXHU3NTI4XG5cbiAgdGhlbWU6IHBsdW1lVGhlbWUoe1xuXG4gICAgLyogXHU2REZCXHU1MkEwXHU2MEE4XHU3Njg0XHU5MEU4XHU3RjcyXHU1N0RGXHU1NDBELCBcdTY3MDlcdTUyQTlcdTRFOEUgU0VPLCBcdTc1MUZcdTYyMTAgc2l0ZW1hcCAqL1xuICAgIC8vIGhvc3RuYW1lOiAnaHR0cHM6Ly95b3VyX3NpdGVfdXJsJyxcblxuICAgIC8qIFx1NjU4N1x1Njg2M1x1NEVEM1x1NUU5M1x1OTE0RFx1N0Y2RVx1RkYwQ1x1NzUyOFx1NEU4RSBlZGl0TGluayAqL1xuICAgIC8vIGRvY3NSZXBvOiAnJyxcbiAgICAvLyBkb2NzRGlyOiAnZG9jcycsXG4gICAgLy8gZG9jc0JyYW5jaDogJycsXG5cbiAgICAvKiBcdTk4NzVcdTUxODVcdTRGRTFcdTYwNkYgKi9cbiAgICAvLyBlZGl0TGluazogdHJ1ZSxcbiAgICAvLyBsYXN0VXBkYXRlZDogdHJ1ZSxcbiAgICAvLyBjb250cmlidXRvcnM6IHRydWUsXG4gICAgLy8gY2hhbmdlbG9nOiBmYWxzZSxcblxuICAgIC8qKlxuICAgICAqIFx1NTM1QVx1NUJBMlxuICAgICAqIEBzZWUgaHR0cHM6Ly90aGVtZS1wbHVtZS52dWVqcy5wcmVzcy9jb25maWcvYmFzaWMvI2Jsb2dcbiAgICAgKi9cbiAgICAvLyBibG9nOiBmYWxzZSwgLy8gXHU3OTgxXHU3NTI4XHU1MzVBXHU1QkEyXG4gICAgYmxvZzoge1xuICAgICAgcG9zdExpc3Q6IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1NTQyRlx1NzUyOFx1NjU4N1x1N0FFMFx1NTIxN1x1ODg2OFx1OTg3NVxuICAgICAgdGFnczogZmFsc2UsIC8vIFx1NjYyRlx1NTQyNlx1NTQyRlx1NzUyOFx1NjgwN1x1N0I3RVx1OTg3NVxuICAgICAgYXJjaGl2ZXM6IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1NTQyRlx1NzUyOFx1NUY1Mlx1Njg2M1x1OTg3NVxuICAgICAgY2F0ZWdvcmllczogdHJ1ZSwgLy8gXHU2NjJGXHU1NDI2XHU1NDJGXHU3NTI4XHU1MjA2XHU3QzdCXHU5ODc1XG4gICAgICBwYWdpbmF0aW9uOiAxNSwgLy8gXHU2QkNGXHU5ODc1XHU2NjNFXHU3OTNBXHU2NTg3XHU3QUUwXHU2NTcwXHU5MUNGXG4gICAgICBpbmNsdWRlOiBbJ2Jsb2cvKiovKi5tZCddLFxuICAgICAgLy8gcG9zdENvdmVyOiAncmlnaHQnLCAvLyBcdTY1ODdcdTdBRTBcdTVDMDFcdTk3NjJcdTRGNERcdTdGNkVcbiAgICAgIHBvc3RDb3Zlcjoge1xuICAgICAgICBsYXlvdXQ6ICdsZWZ0JyxcbiAgICAgICAgcmF0aW86ICcxNjo5JyxcbiAgICAgICAgd2lkdGg6IDMwMCxcbiAgICAgICAgY29tcGFjdDogZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogXHU1MzVBXHU1QkEyXHU2NTg3XHU3QUUwXHU5ODc1XHU5NzYyXHU5NEZFXHU2M0E1XHU1MjREXHU3RjAwICovXG4gICAgYXJ0aWNsZTogJy9hcnRpY2xlLycsXG4gICAgLyoqXG4gICAgICogXHU3RjE2XHU4QkQxXHU3RjEzXHU1QjU4XHVGRjBDXHU1MkEwXHU1RkVCXHU3RjE2XHU4QkQxXHU5MDFGXHU1RUE2XG4gICAgICogQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2NvbmZpZy9iYXNpYy8jY2FjaGVcbiAgICAgKi9cbiAgICBjYWNoZTogJ2ZpbGVzeXN0ZW0nLFxuXG4gICAgLyoqXG4gICAgICogXHU0RTNBIG1hcmtkb3duIFx1NjU4N1x1NEVGNlx1ODFFQVx1NTJBOFx1NkRGQlx1NTJBMCBmcm9udG1hdHRlciBcdTkxNERcdTdGNkVcbiAgICAgKiBAc2VlIGh0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvY29uZmlnL2Jhc2ljLyNhdXRvZnJvbnRtYXR0ZXJcbiAgICAgKi9cbiAgICAvLyBhdXRvRnJvbnRtYXR0ZXI6IHtcbiAgICAvLyAgIHBlcm1hbGluazogdHJ1ZSwgIC8vIFx1NjYyRlx1NTQyNlx1NzUxRlx1NjIxMFx1NkMzOFx1NEU0NVx1OTRGRVx1NjNBNVxuICAgIC8vICAgY3JlYXRlVGltZTogdHJ1ZSwgLy8gXHU2NjJGXHU1NDI2XHU3NTFGXHU2MjEwXHU1MjFCXHU1RUZBXHU2NUY2XHU5NUY0XG4gICAgLy8gICB0aXRsZTogdHJ1ZSwgICAgICAvLyBcdTY2MkZcdTU0MjZcdTc1MUZcdTYyMTBcdTY4MDdcdTk4OThcbiAgICAvLyB9LFxuXG4gICAgcGx1Z2luczoge1xuICAgICAgLyoqXG4gICAgICAgKiBTaGlraSBcdTRFRTNcdTc4MDFcdTlBRDhcdTRFQUVcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90aGVtZS1wbHVtZS52dWVqcy5wcmVzcy9jb25maWcvcGx1Z2lucy9jb2RlLWhpZ2hsaWdodC9cbiAgICAgICAqL1xuICAgICAgc2hpa2k6IHtcbiAgICAgICAgLy8gXHU1RjNBXHU3MEM4XHU1RUZBXHU4QkFFXHU5ODg0XHU4QkJFXHU0RUUzXHU3ODAxXHU1NzU3XHU5QUQ4XHU0RUFFXHU4QkVEXHU4QTAwXHVGRjBDXHU2M0QyXHU0RUY2XHU5RUQ4XHU4QkE0XHU1MkEwXHU4RjdEXHU2MjQwXHU2NzA5XHU4QkVEXHU4QTAwXHU0RjFBXHU0RUE3XHU3NTFGXHU0RTBEXHU1RkM1XHU4OTgxXHU3Njg0XHU2NUY2XHU5NUY0XHU1RjAwXHU5NTAwXG4gICAgICAgIGxhbmd1YWdlczogWydzaGVsbCcsICdiYXNoJywgJ3R5cGVzY3JpcHQnLCAnamF2YXNjcmlwdCcsJ2phdmEnXSxcbiAgICAgICAgdHdvc2xhc2g6IHRydWUsIC8vIFx1NTQyRlx1NzUyOCB0d29zbGFzaFxuICAgICAgICB3aGl0ZXNwYWNlOiB0cnVlLCAvLyBcdTU0MkZcdTc1MjggXHU3QTdBXHU2ODNDL1RhYiBcdTlBRDhcdTRFQUVcbiAgICAgICAgbGluZU51bWJlcnM6IHRydWUsIC8vIFx1NTQyRlx1NzUyOFx1ODg0Q1x1NTNGN1xuICAgICAgICB0aGVtZTogJ29uZS1saWdodCcsIC8vIFx1NEUzQlx1OTg5OFxuICAgICAgfSxcblxuICAgICAgLyogXHU2NzJDXHU1NzMwXHU2NDFDXHU3RDIyLCBcdTlFRDhcdThCQTRcdTU0MkZcdTc1MjggKi9cbiAgICAgIC8vIHNlYXJjaDogdHJ1ZSxcblxuICAgICAgLyoqXG4gICAgICAgKiBBbGdvbGlhIERvY1NlYXJjaFxuICAgICAgICogXHU1NDJGXHU3NTI4XHU2QjY0XHU2NDFDXHU3RDIyXHU5NzAwXHU4OTgxXHU1QzA2IFx1NjcyQ1x1NTczMFx1NjQxQ1x1N0QyMiBzZWFyY2ggXHU4QkJFXHU3RjZFXHU0RTNBIGZhbHNlXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvY29uZmlnL3BsdWdpbnMvc2VhcmNoLyNhbGdvbGlhLWRvY3NlYXJjaFxuICAgICAgICovXG4gICAgICAvLyBkb2NzZWFyY2g6IHtcbiAgICAgIC8vICAgYXBwSWQ6ICcnLFxuICAgICAgLy8gICBhcGlLZXk6ICcnLFxuICAgICAgLy8gICBpbmRleE5hbWU6ICcnLFxuICAgICAgLy8gfSxcblxuICAgICAgLyogXHU2NTg3XHU3QUUwXHU1QjU3XHU2NTcwXHU3RURGXHU4QkExXHUzMDAxXHU5NjA1XHU4QkZCXHU2NUY2XHU5NUY0XHVGRjBDXHU4QkJFXHU3RjZFXHU0RTNBIGZhbHNlIFx1NTIxOVx1Nzk4MVx1NzUyOCAqL1xuICAgICAgLy8gcmVhZGluZ1RpbWU6IHRydWUsXG5cbiAgICAgIC8qKlxuICAgICAgICogbWFya2Rvd24gZW5oYW5jZVxuICAgICAgICogQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2NvbmZpZy9wbHVnaW5zL21hcmtkb3duLWVuaGFuY2UvXG4gICAgICAgKi9cbiAgICAgIC8vIG1hcmtkb3duRW5oYW5jZToge1xuICAgICAgLy8gICBjaGFydGpzOiB0cnVlLFxuICAgICAgLy8gICBlY2hhcnRzOiB0cnVlLFxuICAgICAgLy8gICBtZXJtYWlkOiB0cnVlLFxuICAgICAgLy8gICBmbG93Y2hhcnQ6IHRydWUsXG4gICAgICAvLyB9LFxuXG4gICAgICAvKipcbiAgICAgICAqICBtYXJrZG93biBwb3dlclxuICAgICAgICogQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2NvbmZpZy9wbHVnaW4vbWFya2Rvd24tcG93ZXIvXG4gICAgICAgKi9cbiAgICAgIC8vIG1hcmtkb3duUG93ZXI6IHtcbiAgICAgIC8vICAgcGRmOiB0cnVlLCAgICAgICAgICAvLyBcdTU0MkZcdTc1MjggUERGIFx1NUQ0Q1x1NTE2NSBAW3BkZl0oL3h4eC5wZGYpXG4gICAgICAvLyAgIGNhbml1c2U6IHRydWUsICAgICAgLy8gXHU1NDJGXHU3NTI4IGNhbml1c2UgXHU4QkVEXHU2Q0Q1ICBAW2Nhbml1c2VdKGZlYXR1cmVfbmFtZSlcbiAgICAgIC8vICAgcGxvdDogdHJ1ZSwgICAgICAgICAvLyBcdTU0MkZcdTc1MjhcdTk2OTBcdTc5RDhcdTY1ODdcdTY3MkNcdThCRURcdTZDRDUgISF4eHh4ISFcbiAgICAgIC8vICAgYmlsaWJpbGk6IHRydWUsICAgICAvLyBcdTU0MkZcdTc1MjhcdTVENENcdTUxNjUgYmlsaWJpbGlcdTg5QzZcdTk4OTEgXHU4QkVEXHU2Q0Q1IEBbYmlsaWJpbGldKGJpZClcbiAgICAgIC8vICAgeW91dHViZTogdHJ1ZSwgICAgICAvLyBcdTU0MkZcdTc1MjhcdTVENENcdTUxNjUgeW91dHViZVx1ODlDNlx1OTg5MSBcdThCRURcdTZDRDUgQFt5b3V0dWJlXSh2aWRlb19pZClcbiAgICAgIC8vICAgYXJ0UGxheWVyOiB0cnVlLCAgICAvLyBcdTU0MkZcdTc1MjhcdTVENENcdTUxNjUgYXJ0UGxheWVyIFx1NjcyQ1x1NTczMFx1ODlDNlx1OTg5MSBcdThCRURcdTZDRDUgQFthcnRQbGF5ZXJdKHVybClcbiAgICAgIC8vICAgYXVkaW9SZWFkZXI6IHRydWUsICAvLyBcdTU0MkZcdTc1MjhcdTVENENcdTUxNjVcdTk3RjNcdTk4OTFcdTY3MTdcdThCRkJcdTUyOUZcdTgwRkQgXHU4QkVEXHU2Q0Q1IEBbYXVkaW9SZWFkZXJdKHVybClcbiAgICAgIC8vICAgaWNvbnM6IHRydWUsICAgICAgICAvLyBcdTU0MkZcdTc1MjhcdTUxODVcdTdGNkVcdTU2RkVcdTY4MDdcdThCRURcdTZDRDUgIDpbaWNvbi1uYW1lXTpcbiAgICAgIC8vICAgY29kZXBlbjogdHJ1ZSwgICAgICAvLyBcdTU0MkZcdTc1MjhcdTVENENcdTUxNjUgY29kZXBlbiBcdThCRURcdTZDRDUgQFtjb2RlcGVuXSh1c2VyL3NsYXNoKVxuICAgICAgLy8gICByZXBsaXQ6IHRydWUsICAgICAgIC8vIFx1NTQyRlx1NzUyOFx1NUQ0Q1x1NTE2NSByZXBsaXQgXHU4QkVEXHU2Q0Q1IEBbcmVwbGl0XSh1c2VyL3JlcGwtbmFtZSlcbiAgICAgIC8vICAgY29kZVNhbmRib3g6IHRydWUsICAvLyBcdTU0MkZcdTc1MjhcdTVENENcdTUxNjUgY29kZVNhbmRib3ggXHU4QkVEXHU2Q0Q1IEBbY29kZVNhbmRib3hdKGlkKVxuICAgICAgLy8gICBqc2ZpZGRsZTogdHJ1ZSwgICAgIC8vIFx1NTQyRlx1NzUyOFx1NUQ0Q1x1NTE2NSBqc2ZpZGRsZSBcdThCRURcdTZDRDUgQFtqc2ZpZGRsZV0odXNlci9pZClcbiAgICAgIC8vICAgbnBtVG86IHRydWUsICAgICAgICAvLyBcdTU0MkZcdTc1MjggbnBtLXRvIFx1NUJCOVx1NTY2OCAgOjo6IG5wbS10b1xuICAgICAgLy8gICBkZW1vOiB0cnVlLCAgICAgICAgIC8vIFx1NTQyRlx1NzUyOCBkZW1vIFx1NUJCOVx1NTY2OCAgOjo6IGRlbW9cbiAgICAgIC8vICAgcmVwbDogeyAgICAgICAgICAgICAvLyBcdTU0MkZcdTc1MjggXHU0RUUzXHU3ODAxXHU2RjE0XHU3OTNBXHU1QkI5XHU1NjY4XG4gICAgICAvLyAgICAgZ286IHRydWUsICAgICAgICAgLy8gOjo6IGdvLXJlcGxcbiAgICAgIC8vICAgICBydXN0OiB0cnVlLCAgICAgICAvLyA6OjogcnVzdC1yZXBsXG4gICAgICAvLyAgICAga290bGluOiB0cnVlLCAgICAgLy8gOjo6IGtvdGxpbi1yZXBsXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIGltYWdlU2l6ZTogJ2xvY2FsJywgLy8gXHU1NDJGXHU3NTI4IFx1ODFFQVx1NTJBOFx1NTg2Qlx1NTE0NSBcdTU2RkVcdTcyNDdcdTVCQkRcdTlBRDhcdTVDNUVcdTYwMjdcdUZGMENcdTkwN0ZcdTUxNERcdTk4NzVcdTk3NjJcdTYyOTZcdTUyQThcbiAgICAgIC8vIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogXHU1NzI4IE1hcmtkb3duIFx1NjU4N1x1NEVGNlx1NEUyRFx1NUJGQ1x1NTE2NVx1NTE3Nlx1NEVENiBtYXJrZG93biBcdTY1ODdcdTRFRjZcdTUxODVcdTVCQjlcdTMwMDJcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90aGVtZS1wbHVtZS52dWVqcy5wcmVzcy9ndWlkZS9tYXJrZG93bi9pbmNsdWRlL1xuICAgICAgICovXG4gICAgICAvLyBtYXJrZG93bkluY2x1ZGU6IHRydWUsXG5cbiAgICAgIC8qKlxuICAgICAgICogTWFya2Rvd24gXHU2NTcwXHU1QjY2XHU1MTZDXHU1RjBGXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvY29uZmlnL3BsdWdpbnMvbWFya2Rvd24tbWF0aC9cbiAgICAgICAqL1xuICAgICAgLy8gbWFya2Rvd25NYXRoOiB7XG4gICAgICAvLyAgIHR5cGU6ICdrYXRleCcsXG4gICAgICAvLyB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFx1NkMzNFx1NTM3MFxuICAgICAgICogQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2d1aWRlL2ZlYXR1cmVzL3dhdGVybWFyay9cbiAgICAgICAqL1xuICAgICAgLy8gd2F0ZXJtYXJrOiB0cnVlLFxuXG4gICAgICAvKipcbiAgICAgICAqIFx1OEJDNFx1OEJCQSBjb21tZW50c1xuICAgICAgICogQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2d1aWRlL2ZlYXR1cmVzL2NvbW1lbnRzL1xuICAgICAgICovXG4gICAgICAvLyBjb21tZW50OiB7XG4gICAgICAvLyAgIHByb3ZpZGVyOiAnJywgLy8gXCJBcnRhbGtcIiB8IFwiR2lzY3VzXCIgfCBcIlR3aWtvb1wiIHwgXCJXYWxpbmVcIlxuICAgICAgLy8gICBjb21tZW50OiB0cnVlLFxuICAgICAgLy8gICByZXBvOiAnJyxcbiAgICAgIC8vICAgcmVwb0lkOiAnJyxcbiAgICAgIC8vICAgY2F0ZWdvcnk6ICcnLFxuICAgICAgLy8gICBjYXRlZ29yeUlkOiAnJyxcbiAgICAgIC8vICAgbWFwcGluZzogJ3BhdGhuYW1lJyxcbiAgICAgIC8vICAgcmVhY3Rpb25zRW5hYmxlZDogdHJ1ZSxcbiAgICAgIC8vICAgaW5wdXRQb3NpdGlvbjogJ3RvcCcsXG4gICAgICAvLyB9LFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBcdTUyQTBcdTVCQzZcdTUyOUZcdTgwRkRcbiAgICAgKiBAc2VlIGh0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvZ3VpZGUvZmVhdHVyZXMvZW5jcnlwdGlvbi9cbiAgICAgKi9cbiAgICAvLyBlbmNyeXB0OiB7fSxcbiAgfSksXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtUyxTQUFTLG1CQUFtQjtBQUMvVCxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLGtCQUFrQjtBQUUzQixJQUFPLGlCQUFRLGlCQUFpQjtBQUFBLEVBQzlCLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxJQUNQLEtBQUs7QUFBQTtBQUFBLE1BRUgsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBLFFBQVE7QUFBQTtBQUFBLE1BRU4sTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLElBQ2Y7QUFBQSxFQUNGO0FBQUEsRUFHQSxNQUFNO0FBQUE7QUFBQSxJQUVKO0FBQUEsTUFBQztBQUFBLE1BQVE7QUFBQSxRQUNQLEtBQUs7QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFBQSxFQUVBLFNBQVMsWUFBWTtBQUFBLEVBQ3JCLGdCQUFnQjtBQUFBO0FBQUEsRUFFaEIsT0FBTyxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXFCaEIsTUFBTTtBQUFBLE1BQ0osVUFBVTtBQUFBO0FBQUEsTUFDVixNQUFNO0FBQUE7QUFBQSxNQUNOLFVBQVU7QUFBQTtBQUFBLE1BQ1YsWUFBWTtBQUFBO0FBQUEsTUFDWixZQUFZO0FBQUE7QUFBQSxNQUNaLFNBQVMsQ0FBQyxjQUFjO0FBQUE7QUFBQSxNQUV4QixXQUFXO0FBQUEsUUFDVCxRQUFRO0FBQUEsUUFDUixPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxTQUFTO0FBQUEsTUFDWDtBQUFBLElBQ0Y7QUFBQTtBQUFBLElBR0EsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFLVCxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFZUCxTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtQLE9BQU87QUFBQTtBQUFBLFFBRUwsV0FBVyxDQUFDLFNBQVMsUUFBUSxjQUFjLGNBQWEsTUFBTTtBQUFBLFFBQzlELFVBQVU7QUFBQTtBQUFBLFFBQ1YsWUFBWTtBQUFBO0FBQUEsUUFDWixhQUFhO0FBQUE7QUFBQSxRQUNiLE9BQU87QUFBQTtBQUFBLE1BQ1Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBNEZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT0YsQ0FBQztBQUNILENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
