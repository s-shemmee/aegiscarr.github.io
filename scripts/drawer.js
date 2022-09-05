__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleDrawer", function() { return toggleDrawer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawer", function() { return drawer; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/scripts/utils/index.js");

var drawerSelector = 'data-drawer';
var triggerSelector = 'data-drawer-trigger';
var toggleDrawer = function toggleDrawer(targetName) {
  var drawer = document.querySelector("[".concat(drawerSelector, "=\"").concat(targetName, "\"]"));
  drawer.classList.toggle(_utils__WEBPACK_IMPORTED_MODULE_0__["cssClasses"].visible);

  if (drawer.classList.contains(_utils__WEBPACK_IMPORTED_MODULE_0__["cssClasses"].visible)) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setBodyScroll"])(false);
  } else {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setBodyScroll"])(true);
  }
};
var drawer = function drawer() {
  var triggers = document.querySelectorAll("[".concat(triggerSelector, "]"));

  for (var i = 0; i < triggers.length; i++) {
    triggers[i].addEventListener('click', function (e) {
      e.preventDefault();
      var targetName = e.currentTarget.getAttribute(triggerSelector);
      toggleDrawer(targetName);
    });
  }
};

//# sourceURL=webpack:///./src/scripts/components/drawer.js?