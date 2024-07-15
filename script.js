
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbarr');
let contactIcon = document.querySelector('#contact-icon');
let contactForm = document.querySelector('#contact-form');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('open');
}

contactIcon.onclick = () => {
    contactIcon.classList.toggle('fa-times');
    contactForm.classList.toggle('open');
}

document.addEventListener('click', (event) => {
    if (!contactForm.contains(event.target) && !contactIcon.contains(event.target)) {
        contactForm.classList.remove('open');
        contactIcon.classList.remove('fa-times');
    }
});

const serviceItems = document.querySelectorAll('.custom-section__item');

serviceItems.forEach(item => {
    const originalText = item.querySelector('b').textContent.trim(); // Get the original text

    item.addEventListener('mouseenter', function () {
        const overlayText = this.querySelector('.overlay-content').innerHTML.trim();
        showOverlay(overlayText, this);
    });

    item.addEventListener('mouseleave', function () {
        hideOverlay(this, originalText);
    });
});

function showOverlay(text, target) {
    const originalText = target.querySelector('b');
    const overlayContent = target.querySelector('.overlay-content');

    originalText.style.display = 'none'; // Hide the original text
    overlayContent.style.display = 'block'; // Show the overlay content
}

function hideOverlay(target, originalText) {
    const overlayContent = target.querySelector('.overlay-content');
    const originalTextElement = target.querySelector('b');

    originalTextElement.style.display = 'block'; // Show the original text
    overlayContent.style.display = 'none'; // Hide the overlay content
}


document.addEventListener('DOMContentLoaded', function () {
    const projectImages = document.querySelectorAll('.project-image');

    // Show the first project image initially
    projectImages[0].style.display = 'block';

    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
            // Hide all images
            projectImages.forEach(image => image.style.display = 'none');

            // Show the corresponding image
            projectImages[index].style.display = 'block';
        });
    });
});

const newHome = document.querySelector(".new-home");
const newCart = document.querySelector(".new-cart");
const newShop = document.querySelector(".new-shop");

const newNavBtn = document.querySelector(".new-nav-btn");

let navHandler = true;

newNavBtn.addEventListener("click", function () {
    if (navHandler) {
        newHome.classList.add("active");
        newCart.classList.add("active");
        newShop.classList.add("active");
        newHome.style.scale = "1"
        newCart.style.scale = "1"
        newShop.style.scale = "1"
        newHome.style.left = "0"
        newHome.style.bottom = "0"
        newCart.style.bottom = "0"
        newCart.style.right = "0"
        newShop.style.bottom = "0"
        newShop.style.right = "0"
        newShop.style.transform = "rotate(360deg)"
        newHome.style.transform = "rotate(360deg)"
        newCart.style.transform = "rotate(360deg)"
        navHandler = false;
    } else {
        newHome.classList.remove("active");
        newCart.classList.remove("active");
        newShop.classList.remove("active");
        newHome.style.scale = "0"
        newCart.style.scale = "0"
        newShop.style.scale = "0"
        newHome.style.left = "20vw"
        newHome.style.bottom = "-25vh"
        newCart.style.bottom = "-25vh"
        newCart.style.right = "20vw"
        newShop.style.bottom = "-25vh"
        newShop.style.right = "3vw"
        newShop.style.transform = "rotate(360deg)"
        newHome.style.transform = "rotate(360deg)"
        newCart.style.transform = "rotate(360deg)"
        navHandler = true;
    }
});

jQuery(document).ready(function ($) {
    var $slickElement = $('.slideshow');

    $slickElement.slick({
        autoplay: true,
        dots: false,
    });

});
