var html = document.querySelector('body');
var canvas = document.getElementById("hero-lightpass");
var context = canvas.getContext("2d");

var frameCount = 255;

var currentFrame = function (index) {
    return 'images/dd' + index.toString() + '.jpg';
}

var preloadImages = function () {
    for (let i = 1; i < frameCount; i++) {
      var img = new Image();
      img.src = currentFrame(i);
    }
};

var img = new Image()
img.src = currentFrame(1);
canvas.width=2500;
canvas.height=1440;
img.onload=function(){
  context.drawImage(img, 0, 0);
}

var updateImage = function (index) {    
    img.src = currentFrame(index);  
    context.drawImage(img, 0, 0);
  }

window.addEventListener('scroll', () => {
  var scrollTop = html.scrollTop;
  var maxScrollTop = html.scrollHeight - window.innerHeight;
  var scrollFraction = scrollTop / maxScrollTop;
  var frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );

  requestAnimationFrame(() => {    
      if(frameCount !== frameIndex + 1) {
        updateImage(frameIndex + 1)
      }
  })
});

preloadImages();