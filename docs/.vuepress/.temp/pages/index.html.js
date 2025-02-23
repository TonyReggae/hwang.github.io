import comp from "E:/codes/hwang.github.io/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"pageLayout\":\"home\",\"externalLinkIcon\":false,\"config\":[{\"type\":\"hero\",\"full\":true,\"background\":\"tint-plate\",\"hero\":{\"name\":\"👋你好，我的朋友\",\"tagline\":\"这里有一些探索世界的足迹\",\"text\":\"希望能给你带来启发和帮助\",\"actions\":[{\"theme\":\"brand\",\"text\":\"博客\",\"link\":\"/blog/\"}]}}],\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.21,\"words\":63},\"filePathRelative\":\"README.md\",\"categoryList\":[]}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
