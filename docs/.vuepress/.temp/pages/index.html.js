import comp from "E:/codes/hwang.github.io/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Hello World!\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"你好，世界！\",\"slug\":\"你好-世界\",\"link\":\"#你好-世界\",\"children\":[]}],\"git\":{\"updatedTime\":1740059107000,\"contributors\":[{\"name\":\"Kun\",\"username\":\"Kun\",\"email\":\"superman@example.com\",\"commits\":4,\"url\":\"https://github.com/Kun\"}]},\"filePathRelative\":\"README.md\"}")
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
