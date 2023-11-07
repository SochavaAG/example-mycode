(function ($) {
  $(function () {

    /* button 4 */
    $('.js-base_btn-v4').on('click', function () {
      $(this).toggleClass('js-ag-base_btn-v4-clicked');
    });
    /* /button 4 */


    /* button 6 */
    var agDownloadBtn = $('.js-progress-bar_btn'),
        agDownloadBtnStatus = $('.js-progress-bar_btn__status'),
        agDownloadBtnTrack = $('.js-progress-bar_btn__track'),
        agDownloadBtnComplete = $('.js-progress-bar_btn__complete');

    function agProgressInterval() {
      var i = 1;

      var agTimerId = setInterval(function() {
        var agProgress = (100 - i);

        if(i < 100) {
          agDownloadBtnStatus.text(i + '%');
        }else{
          agDownloadBtnStatus.text('Button 6');
          agDownloadBtnStatus.removeClass('js-complete');
        }
        agDownloadBtnTrack.css({'left': '-' + agProgress + '%'});
        agDownloadBtnComplete.css({'left': agProgress + '%'});
        agDownloadBtnStatus.addClass('js-complete');

        if (i == 100) clearInterval(agTimerId);
        ++i;
      }, 200);
    }

    agDownloadBtn.on('click', function () {
      if(!agDownloadBtnStatus.hasClass('js-complete')) {
        agProgressInterval();
      }
    });
    /* /button 6 */

    /* button 10 */
    var agBtn10 = $('.js-base_btn-v10');

    function agAnimateBtnBorderShow() {
      var agSpeed = 300,
        agBtnBorder = $('.js-base_btn-v10').children('.js-ag-base_btn-border-v10');

      agBtnBorder.filter('.js-ag-base_btn-border__top-v10').animate({'width': 100 + '%'}, agSpeed, function () {
        agBtnBorder.filter('.js-ag-base_btn-border__right-v10').animate({'height': 100 + '%'}, agSpeed, function () {
          agBtnBorder.filter('.js-ag-base_btn-border__bottom-v10').animate({'width': 100 + '%'}, agSpeed, function () {
            agBtnBorder.filter('.js-ag-base_btn-border__left-v10').animate({'height': 100 + '%'}, agSpeed);
          });
        });
      });

      agBtn10.addClass('js-complete');
    }

    agBtn10.on('click', function () {
      if(!agBtn10.hasClass('js-complete')) {
        agAnimateBtnBorderShow();
      }
    });
    /* /button 10 */

    /* button 31 */
        $('.js-base_btn-v31').on("mousemove", function (e) {
        var t = $(this).offset(),
          n = e.pageX - t.left,
          i = e.pageY - t.top;
        $(this).attr("style", "--x:" + n + "px;--y:" + i + "px;");
      });
    /* /button 31 */

    /* button 48 */
      $('.js-ag-base_btn-v48')
        .on('mouseenter', function(e) {
          var agBtn = $(this).outerWidth();
          agBtn = agBtn * 2.25;
          var agParentOffset = $(this).offset(),
            relX = e.pageX - agParentOffset.left,
            relY = e.pageY - agParentOffset.top;
          $(this).find('.js-ag-base_icon-v48').css({top:relY, left:relX, width: '225%', height:agBtn});
        })
        .on('mouseleave', function(e) {
          var agParentOffset = $(this).offset(),
            relX = e.pageX - agParentOffset.left,
            relY = e.pageY - agParentOffset.top;
          $(this).find('.js-ag-base_icon-v48').css({top:relY, left:relX, width: 0, height: 0});
        });
    /* /button 48 */

    /* button 141 */
    var agBtnAll141 = document.querySelectorAll('.js-base_btn-v141');

    agBtnAll141.forEach(function (item) {
      item.addEventListener('mouseenter', function () {
        if (!this.classList.contains('js-ag-base_btn-v141__anim')){
          this.classList.add('js-ag-base_btn-v141__anim');
          var _self = this;
          setTimeout(function () {
            _self.classList.remove('js-ag-base_btn-v141__anim');
          }, 500)
        }
      });
    });
    /* /button 141 */

    /* button 142 */
    var agBtnAll142 = document.querySelectorAll('.js-base_btn-v142');

    agBtnAll142.forEach(function (item) {
      item.addEventListener('mouseenter', function () {
        if (!this.classList.contains('js-ag-base_btn-v142__anim')){
          this.classList.add('js-ag-base_btn-v142__anim');
          var _self = this;
          setTimeout(function () {
            _self.classList.remove('js-ag-base_btn-v142__anim');
          }, 500)
        }
      });
    });
    /* /button 142 */

    /* button 153 */
    var tilt = $('.js-base_btn-v153');
    tilt.tilt({
      scale: 1.05
    });
    /* /button 153 */

  });
})(jQuery);