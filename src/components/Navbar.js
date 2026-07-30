// Navbar.js - Component for site navigation
export function initNavbar() {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const mobileMenuButton = document.getElementById('mobileMenuButton');
  const mobileMenu = document.getElementById('mobileMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Set active nav link based on current page
  const currentPage = window.location.pathname;
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if ((currentPage === '/' && href === '/') || 
        (currentPage !== '/' && href !== '/' && currentPage.includes(href))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
  
  // Mobile menu toggle
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (event) => {
    if (mobileMenu && !mobileMenu.classList.contains('hidden') && 
        !mobileMenuButton.contains(event.target) && 
        !mobileMenu.contains(event.target)) {
      mobileMenu.classList.add('hidden');
    }
  });
  
  // Close mobile menu when window resizes
  window.addEventListener('resize', () => {
    if (mobileMenu && window.innerWidth >= 768) { // md breakpoint
      mobileMenu.classList.add('hidden');
    }
  });
}
