window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("logo-top").classList.add("d-none");
        document.getElementById("logo-on-scroll").classList.remove("d-none");
        document.getElementById("header").classList.add("header-on-scroll");
    } else {
        document.getElementById("logo-top").classList.remove("d-none");
        document.getElementById("logo-on-scroll").classList.add("d-none");
        document.getElementById("header").classList.remove("header-on-scroll");
    }
}