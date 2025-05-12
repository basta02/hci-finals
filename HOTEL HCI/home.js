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
  
      const amenitiesSection = document.querySelector('.amenities');
      if (amenitiesSection && isInViewport(amenitiesSection)) {
        amenitiesSection.classList.add('visible');
      }

      const header = document.querySelector('header');
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}


  
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll); 
  
    let currentSlide = 0;
  
    function showSlide(index) {
      const track = document.querySelector('.carousel-track');
      const slides = document.querySelectorAll('.carousel-item');
      if (!track || slides.length === 0) return;
  
      const totalSlides = slides.length;
  
      if (index >= totalSlides) currentSlide = 0;
      else if (index < 0) currentSlide = totalSlides - 1;
      else currentSlide = index;
  
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
  
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        showSlide(currentSlide + 1);
      });
    }
  
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        showSlide(currentSlide - 1);
      });
    }
  
    setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5000);


  });
  
  