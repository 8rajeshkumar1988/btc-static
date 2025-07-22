

var swiper = new Swiper(".recommendations_categories", {
  slidesPerView: 1,
  spaceBetween: 20,

  navigation: {
    nextEl: ".recommendations-next",
    prevEl: ".recommendations-prev",
  },
  
   
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween:20,
    },
    1200: {
      slidesPerView: "auto",
      spaceBetween: 40,
    },
  },
});


