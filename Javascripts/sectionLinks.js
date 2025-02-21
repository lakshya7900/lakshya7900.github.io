document.addEventListener('DOMContentLoaded', () => {
    const sectionLinks = document.querySelectorAll('.section_links a');
    const sections = document.querySelectorAll('.main_right_side > div');
  
    // Helper to remove the 'active' class from all links
    const clearActive = () => {
      sectionLinks.forEach(link => link.classList.remove('active'));
    };
  
    // Click event: When a link is clicked, update the active state immediately
    sectionLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor jump behavior
        const targetID = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetID);
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
          });
        }
    });
    });
  
    // IntersectionObserver to watch when sections enter the viewport
    const observerOptions = {
      root: null, // viewport
      threshold: 0.5
    };
  
    const observerCallback = (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            clearActive();
            const id = entry.target.getAttribute('id');

            if (id === 'about') {
                const aboutLink = document.querySelector('.section_links a');
                if (aboutLink)
                    aboutLink.classList.add('active');
            } else {
                const activeLink = document.querySelector(`.section_links a[href="#${id}"]`);
                if (activeLink)
                    activeLink.classList.add('active');
            }
          }
        });
      };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));
});
  