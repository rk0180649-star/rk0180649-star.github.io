function toggleMenu(){
    document.getElementById("navbar-mobile").style.left="0px"
}

function closeMenu(){
    document.getElementById("navbar-mobile").style.left="-300px"
}

function ChangeBG(color){
    document.body.style.background = color;
}
let flag = 0;
function controler(x){
    flag = flag + x;
    slideshow(flag);
}
slideshow(flag);

 function slideshow(num){
    let slides = document.getElementsByClassName('slide');
    if(num == slides.length){
        flag = 0;
        num = 0;
    }if(num < 0){
        flag = slides.length-1;
        num = slides.length-1;

    }for(let y of slides){
        y.style.display = 'none';
    }
    slides[num].style.display = "block";
 }