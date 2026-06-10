import './index.css';

document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });

  // Sticky Header
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('bg-slate-950/80', 'backdrop-blur-md', 'border-slate-800', 'py-4');
        header.classList.remove('bg-transparent', 'border-transparent', 'py-6');
      } else {
        header.classList.add('bg-transparent', 'border-transparent', 'py-6');
        header.classList.remove('bg-slate-950/80', 'backdrop-blur-md', 'border-slate-800', 'py-4');
      }
    });
  }

  // Footer year
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }
});
