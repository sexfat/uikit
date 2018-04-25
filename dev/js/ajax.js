//obj
var names = ["obj1" , "obj2" , "obj3" , "obj4" , "obj5" , "obj6"];
var text = "";
var i;
for (i = 0 ; i< names.length; i++) {
      text += "<li>" + names[i] + "</li>";
}
document.getElementById("nav").innerHTML = text;
console.log("ok");

//== ajax ==
//這邊我要做到的是 把資料透過ajax的方式倒出網頁上來


function loadDoc(){


//先建立httprequest物件
var xhttp = new XMLHttpRequest(); 
//build link informationn
xhttp.open('GET' , 'info.txt');
//連線資料

// document.getElementsByClassName("")

//執行連線
xhttp.send();
console.log("oks");
}
