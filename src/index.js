const openMenu = document.getElementById("hamburger-menu");
const navBar = document.getElementById("nav-links");
const main = document.getElementById("main-content");
const addIcon = document.getElementById("add");
const subtractIcon = document.getElementById("subtract");
const incrementValue = document.querySelectorAll("#increment-value");
const totalValue = document.getElementById("total");
const popUp = document.getElementById("pop-up");
const checkoutBtn = document.getElementById("checkout");
const checkoutSection = document.getElementById("checkout-section");
const addCartBtn = document.getElementById("add-to-cart");


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


let count = 0;
const price = 125;


function updateUi() {
    // Update all increment-value elements
    incrementValue.forEach(el => el.textContent = count);

    // Update total price (only show if count > 0)
    totalValue.textContent = count > 0 ? `$${count * price}.00` : "";

    //Update popup
    if(count > 0) {
        popUp.textContent = count;
        popUp.parentElement.classList.remove("hidden");
    } else {
        popUp.parentElement.classList.add("hidden");
    }
}

// Add button
addIcon.addEventListener("click", () => {
    count++;
    updateUi();
});

// Subtract button
subtractIcon.addEventListener("click", () => {
    if(count > 0) {
        count--;
        updateUi();
    }
});

// Checkout section
checkoutBtn.addEventListener("click", () => {
    popUp.parentElement.classList.add("hidden");

    checkoutSection.classList.add("hidden");
    count = 0;
    updateUi();
});

// Add to cart operation
addCartBtn.addEventListener("click", () => {
    if(count > 0) {
        checkoutSection.classList.remove("hidden");
    }
});