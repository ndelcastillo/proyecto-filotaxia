import { gsap } from 'gsap';

document.addEventListener('DOMContentLoaded', () => {
    let contentRevealPositionSmUp = document.querySelectorAll(".content-reveal-position-sm-up");
    gsap.from(contentRevealPositionSmUp, {
        opacity: 0,
        y: -30,
        duration: 1,
        ease: "ease",
        delay: 0.5,
    })

    gsap.from(".text", 0.8, {
        y: 40,
        opacity: 0,
        ease: "power2.inOut",
        delay: 1,
    });

    gsap.from(".loader", 2, {
        width: 0,
        ease: "power4.inOut",
        delay: 2,
    });

    gsap.to(".pre-loader", 2, {
        top: "-100%",
        ease: "power4.inOut",
        delay: 2,
    });
})
