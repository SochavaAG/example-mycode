(function () {
  $(function () {
    
  var agAnimateList = $('.js-nominal-pay_list'),
    agAnimateItem = $('.js-nominal-pay_list > li'),
  agDuration = 500,
  agEasing = 'linear',
  agDelay = 2000,

    agAnimateItemCount = agAnimateItem.length,
    agBlock = $('.js-nominal-pay-block'),
   agHeightBlock = agBlock.height();

   console.log(agAnimateItemCount);
   console.log(agBlock);
   console.log(agHeightBlock);

    function startAnimate() {
      for (var i = 0; i < agAnimateItem.length ; i++) {
        agScrollText = i*agHeightBlock;

        agAnimateList.animate({ top: '-' + agScrollText + 'px' }, agDuration, agEasing).delay(agDelay);
      }

      agAnimateList.animate({ top: '-' + agScrollText + 'px' }, agDuration, agEasing, function() {
        agAnimateList.css({
          top: agHeightBlock + 'px'
        });

        startAnimate();
      });

    }

    startAnimate();

  });
})();