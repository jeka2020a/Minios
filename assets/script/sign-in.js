document.addEventListener('DOMContentLoaded', () => { 

    const open__sign_in = document.querySelector('.header__user-img');
    const close = document.querySelector('.sign-in__close');
    const sign_in = document.querySelector('.sign-in__shadow');

  
    open__sign_in.addEventListener('click' , () => {
        sign_in.style = "display:block";
    })


    close.addEventListener('click' , () => {
        sign_in.style = "display:none";
    })
/*
    main__tab.addEventListener('click' , () => {
        main__title.style = "display: none;";
        document.querySelector(".main__li").classList.remove(".main__li::after");
        //main__tab.classList.remove(".main__li::after");
    })
*/

})