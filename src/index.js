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
const deleteIcon = document.getElementById("delete");
const emptyCart = document.getElementById("empty-cart");
const cartIcon = document.getElementById("cart");

/*
function toggleMenu() {
    if(window.innerWidth < 900) {
        navBar.classList.toggle('hidden');
        
        if(navBar.classList.contains('hidden')) {
            openMenu.src = "/images/icon-menu.svg";
        } else {
            openMenu.src = "/images/icon-close.svg";
        }
    }
}

// Update main click handler too
main.addEventListener("click", () => {
    if(!navBar.classList.contains('hidden')) {
        navBar.classList.add('hidden');
        openMenu.src = "/images/icon-menu.svg";
    }
});

*/


function toggleMenu() {
    if(window.innerWidth < 900) {
        if(navBar.style.display === "flex") {
            navBar.style.display = "none";
            openMenu.src = "/images/icon-menu.svg";
        } else {
            navBar.style.display = "flex";
            openMenu.src = "/images/icon-close.svg";
        }
    }
}

openMenu.addEventListener("click", toggleMenu);
main.addEventListener("click", () => {
    if(navBar.style.display === "flex") {
        navBar.style.display = "none";
        openMenu.src = "/images/icon-menu.svg";
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

    // empty cart section
    if(count > 0) {
        emptyCart.classList.add("hidden");
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

// Delete icon operation
deleteIcon.addEventListener("click", () => {
    popUp.parentElement.classList.add("hidden");

    checkoutSection.classList.add("hidden");

    emptyCart.classList.remove("hidden");

    count = 0;
    updateUi();
});

// working with cart icon
cartIcon.addEventListener("click", () => {
    const isCheckoutVisible = !checkoutSection.classList.contains("hidden");
    const isEmptyCartVisible = !emptyCart.classList.contains("hidden");

    if(isCheckoutVisible || isEmptyCartVisible) {
        checkoutSection.classList.add("hidden");
        emptyCart.classList.add("hidden");
        return;
    }

    if(count > 0) {
        checkoutSection.classList.remove("hidden");
        emptyCart.classList.add("hidden");
    } else {
        emptyCart.classList.remove("hidden");
        checkoutSection.classList.add("hidden");
    }
});

// Working with switching images for mobile view.
const previousMobile = document.getElementById("previous-icon");
const nextMobile = document.getElementById("next-icon");
const images = document.querySelectorAll(".product-img");
let currentIndex = 0;

const showImage = (index) => {
    images.forEach((img, i) => {
        img.classList.toggle("hidden", i !== index)
    });
}

nextMobile.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

previousMobile.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});


// working with switching images for lightbox view.
const productMain = document.getElementById("product-1");
const lightboxSection = document.getElementById("lightbox-section");
const closeIcon = document.getElementById("light-close-icon");
const mainContent = document.getElementById("test-section");

const thumbnails = document.querySelectorAll('[id^="light-thumbnail-"]');
const products = document.querySelectorAll('[id^="light-product-"]');
const nextBtn = document.getElementById("light-next-icon");
const prevBtn = document.getElementById("light-previous-icon");

// Show image by index.
function showProduct(index) {
    products.forEach((img, i) => {
        img.classList.toggle("hidden", i !== index);
    });
    currentIndex = index;
}

// When main product image is clicked, show lightbox.
productMain.addEventListener("click", () => {

    console.log("Product main clicked");
    if(window.innerWidth >= 900) {
        mainContent.classList.add("hidden");
        lightboxSection.classList.remove("hidden");
        lightboxSection.classList.add("flex");
        showProduct(0);
    }
});

// close icon for lightbox
/*
closeIcon.addEventListener("click", () => {
    lightboxSection.style.display = "none"
    mainContent.style.display = "block";
});

*/
closeIcon.addEventListener("click", () => {
    lightboxSection.classList.add("hidden");
    lightboxSection.classList.remove("flex");
    mainContent.classList.remove("hidden");
});

// Thumbnail working with product images.
thumbnails.forEach((thumb, i) => {
    thumb.addEventListener("click", () => {
        showProduct(i);
    });
});


// Next and previous buttons for lightbox.
nextBtn.addEventListener("click", () => {
    const nextIndex = (currentIndex + 1) % products.length;
    showProduct(nextIndex);
});

prevBtn.addEventListener("click", () => {
    const prevIndex = (currentIndex - 1 + products.length) % products.length;
    showProduct(prevIndex);
});