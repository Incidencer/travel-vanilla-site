
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header__container h1", scrollRevealOption);

ScrollReveal().reveal(".header__container h4", {
    ...scrollRevealOption,
    delay: 500,
})

ScrollReveal().reveal(".header__container .btn", {
    ...scrollRevealOption,
    delay: 1000,
})

ScrollReveal().reveal(".about__container .section__header", scrollRevealOption);
ScrollReveal().reveal(".about__container .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
})

ScrollReveal().reveal(".about__container .about__flex", {
    ...scrollRevealOption,
    delay: 1000,
})

ScrollReveal().reveal(".about__container .btn", {
    ...scrollRevealOption,
    delay: 1000,
})


ScrollReveal().reveal(".discover__card", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".discover__card__content", {
    ...scrollRevealOption,
    interval: 500,
    delay: 200,
});

ScrollReveal().reveal(".blogs__Card", {
    duration: 1000,
    interval: 400,
});

ScrollReveal().reveal("journals__card", {
    ...scrollRevealOption,
    interval: 400,
})


let menu = document.querySelector("menu");
let bars = document.querySelector("bars");

bars.addEventListener("click", () => {
    menu.classList.toggle('mobilemenu');
});

let nav = document.querySelector("nav");
let links = document.querySelectorAll(".link");

window.addEventListener("scroll", () => {
    if(window.screenY > 10) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
});

links.forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.toggle('mobilemenu');
    });
});