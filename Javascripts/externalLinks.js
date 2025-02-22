const experienceLinks = document.querySelectorAll('.experience_container a');
const gamesLinks = document.querySelectorAll('.games_container a');
const projectLinks = document.querySelectorAll('.projects_container a');

experienceLinks.forEach(experienceLink => {
  // When hovering over a link
  experienceLink.addEventListener('mouseenter', () => {
    experienceLinks.forEach(otherLink => {
      if (otherLink === experienceLink) {
        otherLink.style.opacity = '1'; // Hovered link to 1
      } else {
        otherLink.style.opacity = '0.3'; // Other links to 0.6
      }
    });
  });

  // When leaving a link
  experienceLink.addEventListener('mouseleave', () => {
    // Reset all links to 0.8 only if no link is currently hovered
    setTimeout(() => {
      if (!document.querySelector('.experience_container a:hover')) {
        experienceLinks.forEach(otherLink => {
          otherLink.style.opacity = '1';
        });
      }
    }, 10); // Small delay to ensure hover state has cleared
  });
});

gamesLinks.forEach(gamesLink => {
    // When hovering over a link
    gamesLink.addEventListener('mouseenter', () => {
        gamesLinks.forEach(otherLink => {
        if (otherLink === gamesLink) {
          otherLink.style.opacity = '1'; // Hovered link to 1
        } else {
          otherLink.style.opacity = '0.3'; // Other links to 0.6
        }
      });
    });
  
    // When leaving a link
    gamesLink.addEventListener('mouseleave', () => {
      // Reset all links to 0.8 only if no link is currently hovered
      setTimeout(() => {
        if (!document.querySelector('.games_container a:hover')) {
            gamesLinks.forEach(otherLink => {
            otherLink.style.opacity = '1';
          });
        }
      }, 10); // Small delay to ensure hover state has cleared
    });
});

projectLinks.forEach(projectLink => {
    // When hovering over a link
    projectLink.addEventListener('mouseenter', () => {
        projectLinks.forEach(otherLink => {
        if (otherLink === projectLink) {
          otherLink.style.opacity = '1'; // Hovered link to 1
        } else {
          otherLink.style.opacity = '0.3'; // Other links to 0.6
        }
      });
    });
  
    // When leaving a link
    projectLink.addEventListener('mouseleave', () => {
      // Reset all links to 0.8 only if no link is currently hovered
      setTimeout(() => {
        if (!document.querySelector('.projects_container a:hover')) {
            projectLinks.forEach(otherLink => {
            otherLink.style.opacity = '1';
          });
        }
      }, 10); // Small delay to ensure hover state has cleared
    });
});