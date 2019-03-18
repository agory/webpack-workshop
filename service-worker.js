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
    "revision": "16b17fa40fc25b40dd322c09d6e3abfb"
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
    "url": "assets/js/app.3d643492.js",
    "revision": "227689ccab2a9932b251d4c61d5f6dc8"
  },
  {
    "url": "assets/js/vendors~docsearch.00f64713.js",
    "revision": "3ebbff0dad030626810d83cc4bf09f16"
  },
  {
    "url": "index.html",
    "revision": "1a97fc278801b8d4910167af962aac49"
  },
  {
    "url": "webpack.png",
    "revision": "afd4bdae0a6e044c13265facddc23e4f"
  },
  {
    "url": "workshops/advanced/index.html",
    "revision": "b362bd673840ac18cca49680272c9924"
  },
  {
    "url": "workshops/advanced/plugins.html",
    "revision": "3f24af00b77cc00c4360d54d709c86ef"
  },
  {
    "url": "workshops/index.html",
    "revision": "6124ad6a19f6d862608222bd93d6c20b"
  },
  {
    "url": "workshops/intermediate/babel.html",
    "revision": "bd29e1fc10d57624fdceb379ff3d3dc2"
  },
  {
    "url": "workshops/intermediate/compression.html",
    "revision": "3ea036e1a66969f02e05e32da0f76e15"
  },
  {
    "url": "workshops/intermediate/dev.html",
    "revision": "167ce742d0b9d11a61b3bf1d6fadd182"
  },
  {
    "url": "workshops/intermediate/index.html",
    "revision": "c893ba70d867f184f2dd60d8c8b44056"
  },
  {
    "url": "workshops/intermediate/intermediate-koans.html",
    "revision": "8833edff333a8d35047a2f2c8761bfb6"
  },
  {
    "url": "workshops/intermediate/modern-build.html",
    "revision": "f9e82511b87594f435ca7104691045cb"
  },
  {
    "url": "workshops/intermediate/reduce-bundle-size.html",
    "revision": "c8b1eedf7488c3e798b5a746dc96fa7e"
  },
  {
    "url": "workshops/intermediate/style.html",
    "revision": "27d51589ac8d201938af954824710400"
  },
  {
    "url": "workshops/novice/basics.html",
    "revision": "cecbc092ce10a3639df430ce074b4632"
  },
  {
    "url": "workshops/novice/code-assets.html",
    "revision": "148cef84121eb285ff35764c47fc9e57"
  },
  {
    "url": "workshops/novice/index.html",
    "revision": "7ba57cf801171ee9966d14e9df130e1e"
  },
  {
    "url": "workshops/novice/novice-koans.html",
    "revision": "6f726263c0fa8273c6be64f75ddb2024"
  },
  {
    "url": "workshops/novice/outputs.html",
    "revision": "afbcf77a30e198ee408061d81bc6bfa8"
  },
  {
    "url": "workshops/novice/static-assets.html",
    "revision": "c087aa268290e9b0a5443c8a47b7b23f"
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
