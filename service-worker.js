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
    "revision": "dc81cd0442466ee02ce4bbc8deb0cd9c"
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
    "url": "assets/js/6.8a9b0e5a.js",
    "revision": "de53917b0ff840bcf0103e910e7272d8"
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
    "url": "assets/js/app.3781c7a6.js",
    "revision": "f75ea0e62f61791eb8d4a23cea97b699"
  },
  {
    "url": "assets/js/vendors~docsearch.d932dc62.js",
    "revision": "d04cdaedc0417584670fe05179d38dd6"
  },
  {
    "url": "index.html",
    "revision": "cab8cb5a12bbd23b50f673e6b38d8806"
  },
  {
    "url": "webpack.png",
    "revision": "afd4bdae0a6e044c13265facddc23e4f"
  },
  {
    "url": "workshops/index.html",
    "revision": "071189fd99e63eccbe5ccc93d1e671c6"
  },
  {
    "url": "workshops/intermediate/babel.html",
    "revision": "aa7fe7d480f9cf12c51b88b838a4e290"
  },
  {
    "url": "workshops/intermediate/dev.html",
    "revision": "67bbc84169cf8369d81e7d2e150cd476"
  },
  {
    "url": "workshops/intermediate/index.html",
    "revision": "f3e4245359845aefed14ad7b80e338e9"
  },
  {
    "url": "workshops/intermediate/intermediate-koans.html",
    "revision": "3405b85cfbcdc3935fe73dfa1b842718"
  },
  {
    "url": "workshops/intermediate/reduce-bundle-size.html",
    "revision": "b66fb7c9333ee4c5d9af5b0389291c0b"
  },
  {
    "url": "workshops/intermediate/style.html",
    "revision": "0561e3b8786ddd9753fc3ec50b329380"
  },
  {
    "url": "workshops/novice/basics.html",
    "revision": "ba33a03fab3d097a6ab4ba708b3c6709"
  },
  {
    "url": "workshops/novice/code-assets.html",
    "revision": "9273d866d2416589ad1830644c9c3380"
  },
  {
    "url": "workshops/novice/index.html",
    "revision": "55c5c2f199ff5bbd32a03b3133de66ca"
  },
  {
    "url": "workshops/novice/novice-koans.html",
    "revision": "baa9cd8ad500feeba30689344340769b"
  },
  {
    "url": "workshops/novice/outputs.html",
    "revision": "f69238d2dd78b83ad2ffcf6db1cda490"
  },
  {
    "url": "workshops/novice/static-assets.html",
    "revision": "b01fae24759802fb93a41f6fbea9518e"
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
