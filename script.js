document.addEventListener('DOMContentLoaded', () => {
    // Copyright year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mobile menu
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const setMenu = (open) => {
        navLinks.classList.toggle('active', open);
        menuBtn.setAttribute('aria-expanded', String(open));
        menuBtn.textContent = open ? 'Close' : 'Menu';
    };
    menuBtn.addEventListener('click', () => setMenu(!navLinks.classList.contains('active')));
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Click a proof screenshot to enlarge it
    const box = document.querySelector('.lightbox');
    const boxImg = box.querySelector('img');
    document.querySelectorAll('.proof-grid img').forEach(img => {
        img.addEventListener('click', () => {
            boxImg.src = img.src;
            boxImg.alt = img.alt;
            box.showModal();
        });
    });
    box.addEventListener('click', (e) => { if (e.target !== boxImg) box.close(); });
});
