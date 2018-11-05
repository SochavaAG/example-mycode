var _get = function get(object, property, receiver) {if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {var parent = Object.getPrototypeOf(object);if (parent === null) {return undefined;} else {return get(parent, property, receiver);}} else if ("value" in desc) {return desc.value;} else {var getter = desc.get;if (getter === undefined) {return undefined;}return getter.call(receiver);}};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} /**
 * SpaceX launch like Theme
 * -isn't launch a project just like space exploration?
 *
 * Responsive - Test on most modern devices
 * CSS3 Animations – Animate.css
 * Variation base on background configs
 * Well Document codes
 *
 * use jQuery, jQuery Countdown,
 * random.js, lightslider.js, wave.js
 *
 * awesome galaxy effects by EduardoLopes
 * https://codepen.io/EduardoLopes/pen/rVjZwP
 *
 */

var themeConfigs = {
    launchTime: '2019/03/24',
    bodyRipple: true,
    enableMusic: true,
    musicURL: 'https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/space-launch-page/audio/riders-on-the-storm.mp3?dl=1',
    musicAutoPlay: true };


var spaceTheme = function spaceTheme() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _loader = $('.loader');
  var _cdTimer = $('#cdTime');
  var _pgHome = $('#home'),
    _pgAbout = $('#about'),
    _pgSubscribe = $('#subscribe'),
    _pgContact = $('#contact');
  var _nav = $('#navProgress');
  var _subscribeInput = $('#subscribeInput');
  var _music = document.getElementById("music");
  var _slider = void 0,_bgUniverse = void 0;
  var _musicInterval = void 0,_musicPlaying = void 0;
  var _btnPlay = $('#btnPlay');

  function initHash() {
    var dist = location.hash.slice(1);
    switch (dist) {
      case 'home':
        _slider.goToSlide(0);
        break;
      case 'about':
        _slider.goToSlide(1);
        break;
      case 'subscribe':
        _slider.goToSlide(2);
        break;
      case 'contact':
        _slider.goToSlide(3);
        break;}

  }

  function resizeContainers() {
    var mainH = $('.main').height();
    if (mainH > window.innerHeight - 100) mainH = window.innerHeight - 100;

    _pgHome.height(mainH);
    _pgAbout.height(mainH);
    _pgSubscribe.height(mainH);
    _pgContact.height(mainH);
  }

  function _init(options) {

    //setup bg
    _bgUniverse = new APP();

    //set the timer
    _cdTimer.countdown(options.launchTime, function (event) {
      var totalHours = event.offset.totalDays * 24 + event.offset.hours;
      $(this).html(event.strftime(totalHours + ':%M:%S'));
    });

    //resize all contgainers
    resizeContainers();

    //attach resize event
    window.addEventListener('resize', function () {

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      center.x = canvas.width / 2;
      center.y = canvas.height / 2;

      resizeContainers();
    });

    //setups pages
    _slider = $("#lightSlider").lightSlider({
      mode: "slide",
      useCSS: true,
      controls: false,
      pager: false,
      enableDrag: false,
      enableTouch: false,
      item: 1,
      speed: 1500,
      onBeforeSlide: function onBeforeSlide(el) {
        var index = el.getCurrentSlideCount();
        $('#navProgress li').removeClass();
        $('#navProgress li').each(function (_index) {
          var i = _index + 1;
          var el = $('#navProgress li:nth-child(' + i + ')');
          if (i == index) {
            el.addClass('active');
          } else if (i < index) {
            el.addClass('done');
          }
        });

        //change bg
        _bgUniverse.ongoing = true;
        //animations handle
        if (index != 1) {
          $('.countdown').addClass('animated slideOutRight');
        } else {
          $('.countdown').removeClass('slideOutRight').addClass('animated slideInRight');
        }
      } });


    //setup page links
    $('#navProgress li').each(function (_index) {
      var i = _index + 1;
      var el = $('#navProgress li:nth-child(' + i + ')');
      el.click(function (e) {
        _slider.goToSlide(_index);
      });
    });

    //sets hash
    initHash();
    $(window).on('hashchange', function () {
      initHash();
    });

    //setup subscribe form
    Waves.attach('.btnSub', 'waves-light');
    //ripples
    if (options.bodyRipple) Waves.attach('.main');

    Waves.init();

    //music
    if (options.enableMusic && options.musicURL) {
      var mp3source = document.getElementById('mp3Source');
      mp3source.src = options.musicURL;
      music.load();

      if (options.musicAutoPlay) {
        //autoplay
        music.addEventListener('canplaythrough', function () {
          _musicPlaying = true;
          _musicInterval = setInterval(function () {
            Waves.ripple('.playing');
          }, 1300);
          $('#btnPlay > i').removeClass('fa-stop').addClass('fa-play');
          music.play();
        }, false);
      }
      //setup button handle
      _btnPlay.click(function (e) {
        if (_musicPlaying) {
          _musicPlaying = false;
          clearInterval(_musicInterval);
          music.pause();
          $('#btnPlay > i').removeClass('fa-play').addClass('fa-stop');
        } else {
          _musicPlaying = true;
          _musicInterval = setInterval(function () {
            Waves.ripple('.playing');
          }, 1300);
          $('#btnPlay > i').removeClass('fa-stop').addClass('fa-play');
          music.play();
        }
      });
    } else {
      //hide controls
      $('.player').hide();
    }

    //release loader wait 1.5s for better loading effects
    setTimeout(function (e) {return _loader.hide();}, 1500);
  };

  /*
   $(document).ready(e=>{

   });
   */
  $(window).on("load", function () {
    _init(options);
  });

};

