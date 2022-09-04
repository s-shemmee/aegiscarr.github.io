__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryVariable", function() { return getQueryVariable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPriceString", function() { return getPriceString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pluralize", function() { return pluralize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCartWidgetQuantity", function() { return setCartWidgetQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urls", function() { return urls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBodyScroll", function() { return setBodyScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElementTopInViewport", function() { return isElementTopInViewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollToElement", function() { return scrollToElement; });
/* harmony import */ var ismobilejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ismobilejs */ "./node_modules/ismobilejs/esm/index.js");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! smoothscroll-polyfill */ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_1__);


smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_1___default.a.polyfill();
var isMobile = Object(ismobilejs__WEBPACK_IMPORTED_MODULE_0__["default"])();
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');

  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');

    if (pair[0] === variable) {
      return pair[1];
    }
  }

  return false;
}
function getPriceString(amount) {
  return '$' + (amount / 100).toFixed(2);
}
function pluralize(value, singular, plural) {
  if (value === 1) {
    return singular;
  } else {
    return plural;
  }
}
function setCartWidgetQuantity(quantity) {
  var dataPrefix = 'data-cart-widget';
  var selectors = {
    widget: "[".concat(dataPrefix, "=\"widget\"]"),
    widgetQuantity: "[".concat(dataPrefix, "=\"quantity\"]")
  };
  var cartWidget = document.querySelectorAll(selectors.widget);
  var cartWidgetQuantity = document.querySelectorAll(selectors.widgetQuantity);

  for (var i = 0; i < cartWidgetQuantity.length; i++) {
    cartWidgetQuantity[i].innerHTML = quantity;
  }

  for (var _i = 0; _i < cartWidget.length; _i++) {
    if (parseInt(quantity) === 0) {
      cartWidget[_i].classList.add(cssClasses.empty);
    } else {
      cartWidget[_i].classList.remove(cssClasses.empty);
    }
  }
}

var strings = theme.strings;
var urls = theme.urls;
var cssClasses = {
  loading: 'loading',
  hidden: 'hidden',
  active: 'active',
  visible: 'visible',
  empty: 'empty',
  unavailable: 'unavailable',
  disabled: 'disabled',
  paused: 'paused',
  filled: 'filled',
  selected: 'selected',
  noScroll: 'no-scroll',
  sticky: 'sticky'
};
function setBodyScroll(set) {
  var body = document.querySelector('body');

  if (set === false && !body.classList.contains(cssClasses.noScroll)) {
    body.classList.add(cssClasses.noScroll);
  } else {
    body.classList.remove(cssClasses.noScroll);
  }
}
var isElementTopInViewport = function isElementTopInViewport(_ref) {
  var element = _ref.element,
      offset = _ref.offset;
  if (!offset) offset = 0;
  if (element.getBoundingClientRect().top - offset >= 0) return true;
  return false;
};
var scrollToElement = function scrollToElement(_ref2) {
  var element = _ref2.element,
      offset = _ref2.offset,
      behavior = _ref2.behavior,
      ifNeeded = _ref2.ifNeeded;
  if (ifNeeded === true && isElementTopInViewport({
    element: element,
    offset: offset
  })) return;
  if (!offset) offset = 0;
  if (!behavior) behavior = 'smooth';
  var viewportY = window.scrollY || window.pageYOffset;
  var top = element.getBoundingClientRect().top + viewportY - offset;
  window.scrollTo({
    top: top,
    left: 0,
    behavior: behavior
  });
};

//# sourceURL=webpack:///./src/scripts/utils/index.js?