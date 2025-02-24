"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page;
var _tasksBackBtn = _interopRequireDefault(require("../../Shared/tasksBackBtn"));
var _options = _interopRequireDefault(require("../../Widjet/page11/options"));
var _price = _interopRequireDefault(require("../../Widjet/page11/price"));
var _react = _interopRequireWildcard(require("react"));
var _antd = require("antd");
var _hooks = require("../../Feature/redux/hooks");
var _dataCntl = require("../../Feature/redux/slices/page11/dataCntl");
require("./style.css");
var _lucideReact = require("lucide-react");
var _lodash = require("lodash");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
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
// ~ comps
// ~ redux
// ~ styles
var Text = _antd.Typography.Text,
  Title = _antd.Typography.Title;
// #endregion ~ import

// ___ компонента - форма для заполнения данных
// #region
function Form(props) {
  // ___ state
  // #region
  // ~ дата таблицы
  // #endregion

  // ___ redux in data
  // #region
  var dispatch = (0, _hooks.useAppDispatch)();

  // ~ корневой селектор для выбора услуги
  var formData = (0, _hooks.useAppSelector)(function (state) {
    return state.page11_dataCntl.formData;
  });
  var rootSelectorName = (0, _hooks.useAppSelector)(function (state) {
    return state.page11_dataCntl.rootSelectorName;
  });
  var _useState = (0, _react.useState)({
      preCost: 0,
      count: 0,
      total: formData ? formData.cost : 0
    }),
    _useState2 = _slicedToArray(_useState, 2),
    __data = _useState2[0],
    set__Data = _useState2[1];
  // #endregion

  // ___ Если нажать "отменить"
  var cleanData = function cleanData() {
    dispatch((0, _dataCntl.setRootSelectorName)({
      value: null,
      marker: null
    }));
    dispatch((0, _dataCntl.isModalFalse)());
  };

  // ___ paket
  // #region
  // ~ save data from modal
  var saveData = function saveData() {
    var __type = rootSelectorName ? rootSelectorName : "";
    dispatch((0, _dataCntl.setEstimateData)({
      data: {
        id: formData ? formData.id : 0,
        value: formData ? formData.value : "",
        label: formData ? formData.label : "",
        marker: formData ? formData.marker : "",
        prePrice: __data.preCost,
        min: formData ? formData.min : 0,
        cost: __data.total,
        type: __type,
        pay: {
          studio: formData ? formData.pay ? formData.pay.studio : 0 : 0,
          photo: formData ? formData.pay ? formData.pay.photo : 0 : 0,
          makeup: formData ? formData.pay ? formData.pay.makeup : 0 : 0,
          cake: formData ? formData.pay ? formData.pay.cake : 0 : 0,
          decor: formData ? formData.pay ? formData.pay.decor : 0 : 0,
          clean: formData ? formData.pay ? formData.pay.clean : 0 : 0
        }
      }
    }));
    dispatch((0, _dataCntl.setRootSelectorName)({
      value: null,
      marker: null
    }));
    dispatch((0, _dataCntl.isModalFalse)());
  };
  // #endregion

  // ___ rent
  // #region
  // ~ горячие дни выбраны?
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isHotDay = _useState4[0],
    setIsHotDay = _useState4[1];
  var setHotDayCheck = function setHotDayCheck(e) {
    setIsHotDay(e.target.checked);
  };
  // #endregion

  var marker = props.marker;
  switch (marker) {
    case "paket":
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "test11__modal"
      }, /*#__PURE__*/_react.default.createElement(Title, {
        level: 3,
        className: "test11__modal__title"
      }, formData ? formData.value : 0), /*#__PURE__*/_react.default.createElement(_antd.Divider, null), /*#__PURE__*/_react.default.createElement(Text, {
        className: "test11__modal__text"
      }, "\u041F\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0430"), /*#__PURE__*/_react.default.createElement(_antd.Input, {
        type: "number",
        min: 0,
        value: __data.preCost,
        onChange: function onChange(e) {
          var __value = (0, _lodash.parseInt)(e.target.value);
          var data = __data;
          var cost = formData ? formData.cost : 0;
          cost = cost - __value;
          data = _objectSpread(_objectSpread({}, data), {}, {
            preCost: __value
          });
          data = _objectSpread(_objectSpread({}, data), {}, {
            total: cost
          });
          set__Data(data);
        }
      }), /*#__PURE__*/_react.default.createElement(Title, {
        level: 3,
        className: "test11__modal__title"
      }, "\u0418\u0442\u043E\u0433\u043E:", " ", formData ? (formData.cost - __data.preCost).toLocaleString() : 0, " \u20BD"), /*#__PURE__*/_react.default.createElement(_antd.Divider, null), /*#__PURE__*/_react.default.createElement(_antd.Button, {
        type: "primary",
        className: "test11__btn",
        onClick: saveData
      }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"), /*#__PURE__*/_react.default.createElement(_antd.Button, {
        type: "primary",
        danger: true,
        className: "test11__btn",
        onClick: cleanData
      }, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"));
    case "arenda":
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "test11__modal"
      }, /*#__PURE__*/_react.default.createElement(Title, {
        level: 3,
        className: "test11__modal__title"
      }, formData ? formData.value : 0), /*#__PURE__*/_react.default.createElement(_antd.Divider, {
        className: "__divider"
      }), /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
        checked: isHotDay,
        onChange: setHotDayCheck,
        className: "__checkbox"
      }, "HOT TIME"), /*#__PURE__*/_react.default.createElement(_antd.Divider, {
        className: "__divider"
      }), /*#__PURE__*/_react.default.createElement(Text, {
        className: "test11__modal__text"
      }, "\u041F\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0430"), /*#__PURE__*/_react.default.createElement(_antd.Input, {
        type: "number",
        value: __data.preCost,
        onChange: function onChange(e) {
          var data = __data;
          var cost = formData ? formData.cost : 0;
          cost = cost - (0, _lodash.parseInt)(e.target.value);
          data = _objectSpread(_objectSpread({}, data), {}, {
            preCost: (0, _lodash.parseInt)(e.target.value)
          });
          data = _objectSpread(_objectSpread({}, data), {}, {
            total: cost
          });
          set__Data(data);
        }
      }), /*#__PURE__*/_react.default.createElement(Text, {
        className: "test11__modal__text"
      }, "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u043B\u043E\u0442\u043E\u0432 \u043F\u043E 30 \u043C\u0438\u043D\u0443\u0442 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u043C\u0443 \u0432\u0440\u0435\u043C\u0435\u043D\u0438?"), /*#__PURE__*/_react.default.createElement(_antd.Input, {
        type: "number",
        value: __data.count,
        onChange: function onChange(e) {
          var data = __data;
          data = _objectSpread(_objectSpread({}, data), {}, {
            count: (0, _lodash.parseInt)(e.target.value)
          });
          set__Data(data);
        }
      }), /*#__PURE__*/_react.default.createElement(Title, {
        level: 3,
        className: "test11__modal__title"
      }, "\u0418\u0442\u043E\u0433\u043E:", " ", isHotDay ? formData ? formData.halphPrice ? (formData.halphPrice - __data.preCost + formData.halphPrice / 2 * __data.count).toLocaleString() : 0 : 0 : formData ? (formData.cost - __data.preCost + formData.cost / 2 * __data.count).toLocaleString() : 0, " ", "\u20BD"), /*#__PURE__*/_react.default.createElement(_antd.Divider, null), /*#__PURE__*/_react.default.createElement(_antd.Button, {
        type: "primary",
        className: "test11__btn",
        onClick: saveData
      }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"), /*#__PURE__*/_react.default.createElement(_antd.Button, {
        type: "primary",
        danger: true,
        className: "test11__btn",
        onClick: cleanData
      }, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"));
    case "option":
      console.log("option");
      console.log(marker);
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, "option"));
    default:
      return /*#__PURE__*/_react.default.createElement("div", null, "somthing wrong");
  }
}
// #endregion

