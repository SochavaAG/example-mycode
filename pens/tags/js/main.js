(function ($) {
  $(function () {


    /* tag search */
    $('.js-ag-tag-search_expand').on('click', function () {
      $('.js-ag-tag-search_more').fadeToggle();
    });


    $('.js-ag-tag-search_btn-close').on('click', function () {
      var agTag = $('.js-ag-tag-search_more').children('.js-ag-tag-search_item');
      console.log(agTag.length - 1);

      if((agTag.length - 1) == 0) {
        $('.js-ag-tag-search_more').remove();
        $('.js-ag-tag-search_item__more').remove();
      }

      $(this).parent('.js-ag-tag-search_item').remove();
    });
    /* /tag search */


    function agWidthTags() {
      var agWidthTags = $('.js-tag-search_list').children('.js-ag-tag-search_item').eq(0).outerWidth();

      $('.js-tag-search_list').children('.js-ag-tag-search_item').each(function () {
        var $this = $(this),
          agWidthTag = $this.outerWidth();

        agWidthTags += agWidthTag;

        if(agWidthTags > $('.js-tag-search_list').width()) {
          $this.addClass('js-ag-tag-search_item__collapsed');
        }
      });

      $('.js-ag-tag-search_item__collapsed').wrapAll( "<div class='js-ag-tag-search_more'></div>");
    }

    agWidthTags();

   /* $(window).resize(function () {
      agWidthTags();
    });*/

  });
})(jQuery);