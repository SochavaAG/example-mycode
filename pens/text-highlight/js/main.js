(function ($) {
  $(function () {

    body();

    function body() {
      $('body').addClass("pinpoint");};

    setInterval(function(){textshine1()},7000);

    function grid() {
      $('.grid').addClass("Go-3d");
      $('.cityback').addClass("rise");
      $('.cityfront').addClass("appear");
      $('.grid-wrapper').css({'height':'50%'});
      $('.vertical .line').css({
        'background':'-webkit-linear-gradient(top, rgba(255, 255, 255, .0), rgba(87, 193, 232, 1))'
      });
      $('.horizontal .line:nth-child(1)').css({'opacity':'0.05'});
      $('.horizontal .line:nth-child(2)').css({'opacity':'0.1'});
      $('.horizontal .line:nth-child(3)').css({'opacity':'0.15'});
      $('.horizontal .line:nth-child(4)').css({'opacity':'0.2'});
      $('.horizontal .line:nth-child(5)').css({'opacity':'0.25'});
      $('.horizontal .line:nth-child(6)').css({'opacity':'0.3'});
      $('.horizontal .line:nth-child(7)').css({'opacity':'0.35'});
      $('.horizontal .line:nth-child(8)').css({'opacity':'0.4'});
      $('.horizontal .line:nth-child(9)').css({'opacity':'0.45'});
      $('.horizontal .line:nth-child(10)').css({'opacity':'0.5'});
      $('.horizontal .line:nth-child(11)').css({'opacity':'0.55'});
      $('.horizontal .line:nth-child(12)').css({'opacity':'0.6'});
      $('.horizontal .line:nth-child(13)').css({'opacity':'0.65'});
      $('.horizontal .line:nth-child(14)').css({'opacity':'0.7'});
      $('.horizontal .line:nth-child(15)').css({'opacity':'0.75'});
      $('.horizontal .line:nth-child(16)').css({'opacity':'0.8'});
      $('.horizontal .line:nth-child(17)').css({'opacity':'0.85'});
      $('.horizontal .line:nth-child(18)').css({'opacity':'0.9'});
      $('.horizontal .line:nth-child(19)').css({'opacity':'0.95'});
      $('.horizontal .line:nth-child(20)').css({'opacity':'1'});
      $('.dot').css({'-webkit-animation-play-state':'running'});
      $('.right').css({'-webkit-animation-play-state':'running','opacity':'1'});
      $('.left').css({'-webkit-animation-play-state':'running','opacity':'1'});
      setTimeout(drive, 10000);
    };

    function drive() {
      $('.grid').css('opacity','0');
      $(".top-plane").addClass("drive");
    };

    function textshine1()
    {$(".title1").shineText();
      setTimeout(function(){textshine2();},600);
    };

    function textshine2() {$(".title2").shineText();};

    function laurelglimmer()
    {ShineImg (document.getElementById ('shine'));};

    function road() {
      $('.desert .perspective .road').addClass("build");
      $('.desert .perspective .road').css({'-webkit-animation-play-state':'running'});
    };


    (function( $, window, undefined ){
      $.fn.shineText = function( options ) {
        var settings = $.extend({
          speed		    : 150,
          shineClass	  : "shine",
          complete 	  : null
        }, options );
        return this.each( function() {
          var text = $(this).text();
          var doAnimate = function( el ) {
            el.find( 'span' ).each(function() {
              var that = $(this);
              setTimeout(function() {
                that.toggleClass( settings.shineClass );
                that.prev().toggleClass( settings.shineClass );
              }, that.index() * settings.speed );
            });
          }
          if ( ! $(this).hasClass( 'shineApplied' ) ){
            $(this).addClass( 'shineApplied' ).html('');
            for( i=0; i<text.length; i++ ) {
              $(this).append( '<span>'+text[i]+'</span>' );
            }
            $(this).append( '<span></span>' );
          }
          doAnimate( $(this) );

          // ON COMPLETE:
          if ( $.isFunction( settings.complete ) ) {

            settings.complete.call( this );
          }
        });
      }

    })(jQuery, window);

    function ShineImg ( img ) {
      this.imgToCanvas = function ( img ) {
        this.canvas = document.createElement ( 'canvas' );
        this.canvas.width = img.width;
        this.canvas.height = img.height;
        if ( img.className != '' ) { this.canvas.className = img.className; }
        this.context = this.canvas.getContext ( '2d' );
        this.image = img;
        this.context.drawImage( img, 0, 0 );
        img.parentNode.replaceChild ( this.canvas, img );
      }

      this.imgToCanvas ( img );
      this.placeGradient = function ( x, y ) {
        this.context.save ();
        this.gradient = this.context.createLinearGradient ( x, 40 * Math.sin ( 15 * Math.PI / 180 ), x + 40, 40 * Math.sin ( 15 *    Math.PI / 180 ) );
        gradient.addColorStop ( 0, 'rgba(0,224,252,0)' );
        gradient.addColorStop ( 0.5, 'rgba(0,224,252,0.5)' );
        gradient.addColorStop ( 1, 'rgba(0,224,252,0)' );
        this.context.rotate ( 15 * Math.PI / 180 );
        this.context.fillStyle = gradient;
        this.context.globalCompositeOperation = 'source-atop';
        this.context.fillRect ( x, y - x * Math.sin( 15 * Math.PI / 180 ), 40, this.canvas.height /
          Math.cos ( 15 * Math.PI / 180 ) + 40 * Math.sin( 15 * Math.PI / 180 ) );
        this.context.restore ();
      }

      var x = -( this.canvas.width + this.canvas.height * Math.sin ( 15 * Math.PI / 180 ) );
      this.animateGradient = function () {
        this.animation = setInterval ( function () {
          this.context.clearRect( 0, 0, this.canvas.width, this.canvas.height );
          this.context.drawImage( img, 0, 0 );
          this.placeGradient ( x, -40 * Math.sin( 15 * Math.PI / 180 ) );
          x += 4;
          if ( x > this.canvas.width + this.canvas.height * Math.sin( 15 * Math.PI / 180 ) ) {
            x = -( this.canvas.width + this.canvas.height * Math.sin( 15 * Math.PI / 180 ) );
            clearInterval ( this.animation );
          }
        }, 1 );
      }

      this.shine = setInterval ( this.animateGradient,7000 );
      window.addEventListener( 'blur', function () {clearInterval ( this.shine );}, false );
      return this;};

    $('#logo').click(function() {
      $('#banner').toggleClass("down");
      $('#l-logo').toggleClass("expand");
      $('#r-logo').toggleClass("expand");
      $('#circle-large-outer').toggleClass("expand");
      $('#circle-large-inner').toggleClass("expand");
      $('#circle-large-middle').toggleClass("expand");
      $('#ring-s').toggleClass("expand");
      $('#laurel-s').toggleClass("load");
      setTimeout(function(){laurelglimmer();});
      $('#spark-s').toggleClass("load");
    });

    $('#C3D').click(function() {
      $('body').removeClass("pinpoint");
      $('.grid').css({'opacity':'1'});
      setTimeout(grid, 6000);
      setTimeout(update, 20000);
    });

    function pointOnCircle(radius, angleInDegrees, origin) {
      return {
        x: (radius * Math.cos(angleInDegrees * Math.PI / 180)) + origin.x,
        y: (radius * Math.sin(angleInDegrees * Math.PI / 180)) + origin.y
      }
    }

    var elements = [];
    var points = 30, radius = 400;
    for (var i = 0; i < points; i++) {
      var point = pointOnCircle(radius, i*(360/points), {x: radius, y: radius/2});
      var element = document.createElement('div');
      element.className = 'letter';
      element.style.cssText = '-webkit-transform: translate3d(' + point.x + 'px, 0, ' + point.y + 'px) rotateY(' + (90- (i*(360/points))) + 'deg); opacity: ' + ((point.y + (radius/2))/(radius*2)) + '; font-size: ' + (radius/6) + 'px;';
      document.querySelector('.lettercontainer').appendChild(element);
      elements.push(element);
    }

    var text = '                                           A Private Workshop specialising on all makes and models of Vehicles                              '.split('');

    function update() {
      text.shift();

      if (text.length < elements.length) return;

      for (var i = 0; i < elements.length; i++) {elements[elements.length-i-1].innerHTML=text[i];}  setTimeout(update, 200);
    };



  });
})(jQuery);