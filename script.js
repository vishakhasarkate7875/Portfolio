document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.navbar a');

    // ** 1. Mobile Menu Toggle **
    // When the menu icon (hamburger) is clicked, toggle the 'active' class on the navbar.
    menuIcon.onclick = () => {
        navbar.classList.toggle('active');
        // Toggle the icon between bars (menu) and times (close)
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-times');
    };

    // ** 2. Close Menu when a Link is Clicked (for mobile) **
    // When a link in the mobile menu is clicked, close the menu.
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            menuIcon.classList.add('fa-bars');
            menuIcon.classList.remove('fa-times');
        });
    });

    // ** 3. Smooth Scroll Polyfill (Optional, for older browsers) **
    // The CSS 'scroll-behavior: smooth;' handles this for most modern browsers, 
    // but this JS is a backup way to ensure smooth scrolling.
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default anchor click behavior
            e.preventDefault();

            // Get the target section's ID (e.g., #about)
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Smoothly scroll to the target section
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});