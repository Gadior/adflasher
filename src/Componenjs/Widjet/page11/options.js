"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Options;
var _react = _interopRequireDefault(require("react"));
var _antd = require("antd");
var _hooks = require("../../Feature/redux/hooks");
var _dataCntl = require("../../Feature/redux/slices/page11/dataCntl");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// #region ~ hlop
// ___ import
// #region ~ import

// ~ redux

var Title = _antd.Typography.Title,
  Text = _antd.Typography.Text;
// #endregion ~ import

// ___ компонента - выбор типа услуги
function Service(props) {
  // ~ корневой селектор для выбора услуги
  var lvl2Selector = (0, _hooks.useAppSelector)(function (state) {
    return state.page11_dataCntl.lvl2Selector;
  });
  var dispatch = (0, _hooks.useAppDispatch)();
  var handleChange = function handleChange(value, index) {
    dispatch((0, _dataCntl.setlvl2SelectorName)({
      value: index.value,
      marker: index.marker
    }));
  };
  if (!lvl2Selector) {
    return;
  } else {
    return /*#__PURE__*/_react.default.createElement(_antd.Select, {
      className: "text11__option__selector",
      placeholder: "\u0427\u0442\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u043C?",
      onChange: handleChange,
      options: lvl2Selector
    });
  }
}

// ___ component Page
// #region ~ component
function Options(props) {
  // ___ redux in data
  // #region
  // ~ корневой селектор для выбора услуги
  var rootSelector = (0, _hooks.useAppSelector)(function (state) {
    return state.page11_dataCntl.rootSelector;
  });

  // ~ value
  var positionTitle = (0, _hooks.useAppSelector)(function (state) {
    return state.page11_dataCntl.rootSelectorTitle;
  });

  // ~ marker
  var positionMarker = (0, _hooks.useAppSelector)(function (state) {
    return state.page11_dataCntl.rootSelectorName;
  });

  // ~ dispatch
  var dispatch = (0, _hooks.useAppDispatch)();

  // ~ Карточки с данными
  var estimateData = (0, _hooks.useAppSelector)(function (state) {
    return state.page11_dataCntl.estimateData;
  });
  console.log(estimateData);
  // ~ card color style

  // ~ стиль фона карточки, в зависимости от переданого маркера в type объекта
  var styleCard = function styleCard(marker) {
    switch (marker) {
      case "paket":
        return "__color";
      case "arenda":
        return "__color1";
      case "option":
        return "__color2";
      default:
        return "__color";
    }
  };
  // #endregion

  // ___ полная стоимость со всех карточек
  // #region
  var getTotalPrice = function getTotalPrice() {
    var __total = 0;
    return __total;
  };
  // #endregion

  // ___ реакция root селектора
  // #region
  var handleChange = function handleChange(value, index) {
    dispatch((0, _dataCntl.setRootSelectorName)({
      value: index.value,
      marker: index.marker
    }));
  };
  // #endregion

  // ___ return
  // #region ~ return
  if (!rootSelector) {
    return;
  } else {
    return /*#__PURE__*/_react.default.createElement(_antd.Flex, {
      vertical: true,
      gap: 20,
      className: "text11__option"
    }, estimateData.length > 0 && /*#__PURE__*/_react.default.createElement("div", {
      className: "__totalPrice"
    }, "\u0418\u0422\u041E\u0413\u041E ", getTotalPrice().toLocaleString(), " \u20BD"), /*#__PURE__*/_react.default.createElement(_antd.Select, {
      className: "text11__option__selector",
      placeholder: "\u0427\u0442\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u043C?",
      value: positionTitle,
      onChange: handleChange,
      options: rootSelector
    }), positionTitle && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(Service, {
      marker: positionMarker
    })), estimateData.length > 0 && /*#__PURE__*/_react.default.createElement("div", {
      className: "__cards"
    }, estimateData.map(function (item) {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "__card ".concat(styleCard(item.data.type)),
        key: item.id
      }, /*#__PURE__*/_react.default.createElement(Title, {
        level: 4
      }, item.data.value), /*#__PURE__*/_react.default.createElement(_antd.Divider, null), /*#__PURE__*/_react.default.createElement(_antd.Flex, {
        vertical: true
      }, /*#__PURE__*/_react.default.createElement(Text, null, "\u041F\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0430: ", item.data.prePrice), /*#__PURE__*/_react.default.createElement(Text, null, "\u0412\u0440\u0435\u043C\u044F: ", item.data.min)), /*#__PURE__*/_react.default.createElement(_antd.Divider, null), /*#__PURE__*/_react.default.createElement(_antd.Flex, {
        className: "__price",
        justify: "space-between"
      }, /*#__PURE__*/_react.default.createElement(Title, {
        level: 4
      }, "\u0418\u0442\u043E\u0433\u043E: ", item.data.cost.toLocaleString(), " \u20BD")), /*#__PURE__*/_react.default.createElement(_antd.Button, {
        type: "primary",
        danger: true,
        onClick: function onClick() {
          console.log(item.id);
          dispatch((0, _dataCntl.deleteEstimateData)({
            id: item.id
          }));
        }
      }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"));
    })));
  }
  // #endregion ~ return

  // ___ function
  // #region ~ function
  // #endregion ~ function
}
// #endregion ~ component

// #endregion ~ hlop