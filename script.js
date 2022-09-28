
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
document.querySelector(".inputU20").oninput= function(even){
  // console.log(1);
}

// document.querySelector(".inputU20").onkeypress= function(even){
//   console.log(`${even.charCode}           ${even.code}  ${even.key}`);
// }

document.querySelector(".inputU20").onkeydown= function(even){
  console.log(`${even.charCode}           ${even.code}  ${even.key}`);
}