import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// --- SCROLL HORIZONTAL ---
const horizontalWrapper = document.querySelector(".horizontal-wrapper");
const totalScrollWidth = horizontalWrapper.scrollWidth;
const viewportWidth = window.innerWidth;
const scrollDistance = totalScrollWidth - viewportWidth;

// referencia al model-viewer
const modelViewer = document.querySelector("model-viewer");

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".horizontal-section",
        start: "top top",
        end: () => `+=${totalScrollWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
            if (modelViewer) {
                // self.progress va de 0 a 1
                const rotationY = self.progress * 360; // 0° → 360°
                modelViewer.setAttribute("camera-orbit", `${rotationY}deg 90deg 100%`);
            }
        }
    }
});

tl.to(horizontalWrapper, { x: -scrollDistance, ease: "none" });
