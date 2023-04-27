const slides = document.querySelectorAll('[data-js="carousel-item"]');
const nextButton = document.querySelector('[data-js="carousel-button-next"]');
const prevButton = document.querySelector('[data-js="carousel-button-prev"]');

const lastSlideIndex = slides.length - 1;

let currentSlideIndex = 0;

const manipulateSlides = slideIndex => {
  slides.forEach(slide => slide.classList.remove('carousel-visible'))
  slides[slideIndex].classList.add('carousel-visible')
}


nextButton.addEventListener('click', () => {
  const slideIndex = currentSlideIndex === lastSlideIndex
    ? currentSlideIndex = 0
    : ++currentSlideIndex

  manipulateSlides(slideIndex);
})


prevButton.addEventListener('click', () => {
  const slideIndex = currentSlideIndex === lastSlideIndex
    ? currentSlideIndex = lastSlideIndex
    : --currentSlideIndex

  manipulateSlides(slideIndex);
})