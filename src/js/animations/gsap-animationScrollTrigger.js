import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ---------------------------------------- */
/* All */
/* ---------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    gsap.utils.toArray('.animate-title').forEach((title) => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 75%",
                toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: 50,
            duration: 1.5,
            ease: "power2.out",
        });
    });
});


/* ---------------------------------------- */
/* Terrarios > Hero */
/* ---------------------------------------- */
gsap.to(".terrarios__image-wrapper img", {
    y: 300, // se mueve 300px hacia abajo
    duration:3,
    scrollTrigger: {
        trigger: ".hero__terrarios",
        start: "top top",     // start scrollerStart
        end: "bottom bottom", // end scrollerEnd
        toggleClass:"small-gsap",
        toggleActions:"play none none none", 
        //onEnter onLeave onEnterBack onLeaveBack
        //play pause resume reverse restart complete none
        scrub: true,
        // markers: true
    }
});



