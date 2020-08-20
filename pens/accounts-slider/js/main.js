(function ($) {
  $(function () {


      function agAccountsSlider (t) {
        var e, n, a, r, s, i = $(window).width() <= 680,
          o = "js-ag-hide-first",
          c = "js-ag-naked",
          u = "js-ag-active",
          d = "fade-out",
          f = "js-ag-accounts-slider-bullets__active",
          l = "js-ag-prev-hidden",
          h = false,
          p = 0,
          v = $(".js-accounts-slider_slider"),
          g = $(".js-accounts-slider_list"),
          C = $(".js-accounts-slider_card"),
          m = C.first(),
          x = $(".js-accounts-slider-prev"),
          b = $(".js-accounts-slider-next"),
          j = $(".js-accounts-slider-index"),
          w = $(".js-accounts-slider-bullets").length ? $(".js-accounts-slider-bullets") : $('<span class="js-ag-accounts-slider__bullets"></span>').prependTo(".js-ag-accounts-slider__pagination"),
          y = $('<i class="ag-accounts-slider__bullet"></i>'),
          k = C.length,
          T = 0,
          _ = 0,
          O = 2,
          P = C.map((function (t, e) {
            return $(e).attr("id")
          })).toArray(),
          D = 500,
          M = {phone: 10, min: 20, med: 30, max: 40},
          A = false,
          q = false,
          S = {x: null, y: null};

        function L(t) {
          Y(t, p);
        }

        function z(t) {
          Y(t, p);
        }

        function X(t, e) {
          var a = e - _;
          Y(t, (J() + n) * (a < O ? a : O));
        }

        function Y(e, n) {
          e.css({transform: "translate3d(" + (t ? -n : n) + "px, 0, 0)"});
        }

        function E(t) {
          j.text(t + 1 + " / " + k);
        }

        function I(t, e) {
          var n = setTimeout((function () {
            clearTimeout(n), n = void 0, t();
          }), e);
        }

        function W(t, n, a) {
          e.removeClass(f), e.eq(t).addClass(f), E(t), function (t, e) {
            var n = $(".js-accounts-slider_card"), a = 0;
            _ = n.map((function (t, e) {
              return $(e).attr("id")
            })).toArray().indexOf(t), $(".js-accounts-slider_card." + u).addClass(o), n.each((function (t, n) {
              var r = $(n);
              r.hasClass(u) && r.addClass(o).removeClass(u), t < _ ? (L(r), r.addClass(l), I((function () {
                  r.removeClass(o + " " + u + " " + l + " " + c), t < _ - 1 ? (r.addClass(d), r.detach().appendTo(g), X(r, k + t), I((function () {
                      r.removeClass(d), (a += 1) === k - 1 && (h = false)
                    }), 1)) : (a += 1) === k - 1 && (h = false)
                }), D)) : t === _ ? (i ? e ? r.addClass(u + " " + c) : (r.addClass(c), I((function () {
                        r.addClass(u)
                      }), 400)) : r.addClass(u + " " + c), z(r), I((function () {
                    (a += 1) === k - 1 && (h = false)
                  }), D)) : (r.removeClass(o + " " + u + " " + l + " " + c), X(r, t), I((function () {
                    t === _ + (k - 1) && (r.detach().prependTo(g), L(r)), (a += 1) === k - 1 && (h = false)
                  }), D))
            }))
          }(n, a);
        }

        function J() {
          return m.outerWidth();
        }

        function N(e) {
          if (!e.changedTouches.item(a) || !A)return true;
          A = false, 0 !== s && (s < 0 ? t ? b.trigger("click") : x.trigger("click") : t ? x.trigger("click") : b.trigger("click"));
        }

        function B() {
          var t = $(window).width();
          n = t < 680 ? M.phone : t > 680 && t < 992 ? M.min : t > 1000 && t < 1200 ? M.med : M.max;
        }

        B(), E(T), C.each((function (t, e) {
          var n = $(e);
          0 === t ? (_ = t, Y(n, 0), n.addClass(u + " " + c)) : t === k - 1 ? (n.detach().prependTo(g), L(n)) : X(n, t);
          var a = y.clone();
          a.data("card", n.attr("id")), 0 === t && a.addClass(f), a.appendTo(w)
        })), (e = $(".ag-accounts-slider__bullet")).on("click", (function (t) {
          if (t.preventDefault(), t.stopPropagation(), h)return false;
          if ($(this).hasClass(f))return h = false, false;
          var e = $(this).data("card"), n = T, a = true;
          T = P.indexOf(e), 0 === n && T === k - 1 ? a = true : 0 === T ? a = false : T > n ? a = true : T < n && n - T == 1 && (a = false);
          W(T, e, a);
        })), C.on("click", (function (t) {
          if ("a" !== t.target.tagName.toLowerCase()) {
            if (t.preventDefault(), t.stopPropagation(), h)return false;
            if (h = true, $(this).hasClass(u))return h = false, false;
            var e = $(this).attr("id");
            W(T = P.indexOf(e), e, true);
          }
        })), x.on("click", (function (t) {
          if (t.preventDefault(), t.stopPropagation(), h)return false;
          var e;
          h = true, e = 0 === T ? k - 1 : T - 1;
          var n = P[T = e];
          W(T, n, false);
        })), b.on("click", (function (t) {
          if (t.preventDefault(), t.stopPropagation(), h)return false;
          var e;
          h = true, e = T === k - 1 ? 0 : T + 1;
          var n = P[T = e];
          W(T, n, true);
        })), v.on("touchstart", (function (t) {
          if (1 !== t.touches.length || A)return true;
          A = true, q = true, s = 0, a = t.changedTouches[0], r = a.identifier, S.x = a.pageX, S.y = a.pageY
        })), v.on("touchmove", (function (t) {
          if (!A && !q)return true;
          var e = function (t) {
            var e = function (t) {
              for (var e, n = t.changedTouches, a = 0, s = n.length; a < s; a++) {
                var i = n[a];
                if (i.identifier === r) {
                  e = i;
                  break;
                }
              }
              return e;
            }(t);
            return e ? {x: e.pageX, y: e.pageY, touch: e} : null;
          }(t);
          if (q) {
            if (!t.changedTouches.item(a))return true;
            Math.abs(S.x - e.x) >= Math.abs(S.y - e.y) ? (t.preventDefault(), A = true) : A = false, q = false;
          }
          if (A) {
            if (!t.changedTouches.item(a))return true;
            s = S.x - e.x;
          }
        })), v.on("touchcancel", N), v.on("touchend", N), $(window).on("resize", (function (t) {
          var n, a;
          i = $(window).width() <= 680, B(),
            n = $(".js-accounts-slider_card"),
            a = e.filter("." + f).data("card"),
            _ = n.map((function (t, e) {
              return $(e).attr("id")
            })).toArray().indexOf(a), n.each((function (t, e) {
            var n = $(e);
            t < _ ? L(n) : t === _ ? z(n) : X(n, t);
          }))
        }));
      }

    agAccountsSlider();

  });
})(jQuery);