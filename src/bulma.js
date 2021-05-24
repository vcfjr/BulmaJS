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
        if (navbar[0].classList.contains("is-active")) {
            navbar[0].classList.remove("is-active")
        } else {
            navbar[0].classList.add("is-active")
        }
    })
}
catch (err) {
    // pass
}


// var modal_btn = document.querySelector("#myModal-btn");

// var modal = document.querySelector("#myModal");

// modal_btn.addEventListener("click", (event)=>{

//     modal.classList.add("is-active");
// })


class BulmaModal {
    constructor(selector) {
        this.elem = document.querySelector(selector);
        this.close_data();
    }

    show() {
        this.elem.classList.toggle('is-active');
    }

    close_data() {
        var modalClose = this.elem.querySelectorAll("[data-bulma-modal='close'], .modal-background");
        var that = this;
        modalClose.forEach(function (e) {
            e.addEventListener("click", function () {

                that.elem.classList.toggle('is-active');
            });
        });
    }
}

var btn = document.querySelector("#myModal-btn");
var modal = new BulmaModal("#myModal");

btn.addEventListener("click", function () {
    modal.show();
});




