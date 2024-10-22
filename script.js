let slideIndex = 0;

function mostrarSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        slideIndex = 0;
    }
    if (index < 0) {
        slideIndex = slides.length - 1;
    }
    
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === slideIndex) {
            slide.classList.add('active');
        }
    });

    // Move the slides container to show the current slide
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function mudarSlide(n) {
    slideIndex += n;
    mostrarSlide(slideIndex);
}

// Inicializa o carrossel
mostrarSlide(slideIndex);

// Muda automaticamente a imagem a cada 5 segundos
setInterval(() => {
    slideIndex++;
    mostrarSlide(slideIndex);
}, 5000)