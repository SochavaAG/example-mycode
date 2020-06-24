var html = document.querySelector("html");
var canvas = document.getElementById("js-scrolling-change-images__canvas");
var context = canvas.getContext("2d");

var frameCount = 255;

var currentFrame = function (index) {
  return "https://rawcdn.githack.com/SochavaAG/example-mycode/master/pens/scrolling-change-images/images/dd" + index.toString() + ".jpg";
}

var preloadImages = function () {
  for (var i = 1; i < frameCount; i++) {
    var img = new Image();
    img.src = currentFrame(i);
  }
};

var img = new Image();

img.src = currentFrame(1);
canvas.width=2500;
canvas.height=1440;

img.onload = function(){
  context.drawImage(img, 0, 0);
}

var updateImage = function (index) {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
}

window.addEventListener("scroll", function() {
  var scrollTop = html.scrollTop;
  var maxScrollTop = html.scrollHeight - window.innerHeight;
  var scrollFraction = scrollTop / maxScrollTop;
  var frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );

  requestAnimationFrame(function() {
    if(frameCount !== frameIndex + 1) {
      updateImage(frameIndex + 1);
    }
  })
});

preloadImages();