
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

document.querySelector(".push1").onclick = () =>{
      fetch('http://example.com/movies.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
      }