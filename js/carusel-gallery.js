$(document).ready(function() {
    $('.slider').slick({
        arrows:true,
        dots:false,
        adaptiveHeight:true,
        slidesToShow:4,
        speed:500,
        easing:'ease',
        autoplay:true,
        draggable:false,
        swipe:false,
        waitForAnimate:false,
        variableWidth:true,
    });
});

