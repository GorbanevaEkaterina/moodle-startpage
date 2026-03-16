// =============================================
// ПГУТИ - Educational Platform JavaScript
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================
    // FAQ Accordion Functionality
    // ============================
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            const accordionCollapse = this.nextElementSibling;
            
            // Close other items (optional)
            accordionButtons.forEach(otherButton => {
                if (otherButton !== this && otherButton.classList.contains('active')) {
                    otherButton.classList.remove('active');
                    otherButton.nextElementSibling.classList.remove('show');
                    otherButton.nextElementSibling.style.maxHeight = null;
                }
            });
            
            // Toggle current item
            this.classList.toggle('active');
            
            if (this.classList.contains('active')) {
                accordionCollapse.classList.add('show');
                accordionCollapse.style.maxHeight = accordionCollapse.scrollHeight + 'px';
            } else {
                accordionCollapse.classList.remove('show');
                accordionCollapse.style.maxHeight = null;
            }
        });
    });
    
    // ============================
    // Smooth Scroll for Anchor Links
    // ============================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ============================
    // Header Scroll Effect
    // ============================
    let lastScroll = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
        
        lastScroll = currentScroll;
    });
    
    // ============================
    // Button Click Feedback
    // ============================
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });
    
    // ============================
    // Keyboard Navigation for FAQ
    // ============================
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            const activeElement = document.activeElement;
            if (activeElement.classList.contains('accordion-button')) {
                e.preventDefault();
                activeElement.click();
            }
        }
    });
    
    // ============================
    // Welcome Console Message
    // ============================
    console.log('%c ⚡ ПГУТИ - Учебная платформа ', 'font-size: 20px; font-weight: bold; color: #2A52BE;');
    console.log('%c Добро пожаловать! Самарский государственный политехнический университет связи ', 'font-size: 14px; color: #666;');
});