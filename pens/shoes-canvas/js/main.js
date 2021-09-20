(function ($) {
  $(function () {


(function ($) {
  $(function () {

    window.addEventListener('DOMContentLoaded', function() {
			var canvas = document.querySelector('canvas');
			var parallax = { x: 0, y: 0 };
			var loader = new PIXI.loaders.Loader()
				.add('mask',  'https://raw.githack.com/SochavaAG/example-mycode/master/pens/shoes-canvas/images/shoes-mask.jpg')
				.add('picture1', 'https://raw.githack.com/SochavaAG/example-mycode/master/pens/shoes-canvas/images/shoes.png')
				.load(demo)
				.on('complete', function() {
					document.body.classList.add('shoes-loaded');
				})

			// 1164 x 2000
			function demo(loader, assets) {
				var corr = 2000 / 1164;
				var height = window.innerHeight + 320;
				var width = height / corr;
				var rendererOptions = {
					view: document.querySelector('canvas'),
					antialiasing: false,
					transparent: true,
					// resolution: window.devicePixelRatio,
					autoResize: false
				}

				var renderer = PIXI.autoDetectRenderer(width, height, rendererOptions);

				var stage  = new PIXI.Container();
				var pandaSprite   = new PIXI.Container();
				for ( var i = 1; i <= 1; i++ ) {
					var image     = new PIXI.Sprite( assets['picture' + i].texture );
					// image.anchor.set(0.5);
					// image.position.set(width, height);
					if ( i !== 1  ) {
						TweenMax.set( image, { alpha: 0 } );
					}
					pandaSprite.addChild(image);
				}
				pandaSprite.width = width;
				pandaSprite.height = height;

				var filterMask = new PIXI.Sprite(assets.mask.texture);
				filterMask.width = width;
				filterMask.height = height;
				var filter = new PIXI.filters.DisplacementFilter(filterMask);

				stage.filters = [filter];
				stage.addChild(pandaSprite);
				stage.addChild(filterMask);

				var ease = Power1.easeOut;
				renderer.render(stage);
				var index = nextIndex = 0;

				function onMouseMove(e) {
					parallax.x = e.clientX / window.innerWidth * 2 - 1,
					parallax.y = 2 * -(e.clientY / window.innerHeight) + 1;
					TweenMax.to(filter.scale, 0.5, {
						ease: ease,
						x: parallax.x * -30,
						y: parallax.y * 20,
						onUpdate: function() {
							renderer.render(stage);
						}
					});
				}

				function handleOrientation(e) {
					var x = e.beta / 90;  // In degree in the range [-180,180]
					var y = e.gamma / 90; // In degree in the range [-90,90]

					if ( x > 1 ) { x = 1 }
					if ( x < -1 ) { x = -1 }

					TweenMax.to(filter.scale, 0.5, {
						ease: ease,
						x: y * 95,
						y: x * 95,
						onUpdate: function() {
							renderer.render(stage);
						}
					});
				}

				window.addEventListener('mousemove', onMouseMove);
				window.addEventListener('deviceorientation', handleOrientation);
				// window.addEventListener("resize", resizeHandler);
			}
		});

  });
})(jQuery);


  });
})(jQuery);
