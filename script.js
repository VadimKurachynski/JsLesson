
// console.log("привет!");
// document.getElementById('out').innerHTML = '5555555';
// let a = document.querySelector('.out1').innerHTML;
// console.log(a);
// let b = document.querySelector('.out2').clientWidth;
// console.log(b);
// document.querySelector('.out2').innerHTML = b;
// let c = document.querySelector(".input1");
// let button1 = document.querySelector('.button1');
// button1.onclick = function () {
//     console.log(c.value);
//}

// --------------UNIT3------------------------------
// let inputU3=document.querySelector(".inputU3");
// let button2 = document.querySelector(".buttonU3");
// button2.onclick = ()=> {
//    let num =+inputU3.value;
//    if (num >=16){
//     console.log("welcom");
//    }else{
//     console.log("no");
//    }
// }

// --------------UNIT4------------------------------
// let button4 = document.querySelector(".buttonU4");
// document.querySelector(".inputU4");
// button4.onclick = () => {
//    console.log(document.querySelector(".inputU4").value);
//    document.querySelector(".unit4").style.backgroundColor =
//       document.querySelector(".inputU4").value;
// }
// document.querySelector(".inputU41").oninput = () => {
//    document.querySelector(".u41").innerHTML =
//       document.querySelector(".inputU41").value;
// }
// document.querySelector(".inputU42").oninput=()=>{
//    if(document.querySelector(".inputU42").checked){
//       document.querySelector(".u42").innerHTML=
//    "true";
//    }else{
//       document.querySelector(".u42").innerHTML=
//    "false";
//    }
// }
// document.querySelector(".inputU42").oninput = () => {
//    console.log(document.querySelector(".inputU42").checked);
// }

// document.querySelector(".btU43").onclick = () => {
//    console.log("cvcx");
//    let text1 = document.querySelector(".textU4");
//    let text2 = document.querySelector(".textU43");
//    text2.value = text1.value;
// }

// let formU4=document.querySelector(".formU4");


// document.querySelector(".form-btn").onclick = () => {
//    console.log("cvcx");
//    console.log(formU4[0].value);
// }


// let div = document.querySelectorAll(".unit5 div");
// console.log(div);
// console.log(div.length);
// for (let i = 0; i < div.length; i++) {
//    div[i].style.backgroundColor = "red";
//    div[i].style.border="1px solid black";
// }
// --------------UNIT5------------------------------
// let rd = document.querySelectorAll(`input[name="r"]`);
// let bt = document.querySelector(".btU5").onclick = () => {
//    for (let i = 0; i < rd.length; i++) {
//       if (rd[i].checked == true) {
//          console.log(`попало  ${rd[i].value} `)
//       }
//    }
// }

// --------------UNIT9------------------------------
// let tt=document.querySelector('.textp');
// tt.style.background="red";
// tt.style.color="blue";
// console.log(tt.style);

// document.querySelectorAll(".btU9").onclick=function(){
//    this.classList.toggle("one");
// }

// let gas=document.querySelectorAll(".btU9");
// for(let i=0; i<gas.length;i++)
// {
//    gas[i].onclick=function(){
//       console.log(this.getAttribute('data'));
// }
//       }

// let bt = document.querySelector(".bt99").onclick = function () {
//       let sd = 0;
//       let inp = document.querySelector(".in99");
//       sd = inp.value;
//       document.querySelector(".graf").innerHTML = "";
//       for (let i = 0; i < sd; i++) {
//             let a = document.createElement("button");
//             a.innerHTML = `<div class="tr${i + 1}">Элемент ${i + 1} </div>`;
//             a.classList.add("col1");
//             a.onclick = function () {
//                   this.style.background = "red";
//                   // this.remove();
//             }
//             document.querySelector(".graf").appendChild(a);
//             document.querySelector(`.tr${i + 1}`).style.background = "red";
//       }
// }

// --------------UNIT12------------------------------
// let d = [1, 0, 0, 0, 0, 0, 0];
// let k = 0;

// let k=6;
// document.querySelector(".outU12").innerHTML = k;
// document.querySelector(".push1").onclick = () =>{
//   k=k+1;
// document.querySelector(".outU12").innerHTML = k;
// }
// document.querySelector(".push2").onclick = () =>{
// k=k-1;
// document.querySelector(".outU12").innerHTML = k;
// }
// document.querySelector(".push3").onclick = () =>{
//      k= +document.querySelector(".in12").value;

//     }
// k=8;

// let a = {
//       "a": 5,
//       "b": "hello",
//       "z2": 89,
//       "s14 2": "privet",
// };


// console.log(a);
// console.log(a["s14 2"]);

