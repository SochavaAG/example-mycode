(function () {
  $(function () {
    $('.screenLock').css({height: $(document).height() + "px"});

    $('a.order-btn').click(function () {
      $(this).closest('form').submit();
      return false;
    });

    $('.close').click(function () {
      $('.screenLock').fadeOut(300);
    })

    var flag = true;
    $(window).mouseout(function (e) {
      if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
        $('.screenLock').fadeIn(300);
        flag = false;
      }
    })
  });
})();



