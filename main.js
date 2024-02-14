//Menu
const hamburger = document.querySelector('.hamburguer')
const navList = document.querySelector('.nav ul')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active')
})


// Dark - Light Mode

const darkModeButton = document.getElementById('darkModeButton')
const body = document.body

const enableDarkMode = () => {
    body.classList.add('dark-mode')
}

const disableDarkMode = () => {
    body.classList.remove('dark-mode')
}

darkModeButton.addEventListener('change', () => {
    if(darkModeButton.checked){
        disableDarkMode()
    } else {
        enableDarkMode()
    }
})

//Multiple Text

const typed = new Typed('.multiple', {
    strings:['Back-End Developer','Node.js expert'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

})


//Cv

const Cv = document.getElementById('cv')
const pdfPath = "cv/Curriculo_GustavoArimateia.pdf";

Cv.addEventListener('click', () => {
    window.location.href = pdfPath;
})
