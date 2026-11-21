/* Riyadh Metro & Bus Explorer — Service Worker
   Offline-first: caches the app shell, libraries, fonts and all Riyadh map tiles. */

const VERSION = 'v16';
const SHELL_CACHE = 'riyadh-shell-' + VERSION;
const RUNTIME_CACHE = 'riyadh-runtime-' + VERSION;
const TILE_CACHE = 'riyadh-tiles-' + VERSION;

// Core app files (same origin)
const SHELL_URLS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './tiles-manifest.js',
  './bus-routes.js',
  './bus-stops.js',
  './metro-data.js',
  './firebase-config.js',
  './version.json',
  './icons/apple-touch-icon.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Third-party assets needed on first load (cached so app boots offline)
const SHELL_CDN = [
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.js',
  'https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.css',
  'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=IBM+Plex+Sans+Arabic:wght@500;600;700&display=swap',
  'https://tiles.openfreemap.org/styles/positron',
  'https://tiles.openfreemap.org/planet'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE)
      .then(cache => Promise.allSettled(
        SHELL_URLS.concat(SHELL_CDN).map(u =>
          fetch(u).then(r => { if (r.ok) return cache.put(u, r); })
        )
      ))
      .catch(() => {})
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys
        .filter(k => ![SHELL_CACHE, RUNTIME_CACHE, TILE_CACHE].includes(k))
        .map(k => caches.delete(k))))
      .then(() => self.clients.claim())
      .then(() => { warmTiles(); })
  );
});

// Let the page ask a waiting update to activate after the user taps Update.
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

// Background warm-up: download every Riyadh tile once, in small batches.
async function warmTiles() {
  try {
    const res = await fetch('./tiles-manifest.js');
    const txt = await res.text();
    const urls = JSON.parse(txt.slice(txt.indexOf('['), txt.lastIndexOf(']') + 1));
    const cache = await caches.open(TILE_CACHE);
    const CONCURRENCY = 6;
    for (let i = 0; i < urls.length; i += CONCURRENCY) {
      await Promise.all(urls.slice(i, i + CONCURRENCY).map(async u => {
        if (await cache.match(u)) return;
        try {
          const r = await fetch(u);
          if (r.ok) await cache.put(u, r);
        } catch (e) { /* offline or tile missing — retry next launch */ }
      }));
      await new Promise(r => setTimeout(r, 50));
    }
  } catch (e) { /* manifest unavailable */ }
}

function isTile(url) {
  return url.includes('tiles.openfreemap.org/planet/') ||
         url.includes('tile.openstreetmap.org/');
}
function isStyleOrAsset(url) {
  return url.includes('tiles.openfreemap.org/styles/') ||
         url.includes('tiles.openfreemap.org/fonts/') ||
         url.includes('tiles.openfreemap.org/sprites/') ||
         url.includes('fonts.googleapis.com') ||
         url.includes('fonts.gstatic.com');
}
function isLibrary(url) {
  return url.includes('cdn.tailwindcss.com') ||
         url.includes('unpkg.com/maplibre-gl');
}

self.addEventListener('fetch', (event) => {
  const url = event.request.url;
  if (event.request.method !== 'GET') return;

  // Map vector/raster tiles: cache-first (immutable content)
  if (isTile(url)) {
    event.respondWith(
      caches.match(event.request).then(hit => {
        if (hit) return hit;
        return fetch(event.request).then(resp => {
          if (resp.ok) {
            const clone = resp.clone();
            caches.open(TILE_CACHE).then(c => c.put(event.request, clone));
          }
          return resp;
        }).catch(() => caches.match(event.request));
      })
    );
    return;
  }

  // Map styles, glyphs, sprites, webfonts: stale-while-revalidate
  if (isStyleOrAsset(url)) {
    event.respondWith(
      caches.match(event.request).then(hit => {
        const network = fetch(event.request).then(resp => {
          if (resp.ok) {
            const clone = resp.clone();
            caches.open(RUNTIME_CACHE).then(c => c.put(event.request, clone));
          }
          return resp;
        }).catch(() => hit);
        return hit || network;
      })
    );
    return;
  }

  // JS/CSS libraries (tailwind, maplibre): stale-while-revalidate
  if (isLibrary(url)) {
    event.respondWith(
      caches.match(event.request).then(hit => {
        const network = fetch(event.request).then(resp => {
          if (resp.ok) {
            const clone = resp.clone();
            caches.open(RUNTIME_CACHE).then(c => c.put(event.request, clone));
          }
          return resp;
        }).catch(() => hit);
        return hit || network;
      })
    );
    return;
  }

  // App shell & same-origin files: network-first, fall back to cache
  if (url.startsWith(self.location.origin)) {
    event.respondWith(
      fetch(event.request).then(resp => {
        if (resp.ok) {
          const clone = resp.clone();
          caches.open(RUNTIME_CACHE).then(c => c.put(event.request, clone));
        }
        return resp;
      }).catch(() => caches.match(event.request).then(hit => hit || caches.match('./index.html')))
    );
  }
});
