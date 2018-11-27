(function ($) {
  $(function () {

    var agRelatedList = $('.js-related-post_list');

    agRelatedList.next('.js-related-post_btn-more').on('click', function (e) {
      e.preventDefault();

      $('.js-ag-hide').show(), $(this).hide();
    });

  });
})(jQuery);