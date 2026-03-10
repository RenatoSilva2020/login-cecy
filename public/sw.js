self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open('e-escolar-store').then((cache) => cache.addAll([
      '/login-cecy/',
      '/login-cecy/index.html',
    ])),
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Ignorar requisições para outros domínios (como a API do Google Sheets)
  if (!e.request.url.startsWith(self.location.origin)) {
    return;
  }

  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
