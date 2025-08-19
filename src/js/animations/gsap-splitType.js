import { gsap } from 'gsap';
import SplitType from 'split-type';

document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero__title');
    if (!heroTitle) return;

    // Limpiar splits previos (por si vuelve a ejecutarse)
    if (heroTitle.querySelector('span')) {
        heroTitle.innerHTML = heroTitle.textContent;
    }

    const splitText = new SplitType(heroTitle, { types: 'chars' });

    gsap.set(splitText.chars, { y: 400, opacity: 0 });

    gsap.to(splitText.chars, {
        y: 0,
        opacity: 1,
        duration: 1.4,
        stagger: 0.08,
        ease: 'power4.out',
        delay: 0.2,
    });
});
