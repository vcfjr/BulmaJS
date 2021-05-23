"use strict";
// first navbar burger 
// ignore other burgers if created by mistake or intensionally
// it just accepts the top navbar burger
var burger = document.getElementsByClassName("navbar-burger");

// first navbar 
// ignore other navbars if created by mistake or intensionally
// it just accepts the top navbar or the first navbar located on the top of the page
var navbar = document.getElementsByClassName("navbar-menu");
burger[0].addEventListener("click", (e) => {

    // toggler the class is-active class in navbar-menu
    if (navbar[0].classList.contains("is-active")) {
        navbar[0].classList.remove("is-active")
    }else{
        navbar[0].classList.add("is-active")
    }
})

