(function ($) {
  $(function () {


    if (!('ontouchstart' in window)) {
      const videoPropCont = document.querySelectorAll('.js-create_video');

      videoPropCont.forEach(function (item) {
        item.addEventListener('mouseenter', function () {
          var video = this.querySelector('video');

          if(!item.classList.contains('active')){

            item.classList.add('active');

            video.play();
            video.loop = false;

            video.addEventListener('ended', function () {
              item.classList.remove('active');
              item.classList.remove('video_end');
              item.classList.remove('video_pause');
            });

            video.addEventListener('timeupdate', function () {
              if((video.currentTime >= 2) && !item.classList.contains('video_end')) {
                video.pause();
                item.classList.add('video_pause');
              }
            });
          }
        });

        item.addEventListener('mouseleave', function () {
          var video = this.querySelector('video');

          if(item.classList.contains('active')) {
            if(item.classList.contains('video_pause')){
              item.classList.add('video_end');
              video.play()
            } else {
              item.classList.add('video_end');
            }
          }

        });

      });
    }


  });
})(jQuery);