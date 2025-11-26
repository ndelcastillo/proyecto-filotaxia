// Selecciona todos los pares audio/botón
const players = document.querySelectorAll('.audio-player');

players.forEach(player => {
    const audio = player.querySelector('audio');
    const btnAudio = player.querySelector('.playPauseBtn');

    btnAudio.addEventListener('click', () => {
        if (audio.paused) {
            // Pausar todos los demás antes de reproducir este
            document.querySelectorAll('.audio-player audio').forEach(otherAudio => {
                if (otherAudio !== audio) {
                    otherAudio.pause();
                    const otherBtn = otherAudio.closest('.audio-player').querySelector('.playPauseBtn');
                    if (otherBtn) {
                        otherBtn.textContent = '▶';
                        otherBtn.classList.remove('pause-icon'); // quitar clase de pausa
                    }
                }
            });

            audio.play();
            btnAudio.textContent = '⏸'; // cambia a pausa
            btnAudio.classList.add('pause-icon'); // agrega clase de pausa
        } else {
            audio.pause();
            btnAudio.textContent = '▶'; // vuelve a play
            btnAudio.classList.remove('pause-icon'); // quita clase de pausa
        }
    });

    // Cuando termina, vuelve al ícono de play
    audio.addEventListener('ended', () => {
        btnAudio.textContent = '▶';
        btnAudio.classList.remove('pause-icon'); // quita clase de pausa
    });
});
