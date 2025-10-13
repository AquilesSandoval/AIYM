// Global Navigation Menu Script
(function() {
    'use strict';
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNavigation);
    } else {
        initNavigation();
    }
    
    function initNavigation() {
        const menuButton = document.getElementById('aiym-menu-button');
        const menuDropdown = document.getElementById('aiym-menu-dropdown');
        
        if (!menuButton || !menuDropdown) {
            console.warn('Navigation menu elements not found');
            return;
        }
        
        // Toggle menu on button click
        menuButton.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMenu();
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!menuButton.contains(e.target) && !menuDropdown.contains(e.target)) {
                closeMenu();
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeMenu();
            }
        });
        
        // Highlight current page
        highlightCurrentPage();
    }
    
    function toggleMenu() {
        const menuButton = document.getElementById('aiym-menu-button');
        const menuDropdown = document.getElementById('aiym-menu-dropdown');
        
        menuButton.classList.toggle('active');
        menuDropdown.classList.toggle('active');
    }
    
    function closeMenu() {
        const menuButton = document.getElementById('aiym-menu-button');
        const menuDropdown = document.getElementById('aiym-menu-dropdown');
        
        menuButton.classList.remove('active');
        menuDropdown.classList.remove('active');
    }
    
    function highlightCurrentPage() {
        const currentPath = window.location.pathname;
        const menuLinks = document.querySelectorAll('.aiym-menu-link');
        
        menuLinks.forEach(function(link) {
            const linkPath = new URL(link.href).pathname;
            if (currentPath.includes(linkPath) || 
                (currentPath === '/' && linkPath.includes('INICIO'))) {
                link.classList.add('active');
            }
        });
    }
})();
