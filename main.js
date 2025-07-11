const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);


gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);


gsap.registerPlugin(ScrollTrigger);


const social_media = new Swiper(".social_media", {
  slidesPerView: 'auto',
  spaceBetween: 30,
});

const leftTrack = document.querySelector(".left-slide");
const leftContent = leftTrack.querySelector(".marquee-content");
const leftContentWidth = leftContent.offsetWidth;
const speed = 100;
const duration = leftContentWidth / speed;

gsap.to(leftTrack, {
  x: -leftContentWidth,
  ease: "none",
  duration: duration,
  repeat: -1,
});
const rightTrack = document.querySelector(".right-slide");
const rightContent = rightTrack.querySelector(".marquee-content");
const rightContentWidth = rightContent.offsetWidth;
const rightDuration = rightContentWidth / speed;
gsap.fromTo(
  rightTrack,
  { x: -rightContentWidth },
  {
    x: 0,
    ease: "none",
    duration: rightDuration,
    repeat: -1,
  }
);




