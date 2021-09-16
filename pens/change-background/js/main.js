(function ($) {
  $(function () {


    var agDesign = $('.js-design'),
      agDesignID = $('#js-design'),
      agFrontend = $('.js-frontend'),
      agFrontendID = $('#js-frontend'),
      agBackend = $('.js-backend'),
      agBackendID = $('#js-backend');

    fnChangeText(agDesign, agDesignID);
    fnChangeText(agFrontend, agFrontendID);
    fnChangeText(agBackend, agBackendID);

    function fnChangeText(argDesign, argDesignID) {
      var agTimeOut,
        agOpacity = .9;

      argDesign.on('mouseleave', function () {

        argDesignID.css({
          transform: 'translateX(-100vw)',
          opacity: '0'
        });

        agTimeOut = setInterval(function () {
          argDesignID.css({
            transform: 'translateX(100vw)',
            transition: '0'
          });
        }, 500);
      });

      argDesign.on('mouseenter', function () {
        argDesignID.css({
          transform: 'translateX(0)',
          'transform-origin': '100vw',
          opacity: agOpacity,
          transition: '.5s'
        });

        clearInterval(agTimeOut);
      });
    }


  });
})(jQuery);