(function ($) {
  $(function () {


    var agDuration = 2500,
      agRevealDuration = 1000,
      agRevealAnimationDelay = 1500;

    function fnAnimateHeadline(argHeadlines) {
      argHeadlines.each(function() {
        var agHeadline = $(this);

        var agSpanWrapper = agHeadline.find('.js-text_word-wrap'),
          agNewWidth = agSpanWrapper.width() + 10;

        agSpanWrapper.css('width', agNewWidth);

        //trigger animation
        setTimeout(function() {
          fnHideWord(agHeadline.find('.js-ag-is-visible').eq(0))
        }, agDuration);
      });
    }

    function fnHideWord(argWord) {
      var agNextWord = fnTakeNext(argWord);

      argWord.parents('.js-text_word-wrap').animate({
        width: '2px'
      }, agRevealDuration, function() {
        fnSwitchWord(argWord, agNextWord);
        fnShowWord(agNextWord);
      });
    }

    function fnTakeNext(argWord) {
      return (!argWord.is(':last-child')) ? argWord.next() : argWord.parent().children().eq(0);
    }

    function fnSwitchWord(argWordOld, argWordNew) {
      argWordOld.removeClass('js-ag-is-visible').addClass('js-ag-is-hidden');
      argWordNew.removeClass('js-ag-is-hidden').addClass('js-ag-is-visible');
    }

    function fnShowWord(argWord) {
      argWord.parents('.js-text_word-wrap').animate({
        'width': argWord.width() + 10
      }, agRevealDuration, function() {
        setTimeout(function() {
          fnHideWord(argWord)
        }, agRevealAnimationDelay);
      });
    }

    fnAnimateHeadline($('.js-text_word-box'));


  });
})(jQuery);