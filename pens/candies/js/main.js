(function ($) {
  $(function () {

    var agCandyItem = $('.js-candies_item');

    agCandyItem.on('click', function () {
      $(this).html('<div class="js-ag-candies_item-win ag-heart"></div>');
    });

  });
})(jQuery);