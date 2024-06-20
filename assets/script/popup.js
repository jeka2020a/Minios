document.addEventListener('DOMContentLoaded', () => { 

    const open__popup = document.querySelector('.header__furfur-img');
    const button = document.querySelector('.popup__close');
    const nav = document.querySelector('.popup');
    const shadow = document.querySelector('.shadow');
  
    open__popup.addEventListener('click' , () => {
        nav.style = "top: 0%";
        shadow.style = "height: 100%";
    })

    button.addEventListener('click', () => { 
        nav.style = "top: -100%";
        shadow.style = "height: 0%";
    }) 
})