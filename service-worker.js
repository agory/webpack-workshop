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
    "revision": "3121c8dc73735f1a3824c5d1de6fc4fb"
  },
  {
    "url": "assets/css/0.styles.5904bd1d.css",
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
    "url": "assets/js/10.23ab5321.js",
    "revision": "d91704a95fe113daa5c77e8edf80da62"
  },
  {
    "url": "assets/js/11.0a787d09.js",
    "revision": "9bf6fb4b5b67613e85509d4104f335eb"
  },
  {
    "url": "assets/js/12.885f706b.js",
    "revision": "ae6960af8353e92ee3de046b23d72516"
  },
  {
    "url": "assets/js/13.8eca3a5a.js",
    "revision": "57ca8021ef96a8822b95f9fcb10b9446"
  },
  {
    "url": "assets/js/14.fe29d48a.js",
    "revision": "0bf48d3087b9d2e7c44071b9b2c57ff0"
  },
  {
    "url": "assets/js/15.bc1dfadd.js",
    "revision": "197f958e5538d0523cb9c18c454b56df"
  },
  {
    "url": "assets/js/16.81372c83.js",
    "revision": "8d84e000818375d28e0e03217f608cb3"
  },
  {
    "url": "assets/js/17.8117d6f6.js",
    "revision": "235b87b44a6df9c6f30ab3b34538aaac"
  },
  {
    "url": "assets/js/18.eb4df80e.js",
    "revision": "2ef2ec6231764a3bbe465adb4b246da1"
  },
  {
    "url": "assets/js/19.7a738b49.js",
    "revision": "dfa7fe545963280a971c2552654f7006"
  },
  {
    "url": "assets/js/20.6a430a1d.js",
    "revision": "8d7047f565d3b35e011d2c887c6b578d"
  },
  {
    "url": "assets/js/21.a0efb107.js",
    "revision": "77ee14e7ad132a963eeb1792eab80ba6"
  },
  {
    "url": "assets/js/22.98a1ed9a.js",
    "revision": "c631caef3693b43aa47b920349333b2e"
  },
  {
    "url": "assets/js/23.b6549028.js",
    "revision": "bc92e2149364d26b26c35b3b78894ca9"
  },
  {
    "url": "assets/js/3.c848de40.js",
    "revision": "2c90d612da5bc88baca27e398f7872d2"
  },
  {
    "url": "assets/js/4.ad722d99.js",
    "revision": "e33f14853bba29fd5622d931d34a6d94"
  },
  {
    "url": "assets/js/5.cc2183e1.js",
    "revision": "0a77508def77926b1060c8d7fdd4f68d"
  },
  {
    "url": "assets/js/6.9d2165f3.js",
    "revision": "5aea5b933c6dd88c7dd055db1141c56b"
  },
  {
    "url": "assets/js/7.1a647510.js",
    "revision": "8b64bd85c898349385edc5cca9422f98"
  },
  {
    "url": "assets/js/8.7d05dca0.js",
    "revision": "a4d1dc5116b1bc7e9099912742ce8ee8"
  },
  {
    "url": "assets/js/9.b850493b.js",
    "revision": "d2d470c65ffefb3e6706be663d2b96a7"
  },
  {
    "url": "assets/js/app.d5cdafec.js",
    "revision": "2f271cbcfe31b4643722a7358d33e522"
  },
  {
    "url": "assets/js/vendors~docsearch.1814c30c.js",
    "revision": "3ebbff0dad030626810d83cc4bf09f16"
  },
  {
    "url": "index.html",
    "revision": "4167f832143449e39c4c9cb500aa1ccd"
  },
  {
    "url": "webpack.png",
    "revision": "afd4bdae0a6e044c13265facddc23e4f"
  },
  {
    "url": "workshops/index.html",
    "revision": "f2dd752ce803704c0fc3cd23bc2c62ec"
  },
  {
    "url": "workshops/intermediate/babel.html",
    "revision": "207ed59493f17a9fb18d7e6b47fd406b"
  },
  {
    "url": "workshops/intermediate/compression.html",
    "revision": "6d5c88494e6f4d5d35f3a7e618ad7821"
  },
  {
    "url": "workshops/intermediate/dev.html",
    "revision": "ac1bf7dd36f73cdae0cd3f35e0eaeada"
  },
  {
    "url": "workshops/intermediate/index.html",
    "revision": "fc0c489a35927fec4523c92af4447ec9"
  },
  {
    "url": "workshops/intermediate/intermediate-koans.html",
    "revision": "97720fc86ee4d1d8decf9f89164198f6"
  },
  {
    "url": "workshops/intermediate/modern-build.html",
    "revision": "0a58461998a75f93964996fc5469d115"
  },
  {
    "url": "workshops/intermediate/reduce-bundle-size.html",
    "revision": "fd4191e19f3d233bc69b5ef7a75a578e"
  },
  {
    "url": "workshops/intermediate/style.html",
    "revision": "fafceda3406dcd82f41c0a7b2c5041a1"
  },
  {
    "url": "workshops/novice/basics.html",
    "revision": "a9deea4302751c2ba90dbb95d16601ac"
  },
  {
    "url": "workshops/novice/code-assets.html",
    "revision": "97b0934f93a841c4324ad55660d00388"
  },
  {
    "url": "workshops/novice/index.html",
    "revision": "b39f4cb04d78c089d26b202e7767f324"
  },
  {
    "url": "workshops/novice/novice-koans.html",
    "revision": "a923872b403d451de17800e06f4d7371"
  },
  {
    "url": "workshops/novice/outputs.html",
    "revision": "085960778eb54a5106410019cdf21530"
  },
  {
    "url": "workshops/novice/static-assets.html",
    "revision": "400ddf472c69b9da7a805d0048cf099e"
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
