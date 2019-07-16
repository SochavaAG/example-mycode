(function ($) {
  $(function () {

    $('.js-num_btn__min').on('click', function() {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;

      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();

      return false;
    });

    $('.js-num_btn__plus').on('click', function() {
      var $input = $(this).parent().find('input');

      $input.val(parseInt($input.val()) + 1);
      $input.change();

      return false;
    });

  });
})(jQuery);