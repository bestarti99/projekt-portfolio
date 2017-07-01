'use strict'
$(document).ready(function() {
    scrolluj();
})

// wyciągnięcie scrolla by działało również przy przewiniętej stronie
$(window).scroll(function() {
    scrolluj();
})

var navHeight = $('#menu').height();
var currentPosition = $(window).scrollTop();

function scrolluj() {
    if($(window).scrollTop() > navHeight) {
        $('#menu').addClass('klasa');
    } else {
        $('#menu').removeClass('klasa');
    }

}