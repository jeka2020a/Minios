document.addEventListener('DOMContentLoaded', () => { 

    const add__description = document.querySelector('.description__button-first');
    const add__review = document.querySelector('.description__button-second');
    const div__description = document.querySelector('.description__text');
    const div__review = document.querySelector('.description__reviews');
  
    add__description.addEventListener('click' , () => {
        div__description.style = "display:block";
        div__review.style = "display:none";
        add__description.style = "background-color: #803124;color: #FFF;";
        add__review.style = "color: #000;background-color: #ececec;";
    });
    add__review.addEventListener('click' , () => {
        div__description.style = "display:none";
        div__review.style = "display:block";
        add__description.style = "color: #000;background-color: #ececec;";
        add__review.style = "background-color: #803124;color: #FFF;";
    });
})