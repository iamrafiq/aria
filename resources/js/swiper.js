$(document).ready(function () {
  var appendNumber = 600;
  var prependNumber = 1;
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 3,
    centeredSlides: false,
    spaceBetween: 30,
    loop: true,
    loopedSlides: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    virtual: {
      slides: (function () {
        var slides = [];
        for (var i = 0; i < 6; i += 1) {
          slides.push(`<div class="slider-item">
          <img src="./resources/img/testimonial-1.jpg">
          <p>At Aria solutions, we’ve taken the consultancy concept one step further by offering a full service management organization with expertise. </p>
          <h3>Nora Zaman - Owner</h3>
      </div>`);
        }
        return slides;
      })(),
    },
  });
  document.querySelector(".slide-1").addEventListener("click", function (e) {
    e.preventDefault();
    swiper.slideTo(0, 0);
  });
  document.querySelector(".slide-250").addEventListener("click", function (e) {
    e.preventDefault();
    swiper.slideTo(249, 0);
  });
  document.querySelector(".slide-500").addEventListener("click", function (e) {
    e.preventDefault();
    swiper.slideTo(499, 0);
  });
  document
    .querySelector(".prepend-2-slides")
    .addEventListener("click", function (e) {
      e.preventDefault();
      swiper.virtual.prependSlide([
        "Slide " + --prependNumber,
        "Slide " + --prependNumber,
      ]);
    });
  document
    .querySelector(".append-slide")
    .addEventListener("click", function (e) {
      e.preventDefault();
      swiper.virtual.appendSlide("Slide " + ++appendNumber);
    });
});
