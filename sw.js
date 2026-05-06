const CACHE_NAME = "dm-calculator-unique-install-v3";
const ASSETS = [
  "/DM-calculator/",
  "/DM-calculator/index.html",
  "/DM-calculator/manifest.webmanifest",
  "/DM-calculator/icon-192.png",
  "/DM-calculator/icon-512.png",
  "/DM-calculator/apple-touch-icon.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);
  if (!url.pathname.startsWith("/DM-calculator/")) return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
});
