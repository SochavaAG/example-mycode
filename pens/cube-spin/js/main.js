(function ($) {
  $(function () {


    function getClaasesOfGlass(e) {
      var t;
      return t = {}, o()(t, "hod-levels__level--type-".concat(this.$consts.glasses[e]), true), o()(t, "hod-levels__level--disabled", e < this.currentStep), o()(t, "hod-levels__level--current", e === this.currentStep), t;
    }

    function getGlassCoef(e) {
      var t = this.$consts.controlPoints.indexOf(e);
      return -1 !== t ? this.getCoefText(this.game_coefs[t]) : "";
    }

    function checkExtraBlock(e) {
      if (this.blocked_activity)return true;
      var t = this.resultDrop[0] + this.resultDrop[1];
      return t < 7 ? ![1, 4].includes(e) : 7 === t ? ![3, 4].includes(e) : ![2, 3].includes(e);
    }

    function rollThem3D(e, t) {
      this.startLightAnimation();
      this.spinDice3D("#3ddice1", e);
      this.spinDice3D("#3ddice2", t);
    }

    function spinDice3D(e, t) {
      var s = this;
      return _()(a.a.mark((function i() {
        var c, _, d;
        return a.a.wrap((function (i) {
          for (; ;)switch (i.prev = i.next) {
            case 0:
              c = 0, _ = 0, i.t0 = t, i.next = 1 === i.t0 ? 4 : 2 === i.t0 ? 5 : 3 === i.t0 ? 7 : 4 === i.t0 ? 9 : 5 === i.t0 ? 11 : 6 === i.t0 ? 13 : 15;
              break;
            case 4:
              return i.abrupt("break", 15);
            case 5:
              return _ = -90, i.abrupt("break", 15);
            case 7:
              return c = -90, i.abrupt("break", 15);
            case 9:
              return c = 90, i.abrupt("break", 15);
            case 11:
              return _ = 90, i.abrupt("break", 15);
            case 13:
              return _ = 180, i.abrupt("break", 15);
            case 15:
              return s.showResultDice = false, i.next = 18, s.frameUpdate();
            case 18:
              (d = r(e)).css({
                animation: "none",
                transform: "none",
                transition: "transform 0ms"
              }).delay(50).queue((function (e) {
                d.css({
                  transform: "rotateX(" + (720 + c) + "deg) rotateY(" + (720 + _) + "deg) rotateZ(720deg)",
                  transition: "transform 700ms"
                }), e()
              }));
            case 20:
            case"end":
              return i.stop()
          }
        }), i)
      })))()
    }

    function startLightAnimation() {
      var e = this;
      return _()(a.a.mark((function t() {
        return a.a.wrap((function (t) {
          for (; ;)switch (t.prev = t.next) {
            case 0:
              if (!e.animationLight) {
                t.next = 2;
                break;
              }
              return t.abrupt("return");
            case 2:
              return e.animationLight = true, t.next = 5, delayTime(3500);
            case 5:
              e.animationLight = false;
            case 6:
            case"end":
              return t.stop()
          }
        }), t)
      })))()
    }

    function clearAfterGame() {
      this.actionNumber = 0;
      this.currentSumWin = 0;
      this.currentStep = -1;
    }

    function placeBet() {
      this.gameAjax({type_query: "place_bet", sumBet: this.get_curr_bet}, this.parseGame);
    }

    function parseGame(e) {
      var t = arguments, s = this;

      return _()(a.a.mark((function i() {
        var c;
        return a.a.wrap((function (i) {
          for (; ;)switch (i.prev = i.next) {
            case 0:
              if (c = t.length > 1 && void 0 !== t[1] && t[1], s.get_curr_bet || s.insertSingleBet(e.BS), s.actionNumber = e.AN, c) {
                i.next = 9;
                break;
              }
              return s.rollThem3D(e.RS[0], e.RS[1]), i.next = 7, delayTime(700);
            case 7:
              s.resultDrop = e.RS, s.showResultDice = true;
            case 9:
              if (s.currentSumWin = e.SW, 1 !== e.SB) {
                i.next = 14;
                break;
              }
              return s.currentStep = e.RRC - 1, s.setBlockedActivity(), i.abrupt("return");
            case 14:
              if (c) {
                i.next = 17;
                break;
              }
              return i.next = 17, delayTime(1200);
            case 17:
              s.showResultPopup(e.SW), s.goNextGame();
            case 19:
            case"end":
              return i.stop();
          }
        }), i)
      })))()
    }

    function takeWin() {
      var e = this;
      this.blockTakeWin || (this.setBlockedActivity(true), this.gameAjax({
        type_query: "take_win",
        action_number: this.actionNumber
      }, (function (t) {
        return e.parseGame(t, true)
      })))
    }

    function makeChoice(e) {
      this.blocked_activity || this.checkExtraBlock(e) || (this.setBlockedActivity(true), this.gameAjax({
        type_query: "make_action",
        action_number: this.actionNumber,
        user_choice: e
      }, this.parseGame))
    }

    function parsePrevGame(e) {
      e.AI && (this.setBlockGame(true), this.parseGame(e));
    }


  });
})(jQuery);