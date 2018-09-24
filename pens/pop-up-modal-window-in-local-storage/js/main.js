(function () {
  $(function () {

    var agModalFunc;

    agModalFunc = function() {
      // if the current date is longer than now
      if (new Date > new Date(2030, 1, 12, 0, 0)) {
        return;
      }

      var TIME_INTERVAL = 1000 * 60 * 60, // One hour
            agModalOverlay = $('.js-ouibounce-modal_overlay'),
            agModalBlock = $('.js-ouibounce-modal-block-wrap'),
            agModalCloseBtn = $('.js-ouibounce-modal_btn-close'),
            agShowModalFunc,
            agCloseModalFunc;

      agShowModalFunc = function() {
        agModalOverlay.fadeIn();
        return agModalBlock.fadeIn();
      };
      agCloseModalFunc = function() {
        agModalOverlay.fadeOut();
        return agModalBlock.fadeOut();
      };

      $(document).on('mouseout', function(e) {
        var agCurrentTime,
              agFrom,
              agLastShowTime,
              agShowTimes;

        agFrom = e.relatedTarget || e.toElement;
        agShowTimes = parseInt(localStorage.getItem("agModalCountUsages")) || 0;
        agLastShowTime = parseInt(localStorage.getItem("agModalLastShowTime")) || 0;
        agCurrentTime = new Date().getTime();

        if ((!agFrom || agFrom.nodeName === "HTML") && agShowTimes < 3 && agCurrentTime - agLastShowTime >= TIME_INTERVAL) {
          agShowModalFunc();
          localStorage.setItem("agModalCountUsages", agShowTimes + 1);
          return localStorage.setItem("agModalLastShowTime", agCurrentTime);
        }
      });

      // if you press the close button
      agModalCloseBtn.on('click', function() {
        agCloseModalFunc();
      });


      // if you click outside the modal block
      $(document).mouseup(function (e) {
        if (!agModalBlock.is(e.target) && agModalBlock.has(e.target).length === 0) {
          agModalOverlay.fadeOut();
          agModalBlock.fadeOut();
        }
      });

      // if press key "Esc"
      return $(document).bind('keyup', function(e) {
        if (e.keyCode !== 27) {
          return true;
        }
        if (e.keyCode === 27 && agModalBlock.is(':visible')) {
          agCloseModalFunc();
        }
      });

    };

    $(document).ready(function() {
      return agModalFunc();
    });

  });
})();
