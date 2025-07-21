var swiper = new Swiper(".event_btc", {
  slidesPerView: 3,
  spaceBetween: 20,

  navigation: {
    nextEl: ".event_btc-next",
    prevEl: ".event_btc-prev",
  },

  slidesOffsetBefore: 0,
  slidesOffsetAfter: 0,
  // breakpoints: {
  //   768: {
  //     slidesPerView: 3.7,
  //     spaceBetween: 40,
  //     slidesOffsetBefore: window.innerWidth * 0.1,
  //     slidesOffsetAfter: window.innerWidth * 0.1,
  //   },
  // },
});