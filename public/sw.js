self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('e-escolar-store').then((cache) => cache.addAll([
      '/login-cecy/',
      '/login-cecy/index.html',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
