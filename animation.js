document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.3 }); // Trigger when 30% of the section is visible
  
    document.querySelectorAll('.section').forEach(section => {
      observer.observe(section);
    });

    // Dark Mode Toggle
    const toggleSwitch = document.getElementById('dark-mode-toggle');
    toggleSwitch.addEventListener('change', () => {
      document.body.classList.toggle('dark-mode');
    });
  });

  
  