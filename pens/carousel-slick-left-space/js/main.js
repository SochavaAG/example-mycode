(function ($) {
  $(function () {


    /* lesson carousel */
    $('.js-carousel').slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '.js-ag-carousel-arrow_prev',
      nextArrow: '.js-ag-carousel-arrow_next',
      responsive: [{
        breakpoint: 981,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
    });
    /* /lesson carousel */


    /* video iframe */
    window.youTuber = {
      template: '<iframe width="100%" height="100%" allow="autoplay" src="https://www.youtube.com/embed/[%videoid%]?autoplay=1&amp;origin=https%3A%2F%2Fkuk.edu.ua" allowfullscreen="" frameborder="0" allowfullscreen=""></iframe>',

      init: function(selector) {
        $(selector).on('click', function() {
          if ($(this).find("iframe").size() == 0) {
            youTuber.loadItem($(this));
          }
        });
      },

      loadItem: function (container) {
        var videoId = container.attr('data-video-id');

        if (typeof videoId !== 'undefined') {
          container.html(youTuber.template.replace("[%videoid%]", videoId));
          /*container.addClass("js-ag-video-played");*/
        }
      }

    };

    youTuber.init('.js-videos');
    /* /video iframe */

  });
})(jQuery);