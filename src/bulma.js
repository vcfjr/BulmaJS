"use strict";
// first navbar burger 
// ignore other burgers if created by mistake or intensionally
// it just accepts the top navbar burger
var burger = document.getElementsByClassName("navbar-burger");

// first navbar 
// ignore other navbars if created by mistake or intensionally
// it just accepts the top navbar or the first navbar located on the top of the page
var navbar = document.getElementsByClassName("navbar-menu");

try {
    burger[0].addEventListener("click", (e) => {

        // toggler the class is-active class in navbar-menu
        navbar[0].classList.toggle("is-active")
    })
}
catch (err) {
    // pass
}


var btn = document.getElementsByClassName("modal-button");
for (let i = 0; i < btn.length; i++) {

    var modal = document.getElementById(btn[i].dataset.target);
    try {
        btn[i].addEventListener("click", (e) => {
            modal.classList.toggle("is-active")
        })
        modal.firstElementChild.addEventListener("click", (e) => {
            modal.classList.toggle("is-active")
        })
        for(let j=0; j<modal.getElementsByClassName('close').length; j++)
        {
            modal.getElementsByClassName('close')[j].addEventListener('click', (e) => {
                modal.classList.toggle("is-active")
            })
        }
    }
    catch (err) {
        console.log(err)
    }
}






