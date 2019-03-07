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
    "revision": "b674fec25c1a6c47c704b3587b877e4d"
  },
  {
    "url": "assets/css/0.styles.446b2bb4.css",
    "revision": "4314c1c4356828b1865c269a2881831d"
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
    "url": "assets/js/10.49dcd41f.js",
    "revision": "e1c8ffe379543c2e2cfa25f52108e75d"
  },
  {
    "url": "assets/js/11.a6cd9faf.js",
    "revision": "0d424b915561c2c76a2f854a03f001ac"
  },
  {
    "url": "assets/js/12.ab8ce133.js",
    "revision": "c5a5a7cf35befb8e09f2d80d39596132"
  },
  {
    "url": "assets/js/13.c0a0f43f.js",
    "revision": "2e68b1283e023aacef63ae50b02d17e7"
  },
  {
    "url": "assets/js/14.9065de89.js",
    "revision": "9bbfe96e78eaf5b5114832923b340017"
  },
  {
    "url": "assets/js/15.574f5d1b.js",
    "revision": "5b7e9140c2db717999aeff9ace98cbb7"
  },
  {
    "url": "assets/js/16.8a16f9a0.js",
    "revision": "8c252912ae05245419151b4f2f412fdd"
  },
  {
    "url": "assets/js/17.4c7ffe74.js",
    "revision": "c5cb5a13d2040a1f44d8a7fb4e831336"
  },
  {
    "url": "assets/js/18.27cfc53b.js",
    "revision": "41acf6a6edcf4c5234fa2bbfe217d8bc"
  },
  {
    "url": "assets/js/19.a5586844.js",
    "revision": "3acd83867c674324b2f0929cc3ca8eeb"
  },
  {
    "url": "assets/js/3.d07a27b0.js",
    "revision": "69cbfc72a4c8e5c78b86cb0e88d2775f"
  },
  {
    "url": "assets/js/4.d9e40dbf.js",
    "revision": "c4c95d2dd11c19207eb7211b82e54b4f"
  },
  {
    "url": "assets/js/5.49ce9601.js",
    "revision": "fd4c3a3c6f398b98b741368c951c8ae5"
  },
  {
    "url": "assets/js/6.5a5e6640.js",
    "revision": "759133a261e53462b6c330c4727c9583"
  },
  {
    "url": "assets/js/7.8b8b2c09.js",
    "revision": "d4ca9157f150906f02904412019a57e5"
  },
  {
    "url": "assets/js/8.7c65a67b.js",
    "revision": "d4c83ea12eb46d882eeea8e859f5b311"
  },
  {
    "url": "assets/js/9.fa00dad0.js",
    "revision": "49f2b0cda3eb74ce9b40b40721dddf31"
  },
  {
    "url": "assets/js/app.6074b785.js",
    "revision": "3a562da11e9651001f35df9a2cbd63bc"
  },
  {
    "url": "assets/js/vendors~docsearch.f3482453.js",
    "revision": "e1211d0e72a88524b7f75128aba73846"
  },
  {
    "url": "index.html",
    "revision": "728c3889393f817bf1609bdbd967179c"
  },
  {
    "url": "webpack.png",
    "revision": "afd4bdae0a6e044c13265facddc23e4f"
  },
  {
    "url": "workshops/index.html",
    "revision": "3887d2290bb5ca1bd84640e46301c478"
  },
  {
    "url": "workshops/intermediate/babel.html",
    "revision": "0b8dce1eb59af2359f2595dd963a1301"
  },
  {
    "url": "workshops/intermediate/dev.html",
    "revision": "85c137c283dfab02122945b13a6581d3"
  },
  {
    "url": "workshops/intermediate/index.html",
    "revision": "3e16a56effb456479ae57df55a8a4889"
  },
  {
    "url": "workshops/intermediate/intermediate-koans.html",
    "revision": "6532caa5daa57d6c6e9919486bc2b0cd"
  },
  {
    "url": "workshops/intermediate/modern-build.html",
    "revision": "2b4093233f925ac914813f20158ca295"
  },
  {
    "url": "workshops/intermediate/reduce-bundle-size.html",
    "revision": "aebcd451d8010808eacd282d0d9d3efe"
  },
  {
    "url": "workshops/intermediate/style.html",
    "revision": "ad8bbd3f4bb770c9d26402d7f1b99f18"
  },
  {
    "url": "workshops/novice/basics.html",
    "revision": "87f053107885035c142be2335f7bd8d4"
  },
  {
    "url": "workshops/novice/code-assets.html",
    "revision": "c220485ec73d697506466c0ca15e1223"
  },
  {
    "url": "workshops/novice/index.html",
    "revision": "6c4e0088f4da4d49b5fcc1014420ea20"
  },
  {
    "url": "workshops/novice/novice-koans.html",
    "revision": "d7e53ce42b8b51f8da5d6a14466284ff"
  },
  {
    "url": "workshops/novice/outputs.html",
    "revision": "4a22d57e23016242849d51828dbca32b"
  },
  {
    "url": "workshops/novice/static-assets.html",
    "revision": "0261ebaf0880ba30679075abd9eab45a"
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
