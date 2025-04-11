'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"manifest.json": "5f1150696b7bbee3aa0e32dc8f76ad4d",
"flutter_bootstrap.js": "dd640063c7124523f17870f280b40d47",
"index.html": "b293c782bf2f75f159a7b83d7110b560",
"/": "b293c782bf2f75f159a7b83d7110b560",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"assets/AssetManifest.bin": "b1c5efa34d610701805578b5bf5b3677",
"assets/AssetManifest.json": "97d76bfa1f206546c7ebc86a94400838",
"assets/AssetManifest.bin.json": "413b20a6a233f4bc6b0e5f57dc30542c",
"assets/icons/stop-pin.png": "4ea14dc35a5775913d3f5025bf671160",
"assets/icons/alert-pin.png": "ef566cfd066ddd002d98a31b0cb7096d",
"assets/FontManifest.json": "63d324d31457d6b10269b00e20e483b3",
"assets/assets/icons/idle.svg": "08133d36a3371027f5266c7e1e1b27ec",
"assets/assets/icons/chevron-left.svg": "e8af2373f34a260542ffb60b691f9a86",
"assets/assets/icons/activity.svg": "68e2c1adb73b196625317bb7d163e130",
"assets/assets/icons/stop-pin.png": "4ea14dc35a5775913d3f5025bf671160",
"assets/assets/icons/position-trip.svg": "f9f8f4d03bb4d8f85a4cb005aa73188a",
"assets/assets/icons/chevron-right.svg": "9407ba9dff2c0bde759995e72ce2442e",
"assets/assets/icons/live-stream.svg": "47978d5eb234b748fe826c4ea0a6dc64",
"assets/assets/icons/star.svg": "3ff1b1161d35f1a3aa712ac8a2dcda5c",
"assets/assets/icons/latest.svg": "3ec7228929919f7ff692d43aecf89743",
"assets/assets/icons/events.svg": "fb639c9005089bf1e34e9b73c444e933",
"assets/assets/icons/menu.svg": "ccd1c1271054fffb0456a26e32113ee1",
"assets/assets/icons/alerts.svg": "d3361d49bd20033f7addf2fffabdba32",
"assets/assets/icons/inactive.svg": "33fac7783e53a379599ca532b89c65bb",
"assets/assets/icons/position.svg": "cd4d9ad42c2e73c4edfef46f362b1225",
"assets/assets/icons/hidden.svg": "038cde5d5c900ab4889a1034aae7161a",
"assets/assets/icons/moving.svg": "0f18eddd58cb6deac7d71f4ee558b8b7",
"assets/assets/icons/checker.svg": "08354a7093e58bb17ae8409f2c9231a0",
"assets/assets/icons/media.svg": "44c3bd60e62e48ab40f15ccd9f6d931c",
"assets/assets/icons/alert-pin.png": "ef566cfd066ddd002d98a31b0cb7096d",
"assets/assets/icons/parked.svg": "8ca3196be3ee526d4dc27a696202888b",
"assets/assets/icons/snapshot.svg": "f8bd9f74b898b3f3937f4ea69aec4699",
"assets/assets/icons/eye-open.svg": "6630d7abfb5b63d0c38e59385e1dc060",
"assets/assets/icons/asset.svg": "f79483fe25c3581adf1f6effd6996d01",
"assets/assets/icons/eye-closed.svg": "aacd9780ca05db3c15553483a66e6af6",
"assets/assets/icons/filter.svg": "3b54a3167d944aafa889c9b4b952184a",
"assets/assets/images/truck-moving-sprite.png": "2dd34adca27cec79ba9da90432bb49d2",
"assets/assets/images/cluster-m2.png": "d3801cec985639a5ac990492a5a90d53",
"assets/assets/images/truck-idle-sprite.png": "d1370a5c4181c2dc66704e89ea174b11",
"assets/assets/images/cluster-m1.png": "0ce06a163b26a8d79e9d15fa3f6ba127",
"assets/assets/images/truck-inactive-sprite.png": "395c4df7b631d7624e87a861d1bee712",
"assets/assets/images/truck-parked-sprite.png": "510ccfb89eb267624d48f2ac4c845bfe",
"assets/assets/images/cluster-m3.png": "1fe61f047f33256e0157aaaaf4214b0e",
"assets/assets/fonts/Ubuntu-Regular.ttf": "84ea7c5c9d2fa40c070ccb901046117d",
"assets/assets/fonts/Ubuntu-Bold.ttf": "896a60219f6157eab096825a0c9348a8",
"assets/assets/fonts/Ubuntu-Medium.ttf": "d3c3b35e6d478ed149f02fad880dd359",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/web/assets/icons/stop-pin.png": "4ea14dc35a5775913d3f5025bf671160",
"assets/web/assets/icons/alert-pin.png": "ef566cfd066ddd002d98a31b0cb7096d",
"assets/web/assets/images/cluster-m2.png": "d3801cec985639a5ac990492a5a90d53",
"assets/web/assets/images/cluster-m1.png": "0ce06a163b26a8d79e9d15fa3f6ba127",
"assets/web/assets/images/cluster-m3.png": "1fe61f047f33256e0157aaaaf4214b0e",
"assets/NOTICES": "3fb13e23fd83b1fdaed68bc37f05c656",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/images/cluster-m2.png": "d3801cec985639a5ac990492a5a90d53",
"assets/images/cluster-m1.png": "0ce06a163b26a8d79e9d15fa3f6ba127",
"assets/images/cluster-m3.png": "1fe61f047f33256e0157aaaaf4214b0e",
"assets/fonts/MaterialIcons-Regular.otf": "236c5516b45cfaccf58d64935713b413",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js": "6b09a9e918670a30875c463f43d6c56f",
"version.json": "1c3b5a2cf75c8a21333b5d1004a7f382",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"};
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
