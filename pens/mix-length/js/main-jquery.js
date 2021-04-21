(function ($) {
  $(function () {

    const MIX_LENGTH = 150;
    var agTextarea = $('#js-comm_textarea'),
      agBtn = $('#js-comm_btn'),
      agAlert = $('#js-comm_alert');

    agMsg = '<div id="js-comm_count" class="js-ag-comm_count">Вы ввели <span class="js-count">0</span> символов из ' + MIX_LENGTH + ' минимальных!</div>';

    agAlert.append(agMsg);

    agTextarea.keyup(function () {
      var agMsgText = $('.js-ag-comm_count'),
        agCount = $('.js-count');

      agMsgText.removeClass('js-ag-comm_count__success');

      agCountSymbol = this.value.length;

      agCount.text(agCountSymbol);

      agBtn.prop('disabled', true);


      if (this.value.length >= MIX_LENGTH) {
        agMsgText.addClass('js-ag-comm_count__success');

        agBtn.prop('disabled', false);
      }
    });

  });
})(jQuery);