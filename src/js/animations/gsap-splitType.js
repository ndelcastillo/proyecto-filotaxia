import { gsap } from 'gsap';
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

/* ---------------------------------------- */
/* Global > SplitWord  */
/* ---------------------------------------- */
const heroTitle = new SplitType('.hero__title', { types: "chars, words" })

heroTitle.chars.forEach((char, index) => {
    gsap.from(char, {
        y: 400,
        duration: 1,
        ease: "power4.out",
        opacity: 0,
        delay: index * 0.05,
    })
})


/* ---------------------------------------- */
/* Global > SplitText & SplitLine */
/* ---------------------------------------- */
function setupSplits(selector = ".split-text") {
    const elements = document.querySelectorAll(selector);

    elements.forEach((el) => {
        // tipo de split: lines, words, chars (por defecto lines)
        const splitType = el.dataset.split || "lines";

        // crear SplitText
        el.split = new SplitText(el, {
            type: splitType,
            linesClass: "split-line",
        });

        // envolver cada línea en un contenedor .split-parent
        if (el.split.lines) {
            el.split.lines.forEach((line) => {
                const parent = document.createElement("div");
                parent.classList.add("split-parent");
                line.parentNode.insertBefore(parent, line);
                parent.appendChild(line);
            });
        }

        // targets a animar según splitType
        const targets =
            splitType === "lines"
                ? el.split.lines
                : splitType === "words"
                    ? el.split.words
                    : el.split.chars;

        // animación GSAP
        el.anim = gsap.from(targets, {
            scrollTrigger: {
                trigger: el,
                // toggleActions: "restart pause resume reset",
                start: "top 95%",
                once: true,
            },
            duration: 1,
            ease: "power4.inOut",
            yPercent: 100,
            opacity: 0,
            stagger: 0.1,
        });
    });
}

// inicializar globalmente al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    setupSplits(".split-text");
});


/*
<h2 class="split-text" data-split="words">
    Somos Filotaxia. Creamos terrarios.
</h2>
<p class="split-text" data-split="lines">
    Este párrafo se animará línea por línea.
</p>

animate-title
class="split-text" data-split="words"
class="split-text" data-split="lines"
*/