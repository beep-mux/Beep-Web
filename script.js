/* ===================================================================
   BEEP — script.js
   Small, focused interactions only:
   1. Mobile hamburger menu open/close
   2. Menu category filtering
   3. Back-to-top button
   4. Auto-updating footer year
   =================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- 1. MOBILE NAV TOGGLE ---------- */
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', function () {
    var isOpen = navLinks.classList.toggle('mobile-open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close the mobile menu after a link is tapped
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('mobile-open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- 2. MENU CATEGORY FILTERING ---------- */
  var filterButtons = document.querySelectorAll('.filter-btn');
  var categories = document.querySelectorAll('.menu-category');

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = btn.getAttribute('data-filter');

      filterButtons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      categories.forEach(function (cat) {
        if (target === 'all' || cat.getAttribute('data-category') === target) {
          cat.classList.remove('hidden');
        } else {
          cat.classList.add('hidden');
        }
      });
    });
  });

  /* ---------- 3. BACK TO TOP BUTTON ---------- */
  var backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- 4. FOOTER YEAR ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();

});
