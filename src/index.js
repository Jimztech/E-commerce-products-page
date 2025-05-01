const openMenu = document.getElementById("hamburger-menu");
const navBar = document.getElementById("nav-links");

openMenu.addEventListener("click", () => {
    if(navBar.style.display === "flex") {
        navBar.style.display = "none";
        openMenu.src = "./images/icon-menu.svg";
    } else {
        navBar.style.display = "flex";
        openMenu.src = "./images/icon-close.svg";
    }
});