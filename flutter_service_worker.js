'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "426313f2f3133c2f20415344c4a22df3",
"index.html": "4367a25a52dfea04d82a7d96c2ce0917",
"/": "4367a25a52dfea04d82a7d96c2ce0917",
"main.dart.js": "1479a7da9c2e938b8512c9a1c1f2f449",
"favicon.png": "0c28945a4ef0b0996ef8d870087f7909",
"icons/Icon-192.png": "120122ff56dc87f4a353ba6efbf47342",
"manifest.json": "84824017e05893ed3a1ca41657f674ee",
".git/config": "7b275dca45411d43e2286cc74a94b058",
".git/objects/3e/841c70f7d8e830ca6852547a0f21cbe4a1b874": "689f70e1a1dc74f05600fd1b3fc9cf97",
".git/objects/6f/33b91eca2b6c9b78f1be75a2559772da585ea0": "e88f5fde903d956006a61ad962965dc8",
".git/objects/9b/54f4aac525c34c5e3094672e5e6b754617655d": "c6ab87b693710a09e1f2641813fedc42",
".git/objects/9e/c2defd4a791321ff9aa4aaf48ddb44e5e8bfbb": "89eb6fd142df3b1187c91da765d097f4",
".git/objects/04/fc4f233e7a19f5aab6248bec2f4173f29cd940": "8016d88bfa132f215797b2a776dad60a",
".git/objects/6a/72d769dbb3122399e79e0234d465f10eb4c097": "ba732d3d9c5d73ae34e9c0d662ea67ba",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3d/4966688562d2e8540009b83dfbc386218ee0d5": "553dea39cc732ff1e803e75036d91ef2",
".git/objects/93/7e01f7c59a88565b0abcabcca2a68e55de8cc1": "232477654ae972c17ae9cc2fec868c0a",
".git/objects/94/8218209a1bdd4756bad1f5bd5642f822fc479c": "34b31cb5f198081e20741cd28458492d",
".git/objects/05/9e98a96cd50edeb49ee262ae4e898839d78949": "b97a4ed0c1e988c74ab67b57230ea158",
".git/objects/a2/ed336ce70c9c516c2e80b844c46185d7b5ffff": "4bd019f6373078826d98805b2af6c702",
".git/objects/bc/6fd0883df42f9b269081a02815265fb820f369": "e4741a6cf0b21221854c999398d62955",
".git/objects/ae/b924de02dbedae9bfb8ae3e08c33e3c8fa8ddc": "7a13e71b813877c9162f1a46a75487d6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/f9ae398fd48319caddd2a343ff25fece2bfecd": "b66930e672b1b2cd89b0925c81e4bb12",
".git/objects/eb/7fd0704f9fddba1b9a3c94ce95d8afc699db1e": "639a0a52acc6f2e14d1039ecd397a002",
".git/objects/c7/8b94120585f3bdfa49b550932684093331fea0": "ffb890b57f745ddac044424d66069ff0",
".git/objects/e3/2cd182410a4bde0eefb689d12b4d63cf8b5cdd": "680576ea8cce630f81f142b4fae043fb",
".git/objects/18/03bba36aeed5f4eacb6c5058e118841fb32623": "287a682b0728c38e3743e44268c7364c",
".git/objects/pack/pack-c024afc79b27c852ee20187616812d191b987925.pack": "c6ab2826e6001214e0811770e8e72799",
".git/objects/pack/pack-c024afc79b27c852ee20187616812d191b987925.idx": "b68a7c92a2c2d315f9812cd1d6087958",
".git/objects/42/405a79a2fe2ca204ed39989ff401a248b87e02": "6d4d1b11f2b4851fb6fa9853a7f05ef8",
".git/objects/7b/37c90167c6f8bf25aea4f783d05719744ace5c": "4457ce13568894474d3f209d9b286a2b",
".git/objects/75/dccf3156f77002f47e39d90de32d41645f7e32": "41c9684a59b97a88f8b4e45d6f24e6bf",
".git/objects/75/89054327195d10f023892918536bcb8819c60d": "3127017e3adf80b728516dc8dd8caf87",
".git/objects/44/84ccd5b6f50f449e010aafd43b68316200c3b8": "5d134fc2d19b4247ba191823477dba52",
".git/objects/5d/896683ff72e05031f57fb95e6410213188bad4": "1499be1e44672323c037057ae4bc3ccb",
".git/objects/d3/f3beafb6455ea4adbb790aae87868ef53404b5": "0b9dba50212418bd1214c2075352013c",
".git/objects/d4/5dfdc91f5f2c330a82445a1b7c17ec21007450": "9da9fde21af13b697d3415c89726e950",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b0/f4494a3cb8b01d57c5436276369398441863f1": "fa3309d0bea7e787398f3320abc5c025",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/7c5443d00a1f8153ae8c98fbe655d224138b6b": "7dea27cc125943b621282857946a7e96",
".git/objects/ea/ff6f78adb1cca030260f7c775e98ab2ba50ce0": "62a1e38ae8646ef0673fceba48cdc419",
".git/objects/cc/8277f8fedaa35d18f42c9d2f7a125fbb0031da": "5fdca393c1995cbc27397281754e6635",
".git/objects/c2/82762e8db4fdf781e79a71dfe8da50cf02b7d9": "e9e751c19f57ab71a6ad1baceb8c2fa1",
".git/objects/f6/7cae477c0bdbd913d5fecb2955c56a93c940e9": "109c1e317ecbc3c07af7723c7f8e7740",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/a5b84df6c001f0c9e6354c4dd633b5c3c5d2a1": "4bf35b4d0bebd623333dbe38ef99ba30",
".git/objects/77/ef2e2a13702f1b1dac3b0161a8b6e45f54ce66": "173aed52809d3df80722e77d3d765d83",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/4f/0858abddab68abf3fb013e8db11af3c008aa6e": "cc25c58e205fe08801786ebef2d30a81",
".git/objects/4f/6a3419f52a39bf75f73cc7d1cba63dcbca2eb5": "ebad5abea456bacc86334eea015a7c22",
".git/objects/2e/66a4cd8e9d3f3e70329362c707e36f47ac3e6e": "39d05afd4d2bff759ecc537f8fde2686",
".git/objects/8b/6b69a80921fbfadfa2d70f4390e6cb5e16645e": "04a58de64f25ae302c23978dee990863",
".git/objects/14/31347196d9e1a2e9777a1d47ece8d3da37b0f7": "78d0e0f5a3071fa54cd8a3547799cd94",
".git/objects/25/25ec01d88e4652b94e30a9dce25b40a4a6043b": "61eb99ce6664f7dcaf401f6aff2c5314",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "48589fde85a045d7d8e836b8b39652e5",
".git/logs/refs/heads/master": "48589fde85a045d7d8e836b8b39652e5",
".git/logs/refs/remotes/origin/master": "dbf10769f80cd73de03dfb149d100f15",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "4b0ddf71acf1481b32e8dbe8c13c92ef",
".git/refs/remotes/origin/master": "4b0ddf71acf1481b32e8dbe8c13c92ef",
".git/index": "ab61507c149a0f127428336c13c2544b",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "54e0887f2dd7a4e2cfa2594e198b09e0",
".git/FETCH_HEAD": "74c21b0e4968bac0ff70ed4608404922",
"assets/AssetManifest.json": "6187ba1785d7764d284b97f8e086bf3f",
"assets/NOTICES": "77fe71c189740fcfa50b9909d02dbeca",
"assets/FontManifest.json": "033a33f8be7a0c49396454f49a4529ed",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/flutter.png": "1cd1dbcc8da6406ae27cddd5679fc648",
"assets/assets/images/github.png": "3f1c80f0b830f6bf4eb93fb2ab1b1c7b",
"assets/assets/images/swift.png": "8f1e3e2d3981268bf05b0476cae7972f",
"assets/assets/images/linkedin.png": "ee0f259c6f496dc2f7262cb2c459b2f3",
"assets/assets/images/sketch.png": "512ef4feebe6b30163fdacba612635b3",
"assets/assets/images/xamarin.png": "4f1f3a86ef0c24a0a501182b6236204e",
"assets/assets/fonts/AvenirNext-DemiBold.ttf": "2538a3f00a198337bb2911bd6f3182ae",
"assets/assets/fonts/AvenirNext-UltraLight.ttf": "625949dc90aa745bb357ae6ae8956173",
"assets/assets/fonts/AvenirNext-Regular.ttf": "4d8fdeb265ff6d34fb3bd8e4292665c0",
"assets/assets/fonts/AvenirNext-Medium.ttf": "597381f75a1b983328f95e3966e929f6",
"assets/assets/fonts/AvenirNext-Bold.ttf": "61887e1e950488f7a52971725b2ebda6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
