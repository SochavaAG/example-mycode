(function ($) {
  $(function () {

    var agBodyWidth = $('body').width(),
      agTextWidth = $('.js-marquee_text-item').width();
      agText = $('.js-marquee_box').html();
      agCount = Math.ceil(2*agBodyWidth/agTextWidth);

    for(var i = 0; i < agCount; i++) {
      $('.js-marquee_box').append(agText);
    }

    $(window).on('scroll', function () {
      var agPosX = $(window).scrollTop(),
        agDirection = '-' + agPosX + 'px';

      $('.js-marquee_box').css({'-webkit-transform': 'translateX(' + agDirection + ')', '-moz-transform': 'translateX(' + agDirection + ')', '-ms-transform': 'translateX(' + agDirection + ')', '-o-transform': 'translateX(' + agDirection + ')', 'transform': 'translateX(' + agDirection + ')'});
    });


  });
})(jQuery);