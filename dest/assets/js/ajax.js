// // // //obj
// // // var names = ["obj1" , "obj2" , "obj3" , "obj4" , "obj5" , "obj6"];
// // // var text = "";
// // // var i;
// // // for (i = 0 ; i< names.length; i++) {
// // //       text += "<li>" + names[i] + "</li>";
// // // }
// // // document.getElementById("nav").innerHTML = text;
// // // console.log("ok");

// // // //== ajax ==
// // // //這邊我要做到的是 把資料透過ajax的方式倒出網頁上來


// // // function loadDoc(){


// // // //先建立httprequest物件
// // // var xhttp = new XMLHttpRequest(); 
// // // //build link informationn
// // // xhttp.open('GET' , 'info.txt');
// // // //連線資料

// // // // document.getElementsByClassName("")

// // // //執行連線
// // // xhttp.send();
// // // console.log("oks");
// // // }
// // //第一種
// // // var xhr = new XMLHttpRequest();
// // // xhr.open('get', '../idcard.xml', true);

// // // xhr.onload = function () {
// // //     //document.getElementById("info").innerHTML = xhr.responseText;

// // //     var xmlDoc = $.parseXML(xhr);


// // //     // $('#info').text = xhr.responseText;
// // // };
// // // xhr.send(null);

// // //第二種
// // // xhr.onreadystatechange = function () {
// // //     if (xhr.readyState == 4 && xhr.status == 200) {
// // //         document.getElementById("info").innerHTML = xhr.responseText;
// // //     }
// // // }

// // // xhr.open('get', '../idcard.xml', true);
// // // xhr.send(null);

// // // var aw = $.extend({}, aw); /* 全域變數 */



// // // aw.checkID = function(id) {
// // // 	var PADCHARS = 'ABCDEFGHJKLMNPQRSTUVXYWZIO';
// // // 	var pid = (id || '') + '';
// // // 	if (!/^[A-Z]{1}[1-2]{1}[0-9]{8}$/.test(pid)) {
// // // 		return false;
// // // 	}
// // // 	var id0 = pid.charAt(0) + '';
// // // 	var inum = PADCHARS.indexOf(id0) + 10;
// // // 	inum = Math.floor(inum / 10) + ((inum % 10) * 9);
// // // 	for (var i = 1; i < pid.length - 1; i++) {
// // // 		inum += (parseFloat('' + pid.charAt(i)) * (9 - i));
// // // 	}
// // // 	inum += parseFloat('' + pid.charAt(pid.length - 1));
// // // 	return inum % 10 == 0;
// // // }



// // console.log('ok');

// // //     var xhr = new XMLHttpRequest();
// // //     xhr.open('get','../idcard.xml',true);
// // //     // true 非同步，不會把資料傳回，就讓程式繼續執行，等到回傳到資料才會自動回傳
// // // // false 同步，他會等資料傳回來，才讓程式繼續執行
// // //     xhr.send(null);
// // //     xhr.onload = function(){
// // //      console.log('ent ok');
// // //     };



// // //**************************************
// // // 台灣身份證檢查簡短版 for Javascript
// // //**************************************
// function checkTwID(){

//     var id = document.getElementById('idnum').value;
//     //建立字母分數陣列(A~Z)
//     var city = new Array(
//          1,10,19,28,37,46,55,64,39,73,82, 2,11,
//         20,48,29,38,47,56,65,74,83,21, 3,12,30
//     );
//     id = id.toUpperCase();
//     // 使用「正規表達式」檢驗格式
//     if (id.search(/^[A-Z](1|2)\d{8}$/i) == -1) {
//         alert('基本格式錯誤');
//         return false;
//     } else {
//         //將字串分割為陣列(IE必需這麼做才不會出錯)
//         id = id.split('');
//         //計算總分
//         var total = city[id[0].charCodeAt(0)-65];
//         for(var i=1; i<=8; i++){
//             total += eval(id[i]) * (9 - i);
//         }
//         //補上檢查碼(最後一碼)
//         total += eval(id[9]);
//         //檢查比對碼(餘數應為0);
//         return ((total%10 == 0 ));
//     }
// }


// //***************************
// // 台灣身份證產生簡短版 javascript 版
// //***************************
// function getTwID(){
//     //建立字母分數陣列(A~Z)
//     var city = new Array(
//          1,10,19,28,37,46,55,64,39,73,82, 2,11,
//         20,48,29,38,47,56,65,74,83,21, 3,12,30
//     )
//     //建立隨機身份證碼
//     var id = new Array();
//     id[0] = String.fromCharCode(Math.floor(Math.random() * (26)) + 65);
//     id[1] = Math.floor(Math.random() * (2)) + 1;
//     for(var i=2; i<9; i++){
//         id[i] = Math.floor(Math.random() * (9)) + 0;
//     }
//     //計算總分
//     var total = city[id[0].charCodeAt(0)-65];
//     for(var i=1; i<=8; i++){
//         total += eval(id[i]) * (9 - i);
//     }
//     //計算最尾碼
//     var total_arr = (total+'').split('');
//     var lastChar = eval(10-total_arr[total_arr.length-1]);
//     var lastChar_arr = (lastChar+'').split('');
//     //補上最後檢查碼
//     id[id.length++] = lastChar_arr[lastChar_arr.length-1];
//     //回傳結果
//     return id.join('');
// }

function checkID() {
    var val = document.getElementById('idnum').value;
    if (val.length !== 10) {
        // alert('身分證字號長度不正確');
        document.getElementById("results").style.color = "red";
        document.getElementById("results").innerHTML = "身分證字號長度不正確";
    } else {
        document.getElementById("results").style.color = "blue";
        document.getElementById("results").innerHTML = "完成";
    }
}




// 判斷斷點
// function rwd(){
//     if ($(window).width() < 767) {
//        document.getElementById('text').innerHTML='手機版';
//         // 當視窗寬度小於767px時執行
//     } else {
//         document.getElementById('text').innerHTML='桌機版';
//         // 當視窗寬度不小於767px時執行
//     }
// }
// //當畫面有變動時會驅動
// $(window).resize(function() {
//     rwd();
// });
// function checkID(val) {
//     if (val.length !== 10) {
//         alert('身分證字號長度不正確');
//     } else{
//         alert('完成');
//     }
// }
// var vadild = document.getElementById('idnum').value;
// document.getElementById("valbtn").addEventListener("click", myFunction);




function show_itemContent() {
    var itemtitle = document.getElementsByClassName('item_title');
    var icon = document.getElementsByClassName('fa-angle-down');
    var content = document.getElementsByClassName('item_content');
    for (i = 0; i < 2; i++) {
        itemtitle[i].addEventListener("click", function () {
            if (icon[i].classList.contains('fa-angle-up')) { //content打開中
                icon[i].classList.remove('fa-angle-up')
                content[i].style.display = "flex";
            } else {
                icon[i].classList.add('fa-angle-up');
                content[i].style.display = "none";
            }
        });
    }
};