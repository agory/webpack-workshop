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
    "revision": "ea9332a2fab03641a17683959a14f18d"
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
    "url": "assets/js/23.46a7c872.js",
    "revision": "82db5f588ceff2252f94511a41a2a394"
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
    "url": "assets/js/app.0844c7f4.js",
    "revision": "0754623be793857ad70a6d4109ccd1d0"
  },
  {
    "url": "assets/js/vendors~docsearch.00f64713.js",
    "revision": "3ebbff0dad030626810d83cc4bf09f16"
  },
  {
    "url": "index.html",
    "revision": "c29c946546c0023b51fde064cf0475f2"
  },
  {
    "url": "webpack.png",
    "revision": "afd4bdae0a6e044c13265facddc23e4f"
  },
  {
    "url": "workshops/advanced/index.html",
    "revision": "8b27ab27d68ae0b7ffca1cfb3bfa32a9"
  },
  {
    "url": "workshops/advanced/plugins.html",
    "revision": "b1f37715ca2354579afce414dba0e720"
  },
  {
    "url": "workshops/index.html",
    "revision": "97196e2e0c4e9a45f37757f593779f7d"
  },
  {
    "url": "workshops/intermediate/babel.html",
    "revision": "bc659a730be9cf59338014dec513199b"
  },
  {
    "url": "workshops/intermediate/compression.html",
    "revision": "ccc3c417a0458b1a043c433450fb9741"
  },
  {
    "url": "workshops/intermediate/dev.html",
    "revision": "5d0c6595bc26dccaf1ee3f58b7b384c8"
  },
  {
    "url": "workshops/intermediate/index.html",
    "revision": "ba0aeaa1d693ffa3f67b2d8de32dfb1c"
  },
  {
    "url": "workshops/intermediate/intermediate-koans.html",
    "revision": "75b566bd80ed56fb32192a1db670cc53"
  },
  {
    "url": "workshops/intermediate/modern-build.html",
    "revision": "069935541aedffd32cb3f6d2a9de5bb2"
  },
  {
    "url": "workshops/intermediate/reduce-bundle-size.html",
    "revision": "43939807ea1788e466d7b7152867f095"
  },
  {
    "url": "workshops/intermediate/style.html",
    "revision": "3cf058a94fd8edc575d95ee485f02bd0"
  },
  {
    "url": "workshops/novice/basics.html",
    "revision": "cb06c65cc2c6d0b283936e18459e2e46"
  },
  {
    "url": "workshops/novice/code-assets.html",
    "revision": "1862d1327bcb8e8549d5f9123a7d83b7"
  },
  {
    "url": "workshops/novice/index.html",
    "revision": "691adf77ce5f8738123883ebb7296dc9"
  },
  {
    "url": "workshops/novice/novice-koans.html",
    "revision": "bef7aa707a67f911173a00980cb1d523"
  },
  {
    "url": "workshops/novice/outputs.html",
    "revision": "68d21e053182ad13d92167773bdf2b92"
  },
  {
    "url": "workshops/novice/static-assets.html",
    "revision": "cdeed0ef9aa329541cfe008ed1c050a9"
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
