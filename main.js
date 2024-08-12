// const navbar= document.querySelector('.nav-bar').addEventListener('click',function(){
//     document.querySelector('.side-bar').style.display = 'block'
//     document.querySelector('.side-bar').style.display = 'none'
// })
const toggle_btn = document.getElementById('toggle_btn');
const side_bar = document.getElementById('side_bar');
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');
const text4 = document.getElementById('text4');
const text5 = document.getElementById('text5');
toggle_btn.addEventListener('click',function(){
    side_bar.classList.toggle("side_bar");
    side_bar.classList.toggle("side-bar-close");
    text1.classList.toggle("open");
    text2.classList.toggle("open");
    text3.classList.toggle("open");
    text4.classList.toggle("open");
    text5.classList.toggle("open");

})