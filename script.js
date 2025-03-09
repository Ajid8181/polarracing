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
// Live Chat AI Assistant
const chatbot = document.getElementById('chatbot');
const openChat = document.getElementById('open-chat');
const closeChat = document.getElementById('close-chat');

openChat.addEventListener('click', () => {
    chatbot.style.display = 'block';
    openChat.style.display = 'none';
});

closeChat.addEventListener('click', () => {
    chatbot.style.display = 'none';
    openChat.style.display = 'block';
});

// Progress Tracker
const progress = document.querySelector('.progress');
const statusText = document.getElementById('status');

let progressValue = 0;
const interval = setInterval(() => {
    progressValue += 10;
    progress.style.width = `${progressValue}%`;
    if (progressValue >= 100) {
        clearInterval(interval);
        statusText.textContent = 'Completed';
    }
}, 1000);

// Countdown Timer
const countdown = () => {
    const targetDate = new Date('2025-8-31').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    if (difference < 0) {
        clearInterval(countdownInterval);
        document.querySelector('.countdown').innerHTML = '<h3>Offer Expired</h3>';
    }
};

const countdownInterval = setInterval(countdown, 1000);

// Pricing Calculator
const calculatePrice = () => {
    const serviceType = document.getElementById('service-type').value;
    const quantity = document.getElementById('quantity').value;
    let price = 0;

    switch (serviceType) {
        case 'basic':
            price = 20.000;
            break;
        case 'pro':
            price = 80.000;
            break;
        case 'premium':
            price = 200.000;
            break;
    }

    const total = (price * quantity).toFixed(2);
    document.getElementById('total-price').textContent = `Rp${total}`;
};

document.getElementById('calculate-price').addEventListener('click', calculatePrice);
// Form Submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    this.reset();
});
