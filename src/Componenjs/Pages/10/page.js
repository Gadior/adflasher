"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page;
var _tasksBackBtn = _interopRequireDefault(require("../../Shared/tasksBackBtn"));
var _react = _interopRequireWildcard(require("react"));
var _lucideReact = require("lucide-react");
var _data = require("./data");
var _logo = _interopRequireDefault(require("../../Shared/page10/images/__logo.svg"));
require("./style.css");
var _dropdownMenu = _interopRequireDefault(require("../../Shared/page10/dropdownMenu"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // #region ~ hlop
// ___ import
// #region ~ import
// ~ comps
// ~ data
// ~ assets
// ~ styles
// #endregion ~ import

// ___ component Page
// #region ~ component
function Page(props) {
  // ___ state
  // #region
  // ~ показывать полоску "подписаться?"
  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    isSing = _useState2[0],
    setIsSing = _useState2[1];
  // ~ Включение полоски "Поиска"
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isSearch = _useState4[0],
    setIsSearch = _useState4[1];
  // ~ мобильное меню
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isMobileMenu = _useState6[0],
    setIsMobileMenu = _useState6[1];
  // #endregion

  // ___ return
  // #region ~ return
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "test10__wrapper --whiteBg"
  }, /*#__PURE__*/_react.default.createElement(_tasksBackBtn.default, null), isMobileMenu && /*#__PURE__*/_react.default.createElement("div", {
    className: "test10--mobileMenu"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      setIsMobileMenu(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_lucideReact.X, {
    className: "test10--sing__close"
  }))), isSing && /*#__PURE__*/_react.default.createElement("div", {
    className: "test10__section --blackBg"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "test10--sing ".concat(isSing ? "" : "close", " --w1240")
  }, /*#__PURE__*/_react.default.createElement("span", null, "Sign up and get 20% off to your first order.", " ", /*#__PURE__*/_react.default.createElement("button", {
    className: "test10--sign__link"
  }, "Sign Up Now")), /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      setIsSing(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_lucideReact.X, {
    className: "test10--sing__close"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "test10__section --whiteBg"
  }, /*#__PURE__*/_react.default.createElement("header", {
    className: "test10--header --w1240"
  }, isSearch ? /*#__PURE__*/_react.default.createElement("div", {
    className: "header__search__mobile --width"
  }, /*#__PURE__*/_react.default.createElement("input", {
    placeholder: "Search for products..."
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "icon"
  }, /*#__PURE__*/_react.default.createElement(_lucideReact.Search, null)), /*#__PURE__*/_react.default.createElement("span", {
    className: "iconDel",
    onClick: function onClick() {
      setIsSearch(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_lucideReact.CircleX, null))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "test10--header__left"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      setIsMobileMenu(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_lucideReact.Menu, null)), /*#__PURE__*/_react.default.createElement("img", {
    src: _logo.default,
    alt: "shop.co"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "test10--header__menu"
  }, /*#__PURE__*/_react.default.createElement(_dropdownMenu.default, {
    title: "Shop",
    items: _data.menuItems.shop
  }), /*#__PURE__*/_react.default.createElement(_dropdownMenu.default, {
    title: "On Sale",
    items: _data.menuItems.on_Sale
  }), /*#__PURE__*/_react.default.createElement(_dropdownMenu.default, {
    title: "New Arivvles",
    items: _data.menuItems.new_Arivvles
  }), /*#__PURE__*/_react.default.createElement(_dropdownMenu.default, {
    title: "Brands",
    items: _data.menuItems.brands
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "test10--header__search"
  }, /*#__PURE__*/_react.default.createElement("input", {
    placeholder: "Product name..."
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "icon"
  }, /*#__PURE__*/_react.default.createElement(_lucideReact.Search, null))), /*#__PURE__*/_react.default.createElement("div", {
    className: "test10--header__right"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "right--hidden",
    onClick: function onClick() {
      setIsSearch(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_lucideReact.Search, null)), /*#__PURE__*/_react.default.createElement("button", null, /*#__PURE__*/_react.default.createElement(_lucideReact.ShoppingCart, null)), /*#__PURE__*/_react.default.createElement("button", null, /*#__PURE__*/_react.default.createElement(_lucideReact.CircleUserRound, null)))))));
  // #endregion ~ return

  // ___ function
  // #region ~ function
  // #endregion ~ function
}
// #endregion ~ component
// #endregion ~ hlop