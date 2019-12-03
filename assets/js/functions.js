(() => {
  window.onscroll = function() {
    scrollFunctionFooter();
  };

  const footer = document.getElementById("footer");

  function scrollFunctionFooter() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      footer.classList.add("d-none");
    } else {
      footer.classList.remove("d-none");
    }
  }

  document.getElementById("icone-telephone").addEventListener("click", () => {
    document.getElementById("telephone").classList.remove("d-none");
  });
})();
