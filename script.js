/**
 * 1- Detect someone clicking the hamburger menu icon with addEventListener on a triggerEl
 * 2- In the event listener function, add a class to the menu (.menu-open) which translates the menu back into position
 * 3 (bonus task)- Detect when someone clicks the 'close-menu' ID with a second triggerEl and a second click eventlistener
 * 4 (bonus task)- Remove the .menu-open class in the event listener function
 */

//Cache DOMs
let hamburgerEl = document.getElementById("menu-hamburger")
let closerEl = document.getElementById("menu-close")
let closeSignUpEl = document.querySelector(".close-sign-up")
let submitEl = document.querySelector(".submit-button")

//Add event listeners to triggers
hamburgerEl.addEventListener("click", toggleMenu)
closerEl.addEventListener("click", toggleMenu)
closeSignUpEl.addEventListener("click", closeSignUp)
submitEl.addEventListener("click", getEmail)



//Event listener function
function toggleMenu() {
    let menuEl = document.querySelector(".menu")
    menuEl.classList.toggle("menu-open")
}

function closeSignUp() {
    let popUpContainerEl = document.querySelector(".pop-up-container")
    popUpContainerEl.classList.add("hidden")
}

function getEmail() {
    let emailEl = document.getElementById("email")
    console.log(emailEl.value)
    closeSignUp()
}


