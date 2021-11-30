(function () {
let menu = document.querySelector('.header__nav-menu');
menu.addEventListener('click',toggleMenu);
})();

function toggleMenu(){
    let header = document.querySelector('.header');
    let heroTitle = document.querySelector('.header__hero-title');
    let navList = document.querySelector('.header__nav-list');

    header.classList.toggle('header__background-switch');
    heroTitle.classList.toggle('header__title-off');
    navList.classList.toggle('header__list-on');
}