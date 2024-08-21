const open__addittionall__form  = document.querySelector('.cart__change-address');
const change__height__box       = document.querySelector('.cart-totals__box');
const form                      = document.querySelector('.cart-totals__additionall');


open__addittionall__form.addEventListener('click' , () => {
    form.style = "display: flex";
    change__height__box.style = "max-height: 950px; padding-bottom: 50px;";
});

