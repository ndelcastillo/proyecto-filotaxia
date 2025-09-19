import { gsap } from 'gsap';

document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader-pages");

    // ----------------------------
    // Entrada del preloader al cargar la página
    // ----------------------------
    gsap.set(preloader, { opacity: 0, display: "flex" });
    gsap.to(preloader, { opacity: 1, duration: 0.3, ease: "power1.inOut" });

    // ----------------------------
    // Fade-out al terminar de cargar la página
    // ----------------------------
    window.addEventListener("load", () => {
        gsap.to(preloader, {
            opacity: 0,
            duration: 0.2,
            ease: "power1.inOut",
            onComplete: () => preloader.style.display = "none"
        });
    });

    // ----------------------------
    // Preloader al hacer click en links del navbar
    // ----------------------------
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            const href = link.getAttribute("href");

            // Ignoramos enlaces con #
            if (!href || href.startsWith("#")) return;

            e.preventDefault();

            // Mostramos preloader
            gsap.set(preloader, { display: "flex", opacity: 0 });

            // Animación de fade-in rápida y suave
            gsap.to(preloader, {
                opacity: 1,
                duration: 0.3,
                ease: "power1.inOut",
                onComplete: () => {
                    // Redirige inmediatamente después del fade-in
                    window.location.href = href;
                }
            });
        });
    });
});
