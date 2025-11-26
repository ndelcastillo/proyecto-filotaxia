// preloader-site.js
import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader-site");
    if (!preloader) return; // NO ejecutar si no estamos en la home

    // Guardar posición de scroll actual
    const scrollY = window.scrollY || window.pageYOffset || 0;

    // BLOQUEO firme del scroll: fijamos body en la posición actual
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    // (opcional) evitar smooth scroll presente
    document.documentElement.style.scrollBehavior = "auto";

    // Timeline de GSAP para secuencia limpia
    const tl = gsap.timeline();

    tl.from(".content-reveal-position-sm-up", { opacity: 0, y: -30, duration: 0.8, ease: "power2.out" })
        .from(".text", { y: 40, opacity: 0, duration: 0.7, ease: "power2.inOut" }, "-=0.4")
        .from(".loader", { width: 0, duration: 1.6, ease: "power4.inOut" }, "-=0.2")
        .to(preloader, {
            opacity: 0,
            duration: 0.6,
            ease: "power2.inOut",
            delay: 0.3,
            onComplete: () => {
                // remover preloader y RESTAURAR scroll EXACTAMENTE a donde estaba
                preloader.style.display = "none";

                // quitar bloqueo
                document.body.style.position = "";
                document.body.style.top = "";
                document.body.style.left = "";
                document.body.style.right = "";
                document.body.style.width = "";
                document.documentElement.style.scrollBehavior = "";

                // restaurar scroll a la posición guardada
                window.scrollTo(0, scrollY);
            }
        });
});
