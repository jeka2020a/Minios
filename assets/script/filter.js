
document.addEventListener('DOMContentLoaded', () => { 

    const open__filter = document.querySelector('.catalog__open-filter');
    const close = document.querySelector('.catalog__filter-close');
    const filter = document.querySelector('.catalog__filter');

  
    open__filter.addEventListener('click' , () => {
        filter.style = "display: block; width: 100%; z-index: 2; top: 0; left: 0;";
        close.style = "display: block";
    })


    close.addEventListener('click' , () => {
        filter.style = "display: none";
        close.style = "display: none";
    })
})