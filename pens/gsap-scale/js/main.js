(function ($) {
  $(function () {

    var agDesktop = $('#js-main_img'),
    agFrame = $('#js-frame');


    TweenMax.set(agDesktop, {scale: 2.5, y: 0});
    TweenMax.set(agFrame, {scale: 1, y: 0});

    var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel"; //FF doesn't recognize mousewheel as of FF3.x

    var agFlag = 0;

    $(window).bind(mousewheelevt, function (event) {
      if (agFlag >= 1) {
        TweenMax.to(agDesktop, 1, {scale: 2.5, y: 0});
        TweenMax.to(agFrame, 1, {scale: 1, y: 0, onCompleteParams:[agFrame], onComplete: toggle});

        function toggle(){
          agFlag = 0;
        }
      }else{
        TweenMax.to(agDesktop, 1, {scale: 1, y: 0});
        TweenMax.to(agFrame, 1, {scale: 0.51, y: 0, onCompleteParams:[agFrame], onComplete: toggle });

        function toggle(){
          agFlag = agFlag + 1;
        }
      }
    });

  });
})(jQuery);