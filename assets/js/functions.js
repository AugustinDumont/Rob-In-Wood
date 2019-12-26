(() => {
  var header = $("header");
  var nav = $("nav");
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
    var percentY = 50;
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

  function headerAnimation() {
    var mouse = $(".header .mouse");

    $(mouse).click(function() {
      $.fn.fullpage.moveSectionDown();
    });
  }

  $(document).ready(function() {
    $(".owl-carousel").owlCarousel();
    $("#fullpage").fullpage({
      onLeave: function(origin, destination, direction) {
        console.log("origin: " + origin);
        console.log("destination: " + destination);
        console.log("direction: " + direction);
        if (origin == 1 && destination == 2) {
          $(nav).addClass("active");
        }
        if (destination == 1) {
          $(nav).removeClass("active");
        }
      }
    });
    headerAnimation();
  });

  $(".owl-carousel").owlCarousel({
    items: 3,
    // autoplay: true,
    autoplayTimeout: 10000,
    loop: true,
    lazyLoad: true,
    margin: 15,
    stagePadding: 0
  });
})();
