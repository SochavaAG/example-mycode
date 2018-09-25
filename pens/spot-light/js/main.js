(function ($) {
  $(function () {

    $(document).mousemove(function(e){
      $('.js-ball').css({left:e.pageX, top:e.pageY});
    });

  });
})(jQuery);