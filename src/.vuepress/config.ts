import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Kirari的笔记本",
  description: "记录点点滴滴",

  head: [
    ["link", { rel: "icon", href: "/assets/image/ybd.webp" }]
    ,
  ],
  theme,
  
  plugins: [
    searchProPlugin({
      indexContent: true,
      hotReload: true,
      hotKeys:[],
      
    }),

  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
