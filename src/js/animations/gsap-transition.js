import { gsap } from "gsap";

const images = document.querySelectorAll(".manifiesto__title-content1 div");

gsap.set(images, { opacity: 0 });
gsap.set(images[0], { opacity: 1 }); // arranca con la primera

// Timeline infinito
const tl = gsap.timeline({ repeat: -1 });

images.forEach((img, i) => {
  tl.to(img, { opacity: 1, duration: 0 })   // aparece
    .to(img, { opacity: 0, duration: 0 }, "+=0.8"); // espera 2s y desaparece
});
