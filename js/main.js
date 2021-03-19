const header = document.getElementById('header');
const scrollBtn = document.getElementById('scrollBtn');
const menuIcon = document.getElementById('menuIcon');
const headerNav = document.getElementById('headerNav');
const headerNavLinks = document.querySelectorAll('#headerNavLink');

window.addEventListener('scroll', function () {
  header.classList.toggle('sticky', window.scrollY > 0);

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.opacity = 1;
  } else {
    scrollBtn.style.opacity = 0;
  }
});

scrollBtn.addEventListener('click', function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

menuIcon.addEventListener('click', function() {
  menuIcon.classList.toggle('change');
  headerNav.classList.toggle('header_nav__active');
});

headerNavLinks.forEach(headerNavLink => {
  headerNavLink.addEventListener('click', function() {
    headerNav.classList.remove('header_nav__active');
    menuIcon.classList.toggle('change');
  });
});