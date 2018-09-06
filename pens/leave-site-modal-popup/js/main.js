(function () {
  $(function () {
    //$('.js-popup-block').css({height: $(document).height() + "px"}); //выставляет высоту контейнеру js-popup-block

    $('.js-popup_close').click(function () {
      $('.js-popup-block').fadeOut(300);
    })

    var flag = true;
    $(window).mouseout(function (e) {
      if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
        $('.js-popup-block').fadeIn(300);
        flag = false;
      }
    })
  });
})();