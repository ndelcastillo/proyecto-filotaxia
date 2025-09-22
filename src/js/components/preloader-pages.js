// preloader-pages.js
import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader-pages");
    if (!preloader) return; // no ejecutar si no está presente

    // entrada breve (se ve al cargar la página)
    gsap.set(preloader, { opacity: 0, display: "flex" });
    gsap.to(preloader, { opacity: 1, duration: 0.25, ease: "power1.inOut" });

    // fade-out cuando la página termine de cargar
    window.addEventListener("load", () => {
        gsap.to(preloader, {
            opacity: 0,
            duration: 0.35,
            ease: "power1.inOut",
            onComplete: () => {
                preloader.style.display = "none";
            }
        });
    });

    // mostrar preloader cuando clickeás en el navbar y luego navegar
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            const href = link.getAttribute("href");
            if (!href || href.startsWith("#") || link.target === "_blank") return;
            e.preventDefault();

            // mostrar preloader (rápido fade-in) y luego cambiar de página
            gsap.set(preloader, { display: "flex", opacity: 0 });
            gsap.to(preloader, {
                opacity: 1,
                duration: 0.25,
                ease: "power1.inOut",
                onComplete: () => {
                    // redirigir después del pequeño fade
                    window.location.href = href;
                }
            });
        });
    });
});
