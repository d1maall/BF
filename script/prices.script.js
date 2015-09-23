/**
 * Created by dmitry on 10.09.15.
 */
$(document).ready(function(){
    //$('#tabs').tab();
    $(".ad--t > .ad__content > .ad__content__text > b").click(function() {
        $('html, body').animate({
            scrollTop: $("#scroll-anchor").offset().top
        }, 1000);
    });
});
