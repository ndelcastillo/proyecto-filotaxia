import { gsap } from 'gsap';

/* ----------------------------------------
   Home > benefits
---------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    const benefitItems = document.querySelectorAll('.benefits__item');
    const imageWrappers = document.querySelectorAll('.benefits__image-wrapper');
    if (imageWrappers.length === 0) return;

    // Inicializamos todas las imágenes en opacity 0
    imageWrappers.forEach(wrapper => {
        gsap.set(wrapper, { opacity: 0, scale: 0.85 });
    });

    // Mostramos la primera imagen por defecto
    gsap.to(imageWrappers[0], { opacity: 1, scale: 1, duration: 0.5 });

    let activeImage = imageWrappers[0];

    benefitItems.forEach((item, index) => {
        const imageWrapper = imageWrappers[index];
        const icon = item.querySelector('.benefits__icon');

        item.addEventListener('mouseenter', () => {
            if (activeImage !== imageWrapper) {
                // Ocultamos la imagen activa
                gsap.killTweensOf(activeImage);
                gsap.to(activeImage, { opacity: 0, scale: 0.85, duration: 0.3, ease: "power2.inOut" });

                // Mostramos la nueva
                gsap.killTweensOf(imageWrapper);
                gsap.set(imageWrapper, { scale: 0.95 });
                gsap.to(imageWrapper, { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" });

                activeImage = imageWrapper;
            }


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


/* ---------------------------------------- */
/* Terrarios > Cuidados */
/* ---------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    const imgEl = document.querySelector('.cuidados__img');
    const titleEl = document.getElementById('cuidados-title');
    const textEl = document.getElementById('cuidados-text');
    const h2Elements = document.querySelectorAll('.cuidados__content h2');

    // 👉 Activar el primer h2 por defecto
    if (h2Elements.length > 0) {
        const first = h2Elements[0];
        first.classList.add('active');
        imgEl.src = first.dataset.img;
        titleEl.textContent = first.dataset.title;
        textEl.textContent = first.dataset.text;
    }

    h2Elements.forEach(h2 => {
        h2.addEventListener('click', () => {
            // Reset estados activos
            h2Elements.forEach(el => el.classList.remove('active'));
            h2.classList.add('active');

            // Transición de imagen
            gsap.to(imgEl, {
                opacity: 0, duration: 0.3, onComplete: () => {
                    imgEl.src = h2.dataset.img;
                    gsap.to(imgEl, { opacity: 1, duration: 0.3 });
                }
            });

            // Actualizamos textos
            titleEl.textContent = h2.dataset.title;
            textEl.textContent = h2.dataset.text;
        });
    });
});



/* ---------------------------------------- */
/* Musica > Catalogo */
/* ---------------------------------------- */
const filas = document.querySelectorAll(".catalogo__content");

filas.forEach(fila => {
    const imageUrl = fila.dataset.image;

    // Crear imagen para cada fila
    if (imageUrl) {
        const img = document.createElement("img");
        img.src = imageUrl;
        img.classList.add("catalogo__image-preview");
        fila.appendChild(img);

        // Hover dentro de la fila
        fila.addEventListener("mouseenter", () => {
            img.classList.add("active");
        });

        fila.addEventListener("mouseleave", () => {
            img.classList.remove("active");
        });
    }
});
