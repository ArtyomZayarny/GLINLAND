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
    $('.additional_slider').flickity({
        // options
        //fullscreen: true,
       // cellAlign: 'left',
        freeScroll: true,
        wrapAround: true,
        contain: true
    });
    $('.prods_slider').flickity({
        // options
        //fullscreen: true,
       // cellAlign: 'left',
        freeScroll: true,
        wrapAround: true,
        contain: true
    });
    $('.studio_slider').flickity({
        freeScroll: true,
        wrapAround: true,
        contain: true
    });
    $('.events_slider').flickity({
      // watchCSS: true,
        freeScroll: true,
        wrapAround: true,
        contain: true
    });
    $('.latest-news__slider').flickity({
      // watchCSS: true,
        freeScroll: true,
        wrapAround: true,
        contain: true
    });
    $('.announced-slider').flickity({
      // watchCSS: true,
        freeScroll: true,
        wrapAround: true,
        contain: true
    });


    $( "#datepicker" ).datepicker({
        showOn: "button",
        buttonImage: "img/photo2.jpg",
        buttonImageOnly: true,
        buttonText: "Select date"
    });

    /******************** GOOGLE MAP ********************/


});
