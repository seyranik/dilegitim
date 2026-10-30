const CACHE = "yds-kelime-v1";
const FILES = ["./", "index.html", "style.css", "app.js", "words.js"];
self.addEventListener("install", (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", (e) => { e.waitUntil(caches.keys().then((k) => Promise.all(k.filter((x) => x !== CACHE).map((x) => caches.delete(x))))); });
self.addEventListener("fetch", (e) => {
  // önce ağ, olmazsa önbellek (words.js güncellenince hemen görünsün)
  e.respondWith(fetch(e.request).then((r) => { const cp = r.clone(); caches.open(CACHE).then((c) => c.put(e.request, cp)); return r; }).catch(() => caches.match(e.request)));
});
