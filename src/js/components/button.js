import { gsap } from "gsap";

/* ---------------------------------------- */
/* BtnPrimary */
/* ---------------------------------------- */
document.querySelectorAll(".button--primary").forEach(button => {
    const bg = button.querySelector(".button-bg");

    button.addEventListener("mouseenter", () => {
        gsap.to(bg, { width: "100%", duration: 0.25, ease: "power2.out" });
    });

    button.addEventListener("mouseleave", () => {
        gsap.to(bg, { width: "0%", duration: 0.5, ease: "power2.inOut" });
    });
});


/* ---------------------------------------- */
/* BtnTerciary */
/* ---------------------------------------- */
document.querySelectorAll(".button--terciary").forEach(button => {
    const lineBtn = button.querySelector(".button-line");

    button.addEventListener("mouseenter", () => {
        const tlBtn = gsap.timeline();
        tlBtn.to(lineBtn, { scaleX: 0, duration: 0.4, ease: "power4.in" })
            .to(lineBtn, { scaleX: 1, duration: 0.3, ease: "circ.out" });
    });
});


/* ---------------------------------------- */
/* BtnTerciary-alt1 */
/* ---------------------------------------- */
document.querySelectorAll(".button--terciary-alt-1").forEach(button => {
    const lineBtnAlt1 = button.querySelector(".button-line-alt-1 ");

    button.addEventListener("mouseenter", () => {
        const tlBtn1 = gsap.timeline();
        tlBtn1.to(lineBtnAlt1, { scaleX: 0, duration: 0.4, ease: "power4.in" })
            .to(lineBtnAlt1, { scaleX: 1, duration: 0.15, ease: "circ.inOut" });
    });
});

