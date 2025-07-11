$(document).ready(function () {



    var swiper = new Swiper(".ourProducts", {
        spaceBetween: 30,
        centeredSlides: false,
        slidesPerView: 2.2,
        loop: true,
        // autoplay: { 
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    $('.faq.default-open .ans').slideDown(500)

    $('.faq').click(function () {
        const item = $(this)
        $('.faq.default-open .ans').slideUp(500)
        const answer = item.find('.ans');
        if (item.hasClass('default-open')) {
            item.removeClass('default-open')
            answer.slideUp(500)
        } else {
            $('.faq').removeClass('default-open')
            item.addClass('default-open')
            answer.slideDown(500)
        }
    })




const images = document.querySelectorAll('.swirl-img');
const container = document.querySelector('.cap_container');
const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight;

const centerIndex = Math.floor(images.length / 2);
let swirlTimeline;

// Fixed directions for scattered images (for rest)
const fixedPaths = [
  { x: -1300, y: -1200 }, { x: -800, y: -1400 },
  { x: -1400, y: 0 },     { x: -1300, y: 1200 },
  { x: 1300, y: -1200 },  { x: 800, y: -1400 },
  { x: 1400, y: 0 },      { x: 1300, y: 1200 },
  { x: 0, y: -1600 },     { x: 0, y: 1600 },
  { x: -900, y: 1600 },   { x: 900, y: 1600 }
];

// Initial stacked setup
function setInitialLayout() {
  images.forEach((img, index) => {
    const offset = index - centerIndex;
    const scale = 1 - Math.abs(offset) * 0.1;
    const xOffset = offset * 60;

    gsap.set(img, {
      x: xOffset,
      y: 0,
      scale: scale,
      rotation: 0,
      zIndex: 100 - Math.abs(offset),
    });
  });
}

setInitialLayout();

// ✅ Swirl animation triggered by center image click
images[centerIndex].addEventListener('click', () => {
  // Prevent replay if already played
  if (swirlTimeline && swirlTimeline.progress() === 1) return;

  swirlTimeline = gsap.timeline();

  images.forEach((img, index) => {
    const isCenter = index === centerIndex;
    const isRightNext = index === centerIndex + 1;
    const additionNal = window.innerWidth / 10
    if (isCenter) {
      swirlTimeline.to(img, {
        x: -containerWidth / 2 + img.offsetWidth / 2 + additionNal,
        y: 0,
        scale: 1,
      }, 0);
    } else if (isRightNext) {
      swirlTimeline.to(img, {
        x: containerWidth / 2 - img.offsetWidth / 2 - additionNal,
        y: 0,
        scale: 1,
      }, 0);
    } else {
      const pathIndex = (index < centerIndex) ? index : index - 2;
      const path = fixedPaths[pathIndex % fixedPaths.length];

      swirlTimeline.to(img, {
        x: path.x,
        y: path.y,
        scale: 0.9,
        duration: 1,
      }, 0);
    }
  });
});

// ✅ Reset button to reverse the animation
document.getElementById('resetButton').addEventListener('click', () => {
  if (swirlTimeline) {
    swirlTimeline.reverse();
  }
});

    

})