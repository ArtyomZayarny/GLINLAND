$(document).ready(function(){

    $('.events_slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });

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
});