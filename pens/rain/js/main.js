var maxParticles = 200, numParticles = 0, particles = [], collisionDamper = .1, canvas = document.querySelector("canvas"), ctx = canvas.getContext("2d");
function particle() {
  var t = this;
  t.id = Date.now(), t.removeParticle = !1, t.setParticle = function () {
    t.position = {
      x: 40 + Math.random() * (canvas.width - 40),
      y: -10 - 50 * Math.random(),
      z: 10 * Math.random()
    }, t.velocity = {
      x: 0,
      y: 0
    }, t.alpha = 1, t.length = 10, t.lineWidth = 1 - t.position.z / 12, t.acceleration = {
      x: 0,
      y: .8 - t.position.z / 10
    }, t.removeParticle && deleteParticle(t.id)
  }, t.setParticle()
}
function newParticle() {
  var t = new particle;
  particles.push(t)
}
function deleteParticle(t) {
  for (var e = 0; e < particles.length; e++)particles[e].id === t && (particles[e].removed = !0, particles.splice(e, 1))
}
function deleteAllParticles() {
  for (var t = 0; t < particles.length; t++)particles.splice(t, 1)
}
function drawParticles() {
  for (var t = 0; t < particles.length; t++) {
    var e = particles[t].position;
    ctx.strokeStyle = "rgba(255,255,255," + particles[t].alpha + ")", ctx.lineWidth = particles[t].lineWidth, ctx.beginPath(), ctx.moveTo(e.x, e.y), ctx.lineTo(e.x, e.y + particles[t].length), ctx.stroke()
  }
}
function updateParticles() {
  for (var t = 0; t < particles.length; t++) {
    if (particles[t].velocity.x += particles[t].acceleration.x, particles[t].velocity.y += particles[t].acceleration.y, particles[t].position.x += particles[t].velocity.x, particles[t].position.y += particles[t].velocity.y, checkFloorCollision(t, particles[t].position.y), particles[t]) {
      particles[t].velocity.y, particles[t].acceleration.y;
      checkFloorCollision(t, particles[t].position.y + particles[t].velocity.y)
    }
    particles[t] && (particles[t].length = 1.8 * particles[t].velocity.y, particles[t].length <= -20 && particles[t].setParticle()), particles[t] && particles[t].removed && particles.splice(t, 1)
  }
}
function checkFloorCollision(t, e) {
  e >= canvas.height - particles[t].position.z * (canvas.height / 15) && (particles[t].velocity.y *= -1, particles[t].velocity.y *= collisionDamper, particles[t].length = 3, particles[t].velocity.y >= -.2 && particles[t].velocity.y <= .2 && particles[t].setParticle())
}
function loop() {
  clear(), update(), draw(), queue()
}
function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}
function filterNonRemovable(t) {
  return !t.removeParticle
}
function removeParticle() {
  var t = particles.filter(filterNonRemovable);
  t[t.length - 1] && (t[t.length - 1].removeParticle = !0)
}
function update() {
  var t = particles.filter(filterNonRemovable);
  t.length < numParticles ? newParticle() : t.length > numParticles && removeParticle(), updateParticles()
}
function draw() {
  drawParticles()
}
function queue() {
  window.requestAnimationFrame(loop)
}
function startRain() {
  var t;
  t = setInterval(function () {
    numParticles < maxParticles ? numParticles++ : (clearInterval(t), setTimeout(function () {
        stopRain()
      }, 8e3))
  }, 20)
}
function stopRain() {
  var t;
  t = setInterval(function () {
    numParticles > 10 ? numParticles-- : (clearInterval(t), setTimeout(function () {
        startRain()
      }, 5e3))
  }, 50)
}
function $$(t, e, i) {
  "function" != typeof e ? e = e || document : (i = e, e = document);
  var a = e.querySelectorAll(t);
  return a = Array.prototype.slice.call(e.querySelectorAll(t)), "function" == typeof i && a.forEach(function (t, e, a) {
    i(t, e, a)
  }), a
}
function addEv(t, e, i) {
  t && ("addEventListener" in window ? t.addEventListener(e, i, !1) : "attachEvent" in window && t.attachEvent("on" + e, i))
}
canvas.width = window.innerWidth, canvas.height = window.innerHeight, window.onload = function () {
  setTimeout(function () {
    loop(), startRain()
  }, 100)
};
