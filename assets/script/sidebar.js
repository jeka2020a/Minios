//header__burger

document.addEventListener('DOMContentLoaded', () => { 

    const open__sidebar = document.querySelector('.header__burger');
    const close = document.querySelector('.header__sidebar-close');
    const sidebar = document.querySelector('.header__sidebar');
    const login = document.querySelector('.header__sidebar-login');

  
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
})