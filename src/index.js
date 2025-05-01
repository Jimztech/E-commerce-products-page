const openMenu = document.getElementById("hamburger-menu");
const navBar = document.getElementById("nav-links");
const main = document.getElementById("main-content");


function toggleMenu() {
    if(window.innerWidth < 900) {
        if(navBar.style.display === "flex") {
            navBar.style.display = "none";
            openMenu.src = "./images/icon-menu.svg";
        } else {
            navBar.style.display = "flex";
            openMenu.src = "./images/icon-close.svg";
        }
    }
}
openMenu.addEventListener("click", toggleMenu);
main.addEventListener("click", () => {
    if(navBar.style.display === "flex") {
        navBar.style.display = "none";
        openMenu.src = "./images/icon-menu.svg";
    }
});