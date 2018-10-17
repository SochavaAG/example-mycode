(function ($) {
  $(function () {

    /* button 4 */
    $('.js-base_btn-v4').click(function (e) {
      $(this).toggleClass('js-ag-base_btn-v4-clicked');
    });
    /* /button 4 */


    /* button 9 */
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
          agDownloadBtnStatus.text('Button 9');
          agDownloadBtnStatus.removeClass('js-complete');
        }
        agDownloadBtnTrack.css({'left': '-' + agProgress + '%'});
        agDownloadBtnComplete.css({'left': agProgress + '%'});
        agDownloadBtnStatus.addClass('js-complete');

        if (i == 100) clearInterval(agTimerId);
        ++i;
      }, 200);
    }

      agDownloadBtn.click(function (e) {
        if(!agDownloadBtnStatus.hasClass('js-complete')) {
          agProgressInterval();
        }
      });
    /* /button 9 */

    /* button 10 */
    function agAnimateBtnBorderShow() {
      var agSpeed = 300,
        agBtnBorder = $('.js-base_btn-v10').children('.js-ag-base_btn-border-v10');

      agBtnBorder.filter('.js-ag-base_btn-border__top-v10').removeAttr('style').animate({'width': 100 + '%'}, agSpeed, function () {
        agBtnBorder.filter('.js-ag-base_btn-border__right-v10').removeAttr('style').animate({'height': 100 + '%'}, agSpeed, function () {
          agBtnBorder.filter('.js-ag-base_btn-border__bottom-v10').removeAttr('style').animate({'width': 100 + '%'}, agSpeed, function () {
            agBtnBorder.filter('.js-ag-base_btn-border__left-v10').removeAttr('style').animate({'height': 100 + '%'}, agSpeed);
          });
        });
      });
    }

    agAnimateBtnBorderShow();


  });
})(jQuery);

