export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/codes/hwang.github.io/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Hello World!"} }],
  ["/humanities/", { loader: () => import(/* webpackChunkName: "humanities_index.html" */"E:/codes/hwang.github.io/docs/.vuepress/.temp/pages/humanities/index.html.js"), meta: {"title":"Humanities"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/codes/hwang.github.io/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
