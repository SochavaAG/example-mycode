(function ($) {
  $(function () {

    var agController = new ScrollMagic.Controller(),
    agScene;

    for (var i = 1; i < 13; i++) {
      agFrame = "#frame" + i;
      agTriggerActive = "#trigger" + i;
      agTriggerHide = "#trigger" + (i + 1);

      agTriggerFrameActive(agTriggerActive, agFrame);

      agTriggerFrameHide(agTriggerHide, agFrame);
    }

    function agTriggerFrameActive(agTrigger, agFrame) {
      agScene = new ScrollMagic.Scene({triggerElement: agTrigger}).setClassToggle(agFrame, "active").addTo(agController).triggerHook(0.3);
    }

    function agTriggerFrameHide(agTrigger, agFrame) {
      agScene = new ScrollMagic.Scene({triggerElement: agTrigger}).setClassToggle(agFrame, "hide").addTo(agController).triggerHook(0.3);
    }

  });
})(jQuery);