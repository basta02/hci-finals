document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
      heroSection.classList.add('visible'); 
    }
  
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom >= 0;
    }
  
    function handleScroll() {
      const introSection = document.querySelector('.intro');
      if (introSection && isInViewport(introSection)) {
        introSection.classList.add('visible');
      }
  
      const policySection = document.querySelector('.policy');
      if (policySection && isInViewport(policySection)) {
        policySection.classList.add('visible');
      }
  
      const header = document.querySelector('header');
      if (window.scrollY > 0) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      if (header) {
        if (window.scrollY > 0) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    }
  
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);
  });
  