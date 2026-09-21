const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.classList.toggle('active', open);
  menuToggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Hero title: subtle movement while scrolling
const heroText = document.querySelector('.hero-text');
window.addEventListener('scroll', () => {
  if (!heroText) return;
  const y = Math.min(window.scrollY * 0.16, 120);
  heroText.style.transform = `translateY(${y}px)`;
}, { passive: true });