spaceTheme(themeConfigs);

//infinite galaxy by
//https://codepen.io/EduardoLopes/pen/rVjZwP

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var PI_TWO = Math.PI * 2;
var TO_DEG = 180 / Math.PI;
var TO_RAD = Math.PI / 180;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var r = new Random(Random.engines.mt19937().autoSeed());

//change to white
function HSL() {var h = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 80;var l = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 95;
  return 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
}var

  Vector2 =

    function Vector2() {var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;_classCallCheck(this, Vector2);
      this.x = x;
      this.y = y;
    };var



  Rectangle = function (_Vector) {_inherits(Rectangle, _Vector);
    function Rectangle(x, y) {_classCallCheck(this, Rectangle);var _this = _possibleConstructorReturn(this, (Rectangle.__proto__ || Object.getPrototypeOf(Rectangle)).call(this,

      x, y));

      _this.width = canvas.width;
      _this.height = canvas.height;

      _this.center = new Vector2(_this.x + _this.width / 2, _this.y + _this.height / 2);return _this;
    }return Rectangle;}(Vector2);


var center = new Vector2(canvas.width / 2, canvas.height / 2);
var camera = new Vector2(0, 0);
var mouse = new Vector2(0, 0);var

  Dot = function () {
    function Dot(options) {_classCallCheck(this, Dot);

      this.reset(options);
      this.index = options.index;

    }_createClass(Dot, [{ key: 'reset', value: function reset(

      options) {

      this.position = new Vector2(options.x, options.y);
      this.color = options.color;
      this.radius = options.radius;
      this.angle = options.angle;

    } }, { key: 'getScreenPositionX', value: function getScreenPositionX()

    {
      return this.position.x - camera.x;
    } }, { key: 'getScreenPositionY', value: function getScreenPositionY()

    {
      return this.position.y - camera.y;
    } }, { key: 'update', value: function update()

    {} }, { key: 'draw', value: function draw()

    {
      ctx.fillStyle = HSL(this.color);
      ctx.beginPath();
      ctx.arc(this.getScreenPositionX(), this.getScreenPositionY(), this.radius, PI_TWO, false);
      ctx.closePath();
      ctx.fill();
    } }]);return Dot;}();var


  Planet = function (_Dot) {_inherits(Planet, _Dot);
    function Planet(options) {_classCallCheck(this, Planet);var _this2 = _possibleConstructorReturn(this, (Planet.__proto__ || Object.getPrototypeOf(Planet)).call(this,
      options));
      _this2.system = options.system;
      _this2.maxRadius = options.maxRadius;
      _this2.rotatingSpeed = options.rotatingSpeed;
      _this2.radius += 0.01;return _this2;
    }_createClass(Planet, [{ key: 'update', value: function update()

    {
      if (this.system.dying == false || this.radius > 0.2) {
        this.angle += this.rotatingSpeed;
        this.position.x = this.system.position.x + Math.cos(this.angle) * this.system.radius;
        this.position.y = this.system.position.y + Math.sin(this.angle) * this.system.radius;
        if (this.system.dying == false) {
          this.radius += (this.maxRadius - this.radius) * 0.01;
        } else {
          this.radius += (0 - this.radius) * 0.01;
        }
      }
    } }, { key: 'draw', value: function draw()

    {
      if (this.system.dying == false || this.radius > 0.2) {
        _get(Planet.prototype.__proto__ || Object.getPrototypeOf(Planet.prototype), 'draw', this).call(this);
      }
    } }]);return Planet;}(Dot);var


  PlanetSystem = function () {
    function PlanetSystem(options) {_classCallCheck(this, PlanetSystem);
      this.planets = [];
      this.position = new Vector2(options.x, options.y);
      this.maxRadius = options.radius;
      this.radius = 0;
      this.dying = false;

      for (var i = 0; i < options.planetCount; i++) {

        var angle = i / options.planetCount * PI_TWO;

        var x = this.position.x + Math.cos(angle) * this.radius;
        var y = this.position.y + Math.sin(angle) * this.radius;

        this.planets[i] = new Planet({
          x: x,
          y: y,
          radius: 0,
          maxRadius: options.planetsSize,
          color: options.color,
          angle: angle,
          index: i,
          system: this,
          rotatingSpeed: options.rotatingSpeed });

      };
    }_createClass(PlanetSystem, [{ key: 'update', value: function update()

    {

      for (var i = 0; i < this.planets.length; i++) {
        this.planets[i].update();
      };

      if (this.dying == false) {
        this.radius += (this.maxRadius - this.radius) * 0.05;
      }
    } }, { key: 'die', value: function die()

    {
      this.dying = true;
      this.radius += (0 - this.radius) * 0.05;
    } }, { key: 'draw', value: function draw()

    {
      for (var i = 0; i < this.planets.length; i++) {
        this.planets[i].draw();
      };
      //this.center.draw();
    } }]);return PlanetSystem;}();var



  Star = function () {
    function Star(options) {_classCallCheck(this, Star);
      this.reset();
    }_createClass(Star, [{ key: 'getScreenPositionX', value: function getScreenPositionX()

    {
      return (this.x - camera.x) * this.scrollFactor;
    } }, { key: 'getScreenPositionY', value: function getScreenPositionY()

    {
      return (this.y - camera.y) * this.scrollFactor;
    } }, { key: 'reset', value: function reset()

    {
      this.scrollFactor = r.real(0.2, 1);

      this.x = r.integer(camera.x * this.scrollFactor, (camera.x + canvas.width) * this.scrollFactor);
      this.y = r.integer(camera.y * this.scrollFactor, (camera.y + canvas.height) * this.scrollFactor);

      this.radius = 0;
      this.color = r.integer(0, 360);
    } }, { key: 'update', value: function update()

    {
      if (this.getScreenPositionX() > canvas.width || this.getScreenPositionY() > canvas.height || this.getScreenPositionX() < 0 || this.getScreenPositionY() < 0) this.reset();
      this.radius += (r.real(0.01, 3) - this.radius) * 0.1;
    } }, { key: 'draw', value: function draw()

    {
      ctx.fillStyle = HSL(0, 90, 90);
      ctx.fillRect(this.getScreenPositionX(), this.getScreenPositionY(), this.radius, this.radius);
      ctx.fill();
    } }]);return Star;}();var


  Galaxy = function () {
    function Galaxy(x, y) {var quant = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;var getElapsed = arguments[3];_classCallCheck(this, Galaxy);
      this.systems = [];
      this.bounds = new Rectangle(x, y);
      this.getElapsed = getElapsed;
      this.life = 0;

      for (var i = 0; i < quant; i++) {
        this.systems[i] = new PlanetSystem({
          //x: r.integer(this.bounds.x, this.bounds.x + this.bounds.width) ,
          //y: r.integer(this.bounds.y, this.bounds.y + this.bounds.height),
          x: this.bounds.center.x,
          y: this.bounds.center.y,
          radius: r.integer(0, 360),
          rotatingSpeed: r.bool() ? r.real(-0.002, -0.01) : r.real(0.001, 0.02),
          planetCount: r.integer(2, 20),
          color: r.integer(0, 360),
          planetsSize: r.integer(1, 3) });

      };
    }_createClass(Galaxy, [{ key: 'update', value: function update()

    {
      for (var i = 0; i < this.systems.length; i++) {
        this.systems[i].update();
      };
      this.life += this.getElapsed();
    } }, { key: 'die', value: function die()

    {
      for (var i = 0; i < this.systems.length; i++) {
        this.systems[i].die();
      };
    } }, { key: 'draw', value: function draw()

    {
      for (var i = 0; i < this.systems.length; i++) {
        this.systems[i].draw();
      };
    } }]);return Galaxy;}();


