const mediaQuery = window.matchMedia("(max-width: 985px)");

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.main_right_side > div');
    const threshhold = -1
    const bottomThreshold = -57
    const aboutBottomThreshold = -35

    let header;

    window.addEventListener('scroll', function() {
        main();
      });

    function main() {
        requestAnimationFrame(() => {
            sections.forEach(section => {                       
                const rect = section.getBoundingClientRect();
    
                header = section.querySelector('.header');
                header.style.top = (rect.top - 80) + 'px';
                const headerRect = header.getBoundingClientRect();
    
                if (headerRect.top + threshhold <= 0) {
                    header = section.querySelector('.header');
                    header.style.top = 0;
                } 
                
                if (rect.bottom + bottomThreshold <= 0 && section.id != 'about') {
                    header = section.querySelector('.header');
                    header.style.top = (rect.bottom + bottomThreshold) + 'px';
                } else if (rect.bottom + aboutBottomThreshold <= 0 && section.id == 'about') {
                    header = section.querySelector('.header');
                    header.style.top = (rect.bottom + aboutBottomThreshold) + 'px';
                }
            });
        });
    }

    main();
});