// a.fg = "rtt";
// let out = "";
// document.querySelector(".outU12").innerHTML = a["s14 2"];
// for (let key in a) {
//       out += `${key} ___ ${a[key]}` + "<br>";
// }
// document.querySelector(".outU12").innerHTML = out;

// let a=new Set();
// a.add(1);
// a.add(2);
// a.add(3);
// a.add("hello");
// a.add(1);
// // console.log(a);
// for(let item of a){
//   // console.log(item);
// }
// let arr=[1,2,1,7,1,1,3,1,7,1,1];
// let b =new Set(arr);
// console.log(b);
// var mySet = new Set();
// mySet.add(document.querySelector(".textU4"));
// mySet.has(document.querySelector("body")); // true
// console.log(mySet);

// --------------UNIT17------------------------------
// let a =[4,5,6,12,30,200,1,0,-2];
// let b=a.map(function(item,index){
//   return item+2;
// });
// console.log(b);

// --------------UNIT19------------------------------
// document.querySelector(".u19-1").onclick = (even) => {
//   console.log(even);
//   console.log("привет");
// }
// document.querySelector(".u19-2").onclick = () => {
//   console.log("привет");
// }
// document.querySelector(".u19-2").ondblclick = () => {
//   console.log("привет двойной");
// }
// document.querySelector(".u19-2").oncontextmenu = () => {
//   console.log("content");
// }

// let w = 75;
// document.querySelector(".u19-3").onmousemove = () => {
//   document.querySelector(".u19-3").style.width = w + "px";
//   w++;
// }
// document.querySelector(".u19-3").onmousemove = () => {
//   document.querySelector(".u19-3").style.background = "red";
// }
// document.querySelector(".u19-3").onmouseleave = () => {
//   document.querySelector(".u19-3").style.background = "black";
// }
// document.querySelector(".u19-3").onmousedown = () => {
//   document.querySelector(".u19-3").style.background = "orange";
// }
// document.querySelector(".u19-3").onmouseup = () => {
//   document.querySelector(".u19-3").style.background = "blue";
// }

// // let x=document.querySelector(".progru19").value;
// // console.log(x);
// document.querySelector(".u19bt").onclick = () => {

//   document.querySelector(".progru19").value+=10;
//   if(document.querySelector(".progru19").value==100){
//     document.querySelector(".progru19").value=0;
//   }
// }

// --------------UNIT20------------------------------
// document.querySelector(".inputU20").oninput= function(even){
//   console.log(1);
// }

// document.querySelector(".inputU20").onkeypress= function(even){
//   console.log(`${even.charCode}           ${even.code}  ${even.key}`);
// }

// document.querySelector(".inputU20").onkeydown= function(even){
//   console.log(`${even.charCode}           ${even.code}  ${even.key}`);
// }

// document.querySelector(".inputU20").onkeyup= function(even){
//   console.log(`${even.charCode}           ${even.code}  ${even.key}`);
// }

// --------------UNIT21------------------------------
// document.querySelector(".u19-3").addEventListener("touchstart",mytouch1);
// document.querySelector(".u19-3").addEventListener("touchend",mytouch2);
// document.querySelector(".u19-3").addEventListener("touchmove",mytouch3);


// function mytouch1(){
//   console.log("toch1");
// }
// function mytouch2(){
//   console.log("toch2");
// }
// function mytouch3(){
//   console.log("toch3");
// }
// --------------UNIT22------------------------------
// let a=5;
// a=a*2;
// console.log(a);
// try{
//   document.querySelector(".23").innerHTML=a;
// }
// catch(err){
//   console.log("ошибка");
//   console.log(err);
// }
// frt();
// function frt(){
//   console.log(2);
// }


// --------------UNIT23------------------------------
// localStorage.setItem("data", 5);
// localStorage.setItem("mass", [1,2,3,4,5]);
// // let b=localStorage.data[3];
// // let b=localStorage.getItem("data");
// let b=localStorage.data;
// let d=localStorage.mass;
// console.log(d);
//  let u=d.split(",").map(string => parseInt(string))
//  console.log(u);


// let t=0;
// document.querySelector(".u23bt").onclick = () => {

//     localStorage.setItem("data", t);
//     const p = JSON.parse(t);
//     console.log(t);
//     t+=1;
//     sessionStorage.setItem('test', 1);
// }
// // localStorage.clear();

// --------------UNIT25------------------------------
// https://itchief.ru/javascript/ajax-introduction



// let xtget=new XMLHttpRequest();
// xtget.onreadystatechange=function(){
//    if (this.readyState==4 && this.status==200){
//     myFunction(this.responseText)
//    }
// }
// xtget.open("GET","http://getpost.itgid.info/index2.php",true);
// xtget.send();
// function myFunction(data){
//     console.log(data);
// }

