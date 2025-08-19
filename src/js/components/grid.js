// Crear grilla overlay
const gridOverlay = document.createElement("div");
gridOverlay.classList.add("grid-overlay");

for (let i = 0; i < 12; i++) {
    const col = document.createElement("div");
    gridOverlay.appendChild(col);
}

// La grilla no está visible inicialmente
gridOverlay.style.display = "none";

document.body.insertBefore(gridOverlay, document.body.firstChild);

// Listener para Cmd + G (Meta + G)
window.addEventListener("keydown", (e) => {
    if (e.metaKey && e.key.toLowerCase() === "g") {
        e.preventDefault(); // prevenir comportamientos por defecto

        if (gridOverlay.style.display === "none") {
            gridOverlay.style.display = "grid";
        } else {
            gridOverlay.style.display = "none";
        }
    }
});
