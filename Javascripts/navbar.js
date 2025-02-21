const mediaQuery = window.matchMedia("(max-width: 985px)");

document.addEventListener('DOMContentLoaded', function() {
    function setupNavbar() {
        navbar = document.querySelector('.navbar');
        navbar.style.display = 'inline';

        const sections = document.querySelectorAll('.main_right_side > div');
        const topThreshold = 760;
        const bottomThreshold = 846;  

        let passedHeader = [];
      
        function updateNavbar() {      
            let currentSection = null;
            const scrollY = window.scrollY;
            
            sections.forEach(section => {            
                const rect = section.getBoundingClientRect();
                const scrollTop = window.innerHeight;
    
                if (rect.top + scrollTop <= topThreshold && rect.bottom + scrollTop >= bottomThreshold) {
                  currentSection = section;
                } else if (rect.top + scrollTop > topThreshold){
                    let index = passedHeader.indexOf(section.querySelector('.header').textContent);
                    passedHeader.splice(index, 1);
                }
                
            });
          
            // If we found a section, update the navbar text
            if (currentSection) {
                const header = currentSection.querySelector('.header');
    
                navbar.textContent = header ? header.textContent : '';  
                header.style.opacity = 0;

                if (!passedHeader.includes(navbar.textContent)) {
                    passedHeader.push(navbar.textContent);
                    navbar.style.removeProperty('transition');
                } else
                    navbar.style.transition = 'all 0.3s ease-in-out';

                navbar.style.top = "0";
            } 
            else {
                const headers = document.querySelectorAll('.header');
    
                headers.forEach(header => {
                    header.style.opacity = 1;
                });

                navbar.style.transition = 'all 0.3s ease-in-out';
                navbar.style.top = "-52px";
    
                const rect = sections[0].getBoundingClientRect();
                const scrollTop = window.innerHeight;
    
                if (rect.top + scrollTop > topThreshold) {
                  passedHeader = [];
                }
            }

            previousScrollY = scrollY;
            
        }
        // Listen for scroll and resize events
        window.addEventListener('scroll', updateNavbar);
        window.addEventListener('resize', updateNavbar);
      
        // Initial check in case the page loads scrolled down
        updateNavbar();
    }
  
    if (mediaQuery.matches) {
        setupNavbar();
    } else {
        document.querySelector(".navbar").style.display = 'none';
    }
    
    mediaQuery.addEventListener('change', event => {
        if (event.matches) {
            setupNavbar();
        } else {
            document.querySelector(".navbar").style.display = 'none';
        }
    });

});