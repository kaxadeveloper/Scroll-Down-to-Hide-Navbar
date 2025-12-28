/* HIDE NAVBAR ON SCROLL */
let navbar = document.querySelector("nav");
let prevScroll = window.pageYOffset;

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if (prevScroll > currentScroll) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-80px";
    }

    prevScroll = currentScroll;
});

/* MOBILE MENU TOGGLE */
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

/* ACTIVE LINK */
document.querySelectorAll(".nav-links li").forEach(item => {
    item.addEventListener("click", () => {
        document.querySelector(".active")?.classList.remove("active");
        item.classList.add("active");
        navLinks.classList.remove("show");
    });
});
