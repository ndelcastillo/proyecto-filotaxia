/* ---------------------------------------- */
/* General */
/* ---------------------------------------- */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ---------------------------------------- */
/* Content Reveal > position */
/* ---------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    let contentRevealPositionHome = document.querySelector(".content-reveal-position-home");
    gsap.from(contentRevealPositionHome, {
        y: -100,
        duration: 1,
        delay: 3,
        ease: "ease-in",
    })
})

document.addEventListener('DOMContentLoaded', () => {
    let contentRevealPositionSmDown = document.querySelector(".content-reveal-position-sm-down");
    gsap.from(contentRevealPositionSmDown, {
        y: -100,
        duration: 1,
        ease: "ease-in",
    })
})


document.addEventListener('DOMContentLoaded', () => {
    let contentRevealPositionSm = document.querySelectorAll(".content-reveal-position-sm");
    gsap.from(contentRevealPositionSm, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "ease",
        delay: 0.5,
        scrollTrigger: {
            trigger: '.content-reveal-position-sm',
            start: 'top 90%',
            once: true,
            // toggleActions: 'play none none reverse'
        }
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const contentRevealPositionMd = document.querySelectorAll(".content-reveal-position-md");
    gsap.from(contentRevealPositionMd, {
        opacity: 0,
        y: 300,
        duration: 1,
        ease: "ease",
        scrollTrigger: {
            trigger: '.content-reveal-position-md',
            start: 'top 90%',
            once: true,
        }
    })
});

document.addEventListener('DOMContentLoaded', () => {
    const contentRevealPositionMdHero = document.querySelectorAll(".content-reveal-position-md-hero");
    gsap.from(contentRevealPositionMdHero, {
        opacity: 0,
        y: 300,
        duration: 1,
        ease: "ease",
    })
});


/* ---------------------------------------- */
/* Content Reveal > opacity */
/* ---------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    const contentRevealOpacity = document.querySelectorAll(".content-reveal-opacity");

    gsap.from(contentRevealOpacity, {
        opacity: 0,
        delay: .5,
        duration: 1,
        ease: "ease",
        scrollTrigger: {
            trigger: '.content-reveal-opacity',
            start: 'top 90%',
            once: true,
        }
    })
});

/* ---------------------------------------- */
/* Contacto > Hero section */
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


