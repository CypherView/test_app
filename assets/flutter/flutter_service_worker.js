'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "b293c782bf2f75f159a7b83d7110b560",
"/": "b293c782bf2f75f159a7b83d7110b560",
"flutter_bootstrap.js": "6fa44c161bce82ca38f803b313abef99",
"main.dart.js": "fa231e4705404d5d95bd85947d84fbe1",
"version.json": "1c3b5a2cf75c8a21333b5d1004a7f382",
"manifest.json": "5f1150696b7bbee3aa0e32dc8f76ad4d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "63d324d31457d6b10269b00e20e483b3",
"assets/AssetManifest.json": "35bff1c6d89f172d3f27aa8985693c65",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/images/cluster-m3.png": "1fe61f047f33256e0157aaaaf4214b0e",
"assets/images/cluster-m2.png": "d3801cec985639a5ac990492a5a90d53",
"assets/images/cluster-m1.png": "0ce06a163b26a8d79e9d15fa3f6ba127",
"assets/NOTICES": "3fb13e23fd83b1fdaed68bc37f05c656",
"assets/AssetManifest.bin": "d5bcbb0a987e262d1ac66b80382c24fe",
"assets/AssetManifest.bin.json": "1492188b7042b982c2ec1d8ebe0874d1",
"assets/web/assets/images/cluster-m3.png": "1fe61f047f33256e0157aaaaf4214b0e",
"assets/web/assets/images/cluster-m2.png": "d3801cec985639a5ac990492a5a90d53",
"assets/web/assets/images/cluster-m1.png": "0ce06a163b26a8d79e9d15fa3f6ba127",
"assets/assets/images/sprite.png": "d656f7df8951f73073e7220e8bd180bd",
"assets/assets/images/truck-active-sprite-old.png": "b6c5b537db337d565d79183936a6d81e",
"assets/assets/images/cluster-m3.png": "1fe61f047f33256e0157aaaaf4214b0e",
"assets/assets/images/cluster-m2.png": "d3801cec985639a5ac990492a5a90d53",
"assets/assets/images/truck-active-sprite.png": "2dd34adca27cec79ba9da90432bb49d2",
"assets/assets/images/sprite-active.png": "09d0792416fed7893f4b574066daaa2c",
"assets/assets/images/cluster-m1.png": "0ce06a163b26a8d79e9d15fa3f6ba127",
"assets/assets/icons/checker.svg": "08354a7093e58bb17ae8409f2c9231a0",
"assets/assets/icons/asset.svg": "f79483fe25c3581adf1f6effd6996d01",
"assets/assets/icons/events.svg": "fb639c9005089bf1e34e9b73c444e933",
"assets/assets/icons/menu.svg": "ccd1c1271054fffb0456a26e32113ee1",
"assets/assets/icons/media.svg": "44c3bd60e62e48ab40f15ccd9f6d931c",
"assets/assets/icons/alerts.svg": "d3361d49bd20033f7addf2fffabdba32",
"assets/assets/icons/activity.svg": "68e2c1adb73b196625317bb7d163e130",
"assets/assets/icons/filter.svg": "3b54a3167d944aafa889c9b4b952184a",
"assets/assets/icons/visible.svg": "6630d7abfb5b63d0c38e59385e1dc060",
"assets/assets/icons/position.svg": "cd4d9ad42c2e73c4edfef46f362b1225",
"assets/assets/icons/active.svg": "a6a674072038618650afbb2dbff5e535",
"assets/assets/icons/inactive.svg": "33fac7783e53a379599ca532b89c65bb",
"assets/assets/icons/hidden.svg": "038cde5d5c900ab4889a1034aae7161a",
"assets/assets/icons/star.svg": "2f6dbc0a52a14997ed20197b43bdb74e",
"assets/assets/icons/truck-sprite-active.png": "b6c5b537db337d565d79183936a6d81e",
"assets/assets/fonts/Ubuntu-Medium.ttf": "d3c3b35e6d478ed149f02fad880dd359",
"assets/assets/fonts/Ubuntu-Regular.ttf": "84ea7c5c9d2fa40c070ccb901046117d",
"assets/assets/fonts/Ubuntu-Bold.ttf": "896a60219f6157eab096825a0c9348a8",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "236c5516b45cfaccf58d64935713b413",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"flutter.js": "76f08d47ff9f5715220992f993002504"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
