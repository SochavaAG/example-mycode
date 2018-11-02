(function ($) {
  $(function () {

    var agMan = $('.js-man'),
      $window = $(window),
      $document = $(document),
      agEyes = agMan.find('.js-man_eyes');

      setTimeout(function() {
        agMan.addClass('js-ag-man_show');
      }, 2000);

      agMan.on('click', function(event) {
        event.stopPropagation();
        agMan.toggleClass('js-ag-man_open');

        $document.on('click', function agCloseMan(event) {
          event.stopPropagation();

          var $target = $(event.target);

          if (!$target.hasClass('js-man') || !$target.parents('.js-man').length) {
            $document.off('click', agCloseMan);
            agMan.removeClass('js-ag-man_open');
          }
        });
      });

      $window.on('mousemove', function(event) {
        agEyes.css('background-position', (25 * (event.clientX / $window.width()) + 13) + 'px 0');
        agEyes.css('top', (10 * (event.clientY / $window.height()) + 115) );
      });

  });
})(jQuery);