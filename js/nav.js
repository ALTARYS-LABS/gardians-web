(function () {
  'use strict';

  const nav    = document.getElementById('main-nav');
  const toggle = document.getElementById('nav-toggle');
  const menu   = document.getElementById('nav-menu');

  if (!nav || !toggle || !menu) return;

  // Sticky + dark background on scroll
  function onScroll() {
    nav.classList.toggle('nav--scrolled', window.scrollY > 60);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile hamburger toggle
  toggle.addEventListener('click', function () {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('nav__menu--open');
    document.body.style.overflow = expanded ? '' : 'hidden';
  });

  // Close menu on link click (mobile)
  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('nav__menu--open');
      document.body.style.overflow = '';
    });
  });

  // Close menu on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('nav__menu--open')) {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('nav__menu--open');
      document.body.style.overflow = '';
      toggle.focus();
    }
  });

  // Mark active link based on current page
  var current = window.location.pathname.split('/').pop() || 'index.html';
  menu.querySelectorAll('a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}());
