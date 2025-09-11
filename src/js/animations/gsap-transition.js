import { gsap } from "gsap";

/* ---------------------------------------- */
/* Home > Hero Section */
/* ---------------------------------------- */
const imagesHome = document.querySelectorAll(".homeManifiesto__title-content1 div");

gsap.set(imagesHome, { opacity: 0 });
gsap.set(imagesHome[0], { opacity: 1 }); // arranca con la primera

// Timeline infinito
const tlHome = gsap.timeline({ repeat: -1 });

imagesHome.forEach((img, i) => {
  tlHome.to(img, { opacity: 1, duration: 0 })   // aparece
    .to(img, { opacity: 0, duration: 0 }, "+=0.8"); // espera 2s y desaparece
});


/* ---------------------------------------- */
/* Manifiesto > Hero Section */
/* ---------------------------------------- */

const images = document.querySelectorAll(".manifiesto__title-content1 div");

gsap.set(images, { opacity: 0 });
gsap.set(images[0], { opacity: 1 }); // arranca con la primera

// Timeline infinito
const tl = gsap.timeline({ repeat: -1 });

images.forEach((img, i) => {
  tl.to(img, { opacity: 1, duration: 0 })   // aparece
    .to(img, { opacity: 0, duration: 0 }, "+=0.8"); // espera 2s y desaparece
});


/* ---------------------------------------- */
/* Contacto > Hero Section */
/* ---------------------------------------- */


const imagesContacto = document.querySelectorAll(".contacto__title-content1 div");

gsap.set(imagesContacto, { opacity: 0 });
gsap.set(imagesContacto[0], { opacity: 1 }); // arranca con la primera

// Timeline infinito
const tlContacto = gsap.timeline({ repeat: -1 });

imagesContacto.forEach((img, i) => {
  tlContacto.to(img, { opacity: 1, duration: 0 })   // aparece
    .to(img, { opacity: 0, duration: 0 }, "+=0.7"); // espera 2s y desaparece
});