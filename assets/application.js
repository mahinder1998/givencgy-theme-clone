// Put your application javascript here


let mainNav = document.querySelector(".main-navbar");
let menuButton = document.querySelector(".menu-toggle");
let mobileMenu = document.querySelector(".mobile-menu-wrap");
let menuClose = document.querySelectorAll(".menu-close");
let subMenuBtn = document.querySelectorAll(".submenu-button");
let submenuBack = document.querySelectorAll(".submenu-back");
let subMenuConatiner = document.querySelectorAll(".submenu-container");
let subMenuCloase = document.querySelectorAll(".submenu-close-btn");
let subMenuItem = document.querySelectorAll(".submenu-item");


menuButton.addEventListener("click", function(){
    mobileMenu.classList.add("mobile-menu-active");
    mainNav.classList.add("menu-active");
})

//
function closeMenu(){
    subMenuConatiner.forEach(function(e){
        e.classList.remove("submenu-open");
    })
}

menuClose.forEach(function(closebtn){
    closebtn.addEventListener("click", function(){
        mobileMenu.classList.remove("mobile-menu-active");
        mainNav.classList.remove("menu-active");
        closeMenu();
    })
})



// submenu btn on click
subMenuBtn.forEach(function(submenubtn){
    submenubtn.addEventListener("click", function(){
        const submenuNext = submenubtn.nextElementSibling;
        submenuNext.classList.add("submenu-open")
    })
})

// submenu back
submenuBack.forEach(function(submenuback){ 
    submenuback.addEventListener("click", function(){
        const backstep = submenuback.parentNode.parentNode;
        backstep.classList.remove("submenu-open");
    })
})


subMenuItem.forEach(function(e){
    e.addEventListener("mouseover", function(item){
        const itemSelect = item.target.closest(".submenu-item");
        itemSelect.classList.add("desktop-submenu-open")
    })
    e.addEventListener("mouseout", function(item){
        const itemSelect = item.target.closest(".submenu-item");
        itemSelect.classList.remove("desktop-submenu-open")
    })
})



//submenu close for desktop
subMenuCloase.forEach(function(e){
    e.addEventListener("click", function(event){
       const deskSubMenu = event.target.closest(".submenu-item");
       deskSubMenu.classList.remove("desktop-submenu-open")
    })
})

// hover
