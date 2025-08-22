// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

function toggleMenu() {
  if (mobileMenu.style.transform === 'translateY(0%)') {
    mobileMenu.style.transform = 'translateY(-100%)';
    mobileMenu.setAttribute('aria-hidden', 'true');
  } else {
    mobileMenu.style.transform = 'translateY(0%)';
    mobileMenu.setAttribute('aria-hidden', 'false');
  }
}
menuBtn.addEventListener('click', toggleMenu);

// Fade-in on scroll
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));
