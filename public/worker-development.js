/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
self.__WB_DISABLE_DEV_LOGS = true;
self.addEventListener('visibilitychange', function () {
  if (document.visibilityState === 'visible') {
    console.log('APP resumed');
    window.location.reload();
  }
});
/******/ })()
;