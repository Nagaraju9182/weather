let thumbnails = document.getElementsByClassName("thumbnail");
let slider = document.getElementById("slider");
let buttonRight = document.getElementById("slide-right");
let buttonleft = document.getElementById("slide-left");

buttonLeft.addEventListener("click", () => {
    slider.scrollLeft -= 125;
});
buttonRight.addEventListener("click", () => {
    slider.scrollLeft += 125;
});

const maxScrollLeft =slider.scrollWidth - slider.clientWidth;


function autoplay(){
    if(slider.scrollLeft > (maxScrollLeft - 1)){
        slider.scrollLeft -= 125;
    }else{
        slider.scrollLeft += 1;
}
}

let play = setInterval(autoplay, 50);

for (let i =0; i<thumnails.length; i++){
    thumnails[i].addEventListener("mouseover", () => {
        clearInterval(play)
    })
    thumnails[i].addEventListener("mouseout", () => {
        return play = setInterval(autoplay,50);
    })
}
