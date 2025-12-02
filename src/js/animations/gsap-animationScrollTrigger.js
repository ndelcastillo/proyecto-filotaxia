import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(ScrollTrigger, Draggable);

/* ---------------------------------------- */
/* Terrarios > Hero */
/* ---------------------------------------- */
if (window.innerWidth > 900) {
    gsap.to(".terrarios__image-wrapper img", {
        y: 300,
        scrollTrigger: {
            trigger: ".hero__terrarios",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
        }
    });
}

/* ---------------------------------------- */
/* subCapas > Hero */
/* ---------------------------------------- */
function initHorizontalHero() {
    const hero = document.querySelector(".hero__subCapas");
    const container = document.querySelector(".hero__subCapas-content-1");

    if (!hero || !container) return;

    const distance = container.scrollWidth - window.innerWidth;
    if (distance <= 0) return;

    // 👉 Detectar mobile
    const isMobile = window.matchMedia("(max-width: 780px)").matches;

    // LIMPIAR cualquier animación previa
    ScrollTrigger.getAll().forEach(t => t.kill());

    if (isMobile) {
        /* ---------------------------------------
         *  🔵 MODO MOBILE → arrastre con el dedo
         * --------------------------------------- */
        Draggable.create(container, {
            type: "x",
            inertia: true,
            bounds: {
                minX: -distance,
                maxX: 0
            },
            edgeResistance: 0.85
        });

        gsap.set(container, { x: 0 });

    } else {
        /* ---------------------------------------
         *  🟢 MODO DESKTOP → scroll horizontal
         * --------------------------------------- */
        const header = document.querySelector("header");
        const headerHeight = header ? header.offsetHeight : 0;

        const startScrollPos = hero.offsetTop - headerHeight;
        const endScrollPos = startScrollPos + distance;

        gsap.to(container, {
            x: -distance,
            ease: "none",
            scrollTrigger: {
                start: startScrollPos,
                end: endScrollPos,
                scrub: 0.6,
                pin: hero,
                anticipatePin: 1,
                invalidateOnRefresh: true
            }
        });
    }

    ScrollTrigger.refresh();
}

window.addEventListener("load", initHorizontalHero);
window.addEventListener("resize", () => {
    initHorizontalHero();
});

