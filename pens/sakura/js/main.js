(function ($) {
  $(function () {


    onload = function () {
      initSakura()
    };
    var casheWidth = window.innerWidth;
    function initSakura() {
      window.SakuraCanvas = new CanvasController("sakura"), window.fallenSakura = 0, requestAnimationFrame(anim)
    }
    function anim() {
      if (.25 < Math.random() && SakuraCanvas.children.length < window.innerWidth / 150 && addSakura(1, 1, 1, SakuraCanvas.width, 1), 10 < fallenSakura) {
        for (var t = SakuraCanvas.children.length, e = 0; e < t; e++) {
          var a = SakuraCanvas.children[e];
          a.floatSakura && a.floatSakura()
        }
        fallenSakura = 0
      }
      SakuraCanvas.rendering(), requestAnimationFrame(anim)
    }
    function CanvasController(t) {
      t = document.getElementById(t);
      t.width = $(".body-wrap")[0].offsetWidth, t.height = $(".body-wrap")[0].offsetHeight, this.canvas = t, this.canvasCtx = t.getContext("2d"), this.width = t.width, this.height = t.height, this.children = new Array, this.rendering = function () {
        this.clear();
        for (var t = this.children.length - 1; 0 <= t; t--) {
          this.canvasCtx.save();
          var e = this.children[t];
          e.draw(this.canvasCtx) && (e.callback(), this.removeChild(t)), this.canvasCtx.restore()
        }
      }, this.clear = function () {
        this.canvasCtx.clearRect(0, 0, this.width, this.height)
      }, this.addChild = function (t) {
        this.children.push(t)
      }, this.removeChild = function (t) {
        this.children.splice(t, 1)
      }
    }
    function random(t) {
      return Math.floor(Math.random() * t) + 1
    }
    function addSakura(t, e, a, n, i) {
      for (var o = 0; o < t; o++) {
        var r = Math.floor(Math.random() * (n - e)) + e, s = Math.floor(Math.random() * (i - a)) + a;
        SakuraCanvas.addChild(new Sakura(r, s, Math.random() + .5, {
          x: random(360),
          y: random(360),
          z: random(360)
        }, {x: random(10), y: random(10), z: random(10)}, random(5)))
      }
    }
    function Sakura(t, e, a, n, i, o) {
      this.x_pos = t, this.y_pos = e, this.scale = a, this.direction = n, this.rotate = i, this.wind = o, this.gr = 4, this.length = 10, this.phase = 0, this.draw = function (t) {
        t.beginPath(), t.translate(this.x_pos, this.y_pos), t.rotate(this.direction.y / 180 * Math.PI), t.scale(this.scale, this.scale);
        var e = t.createRadialGradient(0, 0, 0, 0, 0, this.length);
        e.addColorStop(0, "rgba(252,246,198,1)"), e.addColorStop(.6, "rgba(245,191,135,1)"), e.addColorStop(1, "rgba(226,203,133,0.4)"), t.fillStyle = e;
        var a = Math.cos(this.direction.x * Math.PI / 180), e = Math.cos(this.direction.z * Math.PI / 180);
        return t.moveTo(-6 * e, -10 * a), t.bezierCurveTo(-10 * e, 0 * a, -5 * e, 10 * a, 0 * e, 10 * a), t.bezierCurveTo(5 * e, 10 * a, 10 * e, 0 * a, 6 * e, -10 * a), t.bezierCurveTo(0 * e, -10 * a, 0 * e, -7 * a, 0 * e, -5 * a), t.bezierCurveTo(0 * e, -7 * a, 0 * e, -10 * a, -6 * e, -10 * a), t.fill(), this.moveSakura()
      }, this.moveSakura = function () {
        return 0 === this.phase ? this.y_pos > +SakuraCanvas.height && (this.gr = 0, this.wind = 0, this.rotate.x = 0, this.rotate.y = 0, this.rotate.z = 0, this.phase = 1, fallenSakura++) : 2 === this.phase && (-3 < this.gr && (this.gr += this.gr / 10), this.gr, this.scale), this.y_pos = this.y_pos + this.gr * this.scale, this.x_pos = this.x_pos + this.wind, this.direction.x += this.rotate.x, this.direction.y += this.rotate.y, this.direction.z += this.rotate.z, this.x_pos > SakuraCanvas.width || this.y_pos > SakuraCanvas.height
      }, this.floatSakura = function () {
        1 === this.phase && (this.gr = -Math.random(), this.wind = random(15) + 5, this.rotate.x = random(10) + 15, this.rotate.y = random(10) + 15, this.rotate.z = random(10) + 15, this.phase = 2)
      }, this.callback = function () {
      }
    }
    window.addEventListener("resize", function () {
      return casheWidth != window.innerWidth && (casheWidth = window.innerWidth, window.SakuraCanvas.canvas.width = $(".body-wrap")[0].offsetWidth, window.SakuraCanvas.canvas.height = $(".body-wrap")[0].offsetHeight, window.SakuraCanvas.width = window.SakuraCanvas.canvas.width, void(window.SakuraCanvas.height = window.SakuraCanvas.canvas.height))
    });


  });
})(jQuery);