function _classCallCheck(e, i) {
  if (!(e instanceof i))throw new TypeError("Cannot call a class as a function")
}
function _defineProperties(e, i) {
  for (var t = 0; t < i.length; t++) {
    var n = i[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
  }
}
function _createClass(e, i, t) {
  return i && _defineProperties(e.prototype, i), t && _defineProperties(e, t), e
}
var canvas = document.getElementById("canvas"), ctx = canvas.getContext("2d"), cw = canvas.width = window.innerWidth, ch = canvas.height = window.innerHeight, rand = function (e, i) {
  return e + Math.random() * (i - e)
}, SpeedLine = function () {
  function t(e, i) {
    _classCallCheck(this, t), this.x = e, this.y = i, this.speed = rand(4, 4), this.life = this.curLife = rand(0, 900), this.alpha = rand(.25, 1), this.angle = Math.PI * rand(0, 2), this.size = rand(50, 90), this.inRadius = rand(300, 400), this.outRadius = cw, window.innerWidth < 700 && (this.inRadius = rand(50, 200), this.size = rand(20, 20), this.speed = rand(5, 5))
  }

  return _createClass(t, [{
    key: "update", value: function () {
      this.curLife -= this.speed, this.inRadius += 4 * this.speed, this.alpha *= this.curLife / this.life, this.size *= this.curLife / this.life, this.draw()
    }
  }, {
    key: "draw", value: function () {
      var e = this.x, i = this.y, t = this.size, n = this.angle, a = this.alpha, s = this.inRadius, r = this.outRadius;
      ctx.save(), ctx.translate(e, i), ctx.rotate(n), ctx.beginPath(), ctx.moveTo(0, s), ctx.lineTo(t, r), ctx.lineTo(-t, r), ctx.closePath(), ctx.fillStyle = "rgba(22, 0, 168, ".concat(a, ")"), ctx.fill(), ctx.restore()
    }
  }]), t
}(), lines = [], MAX_LINES = 300;
function updateLines() {
  lines.forEach(function (e, i) {
    (!e || e.curLife < 0) && (lines[i] = new SpeedLine(cw / 2, ch / 2)), lines[i].update()
  })
}
for (var i = 0; i < MAX_LINES; i++)lines[i] = new SpeedLine(cw / 2, ch / 2);
function animate() {
  requestAnimationFrame(animate), ctx.clearRect(0, 0, cw, ch), updateLines()
}
animate(), window.addEventListener("resize", function () {
  cw = canvas.width = window.innerWidth, ch = canvas.height = window.innerHeight, updateLines()
});