var CACHE_TITLE = 'covidcounter';
var CACHE_VERSION = 'v2';
var CACHE_NAME = CACHE_TITLE + '-' + CACHE_VERSION;
var urlsToCache = [
  'index.html',
  'about.html',
  'whatnow.html',
  'sources.html',
  'manifest.json',
  'package.json',
  'sw.js',
  'css/index.css',
  'js/javascript.js',
  'js/jquery.js',
  'libraries/countUp.js',
  'libraries/jquery-3.5.1.min.js',
  'img/mask.png',
  'img/placeholder.png',
  'img/48x48.png',
  'img/96x96.png',
  'img/144x144.png',
  'img/192x192.png'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', function(event) {

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
                    if(cacheName !== CACHE_NAME && cacheName.indexOf(CACHE_TITLE) === 0) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          console.log('success fetch cache');
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
