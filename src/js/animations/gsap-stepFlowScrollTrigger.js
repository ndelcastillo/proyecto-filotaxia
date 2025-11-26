import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".step-flow__step");
    const images = document.querySelectorAll(".step-flow__image");
    const stepFlow = document.querySelector(".step-flow");

    // ✅ Si no existe la sección, salimos del script para no romper los demás
    if (!stepFlow || steps.length === 0 || images.length === 0) return;

    const durationFactor = 1.5; // Duración de cada paso
    const extraLastStep = 1;    // Factor extra SOLO para el último paso

    // Ajustamos dinámicamente la altura de la sección
    const totalHeight =
        steps.length * window.innerHeight * durationFactor +
        window.innerHeight * extraLastStep; // 👈 extra para el último paso
    stepFlow.style.height = `${totalHeight}px`;

    // Mostrar el primer paso al inicio
    steps[0].classList.add("active");
    images[0].classList.add("active");

    // ScrollTrigger para cada paso
    steps.forEach((step, index) => {
        ScrollTrigger.create({
            trigger: ".step-flow",
            start: () => `top top-=${index * window.innerHeight * durationFactor}`,
            end: () => `+=${window.innerHeight * durationFactor}`,
            onEnter: () => activateStep(index),
            onEnterBack: () => activateStep(index),
        });
    });

    // Mantener el último paso visible más tiempo
    ScrollTrigger.create({
        trigger: ".step-flow",
        start: () =>
            `top top-=${(steps.length - 1) * window.innerHeight * durationFactor}`,
        end: () =>
            `+=${window.innerHeight * (durationFactor + extraLastStep)}`,
        onEnter: () => activateStep(steps.length - 1),
        onEnterBack: () => activateStep(steps.length - 1),
    });

    function activateStep(index) {
        steps.forEach((s, i) => s.classList.toggle("active", i === index));
        images.forEach((img, i) => img.classList.toggle("active", i === index));
    }
});
