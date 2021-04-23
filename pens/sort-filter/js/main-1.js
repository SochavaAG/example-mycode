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
      $(this).val() != 'all' ? $(this).addClass('active') : $(this).removeClass('active');

      var filterType = $(this).data('filter');

      filterList(filterValues);
      $('.js-pagination').remove();
      $('.js-paginated').initPagination(20);
    });

    // Recruiters filter function
    function filterList(filterValues) {
      $('.feedback')
        .find('.js-filtered')
        .each(function (i) {
          var show = [];
          var item = $(this);
          var dataSet = $(this).data();
          $.each(dataSet, function (index, data) {
            // console.log('parse', parseInt(filterValues[index]));
            if (filterValues[index] != undefined) {
              if (
                (index != 'priceMin' && index != 'priceMax' && dataSet[index].indexOf(filterValues[index]) >= 0) ||
                (index == 'priceMin' && (dataSet[index] >= parseInt(filterValues[index]) || isNaN(parseInt(filterValues[index])))) ||
                (index == 'priceMax' && (dataSet[index] <= parseInt(filterValues[index]) || isNaN(parseInt(filterValues[index]))))
              ) {
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

      $(this).initPagination(20);
    });

    function sortList(sortValue) {
      var reviewsArray = $('.js-reviews-list .js-filtered');
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

    $.fn.drawPage = function (options) {
      let settings = $.extend(
        {
          from: 1,
          to: 1,
          boundary: false,
        },
        options,
      );
      return this.each(function () {
        let $this = $(this).children('ul');
        $this.empty();
        let $preTag = '<li class="page-item"><a class="page-link" href="javascript:void(0)" tabindex="-1"';
        let $endTag = '</a></li>';
        if (settings.boundary == true) $this.append($preTag + 'id="page-first" data-index="0">First' + $endTag);
        $this.append($preTag + 'id="page-previous" data-index="0">&lsaquo;' + $endTag);
        let $index = 0;
        for (var i = settings.from; i <= settings.to; i++) {
          $this.append($preTag + 'data-index="' + ++$index + '">' + i + $endTag);
        }
        $this.append($preTag + 'id="page-next" data-index="' + ++$index + '">&rsaquo;' + $endTag);
        if (settings.boundary == true) $this.append($preTag + 'id="page-last" data-index="0">Last' + $endTag);
      });
    };

    $.fn.pageChanging = function (options, callback) {
      let settings = $.extend(
        {
          size: 1,
          pageShow: 20,
          page: 1,
          limit: 10,
          boundary: false,
        },
        options,
      );
      return this.each(function () {
        let $parentTag = $(this);
        $(this)
          .children('ul')
          .click(function (event) {
            let $isBoundary = settings.boundary === true ? 1 : 0;
            let $thisChildren = $(this).children('li');
            let $position = $(event.target).attr('data-index');
            let $totalPage = Math.ceil(settings.size / settings.limit);
            let $index = parseInt($($thisChildren.filter('.active').html()).attr('data-index'));
            let $firstPositon = parseInt($($thisChildren.eq(1 + $isBoundary).html()).html());
            let $lastPositon = parseInt($($thisChildren.eq($thisChildren.length - (2 + $isBoundary)).html()).html());
            let $active = $($thisChildren.filter('.active').html()).html();
            let $page = isNaN($active) ? 1 : parseInt($active);
            let $drawMain = false;
            let $currentPage = $(event.target).html().toLowerCase();
            switch ($currentPage) {
              case 'first':
                if ($page > 1) {
                  $page = 1;
                  $drawMain = true;
                  $position = 1;
                } else {
                  return true;
                }
                break;
              case 'last':
                if (settings.page * settings.limit < $totalPage) {
                  $page = $totalPage;
                  $drawMain = true;
                  $position = settings.pageShow;
                } else {
                  return true;
                }
                break;
              case '‹':
                if ($page > 1) {
                  $page = $page - 1;
                  $drawMain = true;
                  $position = parseInt($index) - 1;
                } else {
                  return true;
                }
                break;
              case '›':
                if ($page < $totalPage) {
                  $page = $page + 1;
                  $drawMain = true;
                  $position = parseInt($index) + 1;
                } else {
                  return true;
                }
                break;
              default:
                $page = parseInt($(event.target).html());
                if ($position >= 1 && $position <= $totalPage) {
                  $drawMain = true;
                } else {
                  return true;
                }
            }
            let _from = 1,
              _to = settings.pageShow;
            if ($currentPage === 'first') {
              _from = 1;
              _to = $totalPage > settings.pageShow ? settings.pageShow : $totalPage;
            } else if ($currentPage === 'last') {
              _from = $totalPage - settings.pageShow + 1;
              _to = $totalPage;
            } else if ($position >= settings.pageShow && $lastPositon < $totalPage) {
              _from = $lastPositon - (settings.pageShow - 2);
              _to = $lastPositon + 1;
              $position = settings.pageShow - 1;
            } else if ($position <= 1 && $firstPositon > 1) {
              _from = $firstPositon - 1;
              _to = $firstPositon + (settings.pageShow - 2);
              $position = 2;
            } else {
              _from = $firstPositon;
              _to = $lastPositon;
            }
            if ($drawMain && $.isFunction(callback) && $(event.target).html() !== $active) {
              callback.call(this, { size: settings.size, page: $page, limit: settings.limit });
              $parentTag.drawPage({
                from: _from,
                to: _to,
                boundary: settings.boundary,
              });
            }
            if ($position > 0 && $position < ($totalPage > settings.pageShow ? settings.pageShow + 1 : $totalPage + 1) && $totalPage > 1) {
              $parentTag
                .find('ul > li')
                .eq(parseInt($position) + $isBoundary)
                .addClass('active')
                .siblings()
                .removeClass('active');
            }
          });
      });
    };

    $.fn.initPagination = function (limit) {
      var el = $(this);
      var totalCount = el.children('.filter-on').length;

      el.children().removeAttr('page');

      if (totalCount > limit) {
        var i, j, page = 1;

        for (i = 0, j = el.children().length; i < j; i += limit) {
          var array = el.children().slice(i, i + limit).attr('page', page);

          page++;
        }
        $('<div class="js-pagination"></div>').insertAfter(el);

        $('.js-pagination').Pagination(
          {
            size: totalCount,
            pageShow: 20,
            page: 1,
            limit: limit,
          },
          function (obj) {
            el.children().hide();
            el.children('.filter-on[page="' + obj.page + '"]').show();
          },
        );

        $('.js-pagination').click(function () {
          $('body, html').animate({
            scrollTop: el.position().top,
          });
        });
      }
    };

    $('.' + 'js-paginated').initPagination(20);


  });
})(jQuery);