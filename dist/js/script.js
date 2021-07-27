import SmoothScroll from 'smooth-scroll';
import WOW from 'wow.js';

window.addEventListener('DOMContentLoaded', () => {
    var scroll = new SmoothScroll('a[href*="#"]');
    new WOW().init();

    
    
    // VIDEO 

    const video = document.querySelector('.video__item'),
          play = document.querySelector('.video__control img');

    play.addEventListener('click', () => {
        video.play();
    });
});