function generateGalaraxy(getElapsed) {
  return new Galaxy(r.integer(0, 2500), r.integer(0, 2500), r.integer(10, 40), getElapsed);
}var

  APP = function () {
    function APP() {_classCallCheck(this, APP);
      this.currentGalaxy = 0;
      this.stars = [];
      this.ongoing = false;
      this.getElapsed = this.getElapsed.bind(this);

      for (var i = 0; i < 100; i++) {
        this.stars[i] = new Star({
          angle: 0,
          index: i });

      };

      this.currentGalaxy = new Galaxy(0, 0, r.integer(10, 40), this.getElapsed);
      this.lastGalaxy = generateGalaraxy(this.getElapsed);

      this.elapsed = 0;
      this.lastTick = Date.now();

      requestAnimationFrame(this.step.bind(this));
    }_createClass(APP, [{ key: 'getElapsed', value: function getElapsed()

    {
      return this.elapsed;
    } }, { key: 'update', value: function update()

    {

      this.currentGalaxy.update();
      this.lastGalaxy.update();
      this.lastGalaxy.die();

      camera.x += (this.currentGalaxy.bounds.center.x - (camera.x + center.x)) * 0.05;
      camera.y += (this.currentGalaxy.bounds.center.y - (camera.y + center.y)) * 0.05;
      if (this.currentGalaxy.life > 6) {
        this.ongoing = false;
        this.radius += (this.maxRadius - this.radius) * 0.05;
        this.lastGalaxy = this.currentGalaxy;
        this.currentGalaxy = generateGalaraxy(this.getElapsed);
      }

      for (var i = 0; i < this.stars.length; i++) {
        this.stars[i].update();
      };
    } }, { key: 'draw', value: function draw()

    {

      this.currentGalaxy.draw();
      this.lastGalaxy.draw();

      for (var i = 0; i < this.stars.length; i++) {
        this.stars[i].draw();
      };
    } }, { key: 'step', value: function step()

    {
      requestAnimationFrame(this.step.bind(this));

      var delta = Date.now() - this.lastTick;
      this.lastTick = Date.now();

      var dt = delta / 1000;

      if (this.ongoing) {
        this.elapsed = 6;
      } else {
        this.elapsed = 0;
      }

      ctx.fillStyle = 'rgba(0,0,0,1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      this.update();
      this.draw();
    } }]);return APP;}();