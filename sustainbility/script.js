const images = document.querySelectorAll(".animate-scale img");
const vh = window.innerHeight;
const heroHeight = document.querySelector(".heroBanner").offsetHeight;

images.forEach((img, i) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: document.body,
      start: () => `top -${heroHeight + vh * i}`,
      end: () => `top -${heroHeight + vh * (i + 1)}`,
      scrub: true,
    },
    defaults: { ease: "power2.inOut" },
  });

  tl.fromTo(img, { scale: 0 }, { scale: 1 });

  const nextImg = images[i + 1];
  if (nextImg) {
    gsap.set(nextImg, { scale: 0 });
  }
});
