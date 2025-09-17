import { gsap } from "gsap";

const track = document.querySelector(".manifiesto__track");
if (track) {
    const slides = Array.from(track.children);

    // Clonamos los slides para loop continuo
    slides.forEach(slide => {
        track.appendChild(slide.cloneNode(true));
    });

    let slideWidth = slides[0].offsetWidth + 20; // ancho de cada slide + margin
    let totalWidth = slideWidth * slides.length;

    let proxyX = 0;
    const speed = 1.2; // velocidad automática px/frame

    // Loop infinito con ticker
    gsap.ticker.add(() => {
        proxyX -= speed * gsap.ticker.deltaRatio(); // movimiento automático

        // Loop infinito
        if (proxyX > totalWidth) proxyX -= totalWidth;
        if (proxyX < 0) proxyX += totalWidth;

        track.style.transform = `translateX(${-proxyX}px)`;
    });
}
