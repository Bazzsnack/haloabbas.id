// js/components.js

const navbarHTML = `
<nav class="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-3 bg-white/90 backdrop-blur-xl dark:bg-inverse-surface/90 font-body-md text-body-md rounded-full mt-6 mx-auto w-[90%] max-w-[1100px] shadow-[0_4px_24px_0_rgba(0,0,0,0.04)] border border-white/60 transition-all duration-300">
    <a href="index.html" class="flex items-center gap-2">
        <img src="gambar/logo.png" alt="ABBAS Logo" class="h-10 w-auto">
    </a>
    
    <!-- Desktop Menu -->
    <div class="hidden md:flex items-center gap-6" id="desktop-nav-links">
        <a class="nav-link text-on-surface-variant dark:text-on-tertiary-container hover:text-primary transition-colors hover:scale-105 duration-200 active:scale-95" href="index.html" data-i18n="nav_home">Home</a>
        <a class="nav-link text-on-surface-variant dark:text-on-tertiary-container hover:text-primary transition-colors hover:scale-105 duration-200 active:scale-95" href="about.html" data-i18n="nav_about">About</a>
        <a class="nav-link text-on-surface-variant dark:text-on-tertiary-container hover:text-primary transition-colors hover:scale-105 duration-200 active:scale-95" href="work.html" data-i18n="nav_work">Work</a>
        <a class="nav-link text-on-surface-variant dark:text-on-tertiary-container hover:text-primary transition-colors hover:scale-105 duration-200 active:scale-95" href="services.html" data-i18n="nav_services">Services</a>
        <a class="nav-link text-on-surface-variant dark:text-on-tertiary-container hover:text-primary transition-colors hover:scale-105 duration-200 active:scale-95" href="process.html" data-i18n="nav_process">Process</a>
        <a class="nav-link text-on-surface-variant dark:text-on-tertiary-container hover:text-primary transition-colors hover:scale-105 duration-200 active:scale-95" href="contact.html" data-i18n="nav_contact">Contact</a>
    </div>

    <div class="flex items-center gap-4">
        <button id="lang-toggle" class="text-on-surface-variant dark:text-on-tertiary-container hover:text-primary transition-colors font-label-mono text-label-mono active:scale-95 duration-150">ID/EN</button>
        <a href="contact.html" class="btn-primary py-2 px-5 text-sm active:scale-95 hidden sm:inline-flex" data-i18n="nav_cta">Let's Talk</a>
        
        <!-- Mobile Menu Toggle -->
        <button id="mobile-menu-btn" class="md:hidden text-on-surface flex items-center justify-center p-2 rounded-full hover:bg-surface-variant transition-colors">
            <span class="material-symbols-outlined">menu</span>
        </button>
    </div>
</nav>

<!-- Mobile Menu Overlay -->
<div id="mobile-menu" class="fixed inset-0 bg-surface/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 translate-y-[-100%] transition-transform duration-500 ease-in-out md:hidden">
    <a class="nav-link text-headline-md text-on-surface hover:text-primary transition-colors" href="index.html" data-i18n="nav_home">Home</a>
    <a class="nav-link text-headline-md text-on-surface hover:text-primary transition-colors" href="about.html" data-i18n="nav_about">About</a>
    <a class="nav-link text-headline-md text-on-surface hover:text-primary transition-colors" href="work.html" data-i18n="nav_work">Work</a>
    <a class="nav-link text-headline-md text-on-surface hover:text-primary transition-colors" href="services.html" data-i18n="nav_services">Services</a>
    <a class="nav-link text-headline-md text-on-surface hover:text-primary transition-colors" href="process.html" data-i18n="nav_process">Process</a>
    <a class="nav-link text-headline-md text-on-surface hover:text-primary transition-colors" href="contact.html" data-i18n="nav_contact">Contact</a>
    <a href="contact.html" class="btn-primary mt-4 text-lg px-8 py-3" data-i18n="nav_cta">Let's Talk</a>
</div>
`;

const footerHTML = `
<footer class="bg-surface-container dark:bg-surface-container-highest rounded-t-[24px] border-t border-outline-variant/30 w-full px-margin-mobile md:px-gutter py-section-gap flex flex-col md:flex-row justify-between items-start font-body-md text-body-md opacity-90 hover:opacity-100 transition-opacity duration-300 mt-24">
    <div class="mb-8 md:mb-0">
        <div class="font-headline-md text-headline-md font-bold text-on-surface dark:text-on-primary-fixed mb-4">ABBAS</div>
        <p class="text-on-surface-variant dark:text-on-tertiary-fixed-variant max-w-sm" data-i18n="footer_desc">
            © 2024 Abbas. Turning ideas into digital products.
        </p>
    </div>
    <div class="flex flex-wrap gap-x-12 gap-y-6">
        <div class="flex flex-col gap-3">
            <a class="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-secondary dark:hover:text-secondary-fixed-dim transition-colors" href="index.html" data-i18n="nav_home">Home</a>
            <a class="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-secondary dark:hover:text-secondary-fixed-dim transition-colors" href="about.html" data-i18n="nav_about">About</a>
            <a class="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-secondary dark:hover:text-secondary-fixed-dim transition-colors" href="work.html" data-i18n="nav_work">Work</a>
            <a class="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-secondary dark:hover:text-secondary-fixed-dim transition-colors" href="services.html" data-i18n="nav_services">Services</a>
        </div>
        <div class="flex flex-col gap-3">
            <a class="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-secondary dark:hover:text-secondary-fixed-dim transition-colors" href="process.html" data-i18n="nav_process">Process</a>
            <a class="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-secondary dark:hover:text-secondary-fixed-dim transition-colors" href="contact.html" data-i18n="nav_contact">Contact</a>
            <a class="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-secondary dark:hover:text-secondary-fixed-dim transition-colors" href="#">GitHub</a>
        </div>
        <div class="flex flex-col gap-3">
            <a class="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-secondary dark:hover:text-secondary-fixed-dim transition-colors" href="https://www.tiktok.com/@haloabbas.id?_r=1&_t=ZS-97z07Jw1s0t" target="_blank">TikTok</a>
            <a class="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-secondary dark:hover:text-secondary-fixed-dim transition-colors" href="https://www.instagram.com/haloabbas.id?igsh=MzNwajM2OW10NGE5" target="_blank">Instagram</a>
            <a class="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-secondary dark:hover:text-secondary-fixed-dim transition-colors" href="https://wa.me/6285852590376" target="_blank">WhatsApp</a>
        </div>
    </div>
</footer>
`;

function loadComponents() {
    const navMount = document.getElementById('navbar-mount');
    if (navMount) {
        navMount.outerHTML = navbarHTML;
        highlightActiveNav();
    }

    const footerMount = document.getElementById('footer-mount');
    if (footerMount) {
        footerMount.outerHTML = footerHTML;
    }
}

function highlightActiveNav() {
    let currentPath = window.location.pathname.split('/').pop();
    if (currentPath === '') currentPath = 'index.html';

    const navLinks = document.querySelectorAll('#desktop-nav-links .nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath) {
            link.classList.remove('text-on-surface-variant');
            link.classList.add('text-primary', 'border-b-2', 'border-primary', 'font-bold');
        }
    });
}

// Load immediately if script is placed at bottom of body, or wait for DOMContentLoaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadComponents);
} else {
    loadComponents();
}
