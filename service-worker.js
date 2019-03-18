/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fcbe95959b9dc7ed8e456784fee42b74"
  },
  {
    "url": "assets/css/0.styles.0fc81441.css",
    "revision": "3f24108f5a0d6cbfba7705e5ae09915c"
  },
  {
    "url": "assets/img/build.9b8923a2.png",
    "revision": "9b8923a23e67b9af37a210ec8c885de8"
  },
  {
    "url": "assets/img/elias-arnar-1309173-unsplash.9f515127.jpg",
    "revision": "9f515127f88325714cbe59740f5b99bc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.56b9ab52.js",
    "revision": "d91704a95fe113daa5c77e8edf80da62"
  },
  {
    "url": "assets/js/11.67ad69d3.js",
    "revision": "060729b68b280e5e6bf9381f7e91076a"
  },
  {
    "url": "assets/js/12.cb5e20a8.js",
    "revision": "564d0a23b72d0f52b101b9665efd3235"
  },
  {
    "url": "assets/js/13.b8537385.js",
    "revision": "997feed72e4a2862b69cdd6b54364879"
  },
  {
    "url": "assets/js/14.201dd57b.js",
    "revision": "12d9ef6f7ac3cd6b6f682aeb8a7efda8"
  },
  {
    "url": "assets/js/15.0dd97514.js",
    "revision": "332cbd09c5408123b88bfd85486d8edd"
  },
  {
    "url": "assets/js/16.22f0fd66.js",
    "revision": "e6e447b7b5775c64d23c69e4a18c6030"
  },
  {
    "url": "assets/js/17.7cbf421d.js",
    "revision": "90e3d1b78b1edc7b822c80ecbf69faa2"
  },
  {
    "url": "assets/js/18.07875d8d.js",
    "revision": "01e510e0eae422e309dde2c8768d9962"
  },
  {
    "url": "assets/js/19.cce49612.js",
    "revision": "6f73b9fb691058c076c84215fc7c4595"
  },
  {
    "url": "assets/js/20.52d75d80.js",
    "revision": "9208fe36b24e6b0a3961e2fd22792b0e"
  },
  {
    "url": "assets/js/21.33884c81.js",
    "revision": "04f59fda410a6b2c43dd9322282839f5"
  },
  {
    "url": "assets/js/22.236e6bf9.js",
    "revision": "6dc718e95864a88ea5562db5f1b742d8"
  },
  {
    "url": "assets/js/23.18237e92.js",
    "revision": "c0d3045e0a8c8c81ac9c562c806a7712"
  },
  {
    "url": "assets/js/24.4e8ecd49.js",
    "revision": "279a0eb77eb2312d8949b11e486fc276"
  },
  {
    "url": "assets/js/25.0882b16e.js",
    "revision": "140898ddec6c79099fe2fea7e50c9d26"
  },
  {
    "url": "assets/js/3.9555c53d.js",
    "revision": "2c90d612da5bc88baca27e398f7872d2"
  },
  {
    "url": "assets/js/4.25aafd6c.js",
    "revision": "e33f14853bba29fd5622d931d34a6d94"
  },
  {
    "url": "assets/js/5.56c40b37.js",
    "revision": "d4fd25080c0ce759c6cf7b272db570f4"
  },
  {
    "url": "assets/js/6.9a25c8bd.js",
    "revision": "5aea5b933c6dd88c7dd055db1141c56b"
  },
  {
    "url": "assets/js/7.165fc34d.js",
    "revision": "14d74209d35374391e100b19a2b7d6f8"
  },
  {
    "url": "assets/js/8.a23d654b.js",
    "revision": "244bdcb866fe75e63f234083293dcbf0"
  },
  {
    "url": "assets/js/9.59b97a18.js",
    "revision": "d2d470c65ffefb3e6706be663d2b96a7"
  },
  {
    "url": "assets/js/app.a0e50d75.js",
    "revision": "771e02978c10ac039e254855d27807ac"
  },
  {
    "url": "assets/js/vendors~docsearch.00f64713.js",
    "revision": "3ebbff0dad030626810d83cc4bf09f16"
  },
  {
    "url": "index.html",
    "revision": "98d461dfb017f793af438589d9ba6c4a"
  },
  {
    "url": "webpack.png",
    "revision": "afd4bdae0a6e044c13265facddc23e4f"
  },
  {
    "url": "workshops/advanced/index.html",
    "revision": "2a04dded503f5925be2b58bd0dc703ff"
  },
  {
    "url": "workshops/advanced/plugins.html",
    "revision": "f28efeac83463aeaca95dd2e1338093a"
  },
  {
    "url": "workshops/index.html",
    "revision": "873f277270d1f44376b41e9ab4aec0f1"
  },
  {
    "url": "workshops/intermediate/babel.html",
    "revision": "819ba4030701489b609442a319f8762b"
  },
  {
    "url": "workshops/intermediate/compression.html",
    "revision": "dd184047afa5f9db0f49294aead12e0b"
  },
  {
    "url": "workshops/intermediate/dev.html",
    "revision": "c1d3e8d3a451a0707383e12f4e5dbdf8"
  },
  {
    "url": "workshops/intermediate/index.html",
    "revision": "b2d450a7cc0cf604f87adc41afa925e2"
  },
  {
    "url": "workshops/intermediate/intermediate-koans.html",
    "revision": "6e9423812e3b841f35d6ab772aae47a3"
  },
  {
    "url": "workshops/intermediate/modern-build.html",
    "revision": "a86297c61f62adce9806073653f92084"
  },
  {
    "url": "workshops/intermediate/reduce-bundle-size.html",
    "revision": "b9a6da4019b37ad7393f6961059184d6"
  },
  {
    "url": "workshops/intermediate/style.html",
    "revision": "456c0994294de7a2df44516615c58f99"
  },
  {
    "url": "workshops/novice/basics.html",
    "revision": "95bb41869f08866223ab62e02f54633d"
  },
  {
    "url": "workshops/novice/code-assets.html",
    "revision": "4011a7eb523de9a86da3285f06eef0d9"
  },
  {
    "url": "workshops/novice/index.html",
    "revision": "c0123309c6b5d32f4a694b2bff14b6a3"
  },
  {
    "url": "workshops/novice/novice-koans.html",
    "revision": "b988ac6f32371135d08a61046aae1029"
  },
  {
    "url": "workshops/novice/outputs.html",
    "revision": "4320f32aa89ae6c8f896185c8a540a34"
  },
  {
    "url": "workshops/novice/static-assets.html",
    "revision": "805eef04fff75905a781a8c9f6513507"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
