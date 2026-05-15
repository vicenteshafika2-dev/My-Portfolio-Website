
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    darkModeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
    });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

faders.forEach(fader => appearOnScroll.observe(fader));

const sections = document.querySelectorAll('section[id], header[id], footer[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(a => a.classList.remove('active'));
            const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
            if (active) active.classList.add('active');
        }
    });
}, { threshold: 0.4 });

sections.forEach(s => spyObserver.observe(s));

const burger      = document.getElementById('burger');
const mobileDrawer = document.getElementById('mobileDrawer');

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    mobileDrawer.classList.toggle('open');
    body.style.overflow = mobileDrawer.classList.contains('open') ? 'hidden' : '';
});

document.querySelectorAll('.drawer-link').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('open');
        mobileDrawer.classList.remove('open');
        body.style.overflow = '';
    });
});
