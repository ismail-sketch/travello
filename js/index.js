/*jshint esversion: 9 */
/* jslint node: true */
/* jshint browser: true */

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        // loop: true,
        // speed: 300,
        // slidesPerView: 3,
        // spaceBetween: 30,
        //centeredSlides: true,

        breakpoints: {

          320: {
            loop: true,
            slidesPerView: 1.5,
            spaceBetween: 10
          },

          630: {
            loop: true,
            slidesPerView: 2,
            spaceBetween: 20
          },

          958: {
            loop: true,
            speed: 300,
            slidesPerView: 3,
            spaceBetween: 30,
          }
        },

        // Navigation arrows
        navigation: {
          nextEl: '.slider-arrow-left',
          prevEl: '.slider-arrow-right',
        },

      });

      const swiper2 = new Swiper('.swiper-container2', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 400,
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,

        breakpoints: {

          320: {
            loop: true,
            slidesPerView: 1.5,
            spaceBetween: 10
          },

          650: {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 20
          },

          940: {
            loop: true,
            speed: 400,
            slidesPerView: 4,
            spaceBetween: 30,
            centeredSlides: true,
          }
        },

      });

// burger menu============================================================

const icon = document.querySelector('.icon');
const menu = document.querySelector('.menu2');
const underlay = document.querySelector('.underlay');

icon.addEventListener('click', (e) => {
    icon.classList.toggle("open");
    menu.classList.toggle('show');
    underlay.classList.toggle('show');

    if (menu.classList.contains('show')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }

})

underlay.addEventListener('click', (e) => {
    icon.classList.remove("open");
    menu.classList.remove('show');
    underlay.classList.remove('show');
    document.body.style.overflow = '';
})
// end burger menu============================================================


//scroll ====================================================================
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if(menuLinks.length > 0) {
    menuLinks.forEach(menulink => {
        menulink.addEventListener('click', onMenuLinkClick);
    })

    function onMenuLinkClick(e) {

        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;
            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth',
            });
            e.preventDefault();
        }
    }
}

});// end domcontent