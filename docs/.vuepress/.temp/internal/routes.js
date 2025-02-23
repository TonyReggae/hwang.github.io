export const redirects = JSON.parse("{\"/notes/demo/bar.html\":\"/demo/v28embst/\",\"/notes/demo/foo.html\":\"/demo/sdralx37/\",\"/notes/demo/\":\"/demo/\",\"/notes/nio/\":\"/nio/\",\"/en/notes/demo/bar.html\":\"/en/demo/lo63bxxx/\",\"/en/notes/demo/foo.html\":\"/en/demo/33dg5uy5/\",\"/en/notes/demo/\":\"/en/demo/\",\"/notes/nio/1.%E7%BC%93%E5%86%B2%E5%8C%BA/1.1_Buffer.html\":\"/nio/87wfm477/\",\"/notes/nio/1.%E7%BC%93%E5%86%B2%E5%8C%BA/1.2_ByteBuffer.html\":\"/nio/bjn5txqe/\",\"/notes/nio/1.%E7%BC%93%E5%86%B2%E5%8C%BA/1.3_CharBuffer.html\":\"/nio/unpl3i2c/\",\"/notes/nio/1.%E7%BC%93%E5%86%B2%E5%8C%BA/1.4_Channel.html\":\"/nio/3fzoxgbn/\",\"/notes/nio/2.%E9%80%9A%E9%81%93/2.1_Channel.html\":\"/nio/xmtqbxjy/\",\"/notes/nio/4.%E5%AE%9E%E7%8E%B0Socket%E9%80%9A%E4%BF%A1/4.1_%E5%9F%BA%E4%BA%8ETCP%E7%9A%84Socket%E9%80%9A%E4%BF%A1.html\":\"/nio/53gpa68f/\",\"/blog/%E8%B4%B9%E6%9B%BC%E5%AD%A6%E4%B9%A0%E6%B3%95/1.%E7%94%A8%E8%B4%B9%E6%9B%BC%E5%AD%A6%E4%B9%A0%E6%B3%95%E5%AD%A6%E4%B9%A0%E8%B4%B9%E6%9B%BC%E5%AD%A6%E4%B9%A0%E6%B3%95.html\":\"/article/sil8wlao/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/codes/hwang.github.io/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/en/", { loader: () => import(/* webpackChunkName: "en_index.html" */"E:/codes/hwang.github.io/docs/.vuepress/.temp/pages/en/index.html.js"), meta: {"title":""} }],
  ["/demo/v28embst/", { loader: () => import(/* webpackChunkName: "demo_v28embst_index.html" */"E:/codes/hwang.github.io/docs/.vuepress/.temp/pages/demo/v28embst/index.html.js"), meta: {"title":"bar"} }],
  ["/demo/sdralx37/", { loader: () => import(/* webpackChunkName: "demo_sdralx37_index.html" */"E:/codes/hwang.github.io/docs/.vuepress/.temp/pages/demo/sdralx37/index.html.js"), meta: {"title":"foo"} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"E:/codes/hwang.github.io/docs/.vuepress/.temp/pages/demo/index.html.js"), meta: {"title":"Demo"} }],
  ["/nio/", { loader: () => import(/* webpackChunkName: "nio_index.html" */"E:/codes/hwang.github.io/docs/.vuepress/.temp/pages/nio/index.html.js"), meta: {"title":"NIO与Socket编程技术指南"} }],
  ["/en/demo/lo63bxxx/", { loader: () => import(/* webpackChunkName: "en_demo_lo63bxxx_index.html" */"E:/codes/hwang.github.io/docs/.vuepress/.temp/pages/en/demo/lo63bxxx/index.html.js"), meta: {"title":"bar"} }],
  ["/en/demo/33dg5uy5/", { loader: () => import(/* webpackChunkName: "en_demo_33dg5uy5_index.html" */"E:/codes/hwang.github.io/docs/.vuepress/.temp/pages/en/demo/33dg5uy5/index.html.js"), meta: {"title":"foo"} }],
  ["/en/demo/", { loader: () => import(/* webpackChunkName: "en_demo_index.html" */"E:/codes/hwang.github.io/docs/.vuepress/.temp/pages/en/demo/index.html.js"), meta: {"title":"Demo"} }],
  ["/nio/87wfm477/", { loader: () => import(/* webpackChunkName: "nio_87wfm477_index.html" */"E:/codes/hwang.github.io/docs/.vuepress/.temp/pages/nio/87wfm477/index.html.js"), meta: {"title":"1.1 Buffer"} }],
  ["/nio/bjn5txqe/", { loader: () => import(/* webpackChunkName: "nio_bjn5txqe_index.html" */"E:/codes/hwang.github.io/docs/.vuepress/.temp/pages/nio/bjn5txqe/index.html.js"), meta: {"title":"1.2 ByteBuffer"} }],
  ["/nio/unpl3i2c/", { loader: () => import(/* webpackChunkName: "nio_unpl3i2c_index.html" */"E:/codes/hwang.github.io/docs/.vuepress/.temp/pages/nio/unpl3i2c/index.html.js"), meta: {"title":"CharBuffer"} }],
  ["/nio/3fzoxgbn/", { loader: () => import(/* webpackChunkName: "nio_3fzoxgbn_index.html" */"E:/codes/hwang.github.io/docs/.vuepress/.temp/pages/nio/3fzoxgbn/index.html.js"), meta: {"title":"Channel"} }],
  ["/nio/xmtqbxjy/", { loader: () => import(/* webpackChunkName: "nio_xmtqbxjy_index.html" */"E:/codes/hwang.github.io/docs/.vuepress/.temp/pages/nio/xmtqbxjy/index.html.js"), meta: {"title":"Channel"} }],
  ["/nio/53gpa68f/", { loader: () => import(/* webpackChunkName: "nio_53gpa68f_index.html" */"E:/codes/hwang.github.io/docs/.vuepress/.temp/pages/nio/53gpa68f/index.html.js"), meta: {"title":"4.1 基于TCP的Socket通信"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/codes/hwang.github.io/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"E:/codes/hwang.github.io/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"博客"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"E:/codes/hwang.github.io/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"E:/codes/hwang.github.io/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
  ["/en/blog/", { loader: () => import(/* webpackChunkName: "en_blog_index.html" */"E:/codes/hwang.github.io/docs/.vuepress/.temp/pages/en/blog/index.html.js"), meta: {"title":"Blog"} }],
  ["/en/blog/archives/", { loader: () => import(/* webpackChunkName: "en_blog_archives_index.html" */"E:/codes/hwang.github.io/docs/.vuepress/.temp/pages/en/blog/archives/index.html.js"), meta: {"title":"Archives"} }],
  ["/en/blog/categories/", { loader: () => import(/* webpackChunkName: "en_blog_categories_index.html" */"E:/codes/hwang.github.io/docs/.vuepress/.temp/pages/en/blog/categories/index.html.js"), meta: {"title":"Categories"} }],
  ["/article/sil8wlao/", { loader: () => import(/* webpackChunkName: "article_sil8wlao_index.html" */"E:/codes/hwang.github.io/docs/.vuepress/.temp/pages/article/sil8wlao/index.html.js"), meta: {"title":"用“费曼学习法”学习《费曼学习法》"} }],
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
