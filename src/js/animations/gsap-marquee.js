const track = document.querySelector('.manifiesto__track');
const slides = Array.from(track.children);

// Clonamos los slides para que siempre haya suficiente contenido para el scroll
slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    track.appendChild(clone);
});

let x = 0;
const speed = 0.5; // px por frame
function animate() {
    x -= speed;

    // Cuando el primer slide está completamente fuera, lo movemos al final
    const firstSlide = track.children[0];
    if (x <= -firstSlide.offsetWidth - 20) { // +20 por margin
        x += firstSlide.offsetWidth + 20;
        track.appendChild(firstSlide);
    }

    track.style.transform = `translateX(${x}px)`;
    requestAnimationFrame(animate);
}

animate();
