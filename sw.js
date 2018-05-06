importScripts('/nuxt-test/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-test",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/nuxt-test/_nuxt/app.8becadd79fac0b36f18d.js",
    "revision": "17e4441c8cba29ed6a25a8da3d75f1f4"
  },
  {
    "url": "/nuxt-test/_nuxt/app.b0666db0e6bc2215e019b0625f10c136.css",
    "revision": "b0666db0e6bc2215e019b0625f10c136"
  },
  {
    "url": "/nuxt-test/_nuxt/layouts/default.49272529e8e9ef143be3.js",
    "revision": "767927214b1adee2b0a5bf026756e393"
  },
  {
    "url": "/nuxt-test/_nuxt/manifest.d2d6425caebba21a4864.js",
    "revision": "0447e6eedb6041241bef46858673f07d"
  },
  {
    "url": "/nuxt-test/_nuxt/pages/index.92feb8f37076d1a3a169.js",
    "revision": "f38dbe14f42f272afb09a5d50a5f4f23"
  },
  {
    "url": "/nuxt-test/_nuxt/pages/map.a6cb10d4a99f023007c2.js",
    "revision": "521331f05d03a3d7d9fc4e8110793737"
  },
  {
    "url": "/nuxt-test/_nuxt/vendor.a1fbe497b901679f4732.js",
    "revision": "6a5140522c4061abb259ba8bd6d398a1"
  }
])


workboxSW.router.registerRoute(new RegExp('/nuxt-test/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/nuxt-test/.*'), workboxSW.strategies.networkFirst({}), 'GET')

