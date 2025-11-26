form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.email.value.trim();
    const topic = form.topic.value.trim();
    const message = form.message.value.trim();
    const consent = form.consent.checked;

    if (!name || !email || !phone || !topic || !message || !consent) {
        feedback.textContent = "Por favor completá todos los campos y aceptá la política.";
        feedback.style.color = "red";
        return;
    }

    feedback.textContent = "¡Mensaje enviado! Gracias por escribirnos.";
    feedback.style.color = "green";

    form.reset();
});
