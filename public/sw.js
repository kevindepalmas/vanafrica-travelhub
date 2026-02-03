const CACHE_NAME = 'vanafrica-v3';
const urlsToCache = [
  '/',
  '/accueil',
  '/carte',
  '/etape/knysna',
  '/etape/addo',
  '/partenaires',
  '/partenaire/addo-african-home',
  '/infos',
  '/icon-192.png',
  '/hero-garden-route.jpg',
  '/knysna.jpg',
  '/addo.jpg',
  '/lodge.jpg',
  '/map-garden-route.jpg'
];

// Installation
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

// Fetch
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});