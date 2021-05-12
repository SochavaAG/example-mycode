$(document).ready(function() {

  var colors = [
    ['rgba(101,219,255,1)', 'rgba(101,219,255,.5)', 'rgba(101,219,255,0)'],
    ['hsla(25, 70%, 50%, 1)', 'hsla(35, 70%, 50%, 0.5)', 'hsla(35, 70%, 50%, 0)']
  ];

  $('.js-cup-fire').each(function(i,item) {
    var sprite = document.createElement('canvas');
    var spriteCtx = sprite.getContext('2d');

    sprite.width = 100;
    sprite.height = 100;

    var gradient = spriteCtx.createRadialGradient(
      sprite.width / 2,
      sprite.height / 2,
      0,
      sprite.width / 2,
      sprite.height / 2,
      50
    );

    gradient.addColorStop(0, colors[i][0]);
    gradient.addColorStop(0.3, colors[i][1]);
    gradient.addColorStop(1, colors[i][2]);

    spriteCtx.fillStyle = gradient;
    spriteCtx.beginPath();
    spriteCtx.arc(sprite.width / 2, sprite.height / 2, 50, 0, Math.PI * 2);
    spriteCtx.fill();

    var c = this;
    var ctx = c.getContext('2d');
    var W = c.width;
    var H = c.height;
    var CX = W / 2;
    var CY = H;
    var mouse = {
      x: CX,
      y: CY,
      tx: CX,
      ty: CY
    };

    var particles = [];
    var particleCount = 200;
    var particle = null;

    setInterval(loop,60);

    function loop() {

      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = 'lighter';

      if(particles.length < particleCount) {

        particle = new Particle(
          mouse.x,
          mouse.y,
          Math.random() - 0.5,
          Math.random() * -10,
          Math.random() * 1.5,
          sprite
        );

        particles.push(particle);
      }

      for(var i = 0; i < particleCount-1; i++) {
        particle = particles[i];
        if(particle) {
          particle.update();
          particle.render(ctx);
        }
      }

    }

    function Particle(x, y, vx, vy, size, img) {
      this.x = x;
      this.y = y;
      this.vx = vx;
      this.vy = vy;
      this.size = size;
      this.img = img;
      this.alpha = Math.random();
    };

    Particle.prototype = {
      constructor: Particle,
      update: function() {

        this.x += this.vx;
        this.y += this.vy;
        this.size *= 1;
        this.alpha *= 0.85;

        if(this.x < 0 || this.x > W || this.y < 0 || this.y > H || this.size < 0.001 || this.alpha < 0.1) {
          this.x = mouse.tx;
          this.y = mouse.ty;
          this.vx = Math.random() - 0.5;
          this.vy = Math.random() * -10;
          this.size = Math.random() * .5;
          this.alpha = Math.random();
        }
      },
      render: function(ctx) {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.translate(this.x, this.y);
        ctx.scale(this.size, this.size);
        ctx.drawImage(this.img, -this.img.width / 2, -this.img.height / 2);
        ctx.restore();
      }
    };
  });

});
