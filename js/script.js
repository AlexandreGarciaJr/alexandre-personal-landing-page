/* ANIMAÇÃO SCROLL */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/* PARALLAX */
const heroBg = document.querySelector(".hero-bg");

let ticking = false;

window.addEventListener("scroll", () => {
    if(!ticking){
        requestAnimationFrame(() => {
            const offset = window.scrollY * 0.5;
            heroBg.style.transform = `translate3d(0, ${offset}px, 0)`;
            ticking = false;
        });
        ticking = true;
    }
});