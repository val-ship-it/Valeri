const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dotsContainer = document.querySelector('.dots-container');

let currentIndex = 0;
const slideCount = slides.length;

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateSlider();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlider();
}

function createDots() {
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
        dotsContainer.appendChild(dot);
    });
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentIndex) {
            dot.classList.add('active');
        }
    });
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
createDots();

/*Galeria*/
const miniaturas = document.querySelectorAll('.miniatura');
const visor = document.getElementById('visor');
const imagenGrande = document.getElementById('imagenGrande');
const cerrar = document.getElementById('cerrar');

miniaturas.forEach(img =>{
    img.addEventListener('click',() =>{
        imagenGrande.src = img.src;
        visor.classList.remove('oculto');
    });
});

cerrar.addEventListener('click', () =>{
    visor.classList.add('oculto');
});

visor.addEventListener('click',(e) =>{
    if(e.target === visor) {
        visor.classList.add('oculto');
    }
});

/*Noticias*/
document.addEventListener('DOMContentLoaded', () => {
    const noticias = document.querySelectorAll('.noticia');
    const leerMasBotones = document.querySelectorAll('.noticia a');

    noticias.forEach(noticia => {
        noticia.addEventListener('mouseenter', () => {
        noticia.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.2)';
        noticia.style.transform = 'scale(1.02)';
        noticia.style.transition = 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out';
    
       });
    
    noticia.addEventListener('mouseleave', () => {
    noticia.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    noticia.style.transform = 'scale(1)';
    
       });
    
    });
    
   
    
});