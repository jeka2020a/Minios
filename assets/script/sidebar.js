
document.addEventListener('DOMContentLoaded', () => { 

    const open__sidebar = document.querySelector('.header__burger');
    const close = document.querySelector('.header__sidebar-close');
    const sidebar = document.querySelector('.header__sidebar');
    const login = document.querySelector('.header__sidebar-login');
    const main__tab = document.querySelector('.main__li');
    const main__list = document.querySelector('.main__list');
    const main__title = document.querySelector('.main__li-a');

  
    open__sidebar.addEventListener('click' , () => {
        sidebar.style = "width: 100%;";
        close.style = "display: block";
        login.style = "display: flex";
    })


    close.addEventListener('click' , () => {
        sidebar.style = "width: 0%;";
        close.style = "display: none";
        login.style = "display: none";
    })
/*
    main__tab.addEventListener('click' , () => {
        main__title.style = "display: none;";
        document.querySelector(".main__li").classList.remove(".main__li::after");
        //main__tab.classList.remove(".main__li::after");
    })
*/

})