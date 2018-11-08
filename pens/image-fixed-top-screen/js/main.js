(function ($) {
  $(function () {

    var t = $('.js-showtime-block').offset().top;

    function checkTablet() {
      return $(window).width() <= 757;
    }

    $(window).on('scroll', function () {
      if ($(window).scrollTop() > t && !checkTablet()) {
        $('.js-showtime-movie:visible').each(function () {
          var agShowtimeBox = $(this).find('.js-showtimes_img-box'),
            agShowtimeBoxVisible = $('.buy-ticket-banner:visible');

          if ($(this).offset().top + 20 < $(window).scrollTop()) {
            if ($(this).offset().top + $(this).outerHeight() - 200 > $(window).scrollTop()) {
              agShowtimeBox.hasClass('js-ag-showtimes_img-box__sticked') || agShowtimeBox.addClass('js-ag-showtimes_img-box__sticked');
              $(this).css('padding-top', '45px');
              0 != agShowtimeBoxVisible.length && agShowtimeBox.css('top', agShowtimeBoxVisible.height() + 'px');
              agShowtimeBox.removeClass('js-ag-showtimes_img-box__end');
            } else {
              agShowtimeBox.addClass('js-ag-showtimes_img-box__end');
              agShowtimeBox.removeClass('js-ag-showtimes_img-box__sticked');
            }
          } else {
            $(this).css('padding-top', '20px');
            agShowtimeBox.removeClass('js-ag-showtimes_img-box__sticked');
            agShowtimeBox.removeClass('js-ag-showtimes_img-box__end');
          }
        })
      } else {
        $('.js-showtime-movie:visible').css('padding-top', '20px');
        $('.js-showtime-movie:visible .js-ag-showtimes_img-box__sticked').removeClass('js-ag-showtimes_img-box__sticked');
        $('.js-showtime-movie:visible .js-ag-showtimes_img-box__end').removeClass('js-ag-showtimes_img-box__end');
      }
    });

  });
})(jQuery);