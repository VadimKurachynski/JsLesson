console.log("привет!");
document.getElementById('out').innerHTML = '5555555';
let a = document.querySelector('.out1').innerHTML;
console.log(a);
let b = document.querySelector('.out2').clientWidth;
console.log(b);
document.querySelector('.out2').innerHTML = b;
let c = document.querySelector(".input1");
let button1 = document.querySelector('.button1');
button1.onclick = function () {
    console.log(c.value);
}

let button2 = document.querySelector(".buttonU3");
button2.onclick = ()=> {
    console.log(c.value);
}