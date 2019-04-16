window.onscroll = function() {myFunction()};

var navbar = document.getElementById("header-nav");
var logo = document.getElementById("logo")
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        logo.classList.add('stuck');
    } else {
        navbar.classList.remove("sticky");
        logo.classList.remove('stuck');
    }
}
$(document).ready(function(){

    $('.events_slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });
    $('.studio_slider').slick({
        dots:true,
        centerMode: true,
        slidesToShow: 3,
        arrows: true,
        variableWidth: true,

    });
    //additional_slider
    // $('.additional_slider').slick({
    //     centerMode:true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     dots: true,
    //     infinite: true,
    //     cssEase: 'linear',
    //     variableWidth: true,
    //     variableHeight: true
    // });
});
