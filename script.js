// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
});

// Initialize Particles.js
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles.js loaded');
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', 
        document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light'
    );
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    this.reset();
});
