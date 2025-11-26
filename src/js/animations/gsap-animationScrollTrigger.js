import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ---------------------------------------- */
/* Terrarios > Hero */
/* ---------------------------------------- */
gsap.to(".terrarios__image-wrapper img", {
    y: 300, // se mueve 300px hacia abajo
    duration: 3,
    scrollTrigger: {
        trigger: ".hero__terrarios",
        start: "top top",     // start scrollerStart
        end: "bottom bottom", // end scrollerEnd
        toggleClass: "small-gsap",
        toggleActions: "play none none none",
        //onEnter onLeave onEnterBack onLeaveBack
        //play pause resume reverse restart complete none
        scrub: true,
        // markers: true
    }
});

/* ---------------------------------------- */
/* subTerrarios > Hero */
/* ---------------------------------------- */
function initHorizontalHero() {
    const hero = document.querySelector(".hero__subCapas");
    const container = document.querySelector(".hero__subCapas-content-1");
    const header = document.querySelector("header"); // si existe

    if (!hero || !container) return;

    // ancho a desplazar
    const distance = container.scrollWidth - window.innerWidth;
    if (distance <= 0) return; // nada que desplazar

    // altura del header (0 si no hay)
    const headerHeight = header ? header.offsetHeight : 0;

    // Posición absoluta de inicio (scrollY) en px:
    // queremos que empiece justo cuando la parte superior del hero
    // alcance el top del viewport teniendo en cuenta el header.
    const startScrollPos = hero.offsetTop - headerHeight;
    const endScrollPos = startScrollPos + distance;

    // Limpiar triggers previos (útil en dev / HMR)
    ScrollTrigger.getAll().forEach(t => t.kill());

    gsap.to(container, {
        x: -distance,
        ease: "none",
        scrollTrigger: {            
            start: startScrollPos,
            end: endScrollPos,
            scrub: 0.6,
            pin: hero,                                    
            invalidateOnRefresh: true
        }
    });

    ScrollTrigger.refresh();
}

// Esperar a load (imágenes incluidas) para mediciones correctas
window.addEventListener("load", initHorizontalHero);
window.addEventListener("resize", () => ScrollTrigger.refresh());
