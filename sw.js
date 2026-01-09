const CACHE_NAME = 'k-chrono-v2';
const assets = ['/'];
self.addEventListener('install', (e) => {
e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(assets)));
});
self.addEventListener('fetch', (e) => {
e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
