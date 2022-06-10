import 'normalize.css'
import './styles/main.scss'
import './index.html'


// <!-- Smooth Scroll -->

const links = document.querySelectorAll(".header__link, .footer__link");

for (const link of links) {
link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
e.preventDefault();
const href = this.getAttribute("href");

document.querySelector(href).scrollIntoView({
    behavior: "smooth"
});
}


// Burger-menu

const iconMenu = document.querySelector('.header__burger');
const closeMenu = document.querySelector('.burger__close');
const menuBody = document.querySelector('.burger');

if (iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.add('_locked');
        iconMenu.classList.add('header__burger_active');
        menuBody.classList.add('burger_active');
    });
}

if (closeMenu) {
    closeMenu.addEventListener("click", function(e) {
        document.body.classList.remove('_locked');
        iconMenu.classList.remove('header__burger_active');
        menuBody.classList.remove('burger_active');
    });
}


