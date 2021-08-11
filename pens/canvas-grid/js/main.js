//CANVAS
var isCan = false;

function _instanceof(left, right) {
  if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
    return right[Symbol.hasInstance](left);
  } else {
    return left instanceof right;
  }
}

function _classCallCheck(instance, Constructor) {
  if (!_instanceof(instance, Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

if (!('ontouchstart' in window)) {
  document.addEventListener('DOMContentLoaded', init, false);
}

var APP;

function init() {
  APP = new App();
  events();
  loop();
}

function loop() {
  APP.render();
  requestAnimationFrame(loop);
}

function events() {
  document.addEventListener('mousemove', APP.mousemoveHandler, false);
  document.addEventListener('mouseleave', APP.mouseleaveHandler, false);
  window.addEventListener('resize', APP.resize, false);
}

function removeEvents() {
  document.removeEventListener('mousemove', APP.mousemoveHandler, false);
  document.removeEventListener('mouseleave', APP.mouseleaveHandler, false);
  window.removeEventListener('resize', APP.resize, false);
}

var App =
  /*#__PURE__*/
  function () {
    function App() {
      _classCallCheck(this, App);

      this.canvas = document.getElementById('playground');
      this.context = this.canvas.getContext('2d');
      this.canvas.width = this.width = window.innerWidth;
      this.canvas.height = this.height = window.innerHeight;
      this.setupDots();
      this.resize = this.resize.bind(this);
      this.mousemoveHandler = this.mousemoveHandler.bind(this);
      this.mouseleaveHandler = this.mouseleaveHandler.bind(this);
    }

    _createClass(App, [{
      key: "setupDots",
      value: function setupDots() {
        this.dots = [];
        this.scl = 60;
        this.cols = this.width / this.scl;
        this.rows = this.height / this.scl;
        var id = 0;

        for (var x = 0; x < this.cols; x += 1) {
          for (var y = 0; y < this.rows; y += 1) {
            this.dots.push(new Dot(id, x * this.scl, y * this.scl, this.context, this.scl));
            id += 1;
          }
        }
      }
    }, {
      key: "resize",
      value: function resize() {
        this.canvas.width = this.width = window.innerWidth;
        this.canvas.height = this.height = window.innerHeight;
        this.setupDots();
      }
    }, {
      key: "mousemoveHandler",
      value: function mousemoveHandler(event) {
        this.dots.forEach(function (d) {
          d.mousemove(event);
        });
      }
    }, {
      key: "mouseleaveHandler",
      value: function mouseleaveHandler() {
        this.dots.forEach(function (d) {
          d.isHover = false;
        });
      }
    }, {
      key: "render",
      value: function render() {
        this.context.clearRect(0, 0, this.width, this.height);
        this.dots.forEach(function (d) {
          d.render();
        });
      }
    }]);

    return App;
  }();

var Dot =
  /*#__PURE__*/
  function () {
    function Dot(id, x, y, context, scl) {
      _classCallCheck(this, Dot);

      this.id = id;
      this.x = x;
      this.y = y;
      this.new = {
        x: x,
        y: y
      };
      this.radius = 2;
      this.context = context;
      this.scl = scl;
      this.isHover = false;
      this.isANimated = false;
    }

    _createClass(Dot, [{
      key: "mousemove",
      value: function mousemove(event) {
        var x = event.clientX;
        var y = event.clientY;
        this.isHover = Math.abs(this.x - x) < this.scl / 4 * 3 && Math.abs(this.y - y) < this.scl / 4 * 3 ? true : false;

        if (this.isHover) {
          TweenMax.to(this.new, 0.4, {
            x: x,
            y: y
          });
        } else {
          TweenMax.to(this.new, 0.4, {
            x: this.x,
            y: this.y
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        this.context.beginPath();
        this.context.arc(this.new.x, this.new.y, this.radius, 0, 2 * Math.PI, false);
        this.context.fillStyle = 'rgba(100, 100, 100, 1)';
        this.context.globalAlpha = this.isHover ? 1 : 0.25;
        this.context.fill();
      }
    }]);

    return Dot;
  }();