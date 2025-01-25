  // Toggle search input
const searchIcon = document.querySelector('.searchIcon');
const searchInput = document.querySelector('.searchInput');

searchIcon.addEventListener('click', () => {
  searchInput.classList.toggle('active');
  if (searchInput.classList.contains('active')) {
    searchInput.focus();
  }
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menuToggle');
const closeMenu = document.querySelector('.closeMenu');
const navLinks = document.querySelector('.navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.add('active');
  document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
  navLinks.classList.remove('active');
  document.body.style.overflow = '';
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
    navLinks.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Close search when clicking outside
document.addEventListener('click', (e) => {
  if (!searchIcon.contains(e.target) && !searchInput.contains(e.target)) {
    searchInput.classList.remove('active');
  }
});

// Handle dropDown menus on mobile
const dropDownToggles = document.querySelectorAll('.dropDownToggle');

dropDownToggles.forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const dropDownMenu = toggle.nextElementSibling;
      const icon = toggle.querySelector('i');
      
      // Close other dropDowns
      dropDownToggles.forEach(otherToggle => {
        if (otherToggle !== toggle) {
          otherToggle.nextElementSibling.classList.remove('active');
          otherToggle.querySelector('i').classList.remove('active');
        }
      });

      // Toggle current dropDown
      dropDownMenu.classList.toggle('active');
      icon.classList.toggle('active');
    }
  });
});

// Reset styles on window resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove('active');
    document.body.style.overflow = '';
    document.querySelectorAll('.dropDownMenu').forEach(menu => {
      menu.classList.remove('active');
    });
    document.querySelectorAll('.dropDownToggle i').forEach(icon => {
      icon.classList.remove('active');
    });
  }
});