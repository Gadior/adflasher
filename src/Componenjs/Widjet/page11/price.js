"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Price;
var _react = _interopRequireWildcard(require("react"));
require("lucide-react");
var _hooks = require("../../Feature/redux/hooks");
var _dataCntl = require("../../Feature/redux/slices/page11/dataCntl");
var _antd = require("antd");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // #region ~ hlop
// ___ import
// #region ~ import
// ~ redux
var Title = _antd.Typography.Title;

// ~ assets

// ~ styles
// import "./style.css";
// #endregion ~ import

// ___ component Page
// #region ~ component
function Price(props) {
  // ___ redux in data
  // #region
  // ~ корневой селектор для выбора услуги
  var estimateData = (0, _hooks.useAppSelector)(function (state) {
    return state.page11_dataCntl.estimateData;
  });
  // #endregion

  // __ Получение объекта с распределительными ценами на команду
  // #region

  var _useState = (0, _react.useState)({
      studio: 0,
      photo: 0,
      makeup: 0,
      cake: 0,
      decor: 0,
      clean: 0
    }),
    _useState2 = _slicedToArray(_useState, 2),
    exportObj = _useState2[0],
    setExportObj = _useState2[1];
  var getAllPrice = function getAllPrice() {
    var __data = exportObj;
    estimateData.map(function (item) {
      if (item.data.pay) {
        __data = _objectSpread(_objectSpread({}, __data), {}, {
          studio: __data.studio + item.data.pay.studio
        });
        __data = _objectSpread(_objectSpread({}, __data), {}, {
          photo: __data.photo + item.data.pay.photo
        });
        __data = _objectSpread(_objectSpread({}, __data), {}, {
          makeup: __data.makeup + item.data.pay.makeup
        });
        __data = _objectSpread(_objectSpread({}, __data), {}, {
          cake: __data.cake + item.data.pay.cake
        });
        __data = _objectSpread(_objectSpread({}, __data), {}, {
          decor: __data.decor + item.data.pay.decor
        });
        __data = _objectSpread(_objectSpread({}, __data), {}, {
          clean: __data.clean + item.data.pay.clean
        });
      }
      setExportObj(__data);
    });
  };
  (0, _react.useEffect)(function () {
    getAllPrice();
  }, [estimateData]);
  // #endregion

  // ___ state
  // #region
  // #endregion

  // ___ return
  // #region ~ return
  return /*#__PURE__*/_react.default.createElement(_antd.Flex, {
    className: "test11__payAll"
  }, /*#__PURE__*/_react.default.createElement(Title, {
    level: 4
  }, "\u041E\u0411\u0429\u0418\u0419 \u0420\u0410\u0421\u0427\u0415\u0422:"), /*#__PURE__*/_react.default.createElement("div", null, "\u0421\u0442\u0443\u0434\u0438\u044F: ", exportObj.studio), /*#__PURE__*/_react.default.createElement("div", null, "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444: ", exportObj.photo), /*#__PURE__*/_react.default.createElement("div", null, "\u041C\u0430\u043A\u0438\u044F\u0436: ", exportObj.makeup), /*#__PURE__*/_react.default.createElement("div", null, "\u0422\u043E\u0440\u0442: ", exportObj.cake), /*#__PURE__*/_react.default.createElement("div", null, "\u0414\u0435\u043A\u043E\u0440\u0430\u0446\u0438\u0438: ", exportObj.decor), /*#__PURE__*/_react.default.createElement("div", null, "\u0423\u0431\u043E\u0440\u043A\u0430: ", exportObj.clean));
  // #endregion ~ return

  // ___ function
  // #region ~ function
  // #endregion ~ function
}
// #endregion ~ component
// #endregion ~ hlop