window.addEventListener("DOMContentLoaded", () => {
   const slider = (slideSel, prev, next) => {
      const sliders = document.querySelectorAll(slideSel),
            prevBtn = document.querySelector(prev),
            nextBtn = document.querySelector(next);
      let slideIndex = 1;
      function showSlides(n) {
         if(n > sliders.length) {
            slideIndex = 1;
         }
          if(n < 1) {
             slideIndex = sliders.length;
          }
          sliders.forEach(slide => {
             slide.classList.add("animated");
            slide.style.display = "none";
          });
          sliders[slideIndex - 1].style.display = "block";
      }
      showSlides(slideIndex);
      function plusSlide(n) {
         showSlides(slideIndex += n);
      }
      prevBtn.addEventListener("click", () => {
         sliders[slideIndex - 1].classList.remove("slideInRight");
         sliders[slideIndex - 1].classList.add("slideInLeft");
         plusSlide(-1);
      });
      nextBtn.addEventListener("click", () => {
         sliders[slideIndex - 1].classList.remove("slideInLeft");
         sliders[slideIndex - 1].classList.add("slideInRight");
         
         plusSlide(1);
      });
   };
   slider(".slide__img", ".prev", ".next");
});