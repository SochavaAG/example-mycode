(function ($) {
  $(function () {


    var agActive,
      agCount,
      agTimerId,
      agSpeed = 500,

      agCount = $('.js-review-user-avatar_item').length,

      agSlideWidth = $('#js-review-slider').width(),
      agAvatarWidth = $('.js-review-user-avatar_item').width(),
      agAvatarActiveMarginLeft = $('.js-ag-review-user-avatar_item__active').css('margin-left'),
      agAvatarActiveMarginRight = $('.js-ag-review-user-avatar_item__active').css('margin-right'),
      agAvatarBox = $('#js-review-slider_avatar'),
      agAvatarBoxWidth = 3 * parseInt(agAvatarWidth) + parseInt(agAvatarActiveMarginLeft) + parseInt(agAvatarActiveMarginRight),
      agAvatarActiveMarginEdge = (agAvatarBoxWidth - agAvatarWidth) / 2,
      agAvatarActiveLast = $('.js-review-user-avatar_item').length - 1,
      agNunSlide = $('.js-ag-review-user-avatar_item__active').index();

    agAvatarBox.width(agAvatarBoxWidth);
    $('.ag-review-user-info_item').width(agSlideWidth);

    for (var i = 0; i < agCount; i++) {
      $('#js-review-slider-control_list').append('<li class="js-review-slider-control_item ag-review-slider-control_item"></li>');
    }

    function agSlideStart() {
      agTimerId = setInterval(function () {
        agSlide();
      }, agSpeed);
    }

    function agSlideRestart() {
      clearInterval(agTimerId);
      agTimerId = setInterval(function () {
        agSlide();
      }, agSpeed);
    }

    function agSlideRemoveClass() {
      $('.js-review-slider-control_item:eq(' + agActive + ')').removeClass('js-ag-review-slider-control_item__active');
      $('.js-review-user-avatar_item:eq(' + agActive + ')').removeClass('js-ag-review-user-avatar_item__active');
      $('.js-review-user-avatar_item:eq(' + agActive + ')').removeAttr('style');
    }

    function agSlide() {
      agSlideRemoveClass();

      if (agActive == agCount - 1) {
        agActive = 0;
        $('#js-review-user-avatar').css('margin-left', '-20px');
        $('.js-review-user-avatar_item:eq(' + agActive + ')').css('margin-left', agAvatarActiveMarginEdge + 'px');
        $('#js-review-user-info').css('margin-left', (-100 * agActive) + '%');
      } else {
        agActive = agActive + 1;

        var agCalc = -((agActive - 1) * agAvatarWidth);
        $('#js-review-user-avatar').css('margin-left', agCalc + 'px');
        $('.js-review-user-avatar_item:eq(' + agAvatarActiveLast + ')').css('margin-right', agAvatarActiveMarginEdge + 'px');
        $('#js-review-user-info').css('margin-left', (-100 * agActive) + '%');
      }
      $('.js-review-slider-control_item:eq(' + agActive + ')').addClass('js-ag-review-slider-control_item__active');
      $('.js-review-user-avatar_item:eq(' + agActive + ')').addClass('js-ag-review-user-avatar_item__active');
    }

    function agSlideRight() {
      agSlide();

      agSlideRestart();
    }

    function agSlideLeft() {
      agSlideRemoveClass();

      if (agActive == 0) {
        agActive = agCount - 1;

        var agCalc = -((agActive - 1) * agAvatarWidth);
        $('#js-review-user-avatar').css('margin-left', agCalc + 'px');
        $('.js-review-user-avatar_item:eq(' + agAvatarActiveLast + ')').css('margin-right', agAvatarActiveMarginEdge + 'px');
        $('#js-review-user-info').css('margin-left', (-100 * agActive) + '%');
      } else if (agActive == 1) {
        agActive = 0;
        $('#js-review-user-avatar').css('margin-left', '-20px');
        $('.js-review-user-avatar_item:eq(' + agActive + ')').css('margin-left', agAvatarActiveMarginEdge + 'px');
        $('#js-review-user-info').css('margin-left', (-100 * agActive) + '%');
      } else {
        agActive = agActive - 1;

        var agCalc = -((agActive - 1) * agAvatarWidth);
        $('#js-review-user-avatar').css('margin-left', agCalc + 'px');
        $('#js-review-user-info').css('margin-left', (-100 * agActive) + '%');
      }
      $('.js-review-slider-control_item:eq(' + agActive + ')').addClass('js-ag-review-slider-control_item__active');
      $('.js-review-user-avatar_item:eq(' + agActive + ')').addClass('js-ag-review-user-avatar_item__active');

      agSlideRestart();
    }

    function agSlideTo(agItem) {
      agSlideRemoveClass();

      agActive = agItem;

      if (agActive == 0) {
        $('#js-review-user-avatar').css('margin-left', '-20px');
        $('.js-review-user-avatar_item:eq(' + agActive + ')').css('margin-left', agAvatarActiveMarginEdge + 'px');
        $('#js-review-user-info').css('margin-left', (-100 * agActive) + '%');
      } else {

        var agCalc = -((agActive - 1) * agAvatarWidth);

        $('#js-review-user-avatar').css('margin-left', agCalc + 'px');
        $('.js-review-user-avatar_item:eq(' + agAvatarActiveLast + ')').css('margin-right', agAvatarActiveMarginEdge + 'px');
        $('#js-review-user-info').css('margin-left', (-100 * agActive) + '%');
      }
      $('.js-review-slider-control_item:eq(' + agActive + ')').addClass('js-ag-review-slider-control_item__active');
      $('.js-review-user-avatar_item:eq(' + agActive + ')').addClass('js-ag-review-user-avatar_item__active');

      agSlideRestart();
    }

    agSlideStart();

    $('#js-review-slider_arrow-left').on('click', function () {
      agSlideLeft();
    });

    $('#js-review-slider_arrow-right').on('click', function () {
      agSlideRight();
    });

    $('.js-review-slider-control_item').on('click', function () {
      agSlideTo($('.js-review-slider-control_item').index(this));
    });

  });
})(jQuery);