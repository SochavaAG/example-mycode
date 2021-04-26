(function ($) {
  $(function () {


    /*
    function changeCoursesCategory() {
      window.location = '/courses/category/' + $('#n1').val();
    }

    function changeCoursesCity() {
      window.location = '/courses/category/' + $('#n1').val() + '/' + $('#filter-city-select').val();
    }
*/

    // Categories Filters
    $('.js-filtered').addClass('filter-on');
    var filterValues = [];

    $('.js-filter').change(function () {
      filterValues[$(this).data('filter')] = $(this).val();
      $(this).val() != 'all' ? $(this).addClass('js-ag-active') : $(this).removeClass('js-ag-active');

      filterList(filterValues);
    });

    // Recruiters filter function
    function filterList(filterValues) {
      $('.js-feedback')
        .find('.js-filtered')
        .each(function (i) {
          var show = [];
          var item = $(this);
          var dataSet = $(this).data();

          $.each(dataSet, function (index, data) {
            //console.log('parse', parseInt(filterValues[index]));

            if (filterValues[index] != undefined) {
              if ( (index != 'priceMin' && index != 'priceMax' && dataSet[index].indexOf(filterValues[index]) >= 0) ||
                (index == 'priceMin' && (dataSet[index] >= parseInt(filterValues[index]) || isNaN(parseInt(filterValues[index]))) ) ||
                (index == 'priceMax' && (dataSet[index] <= parseInt(filterValues[index]) || isNaN(parseInt(filterValues[index]))) ) ) {
                show.push('true');
              } else {
                show.push('false');
              }
            }
          });

          // console.log(show);
          if (jQuery.inArray('false', show) !== -1) {
            item.hide().removeClass('filter-on');
          } else {
            item.show().addClass('filter-on');
          }
        });
    }


    $('.js-sort').change(function () {
      var sortValue = $(this).val();

      sortList(sortValue);
    });

    function sortList(sortValue) {
      var reviewsArray = $('.js-reviews-list .js-filtered');
      var count = 0;

      reviewsArray.sort(function (a, b) {
        switch (sortValue) {
          case 'rating':
            a = parseInt($(a).find('.screen-reader-text strong').html());
            b = parseInt($(b).find('.screen-reader-text strong').html());
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

      var agReviewList = $('.js-reviews-list');

      agReviewList.html('');
      agReviewList.append(reviewsArray);
    }

  });
})(jQuery);