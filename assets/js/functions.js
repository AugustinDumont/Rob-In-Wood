(() => {
  var header = $("header");
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  const nbPercents = 20;
  const intervalY = Math.round(windowHeight / nbPercents);
  const intervalX = Math.round(windowWidth / nbPercents);

  // console.log("ww" + windowWidth);
  // console.log("wh" + windowHeight);

  $(document).mousemove(function(e) {
    mousePosX = e.pageX;
    mousePosY = e.pageY;
    var percentY = 20;
    var percentX = 40;
    var i;

    // console.log("y: " + mousePosY);
    // console.log("x: " + mousePosX);

    for (i = 0; i < nbPercents; i++) {
      if (mousePosY + 1 > i * intervalY && mousePosY < (i + 1) * intervalY) {
        percentY = percentY + i;
        // console.log("percent" + percentY);
        $(header).css("background-position-y", percentY + "%");
      }
      if (mousePosX + 1 > i * intervalX && mousePosX < (i + 1) * intervalX) {
        percentX = percentX + i;
        // console.log("percentX" + percentX);
        $(header).css("background-position-x", percentX + "%");
      }
    }
  });

  $(document).on("scroll", function(e) {
    // console.log("test");
    scrollFunctionNav();
  });

  function scrollFunctionNav() {
    var nav = $("nav");
    var scrollTop = $(document).scrollTop();
    console.log(scrollTop);
    if (scrollTop > 100) {
      $(nav).addClass("active");
    } else {
      $(nav).removeClass("active");
    }
  }

  // document.getElementById("icone-telephone").addEventListener("click", () => {
  //   document.getElementById("telephone").classList.remove("d-none");
  // });
})();
