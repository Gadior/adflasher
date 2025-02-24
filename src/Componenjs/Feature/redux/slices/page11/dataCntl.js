"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setlvl2SelectorName = exports.setRootSelectorName = exports.setEstimateData = exports.isModalFalse = exports.deleteEstimateData = exports.default = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _interface = require("./interface");
var _data = require("./data");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; } // #region ~ hlop
// ~ interface
// ~ interface
// #region ~ счетчик сердец

var initialState = {
  isModal: false,
  rootSelector: _data.rootSelector,
  rootSelectorName: null,
  rootSelectorTitle: null,
  lvl2Selector: [],
  lvl2SelectorName: null,
  lvl2SelectorTitle: null,
  formData: null,
  estimateData: []
};
// #region ~ счетчик сердец

// ~ функции
// #region ~ функции
var page11_dataCntl = (0, _toolkit.createSlice)({
  name: "name",
  initialState: initialState,
  reducers: {
    // #region
    // setRoots: (state, action: PayloadAction<{ rt: type_Root[] }>) => {

    // ___ rootSelector
    setRootSelectorName: function setRootSelectorName(state, action) {
      // --- сохраняем селекторное имя
      state.rootSelectorName = action.payload.marker;
      state.rootSelectorTitle = action.payload.value;
      // --- загружаем данные для селектора второго уровня
      switch (action.payload.marker) {
        case "paket":
          state.lvl2Selector = _data.paketSelector;
          break;
        case "arenda":
          state.lvl2Selector = _data.rentSelector;
          break;
        case "option":
          state.lvl2Selector = _data.optionSelector;
          break;
        default:
          state.lvl2Selector = null;
          break;
      }
      // --- нулим данные для селектора второго уровня
      state.lvl2SelectorName = null;
    },
    // ___ lvl2Selector
    setlvl2SelectorName: function setlvl2SelectorName(state, action) {
      // --- сохраняем селекторное имя второго уровня
      state.lvl2SelectorName = action.payload.marker;
      state.lvl2SelectorTitle = action.payload.value;
      // --- слепок даты
      if (state.lvl2Selector) {
        var __data = state.lvl2Selector.find(function (item) {
          return item.marker === action.payload.marker;
        });
        if (__data) {
          state.formData = __data;
        }
      }
      // --- переключаем флаг модалки
      state.isModal = true;
    },
    // ___ isModal = false
    isModalFalse: function isModalFalse(state) {
      // --- переключаем флаг модалки
      state.isModal = false;
    },
    // ___ estimateData
    // ~ save
    setEstimateData: function setEstimateData(state, action) {
      var randomID = Date.now() - Math.floor(Math.random() * 1000);
      var __row = action.payload.data;
      var __data = {
        id: randomID,
        data: __row
      };
      state.estimateData = [].concat(_toConsumableArray(state.estimateData), [__data]);
    },
    // ~ delete
    deleteEstimateData: function deleteEstimateData(state, action) {
      state.estimateData = state.estimateData.filter(function (item) {
        return item.id !== action.payload.id;
      });
    }
  }
});
// #endregion ~ функции

// ~ экспортируем функции состояний
// - roots
var _page11_dataCntl$acti = page11_dataCntl.actions,
  setEstimateData = exports.setEstimateData = _page11_dataCntl$acti.setEstimateData,
  deleteEstimateData = exports.deleteEstimateData = _page11_dataCntl$acti.deleteEstimateData,
  setRootSelectorName = exports.setRootSelectorName = _page11_dataCntl$acti.setRootSelectorName,
  setlvl2SelectorName = exports.setlvl2SelectorName = _page11_dataCntl$acti.setlvl2SelectorName,
  isModalFalse = exports.isModalFalse = _page11_dataCntl$acti.isModalFalse;

// ~ Экспорт редуьюсера для проводника store
var _default = exports.default = page11_dataCntl.reducer; // #endregion ~ hlop