const CACHE_VERSION = "personaltravel-v29";
const SHELL_CACHE = `${CACHE_VERSION}-shell`;
const RUNTIME_CACHE = `${CACHE_VERSION}-runtime`;

const SHELL_ASSETS = [
  "./",
  "./index.html",
  "./styles.css?v=29",
  "./app.js?v=29",
  "./manifest.webmanifest",
  "./assets/source-plan.png",
  "./assets/pwa/icon.svg",
  "./assets/pwa/icon-1024.png",
  "./assets/pwa/icon-512.png",
  "./assets/pwa/icon-192.png",
  "./assets/pwa/apple-touch-icon.png",
  "./assets/izu-airbnb/798195306203615931.jpg",
  "./assets/izu-airbnb/1336148406178050383.jpg",
  "./assets/izu-airbnb/608834356948781974.jpg",
  "./assets/izu-airbnb/1712965482025364080.jpg",
  "./assets/izu-airbnb/1475078324740559322.jpg",
  "./assets/izu-airbnb/1499550086382233141.jpg",
  "./assets/izu-airbnb/1718507997380466778.jpg",
  "./assets/izu-airbnb/20396837.jpg",
  "./assets/izu-airbnb/1694267056997994017.jpg",
  "./assets/izu-airbnb/1606254149439535407.jpg",
  "./assets/izu-airbnb/24456092.jpg",
  "./assets/izu-airbnb/22034652.jpg",
  "./assets/izu-airbnb/1665760072129389440.jpg",
  "./assets/places/akkeshi.jpg",
  "./assets/places/asahikawa.jpg",
  "./assets/places/biei.jpg",
  "./assets/places/cape-kamui.jpg",
  "./assets/places/cape-nosappu.jpg",
  "./assets/places/furano.jpg",
  "./assets/places/ginza.jpg",
  "./assets/places/hachinohe.jpg",
  "./assets/places/hakodate.jpg",
  "./assets/places/kushiro.jpg",
  "./assets/places/matsushima.jpg",
  "./assets/places/obihiro.jpg",
  "./assets/places/odaiba.jpg",
  "./assets/places/otaru.jpg",
  "./assets/places/sapporo.jpg",
  "./assets/places/seikan.jpg",
  "./assets/places/sendai.jpg",
  "./assets/places/shibuya.jpg",
  "./assets/places/shin-aomori.jpg",
  "./assets/places/tokyo.jpg",
  "./assets/places/yoichi.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then((cache) => cache.addAll(SHELL_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => !key.startsWith(CACHE_VERSION)).map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

async function cacheFirst(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cache.match(request);
  if (cached) return cached;

  const response = await fetch(request);
  if (response && (response.ok || response.type === "opaque")) {
    cache.put(request, response.clone()).catch(() => {});
  }
  return response;
}

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response && (response.ok || response.type === "opaque")) {
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put(request, response.clone()).catch(() => {});
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    if (cached) return cached;
    return caches.match("./index.html");
  }
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  const isSameOrigin = url.origin === self.location.origin;
  const isDocument = request.mode === "navigate" || request.destination === "document";
  const isStaticAsset =
    isSameOrigin &&
    (url.pathname === "/" ||
      /\.(?:css|js|png|jpe?g|svg|webmanifest|json)$/i.test(url.pathname) ||
      url.pathname.startsWith("/assets/"));

  if (isDocument) {
    event.respondWith(networkFirst(request));
    return;
  }

  if (request.destination === "image") {
    event.respondWith(cacheFirst(request).catch(() => caches.match("./assets/pwa/icon.svg")));
    return;
  }

  if (request.destination === "script" || request.destination === "style" || isStaticAsset) {
    event.respondWith(cacheFirst(request).catch(() => Response.error()));
    return;
  }
});
