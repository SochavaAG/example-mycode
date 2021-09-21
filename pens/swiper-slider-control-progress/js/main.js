(function ($) {
  $(function () {


    setTimeout(function () {
      var agMainSlider = new Swiper('.swiper-container', {
        speed: 500,
        slidesPerView: 1,
        spaceBetween: 0,
        loopedSlides: 1,
        autoplay: {
          delay: 4500,
          autoplayDisableOnInteraction: false
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        noSwiping: true,
        noSwipingClass: 'swiper-container',
        on: {
          slideChange: function (swiper) {
            if (typeof(swiper) != 'undefined') {
              $('.swiper-slide').width($('.main_slider').width());

              $('.swiper-slide').eq(swiper.activeIndex + 1).width(document.querySelector('.js-main_slider').getBoundingClientRect().width + 1);
            }
          }
        }
      });
    }, 500);


  });
})(jQuery);