// document.querySelector(".u23bt1").onclick = () => {
//     let xtget = new XMLHttpRequest();
//     xtget.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             myFunction(this.responseText)
//         }
//     }
//     xtget.open("POST", "http://node.operate.su/12.php", true);
//     xtget.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     xtget.send("fname=ПЕТЯ&lname=Ford");

//     function myFunction(data) {
//         let myObj = JSON.parse(data);
//         console.log(myObj);
//         document.querySelector(".u19-1").innerHTML = myObj.name;
//         document.querySelector(".u19-2").innerHTML = myObj.age;
//         document.querySelector(".u19-3").innerHTML = myObj.city;
//     }

// }

// fetch("http://node.operate.su/12.php")
//     .then(data => {
//         console.log(data);
//         return data.text();
//     })
//     .then(data=>{
//         console.log(data);
//     })

// let a = new Promise((resolve, reject) => {
//     fetch("http://localhost/12.php")
//         .then(data => {
//             resolve(data.text());
//         })
// });

// // let b = new Promise((resolve, reject) => {
// //     fetch("http://node.operate.su/12.php")
// //         .then(data => {
// //             resolve(data.text());
// //         })
// // });

// // a.then(data => {
// //     //console.log(data);
// // })

// // b.then(data => {
// //    // console.log(data);
// // })

// // Promise.all([a, b]).then(value => {
// //     console.log(value[0]);
// //     console.log(value[1]);
// //     const p = JSON.parse(value[0]);
// //     console.log(p[2],p[1],p[0]);
// // });

// Promise.all([a]).then(value => {
//     console.log(value[0]);
//     const p = JSON.parse(value[0]);
//     console.log(p[0]);
// });

// //-----------------------отправка json на сервер-----------------
// fetch('http://localhost/12.php', {
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json, text/plain, */*',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ a: 7, b: 89, str: 'stroka' })
// }).then(res => res.json())
//     .then(res => console.log(res));


// //-----------------------php-----------------
//     // <?php
//     // $json = file_get_contents('php://input');
//     // $obj = json_decode($json,true);
//     // $a = $obj['a'];
//     // $b = $obj['b'];
//     // $str = $obj['str'];
//     // $arr = array('a' => $a, 'b' => $b, 'c' => $str);
//     // echo json_encode($arr);
//     //-----------------------php-----------------
// //-----------------------отправка json на сервер-----------------


// //-----------------------ПРОМИСЫ- пример---------------
// let a = new Promise((resolve, reject) => {
//     fetch('http://localhost/12.php', {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json, text/plain, */*',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ a: 7, b: 89, str: 'stroka' })
//     }).then(res => resolve(res.json()));

// });
// a.then(res => {
//     //  console.log(res);
// })

// let b = new Promise((resolve, reject) => {
//     fetch('http://localhost/12.php', {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json, text/plain, */*',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ a: 90, b: 92, str: 'stroka2' })
//     }).then(res => resolve(res.json()));
// });

// b.then(res => {
//     //  console.log(res);
// })

// Promise.all([a, b]).then(value => {
//     console.log(value[0]);
//     for (let key in value[0]) {
//         console.log(value[0][key]);
//     }
//     console.log(value[1]);
//     for (let key in value[1]) {
//         console.log(value[1][key]);
//     }

// });
// //-----------------------ПРОМИСЫ- пример-конец--------------


// --------------UNIT28------------------------------

class Alert {
    constructor(a, c, d) {
        this.message = a;
        this.cssClass = c;
        this.out = d;
    }
    showAlert() {
        document.querySelector(this.out).innerHTML = `<p class="${this.cssClass}">${this.message}</p>`;
    }
}

// document.querySelector(".buttonMy").style.backgroundColor="red";
document.querySelector(".buttonMy").style.width="200px";
document.querySelector(".buttonMy").style.height="100px";

class MyButton {
    constructor(a, b, c, d) {
        this.n = a;
    }
    // document.querySelector(this.n).style.backgroundColor="red";
}

class Alert2 extends Alert {
    constructor(a, c, d, icon) {
        super(a, c, d);
        this.icon = icon;
    }
    showIconAlert() {
        document.querySelector(this.out).innerHTML =
            `<p class="${this.cssClass}">${this.message}</p>
    <span class="material-symbols-outlined">
    ${this.icon} </span>`;
    }

}

let m = new Alert("My message", "orange", ".test");

console.log(m);
m.showAlert();

let m2 = new Alert2("My message", "orange", ".test", "home");
m2.showIconAlert();
console.log(m2);




