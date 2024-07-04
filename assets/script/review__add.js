document.addEventListener('DOMContentLoaded', () => { 

    const add__sidebar__review = document.querySelector('.description__add-review');
    const close__sidebar__review = document.querySelector('.description__button-second');
    const review__shadow = document.querySelector('.review__shadow');
    const review__close = document.querySelector('.review__close');
    const review = document.querySelector('.review');

    add__sidebar__review.addEventListener('click' , () => {
        review__shadow.style = "width: 100%";
        review.style = "right: 0px";
    });

    review__close.addEventListener('click' , () => {
        review__shadow.style = "width: 0%";
        review.style = "right: -50%";
    });
})