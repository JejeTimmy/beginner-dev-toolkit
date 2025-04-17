// Menu Icon and Navbar Toggle
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x'); // Toggles the menu icon
    navbar.classList.toggle('active'); // Toggles the active class for navbar
});

// Scroll Section Active Link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');

    // Sticky Navbar
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove Active Classes on Scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Highlight Active Nav Link While Scrolling
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const scrollY = window.scrollY;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach((link) => link.classList.remove('active'));
            const activeLink = document.querySelector(`header nav a[href*="${section.id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
});

// Scroll Reveal Animations
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

// Reveal Configurations
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .service-container, .portfolio-box, contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

