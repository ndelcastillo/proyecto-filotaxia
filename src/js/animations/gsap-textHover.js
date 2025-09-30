import { gsap } from "gsap";

/* ---------------------------------------- */
/* Home > Section Gallery */
/* ---------------------------------------- */
document.querySelectorAll(".gallery__item").forEach(item => {
    const original = item.querySelector(".gallery__title-text.original");
    const alt = item.querySelector(".gallery__title-text.alt");
    const image = item.querySelector(".gallery__image");

    item.addEventListener("mouseenter", () => {
        // Texto
        gsap.to(original, { opacity: 0, y: -10, duration: 0.3, ease: "power2.out" });
        gsap.to(alt, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" });

        // Imagen - zoom dentro del wrapper (contenedor fijo)
        gsap.to(image, { scale: 1.03, duration: 1, ease: "power3.out" });
    });

    item.addEventListener("mouseleave", () => {
        gsap.to(original, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" });
        gsap.to(alt, { opacity: 0, y: 10, duration: 0.3, ease: "power2.out" });

        gsap.to(image, { scale: 1, duration: 1, ease: "power3.out" });
    });
});


