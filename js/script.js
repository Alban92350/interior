var burger = document.getElementById('hamburger');
var nav = document.querySelectorAll('nav')[0];
var position = 0;


burger.addEventListener('click',function(){
    if(position == 0){
        nav.style.left = 0;
        burger.style.transform = "rotate(90deg)";
        burger.style.transition = "0.5s";
        position = 1;
    }else{
        nav.style.left = '100%';
        burger.style.transform = "rotate(0)";
        burger.style.transition = "0.5s";
        position = 0;
    }
})


const currentLocation = location.href;
const menuItem = document.querySelectorAll('nav a');
const menuLength = menuItem.length;
for(let i = 0; i<menuLength; i++){
    if(menuItem[i].href === currentLocation){
        menuItem[i].className = "active"
    }
}