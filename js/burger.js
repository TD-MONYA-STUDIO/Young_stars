var hamburger = document.querySelector(".burger")
var menu = document.querySelector(".aside_menu")

hamburger.onclick = function(){
    hamburger.classList.toggle("burger_open")
    menu.classList.toggle("aside_menu_open")
}
