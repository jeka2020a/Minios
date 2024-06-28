$(document).ready(function(){
  $('.category__slider-block').slick({
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
      ]
  });
});