const CACHE_NAME = "my-game-cache-v1";
const urlsToCache = [
  '/draword/',
  '/draword/index.html',
  '/draword/styles.css',
  '/draword/script.js',
  '/draword/icon-192x192.png'
];

const CACHE_NAME = 'offline-v1';
const OFFLINE_URL = '/offline.html';

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.add(OFFLINE_URL))
    );
});

self.addEventListener('fetch', (event) => {
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request)
                .catch(() => caches.match(OFFLINE_URL))
        );
    }
});
