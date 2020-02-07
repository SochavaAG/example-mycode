(function ($) {
  $(function () {

      function agBubble() {
        requestAnimationFrame(agBubble);

        $('.bubble').each(function () {
          var $this = $(this),
            agVertical = $this.data("y"),
            agHorizontal = $this.data("x");

            (0 === agVertical || void 0 === agVertical || isNaN(agVertical)) && (agVertical = 0, $this.data("motion", 0), $this.data("speed", .1 * (2 * Math.random() + 2)), $this.data("x", 0), $this.css("left", 96 * Math.random() + 2 + "%"));
            $this.data("motion", $this.data("motion") + .05);
            agHorizontal = 30 * Math.sin($this.data("motion"));
            $this.data("y", agVertical + $this.data("speed"));
            $this.css("bottom", agVertical + "%");
            $this.css("transform", "translateX(" + agHorizontal + "px)");
            agVertical > 100 && $this.data("y", 0);
        })
      }

    agBubble();

  });
})(jQuery);