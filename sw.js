const CACHE_NAME = "my-game-cache-v1";
const urlsToCache = [
  '/draword/',
  '/draword/index.html',
  '/draword/styles.css',
  '/draword/script.js',
  '/draword/icon-192x192.png'
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => response || fetch(event.request))
    );
});