// ___ списко для вкладок
// #region
var items = [{
  key: "1",
  label: "Опции",
  children: /*#__PURE__*/_react.default.createElement(_options.default, null)
}, {
  key: "2",
  label: "Оплата",
  children: /*#__PURE__*/_react.default.createElement(_price.default, null)
}];
// #endregion

// ___ component Page
// #region ~ component
function Page(props) {
  // ___ redux in data
  // #region
  // ~ корневой селектор для выбора услуги
  var isModal = (0, _hooks.useAppSelector)(function (state) {
    return state.page11_dataCntl.isModal;
  });
  var rootSelectorName = (0, _hooks.useAppSelector)(function (state) {
    return state.page11_dataCntl.rootSelectorName;
  });

  // const dispatch = useAppDispatch();
  // #endregion

  // ___ state
  // #region
  // #endregion

  // ___ return
  // #region ~ return
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "test11__wrapper"
  }, /*#__PURE__*/_react.default.createElement(_tasksBackBtn.default, null), /*#__PURE__*/_react.default.createElement(_antd.Tabs, {
    defaultActiveKey: "1",
    items: items,
    className: "test11__wrapper__tab"
  }), isModal && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(Form, {
    marker: rootSelectorName
  })));
  // #endregion ~ return

  // ___ function
  // #region ~ function
  // #endregion ~ function
}
// #endregion ~ component
// #endregion ~ hlop