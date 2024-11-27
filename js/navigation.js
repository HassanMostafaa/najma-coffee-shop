// Navigation functionality
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navContainer = document.querySelector('.nav-container');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        navContainer.classList.toggle('active');
        mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
        mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navContainer.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
