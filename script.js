
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
let button4 = document.querySelector(".buttonU4");
document.querySelector(".inputU4");
button4.onclick = () => {
   console.log(document.querySelector(".inputU4").value);
   document.querySelector(".unit4").style.backgroundColor =
      document.querySelector(".inputU4").value;
}
document.querySelector(".inputU41").oninput = () => {
   document.querySelector(".u41").innerHTML =
      document.querySelector(".inputU41").value;
}
// document.querySelector(".inputU42").oninput=()=>{
//    if(document.querySelector(".inputU42").checked){
//       document.querySelector(".u42").innerHTML=
//    "true";
//    }else{
//       document.querySelector(".u42").innerHTML=
//    "false";
//    }
// }
document.querySelector(".inputU42").oninput = () => {
   console.log(document.querySelector(".inputU42").checked);
}

document.querySelector(".btU43").onclick = () => {
   console.log("cvcx");
   let text1 = document.querySelector(".textU4");
   let text2 = document.querySelector(".textU43");
   text2.value = text1.value;
}





