let menuBtn=document.getElementsByClassName('menu-btn')[0];
let mainMenu=document.getElementsByClassName('main-menu')[0];
menuBtn.addEventListener("click",(eo)=>{
    mainMenu.classList.toggle('show')
})