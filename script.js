let slideArual = 0;
const slides = document.getElementById("slides");
const totalSlides = document.querySelectorAll(".slide").length;

document.getElementById("proximo").addEventListener("click", () => {
    slideArual = (slideArual + 1) % totalSlides;
    updateslider();
});

document.getElementById("anterior").addEventListener("click", () => {
    slideArual = (slideArual - 1 + totalSlides) % totalSlides;
    updateslider();
});
function updateslider() {
    const offset = -slideArual * 600;
    slides.style.transform =`translateX(${offset}px)`;
}




