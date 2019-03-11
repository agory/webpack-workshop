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
    "revision": "7ae82470409c137aafc89c2f030dce22"
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
    "url": "assets/js/11.c184a88d.js",
    "revision": "9bf6fb4b5b67613e85509d4104f335eb"
  },
  {
    "url": "assets/js/12.4f7d0232.js",
    "revision": "ae6960af8353e92ee3de046b23d72516"
  },
  {
    "url": "assets/js/13.c7a9420f.js",
    "revision": "57ca8021ef96a8822b95f9fcb10b9446"
  },
  {
    "url": "assets/js/14.0115f9f0.js",
    "revision": "0bf48d3087b9d2e7c44071b9b2c57ff0"
  },
  {
    "url": "assets/js/15.d1c2d0f3.js",
    "revision": "197f958e5538d0523cb9c18c454b56df"
  },
  {
    "url": "assets/js/16.1d9dad6e.js",
    "revision": "8d84e000818375d28e0e03217f608cb3"
  },
  {
    "url": "assets/js/17.e67613bd.js",
    "revision": "235b87b44a6df9c6f30ab3b34538aaac"
  },
  {
    "url": "assets/js/18.81a0463c.js",
    "revision": "2ef2ec6231764a3bbe465adb4b246da1"
  },
  {
    "url": "assets/js/19.571cc90b.js",
    "revision": "dfa7fe545963280a971c2552654f7006"
  },
  {
    "url": "assets/js/20.5757084d.js",
    "revision": "8d7047f565d3b35e011d2c887c6b578d"
  },
  {
    "url": "assets/js/21.c949f416.js",
    "revision": "77ee14e7ad132a963eeb1792eab80ba6"
  },
  {
    "url": "assets/js/22.20691318.js",
    "revision": "c631caef3693b43aa47b920349333b2e"
  },
  {
    "url": "assets/js/23.d9ccb154.js",
    "revision": "bc92e2149364d26b26c35b3b78894ca9"
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
    "url": "assets/js/5.1a57867a.js",
    "revision": "0a77508def77926b1060c8d7fdd4f68d"
  },
  {
    "url": "assets/js/6.9a25c8bd.js",
    "revision": "5aea5b933c6dd88c7dd055db1141c56b"
  },
  {
    "url": "assets/js/7.830f72b4.js",
    "revision": "8b64bd85c898349385edc5cca9422f98"
  },
  {
    "url": "assets/js/8.70388628.js",
    "revision": "a4d1dc5116b1bc7e9099912742ce8ee8"
  },
  {
    "url": "assets/js/9.59b97a18.js",
    "revision": "d2d470c65ffefb3e6706be663d2b96a7"
  },
  {
    "url": "assets/js/app.a6d2a6bf.js",
    "revision": "6a4acfe50bad169f93f46de58df54758"
  },
  {
    "url": "assets/js/vendors~docsearch.00f64713.js",
    "revision": "3ebbff0dad030626810d83cc4bf09f16"
  },
  {
    "url": "index.html",
    "revision": "30559a2ccf8f266d74755772aa4d8734"
  },
  {
    "url": "webpack.png",
    "revision": "afd4bdae0a6e044c13265facddc23e4f"
  },
  {
    "url": "workshops/index.html",
    "revision": "4e25d2698d5897a2c2421dfb3500e051"
  },
  {
    "url": "workshops/intermediate/babel.html",
    "revision": "fcf433746d6f2d5713ac2d9f334c3756"
  },
  {
    "url": "workshops/intermediate/compression.html",
    "revision": "63761d80fa293f6af33aa238ef0d57b4"
  },
  {
    "url": "workshops/intermediate/dev.html",
    "revision": "9887f523fd57d13ddcc43976a7086a85"
  },
  {
    "url": "workshops/intermediate/index.html",
    "revision": "799f4803ff67cd9eb17c880f51883923"
  },
  {
    "url": "workshops/intermediate/intermediate-koans.html",
    "revision": "7ff4e2cd46136ec4f6ca4156b3cdc06e"
  },
  {
    "url": "workshops/intermediate/modern-build.html",
    "revision": "599d647373aec6c6c805ac4cc736c866"
  },
  {
    "url": "workshops/intermediate/reduce-bundle-size.html",
    "revision": "b9b35268434da268f13dd3928b789f89"
  },
  {
    "url": "workshops/intermediate/style.html",
    "revision": "ee5befcc76d6dd8ae4fe3a3fa89cae78"
  },
  {
    "url": "workshops/novice/basics.html",
    "revision": "9e07e01ff7481e667905273074cb4fdb"
  },
  {
    "url": "workshops/novice/code-assets.html",
    "revision": "de892c6ffae0f8443e7acb3cbfb857c2"
  },
  {
    "url": "workshops/novice/index.html",
    "revision": "a0e66b0376d9f89d9402d2abc9d28da0"
  },
  {
    "url": "workshops/novice/novice-koans.html",
    "revision": "c1271177739165844b7fff7383928f4a"
  },
  {
    "url": "workshops/novice/outputs.html",
    "revision": "113a40664c97bf2f8abec6841f63101a"
  },
  {
    "url": "workshops/novice/static-assets.html",
    "revision": "7390b328b88cac03d4b49ce508bb1af7"
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
