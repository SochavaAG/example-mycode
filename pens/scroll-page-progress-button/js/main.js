(function ($) {
  $(function () {

    /* progress par */
    var agProgressPath = document.querySelector('.js-ag-progress-wrap path'),
          agPathLength = agProgressPath.getTotalLength();

    agProgressPath.style.transition = agProgressPath.style.WebkitTransition = 'none';
    agProgressPath.style.strokeDasharray = agPathLength + ' ' + agPathLength;
    agProgressPath.style.strokeDashoffset = agPathLength;
    agProgressPath.getBoundingClientRect();
    agProgressPath.style.transition = agProgressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

    var agProgressUpdate = function () {
      var agScroll = $(window).scrollTop(),
            agHeight = $(document).height() - $(window).height(),
            agProgress = agPathLength - (agScroll * agPathLength / agHeight);

      agProgressPath.style.strokeDashoffset = agProgress;
    }

    agProgressUpdate();
    $(window).scroll(agProgressUpdate);

    var agOffset = 50,
          agDuration = 550;

    $(window).on('scroll', function() {
      if ($(window).width() > 1145) {
        if ($(this).scrollTop() > agOffset) {
          $('.js-ag-progress-wrap').addClass('js-ag-progress_active');
        } else {
          $('.js-ag-progress-wrap').removeClass('js-ag-progress_active');
        }
      }
    });

    $('.js-ag-progress-wrap').on('click', function(event) {
      event.preventDefault();
      $('html, body').animate({scrollTop: 0}, agDuration);
      return false;
    })

  });
})(jQuery);