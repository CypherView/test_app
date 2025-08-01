'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"manifest.json": "5f1150696b7bbee3aa0e32dc8f76ad4d",
"assets/icons/stop-pin.png": "4ea14dc35a5775913d3f5025bf671160",
"assets/icons/alert-pin.png": "ef566cfd066ddd002d98a31b0cb7096d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/FontManifest.json": "63d324d31457d6b10269b00e20e483b3",
"assets/AssetManifest.json": "1fb6d7b9a44abf0d6e09e4e78f998e90",
"assets/assets/icons/asset.svg": "f79483fe25c3581adf1f6effd6996d01",
"assets/assets/icons/eye-closed.svg": "aacd9780ca05db3c15553483a66e6af6",
"assets/assets/icons/stop-pin.png": "4ea14dc35a5775913d3f5025bf671160",
"assets/assets/icons/idle.svg": "08133d36a3371027f5266c7e1e1b27ec",
"assets/assets/icons/end-marker.svg": "d9c2998306e3079a3bec890b7a74d5c9",
"assets/assets/icons/hidden.svg": "038cde5d5c900ab4889a1034aae7161a",
"assets/assets/icons/telemetry.svg": "683c337d82f4fbd793ff877f51e1aea4",
"assets/assets/icons/navigation.svg": "7d7f5f94958c91e593fa53f0e62da1f6",
"assets/assets/icons/activity.svg": "68e2c1adb73b196625317bb7d163e130",
"assets/assets/icons/position-trip.svg": "f9f8f4d03bb4d8f85a4cb005aa73188a",
"assets/assets/icons/live-stream.svg": "47978d5eb234b748fe826c4ea0a6dc64",
"assets/assets/icons/position.svg": "d1209f9eb4a0bff17bb708e3dcc68373",
"assets/assets/icons/filter.svg": "3b54a3167d944aafa889c9b4b952184a",
"assets/assets/icons/parked.svg": "8ca3196be3ee526d4dc27a696202888b",
"assets/assets/icons/chevron-right.svg": "9407ba9dff2c0bde759995e72ce2442e",
"assets/assets/icons/trip.svg": "2b712b98e333af2a18d13e6d1e439c97",
"assets/assets/icons/eye-open.svg": "6630d7abfb5b63d0c38e59385e1dc060",
"assets/assets/icons/latest.svg": "3ec7228929919f7ff692d43aecf89743",
"assets/assets/icons/media.svg": "44c3bd60e62e48ab40f15ccd9f6d931c",
"assets/assets/icons/alert-pin.png": "ef566cfd066ddd002d98a31b0cb7096d",
"assets/assets/icons/star.svg": "3ff1b1161d35f1a3aa712ac8a2dcda5c",
"assets/assets/icons/chevron-left.svg": "e8af2373f34a260542ffb60b691f9a86",
"assets/assets/icons/snapshot.svg": "f8bd9f74b898b3f3937f4ea69aec4699",
"assets/assets/icons/checker.svg": "08354a7093e58bb17ae8409f2c9231a0",
"assets/assets/icons/moving.svg": "0f18eddd58cb6deac7d71f4ee558b8b7",
"assets/assets/icons/details.svg": "b1066ccefbf33a4554b50958aba60065",
"assets/assets/icons/alerts.svg": "d3361d49bd20033f7addf2fffabdba32",
"assets/assets/icons/start-marker.svg": "1c05863b0695109b843898ba6467dbf9",
"assets/assets/icons/menu.svg": "ccd1c1271054fffb0456a26e32113ee1",
"assets/assets/icons/inactive.svg": "33fac7783e53a379599ca532b89c65bb",
"assets/assets/icons/events.svg": "fb639c9005089bf1e34e9b73c444e933",
"assets/assets/images/ambulance-small-sprite.png": "b9d1791a4dc8c48345a93d17dc54a855",
"assets/assets/images/truck-idle-sprite.png": "d1370a5c4181c2dc66704e89ea174b11",
"assets/assets/images/truck-active-sprite.png": "2dd34adca27cec79ba9da90432bb49d2",
"assets/assets/images/lawn-mower-sprite.png": "eed352144097ad02b92d4d88e20e4bcb",
"assets/assets/images/truck-moving-sprite.png": "2dd34adca27cec79ba9da90432bb49d2",
"assets/assets/images/Van%2520(small)%2520Sprite%2520Sheet.png": "ff16f8723437e0f76767dd9deed1cb6e",
"assets/assets/images/pickup-truck-sprite.png": "e480c7b73c332a986da09afe6a77d389",
"assets/assets/images/cluster-m1.png": "0ce06a163b26a8d79e9d15fa3f6ba127",
"assets/assets/images/school-bus-small-sprite.png": "cdfc1785929a03da798d39ab7d3a16d6",
"assets/assets/images/ambulance-sprite.png": "6836eb097ee534b18e8d8904ca846ac3",
"assets/assets/images/car-sprite.png": "9e06a5acd0133ed2da88c43c461217ec",
"assets/assets/images/default-parked-asset.png": "af73b14e86bc6a8e7ecfcc7a9bd340a8",
"assets/assets/images/parcel-sprite.png": "6f1604627148ee5914ae814163c2b45e",
"assets/assets/images/truck-parked-sprite.png": "510ccfb89eb267624d48f2ac4c845bfe",
"assets/assets/images/excavator-sprite.png": "d5c12d655748d798baa7c452eb0e7825",
"assets/assets/images/tractor-sprite.png": "01a52a2cf52f34dd776961db209c72ea",
"assets/assets/images/trip-stop-color.png": "6168d4fcbb030fcdf0574f338f705881",
"assets/assets/images/trip-end-color.png": "e8799c649a7619fd75e0405084246881",
"assets/assets/images/school-bus-sprite.png": "6b7fbd58aa9d6cc761f016ae8a814ae1",
"assets/assets/images/dump-truck-sprite.png": "50dcd9f4610c3f4b68eafababa6d420f",
"assets/assets/images/trip-end-bw.png": "23bb79b82588e63b567700877a51cbc5",
"assets/assets/images/Truck%2520(small)%2520Sprite%2520Sheet.png": "b47e6939f7f9589173913f30ce4948c2",
"assets/assets/images/Van%2520Sprite%2520Sheet.png": "7348c6036b5d35c78a5439f94b90ea23",
"assets/assets/images/trip-alert-color.png": "3c2b099b094ae8abcfb106647595d19d",
"assets/assets/images/cement-mixer-sprite.png": "84621915189627b51149f4a89d1fdb9c",
"assets/assets/images/cluster-low.png": "cbf030421a25f9b717fc676e64eff4c8",
"assets/assets/images/cluster-m3.png": "1fe61f047f33256e0157aaaaf4214b0e",
"assets/assets/images/haul-truck-sprite.png": "6f52c7f6985421299b69feea9b6ebcea",
"assets/assets/images/default-idle-asset.png": "938140d42364bc2de711f86a22935280",
"assets/assets/images/truck-active-sprite-old.png": "b6c5b537db337d565d79183936a6d81e",
"assets/assets/images/bus-sprite.png": "9f361a64d504a3f4806fe15da20202cd",
"assets/assets/images/motorcycle-sprite.png": "367cd0ae1ff1623117ad72f79679372c",
"assets/assets/images/airplane-sprite.png": "5e19cba732d1641948e8478be561b112",
"assets/assets/images/trip-start-color.png": "7ddc4bf756fb16867ae96cd6af1df321",
"assets/assets/images/trip-start-bw.png": "0460f4a8de67a31af1413ef83613f4c3",
"assets/assets/images/cluster-heavy.png": "91cd76c31c13ff7efb7445408ff7d648",
"assets/assets/images/default-moving-asset.png": "32c08a71ac7922f7fbf4e9ecf3fdb46e",
"assets/assets/images/Truck%2520Sprite%2520Sheet.png": "fe99e311bd72046eba6c55beaa59505e",
"assets/assets/images/trip-stop-bw.png": "52e3c18bf4ab27c9578eb6097ee3f1d1",
"assets/assets/images/truck-inactive-sprite.png": "395c4df7b631d7624e87a861d1bee712",
"assets/assets/images/cluster-medium.png": "36eb9eaa7dac6722b8eefc1260e070c2",
"assets/assets/images/trip-alert-bw.png": "e070af3269bee0eb1fd8cd4dc6d14406",
"assets/assets/images/cluster-m2.png": "d3801cec985639a5ac990492a5a90d53",
"assets/assets/fonts/Ubuntu-Regular.ttf": "84ea7c5c9d2fa40c070ccb901046117d",
"assets/assets/fonts/Ubuntu-Medium.ttf": "d3c3b35e6d478ed149f02fad880dd359",
"assets/assets/fonts/Ubuntu-Bold.ttf": "896a60219f6157eab096825a0c9348a8",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/web/assets/icons/stop-pin.png": "4ea14dc35a5775913d3f5025bf671160",
"assets/web/assets/icons/alert-pin.png": "ef566cfd066ddd002d98a31b0cb7096d",
"assets/web/assets/images/cluster-m1.png": "0ce06a163b26a8d79e9d15fa3f6ba127",
"assets/web/assets/images/default-parked-asset.png": "af73b14e86bc6a8e7ecfcc7a9bd340a8",
"assets/web/assets/images/trip-stop-color.png": "6168d4fcbb030fcdf0574f338f705881",
"assets/web/assets/images/trip-end-color.png": "e8799c649a7619fd75e0405084246881",
"assets/web/assets/images/trip-end-bw.png": "23bb79b82588e63b567700877a51cbc5",
"assets/web/assets/images/trip-alert-color.png": "3c2b099b094ae8abcfb106647595d19d",
"assets/web/assets/images/cluster-low.png": "cbf030421a25f9b717fc676e64eff4c8",
"assets/web/assets/images/cluster-m3.png": "1fe61f047f33256e0157aaaaf4214b0e",
"assets/web/assets/images/default-idle-asset.png": "938140d42364bc2de711f86a22935280",
"assets/web/assets/images/airplane-sprite.png": "5e19cba732d1641948e8478be561b112",
"assets/web/assets/images/trip-start-color.png": "7ddc4bf756fb16867ae96cd6af1df321",
"assets/web/assets/images/trip-start-bw.png": "0460f4a8de67a31af1413ef83613f4c3",
"assets/web/assets/images/cluster-heavy.png": "91cd76c31c13ff7efb7445408ff7d648",
"assets/web/assets/images/default-moving-asset.png": "32c08a71ac7922f7fbf4e9ecf3fdb46e",
"assets/web/assets/images/trip-stop-bw.png": "52e3c18bf4ab27c9578eb6097ee3f1d1",
"assets/web/assets/images/cluster-medium.png": "36eb9eaa7dac6722b8eefc1260e070c2",
"assets/web/assets/images/trip-alert-bw.png": "e070af3269bee0eb1fd8cd4dc6d14406",
"assets/web/assets/images/cluster-m2.png": "d3801cec985639a5ac990492a5a90d53",
"assets/images/cluster-m1.png": "0ce06a163b26a8d79e9d15fa3f6ba127",
"assets/images/default-parked-asset.png": "af73b14e86bc6a8e7ecfcc7a9bd340a8",
"assets/images/trip-stop-color.png": "6168d4fcbb030fcdf0574f338f705881",
"assets/images/trip-end-color.png": "e8799c649a7619fd75e0405084246881",
"assets/images/trip-end-bw.png": "23bb79b82588e63b567700877a51cbc5",
"assets/images/trip-alert-color.png": "3c2b099b094ae8abcfb106647595d19d",
"assets/images/cluster-low.png": "cbf030421a25f9b717fc676e64eff4c8",
"assets/images/cluster-m3.png": "1fe61f047f33256e0157aaaaf4214b0e",
"assets/images/default-idle-asset.png": "938140d42364bc2de711f86a22935280",
"assets/images/airplane-sprite.png": "5e19cba732d1641948e8478be561b112",
"assets/images/trip-start-color.png": "7ddc4bf756fb16867ae96cd6af1df321",
"assets/images/trip-start-bw.png": "0460f4a8de67a31af1413ef83613f4c3",
"assets/images/cluster-heavy.png": "91cd76c31c13ff7efb7445408ff7d648",
"assets/images/default-moving-asset.png": "32c08a71ac7922f7fbf4e9ecf3fdb46e",
"assets/images/trip-stop-bw.png": "52e3c18bf4ab27c9578eb6097ee3f1d1",
"assets/images/cluster-medium.png": "36eb9eaa7dac6722b8eefc1260e070c2",
"assets/images/trip-alert-bw.png": "e070af3269bee0eb1fd8cd4dc6d14406",
"assets/images/cluster-m2.png": "d3801cec985639a5ac990492a5a90d53",
"assets/AssetManifest.bin": "c197b3c2ee7e4388597e05612375c237",
"assets/fonts/MaterialIcons-Regular.otf": "367d55331e5852e8c86230812636d67e",
"assets/NOTICES": "1879ef8c81dc9e1ab735d0c51b4b4801",
"assets/AssetManifest.bin.json": "2f6f8f7727881a7422d2d0e9a2aa6dc2",
"main.dart.js": "d8dcdb911c7350003e713a3ceb65e125",
"version.json": "1c3b5a2cf75c8a21333b5d1004a7f382",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "8fa3c54bb1ea076e001c82ccc0872230",
"/": "8fa3c54bb1ea076e001c82ccc0872230",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"flutter_bootstrap.js": "8e7299dbd0929189aaed75cd6b7d4fcc"};
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
