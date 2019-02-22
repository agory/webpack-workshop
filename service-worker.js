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
    "revision": "831c357e3c63517769424cac3791e471"
  },
  {
    "url": "assets/css/0.styles.446b2bb4.css",
    "revision": "4314c1c4356828b1865c269a2881831d"
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
    "url": "assets/js/10.5b9bcf6c.js",
    "revision": "bac507b8aab1157d6f18f32b9cf36668"
  },
  {
    "url": "assets/js/11.0d8e1bcd.js",
    "revision": "3eb2dcccc9929f0c05fa63214a67b145"
  },
  {
    "url": "assets/js/12.6049b372.js",
    "revision": "0c30675b125bc494679e814126c4b290"
  },
  {
    "url": "assets/js/13.1e91b35f.js",
    "revision": "498e5b4b4be92b76d1301bbb58d57516"
  },
  {
    "url": "assets/js/14.460876df.js",
    "revision": "7cd67d9094d31dc19b1603df5dd123a8"
  },
  {
    "url": "assets/js/15.ba5ad756.js",
    "revision": "b748399826af17bb050885132da5a25d"
  },
  {
    "url": "assets/js/16.58b2cd73.js",
    "revision": "936f2435fc43c5518e48468133270285"
  },
  {
    "url": "assets/js/17.35dc59c3.js",
    "revision": "b7dbfcaf0206390eaf481b865e926ccc"
  },
  {
    "url": "assets/js/18.6b059783.js",
    "revision": "99c19acec555454bafc76791ff8d1d1d"
  },
  {
    "url": "assets/js/3.1997f929.js",
    "revision": "f98b0982c11105adb38fb266fad7dd02"
  },
  {
    "url": "assets/js/4.91958876.js",
    "revision": "f8c98dc63530f5949e74b48c252dc21f"
  },
  {
    "url": "assets/js/5.f69e1dd5.js",
    "revision": "f24c71abbe1c82899276175d6442741d"
  },
  {
    "url": "assets/js/6.ada868a5.js",
    "revision": "8b797f7377d21352715b66528912f25d"
  },
  {
    "url": "assets/js/7.8abd1560.js",
    "revision": "ca2bddc699d4f29d03073978d30ffa14"
  },
  {
    "url": "assets/js/8.7bae7cd8.js",
    "revision": "50c66feff7532ce972518fa2915b8a30"
  },
  {
    "url": "assets/js/9.4f8d457a.js",
    "revision": "ceec9c60f99a88aa2d381b5c34977eac"
  },
  {
    "url": "assets/js/app.a6d1c468.js",
    "revision": "1f773707421a22cea2699f8d2cd42f9f"
  },
  {
    "url": "assets/js/vendors~docsearch.d932dc62.js",
    "revision": "d04cdaedc0417584670fe05179d38dd6"
  },
  {
    "url": "index.html",
    "revision": "8a379c377d378e72988c563a6bac3cab"
  },
  {
    "url": "webpack.png",
    "revision": "afd4bdae0a6e044c13265facddc23e4f"
  },
  {
    "url": "workshops/index.html",
    "revision": "f27125a9a09722d836631e91454fa1d6"
  },
  {
    "url": "workshops/intermediate/babel.html",
    "revision": "35091894a02362622d313f9a2336ac87"
  },
  {
    "url": "workshops/intermediate/dev.html",
    "revision": "239343f64245d3377e00ae4289b13271"
  },
  {
    "url": "workshops/intermediate/index.html",
    "revision": "fcce5bef40a67e86fc5bd12a33e06175"
  },
  {
    "url": "workshops/intermediate/intermediate-koans.html",
    "revision": "a08bfc8eccb5a927e99583f0579ca282"
  },
  {
    "url": "workshops/intermediate/reduce-bundle-size.html",
    "revision": "d5c1e7c54d02246729a2eef6b338bfad"
  },
  {
    "url": "workshops/intermediate/style.html",
    "revision": "a71176662342ee97b5d05369f1c3977c"
  },
  {
    "url": "workshops/novice/basics.html",
    "revision": "40d1da00d81451de1e20fbfa4d52cc21"
  },
  {
    "url": "workshops/novice/code-assets.html",
    "revision": "68674e42402d810adde9ba790a2f11e7"
  },
  {
    "url": "workshops/novice/index.html",
    "revision": "faf012f49200e3a3e9fb9883a88a5c67"
  },
  {
    "url": "workshops/novice/novice-koans.html",
    "revision": "8a32daa98e0e405f8850df16190f0541"
  },
  {
    "url": "workshops/novice/outputs.html",
    "revision": "1d7c7cdf24d80eb74b9e12ac1f867c79"
  },
  {
    "url": "workshops/novice/static-assets.html",
    "revision": "20a187291dd501e048943c5ee97a8555"
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
