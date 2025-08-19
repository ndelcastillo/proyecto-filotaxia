import { gsap } from 'gsap';

/* ---------------------------------------- */
/* Index > benefits */
/* ---------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    // console.log("GSAP Hover script cargado");

    const benefitItems = document.querySelectorAll('.benefits__item');
    const imageWrappers = document.querySelectorAll('.benefits__image-wrapper');
    if (imageWrappers.length === 0) return; // Si no hay imágenes, salimos

    const firstImageWrapper = imageWrappers[0];

    // Inicializamos la primera imagen visible
    gsap.set(firstImageWrapper, { opacity: 1, scale: 1 });

    // Variable para guardar el índice del item activo
    let activeIndex = 0;

    benefitItems.forEach((item, index) => {
        const imageWrapper = item.querySelector('.benefits__image-wrapper');

        item.addEventListener('click', () => {
            console.log(`Click en item ${index}`);

            // Si ya está activo este item, no hacemos nada
            if (activeIndex === index) return;

            activeIndex = index;

            // Ocultamos todas las imágenes
            imageWrappers.forEach(wrapper => {
                gsap.to(wrapper, {
                    opacity: 0,
                    scale: 0.85,
                    duration: 0.3,
                    ease: "power2.inOut",
                });
            });

            // Mostramos la imagen clickeada
            gsap.set(imageWrapper, { scale: 0.95 });
            gsap.to(imageWrapper, {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                ease: "power2.out",
            });
        });
    });
});



/* ---------------------------------------- */
/* Terrarios > Hero */
/* ---------------------------------------- */
const terrariosTitles = document.querySelectorAll('.terrarios__title');
const terrariosImages = document.querySelectorAll('.terrarios__image');

// Mostrar imagen por defecto (la primera)
if (terrariosImages.length > 0) {
    terrariosImages[0].classList.add('active');
}

terrariosTitles.forEach(title => {
    title.addEventListener('mouseenter', () => {
        const index = title.dataset.index;

        // Remover clase activa de todas
        terrariosImages.forEach(img => img.classList.remove('active'));

        // Agregar clase activa solo a la correspondiente
        if (terrariosImages[index]) {
            terrariosImages[index].classList.add('active');
        }
    });

    title.addEventListener('mouseleave', () => {
        terrariosImages.forEach(img => img.classList.remove('active'));

        // Mostrar la imagen por defecto nuevamente
        if (terrariosImages.length > 0) {
            terrariosImages[0].classList.add('active');
        }
    });
});


