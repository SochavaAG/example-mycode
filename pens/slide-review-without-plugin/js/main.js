(function ($) {
  $(function () {

    var agActive,
      agCount,
      agTimerId,
      agSpeed = 3000,
      agNumSlide = $('.js-ag-review-user-info_item__active').index();

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
      $('.js-review-slider-control_item').removeClass('js-ag-review-slider-control_item__active');
    }

    function agSlide() {
      agSlideRemoveClass();

      if (agActive == agCount - 1) {
        agActive = 0;

        $('#js-review-user-info').animate({'marginLeft': (-100 * agActive) + '%'}, 300);
      } else {
        agActive = agActive + 1;

        $('#js-review-user-info').animate({'marginLeft': (-100 * agActive) + '%'}, 300);
      }

      $('.js-review-slider-control_item:eq(' + agActive + ')').addClass('js-ag-review-slider-control_item__active');
    }

    function agSlideRight() {
      agSlide();

      agSlideRestart();
    }

    function agSlideLeft() {
      agSlideRemoveClass();

      if (agActive == 0) {
        agActive = agCount - 1;

        $('#js-review-user-info').animate({'marginLeft': (-100 * agActive) + '%'}, 300);
      } else if (agActive == 1) {
        agActive = 0;

        $('#js-review-user-info').animate({'marginLeft': (-100 * agActive) + '%'}, 300);
      } else {
        agActive = agActive - 1;

        $('#js-review-user-info').animate({'marginLeft': (-100 * agActive) + '%'}, 300);
      }

      $('.js-review-slider-control_item:eq(' + agActive + ')').addClass('js-ag-review-slider-control_item__active');

      agSlideRestart();
    }

    function agSlideTo(agItem) {
      agSlideRemoveClass();

      agActive = agItem;

      if (agActive == 0) {
        $('#js-review-user-info').animate({'marginLeft': (-100 * agActive) + '%'}, 300);
      } else {
        $('#js-review-user-info').animate({'marginLeft': (-100 * agActive) + '%'}, 300);
      }

      $('.js-review-slider-control_item:eq(' + agActive + ')').addClass('js-ag-review-slider-control_item__active');

      agSlideRestart();
    }

    $(document).ready(function () {
      agCount = $('.js-review-user-info_item').length;
      agActive = agNumSlide;

      for (var i = 0; i < agCount; i++) {
        $('#js-review-slider-control_list').append('<li class="js-review-slider-control_item ag-review-slider-control_item"><i class="ag-review-slider-control_dot"></i></li>');
      }

      $('.js-review-slider-control_item:eq(' + agNumSlide + ')').addClass('js-ag-review-slider-control_item__active');

      agSlideStart();

      $('#js-review-slider_arrow__prev').on('click', function () {
        agSlideLeft();
      });

      $('#js-review-slider_arrow__next').on('click', function () {
        agSlideRight();
      });

      $('.js-review-slider-control_item').on('click', function () {
        agSlideTo($('.js-review-slider-control_item').index(this));
      });

      function agSliderWidthSize() {
        var agSlideWidth = $('#js-review-slider').width();

        $('#js-review-user-info').width(agCount * agSlideWidth);
        $('.js-review-user-info_item').width(agSlideWidth);
      }

      $(window).load(function () {
        agSliderWidthSize();
      });

      $(window).resize(function () {
        agSliderWidthSize();
      });
    });

  });
})(jQuery);