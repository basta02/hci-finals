document.addEventListener('DOMContentLoaded', () => {
    const roomSections = document.querySelectorAll('.room');
    const heroSection = document.querySelector('.hero');
    const header = document.querySelector('header');
  
   
    function isInView(element) {
      const rect = element.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    }
  
    function showSectionsOnScroll() {
    
      roomSections.forEach(section => {
        if (isInView(section)) {
          section.classList.add('visible');
        }
      });
  
 
      if (heroSection && isInView(heroSection)) {
        heroSection.classList.add('visible');
      }
  

      if (header) {
        if (window.scrollY > 0) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    }
  
    window.addEventListener('scroll', showSectionsOnScroll);
    window.addEventListener('load', showSectionsOnScroll);
  

    const popup = document.getElementById("room-popup");
    const closeBtn = document.querySelector(".close-btn");
    const priceButtons = document.querySelectorAll(".price-btn");
  
    priceButtons.forEach(button => {
      button.addEventListener("click", () => {
        popup.style.display = "flex";
      });
    });
  
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
      });
    }
  
    window.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.style.display = "none";
      }
    });
  });
  