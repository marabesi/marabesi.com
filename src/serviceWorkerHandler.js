if ('serviceWorker' in navigator) {
  var updateButton = document.querySelector('.update-button');
  var menuWrapper = document.querySelector('.menu-wrapper');
  var worker;

  updateButton.addEventListener('click', function () {
    worker.postMessage({ action: 'skip' });
  });
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
      registration.addEventListener('updatefound', function () {
        worker = registration.installing;

        worker.addEventListener('statechange', function () {
          if (worker.state === 'installed') {
            updateButton.classList.remove('hidden');
          }
        });
      });
    });

    navigator.serviceWorker.addEventListener('controllerchange', function () {
      window.location.reload();
    });
  });
}