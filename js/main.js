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


var root = $('body');
$('a[href^="#"]').click(function(event) {
    event.preventDefault();
    var href = $(this).attr('href');
    
    root.animate({
        scrollTop: $(href).offset().top - 50
    }, 500);
});

/*

function moveTo() {
    
    
    // Scroll to a certain element
    document.querySelector('#about-me').scrollIntoView({ 
    behavior: 'smooth' 
});
}
*/
