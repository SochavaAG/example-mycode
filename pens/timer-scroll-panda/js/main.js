(function ($) {
  $(function () {

    $(document).ready(function () {
      $(document).scroll(function () {
        var x = $(window).scrollTop();
        $('.js-ag-panda-right').css('margin-right', 150 + x/5 + 'px').css('top', 150 + x/2 + 'px');
        $('.js-ag-panda-left').css('margin-left', 200 + x/5 + 'px').css('top', 200 + x/2 + 'px');
      });
    });


    function setPageTimer() {
      var setTimer = setInterval(function() {
        var dateNow = new Date().getTime();
        var dateStart = new Date('2019-11-07T22:00:59.000Z').getTime();
        var timeLeft = dateStart - dateNow;

        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        if(days < 10) {days = '0' + days; }
        if(hours < 10) {hours = '0' + hours; }
        if(minutes < 10) {minutes = '0' + minutes; }
        if(seconds < 10) {seconds = '0' + seconds; }
        document.getElementById('js-timer').innerHTML = '' +
          '<div class="js-ag-flip-block">' +
          '<span class="js-ag-flip-text">' + days +'</span>' +
          '<div class="js-ag-flip-counter">дни</div>' +
          '</div>' +
          '<div class="js-ag-flip-block">' +
          '<span class="js-ag-flip-text ">' + hours + '</span>' +
          '<div class="js-ag-flip-counter">часы</div>' +
          '</div>' +
          '<div class="js-ag-flip-block">' +
          '<span class="js-ag-flip-text ">' + minutes + '</span>' +
          '<div class="js-ag-flip-counter">минуты</div>' +
          '</div>' +
          '<div class="js-ag-flip-block">' +
          '<span class="js-ag-flip-text">' + seconds +'</span>' +
          '<div class="js-ag-flip-counter">секунды</div>' +
          '</div>';

        if (timeLeft < 0) {
          clearInterval(setTimer);
          document.getElementById('js-timer').innerHTML = '' +
            '<div class="js-ag-flip-block">' + '<span class="js-ag-flip-text">' + 0 + 0 + '</span>' + '<div class="js-ag-flip-counter">дни</div>' + '</div>' +
            '<div class="js-ag-flip-block">' + '<span class="js-ag-flip-text ">' + 0 + 0 + '</span>' + '<div class="js-ag-flip-counter">часы</div>' + '</div>' +
            '<div class="js-ag-flip-block">' + '<span class="js-ag-flip-text ">' + 0 + 0+ '</span>' + '<div class="js-ag-flip-counter">минуты</div>' + '</div>' +
            '<div class="js-ag-flip-block">' + '<span class="js-ag-flip-text">' + 0 + 0 + '</span>' + '<div class="js-ag-flip-counter">секунды</div>' + '</div>';
        }
      }, 1000);
    }

    setPageTimer();

  });
})(jQuery);