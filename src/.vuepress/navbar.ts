 import { navbar } from "vuepress-theme-hope";

export default navbar([
"/"
  ,
  
  {
    text: "开始",
    link: "/start/",
    
}
  ,
  {
    text: "笔记",
    children:[
      {
        text: "C++STL",
        link: "/note/C++STL/"
      },{
        text: "JAVA",
        link: "/note/JAVA"
      },{
        text: "前端三件套",
        link: "/note/web/"
      }
    ]
  }

  ,
  
]);
