(window.webpackJsonp_name_ = window.webpackJsonp_name_ || []).push([[126, 700], {
  2081: function (t, e, s) {
    "use strict";
    s.r(e);
    var i = s(2215);
    e.default = i.default
  }, 210: function (t, e, s) {
    "use strict";
    s.d(e, "j", (function () {
      return d
    })), s.d(e, "g", (function () {
      return p
    })), s.d(e, "d", (function () {
      return C
    })), s.d(e, "b", (function () {
      return b
    })), s.d(e, "h", (function () {
      return x
    })), s.d(e, "m", (function () {
      return w
    })), s.d(e, "k", (function () {
      return k
    })), s.d(e, "i", (function () {
      return T
    })), s.d(e, "a", (function () {
      return y
    })), s.d(e, "c", (function () {
      return M
    })), s.d(e, "e", (function () {
      return I
    })), s.d(e, "l", (function () {
      return S
    })), s.d(e, "f", (function () {
      return $
    }));
    var i = s(6), n = s.n(i), a = s(14), o = s.n(a), r = s(35), c = s.n(r), l = s(18), u = s(276), _ = s.n(u), h = s(12), v = s.n(h);

    function d(t, e) {
      var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : NaN;
      return t >= e ? s : Math.floor(Math.random() * (e - t)) + t
    }

    function p(t, e) {
      var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, i = t + Math.random() * (e + 1 - t);
      if (!s)return Math.floor(i);
      var n = +("1" + "0".repeat(s));
      return Math.floor(i * n) / n
    }

    function m(t) {
      return t[d(0, t.length)]
    }

    function g(t) {
      return t.sort((function () {
        return .5 - Math.random()
      }))
    }

    function f() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16, i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (!(t.length + e.length) || s < t.length)return "";
      var n = [];
      if (t.map((function (t) {
          return n.push(m(t))
        })), i)for (var a = t.concat(e), o = n.length; o < s; o++)n[o] = m(m(a)); else for (var r, l, u = (r = (l = []).concat.apply(l, c()(t))).concat.apply(r, c()(e)), _ = n.length; _ < s; _++)n[_] = m(u);
      return g(n).join("")
    }

    function C() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8;
      return t < 3 ? "" : f([["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]], [], t)
    }

    function b(t) {
      var e = document.createElement("input");
      document.body.appendChild(e), e.value = t, e.select(), document.execCommand("copy"), e.remove()
    }

    function x() {
      var t = window.navigator.userAgent;
      return t.indexOf("MSIE ") > 0 || t.indexOf("Trident/") > 0 || t.indexOf("Edge/") > 0
    }

    function w(t) {
      document.getElementsByTagName("meta").forEach((function (e) {
        "description" === e.name.toLowerCase() && (e.content = t)
      }))
    }

    function k(t, e, s, i) {
      return t.substring(0, e) + i + t.substring(s, t.length)
    }

    function T(t) {
      var e, s, i, n, a, o, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.get("tzo"), c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], u = {};
      return e = (t = new Date(new Date(t).getTime() + 36e5 * r)).getUTCDate() < 10 ? "0" + t.getUTCDate() : t.getUTCDate(), s = t.getUTCMonth() + 1 < 10 ? "0" + (t.getUTCMonth() + 1) : t.getUTCMonth() + 1, i = t.getUTCHours() < 10 ? "0" + t.getUTCHours() : t.getUTCHours(), o = t.getUTCFullYear(), n = t.getUTCMinutes() < 10 ? "0" + t.getUTCMinutes() : t.getUTCMinutes(), a = t.getUTCSeconds() < 10 ? "0" + t.getUTCSeconds() : t.getUTCSeconds(), u.date = e + "." + s + (c ? "" : "." + o), u.time = i + ":" + n + (c ? "" : ":" + a), u
    }

    function y(t) {
      return t
    }

    function M(t) {
      var e, s;
      if (t instanceof HTMLElement) e = [t]; else if (Array.isArray(t) && !t.some((function (t) {
          return !(t instanceof HTMLElement)
        }))) e = t; else {
        if ("string" != typeof t)return;
        e = document.querySelectorAll(t)
      }
      e.forEach((function (t) {
        for (s = t.innerHTML.split(" "); t.scrollHeight > t.offsetHeight;)s.pop(), t.innerHTML = "".concat(s.join(" "), "...")
      }))
    }

    function I() {
      return "undefined" != typeof MAIN_LANGUAGE && l.get("lng") && MAIN_LANGUAGE === l.get("lng") ? "" : l.get("lng", "ru")
    }

    function A(t, e) {
      var s = _()(e);
      return t.replace(new RegExp("^(".concat(s, ")+|(").concat(s, ")+$"), "g"), "")
    }

    function S(t) {
      for (var e = arguments.length, s = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)s[i - 1] = arguments[i];
      return s.map((function (e) {
        return A(e, t)
      })).join(t)
    }

    var $ = function () {
      var t = o()(n.a.mark((function t(e) {
        var s, i, a, o = arguments;
        return n.a.wrap((function (t) {
          for (; ;)switch (t.prev = t.next) {
            case 0:
              if (s = o.length > 1 && void 0 !== o[1] ? o[1] : null, e) {
                t.next = 3;
                break
              }
              return t.abrupt("return", null);
            case 3:
              return i = s, a = !1, t.prev = 5, t.next = 8, v.a.prototype.$getItem(e);
            case 8:
              i = t.sent, t.next = 14;
              break;
            case 11:
              t.prev = 11, t.t0 = t.catch(5), console.error(t.t0);
            case 14:
              try {
                i = JSON.parse(i)
              } catch (t) {
                a = !0, console.error(t)
              }
              if (!a) {
                t.next = 25;
                break
              }
              return console.warn("bad data in local storage"), t.prev = 17, t.next = 20, v.a.prototype.$removeItem(e);
            case 20:
              t.next = 25;
              break;
            case 22:
              t.prev = 22, t.t1 = t.catch(17), console.error(t.t1);
            case 25:
              return t.abrupt("return", i);
            case 26:
            case"end":
              return t.stop()
          }
        }), t, null, [[5, 11], [17, 22]])
      })));
      return function (e) {
        return t.apply(this, arguments)
      }
    }()
  }, 2215: function (t, e, s) {
    "use strict";
    s.r(e);
    var i = s(2080), n = s(210), a = s(188), o = {
      particle_image: new Image,
      bg_img: new Image,
      context: null,
      particles: [],
      ticks: 0,
      max_particles: 50,
      initFlame: function () {
        var t = this, e = document.getElementById("flameCanvas"), s = Object(a.a)("/default/img/chest/");
        this.context = e.getContext("2d"), this.particle_image.src = s + "fireblob3.png", this.bg_img.src = s + "bg1_.jpg", e.width = 450, e.height = 550, setInterval((function () {
          t.loop()
        }), 80)
      },
      loop: function () {
        this.ticks % 2 && this.makeParticle(), this.ticks++, this.context.fillStyle = "rgb(0, 0, 0, 0)", this.context.drawImage(this.bg_img, 0, 0, 450, 550);
        for (var t = 0; t < this.particles.length; t++) {
          var e = this.particles[t];
          e.render(this.context), e.update()
        }
        for (; this.particles.length > this.max_particles;)this.particles.shift()
      },
      makeParticle: function () {
        var t = new this.ImageParticle(this.particle_image, 210, 280);
        t.velX = Object(n.j)(-.5, .5), t.velY = 0, t.size = Object(n.j)(.4, .6), t.maxSize = 2, t.alpha = Object(n.j)(.7, 1), t.gravity = -.5, t.drag = 1.1, t.shrink = 1.2, t.fade = .03, t.rotation = Object(n.j)(0, 360), t.spin = Object(n.j)(-5, 5), t.compositeOperation = "lighter", this.particles.push(t)
      },
      ImageParticle: function (t, e, s) {
        this.posX = e, this.posY = s, this.velX = 0, this.velY = 0, this.shrink = 1, this.size = 1, this.maxSize = -1, this.shimmer = !1, this.drag = 1, this.gravity = 0, this.alpha = 1, this.fade = 0, this.spin = 0, this.rotation = 0, this.compositeOperation = "source-over", this.img = t, this.update = function () {
          this.velX *= this.drag, this.velY *= this.drag, this.velY += this.gravity, this.posX += this.velX, this.posY += this.velY, this.size *= this.shrink, this.maxSize > 0 && this.size > this.maxSize && (this.size = this.maxSize), this.alpha -= this.fade, this.alpha < 0 && (this.alpha = 0), this.rotation += this.spin
        }, this.render = function (e) {
          if (this.alpha) {
            e.save(), e.translate(this.posX, this.posY);
            var s = this.shimmer ? this.size * Math.random() : this.size;
            e.scale(s, s), e.rotate(this.rotation * (Math.PI / 180)), e.translate(-.5 * t.width, -.5 * t.width), e.globalAlpha = this.alpha, e.globalCompositeOperation = this.compositeOperation, e.drawImage(t, 0, 0), e.restore()
          }
        }
      }
    }, r = s(17), c = s(2), l = {
      mixins: [i.a], data: function () {
        return {
          logo_img: "logoChest.png",
          slider_items: [{
            text: "Apple iPhone 11 pro",
            img: "iphone_11_pro",
            visible: !r.a.isRefId([c.n, c.o])
          }, {text: "Apple AirPods Pro", img: "apple_airpods_pro", visible: !0}, {
            text: "Apple iPad mini",
            img: "apple_ipad_mini",
            visible: !0
          }, {text: "Apple iPod", img: "apple_ipod", visible: !0}, {
            text: "Apple iPod Shuffle",
            img: "apple_ipod_shuffle",
            visible: !0
          }, {text: "Apple Watch Sport", img: "apple_watch_sport", visible: !0}],
          custom_safe_data: {blink_2: !1}
        }
      }, computed: {
        $_slider_items: function () {
          return this.slider_items.filter((function (t) {
            return t.visible
          }))
        }
      }, methods: {
        getBackgroundSliderImg: function (t) {
          return this.getDefaultPathBackground("chest/".concat(t, ".png"))
        }, payAlert: function () {
          this.showModal("chest_pay_alert")
        }, noGameAlert: function () {
          this.showModal("chest_null_balance_game")
        }, startHackingCallback: function () {
          this.safes.forEach((function (t, e) {
            setTimeout((function () {
              t.blink_2 = !0
            }), 100 * e)
          }))
        }, blinkChest: function (t) {
          var e = this.safes[t];
          e.blink_2 = !1, e.blink = !0, setTimeout((function () {
            e.blink = !1
          }), 900)
        }, closeSafeAnim: function (t) {
          this.blinkChest(t)
        }, openSafe: function (t, e) {
          var s = this, i = this.safes[e];
          this.balance_game = t.RT || 0, i.open = !0, i.sum_win = t.SW, setTimeout((function () {
            t.SW && s.blinkChest(e), s.setResult({sum_win: t.SW}), s.updateBalanceFromBonusesGame(), s.showModal("ResultGame")
          }), 400), setTimeout((function () {
            i.open = !1, i.sum_win = 0
          }), 1e3), setTimeout((function () {
            s.setGameStarted()
          }), 1400)
        }
      }, mounted: function () {
        this.$consts.is_mobile || o.initFlame()
      }
    }, u = s(20), _ = Object(u.a)(l, (function () {
      var t = this, e = t.$createElement, s = t._self._c || e;
      return s("div", {staticClass: "xChest_con games_cont"}, [s("canvas", {attrs: {id: "flameCanvas"}}), t._v(" "), s("div", {staticClass: "xChest_cen"}, [s("div", {staticClass: "xChest_infoCon"}, [s("div", {
        staticClass: "xChest_logo",
        style: t.getLogo()
      }), t._v(" "), t._m(0), t._v(" "), s("div", {staticClass: "xChest_chests not_start"}, t._l(t.safes, (function (e, i) {
        return s("div", {
          staticClass: "window", on: {
            click: function (e) {
              return t.clickSafe(i)
            }
          }
        }, [s("div", {
          staticClass: "blink",
          class: {animate_blink: e.blink, animate_blink_2: e.blink_2}
        }), t._v(" "), s("div", {
          staticClass: "chest",
          class: {open_chest: e.open}
        }, [s("div", {staticClass: "middle"}), t._v(" "), s("div", {
          staticClass: "priceCon",
          class: {show_gold: !!e.sum_win}
        }, [s("div", {
          staticClass: "price",
          style: t.getBackgroundImg("gold.png")
        })]), t._v(" "), s("div", {staticClass: "bottom"}), t._v(" "), s("div", {staticClass: "top"})])])
      })), 0), t._v(" "), s("div", {staticClass: "xChest_info_bigTxt_con"}, [s("span", [t._v(t._s(t.$T("bonuses_xgames_chest_text")))])]), t._v(" "), t.flag_auth ? s("div", {staticClass: "xChest_info_startCon"}, [s("transition", {
          attrs: {
            name: "xgames_fade",
            mode: "out-in"
          }
        }, [t.start_hacking ? t._e() : s("div", {
            staticClass: "xChest_info_start",
            on: {click: t.startHacking}
          }, [t._v(t._s(t.$T("xgames_play")))])])], 1) : t._e()]), t._v(" "), s("div", {staticClass: "xChest_rightCon"}, [s("a", {
        staticClass: "xChest_rules",
        attrs: {href: "javascript:void(0)"},
        on: {click: t.showGameRulesPopup}
      }, [t._v(t._s(t.$T("xgames_rules_full")))]), t._v(" "), s("div", {staticClass: "xChest_windowBlockCon"}, [s("div", {staticClass: "xChest_windowBlock"}, [t.flag_auth ? t._e() : s("div", {staticClass: "xChest_window_sliderCon"}, [s("div", {staticClass: "xChest_window_sliderName"}, [s("span", [t._v(t._s(t.$T("bonuses_xgames_superprize_month")))])]), t._v(" "), s("div", {staticClass: "xChest_window_slider"}, [s("swiper", {attrs: {options: t.swiper_options}}, t._l(t.$_slider_items, (function (e, i) {
          return s("swiper-slide", {key: i}, [s("div", {staticClass: "item"}, [s("div", {
            staticClass: "img",
            style: t.getBackgroundSliderImg(e.img)
          }), t._v(" "), s("div", {staticClass: "name"}, [t._v(t._s(e.text))])])])
        })), 1)], 1), t._v(" "), s("div", {staticClass: "xChest_window_sliderPrev"}), t._v(" "), s("div", {staticClass: "xChest_window_sliderNext"}), t._v(" "), s("div", {
          staticClass: "xChest_window_authCon",
          on: {
            click: function (e) {
              return t.showAuthPopup()
            }
          }
        }, [s("span", {domProps: {innerHTML: t._s(t.$T("bonuses_xgames_chest_not_auth"))}}), t._v(" "), s("br"), s("br"), t._v("\n                            " + t._s(t.$T("bonuses_xgames_chest_no_account"))), s("br"), t._v(" "), s("a", {
          staticClass: "link2",
          attrs: {href: "javascript:void(0)"}
        }, [t._v(t._s(t.$T("registration")))])])]), t._v(" "), t.flag_auth ? s("div", {staticClass: "xChest_window_setCon"}, [s("div", {staticClass: "counter"}, [s("img", {attrs: {src: t.getImg("nums.png")}})]), t._v(" "), s("div", {staticClass: "setName"}, [t._v(t._s(t.$T("bonuses_xgames_available_to_you")))]), t._v(" "), s("div", {staticClass: "line"}, [s("div", {staticClass: "l"}, [t._v(t._s(t.$T("bonuses_xgames_games")))]), t._v(" "), s("div", {staticClass: "r"}, [s("span", {staticClass: "nn"}, [t._v(t._s(t.balance_game))])])]), t._v(" "), s("div", {staticClass: "setName"}, [t._v(t._s(t.$T("bonuses_xgames_purchase_2")))]), t._v(" "), s("div", {staticClass: "line"}, [s("div", {staticClass: "l"}, [t._v(t._s(t.$T("bonuses_xgames_games")))]), t._v(" "), s("div", {staticClass: "r spin_container"}, [s("div", {staticClass: "spinIn"}, [t._v(t._s(t.count_pay))]), t._v(" "), s("div", {
          staticClass: "spinIn_button spinIn_plus",
          on: {click: t.clickPlusGame, mousedown: t.mouseDownPlus, mouseup: t.mouseUp, mouseleave: t.mouseUp}
        }), t._v(" "), s("div", {
          staticClass: "spinIn_button spinIn_minus",
          on: {click: t.clickMinusGame, mousedown: t.mouseDownMinus, mouseup: t.mouseUp, mouseleave: t.mouseUp}
        })])]), t._v(" "), s("div", {staticClass: "line"}, [s("div", {staticClass: "l"}, [t._v(t._s(t.$T("bonuses_xgames_balance")))]), t._v(" "), s("div", {staticClass: "r"}, [s("select-type-purchase")], 1)]), t._v(" "), s("center", [s("a", {
          staticClass: "buyBut",
          attrs: {href: "javascript:void(0)"},
          on: {
            click: function (e) {
              return e.preventDefault(), t.payGame(e)
            }
          }
        }, [t._v(t._s(t.$T("bonuses_xgames_buy")))])]), t._v(" "), s("div", {staticClass: "lineDop"}, [t._v(t._s(t.$_cost_game_text))])], 1) : t._e()])])])])])
    }), [function () {
      var t = this, e = t.$createElement, s = t._self._c || e;
      return s("div", {staticClass: "xChest_viking"}, [s("div", {staticClass: "anim1"}), t._v(" "), s("div", {staticClass: "anim2"}), t._v(" "), s("div", {staticClass: "anim3"}), t._v(" "), s("div", {staticClass: "anim4"}), t._v(" "), s("div", {staticClass: "blick"})])
    }], !1, null, null, null);
    e.default = _.exports
  }, 276: function (t, e, s) {
    var i = s(186), n = /[\\^$.*+?()[\]{}|]/g, a = RegExp(n.source);
    t.exports = function (t) {
      return (t = i(t)) && a.test(t) ? t.replace(n, "\\$&") : t
    }
  }
}]);