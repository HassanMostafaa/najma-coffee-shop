/**
 * navigation.js
 * Handles all navigation-related functionality
 */

export const initNavigation = () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    // Mobile menu toggle
    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                }
            }
        });
    });

    // Navbar background change on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.style.backgroundColor = window.scrollY > 50 
                ? 'rgba(26, 26, 26, 0.95)' 
                : 'rgba(26, 26, 26, 0.8)';
        }
    });
};
