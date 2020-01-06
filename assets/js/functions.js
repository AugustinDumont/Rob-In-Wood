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
    $(".owl-carousel").owlCarousel();
    $("#fullpage").fullpage({
      anchors: ["home", "introduction", "store", "gallery", "contact"],
      navigation: true,
      onLeave: function (origin, destination, direction) {
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

  // HEADER

  function headerAnimation() {
    var mouse = $(".header .mouse");

    $(mouse).click(function () {
      $.fn.fullpage.moveSectionDown();
    });
  }

  // INTRODUCTION 

  var pictureWrapper = document.querySelector(".picture");
  var links = document.querySelector(".links");
  let contentPicture = document.querySelectorAll(".content-picture");
  var contentPictureMenuiserie = document.querySelector(".content-picture-menuiserie");
  var contentPictureCharpente = document.querySelector(".content-picture-charpente");
  var contentPictureTreehouse = document.querySelector(".content-picture-treehouse");
  var contentPictureElagage = document.querySelector(".content-picture-elagage");

  document.getElementById("link-wrapper-menuiserie").addEventListener("mouseover", () => {
    pictureWrapper.style.backgroundImage = 'url("assets/images/galerie/introduction/introduction-menuiserie.jpg")';
    contentPictureMenuiserie.classList.remove("d-none");
    contentPictureCharpente.classList.add("d-none");
    contentPictureTreehouse.classList.add("d-none");
    contentPictureElagage.classList.add("d-none");
  });
  document.getElementById("link-wrapper-charpente").addEventListener("mouseover", () => {
    pictureWrapper.style.backgroundImage = 'url("assets/images/galerie/introduction/introduction-charpente.jpg")';
    contentPictureCharpente.classList.remove("d-none");
    contentPictureMenuiserie.classList.add("d-none");
    contentPictureTreehouse.classList.add("d-none");
    contentPictureElagage.classList.add("d-none");
  });
  document.getElementById("link-wrapper-treehouse").addEventListener("mouseover", () => {
    pictureWrapper.style.backgroundImage = 'url("assets/images/galerie/introduction/introduction-treehouse.jpg")';
    contentPictureTreehouse.classList.remove("d-none");
    contentPictureMenuiserie.classList.add("d-none");
    contentPictureCharpente.classList.add("d-none");
    contentPictureElagage.classList.add("d-none");
  });
  document.getElementById("link-wrapper-elagage").addEventListener("mouseover", () => {
    pictureWrapper.style.backgroundImage = 'url("assets/images/galerie/introduction/introduction-elagage.jpg")';
    contentPictureElagage.classList.remove("d-none");
    contentPictureMenuiserie.classList.add("d-none");
    contentPictureCharpente.classList.add("d-none");
    contentPictureTreehouse.classList.add("d-none");
  });

  document.querySelector("body").addEventListener("click", e => {
    if (links.contains(e.target)) {
      contentPicture.forEach(element => {
        element.style.transform = "scaleY(1)";
      });
    } else {
      contentPicture.forEach(element => {
        element.style.transform = "scaleY(0)";
      });
    }
  });


  // OWL CAROUSEL 

  $(".owl-carousel").owlCarousel({
    items: 1,
    center: true,
    // autoplay: true,
    autoplayTimeout: 10000,
    loop: true,
    lazyLoad: true,
    margin: 15,
    nav: true,
    // navText: 
  });
})();