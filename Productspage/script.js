$(document).ready(function () {
  $(".customization_buttons .cta").click(function () {
    const tab = $(this).data("tab");
    if ($(this).hasClass("active")) return;
    $(".customization_buttons .cta").removeClass("active").addClass("unactive");
    $(this).addClass("active").removeClass("unactive");

    const $currentText = $(".customization_text.active");
    const $nextText = $("#" + tab + "_text");

    gsap.to($currentText, {
      opacity: 0,
      y: 10,
      duration: 0.3,
      onComplete: () => {
        $currentText.removeClass("active").hide();
        $nextText.show().addClass("active");

        gsap.fromTo(
          $nextText,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5 }
        );
      },
    });

    const $currentCards = $(".customization_cards.active");
    const $nextCards = $("#" + tab);

    gsap.to($currentCards, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      onComplete: () => {
        $currentCards.removeClass("active").css("display", "none");
        $nextCards.css("display", "grid").addClass("active");

        gsap.set($nextCards.children(), { opacity: 0, y: 30 });

        gsap.to($nextCards.children(), {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
        });

        gsap.to($nextCards, { opacity: 1, y: 0, duration: 0.3 });
      },
    });
  });

 
});
