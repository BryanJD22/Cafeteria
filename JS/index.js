const menuburger = document.getElementById("menuburger");
const header = document.getElementById("header");

menuburger.addEventListener("click", () => {
    header.classList.toggle("header--open");
});
