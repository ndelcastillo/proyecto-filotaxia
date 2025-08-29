import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

gsap.registerPlugin(ScrollTrigger);

// --- SCROLL HORIZONTAL ---
const horizontalWrapper = document.querySelector(".horizontal-wrapper");
const sections = gsap.utils.toArray(".horizontal-wrapper .panel");

// calcular ancho total del scroll horizontal
let totalScrollWidth = horizontalWrapper.scrollWidth;
let viewportWidth = window.innerWidth;
let scrollDistance = totalScrollWidth - viewportWidth;

// timeline
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".horizontal-section",
        start: "top top",
        end: () => `+=${totalScrollWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
            // tooltips
            const tooltips = document.querySelectorAll(".tooltip");
            tooltips.forEach((tip, i) => {
                const triggerPoint = i / (tooltips.length - 1);
                if (self.progress >= triggerPoint) {
                    tip.classList.add("show");
                } else {
                    tip.classList.remove("show");
                }
            });

            // modelo 3D rota con scroll
            if (model) {
                model.rotation.y = self.progress * Math.PI * 2; // 360 grados
            }
        }
    }
});

// animar horizontal
tl.to(horizontalWrapper, { x: -scrollDistance, ease: "none" });

// --- THREE.JS ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("three-container").appendChild(renderer.domElement);

// luces
scene.add(new THREE.AmbientLight(0xffffff, 1));
const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight.position.set(5, 5, 5);
scene.add(dirLight);

// modelo
let model;
const loader = new GLTFLoader();
loader.load(
    "../assets/models/forest_in_a_jar_-_terrarium.glb", // 👈 ajusta el path según tu proyecto
    (gltf) => {
        model = gltf.scene;
        model.scale.set(1.5, 1.5, 1.5);
        model.position.set(0, -0.5, 0);
        scene.add(model);
    },
    undefined,
    (err) => console.error("Error cargando modelo:", err)
);

// loop de render
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// resize
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
