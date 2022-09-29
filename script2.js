
window.addEventListener("storage",(e)=>{
    document.querySelector(".u19-4").style.background = "orange";
    document.querySelector(".u19-4").innerHTML=localStorage.data;
})