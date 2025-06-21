document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector('.navbar .menu');
    const hamburger = document.getElementById('hamburger');

    hamburger.addEventListener('click', function (e) {
      e.stopPropagation(); // Prevent it from triggering the outside click listener
      menu.classList.toggle('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
      if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove('show');
      }
    });
  });