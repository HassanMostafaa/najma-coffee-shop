/**
 * forms.js
 * Handles all form-related functionality
 */

export const initForms = () => {
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            try {
                // Here you would typically send the data to your backend
                // await fetch('/api/contact', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json',
                //     },
                //     body: JSON.stringify(data),
                // });

                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('Sorry, there was an error submitting your message. Please try again later.');
            }
        });
    }

    // Newsletter Form Submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(newsletterForm);
            const data = Object.fromEntries(formData.entries());

            try {
                // Here you would typically send the data to your backend
                // await fetch('/api/newsletter', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json',
                //     },
                //     body: JSON.stringify(data),
                // });

                alert('Thank you for subscribing to our newsletter!');
                newsletterForm.reset();
            } catch (error) {
                console.error('Error submitting newsletter:', error);
                alert('Sorry, there was an error subscribing. Please try again later.');
            }
        });
    }
};
