(function ($) {
  $(function () {


    $('.js-sort').change(function () {
      var sortValue = $(this).val();

      sortList(sortValue);
    });

    function sortList(sortValue) {
      var reviewsArray = $('.js-filtered');
      var count = 0;

      reviewsArray.sort(function (a, b) {
        switch (sortValue) {
          case 'rating':
            a = parseInt($(a).find(".screen-reader-text strong").html());
            b = parseInt($(b).find(".screen-reader-text strong").html());
            break;
          case 'count':
            a = parseInt($(a).find('.js-reviews-count').html());
            b = parseInt($(b).find('.js-reviews-count').html());
            break;
        }

        count += 2;
        // compare
        if (a < b) {
          return 1;
        } else if (a > b) {
          return -1;
        } else {
          return 0;
        }
      });

      $('.js-reviews-list').html('');
      $('.js-reviews-list').append(reviewsArray);
    }


  });
})(jQuery);