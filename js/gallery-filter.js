(function () {
  'use strict';

  var filters = document.querySelectorAll('.gallery-filter');
  var items   = document.querySelectorAll('.gallery-item');

  if (!filters.length || !items.length) return;

  filters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.dataset.filter;

      // Update active state
      filters.forEach(function (b) {
        b.classList.remove('gallery-filter--active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('gallery-filter--active');
      btn.setAttribute('aria-selected', 'true');

      // Filter items with opacity transition
      items.forEach(function (item) {
        var match = filter === 'all' || item.dataset.category === filter;
        if (match) {
          item.style.opacity = '0';
          item.classList.remove('gallery-item--hidden');
          // Force reflow then fade in
          requestAnimationFrame(function () {
            requestAnimationFrame(function () {
              item.style.transition = 'opacity 0.3s ease';
              item.style.opacity = '1';
            });
          });
        } else {
          item.style.transition = 'opacity 0.3s ease';
          item.style.opacity = '0';
          setTimeout(function () {
            item.classList.add('gallery-item--hidden');
          }, 300);
        }
      });
    });
  });
}());
