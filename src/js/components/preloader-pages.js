// preloader-pages.js
import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader-pages");
    if (!preloader) return;

    // entrada breve al cargar la página
    gsap.set(preloader, { opacity: 0, display: "flex" });
    gsap.to(preloader, { opacity: 1, duration: 0.25, ease: "power1.inOut" });

    // fade-out cuando la página termina de cargar
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

    // Captura cualquier clic en links internos, incluso si el clic es en un hijo del <a>
    document.addEventListener("click", (e) => {
        const link = e.target.closest("a[href]");
        if (!link) return;

        const href = link.getAttribute("href");

        // Ignorar links externos, mailto o anclas
        if (!href || href.startsWith("#") || link.target === "_blank" || href.startsWith("mailto:")) return;

        e.preventDefault();

        // mostrar preloader con fade-in y luego navegar
        gsap.set(preloader, { display: "flex", opacity: 0 });
        gsap.to(preloader, {
            opacity: 1,
            duration: 0.25,
            ease: "power1.inOut",
            onComplete: () => {
                window.location.href = href;
            }
        });
    });
});
