(window.webpackJsonp_name_ = window.webpackJsonp_name_ || []).push([[150, 688], {
  1554: function (t, s, e) {
    "use strict";
    e.d(s, "a", (function () {
      return i
    }));
    var i = {
      mixins: [e(1384).a], constants: {SCREENS: {bets: 0, keys: 1}}, data: function () {
        return {
          result_coef: 0,
          current_screen: 0,
          hide_bets: !1,
          fade_girl: !1,
          show_back: !1,
          anim_key_in: !1,
          show_key_in_lock: !1,
          insert_key: !1,
          rotate_key: !1,
          chest_open: !1,
          selected_key: null,
          enable_click_keys: !1,
          lock_style: {},
          delay_show_win: 3e3,
          delay_show_lose: 1300,
          delay_enable_click_keys: 2600
        }
      }, methods: {
        visisbleKey: function (t) {
          return this.selected_key !== t
        }, insertAndRotateKey: function () {
          var t = this;
          this.show_key_in_lock = !0, this.afterReflowWindow((function () {
            t.insert_key = !0
          })), setTimeout((function () {
            t.rotate_key = !0
          }), 600)
        }, closeResultPopupCallback: function () {
          this.setCurrentScreen(this.$options.constants.SCREENS.bets), this.resetGame()
        }, resetGame: function () {
          var t = this;
          setTimeout((function () {
            t.selected_key = null, t.rotate_key = !1, t.insert_key = !1, t.show_key_in_lock = !1, t.chest_open = !1, t.result_coef = 0, t.customResetGame()
          }), 700)
        }, winAnim: function () {
          this.chest_open = !0
        }, loseAnim: function () {
          this.drop_key = !0
        }, parseGame: function (t) {
          var s = this;
          this.result_coef = t.CF, this.insertAndRotateKey(), setTimeout((function () {
            t.CF ? s.winAnim() : s.loseAnim(), setTimeout((function () {
              s.showResultPopup(t.SW), s.endGameCallback()
            }), t.CF ? s.delay_show_win : s.delay_show_lose)
          }), 2e3)
        }, choseKey: function (t) {
          this.enable_click_keys && (this.enable_click_keys = !1, this.selected_key = t, this.gameAjax({
            type_query: "place_bet",
            sumBet: this.get_curr_bet
          }, this.parseGame))
        }, placeBet: function () {
          var t = this;
          this.gameAjax({type_query: "bet", sumBet: this.get_curr_bet}, (function () {
            t.setCurrentScreen(t.$options.constants.SCREENS.keys), setTimeout((function () {
              t.enable_click_keys = !0
            }), t.delay_enable_click_keys)
          }))
        }, changeBalanceCallback: function () {
          this.current_screen === this.$options.constants.SCREENS.keys && null === this.selected_key && (this.enable_click_keys = !1, this.setBlockGame(), this.setCurrentScreen(this.$options.constants.SCREENS.bets))
        }, setCurrentScreen: function (t) {
        }, customResetGame: function () {
        }
      }
    }
  }, 1953: function (t, s, e) {
    "use strict";
    e.r(s);
    var i = e(2092);
    s.default = i.default
  },
  2092: function (t, s, e) {
    "use strict";
    e.r(s);

    var i = {
        mixins: [e(1554).a],
        data: function () {
          return {
            bubbles: [],
            bubbles_dop_class: !1,
            show_board: !1,
            half_open_chest: !1,
            open_light: !1,
            close_chest_light: !1,
            delay_show_win: 3500
          }
        },
        methods: {
          lockTremor: function () {
            for (var t = this, s = function (s) {
              setTimeout((function () {
                if (14 === s) t.lock_style = {}; else {
                  var e = t.rand(2, -2), i = t.rand(2, -2);
                  t.lock_style = {transform: "translate(".concat(e, "%, ").concat(i, "%)")}
                }
              }), 30 * s)
            }, e = 0; e < 15; e++)s(e)
          },
          setCurrentScreen: function (t) {
            var s = this;
            t !== this.current_screen && (this.current_screen = t, t === this.$options.constants.SCREENS.keys ? (this.fade_girl = !0, setTimeout((function () {
                s.hide_bets = !0, s.show_back = !0
              }), 500), setTimeout((function () {
                s.anim_key_in = !0
              }), 1e3), setTimeout((function () {
                s.show_board = !0
              }), 1500)) : (this.anim_key_in = !1, setTimeout((function () {
                s.show_board = !1, s.show_back = !1
              }), 500), setTimeout((function () {
                s.fade_girl = !1, s.hide_bets = !1
              }), 1e3)))
          },
          customResetGame: function () {
            this.half_open_chest = !1, this.open_light = !1, this.close_chest_light = !1
          },
          winAnim: function () {
            var t = this;
            this.open_light = !0, setTimeout((function () {
              t.half_open_chest = !0
            }), 150), setTimeout((function () {
              t.half_open_chest = !1, t.chest_open = !0
            }), 300)
          },
          loseAnim: function () {
            var t = this;
            this.close_chest_light = !0, this.lockTremor(), setTimeout((function () {
              t.close_chest_light = !1
            }), 500)
          },
          customAfterHidePreloader: function () {
            this.createBubbles()
          },
          createBubbles: function () {
            var t = this;
            this.bubbles_dop_class = !1, this.bubbles = [], this.afterReflowWindow((function () {
              for (var s = [], e = t.rand(95, 5), i = 0; i <= t.rand(50, 20); i++) {
                var a = t.rand(18, 5), n = t.rand(50, -50), o = t.rand(900, 400), c = t.rand(0, -900), l = t.rand(12e3, 8e3), r = i * t.rand(150, 30);
                s.push({
                  left: e + "%",
                  transform: "translateX(".concat(n, "px)"),
                  width: a + "px",
                  height: .66 * a + "px",
                  "-webkit-animation-duration": o + "ms",
                  "-moz-animation-duration": o + "ms",
                  "animation-duration": o + "ms",
                  "-webkit-animation-delay": c + "ms",
                  "-moz-animation-delay": c + "ms",
                  "animation-delay": c + "ms",
                  "-webkit-transition-duration": l + "ms",
                  "-moz-transition-duration": l + "ms",
                  "transition-duration": l + "ms",
                  "-webkit-transition-delay": r + "ms",
                  "-moz-transition-delay": r + "ms",
                  "transition-delay": r + "ms"
                })
              }
              t.bubbles = s, t.afterReflowWindow((function () {
                t.bubbles_dop_class = !0
              })), setTimeout((function () {
                t.createBubbles()
              }), 1e3 * t.rand(15, 10))
            }))
          }
        }
      },


      a = e(20), n = Object(a.a)(i, (function () {
      var t = this, s = t.$createElement, e = t._self._c || s;
      return e("div", {staticClass: "PSDN"}, [e("div", {staticClass: "PSDN-back1"}), t._v(" "), e("div", {
        staticClass: "PSDN-back2",
        class: {show_back_2: t.show_back}
      }, [e("div", {staticClass: "PSDN-chest-backCon"}, [e("div", {
        staticClass: "PSDN-chest-back",
        class: {show_chest_win: t.chest_open}
      }, [e("div", {
        staticClass: "PSDN-chest-top",
        class: {half_open: t.half_open_chest, full_open: t.chest_open}
      }), t._v(" "), e("div", {staticClass: "PSDN-chest-light2"}), t._v(" "), e("transition", {
        attrs: {
          name: "xgames_fade",
          mode: "out-in"
        }
      }, [t.close_chest_light ? e("div", {staticClass: "PSDN-chest-light3"}) : t._e()]), t._v(" "), e("div", {staticClass: "PSDN-chest-prize"}, [t._l(7, (function (t) {
        return e("div", {class: "PSDN-chest-bubble-" + t})
      })), t._v(" "), e("div", {staticClass: "PSDN-chest-prize-num"}, [e("svg", {
        staticClass: "PSDN-chest-prize-num-svg",
        attrs: {xmlns: "http://www.w3.org/2000/svg", version: "1.1"}
      }, [e("defs", [e("linearGradient", {
        attrs: {
          id: "linear1",
          x1: "0%",
          y1: "0%",
          x2: "100%",
          y2: "100%"
        }
      }, [e("stop", {attrs: {offset: "0%", "stop-color": "#bc9f00"}}), t._v(" "), e("stop", {
        attrs: {
          offset: "35%",
          "stop-color": "#ffeda5"
        }
      }), t._v(" "), e("stop", {
        attrs: {
          offset: "49%",
          "stop-color": "#bca800"
        }
      }), t._v(" "), e("stop", {
        attrs: {
          offset: "82%",
          "stop-color": "#ffef96"
        }
      }), t._v(" "), e("stop", {
        attrs: {
          offset: "100%",
          "stop-color": "#ffef96"
        }
      })], 1), t._v(" "), e("linearGradient", {
        attrs: {
          id: "linear2",
          x1: "0%",
          y1: "0%",
          x2: "100%",
          y2: "100%"
        }
      }, [e("stop", {attrs: {offset: "0%", "stop-color": "#ffffff"}}), t._v(" "), e("stop", {
        attrs: {
          offset: "13%",
          "stop-color": "#795d00"
        }
      }), t._v(" "), e("stop", {
        attrs: {
          offset: "37%",
          "stop-color": "#fff1bb"
        }
      }), t._v(" "), e("stop", {
        attrs: {
          offset: "61%",
          "stop-color": "#ffffff"
        }
      }), t._v(" "), e("stop", {
        attrs: {
          offset: "71%",
          "stop-color": "#b49314"
        }
      }), t._v(" "), e("stop", {
        attrs: {
          offset: "87%",
          "stop-color": "#ffffff"
        }
      }), t._v(" "), e("stop", {
        attrs: {
          offset: "100%",
          "stop-color": "#ffffff"
        }
      })], 1), t._v(" "), e("filter", {
        attrs: {
          id: "glow1",
          x: "-30%",
          y: "-30%",
          width: "160%",
          height: "160%"
        }
      }, [e("feGaussianBlur", {
        attrs: {
          stdDeviation: "15 15",
          result: "glow"
        }
      }), t._v(" "), e("feMerge", [e("feMergeNode", {attrs: {in: "glow"}}), t._v(" "), e("feMergeNode", {attrs: {in: "glow"}}), t._v(" "), e("feMergeNode", {attrs: {in: "glow"}})], 1)], 1)], 1), t._v(" "), e("text", {
        attrs: {
          fill: "#002347",
          filter: "url(#glow1)",
          "font-size": "96",
          "font-family": "Dalek",
          "text-anchor": "middle",
          x: "40",
          y: "130"
        }
      }, [t._v("×")]), t._v(" "), e("text", {
        staticClass: "PSDN-kofId",
        attrs: {
          fill: "#002347",
          filter: "url(#glow1)",
          "font-family": "Pythia",
          "text-anchor": "start",
          x: "70",
          "font-size": "96",
          y: "130"
        }
      }, [t._v("\n                                " + t._s(t.result_coef) + "\n                            ")]), t._v(" "), e("text", {
        attrs: {
          fill: "url(#linear1)",
          stroke: "url(#linear2)",
          "stroke-width": "3px",
          "font-size": "96",
          "font-family": "Dalek",
          "text-anchor": "middle",
          x: "40",
          y: "130"
        }
      }, [t._v("×")]), t._v(" "), e("text", {
        staticClass: "PSDN-kofId",
        attrs: {
          fill: "url(#linear1)",
          stroke: "url(#linear2)",
          "stroke-width": "3px",
          "font-family": "Pythia",
          "text-anchor": "start",
          x: "70",
          "font-size": "96",
          y: "130"
        }
      }, [t._v("\n                                " + t._s(t.result_coef) + "\n                            ")])])])], 2), t._v(" "), e("div", {staticClass: "PSDN-chest-lockCon"}, [e("div", {
        staticClass: "PSDN-chest-lock",
        class: {fadeIn_lock: t.insert_key},
        style: t.lock_style
      }), t._v(" "), e("div", {staticClass: "PSDN-chest-keyCon"}, [t.show_key_in_lock ? e("div", {
          staticClass: "PSDN-chest-key",
          class: {insert_key: t.insert_key, rotate_key: t.rotate_key}
        }, [e("div", {attrs: {"data-key": t.selected_key || 0}})]) : t._e()])]), t._v(" "), e("transition", {
        attrs: {
          name: "xgames_fade",
          mode: "out-in"
        }
      }, [t.open_light ? e("div", {staticClass: "PSDN-chest-light"}) : t._e()])], 1)])]), t._v(" "), t._l(4, (function (t) {
        return e("div", {class: "PSDN-fish-6-" + t}, [e("div")])
      })), t._v(" "), e("div", {staticClass: "PSDN-bubbleOne-con"}, t._l(t.bubbles, (function (s) {
        return e("div", {staticClass: "PSDN-bubbleOne", class: {"PSDN-bubbleOne_dop": t.bubbles_dop_class}, style: s})
      })), 0), t._v(" "), e("transition", {
        attrs: {
          name: "xgames_fade",
          mode: "out-in"
        }
      }, [t.fade_girl ? t._e() : e("div", {staticClass: "PSDN-girl"})]), t._v(" "), t._l(5, (function (t) {
        return e("div", {class: "PSDN-fish-" + t}, [e("div")])
      })), t._v(" "), e("div", {
        staticClass: "PSDN-board-1",
        class: {hide_board_1: t.fade_girl}
      }, [e("div", {attrs: {"data-txt": "1"}}, [e("span", [t._v(t._s(t.$T("xgames_input_select_or_enter_bet")))])])]), t._v(" "), e("div", {
        staticClass: "PSDN-board-2",
        class: {show_board_2: t.show_board && !t.selected_key}
      }, [e("div", {attrs: {"data-txt": "1"}}, [e("span", [t._v(t._s(t.$T("xgames_piratechest_help_0")))])])]), t._v(" "), e("div", {staticClass: "PSDN-logo v2"}), t._v(" "), e("div", {
        staticClass: "PSDN-rules-but",
        on: {
          click: function (s) {
            return s.preventDefault(), t.showGameRulesPopup(s)
          }
        }
      }, [e("span", [t._v(t._s(t.$T("xgames_rules")))])]), t._v(" "), e("div", {
        staticClass: "PSDN-panel-nav",
        class: {hide_bet_panel: t.hide_bets}
      }, [e("div", {staticClass: "contrls_elem_wrap"}, [e("select-account"), t._v(" "), e("bets-buttons"), t._v(" "), e("div", {
        staticClass: "PSDN-makeBut",
        class: {disabled: t.game_started || !t.get_curr_bet},
        on: {click: t.startGame}
      }, [e("span", [t._v(t._s(t.$T("xgames_place_bet")))])])], 1)]), t._v(" "), e("div", {
        staticClass: "PSDN-keys-div",
        class: {show_keys: t.anim_key_in, enablePoint: t.enable_click_keys}
      }, [e("div", {staticClass: "PSDN-keys-con"}, t._l(9, (function (s) {
        return e("div", {
          staticClass: "PSDN-keys-round", class: {active: !t.visisbleKey(s)}, on: {
            click: function (e) {
              return t.choseKey(s)
            }
          }
        }, [e("transition", {
          attrs: {
            name: "xgames_fade",
            mode: "out-in"
          }
        }, [t.visisbleKey(s) ? e("div", {staticClass: "PSDN-key", class: "key" + s}) : t._e()])], 1)
      })), 0), t._v(" "), t.bonus_free_bet_is_active ? t._e() : e("div", {staticClass: "PSDN-keys-summ"}, [t._v("\n            " + t._s(t.$T("xgames_calculated_sumbet")) + " "), e("span", {staticClass: "summ"}, [t._v(t._s(t.$_calculated_sum_bet_with_currecy))])])])], 2)
    }), [], !1, null, null, null);
    s.default = n.exports
  }
}]);