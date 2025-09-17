/* ---------------------------------------- */
/* General */
/* ---------------------------------------- */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    let navReveal = document.querySelector(".nav-animation");
    gsap.from(navReveal, {
        y: -100,
        duration: 1,
        ease: "ease-in",
    })
})

document.addEventListener('DOMContentLoaded', () => {
    let textReveal = document.querySelectorAll(".text-animation");
    gsap.from(textReveal, {
        opacity: 0,
        y: 30,
        delay: 0.5,
        scrollTrigger: {
            trigger: '.text-animation',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        }
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const titleReveal = new SplitType('.title-animation span', { types: "words,chars" });
    gsap.from(titleReveal.words, {
        y: 100,
        duration: 1,
        stagger: 0.025,
        ease: "ease",
        scrollTrigger: {
            trigger: '.title-animation',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    })
})

/* ---------------------------------------- */
/* Contacto */
/* ---------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    let imageMove = document.querySelector(".image-move");
    let imageTl = gsap.timeline()

    imageTl.from(imageMove, {
        opacity: 0,
        duration: 1,
        ease: "ease",
    })
    imageTl.to(imageMove, {
        x: 530,
        duration: 3,
        ease: "power4.out",
    })
});


