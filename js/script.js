document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const header = document.querySelector('.main-header');
    const scrollThreshold = 100;
    const scrollTopBtn = document.querySelector('.scroll-top');

    // Function to show a specific tab
    function showTab(tabId) {
        tabContents.forEach(content => {
            content.classList.remove('active');
        });
        tabButtons.forEach(button => {
            button.classList.remove('active');
        });

        const targetTab = document.getElementById(tabId);
        if (targetTab) {
            targetTab.classList.add('active');
            document.querySelector(`.tab-button[data-tab="${tabId}"]`).classList.add('active');
            
            // Scroll to the top of the tab
            window.scrollTo({
                top: targetTab.offsetTop - 120,
                behavior: 'smooth'
            });
        }
    }

    // Event listeners for tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.dataset.tab;
            showTab(tabId);
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Show/hide scroll to top button
        if (window.scrollY > 500) {
            scrollTopBtn.classList.remove('hidden');
        } else {
            scrollTopBtn.classList.add('hidden');
        }
    });

    // Scroll to top functionality
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Show the 'About Us' tab by default
    showTab('about-us');
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 120,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission handling
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your submission! We will get back to you soon.');
            form.reset();
        });
    });
    
    // Remove no-js class if JavaScript is enabled
    document.documentElement.classList.remove('no-js');
});