
$(document).ready(function(){$('.popup-with-form').magnificPopup({type:'inline',preloader:false});$('.popup-ajax').magnificPopup({type:'ajax',alignTop:true,overflowY:'scroll'});var initialOpacity=parseFloat($('.background > .background__overlay').css('background-color').split(',')[3],10);$(window).scroll(function(event){if($(window).scrollTop()>0){$(".start-screen__bouncing-arrow").fadeOut();}
if($(window).scrollTop()==0){$(".start-screen__bouncing-arrow").fadeIn();}
if(($(window).scrollTop()>0)){var ratioForBackground=initialOpacity+((1-initialOpacity)*($(window).scrollTop()/(($(".start-screen")).height()+$(".quality").height())));if(ratioForBackground<1){$(".background__overlay").css("background-color","rgba(0,0,0,"+ratioForBackground+")");}
else{$(".background__overlay").css("background-color","rgba(0,0,0,1)");}}
if(($(window).scrollTop()>0)){var ratioForNavbar=4*$(window).scrollTop()/($(window).height());if(ratioForNavbar<1){$(".navbar__menu").css("background-color","rgba(0,0,0,"+ratioForNavbar+")");}
else{$(".navbar__menu").css("background-color","rgba(0,0,0,1)");}}
if($(window).scrollTop()==0){$(".navbar__menu").css("background-color","rgba(0,0,0,0)");$(".background__overlay").css("background-color","rgba(0,0,0,"+initialOpacity+")");}});$("#gallery-scroll-activator").click(function(){$('html, body').animate({scrollTop:$("#gallery-scroll-anchor").offset().top-100},1000);});$("#contact-scroll-activator").click(function(){$('html, body').animate({scrollTop:$("#contact-scroll-anchor").offset().top-100},1000);});$(".button").click(function send(){$.post("./mail.php",{name:$('.name').val(),phone:$('.phone').val(),email:$('.email').val()});alert("Ваша заявка получена. Мы скоро свяжемся с вами.");$('.name').val('');$('.email').val('');$('.phone').val('');$.magnificPopup.close();});var myMap;ymaps.ready(init);function init(){myMap=new ymaps.Map('map',{center:[55.821,37.611],zoom:11,controls:[]});myMap.behaviors.disable('scrollZoom');var zoomControl=new ymaps.control.ZoomControl({options:{size:"small"}});myMap.controls.add(zoomControl);myMap.geoObjects.add(new ymaps.Placemark([55.906,37.576],{balloonContent:'Абрамцевская улица, 30'},{preset:'islands#dotIcon',iconColor:'red'})).add(new ymaps.Placemark([55.814,37.693],{balloonContent:'Краснобогатырская улица, 2'},{preset:'islands#dotIcon',iconColor:'red'})).add(new ymaps.Placemark([55.807,37.649],{balloonContent:'Новоалексеевская улица, 16'},{preset:'islands#dotIcon',iconColor:'red'})).add(new ymaps.Placemark([55.721,37.695],{balloonContent:'Волгоградский проспект, 32'},{preset:'islands#dotIcon',iconColor:'red'}));};});