(function ($) {
  $(function () {

    $(document).ready(function () {
      var agShowFlag = true,
        agCountBox = '.js-count_num';

      if ($(agCountBox).offset()) {
        $(window).on('scroll load resize', function () {
          if (!agShowFlag) {
            return false;
          }

          var agWindowTop = $(window).scrollTop();
          var agElemTop = $(agCountBox).offset().top;

          var agWindowHeight = $(window).height();
          var agDocumentHeight = $(document).height();

          var e_height = $(agCountBox).outerHeight();

          if (agWindowTop + 500 >= agElemTop || agWindowHeight + agWindowTop === agDocumentHeight || e_height + agElemTop < agWindowHeight) {
            $('.js-ag-count_spincrement').spincrement({
              thousandSeparator: '',
              duration: 8000,
            });

            agShowFlag = false;
          }
        });
      }
    });

  });
})(jQuery);