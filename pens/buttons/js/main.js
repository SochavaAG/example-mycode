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

  });
})(jQuery);