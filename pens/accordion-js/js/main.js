(function ($) {
  $(function () {


    $('.js-ag-faq_title').on('click', function() {
      $('.js-ag-faq_title').not(this).next('.js-ag-faq_text').slideUp();
      $(this).next('.js-ag-faq_text').slideToggle();
    });


  });
})(jQuery);