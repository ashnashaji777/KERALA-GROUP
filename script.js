document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});


//vedio
let currentSlideIndex = 0;
let slides = document.querySelectorAll('.slide');
let totalSlides = slides.length;

// Function to show the slide
function showSlide(index) {
    // Reset all slides to hidden
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
    });

    // Show the current slide
    slides[index].classList.add('active');
}

// Function to change slides automatically
function changeSlide() {
    currentSlideIndex += 1;
    if (currentSlideIndex >= totalSlides) {
        currentSlideIndex = 0; // Reset to the first slide after the last slide
    }
    showSlide(currentSlideIndex);
}

// Initialize the first slide
showSlide(currentSlideIndex);

// Change slide every 8 seconds
setInterval(changeSlide, 5000); // 8000ms = 8 seconds
