$(document).ready(function(){
    $('.grid__box').slick({
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
});

