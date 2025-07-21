var swiper1 = new Swiper(".event_btc", {
  slidesPerView: 1.05,
  spaceBetween: 20,

  navigation: {
    nextEl: ".event_btc-next",
    prevEl: ".event_btc-prev",
  },

  slidesOffsetBefore: 0,
  slidesOffsetAfter: 0,
  breakpoints: {
    768: {
      slidesPerView: 3,
      slidesOffsetBefore: window.innerWidth * 0.1,
      slidesOffsetAfter: window.innerWidth * 0.1,
    },
  },
});
var swiper2 = new Swiper(".hero-slider", {
  slidesPerView: 1,
  spaceBetween: 0,

  navigation: {
    nextEl: ".hero_slider-next",
    prevEl: ".hero_slider-prev",
  },
});

$(document).ready(function () {
  $(".impact_wrapper.open .content").css("display", "grid").show();

  $(".impact_wrapper").click(function () {
    const $clicked = $(this);

    if ($clicked.hasClass("open")) {
      return;
    }

    $(".impact_wrapper.open .content").slideUp(800);
    $(".impact_wrapper").removeClass("open");

    $clicked.addClass("open");
    $clicked.find(".content")
      .css("display", "grid")
      .hide()
      .slideDown(800);
  });
});