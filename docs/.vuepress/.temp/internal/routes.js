export const redirects = JSON.parse("{\"/preview/custom-component.example.html\":\"/article/elwek20y/\",\"/preview/markdown.html\":\"/article/j7vqcuc2/\",\"/en/preview/custom-component.example.html\":\"/en/article/syl5dcf3/\",\"/en/preview/markdown.html\":\"/en/article/4ohumajb/\",\"/notes/demo/bar.html\":\"/demo/v28embst/\",\"/notes/demo/foo.html\":\"/demo/sdralx37/\",\"/notes/demo/\":\"/demo/\",\"/en/notes/demo/bar.html\":\"/en/demo/lo63bxxx/\",\"/en/notes/demo/foo.html\":\"/en/demo/33dg5uy5/\",\"/en/notes/demo/\":\"/en/demo/\",\"/README.zh-CN.html\":\"/article/mq621ymy/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/codes/hwang.github.io/blog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/en/", { loader: () => import(/* webpackChunkName: "en_index.html" */"E:/codes/hwang.github.io/blog/docs/.vuepress/.temp/pages/en/index.html.js"), meta: {"title":""} }],
  ["/article/elwek20y/", { loader: () => import(/* webpackChunkName: "article_elwek20y_index.html" */"E:/codes/hwang.github.io/blog/docs/.vuepress/.temp/pages/article/elwek20y/index.html.js"), meta: {"title":"自定义组件"} }],
  ["/article/j7vqcuc2/", { loader: () => import(/* webpackChunkName: "article_j7vqcuc2_index.html" */"E:/codes/hwang.github.io/blog/docs/.vuepress/.temp/pages/article/j7vqcuc2/index.html.js"), meta: {"title":"Markdown"} }],
  ["/en/article/syl5dcf3/", { loader: () => import(/* webpackChunkName: "en_article_syl5dcf3_index.html" */"E:/codes/hwang.github.io/blog/docs/.vuepress/.temp/pages/en/article/syl5dcf3/index.html.js"), meta: {"title":"Custom Component"} }],
  ["/en/article/4ohumajb/", { loader: () => import(/* webpackChunkName: "en_article_4ohumajb_index.html" */"E:/codes/hwang.github.io/blog/docs/.vuepress/.temp/pages/en/article/4ohumajb/index.html.js"), meta: {"title":"Markdown"} }],
  ["/demo/v28embst/", { loader: () => import(/* webpackChunkName: "demo_v28embst_index.html" */"E:/codes/hwang.github.io/blog/docs/.vuepress/.temp/pages/demo/v28embst/index.html.js"), meta: {"title":"bar"} }],
  ["/demo/sdralx37/", { loader: () => import(/* webpackChunkName: "demo_sdralx37_index.html" */"E:/codes/hwang.github.io/blog/docs/.vuepress/.temp/pages/demo/sdralx37/index.html.js"), meta: {"title":"foo"} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"E:/codes/hwang.github.io/blog/docs/.vuepress/.temp/pages/demo/index.html.js"), meta: {"title":"Demo"} }],
  ["/en/demo/lo63bxxx/", { loader: () => import(/* webpackChunkName: "en_demo_lo63bxxx_index.html" */"E:/codes/hwang.github.io/blog/docs/.vuepress/.temp/pages/en/demo/lo63bxxx/index.html.js"), meta: {"title":"bar"} }],
  ["/en/demo/33dg5uy5/", { loader: () => import(/* webpackChunkName: "en_demo_33dg5uy5_index.html" */"E:/codes/hwang.github.io/blog/docs/.vuepress/.temp/pages/en/demo/33dg5uy5/index.html.js"), meta: {"title":"foo"} }],
  ["/en/demo/", { loader: () => import(/* webpackChunkName: "en_demo_index.html" */"E:/codes/hwang.github.io/blog/docs/.vuepress/.temp/pages/en/demo/index.html.js"), meta: {"title":"Demo"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/codes/hwang.github.io/blog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"E:/codes/hwang.github.io/blog/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"博客"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"E:/codes/hwang.github.io/blog/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"E:/codes/hwang.github.io/blog/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"E:/codes/hwang.github.io/blog/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
  ["/en/blog/", { loader: () => import(/* webpackChunkName: "en_blog_index.html" */"E:/codes/hwang.github.io/blog/docs/.vuepress/.temp/pages/en/blog/index.html.js"), meta: {"title":"Blog"} }],
  ["/en/blog/tags/", { loader: () => import(/* webpackChunkName: "en_blog_tags_index.html" */"E:/codes/hwang.github.io/blog/docs/.vuepress/.temp/pages/en/blog/tags/index.html.js"), meta: {"title":"Tags"} }],
  ["/en/blog/archives/", { loader: () => import(/* webpackChunkName: "en_blog_archives_index.html" */"E:/codes/hwang.github.io/blog/docs/.vuepress/.temp/pages/en/blog/archives/index.html.js"), meta: {"title":"Archives"} }],
  ["/en/blog/categories/", { loader: () => import(/* webpackChunkName: "en_blog_categories_index.html" */"E:/codes/hwang.github.io/blog/docs/.vuepress/.temp/pages/en/blog/categories/index.html.js"), meta: {"title":"Categories"} }],
  ["/article/mq621ymy/", { loader: () => import(/* webpackChunkName: "article_mq621ymy_index.html" */"E:/codes/hwang.github.io/blog/docs/.vuepress/.temp/pages/article/mq621ymy/index.html.js"), meta: {"title":"README copy"} }],
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
