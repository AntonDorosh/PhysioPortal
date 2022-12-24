const dots = document.querySelectorAll('.intro__slider-dots>span')
const slides = document.querySelectorAll('.intro__slider>img');
let activeSlide = 0;
const interval = 3;

const reset = () => {
    dots.forEach(dot => dot.removeAttribute('class'));
    dots[activeSlide].className = 'slider-dots__active';

    slides.forEach(slide => slide.style.display = 'none');
    slides[activeSlide].style.display = 'block';
}

reset();

setInterval(() =>{
  reset();

  if(activeSlide < slides.length - 1) {
    activeSlide++;
  } else {
    activeSlide = 0;
  }

}, interval * 1000)

dots.forEach((dot, index) =>  {
  dot.addEventListener('click', () => {
    activeSlide = index;
    reset();
  })
})