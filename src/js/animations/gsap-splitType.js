import { gsap } from 'gsap';
import SplitType from "split-type";

const heroTitle = new SplitType('.hero__title', { types: "chars, words" })

heroTitle.chars.forEach((char, index) => {
    gsap.from(char, {
        y: 400,
        duration: 1,
        ease: "power4.out",
        opacity: 0,
        delay: index * 0.05,
    })
})

