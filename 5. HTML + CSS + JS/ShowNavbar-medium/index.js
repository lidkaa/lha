const button = document.querySelector('button');
const navbar = document.querySelector('.navbar');
let currentYPosition = 0;

document.addEventListener('scrollend', () => {
    currentYPosition = window.scrollY;
})

document.addEventListener('scroll', () => {
    navbar.style.position = 'fixed';
    if (window.scrollY < currentYPosition) {
        navbar.style.position = 'static';
    }
})

button.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})

//opóżnienie przy scrollend?