// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Car Slider Functionality
const sliderContainer = document.querySelector('.slider-container');
if (sliderContainer) {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.slider-dot');
    
    let currentIndex = 0;
    const slideWidth = slides[0].clientWidth;
    const totalSlides = slides.length;
    
    function goToSlide(index) {
        if (index < 0) {
            index = totalSlides - 1;
        } else if (index >= totalSlides) {
            index = 0;
        }
        
        sliderContainer.style.transform = `translateX(-${index * slideWidth}px)`;
        currentIndex = index;
        
        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }
    
    prevBtn.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
    });
    
    nextBtn.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
    });
    
    // Auto slide
    setInterval(() => {
        goToSlide(currentIndex + 1);
    }, 5000);
    
    // Dot navigation
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            goToSlide(i);
        });
    });
}

// Timeline animation on scroll
const timelineItems = document.querySelectorAll('.timeline-item');

function animateOnScroll() {
    timelineItems.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.8;
        
        if (itemTop < triggerPoint) {
            setTimeout(() => {
                item.style.opacity = 1;
            }, index * 200);
        }
    });
}

// Initial check
animateOnScroll();

// Check on scroll
window.addEventListener('scroll', animateOnScroll);

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.padding = '10px 5%';
        header.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        header.style.padding = '15px 5%';
        header.style.background = 'rgba(30, 30, 30, 0.95)';
    }
});

// 3D Car Model Interaction
const carModelContainer = document.querySelector('.car-model-container');
if (carModelContainer) {
    const carModel = document.querySelector('.car-model');
    
    carModelContainer.addEventListener('mousemove', (e) => {
        const rect = carModelContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateY = (x - centerX) / 20;
        const rotateX = (centerY - y) / 20;
        
        carModel.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    });
    
    carModelContainer.addEventListener('mouseleave', () => {
        carModel.style.transform = 'rotateY(0) rotateX(0)';
    });
}

// Model Filter
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        // Filter functionality
    });
});

// Event Tabs
const tabBtns = document.querySelectorAll('.tab-btn');
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        // Filter functionality
    });
});

// Contact Form Submission
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will contact you soon.');
        contactForm.reset();
    });
}

// Current year for copyright
document.querySelector('.copyright p').innerHTML = 
    document.querySelector('.copyright p').innerHTML.replace('2023', new Date().getFullYear());
