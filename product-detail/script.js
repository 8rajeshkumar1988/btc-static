$(".faq.default-open .ans").slideDown(500);

$(".faq").click(function () {
  const item = $(this);
  $(".faq.default-open .ans").slideUp(500);
  const answer = item.find(".ans");
  if (item.hasClass("default-open")) {
    item.removeClass("default-open");
    answer.slideUp(500);
  } else {
    $(".faq").removeClass("default-open");
    item.addClass("default-open");
    answer.slideDown(500);
  }
});

var swiper = new Swiper(".explore_other_categories", {
  slidesPerView: 1,
  spaceBetween: 20,

  navigation: {
    nextEl: ".explore_other-next",
    prevEl: ".explore_other-prev",
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

var swiper = new Swiper(".spotlight_slider", {
  slidesPerView: 1.25,
  spaceBetween: 30,
  centeredSlides: true,
  initialSlide: 2,
  loop: true,
  navigation: {
    nextEl: ".product_spotlight-next",
    prevEl: ".product_spotlight-prev",
  },
});
