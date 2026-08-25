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



// Language Toggle Logic
let currentLang = localStorage.getItem('site_lang') || 'en';

function initLanguageToggle() {
    const btn = document.getElementById('lang-toggle');
    if (btn) {
        applyTranslations(currentLang);
            updateActiveStates();
        btn.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'id' : 'en';
            localStorage.setItem('site_lang', currentLang);
            applyTranslations(currentLang);
            updateActiveStates();
        });
    } else {
        setTimeout(initLanguageToggle, 100);
    }
}

function applyTranslations(lang) {
    if (!window.translations || !window.translations[lang]) return;
    
    const dictionary = window.translations[lang];
    const elements = document.querySelectorAll('[data-i18n]');
    
    
    const phElements = document.querySelectorAll('[data-i18n-placeholder]');
    phElements.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dictionary[key]) {
            el.placeholder = dictionary[key];
        }
    });

    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dictionary[key]) {
            el.innerHTML = dictionary[key];
        }
    });
}

// Portfolio Filtering
function initPortfolioFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (filterBtns.length === 0 || portfolioItems.length === 0) return;
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterBtns.forEach(b => {
                b.classList.remove('active', 'border-primary-container', 'bg-surface-container', 'text-on-surface');
                b.classList.add('border-outline-variant/30', 'text-on-surface-variant');
            });
            btn.classList.add('active', 'border-primary-container', 'bg-surface-container', 'text-on-surface');
            btn.classList.remove('border-outline-variant/30', 'text-on-surface-variant');
            
            const filter = btn.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}


// Gallery Modal Logic
function initGalleryModal() {
    // 1. Create Modal DOM
    const modalHTML = `
        <div id="gallery-modal" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md opacity-0 pointer-events-none transition-opacity duration-300">
            <button id="gallery-close" class="absolute top-6 right-6 text-white hover:text-primary transition-colors z-10 p-2">
                <span class="material-symbols-outlined text-4xl" style="font-variation-settings: 'FILL' 1;">close</span>
            </button>
            
            <button id="gallery-prev" class="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10 p-2 md:p-4">
                <span class="material-symbols-outlined text-4xl md:text-5xl" style="font-variation-settings: 'FILL' 1;">chevron_left</span>
            </button>
            
            <button id="gallery-next" class="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10 p-2 md:p-4">
                <span class="material-symbols-outlined text-4xl md:text-5xl" style="font-variation-settings: 'FILL' 1;">chevron_right</span>
            </button>

            <div class="relative w-full max-w-6xl max-h-[85vh] px-12 md:px-24 flex items-center justify-center">
                <img id="gallery-img" src="" class="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl transition-transform duration-300" alt="Gallery Image">
            </div>

            <div class="absolute bottom-6 left-1/2 -translate-x-1/2 text-white font-label-mono bg-black/50 px-4 py-2 rounded-full backdrop-blur-md">
                <span id="gallery-counter">1 / 1</span>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.getElementById('gallery-modal');
    const closeBtn = document.getElementById('gallery-close');
    const prevBtn = document.getElementById('gallery-prev');
    const nextBtn = document.getElementById('gallery-next');
    const imgEl = document.getElementById('gallery-img');
    const counterEl = document.getElementById('gallery-counter');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    let currentImages = [];
    let currentIndex = 0;

    function openModal(images) {
        if (!images || images.length === 0) return;
        currentImages = images;
        currentIndex = 0;
        updateModalContent();
        
        modal.classList.remove('opacity-0', 'pointer-events-none');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    function closeModal() {
        modal.classList.add('opacity-0', 'pointer-events-none');
        document.body.style.overflow = '';
    }

    function updateModalContent() {
        // Simple fade out/in effect
        imgEl.style.opacity = '0';
        setTimeout(() => {
            imgEl.src = currentImages[currentIndex];
            imgEl.onload = () => { imgEl.style.opacity = '1'; };
        }, 150);
        
        counterEl.textContent = `${currentIndex + 1} / ${currentImages.length}`;
        
        if (currentImages.length <= 1) {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'block';
            nextBtn.style.display = 'block';
        }
    }

    function showNext() {
        if (currentImages.length <= 1) return;
        currentIndex = (currentIndex + 1) % currentImages.length;
        updateModalContent();
    }

    function showPrev() {
        if (currentImages.length <= 1) return;
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        updateModalContent();
    }

    // Attach click events
    portfolioItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const galleryData = item.getAttribute('data-gallery');
            if (galleryData) {
                try {
                    const images = JSON.parse(galleryData);
                    openModal(images);
                } catch (e) {
                    console.error("Invalid gallery data", e);
                }
            }
        });
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
    const mobileLangBtn = document.getElementById('lang-toggle-mobile');
    
    const enHTML = '<span class="material-symbols-outlined text-sm">language</span> ID / <span class="font-bold text-on-surface border-b border-on-surface pb-0.5">EN</span>';
    const idHTML = '<span class="material-symbols-outlined text-sm">language</span> <span class="font-bold text-on-surface border-b border-on-surface pb-0.5">ID</span> / EN';
    
    if (langBtn) {
        langBtn.innerHTML = currentLang === 'en' ? enHTML : idHTML;
    }
    if (mobileLangBtn) {
        mobileLangBtn.innerHTML = currentLang === 'en' ? enHTML : idHTML;
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
