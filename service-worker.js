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
    "revision": "b760aef466c8372711a37112e62d68a8"
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
    "url": "assets/js/12.c7f9bfc0.js",
    "revision": "b48a13d88498a8013a685dda83d469d7"
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
    "url": "assets/js/app.fdd4522d.js",
    "revision": "708bba5d56c4259728f024004c12562b"
  },
  {
    "url": "assets/js/vendors~docsearch.d932dc62.js",
    "revision": "d04cdaedc0417584670fe05179d38dd6"
  },
  {
    "url": "index.html",
    "revision": "585b2d5540f2b87f0ff8336aa8a95c43"
  },
  {
    "url": "webpack.png",
    "revision": "afd4bdae0a6e044c13265facddc23e4f"
  },
  {
    "url": "workshops/index.html",
    "revision": "f26b97dddb60023a3463ea5ceffb1ebe"
  },
  {
    "url": "workshops/intermediate/babel.html",
    "revision": "4e4ad82bb7fed336f9412650c94ab1b9"
  },
  {
    "url": "workshops/intermediate/dev.html",
    "revision": "794f86a5978671aa1a060c1b3eb851e8"
  },
  {
    "url": "workshops/intermediate/index.html",
    "revision": "1f654ab3ab464b0904386e35d417f71c"
  },
  {
    "url": "workshops/intermediate/intermediate-koans.html",
    "revision": "2c90aa6b02d600b3502ebb09dcc1dd44"
  },
  {
    "url": "workshops/intermediate/reduce-bundle-size.html",
    "revision": "5ab4729b91ef5f55cd9446f92b927ce8"
  },
  {
    "url": "workshops/intermediate/style.html",
    "revision": "834ae0f11eb59401003ad6541101163e"
  },
  {
    "url": "workshops/novice/basics.html",
    "revision": "30581d49e27e87e77a68a7dce1074928"
  },
  {
    "url": "workshops/novice/code-assets.html",
    "revision": "c940bcb817ae51f45370d96d6fc743d9"
  },
  {
    "url": "workshops/novice/index.html",
    "revision": "74537615dc8d27fc229da9493b145ecb"
  },
  {
    "url": "workshops/novice/novice-koans.html",
    "revision": "bfa8a2fcf08713cda0aa705518e87eea"
  },
  {
    "url": "workshops/novice/outputs.html",
    "revision": "e7944f3f623b5671d2c02223492f5f83"
  },
  {
    "url": "workshops/novice/static-assets.html",
    "revision": "69a8f437b5aeb8779235c880daab4d2e"
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
