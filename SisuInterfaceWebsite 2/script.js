/* Smooth scrolling for navigation */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let currentSlide = 0;

    function showSlide(index) {
        /* Hide all slides */
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            slide.style.display = 'none';
        });

        /* Show the selected slide */
        slides[index].classList.add('active');
        slides[index].style.display = 'block';
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length; // Loop back to the first slide
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Loop back to the last slide
        showSlide(currentSlide);
    }

    /* Event listeners for navigation */
    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);

    /* Show the first slide by default */
    showSlide(currentSlide);
});



