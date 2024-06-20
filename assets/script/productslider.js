/*document.body.onclick = function(event) {
    event = event || window.event;

    if (event.target.classList.contains('car__small-photo'))
    {
        var src = event.target.src;
        document.getElementById('car__max').src = src;
    }
}*/
$(document).ready(function(){
    $('.car__main-photo').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.car__itembox'
    });
    $('.car__itembox').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.car__main-photo',
        arrows: false,
        centerMode: true,
        focusOnSelect: true
    });
});