// Initialize GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initNavbar } from '../../components/Navbar';
import { initFooter } from '../../components/Footer';

gsap.registerPlugin(ScrollTrigger);

// Dark mode toggle functionality
const darkModeToggle = document.getElementById('darkModeToggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or use the system preference
const getThemePreference = () => {
  if (localStorage.getItem('theme')) {
    return localStorage.getItem('theme');
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

// Set theme on initial load
const setTheme = (theme) => {
  if (theme === 'dark') {
    htmlElement.classList.add('dark');
    if (darkModeToggle) darkModeToggle.checked = true;
  } else {
    htmlElement.classList.remove('dark');
    if (darkModeToggle) darkModeToggle.checked = false;
  }
  localStorage.setItem('theme', theme);
};

// Initial theme setup
setTheme(getThemePreference());

// Toggle theme when button is clicked
if (darkModeToggle) {
  darkModeToggle.addEventListener('change', () => {
    const newTheme = darkModeToggle.checked ? 'dark' : 'light';
    setTheme(newTheme);
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    if (!targetId) return;
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  });
});

// Animation functions
const animateOnScroll = () => {
  // Hero section animations
  if (document.querySelector('.hero-content h1')) {
    gsap.from('.hero-content h1', {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.2
    });
  }
  
  if (document.querySelector('.hero-content p')) {
    gsap.from('.hero-content p', {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.4
    });
  }
  
  if (document.querySelector('.hero-content .btn')) {
    gsap.from('.hero-content .btn', {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.6
    });
  }
  
  // About section animations
  if (document.querySelector('.about-content') && document.querySelector('.about-section')) {
    gsap.from('.about-content', {
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top 80%'
      },
      y: 50,
      opacity: 0,
      duration: 1
    });
  }
  
  // Projects animations with staggered effect
  if (document.querySelector('.project-card') && document.querySelector('.projects-section')) {
    gsap.from('.project-card', {
      scrollTrigger: {
        trigger: '.projects-section',
        start: 'top 80%'
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2
    });
  }
  
  // Contact form animation
  if (document.querySelector('.contact-form') && document.querySelector('.contact-section')) {
    gsap.from('.contact-form', {
      scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 80%'
      },
      y: 50,
      opacity: 0,
      duration: 1
    });
  }
};

// Initialize components and animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize components
  initNavbar();
  initFooter();
  
  // Initialize animations
  animateOnScroll();
  
  // Handle contact form submissions
  const contactForm = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');
  const closeSuccessMessage = document.getElementById('closeSuccessMessage');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // In a real implementation, you would handle the form submission to a backend service here
      // For this demo, we'll just show the success message
      
      // Show success message
      if (successMessage) {
        successMessage.classList.remove('hidden');
      }
      
      // Reset form
      contactForm.reset();
    });
  }
  
  if (closeSuccessMessage) {
    closeSuccessMessage.addEventListener('click', function() {
      if (successMessage) {
        successMessage.classList.add('hidden');
      }
    });
  }
});
