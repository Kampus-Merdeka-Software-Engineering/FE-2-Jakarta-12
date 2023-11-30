// script.js
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navItems = document.querySelectorAll('.nav-menu li a');

  hamburger.addEventListener('click', toggleMobileMenu);

  function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  }

  navItems.forEach(item => {
    item.addEventListener('click', function () {
      navItems.forEach(navItem => {
        navItem.classList.remove('active-nav');
      });
      this.classList.add('active-nav');
    });
  });

  window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
  });
});
