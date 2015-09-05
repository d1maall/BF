$(document).ready(function () {

    var myMap;
    ymaps.ready(init);
    function init () {
        // Создание экземпляра карты и его привязка к контейнеру с
        // заданным id ("map").
        myMap = new ymaps.Map('map', {
            // При инициализации карты обязательно нужно указать
            // её центр и коэффициент масштабирования.
            center: [55.76, 37.64], // Москва
            zoom: 12,
            controls: []
        });
        myMap.behaviors.disable('scrollZoom');
        var zoomControl = new ymaps.control.ZoomControl({
            options: {
                size: "small"
            }
        });
        myMap.controls.add(zoomControl);

    }

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