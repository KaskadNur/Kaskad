document.addEventListener('DOMContentLoaded', function() {
  // Menu toggle functionality
  const menuButton = document.querySelector('.menu-button');
  const menuContents = document.querySelector('.menu-contents');
  const menuLinks = document.querySelectorAll('.menu-list a');
  
  let isMenuOpen = false;
  
  menuButton.addEventListener('click', function() {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      menuContents.classList.add('active');
    } else {
      menuContents.classList.remove('active');
    }
  });
  
  // Close menu when clicking on a link
  menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      isMenuOpen = false;
      menuContents.classList.remove('active');
    });
  });
  
  // Smooth scroll for navigation dots
  const navDots = document.querySelectorAll('.nav-dots a');
  const sections = document.querySelectorAll('.section');
  
  navDots.forEach(function(dot) {
    dot.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        // Simple scroll to section (in production, you'd want smooth scrolling)
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Add active class to current section in nav
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    
    sections.forEach(function(section) {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        navDots.forEach(function(dot) {
          dot.parentElement.classList.remove('is-located');
          if (dot.getAttribute('href') === '#' + sectionId) {
            dot.parentElement.classList.add('is-located');
          }
        });
      }
    });
  });
  
  // Initialize first nav dot as active
  const firstNavDot = document.querySelector('.nav-dots li:first-child');
  if (firstNavDot) {
    firstNavDot.classList.add('is-located');
  }
});
