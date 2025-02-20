import comp from "E:/codes/hwang.github.io/docs/.vuepress/.temp/pages/humanities/index.html.vue"
const data = JSON.parse("{\"path\":\"/humanities/\",\"title\":\"Humanities\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1740044689000,\"contributors\":[{\"name\":\"Kun\",\"username\":\"Kun\",\"email\":\"superman@example.com\",\"commits\":1,\"url\":\"https://github.com/Kun\"}]},\"filePathRelative\":\"humanities/README.md\"}")
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
