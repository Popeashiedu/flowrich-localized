$(function () {
    AOS.init({ offset: 300, duration: 1000, easing: "ease-out-quad", once: 0 });
    window.addEventListener('load', AOS.refresh);
});
var overlay = document.getElementById("overlay");

window.addEventListener('load', function () {
    overlay.style.display = 'none';
})

$(document).on("click", ".navbar-collapse", function (e) {
    if ($(e.target).is("a")) {
        $(this).collapse("hide");
    }
});