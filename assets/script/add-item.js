document.addEventListener('DOMContentLoaded', () => { 

    const add__item = document.querySelector('.category__pulse-1');
    const add__item2 = document.querySelector('.category__pulse-2');
    const item = document.querySelector('.category__item');
    const item2 = document.querySelector('.category__item2');
    const body = document.querySelector('.body');

    item.style = "opacity: 0";
    item2.style = "opacity: 0";

  
    add__item.addEventListener('click' , () => {
        if (item.style.opacity == "0")
        {
            item.style = "opacity: 1; z-index: 1;";
            add__item.style = "transform: rotate(45deg)";

            item2.style = "opacity: 0";
            add__item2.style = "transform: rotate(0deg)";
        }
        else {
            item.style = "opacity: 0";
            add__item.style = "transform: rotate(0deg)";
        }
    });

    add__item2.addEventListener('click' , () => {
        if (item2.style.opacity == "0")
        {
            item2.style = "opacity: 1; z-index: 1;";
            add__item2.style = "transform: rotate(45deg)";

            item.style = "opacity: 0";
            add__item.style = "transform: rotate(0deg)";
        }
        else {
            item2.style = "opacity: 0";
            add__item2.style = "transform: rotate(0deg)";
        }
    });

    
})