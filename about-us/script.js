var swiper = new Swiper(".about_btc", {
  slidesPerView: 1,
  spaceBetween: 20,

  navigation: {
    nextEl: ".about_btc-next",
    prevEl: ".about_btc-prev",
  },
  
 slidesOffsetBefore: 0,   
  slidesOffsetAfter:0,   
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 40,
      slidesOffsetBefore: window.innerWidth * 0.10,  
      slidesOffsetAfter: window.innerWidth * 0.10,
    },
  },
});