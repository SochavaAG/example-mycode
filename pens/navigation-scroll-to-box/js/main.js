(function ($) {
  $(function () {


    $('.js-ag-nav_link').on('click', function () {
      var agPosition = $(this).attr('href').indexOf("#"),
        agElement = $(this).attr('href').substring(agPosition + 1);

      if(!$(this).hasClass('js-ag-active')) {
        $('.js-ag-nav_link').removeClass('js-ag-active');
        $(this).addClass('js-ag-active');

        fnScrollToElement(agElement);
      }
    });

    function fnScrollToElement(argElement) {
      $('html, body').animate({
        scrollTop: $('.' + argElement).offset().top
      }, 500);
    }


  });
})(jQuery);