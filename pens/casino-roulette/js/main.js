function logo() {
  if (0 < $("#baraban_container").length) {
    var k = $("#baraban_container div").length;
    setInterval(function () {
      $("#baraban_container div").addClass("animate");
      $("#logo_bottom div").css("display", "none");
      $("#baraban_container div span").animate({top: "39px", display: "none"}, 400, function () {
        $(this).css("top", "-39px")
      });
      setTimeout(function () {
        var m = 0, r = setInterval(function () {
          $("#baraban_" + m + " span").animate({top: "0px", display: "block"}, 150);
          $("#baraban_" + m).removeClass("animate");
          m == k && (setTimeout(function () {
            $("#logo_bottom div").css("display",

              "block")
          }, 175), clearInterval(r));
          m++
        }, 150)
      }, 1700)
    }, 5E3)
  }
}

logo();
