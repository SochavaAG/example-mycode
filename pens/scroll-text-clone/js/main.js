(function ($) {
  $(function () {

    $(function () {
      var agHeader = $('.js-text-clone_title');

      agHeader.each(function (indx) {
        var agSelf = $(this);
        $(window).scroll(function () {
          var agScroll = $(window).scrollTop();

          if (agSelf.offset().top - agScroll < 300) {
            agSelf.addClass('js-ag-text-clone_title__is-active');
          } else {
            agSelf.removeClass('js-ag-text-clone_title__is-active');
          }
        });
      })

    });

  });
})(jQuery);