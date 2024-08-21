
document.addEventListener('DOMContentLoaded', () => { 

    const open__cart = document.querySelector('.header__shop-img');

    const close__cart = document.querySelector('.cart-sidebar__close');
    const close1 = document.querySelector('.cart-sidebar__close1');
    const close2 = document.querySelector('.cart-sidebar__close2');
    const sidebar__cart = document.querySelector('.cart-sidebar');
    const shadow = document.querySelector('.review__shadow');
    
    open__cart.addEventListener('click' , () => {
        sidebar__cart.style = "right: 0px;";
        shadow.style = "width: 100%;";
    })


    close__cart.addEventListener('click' , () => {
        sidebar__cart.style = "right: -400px;";
        shadow.style = "width: 0%;";
    })
})