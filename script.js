document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

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
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
        } else {
            navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.8)';
        }
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Newsletter Form Submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically handle newsletter subscription
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        });
    }

    // Add animation to menu items on scroll
    const menuItems = document.querySelectorAll('.menu-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    menuItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.5s ease-out';
        observer.observe(item);
    });
});
