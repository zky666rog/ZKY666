// Project data
const projects = [
    {
        title: "Finance",
        category: "web-development",
        image: "images/finance.jpg",
        description: "A financial management system"
    },
    {
        title: "Orizon",
        category: "web-development",
        image: "images/orizon.jpg",
        description: "Business analytics dashboard"
    }
];

// Writing content data
const writings = [
    {
        title: "Design Conferences in 2024",
        date: "2024-02-23",
        category: "Design",
        excerpt: "Upcoming design conferences and events"
    }
];

// Responsive navigation menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navigation bar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.main-nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Initialize after DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
    loadWritings();
    initializeAnimations();
});

// Initialize scroll animations
function initializeAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    });

    elements.forEach(element => observer.observe(element));
}

// Portfolio filtering functionality
const filterButtons = document.querySelectorAll('.portfolio-filter .filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to current button
        this.classList.add('active');
        
        const filter = this.getAttribute('data-filter');
        const items = document.querySelectorAll('.portfolio-item');
        
        items.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Form validation functionality
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic form validation
        const name = this.querySelector('#name').value;
        const email = this.querySelector('#email').value;
        const message = this.querySelector('#message').value;
        
        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Form submission handling
        console.log('Form submitted:', { name, email, message });
    });
}

// Navigation scroll behavior
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.main-nav');
    const currentScroll = window.pageYOffset;
    
    // Handle scroll direction
    if (currentScroll > lastScroll) {
        nav.style.transform = 'translateY(-100%)';
    } else {
        nav.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
}); 