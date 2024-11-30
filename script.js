let index = 0;

function moverSlide(step) {
  const items = document.querySelectorAll(".items");
  index = index + step;

  if (index >= items.length) {
    index = 0;
  }

  if (index < 0) {
    index = items.length - 1;
  }
  const carousel = document.querySelector(".carousel");
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(() => moverSlide(1), 3000);

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
  slides.style.transform = `translateX(${offset}px)`;
}
