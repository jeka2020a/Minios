let img1 = document.querySelector(".banner__box");
let img2 = document.querySelector(".banner__box2");
let img3 = document.querySelector(".banner__box3");
let img4 = document.querySelector(".banner__box4");

img1.addEventListener("mouseover", function(){
    this.style.width = "900px";

    img2.style.width = "200px";
    img3.style.width = "200px";
    img4.style.width = "200px";
});


img2.addEventListener("mouseover", function(){
    this.style.width = "900px";

    img1.style.width = "200px";
    img3.style.width = "200px";
    img4.style.width = "200px";
});

img3.addEventListener("mouseover", function(){
    this.style.width = "900px";

    img1.style.width = "200px";
    img2.style.width = "200px";
    img4.style.width = "200px";
});


img4.addEventListener("mouseover", function(){
    this.style.width = "900px";

    img1.style.width = "200px";
    img2.style.width = "200px";
    img3.style.width = "200px";
});