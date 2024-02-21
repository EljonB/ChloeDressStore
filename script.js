let currentIndex = 0;
const slides = document.querySelector('.slider').children;
const totalSlides = slides.length;

function changeSlide(offset) {
  currentIndex = (currentIndex + offset + totalSlides) % totalSlides;
  updateSlider();
}

function updateSlider() {
  const newPosition = -currentIndex * 100 + '%';
  document.querySelector('.slider').style.transform = 'translateX(' + newPosition + ')';
}

document.querySelector('.prev-btn').addEventListener('click', function () {
  changeSlide(-1);
});

document.querySelector('.next-btn').addEventListener('click', function () {
  changeSlide(1);
});
