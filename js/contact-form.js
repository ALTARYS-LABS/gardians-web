(function () {
  'use strict';

  var form   = document.getElementById('contact-form');
  var status = document.getElementById('form-status');

  if (!form || !status) return;

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function clearError(input) {
    input.classList.remove('error');
    var errorEl = input.parentElement.querySelector('.form-error');
    if (errorEl) errorEl.remove();
  }

  function showError(input, message) {
    input.classList.add('error');
    clearError(input);
    input.classList.add('error');
    var errorEl = document.createElement('span');
    errorEl.className = 'form-error';
    errorEl.textContent = message;
    input.parentElement.appendChild(errorEl);
  }

  function validateForm() {
    var valid = true;

    var nom = form.querySelector('#nom');
    var email = form.querySelector('#email');
    var message = form.querySelector('#message');

    // Clear previous errors
    [nom, email, message].forEach(clearError);

    if (!nom.value.trim()) {
      showError(nom, 'Veuillez saisir votre nom.');
      valid = false;
    }

    if (!email.value.trim()) {
      showError(email, 'Veuillez saisir votre email.');
      valid = false;
    } else if (!isValidEmail(email.value.trim())) {
      showError(email, 'Format d\'email invalide.');
      valid = false;
    }

    if (!message.value.trim()) {
      showError(message, 'Veuillez saisir votre message.');
      valid = false;
    }

    return valid;
  }

  // Clear error on input
  form.querySelectorAll('input, textarea').forEach(function (input) {
    input.addEventListener('input', function () {
      clearError(input);
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    status.className = 'form-status';
    status.textContent = '';

    if (!validateForm()) return;

    var btn = form.querySelector('[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Envoi en cours…';

    // Static form — simulate submission
    // TODO: Connect to Formspree or Netlify Forms in production
    setTimeout(function () {
      btn.disabled = false;
      btn.textContent = 'Envoyer le message';
      status.className = 'form-status form-status--success';
      status.textContent = 'Votre message a été envoyé. Notre équipe vous contactera dans les plus brefs délais.';
      form.reset();
    }, 800);
  });
}());
