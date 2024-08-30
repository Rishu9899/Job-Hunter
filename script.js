// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Navbar Functionality
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Offset for sticky navbar
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hero Section Animation for text appearance
    const heroTextSpans = document.querySelectorAll('.hero h2 span');
    heroTextSpans.forEach((span, index) => {
        setTimeout(() => {
            span.classList.add('show'); // Adds animation class for reveal effect
        }, 100 * index); // Delays each letter's appearance
    });

    // Feature Cards Hover Effect
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('hovered'); // Adds a class on hover for animation
        });
        item.addEventListener('mouseleave', () => {
            item.classList.remove('hovered');
        });
    });

    // Testimonial Stars Rating Animation
    const stars = document.querySelectorAll('.testimonial .stars');
    stars.forEach(star => {
        for (let i = 0; i < 5; i++) {
            const starIcon = document.createElement('span');
            starIcon.textContent = '★';
            star.appendChild(starIcon);
        }
    });

    // FAQ Section: Toggle answer visibility and add question functionality
    const faqItems = document.querySelectorAll('#faq .faq-item h3');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentElement;
            parent.classList.toggle('active');

            // Slide down/up the answer
            const answer = parent.querySelector('p');
            if (parent.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = 0;
            }
        });
    });

    // FAQ Form: Handle Form Submission
    const faqForm = document.querySelector('#faq form');
    faqForm.addEventListener('submit', event => {
        event.preventDefault();
        const questionInput = faqForm.querySelector('input');
        const question = questionInput.value.trim();

        if (question) {
            alert('Thank you for your question! We will get back to you soon.');
            questionInput.value = ''; // Clear the input field
        } else {
            alert('Please enter a question before submitting.');
        }
    });

    // CTA Button: Smooth Scroll to Features Section
    const ctaButton = document.querySelector('#cta .btn');
    ctaButton.addEventListener('click', (event) => {
        event.preventDefault();
        const targetSection = document.getElementById('features');
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });

    // Contact Form Submission with Validation
    const contactForm = document.querySelector('#contact form');
    contactForm.addEventListener('submit', event => {
        event.preventDefault();
        const name = contactForm.querySelector('input[name="name"]').value.trim();
        const email = contactForm.querySelector('input[name="email"]').value.trim();
        const message = contactForm.querySelector('textarea[name="message"]').value.trim();

        if (name && email && message) {
            alert('Thank you for contacting us! We will respond shortly.');
            contactForm.reset(); // Clear the form fields
        } else {
            alert('Please fill in all fields before submitting.');
        }
    });

    // Social Media Links Click Interaction
    const socialLinks = document.querySelectorAll('footer .social a');
    socialLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            alert(`Redirecting to ${link.textContent}...`);
            window.open(link.href, '_blank'); // Open the link in a new tab
        });
    });

    // Scroll to Top Button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.textContent = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
// Modal toggle functionality
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const loginLink = document.getElementById('loginLink'); // Assuming there's a link with id loginLink
const signupLink = document.getElementById('signupLink'); // Assuming there's a link with id signupLink
const closeLogin = document.getElementById('closeLogin');
const closeSignup = document.getElementById('closeSignup');
const switchToSignup = document.getElementById('switchToSignup');
const switchToLogin = document.getElementById('switchToLogin');

loginLink.addEventListener('click', () => loginModal.style.display = 'block');
signupLink.addEventListener('click', () => signupModal.style.display = 'block');
closeLogin.addEventListener('click', () => loginModal.style.display = 'none');
closeSignup.addEventListener('click', () => signupModal.style.display = 'none');
switchToSignup.addEventListener('click', () => {
    loginModal.style.display = 'none';
    signupModal.style.display = 'block';
});
switchToLogin.addEventListener('click', () => {
    signupModal.style.display = 'none';
    loginModal.style.display = 'block';
});

// Password show/hide toggle
document.querySelectorAll('.toggle-password').forEach(toggle => {
    toggle.addEventListener('click', () => {
        const input = toggle.previousElementSibling;
        if (input.type === 'password') {
            input.type = 'text';
            toggle.textContent = '🙈';
        } else {
            input.type = 'password';
            toggle.textContent = '👁️';
        }
    });
});

// Real-time validation
document.querySelectorAll('#loginForm, #signupForm').forEach(form => {
    form.addEventListener('input', () => {
        const passwordInput = form.querySelector('input[type="password"]');
        if (passwordInput.value.length < 8) {
            passwordInput.setCustomValidity('Password must be at least 8 characters long.');
        } else {
            passwordInput.setCustomValidity('');
        }
    });
});
