(() => {
  var header = $("header");
  var nav = $("nav");

  // PARALLAX

  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  const nbPercents = 20;
  const intervalY = Math.round(windowHeight / nbPercents);
  const intervalX = Math.round(windowWidth / nbPercents);


  $(document).mousemove(function (e) {
    mousePosX = e.pageX;
    mousePosY = e.pageY;
    var percentY = 50;
    var percentX = 40;
    var i;

    for (i = 0; i < nbPercents; i++) {
      if (mousePosY + 1 > i * intervalY && mousePosY < (i + 1) * intervalY) {
        percentY = percentY + i;
        $(header).css("background-position-y", percentY + "%");
      }
      if (mousePosX + 1 > i * intervalX && mousePosX < (i + 1) * intervalX) {
        percentX = percentX + i;
        $(header).css("background-position-x", percentX + "%");
      }
    }
  });


  // ON READY OWL-CAROUSEL + FULLPAGE

  $(document).ready(function () {
    $(".shop-owl-carousel").owlCarousel();
    $(".owl-carousel").owlCarousel();
    headerAnimation();
  });

  // HEADER

  function headerAnimation() {
    var mouse = $(".header .mouse");

    $(mouse).click(function () {
      $.fn.fullpage.moveSectionDown();
    });
  }


  // OWL CAROUSEL
  $(".shop-owl-carousel").owlCarousel({
    items: 1,
    // autoplay: true,
    lazyLoad: true,
    nav: false,
    navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"]
  });


  $(".owl-carousel").owlCarousel({
    items: 4,
    // autoplay: true,
    loop: true,
    lazyLoad: true,
    margin: 15,
    nav: false,
    // navText: 
  });

  document.getElementById("click-to-rotate").addEventListener("click", () => {
    document.getElementById("logo-rotate").classList.toggle("rotate");
  })

  document.getElementById("tel-icon").addEventListener("click", () => {
    document.getElementById("tel-num").classList.toggle("d-none");
  })

})();