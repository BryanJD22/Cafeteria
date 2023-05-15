const menuburger = document.getElementById("menuburger");
const header = document.getElementById("header");

menuburger.addEventListener("click", () => {
    header.classList.toggle("header--open");
});


/*Galeria*/
var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
} 

function closeFullImg(){
    fullImgBox.style.display = "none";

}