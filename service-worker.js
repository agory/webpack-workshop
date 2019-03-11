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
    "revision": "8b30f8044f32e3c452d5842f7f653275"
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
    "url": "assets/js/11.e1b02516.js",
    "revision": "4b97dd1fc8e22bb7c93b7b5c67c91955"
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
    "url": "assets/js/app.385e10bd.js",
    "revision": "19db595caa2f7abc31a7c0e0cf1288e2"
  },
  {
    "url": "assets/js/vendors~docsearch.00f64713.js",
    "revision": "3ebbff0dad030626810d83cc4bf09f16"
  },
  {
    "url": "index.html",
    "revision": "2642e623a5fbdd3db268b75852298008"
  },
  {
    "url": "webpack.png",
    "revision": "afd4bdae0a6e044c13265facddc23e4f"
  },
  {
    "url": "workshops/advanced/index.html",
    "revision": "5cfa514473c15028442ddd572295a5ed"
  },
  {
    "url": "workshops/advanced/plugins.html",
    "revision": "41466de7d8382ae8b2c8601aa8dfb33d"
  },
  {
    "url": "workshops/index.html",
    "revision": "35121019664abb9a84262bd36c50ff0b"
  },
  {
    "url": "workshops/intermediate/babel.html",
    "revision": "1482163c86b9ce67ca3f5e23cda17e35"
  },
  {
    "url": "workshops/intermediate/compression.html",
    "revision": "93e3abf992183f77e72889eb1bca20aa"
  },
  {
    "url": "workshops/intermediate/dev.html",
    "revision": "07ed83cc89ef40ea8e4c5908d7134df9"
  },
  {
    "url": "workshops/intermediate/index.html",
    "revision": "16d1b19b6e512e6fd5a5587be24ab9d9"
  },
  {
    "url": "workshops/intermediate/intermediate-koans.html",
    "revision": "f9474d2f97d449cdd887d987648228d9"
  },
  {
    "url": "workshops/intermediate/modern-build.html",
    "revision": "91c1f0c424edfc60934dfaa8f9273c13"
  },
  {
    "url": "workshops/intermediate/reduce-bundle-size.html",
    "revision": "f6ee72608442b7b61e7309a41cd34f68"
  },
  {
    "url": "workshops/intermediate/style.html",
    "revision": "44388b761e4c70149ab0481f15c66332"
  },
  {
    "url": "workshops/novice/basics.html",
    "revision": "df895fbd4c08c9bfb8eeb3df006ea62a"
  },
  {
    "url": "workshops/novice/code-assets.html",
    "revision": "9ac0324bc9e7a3d48ffa9bfc09c4d456"
  },
  {
    "url": "workshops/novice/index.html",
    "revision": "f2b18b9818d6341e86b119ce147c7ae6"
  },
  {
    "url": "workshops/novice/novice-koans.html",
    "revision": "4f3976f2a6cab40be2f2ef3b67ae11ec"
  },
  {
    "url": "workshops/novice/outputs.html",
    "revision": "0e4ff3456ba2e1d2979324f9b50a6730"
  },
  {
    "url": "workshops/novice/static-assets.html",
    "revision": "60f31994ebf74d03378e61db6eeb5c56"
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
