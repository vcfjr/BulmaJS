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

/**-----------------------------------------------------------------------------------------*
 *                  Bulma Modal Js Toggling Control                                         *
 * ---------------------------------------------------------------------------------------**/



// it selects all the modal buttons
var btn = document.getElementsByClassName("modal-button");

for (let i = 0; i < btn.length; i++) {

    // select all the modals which are targeted by the modal button
    var modal = document.getElementById(btn[i].dataset.target);
    try {

        // toggler the class is-active class in modal
        btn[i].addEventListener("click", (e) => {
            modal = document.getElementById(btn[i].dataset.target);
            modal.classList.toggle("is-active")
        })

        // toggler the class is-active class in modal to close the modal
        modal.firstElementChild.addEventListener("click", (e) => {
            modal.classList.toggle("is-active")
        })

        // toggler the class is-active class in modal to close the modal
        // all the close class in the model are selected
        for (let j = 0; j < modal.getElementsByClassName('close').length; j++) {
            modal.getElementsByClassName('close')[j].addEventListener('click', (e) => {
                modal.classList.toggle("is-active")
            })
        }
    }
    catch (err) {
        console.log(err)
    }
}




/**-----------------------------------------------------------------------------------------*
 *                                Bulma Tabs Js Control                                     *
 * ---------------------------------------------------------------------------------------**/


//select all the tab-button
var tabButtons = document.getElementsByClassName('tab-button');

// Select all the tab content
var tabContent = document.getElementsByClassName('tab-content');

// Select the active tab content which is the tab- 1 by default
var targetedTabContent = document.querySelector(tabButtons[0].dataset.target);

// initially set the display to 'none' for all the tabContent except the first tabContent
for (var j = 1; j < tabContent.length; j++) {
    tabContent[j].style.display = 'none';
}

for (let i = 0; i < tabButtons.length; i++) {

    try {
        tabButtons[i].addEventListener('click', (e) => {

            targetedTabContent = document.querySelector(tabButtons[i].dataset.target);

            // Set all the tabContent display to none
            for (var j = 0; j < tabContent.length; j++) {
                tabContent[j].style.display = 'none';
            }

            // Set the targetedTabContent display to block
            targetedTabContent.style.display = 'block';


            // Remove the is-active class from the previously active tab button
            for(let j=0; j<tabButtons.length; j++)
            {
                if(tabButtons[j].classList.contains('is-active'))
                {
                    tabButtons[j].classList.remove('is-active');
                }
            }

            // Set the tab button to active
            if(!(tabButtons[i].classList.contains('is-active')))
            {
                tabButtons[i].classList.add('is-active');
            }
        });
    }
    catch (err) {
        console.log(err);
    }
}




/**-----------------------------------------------------------------------------------------*
 *                                Bulma Message Js Control                                  *
 * ---------------------------------------------------------------------------------------**/

// Select all the messages
var messages = document.getElementsByClassName('message');

for(let i = 0; i < messages.length; i++){
    try {

        // It just accepts the first delete button in the message
        messages[i].getElementsByClassName('delete')[0].addEventListener('click', (e)=>{
            messages[i].style.display = 'none';
        })
    } catch (err) {
        console.log(err);
    }
}