// Put your application javascript here


let menuButton = document.querySelector(".menu-toggle");
let mobileMenu = document.querySelector(".mobile-menu-wrap");
let menuClose = document.querySelector(".menu-close");

menuButton.addEventListener("click", function(){
    mobileMenu.classList.add("mobile-menu-active");
    this.parentNode.parentNode.parentNode.parentNode.classList.add("menu-active")
})

menuClose.addEventListener("click", function(){
    mobileMenu.classList.remove("mobile-menu-active");
    this.parentNode.parentNode.parentNode.parentNode.parentNode.classList.remove("menu-active")
})
