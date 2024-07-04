
$(document).ready(function(){
    $('.product__main-photo').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.product__itembox'
    });
    $('.product__itembox').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product__main-photo',
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
    });
});