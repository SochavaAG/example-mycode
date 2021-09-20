(function ($) {
  $(function () {


    var agItem = $('.js-man_item'),
      agItemTitle = $('.js-man_title-item');

    agItemTitle.append('<div class="js-ag-sliding-text-wrap"><div class="js-ag-sliding-text"></div></div>');

    agItem.on('mouseenter', function () {
      var agItemLeft = $(this).offset().left,
        agItemText = $(this).find('.js-man_title-item'),
        agItemTextSlide = agItemText.text();

      $(this).find('.js-ag-sliding-text').append(agItemTextSlide);

      $(this).find('.js-ag-sliding-text').css({left: 150 - agItemLeft});
    });

    agItem.on('mouseleave', function () {
      var agItemTextSlide = $(this).find('.js-ag-sliding-text'),
        agItemTextSlideWrap = $('.js-ag-sliding-text-wrap');

      agItemTextSlideWrap.removeAttr('style');
      agItemTextSlide.empty();

      $(this).find('.js-ag-sliding-text').css({ left: '-200vw'});
    });


    // смещение выезжающей должности по скролу
    var agWindowOffset,
          agViewPort = window.innerHeight,
          agSlidingText = $('.js-ag-sliding-text'),
          agScrollTopLast = 0,
          agSlidingTextX = 0;


    $(window).on('scroll', function () {
      agWindowOffset = window.pageYOffset;

      $('.js-man_title-item').on('mouseleave', function () {
        agSlidingTextX = 0;
      });

      if (typeof agSlidingText.offset() !== 'undefined') {
        if (agWindowOffset >= agSlidingText.offset().top - agViewPort && agWindowOffset <= agSlidingText.offset().top + 1500) {
          var agScrollTop = $(this).scrollTop();

          if (agScrollTop > agScrollTopLast) {
            agSlidingTextX -= 2;

            agSlidingText.parent().css('transform', 'translateX(' + agSlidingTextX + 'px)');
          } else {
            agSlidingTextX += 2;

            agSlidingText.parent().css('transform', 'translateX(' + agSlidingTextX + 'px)');
          }

          agScrollTopLast = agScrollTop;
        }
      }
    });

  });
})(jQuery);