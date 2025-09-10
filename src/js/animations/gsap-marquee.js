import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const track = document.querySelector(".manifiesto__track");
const slides = Array.from(track.children);

// Clonamos los slides 2 veces para loop continuo
slides.forEach(slide => {
    track.appendChild(slide.cloneNode(true));    
});

let slideWidth = slides[0].offsetWidth + 20; // ancho de cada slide + margin
let totalWidth = slideWidth * slides.length;

let proxyX = 0;
let velocity = 0;
const speed = .7; // velocidad automática px/frame

// Loop infinito con ticker
gsap.ticker.add(() => {
    proxyX -= speed * gsap.ticker.deltaRatio(); // movimiento automático
    proxyX += velocity;                         // sumamos scroll
    velocity *= 0.2;                            // freno gradual

    // Loop infinito
    if (proxyX > totalWidth) proxyX -= totalWidth;
    if (proxyX < 0) proxyX += totalWidth;

    track.style.transform = `translateX(${-proxyX}px)`;
});

// // ScrollTrigger para mover slider con scroll
// window.addEventListener("wheel", e => {
//     velocity += e.deltaY * 1.2; // ajusta sensibilidad
// });
