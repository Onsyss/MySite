document.addEventListener('DOMContentLoaded', () => {
  console.log('ONSYSS System Initialized');

  const scrollCue = document.querySelector('.scroll-cue');
  if (scrollCue) {
    scrollCue.addEventListener('click', () => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});