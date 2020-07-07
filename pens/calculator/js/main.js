(function ($) {
  $(function () {


      $("input[type=range]").rangeslider({polyfill: false});

      var t = $("#level1-clients"),
        a = $("#level2-clients"),
        n = $("#level3-clients"),
        e = $("#daily-orders"),
        i = $("#commission"),
        l = $("#affiliate-result"),
        s = $("#clients-attracted"),
        r = $("#daily-orders-per-client"),
        p = $("#agent-result"),
        o = $("#agent-commission"),
        c = $("#stp-clients-attracted"),
        d = $("#stp-daily-orders-per-client"),
        v = $("#pro-stp-result"),
        /*u = $(".tab-pane.active").attr("id"),*/
        h = $(".js-calculator_second-level-wrap");

      function agFormula() {
        l.html(parseInt(t.val() * (10 * e.val()) + i.val() * t.val() * e.val() + a.val() * e.val() * 10 * .167 + n.val() * e.val() * 10 * .056)).digits().append("<span class=\"ag-calculator_results-currency\">$</span>");

        v.html(parseInt($(".js-calculator_radio-box").find("input[name=partner-reward]:checked").val() * c.val() * d.val())).digits().append("<span class=\"ag-calculator_results-currency\">$</span>");

        p.html(parseInt(s.val() * (15 * r.val()) + o.val() * s.val() * r.val())).digits().append("<span class=\"ag-calculator_results-currency\">$</span>");
      }

      /*function agFormula() {
        "affiliate" == u ? l.html(parseInt(t.val() * (10 * e.val()) + i.val() * t.val() * e.val() + a.val() * e.val() * 10 * .167 + n.val() * e.val() * 10 * .056)).digits().append("<span>$</span>") : "agent" == u ? (console.log("agent"), p.html(parseInt(s.val() * (15 * r.val()) + o.val() * s.val() * r.val())).digits().append("<span>$</span>")) : "prostpmarkup" == u && v.html(parseInt($(".js-calculator_radio-box").find("input[name=partner-reward]:checked").val() * c.val() * d.val())).digits().append("<span>$</span>");
      }*/

      $(".js-calculator_input-wrap > .js-calculator_text-input").on("change input", function () {
        $(this).parent().find(".js-calculator_range").val($(this).val()).change();

        agFormula();
      });

      $(".js-calculator_input-wrap > .js-calculator_range").on("change input", function () {
        $(this).parent().find(".js-calculator_text-input").val($(this).val());

        agFormula();
      });

      $(".js-calculator_input-wrap > .js-calculator_radio-box > .js-calculator_radio").on("change input", function () {
        agFormula();
      });

      /*
      $('a[data-toggle="tab"]').on("shown.bs.tab", function () {
        u = $(".tab-pane.active").attr("id");

        agFormula();
      });
      */

      $(".js-calculator_more-levels").click(function (t) {
        if($(this).hasClass("js-ag-opened")) {
          h.hide();
          h.find(".js-calculator_text-input").val(0);
          h.find(".js-calculator_range").val(0).change();
          $(this).removeClass("js-ag-opened");
        }else{
          h.css("display", "inline-block");
          h.find(".js-calculator_text-input").val(15);
          h.find(".js-calculator_range").val(15).change();
          $(this).addClass("js-ag-opened");
        }
        //$(this).hasClass("js-ag-opened") ? (h.hide(), h.find(".js-calculator_text-input").val(0), h.find(".js-calculator_range").val(0).change(), $(this).removeClass("js-ag-opened")) : (h.css("display", "inline-block"), h.find(".js-calculator_text-input").val(15), h.find(".js-calculator_range").val(15).change(), $(this).addClass("js-ag-opened"));
        agFormula();

        t.preventDefault();
      });

      $.fn.digits = function () {
        return this.each(function () {
          $(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1'"));
        });
      };

      agFormula();

      /*
      $(".partnership-calculators-block .js-nav-item-click").click(function () {
        $(".partnership-calculators-block #dropdownProgram .drop-title").text($(this).text());
      });

      $(".drop-down-programs .js-drop-click").click(function () {
        var t = $(this);
        setTimeout(function () {
          !function (t) {
            $(".drop-down-programs .js-drop-click").parent().removeClass("active").show(), $(t).parent().addClass("active").hide();
          }(t)
        }, 200);
      });
      */

  });
})(jQuery);