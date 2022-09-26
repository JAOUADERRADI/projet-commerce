let img = document.querySelector('.img')

function phones(phone){
    img.src = phone;
}

$(document).ready(function(){

    //  Top Sale - OWL Carousel
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive:{
            0: {
                items:1
            },
            600: {
                items:3
            },
            1000:{
                items:5
            },
        }
    })

    //  IsoTope Filter
    var $grid = $(".grid").isotope({
        itemSelector : '.grid-item',
        layoutMode : 'fitRows'
    });

    //  Filter items on button click 
    $('.button-group').on("click", "button", function(){
        var value = $(this).attr("data-name");
        $grid.isotope({
            filter: value
        });
    })

    // $grid.isotope({
    //     filter: '.iphone'
    // });

});
