/**
 * Main JavaScript file for the professional services website
 * Handles navigation, interactions, and dynamic content
 */

// When DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initMenuToggle();
    initScrollToSection();
    initNavbarScroll();
    calculateElapsedTime();
});

/**
 * Mobile menu toggle functionality
 */
function initMenuToggle() {
    const menuButton = document.getElementById('menu-button');
    const menu = document.getElementById('menu');
    
    if (menuButton && menu) {
        menuButton.addEventListener('click', function() {
            this.classList.toggle('active');
            menu.classList.toggle('active');
        });
    }
}

/**
 * Smooth scroll to section functionality
 * @param {string} id - The ID of the section to scroll to
 */
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (!element) return;
    
    const headerHeight = document.querySelector('.container-menu').offsetHeight;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
    
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
    
    // Close mobile menu after clicking
    const menuButton = document.getElementById('menu-button');
    const menu = document.getElementById('menu');
    
    if (menuButton && menu) {
        menuButton.classList.remove('active');
        menu.classList.remove('active');
    }
}

/**
 * Navbar change on scroll functionality
 */
function initNavbarScroll() {
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.container-menu');
        if (!navbar) return;
        
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/**
 * Calculate elapsed time for skills and age
 */
function calculateElapsedTime() {
    const timeElements = document.querySelectorAll('.tempo-habilidades');
    
    timeElements.forEach(function(element) {
        const startDate = new Date(element.getAttribute('data-start-date'));
        const currentDate = new Date();
        const years = currentDate.getFullYear() - startDate.getFullYear();
        
        // Adjust if birthday hasn't occurred yet this year
        if (
            currentDate.getMonth() < startDate.getMonth() || 
            (currentDate.getMonth() === startDate.getMonth() && 
             currentDate.getDate() < startDate.getDate())
        ) {
            element.textContent = (years - 1) + ' anos';
        } else {
            element.textContent = years + ' anos';
        }
    });
}

// Make scrollToSection globally available
window.scrollToSection = scrollToSection;