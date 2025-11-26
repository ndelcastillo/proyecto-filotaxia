document.addEventListener("DOMContentLoaded", () => {
    const faqContents = document.querySelectorAll(".faq__content");

    faqContents.forEach(content => {
        content.addEventListener("click", () => {
            // Si ya está activo, se cierra
            if (content.classList.contains("active")) {
                content.classList.remove("active");
                return;
            }

            // Cerrar todos los demás
            faqContents.forEach(el => el.classList.remove("active"));

            // Abrir el clickeado
            content.classList.add("active");
        });
    });
});
