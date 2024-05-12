import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Kirari的笔记本",
  description: "记录点点滴滴",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
