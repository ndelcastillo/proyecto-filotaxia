import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    root: '.', // Usamos la raíz como punto de partida
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                manifiesto: resolve(__dirname, 'src/pages/manifiesto.html'),
                musica: resolve(__dirname, 'src/pages/musica.html'),
                terrarios: resolve(__dirname, 'src/pages/terrarios.html'),
            }
        }
    }
});
