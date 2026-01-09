const CACHE_NAME = 'kchrono-v1';
const assets = ['./', './index.html'];
self.addEventListener('install', (event) => {
event.waitUntil(
caches.open(CACHE_NAME).then((cache) => cache.addAll(assets))
);
});
self.addEventListener('fetch', (event) => {
event.respondWith(
fetch(event.request).catch(() => caches.match(event.request))
);
});
