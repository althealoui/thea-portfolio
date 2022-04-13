const icon = document.querySelector(".fa");
const iconTrigger = document.querySelector("#iconTrigger").addEventListener("click", iconChanger);
const menuTrigger = document.querySelector("#menu");


function iconChanger(){
    if(icon.classList.contains("fa-bars")){

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-close");

        menuTrigger.classList.remove("menu-container");
        menuTrigger.classList.add("menu-container-show");
    }else{
        icon.classList.remove("fa-close");
        icon.classList.add("fa-bars");

        menuTrigger.classList.remove("menu-container-show")
        menuTrigger.classList.add("menu-container");
    }
}