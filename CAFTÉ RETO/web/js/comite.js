document.querySelectorAll('.video').forEach(vid => {
    vid.onclick= () =>{
        document.querySelector('.popup-video').style.display = 'block'
        document.querySelector('.popup-video').src = vid.getAttribute('src')
    }
});

document.querySelector('.popup-video span').onclick = () =>{
    document.querySelector('.popup-video').style.display = 'none'
}