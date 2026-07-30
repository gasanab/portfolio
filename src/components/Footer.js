// Footer.js - Component for site footer
export function initFooter() {
  // Get the current year for the copyright notice
  const currentYear = new Date().getFullYear();
  const copyrightYear = document.querySelector('.copyright-year');
  
  // Update copyright year if element exists
  if (copyrightYear) {
    copyrightYear.textContent = currentYear;
  }
  
  // Add smooth scrolling to footer links that point to page sections
  const footerLinks = document.querySelectorAll('footer a[href^="#"]');
  footerLinks.forEach(link => {
    link.addEventListener('click', function(e) {
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
  
  // Initialize footer animation if using GSAP
  if (window.gsap) {
    gsap.from('footer .container > div', {
      scrollTrigger: {
        trigger: 'footer',
        start: 'top 90%'
      },
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2
    });
  }
}
