(function ($) {
  $(function () {

    var agPopupItem = $('.js-ag-collection_item'),
      agPopupOverlay = $('.js-ag-collection-popup_overlay'),
      agPopupBox = $('.js-ag-collection-popup_box'),
      agPopupBtnClose = $('.js-ag-collection-popup_btn__close');


      agPopupItem.on('click', function (e) {
        e.preventDefault();


        if(agPopupBtnClose.is(e.target)) {
            agPopupClose();
        }else{
          $(this).children('.js-ag-collection-popup_overlay').addClass('js-ag-collection-popup_overlay__show');
        }
      });

    $(document).bind('keyup', function (e) {
      if (e.keyCode !== 27) {
        return true;
      }

      if (e.keyCode === 27 && agPopupBox.is(':visible')) {
        agPopupOverlay.removeClass('js-ag-collection-popup_overlay__show');
      }

    });


   function agPopupClose() {
      agPopupOverlay.removeClass('js-ag-collection-popup_overlay__show');
   }

  });
})(jQuery);