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
    "revision": "820a9a711c73a86f14bb630fbd423e3c"
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
    "url": "assets/js/12.15c1ff21.js",
    "revision": "dc90a1145d68156a7f2ced1a0600b08e"
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
    "url": "assets/js/15.3718f7bb.js",
    "revision": "0980cc8ca43f2f12d2a250bb094fdca4"
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
    "url": "assets/js/app.d91a9bcd.js",
    "revision": "e029f0aba007ac85e9e54fabf95a9929"
  },
  {
    "url": "assets/js/vendors~docsearch.d932dc62.js",
    "revision": "d04cdaedc0417584670fe05179d38dd6"
  },
  {
    "url": "index.html",
    "revision": "806d11e077832a89b49aaefb8465f6ff"
  },
  {
    "url": "webpack.png",
    "revision": "afd4bdae0a6e044c13265facddc23e4f"
  },
  {
    "url": "workshops/index.html",
    "revision": "cb85a933c400131fffa01e668326a12c"
  },
  {
    "url": "workshops/intermediate/babel.html",
    "revision": "f0077aa075d9e32227d387515a92d3d8"
  },
  {
    "url": "workshops/intermediate/dev.html",
    "revision": "eaa7db90bc06ba48a2d433c79665bab2"
  },
  {
    "url": "workshops/intermediate/index.html",
    "revision": "6958544521701fb5a9b0e7de9f17a83c"
  },
  {
    "url": "workshops/intermediate/intermediate-koans.html",
    "revision": "c08463ccf602836fe9599b346f8c50ef"
  },
  {
    "url": "workshops/intermediate/reduce-bundle-size.html",
    "revision": "ed05484b740da52f56a4763ac1244dfd"
  },
  {
    "url": "workshops/intermediate/style.html",
    "revision": "e6970f225ef1e213e2afc8e05f453879"
  },
  {
    "url": "workshops/novice/basics.html",
    "revision": "faf65956caac836b8619b58dec794916"
  },
  {
    "url": "workshops/novice/code-assets.html",
    "revision": "ef2b1c27816245732df0a0a336102479"
  },
  {
    "url": "workshops/novice/index.html",
    "revision": "53605be2db918804b502a4445983ea37"
  },
  {
    "url": "workshops/novice/novice-koans.html",
    "revision": "4775a549a892d06c01a2f6cf6a5c78e8"
  },
  {
    "url": "workshops/novice/outputs.html",
    "revision": "02cf4cbf82b4637251053a38dac3e087"
  },
  {
    "url": "workshops/novice/static-assets.html",
    "revision": "3a2a5d08b90d0d2add6a2daddd630095"
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
