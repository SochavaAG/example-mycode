(function ($) {
  $(function () {

    /* button 4 */
    $('.js-base_btn-v4').click(function (e) {
      $(this).toggleClass('js-ag-base_btn-v4-clicked');
    });
    /* /button 4 */


    /* button 9 */
    function agProgressInterval() {
      var i = 1,
      agStatus = $('.js-progress-bar_btn__status'),
      agTrack = $('.js-progress-bar_btn__track'),
      agComplete = $('.js-progress-bar_btn__complete');

      var agTimerId = setInterval(function() {
        var progress = (100 - i);

        if(i < 100) {
          agStatus.text(i + '%');
        }else{
          agStatus.text('Button 9');
        }
        agTrack.css({'left': '-' + progress + '%'});
        agComplete.css({'left': progress + '%'});

        if (i == 100) clearInterval(agTimerId);
        ++i;
      }, 200);
    }

    agProgressInterval();
    /* /button 9 */

  });
})(jQuery);

