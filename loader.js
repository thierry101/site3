(function () {
  var overlay = document.createElement('div');
  overlay.className = 'ekd-loader';
  overlay.setAttribute('role', 'status');
  overlay.setAttribute('aria-live', 'polite');
  overlay.innerHTML =
    '<div class="ekd-loader-ring">' +
    '  <div class="ekd-loader-track"></div>' +
    '  <div class="ekd-loader-spin"></div>' +
    '  <div class="ekd-loader-logo"><img src="images/logo_ekd_sarl.jpeg" alt="EKD SARL" /></div>' +
    '</div>' +
    '<p class="ekd-loader-title">ENTREPRISE KONE DAOUDA — EKD SARL</p>' +
    '<p class="ekd-loader-sub" id="ekdLoaderLabel">Chargement en cours...</p>';

  document.body.insertBefore(overlay, document.body.firstChild);

  window.addEventListener('load', function () {
    setTimeout(function () {
      overlay.classList.add('hidden');
    }, 450);
  });

  setTimeout(function () {
    overlay.classList.add('hidden');
  }, 900);

  document.addEventListener('click', function (e) {
    var link = e.target && e.target.closest ? e.target.closest('a') : null;
    if (!link) return;
    var href = link.getAttribute('href');
    if (
      !href ||
      href.startsWith('#') ||
      href.startsWith('http') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      link.hasAttribute('download') ||
      link.target === '_blank'
    ) {
      return;
    }

    e.preventDefault();
    overlay.classList.add('transition-mode');
    var lbl = document.getElementById('ekdLoaderLabel');
    if (lbl) lbl.textContent = 'Chargement de la page...';
    overlay.classList.remove('hidden');

    setTimeout(function () {
      window.location.href = href;
    }, 300);
  });
})();
