$(document).ready(function () {
    $(window).scroll(function (event) {
        if ($(window).scrollTop() > 0) {
            $(".start-screen__bouncing-arrow").fadeOut();
            console.log("scrolled");
        }
        if ($(window).scrollTop() == 0) {
            $(".start-screen__bouncing-arrow").fadeIn();
            console.log("scrolled to top");
        }
    });
});