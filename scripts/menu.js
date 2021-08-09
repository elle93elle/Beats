const openBurger = document.querySelector(".hamburger");
const fullscreenMenu = document.querySelector(".fullscreen-menu");
const close = document.querySelector(".fullscreen-menu__close");

openBurger.addEventListener ("click", e => {
    e.preventDefault();
    fullscreenMenu.classList.add("open");
});

close.addEventListener ("click", e => {
    e.preventDefault();
    fullscreenMenu.classList.remove("open");
});