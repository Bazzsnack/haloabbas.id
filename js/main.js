// js/main.js

document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    
    initLanguageToggle();
    initPortfolioFilter();
    initGalleryModal();
});

// Scroll Animations using IntersectionObserver
function initScrollAnimations() {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const elements = document.querySelectorAll('.animate-on-scroll, .animate-pop');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: stop observing once visible
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => observer.observe(el));
}

);
    });

    closeBtn.addEventListener('click', closeModal);
    nextBtn.addEventListener('click', showNext);
    prevBtn.addEventListener('click', showPrev);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (modal.classList.contains('opacity-0')) return;
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowRight') showNext();
        if (e.key === 'ArrowLeft') showPrev();
    });

    // Optional Swipe functionality for touch devices
    let touchstartX = 0;
    let touchendX = 0;
    
    modal.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
    }, {passive: true});
    
    modal.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        handleSwipe();
    }, {passive: true});
    
    function handleSwipe() {
        if (touchendX < touchstartX - 50) showNext();
        if (touchendX > touchstartX + 50) showPrev();
    }
}








// Page Transitions
function initPageTransitions() {
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (!link) return;
        
        const href = link.getAttribute('href');
        
        // Ignore links that shouldn't trigger full page transition
        if (!href || href.startsWith('#') || href.startsWith('mailto:') || link.target === '_blank') return;
        
        // Allow anchor links on other pages to work normally (e.g., index.html#contact)
        if (href.includes('#')) return;
        
        // Only trigger for relative .html links
        if (href.endsWith('.html')) {
            e.preventDefault();
            document.body.classList.add('page-transition-exit');
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        }
    });
}
document.addEventListener('DOMContentLoaded', initPageTransitions);


// Handle active states for nav links and language toggle
function updateActiveStates() {
    // Language Toggle State
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        if (currentLang === 'en') {
            langBtn.innerHTML = '<span class="material-symbols-outlined text-sm">language</span> ID / <span class="font-bold text-on-surface border-b border-on-surface pb-0.5">EN</span>';
        } else {
            langBtn.innerHTML = '<span class="material-symbols-outlined text-sm">language</span> <span class="font-bold text-on-surface border-b border-on-surface pb-0.5">ID</span> / EN';
        }
    }

    // Scroll Spy for Contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        const contactLink = document.querySelector('nav a[href="#contact"]');
        const homeLink = document.querySelector('nav a[href="/"]');
        
        if (contactLink && homeLink) {
            window.addEventListener('scroll', () => {
                const rect = contactSection.getBoundingClientRect();
                // If contact section is in viewport (near the bottom)
                if (rect.top <= window.innerHeight * 0.5) {
                    contactLink.classList.add('font-bold', 'border-b', 'border-on-surface', 'pb-0.5');
                    contactLink.classList.remove('text-on-surface-variant');
                    contactLink.classList.add('text-on-surface');
                    
                    homeLink.classList.remove('font-bold', 'border-b', 'border-on-surface', 'pb-0.5');
                    homeLink.classList.remove('text-on-surface');
                    homeLink.classList.add('text-on-surface-variant');
                } else {
                    contactLink.classList.remove('font-bold', 'border-b', 'border-on-surface', 'pb-0.5');
                    contactLink.classList.add('text-on-surface-variant');
                    contactLink.classList.remove('text-on-surface');
                    
                    // Only re-highlight home if we are actually on the home page
                    if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
                        homeLink.classList.add('font-bold', 'border-b', 'border-on-surface', 'pb-0.5');
                        homeLink.classList.remove('text-on-surface-variant');
                        homeLink.classList.add('text-on-surface');
                    }
                }
            });
            // Trigger once on load
            window.dispatchEvent(new Event('scroll'));
        }
    }
}
