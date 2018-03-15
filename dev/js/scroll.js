// import { disconnect } from "cluster";

//滾動
var last_known_scroll_position = 0;
console.log(last_known_scroll_position);

window.addEventListener("scroll", function(){
  //取得最後位址
   last_known_scroll_position = window.scrollY;
    console.log(last_known_scroll_position);
 });


var names = ["obj1" , "obj2" , "obj3" , "obj4"];
var text = "";
var i;
for (i = 0 ; i< names.length; i++) {
      text += "<li>" + names[i] + "</li>" + "<br/>";
}
document.getElementById("nav").innerHTML = text;
console.log("ok");


