const hamBtn = document.getElementById("ham-btn");
const nav = document.getElementById("ul");
const themeSwitchBtn = document.getElementById("switch");
const themeIcon = document.getElementById("theme-icon");

window.onresize = displayWindowSize;

let check = 3;
let check2 = 3;


function displayWindowSize() {
    width = window.innerWidth;
    if(width >= 680) {
        nav.style.display = "flex";
    }
};

function navManager() {
    if(check%2 === 1) {
    nav.style.display = "inline-block";
    nav.style.textAlign = "center";
    } else if(check % 2 === 0) {
    nav.style.display = "none";
    }
    check++;
}

function themeChanger(){
    document.body.classList.toggle("dark-theme");
    if(check2 % 2 === 0) {
        themeIcon.src = "images/light.png";
    } else if(check % 2 === 1) {
        themeIcon.src = "images/dark.png";
    }
    check2++;
}

hamBtn.addEventListener("click", navManager);
themeSwitchBtn.addEventListener("click", themeChanger);