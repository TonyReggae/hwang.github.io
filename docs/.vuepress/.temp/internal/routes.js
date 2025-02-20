export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/codes/hwang.github.io/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Hello World!"} }],
  ["/humanities/", { loader: () => import(/* webpackChunkName: "humanities_index.html" */"E:/codes/hwang.github.io/docs/.vuepress/.temp/pages/humanities/index.html.js"), meta: {"title":"Humanities"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/codes/hwang.github.io/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
