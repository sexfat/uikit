// import { disconnect } from "cluster";

//滾動
var last_known_scroll_position = 0;
console.log(last_known_scroll_position);

window.addEventListener("scroll", function(){
  //取得最後位址
   last_known_scroll_position = window.scrollY;
    console.log(last_known_scroll_position);
 });





