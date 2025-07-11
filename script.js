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


})